// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=204B file=valdi_rxjs/src/scheduler/timeoutProvider
// args: e, t, o
// locals: r
// closure: exports
function {
  o = ...2;
  let r;
  if (((undefined === undefined))) goto L_33;
  r = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_58;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_c;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_63;
  r;
  goto L_84;
  if (!(undefined.setTimeout)) goto L_b8;
  // append([e, t], 2, o)
  o;
  return r.setTimeout.apply(r, [e, t]);
  // append([e, t], 2, o)
  o;
  return setTimeout.apply(undefined, [e, t]);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=141B file=valdi_rxjs/src/scheduler/timeoutProvider
// args: e
// locals: t
// closure: exports
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
  if ((undefined.clearTimeout)) goto L_89;
  return clearTimeout(e);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=2 bc=101B file=valdi_rxjs/src/scheduler/timeoutProvider
// args: require, module, exports
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.timeoutProvider = undefined;
  exports.timeoutProvider = {setTimeout: function <atom:0>, clearTimeout: function <atom:0>, delegate: undefined};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/timeoutProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
