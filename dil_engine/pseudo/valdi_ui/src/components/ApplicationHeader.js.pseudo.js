// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=valdi_ui/src/components/ApplicationHeader
// args: e
function {
  e.Back = 0;
  e[0] = "Back";
  e.Dismiss = 1;
  e[1] = "Dismiss";
  e.Favorite = 2;
  e[2] = "Favorite";
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=527B file=valdi_ui/src/components/ApplicationHeader
// locals: e, t, i
// closure: p, this
function {
  let i;
  let t;
  let e;
  e = p.Device.getDisplayLeftInset();
  t = p.Device.getDisplayRightInset();
  i = p.Device.getDisplayTopInset();
  if (!((e === this.state.leftInset))) goto L_1ca;
  if (!((t === this.state.rightInset))) goto L_1ca;
  if (((i === this.state.topInset))) goto L_20e;
  this.setState({leftInset: e, rightInset: t, topInset: i});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=307B file=valdi_ui/src/components/ApplicationHeader
// locals: this, this.active_func, new.target, arguments
// closure: p, <class_fields_init>
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
  this.state = {leftInset: p.Device.getDisplayLeftInset(), rightInset: p.Device.getDisplayRightInset(), topInset: p.Device.getDisplayTopInset()};
  this.handleInsetsChanged = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=119B file=valdi_ui/src/components/ApplicationHeader
// locals: this
// closure: p
function {
  this = this;
  this.insetObserver = p.Device.observeDisplayInsetChange(this.handleInsetsChanged);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=valdi_ui/src/components/ApplicationHeader
// locals: this
function {
  this = this;
  if (!((this.insetObserver == null))) goto L_2c;
  this.insetObserver;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=9 cpool=0 bc=2025B file=valdi_ui/src/components/ApplicationHeader
// locals: r, l, d, this
// closure: u, M, e, t, i, b, o, n, s
function {
  this = this;
  let d;
  let l;
  let r;
  r = u.resolveValdiUITheme();
  l = M(r);
  if (!((this.viewModel.trailingActions == null))) goto L_ac;
  this.viewModel.trailingActions;
  goto L_ad;
  if (!((undefined.length == null))) goto L_b3;
  undefined.length;
  d = Math.max(56, (44 * 0));
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!(this.shouldIncludeTopInset())) goto L_1e9;
  goto L_1ea;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingTop", (0 + r.spacing.small));
  e.setAttributeStyle("style", this.viewModel.style);
  e.beginRender(i, undefined);
  e.setAttributeNumber("paddingLeft", (r.spacing.medium + this.state.leftInset));
  e.setAttributeNumber("paddingRight", (r.spacing.medium + this.state.rightInset));
  e.setAttributeStyle("style", b.row);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", b.side);
  e.setAttributeNumber("width", d);
  this.renderAction(this.viewModel.leadingAction, "leading");
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", b.center);
  this.renderCenter(l);
  e.endRender();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", b.trailing);
  e.setAttributeNumber("width", d);
  this.renderTrailingActions();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=275B file=valdi_ui/src/components/ApplicationHeader
// closure: e, d, t, this
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", t.subtitle);
  e.setAttributeString("value", this.viewModel.subtitle);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=1 bc=1552B file=valdi_ui/src/components/ApplicationHeader
// args: t
// locals: this
// closure: e, d, r, b, l, w, a, h
function {
  this = this;
  if (!((undefined !== this.viewModel.title))) goto L_252;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.titleColumn);
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", t.title);
  e.setAttributeString("value", this.viewModel.title);
  e.endRender();
  if (((undefined === this.viewModel.subtitle))) goto L_228;
  function <atom:0>();
  e.endRender();
  return;
  if (!((undefined !== this.viewModel.options))) goto L_60f;
  if (!((undefined !== this.viewModel.value))) goto L_60f;
  if (!((undefined !== this.viewModel.onSelectionChange))) goto L_60f;
  e.beginComponent(w.SegmentedControl, a, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.childID("selection"));
  if (!((this.viewModel.material == null))) goto L_494;
  this.viewModel.material;
  e.setViewModelProperty("material", h.ControlMaterial.Standard);
  e.setViewModelProperty("onChange", this.viewModel.onSelectionChange);
  e.setViewModelProperty("options", this.viewModel.options);
  e.setViewModelProperty("value", this.viewModel.value);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=189B file=valdi_ui/src/components/ApplicationHeader
// locals: e, t, this
function {
  this = this;
  let e;
  e = 0;
  let t;
  if (!((this.viewModel.trailingActions == null))) goto L_55;
  this.viewModel.trailingActions;
  for (const t of []) {
    this.renderAction(t, "trailing.".concat(e));
    e = <e_new>;
    (e++);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=1187B file=valdi_ui/src/components/ApplicationHeader
// args: t, i
// locals: this
// closure: e, g, c, h, b
function {
  this = this;
  if (!((undefined !== t))) goto L_4a2;
  if (!((t.accessibilityId == null))) goto L_7f;
  t.accessibilityId;
  e.beginComponent(g.IconButton, c, i, undefined);
  e.setViewModelProperty("accessibilityId", t.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", t.accessibilityLabel);
  e.setViewModelProperty("disabled", t.disabled);
  e.setViewModelProperty("iconStyle", this.viewModel.iconStyle);
  if (!((this.viewModel.material == null))) goto L_297;
  this.viewModel.material;
  e.setViewModelProperty("material", h.ControlMaterial.Standard);
  e.setViewModelProperty("onPress", t.onPress);
  e.setViewModelProperty("selected", t.selected);
  e.setViewModelProperty("src", t.src);
  e.setViewModelProperty("style", b.action);
  e.setViewModelProperty("symbol", this.actionSymbol(t));
  e.setViewModelProperty("tintImage", t.tintImage);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=286B file=valdi_ui/src/components/ApplicationHeader
// args: e
// closure: m
function {
  if (!((undefined !== e.symbol))) goto L_49;
  return e.symbol;
  if (!((e.role === m.Back))) goto L_97;
  return "‹";
  if (!((e.role === m.Dismiss))) goto L_c3;
  return "�";
  if (!((e.role === m.Favorite))) goto L_11c;
  if (!((true === e.selected))) goto L_116;
  return "♥";
  return "♡";
  return "";
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=334B file=valdi_ui/src/components/ApplicationHeader
// locals: e, this
// closure: m
function {
  this = this;
  let e;
  if (!((undefined !== this.viewModel.includeTopInset))) goto L_90;
  return this.viewModel.includeTopInset;
  if (!((this.viewModel.leadingAction == null))) goto L_db;
  this.viewModel.leadingAction;
  goto L_fc;
  e = undefined.role;
  if (!((e !== m.Back))) goto L_14d;
  return (e !== m.Dismiss);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=186B file=valdi_ui/src/components/ApplicationHeader
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.accessibilityId))) goto L_4b;
  return undefined;
  return "".concat(this.viewModel.accessibilityId, ".", e);
}

// fn M  args=1 vars=2 closure=2 cpool=0 bc=510B file=valdi_ui/src/components/ApplicationHeader
// args: e
// locals: t
// closure: I, y
function {
  let t;
  t = I.get(e);
  if (((undefined !== t))) goto L_1f9;
  t = {subtitle: new y.Style({color: e.colors.mutedText, font: e.typography.caption, textAlign: "center"}), title: new y.Style({color: e.colors.text, font: e.typography.label, textAlign: "center"})};
  {subtitle: new y.Style({color: e.colors.mutedText, font: e.typography.caption, textAlign: "center"}), title: new y.Style({color: e.colors.text, font: e.typography.label, textAlign: "center"})};
  I.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=12 bc=1412B file=valdi_ui/src/components/ApplicationHeader
// args: require, module, exports
// locals: e, t, i, o, n, s, r, l, d, a, c, v, p, y, h, u, g, w, m, ApplicationHeader, <class_fields_init>, ApplicationHeader#1, b, I, M
function {
  M = function M;
  let I;
  let b;
  let ApplicationHeader#1;
  let w;
  let g;
  let u;
  let h;
  let y;
  let p;
  let v;
  let c;
  let a;
  let d;
  let l;
  let r;
  let s;
  let n;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ApplicationHeaderActionRole = undefined;
  exports.ApplicationHeader = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "JwgeSmdMu1Lqfg4B");
  i = e.makeNodePrototype("view", undefined, "EVPxwBZFveQKComY");
  o = e.makeNodePrototype("view", undefined, "bmOefo6ApHrZzPf-");
  n = e.makeNodePrototype("view", undefined, "OTlR3y8rr1S1VIRc");
  s = e.makeNodePrototype("view", undefined, "NXeR7vmp01nBwOG8");
  r = e.makeNodePrototype("view", undefined, "12FKZ7QqKCUto92f");
  l = e.makeNodePrototype("label", undefined, "-09SFHlDSVPW3YOW");
  d = e.makeNodePrototype("label", undefined, "HdrWir5aCKPBQ3YB");
  a = e.makeComponentPrototype(undefined, "FQ9Mi4TRqaTXgp8m");
  c = e.makeComponentPrototype(undefined, "gZJkmCLo4tNwVMaD");
  v = require("valdi_core/src/Component");
  p = require("valdi_core/src/Device");
  y = require("valdi_core/src/Style");
  h = require("../ControlMaterial");
  u = require("valdi_ui_theme/src/ValdiUITheme");
  g = require("./IconButton");
  w = require("./SegmentedControl");
  if ((m)) goto L_30a;
  m = {};
  exports.ApplicationHeaderActionRole = {};
  !function <atom:0>({});
  let ApplicationHeader;
  let <class_fields_init>;
  class ApplicationHeader extends v.StatefulComponent { ... }
  <proto:ApplicationHeader>.onCreate = function <atom:0>;
  <proto:ApplicationHeader>.onDestroy = function <atom:0>;
  <proto:ApplicationHeader>.onRender = function <atom:0>;
  <proto:ApplicationHeader>.renderCenter = function <atom:0>;
  <proto:ApplicationHeader>.renderTrailingActions = function <atom:0>;
  <proto:ApplicationHeader>.renderAction = function <atom:0>;
  <proto:ApplicationHeader>.actionSymbol = function <atom:0>;
  <proto:ApplicationHeader>.shouldIncludeTopInset = function <atom:0>;
  <proto:ApplicationHeader>.childID = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ApplicationHeader>;
  ApplicationHeader = function <atom:0>;
  // close_loc <class_fields_init>
  ApplicationHeader#1 = function <atom:0>;
  exports.ApplicationHeader = ApplicationHeader#1;
  b = {action: new y.Style({alignItems: "center", borderRadius: 22, height: 44, justifyContent: "center", width: 44}), center: new y.Style({alignItems: "center", flexGrow: 1, flexShrink: 1, justifyContent: "center", minWidth: 0}), row: new y.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", minHeight: 48, width: "100%"}), side: new y.Style({alignItems: "flex-start", flexShrink: 0}), titleColumn: new y.Style({alignItems: "center", gap: 2}), trailing: new y.Style({alignItems: "center", flexDirection: "row", flexShrink: 0, justifyContent: "flex-end"})};
  I = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/ApplicationHeader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
