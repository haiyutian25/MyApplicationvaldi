// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=59B file=dil_core/src/colors/DILCSSBackground
// args: e, r
// closure: o
function {
  return "linear-gradient(".concat(o((Number(r) + 180)), "deg,");   // tail call
}

// fn n  args=1 vars=1 closure=4 cpool=1 bc=210B file=dil_core/src/colors/DILCSSBackground
// args: n
// closure: o, e, t, r
function {
  if (!(!n.startsWith("linear-gradient("))) goto L_2f;
  return n;
  if (!(e.Device.isWeb())) goto L_7c;
  goto L_a9;
  // [栈深重同步 1 -> 0]
  return n.replace(t, "$1").replace(r, function <atom:0>);   // tail call
}

// fn i  args=1 vars=2 closure=0 cpool=0 bc=28B file=dil_core/src/colors/DILCSSBackground
// args: e
// locals: r
function {
  let r;
  r = (e % 360);
  if (!((r < 0))) goto L_18;
  return (r + 360);
  return r;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=54B file=dil_core/src/colors/DILCSSBackground
// args: e
// closure: i
function {
  return i((45 * Math.round((i(e) / 45))));   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=119B file=dil_core/src/colors/DILCSSBackground
// args: require, module, exports
// locals: e, r, t, n, i, o
function {
  n = function n;
  i = function i;
  o = function o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILCSSBackgroundForValdi = undefined;
  e = require("valdi_core/src/Device");
  r = new RegExp("^linear-gradient\\(\\s*(-?(?:\\d+|\\d*\\.\\d+))deg\\s*,");
  t = new RegExp("var\\(\\s*--([a-z0-9-]+)\\s*\\)");
  exports.resolveDILCSSBackgroundForValdi = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/colors/DILCSSBackground
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
