// fn r  args=2 vars=4 closure=6 cpool=0 bc=161B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: t, r
// locals: a, o
// closure: o, n, i, c, e, s
function {
  let a;
  for (const a of o.getDILComponentNames()) {
    let o;
    o = n.createDilComponentPlaceholder(a, i(a, r), c(a));
    e.freezeObjectGraph(o, false);
    s(t, a, o);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=138B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: o
// closure: d, e, r, n
function {
  if (!(("server" === o.handler))) goto L_51;
  goto L_86;
  // [栈深重同步 3 -> 2]
  d.dispatchAction(e.bindDILClientAction(o, {nativeWidgetResolutionId: r, componentName: n}));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=84B file=dil_sandbox/src/DILSandboxComponentGlobals
// locals: o
// closure: d, e, r, n, l, u, i, c
function {
  let o;
  if (!((undefined === r))) goto L_e;
  return l;
  null;
  d;
  o = e.hardenApiFacade({dispatchAction: function <atom:0>});
  return u(i, c, o);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=7 cpool=1 bc=313B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: o
// locals: t, r, a
// closure: d, e, n, l, u, i, c
function {
  let a;
  let r;
  let t;
  null;
  o;
  t = {__state: o.__state, __resolutionId: o.__resolutionId};
  if (!((undefined === t.__state))) goto L_da;
  if (!(("string" == typeof t.__resolutionId))) goto L_da;
  goto L_db;
  // [栈深重同步 1 -> 0]
  r = undefined;
  a = i.useMemo(function <atom:0>, [r]);
  return c.jsx(a, t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=6 cpool=1 bc=345B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: i, c, s
// locals: d, l, u
// closure: e, n, r, t, o, a
function {
  let u;
  let l;
  let d;
  if (!((undefined === r))) goto L_85;
  r = new Function("DIL", "__dil", "GenUI", ""use strict";
return (".concat(t.getDILComponentSource(n, o), ");"));
  new Function("DIL", "__dil", "GenUI", ""use strict";
return (".concat(t.getDILComponentSource(n, o), ");"));
  d = a(n, s);
  l = r(i, c, d);
  if (!(("function" != typeof l))) goto L_dc;
  throw new Error("DIL sandbox component '".concat(n, "' did not evaluate to a function."));
  Object.defineProperty(l, "name", {configurable: true, value: n});
  if (((undefined === d))) goto L_14c;
  if (!(!t.isDILRestrictedComponent(n))) goto L_152;
  return l;
  u = r;
  return function <atom:0>;
}

// fn i  args=2 vars=3 closure=3 cpool=1 bc=8B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: n, o
// locals: r
// closure: e, t, a
function {
  let r;
  r = undefined;
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: e
// closure: o, t
function {
  o.dispatchAction(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=68B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: e
// closure: o, t
function {
  o.dispatchAction({handler: "client", type: "log_event", payload: e}, t);
  return;
}

// fn a  args=2 vars=3 closure=2 cpool=2 bc=75B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: n, o
// locals: t
// closure: c, e
function {
  let t;
  if (!((undefined === o))) goto L_9;
  return;
  t = c(n);
  null;
  o;
  return e.hardenApiFacade({dispatchAction: function <atom:0>, logEvent: function <atom:0>});   // tail call
}

// fn c  args=1 vars=1 closure=0 cpool=4 bc=141B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: e
function {
  if (!(("OpGenuiResolvedComponentBoundary" === e))) goto L_b;
  return undefined;
  return e.replace(new RegExp("([a-z\\d])([A-Z])"), "$1_$2").replace(new RegExp("([A-Z])([A-Z][a-z])"), "$1_$2").toLowerCase();
}

// fn s  args=3 vars=3 closure=0 cpool=0 bc=176B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: e, n, o
function {
  if (!((undefined !== Object.getOwnPropertyDescriptor(e, n)))) goto L_68;
  throw new Error("DIL sandbox component global '".concat(n, "' already exists."));
  Object.defineProperty(e, n, {configurable: false, enumerable: false, value: o, writable: false});
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=167B file=dil_sandbox/src/DILSandboxComponentGlobals
// args: require, module, exports
// locals: e, n, o, t, r, i, a, c, s
function {
  r = function r;
  i = function i;
  a = function a;
  c = function c;
  s = function s;
  let t;
  let o;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.installDILSandboxComponentGlobals = undefined;
  exports.createDILSandboxComponentGenUI = undefined;
  e = require("dil_renderer/src/DILApiFacade");
  n = require("dil_renderer/src/DILElement");
  o = require("./DILComponentNames");
  t = require("./DILComponentSources");
  exports.installDILSandboxComponentGlobals = r;
  exports.createDILSandboxComponentGenUI = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxComponentGlobals
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
