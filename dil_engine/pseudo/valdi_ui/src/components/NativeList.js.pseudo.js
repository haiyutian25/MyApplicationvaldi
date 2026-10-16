// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=264B file=valdi_ui/src/components/NativeList
// closure: this
function {
  this.viewModel.onRefresh();
  if (!((this.list.single() == null))) goto L_99;
  this.list.single();
  goto L_107;
  undefined.setAttribute("refreshing", this.viewModel.refreshing);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=valdi_ui/src/components/NativeList
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, s
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
  this.list = new s.ElementRef();
  this.refresh = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=108B file=valdi_ui/src/components/NativeList
// locals: this
// closure: r, c
function {
  this = this;
  if (!(!r.isVersionAtLeast(268))) goto L_3c;
  throw new Error("NativeList requires a host with native list support");
  this.viewFactory = c.createNativeListViewFactory();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=164B file=valdi_ui/src/components/NativeList
// args: e
// closure: i
function {
  null;
  e;
  return {componentViewModel: i.makeOpaque(e.componentViewModel), componentContext: i.makeOpaque(e.componentContext)};
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=1 bc=1336B file=valdi_ui/src/components/NativeList
// locals: i, r, this
// closure: n, e, t, l
function {
  this = this;
  let r;
  let i;
  i = n.getValdiRuntime();
  r = this.viewModel.items.map(function <atom:0>);
  e.beginRenderWithViewFactory(t, this.viewFactory, undefined);
  e.setAttributeRef(this.list);
  e.setAttributeStyle("style", l.list);
  e.setAttribute("items", r);
  e.setAttribute("refreshing", this.viewModel.refreshing);
  e.setAttributeFunction("onRefresh", this.refresh);
  e.setAttributeFunction("onTrailingAction", this.viewModel.onTrailingAction);
  e.setAttributeString("listBackgroundColor", this.viewModel.backgroundColor);
  e.setAttributeNumber("contentInset", this.viewModel.contentInset);
  e.setAttributeNumber("bottomInset", this.viewModel.bottomInset);
  e.setAttributeNumber("rowSpacing", this.viewModel.rowSpacing);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=3 bc=407B file=valdi_ui/src/components/NativeList
// args: require, module, exports
// locals: e, t, i, r, s, o, n, c, NativeList, <class_fields_init>, NativeList#1, l
function {
  let l;
  let NativeList#1;
  let c;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeList = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", undefined, "bWRg41n5-AM3Jp7w");
  i = require("valdi_core/src/Component");
  r = require("valdi_core/src/CompilerIntrinsics");
  s = require("valdi_core/src/ElementRef");
  o = require("valdi_core/src/Style");
  n = require("valdi_core/src/ValdiRuntimeProvider");
  c = require("../NativeListFactory");
  let NativeList;
  let <class_fields_init>;
  class NativeList extends i.Component { ... }
  <proto:NativeList>.onCreate = function <atom:0>;
  <proto:NativeList>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeList>;
  NativeList = function <atom:0>;
  // close_loc <class_fields_init>
  NativeList#1 = function <atom:0>;
  exports.NativeList = NativeList#1;
  l = {list: new o.Style({width: "100%", height: "100%", flexGrow: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/NativeList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
