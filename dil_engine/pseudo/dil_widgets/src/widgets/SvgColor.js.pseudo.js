// fn o  args=2 vars=2 closure=1 cpool=0 bc=31B file=dil_widgets/src/widgets/SvgColor
// args: e, r
// closure: t
function {
  if (!(("none" === e))) goto L_f;
  return "none";
  if (!(("currentColor" === e))) goto L_1a;
  return r;
  return t(e, r);
}

// fn t  args=2 vars=3 closure=2 cpool=0 bc=104B file=dil_widgets/src/widgets/SvgColor
// args: o, t
// locals: s
// closure: e, r
function {
  let s;
  s = e.resolveDILTextColor(o, t);
  if (!(s)) goto L_62;
  if (!((r.getCurrentDILPalette()[s] == null))) goto L_67;
  r.getCurrentDILPalette()[s];
  return s;
  return "rgba(0, 0, 0, 0)";
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=129B file=dil_widgets/src/widgets/SvgColor
// args: require, module, exports
// locals: e, r, o, t
function {
  o = function o;
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveSvgPaint = undefined;
  exports.resolveSvgColor = undefined;
  e = require("dil_core/src/colors/DILColor");
  r = require("dil_core/src/colors/DILColorsInit");
  exports.resolveSvgPaint = o;
  exports.resolveSvgColor = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SvgColor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
