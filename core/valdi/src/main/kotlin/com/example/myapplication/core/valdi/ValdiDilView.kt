package com.example.myapplication.core.valdi

import android.content.Context
import android.view.View
import android.widget.FrameLayout
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import timber.log.Timber

/**
 * `true` renders through the DIL engine modules taken from the ChatGPT APK (see [DilEngine] and
 * [DilEngineView]); that path stops at the engine's own host-context requirements, which need a
 * newer Valdi runtime than the exported AAR carries.
 *
 * `false` renders with our own Valdi component ([ValdiAppView] → `myapp_dil/src/App.tsx`), which
 * uses Valdi's native elements and the engine's own node vocabulary.
 */
private const val USE_ENGINE_MODULES = false

/**
 * Renders a DIL document.
 *
 * [documentJson] is the document to render. When it is null the document is read from disk
 * (`getExternalFilesDir(null)/dil.json`, falling back to `assets/dil/sample.json`), so changing
 * what is rendered never needs a rebuild.
 */
@Composable
fun ValdiDilView(
    documentJson: String?,
    modifier: Modifier = Modifier,
    onDilAction: ((String) -> Unit)? = null,
) {
    val context = LocalContext.current
    val latestOnDilAction = rememberUpdatedState(onDilAction)

    key(documentJson) {
        AndroidView(
            modifier = modifier.fillMaxSize(),
            factory = {
                if (USE_ENGINE_MODULES) {
                    ValdiRootViewFactory.create(context, documentJson) { action ->
                        latestOnDilAction.value?.invoke(action)
                    }
                } else {
                    val json = documentJson?.takeIf { it.isNotBlank() }
                        ?: DilEngineView.readDocument(context)
                    val runtime = ValdiRuntimeProvider.runtime(context)
                    ValdiAppView(runtime, json).also {
                        Timber.i("DIL document rendered by myapp_dil (%d bytes)", json.length)
                    }
                }
            },
        )
    }
}

/**
 * Creates the root view of the engine modules: an empty container that receives the engine view
 * once the runtime has finished loading them. Only used when [USE_ENGINE_MODULES] is on.
 */
internal object ValdiRootViewFactory {

    fun create(context: Context, documentJson: String?, onAction: (String) -> Unit): View {
        val runtime = ValdiRuntimeProvider.runtime(context)
        val container = FrameLayout(context)
        DilEngine.load(runtime) { result ->
            if (result.failed.isNotEmpty()) {
                Timber.e("DIL engine modules failed: %s", result.failed)
            } else {
                val json = documentJson?.takeIf { it.isNotBlank() }
                    ?: DilEngineView.readDocument(context)
                container.post {
                    val view = DilEngineView(runtime, json)
                    container.addView(
                        view,
                        FrameLayout.LayoutParams(
                            FrameLayout.LayoutParams.MATCH_PARENT,
                            FrameLayout.LayoutParams.MATCH_PARENT,
                        ),
                    )
                    Timber.i("DIL engine view attached: %s", view.javaClass.name)
                }
            }
        }
        return container
    }
}
