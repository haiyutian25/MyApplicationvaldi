// fn <atom:0>  args=0 vars=13 closure=8 cpool=0 bc=2275B file=valdi_ui/src/components/MaterialSurface
// locals: o, l, u, b, c, v, y, S, g, h, m, f, this
// closure: a, n, e, t, r, d, i, s
function {
  this = this;
  let f;
  let m;
  let h;
  let g;
  let S;
  let y;
  let v;
  let c;
  let b;
  let u;
  let l;
  let o;
  if (((undefined === undefined))) goto L_1c3;
  o = <to_object>(undefined).__nativeElementType;
  l = <to_object>(undefined).background;
  u = <to_object>(undefined).backgroundColor;
  b = <to_object>(undefined).children;
  c = <to_object>(undefined).controlRef;
  v = <to_object>(undefined).interactive;
  y = <to_object>(undefined).material;
  S = <to_object>(undefined).materialTint;
  g = <to_object>(undefined).style;
  h = {};
  <to_object>(undefined);
  {__nativeElementType: null, background: null, backgroundColor: null, children: null, controlRef: null, interactive: null, material: null, materialTint: null, style: null};
  goto L_1ea;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_2f;
  // [栈深重同步 1 -> 0]
  m = a.resolveControlMaterial(y);
  if (!((m === a.ControlMaterial.Blur))) goto L_489;
  if (!(n.isNativeIOS())) goto L_489;
  e.beginRender(t, undefined);
  e.setAttributeRef(c);
  e.setAttributes(h);
  e.setAttributeStyle("style", g);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", d.blur);
  e.setAttributeNumber("borderRadius", this.resolveCornerRadius());
  e.endRender();
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
  if ((!a.isGlassMaterial(m))) goto L_4dc;
  if (!(!n.isNativeIOS())) goto L_646;
  e.beginRender(i, undefined);
  e.setAttributeRef(c);
  e.setAttributes(h);
  e.setAttributeString("background", l);
  e.setAttributeString("backgroundColor", u);
  e.setAttributeStyle("style", g);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
  if (!((S == null))) goto L_6a3;
  S;
  if (!((u == null))) goto L_6a3;
  u;
  if (!((g == null))) goto L_661;
  g;
  goto L_6a3;
  f = undefined.attributes.backgroundColor;
  e.beginRender(s, undefined);
  e.setAttributeRef(c);
  e.setAttributes(h);
  e.setAttributeNumber("glassCornerRadius", this.resolveCornerRadius());
  if (!((true === v))) goto L_7d5;
  e.setAttribute("glassInteractive", a.supportsInteractiveGlass(m));
  e.setAttribute("glassStyle", "regular");
  e.setAttributeString("glassTintColor", f);
  e.setAttributeStyle("style", this.resolveGlassStyle(g));
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=240B file=valdi_ui/src/components/MaterialSurface
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.viewModel.borderRadius == null))) goto L_dd;
  this.viewModel.borderRadius;
  if (!((this.viewModel.style == null))) goto L_9b;
  this.viewModel.style;
  goto L_dd;
  e = undefined.attributes.borderRadius;
  if (!(("number" == typeof e))) goto L_ee;
  return e;
  return undefined;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=499B file=valdi_ui/src/components/MaterialSurface
// args: e
// locals: t, r, i, this
// closure: d, l
function {
  this = this;
  if (!((undefined === e))) goto L_2c;
  return d.glass;
  if (((this.cachedInputStyle !== e))) goto L_78;
  if (!((undefined === this.cachedGlassStyle))) goto L_1d0;
  let i;
  let r;
  let t;
  this.cachedInputStyle = e;
  if (((undefined === undefined))) goto L_f7;
  t = <to_object>(undefined).__nativeElementType;
  r = <to_object>(undefined).ref;
  i = {};
  <to_object>(undefined);
  {__nativeElementType: null, ref: null};
  goto L_11d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_96;
  // [栈深重同步 1 -> 0]
  null;
  i;
  this.cachedGlassStyle = l.Style.merge(d.glass, new l.Style({background: undefined, backgroundColor: undefined}));
  return this.cachedGlassStyle;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/MaterialSurface
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=4 bc=663B file=valdi_ui/src/components/MaterialSurface
// args: require, module, exports
// locals: e, t, r, i, s, o, l, a, n, MaterialSurface, <class_fields_init>, MaterialSurface#1, d
function {
  let d;
  let MaterialSurface#1;
  let n;
  let a;
  let l;
  let o;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MaterialSurface = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "d7alnqeNAJxiXf-r");
  r = e.makeNodePrototype("blur", undefined, "L9GiiyIE4wAg-aGh");
  i = e.makeNodePrototype("view", undefined, "8lQwT6043Ibnm3sy");
  s = e.makeNodePrototype("glass", undefined, "QQOaV6hb7hiqTfPd");
  o = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  a = require("../ControlMaterial");
  n = require("../Platform");
  let MaterialSurface;
  let <class_fields_init>;
  class MaterialSurface extends o.Component { ... }
  <proto:MaterialSurface>.onRender = function <atom:0>;
  <proto:MaterialSurface>.resolveCornerRadius = function <atom:0>;
  <proto:MaterialSurface>.resolveGlassStyle = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MaterialSurface>;
  MaterialSurface = function <atom:0>;
  // close_loc <class_fields_init>
  MaterialSurface#1 = function <atom:0>;
  exports.MaterialSurface = MaterialSurface#1;
  d = {blur: new l.Style({blurStyle: "systemMaterial", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, touchEnabled: false}), glass: new l.Style({alignItems: "stretch", flexDirection: "column", flexShrink: 0, overflow: "visible"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/MaterialSurface
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
