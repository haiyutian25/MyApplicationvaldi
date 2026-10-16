// fn e  args=1 vars=6 closure=2 cpool=0 bc=440B file=valdi_core/src/utils/ClassNames
// args: o
// locals: t, n, o#1, s, e
// closure: e, s
function {
  o = ...0;
  let t;
  t = [];
  let n;
  for (const n of o) {
    let o#1;
    if ((!n)) continue;
    o#1 = typeof n;
    if ((("string" === o#1))) goto L_3b;
    if (!(("number" === o#1))) goto L_6b;
    t.push(n);
   continue;
    if (!(Array.isArray(n))) goto L_101;
    if (!(n.length)) goto L_101;
    let s;
    s = e.apply(null, n);
    if (!(s)) goto L_fd;
    t.push(s);
   continue;
    if (!(("object" === o#1))) continue;
    let e;
    for (const e of n) {
      if (!(s.call(n, e))) goto L_17d;
      if (!(n[e])) goto L_17d;
      t.push(e);
      // [栈深重同步 3 -> 6]
    }
    <?>;
    // [栈深重同步 5 -> 3]
  }
  return t.join(" ");   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=120B file=valdi_core/src/utils/ClassNames
// args: require, module, exports
// locals: s, e
function {
  e = function e;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.classNames = undefined;
  s = {}.hasOwnProperty;
  exports.classNames = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/ClassNames
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
