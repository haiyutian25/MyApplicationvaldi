// fn <atom:0>  args=0 vars=10 closure=3 cpool=0 bc=992B file=valdi_core/src/debugging/ErrorComponent
// locals: e, r, t, o, n, i, n#1, s, n#2, this
// closure: g, b, p
function {
  this = this;
  let i;
  let n;
  let o;
  let t;
  let r;
  let e;
  e = this.viewModel.error;
  r = undefined;
  t = undefined;
  o = undefined;
  n = undefined;
  i = false;
  if (!((e instanceof g.CompilerError))) goto L_158;
  let n#1;
  r = "Valdi Compiler Error";
  "Valdi Compiler Error";
  n#1 = e.message.split("
");
  if (!((n#1.length > 1))) goto L_12c;
  t = n#1[0];
  n#1[0];
  o = e.message;
  goto L_154;
  // [栈深重同步 1 -> 0]
  t = e.message;
  e.message;
  goto L_3ab;
  if (!((e instanceof b.RendererError))) goto L_2f3;
  let s;
  r = "Runtime Error: ".concat(e.message);
  "Runtime Error: ".concat(e.message);
  t = e.sourceError.message;
  e.sourceError.message;
  n = e.lastRenderedNode;
  e.lastRenderedNode;
  s = p.symbolicate(e.sourceError);
  if (!(s.stack)) goto L_2ef;
  o = s.stack;
  s.stack;
  i = true;
  true;
  goto L_3ab;
  let n#2;
  r = "Unknown Error";
  "Unknown Error";
  t = e.message;
  e.message;
  n#2 = p.symbolicate(e);
  if (!(n#2.stack)) goto L_3aa;
  o = n#2.stack;
  n#2.stack;
  i = true;
  true;
  this.processedError = {errorMessage: t, errorTitle: r, hasStacktrace: i, consoleMessage: o, lastRenderedNode: n};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=409B file=valdi_core/src/debugging/ErrorComponent
// args: r
// locals: t
// closure: m, e, i, v, s
function {
  let t;
  t = m.getVirtualNodeDataFromRootToChild(r);
  e.beginRender(i, undefined);
  e.endRender();
  e.beginComponent(v.VirtualNodePathDisplayer, s, undefined, undefined);
  e.setViewModelProperty("node", t.root);
  e.setViewModelProperty("focusedNode", t.child);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=198B file=valdi_core/src/debugging/ErrorComponent
// closure: e, a, R
function {
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", R.styles.infoText);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=8 cpool=1 bc=602B file=valdi_core/src/debugging/ErrorComponent
// args: r
// closure: e, a, R, d, y, u, l, c
function {
  e.beginRender(d, undefined);
  y.when(u.hasStacktrace, function <atom:0>);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", R.styles.console);
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", R.styles.consoleText);
  e.setAttributeString("value", r);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=15 cpool=2 bc=1088B file=valdi_core/src/debugging/ErrorComponent
// locals: u, this
// closure: m, e, i, v, s, a, R, d, y, l, c, r, t, o, n
function {
  this = this;
  let u;
  u = this.processedError;
  if (!(u)) goto L_43f;
  e.beginRender(r, undefined);
  e.beginRender(t, undefined);
  e.beginRender(o, undefined);
  e.setAttributeString("font", R.fonts.title);
  e.setAttributeString("color", R.colors.errorText);
  e.setAttributeString("value", u.errorTitle);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", R.styles.infoText);
  e.setAttributeString("value", "'".concat(u.errorMessage, "'"));
  e.endRender();
  y.when(u.lastRenderedNode, function <atom:0>);
  y.when(u.consoleMessage, function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/debugging/ErrorComponent
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=3 vars=25 closure=0 cpool=3 bc=990B file=valdi_core/src/debugging/ErrorComponent
// args: require, module, exports
// locals: e, r, t, o, n, i, s, d, a, l, c, u, m, p, g, b, y, R, v, ErrorComponent, <class_fields_init>, ErrorComponent#1
function {
  let ErrorComponent#1;
  let v;
  let R;
  let y;
  let b;
  let g;
  let p;
  let m;
  let u;
  let c;
  let l;
  let a;
  let d;
  let s;
  let i;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ErrorComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeNodePrototype("view", ["width", "100%", "height", "100%", "backgroundColor", "white", "alignItems", "center", "justifyContent", "center", "padding", 20], "RNghLcRY24iJWCed");
  t = e.makeNodePrototype("scroll", undefined, "wBiY9Kfv2O7pRjXY");
  o = e.makeNodePrototype("label", ["textAlign", "center", "numberOfLines", 0, "marginBottom", 20], "HAa_Mpx-Pwr6bbQE");
  n = e.makeNodePrototype("label", ["textAlign", "center", "numberOfLines", 0], "TrfYuF4qrnTj2lfq");
  i = e.makeNodePrototype("layout", ["height", 20], "VqJ0blq2gQwDF9uy");
  s = e.makeComponentPrototype(undefined, "dLCXIKPJ-pRFX3Ob");
  d = e.makeNodePrototype("layout", ["marginTop", 20], "6TbaaiZaqwh9Xfjo");
  a = e.makeNodePrototype("label", ["value", "Stacktrace:", "marginBottom", 8], "AWeRc1c3SiBKhCpK");
  l = e.makeNodePrototype("view", undefined, "db-iY6P8Q6ia-sZx");
  c = e.makeNodePrototype("label", ["numberOfLines", 0], "iYaQDibtcyMTQaa_");
  u = require("../Component");
  m = require("../IRenderedVirtualNodeData");
  p = require("../Symbolicator");
  g = require("../utils/CompilerError");
  b = require("../utils/RendererError");
  y = require("../utils/When");
  R = require("./Styles");
  v = require("./VirtualNodePathDisplayer");
  let ErrorComponent;
  let <class_fields_init>;
  class ErrorComponent extends u.Component { ... }
  <proto:ErrorComponent>.onViewModelUpdate = function <atom:0>;
  <proto:ErrorComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ErrorComponent>;
  ErrorComponent = function <atom:0>;
  // close_loc <class_fields_init>
  ErrorComponent#1 = function <atom:0>;
  exports.ErrorComponent = ErrorComponent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/ErrorComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
