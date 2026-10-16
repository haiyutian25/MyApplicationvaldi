// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=179B file=oai_ui/src/components/settings/SettingsSearchHighlight
// closure: this
function {
  if ((this.didReveal)) goto L_b2;
  this.component.renderer.onLayoutComplete(this.reveal);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=178B file=oai_ui/src/components/settings/SettingsSearchHighlight
// closure: this, h
function {
  this.highlight.setAttribute("opacity", h.SettingsAppearance.search.opacity);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=2 bc=1040B file=oai_ui/src/components/settings/SettingsSearchHighlight
// locals: e, t, i, s, e#1
// closure: this, h, r
function {
  let s;
  let i;
  let t;
  let e;
  if ((this.component.isDestroyed())) goto L_78;
  if (!(this.didReveal)) goto L_7b;
  return;
  e = this.row.single();
  t = this.scroll.single();
  if (((undefined === e))) goto L_1b3;
  if (((undefined === t))) goto L_1b3;
  if (((e.frame.height <= 0))) goto L_1b3;
  if (!((t.frame.height <= 0))) goto L_1b6;
  return;
  i = 0;
  s = e;
  if (!((s !== t))) goto L_252;
  let e#1;
  i = (i + s.frame.y);
  (i + s.frame.y);
  e#1 = s.parent;
  if (!((undefined === e#1))) goto L_247;
  return;
  s = e#1;
  e#1;
  goto L_1bc;
  this.didReveal = true;
  t.setAttribute("contentOffsetAnimated", false);
  t.setAttribute("contentOffsetY", Math.max(0, (i - ((t.frame.height - e.frame.height) / 2))));
  this.component.animate({duration: 0.18, curve: r.AnimationCurve.EaseInOut}, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=5 cpool=2 bc=312B file=oai_ui/src/components/settings/SettingsSearchHighlight
// args: e, t, i
// locals: this
// closure: h, r, <class_fields_init>, o, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.component = e;
  this.accessibilityId = i;
  this.scroll = new o.ElementRef();
  this.row = new o.ElementRef();
  this.highlight = new o.ElementRef();
  this.didReveal = false;
  this.scheduleReveal = function <atom:0>;
  this.reveal = function <atom:0>;
  if (!(s.Device.isAndroid())) goto L_12d;
  goto L_12e;
  // [栈深重同步 2 -> 1]
  this.target = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=oai_ui/src/components/settings/SettingsSearchHighlight
// locals: this
function {
  this = this;
  return this.didReveal;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=oai_ui/src/components/settings/SettingsSearchHighlight
// locals: this
function {
  this = this;
  if (!((undefined === this.target))) goto L_2a;
  return undefined;
  return this.scroll;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=oai_ui/src/components/settings/SettingsSearchHighlight
// locals: this
function {
  this = this;
  if (!((undefined === this.target))) goto L_2a;
  return undefined;
  return this.scheduleReveal;
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=0 bc=730B file=oai_ui/src/components/settings/SettingsSearchHighlight
// args: r, s, o
// locals: this
// closure: e, t, a, i
function {
  this = this;
  if (!((this.target === r))) goto L_2d7;
  if ((this.didReveal)) goto L_52;
  if (!(s)) goto L_2d7;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.row);
  e.setAttributeFunction("onLayout", this.scheduleReveal);
  e.setAttributeStyle("style", a.row);
  o();
  e.beginRender(i, undefined);
  e.setAttributeRef(this.highlight);
  e.setAttributeStyle("style", a.highlight);
  e.setAttributeString("accessibilityId", this.accessibilityId);
  e.endRender();
  goto L_2d9;
  // [栈深重同步 1 -> 0]
  o();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=5 bc=732B file=oai_ui/src/components/settings/SettingsSearchHighlight
// args: require, module, exports
// locals: e, t, i, r, s, o, n, h, SettingsSearchHighlight, <class_fields_init>, SettingsSearchHighlight#1, a
function {
  let a;
  let SettingsSearchHighlight#1;
  let h;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsSearchHighlight = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "EcWqTEOs0-20XZoJ");
  i = e.makeNodePrototype("view", undefined, "monrmiuSJEMKtHOQ");
  r = require("valdi_core/src/AnimationOptions");
  s = require("valdi_core/src/Device");
  o = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  h = require("./SettingsTheme");
  let SettingsSearchHighlight;
  let <class_fields_init>;
  class SettingsSearchHighlight extends undefined { ... }
  <proto:SettingsSearchHighlight>.revealed = function <atom:0>;
  <proto:SettingsSearchHighlight>.scrollRef = function <atom:0>;
  <proto:SettingsSearchHighlight>.onLayout = function <atom:0>;
  <proto:SettingsSearchHighlight>.renderTarget = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsSearchHighlight>;
  SettingsSearchHighlight = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsSearchHighlight#1 = function <atom:0>;
  exports.SettingsSearchHighlight = SettingsSearchHighlight#1;
  a = {row: new n.Style({width: "100%"}), highlight: new n.Style({accessibilityNavigation: "ignored", backgroundColor: h.SettingsAppearance.search.color, borderRadius: h.SettingsAppearance.search.radius, bottom: 0, left: 0, opacity: 0, position: "absolute", right: 0, top: 0, touchEnabled: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsSearchHighlight
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
