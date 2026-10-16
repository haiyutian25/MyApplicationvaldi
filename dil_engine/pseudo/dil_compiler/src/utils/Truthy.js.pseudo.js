// fn e  args=1 vars=1 closure=0 cpool=0 bc=100B file=dil_compiler/src/utils/Truthy
// args: e
function {
  if (!((null !== e))) goto L_63;
  if (!(("boolean" == typeof e))) goto L_13;
  return e;
  if (!(("number" == typeof e))) goto L_21;
  return (0 !== e);
  if (!(("string" == typeof e))) goto L_30;
  return (e.length > 0);
  if ((!Array.isArray(e))) goto L_63;
  return (e.length > 0);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_compiler/src/utils/Truthy
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isTruthy = undefined;
  exports.isTruthy = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/utils/Truthy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
