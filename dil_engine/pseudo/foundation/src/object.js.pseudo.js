// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=15B file=foundation/src/object
// args: t, r
// closure: e
function {
  t[r] = String(e[r]);
  return t;
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=81B file=foundation/src/object
// args: e
function {
  return Object.keys(e).reduce(function <atom:0>, {});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=50B file=foundation/src/object
// args: r
// closure: t, e
function {
  t.set(r, String(e[r]));
  return;
}

// fn t  args=1 vars=2 closure=0 cpool=1 bc=98B file=foundation/src/object
// args: e
// locals: t
function {
  let t;
  t = new Map();
  Object.keys(e).forEach(function <atom:0>);
  return t;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=foundation/src/object
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.stringifyKeys = undefined;
  exports.stringifyKeysMap = undefined;
  exports.stringifyKeys = e;
  exports.stringifyKeysMap = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/object
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
