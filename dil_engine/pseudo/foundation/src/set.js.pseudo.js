// fn e  args=2 vars=4 closure=0 cpool=0 bc=208B file=foundation/src/set
// args: e, r
// locals: t, s
function {
  let t;
  t = new Set(e);
  let s;
  for (const s of Array.from(r)) {
    if (!(t.has(s))) goto L_98;
    goto L_c2;
    // [栈深重同步 4 -> 3]
    t.add(s);
  }
  return t;
}

// fn r  args=2 vars=3 closure=0 cpool=0 bc=190B file=foundation/src/set
// args: e, r
// locals: t
function {
  if (!((e === r))) goto L_8;
  return true;
  if (!((e.size !== r.size))) goto L_52;
  return false;
  let t;
  for (const t of Array.from(e)) {
    if (!(!r.has(t))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=43B file=foundation/src/set
// args: e
// closure: t, r
function {
  return t.set(e, r(e));   // tail call
}

// fn t  args=2 vars=3 closure=0 cpool=1 bc=57B file=foundation/src/set
// args: e, r
// locals: t
function {
  let t;
  t = new Map();
  e.forEach(function <atom:0>);
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=foundation/src/set
// args: require, module, exports
// locals: e, r, t
function {
  e = function e;
  r = function r;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.symmetricDifference = undefined;
  exports.setsEquivalent = undefined;
  exports.setToMap = undefined;
  exports.symmetricDifference = e;
  exports.setsEquivalent = r;
  exports.setToMap = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/set
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
