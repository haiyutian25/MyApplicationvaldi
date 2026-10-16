// fn r  args=1 vars=3 closure=0 cpool=0 bc=114B file=dil_widgets/src/elements_renderer/DILPropNameValidation
// args: e
// locals: r, o
function {
  let r;
  r = Object.create(null);
  let o;
  for (const o of e) {
    r[o] = true;
  }
  return Object.freeze(r);   // tail call
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=135B file=dil_widgets/src/elements_renderer/DILPropNameValidation
// args: r, o
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_86;
  console.warn("Ignoring unsupported DIL v2 prop "".concat(o, "" on element "", r, ""."));
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=154B file=dil_widgets/src/elements_renderer/DILPropNameValidation
// args: require, module, exports
// locals: e, r, o
function {
  r = function r;
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILPropNameAllowlist = undefined;
  exports.warnUnsupportedDILPropName = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  exports.createDILPropNameAllowlist = r;
  exports.warnUnsupportedDILPropName = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILPropNameValidation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
