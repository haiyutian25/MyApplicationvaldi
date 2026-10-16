// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=dil_sandbox/src/DILSandboxDictation
// args: t
function {
  t.Create = 0;
  t[0] = "Create";
  t.Start = 1;
  t[1] = "Start";
  t.Stop = 2;
  t[2] = "Stop";
  t.Cancel = 3;
  t[3] = "Cancel";
  t.Dispose = 4;
  t[4] = "Dispose";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=68B file=dil_sandbox/src/DILSandboxDictation
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.send = t;
  this.getInteractionId = e;
  this.nextId = 1;
  this.observers = new Map();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=dil_sandbox/src/DILSandboxDictation
// locals: this
function {
  this = this;
  return (undefined !== this.getInteractionId());
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=224B file=dil_sandbox/src/DILSandboxDictation
// locals: e
// closure: this, i, t
function {
  let e;
  e = this.getInteractionId();
  if (!((undefined !== e))) goto L_df;
  if (!(this.observers.has(i))) goto L_df;
  this.send({kind: t.Start, id: i, interactionId: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=163B file=dil_sandbox/src/DILSandboxDictation
// closure: this, i, t
function {
  if (!(this.observers.has(i))) goto L_a2;
  this.send({kind: t.Stop, id: i});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=163B file=dil_sandbox/src/DILSandboxDictation
// closure: this, i, t
function {
  if (!(this.observers.has(i))) goto L_a2;
  this.send({kind: t.Cancel, id: i});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=163B file=dil_sandbox/src/DILSandboxDictation
// closure: this, i, t
function {
  if (!(this.observers.delete(i))) goto L_a2;
  this.send({kind: t.Dispose, id: i});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=4 bc=268B file=dil_sandbox/src/DILSandboxDictation
// args: e, s
// locals: i, this
// closure: t
function {
  this = this;
  let i;
  this.nextId = <this.nextId_new>;
  i = (this.nextId++);
  this.observers.set(i, s);
  this.send({kind: t.Create, id: i, options: e});
  return {start: function <atom:0>, stop: function <atom:0>, cancel: function <atom:0>, dispose: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=84B file=dil_sandbox/src/DILSandboxDictation
// args: t, e
// locals: this
function {
  this = this;
  if (!((this.observers.get(t) == null))) goto L_51;
  this.observers.get(t);
  goto L_53;
  undefined(e);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=164B file=dil_sandbox/src/DILSandboxDictation
// args: require, module, exports
// locals: t, DILSandboxWorkerDictation, <class_fields_init>, DILSandboxWorkerDictation#1
function {
  let DILSandboxWorkerDictation#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDictationCommandKind = undefined;
  exports.DILSandboxWorkerDictation = undefined;
  if ((t)) goto L_65;
  t = {};
  exports.DILDictationCommandKind = {};
  function <atom:0>({});
  let DILSandboxWorkerDictation;
  let <class_fields_init>;
  class DILSandboxWorkerDictation extends undefined { ... }
  <proto:DILSandboxWorkerDictation>.isUserInteraction = function <atom:0>;
  <proto:DILSandboxWorkerDictation>.createSession = function <atom:0>;
  <proto:DILSandboxWorkerDictation>.receive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxWorkerDictation>;
  DILSandboxWorkerDictation = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxWorkerDictation#1 = function <atom:0>;
  exports.DILSandboxWorkerDictation = DILSandboxWorkerDictation#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxDictation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
