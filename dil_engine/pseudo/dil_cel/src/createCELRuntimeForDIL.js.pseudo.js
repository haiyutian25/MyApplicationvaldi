// fn c  args=1 vars=5 closure=10 cpool=0 bc=914B file=dil_cel/src/createCELRuntimeForDIL
// args: c
// locals: p, E, S, m
// closure: r, t, l, i, a, n, u, o, e, s
function {
  let m;
  let S;
  let E;
  let p;
  if (!((c == null))) goto L_15;
  c;
  goto L_36;
  if (!((undefined.state == null))) goto L_63;
  undefined.state;
  p = new r.CELState();
  null;
  t.CALCULATOR_HELPERS;
  if (!((c == null))) goto L_b9;
  c;
  null;
  l.createEnvironmentHelpers({});
  null;
  i.createExpressionHelpers();
  null;
  a.MATH_HELPERS;
  null;
  o.STATE_HELPERS;
  E = {localeConvertCurrency: n.localeConvertCurrency, localeFormatCurrency: n.localeFormatCurrency, formatSigFigs: n.formatSigFigs, localeNumberToString: n.localeNumberToString, localeSanitizeNumberString: n.localeSanitizeNumberString, localeStringToNumber: n.localeStringToNumber, replace_all: u.replace_all, round: n.round, slice: n.slice, state: p.value};
  S = {replace_all: u.replace_all};
  m = new e.CELRuntime({globalValues: E, receiverFunctions: S});
  if (!((c == null))) goto L_36b;
  c;
  goto L_38c;
  s.setDILCELWarningReporter(m, undefined.warningReporter);
  return m;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=1 bc=200B file=dil_cel/src/createCELRuntimeForDIL
// args: require, module, exports
// locals: e, r, t, l, i, n, a, o, u, s, c
function {
  c = function c;
  let s;
  let u;
  let o;
  let a;
  let n;
  let i;
  let l;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createCELRuntimeForDIL = undefined;
  e = require("cel/src/CELRuntime");
  r = require("./CELState");
  t = require("./utils/CalculatorHelpers");
  l = require("./utils/Environment");
  i = require("./utils/ExpressionHelpers");
  n = require("./utils/Formatting");
  a = require("./utils/MathHelpers");
  o = require("./utils/StateHelpers");
  u = require("./utils/StringHelpers");
  s = require("./utils/Warnings");
  exports.createCELRuntimeForDIL = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_cel/src/createCELRuntimeForDIL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
