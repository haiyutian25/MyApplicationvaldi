package com.example.myapplication.core.valdi

import android.content.Context
import android.view.View
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.key
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import java.lang.reflect.Modifier
import java.lang.reflect.Proxy
import timber.log.Timber

/**
 * Hosts the Valdi root component (`App` in the `myapp_dil` module) inside Compose.
 *
 * [documentJson] is the `model_dil_v2` document to render; passing a different value
 * recreates the underlying native view. [onDilAction] receives `button` taps coming
 * from the rendered document (the TS `AppContext.onDILAction` callback).
 */
@Composable
fun ValdiDilView(
    documentJson: String?,
    modifier: Modifier = Modifier,
    onDilAction: ((String) -> Unit)? = null,
) {
    val appContext = LocalContext.current.applicationContext
    val latestOnDilAction = rememberUpdatedState(onDilAction)

    key(documentJson) {
        AndroidView(
            modifier = modifier.fillMaxSize(),
            factory = {
                ValdiRootViewFactory.create(appContext, documentJson) { action ->
                    latestOnDilAction.value?.invoke(action)
                }
            },
        )
    }
}

/**
 * Creates the generated Valdi root view.
 *
 * The generated class name depends on the Valdi version and on the module name
 * (`<module_name><Component>`, e.g. `AppView` in `com.snap.modules.myapp_dil`), and the
 * view model / component context are generated interfaces. To stay independent of those
 * details this factory looks the class up by a list of candidate names and talks to it
 * through `java.lang.reflect.Proxy`, falling back to the plain
 * `create(runtime)` overload if the richer signatures are unavailable.
 */
internal object ValdiRootViewFactory {

    private const val TAG = "ValdiRootView"

    private val VIEW_CLASS_CANDIDATES = listOf(
        "com.snap.modules.myapp_dil.AppView",
        "com.snap.modules.myapp_dil.App",
        "com.snap.valdi.modules.myapp_dil.AppView",
        "com.snap.valdi.modules.myapp_dil.App",
        "com.snap.modules.myapp_dil.MyAppDilApp",
        "com.snap.modules.myapp_dil.MyappDilApp",
    )

    private val VIEW_MODEL_CANDIDATES = listOf(
        "com.snap.modules.myapp_dil.AppViewModel",
        "com.snap.valdi.modules.myapp_dil.AppViewModel",
    )

    private val CONTEXT_CANDIDATES = listOf(
        "com.snap.modules.myapp_dil.AppContext",
        "com.snap.valdi.modules.myapp_dil.AppContext",
    )

    fun create(context: Context, documentJson: String?, onAction: (String) -> Unit): View {
        val runtime = ValdiRuntimeProvider.runtime(context)
        val viewClass = firstOf(VIEW_CLASS_CANDIDATES)
            ?: error(
                "找不到 Valdi 生成的根视图类，已尝试: ${VIEW_CLASS_CANDIDATES.joinToString()}。" +
                    "请确认 core/valdi/libs/my_application_valdi_export.aar 已生成并放到" +
                    " core/valdi/libs/，且 Valdi 工程里 my_application_valdi_export 目标包含 myapp_dil 模块。",
            )

        val viewModel = createViewModelProxy(documentJson)
        val componentContext = createContextProxy(onAction)

        // Prefer the richest signature, then degrade gracefully.
        val attempts = buildList<List<Any?>> {
            if (viewModel != null && componentContext != null) {
                add(listOf(runtime, viewModel, componentContext))
            }
            if (componentContext != null) {
                add(listOf(runtime, null, componentContext))
            }
            add(listOf(runtime))
        }

        attempts.forEach { args ->
            invokeCreate(viewClass, args)?.let { view ->
                Timber.i("Valdi root view created via create(%s)", args.joinToString { it?.javaClass?.simpleName ?: "null" })
                return view
            }
        }

        error(
            "无法通过反射创建 Valdi 根视图（${viewClass.name}）。可用 create 重载: " +
                viewClass.methods.filter { it.name == "create" }.joinToString { it.toGenericString() },
        )
    }

    private fun invokeCreate(viewClass: Class<*>, args: List<Any?>): View? {
        viewClass.methods
            .filter { it.name == "create" && Modifier.isStatic(it.modifiers) }
            .forEach { method ->
                try {
                    (method.invoke(null, *args.toTypedArray()) as? View)?.let { return it }
                } catch (error: Throwable) {
                    Timber.d("create overload %s rejected: %s", method.parameterTypes.contentToString(), error.toString())
                }
            }
        return null
    }

    private fun createViewModelProxy(documentJson: String?): Any? {
        val viewModelClass = firstOf(VIEW_MODEL_CANDIDATES) ?: return null
        return Proxy.newProxyInstance(
            viewModelClass.classLoader,
            arrayOf(viewModelClass),
        ) { _, method, _ ->
            when (method.name) {
                "getDocument", "document" -> documentJson
                "toString" -> "ValdiDilViewModel(document=${documentJson?.length ?: 0} chars)"
                "hashCode" -> System.identityHashCode(documentJson)
                "equals" -> false
                else -> defaultFor(method.returnType)
            }
        }
    }

    private fun createContextProxy(onAction: (String) -> Unit): Any? {
        val contextClass = firstOf(CONTEXT_CANDIDATES) ?: return null
        return Proxy.newProxyInstance(
            contextClass.classLoader,
            arrayOf(contextClass),
        ) { _, method, args ->
            when (method.name) {
                "onDILAction", "onDilAction" -> {
                    args?.firstOrNull()?.let { onAction(it.toString()) }
                    null
                }
                "toString" -> "ValdiDilContext"
                "hashCode" -> System.identityHashCode(onAction)
                "equals" -> false
                else -> defaultFor(method.returnType)
            }
        }
    }

    private fun firstOf(classNames: List<String>): Class<*>? {
        classNames.forEach { name ->
            try {
                return Class.forName(name)
            } catch (ignored: ClassNotFoundException) {
                // try the next candidate
            }
        }
        return null
    }

    private fun defaultFor(returnType: Class<*>): Any? = when (returnType) {
        Void.TYPE -> null
        java.lang.Boolean.TYPE -> false
        java.lang.Integer.TYPE -> 0
        java.lang.Long.TYPE -> 0L
        java.lang.Double.TYPE -> 0.0
        java.lang.Float.TYPE -> 0f
        java.lang.Short.TYPE -> 0.toShort()
        java.lang.Byte.TYPE -> 0.toByte()
        java.lang.Character.TYPE -> ' '
        else -> null
    }
}
