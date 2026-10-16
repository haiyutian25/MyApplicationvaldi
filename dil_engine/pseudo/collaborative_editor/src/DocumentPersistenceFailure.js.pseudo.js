// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=103B file=collaborative_editor/src/DocumentPersistenceFailure
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e.message);
  if (!(<class_fields_init>)) goto L_43;
  <class_fields_init>.call(this);
  new new.target(e.message);
  this.detail = e;
  this.name = "DocumentPersistenceFailure";
  return this;
}

// fn r  args=1 vars=3 closure=1 cpool=0 bc=753B file=collaborative_editor/src/DocumentPersistenceFailure
// args: r
// locals: s, t
// closure: e
function {
  let t;
  let s;
  if (((null === r))) goto L_15;
  if (!(("object" != typeof r))) goto L_18;
  return;
  s = r;
  if (!(("DocumentPersistenceFailure" !== s.name))) goto L_47;
  return;
  t = s.detail;
  if (!((null !== t))) goto L_2f0;
  if (!(("object" == typeof t))) goto L_2f0;
  if (!(("string" == typeof t.message))) goto L_2f0;
  if (((t.kind === e.DocumentPersistenceErrorKind.NotDownloaded))) goto L_29b;
  if (((t.kind === e.DocumentPersistenceErrorKind.Storage))) goto L_29b;
  if (((t.kind === e.DocumentPersistenceErrorKind.Recovery))) goto L_29b;
  if (((t.kind === e.DocumentPersistenceErrorKind.UnsupportedSchema))) goto L_29b;
  if (((t.kind === e.DocumentPersistenceErrorKind.HostUnavailable))) goto L_29b;
  if (!((t.kind === e.DocumentPersistenceErrorKind.Closed))) goto L_2ef;
  return {kind: t.kind, message: t.message};
  t.kind;
  return;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=149B file=collaborative_editor/src/DocumentPersistenceFailure
// args: require, module, exports
// locals: e, DocumentPersistenceFailure, <class_fields_init>, DocumentPersistenceFailure#1, r
function {
  r = function r;
  let DocumentPersistenceFailure#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DocumentPersistenceFailure = undefined;
  exports.getDocumentPersistenceError = undefined;
  e = require("./DocumentPersistenceTypes");
  let DocumentPersistenceFailure;
  let <class_fields_init>;
  class DocumentPersistenceFailure extends Error { ... }
  <class_fields_init> = undefined;
  <proto:DocumentPersistenceFailure>;
  DocumentPersistenceFailure = function <atom:0>;
  // close_loc <class_fields_init>
  DocumentPersistenceFailure#1 = function <atom:0>;
  exports.DocumentPersistenceFailure = DocumentPersistenceFailure#1;
  exports.getDocumentPersistenceError = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/DocumentPersistenceFailure
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
