// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=152B file=valdi_rxjs/src/scheduler/immediateProvider
// args: e
// locals: i
// closure: exports, t
function {
  e = ...0;
  let i;
  if (((undefined === undefined))) goto L_33;
  i = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_58;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_c;
  // [栈深重同步 1 -> 0]
  if (!((i == null))) goto L_63;
  i;
  goto L_84;
  if ((undefined.setImmediate)) goto L_8b;
  // append([], 0, e)
  e;
  return t.apply(undefined, []);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=139B file=valdi_rxjs/src/scheduler/immediateProvider
// args: e
// locals: t
// closure: exports, i
function {
  let t;
  if (((undefined === undefined))) goto L_2f;
  t = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_54;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8;
  // [栈深重同步 1 -> 0]
  if (!((t == null))) goto L_5f;
  t;
  goto L_80;
  if ((undefined.clearImmediate)) goto L_87;
  return i(e);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=236B file=valdi_rxjs/src/scheduler/immediateProvider
// args: require, module, exports
// locals: e, t, i
function {
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.immediateProvider = undefined;
  e = require("../util/Immediate");
  if (((undefined === undefined))) goto L_a3;
  t = <to_object>(undefined).setImmediate;
  i = <to_object>(undefined).clearImmediate;
  <to_object>(undefined);
  goto L_ca;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_59;
  // [栈深重同步 1 -> 0]
  exports.immediateProvider = {setImmediate: function <atom:0>, clearImmediate: function <atom:0>, delegate: undefined};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/immediateProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
