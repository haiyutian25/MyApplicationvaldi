// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/Application
// args: e
// closure: i
function {
  i = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=valdi_core/src/Application
// closure: e
function {
  e.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=82B file=valdi_core/src/Application
// closure: t, r
function {
  if (!(t.isVersionAtLeast(195))) goto L_50;
  return r.getState();
  return 0;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=11B file=valdi_core/src/Application
// closure: n, e, o
function {
  if ((n)) goto L_a;
  e(o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=80B file=valdi_core/src/Application
// args: o
// closure: n, e
function {
  Promise.resolve().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=47B file=valdi_core/src/Application
// closure: n, e
function {
  n = true;
  true;
  e.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=7B file=valdi_core/src/Application
// closure: n
function {
  n = true;
  true;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=3 bc=133B file=valdi_core/src/Application
// args: e
// locals: n, o, e#1
// closure: t, r
function {
  let o;
  let n;
  n = false;
  o = function <atom:0>;
  if (!(t.isVersionAtLeast(195))) goto L_71;
  let e#1;
  e#1 = r.observeState(o);
  return {cancel: function <atom:0>};
  o(0);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Application
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=178B file=valdi_core/src/Application
// args: o
// closure: n, e
function {
  if (!(n.observeEnteredBackground)) goto L_4d;
  return n.observeEnteredBackground(o);
  if (!(e.isLoggingEnabled)) goto L_a3;
  console.error("Application.observeEnteredBackground not implemented");
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Application
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=178B file=valdi_core/src/Application
// args: o
// closure: n, e
function {
  if (!(n.observeEnteredForeground)) goto L_4d;
  return n.observeEnteredForeground(o);
  if (!(e.isLoggingEnabled)) goto L_a3;
  console.error("Application.observeEnteredForeground not implemented");
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Application
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=182B file=valdi_core/src/Application
// args: o
// closure: n, e
function {
  if (!(n.observeKeyboardHeight)) goto L_4d;
  return n.observeKeyboardHeight(o);
  if (!(e.isLoggingEnabled)) goto L_a3;
  console.error("Application.observeKeyboardHeight not implemented");
  o(0);
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=166B file=valdi_core/src/Application
// closure: n, e
function {
  if (!(n.isForegrounded)) goto L_4c;
  return n.isForegrounded();
  if (!(e.isLoggingEnabled)) goto L_a2;
  console.error("Application.isForegrounded not implemented");
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=166B file=valdi_core/src/Application
// closure: n, e
function {
  if (!(n.isIntegrationTestEnvironment)) goto L_4c;
  return n.isIntegrationTestEnvironment();
  if (!(e.isLoggingEnabled)) goto L_a2;
  console.error("Application.isTestEnvironment not implemented");
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=165B file=valdi_core/src/Application
// closure: n, e
function {
  if (!(n.getAppVersion)) goto L_4c;
  return n.getAppVersion();
  if (!(e.isLoggingEnabled)) goto L_a2;
  console.error("Application.appVersion not implemented");
  return "";
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_core/src/Application
// closure: i
function {
  return i;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=9 bc=109B file=valdi_core/src/Application
// args: o
// closure: t, r, n, e, i
function {
  o.getState = function <atom:0>;
  o.observeState = function <atom:0>;
  o.observeEnteredBackground = function <atom:0>;
  o.observeEnteredForeground = function <atom:0>;
  o.observeKeyboardHeight = function <atom:0>;
  o.isForegrounded = function <atom:0>;
  o.isIntegrationTestEnvironment = function <atom:0>;
  o.getAppVersion = function <atom:0>;
  o.getKeyboardHeight = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=390B file=valdi_core/src/Application
// args: require, module, exports
// locals: e, n, o, r, t, i, e#1, s
function {
  let i;
  let t;
  let r;
  let o;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Application = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  n = require("./ApplicationBridge");
  o = require("./ModuleLoaderGlobal");
  r = require("./ApplicationStateNative");
  t = require("./CompilerIntrinsics");
  i = 0;
  if (!(n.observeKeyboardHeight)) goto L_16d;
  let e#1;
  e#1 = n.observeKeyboardHeight(function <atom:0>);
  o.getModuleLoader(module).onHotReload(module, module.path, function <atom:0>);
  // close_loc e#1
  if ((s)) goto L_183;
  s = {};
  exports.Application = {};
  !function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Application
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
