// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
function {
  e.Rich = "rich";
  e.Standard = "standard";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=86B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// closure: o, c
function {
  return o.convertObservableToBridgeObservable(new c.BehaviorSubject(("moonshine" === e)));   // tail call
}

// fn f  args=1 vars=9 closure=6 cpool=0 bc=781B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t, s, n, o, t#1, i, t#2, s#1
// closure: r, h, ChatGPTAccountSettingsService, m, p, ChatGPTAccountCustomizationsService
function {
  if (!(r.isVersionAtLeast(16))) goto L_30b;
  let i;
  let o;
  let n;
  let s;
  let t;
  if (!((undefined !== e.accountSettingsService))) goto L_87;
  t = (undefined !== e.accountFeatureService);
  if ((!r.isVersionAtLeast(30))) goto L_d8;
  s = (undefined !== e.accountCustomizationsService);
  if (!(t)) goto L_e5;
  if (!(s)) goto L_e5;
  return e;
  n = e.apiService;
  if (!((undefined === n))) goto L_111;
  return e;
  o = e.accountSettingsService;
  if (!(r.isVersionAtLeast(109))) goto L_1e2;
  if (!((undefined === o))) goto L_1e2;
  let t#1;
  t#1 = h.get(n);
  if (!((undefined === t#1))) goto L_1d9;
  t#1 = new ChatGPTAccountSettingsService(e);
  new ChatGPTAccountSettingsService(e);
  h.set(n, t#1);
  o = t#1;
  t#1;
  null;
  e;
  if (!((e.accountFeatureService == null))) goto L_21b;
  e.accountFeatureService;
  i = {accountSettingsService: o, accountFeatureService: m};
  if (!(r.isVersionAtLeast(30))) goto L_307;
  let t#2;
  t#2 = e.accountCustomizationsService;
  if (!((undefined === t#2))) goto L_2f5;
  t#2 = p.get(n);
  p.get(n);
  if (!((undefined === t#2))) goto L_2f5;
  let s#1;
  s#1 = new ChatGPTAccountCustomizationsService(e);
  p.set(n, s#1);
  t#2 = s#1;
  s#1;
  null;
  i;
  return {accountCustomizationsService: t#2};
  return i;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=121B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: this
// closure: <class_fields_init>, c
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.platformServices = e;
  this.state = new c.BehaviorSubject({fields: [], suggestions: [], traitTypeIdentifiers: [], loading: true});
  this.requested = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=163B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: this
// closure: o
function {
  this = this;
  if ((this.requested)) goto L_59;
  this.requested = true;
  this.refresh();
  return o.convertObservableToBridgeObservable(this.state);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: this
function {
  this = this;
  return this.updateCustomizations([e], []);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=2 cpool=0 bc=880B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: t, s
// locals: n, o, i, t#1, i#1, e, this
// closure: b, e
function {
  this = this;
  let o;
  let n;
  n = this.snapshot;
  if (!((undefined === n))) goto L_5f;
  return Promise.resolve(false);   // tail call
  null;
  n.response;
  o = {};
  let i;
  for (const i of t) {
    if (!(!b(o, i))) continue;
    if (!(e.isLoggingEnabled)) goto L_11b;
    console.warn("Unsupported account customization field", i.field);
    return Promise.resolve(false);
    // [栈深重同步 0 -> 3]
  }
  if (!((s.length > 0))) goto L_347;
  let i#1;
  let t#1;
  t#1 = n.response.personality_traits;
  if (!((null != t#1))) goto L_275;
  if ((("object" != typeof t#1))) goto L_1ee;
  if (!(Array.isArray(t#1))) goto L_275;
  if (!(e.isLoggingEnabled)) goto L_249;
  console.warn("Account personality traits have an invalid response");
  return Promise.resolve(false);   // tail call
  null;
  t#1;
  i#1 = {};
  let e;
  for (const e of s) {
    if (!(("default" === e.levelKey))) goto L_2e0;
    goto L_32e;
    // [栈深重同步 5 -> 3]
    i#1[e.traitKey] = e.levelKey;
    // [栈深重同步 4 -> 5]
    <?>;
    // [栈深重同步 4 -> 3]
  }
  o.personality_traits = i#1;
  return this.updateAccountCustomizationsResponse(o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=62B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// closure: k, t
function {
  if (!((k(e, "account customizations enabled response").enabled !== t))) goto L_3c;
  throw new TypeError("Expected account customizations enabled response to match the requested value");
  return t;
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=1 bc=620B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: t
// locals: s, n, o, this
// closure: k, a, e, _
function {
  this = this;
  let o;
  let n;
  let s;
  s = this.snapshot;
  if (!((undefined === s))) goto L_38;
  return false; // async
  n = new a.OAINetworkClient(this.platformServices).requestJson({request: {method: "POST", path: "/backend-api/user_system_message_enabled", jsonBody: {enabled: t}}, decode: function <atom:0>});
  o = (await n.result);
  if (!((o.kind !== a.OAINetworkResultKind.Success))) goto L_1ee;
  if (!(e.isLoggingEnabled)) goto L_1e9;
  console.warn("Could not update account customizations status", o.kind);
  goto L_26b;
  // [栈深重同步 1 -> 0]
  null;
  s.response;
  this.receive(_({enabled: o.value}));
  return true; // async
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=505B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: t, s, this
// closure: a, _, e
function {
  this = this;
  let s;
  let t;
  t = new a.OAINetworkClient(this.platformServices).requestJson({request: {method: "GET", path: "/backend-api/user_system_messages"}, decode: _});
  s = (await t.result);
  if (!((s.kind !== a.OAINetworkResultKind.Success))) goto L_1ac;
  if (!(e.isLoggingEnabled)) goto L_1a7;
  console.warn("Could not load account customizations", s.kind);
  goto L_1f8;
  // [栈深重同步 1 -> 0]
  this.receive(s.value);
  return true; // async
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=511B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: t
// locals: s, n, this
// closure: a, _, e
function {
  this = this;
  let n;
  let s;
  s = new a.OAINetworkClient(this.platformServices).requestJson({request: {method: "POST", path: "/backend-api/user_system_messages", jsonBody: t}, decode: _});
  n = (await s.result);
  if (!((n.kind !== a.OAINetworkResultKind.Success))) goto L_1b2;
  if (!(e.isLoggingEnabled)) goto L_1ad;
  console.warn("Could not update account customizations", n.kind);
  goto L_1fe;
  // [栈深重同步 1 -> 0]
  this.receive(n.value);
  return true; // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=118B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: this
function {
  this = this;
  this.snapshot = e;
  this.state.next(e.state);
  return;
}

// fn b  args=2 vars=2 closure=2 cpool=0 bc=758B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
// closure: i, r
function {
  if (!((t.field === i.OAICustomizationField.CustomInstructions))) goto L_9a;
  e.traits_model_message = t.value;
  return true;
  if (!((t.field === i.OAICustomizationField.AboutYou))) goto L_13e;
  e.about_user_message = t.value;
  e.other_user_message = t.value;
  return true;
  if (!((t.field === i.OAICustomizationField.Name))) goto L_1b6;
  e.name_user_message = t.value;
  return true;
  if (!((t.field === i.OAICustomizationField.Occupation))) goto L_22e;
  e.role_user_message = t.value;
  return true;
  if ((!r.isVersionAtLeast(71))) goto L_2c2;
  if (!(!(t.field !== i.OAICustomizationField.PersonalityType))) goto L_2f5;
  e.personality_type_selection = t.value;
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=105B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: this
// closure: <class_fields_init>, c
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.platformServices = e;
  this.snapshot = new c.BehaviorSubject({refresh: {loading: false}, updates: new Map()});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
function {
  return e.loading;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=1 bc=334B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: <atom:0>
// locals: e, t, s, n, o
// closure: w
function {
  e = <to_object>(<atom:0>).values;
  t = <to_object>(<atom:0>).refresh;
  s = <to_object>(<atom:0>).updates;
  n = <to_object>(<atom:0>).aggregateFailure;
  <to_object>(<atom:0>);
  let o;
  o = Array.from(s.values());
  if (!((undefined === e))) goto L_eb;
  goto L_ee;
  // [栈深重同步 2 -> 1]
  if ((t.loading)) goto L_142;
  return {settings: w(e), loading: o.some(function <atom:0>), failure: n};
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=150B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: this
// closure: w, o, d
function {
  this = this;
  return o.convertObservableToBridgeObservable(this.snapshot.pipe(d.map(function <atom:0>)));   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=367B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: <atom:0>
// locals: t, s, n, o
// closure: e
function {
  t = <to_object>(<atom:0>).values;
  s = <to_object>(<atom:0>).refresh;
  n = <to_object>(<atom:0>).updates;
  <to_object>(<atom:0>);
  let o;
  o = n.get(e);
  if (!((t == null))) goto L_a8;
  t;
  goto L_aa;
  if (!((o == null))) goto L_ba;
  o;
  goto L_db;
  if (!((undefined.loading == null))) goto L_109;
  undefined.loading;
  if (!((undefined === t))) goto L_109;
  if (!((o == null))) goto L_119;
  o;
  goto L_13a;
  if (!((undefined.failure == null))) goto L_169;
  undefined.failure;
  if (!((undefined === t))) goto L_168;
  goto L_169;
  // [栈深重同步 2 -> 1]
  return {hasResponse: (undefined !== t), value: undefined[e], loading: s.loading, failure: undefined};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=295B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
function {
  if (!((e.hasResponse === t.hasResponse))) goto L_126;
  if (!((e.value === t.value))) goto L_126;
  if (!((e.loading === t.loading))) goto L_126;
  return (e.failure === t.failure);
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=2 bc=189B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: this
// closure: o, d, l
function {
  this = this;
  return o.convertObservableToBridgeObservable(this.snapshot.pipe(d.map(function <atom:0>), l.distinctUntilChanged(function <atom:0>)));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=59B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: <atom:0>
// locals: e
// closure: v
function {
  e = <to_object>(<atom:0>).values;
  <to_object>(<atom:0>);
  if (!((e == null))) goto L_2f;
  e;
  goto L_33;
  if (!((undefined[v] == null))) goto L_3a;
  undefined[v];
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=187B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: this
// closure: v, o, d, l
function {
  this = this;
  return o.convertObservableToBridgeObservable(this.snapshot.pipe(d.map(function <atom:0>), l.distinctUntilChanged()));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// closure: O, t
function {
  return O(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=171B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t, this
// closure: O, g, v
function {
  this = this;
  let t;
  if (!(e)) goto L_2c;
  goto L_4e;
  // [栈深重同步 1 -> 0]
  t = g.Standard;
  return this.updateSetting(v, JSON.stringify({mode: t}), function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=93B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, o
// closure: t, n, s
function {
  if (!((undefined === e.failure))) goto L_2d;
  if (((e !== t))) goto L_5c;
  n.set(o, s);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=262B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: t, i
// closure: s, e, o, n, this
function {
  if (((t === s))) goto L_105;
  if (!(!t.loading)) goto L_5d;
  if (((t === e.get(i)))) goto L_105;
  o.set(i, t);
  if (!((this.snapshot.value.values == null))) goto L_101;
  this.snapshot.value.values;
  goto L_103;
  n[i] = undefined[i];
  undefined[i];
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=53B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, o
// closure: s, n, t
function {
  if (!((e === s))) goto L_34;
  n.set(o, t);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=4 cpool=2 bc=884B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: t
// locals: n, o, e, t#1, n#1
// closure: s, e, this, a
function {
  if (!((this.snapshot.value.refresh === s))) goto L_373;
  if (!((t.kind === a.OAINetworkResultKind.Success))) goto L_20a;
  let o;
  let n;
  null;
  t.value;
  n = {};
  o = new Map();
  this.snapshot.value.updates.forEach(function <atom:0>);
  this.snapshot.next({values: n, refresh: {loading: false}, updates: o});
  // close_loc o
  // close_loc n
  return;
  let n#1;
  let t#1;
  let e;
  e = {kind: 0};
  t#1 = {loading: false, failure: e};
  n#1 = new Map(this.snapshot.value.updates);
  n#1.forEach(function <atom:0>);
  null;
  this.snapshot.value;
  this.snapshot.next({refresh: t#1, updates: n#1, aggregateFailure: e});
  // close_loc n#1
  // close_loc t#1
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=2 bc=667B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: e, t, s, n, this
// closure: a, A
function {
  this = this;
  let n;
  let s;
  let t;
  let e;
  e = this.snapshot.value.updates;
  t = this.snapshot.value.refresh;
  s = {loading: true};
  n = new Map(e);
  n.forEach(function <atom:0>);
  null;
  this.snapshot.value;
  this.snapshot.next({refresh: s, updates: n, aggregateFailure: undefined});
  new a.OAINetworkClient(this.platformServices).requestJson({request: {method: "GET", path: "/backend-api/settings/user"}, decode: A}).result.then(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=7B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: s
// closure: C, e, t
function {
  return C(s, e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=58B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
// locals: this
// closure: C
function {
  this = this;
  if (!(t)) goto L_2f;
  goto L_34;
  // [栈深重同步 4 -> 3]
  this.updateSetting(e, "false", function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=12 closure=1 cpool=0 bc=1831B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t, s
// locals: n, o, i, r, u, t#1, s#1, t#2, this
// closure: a
function {
  this = this;
  let u;
  let r;
  let i;
  let o;
  let n;
  if (!((undefined === this.snapshot.value.values))) goto L_7e;
  return false; // async
  n = {loading: true};
  o = new Map(this.snapshot.value.updates);
  o.set(e, n);
  null;
  this.snapshot.value;
  this.snapshot.next({updates: o, aggregateFailure: undefined});
  i = new a.OAINetworkClient(this.platformServices).requestJson({request: {method: "PATCH", path: "/backend-api/settings/account_user_setting", query: {feature: e, value: t}}, decode: s});
  r = (await i.result);
  if (!((this.snapshot.value.updates.get(e) !== n))) goto L_31e;
  return false; // async
  u = new Map(this.snapshot.value.updates);
  if (!((r.kind === a.OAINetworkResultKind.Success))) goto L_63d;
  let t#1;
  null;
  this.snapshot.value.values;
  t#1 = {};
  let s#1;
  for (const s#1 of Object.keys(r.value)) {
    if (!((s#1 !== e))) goto L_522;
    if (!((u.get(s#1) == null))) goto L_500;
    u.get(s#1);
    goto L_521;
    if (((true === undefined.loading))) goto L_588;
    t#1[s#1] = r.value[s#1];
    u.set(s#1, {loading: false});
  }
  null;
  this.snapshot.value;
  this.snapshot.next({values: t#1, updates: u, aggregateFailure: undefined});
  return true; // async
  let t#2;
  t#2 = {kind: 0};
  u.set(e, {loading: false, failure: t#2});
  null;
  this.snapshot.value;
  this.snapshot.next({updates: u, aggregateFailure: t#2});
  return false; // async
}

// fn _  args=1 vars=2 closure=4 cpool=0 bc=555B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t
// closure: k, i, S, r
function {
  let t;
  t = k(e, "account customizations response");
  if (!(r.isVersionAtLeast(74))) goto L_21f;
  if (!(("boolean" == typeof t.enabled))) goto L_21f;
  goto L_220;
  // [栈深重同步 3 -> 2]
  null;
  {};
  return {response: t, state: {fields: [{field: i.OAICustomizationField.CustomInstructions, value: S(t, "traits_model_message")}, {field: i.OAICustomizationField.AboutYou, value: S(t, "other_user_message")}, {field: i.OAICustomizationField.Name, value: S(t, "name_user_message")}, {field: i.OAICustomizationField.Occupation, value: S(t, "role_user_message")}], suggestions: [], traitTypeIdentifiers: [], loading: false}};
}

// fn S  args=2 vars=3 closure=0 cpool=0 bc=80B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
// locals: s
function {
  let s;
  s = e[t];
  if (!(("string" != typeof s))) goto L_4c;
  throw new TypeError("Expected account customizations response.".concat(t, " to be a string"));
  return s;
}

// fn A  args=1 vars=4 closure=3 cpool=0 bc=213B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t, n, o
// closure: k, y, s
function {
  let o;
  let n;
  let t;
  t = k(e, "account settings response");
  n = y(k(t.settings, "account settings response.settings"));
  if (((undefined === undefined))) goto L_6c;
  o = <to_object>(undefined).flags;
  <to_object>(undefined);
  goto L_97;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_45;
  // [栈深重同步 1 -> 0]
  null;
  n;
  if (!((o == null))) goto L_ad;
  o;
  goto L_ce;
  return {image_gen_holdout_active: (true === undefined.imageGenHoldoutActive)};
}

// fn w  args=1 vars=3 closure=1 cpool=0 bc=554B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t, s
// closure: r
function {
  let t;
  t = {memoryEnabled: e.sunshine, referenceChatHistoryEnabled: e.moonshine, improvedMemoryEnabled: e.m3m, improvedMemoryOptedOut: e.m3m_opted_out, goldenHourEnabled: e.golden_hour, memoryInSearchEnabled: e.memory_in_search};
  if (!(r.isVersionAtLeast(71))) goto L_226;
  let s;
  null;
  t;
  s = {instantAnswersEnabled: e.instant_answers_enabled, taskSuggestionsEnabled: e.task_suggestions_enabled, fileLibraryAutoReference: e.file_library_auto_reference};
  if (!(r.isVersionAtLeast(208))) goto L_222;
  null;
  s;
  return {imageGenHoldoutOptIn: e.image_gen_enabled, imageGenHoldoutActive: (true === e.image_gen_holdout_active)};
  return s;
  return t;
}

// fn y  args=1 vars=5 closure=3 cpool=0 bc=260B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e
// locals: t, s, o, e#1
// closure: v, n, g
function {
  let t;
  t = {};
  let s;
  for (const s of Object.keys(e)) {
    let o;
    o = e[s];
    if (!((s === v))) goto L_dd;
    let e#1;
    if (!((null === o))) goto L_59;
    goto L_83;
    // [栈深重同步 4 -> 3]
    e#1 = n.decode(o);
    if (!((e#1 == null))) goto L_96;
    e#1;
    goto L_b7;
    t[s] = (undefined.mode !== g.Standard);
   continue;
    if (!(("boolean" == typeof o))) goto L_f5;
    goto L_f6;
    // [栈深重同步 6 -> 5]
    t[s] = undefined;
  }
  return t;
}

// fn O  args=2 vars=3 closure=4 cpool=0 bc=117B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
// locals: s
// closure: k, n, v, y
function {
  let s;
  s = k(e, "account setting mutation response");
  if (!((n.decode(s[v]).mode !== t))) goto L_6e;
  throw new TypeError("Expected response presentation mutation to match the requested mode");
  return y(s);   // tail call
}

// fn C  args=3 vars=4 closure=2 cpool=0 bc=85B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t, s
// locals: n
// closure: k, y
function {
  let n;
  n = k(e, "account setting mutation response");
  if (!((n[t] !== s))) goto L_4e;
  throw new TypeError("Expected account setting mutation response.".concat(t, " to match the requested value"));
  return y(n);   // tail call
}

// fn k  args=2 vars=2 closure=0 cpool=0 bc=122B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: e, t
function {
  if (((null === e))) goto L_3d;
  if ((("object" != typeof e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_78;
  throw new TypeError("Expected ".concat(t, " to be an object"));
  return e;
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=28 bc=1170B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// args: require, module, exports
// locals: e, t, s, n, o, i, a, r, u, c, l, d, h, p, v, g, m, f, ChatGPTAccountCustomizationsService, <class_fields_init>, ChatGPTAccountCustomizationsService#1, b, ChatGPTAccountSettingsService, <class_fields_init>#1, ChatGPTAccountSettingsService#1, _, S, A, w, y, O, C, k
function {
  f = function f;
  b = function b;
  _ = function _;
  S = function S;
  A = function A;
  w = function w;
  y = function y;
  O = function O;
  C = function C;
  k = function k;
  let ChatGPTAccountSettingsService#1;
  let ChatGPTAccountCustomizationsService#1;
  let m;
  let v;
  let p;
  let h;
  let d;
  let l;
  let c;
  let u;
  let r;
  let a;
  let i;
  let o;
  let n;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.withChatGPTAccountSettingsServices = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JsonSerializationRuntime");
  s = t.createJsonSerializer({kind: t.JsonSchemaKind.Object, name: "AccountSettingsFlagsResponse", fields: [{name: "flags", jsonName: "flags", schema: {kind: t.JsonSchemaKind.Object, name: "AccountSettingsFlags", fields: [{name: "imageGenHoldoutActive", jsonName: "image_gen_holdout_active", schema: {kind: t.JsonSchemaKind.Boolean, nullable: true}, optional: true, resilient: false}], nullable: true}, optional: true, resilient: false}]});
  n = t.createJsonSerializer({kind: t.JsonSchemaKind.Object, name: "ResponsePresentationSettings", fields: [{name: "mode", jsonName: "mode", schema: {kind: t.JsonSchemaKind.String, nullable: true}, optional: true, resilient: false}]});
  o = require("bridge_observables/src/utils/convertObservableToBridgeObservable");
  i = require("oai_platform_services/src/OAIAccountCustomizationsService");
  a = require("oai_platform_services/src/OAINetworkClient");
  r = require("valdi_core/src/CompilerIntrinsics");
  u = require("valdi_core/src/JsonSerialization");
  c = require("valdi_rxjs/src/BehaviorSubject");
  l = require("valdi_rxjs/src/operators/distinctUntilChanged");
  d = require("valdi_rxjs/src/operators/map");
  h = new WeakMap();
  p = new WeakMap();
  v = "response_presentation";
  if ((g)) goto L_3cf;
  g = {};
  !function <atom:0>({});
  m = {observeFeature: function <atom:0>};
  exports.withChatGPTAccountSettingsServices = f;
  let ChatGPTAccountCustomizationsService;
  let <class_fields_init>;
  class ChatGPTAccountCustomizationsService extends undefined { ... }
  <proto:ChatGPTAccountCustomizationsService>.observeCustomizations = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.updateCustomization = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.updateCustomizations = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.setCustomizationsEnabled = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.refresh = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.updateAccountCustomizationsResponse = function <atom:0>;
  <proto:ChatGPTAccountCustomizationsService>.receive = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTAccountCustomizationsService>;
  ChatGPTAccountCustomizationsService = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTAccountCustomizationsService#1 = function <atom:0>;
  let ChatGPTAccountSettingsService;
  let <class_fields_init>#1;
  class ChatGPTAccountSettingsService extends undefined { ... }
  <proto:ChatGPTAccountSettingsService>.observeSettings = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.observeSetting = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.observeRichResponses = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.setRichResponsesEnabled = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.refresh = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.setBoolean = function <atom:0>;
  <proto:ChatGPTAccountSettingsService>.updateSetting = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ChatGPTAccountSettingsService>;
  ChatGPTAccountSettingsService = function <atom:0>;
  // close_loc <class_fields_init>#1
  ChatGPTAccountSettingsService#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/account/ChatGPTAccountSettingsServices
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
