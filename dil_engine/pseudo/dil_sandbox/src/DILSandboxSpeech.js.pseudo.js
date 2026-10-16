// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_sandbox/src/DILSandboxSpeech
// args: e
function {
  e.Create = 0;
  e[0] = "Create";
  e.Play = 1;
  e[1] = "Play";
  e.Stop = 2;
  e[2] = "Stop";
  e.Dispose = 3;
  e[3] = "Dispose";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=68B file=dil_sandbox/src/DILSandboxSpeech
// args: e, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.send = e;
  this.getInteractionId = s;
  this.nextId = 1;
  this.observers = new Map();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=42B file=dil_sandbox/src/DILSandboxSpeech
// locals: this
function {
  this = this;
  return (undefined !== this.getInteractionId());
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=230B file=dil_sandbox/src/DILSandboxSpeech
// args: s
// locals: t
// closure: this, i, e
function {
  let t;
  t = this.getInteractionId();
  if (!((undefined !== t))) goto L_e5;
  if (!(this.observers.has(i))) goto L_e5;
  this.send({kind: e.Play, id: i, interactionId: t, logging: s});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=222B file=dil_sandbox/src/DILSandboxSpeech
// args: s
// closure: this, i, e
function {
  if (!(this.observers.has(i))) goto L_dd;
  if (!((undefined !== s))) goto L_ce;
  goto L_cf;
  // [栈深重同步 4 -> 3]
  this.send({kind: e.Stop, id: i, interactionId: undefined, logging: s});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=163B file=dil_sandbox/src/DILSandboxSpeech
// closure: this, i, e
function {
  if (!(this.observers.delete(i))) goto L_a2;
  this.send({kind: e.Dispose, id: i});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=3 bc=256B file=dil_sandbox/src/DILSandboxSpeech
// args: s, t
// locals: i, this
// closure: e
function {
  this = this;
  let i;
  this.nextId = <this.nextId_new>;
  i = (this.nextId++);
  this.observers.set(i, t);
  this.send({kind: e.Create, id: i, source: s});
  return {play: function <atom:0>, stop: function <atom:0>, dispose: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=84B file=dil_sandbox/src/DILSandboxSpeech
// args: e, s
// locals: this
function {
  this = this;
  if (!((this.observers.get(e) == null))) goto L_51;
  this.observers.get(e);
  goto L_53;
  undefined(s);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=164B file=dil_sandbox/src/DILSandboxSpeech
// args: require, module, exports
// locals: e, DILSandboxWorkerSpeech, <class_fields_init>, DILSandboxWorkerSpeech#1
function {
  let DILSandboxWorkerSpeech#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSpeechCommandKind = undefined;
  exports.DILSandboxWorkerSpeech = undefined;
  if ((e)) goto L_65;
  e = {};
  exports.DILSpeechCommandKind = {};
  function <atom:0>({});
  let DILSandboxWorkerSpeech;
  let <class_fields_init>;
  class DILSandboxWorkerSpeech extends undefined { ... }
  <proto:DILSandboxWorkerSpeech>.isUserInteraction = function <atom:0>;
  <proto:DILSandboxWorkerSpeech>.createSession = function <atom:0>;
  <proto:DILSandboxWorkerSpeech>.receive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxWorkerSpeech>;
  DILSandboxWorkerSpeech = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxWorkerSpeech#1 = function <atom:0>;
  exports.DILSandboxWorkerSpeech = DILSandboxWorkerSpeech#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxSpeech
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
