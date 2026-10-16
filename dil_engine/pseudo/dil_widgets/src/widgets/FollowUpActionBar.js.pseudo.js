// fn <atom:0>  args=0 vars=2 closure=8 cpool=0 bc=1028B file=dil_widgets/src/widgets/FollowUpActionBar
// locals: d, this
// closure: g, e, t, h, o, i, n, r
function {
  this = this;
  let d;
  d = g(this.viewModel.actions);
  if (!((0 !== d.length))) goto L_403;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.root);
  e.setAttributes(this.baseViewAttributes);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", h.dividerPadding);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", h.divider);
  e.endRender();
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", h.actionPadding);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", h.actionGroup);
  this.renderActions(d);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=345B file=dil_widgets/src/widgets/FollowUpActionBar
// args: t
// locals: o, i, this
// closure: e, d, h
function {
  this = this;
  let o;
  o = Math.min(t.length, 3);
  let i;
  i = 0;
  if (!((i < o))) goto L_158;
  if (!((i > 0))) goto L_11e;
  e.beginRender(d, "divider-".concat(i));
  e.setAttributeStyle("style", h.actionDivider);
  e.endRender();
  this.renderAction(t[i], i);
  i = <i_new>;
  (i++);
  goto L_37;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=0 bc=651B file=dil_widgets/src/widgets/FollowUpActionBar
// args: t, o
// locals: this
// closure: e, l, h, p, a, v
function {
  this = this;
  e.beginRender(l, "action-".concat(o));
  e.setAttributeStyle("style", h.actionSlot);
  e.beginComponent(p.Button, a, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("iconStart", t.icon);
  e.setViewModelProperty("label", t.label);
  e.setViewModelProperty("onClickAction", v(t, this.viewModel.contentReferenceType));
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/FollowUpActionBar
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

// fn g  args=1 vars=4 closure=1 cpool=0 bc=146B file=dil_widgets/src/widgets/FollowUpActionBar
// args: e
// locals: t, o, i
// closure: u
function {
  let t;
  if (!(!Array.isArray(e))) goto L_34;
  return [];
  t = [];
  let o;
  o = 0;
  if (!((o < e.length))) goto L_8e;
  let i;
  i = u(e[o]);
  if (!((undefined !== i))) goto L_83;
  t.push(i);
  o = <o_new>;
  (o++);
  goto L_3d;
  return t;
}

// fn u  args=1 vars=5 closure=0 cpool=0 bc=589B file=dil_widgets/src/widgets/FollowUpActionBar
// args: e
// locals: t, o, i, n
function {
  let n;
  let i;
  let o;
  let t;
  if ((("object" != typeof e))) goto L_1b;
  if (!((null === e))) goto L_1e;
  return;
  t = e;
  if (!(("string" == typeof t.label))) goto L_97;
  goto L_98;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!(("string" == typeof t.query))) goto L_110;
  goto L_111;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if ((!o)) goto L_11e;
  if (!(!i)) goto L_121;
  return;
  n = {label: o, query: i};
  if (!(("string" == typeof t.icon))) goto L_193;
  n.icon = t.icon;
  t.icon;
  if (!(("number" == typeof t.weight))) goto L_248;
  if (!(Number.isFinite(t.weight))) goto L_248;
  n.weight = t.weight;
  t.weight;
  return n;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=158B file=dil_widgets/src/widgets/FollowUpActionBar
// closure: e, w, t
function {
  return {handler: "client", type: "issue_new_turn", payload: {query: e.query, prompt: e.query, event_name: "chatgpt_widget_action", event_data: w(e.label, t)}};
}

// fn v  args=2 vars=2 closure=1 cpool=1 bc=3B file=dil_widgets/src/widgets/FollowUpActionBar
// args: e, t
// closure: w
function {
  return function <atom:0>;
}

// fn w  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_widgets/src/widgets/FollowUpActionBar
// args: e, t
// locals: o
function {
  let o;
  o = {widget_affordance: "OPTION", widget_action_target: "follow_up", widget_action_value: e, surface_location: "RESPONSE"};
  if (!((undefined !== t))) goto L_46;
  if (!((t.length > 0))) goto L_46;
  o.content_reference_type = t;
  t;
  return o;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=8 bc=1427B file=dil_widgets/src/widgets/FollowUpActionBar
// args: require, module, exports
// locals: e, t, o, i, n, r, d, l, a, c, s, p, y, FollowUpActionBar, <class_fields_init>, FollowUpActionBar#1, g, u, v, w, h
function {
  g = function g;
  u = function u;
  v = function v;
  w = function w;
  let h;
  let FollowUpActionBar#1;
  let y;
  let p;
  let s;
  let c;
  let a;
  let l;
  let d;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FollowUpActionBar = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "pAS5N_Z_dBkQRQ57");
  o = e.makeNodePrototype("view", undefined, "REhf2C7V_rLsSjoA");
  i = e.makeNodePrototype("view", undefined, "PTXv9sVbyvU0eP8v");
  n = e.makeNodePrototype("view", undefined, "R6ugsEUvBbopnLnE");
  r = e.makeNodePrototype("view", undefined, "EXDExANk7z1fN_8Q");
  d = e.makeNodePrototype("view", undefined, "gUBLuQ3eTgglAIaj");
  l = e.makeNodePrototype("view", undefined, "otoE5FajRb-3fPkc");
  a = e.makeComponentPrototype(["color", "secondary", "size", "sm", "variant", "ghost"], "M7R2CZ4XKAEnibDS");
  c = require("dil_core/src/DILComponent");
  s = require("valdi_core/src/Style");
  p = require("./Button");
  y = 3;
  let FollowUpActionBar;
  let <class_fields_init>;
  class FollowUpActionBar extends c.DILComponent { ... }
  <proto:FollowUpActionBar>.onRender = function <atom:0>;
  <proto:FollowUpActionBar>.renderActions = function <atom:0>;
  <proto:FollowUpActionBar>.renderAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FollowUpActionBar>;
  FollowUpActionBar = function <atom:0>;
  // close_loc <class_fields_init>
  FollowUpActionBar#1 = function <atom:0>;
  exports.FollowUpActionBar = FollowUpActionBar#1;
  FollowUpActionBar#1.dilV2Properties = [];
  // append([], 0, c.DIL_COMPONENT_PROPERTIES)
  [][c.DIL_COMPONENT_PROPERTIES] = "actions";
  [][("actions" ++)] = "contentReferenceType";
  ("contentReferenceType" ++);
  FollowUpActionBar#1.properties = [];
  h = {root: new s.Style({width: "100%", flexDirection: "column"}), dividerPadding: new s.Style({paddingTop: 12, paddingRight: 20, paddingBottom: 12, paddingLeft: 20, width: "100%"}), divider: new s.Style({height: 1, width: "100%", backgroundColor: "alpha-10", flexShrink: 0}), actionPadding: new s.Style({paddingRight: 20, paddingBottom: 20, paddingLeft: 20, width: "100%"}), actionGroup: new s.Style({width: "100%", flexDirection: "row", alignItems: "center", backgroundColor: "surface-secondary", borderColor: "alpha-12", borderWidth: 1, borderRadius: 10, paddingTop: 2, paddingRight: 2, paddingBottom: 2, paddingLeft: 2}), actionSlot: new s.Style({flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: 0, alignItems: "center", justifyContent: "center"}), actionDivider: new s.Style({width: 1, height: 24, backgroundColor: "alpha-10", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FollowUpActionBar
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
