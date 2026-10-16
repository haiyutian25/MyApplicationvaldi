// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.editor = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=69B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: e, this
function {
  this = this;
  let e;
  e = this.editor();
  if (!((undefined === e))) goto L_41;
  throw new Error("The downloaded document has not been saved yet");
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: this
function {
  this = this;
  if (!((this.editor() == null))) goto L_2e;
  this.editor();
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.persistence;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().applyRemoteUpdate(e));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=116B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().syncState());   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=116B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().encodeFullState());   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().encodeUpdateSince(e));   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=118B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e, r
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().prepareSynchronization(e, r));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().applyAcknowledgment(e));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=116B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().refreshLocalPresence());   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().applyRemotePresence(e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: e
// locals: this
function {
  this = this;
  return Promise.resolve(this.requireEditor().removeRemotePresence(e));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=12 bc=195B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// args: require, module, exports
// locals: BrowserCollaborativeEditorEngine, <class_fields_init>, BrowserCollaborativeEditorEngine#1
function {
  let BrowserCollaborativeEditorEngine#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BrowserCollaborativeEditorEngine = undefined;
  let BrowserCollaborativeEditorEngine;
  let <class_fields_init>;
  class BrowserCollaborativeEditorEngine extends undefined { ... }
  <proto:BrowserCollaborativeEditorEngine>.requireEditor = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.persistence = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.applyRemoteUpdate = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.syncState = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.encodeFullState = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.encodeUpdateSince = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.prepareSynchronization = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.applyAcknowledgment = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.refreshLocalPresence = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.applyRemotePresence = function <atom:0>;
  <proto:BrowserCollaborativeEditorEngine>.removeRemotePresence = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BrowserCollaborativeEditorEngine>;
  BrowserCollaborativeEditorEngine = function <atom:0>;
  // close_loc <class_fields_init>
  BrowserCollaborativeEditorEngine#1 = function <atom:0>;
  exports.BrowserCollaborativeEditorEngine = BrowserCollaborativeEditorEngine#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserCollaborativeEditorEngine
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
