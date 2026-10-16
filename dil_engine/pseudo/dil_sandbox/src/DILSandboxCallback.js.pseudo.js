// fn e  args=2 vars=2 closure=1 cpool=0 bc=55B file=dil_sandbox/src/DILSandboxCallback
// args: e, a
// closure: t
function {
  Object.defineProperty(e, t, {value: a});
  return e;
}

// fn a  args=3 vars=4 closure=1 cpool=0 bc=40B file=dil_sandbox/src/DILSandboxCallback
// args: e, a, l
// locals: o
// closure: t
function {
  let o;
  o = e[t];
  if (!((undefined === o))) goto L_20;
  // append([], 0, a)
  a;
  goto L_27;
  // [栈深重同步 1 -> 0]
  return (await o(a, l)); // async
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=122B file=dil_sandbox/src/DILSandboxCallback
// args: require, module, exports
// locals: t, e, a
function {
  e = function e;
  a = function a;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.attachDILCallbackResult = undefined;
  exports.invokeDILCallbackWithResult = undefined;
  t = Symbol("DIL callback result");
  exports.attachDILCallbackResult = e;
  exports.invokeDILCallbackWithResult = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxCallback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
