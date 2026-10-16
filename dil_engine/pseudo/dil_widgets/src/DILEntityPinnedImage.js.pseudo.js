// fn t  args=1 vars=6 closure=2 cpool=0 bc=701B file=dil_widgets/src/DILEntityPinnedImage
// args: n
// locals: e, r, e#1, t, t#1
// closure: e, r
function {
  t#1 = <special_object 2>;
  if (!(Array.isArray(n))) goto L_58;
  let e;
  for (const e of n) {
    let r;
    r = t#1(e);
    if (!((undefined !== r))) continue;
    return r;
    // [栈深重同步 0 -> 3]
  }
  return;
  if (!(e.isDILRuntimeElement(n))) goto L_2bc;
  if (!(("html-view" !== n.type))) goto L_2bc;
  if ((r)) goto L_df;
  if (!(("pressable" !== n.type))) goto L_2bc;
  if (!(("search-image" === n.type))) goto L_295;
  let t;
  let e#1;
  if (!((n.props == null))) goto L_141;
  n.props;
  goto L_162;
  e#1 = undefined.searchImage;
  if (((null === e#1))) goto L_176;
  if (!(("object" != typeof e#1))) goto L_179;
  return;
  t = e#1;
  if ((("string" != typeof t.url))) goto L_28d;
  if ((("string" != typeof t.content_url))) goto L_28d;
  if ((("string" != typeof t.thumbnail_url))) goto L_28d;
  if ((("string" != typeof t.title))) goto L_28d;
  if (!(("" === t.content_url))) goto L_291;
  if (!(("" === t.thumbnail_url))) goto L_291;
  return undefined;
  return t;
  return t#1(n.children);   // tail call
  return;
}

// fn t  args=1 vars=2 closure=1 cpool=1 bc=179B file=dil_widgets/src/DILEntityPinnedImage
// args: t
// locals: r
// closure: e
function {
  let r;
  if (!((t == null))) goto L_11;
  t;
  goto L_32;
  if (!(("pressable" === undefined.type))) goto L_85;
  if (!((t.props == null))) goto L_63;
  t.props;
  goto L_84;
  r = (true === undefined.capture);
  if (!((undefined === t))) goto L_8d;
  return undefined;
  return function t(t.children);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=dil_widgets/src/DILEntityPinnedImage
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILEntityPinnedImage = undefined;
  e = require("dil_renderer/src/DILElement");
  exports.getDILEntityPinnedImage = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILEntityPinnedImage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
