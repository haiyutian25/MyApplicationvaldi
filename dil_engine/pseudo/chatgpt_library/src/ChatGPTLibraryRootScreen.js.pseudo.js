// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=770B file=chatgpt_library/src/ChatGPTLibraryRootScreen
// locals: this
// closure: e, r, t
function {
  this = this;
  e.beginComponent(r.ChatGPTLibraryScreen, t, undefined, undefined);
  if ((e.hasContext())) goto L_269;
  if (!((undefined === this.context.openConversation))) goto L_138;
  goto L_181;
  // [栈深重同步 4 -> 3]
  null;
  {openConversation: this.context.openConversation};
  if (!((undefined === this.context.trackEvent))) goto L_218;
  goto L_261;
  // [栈深重同步 4 -> 3]
  null;
  {trackEvent: this.context.trackEvent};
  e.setContext({navigator: this.context.navigator, platformServices: this.context.platformServices});
  e.setViewModelProperty("accountId", this.viewModel.accountId);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_library/src/ChatGPTLibraryRootScreen
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=268B file=chatgpt_library/src/ChatGPTLibraryRootScreen
// args: require, module, exports
// locals: e, t, o, r, ChatGPTLibraryRootScreen, <class_fields_init>, ChatGPTLibraryRootScreen#1
function {
  let ChatGPTLibraryRootScreen#1;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTLibraryRootScreen = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "m_e1073OK91QtJ7R");
  o = require("valdi_core/src/Component");
  r = require("./ChatGPTLibraryScreen");
  let ChatGPTLibraryRootScreen;
  let <class_fields_init>;
  class ChatGPTLibraryRootScreen extends o.Component { ... }
  <proto:ChatGPTLibraryRootScreen>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTLibraryRootScreen>;
  ChatGPTLibraryRootScreen = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTLibraryRootScreen#1 = function <atom:0>;
  exports.ChatGPTLibraryRootScreen = ChatGPTLibraryRootScreen#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_library/src/ChatGPTLibraryRootScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
