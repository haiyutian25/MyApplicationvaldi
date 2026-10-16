/**
 * @ExportModule
 */

// Native module contract, deliberately identical to the one restored from
// ChatGPT's libopenai_xplat_export.so (`CompressedWidgetStateInflaterModule`):
//
//   gunzipUtf8(BytesView)              -> String
//   gunzipUtf8WithLimit(BytesView,long) -> String
//
// Semantics restored from the binary and verified on device:
//   * the payload MUST be gzip (`windowBits = 31`) - no zlib/raw-deflate headers;
//   * the default output cap is 0x1000000 = 16777216 bytes (16 MiB);
//   * decompression failures raise instead of returning partial data.
//
// The Android implementation lives in
// apps/my_application_valdi/src/android/DILInflaterModuleFactory.kt.

/**
 * Inflates a gzip payload with the default 16 MiB output cap and returns UTF-8 text.
 */
export function gunzipUtf8(data: Uint8Array): string;

/**
 * Inflates a gzip payload with an explicit output cap, in bytes.
 */
export function gunzipUtf8WithLimit(data: Uint8Array, limit: number): string;
