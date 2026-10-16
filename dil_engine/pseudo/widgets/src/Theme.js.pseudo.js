// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=widgets/src/Theme
// args: e
function {
  e.SYSTEM = 0;
  e[0] = "SYSTEM";
  e.LIGHT = 1;
  e[1] = "LIGHT";
  e.DARK = 2;
  e[2] = "DARK";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=widgets/src/Theme
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/Theme
// args: r
// closure: e
function {
  return e.alwaysLight(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/Theme
// args: r
// closure: e
function {
  return e.alwaysDark(r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=132B file=widgets/src/Theme
// args: e
// closure: r, t, s, i, o
function {
  if (!(r.isVersionAtLeast(286))) goto L_80;
  if (!((e === t.LIGHT))) goto L_55;
  return s;
  if (!((e === t.DARK))) goto L_7f;
  return i;
  e;
  return o;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=4 bc=64B file=widgets/src/Theme
// args: n
// locals: o, s, i
// closure: e, r, t
function {
  let i;
  let s;
  let o;
  o = {applyTo: function <atom:0>};
  s = {applyTo: function <atom:0>};
  i = {applyTo: function <atom:0>};
  n.from = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=145B file=widgets/src/Theme
// args: require, module, exports
// locals: e, r, t, n
function {
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ThemeType = undefined;
  exports.Theme = undefined;
  e = require("./styles/semanticColors");
  r = require("valdi_core/src/CompilerIntrinsics");
  if ((t)) goto L_78;
  t = {};
  exports.ThemeType = {};
  !function <atom:0>({});
  if ((n)) goto L_8f;
  n = {};
  exports.Theme = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/Theme
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
