// fn <atom:0>  args=3 vars=5 closure=6 cpool=0 bc=274B file=dil_cel/src/utils/Environment
// args: s, p, u
// locals: a, c
// closure: n, r, i, t, e, o
function {
  let c;
  let a;
  a = String(u).trim().toLowerCase();
  if (((a === n))) goto L_68;
  if (!((a === r))) goto L_91;
  return (i.presentationSurface === a);
  c = t[a];
  if (!((undefined === c))) goto L_108;
  e.emitWarning(s, new Error("bp() defaulted unknown breakpoint "".concat(String(u), "" to false")));
  return false;
  return (o(i) >= c);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=38B file=dil_cel/src/utils/Environment
// args: e, t
// closure: i
function {
  return (true === i.dark);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=114B file=dil_cel/src/utils/Environment
// args: e, n
// closure: i, o, t
function {
  if (!((undefined !== i.mobile))) goto L_49;
  return i.mobile;
  return (o(i) < t.sm);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=116B file=dil_cel/src/utils/Environment
// args: e, t
// closure: i
function {
  if (!(i.now)) goto L_4a;
  return i.now();
  return Date.now();
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=118B file=dil_cel/src/utils/Environment
// args: e, t, n
// closure: i
function {
  if (((undefined === i.supportedClientActions))) goto L_75;
  return i.supportedClientActions.includes(String(n));
}

// fn i  args=1 vars=1 closure=5 cpool=5 bc=58B file=dil_cel/src/utils/Environment
// args: i
// closure: n, r, t, e, o
function {
  return {bp: function <atom:0>, isDark: function <atom:0>, isMobile: function <atom:0>, now: function <atom:0>, supportsClientAction: function <atom:0>};
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_cel/src/utils/Environment
// args: e
function {
  if (!((e.viewportWidth == null))) goto L_2a;
  e.viewportWidth;
  return 390;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=160B file=dil_cel/src/utils/Environment
// args: require, module, exports
// locals: e, t, n, r, i, o
function {
  i = function i;
  o = function o;
  let r;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createEnvironmentHelpers = undefined;
  e = require("./Warnings");
  t = {lg: 1024, md: 768, sm: 640, xl: 1280, xs: 0};
  n = "voice-stage";
  r = "live-activity";
  exports.createEnvironmentHelpers = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/utils/Environment
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
