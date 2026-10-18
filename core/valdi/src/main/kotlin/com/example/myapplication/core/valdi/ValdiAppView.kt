package com.example.myapplication.core.valdi

import com.snap.valdi.IValdiRuntime
import com.snap.valdi.views.ValdiGeneratedRootView

/**
 * Hosts the `App` component of our own Valdi module (`myapp_dil`), which renders the DIL
 * document with Valdi's native elements.
 *
 * The component is addressed by path (`App@myapp_dil/src/App`) instead of through the generated
 * `App` class: that keeps this Kotlin side compiling against any AAR, including one exported
 * after the TSX renderer changed.
 */
class ValdiAppView(
    runtime: IValdiRuntime,
    documentJson: String,
) : ValdiGeneratedRootView<Any?, Any?>(
    componentPath = COMPONENT_PATH,
    runtime = runtime,
    viewModel = mapOf("document" to documentJson),
    componentContext = null,
) {
    companion object {
        const val COMPONENT_PATH = "App@myapp_dil/src/App"
    }
}
