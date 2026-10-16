// fn e  args=2 vars=5 closure=2 cpool=0 bc=521B file=dil_widgets/src/DILClientDefinedWidgetMapping
// args: e, r
// locals: o, i, s
// closure: t, n
function {
  let s;
  let i;
  let o;
  if (((undefined === e))) goto L_18;
  if (!(("string" != typeof r))) goto L_1b;
  return;
  o = e[r];
  if ((!t(o))) goto L_ab;
  if (!((undefined !== o.status))) goto L_80;
  if ((("resolved" !== o.status))) goto L_ab;
  if (!((true === o.isStreaming))) goto L_ae;
  return;
  i = n(o.refIndex);
  if (!((undefined === i))) goto L_dd;
  return;
  s = o.nativeFallback;
  if (!(t(s))) goto L_1f9;
  if ((("chart" === s.type))) goto L_164;
  if (!(("pie-chart" === s.type))) goto L_1f9;
  if (!(t(s.props))) goto L_1f9;
  return {invocationId: r, nativeFallback: {props: s.props, type: s.type}, refIndex: i};
  return {invocationId: r, refIndex: i};
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILClientDefinedWidgetMapping
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILClientDefinedWidgetMapping
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isInteger(e))) goto L_3d;
  if (!((e >= 0))) goto L_3d;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=110B file=dil_widgets/src/DILClientDefinedWidgetMapping
// args: require, module, exports
// locals: e, t, n
function {
  e = function e;
  t = function t;
  n = function n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveClientDefinedWidgetMapping = undefined;
  exports.readContentReferenceIndex = undefined;
  exports.resolveClientDefinedWidgetMapping = e;
  exports.readContentReferenceIndex = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILClientDefinedWidgetMapping
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
