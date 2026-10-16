// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_webview/src/WebView
// closure: e
function {
  return e.createNativeController();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=valdi_webview/src/WebView
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=128B file=valdi_webview/src/WebView
// args: require, module, exports
// locals: e, WebView, <class_fields_init>, WebView#1
function {
  let WebView#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WebView = undefined;
  e = require("./WebViewNative");
  let WebView;
  let <class_fields_init>;
  class WebView extends undefined { ... }
  function <atom:0>.createController = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebView>;
  WebView = function <atom:0>;
  // close_loc <class_fields_init>
  WebView#1 = function <atom:0>;
  exports.WebView = WebView#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_webview/src/WebView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
