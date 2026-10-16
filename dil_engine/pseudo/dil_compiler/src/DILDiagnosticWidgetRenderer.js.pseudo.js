// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=60B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r, e, n, i
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.inner = r;
  this.context = e;
  this.errorMode = n;
  this.reportError = i;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.name;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r
// locals: this
function {
  this = this;
  this.inner.name = r;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.props;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.children;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// locals: this
function {
  this = this;
  this.inner.onPropsChanged();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r
// locals: this
function {
  this = this;
  this.inner.onChildrenChanged(r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=130B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r
// locals: e, this
function {
  this = this;
  try { // catch -> L_50
  return this.inner.getKey(r);
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_81
  this.handleRenderError(e, undefined);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=181B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r
// locals: e, n, this
function {
  this = this;
  let e;
  e = this.inner;
  if (!((undefined === e.canRender))) goto L_53;
  return false;
  try { // catch -> L_82
  return e.canRender(r);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_b4
  this.handleRenderError(n, undefined);
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=179B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r, e
// locals: n, i, this
function {
  this = this;
  let n;
  n = this.inner;
  if (!((undefined !== n.renderChildren))) goto L_b2;
  try { // catch -> L_81
  n.renderChildren(r, e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_b1
  this.handleRenderError(i, e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=336B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: e, n
// locals: i, this
// closure: r
function {
  this = this;
  r.beginTrace("DILRender.".concat(this.inner.name));
  try { // catch -> L_eb
  this.inner.onRender(e, n);
  <?>;
  // gosub (finally 块) 296
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_122
  this.handleRenderError(i, n);
  <?>;
  // gosub (finally 块) 296
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 296
  throw <?>;
  r.endTrace();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=0 bc=341B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r, o
// locals: d, this
// closure: i, e, n, t
function {
  this = this;
  let d;
  if (!(i.isDILTransientRenderAbortError(r))) goto L_2f;
  throw r;
  null;
  this.context;
  d = e.DILDiagnosticError.wrapError(r, {phase: "DIL render"});
  if (!((1 === this.errorMode))) goto L_d5;
  throw d;
  n.reportDILCompilerError(this.reportError, d);
  if (!(t(d, o))) goto L_154;
  throw new i.DILTransientRenderAbortError(d);
  return;
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=123B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: r, e
// closure: i
function {
  if (!((undefined !== e))) goto L_7a;
  if (!(i.isDILTransientRenderAbortEnabled(e))) goto L_7a;
  return ("CEL evaluation" === r.details.phase);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=13 bc=246B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// args: require, module, exports
// locals: r, e, n, i, DILDiagnosticWidgetRenderer, <class_fields_init>, DILDiagnosticWidgetRenderer#1, t
function {
  t = function t;
  let DILDiagnosticWidgetRenderer#1;
  let i;
  let n;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDiagnosticWidgetRenderer = undefined;
  r = require("valdi_core/src/utils/Trace");
  e = require("./DILError");
  n = require("./DILCompilerErrorHandling");
  i = require("./DILTransientRenderAbort");
  let DILDiagnosticWidgetRenderer;
  let <class_fields_init>;
  class DILDiagnosticWidgetRenderer extends undefined { ... }
  <proto:DILDiagnosticWidgetRenderer>.name = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.name = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.props = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.children = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.onChildrenChanged = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.getKey = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.canRender = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.renderChildren = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.onRender = function <atom:0>;
  <proto:DILDiagnosticWidgetRenderer>.handleRenderError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILDiagnosticWidgetRenderer>;
  DILDiagnosticWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILDiagnosticWidgetRenderer#1 = function <atom:0>;
  exports.DILDiagnosticWidgetRenderer = DILDiagnosticWidgetRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILDiagnosticWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
