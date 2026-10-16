// fn <atom:0>  args=2 vars=22 closure=3 cpool=0 bc=2382B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n, i
// locals: t, e, o, k, n#1, t#1, s, c, l, d, u, p, m, g, S, s#1, c#1, l#1, d#1, u#1
// closure: a, r, o
function {
  let u#1;
  let d#1;
  let l#1;
  let c#1;
  let s#1;
  let e;
  let t;
  t = a.readObject(n, "Finance account links response.links[".concat(i, "]"));
  if (!(!Array.isArray(t.accounts))) goto L_f4;
  throw new TypeError("Finance account links response.links[".concat(i, "].accounts must be an array"));
  e = [];
  let k;
  let o;
  const _it1 = t.accounts.entries();
  goto L_662;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  k = <value(_it2)>;
  let S;
  let g;
  let m;
  let p;
  let u;
  let d;
  let l;
  let c;
  let s;
  let t#1;
  let n#1;
  n#1 = a.readObject(k, "Finance account links response.links[".concat(i, "].accounts[", o, "]"));
  if ((("string" != typeof n#1.account_id))) goto L_250;
  if (((0 === n#1.account_id.trim().length))) goto L_662;
  t#1 = a.optionalNonBlankString(n#1.item_id);
  s = a.optionalNonBlankString(n#1.name);
  c = a.optionalNonBlankString(n#1.official_name);
  l = a.optionalNonBlankString(n#1.mask);
  d = a.optionalNonBlankString(n#1.type);
  u = a.optionalNonBlankString(n#1.subtype);
  p = a.optionalNonBlankString(n#1.display_account_type);
  m = a.optionalNonBlankString(n#1.institution_id);
  g = r(n#1.balances);
  S = a.optionalNonBlankString(n#1.last_successful_update);
  if (!((undefined !== t#1))) goto L_580;
  goto L_581;
  // [栈深重同步 4 -> 6]
  null;
  {};
  if (!((undefined !== s))) goto L_598;
  goto L_599;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== c))) goto L_5b0;
  goto L_5b1;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== l))) goto L_5c8;
  goto L_5c9;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== d))) goto L_5e0;
  goto L_5e1;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== u))) goto L_5f8;
  goto L_5f9;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== p))) goto L_610;
  goto L_611;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== m))) goto L_628;
  goto L_629;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== g))) goto L_640;
  goto L_641;
  // [栈深重同步 7 -> 6]
  null;
  {};
  if (!((undefined !== S))) goto L_658;
  goto L_659;
  // [栈深重同步 7 -> 6]
  null;
  {};
  <?>.call(<value(_it2)>, <?>);
  if (!(<done(_it2)>)) goto L_14a;
  <value(_it2)>;
  s#1 = a.optionalNonBlankString(t.item_id);
  c#1 = a.optionalNonBlankString(t.status);
  l#1 = a.optionalNonBlankString(t.sync_status);
  d#1 = a.optionalNonBlankString(t.last_update);
  u#1 = a.optionalNonBlankString(t.institution_logo);
  if (!((undefined !== s#1))) goto L_872;
  goto L_873;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined === u#1))) goto L_8d0;
  goto L_8f8;
  // [栈深重同步 2 -> 1]
  if (!((undefined !== c#1))) goto L_90f;
  goto L_910;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== l#1))) goto L_927;
  goto L_928;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== d#1))) goto L_93f;
  goto L_940;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {id: a.readNonBlankString(t.id, "Finance account links response.links[".concat(i, "].id")), institutionName: a.optionalNonBlankString(t.institution_name), institutionLogo: o.resolveInstitutionLogo(u#1), accounts: e};
}

// fn c  args=1 vars=2 closure=3 cpool=1 bc=216B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
// locals: i
// closure: a, r, o
function {
  let i;
  i = a.readObject(n, "Finance account links response");
  if (!(!Array.isArray(i.links))) goto L_8e;
  throw new TypeError("Finance account links response.links must be an array");
  return i.links.map(function <atom:0>);   // tail call
}

// fn r  args=1 vars=9 closure=1 cpool=0 bc=1035B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
// locals: i, t, o, e, s, c, r, l
// closure: a
function {
  let l;
  let r;
  let c;
  let s;
  let e;
  let o;
  let t;
  let i;
  if (!(!a.isRecord(n))) goto L_42;
  return;
  if (!(a.isFiniteNumber(n.available))) goto L_af;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(a.isFiniteNumber(n.current))) goto L_11e;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(a.isFiniteNumber(n.display))) goto L_18d;
  goto L_18e;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!(a.isFiniteNumber(n.net))) goto L_1fc;
  goto L_1fd;
  // [栈深重同步 1 -> 0]
  e = undefined;
  if (!(a.isFiniteNumber(n.limit))) goto L_26b;
  goto L_26c;
  // [栈深重同步 1 -> 0]
  s = undefined;
  c = a.optionalNonBlankString(n.iso_currency_code);
  r = a.optionalNonBlankString(n.unofficial_currency_code);
  l = a.optionalNonBlankString(n.last_updated_datetime);
  if (!((undefined !== i))) goto L_35c;
  goto L_35d;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== t))) goto L_374;
  goto L_375;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== o))) goto L_38c;
  goto L_38d;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== e))) goto L_3a4;
  goto L_3a5;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== s))) goto L_3bc;
  goto L_3bd;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== c))) goto L_3d4;
  goto L_3d5;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== r))) goto L_3ec;
  goto L_3ed;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined !== l))) goto L_404;
  goto L_405;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {};
}

