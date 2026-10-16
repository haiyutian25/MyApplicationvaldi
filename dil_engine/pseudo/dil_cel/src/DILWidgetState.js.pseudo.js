// fn e  args=1 vars=1 closure=0 cpool=0 bc=83B file=dil_cel/src/DILWidgetState
// args: e
function {
  return JSON.parse(JSON.stringify(e));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=8B file=dil_cel/src/DILWidgetState
// args: e, a
// closure: t, r
function {
  return t(e, r[a]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=128B file=dil_cel/src/DILWidgetState
// args: e
// closure: o, t, a
function {
  if (!(Object.prototype.hasOwnProperty.call(o, e))) goto L_7f;
  return t(a[e], o[e]);
}

// fn t  args=2 vars=5 closure=1 cpool=2 bc=435B file=dil_cel/src/DILWidgetState
// args: e, r
// locals: a, o, s
// closure: t
function {
  let s;
  let o;
  let a;
  if (!((e === r))) goto L_11;
  return true;
  if (((null === e))) goto L_33;
  if (((null === r))) goto L_33;
  if ((("object" != typeof e))) goto L_33;
  if (!(("object" != typeof r))) goto L_38;
  return false;
  if ((Array.isArray(e))) goto L_90;
  if (!(Array.isArray(r))) goto L_122;
  if (!(Array.isArray(e))) goto L_121;
  if (!(Array.isArray(r))) goto L_121;
  if (!((e.length === r.length))) goto L_121;
  return e.every(function <atom:0>);
  a = e;
  o = r;
  s = Object.keys(a);
  if (!((s.length === Object.keys(o).length))) goto L_1b2;
  return s.every(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=dil_cel/src/DILWidgetState
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.copyDILWidgetState = undefined;
  exports.areDILWidgetStateValuesEqual = undefined;
  exports.copyDILWidgetState = e;
  exports.areDILWidgetStateValuesEqual = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/DILWidgetState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
