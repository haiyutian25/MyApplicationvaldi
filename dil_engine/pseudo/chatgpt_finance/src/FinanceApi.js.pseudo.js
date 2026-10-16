// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_finance/src/FinanceApi
// args: e
function {
  e.GetUserProfile = "get_user_profile";
  e.ListTransactions = "list_transactions";
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=131B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this.active_func, new.target, this
// closure: t, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("Finance request failed: ".concat(t.OAINetworkResultKind[e]));
  if (!(<class_fields_init>)) goto L_70;
  <class_fields_init>.call(this);
  new new.target("Finance request failed: ".concat(t.OAINetworkResultKind[e]));
  this.resultKind = e;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=177B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: <class_fields_init>, t, c, FinanceSheepTransport
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.platformServices = e;
  this.networkClient = new t.OAINetworkClient(e);
  if (!((e == null))) goto L_80;
  e;
  goto L_a1;
  this.sheepClient = new c.FinanceSheepApiClient(new FinanceSheepTransport(undefined.apiService));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=291B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: k, s, w
function {
  this = this;
  if (!(this.useSheep())) goto L_96;
  return k(this.sheepClient.userProfile(), s.decodeFinanceUserProfile);
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/profile"}, decode: s.decodeFinanceUserProfile}));
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=423B file=chatgpt_finance/src/FinanceApi
// args: e, t
// locals: this
// closure: k, exports, a, w
function {
  this = this;
  if (!(this.useSheep())) goto L_ce;
  return k(this.sheepClient.dashboardWidgets({dashboard_offset: e, dashboard_limit: exports.FINANCE_DASHBOARD_PAGE_SIZE, include_onboarding: t}), a.decodeFinanceDashboardPage);   // tail call
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/widgets", query: {dashboard_offset: String(e), dashboard_limit: String(exports.FINANCE_DASHBOARD_PAGE_SIZE), include_onboarding: String(t)}}, decode: a.decodeFinanceDashboardPage}));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=283B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: w, A, m, o
function {
  this = this;
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/institutions", query: {query: e.query, offset: String(A(e.offset)), limit: String(m(e.limit))}}, decode: o.decodeFinanceInstitutionsPage}));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=291B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: k, n, w
function {
  this = this;
  if (!(this.useSheep())) goto L_96;
  return k(this.sheepClient.accountLinks(), n.decodeFinanceAccountLinks);
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/links"}, decode: n.decodeFinanceAccountLinks}));
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=144B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: w, i
function {
  this = this;
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/credit/score"}, decode: i.decodeFinanceCreditScoreSnapshot}));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=97B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: w
function {
  this = this;
  return w(this.networkClient.requestEmpty({method: "DELETE", path: "/backend-api/aip/ledger/credit/connection"}));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=302B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: k, E, n, w
function {
  this = this;
  if (!(this.useSheep())) goto L_99;
  return k(this.sheepClient.startAccountLinking(E(e)), n.decodeFinanceAccountLinkingSession);
  return w(this.networkClient.requestJson({request: {method: "POST", path: "/backend-api/aip/ledger/oauth/start", jsonBody: E(e)}, decode: n.decodeFinanceAccountLinkingSession}));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=103B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: w
function {
  this = this;
  return w(this.networkClient.requestEmpty({method: "POST", path: "/backend-api/aip/ledger/funnel-events", jsonBody: e}));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_finance/src/FinanceApi
function {
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=241B file=chatgpt_finance/src/FinanceApi
// args: e, t
// locals: this
// closure: k, w
function {
  this = this;
  if (!(this.useSheep())) goto L_81;
  return k(this.sheepClient.submitPlaidPublicToken({link_token: e, public_token: t}), function <atom:0>);
  return w(this.networkClient.requestEmpty({method: "POST", path: "/backend-api/aip/ledger/oauth/submit-public-token", jsonBody: {link_token: e, public_token: t}}));
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=341B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: k, n, w
function {
  this = this;
  if (!(this.useSheep())) goto L_9d;
  return k(this.sheepClient.accountLinkingState({oauth_state_id: e}), n.decodeFinanceAccountLinkingStatus);
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/oauth/state/".concat(encodeURIComponent(e))}, decode: n.decodeFinanceAccountLinkingStatus}));
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=144B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: w, r
function {
  this = this;
  return w(this.networkClient.requestJson({request: {method: "GET", path: "/backend-api/aip/ledger/credit/connection"}, decode: r.decodeFinanceCreditVerificationEligibility}));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=144B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: w, r
function {
  this = this;
  return w(this.networkClient.requestJson({request: {method: "POST", path: "/backend-api/aip/ledger/credit/verification/start"}, decode: r.decodeFinanceCreditVerificationSession}));   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=242B file=chatgpt_finance/src/FinanceApi
// args: e, t
// locals: n, this
// closure: r, w
function {
  this = this;
  let n;
  n = r.normalizeFinanceCreditVerificationId(e);
  if (!((undefined === n))) goto L_42;
  throw new TypeError("Finance credit verification requires a valid verification identifier");
  if (!((undefined === t))) goto L_ad;
  goto L_b4;
  // [栈深重同步 7 -> 6]
  null;
  {flow_id: t};
  return w(this.networkClient.requestJson({request: {method: "POST", path: "/backend-api/aip/ledger/credit/verification/complete", jsonBody: {verification_id: n}}, decode: r.decodeFinanceCreditVerificationResult}));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=75B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: l
function {
  this = this;
  return this.callTransactionsTool(l.GetUserProfile, {}, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=119B file=chatgpt_finance/src/FinanceApi
// args: e
function {
  return {field: e.field, operator: e.operator, value: e.value};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=230B file=chatgpt_finance/src/FinanceApi
// args: e, t
// locals: this
// closure: l
function {
  this = this;
  return this.callTransactionsTool(l.ListTransactions, {cursor: e.cursor, filters: e.filters.map(function <atom:0>), limit: e.limit}, t);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=271B file=chatgpt_finance/src/FinanceApi
// args: e, t, n
// locals: i, this
// closure: h, w
function {
  this = this;
  let i;
  if (!((undefined === n.conversationId))) goto L_7a;
  goto L_a2;
  // [栈深重同步 2 -> 1]
  null;
  {conversation_id: n.conversationId};
  i = {app_uri: h, method: "tools/call", params: {name: e, arguments: t}, message_id: n.messageId};
  return w(this.networkClient.requestText({method: "POST", path: "/backend-api/ecosystem/call_mcp", jsonBody: i}));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=184B file=chatgpt_finance/src/FinanceApi
// locals: this
// closure: e
function {
  this = this;
  if (!(!!e.isVersionAtLeast(117))) goto L_b7;
  if (!((this.platformServices == null))) goto L_5e;
  this.platformServices;
  goto L_b6;
  if (!((undefined.experimentService == null))) goto L_87;
  undefined.experimentService;
  goto L_b6;
  return (true === undefined.isFeatureFlagEnabled({flagName: "chatgpt-ledger-widgets-sheep-fastapi"}));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_finance/src/FinanceApi
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.service = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: i
function {
  return i.onResponse(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=47B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: i, FinanceRequestError, f
function {
  return i.onFailure(new FinanceRequestError(f(e)));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_finance/src/FinanceApi
function {
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=3 bc=481B file=chatgpt_finance/src/FinanceApi
// args: n, i
// locals: this
// closure: FinanceRequestError, f, e, p, t
function {
  this = this;
  if (!(e.isVersionAtLeast(117))) goto L_165;
  if (!((undefined !== this.service))) goto L_165;
  if (!((undefined === n.bodyJson))) goto L_114;
  goto L_13c;
  // [栈深重同步 4 -> 3]
  null;
  {bodyJson: n.bodyJson};
  return this.service.send({method: p(n.method), path: n.path, useSheepGateway: true}, {onResponse: function <atom:0>, onFailure: function <atom:0>});
  i.onFailure(new FinanceRequestError(t.OAINetworkResultKind.Unavailable));
  return {cancel: function <atom:0>};
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_finance/src/FinanceApi
// args: e
function {
  if (!((e === "GET"))) goto L_10;
  return "GET";
  if (!((e === "POST"))) goto L_1f;
  return "POST";
  if (!((e === "PUT"))) goto L_2e;
  return "PUT";
  if (!((e === "PATCH"))) goto L_3d;
  return "PATCH";
  if (!((e === "DELETE"))) goto L_4c;
  return "DELETE";
  e;
  return;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=404B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: t
function {
  if (!((e.kind === 0))) goto L_6d;
  return t.OAINetworkResultKind.NetworkError;
  if (!((e.kind === 1))) goto L_b8;
  return t.OAINetworkResultKind.Timeout;
  if (!((e.kind === 2))) goto L_103;
  return t.OAINetworkResultKind.Cancelled;
  if (!((e.kind === 3))) goto L_14e;
  return t.OAINetworkResultKind.HostRejected;
  return t.OAINetworkResultKind.UnknownError;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_finance/src/FinanceApi
// closure: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=437B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: c, FinanceRequestError, t
function {
  if (!((e instanceof c.ClientApiHTTPTransportError))) goto L_73;
  if (!((e.failure instanceof FinanceRequestError))) goto L_73;
  throw e.failure;
  if (!((e instanceof c.ClientApiHTTPError))) goto L_e8;
  throw new FinanceRequestError(t.OAINetworkResultKind.ServiceError);
  if (((e instanceof c.ClientApiDecodeError))) goto L_119;
  if (!((e instanceof TypeError))) goto L_168;
  throw new FinanceRequestError(t.OAINetworkResultKind.SerializationError);
  throw new FinanceRequestError(t.OAINetworkResultKind.UnknownError);
}

// fn k  args=2 vars=2 closure=3 cpool=2 bc=128B file=chatgpt_finance/src/FinanceApi
// args: e, n
// closure: c, FinanceRequestError, t
function {
  return {cancel: function <atom:0>, result: e.result.then(n).catch(function <atom:0>)};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_finance/src/FinanceApi
// closure: e
function {
  e.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=183B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: t, FinanceRequestError
function {
  if (!((e.kind !== t.OAINetworkResultKind.Success))) goto L_94;
  throw new FinanceRequestError(e.kind);
  return e.value;
}

// fn w  args=1 vars=1 closure=2 cpool=2 bc=87B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: t, FinanceRequestError
function {
  return {cancel: function <atom:0>, result: e.result.then(function <atom:0>)};
}

// fn m  args=1 vars=1 closure=2 cpool=0 bc=150B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: d, u
function {
  if (((undefined === e))) goto L_39;
  if ((!Number.isFinite(e))) goto L_39;
  if (!((e < 1))) goto L_3f;
  return d;
  return Math.min(Math.floor(e), u);
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=104B file=chatgpt_finance/src/FinanceApi
// args: e
function {
  if (((undefined === e))) goto L_39;
  if ((!Number.isFinite(e))) goto L_39;
  if (!((e < 0))) goto L_3d;
  return 0;
  return Math.floor(e);
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=584B file=chatgpt_finance/src/FinanceApi
// args: e
// closure: n
function {
  if (!((e.platform === n.FinanceAccountLinkingPlatform.IOS))) goto L_9b;
  return {flow_id: e.flowId, native_ios: true};
  if (!((e.platform === n.FinanceAccountLinkingPlatform.Android))) goto L_1c0;
  if (((undefined === e.androidPackageName))) goto L_158;
  if (!((0 === e.androidPackageName.trim().length))) goto L_169;
  throw new TypeError("Native Android Finance account linking requires the host application package name");
  return {flow_id: e.flowId, native_android: true, android_package_name: e.androidPackageName};
  if (!((e.platform === n.FinanceAccountLinkingPlatform.Web))) goto L_247;
  return {flow_id: e.flowId, native_android: false, native_ios: false, web_sdk: true};
  e.platform;
  return;
}

// fn <atom:0>  args=3 vars=32 closure=0 cpool=29 bc=532B file=chatgpt_finance/src/FinanceApi
// args: require, module, exports
// locals: e, t, n, i, r, o, s, a, c, d, u, l, h, FinanceRequestError, <class_fields_init>, FinanceRequestError#1, AuthenticatedFinanceApi, <class_fields_init>#1, AuthenticatedFinanceApi#1, FinanceSheepTransport, <class_fields_init>#2, FinanceSheepTransport#1, p, f, k, w, m, A, E
function {
  p = function p;
  f = function f;
  k = function k;
  w = function w;
  m = function m;
  A = function A;
  E = function E;
  let FinanceSheepTransport#1;
  let AuthenticatedFinanceApi#1;
  let FinanceRequestError#1;
  let h;
  let u;
  let d;
  let c;
  let a;
  let s;
  let o;
  let r;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FINANCE_DASHBOARD_PAGE_SIZE = undefined;
  exports.FinanceRequestError = undefined;
  exports.AuthenticatedFinanceApi = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  t = require("oai_platform_services/src/OAINetworkClient");
  n = require("./FinanceAccountLinkingModels");
  i = require("./FinanceCreditScoreModels");
  r = require("./FinanceCreditVerificationModels");
  o = require("./FinanceInstitutionModels");
  s = require("./FinanceProfileModels");
  a = require("./FinanceModels");
  c = require("./generated/FinanceSheepApiClient");
  exports.FINANCE_DASHBOARD_PAGE_SIZE = 4;
  d = 20;
  u = 100;
  if ((l)) goto L_10d;
  l = {};
  !function <atom:0>({});
  h = "connectors://connector_693864f100e4819093e6ed9b651239f1";
  let FinanceRequestError;
  let <class_fields_init>;
  class FinanceRequestError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:FinanceRequestError>;
  FinanceRequestError = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceRequestError#1 = function <atom:0>;
  exports.FinanceRequestError = FinanceRequestError#1;
  let AuthenticatedFinanceApi;
  let <class_fields_init>#1;
  class AuthenticatedFinanceApi extends undefined { ... }
  <proto:AuthenticatedFinanceApi>.userProfile = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.dashboardWidgets = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.listInstitutions = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.accountLinks = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.creditScore = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.removeCreditAccount = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.startAccountLinking = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.recordFunnelEvent = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.submitPlaidPublicToken = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.accountLinkingState = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.creditVerificationEligibility = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.startCreditVerification = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.completeCreditVerification = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.getUserProfile = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.listTransactions = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.callTransactionsTool = function <atom:0>;
  <proto:AuthenticatedFinanceApi>.useSheep = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AuthenticatedFinanceApi>;
  AuthenticatedFinanceApi = function <atom:0>;
  // close_loc <class_fields_init>#1
  AuthenticatedFinanceApi#1 = function <atom:0>;
  exports.AuthenticatedFinanceApi = AuthenticatedFinanceApi#1;
  let FinanceSheepTransport;
  let <class_fields_init>#2;
  class FinanceSheepTransport extends undefined { ... }
  <proto:FinanceSheepTransport>.send = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:FinanceSheepTransport>;
  FinanceSheepTransport = function <atom:0>;
  // close_loc <class_fields_init>#2
  FinanceSheepTransport#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceApi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
