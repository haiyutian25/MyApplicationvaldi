// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=110B file=dil_widgets/src/webview/WebWidget
// args: e
// closure: g, this
function {
  return g(this.viewModel.actionBridge, this.context, e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=dil_widgets/src/webview/WebWidget
// locals: this, this.active_func, new.target, arguments
// closure: g, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.handleWebViewMessage = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=10 closure=7 cpool=0 bc=2223B file=dil_widgets/src/webview/WebWidget
// locals: r, o, g, l, c, p, W, u, b, this
// closure: d, i, a, s, e, n, t
function {
  this = this;
  let b;
  let u;
  let W;
  let p;
  let c;
  let l;
  let g;
  let o;
  let r;
  r = this.viewModel.node;
  o = d.getStringOrNumber(r.flex);
  g = d.getStringOrNumber(r.aspectRatio);
  l = d.resolveWebWidgetHeight(r, o, g);
  c = d.resolveWebWidgetWidth(r, o, l);
  p = i.resolveDILFlex(o);
  W = d.resolveWebWidgetPayloadNode(r, l);
  u = a(s.createStateBackedWebWidgetNode(W), this.viewModel.actionBridge);
  b = this.createWebContent(u);
  e.beginComponent(n.WebView, t, undefined, undefined);
  e.setViewModelProperty("url", b.url);
  e.setViewModelProperty("aspectRatio", i.resolveDILAspectRatio(g));
  if (!((d.getStringOrNumber(r.minSize) == null))) goto L_3e2;
  d.getStringOrNumber(r.minSize);
  if (!((p == null))) goto L_3c1;
  p;
  goto L_3e2;
  e.setViewModelProperty("flexBasis", undefined.basis);
  if (!((p == null))) goto L_41a;
  p;
  goto L_43b;
  e.setViewModelProperty("flexGrow", undefined.grow);
  if (!((p == null))) goto L_473;
  p;
  goto L_494;
  e.setViewModelProperty("flexShrink", undefined.shrink);
  e.setViewModelProperty("height", l);
  if (!((d.getStringOrNumber(r.maxHeight) == null))) goto L_588;
  d.getStringOrNumber(r.maxHeight);
  e.setViewModelProperty("maxHeight", d.getStringOrNumber(r.maxSize));
  if (!((d.getStringOrNumber(r.maxWidth) == null))) goto L_64c;
  d.getStringOrNumber(r.maxWidth);
  e.setViewModelProperty("maxWidth", d.getStringOrNumber(r.maxSize));
  e.setViewModelProperty("minHeight", d.getStringOrNumber(r.minHeight));
  e.setViewModelProperty("minWidth", d.getStringOrNumber(r.minWidth));
  if (!((undefined === this.viewModel.actionBridge))) goto L_7b0;
  goto L_7d3;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("onMessage", this.handleWebViewMessage);
  e.setViewModelProperty("postLoadJavaScript", b.postLoadJavaScript);
  e.setViewModelProperty("reloadCrossfade", true);
  e.setViewModelProperty("width", c);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=845B file=dil_widgets/src/webview/WebWidget
// args: e
// locals: t, i, this
// closure: l, o, c
function {
  this = this;
  let i;
  let t;
  t = l(e.signature);
  i = o.createDILWidgetWebContent(e.node, this.viewModel.theme, [o.createDILWidgetSetPaddingMessage(0), o.createDILWidgetSetStateMessage(e.state)], {disableDocumentScroll: this.viewModel.disableDocumentScroll, enableNativeBridge: (undefined !== this.viewModel.actionBridge)});
  if (!((this.stableWebContent == null))) goto L_1e7;
  this.stableWebContent;
  goto L_208;
  if (!((undefined.signature !== t))) goto L_24d;
  this.stableWebContent = {signature: t, url: i.url};
  {signature: t, url: i.url};
  return {url: this.stableWebContent.url, postLoadJavaScript: c(i.postLoadJavaScript, o.createDILWidgetUpdateJavaScript(e.state, this.viewModel.theme))};
}

// fn a  args=2 vars=4 closure=0 cpool=0 bc=232B file=dil_widgets/src/webview/WebWidget
// args: e, t
// locals: i, r
function {
  let i;
  if (!((undefined === t))) goto L_a;
  return e;
  null;
  e.node;
  i = {};
  let r;
  for (const r of t.actions) {
    i["$".concat(r.propertyName)] = r.expression;
  }
  null;
  e;
  return {node: i};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=dil_widgets/src/webview/WebWidget
// args: e
// closure: r
function {
  return (e.type === r.type);
}

// fn g  args=3 vars=6 closure=1 cpool=1 bc=359B file=dil_widgets/src/webview/WebWidget
// args: e, t, i
// locals: r, s, n
// closure: o
function {
  let n;
  let s;
  let r;
  r = o.parseDILWidgetActionMessage(i);
  if (!((undefined === r))) goto L_38;
  return;
  if (!((e == null))) goto L_41;
  e;
  goto L_88;
  s = undefined.actions.find(function <atom:0>);
  if (!((undefined === s))) goto L_91;
  return;
  n = s.action(r.localValues);
  if (!((undefined !== n))) goto L_116;
  if (!((t == null))) goto L_ef;
  t;
  goto L_116;
  undefined.dispatchActionPayload(n);
  return {javaScript: o.createDILWidgetActionResponseJavaScript(r.id)};
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=48B file=dil_widgets/src/webview/WebWidget
// args: e
function {
  return JSON.stringify({nodeSignature: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=12B file=dil_widgets/src/webview/WebWidget
// args: e
function {
  if (!((undefined !== e))) goto L_b;
  return (e.length > 0);
}

// fn c  args=1 vars=1 closure=0 cpool=1 bc=83B file=dil_widgets/src/webview/WebWidget
// args: e
function {
  e = ...0;
  return ...0.filter(function <atom:0>).join("
");   // tail call
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=7 bc=409B file=dil_widgets/src/webview/WebWidget
// args: require, module, exports
// locals: e, t, i, r, o, s, n, d, WebWidget, <class_fields_init>, WebWidget#1, a, g, l, c
function {
  a = function a;
  g = function g;
  l = function l;
  c = function c;
  let WebWidget#1;
  let d;
  let n;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WebWidget = undefined;
  exports.withWebWidgetActionExpressions = undefined;
  exports.handleDILWidgetWebMessage = undefined;
  exports.createWebContentSignature = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "K-QIwlY6zuzeOlua");
  i = require("dil_core/src/layout/DILLayout");
  r = require("valdi_core/src/Component");
  o = require("./DILWidgetWebUrl");
  s = require("./StateBackedWebWidgetNode");
  n = require("./WebView");
  d = require("./WebWidgetSizing");
  let WebWidget;
  let <class_fields_init>;
  class WebWidget extends r.Component { ... }
  <proto:WebWidget>.onRender = function <atom:0>;
  <proto:WebWidget>.createWebContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebWidget>;
  WebWidget = function <atom:0>;
  // close_loc <class_fields_init>
  WebWidget#1 = function <atom:0>;
  exports.WebWidget = WebWidget#1;
  exports.withWebWidgetActionExpressions = a;
  exports.handleDILWidgetWebMessage = g;
  exports.createWebContentSignature = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/WebWidget
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
