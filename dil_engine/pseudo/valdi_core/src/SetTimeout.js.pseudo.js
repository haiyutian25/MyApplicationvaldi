// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=30B file=valdi_core/src/SetTimeout
// closure: e, i
function {
  try { // catch -> L_11
  e();
  <?>;
  // gosub (finally 块) 23
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 23
  throw <?>;
  i();
  // ret (finally 块) 
  return;
}

// fn i  args=2 vars=3 closure=2 cpool=1 bc=58B file=valdi_core/src/SetTimeout
// args: e, t
// locals: i
// closure: r, o
function {
  let i;
  i = r.protectNativeRefs(o, 0);
  return setTimeout(function <atom:0>, t);   // tail call
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=43B file=valdi_core/src/SetTimeout
// args: e, t
// closure: r
function {
  return r.scheduleWorkItem(e, t, true);   // tail call
}

// fn n  args=3 vars=3 closure=2 cpool=0 bc=13B file=valdi_core/src/SetTimeout
// args: e, t, r
// closure: u, i
function {
  if (!(e)) goto L_8;
  return u(t, r);
  return i(t, r);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=276B file=valdi_core/src/SetTimeout
// args: require, module, exports
// locals: e, t, r, o, i, u, n
function {
  i = function i;
  u = function u;
  n = function n;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setTimeoutUninterruptible = undefined;
  exports.setTimeoutInterruptible = undefined;
  exports.setTimeoutConfigurable = undefined;
  e = require("./ModuleLoaderGlobal");
  t = require("./ValdiRuntimeProvider");
  r = t.getValdiRuntime();
  o = e.getModuleLoader(module).package;
  exports.setTimeoutUninterruptible = i;
  exports.setTimeoutInterruptible = u;
  exports.setTimeoutConfigurable = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/SetTimeout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
