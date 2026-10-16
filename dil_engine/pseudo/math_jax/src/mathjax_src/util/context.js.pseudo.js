// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=625B file=math_jax/src/mathjax_src/util/context
// locals: n, o, e, i
// closure: exports
function {
  if (!(exports.hasWindow)) goto L_1a3;
  if (!(window.navigator)) goto L_1a3;
  let o;
  let n;
  n = window.navigator.appVersion;
  o = [["Win", "Windows"], ["Mac", "MacOS"], ["X11", "Unix"], ["Linux", "Unix"]];
  let i;
  let e;
  const _it1 = o;
  goto L_122;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  e = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  if (!(n.includes(e))) goto L_122;
  return i;
  // [栈深重同步 0 -> 3]
  if (!(<done(<?>)>)) goto L_e4;
  <value(<?>)>;
  if (!(window.navigator.userAgent.includes("Android"))) goto L_26b;
  return "Unix";
  if (!(("undefined" != typeof process))) goto L_26b;
  if (({linux: "Unix", android: "Unix", aix: "Unix", freebsd: "Unix", netbsd: "Unix", openbsd: "Unix", sunos: "Unix", darwin: "MacOS", win32: "Windows", cygwin: "Windows"}[process.platform])) goto L_26a;
  return process.platform;
  return "unknown";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/util/context
// args: n
function {
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=8 bc=188B file=math_jax/src/mathjax_src/util/context
// args: n
function {
  if (!(n.match(new RegExp("^[/\\\\]?[a-zA-Z]:[/\\\\]")))) goto L_8c;
  return ("file://" + n.replace(new RegExp("\\\\"), "/").replace(new RegExp("^\\/"), ""));
  return n.replace(new RegExp("^\\/"), "file:///");
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=3 bc=386B file=math_jax/src/mathjax_src/util/context
// args: require, module, exports
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.hasWindow = undefined;
  exports.context = undefined;
  exports.hasWindow = ("undefined" != typeof window);
  if (!(exports.hasWindow)) goto L_91;
  goto L_92;
  // [栈深重同步 3 -> 2]
  if (!(exports.hasWindow)) goto L_e3;
  goto L_e4;
  // [栈深重同步 3 -> 2]
  exports.context = {window: null, document: null, os: function <atom:0>(), path: function <atom:0>};
  if (!(("Windows" === exports.context.os))) goto L_181;
  exports.context.path = function <atom:0>;
  function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/context
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
