package com.snap.valdi.myapp_dil

import com.snap.valdi.modules.RegisterValdiModule
import com.snap.valdi.modules.myapp_dil.DILInflaterModule
import com.snap.valdi.modules.myapp_dil.DILInflaterModuleFactory
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.util.zip.GZIPInputStream

/**
 * Android implementation of the native module that was restored from ChatGPT's
 * `libopenai_xplat_export.so` (`snap::valdi::modules::dil_compiler::CompressedWidgetStateInflaterModule`).
 *
 * Semantics kept identical to the restored original:
 *  - gzip only (`windowBits = 31` equivalent): the payload must start with `1f 8b`,
 *    zlib/raw-deflate payloads are rejected before touching the decoder;
 *  - the default output cap is `0x1000000` = 16 MiB, and inflating past it fails
 *    instead of returning partial data (the original splits `avail_in` in 64 KiB
 *    chunks and validates against the same cap);
 *  - failures raise, so the TypeScript caller can wrap them in a
 *    `DILDiagnosticError { phase: 'DIL JSON parse' }`.
 *
 * The base classes come from the generated `*_api_kt` target, which is produced
 * from the `@ExportModule` block in
 * `apps/my_application_valdi/src/valdi/myapp_dil/src/DILInflater.d.ts`.
 */
@RegisterValdiModule
class DILInflaterModuleFactoryImpl : DILInflaterModuleFactory() {

    override fun onLoadModule(): DILInflaterModule = object : DILInflaterModule {
        override fun gunzipUtf8(data: ByteArray): String = inflateGzip(data, DEFAULT_LIMIT)

        override fun gunzipUtf8WithLimit(data: ByteArray, limit: Double): String =
            inflateGzip(data, limit.toLong())
    }

    private fun inflateGzip(data: ByteArray, limit: Long): String {
        if (data.size < 2 || data[0] != GZIP_MAGIC_0 || data[1] != GZIP_MAGIC_1) {
            throw IllegalStateException(
                "Failed to initialize gzip inflater: payload is not a gzip stream",
            )
        }
        if (limit <= 0L) {
            throw IllegalStateException("Failed to initialize gzip inflater: invalid limit $limit")
        }
        GZIPInputStream(ByteArrayInputStream(data)).use { stream ->
            val out = ByteArrayOutputStream()
            val buffer = ByteArray(CHUNK_SIZE)
            var total = 0L
            while (true) {
                val read = stream.read(buffer)
                if (read <= 0) {
                    break
                }
                total += read
                if (total > limit) {
                    throw IllegalStateException(
                        "Failed to inflate gzip widget state: output exceeds $limit bytes",
                    )
                }
                out.write(buffer, 0, read)
            }
            return out.toByteArray().toString(Charsets.UTF_8)
        }
    }

    private companion object {
        /** Restored default cap: `0x1000000` = 16 MiB. */
        const val DEFAULT_LIMIT = 0x1000000L

        /** Matches the 64 KiB chunking of the restored `inflate` loop. */
        const val CHUNK_SIZE = 0x10000

        const val GZIP_MAGIC_0: Byte = 0x1f
        const val GZIP_MAGIC_1: Byte = 0x8b.toByte()
    }
}
