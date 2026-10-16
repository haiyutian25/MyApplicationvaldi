// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
function {
  return n.isDefault;
}

// fn i  args=1 vars=3 closure=1 cpool=1 bc=492B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
// locals: t, a
// closure: e
function {
  let a;
  let t;
  t = e.decode(n.structuredContent);
  if (((true === n.isError))) goto L_9e;
  if (!(!t.ok)) goto L_af;
  throw new Error("Wallet contact info could not be loaded");
  if (!((0 === t.contactInfos.length))) goto L_d9;
  return;
  a = t.contactInfos.filter(function <atom:0>);
  if (!((1 !== a.length))) goto L_13b;
  throw new Error("Wallet default contact is unavailable");
  if ((!a[0].contactProfileId.trim())) goto L_1d5;
  if (!(!a[0].revision.trim())) goto L_1e6;
  throw new Error("Wallet contact identity is unavailable");
  return a[0];
}

// fn l  args=1 vars=2 closure=1 cpool=0 bc=343B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
// locals: e
// closure: t
function {
  let e;
  e = t.decode(n.structuredContent);
  if (((true === n.isError))) goto L_9b;
  if (!(!e.ok)) goto L_ac;
  throw new Error("Wallet contact info could not be saved");
  if ((!e.contactProfileId.trim())) goto L_142;
  if (!(!e.revision.trim())) goto L_153;
  throw new Error("Saved Wallet contact identity is unavailable");
  return e;
}

// fn s  args=1 vars=2 closure=0 cpool=0 bc=536B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
// locals: e
function {
  let e;
  e = n.contactAddress;
  if (!(n.name.trim())) goto L_215;
  if (!(n.email.trim())) goto L_215;
  if (!(n.phone.trim())) goto L_215;
  if (!((e == null))) goto L_11d;
  e;
  goto L_16a;
  if (!((undefined.line1 == null))) goto L_146;
  undefined.line1;
  goto L_16a;
  if (!(undefined.trim())) goto L_215;
  if (!((e.city == null))) goto L_19d;
  e.city;
  goto L_1c1;
  if (!(undefined.trim())) goto L_215;
  if (!((e.country == null))) goto L_1f1;
  e.country;
  goto L_215;
  return Boolean(undefined.trim());   // tail call
}

// fn c  args=1 vars=2 closure=0 cpool=0 bc=859B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
// locals: e
function {
  let e;
  e = n.contactAddress;
  if (!((e == null))) goto L_114;
  e;
  goto L_161;
  if (!((undefined.line1 == null))) goto L_13d;
  undefined.line1;
  goto L_161;
  if ((undefined.trim())) goto L_166;
  if (!((e == null))) goto L_176;
  e;
  goto L_1c3;
  if (!((undefined.line2 == null))) goto L_19f;
  undefined.line2;
  goto L_1c3;
  if ((undefined.trim())) goto L_1c8;
  if (!((e == null))) goto L_1d8;
  e;
  goto L_225;
  if (!((undefined.city == null))) goto L_201;
  undefined.city;
  goto L_225;
  if ((undefined.trim())) goto L_22a;
  if (!((e == null))) goto L_23a;
  e;
  goto L_287;
  if (!((undefined.state == null))) goto L_263;
  undefined.state;
  goto L_287;
  if ((undefined.trim())) goto L_28c;
  if (!((e == null))) goto L_29c;
  e;
  goto L_2e9;
  if (!((undefined.postalCode == null))) goto L_2c5;
  undefined.postalCode;
  goto L_2e9;
  if ((undefined.trim())) goto L_2ee;
  if (!((e == null))) goto L_2fe;
  e;
  goto L_34b;
  if (!((undefined.country == null))) goto L_327;
  undefined.country;
  goto L_34b;
  if ((undefined.trim())) goto L_350;
  return {name: n.name.trim(), email: n.email.trim(), phone: n.phone.trim(), contactAddress: {line1: null, line2: null, city: null, state: null, postalCode: null, country: null}};
}

