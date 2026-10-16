// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=oai_ui/src/components/Badge
// args: e
function {
  e.Neutral = "neutral";
  e.Accent = "accent";
  e.Danger = "danger";
  e.Success = "success";
  e.Warning = "warning";
  e.Info = "info";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=353B file=oai_ui/src/components/Badge
// closure: e, o, w, this, p
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", w.indicator);
  if (!((this.viewModel.indicatorColor == null))) goto L_135;
  this.viewModel.indicatorColor;
  e.setAttributeString("backgroundColor", p(this.viewModel.tone));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=541B file=oai_ui/src/components/Badge
// closure: e, o, w, this, p, d, t, i
function {
  if (!((true === this.viewModel.showsIndicator))) goto L_4d;
  function <atom:0>();
  e.beginComponent(d.Text, t, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.value);
  e.setViewModelProperty("color", p(this.viewModel.tone));
  e.setViewModelProperty("size", i.OAITextSize.Caption);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=1 bc=1078B file=oai_ui/src/components/Badge
// locals: this
// closure: e, o, w, p, d, t, i, c, r, n, g, u
function {
  this = this;
  e.beginComponent(c.Row, r, undefined, undefined);
  e.setViewModelProperty("align", n.OAIAlign.Center);
  e.setViewModelProperty("background", g(this.viewModel.tone));
  if (!((true === this.viewModel.showsIndicator))) goto L_1f1;
  goto L_1f2;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("gap", undefined);
  e.setViewModelProperty("padding", {x: i.OAISpacing.One, y: i.OAISpacing.Half});
  e.setViewModelProperty("radius", i.OAIRadius.Pill);
  e.setViewModelProperty("width", u(this.viewModel.value, (true === this.viewModel.showsIndicator)));
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Badge
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

// fn u  args=2 vars=2 closure=0 cpool=0 bc=61B file=oai_ui/src/components/Badge
// args: e, r
function {
  if (!(r)) goto L_3a;
  goto L_3b;
  // [栈深重同步 2 -> 1]
  return (Math.max(56, ((8 * e.length) + 24)) + 0);
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=687B file=oai_ui/src/components/Badge
// args: e
// closure: l, i
function {
  if (!((e == null))) goto L_28;
  e;
  if (!((l.Neutral === l.Accent))) goto L_94;
  return i.OAIColor.ThemeBlueBackground;
  if (!((l.Neutral === l.Danger))) goto L_100;
  return i.OAIColor.BgStatusError;
  if (!((l.Neutral === l.Success))) goto L_16c;
  return i.OAIColor.BgStatusSuccess;
  if (!((l.Neutral === l.Warning))) goto L_1d8;
  return i.OAIColor.BgStatusWarning;
  if (!((l.Neutral === l.Info))) goto L_244;
  return i.OAIColor.ThemePurpleBackground;
  (l.Neutral === l.Neutral);
  return i.OAIColor.BgTertiary;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=687B file=oai_ui/src/components/Badge
// args: e
// closure: l, i
function {
  if (!((e == null))) goto L_28;
  e;
  if (!((l.Neutral === l.Accent))) goto L_94;
  return i.OAIColor.ThemeBlueText;
  if (!((l.Neutral === l.Danger))) goto L_100;
  return i.OAIColor.TextStatusError;
  if (!((l.Neutral === l.Success))) goto L_16c;
  return i.OAIColor.TextStatusSuccess;
  if (!((l.Neutral === l.Warning))) goto L_1d8;
  return i.OAIColor.TextStatusWarning;
  if (!((l.Neutral === l.Info))) goto L_244;
  return i.OAIColor.ThemePurpleText;
  (l.Neutral === l.Neutral);
  return i.OAIColor.TextSecondary;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=6 bc=557B file=oai_ui/src/components/Badge
// args: require, module, exports
// locals: e, r, o, t, n, i, s, a, c, d, l, Badge, <class_fields_init>, Badge#1, u, g, p, w
function {
  u = function u;
  g = function g;
  p = function p;
  let w;
  let Badge#1;
  let d;
  let c;
  let a;
  let s;
  let i;
  let n;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BadgeTone = undefined;
  exports.Badge = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = e.makeComponentPrototype(undefined, "FUl3r-l6H43OzEp-");
  o = e.makeNodePrototype("view", undefined, "4XZXq6asc0W8BJaI");
  t = e.makeComponentPrototype(["align", "center"], "EQV0Bs_dcoFZikIk");
  n = require("oai_core/src/OAIAttributes");
  i = require("oai_core/src/OAITokens");
  s = require("valdi_core/src/Component");
  a = require("valdi_core/src/Style");
  c = require("./Row");
  d = require("./Text");
  if ((l)) goto L_18e;
  l = {};
  exports.BadgeTone = {};
  !function <atom:0>({});
  let Badge;
  let <class_fields_init>;
  class Badge extends s.Component { ... }
  <proto:Badge>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Badge>;
  Badge = function <atom:0>;
  // close_loc <class_fields_init>
  Badge#1 = function <atom:0>;
  exports.Badge = Badge#1;
  w = {indicator: new a.Style({borderRadius: 3, flexShrink: 0, height: 6, width: 6})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Badge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
