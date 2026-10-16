// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=66B file=dil_widgets/src/DILCopyContentProvider
// locals: this
// closure: <class_fields_init>, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementRenderObserver = new o.DILV2CopyContentCollector();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=279B file=dil_widgets/src/DILCopyContentProvider
// args: n
// locals: o, r, this
// closure: e, t, RenderedDILCopyContentSnapshot
function {
  this = this;
  let r;
  let o;
  o = e.getDILRootWidgetRenderer(n.widgetRenderer);
  if (!((undefined === o))) goto L_9f;
  goto L_e9;
  // [栈深重同步 1 -> 0]
  r = t.captureDILRendererCopyContent(o, n.celScope);
  return new RenderedDILCopyContentSnapshot(r, n.clientDefinedWidgets);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=121B file=dil_widgets/src/DILCopyContentProvider
// args: e, n
// locals: t, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t;
  this.nodes = e;
  this.referenceIndexByInvocationId = new Map();
  t = new Set();
  this.collectNativeReferences(e, n, t);
  // append([], 0, t)
  t;
  this.nativeContentReferenceIndices = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=129B file=dil_widgets/src/DILCopyContentProvider
// args: e
// locals: this
// closure: t
function {
  this = this;
  if (!((undefined === e))) goto L_50;
  goto L_7e;
  // [栈深重同步 3 -> 2]
  return t.serializeDILCopyContentNodesForCopy(this.nodes, {markdownByReferenceIndex: e, referenceIndexByInvocationId: this.referenceIndexByInvocationId});   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=2 cpool=0 bc=518B file=dil_widgets/src/DILCopyContentProvider
// args: e, o, r
// locals: i, e#1, t, this
// closure: t, n
function {
  this = this;
  let i;
  for (const i of e) {
    if (!((i.kind === t.DILCopyContentKind.NativeWidget))) goto L_1b0;
    let t;
    let e#1;
    e#1 = i.invocationId;
    if (!((undefined === e#1))) goto L_d2;
    goto L_124;
    // [栈深重同步 4 -> 3]
    if (!((n.resolveClientDefinedWidgetMapping(o, e#1) == null))) goto L_103;
    n.resolveClientDefinedWidgetMapping(o, e#1);
    goto L_124;
    t = undefined.refIndex;
    if (!((undefined !== t))) goto L_1af;
    r.add(t);
    if (!((undefined !== e#1))) goto L_1af;
    this.referenceIndexByInvocationId.set(e#1, t);
    this.collectNativeReferences(i.children, o, r);
  }
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=5 bc=207B file=dil_widgets/src/DILCopyContentProvider
// args: require, module, exports
// locals: e, n, t, o, DILCopyContentProvider, <class_fields_init>, DILCopyContentProvider#1, RenderedDILCopyContentSnapshot, <class_fields_init>#1, RenderedDILCopyContentSnapshot#1
function {
  let RenderedDILCopyContentSnapshot#1;
  let DILCopyContentProvider#1;
  let o;
  let t;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCopyContentProvider = undefined;
  e = require("dil_compiler/src/DILCompiler");
  n = require("./DILClientDefinedWidgetMapping");
  t = require("./DILCopyContentRenderer");
  o = require("./DILV2CopyContentCollector");
  let DILCopyContentProvider;
  let <class_fields_init>;
  class DILCopyContentProvider extends undefined { ... }
  <proto:DILCopyContentProvider>.captureCopyContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILCopyContentProvider>;
  DILCopyContentProvider = function <atom:0>;
  // close_loc <class_fields_init>
  DILCopyContentProvider#1 = function <atom:0>;
  exports.DILCopyContentProvider = DILCopyContentProvider#1;
  let RenderedDILCopyContentSnapshot;
  let <class_fields_init>#1;
  class RenderedDILCopyContentSnapshot extends undefined { ... }
  <proto:RenderedDILCopyContentSnapshot>.serialize = function <atom:0>;
  <proto:RenderedDILCopyContentSnapshot>.collectNativeReferences = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:RenderedDILCopyContentSnapshot>;
  RenderedDILCopyContentSnapshot = function <atom:0>;
  // close_loc <class_fields_init>#1
  RenderedDILCopyContentSnapshot#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILCopyContentProvider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
