package com.example.myapplication.core.valdi

import android.util.Log
import com.snap.valdi.ValdiRuntime

/**
 * Loads the real DIL engine modules at runtime.
 *
 * The modules were extracted from `ChatGPT-com.openai.chatgpt-1.2026.279.apks`
 * (`assets/<module>.valdimodule`) and are shipped as flat assets of this app, which is how
 * Valdi's built-in asset resource loader resolves a module by name.
 *
 * Loading happens through [ValdiRuntime.loadModule] (`IValdiRuntime.loadModule`), the same
 * entry point the ChatGPT host uses for modules that are not compiled into the app bundle.
 *
 * Order matters: a module is loaded only after everything it imports. [MODULES] is ordered
 * leaf first, following the `require(...)` edges found in the extracted sources.
 */
object DilEngine {

    private const val TAG = "DilEngine"

    /**
     * Engine modules in dependency order. The pure-logic ones come first
     * (`dil_renderer`, `dil_charts`, `dil_compiler`, `dil_sandbox` have no host dependencies),
     * then the layers that pull in `oai_core` / `oai_ui` / `oai_platform_services`.
     */
    private val MODULES = listOf(
        // Framework modules (valdi_core / valdi_tsx / coreutils / foundation / json_patch) are
        // NOT listed: they are compiled into the exported AAR and bootstrapped by the runtime
        // itself. Shipping the ChatGPT copies as assets broke that bootstrap
        // ("Fatal init error ... initializeModuleLoader"). The only piece the engine needs and
        // the AAR lacks is `valdi_core/src/ValdiRuntimeProvider`, which is added to the AAR's
        // `valdi_core.valdimodule` by `tools/patch_valdi_core.py` instead.
        "oai_core",
        "oai_ui",
        "oai_platform_services",
        "oai_metrics_service",
        "oai_voice_service",
        "dil_math",
        "dil_cel",
        "dil_core",
        "dil_renderer",
        "dil_text",
        "dil_charts",
        "dil_compiler",
        "dil_sandbox",
        "dil_icon_assets",
        "dil_widgets",
        "dil_generated_components",
    )

    @Volatile
    private var state: State = State.Idle

    sealed interface State {
        data object Idle : State
        data object Loading : State
        data class Done(val loaded: List<String>, val failed: List<String>) : State
    }

    /** Starts loading once; later calls only report the current state. */
    fun load(runtime: ValdiRuntime, onDone: (State.Done) -> Unit = {}) {
        synchronized(this) {
            when (val current = state) {
                is State.Done -> {
                    onDone(current)
                    return
                }
                State.Loading -> return
                State.Idle -> state = State.Loading
            }
        }

        val ok = mutableListOf<String>()
        val failed = mutableListOf<String>()
        val queue = MODULES.toList()
        var index = 0

        // Sequential on purpose: `loadModule` resolves imports eagerly, so a module has to
        // exist before the next one that imports it is requested.
        fun loadNext() {
            if (index >= queue.size) {
                val result = State.Done(ok.toList(), failed.toList())
                state = result
                Log.i(TAG, "done: ok=${ok.size}/${queue.size} failed=$failed")
                onDone(result)
                return
            }
            val name = queue[index++]
            try {
                runtime.loadModule(name) { error ->
                    if (error == null) {
                        ok += name
                        Log.i(TAG, "loadModule($name) ok")
                    } else {
                        failed += name
                        Log.e(TAG, "loadModule($name) failed: $error")
                    }
                    loadNext()
                }
            } catch (t: Throwable) {
                failed += name
                Log.e(TAG, "loadModule($name) threw: $t")
                loadNext()
            }
        }

        loadNext()
    }
}
