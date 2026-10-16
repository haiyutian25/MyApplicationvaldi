// fn e  args=2 vars=3 closure=1 cpool=0 bc=104B file=dil_text/src/rendering/DILTextColor
// args: e, r
// locals: t
// closure: o
function {
  let t;
  if (!(e)) goto L_2e;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((undefined !== t))) goto L_3b;
  return t;
  if (!((o.resolveDILTextColor(r) == null))) goto L_67;
  o.resolveDILTextColor(r);
  return r;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=dil_text/src/rendering/DILTextColor
// args: require, module, exports
// locals: o, e
function {
  e = function e;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILTextColor = undefined;
  o = require("dil_core/src/colors/DILColor");
  exports.resolveDILTextColor = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextColor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
