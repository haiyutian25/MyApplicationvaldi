// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=80B file=collaborative_editor/src/SynchronousDocumentMutations
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.owner = e;
  this.host = t;
  this.pending = new Map();
  this.sequence = 0;
  this.closed = false;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=collaborative_editor/src/SynchronousDocumentMutations
// args: e, t
// closure: o
function {
  o = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=130B file=collaborative_editor/src/SynchronousDocumentMutations
// closure: this, t
function {
  if (!(this.closed)) goto L_33;
  throw new Error("The editor is closed");
  return this.host.applyDocumentMutation({identifier: t});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=74B file=collaborative_editor/src/SynchronousDocumentMutations
// closure: this, t
function {
  this.pending.delete(t);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=3 bc=503B file=collaborative_editor/src/SynchronousDocumentMutations
// args: e
// locals: t, o, n, s, this
function {
  this = this;
  let s;
  let n;
  let o;
  let t;
  if (!(this.closed)) goto L_6b;
  return Promise.reject(new Error("The editor is closed"));   // tail call
  this.sequence = (this.sequence ++);
  t = "".concat(this.owner, ":mutation:", (this.sequence ++));
  o = undefined;
  n = new Promise(function <atom:0>);
  this.pending.set(t, {apply: e, cancel: o});
  s = Promise.resolve().then(function <atom:0>);
  return Promise.race([s, n]).finally(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=314B file=collaborative_editor/src/SynchronousDocumentMutations
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.pending.get(e.identifier);
  if ((this.closed)) goto L_99;
  if (!((undefined === t))) goto L_aa;
  throw new Error("The document mutation is unknown or already consumed");
  this.pending.delete(e.identifier);
  return t.apply();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=222B file=collaborative_editor/src/SynchronousDocumentMutations
// locals: e, this
function {
  this = this;
  this.closed = true;
  let e;
  for (const e of this.pending.values()) {
    e.cancel(new Error("The editor closed before native adoption"));
  }
  this.pending.clear();
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=131B file=collaborative_editor/src/SynchronousDocumentMutations
// args: require, module, exports
// locals: SynchronousDocumentMutations, <class_fields_init>, SynchronousDocumentMutations#1
function {
  let SynchronousDocumentMutations#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SynchronousDocumentMutations = undefined;
  let SynchronousDocumentMutations;
  let <class_fields_init>;
  class SynchronousDocumentMutations extends undefined { ... }
  <proto:SynchronousDocumentMutations>.request = function <atom:0>;
  <proto:SynchronousDocumentMutations>.apply = function <atom:0>;
  <proto:SynchronousDocumentMutations>.close = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SynchronousDocumentMutations>;
  SynchronousDocumentMutations = function <atom:0>;
  // close_loc <class_fields_init>
  SynchronousDocumentMutations#1 = function <atom:0>;
  exports.SynchronousDocumentMutations = SynchronousDocumentMutations#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/SynchronousDocumentMutations
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
