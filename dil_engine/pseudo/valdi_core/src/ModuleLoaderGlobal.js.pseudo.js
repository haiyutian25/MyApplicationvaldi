// fn e  args=1 vars=2 closure=0 cpool=0 bc=138B file=valdi_core/src/ModuleLoaderGlobal
// args: e
// locals: o
function {
  let o;
  if (!(e.loader)) goto L_4a;
  return e.loader;
  o = globalThis.moduleLoader;
  if (!(!o)) goto L_86;
  throw new Error("The current ModuleLoader is not initialized");
  return o;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_core/src/ModuleLoaderGlobal
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getModuleLoader = undefined;
  exports.getModuleLoader = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ModuleLoaderGlobal
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
