// fn e  args=1 vars=4 closure=0 cpool=0 bc=187B file=foundation/src/shuffle
// args: e
// locals: t, o, e#1
function {
  let t;
  // append([], 0, e)
  e;
  t = [];
  let o;
  o = (t.length - 1);
  if (!((o > 0))) goto L_b7;
  let e#1;
  e#1 = Math.floor((Math.random() * (o + 1)));
  goto L_98;
  const _it1 = <?>;
  <done(<catch>)>;
  t[o] = <value(<catch>)>;
  <done(<catch>)>;
  t[e#1] = <value(<catch>)>;
  goto L_ab;
  // [栈深重同步 4 -> 0]
  goto L_7d;
  [t[e#1], t[o]];
  o = <o_new>;
  (o--);
  goto L_15;
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/shuffle
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.shuffleItems = undefined;
  exports.shuffleItems = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/shuffle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
