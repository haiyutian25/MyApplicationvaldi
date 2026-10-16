// fn e  args=1 vars=1 closure=0 cpool=0 bc=219B file=dil_sandbox/src/DILSandboxProtocol
// args: e
function {
  if (!(("server" === e.handler))) goto L_da;
  if (!(("string" == typeof e.nativeWidgetResolutionId))) goto L_da;
  if (!((e.nativeWidgetResolutionId.length > 0))) goto L_da;
  if (!(("string" == typeof e.componentName))) goto L_da;
  return (e.componentName.length > 0);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_sandbox/src/DILSandboxProtocol
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isDILSandboxBoundServerAction = undefined;
  exports.isDILSandboxBoundServerAction = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxProtocol
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
