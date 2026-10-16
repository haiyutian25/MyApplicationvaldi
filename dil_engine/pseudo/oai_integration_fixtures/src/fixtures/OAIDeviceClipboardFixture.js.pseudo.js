// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=313B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// locals: t
// closure: g, exports, this, e
function {
  try { // catch -> L_a5
  g.Device.copyToClipBoard(exports.OAIClipboardFixtureText);
  this.setState({status: "success:text"});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_138
  if (!(e.isLoggingEnabled)) goto L_102;
  console.warn("The Valdi device clipboard could not copy fixture text.", t);
  this.setState({status: "failure:text"});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=257B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// args: e
// closure: g, u, this
function {
  if (!((undefined !== e))) goto L_ce;
  g.Device.copyImageToClipboard(u.Base64.toByteArray(e));
  goto L_100;
  // [栈深重同步 1 -> 0]
  this.setState({status: "failure:image-unavailable"});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=139B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// args: t
// closure: e, this
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("The Valdi device clipboard could not copy the rendered fixture image.", t);
  this.setState({status: "failure:image"});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=2 bc=345B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// locals: t
// closure: g, u, this, e, v
function {
  let t;
  if (!(!v.isVersionAtLeast(50))) goto L_61;
  this.setState({status: "failure:unavailable"});
  return;
  t = this.imageRef.single();
  if (!((undefined !== t))) goto L_126;
  goto L_158;
  // [栈深重同步 1 -> 0]
  this.setState({status: "failure:image-unavailable"});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=2 bc=152B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// locals: this, this.active_func, new.target, arguments
// closure: g, exports, e, u, v, <class_fields_init>, x
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
  this.state = {status: "idle"};
  this.imageRef = new x.ElementRef();
  this.copyText = function <atom:0>;
  this.copyImage = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=16 cpool=0 bc=2521B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// locals: e, this
// closure: v, t, i, f, o, b, r, p, s, l, y, a, n, d, c, C
function {
  this = this;
  let e;
  if (!(v.isVersionAtLeast(50))) goto L_35;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  e = "unsupported";
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", f.root);
  t.beginRender(o, undefined);
  t.beginComponent(b.Text, r, undefined, undefined);
  t.setViewModelProperty("size", p.OAITextSize.BodySmall);
  t.setViewModelProperty("value", "image:".concat(e));
  t.endComponent();
  t.endRender();
  t.beginRender(s, undefined);
  t.setAttributeRef(this.imageRef);
  t.setAttribute("src", l.default.clipboardFixture);
  t.setAttributeStyle("style", f.image);
  t.endRender();
  t.beginComponent(y.Button, a, undefined, undefined);
  t.setViewModelProperty("block", true);
  t.setViewModelProperty("onPress", this.copyText);
  t.setViewModelProperty("size", p.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(y.Button, n, undefined, undefined);
  t.setViewModelProperty("block", true);
  t.setViewModelProperty("onPress", this.copyImage);
  t.setViewModelProperty("size", p.OAIControlSize.Sm);
  t.setViewModelProperty("variant", y.ButtonVariant.Secondary);
  t.endComponent();
  t.beginRender(d, undefined);
  t.setAttributeString("accessibilityLabel", "Clipboard fixture status: ".concat(this.state.status));
  t.beginComponent(b.Text, c, undefined, undefined);
  t.setViewModelProperty("size", p.OAITextSize.Body);
  t.setViewModelProperty("tone", C(this.state.status));
  t.setViewModelProperty("value", this.state.status);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn C  args=1 vars=1 closure=1 cpool=0 bc=298B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// args: e
// closure: b
function {
  if (!(e.startsWith("success:"))) goto L_72;
  return b.TextTone.Success;
  if (!(e.startsWith("failure:"))) goto L_e4;
  return b.TextTone.Danger;
  return b.TextTone.Secondary;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=3 bc=1143B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// args: require, module, exports
// locals: e, t, i, o, r, s, a, n, d, c, l, u, p, y, b, v, m, g, x, h, OAIDeviceClipboardFixture, <class_fields_init>, OAIDeviceClipboardFixture#1, C, f
function {
  C = function C;
  let f;
  let OAIDeviceClipboardFixture#1;
  let h;
  let x;
  let g;
  let m;
  let v;
  let b;
  let y;
  let p;
  let u;
  let l;
  let c;
  let d;
  let n;
  let a;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIClipboardFixtureText = undefined;
  exports.OAIDeviceClipboardFixture = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "odriiPySTNZE_6Li");
  o = t.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.device.clipboard.image_support"], "D2aThvog16eDg6eE");
  r = t.makeComponentPrototype(undefined, "Bk7ycIzD05BYEfch");
  s = t.makeNodePrototype("image", ["accessibilityId", "oai_integration_fixture.device.clipboard.image", "accessibilityLabel", "Clipboard fixture image"], "N1f5oYBD323nH3p0");
  a = t.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.device.clipboard.copy_text", "label", "Copy fixture text"], "CGkfRsuC5NnJS-_E");
  n = t.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.device.clipboard.copy_image", "label", "Copy fixture image"], "jLWNRuDGBqRi9ChF");
  d = t.makeNodePrototype("view", ["accessibilityId", "oai_integration_fixture.device.clipboard.status"], "2DIJIxSyhFi2jPOZ");
  c = t.makeComponentPrototype(undefined, "NaeInBTv-QxD0Ddh");
  l = require("oai_integration_fixtures/res");
  u = require("coreutils/src/Base64");
  p = require("oai_core/src/OAITokens");
  y = require("oai_ui/src/components/Button");
  b = require("oai_ui/src/components/Text");
  v = require("valdi_core/src/CompilerIntrinsics");
  m = require("valdi_core/src/Component");
  g = require("valdi_core/src/Device");
  x = require("valdi_core/src/ElementRef");
  h = require("valdi_core/src/Style");
  exports.OAIClipboardFixtureText = "Valdi clipboard integration fixture";
  let OAIDeviceClipboardFixture;
  let <class_fields_init>;
  class OAIDeviceClipboardFixture extends m.StatefulComponent { ... }
  <proto:OAIDeviceClipboardFixture>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIDeviceClipboardFixture>;
  OAIDeviceClipboardFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAIDeviceClipboardFixture#1 = function <atom:0>;
  exports.OAIDeviceClipboardFixture = OAIDeviceClipboardFixture#1;
  f = {root: new h.Style({flexDirection: "column", gap: 12, width: "100%"}), image: new h.Style({accessibilityCategory: "image", backgroundColor: p.OAIColor.BgTertiary, borderRadius: 12, height: 96, objectFit: "cover", width: 144})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAIDeviceClipboardFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
