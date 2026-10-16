// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=dil_widgets/src/DILCopyNodeActionHandler
// args: e, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.getHostSupportedClientActions = e;
  this.reportWarning = o;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=5 cpool=0 bc=963B file=dil_widgets/src/DILCopyNodeActionHandler
// args: i, a
// locals: d, o, r, c, this
// closure: r, e, t, n, o
function {
  this = this;
  let d;
  if ((("client" !== i.handler))) goto L_58;
  if (!((i.type !== r))) goto L_5b;
  return;
  if (!(!this.isHostCopySupported())) goto L_101;
  if (!((undefined !== i.fallbackAction))) goto L_d3;
  return {hostAction: i.fallbackAction};
  this.reportWarning("Unable to handle copy_node action because the host does not support copy.");
  return {};
  if (!((i.payload == null))) goto L_12b;
  i.payload;
  goto L_14c;
  d = undefined.target_id;
  if ((("string" != typeof d))) goto L_161;
  if (!((0 === d.length))) goto L_191;
  this.reportWarning("Unable to handle copy_node action: payload.target_id must be a non-empty string.");
  return {};
  try { // catch -> L_31a
  let r;
  let o;
  o = e.getDILRootWidgetRenderer(a.widgetRenderer);
  if (!((undefined === o))) goto L_21a;
  this.reportWarning("Unable to handle copy_node action: the compiled DIL renderer is unavailable.");
  return {};
  r = t.findAndSerializeDILNodeForCopy(o, a.celScope, d);
  if (!((undefined === r))) goto L_2ca;
  this.reportWarning("Unable to handle copy_node action: target "".concat(d, "" was not found."));
  goto L_318;
  // [栈深重同步 1 -> 0]
  return {hostAction: {handler: "client", loadingBehavior: i.loadingBehavior, payload: {value: r}, type: n}};
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_3c2
  this.reportWarning("Unable to handle copy_node action for target "".concat(d, "": ", o.toError(c).message));
  return {};
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=95B file=dil_widgets/src/DILCopyNodeActionHandler
// locals: e, this
// closure: n
function {
  this = this;
  let e;
  e = this.getHostSupportedClientActions();
  if (((undefined === e))) goto L_5e;
  return e.includes(n);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=178B file=dil_widgets/src/DILCopyNodeActionHandler
// args: require, module, exports
// locals: e, o, t, n, r, DILCopyNodeActionHandler, <class_fields_init>, DILCopyNodeActionHandler#1
function {
  let DILCopyNodeActionHandler#1;
  let r;
  let n;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCopyNodeActionHandler = undefined;
  e = require("dil_compiler/src/DILCompiler");
  o = require("valdi_core/src/utils/ErrorUtils");
  t = require("./DILCopyContentRenderer");
  n = "copy";
  r = "copy_node";
  let DILCopyNodeActionHandler;
  let <class_fields_init>;
  class DILCopyNodeActionHandler extends undefined { ... }
  <proto:DILCopyNodeActionHandler>.handleLocalAction = function <atom:0>;
  <proto:DILCopyNodeActionHandler>.isHostCopySupported = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILCopyNodeActionHandler>;
  DILCopyNodeActionHandler = function <atom:0>;
  // close_loc <class_fields_init>
  DILCopyNodeActionHandler#1 = function <atom:0>;
  exports.DILCopyNodeActionHandler = DILCopyNodeActionHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILCopyNodeActionHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
