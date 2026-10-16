// fn n  args=2 vars=2 closure=2 cpool=0 bc=48B file=dil_cel/src/utils/Warnings
// args: e, n
// closure: r, i
function {
  if (!((n == null))) goto L_2c;
  n;
  r.set(e, i);
  return;
}

// fn t  args=2 vars=3 closure=2 cpool=0 bc=145B file=dil_cel/src/utils/Warnings
// args: e, n
// locals: t
// closure: o, r
function {
  let t;
  t = o(n);
  if (!((r.get(e) == null))) goto L_37;
  r.get(e);
  goto L_90;
  undefined("DIL CEL Runtime warning", {error_message: t.message, error_name: t.name});
  return;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=28B file=dil_cel/src/utils/Warnings
// args: e
function {
  if (!((e instanceof Error))) goto L_b;
  return e;
  return new Error(String(e));
}

// fn i  args=2 vars=2 closure=1 cpool=0 bc=117B file=dil_cel/src/utils/Warnings
// args: r, n
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_74;
  console.warn(r, n.error_message);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=175B file=dil_cel/src/utils/Warnings
// args: require, module, exports
// locals: e, r, n, t, o, i
function {
  n = function n;
  t = function t;
  o = function o;
  i = function i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setDILCELWarningReporter = undefined;
  exports.emitWarning = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = new WeakMap();
  exports.setDILCELWarningReporter = n;
  exports.emitWarning = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/Warnings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
