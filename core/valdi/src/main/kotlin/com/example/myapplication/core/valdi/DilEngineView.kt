package com.example.myapplication.core.valdi

import android.content.Context
import com.snap.valdi.IValdiRuntime
import com.snap.valdi.callable.ValdiFunction
import com.snap.valdi.utils.ValdiMarshallable
import com.snap.valdi.utils.ValdiMarshaller
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
    componentContext = componentContextOf(),
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
            // `DILErrorMode` only has two values; `report-and-render-diagnostic` makes the
            // engine render the failure details instead of silently skipping the subtree.
            "errorMode" to "report-and-render-diagnostic",
        )

        /**
         * Context the engine expects from its host.
         *
         * `DILEntryPointComponent` reads these fields off `this.context` (and its error path
         * blows up with "not a function" when the context is null), so an empty-but-shaped
         * object is passed instead of null. Function-valued hooks are deliberately omitted for
         * now: the engine tolerates their absence, but would throw if they were non-functions.
         */
        /**
         * A plain Kotlin `Map` does not survive marshalling: the engine would only see an opaque
         * object and `this.context.<field>` would be `undefined`. Implementing
         * [ValdiMarshallable] pushes a real JS object with the fields the engine reads.
         */
        private fun componentContextOf(): ValdiMarshallable = object : ValdiMarshallable {
            override fun pushToMarshaller(marshaller: ValdiMarshaller): Int {
                Timber.i("DIL componentContext is being marshalled")
                val index = marshaller.pushMap(5)
                marshaller.putMapProperty("supportedClientActions", index) {
                    marshaller.pushUntyped(emptyList<String>())
                }
                marshaller.putMapProperty("textSelectionMenuActions", index) {
                    marshaller.pushUntyped(emptyList<String>())
                }
                marshaller.putMapProperty("nativePopoverPresentationEnabled", index) {
                    marshaller.pushUntyped(false)
                }
                // Called when rendering fails; without it the original error is swallowed and
                // only "not a function" surfaces.
                marshaller.putMapProperty("reportError", index) {
                    marshaller.pushUntyped(hostCallback("reportError"))
                }
                // `DILEntryPointComponent.reportError` (line 531 of the engine) calls this on the
                // host context as soon as the first render finishes; without it every failure
                // degrades into "not a function".
                marshaller.putMapProperty("hostStateEventsReady", index) {
                    marshaller.pushUntyped(hostCallback("hostStateEventsReady"))
                }
                // `DILHostActionsHandler` calls `this.actionHandler.handle(request)` for every
                // client action the document dispatches (DILHostActionsHandler.js:547/571/613).
                marshaller.putMapProperty("actionHandler", index) {
                    marshaller.pushUntyped(actionHandler())
                }
                return index
            }
        }

        /** `{ handle(request) }` — the shape `DILHostActionsHandler` expects. */
        private fun actionHandler(): ValdiMarshallable = object : ValdiMarshallable {
            override fun pushToMarshaller(marshaller: ValdiMarshaller): Int {
                val index = marshaller.pushMap(1)
                marshaller.putMapProperty("handle", index) {
                    marshaller.pushUntyped(hostCallback("actionHandler.handle"))
                }
                return index
            }
        }

        private fun hostCallback(name: String) = object : ValdiFunction {
            override fun perform(marshaller: ValdiMarshaller): Boolean {
                val payload = runCatching { marshaller.getUntyped(0) }.getOrNull()
                Timber.e("DIL %s -> %s", name, payload ?: "<no argument>")
                return false
            }
        }

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
