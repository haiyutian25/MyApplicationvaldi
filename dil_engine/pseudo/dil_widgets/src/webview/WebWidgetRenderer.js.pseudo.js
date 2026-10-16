// fn s  args=1 vars=1 closure=1 cpool=0 bc=43B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e
// closure: exports
function {
  // append([], 0, exports.WEB_WIDGET_LAYOUT_PROPERTIES)
  // append([], exports.WEB_WIDGET_LAYOUT_PROPERTIES, e)
  e;
  return [];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e
function {
  return e.propertyName;
}

// fn c  args=5 vars=9 closure=3 cpool=1 bc=421B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, i, o, n, s
// locals: c, p, l, W
// closure: d, t, r
function {
  let W;
  let l;
  let p;
  let c;
  if (!((s.actionBridgeResolver == null))) goto L_39;
  s.actionBridgeResolver;
  s;
  goto L_3e;
  // [栈深重同步 1 -> 2]
  c = <?>.call(undefined, i, o);
  if (!((c == null))) goto L_4a;
  c;
  goto L_91;
  p = undefined.actions.map(function <atom:0>);
  l = d.createWidgetNode(e, i, o, p);
  if (!(t.isDILTheme(l.theme))) goto L_131;
  goto L_161;
  // [栈深重同步 1 -> 0]
  if (!((r.getDILRenderTheme(n) == null))) goto L_161;
  r.getDILRenderTheme(n);
  W = "light";
  return {actionBridge: c, disableDocumentScroll: s.disableDocumentScroll, node: l, theme: W};
}

// fn p  args=5 vars=5 closure=0 cpool=0 bc=397B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t, r, i, o
function {
  e.begin(t, r, undefined, i);
  e.setViewModelProperty("actionBridge", o.actionBridge);
  e.setViewModelProperty("disableDocumentScroll", o.disableDocumentScroll);
  e.setViewModelProperty("node", o.node);
  e.setViewModelProperty("theme", o.theme);
  e.end(r);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=3 cpool=0 bc=157B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t, r
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, i, n
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(t);
  this.type = e;
  this.options = r;
  this.componentRenderer = new i.DILValdiComponentRenderer(n.WebWidget, t, false);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=192B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t
// locals: r, this
// closure: c, p
function {
  this = this;
  let r;
  r = c(this.type, this.props, e, t, this.options);
  p(this.componentRenderer, e, t, this.type, r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.type = e;
  this.properties = t;
  this.options = r;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=79B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t
// locals: this
// closure: WebWidgetRenderer
function {
  this = this;
  return new WebWidgetRenderer(this.type, e, this.options);
}

// fn l  args=3 vars=3 closure=2 cpool=0 bc=13B file=dil_widgets/src/webview/WebWidgetRenderer
// args: e, t, r
// closure: WebWidgetRendererFactoryImpl, s
function {
  return new WebWidgetRendererFactoryImpl(e, s(t), r);
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=8 bc=471B file=dil_widgets/src/webview/WebWidgetRenderer
// args: require, module, exports
// locals: e, t, r, i, o, d, n, s, c, p, WebWidgetRenderer, <class_fields_init>, WebWidgetRenderer#1, WebWidgetRendererFactoryImpl, <class_fields_init>#1, WebWidgetRendererFactoryImpl#1, l
function {
  s = function s;
  c = function c;
  p = function p;
  l = function l;
  let WebWidgetRendererFactoryImpl#1;
  let WebWidgetRenderer#1;
  let n;
  let d;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WEB_WIDGET_LAYOUT_PROPERTIES = undefined;
  exports.webWidgetRendererProperties = undefined;
  exports.createWebWidgetViewModel = undefined;
  exports.renderWebWidgetViewModel = undefined;
  exports.makeWebWidgetRendererFactory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = require("dil_compiler/src/DILTheme");
  r = require("dil_compiler/src/DILThemeRenderState");
  i = require("dil_compiler/src/DILValdiComponentRenderer");
  o = require("dil_compiler/src/DILTypes");
  d = require("../WidgetNode");
  n = require("./WebWidget");
  exports.WEB_WIDGET_LAYOUT_PROPERTIES = ["aspectRatio", "flex", "height", "maxHeight", "maxSize", "maxWidth", "minHeight", "minSize", "minWidth", "size", "theme", "width"];
  exports.webWidgetRendererProperties = s;
  exports.createWebWidgetViewModel = c;
  exports.renderWebWidgetViewModel = p;
  let WebWidgetRenderer;
  let <class_fields_init>;
  class WebWidgetRenderer extends o.ADILWidgetRendererInternal { ... }
  <proto:WebWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebWidgetRenderer>;
  WebWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  WebWidgetRenderer#1 = function <atom:0>;
  let WebWidgetRendererFactoryImpl;
  let <class_fields_init>#1;
  class WebWidgetRendererFactoryImpl extends undefined { ... }
  <proto:WebWidgetRendererFactoryImpl>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WebWidgetRendererFactoryImpl>;
  WebWidgetRendererFactoryImpl = function <atom:0>;
  // close_loc <class_fields_init>#1
  WebWidgetRendererFactoryImpl#1 = function <atom:0>;
  exports.makeWebWidgetRendererFactory = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/WebWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
