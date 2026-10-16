// fn e  args=3 vars=5 closure=1 cpool=0 bc=162B file=dil_widgets/src/webview/WebWidgetSizing
// args: e, t, o
// locals: r, d
// closure: i
function {
  let d;
  let r;
  r = i(e.width);
  if (!((undefined !== r))) goto L_36;
  return r;
  d = i(e.size);
  if (!((undefined !== d))) goto L_66;
  return d;
  if (!((undefined === t))) goto L_a0;
  if (((undefined !== o))) goto L_98;
  if (!((undefined !== i(e.aspectRatio)))) goto L_a0;
  return "100%";
  return undefined;
}

// fn t  args=3 vars=5 closure=1 cpool=0 bc=151B file=dil_widgets/src/webview/WebWidgetSizing
// args: e, t, o
// locals: r, d
// closure: i
function {
  let d;
  let r;
  r = i(e.height);
  if (!((undefined !== r))) goto L_36;
  return r;
  d = i(e.size);
  if (!((undefined !== d))) goto L_66;
  return d;
  if (!((undefined === t))) goto L_95;
  if (!((undefined === o))) goto L_95;
  return i(e.maxHeight);
  return undefined;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=105B file=dil_widgets/src/webview/WebWidgetSizing
// args: e, t
// closure: i
function {
  if (((undefined === t))) goto L_57;
  if (((undefined !== i(e.height)))) goto L_57;
  if (!((undefined !== i(e.size)))) goto L_5b;
  return e;
  null;
  e;
  return {height: t};
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=25B file=dil_widgets/src/webview/WebWidgetSizing
// args: e
function {
  if ((("string" == typeof e))) goto L_14;
  if (!(("number" == typeof e))) goto L_18;
  return e;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=157B file=dil_widgets/src/webview/WebWidgetSizing
// args: require, module, exports
// locals: e, t, o, i
function {
  e = function e;
  t = function t;
  o = function o;
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveWebWidgetWidth = undefined;
  exports.resolveWebWidgetHeight = undefined;
  exports.resolveWebWidgetPayloadNode = undefined;
  exports.getStringOrNumber = undefined;
  exports.resolveWebWidgetWidth = e;
  exports.resolveWebWidgetHeight = t;
  exports.resolveWebWidgetPayloadNode = o;
  exports.getStringOrNumber = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/WebWidgetSizing
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
