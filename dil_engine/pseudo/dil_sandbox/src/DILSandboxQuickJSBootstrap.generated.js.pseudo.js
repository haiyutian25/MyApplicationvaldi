// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=30B file=dil_sandbox/src/DILSandboxQuickJSBootstrap.generated
// args: require, module, exports
function {
  if (!(module)) goto L_e;
  module.sourceMapLineOffset = 1;
  exports.DIL_SANDBOX_QUICKJS_BOOTSTRAP_SOURCE = "// Bazel embeds this file as source text. It executes only inside QuickJS.
(() => {
  "use strict";
  const host = globalThis.__dilHostBridge;
  const componentNames = globalThis.__dilComponentNames;
  const allowedGlobalNames = new Set(globalThis.__dilAllowedGlobalNames);
  const fixedTimeMs = globalThis.__dilFixedTimeMs;
  delete globalThis.__dilHostBridge;
  delete globalThis.__dilComponentNames;
  delete globalThis.__dilAllowedGlobalNames;
  delete globalThis.__dilFixedTimeMs;

  // Apply the worker's constructor allowlist in this separate realm before freezing.
  const allowedRegExpProperties = new Set([
    "length",
    "name",
    "prototype",
    "escape",
  ]);
  if (Symbol.species !== undefined) {
    allowedRegExpProperties.add(Symbol.species);
  }
  for (const key of Reflect.ownKeys(RegExp)) {
    if (allowedRegExpProperties.has(key)) {
      continue;
    }
    if (!Reflect.deleteProperty(RegExp, key)) {
      throw new Error(`Cannot remove sandbox RegExp property: ${String(key)}`);
    }
  }

  const privateValues = new WeakMap();
  const getPrivateValue = (owner, name) => privateValues.get(owner)?.[name];
  const setPrivateValue = (owner, name, value) => {
    let values = privateValues.get(owner);
    if (values === undefined) {
      values = Object.create(null);
      privateValues.set(owner, values);
    }
    values[name] = value;
  };

  const freezeGraph = (value) => {
    const seen = new WeakSet();
    const visit = (current) => {
      if (
        (typeof current !== "object" || current === null) &&
        typeof current !== "function"
      ) {
        return current;
      }
      if (seen.has(current)) {
        return current;
      }
      seen.add(current);
      for (const key of Reflect.ownKeys(current)) {
        const descriptor = Object.getOwnPropertyDescriptor(current, key);
        if (descriptor === undefined) {
          continue;
        }
        if ("value" in descriptor) {
          visit(descriptor.value);
        } else {
          visit(descriptor.get);
          visit(descriptor.set);
        }
      }
      try {
        Object.freeze(current);
      } catch (_error) {
        // Some QuickJS intrinsics cannot be frozen; the global-policy pass
        // removes access to anything that remains mutable.
      }
      return current;
    };
    return visit(value);
  };

  const Fragment = freezeGraph({ __openaiDILQuickJSWireKind: "fragment" });
  const wrapCallable = (callable) => {
    let wrapper = getPrivateValue(callable, "callableWrapper");
    if (wrapper !== undefined) {
      return wrapper;
    }
    wrapper = (...args) => {
      try {
        return callable(...args);
      } catch (error) {
        return Promise.reject(error);
      }
    };
    try {
      Object.defineProperty(wrapper, "name", { value: callable.name });
    } catch (_error) {
      // Function names are diagnostic only and may be non-configurable.
    }
    Object.freeze(wrapper);
    setPrivateValue(callable, "callableWrapper", wrapper);
    return wrapper;
  };
  let nextComponentId = 1;
  const componentId = (fn) => {
    let id = getPrivateValue(fn, "componentId");
    if (id === undefined) {
      id = nextComponentId++;
      setPrivateValue(fn, "componentId", id);
    }
    return id;
  };
  const component = (fn) => ({
    __openaiDILQuickJSWireKind: "component",
    fn,
  });
  const encodeRenderable = (value) =>
    typeof value === "function" ? component(value) : value;
  const __dil = freezeGraph({
    Fragment,
    jsx(type, props, ...children) {
      return {
        __openaiDILQuickJSWireKind: "element",
        type: typeof type === "function" ? component(type) : type,
        props,
        children,
      };
    },
  });

  const dependencySymbols = new Map();
  let nextDependencyId = 1;
  const dependencyToken = (value) => {
    if (
      (typeof value === "object" && value !== null) ||
      typeof value === "function"
    ) {
      let token = getPrivateValue(value, "dependencyToken");
      if (token === undefined) {
        token = "\u0000dil-quickjs-dependency:" + nextDependencyId++;
        setPrivateValue(value, "dependencyToken", token);
      }
      return token;
    }
    if (typeof value === "symbol") {
      let token = dependencySymbols.get(value);
      if (token === undefined) {
        token = "\u0000dil-quickjs-symbol:" + nextDependencyId++;
        dependencySymbols.set(value, token);
      }
      return token;
    }
    return value;
  };
  const encodeDependencies = (deps) =>
    deps === undefined ? undefined : deps.map(dependencyToken);

  let appData;
  let constants;
  let hasAppData = false;
  let hasConstants = false;
  const beginRender = () => {
    appData = undefined;
    constants = undefined;
    hasAppData = false;
    hasConstants = false;
  };
  const currentAppData = () => {
    if (!hasAppData) {
      appData = host.useAppData();
      hasAppData = true;
    }
    return appData;
  };
  const currentConstants = () => {
    if (!hasConstants) {
      constants = host.useConstants();
      hasConstants = true;
    }
    return constants;
  };

  const stateEntries = new Map();
  const useState = (hooks, initialState, options) => {
    const initializer = {
      getValue: () =>
        typeof initialState === "function" ? initialState() : initialState,
    };
    const result = hooks.useState(initializer, options);
    let entry = stateEntries.get(result.id);
    let value;
    if (result.guestGetter !== undefined) {
      value = result.guestGetter();
    } else {
      value = result.value;
    }
    if (entry === undefined) {
      entry = { value, getValue: undefined, setter: undefined };
      entry.getValue = () => entry.value;
      entry.setter = (next) => {
        const nextValue = typeof next === "function" ? next(entry.value) : next;
        entry.value = nextValue;
        host.setState(result.id, nextValue, entry.getValue);
      };
      stateEntries.set(result.id, entry);
    } else {
      entry.value = value;
    }
    if (result.guestGetter === undefined) {
      host.rememberState(result.id, value, entry.getValue);
    }
    return [value, entry.setter];
  };

  const messengerFacades = new Map();
  const useMessenger = (hooks, options, htmlView) => {
    const id = hooks.useMessenger(options, htmlView);
    let facade = messengerFacades.get(id);
    if (facade !== undefined) {
      return facade;
    }
    const commandFunctions = new Map();
    const commands = new Proxy(Object.create(null), {
      get(_target, type) {
        if (typeof type !== "string" || type === "then") {
          return undefined;
        }
        let command = commandFunctions.get(type);
        if (command === undefined) {
          command = (data) => host.sendMessengerCommand(id, type, data);
          Object.freeze(command);
          commandFunctions.set(type, command);
        }
        return command;
      },
    });
    facade = freezeGraph({
      commands,
      emit: (type, data) => host.emitMessengerEvent(id, type, data),
      on: (type, handler) => host.onMessengerEvent(id, type, handler),
    });
    messengerFacades.set(id, facade);
    return facade;
  };

  const createDIL = (hooks) => {
    const api = freezeGraph({
      render(value) {
        host.render(encodeRenderable(value));
        return value;
      },
      useAppData(selector) {
        const value = currentAppData();
        return selector === undefined ? value : selector(value);
      },
      useConstants(selector) {
        const value = currentConstants();
        return selector === undefined ? value : selector(value);
      },
      useCallback(callback, deps) {
        return api.useMemo(() => callback, deps);
      },
      useEffect(effect, deps) {
        hooks.useEffect(effect, encodeDependencies(deps));
      },
      useId: () => hooks.useId(),
      useDILMessenger: (options) => useMessenger(hooks, options, false),
      useHtmlViewMessenger: (options) => useMessenger(hooks, options, true),
      useMemo(factory, deps) {
        const getValue = hooks.useMemo(() => {
          const value = factory();
          return () => value;
        }, encodeDependencies(deps));
        return getValue();
      },
      useNow: (enabled, intervalMs) => hooks.useNow(enabled, intervalMs),
      useRef(initialValue) {
        const ref = { current: initialValue };
        const refHandle = hooks.useRef(() => ref);
        return refHandle.current();
      },
      useSpeechSynthesizer(source, logging) {
        return freezeGraph(hooks.useSpeechSynthesizer(source, logging));
      },
      useState(initialState, options) {
        // Forward through this component's host hooks. They select which state
        // it may read, including whether it can name a widgetId.
        return useState(hooks, initialState, options);
      },
      useTheme: () => host.useTheme(),
      useBreakpoint: (breakpoint) => host.useBreakpoint(breakpoint),
      useIsMobile: () => host.useIsMobile(),
    });
    return api;
  };
  const DIL = createDIL(host);

  const NativeDate = globalThis.Date;
  const Date =
    fixedTimeMs === undefined
      ? NativeDate
      : (() => {
          const FixedDate = function (...args) {
            if (new.target === undefined) {
              return new NativeDate(fixedTimeMs).toString();
            }
            return Reflect.construct(
              NativeDate,
              args.length === 0 ? [fixedTimeMs] : args,
              new.target
            );
          };
          Object.setPrototypeOf(FixedDate, NativeDate);
          Object.defineProperty(FixedDate, "prototype", {
            value: NativeDate.prototype,
          });
          Object.defineProperty(FixedDate, "now", {
            value: Object.freeze(() => fixedTimeMs),
          });
          return Object.freeze(FixedDate);
        })();

  const modelGenUI =
    host.modelGenUI === undefined ? undefined : freezeGraph(host.modelGenUI);
  const compileComponent = (source, name) => {
    // Canonical component source names this lexical binding through eval.
    // oxlint-disable-next-line no-unused-vars
    const GenUI = freezeGraph(host.componentGenUI(name));
    // oxlint-disable-next-line no-unused-vars
    const DIL = createDIL(host.componentHooks());
    // This function runs inside QuickJS, where dynamic evaluation is the
    // intended mechanism for loading trusted canonical component source.
    // oxlint-disable-next-line no-eval
    return eval(source);
  };
  for (const name of componentNames) {
    let implementation;
    Object.defineProperty(globalThis, name, {
      configurable: false,
      enumerable: false,
      get() {
        if (implementation === undefined) {
          implementation = compileComponent(host.componentSource(name), name);
          if (typeof implementation !== "function") {
            throw new Error(
              "DIL sandbox component '" +
                name +
                "' did not evaluate to a function."
            );
          }
          Object.defineProperty(implementation, "name", {
            configurable: true,
            value: name,
          });
          freezeGraph(implementation);
        }
        return implementation;
      },
    });
  }

  for (const key of Reflect.ownKeys(globalThis)) {
    if (typeof key === "string" && allowedGlobalNames.has(key)) {
      continue;
    }
    try {
      Reflect.set(globalThis, key, undefined);
    } catch (_error) {
      // The descriptor check below verifies whether removal was required.
    }
    try {
      Reflect.deleteProperty(globalThis, key);
    } catch (_error) {
      // The descriptor check below reports globals that remain accessible.
    }
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    if (
      descriptor !== undefined &&
      (!("value" in descriptor) || descriptor.value !== undefined)
    ) {
      throw new Error("Failed to remove sandbox global '" + String(key) + "'.");
    }
  }
  freezeGraph(globalThis);

  // Build this function with the QuickJS Function constructor so authored
  // source receives only the public lexical bindings. A direct eval created in
  // this bootstrap closure would also be able to name the temporary host bridge
  // and the privileged GenUI facade used by canonical components.
  const evaluateAuthoredSource = Function(
    "DIL",
    "__dil",
    "GenUI",
    "Date",
    "source",
    '"use strict"; return eval(\'"use strict";\\n\' + source);'
  );

  return {
    beginRender,
    encodeRenderable,
    evaluate(source) {
      return evaluateAuthoredSource(DIL, __dil, modelGenUI, Date, source);
    },
    functionId: componentId,
    functionName: (callable) =>
      typeof callable.name === "string" ? callable.name : "",
    wrapCallable,
  };
})();
";
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxQuickJSBootstrap.generated
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
