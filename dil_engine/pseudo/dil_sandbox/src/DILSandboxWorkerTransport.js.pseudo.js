// fn e  args=3 vars=4 closure=0 cpool=0 bc=154B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: o, e, t
// locals: r
function {
  let r;
  r = o.message;
  if (!((3 !== r.kind))) goto L_50;
  return o;
  if (!((undefined === e))) goto L_64;
  throw new Error("DIL sandbox render app data must be serialized before transport.");
  if (!((undefined === t))) goto L_78;
  throw new Error("DIL sandbox render constants must be serialized before transport.");
  null;
  o;
  null;
  r;
  return {message: {appData: e, constants: t}};
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=410B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: e
// locals: t, o, e#1, r
// closure: o, s
function {
  let t;
  t = e;
  if (!((4 === t.kind))) goto L_15b;
  if (!((undefined === t.interactionId))) goto L_15b;
  if (!(o.isDILSandboxBoundServerAction(t.action))) goto L_15b;
  let r;
  let e#1;
  let o;
  if (((undefined === undefined))) goto L_118;
  o = <to_object>(undefined).nativeWidgetResolutionId;
  e#1 = <to_object>(undefined).componentName;
  r = {};
  <to_object>(undefined);
  {nativeWidgetResolutionId: null, componentName: null};
  goto L_140;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_b7;
  // [栈深重同步 1 -> 0]
  null;
  t;
  s({action: r, componentScope: undefined});
  return;
  if (!((4 === t.kind))) goto L_195;
  null;
  t;
  goto L_198;
  // [栈深重同步 2 -> 1]
  s(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILSandboxWorkerTransport
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=40B file=dil_sandbox/src/DILSandboxWorkerTransport
// closure: t
function {
  t.setReceiver(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=44B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: o, r, n
// closure: t, e
function {
  t.post(e(o, r, n), undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: o
// closure: s
function {
  return s(o.data);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=73B file=dil_sandbox/src/DILSandboxWorkerTransport
// closure: i
function {
  i.port1.close();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=2 cpool=0 bc=78B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: o, t, r
// closure: i, e
function {
  i.port1.postMessage(e(o, t, r));
  return;
}

// fn t  args=4 vars=7 closure=2 cpool=6 bc=351B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: t, r, n, s
// locals: r#1, i, a
// closure: o, e
function {
  let a;
  let i;
  if (!((undefined === r))) goto L_89;
  let r#1;
  t.setReceiver(function <atom:0>);
  r#1 = {kind: 8, messageId: n};
  t.post(r#1, undefined);
  return {dispose: function <atom:0>, post: function <atom:0>};
  i = new r();
  i.port1.onmessage = function <atom:0>;
  a = {kind: 7, messageId: n, port: i.port2};
  t.post(a, [i.port2]);
  return {dispose: function <atom:0>, post: function <atom:0>};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=dil_sandbox/src/DILSandboxWorkerTransport
// args: require, module, exports
// locals: o, e, t
function {
  e = function e;
  t = function t;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILSandboxWorkerTransport = undefined;
  o = require("./DILSandboxProtocol");
  exports.createDILSandboxWorkerTransport = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxWorkerTransport
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
