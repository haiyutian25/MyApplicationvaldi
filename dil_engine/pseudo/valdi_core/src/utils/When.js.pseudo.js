// fn e  args=2 vars=2 closure=0 cpool=0 bc=9B file=valdi_core/src/utils/When
// args: e, n
function {
  if (!(e)) goto L_8;
  return n(e);   // tail call
  return;
}

// fn n  args=2 vars=2 closure=0 cpool=0 bc=11B file=valdi_core/src/utils/When
// args: e, n
function {
  if (!((null != e))) goto L_a;
  return n(e);   // tail call
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=valdi_core/src/utils/When
// args: require, module, exports
// locals: e, n
function {
  e = function e;
  n = function n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.when = undefined;
  exports.whenDefined = undefined;
  exports.when = e;
  exports.whenDefined = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/When
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
