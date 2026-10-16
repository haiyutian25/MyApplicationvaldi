// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=87B file=chatgpt_multiplayer/src/MultiplayerAdmissionError
// args: r, s
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("The multiplayer admission request was rejected.");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("The multiplayer admission request was rejected.");
  this.statusCode = r;
  this.reason = s;
  this.name = "MultiplayerAdmissionError";
  return this;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=111B file=chatgpt_multiplayer/src/MultiplayerAdmissionError
// args: require, module, exports
// locals: MultiplayerAdmissionError, <class_fields_init>, MultiplayerAdmissionError#1
function {
  let MultiplayerAdmissionError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerAdmissionError = undefined;
  let MultiplayerAdmissionError;
  let <class_fields_init>;
  class MultiplayerAdmissionError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:MultiplayerAdmissionError>;
  MultiplayerAdmissionError = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerAdmissionError#1 = function <atom:0>;
  exports.MultiplayerAdmissionError = MultiplayerAdmissionError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerAdmissionError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
