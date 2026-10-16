// fn i  args=1 vars=1 closure=0 cpool=0 bc=80B file=chatgpt_wallet_core/src/WalletWireModels
// args: e
function {
  if (((null === e))) goto L_3d;
  if ((("object" != typeof e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_4e;
  throw new Error("Invalid Wallet response object");
  return e;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=67B file=chatgpt_wallet_core/src/WalletWireModels
// args: e
function {
  if (((null === e))) goto L_3d;
  if ((("object" != typeof e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_41;
  return undefined;
  return e;
}

// fn r  args=1 vars=2 closure=1 cpool=0 bc=222B file=chatgpt_wallet_core/src/WalletWireModels
// args: e
// locals: a
// closure: n
function {
  let a;
  if (!((true === e.isError))) goto L_39;
  throw new Error("Wallet cards request failed");
  a = n.decode(e.structuredContent);
  if (!(!a.ok)) goto L_b9;
  throw new Error("Wallet cards were not available");
  return a.cards;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=1577B file=chatgpt_wallet_core/src/WalletWireModels
// args: require, module, exports
// locals: e, n, a, i, o, r
function {
  i = function i;
  o = function o;
  r = function r;
  let a;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.walletObject = undefined;
  exports.optionalWalletObject = undefined;
  exports.decodeWalletCards = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  n = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "SavedCardsWire", fields: [{name: "ok", jsonName: "ok", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}, {name: "cards", jsonName: "cards", schema: {kind: e.JsonSchemaKind.Array, element: {kind: e.JsonSchemaKind.Object, name: "SavedCardWire", fields: [{name: "walletEntryId", jsonName: "wallet_entry_id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "last4", jsonName: "last4", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "brand", jsonName: "brand", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "nickname", jsonName: "nickname", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "displayName", jsonName: "display_name", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "cardType", jsonName: "card_type", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "productName", jsonName: "product_name", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "isDefault", jsonName: "is_default", schema: {kind: e.JsonSchemaKind.Boolean}, optional: false, resilient: false}]}}, optional: false, resilient: false}]});
  a = require("valdi_core/src/JsonSerialization");
  exports.walletObject = i;
  exports.optionalWalletObject = o;
  exports.decodeWalletCards = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletWireModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
