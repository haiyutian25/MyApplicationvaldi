// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=617B file=dil_text/src/list/DILList
// locals: this
// closure: e, t, i, exports
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", i.list);
  e.setAttributes(this.viewModel.baseViewAttributes);
  if (!((this.viewModel.gap == null))) goto L_17d;
  this.viewModel.gap;
  e.setAttribute("gap", exports.DIL_LIST_DEFAULT_GAP);
  if (!((this.viewModel.gap == null))) goto L_214;
  this.viewModel.gap;
  e.setAttribute("rowGap", exports.DIL_LIST_DEFAULT_GAP);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_text/src/list/DILList
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=438B file=dil_text/src/list/DILList
// args: require, module, exports
// locals: e, t, o, r, s, DILListComponent, <class_fields_init>, DILListComponent#1, i
function {
  let i;
  let DILListComponent#1;
  let s;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_LIST_DEFAULT_GAP = undefined;
  exports.DIL_LIST_SOLID_CONNECTOR_DEFAULT_GAP = undefined;
  exports.DILListComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "fTpISrAr6fTxgu2v");
  o = require("dil_core/src/layout/DILSpacing");
  r = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  exports.DIL_LIST_DEFAULT_GAP = 0;
  exports.DIL_LIST_SOLID_CONNECTOR_DEFAULT_GAP = o.resolveDILSpacingUnits(1);
  let DILListComponent;
  let <class_fields_init>;
  class DILListComponent extends r.Component { ... }
  <proto:DILListComponent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILListComponent>;
  DILListComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILListComponent#1 = function <atom:0>;
  exports.DILListComponent = DILListComponent#1;
  i = {list: new s.Style({flexDirection: "column", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/list/DILList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
