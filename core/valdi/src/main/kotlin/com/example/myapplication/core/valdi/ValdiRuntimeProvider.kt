package com.example.myapplication.core.valdi

import android.content.Context
import com.snap.valdi.ValdiRuntime
import com.snap.valdi.ValdiRuntimeManager
import com.snap.valdi.support.SupportValdiRuntimeManager
import timber.log.Timber

/**
 * Owns the single [ValdiRuntimeManager] of the app.
 *
 * The Valdi runtime lives in the exported AAR produced by
 * `valdi export android` (see `core/valdi/libs/README.md`): it carries the
 * compiled `myapp_dil` Valdi module, the Valdi runtime itself and the generated
 * classes. Loading the native library is what boots that runtime, so it must
 * happen at least once before any generated class is used.
 */
object ValdiRuntimeProvider {

    /** Must match the `valdi_exported_library(name = ...)` target in the Valdi repo. */
    const val EXPORTED_LIBRARY_NAME: String = "my_application_valdi_export"

    @Volatile
    private var runtimeManager: ValdiRuntimeManager? = null

    /** The main runtime, creating the runtime manager on first use. */
    fun runtime(context: Context): ValdiRuntime = runtimeManager(context).mainRuntime

    fun runtimeManager(context: Context): ValdiRuntimeManager {
        runtimeManager?.let { return it }
        synchronized(this) {
            runtimeManager?.let { return it }
            System.loadLibrary(EXPORTED_LIBRARY_NAME)
            val created = SupportValdiRuntimeManager.createWithSupportLibs(context.applicationContext)
            runtimeManager = created
            Timber.i("Valdi runtime created from %s", EXPORTED_LIBRARY_NAME)
            return created
        }
    }
}
