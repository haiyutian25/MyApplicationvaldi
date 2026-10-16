// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=oai_web_launcher/src/WebPageSession
// args: e
function {
  e.Loading = "loading";
  e.Loaded = "loaded";
  e.Failed = "failed";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=50B file=oai_web_launcher/src/WebPageSession
// args: e, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.controller = e;
  this.handleStateChange = s;
  this.disposed = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=271B file=oai_web_launcher/src/WebPageSession
// args: s
// locals: this
// closure: e
function {
  this = this;
  if ((this.disposed)) goto L_10e;
  this.controller.setListener(this);
  this.handleStateChange({status: e.Loading});
  this.controller.load({url: s});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=192B file=oai_web_launcher/src/WebPageSession
// locals: this
// closure: e
function {
  this = this;
  if ((this.disposed)) goto L_bf;
  this.handleStateChange({status: e.Loading});
  this.controller.reload();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=198B file=oai_web_launcher/src/WebPageSession
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_c5;
  this.disposed = true;
  this.controller.setListener(undefined);
  this.controller.dispose();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=oai_web_launcher/src/WebPageSession
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=118B file=oai_web_launcher/src/WebPageSession
// args: s
// locals: this
// closure: e
function {
  this = this;
  if ((this.disposed)) goto L_75;
  this.handleStateChange({status: e.Failed});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=118B file=oai_web_launcher/src/WebPageSession
// locals: this
// closure: e
function {
  this = this;
  if ((this.disposed)) goto L_75;
  this.handleStateChange({status: e.Loaded});
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=8 bc=188B file=oai_web_launcher/src/WebPageSession
// args: require, module, exports
// locals: e, WebPageSession, <class_fields_init>, WebPageSession#1
function {
  let WebPageSession#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WebPageLoadStatus = undefined;
  exports.WebPageSession = undefined;
  if ((e)) goto L_65;
  e = {};
  exports.WebPageLoadStatus = {};
  function <atom:0>({});
  let WebPageSession;
  let <class_fields_init>;
  class WebPageSession extends undefined { ... }
  <proto:WebPageSession>.load = function <atom:0>;
  <proto:WebPageSession>.reload = function <atom:0>;
  <proto:WebPageSession>.dispose = function <atom:0>;
  <proto:WebPageSession>.onMessage = function <atom:0>;
  <proto:WebPageSession>.onLoadFailed = function <atom:0>;
  <proto:WebPageSession>.onLoadCompleted = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WebPageSession>;
  WebPageSession = function <atom:0>;
  // close_loc <class_fields_init>
  WebPageSession#1 = function <atom:0>;
  exports.WebPageSession = WebPageSession#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_web_launcher/src/WebPageSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
