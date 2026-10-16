// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=chatgpt_finance/src/FinanceProfileModels
// args: e
// closure: a
function {
  return a.readObject(e, "Finance profile account");   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=439B file=chatgpt_finance/src/FinanceProfileModels
// args: e, i
// locals: n
// closure: a
function {
  let n;
  n = a.readObject(e, "Finance profile institutions[".concat(i, "]"));
  if (!(!Array.isArray(n.accounts))) goto L_b8;
  throw new TypeError("Finance profile institution accounts must be an array");
  null;
  n;
  return {id: a.readNonBlankString(n.id, "Finance profile institution id"), provider: a.readNonBlankString(n.provider, "Finance profile institution provider"), accounts: n.accounts.map(function <atom:0>)};
}

// fn o  args=1 vars=3 closure=2 cpool=1 bc=310B file=chatgpt_finance/src/FinanceProfileModels
// args: e
// locals: n, o
// closure: a, i
function {
  let o;
  let n;
  n = a.readObject(e, "Finance profile");
  o = i.decode(n.capabilities);
  if (!(!Array.isArray(n.institutions))) goto L_dd;
  throw new TypeError("Finance profile institutions must be an array");
  return {institutions: n.institutions.map(function <atom:0>), capabilities: o};
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=828B file=chatgpt_finance/src/FinanceProfileModels
// args: require, module, exports
// locals: e, i, n, a, o
function {
  o = function o;
  let a;
  let n;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.decodeFinanceUserProfile = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  i = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "FinanceCapabilities", fields: [{name: "linked_accounts", jsonName: "linked_accounts", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "credit_score", jsonName: "credit_score", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "manual_accounts", jsonName: "manual_accounts", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "stock_watchlist", jsonName: "stock_watchlist", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "taxes", jsonName: "taxes", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}]});
  n = require("valdi_core/src/JsonSerialization");
  a = require("./TypeUtils");
  exports.decodeFinanceUserProfile = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceProfileModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
