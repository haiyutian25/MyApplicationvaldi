// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=95B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// locals: this.active_func, new.target, this
// closure: DILTooltipElementRenderer, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("tooltip", DILTooltipElementRenderer.dilV2Properties);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("tooltip", DILTooltipElementRenderer.dilV2Properties);
  this.contentStack = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=92B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.contentStack.push(undefined);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=120B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// args: e, t
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["setProp"].call(this, e, t);
  if (!(("content" === e))) goto L_77;
  if (!(("string" == typeof t))) goto L_74;
  goto L_75;
  // [栈深重同步 3 -> 2]
  this.contentStack[(this.contentStack.length - 1)] = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=139B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// args: t
// locals: n, this
// closure: e
function {
  this = this;
  let n;
  n = t.renderState;
  if (!((undefined === n))) goto L_31;
  return t;
  null;
  t;
  return {renderState: e.renderStateWithDILTooltipContent(n, this.currentContent())};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=165B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((0 === this.contentStack.length))) goto L_3b;
  throw new Error("Unbalanced DIL v2 tooltip element renderer stack.");
  try { // catch -> L_56
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 92
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 92
  throw <?>;
  this.contentStack.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// locals: this
function {
  this = this;
  return this.contentStack[(this.contentStack.length - 1)];
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=6 bc=228B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// args: require, module, exports
// locals: e, t, DILTooltipElementRenderer, <class_fields_init>, DILTooltipElementRenderer#1
function {
  let DILTooltipElementRenderer#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTooltipElementRenderer = undefined;
  e = require("../tooltip/DILTooltipRenderState");
  t = require("./DILTransparentElementRenderer");
  let DILTooltipElementRenderer;
  let <class_fields_init>;
  class DILTooltipElementRenderer extends t.DILTransparentElementRenderer { ... }
  <proto:DILTooltipElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTooltipElementRenderer>.setProp = function <atom:0>;
  <proto:DILTooltipElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILTooltipElementRenderer>.endRender = function <atom:0>;
  <proto:DILTooltipElementRenderer>.currentContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTooltipElementRenderer>;
  DILTooltipElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILTooltipElementRenderer
  DILTooltipElementRenderer#1 = function <atom:0>;
  exports.DILTooltipElementRenderer = DILTooltipElementRenderer#1;
  DILTooltipElementRenderer#1.dilV2Properties = ["content"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTooltipElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
