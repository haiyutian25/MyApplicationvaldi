// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet_core/src/WalletApi
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet_core/src/WalletApi
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn _  args=1 vars=1 closure=1 cpool=0 bc=17B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: d
function {
  if (((e === d))) goto L_10;
  return ("asdk_app_openai_wallet" === e);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=100B file=chatgpt_wallet_core/src/WalletApi
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Wallet MCP error ".concat(String(e)));
  if (!(<class_fields_init>)) goto L_51;
  <class_fields_init>.call(this);
  new new.target("Wallet MCP error ".concat(String(e)));
  this.code = e;
  return this;
}

// fn k  args=2 vars=4 closure=2 cpool=0 bc=439B file=chatgpt_wallet_core/src/WalletApi
// args: e, t
// locals: n, a
// closure: s, d
function {
  let a;
  let n;
  if (!((s.optionalWalletObject(e._meta) == null))) goto L_79;
  s.optionalWalletObject(e._meta);
  goto L_9a;
  if (!((s.optionalWalletObject(undefined._codex_apps) == null))) goto L_a3;
  s.optionalWalletObject(undefined._codex_apps);
  goto L_c4;
  n = undefined.resource_uri;
  if (!(("string" == typeof n))) goto L_ff;
  goto L_102;
  // [栈深重同步 1 -> 0]
  a = [];
  if (((4 !== a.length))) goto L_1a0;
  if ((("" !== a[0]))) goto L_1a0;
  if (((a[1] !== d))) goto L_1a0;
  if ((!a[2])) goto L_1a0;
  if ((a[2].startsWith("synthetic_link::"))) goto L_1a0;
  if ((a[2].startsWith("implicit_link::"))) goto L_1a0;
  if (!((a[3] !== t))) goto L_1b1;
  throw new Error("Wallet response has no authorized link route");
  return a[2];
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=92B file=chatgpt_wallet_core/src/WalletApi
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.client = e;
  this.requests = new Set();
  this.requestId = 0;
  this.disposed = false;
  this.linkGeneration = 0;
  this.shouldRefreshLink = false;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=172B file=chatgpt_wallet_core/src/WalletApi
// locals: e, this
function {
  this = this;
  this.disposed = true;
  let e;
  for (const e of this.requests) {
    e.cancel();
  }
  this.requests.clear();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=59B file=chatgpt_wallet_core/src/WalletApi
// locals: this
function {
  this = this;
  this.linkGeneration = (this.linkGeneration ++);
  this.shouldRefreshLink = true;
  return;
}

// fn <atom:0>  args=0 vars=7 closure=6 cpool=0 bc=798B file=chatgpt_wallet_core/src/WalletApi
// locals: e, t, l, n, a, i, this
// closure: WalletMCPError, WalletNotConnectedError, WalletUnavailableError, s, o, k
function {
  this = this;
  let i;
  let a;
  let n;
  let t;
  let e;
  e = this.linkGeneration;
  t = undefined;
  try { // catch -> L_bd
  if (!(this.shouldRefreshLink)) goto L_8e;
  goto L_b1;
  // [栈深重同步 5 -> 4]
  t = (await this.callAction("list_saved_cards", {}, this.selectedLinkId));
  (await this.callAction("list_saved_cards", {}, this.selectedLinkId));
  <?>;
  goto L_13b;
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_13a
  if ((!(l instanceof WalletMCPError))) goto L_f3;
  if (!((-32001 !== l.code))) goto L_f7;
  throw l;
  if (!((await this.canConnect()))) goto L_12d;
  throw new WalletNotConnectedError("Wallet is not connected");
  throw new WalletUnavailableError("Wallet is unavailable");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((s.optionalWalletObject(t.meta) == null))) goto L_1b0;
  s.optionalWalletObject(t.meta);
  goto L_1d1;
  if (!((s.optionalWalletObject(undefined.wallet_card_art_urls) == null))) goto L_271;
  s.optionalWalletObject(undefined.wallet_card_art_urls);
  if (!((s.optionalWalletObject(t._meta) == null))) goto L_24f;
  s.optionalWalletObject(t._meta);
  goto L_270;
  n = s.optionalWalletObject(undefined.wallet_card_art_urls);
  a = o.walletCardsFromWire(s.decodeWalletCards(t), n);
  i = k(t, "list_saved_cards");
  if (!((this.linkGeneration === e))) goto L_319;
  this.selectedLinkId = i;
  this.shouldRefreshLink = false;
  false;
  return a; // async
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=570B file=chatgpt_wallet_core/src/WalletApi
// args: e
// locals: t, n, a, i, this
// closure: c, W
function {
  this = this;
  let i;
  let a;
  let n;
  let t;
  this.checkActive();
  t = this.selectedLinkId;
  if (!((undefined === t))) goto L_70;
  throw new Error("Wallet has no selected link");
  if (((undefined === undefined))) goto L_9c;
  n = <to_object>(undefined).cardId;
  <to_object>(undefined);
  goto L_a0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_75;
  // [栈深重同步 1 -> 0]
  a = undefined;
  i = {wallet_entry_id: n};
  if (!((e.kind === c.WalletCardMutationKind.Rename))) goto L_15e;
  a = "set_payment_method_nickname";
  "set_payment_method_nickname";
  null;
  i;
  if ((e.name)) goto L_151;
  i = {nickname: null};
  {nickname: null};
  goto L_206;
  if (!((e.kind === c.WalletCardMutationKind.Remove))) goto L_1b3;
  a = "delete_payment_method";
  "delete_payment_method";
  goto L_206;
  if (!((e.kind === c.WalletCardMutationKind.SetPreferred))) goto L_206;
  a = "set_default_payment_method";
  "set_default_payment_method";
  e.kind;
  return W((await this.callAction(a, i, t))); // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=116B file=chatgpt_wallet_core/src/WalletApi
// args: t
// closure: e, d, n
function {
  if (((e === t))) goto L_73;
  if (((e === "wallet.".concat(t)))) goto L_73;
  return (e === "/".concat(d, "/", n, "/", t));
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=1 bc=305B file=chatgpt_wallet_core/src/WalletApi
// args: e, t
// locals: n, a, this
// closure: d, u
function {
  this = this;
  let a;
  let n;
  this.checkActive();
  if (!((t == null))) goto L_56;
  t;
  n = this.selectedLinkId;
  if (!((undefined === n))) goto L_6d;
  throw new Error("Wallet has no selected link");
  a = u.find(function <atom:0>);
  if (!((undefined === a))) goto L_ad;
  throw new Error("Wallet tool is not available in this scope");
  return {name: "wallet.".concat(a), action: a, linkId: n, resourcePath: "/".concat(d, "/", n, "/", a)}; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=231B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: d, m
function {
  if (!(("open_vgs_card_enrollment" !== e.action))) goto L_39;
  throw new Error("Wallet enrollment requires the secure opener");
  return {toolName: e.name, actionName: e.action, connectorID: d, linkID: e.linkId, resourceURI: m, resourcePath: e.resourcePath};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=108B file=chatgpt_wallet_core/src/WalletApi
// args: e, t
// locals: this
function {
  this = this;
  return this.callAction(e.action, t, e.linkId);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=3 cpool=0 bc=437B file=chatgpt_wallet_core/src/WalletApi
// args: e, t, n
// locals: a, i, l, s, this
// closure: p, d, k
function {
  this = this;
  let s;
  let l;
  let i;
  let a;
  this.checkActive();
  if (!((undefined !== t.link_id))) goto L_91;
  if (!((t.link_id !== n))) goto L_91;
  throw new Error("Wallet tool arguments target another link");
  if (((undefined === undefined))) goto L_cc;
  a = <to_object>(undefined).link_id;
  i = {};
  <to_object>(undefined);
  {link_id: null};
  goto L_d0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_96;
  // [栈深重同步 1 -> 0]
  null;
  p;
  if (!((undefined === n))) goto L_13c;
  goto L_180;
  // [栈深重同步 5 -> 4]
  null;
  {_codex_apps: {resource_uri: "/".concat(d, "/", n, "/", e)}};
  l = (await this.rpc({name: "wallet.".concat(e), arguments: i, _meta: {}}));
  s = k(l, e);
  if (!((undefined !== n))) goto L_1b1;
  if (!((s !== n))) goto L_1b1;
  throw new Error("Wallet response targets another link");
  return l; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: t
function {
  return t.decode(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=148B file=chatgpt_wallet_core/src/WalletApi
// closure: t, this, d
function {
  return this.client.requestJson({request: {method: "GET", path: "/backend-api/ps/plugins/canonical-app/".concat(d)}, decode: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: n
function {
  return n.decode(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=154B file=chatgpt_wallet_core/src/WalletApi
// closure: n, this, s
function {
  return this.client.requestJson({request: {method: "GET", path: "/backend-api/ps/plugins/".concat(encodeURIComponent(s))}, decode: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: a
function {
  return a.decode(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=155B file=chatgpt_wallet_core/src/WalletApi
// closure: a, this, o
function {
  return this.client.requestJson({request: {method: "POST", path: "/backend-api/apps/availability", headers: [{name: "OAI-Product-Sku", value: "AEON"}], jsonBody: {app_ids: [o]}}, decode: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: _
function {
  return _(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=295B file=chatgpt_wallet_core/src/WalletApi
// args: e
function {
  if (((true !== e.available))) goto L_125;
  if (!((true !== e.installed))) goto L_7a;
  if (((true !== e.canInstall))) goto L_125;
  if (((null != e.disabledReason))) goto L_125;
  if (!((null != e.status))) goto L_125;
  if (!(("ENABLED" !== e.status))) goto L_125;
  return !("ONLY_ME" !== e.status);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: i
function {
  return i.decode(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=133B file=chatgpt_wallet_core/src/WalletApi
// closure: i, this
function {
  return this.client.requestJson({request: {method: "POST", path: "/backend-api/aip/connectors/links/list_accessible", jsonBody: {principals: [], link_refresh_strategy: "BLOCKING"}}, decode: function <atom:0>});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=161B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: _
function {
  if (!(_(e.connectorId))) goto L_a0;
  if (!(!e.id.startsWith("implicit_link::"))) goto L_a0;
  return ("HIDDEN" !== e.visibility);
}

// fn <atom:0>  args=0 vars=6 closure=6 cpool=7 bc=707B file=chatgpt_wallet_core/src/WalletApi
// locals: e, l, s, o, r, this
// closure: t, d, n, a, _, i
function {
  this = this;
  let r;
  let o;
  let s;
  let l;
  let e;
  e = (await this.perform(function <atom:0>));
  l = e.plugin;
  s = e.pluginId;
  if (!((null == l))) goto L_c3;
  if (!(s)) goto L_c3;
  l = (await this.perform(function <atom:0>));
  (await this.perform(function <atom:0>));
  if (!((l == null))) goto L_cf;
  l;
  goto L_f0;
  o = undefined.canonicalAppId;
  if (((null == l))) goto L_1a1;
  if ((("string" != typeof o))) goto L_1a1;
  if ((!_(o))) goto L_1a1;
  if ((("ENABLED" !== l.status))) goto L_1a1;
  if (!(("AVAILABLE" !== l.installationPolicy))) goto L_1a6;
  if (!(("INSTALLED_BY_DEFAULT" !== l.installationPolicy))) goto L_1a6;
  return false; // async
  r = (await this.perform(function <atom:0>)).apps.filter(function <atom:0>);
  if (((0 === r.length))) goto L_24c;
  if (!(!r.every(function <atom:0>))) goto L_251;
  return false; // async
  return !(await this.perform(function <atom:0>)).links.some(function <atom:0>); // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=247B file=chatgpt_wallet_core/src/WalletApi
// closure: this, h, t, e, s
function {
  return this.client.requestJson({request: {method: "POST", path: "/backend-api/ps/mcp", headers: [{name: "Accept", value: "application/json"}, {name: "OAI-Product-Sku", value: "aeon"}, {name: "MCP-Protocol-Version", value: h}], jsonBody: {jsonrpc: "2.0", id: t, method: "tools/call", params: e}}, decode: s.walletObject});   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=1 bc=575B file=chatgpt_wallet_core/src/WalletApi
// args: e
// locals: t, n, e#1, this
// closure: h, s, WalletMCPError
function {
  this = this;
  let n;
  let t;
  this.checkActive();
  this.requestId = (this.requestId ++);
  t = ("wallet-" + (this.requestId ++));
  n = (await this.perform(function <atom:0>));
  if ((("2.0" !== n.jsonrpc))) goto L_e1;
  if (!((n.id !== t))) goto L_f2;
  throw new Error("Invalid Wallet MCP response identity");
  if (!((undefined !== n.error))) goto L_1f5;
  let e#1;
  e#1 = s.walletObject(n.error);
  if (!(!Number.isInteger(e#1.code))) goto L_1c9;
  throw new Error("Invalid Wallet MCP error");
  throw new WalletMCPError(e#1.code);
  return s.walletObject(n.result); // async
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=657B file=chatgpt_wallet_core/src/WalletApi
// args: e
// locals: t, e#1, this
// closure: l, WalletUnavailableError
function {
  this = this;
  let t;
  this.checkActive();
  t = e();
  this.requests.add(t);
  try { // catch -> L_23e
  let e#1;
  e#1 = (await t.result);
  this.checkActive();
  if (!((e#1.kind === l.OAINetworkResultKind.Unavailable))) goto L_145;
  throw new WalletUnavailableError("Wallet transport is unavailable");
  if (!((e#1.kind !== l.OAINetworkResultKind.Success))) goto L_213;
  throw new Error("Wallet request failed (".concat(String(e#1.kind), ")"));
  // gosub (finally 块) 580
  return e#1.value; // async
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 580
  throw <?>;
  this.requests.delete(t);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=54B file=chatgpt_wallet_core/src/WalletApi
// locals: this
function {
  this = this;
  if (!(this.disposed)) goto L_35;
  throw new Error("Wallet account is no longer active");
  return;
}

// fn W  args=1 vars=1 closure=1 cpool=0 bc=157B file=chatgpt_wallet_core/src/WalletApi
// args: e
// closure: s
function {
  if (!((true !== e.isError))) goto L_9c;
  if (!((s.optionalWalletObject(e.structuredContent) == null))) goto L_7a;
  s.optionalWalletObject(e.structuredContent);
  goto L_9b;
  return (true === undefined.ok);
}

// fn <atom:0>  args=3 vars=33 closure=0 cpool=19 bc=3677B file=chatgpt_wallet_core/src/WalletApi
// args: require, module, exports
// locals: e, t, n, a, i, l, s, o, r, c, d, h, m, p, u, WalletNotConnectedError, <class_fields_init>, WalletNotConnectedError#1, WalletUnavailableError, <class_fields_init>#1, WalletUnavailableError#1, _, WalletMCPError, <class_fields_init>#2, WalletMCPError#1, k, WalletApi, <class_fields_init>#3, WalletApi#1, W
function {
  _ = function _;
  k = function k;
  W = function W;
  let WalletApi#1;
  let WalletMCPError#1;
  let WalletUnavailableError#1;
  let WalletNotConnectedError#1;
  let u;
  let p;
  let m;
  let h;
  let d;
  let c;
  let r;
  let o;
  let s;
  let l;
  let i;
  let a;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WALLET_ENROLLMENT_ACTIONS = undefined;
  exports.WalletNotConnectedError = undefined;
  exports.WalletUnavailableError = undefined;
  exports.WalletApi = undefined;
  exports.walletToolSucceeded = undefined;
  e = require("valdi_core/src/JsonSerializationRuntime");
  t = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "WalletCanonicalPluginWire", fields: [{name: "pluginId", jsonName: "plugin_id", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "plugin", jsonName: "plugin", schema: {kind: e.JsonSchemaKind.Object, name: "WalletPluginWire", fields: [{name: "canonicalAppId", jsonName: "canonical_app_id", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "status", jsonName: "status", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "installationPolicy", jsonName: "installation_policy", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]});
  n = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "WalletPluginWire", fields: [{name: "canonicalAppId", jsonName: "canonical_app_id", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "status", jsonName: "status", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "installationPolicy", jsonName: "installation_policy", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]});
  a = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "WalletAvailabilityResponseWire", fields: [{name: "apps", jsonName: "apps", schema: {kind: e.JsonSchemaKind.Array, element: {kind: e.JsonSchemaKind.Object, name: "WalletAvailabilityWire", fields: [{name: "id", jsonName: "id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "available", jsonName: "available", schema: {kind: e.JsonSchemaKind.Boolean}, optional: true, resilient: false}, {name: "installed", jsonName: "installed", schema: {kind: e.JsonSchemaKind.Boolean}, optional: true, resilient: false}, {name: "canInstall", jsonName: "can_install", schema: {kind: e.JsonSchemaKind.Boolean}, optional: true, resilient: false}, {name: "status", jsonName: "status", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}, {name: "disabledReason", jsonName: "disabled_reason", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]}}, optional: false, resilient: false}]});
  i = e.createJsonSerializer({kind: e.JsonSchemaKind.Object, name: "WalletLinksWire", fields: [{name: "links", jsonName: "links", schema: {kind: e.JsonSchemaKind.Array, element: {kind: e.JsonSchemaKind.Object, name: "WalletLinkWire", fields: [{name: "id", jsonName: "id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "connectorId", jsonName: "connector_id", schema: {kind: e.JsonSchemaKind.String}, optional: false, resilient: false}, {name: "visibility", jsonName: "visibility", schema: {kind: e.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]}}, optional: false, resilient: false}]});
  l = require("oai_platform_services/src/OAINetworkClient");
  s = require("./WalletWireModels");
  o = require("./WalletModels");
  r = require("valdi_core/src/JsonSerialization");
  c = require("./WalletCardMutation");
  d = "connector_openai_wallet";
  h = "2025-06-18";
  m = "internal://wallet-vgs-card-enrollment";
  p = {x-codex-turn-metadata: {mcp_request_meta: {selected_connector_ids: [d]}}};
  exports.WALLET_ENROLLMENT_ACTIONS = new Set(["open_vgs_card_enrollment", "register_vgs_agentic_token", "request_vgs_card_verification", "verify_vgs_card", "refresh_vgs_card_verification", "finalize_vgs_card_registration"]);
  // append(["list_saved_cards", "set_payment_method_nickname", "set_default_payment_method", "delete_payment_method", "list_wallet_contact_infos", "save_wallet_contact_info"], 6, exports.WALLET_ENROLLMENT_ACTIONS)
  exports.WALLET_ENROLLMENT_ACTIONS;
  u = ["list_saved_cards", "set_payment_method_nickname", "set_default_payment_method", "delete_payment_method", "list_wallet_contact_infos", "save_wallet_contact_info"];
  let WalletNotConnectedError;
  let <class_fields_init>;
  class WalletNotConnectedError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:WalletNotConnectedError>;
  WalletNotConnectedError = function <atom:0>;
  // close_loc <class_fields_init>
  WalletNotConnectedError#1 = function <atom:0>;
  exports.WalletNotConnectedError = WalletNotConnectedError#1;
  let WalletUnavailableError;
  let <class_fields_init>#1;
  class WalletUnavailableError extends Error { ... }
  <class_fields_init>#1 = undefined;
  <proto:WalletUnavailableError>;
  WalletUnavailableError = function <atom:0>;
  // close_loc <class_fields_init>#1
  WalletUnavailableError#1 = function <atom:0>;
  exports.WalletUnavailableError = WalletUnavailableError#1;
  let WalletMCPError;
  let <class_fields_init>#2;
  class WalletMCPError extends Error { ... }
  <class_fields_init>#2 = undefined;
  <proto:WalletMCPError>;
  WalletMCPError = function <atom:0>;
  // close_loc <class_fields_init>#2
  WalletMCPError#1 = function <atom:0>;
  let WalletApi;
  let <class_fields_init>#3;
  class WalletApi extends undefined { ... }
  <proto:WalletApi>.dispose = function <atom:0>;
  <proto:WalletApi>.invalidateLink = function <atom:0>;
  <proto:WalletApi>.cards = function <atom:0>;
  <proto:WalletApi>.applyCardMutation = function <atom:0>;
  <proto:WalletApi>.resolveTool = function <atom:0>;
  <proto:WalletApi>.entrypoint = function <atom:0>;
  <proto:WalletApi>.call = function <atom:0>;
  <proto:WalletApi>.callAction = function <atom:0>;
  <proto:WalletApi>.canConnect = function <atom:0>;
  <proto:WalletApi>.rpc = function <atom:0>;
  <proto:WalletApi>.perform = function <atom:0>;
  <proto:WalletApi>.checkActive = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:WalletApi>;
  WalletApi = function <atom:0>;
  // close_loc <class_fields_init>#3
  WalletApi#1 = function <atom:0>;
  exports.WalletApi = WalletApi#1;
  exports.walletToolSucceeded = W;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet_core/src/WalletApi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
