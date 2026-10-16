// fn t  args=3 vars=4 closure=0 cpool=0 bc=91B file=foundation/src/map
// args: t, r, e
// locals: o
function {
  let o;
  o = r.get(t);
  if ((o)) goto L_5a;
  r.set(t, e);
  return e;
}

// fn r  args=3 vars=5 closure=0 cpool=0 bc=104B file=foundation/src/map
// args: t, r, e
// locals: o, o#1
function {
  let o;
  o = r.get(t);
  if (!(!o)) goto L_64;
  let o#1;
  o#1 = e();
  r.set(t, o#1);
  return o#1;
  return o;
}

// fn e  args=1 vars=3 closure=0 cpool=0 bc=120B file=foundation/src/map
// args: t
// locals: r, e
function {
  let r;
  r = new Map();
  let e;
  for (const e of Object.keys(t)) {
    r.set(e, t[e]);
  }
  return r;
}

// fn o  args=2 vars=4 closure=0 cpool=0 bc=79B file=foundation/src/map
// args: t, r
// locals: e, o
function {
  let e;
  e = new Map();
  let o;
  for (const o of t) {
    e.set(r(o), o);
  }
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=foundation/src/map
// args: r
// closure: o, t
function {
  return o(r, t);   // tail call
}

// fn n  args=1 vars=1 closure=1 cpool=1 bc=3B file=foundation/src/map
// args: t
// closure: o
function {
  return function <atom:0>;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=foundation/src/map
// args: t, r
// closure: e
function {
  return e.set(r, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=foundation/src/map
// args: t, r
// closure: e
function {
  return e.set(r, t);   // tail call
}

// fn s  args=2 vars=3 closure=0 cpool=2 bc=97B file=foundation/src/map
// args: t, r
// locals: e
function {
  let e;
  e = new Map();
  t.forEach(function <atom:0>);
  r.forEach(function <atom:0>);
  return e;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=211B file=foundation/src/map
// args: require, module, exports
// locals: t, r, e, o, n, s
function {
  t = function t;
  r = function r;
  e = function e;
  o = function o;
  n = function n;
  s = function s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getOrSet = undefined;
  exports.getOrLazySet = undefined;
  exports.fromStringMap = undefined;
  exports.arrayToMap = undefined;
  exports.arrayToMapFn = undefined;
  exports.unionMap = undefined;
  exports.getOrSet = t;
  exports.getOrLazySet = r;
  exports.fromStringMap = e;
  exports.arrayToMap = o;
  exports.arrayToMapFn = n;
  exports.unionMap = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/map
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
