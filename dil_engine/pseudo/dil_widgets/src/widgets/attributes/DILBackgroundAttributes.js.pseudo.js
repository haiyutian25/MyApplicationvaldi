// fn t  args=3 vars=5 closure=3 cpool=0 bc=461B file=dil_widgets/src/widgets/attributes/DILBackgroundAttributes
// args: t, s, c
// locals: d, i
// closure: r, e, o
function {
  let i;
  let d;
  d = t.background;
  if (!((undefined === d))) goto L_6b;
  if (!((undefined !== c))) goto L_6a;
  s.backgroundColor = r.resolveDILBackgroundColor(undefined, c);
  return true;
  if (!(("string" == typeof d))) goto L_7d;
  goto L_130;
  // [栈深重同步 1 -> 0]
  if (!((null === d))) goto L_88;
  goto L_130;
  // [栈深重同步 1 -> 0]
  if (!((t.resolvedTheme == null))) goto L_12f;
  t.resolvedTheme;
  if (!((t.theme == null))) goto L_12f;
  t.theme;
  if (!(e.Device.isDarkMode())) goto L_12a;
  goto L_12f;
  // [栈深重同步 2 -> 1]
  i = d["light"];
  if (!((undefined !== i))) goto L_197;
  if (!(r.isDILCSSBackground(i))) goto L_197;
  s.background = o.resolveDILCSSBackgroundForValdi(i);
  return true;
  s.backgroundColor = r.resolveDILBackgroundColor(d, c);
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/attributes/DILBackgroundAttributes
// args: r, o
// closure: t
function {
  return t(r, o);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=217B file=dil_widgets/src/widgets/attributes/DILBackgroundAttributes
// args: require, module, exports
// locals: r, o, e, t
function {
  t = function t;
  let e;
  let o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES = undefined;
  exports.DIL_BACKGROUND_ATTRIBUTES = undefined;
  exports.applyDILBackgroundAttributes = undefined;
  r = require("dil_core/src/colors/DILColor");
  o = require("dil_core/src/colors/DILCSSBackground");
  e = require("valdi_core/src/Device");
  exports.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES = ["background"];
  exports.DIL_BACKGROUND_ATTRIBUTES = {attributeNames: exports.DIL_BACKGROUND_ATTRIBUTE_PROPERTIES, apply: function <atom:0>};
  exports.applyDILBackgroundAttributes = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/attributes/DILBackgroundAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
