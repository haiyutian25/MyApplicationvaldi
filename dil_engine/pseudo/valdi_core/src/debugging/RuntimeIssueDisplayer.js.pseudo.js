// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// args: e
// closure: this
function {
  return this.renderNodePath(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// closure: this
function {
  return this.renderGenericIssue();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=10 cpool=2 bc=1590B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// locals: d, this
// closure: e, S, t, r, v, o, n, i, l, p
function {
  this = this;
  let d;
  d = this.viewModel.issue;
  if (!(d.slowCall)) goto L_1a6;
  e.beginComponent(S.SlowJSCallTraceViewer, t, "".concat(d.slowCall.captureId), undefined);
  e.setViewModelProperty("warning", d.slowCall);
  e.endComponent();
  return;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", v.rootStyle);
  e.beginRender(o, undefined);
  e.beginRender(n, undefined);
  if (!(d.isError)) goto L_2d1;
  goto L_2d6;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "Warning");
  if (!(d.isError)) goto L_330;
  goto L_335;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("color", "orange");
  e.setAttributeStyle("style", v.errorTypeStyle);
  e.endRender();
  e.beginRender(i, undefined);
  e.setAttributeString("value", d.message);
  e.setAttributeStyle("style", v.titleStyle);
  e.endRender();
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", v.detailsStyle);
  p.when(d.nodeId, function <atom:0>);
  p.when(!d.nodeId, function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=527B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// args: t
// locals: r, o, this
// closure: u, e, m, d
function {
  this = this;
  let o;
  let r;
  r = this.renderer.getElementForId(t);
  if (!(!r)) goto L_a7;
  this.renderIssue("Could not resolve RenderedElement for id ".concat(t));
  return;
  o = u.getVirtualNodeDataFromRootToChild(r.getVirtualNode());
  e.beginComponent(m.VirtualNodePathDisplayer, d, undefined, undefined);
  e.setViewModelProperty("node", o.root);
  e.setViewModelProperty("focusedNode", o.child);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=45B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// locals: this
function {
  this = this;
  this.renderIssue("No further informations available to display.
    If you feel we should be able to provide more data here, please reach out to us on Slack on #valdi!
    ");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=211B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// args: t
// closure: e, s, v
function {
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", v.genericTextStyle);
  e.setAttributeString("value", t);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/debugging/RuntimeIssueDisplayer
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

// fn <atom:0>  args=3 vars=22 closure=0 cpool=5 bc=1072B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// args: require, module, exports
// locals: e, t, r, o, n, i, l, d, s, a, u, y, p, m, S, RuntimeIssueDisplayer, <class_fields_init>, RuntimeIssueDisplayer#1, v
function {
  let v;
  let RuntimeIssueDisplayer#1;
  let S;
  let m;
  let p;
  let y;
  let u;
  let a;
  let s;
  let d;
  let l;
  let i;
  let n;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RuntimeIssueDisplayer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "TqJrPOZ6c9b53c8c");
  r = e.makeNodePrototype("layout", undefined, "08c2BUZNWhc1_jDC");
  o = e.makeNodePrototype("layout", undefined, "6yM2WaCpVD2Llini");
  n = e.makeNodePrototype("label", undefined, "fVRRl32LfrxI3AFm");
  i = e.makeNodePrototype("label", undefined, "RUO3H62geofLxrYA");
  l = e.makeNodePrototype("layout", undefined, "wSdMGRFx9TULpugo");
  d = e.makeComponentPrototype(undefined, "fliW2ekYjRertV5C");
  s = e.makeNodePrototype("label", undefined, "i_VzTsnvQsEaaviv");
  a = require("../Component");
  u = require("../IRenderedVirtualNodeData");
  y = require("../Style");
  p = require("../utils/When");
  m = require("./VirtualNodePathDisplayer");
  S = require("./SlowJSCallTraceViewer");
  let RuntimeIssueDisplayer;
  let <class_fields_init>;
  class RuntimeIssueDisplayer extends a.Component { ... }
  <proto:RuntimeIssueDisplayer>.onRender = function <atom:0>;
  <proto:RuntimeIssueDisplayer>.renderNodePath = function <atom:0>;
  <proto:RuntimeIssueDisplayer>.renderGenericIssue = function <atom:0>;
  <proto:RuntimeIssueDisplayer>.renderIssue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RuntimeIssueDisplayer>;
  RuntimeIssueDisplayer = function <atom:0>;
  // close_loc <class_fields_init>
  RuntimeIssueDisplayer#1 = function <atom:0>;
  exports.RuntimeIssueDisplayer = RuntimeIssueDisplayer#1;
  v = {rootStyle: new y.Style({flexGrow: 1, flexShrink: 1}), detailsStyle: new y.Style({flexGrow: 1, flexShrink: 1, marginTop: 20}), errorTypeStyle: new y.Style({textAlign: "center", numberOfLines: 0, font: "system-bold 16", marginBottom: 8}), titleStyle: new y.Style({textAlign: "center", numberOfLines: 0, font: "system-bold 12"}), genericTextStyle: new y.Style({textAlign: "center", numberOfLines: 0, font: "system 12"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/RuntimeIssueDisplayer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
