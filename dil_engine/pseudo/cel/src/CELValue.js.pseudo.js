// fn t  args=1 vars=3 closure=3 cpool=0 bc=176B file=cel/src/CELValue
// args: o
// locals: n, e
// closure: t, e, r
function {
  let n;
  if (!((null === o))) goto L_b;
  return true;
  n = typeof o;
  if ((("boolean" === n))) goto L_3e;
  if ((("number" === n))) goto L_3e;
  if ((("string" === n))) goto L_3e;
  if (!(("function" === n))) goto L_43;
  return true;
  if (!(Array.isArray(o))) goto L_96;
  let e;
  e = 0;
  if (!((e < o.length))) goto L_93;
  if (!(!t(o[e]))) goto L_89;
  return false;
  e = <e_new>;
  (e++);
  goto L_74;
  return true;
  if (!(("object" === n))) goto L_af;
  if ((!!e(o))) goto L_af;
  return r(o);
}

// fn e  args=1 vars=1 closure=0 cpool=0 bc=57B file=cel/src/CELValue
// args: t
function {
  if (!(("object" == typeof t))) goto L_38;
  if (!((null !== t))) goto L_38;
  return (true === t.__celHostObject);
}

// fn r  args=1 vars=3 closure=1 cpool=0 bc=104B file=cel/src/CELValue
// args: e
// locals: r, o
// closure: t
function {
  let r;
  if (((null === e))) goto L_40;
  if ((("object" != typeof e))) goto L_40;
  if (!(Array.isArray(e))) goto L_45;
  return false;
  r = e;
  let o;
  for (const o of r) {
    if (!(!t(r[o]))) continue;
    return false;
  }
  <catch>;
  return true;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=cel/src/CELValue
// args: require, module, exports
// locals: t, e, r
function {
  t = function t;
  e = function e;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isCELValue = undefined;
  exports.isCELHostObject = undefined;
  exports.isCELMap = undefined;
  exports.isCELValue = t;
  exports.isCELHostObject = e;
  exports.isCELMap = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELValue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
