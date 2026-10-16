// fn <atom:0>  args=0 vars=3 closure=12 cpool=0 bc=1994B file=valdi_ui/src/components/Sheet
// locals: s, l, this
// closure: b, a, e, t, o, y, i, v, r, w, d, n
function {
  this = this;
  let l;
  let s;
  if (!(!this.viewModel.open)) goto L_4f;
  return;
  s = b(a.resolveValdiUITheme());
  l = this.viewModel.accessibilityId;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", l);
  e.setAttributeStyle("style", s.surface);
  e.beginRender(o, undefined);
  if (!((undefined === this.viewModel.title))) goto L_20b;
  goto L_210;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("justifyContent", "space-between");
  e.setAttributeStyle("style", s.header);
  this.renderTitle(s);
  e.beginComponent(y.IconButton, i, undefined, undefined);
  e.setViewModelProperty("accessibilityId", v(l, "close"));
  e.setViewModelProperty("accessibilityLabel", this.viewModel.closeAccessibilityLabel);
  e.setViewModelProperty("iconStyle", s.closeLabel);
  e.setViewModelProperty("onPress", this.viewModel.onDismiss);
  e.setViewModelProperty("style", s.close);
  e.endComponent();
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeString("accessibilityId", v(l, "body"));
  e.setAttributeStyle("style", w.body);
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", s.content);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeString("accessibilityId", v(l, "footer"));
  e.setAttributeStyle("style", w.footer);
  e.renderNamedSlot("footer", this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=353B file=valdi_ui/src/components/Sheet
// args: t
// locals: this
// closure: e, s
function {
  this = this;
  if (!((undefined !== this.viewModel.title))) goto L_160;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", t.title);
  e.setAttributeString("value", this.viewModel.title);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/Sheet
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

// fn b  args=1 vars=2 closure=2 cpool=0 bc=1374B file=valdi_ui/src/components/Sheet
// args: e
// locals: t
// closure: u, c
function {
  let t;
  t = u.get(e);
  if (((undefined !== t))) goto L_559;
  t = {close: new c.Style({backgroundColor: e.colors.mutedSurface}), closeLabel: new c.Style({color: e.colors.text, font: e.typography.label}), content: new c.Style({gap: e.spacing.medium, padding: e.spacing.medium, width: "100%"}), header: new c.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, padding: e.spacing.medium, width: "100%"}), surface: new c.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: "".concat(e.shape.surfaceRadius, " ", e.shape.surfaceRadius, " 0 0"), borderWidth: 1, flexDirection: "column", height: "100%", width: "100%"}), title: new c.Style({color: e.colors.text, font: e.typography.heading})};
  {close: new c.Style({backgroundColor: e.colors.mutedSurface}), closeLabel: new c.Style({color: e.colors.text, font: e.typography.label}), content: new c.Style({gap: e.spacing.medium, padding: e.spacing.medium, width: "100%"}), header: new c.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, padding: e.spacing.medium, width: "100%"}), surface: new c.Style({backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: "".concat(e.shape.surfaceRadius, " ", e.shape.surfaceRadius, " 0 0"), borderWidth: 1, flexDirection: "column", height: "100%", width: "100%"}), title: new c.Style({color: e.colors.text, font: e.typography.heading})};
  u.set(e, t);
  return t;
}

// fn v  args=2 vars=2 closure=0 cpool=0 bc=52B file=valdi_ui/src/components/Sheet
// args: e, t
function {
  if (!((undefined === e))) goto L_7;
  return undefined;
  return "".concat(e, ".", t);
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=5 bc=806B file=valdi_ui/src/components/Sheet
// args: require, module, exports
// locals: e, t, o, i, r, d, n, s, l, c, a, y, Sheet, <class_fields_init>, Sheet#1, u, b, v, w
function {
  b = function b;
  v = function v;
  let w;
  let u;
  let Sheet#1;
  let y;
  let a;
  let c;
  let l;
  let s;
  let n;
  let d;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Sheet = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "CTGxjxeLG5wytcyP");
  o = e.makeNodePrototype("view", undefined, "_YM1DkNA0m_8CHZT");
  i = e.makeComponentPrototype(["symbol", "�"], "evOmtqHi_695aNqR");
  r = e.makeNodePrototype("scroll", undefined, "wNw6rsKJewkUl2vd");
  d = e.makeNodePrototype("view", undefined, "yB0wHioDk69NEp_w");
  n = e.makeNodePrototype("view", undefined, "NLTNP2_-Fqn3NG4Z");
  s = e.makeNodePrototype("label", undefined, "CVpCHD993YYGjqRt");
  l = require("valdi_core/src/Component");
  c = require("valdi_core/src/Style");
  a = require("valdi_ui_theme/src/ValdiUITheme");
  y = require("./IconButton");
  let Sheet;
  let <class_fields_init>;
  class Sheet extends l.Component { ... }
  <proto:Sheet>.onRender = function <atom:0>;
  <proto:Sheet>.renderTitle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Sheet>;
  Sheet = function <atom:0>;
  // close_loc <class_fields_init>
  Sheet#1 = function <atom:0>;
  exports.Sheet = Sheet#1;
  u = new WeakMap();
  w = {body: new c.Style({flexGrow: 1, flexShrink: 1, height: 1, width: "100%"}), footer: new c.Style({flexShrink: 0, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/Sheet
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
