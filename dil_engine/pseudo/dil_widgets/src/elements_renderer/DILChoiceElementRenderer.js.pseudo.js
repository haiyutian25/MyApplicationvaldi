// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=130B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, r
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
  this.childrenMode = r.DILElementChildrenMode.ResolvedValues;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=57B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// args: e
// locals: this, <home_object>
// closure: n
function {
  <home_object> = <special_object 4>;
  this = this;
  return n.renderOptionsWithDILInlineTextSiblings(super["resolveChildRenderOptions"].call(this, e));   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=307B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// args: e, r
// locals: t, this, <home_object>
// closure: i
function {
  <home_object> = <special_object 4>;
  this = this;
  let t;
  if (!((undefined === r))) goto L_1c;
  throw new Error("DIL v2 choice element renderer requires resolved children.");
  t = {hasText: false, rich: false, value: ""};
  i(r, t);
  if (!(t.hasText)) goto L_aa;
  this.setChoiceLabel(t.value);
  if (!(t.rich)) goto L_107;
  if (!((e.count > 0))) goto L_107;
  goto L_132;
  // [栈深重同步 1 -> 0]
  this.setViewModelProperty("renderChildren", undefined);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// args: e
// locals: this
function {
  this = this;
  this.setViewModelProperty("label", e);
  return;
}

// fn i  args=2 vars=5 closure=2 cpool=0 bc=822B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// args: r, t
// locals: n, r#1, o
// closure: i, e
function {
  let n;
  for (const n of r) {
    if ((("string" == typeof n))) goto L_21;
    if (!(("number" == typeof n))) goto L_67;
    t.hasText = true;
    t.value = (t.value + String(n));
   continue;
    if (!(Array.isArray(n))) goto L_9f;
    i(n, t);
   continue;
    if (!(e.isDILRuntimeElement(n))) continue;
    let o;
    let r#1;
    if (!((n.type !== e.DIL_FRAGMENT))) goto L_12c;
    t.rich = true;
    true;
    r#1 = t.value.length;
    i(n.children, t);
    if (((t.value.length > r#1))) continue;
    if (!(("text" === n.type))) goto L_222;
    if (!((n.props == null))) goto L_1fe;
    n.props;
    goto L_2cc;
    goto L_2cc;
    // [栈深重同步 4 -> 3]
    if ((("badge" === n.type))) goto L_27a;
    if (!(("button" === n.type))) goto L_2cb;
    if (!((n.props == null))) goto L_2a8;
    n.props;
    goto L_2cc;
    goto L_2cc;
    // [栈深重同步 4 -> 3]
    o = undefined;
    if (!(("string" != typeof o))) goto L_2e5;
    if ((("number" != typeof o))) goto L_32b;
    t.hasText = true;
    t.value = (t.value + String(o));
    (t.value + String(o));
  }
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=217B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// args: require, module, exports
// locals: e, r, t, n, DILChoiceElementRenderer, <class_fields_init>, DILChoiceElementRenderer#1, i
function {
  i = function i;
  let DILChoiceElementRenderer#1;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILChoiceElementRenderer = undefined;
  e = require("dil_renderer/src/DILElement");
  r = require("dil_renderer/src/DILRenderer");
  t = require("./DILComponentElementRenderer");
  n = require("./DILInlineTextSiblingRenderState");
  let DILChoiceElementRenderer;
  let <class_fields_init>;
  class DILChoiceElementRenderer extends t.DILComponentElementRenderer { ... }
  <proto:DILChoiceElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILChoiceElementRenderer>.setChildren = function <atom:0>;
  <proto:DILChoiceElementRenderer>.setChoiceLabel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILChoiceElementRenderer>;
  DILChoiceElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILChoiceElementRenderer#1 = function <atom:0>;
  exports.DILChoiceElementRenderer = DILChoiceElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILChoiceElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
