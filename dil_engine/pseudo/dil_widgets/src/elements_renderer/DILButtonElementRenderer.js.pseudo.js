// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=161B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>, t
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("button", r.Button);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("button", r.Button);
  this.childrenMode = t.DILElementChildrenMode.ResolvedValues;
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=287B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: e, t
// locals: r, i, this, <home_object>
// closure: o, n
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  super["beginRender"].call(this, e, t);
  r = t.renderState;
  if (!((undefined !== r))) goto L_98;
  this.setViewModelProperty("inheritedTooltip", o.getDILTooltipContent(r));
  if (!((n.getActiveDILFormRenderState() == null))) goto L_c6;
  n.getActiveDILFormRenderState();
  goto L_e7;
  i = undefined.onSubmit;
  if (!((undefined !== i))) goto L_11e;
  this.setViewModelProperty("submitForm", i);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=128B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: e
// locals: t, r, this, <home_object>
// closure: o
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  let t;
  t = super["resolveChildRenderOptions"].call(this, e);
  r = t.renderState;
  if (!((undefined === r))) goto L_49;
  return t;
  null;
  t;
  return {renderState: o.renderStateWithoutDILTooltipContent(r)};
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=422B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: e, t
// locals: r, this, <home_object>
// closure: d
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  if (!((undefined === t))) goto L_1d;
  super["setChildren"].call(this, e, t);
  return;
  r = d(t);
  if (!((undefined !== r))) goto L_197;
  if (!((undefined !== r.iconStart))) goto L_a3;
  this.setViewModelProperty("iconStart", r.iconStart);
  if (!((undefined !== r.iconEnd))) goto L_11c;
  this.setViewModelProperty("iconEnd", r.iconEnd);
  if (!((undefined !== r.label))) goto L_1a5;
  goto L_1a5;
  // [栈深重同步 1 -> 0]
  super["setChildren"].call(this, e, t);
  return;
}

// fn d  args=1 vars=7 closure=1 cpool=0 bc=263B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: e
// locals: t, r, n, o, i, e#1
// closure: s
function {
  let o;
  let n;
  let r;
  let t;
  t = [];
  if (!(!s(e, t))) goto L_1a;
  return;
  r = undefined;
  n = undefined;
  o = "";
  let i;
  for (const i of t) {
    let e#1;
    if (!(("string" == typeof i))) goto L_4a;
    o = (o + i);
    (o + i);
   continue;
    if (!((i.props == null))) goto L_76;
    i.props;
    goto L_97;
    e#1 = undefined.name;
    if (!(("string" != typeof e#1))) goto L_ab;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!((0 === o.length))) goto L_c4;
    if (!((undefined === r))) goto L_c4;
    r = e#1;
    e#1;
   continue;
    if (!((undefined !== n))) goto L_d1;
    return undefined;
    // [栈深重同步 0 -> 3]
    n = e#1;
    e#1;
  }
  if (!((0 === o.length))) goto L_fe;
  goto L_101;
  // [栈深重同步 2 -> 1]
  return {iconEnd: n, iconStart: r, label: o};
}

// fn s  args=2 vars=3 closure=2 cpool=0 bc=456B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: t, r
// locals: n
// closure: s, e
function {
  let n;
  for (const n of t) {
    if (!((null != n))) continue;
    if (!(("boolean" != typeof n))) continue;
    if (!(("string" != typeof n))) goto L_18d;
    if (!(("number" != typeof n))) goto L_18d;
    if (!(Array.isArray(n))) goto L_81;
    if (!(!s(n, r))) continue;
    return false;
    // [栈深重同步 0 -> 3]
    if (!(!e.isDILRuntimeElement(n))) goto L_b3;
    return false;
    // [栈深重同步 0 -> 3]
    if (!((n.type !== e.DIL_FRAGMENT))) goto L_15c;
    if (!(("icon" !== n.type))) goto L_131;
    return false;
    // [栈深重同步 0 -> 3]
    r.push(n);
   continue;
    if (!(!s(n.children, r))) continue;
    return false;
    // [栈深重同步 0 -> 3]
    r.push(String(n));
  }
  return true;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=6 bc=245B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// args: require, module, exports
// locals: e, t, r, n, o, i, DILButtonElementRenderer, <class_fields_init>, DILButtonElementRenderer#1, d, s
function {
  d = function d;
  s = function s;
  let DILButtonElementRenderer#1;
  let i;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILButtonElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  t = require("dil_renderer/src/DILRenderer");
  r = require("../widgets/Button");
  n = require("../widgets/FormRenderState");
  o = require("../tooltip/DILTooltipRenderState");
  i = require("./DILComponentElementRenderer");
  let DILButtonElementRenderer;
  let <class_fields_init>;
  class DILButtonElementRenderer extends i.DILComponentElementRenderer { ... }
  <proto:DILButtonElementRenderer>.beginRender = function <atom:0>;
  <proto:DILButtonElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILButtonElementRenderer>.setChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILButtonElementRenderer>;
  DILButtonElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILButtonElementRenderer#1 = function <atom:0>;
  exports.DILButtonElementRenderer = DILButtonElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILButtonElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
