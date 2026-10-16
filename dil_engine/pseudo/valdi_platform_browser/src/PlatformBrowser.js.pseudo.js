// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_platform_browser/src/PlatformBrowser
// args: r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.openNativeURL = r;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=151B file=valdi_platform_browser/src/PlatformBrowser
// args: o, s
// closure: r, e, t
function {
  if ((o)) goto L_89;
  if (!(r.isLoggingEnabled)) goto L_89;
  if (!((s == null))) goto L_86;
  s;
  console.error("Unable to open platform browser for ".concat(e));
  if (!((t == null))) goto L_93;
  t;
  goto L_96;
  undefined(o, s);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=138B file=valdi_platform_browser/src/PlatformBrowser
// args: e, t
// locals: this
// closure: r, o
function {
  this = this;
  if (!((0 === o.hostnameFromUrl(e).length))) goto L_61;
  throw new Error("PlatformBrowser only supports absolute HTTP(S) URLs: ".concat(e));
  this.openNativeURL(e, function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=250B file=valdi_platform_browser/src/PlatformBrowser
// args: require, module, exports
// locals: r, o, e, PlatformBrowser, <class_fields_init>, PlatformBrowser#1
function {
  let PlatformBrowser#1;
  let e;
  let o;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PlatformBrowser = undefined;
  exports.platformBrowser = undefined;
  r = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  o = require("coreutils/src/url");
  e = require("./NativePlatformBrowser");
  let PlatformBrowser;
  let <class_fields_init>;
  class PlatformBrowser extends undefined { ... }
  <proto:PlatformBrowser>.openURL = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PlatformBrowser>;
  PlatformBrowser = function <atom:0>;
  // close_loc <class_fields_init>
  PlatformBrowser#1 = function <atom:0>;
  exports.PlatformBrowser = PlatformBrowser#1;
  exports.platformBrowser = new PlatformBrowser#1(e.openPlatformBrowser);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_platform_browser/src/PlatformBrowser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