// fn r  args=2 vars=3 closure=0 cpool=0 bc=591B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n, e
// locals: t
function {
  let t;
  t = n.contactAddress;
  if (!((undefined === e))) goto L_2f;
  goto L_7e;
  // [栈深重同步 2 -> 1]
  null;
  {contact_profile_id: e.contactProfileId, revision: e.revision};
  if (!((t == null))) goto L_105;
  t;
  goto L_126;
  if (!((undefined.line1 == null))) goto L_12c;
  undefined.line1;
  if (!((t == null))) goto L_13c;
  t;
  goto L_15d;
  if (!((undefined.line2 == null))) goto L_163;
  undefined.line2;
  if (!((t == null))) goto L_173;
  t;
  goto L_194;
  if (!((undefined.city == null))) goto L_19a;
  undefined.city;
  if (!((t == null))) goto L_1aa;
  t;
  goto L_1cb;
  if (!((undefined.state == null))) goto L_1d1;
  undefined.state;
  if (!((t == null))) goto L_1e1;
  t;
  goto L_202;
  if (!((undefined.postalCode == null))) goto L_208;
  undefined.postalCode;
  if (!((t == null))) goto L_218;
  t;
  goto L_239;
  if (!((undefined.country == null))) goto L_23f;
  undefined.country;
  return {contact_info: {name: n.name, email: n.email, phone: n.phone, contact_address: {line1: null, line2: null, city: null, state: null, postal_code: null, country: null}}};
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=92B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n, e
// closure: r
function {
  return (JSON.stringify(r(n, undefined)) === JSON.stringify(r(e, undefined)));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_wallet_core/src/WalletContactInfo
// args: n
function {
  n.Loading = 0;
  n[0] = "Loading";
  n.Editing = 1;
  n[1] = "Editing";
  n.Saving = 2;
  n[2] = "Saving";
  n.LoadError = 3;
  n[3] = "LoadError";
  return;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=7 bc=4428B file=chatgpt_wallet_core/src/WalletContactInfo
// args: require, module, exports
// locals: n, e, t, a, o, i, l, s, c, r, m
function {
  i = function i;
  l = function l;
  s = function s;
  c = function c;
  r = function r;
  m = function m;
  let a;
  let t;
  let e;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletContactStatus = undefined;
  exports.emptyWalletContactInfo = undefined;
  exports.decodeDefaultWalletContact = undefined;
  exports.decodeSavedWalletContact = undefined;
  exports.hasCompleteWalletContact = undefined;
  exports.normalizeWalletContactForSave = undefined;
  exports.walletContactSaveArguments = undefined;
  exports.sameWalletContactInfo = undefined;
  n = require("valdi_core/src/JsonSerializationRuntime");
  e = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "WalletContactList", fields: [{name: "ok", jsonName: "ok", schema: {kind: n.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "contactInfos", jsonName: "contact_infos", schema: {kind: n.JsonSchemaKind.Array, element: {kind: n.JsonSchemaKind.Object, name: "WalletContactProfile", fields: [{name: "contactProfileId", jsonName: "contact_profile_id", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "revision", jsonName: "revision", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "isDefault", jsonName: "is_default", schema: {kind: n.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "contactInfo", jsonName: "contact_info", schema: {kind: n.JsonSchemaKind.Object, name: "WalletContactInfo", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "email", jsonName: "email", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "phone", jsonName: "phone", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "contactAddress", jsonName: "contact_address", schema: {kind: n.JsonSchemaKind.Object, name: "WalletContactAddress", fields: [{name: "line1", jsonName: "line1", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "line2", jsonName: "line2", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "city", jsonName: "city", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "state", jsonName: "state", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "postalCode", jsonName: "postal_code", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "country", jsonName: "country", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]}, optional: false, resilient: false}]}}, optional: false, resilient: false}]});
  t = n.createJsonSerializer({kind: n.JsonSchemaKind.Object, name: "WalletContactSave", fields: [{name: "ok", jsonName: "ok", schema: {kind: n.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "contactProfileId", jsonName: "contact_profile_id", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "revision", jsonName: "revision", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "isDefault", jsonName: "is_default", schema: {kind: n.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "contactInfo", jsonName: "contact_info", schema: {kind: n.JsonSchemaKind.Object, name: "WalletContactInfo", fields: [{name: "name", jsonName: "name", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "email", jsonName: "email", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "phone", jsonName: "phone", schema: {kind: n.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "contactAddress", jsonName: "contact_address", schema: {kind: n.JsonSchemaKind.Object, name: "WalletContactAddress", fields: [{name: "line1", jsonName: "line1", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "line2", jsonName: "line2", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "city", jsonName: "city", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "state", jsonName: "state", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "postalCode", jsonName: "postal_code", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "country", jsonName: "country", schema: {kind: n.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]}, optional: false, resilient: false}]});
  a = require("valdi_core/src/JsonSerialization");
  if ((o)) goto L_10dd;
  o = {};
  exports.WalletContactStatus = {};
  !function <atom:0>({});
  exports.emptyWalletContactInfo = {name: "", email: "", phone: "", contactAddress: {}};
  exports.decodeDefaultWalletContact = i;
  exports.decodeSavedWalletContact = l;
  exports.hasCompleteWalletContact = s;
  exports.normalizeWalletContactForSave = c;
  exports.walletContactSaveArguments = r;
  exports.sameWalletContactInfo = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletContactInfo
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
