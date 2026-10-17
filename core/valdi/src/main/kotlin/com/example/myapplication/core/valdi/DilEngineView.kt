package com.example.myapplication.core.valdi

import android.content.Context
import com.snap.valdi.IValdiRuntime
import com.snap.valdi.views.ValdiGeneratedRootView
import timber.log.Timber
import java.io.File

/**
 * Hosts the **real** DIL engine entry component.
 *
 * The component comes from `dil_widgets`, which is loaded at runtime from
 * `assets/dil_widgets.valdimodule` (see [DilEngine]) — nothing is compiled into this app.
 *
 * The document itself is plain JSON read from disk when the view is created, so changing what
 * is rendered never requires rebuilding the AAR or reinstalling the app: push a new `dil.json`
 * into the app's external files dir and reopen the screen.
 */
class DilEngineView(
    runtime: IValdiRuntime,
    documentJson: String,
) : ValdiGeneratedRootView<Any?, Any?>(
    componentPath = COMPONENT_PATH,
    runtime = runtime,
    viewModel = viewModelOf(documentJson),
    componentContext = null,
) {

    companion object {

        /**
         * `ClassName@modulePath`, resolved against the modules loaded by [DilEngine].
         * This is the same component the ChatGPT host renders (`DILEntryPointComponent`).
         */
        const val COMPONENT_PATH = "DILEntryPointComponent@dil_widgets/src/DILEntryPointComponent"

        private const val EXTERNAL_FILE = "dil.json"
        private const val ASSET_FALLBACK = "dil/sample.json"

        private fun viewModelOf(documentJson: String): Map<String, Any?> = mapOf(
            // The component looks at `dilJsonObject` first and falls back to `dilJson`; passing
            // the raw text keeps us from having to build a JsonObject graph on the Kotlin side.
            "dilJson" to documentJson,
            "errorMode" to "report-and-skip-subtree",
        )

        /** Reads the document from the app's external files dir, falling back to a bundled asset. */
        fun readDocument(context: Context): String {
            val external = File(context.getExternalFilesDir(null), EXTERNAL_FILE)
            if (external.isFile) {
                Timber.i("DIL document: %s (%d bytes)", external.absolutePath, external.length())
                return external.readText()
            }
            val text = context.assets.open(ASSET_FALLBACK).bufferedReader().use { it.readText() }
            Timber.i("DIL document: assets/%s (%d bytes)", ASSET_FALLBACK, text.length)
            return text
        }
    }
}
