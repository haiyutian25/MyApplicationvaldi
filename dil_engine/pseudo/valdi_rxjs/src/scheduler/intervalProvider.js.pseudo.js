// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=204B file=valdi_rxjs/src/scheduler/intervalProvider
// args: e, r, t
// locals: l
// closure: exports
function {
  t = ...2;
  let l;
  if (((undefined === undefined))) goto L_33;
  l = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_58;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_c;
  // [栈深重同步 1 -> 0]
  if (!((l == null))) goto L_63;
  l;
  goto L_84;
  if (!(undefined.setInterval)) goto L_b8;
  // append([e, r], 2, t)
  t;
  return l.setInterval.apply(l, [e, r]);
  // append([e, r], 2, t)
  t;
  return setInterval.apply(undefined, [e, r]);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=141B file=valdi_rxjs/src/scheduler/intervalProvider
// args: e
// locals: r
// closure: exports
function {
  let r;
  if (((undefined === undefined))) goto L_2f;
  r = <to_object>(undefined).delegate;
  <to_object>(undefined);
  goto L_54;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_8;
  // [栈深重同步 1 -> 0]
  if (!((r == null))) goto L_5f;
  r;
  goto L_80;
  if ((undefined.clearInterval)) goto L_89;
  return clearInterval(e);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=2 bc=101B file=valdi_rxjs/src/scheduler/intervalProvider
// args: require, module, exports
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.intervalProvider = undefined;
  exports.intervalProvider = {setInterval: function <atom:0>, clearInterval: function <atom:0>, delegate: undefined};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduler/intervalProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
