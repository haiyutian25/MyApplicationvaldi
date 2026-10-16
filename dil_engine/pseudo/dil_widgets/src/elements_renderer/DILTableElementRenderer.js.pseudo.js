// fn a  args=4 vars=5 closure=1 cpool=0 bc=127B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r, t, n
// locals: i
// closure: l
function {
  let i;
  i = l;
  l = t;
  t;
  try { // catch -> L_6f
  if (!((undefined === r))) goto L_3e;
  goto L_65;
  // [栈深重同步 1 -> 0]
  e.renderSelected(r, n);
  <?>;
  // gosub (finally 块) 117
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 117
  throw <?>;
  l = i;
  i;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=64B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
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
  this.renderStates = [];
  return this;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=372B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: i, this, <home_object>
// closure: n, t
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  super["beginRender"].call(this, e, r);
  this.setViewModelProperty("fitContent", true);
  i = r.renderState;
  if (!((undefined !== i))) goto L_bf;
  this.setViewModelProperty("suppressTextSelection", n.isDILTextSelectionSuppressed(i));
  if (!((undefined !== i))) goto L_11e;
  this.setViewModelProperty("containerGutter", t.getDILContainerGutterContext(i));
  this.renderStates.push({dividers: true, rowDivider: undefined});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=261B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e
// locals: t, this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  t = super["resolveChildRenderOptions"].call(this, e);
  if (((true === t.enhancedStreamingAnimationsEnabled))) goto L_ab;
  if (!((t.streamingAnimation === r.DILStreamingAnimation.Disabled))) goto L_b1;
  return t;
  null;
  t;
  return {streamingAnimation: r.DILStreamingAnimation.Disabled};
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=216B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: t, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  if (!(("dividers" !== e))) goto L_2a;
  if (!(("rowDivider" !== e))) goto L_2a;
  super["setProp"].call(this, e, r);
  return;
  if (!(!this.isSupportedProp(e))) goto L_54;
  return;
  t = this.currentRenderState();
  if (!(("dividers" === e))) goto L_96;
  t.dividers = (false !== r);
  goto L_af;
  // [栈深重同步 1 -> 0]
  if (!(("rowDivider" === e))) goto L_af;
  t.rowDivider = r;
  r;
  this.setViewModelProperty(e, r);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=11B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// closure: a, e, n
function {
  a(e, undefined, n, undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=40B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// closure: a, e, n, d
function {
  d.withDILTableTypographyElementScope(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=13B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// closure: a, e, r, n, t
function {
  a(e, r, n, t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=40B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: r, t
// closure: a, e, n, d
function {
  d.withDILTableTypographyElementScope(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=2 bc=214B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: t, n, i, this, <home_object>
// closure: a, d
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let n;
  let t;
  t = this.currentRenderState();
  if (!(t.dividers)) goto L_81;
  goto L_82;
  // [栈深重同步 1 -> 0]
  n = 0;
  i = {count: e.count, render: function <atom:0>, renderSelected: function <atom:0>};
  super["setChildren"].call(this, i, r);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=107B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((undefined === this.renderStates.pop()))) goto L_5e;
  throw new Error("Unbalanced DIL v2 table element renderer stack.");
  super["endRender"].call(this);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("Unbalanced DIL v2 table element renderer stack.");
  return e;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=250B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: t, this, <home_object>
// closure: n, l
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  super["beginRender"].call(this, e, r);
  this.setViewModelProperty("usesV2LabelLayout", true);
  t = r.renderState;
  if (!((undefined !== t))) goto L_bf;
  this.setViewModelProperty("suppressTextSelection", n.isDILTextSelectionSuppressed(t));
  if (!((undefined !== l))) goto L_f9;
  this.setViewModelProperty("rowDivider", l);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=79B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e
// locals: r, this, <home_object>
// closure: c
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  r = super["resolveChildRenderOptions"].call(this, e);
  if (!((true === this.getViewModelProperty("header")))) goto L_4b;
  return c(r);
  return r;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
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

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=79B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e
// locals: r, this, <home_object>
// closure: c
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  r = super["resolveChildRenderOptions"].call(this, e);
  if (!((true === this.getViewModelProperty("header")))) goto L_4b;
  return c(r);
  return r;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
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

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=202B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: this
// closure: <class_fields_init>, r, s, DILTableSectionElementRenderer
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.childrenMode = r.DILElementChildrenMode.ResolvedValues;
  this.primitiveTextProp = undefined;
  this.allowedPropNames = s.createDILPropNameAllowlist(DILTableSectionElementRenderer.dilV2Properties);
  this.renderStates = [];
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=94B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: this
function {
  this = this;
  this.renderStates.push({childRenderer: undefined, children: [], rowDivider: undefined});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=148B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e, r
// locals: this
// closure: s
function {
  this = this;
  if (!((true === this.allowedPropNames[e]))) goto L_68;
  if (!(("rowDivider" === e))) goto L_93;
  this.currentRenderState().rowDivider = r;
  goto L_93;
  // [栈深重同步 1 -> 0]
  s.warnUnsupportedDILPropName("table-section", e);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=214B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: r, t
// locals: n, d, i, this
// closure: e
function {
  this = this;
  let i;
  let n;
  if (!((undefined === t))) goto L_1c;
  throw new Error("DIL v2 table-section element renderer requires resolved children.");
  n = [];
  let d;
  for (const d of t) {
    if (!(!e.isDILRuntimeElement(d))) goto L_62;
    throw new Error("DIL v2 table-section element renderer requires table-row element children.");
    n.push(d);
  }
  i = this.currentRenderState();
  i.childRenderer = r;
  i.children = n;
  return;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=0 bc=372B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: e, r, t, n, i, this
// closure: l, a
function {
  this = this;
  let t;
  let r;
  let e;
  e = this.renderStates.pop();
  if (!((undefined === e))) goto L_6a;
  throw new Error("Unbalanced DIL v2 table-section element renderer stack.");
  r = e.childRenderer;
  if (!((undefined === r))) goto L_97;
  return;
  t = l;
  let n;
  n = 0;
  if (!((n < e.children.length))) goto L_173;
  let i;
  if (!((n === (e.children.length - 1)))) goto L_103;
  goto L_12f;
  // [栈深重同步 1 -> 0]
  if (!((e.rowDivider == null))) goto L_12f;
  e.rowDivider;
  i = t;
  a(r, [e.children[n]], i, undefined);
  n = <n_new>;
  (n++);
  goto L_a0;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderStates[(this.renderStates.length - 1)];
  if (!((undefined === e))) goto L_64;
  throw new Error("Unbalanced DIL v2 table-section element renderer stack.");
  return e;
}

// fn c  args=1 vars=2 closure=1 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: e
// locals: r
// closure: i
function {
  let r;
  r = e.renderState;
  if (!((undefined === r))) goto L_2f;
  return e;
  null;
  e;
  return {renderState: i.renderStateWithDILInheritedTextStyleValues(r, {weight: "semibold"})};
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=20 bc=620B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// args: require, module, exports
// locals: e, r, t, n, i, d, o, s, l, a, DILTableElementRenderer, <class_fields_init>, DILTableElementRenderer#1, DILTableRowElementRenderer, <class_fields_init>#1, DILTableRowElementRenderer#1, DILTableCellElementRenderer, <class_fields_init>#2, DILTableCellElementRenderer#1, DILTableSectionElementRenderer, <class_fields_init>#3, DILTableSectionElementRenderer#1, c
function {
  a = function a;
  c = function c;
  let DILTableSectionElementRenderer#1;
  let DILTableCellElementRenderer#1;
  let DILTableRowElementRenderer#1;
  let DILTableElementRenderer#1;
  let l;
  let s;
  let o;
  let d;
  let i;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTableElementRenderer = undefined;
  exports.DILTableRowElementRenderer = undefined;
  exports.DILTableCellElementRenderer = undefined;
  exports.DILTableSectionElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  r = require("dil_renderer/src/DILRenderer");
  t = require("dil_compiler/src/DILContainerGutterRenderState");
  n = require("dil_core/src/DILTextSelectionRenderState");
  i = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  d = require("dil_text/src/rendering/DILTableTypographyRenderState");
  o = require("./DILComponentElementRenderer");
  s = require("./DILPropNameValidation");
  l = undefined;
  let DILTableElementRenderer;
  let <class_fields_init>;
  class DILTableElementRenderer extends o.DILComponentElementRenderer { ... }
  <proto:DILTableElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTableElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILTableElementRenderer>.setProp = function <atom:0>;
  <proto:DILTableElementRenderer>.setChildren = function <atom:0>;
  <proto:DILTableElementRenderer>.endRender = function <atom:0>;
  <proto:DILTableElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTableElementRenderer>;
  DILTableElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTableElementRenderer#1 = function <atom:0>;
  exports.DILTableElementRenderer = DILTableElementRenderer#1;
  let DILTableRowElementRenderer;
  let <class_fields_init>#1;
  class DILTableRowElementRenderer extends o.DILComponentElementRenderer { ... }
  <proto:DILTableRowElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTableRowElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILTableRowElementRenderer>;
  DILTableRowElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILTableRowElementRenderer#1 = function <atom:0>;
  exports.DILTableRowElementRenderer = DILTableRowElementRenderer#1;
  let DILTableCellElementRenderer;
  let <class_fields_init>#2;
  class DILTableCellElementRenderer extends o.DILComponentElementRenderer { ... }
  <proto:DILTableCellElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILTableCellElementRenderer>;
  DILTableCellElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILTableCellElementRenderer#1 = function <atom:0>;
  exports.DILTableCellElementRenderer = DILTableCellElementRenderer#1;
  let DILTableSectionElementRenderer;
  let <class_fields_init>#3;
  class DILTableSectionElementRenderer extends undefined { ... }
  <proto:DILTableSectionElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTableSectionElementRenderer>.setProp = function <atom:0>;
  <proto:DILTableSectionElementRenderer>.setChildren = function <atom:0>;
  <proto:DILTableSectionElementRenderer>.endRender = function <atom:0>;
  <proto:DILTableSectionElementRenderer>.currentRenderState = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:DILTableSectionElementRenderer>;
  DILTableSectionElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#3
  // close_loc DILTableSectionElementRenderer
  DILTableSectionElementRenderer#1 = function <atom:0>;
  exports.DILTableSectionElementRenderer = DILTableSectionElementRenderer#1;
  DILTableSectionElementRenderer#1.dilV2Properties = ["header", "rowDivider"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTableElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
