// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
function {
  e.SignedOut = 0;
  e[0] = "SignedOut";
  e.Restoring = 1;
  e[1] = "Restoring";
  e.SigningIn = 2;
  e[2] = "SigningIn";
  e.SignedIn = 3;
  e[3] = "SignedIn";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
function {
  e.InvalidToken = 0;
  e[0] = "InvalidToken";
  e.Network = 1;
  e[1] = "Network";
  e.InvalidResponse = 2;
  e[2] = "InvalidResponse";
  e.Storage = 3;
  e[3] = "Storage";
  e.Cancelled = 4;
  e[4] = "Cancelled";
  e.StorageTemporarilyUnavailable = 5;
  e[5] = "StorageTemporarilyUnavailable";
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=83B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(t);
  this.kind = e;
  this.name = "OAIAuthenticationError";
  this.message = t;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this
function {
  return this.checkCredentialOperation();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=204B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: n
// closure: i, t, this
function {
  let n;
  if (!(i)) goto L_30;
  n = t.isApplicationForeground(e);
  i = true;
  true;
  if (!(n)) goto L_c6;
  goto L_c7;
  // [栈深重同步 4 -> 3]
  this.lifecycleChanges.next((this.lifecycleChanges.value + 0));
  return;
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=2 bc=878B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: i, this
// closure: t, <class_fields_init>, n, w, y, o, f, g, d, S
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let i;
  this.lifecycleChanges = new n.BehaviorSubject(0);
  this.disposed = false;
  this.listeners = new Set();
  this.currentState = {status: w.SignedOut};
  this.pendingCredentialOperation = Promise.resolve();
  this.operationGeneration = 0;
  if (!((e == null))) goto L_e1;
  e;
  goto L_102;
  if (!((undefined.baseUrl == null))) goto L_159;
  undefined.baseUrl;
  if (!(o.Device.isWeb())) goto L_156;
  goto L_159;
  // [栈深重同步 3 -> 2]
  this.baseUrl = y(g);
  if (!((e == null))) goto L_16d;
  e;
  goto L_18e;
  if (!((undefined.httpClient == null))) goto L_1dd;
  undefined.httpClient;
  this.client = new d.HTTPClient(this.baseUrl);
  if (!((e == null))) goto L_1f0;
  e;
  goto L_211;
  this.lifecycle = undefined.lifecycle;
  if (!((e == null))) goto L_224;
  e;
  goto L_245;
  this.credentialStore = undefined.credentialStore;
  if (!((undefined === this.credentialStore))) goto L_2db;
  if (!((undefined === this.lifecycle))) goto L_2db;
  this.credentialStore = S.createOAICredentialStore({checkOperation: function <atom:0>});
  S.createOAICredentialStore({checkOperation: function <atom:0>});
  i = false;
  if (!((this.lifecycle == null))) goto L_30a;
  this.lifecycle;
  goto L_330;
  this.lifecycleSubscription = undefined.observeState(function <atom:0>);
  if (!((e == null))) goto L_343;
  e;
  goto L_364;
  this.authenticationService = undefined.authenticationService;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=597B file=oai_authentication_session/src/OAIAuthenticationController
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_254;
  this.disposed = true;
  this.operationGeneration = (this.operationGeneration ++);
  if (!((this.validationTask == null))) goto L_8d;
  this.validationTask;
  goto L_b1;
  undefined.cancel();
  this.validationTask = undefined;
  this.cancelInteractiveAuthentication();
  this.revalidation = undefined;
  if (!((this.lifecycleSubscription == null))) goto L_118;
  this.lifecycleSubscription;
  goto L_13c;
  undefined.cancel();
  this.lifecycleChanges.next(this.lifecycleChanges.value);
  this.lifecycleChanges.complete();
  this.listeners.clear();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// locals: this
function {
  this = this;
  return this.currentState;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=161B file=oai_authentication_session/src/OAIAuthenticationController
// locals: e, this
// closure: h
function {
  this = this;
  if (!(h.isVersionAtLeast(14))) goto L_9e;
  let e;
  e = this.interactiveAuthenticationCapabilities;
  if ((e.browser)) goto L_9d;
  return e.codex;
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=89B file=oai_authentication_session/src/OAIAuthenticationController
// locals: this
// closure: I
function {
  this = this;
  if (!((this.authenticationService == null))) goto L_2c;
  this.authenticationService;
  goto L_50;
  if (!((undefined.getCapabilities() == null))) goto L_58;
  undefined.getCapabilities();
  return I;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=76B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: this
// closure: A
function {
  this = this;
  return A.supportsAuthenticationMethod(this.interactiveAuthenticationCapabilities, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_authentication_session/src/OAIAuthenticationController
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=72B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, e
function {
  this.listeners.delete(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=116B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: this
function {
  this = this;
  if (!(this.disposed)) goto L_29;
  return function <atom:0>;
  this.listeners.add(e);
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
function {
  return e.load();   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=4 cpool=1 bc=663B file=oai_authentication_session/src/OAIAuthenticationController
// locals: e, t, i, i#1, this
// closure: w, OAIAuthenticationError, O, G
function {
  this = this;
  let t;
  let e;
  e = this.beginOperation(w.Restoring);
  t = undefined;
  try { // catch -> L_8d
  t = (await this.runCredentialOperation(e, function <atom:0>));
  (await this.runCredentialOperation(e, function <atom:0>));
  <?>;
  goto L_f9;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_f8
  if (!((i instanceof OAIAuthenticationError))) goto L_c3;
  goto L_f1;
  // [栈深重同步 4 -> 3]
  this.failOperation(e, new OAIAuthenticationError(O.Storage, "The secure session could not be restored."));
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((e === this.operationGeneration))) goto L_295;
  if (!((undefined !== t))) goto L_246;
  try { // catch -> L_166
  (await this.establishSession(t, e));
  <?>;
  goto L_295;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_245
  if (!((e !== this.operationGeneration))) goto L_198;
  return undefined; // async
  if (!((i#1 instanceof OAIAuthenticationError))) goto L_214;
  if (!((i#1.kind === O.InvalidToken))) goto L_214;
  (await this.clearExpiredCredential(e));
  this.failOperation(e, G(i#1));
  <?>;
  goto L_295;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.updateState({status: w.SignedOut});
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=122B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, this
// closure: w
function {
  this = this;
  let t;
  t = this.beginOperation(w.SigningIn);
  (await this.authenticateAccessToken(e, t));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=563B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, i, n, r, e#1, this
// closure: OAIAuthenticationError, O, w, E
function {
  this = this;
  let n;
  let i;
  let t;
  t = this.authenticationService;
  if (((undefined === t))) goto L_61;
  if (!(!this.supportsAuthenticationMethod(e))) goto L_92;
  throw new OAIAuthenticationError(O.InvalidResponse, "This host does not provide the selected first-party sign-in method.");
  i = this.beginOperation(w.SigningIn);
  n = undefined;
  try { // catch -> L_198
  if ((this.isAppStateAllowed())) goto L_137;
  (await this.waitForForeground(i, undefined));
  this.checkGeneration(i);
  n = (await this.requestInteractiveCredential(t, e, i));
  (await this.requestInteractiveCredential(t, e, i));
  <?>;
  goto L_1d8;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_1d7
  let e#1;
  e#1 = E(r);
  this.failOperation(i, e#1);
  throw e#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((i === this.operationGeneration))) goto L_230;
  (await this.authenticateAccessToken(n, i));
  return undefined; // async
}

// fn <atom:0>  args=2 vars=9 closure=5 cpool=0 bc=598B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: i, e#1, e#2, n, n#1, e#3, this
// closure: l, OAIAuthenticationError, O, w, G
function {
  this = this;
  let i;
  i = e.trim();
  if (!(!l.isValidOAIBearerToken(i))) goto L_b8;
  let e#1;
  e#1 = new OAIAuthenticationError(O.InvalidToken, "Enter a valid ChatGPT access token.");
  this.failOperation(t, e#1);
  throw e#1;
  try { // catch -> L_212
  let e#2;
  e#2 = (await this.validateCredential({accessToken: i}, t));
  if (!((t !== this.operationGeneration))) goto L_11c;
  return undefined; // async
  try { // catch -> L_150
  (await this.saveSession(e#2, t));
  <?>;
  goto L_18f;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_18e
  if (!((n instanceof OAIAuthenticationError))) goto L_15f;
  throw n;
  throw new OAIAuthenticationError(O.Storage, "The access token could not be saved securely.");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((t === this.operationGeneration))) goto L_20e;
  this.updateState({status: w.SignedIn, session: e#2});
  <?>;
  goto L_254;
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_253
  let e#3;
  e#3 = G(n#1);
  this.failOperation(t, e#3);
  throw e#3;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: t
function {
  return (e.id === t);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=oai_authentication_session/src/OAIAuthenticationController
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("The selected account could not be saved securely.");
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=2 bc=1051B file=oai_authentication_session/src/OAIAuthenticationController
// args: t
// locals: i, n, r, a, this
// closure: e, w
function {
  this = this;
  let a;
  let r;
  let n;
  let i;
  if ((this.disposed)) goto L_5d;
  if (!(!this.isAppStateAllowed())) goto L_60;
  return;
  i = this.currentState.session;
  if (((this.currentState.status !== w.SignedIn))) goto L_115;
  if (!((undefined === i))) goto L_118;
  return;
  n = i.accounts.find(function <atom:0>);
  if (((undefined === n))) goto L_1d6;
  if (!((n.id === i.activeAccount.id))) goto L_1d9;
  return;
  if (!((this.validationTask == null))) goto L_204;
  this.validationTask;
  goto L_228;
  undefined.cancel();
  this.validationTask = undefined;
  this.revalidation = undefined;
  this.operationGeneration = (this.operationGeneration ++);
  r = (this.operationGeneration ++);
  this.lifecycleChanges.next(this.lifecycleChanges.value);
  a = this.makeSession(i.accessToken, i.accounts, n, r);
  this.updateState({status: w.SignedIn, session: a});
  this.saveSession(a, r).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
function {
  return e.clear();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=770B file=oai_authentication_session/src/OAIAuthenticationController
// locals: e, t, i, this
// closure: w, OAIAuthenticationError, O
function {
  this = this;
  let e;
  this.checkGeneration(this.operationGeneration);
  this.operationGeneration = (this.operationGeneration ++);
  e = (this.operationGeneration ++);
  this.lifecycleChanges.next(this.lifecycleChanges.value);
  this.revalidation = undefined;
  if (!((this.validationTask == null))) goto L_13a;
  this.validationTask;
  goto L_15e;
  undefined.cancel();
  this.validationTask = undefined;
  this.cancelInteractiveAuthentication();
  this.updateState({status: w.SignedOut});
  try { // catch -> L_213
  (await this.runCredentialOperation(e, function <atom:0>));
  <?>;
  goto L_300;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_2ff
  let i;
  if (((e !== this.operationGeneration))) goto L_268;
  if (!(this.disposed)) goto L_26c;
  throw t;
  if (!((t instanceof OAIAuthenticationError))) goto L_276;
  goto L_2a4;
  // [栈深重同步 1 -> 0]
  i = new OAIAuthenticationError(O.Storage, "The secure session could not be cleared.");
  this.updateState({status: w.SignedOut, error: i});
  throw i;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=449B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, this
function {
  this = this;
  let t;
  this.checkGeneration(this.operationGeneration);
  this.revalidation = undefined;
  if (!((this.validationTask == null))) goto L_82;
  this.validationTask;
  goto L_a6;
  undefined.cancel();
  this.validationTask = undefined;
  this.cancelInteractiveAuthentication();
  this.operationGeneration = (this.operationGeneration ++);
  t = (this.operationGeneration ++);
  this.lifecycleChanges.next(this.lifecycleChanges.value);
  this.updateState({status: e});
  return t;
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=0 bc=172B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// closure: a, i, this, n, r, v
function {
  if ((a)) goto L_ab;
  a = true;
  true;
  if (!((i === this.operationGeneration))) goto L_45;
  this.interactiveAuthenticationTask = undefined;
  undefined;
  if (!((undefined === t))) goto L_a6;
  if (!((undefined !== e))) goto L_55;
  goto L_ab;
  // [栈深重同步 1 -> 0]
  goto L_ab;
  // [栈深重同步 1 -> 0]
  r(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=7B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: o
function {
  o(e, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=7B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: o
function {
  o(undefined, e);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=5 cpool=3 bc=284B file=oai_authentication_session/src/OAIAuthenticationController
// args: n, r
// locals: a, o, s, c
// closure: i, this, v, e, t
function {
  let s;
  let o;
  let a;
  a = false;
  o = function <atom:0>;
  s = undefined;
  try { // catch -> L_5c
  s = e.signIn(t, {onAuthenticated: function <atom:0>, onFailure: function <atom:0>});
  e.signIn(t, {onAuthenticated: function <atom:0>, onFailure: function <atom:0>});
  <?>;
  goto L_b7;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_b6
  o(undefined, {kind: v.OAIAuthenticationServiceFailureKind.Unknown});
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((a)) goto L_11b;
  if (!((i === this.operationGeneration))) goto L_f4;
  this.interactiveAuthenticationTask = s;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  s.cancel();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=14B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t, i
// locals: this
// closure: v
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=143B file=oai_authentication_session/src/OAIAuthenticationController
// locals: e, this
// closure: h
function {
  this = this;
  let e;
  e = this.interactiveAuthenticationTask;
  this.interactiveAuthenticationTask = undefined;
  if (!(h.isVersionAtLeast(14))) goto L_8e;
  if (!((undefined !== e))) goto L_8e;
  e.cancel();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: t
function {
  return (e.id === t.accountId);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: l
function {
  return l.isValidOAIAccountIdentifier(e.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=oai_authentication_session/src/OAIAuthenticationController
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Account revalidation did not complete; request admission still applies.");
  return;
}

// fn <atom:0>  args=2 vars=7 closure=4 cpool=3 bc=1220B file=oai_authentication_session/src/OAIAuthenticationController
// args: t, i
// locals: n, r, a, a#1, this
// closure: l, e, T, w
function {
  this = this;
  let a#1;
  let r;
  let n;
  if ((this.isAppStateAllowed())) goto L_5f;
  (await this.waitForForeground(i, undefined));
  this.checkGeneration(i);
  n = t.session;
  if (!((n == null))) goto L_b6;
  n;
  goto L_fd;
  r = undefined.accounts.find(function <atom:0>);
  if (!((n == null))) goto L_10a;
  n;
  goto L_12b;
  if (!((1 === undefined.version))) goto L_3ec;
  if (!((n.baseUrl === this.baseUrl))) goto L_3ec;
  if (!((n.expiresAt > (Date.now() / 1000)))) goto L_3ec;
  if (!((n.expiresAt === T(t.accessToken)))) goto L_3ec;
  if (!((r == null))) goto L_22f;
  r;
  goto L_250;
  if (!((undefined !== undefined.accountUserId))) goto L_3ec;
  if (!(n.accounts.every(function <atom:0>))) goto L_3ec;
  let a;
  a = this.makeSession(t.accessToken, n.accounts, r, i);
  if (!((i === this.operationGeneration))) goto L_3e9;
  this.updateState({status: w.SignedIn, session: a});
  a.revalidate().catch(function <atom:0>);
  return undefined; // async
  a#1 = (await this.validateCredential(t, i));
  (await this.saveSession(a#1, i));
  if (!((i === this.operationGeneration))) goto L_4c1;
  this.updateState({status: w.SignedIn, session: a#1});
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=oai_authentication_session/src/OAIAuthenticationController
// args: t
// closure: e
function {
  return (t.id === e.accountId);
}

// fn <atom:0>  args=2 vars=9 closure=8 cpool=1 bc=902B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: i, n, r, s, a, o, this
// closure: l, OAIAuthenticationError, O, u, p, AuthenticationHTTPTransport, C, m
function {
  this = this;
  let o;
  let a;
  let r;
  let n;
  let i;
  if ((this.isAppStateAllowed())) goto L_65;
  (await this.waitForForeground(t, undefined));
  this.checkGeneration(t);
  if (!(!l.isValidOAIBearerToken(e.accessToken))) goto L_107;
  throw new OAIAuthenticationError(O.InvalidToken, "The access token is invalid or has expired.");
  i = new u.OAIBearerAPIService(this.client, e.accessToken, undefined, undefined);
  n = new p.ChatGPTAuthenticationApiClient(new AuthenticationHTTPTransport(i)).checkAccounts();
  r = undefined;
  this.validationTask = n;
  try { // catch -> L_210
  r = (await n.result);
  (await n.result);
  <?>;
  goto L_245;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_244
  this.checkGeneration(t);
  throw C(s);
  // [栈深重同步 0 -> 1]
  throw <?>;
  if ((this.isAppStateAllowed())) goto L_298;
  (await this.waitForForeground(t, undefined));
  this.checkGeneration(t);
  if (!((t === this.operationGeneration))) goto L_2f7;
  this.validationTask = undefined;
  undefined;
  a = m(r);
  if (!((a.find(function <atom:0>) == null))) goto L_334;
  a.find(function <atom:0>);
  o = a[0];
  return this.makeSession(e.accessToken, a, o, t); // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, n, e
function {
  this.invalidateExpiredSession(n, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=73B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, n, e, i
function {
  return this.revalidateSession(n, e, i.id);   // tail call
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=2 bc=209B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t, i, n
// locals: r, this
// closure: u
function {
  this = this;
  let r;
  r = function <atom:0>;
  return {accessToken: e, accounts: t, activeAccount: i, apiService: new u.OAIBearerAPIService(this.client, e, i.id, r), baseUrl: this.baseUrl, reportUnauthorized: r, revalidate: function <atom:0>};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=587B file=oai_authentication_session/src/OAIAuthenticationController
// args: t
// locals: i
// closure: e, this, w
function {
  let i;
  if (!((e !== this.operationGeneration))) goto L_2b;
  return undefined; // async
  (await this.saveSession(t, e));
  if (!((e !== this.operationGeneration))) goto L_7c;
  return undefined; // async
  i = this.currentState.session;
  if (!((i == null))) goto L_cb;
  i;
  goto L_10d;
  if (!((undefined.activeAccount.id === t.activeAccount.id))) goto L_1f1;
  if (((JSON.stringify(i.accounts) === JSON.stringify(t.accounts)))) goto L_248;
  this.updateState({status: w.SignedIn, session: t});
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=126B file=oai_authentication_session/src/OAIAuthenticationController
// args: i
// closure: OAIAuthenticationError, O, this, e, t
function {
  if (!((i instanceof OAIAuthenticationError))) goto L_7b;
  if (!((i.kind === O.InvalidToken))) goto L_7b;
  this.invalidateExpiredSession(e, t);
  throw i;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, n
function {
  if (!((this.revalidation === n))) goto L_36;
  this.revalidation = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=3 bc=386B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t, i
// locals: n, this
// closure: w, OAIAuthenticationError, O
function {
  this = this;
  let n;
  if (!((e !== this.operationGeneration))) goto L_82;
  return Promise.reject(new OAIAuthenticationError(O.Cancelled, "The account changed."));   // tail call
  if (!((undefined !== this.revalidation))) goto L_cb;
  return this.revalidation;
  n = this.validateCredential({accessToken: t, accountId: i}, e).then(function <atom:0>).catch(function <atom:0>).finally(function <atom:0>);
  this.revalidation = n;
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: n
function {
  return e.save(n);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=312B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: i, n, this
// closure: T
function {
  this = this;
  let n;
  let i;
  i = T(e.accessToken);
  if (!((undefined === i))) goto L_a7;
  goto L_10a;
  // [栈深重同步 2 -> 1]
  null;
  {session: {version: 1, baseUrl: e.baseUrl, expiresAt: i, accounts: e.accounts}};
  n = {accessToken: e.accessToken, accountId: e.activeAccount.id};
  return this.runCredentialOperation(t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=285B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, n, w, OAIAuthenticationError, O
function {
  if (!((this.operationGeneration === n))) goto L_11c;
  if (!((this.currentState.status === w.SignedOut))) goto L_11c;
  this.updateState({status: w.SignedOut, error: new OAIAuthenticationError(O.InvalidToken, "Your ChatGPT session expired. Sign in again.")});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=oai_authentication_session/src/OAIAuthenticationController
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("An expired authenticated session could not be removed securely.");
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=2 bc=385B file=oai_authentication_session/src/OAIAuthenticationController
// args: t, i
// locals: n, this
// closure: w, OAIAuthenticationError, O, e
function {
  this = this;
  let n;
  if (((t !== this.operationGeneration))) goto L_108;
  if (((this.currentState.status !== w.SignedIn))) goto L_108;
  if (!((this.currentState.session == null))) goto L_e5;
  this.currentState.session;
  goto L_106;
  if (!((undefined.accessToken !== i))) goto L_10b;
  return;
  n = (t + 1);
  this.signOut().then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
function {
  return e.clear();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=192B file=oai_authentication_session/src/OAIAuthenticationController
// args: t
// locals: i, this
// closure: e
function {
  this = this;
  try { // catch -> L_35
  (await this.runCredentialOperation(t, function <atom:0>));
  <?>;
  goto L_be;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_bd
  if (!((t === this.operationGeneration))) goto L_b9;
  if (!(e.isLoggingEnabled)) goto L_b9;
  console.warn("An expired secure session could not be removed.");
  <?>;
  goto L_be;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=248B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: this
// closure: O, w
function {
  this = this;
  if (!((e === this.operationGeneration))) goto L_f7;
  if (!((t.kind === O.StorageTemporarilyUnavailable))) goto L_c6;
  null;
  this.currentState;
  goto L_f4;
  // [栈深重同步 3 -> 2]
  this.updateState({status: w.SignedOut, error: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=159B file=oai_authentication_session/src/OAIAuthenticationController
// locals: this
// closure: OAIAuthenticationError, O
function {
  this = this;
  if (!((undefined === this.credentialOperationGeneration))) goto L_57;
  throw new OAIAuthenticationError(O.Cancelled, "No credential operation is active.");
  this.checkGeneration(this.credentialOperationGeneration);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=150B file=oai_authentication_session/src/OAIAuthenticationController
// locals: this
// closure: t
function {
  this = this;
  if (((undefined === this.lifecycle))) goto L_95;
  return t.isApplicationForeground(this.lifecycle.getState());
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=126B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: this
// closure: OAIAuthenticationError, O
function {
  this = this;
  if ((this.disposed)) goto L_4c;
  if (!((e !== this.operationGeneration))) goto L_7d;
  throw new OAIAuthenticationError(O.Cancelled, "The authentication owner changed.");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=199B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this, e, t
function {
  if ((this.disposed)) goto L_c6;
  if (((e !== this.operationGeneration))) goto L_c6;
  if (!(this.isAppStateAllowed())) goto L_c6;
  if (((undefined === t))) goto L_c6;
  return (this.lifecycleChanges.value > t);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=392B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: this
// closure: r, a
function {
  this = this;
  this.checkGeneration(e);
  if ((!this.isAppStateAllowed())) goto L_9f;
  if (!((undefined !== t))) goto L_9f;
  if (!((this.lifecycleChanges.value <= t))) goto L_15e;
  (await this.lifecycleChanges.pipe(r.filter(function <atom:0>), a.take(1)).toPromise());
  this.checkGeneration(e);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=oai_authentication_session/src/OAIAuthenticationController
// closure: this
function {
  return this.checkCredentialOperation();   // tail call
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=1 bc=1068B file=oai_authentication_session/src/OAIAuthenticationController
// locals: r, i, n, n#1, t
// closure: this, e, S, t, O, i, OAIAuthenticationError
function {
  this.credentialOperationGeneration = e;
  try { // catch -> L_41a
  let r;
  if ((this.isAppStateAllowed())) goto L_64;
  (await this.waitForForeground(e, undefined));
  this.checkGeneration(e);
  r = this.lifecycleChanges.value;
  try { // catch -> L_2dd
  let n;
  let i;
  if (!((this.credentialStore == null))) goto L_15b;
  this.credentialStore;
  i = S.createOAICredentialStore({lifecycle: this.lifecycle, checkOperation: function <atom:0>});
  this.credentialStore = i;
  n = (await t(i));
  if ((this.isAppStateAllowed())) goto L_1c1;
  (await this.waitForForeground(e, undefined));
  this.checkGeneration(e);
  if (!((this.currentState.error == null))) goto L_234;
  this.currentState.error;
  goto L_255;
  if (!((undefined.kind === O.StorageTemporarilyUnavailable))) goto L_2d1;
  null;
  this.currentState;
  this.updateState({error: undefined});
  // gosub (finally 块) 1056
  return n; // async
  // [栈深重同步 0 -> 1]
  n#1 = <?>;
  try { // catch -> L_419
  let t;
  if (!(!(n#1 instanceof i.PersistentStoreTemporarilyUnavailableError))) goto L_311;
  throw n#1;
  this.checkGeneration(e);
  t = new OAIAuthenticationError(O.StorageTemporarilyUnavailable, "Secure session storage is temporarily unavailable. Please try again when the app returns to the foreground.");
  null;
  this.currentState;
  this.updateState({error: t});
  if (!((undefined === this.lifecycle))) goto L_3ea;
  throw t;
  (await this.waitForForeground(e, r));
  <?>;
  goto L_10;
  // [栈深重同步 0 -> 1]
  throw <?>;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1056
  throw <?>;
  this.credentialOperationGeneration = undefined;
  // ret (finally 块) 
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_authentication_session/src/OAIAuthenticationController
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_authentication_session/src/OAIAuthenticationController
function {
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=3 bc=135B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: n, this
// closure: S, O, i, OAIAuthenticationError
function {
  this = this;
  let n;
  n = this.pendingCredentialOperation.then(function <atom:0>);
  this.pendingCredentialOperation = n.then(function <atom:0>, function <atom:0>);
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=oai_authentication_session/src/OAIAuthenticationController
// args: t
// closure: e
function {
  return t(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=124B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_7b;
  this.currentState = e;
  this.listeners.forEach(function <atom:0>);
  return;
}

// fn T  args=1 vars=4 closure=2 cpool=4 bc=625B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, e#1, i
// closure: c, s
function {
  let t;
  t = e.split(".");
  if (!((3 === t.length))) goto L_270;
  try { // catch -> L_266
  let i;
  let e#1;
  e#1 = t[1].replace(new RegExp("-"), "+").replace(new RegExp("_"), "/");
  i = JSON.parse(new c.TextDecoder().decode(s.Base64.toByteArray(e#1.padEnd((4 * Math.ceil((e#1.length / 4))), "="))));
  if (!(("number" == typeof i.exp))) goto L_263;
  if (!(Number.isFinite(i.exp))) goto L_263;
  goto L_264;
  // [栈深重同步 1 -> 0]
  return undefined;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_26f
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn y  args=1 vars=2 closure=3 cpool=2 bc=141B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t
// closure: l, OAIAuthenticationError, O
function {
  let t;
  t = e.replace(new RegExp("\\/+$"), "");
  if (!(!l.isTrustedOAIAPIOrigin(t))) goto L_89;
  throw new OAIAuthenticationError(O.InvalidResponse, "Authenticated requests require a trusted first-party HTTPS origin.");
  return t;
}

// fn k  args=1 vars=1 closure=2 cpool=0 bc=132B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: OAIAuthenticationError, O
function {
  if (!((3 === e.kind))) goto L_55;
  return new OAIAuthenticationError(O.InvalidResponse, "The authentication request was rejected by the host.");
  return new OAIAuthenticationError(O.Network, "The authentication server could not be reached.");
}

// fn C  args=1 vars=1 closure=6 cpool=0 bc=557B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: p, OAIAuthenticationError, O, b, k, G
function {
  if (!((e instanceof p.ClientApiHTTPError))) goto L_12c;
  if (((401 === e.statusCode))) goto L_7b;
  if (!((403 === e.statusCode))) goto L_ac;
  return new OAIAuthenticationError(O.InvalidToken, "The access token is invalid or has expired.");
  return new OAIAuthenticationError(O.Network, "Account validation returned HTTP ".concat(String(e.statusCode), "."));
  if (!((e instanceof p.ClientApiHTTPTransportError))) goto L_1d0;
  if (!(b(e.failure))) goto L_1a1;
  return k(e.failure);
  return new OAIAuthenticationError(O.Network, "The authentication server could not be reached.");
  if (!((e instanceof p.ClientApiDecodeError))) goto L_227;
  return new OAIAuthenticationError(O.InvalidResponse, "The account response was invalid.");
  return G(e);
}

// fn b  args=1 vars=2 closure=0 cpool=0 bc=146B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t
function {
  let t;
  if ((("object" != typeof e))) goto L_40;
  if (((null === e))) goto L_40;
  if (!(Array.isArray(e))) goto L_45;
  return false;
  t = e.kind;
  if (((0 === t))) goto L_91;
  if (((1 === t))) goto L_91;
  if (((2 === t))) goto L_91;
  if (((3 === t))) goto L_91;
  return (4 === t);
}

// fn E  args=1 vars=2 closure=3 cpool=0 bc=516B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t
// closure: OAIAuthenticationError, O, v
function {
  let t;
  if ((("object" != typeof e))) goto L_40;
  if (((null === e))) goto L_40;
  if (!(Array.isArray(e))) goto L_71;
  return new OAIAuthenticationError(O.Network, "First-party sign-in could not be completed.");
  t = e.kind;
  if (!((t === v.OAIAuthenticationServiceFailureKind.Cancelled))) goto L_10e;
  return new OAIAuthenticationError(O.Cancelled, "First-party sign-in was cancelled.");
  if (((t === v.OAIAuthenticationServiceFailureKind.Rejected))) goto L_1a4;
  if (!((t === v.OAIAuthenticationServiceFailureKind.Unavailable))) goto L_1d5;
  return new OAIAuthenticationError(O.InvalidResponse, "The selected first-party sign-in method is unavailable.");
  return new OAIAuthenticationError(O.Network, "First-party sign-in could not be completed.");
}

// fn G  args=1 vars=1 closure=2 cpool=0 bc=56B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: OAIAuthenticationError, O
function {
  if (!((e instanceof OAIAuthenticationError))) goto L_9;
  return e;
  return new OAIAuthenticationError(O.InvalidResponse, "The account response was invalid.");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: i
function {
  return i.push(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: i
function {
  return i.push(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=221B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: i
// closure: x, t, r, n
function {
  let i;
  i = x(t[e]);
  if (((undefined === i))) goto L_dc;
  if ((r.has(i.id))) goto L_dc;
  r.add(i.id);
  n.push(i);
  return;
}

// fn m  args=1 vars=5 closure=3 cpool=3 bc=330B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, i, n, r
// closure: x, OAIAuthenticationError, O
function {
  let r;
  let n;
  let i;
  let t;
  t = e.accounts;
  i = [];
  if (!((e.account_ordering == null))) goto L_5d;
  e.account_ordering;
  goto L_83;
  undefined.forEach(function <atom:0>);
  Object.keys(t).forEach(function <atom:0>);
  n = [];
  r = new Set();
  i.forEach(function <atom:0>);
  if (!((0 === n.length))) goto L_146;
  throw new OAIAuthenticationError(O.InvalidResponse, "The access token did not provide an accessible account.");
  return n;
}

// fn x  args=1 vars=4 closure=1 cpool=0 bc=914B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// locals: t, i, n
// closure: l
function {
  let n;
  let i;
  let t;
  if (!((false === e.can_access_with_session))) goto L_31;
  return;
  t = e.account;
  if (!((undefined === t))) goto L_5c;
  return;
  if ((("string" != typeof t.account_id))) goto L_152;
  if (((0 === t.account_id.trim().length))) goto L_152;
  if ((!l.isValidOAIAccountIdentifier(t.account_id))) goto L_152;
  if (!((true === t.is_deactivated))) goto L_155;
  return;
  if (!(("string" == typeof t.name))) goto L_1f5;
  if (!((t.name.trim().length > 0))) goto L_1f5;
  goto L_1fa;
  // [栈深重同步 1 -> 0]
  i = "Personal account";
  if (!(("string" == typeof t.plan_type))) goto L_29b;
  if (!((t.plan_type.trim().length > 0))) goto L_29b;
  goto L_29c;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!(("string" == typeof t.account_user_id))) goto L_36b;
  if (!(l.isValidOAIAccountIdentifier(t.account_user_id))) goto L_36b;
  goto L_36c;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((undefined === n))) goto L_383;
  goto L_38c;
  // [栈深重同步 2 -> 1]
  null;
  {planLabel: n};
  return {id: t.account_id, name: i};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=oai_authentication_session/src/OAIAuthenticationController
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: t
function {
  return t.onResponse(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=oai_authentication_session/src/OAIAuthenticationController
// args: e
// closure: t
function {
  return t.onFailure(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=2 bc=264B file=oai_authentication_session/src/OAIAuthenticationController
// args: e, t
// locals: this
// closure: P
function {
  this = this;
  if (!((undefined === e.bodyJson))) goto L_bf;
  goto L_e7;
  // [栈深重同步 4 -> 3]
  null;
  {bodyJson: e.bodyJson};
  return this.service.send({method: P(e.method), path: e.path}, {onResponse: function <atom:0>, onFailure: function <atom:0>});   // tail call
}

// fn P  args=1 vars=1 closure=0 cpool=0 bc=92B file=oai_authentication_session/src/OAIAuthenticationController
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
  throw new TypeError("Unsupported generated HTTP method");
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=45 bc=864B file=oai_authentication_session/src/OAIAuthenticationController
// args: require, module, exports
// locals: e, t, i, n, r, a, o, s, c, h, d, l, u, p, v, A, S, g, f, I, w, O, OAIAuthenticationError, <class_fields_init>, OAIAuthenticationError#1, OAIAuthenticationController, <class_fields_init>#1, OAIAuthenticationController#1, T, y, k, C, b, E, G, m, x, AuthenticationHTTPTransport, <class_fields_init>#2, AuthenticationHTTPTransport#1, P
function {
  T = function T;
  y = function y;
  k = function k;
  C = function C;
  b = function b;
  E = function E;
  G = function G;
  m = function m;
  x = function x;
  P = function P;
  let AuthenticationHTTPTransport#1;
  let OAIAuthenticationController#1;
  let OAIAuthenticationError#1;
  let I;
  let f;
  let g;
  let S;
  let A;
  let v;
  let p;
  let u;
  let l;
  let d;
  let h;
  let c;
  let s;
  let o;
  let a;
  let r;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIAuthenticationStatus = undefined;
  exports.OAIAuthenticationFailureKind = undefined;
  exports.OAIAuthenticationError = undefined;
  exports.OAIAuthenticationController = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/ApplicationState");
  i = require("persistence/src/PersistentStore");
  n = require("valdi_rxjs/src/BehaviorSubject");
  r = require("valdi_rxjs/src/operators/filter");
  a = require("valdi_rxjs/src/operators/take");
  o = require("valdi_core/src/Device");
  s = require("coreutils/src/Base64");
  c = require("coreutils/src/unicode/TextCoding");
  h = require("valdi_core/src/CompilerIntrinsics");
  d = require("valdi_http/src/HTTPClient");
  l = require("./OAIAuthenticationValidation");
  u = require("./OAIBearerAPIService");
  p = require("./generated/ChatGPTAuthenticationApiClient");
  v = require("oai_authentication/src/OAIAuthenticationService");
  A = require("oai_platform_services/src/OAIAuthenticationService");
  S = require("./OAICredentialStore");
  g = "https://android.chat.openai.com";
  f = "https://chatgpt.com";
  I = Object.freeze({browser: false, codex: false});
  if ((w)) goto L_1e8;
  w = {};
  exports.OAIAuthenticationStatus = {};
  !function <atom:0>({});
  if ((O)) goto L_201;
  O = {};
  exports.OAIAuthenticationFailureKind = {};
  function <atom:0>({});
  let OAIAuthenticationError;
  let <class_fields_init>;
  class OAIAuthenticationError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:OAIAuthenticationError>;
  OAIAuthenticationError = function <atom:0>;
  // close_loc <class_fields_init>
  OAIAuthenticationError#1 = function <atom:0>;
  exports.OAIAuthenticationError = OAIAuthenticationError#1;
  let OAIAuthenticationController;
  let <class_fields_init>#1;
  class OAIAuthenticationController extends undefined { ... }
  <proto:OAIAuthenticationController>.dispose = function <atom:0>;
  <proto:OAIAuthenticationController>.state = function <atom:0>;
  <proto:OAIAuthenticationController>.supportsInteractiveSignIn = function <atom:0>;
  <proto:OAIAuthenticationController>.interactiveAuthenticationCapabilities = function <atom:0>;
  <proto:OAIAuthenticationController>.supportsAuthenticationMethod = function <atom:0>;
  <proto:OAIAuthenticationController>.subscribe = function <atom:0>;
  <proto:OAIAuthenticationController>.restore = function <atom:0>;
  <proto:OAIAuthenticationController>.signIn = function <atom:0>;
  <proto:OAIAuthenticationController>.signInInteractively = function <atom:0>;
  <proto:OAIAuthenticationController>.authenticateAccessToken = function <atom:0>;
  <proto:OAIAuthenticationController>.selectAccount = function <atom:0>;
  <proto:OAIAuthenticationController>.signOut = function <atom:0>;
  <proto:OAIAuthenticationController>.beginOperation = function <atom:0>;
  <proto:OAIAuthenticationController>.requestInteractiveCredential = function <atom:0>;
  <proto:OAIAuthenticationController>.cancelInteractiveAuthentication = function <atom:0>;
  <proto:OAIAuthenticationController>.establishSession = function <atom:0>;
  <proto:OAIAuthenticationController>.validateCredential = function <atom:0>;
  <proto:OAIAuthenticationController>.makeSession = function <atom:0>;
  <proto:OAIAuthenticationController>.revalidateSession = function <atom:0>;
  <proto:OAIAuthenticationController>.saveSession = function <atom:0>;
  <proto:OAIAuthenticationController>.invalidateExpiredSession = function <atom:0>;
  <proto:OAIAuthenticationController>.clearExpiredCredential = function <atom:0>;
  <proto:OAIAuthenticationController>.failOperation = function <atom:0>;
  <proto:OAIAuthenticationController>.checkCredentialOperation = function <atom:0>;
  <proto:OAIAuthenticationController>.isAppStateAllowed = function <atom:0>;
  <proto:OAIAuthenticationController>.checkGeneration = function <atom:0>;
  <proto:OAIAuthenticationController>.waitForForeground = function <atom:0>;
  <proto:OAIAuthenticationController>.runCredentialOperation = function <atom:0>;
  <proto:OAIAuthenticationController>.updateState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OAIAuthenticationController>;
  OAIAuthenticationController = function <atom:0>;
  // close_loc <class_fields_init>#1
  OAIAuthenticationController#1 = function <atom:0>;
  exports.OAIAuthenticationController = OAIAuthenticationController#1;
  let AuthenticationHTTPTransport;
  let <class_fields_init>#2;
  class AuthenticationHTTPTransport extends undefined { ... }
  <proto:AuthenticationHTTPTransport>.send = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AuthenticationHTTPTransport>;
  AuthenticationHTTPTransport = function <atom:0>;
  // close_loc <class_fields_init>#2
  AuthenticationHTTPTransport#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_authentication_session/src/OAIAuthenticationController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