// fn l  args=1 vars=3 closure=1 cpool=0 bc=344B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
// locals: i, t
// closure: a
function {
  let t;
  let i;
  i = a.readObject(n, "Finance account linking session response");
  t = a.optionalNonBlankString(i.finance_kit_sync_behavior);
  if (!((undefined !== t))) goto L_a8;
  if (!(("live" !== t))) goto L_a8;
  if (!(("simulated" !== t))) goto L_a8;
  throw new TypeError("Finance account linking session response.finance_kit_sync_behavior must be live or simulated");
  return {oauthStateId: a.readNonBlankString(i.oauth_state_id, "Finance account linking session response.oauth_state_id"), linkToken: a.readNonBlankString(i.token, "Finance account linking session response.token"), financeKitSyncBehavior: t};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=544B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
// locals: i
// closure: a, e, o
function {
  let i;
  if ((!Number.isInteger(n.accountCount))) goto L_77;
  if (!((n.accountCount <= 0))) goto L_88;
  throw new TypeError("Finance linked institution.account_count must be a positive integer");
  i = a.optionalNonBlankString(n.logo);
  if (!((a.optionalNonBlankString(n.name) == null))) goto L_1b6;
  a.optionalNonBlankString(n.name);
  if (!((undefined !== i))) goto L_1f2;
  goto L_1f3;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {id: a.readNonBlankString(n.institutionId, "Finance linked institution.institution_id"), name: e.default.financeLinkedInstitutionFallbackName(), accountCount: n.accountCount};
}

// fn d  args=1 vars=2 closure=4 cpool=1 bc=221B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
// locals: t
// closure: a, e, o, i
function {
  let t;
  t = i.decode(n);
  if (!((undefined === t.linkedInstitutions))) goto L_63;
  throw new TypeError("Finance account linking state response.linked_institutions is required");
  return {finished: t.finished, linkedInstitutions: t.linkedInstitutions.map(function <atom:0>)};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: n
function {
  n.IOS = 0;
  n[0] = "IOS";
  n.Android = 1;
  n[1] = "Android";
  n.Web = 2;
  n[2] = "Web";
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=5 bc=1173B file=chatgpt_finance/src/FinanceAccountLinkingModels
// args: require, module, exports
// locals: n, i, t, o, e, a, s, c, r, l, d
function {
  c = function c;
  r = function r;
  l = function l;
  d = function d;
  let a;
  let e;
  let o;
  let t;
  let i;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceAccountLinkingPlatform = undefined;
  exports.decodeFinanceAccountLinks = undefined;
  exports.decodeFinanceAccountLinkingSession = undefined;
  exports.decodeFinanceAccountLinkingStatus = undefined;
  n = require("valdi_core/src/JsonSerializationRuntime");
  i = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "FinanceAccountLinkingStatusWire", fields: [{name: "finished", jsonName: "finished", schema: {kind: n.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "linkedInstitutions", jsonName: "linked_institutions", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "FinanceLinkedInstitutionWire", fields: [{name: "institutionId", jsonName: "institution_id", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: false, resilient: false}, {name: "logo", jsonName: "logo", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: false, resilient: false}, {name: "accountCount", jsonName: "account_count", schema: {kind: n.JsonSchemaKind.Number}, optional: false, resilient: false}]}}, optional: true, resilient: false}]});
  t = require("valdi_core/src/JsonSerialization");
  o = require("./FinanceInstitutionModels");
  e = require("./Strings");
  a = require("./TypeUtils");
  if ((s)) goto L_46d;
  s = {};
  exports.FinanceAccountLinkingPlatform = {};
  !function <atom:0>({});
  exports.decodeFinanceAccountLinks = c;
  exports.decodeFinanceAccountLinkingSession = l;
  exports.decodeFinanceAccountLinkingStatus = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceAccountLinkingModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
