// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=63B file=foundation/src/functional/transformProperties
// args: e
// locals: t, o, s
// closure: r
function {
  let t;
  null;
  e;
  t = {};
  let o;
  for (const o of e) {
    let s;
    s = r[o];
    if (!(s)) goto L_35;
    t[o] = s(e[o]);
    s(e[o]);
  }
  <catch>;
  return t;
}

// fn r  args=1 vars=1 closure=0 cpool=1 bc=3B file=foundation/src/functional/transformProperties
// args: r
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/functional/transformProperties
// args: require, module, exports
// locals: r
function {
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.transformProperties = undefined;
  exports.transformProperties = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/functional/transformProperties
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
