// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/webview/WebViewDocument
// args: e
// closure: this
function {
  return this.request(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/webview/WebViewDocument
// args: e
// closure: this
function {
  return this.cancel(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=110B file=dil_widgets/src/webview/WebViewDocument
// args: e
// closure: this
function {
  if ((this.disposed)) goto L_6d;
  this.document.onOpenLink(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=3 bc=163B file=dil_widgets/src/webview/WebViewDocument
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.document = e;
  this.requests = new Map();
  this.cancelled = new Set();
  this.disposed = false;
  this.source = {entryPath: e.entryPath, requestResource: function <atom:0>, cancelResource: function <atom:0>, onOpenLink: function <atom:0>};
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=279B file=dil_widgets/src/webview/WebViewDocument
// locals: e, this
function {
  this = this;
  this.disposed = true;
  let e;
  for (const e of this.requests.values()) {
    e.unsubscribe();
  }
  this.requests.clear();
  this.cancelled.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=43B file=dil_widgets/src/webview/WebViewDocument
// args: e
// closure: this, t, i
function {
  return this.complete(t, i, e, undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=49B file=dil_widgets/src/webview/WebViewDocument
// args: e
// closure: this, t, i
function {
  return this.complete(t, i, undefined, String(e));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=47B file=dil_widgets/src/webview/WebViewDocument
// closure: this, t, i
function {
  return this.complete(t, i, undefined, "Document resource returned no bytes.");   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=3 bc=767B file=dil_widgets/src/webview/WebViewDocument
// args: t
// locals: i, r, this
// closure: e, s
function {
  this = this;
  let i;
  if ((this.disposed)) goto L_102;
  if ((this.cancelled.has(t.id))) goto L_102;
  if (!(this.requests.has(t.id))) goto L_105;
  return;
  i = new e.Subscription();
  this.requests.set(t.id, i);
  try { // catch -> L_2c4
  i.add(this.document.loadResource(t.path).pipe(s.take(1)).subscribe({next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>}));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_2fe
  this.complete(t, i, undefined, String(r));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=339B file=dil_widgets/src/webview/WebViewDocument
// args: e, s, t, i
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_152;
  if (((this.requests.get(e.id) !== s))) goto L_152;
  this.requests.delete(e.id);
  s.unsubscribe();
  e.complete(t, i);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=306B file=dil_widgets/src/webview/WebViewDocument
// args: e
// locals: s, this
function {
  this = this;
  let s;
  if (!(this.disposed)) goto L_2a;
  return;
  this.cancelled.add(e);
  s = this.requests.get(e);
  this.requests.delete(e);
  if (!((s == null))) goto L_10d;
  s;
  goto L_131;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=162B file=dil_widgets/src/webview/WebViewDocument
// args: require, module, exports
// locals: e, s, WebViewDocumentLoader, <class_fields_init>, WebViewDocumentLoader#1
function {
  let WebViewDocumentLoader#1;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WebViewDocumentLoader = undefined;
  e = require("valdi_rxjs/src/Subscription");
  s = require("valdi_rxjs/src/operators/take");
  let WebViewDocumentLoader;
  let <class_fields_init>;
  class WebViewDocumentLoader extends undefined { ... }
  <proto:WebViewDocumentLoader>.dispose = function <atom:0>;
  <proto:WebViewDocumentLoader>.request = function <atom:0>;
  <proto:WebViewDocumentLoader>.complete = function <atom:0>;
  <proto:WebViewDocumentLoader>.cancel = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebViewDocumentLoader>;
  WebViewDocumentLoader = function <atom:0>;
  // close_loc <class_fields_init>
  WebViewDocumentLoader#1 = function <atom:0>;
  exports.WebViewDocumentLoader = WebViewDocumentLoader#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/WebViewDocument
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
