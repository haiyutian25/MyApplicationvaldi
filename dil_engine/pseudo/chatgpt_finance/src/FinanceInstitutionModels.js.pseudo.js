// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=444B file=chatgpt_finance/src/FinanceInstitutionModels
// args: n, e
// locals: s, o
// closure: t, i
function {
  let o;
  let s;
  s = t.readObject(n, "Finance institutions response.institutions[".concat(e, "]"));
  o = t.optionalNonBlankString(s.logo);
  if (!((undefined === o))) goto L_1ab;
  goto L_1b6;
  // [栈深重同步 2 -> 1]
  null;
  {logo: i(o)};
  return {id: t.readNonBlankString(s.id, "Finance institutions response.institutions[".concat(e, "].id")), name: t.readNonBlankString(s.name, "Finance institutions response.institutions[".concat(e, "].name"))};
}

// fn n  args=1 vars=3 closure=2 cpool=1 bc=479B file=chatgpt_finance/src/FinanceInstitutionModels
// args: n
// locals: e, s
// closure: t, i
function {
  let s;
  let e;
  e = t.readObject(n, "Finance institutions response");
  if (!(!Array.isArray(e.institutions))) goto L_91;
  throw new TypeError("Finance institutions response.institutions must be an array");
  s = e.institutions.map(function <atom:0>);
  return {institutions: s, total: t.readNonNegativeInteger(e.total, "Finance institutions response.total"), offset: t.readNonNegativeInteger(e.offset, "Finance institutions response.offset"), limit: t.readPositiveInteger(e.limit, "Finance institutions response.limit")};
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=181B file=chatgpt_finance/src/FinanceInstitutionModels
// args: t
function {
  if ((t.startsWith("data:"))) goto L_86;
  if ((t.startsWith("https://"))) goto L_86;
  if (!(t.startsWith("http://"))) goto L_8a;
  return t;
  return "data:image/png;base64,".concat(t);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=chatgpt_finance/src/FinanceInstitutionModels
// args: require, module, exports
// locals: t, n, i
function {
  n = function n;
  i = function i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.decodeFinanceInstitutionsPage = undefined;
  exports.resolveInstitutionLogo = undefined;
  t = require("./TypeUtils");
  exports.decodeFinanceInstitutionsPage = n;
  exports.resolveInstitutionLogo = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceInstitutionModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
