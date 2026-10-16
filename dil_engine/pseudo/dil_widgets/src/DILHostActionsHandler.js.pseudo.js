// fn <atom:0>  args=2 vars=8 closure=2 cpool=0 bc=126B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: t#1, i#1, e, this.active_func, new.target, this
// closure: b, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_1d;
  i;
  i = [];
  i#1 = [];
  let e;
  e = b(t, i);
  this = new new.target();
  if (!(<class_fields_init>)) goto L_3e;
  <class_fields_init>.call(this);
  new new.target();
  this.reason = t;
  this.contexts = i;
  this.message = e;
  this.name = "DILHostActionValidationError";
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=85B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: this
// closure: DILHostActionValidationError
function {
  this = this;
  // append([t], 1, this.contexts)
  this.contexts;
  return new DILHostActionValidationError(this.reason, [t]);
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.actionHandler = t;
  this.options = i;
  this.getSupportedClientActions = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=313B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i, this
// closure: o
function {
  this = this;
  let i;
  if (!((this.options.getInteractionContext == null))) goto L_51;
  this.options.getInteractionContext;
  this.options;
  goto L_55;
  // [栈深重同步 1 -> 2]
  i = <?>.call(undefined, t);
  if (!((undefined !== i))) goto L_138;
  if (!(o.isVersionAtLeast(207))) goto L_131;
  if (!((undefined !== i.loggingMetadata))) goto L_131;
  goto L_132;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {widgetName: i.widgetName, dilVersion: i.dilVersion};
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=303B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, i#1, this
// closure: l
function {
  this = this;
  try { // catch -> L_30
  return this.dispatchHostActionPayloadUnchecked(t, i);
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_12e
  let i#1;
  i#1 = l.toError(e);
  this.options.onDispatchError(i#1, {actionType: t.type});
  return Promise.resolve({success: false, statusMessage: i#1.message});
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=206B file=dil_widgets/src/DILHostActionsHandler
// args: i
// locals: e
// closure: l, this, t
function {
  let e;
  e = l.toError(i);
  this.options.onDispatchError(e, {actionType: t.type});
  return {success: false, statusMessage: e.message};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=206B file=dil_widgets/src/DILHostActionsHandler
// args: i
// locals: e
// closure: l, this, t
function {
  let e;
  e = l.toError(i);
  this.options.onDispatchError(e, {actionType: t.type});
  return {success: false, statusMessage: e.message};
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=2 bc=1616B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: i#1, e, this
// closure: l, DILHostActionValidationError, m, E
function {
  this = this;
  let e;
  if (!((undefined === t.type))) goto L_40;
  throw new DILHostActionValidationError("missing "type".", ["DIL host action"]);
  this.validateReadOnlyAction(t);
  if (!(("client" === t.handler))) goto L_36a;
  if (!((this.options.securityPolicy == null))) goto L_e1;
  this.options.securityPolicy;
  goto L_102;
  if (!((true === undefined.isModelWrittenDIL))) goto L_343;
  if (!((undefined !== t.nativeWidgetResolutionId))) goto L_343;
  if (!(("share" === t.type))) goto L_343;
  if (!((t.payload == null))) goto L_189;
  t.payload;
  goto L_1aa;
  if (!((undefined !== undefined.share_options))) goto L_343;
  if (!((this.getSupportedClientActions() == null))) goto L_1df;
  this.getSupportedClientActions();
  goto L_208;
  if (((true !== undefined.includes("personality_quiz_share_options")))) goto L_252;
  if (!((undefined === this.options.registeredServerActionHandler))) goto L_26e;
  throw new DILHostActionValidationError("Widget sharing is unavailable.", ["DIL client action", "share"]);
  m(this.options.securityPolicy, t.type);
  return this.options.registeredServerActionHandler(t).catch(function <atom:0>);   // tail call
  return this.dispatchClientAction(t, i);   // tail call
  if (!((this.options.securityPolicy == null))) goto L_3b7;
  this.options.securityPolicy;
  goto L_3d8;
  if (!((true === undefined.isModelWrittenDIL))) goto L_5d6;
  let i#1;
  if (!(("server" === t.handler))) goto L_4a1;
  if (!(("genui.run_plugin_tool" === t.type))) goto L_4a1;
  return this.dispatchModelPluginTool(t, this.options.securityPolicy);   // tail call
  i#1 = this.options.registeredServerActionHandler;
  if (!((undefined !== i#1))) goto L_5c1;
  if (!((undefined !== t.nativeWidgetResolutionId))) goto L_5c1;
  if (!((undefined !== t.componentName))) goto L_5c1;
  if (!((this.options.isRegisteredWidgetAction == null))) goto L_58f;
  this.options.isRegisteredWidgetAction;
  this.options;
  goto L_593;
  // [栈深重同步 2 -> 3]
  if (!((true === <?>.call(undefined, t)))) goto L_5c1;
  return i#1(t).catch(function <atom:0>);   // tail call
  throw new DILHostActionValidationError("server actions are unavailable to model-written DIL.", ["DIL host action"]);
  e = E(t, "server");
  return this.dispatchWidgetAction(e, this.captureInteractionContext(e.action));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=213B file=dil_widgets/src/DILHostActionsHandler
// args: t
function {
  if (!((undefined === t.statusMessage))) goto L_51;
  goto L_79;
  // [栈深重同步 2 -> 1]
  null;
  {statusMessage: t.statusMessage};
  if (!((undefined === t.dataJSON))) goto L_a7;
  goto L_cf;
  // [栈深重同步 2 -> 1]
  null;
  {dataJSON: t.dataJSON};
  return {success: t.success};
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=1 bc=714B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, a, this
// closure: m, n, o, DILHostActionValidationError, E
function {
  this = this;
  let a;
  let e;
  e = this.captureInteractionContext(t);
  if (!((t.type == null))) goto L_59;
  t.type;
  m(i, "");
  a = n.readDILModelPluginToolPayload(t.payload);
  if ((!o.isVersionAtLeast(269))) goto L_1d6;
  if (((undefined === this.options.serverActionHandler))) goto L_1d6;
  if (!((undefined !== this.options.serverActionTypes))) goto L_1ed;
  if (!(!this.options.serverActionTypes.includes("genui.run_plugin_tool"))) goto L_1ed;
  throw new DILHostActionValidationError("plugin tool results are unavailable in this host.", ["DIL host action"]);
  if (!((i.arePluginToolsReady == null))) goto L_21a;
  i.arePluginToolsReady;
  i;
  goto L_21d;
  // [栈深重同步 2 -> 3]
  if (!((true !== <?>.call(undefined)))) goto L_235;
  throw new DILHostActionValidationError("the invoking message is not ready for plugin tools.", ["DIL host action"]);
  null;
  a;
  if (!((this.dispatchWidgetAction(E({type: t.type, payload: {}}, "server"), e) == null))) goto L_2a3;
  this.dispatchWidgetAction(E({type: t.type, payload: {}}, "server"), e);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.then(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=421B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: this
// closure: a, DILHostActionValidationError
function {
  this = this;
  if (!((this.options.securityPolicy == null))) goto L_4f;
  this.options.securityPolicy;
  goto L_70;
  if (((true !== undefined.isReadOnly))) goto L_18c;
  if ((a.isNonConsumingAction(t.type, t.handler))) goto L_18c;
  if ((this.isSharedConversationAction(t))) goto L_18c;
  if ((this.isSharedPersonalityQuizAction(t))) goto L_18c;
  if ((this.isReadOnlyEntityReferenceAction(t))) goto L_18c;
  if (!(!this.isReadOnlySandboxDownloadAction(t))) goto L_1a4;
  throw new DILHostActionValidationError("actions are unavailable in read-only DIL.", ["DIL host action"]);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=360B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: this
// closure: s
function {
  this = this;
  if (!((this.options.securityPolicy == null))) goto L_4f;
  this.options.securityPolicy;
  goto L_70;
  if (!((true === undefined.isModelWrittenDIL))) goto L_167;
  if (!((this.getSupportedClientActions() == null))) goto L_a7;
  this.getSupportedClientActions();
  goto L_ef;
  if (!((true === undefined.includes(s.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY)))) goto L_167;
  if (!(("client" === t.handler))) goto L_167;
  return s.isDILSharedConversationAction(t.type);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=360B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: this
// closure: s
function {
  this = this;
  if (!((this.options.securityPolicy == null))) goto L_4f;
  this.options.securityPolicy;
  goto L_70;
  if (!((false === undefined.isModelWrittenDIL))) goto L_167;
  if (!((this.getSupportedClientActions() == null))) goto L_a7;
  this.getSupportedClientActions();
  goto L_ef;
  if (!((true === undefined.includes(s.DIL_SHARED_PERSONALITY_QUIZ_ACTIONS_CAPABILITY)))) goto L_167;
  if (!(("client" === t.handler))) goto L_167;
  return s.isDILSharedPersonalityQuizAction(t.type);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILHostActionsHandler
// args: t
function {
  if ((("handler" === t))) goto L_3e;
  if ((("type" === t))) goto L_3e;
  if ((("payload" === t))) goto L_3e;
  if ((("nativeWidgetResolutionId" === t))) goto L_3e;
  if ((("componentName" === t))) goto L_3e;
  return ("openURLInBrowser" === t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_widgets/src/DILHostActionsHandler
// args: t
function {
  if ((("category" === t))) goto L_12;
  return ("query" === t);
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=2 bc=938B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i, e, this
// closure: s, n
function {
  this = this;
  let e;
  let i;
  i = t.payload;
  e = this.getSupportedClientActions();
  if (!((this.options.securityPolicy == null))) goto L_9e;
  this.options.securityPolicy;
  goto L_bf;
  if (!((true === undefined.isModelWrittenDIL))) goto L_3a9;
  if (!((e == null))) goto L_d4;
  e;
  goto L_11c;
  if (!((true === undefined.includes(s.DIL_READ_ONLY_ENTITY_REFERENCE_CAPABILITY)))) goto L_3a9;
  if (!(e.includes(s.DIL_ENTITY_REFERENCE_CAPABILITY))) goto L_3a9;
  if (!(("client" === t.handler))) goto L_3a9;
  if (!(("open_entity_detail" === t.type))) goto L_3a9;
  if (!(Object.keys(t).every(function <atom:0>))) goto L_3a9;
  if (!((undefined !== i))) goto L_3a9;
  if (!(Object.keys(i).every(function <atom:0>))) goto L_3a9;
  if (!(("string" == typeof i.category))) goto L_3a9;
  if (!(("string" == typeof i.query))) goto L_3a9;
  return n.isDILModelEntityReference(i.category.trim(), i.query.trim());
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILHostActionsHandler
// args: t
function {
  if ((("handler" === t))) goto L_3e;
  if ((("type" === t))) goto L_3e;
  if ((("payload" === t))) goto L_3e;
  if ((("nativeWidgetResolutionId" === t))) goto L_3e;
  if ((("componentName" === t))) goto L_3e;
  return ("openURLInBrowser" === t);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=538B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: this
// closure: s, c
function {
  this = this;
  if (!((this.options.securityPolicy == null))) goto L_4f;
  this.options.securityPolicy;
  goto L_70;
  if (!((true === undefined.isModelWrittenDIL))) goto L_219;
  if (!((this.getSupportedClientActions() == null))) goto L_a7;
  this.getSupportedClientActions();
  goto L_ef;
  if (!((true === undefined.includes(s.DIL_READ_ONLY_SANDBOX_DOWNLOAD_CAPABILITY)))) goto L_219;
  if (!(("client" === t.handler))) goto L_219;
  if (!(("open_url" === t.type))) goto L_219;
  if (!(Object.keys(t).every(function <atom:0>))) goto L_219;
  if (!((t.payload == null))) goto L_1f7;
  t.payload;
  goto L_218;
  return c.isDILSandboxURL(undefined.url);
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=0 bc=626B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o, n, this
// closure: a, m
function {
  this = this;
  let n;
  let o;
  let e;
  e = this.resolveClientAction(t, 0);
  if (!(a.isNonConsumingAction(e.action.type, "client"))) goto L_bf;
  if (!((undefined === i))) goto L_ac;
  goto L_108;
  // [栈深重同步 1 -> 0]
  goto L_108;
  // [栈深重同步 1 -> 0]
  o = this.captureInteractionContext(e.action);
  n = this.options.securityPolicy;
  if (!((n == null))) goto L_15a;
  n;
  goto L_17b;
  if (((true !== undefined.isModelWrittenDIL))) goto L_246;
  if ((a.isNonConsumingAction(e.action.type, "client"))) goto L_246;
  if (!((e.action.type == null))) goto L_245;
  e.action.type;
  m(n, "");
  return this.dispatchAuthorizedClientAction(e, o);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=477B file=dil_widgets/src/DILHostActionsHandler
// locals: e
// closure: this, n, d, p, t, a, i
function {
  let e;
  if (!(this.isClientActionSupported(n))) goto L_92;
  this.validateReadOnlyAction(n);
  if (!((this.dispatchClientActionRequest(d, n, p) == null))) goto L_91;
  this.dispatchClientActionRequest(d, n, p);
  return {success: false};
  e = this.resolveClientAction(n, t.fallbackDepth);
  if (!(a.isNonConsumingAction(e.action.type, "client"))) goto L_1c9;
  if (!(!a.isNonConsumingAction(n.type, "client"))) goto L_1c9;
  goto L_1cc;
  // [栈深重同步 4 -> 3]
  if (!((this.dispatchAuthorizedClientAction(e, i) == null))) goto L_1dc;
  this.dispatchAuthorizedClientAction(e, i);
  return {success: false};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=241B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i
// closure: l, this, d
function {
  let i;
  i = l.toError(t);
  this.options.onDispatchError(i, {actionType: d.action.type});
  return {success: false, statusMessage: i.message};
}

// fn <atom:0>  args=2 vars=11 closure=8 cpool=2 bc=1428B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: n, c, t#1, i#1, d, p, u, y, this
// closure: a, l, e, s, r, v, E, o
function {
  this = this;
  let y;
  let u;
  let p;
  let d;
  let c;
  let n;
  null;
  t.action;
  n = {};
  this.validateReadOnlyAction(n);
  if (!((this.options.securityPolicy == null))) goto L_101;
  this.options.securityPolicy;
  goto L_12e;
  if (!((undefined.getMessageMetadata == null))) goto L_12b;
  undefined.getMessageMetadata;
  undefined;
  goto L_12e;
  // [栈深重同步 3 -> 4]
  if (!((this.options.getProductAnalyticsAppData == null))) goto L_17b;
  this.options.getProductAnalyticsAppData;
  this.options;
  goto L_17e;
  // [栈深重同步 4 -> 5]
  c = e.enrichDILProductShownEvent(this.validateClientAction(n), <?>.call(undefined), <?>.call(undefined));
  if (!(("issue_new_turn" === c.type))) goto L_1f1;
  null;
  c;
  null;
  c.payload;
  c = {payload: {append_to_current_leaf: true}};
  {payload: {append_to_current_leaf: true}};
  if (!(("open_entity_detail" === c.type))) goto L_3ef;
  if (!((this.getSupportedClientActions() == null))) goto L_24f;
  this.getSupportedClientActions();
  goto L_297;
  if (!(undefined.includes(s.DIL_ENTITY_PINNED_IMAGE_CAPABILITY))) goto L_3ef;
  let i#1;
  let t#1;
  t#1 = r.getDILEntityPinnedImage(a.getDILUserInteractionSource());
  i#1 = this.options.securityPolicy;
  if (!((undefined !== t#1))) goto L_3a0;
  if (!((i#1 == null))) goto L_348;
  i#1;
  goto L_369;
  if (!((true === undefined.isModelWrittenDIL))) goto L_3a0;
  t#1 = v(t#1, i#1.getTrustedNetworkPolicy());
  v(t#1, i#1.getTrustedNetworkPolicy());
  if (!((undefined !== t#1))) goto L_3ee;
  null;
  c;
  null;
  c.payload;
  c = {payload: {pinned_image: t#1}};
  {payload: {pinned_image: t#1}};
  null;
  E(c, "client");
  if (!(o.isVersionAtLeast(164))) goto L_439;
  if (!((undefined !== i))) goto L_439;
  goto L_43a;
  // [栈深重同步 2 -> 1]
  null;
  {};
  d = {};
  p = (true === c.openURLInBrowser);
  if (!((this.options.beforeDispatch == null))) goto L_4b7;
  this.options.beforeDispatch;
  this.options;
  goto L_4bd;
  // [栈深重同步 1 -> 2]
  u = <?>.call(undefined, d);
  if (!((undefined === u))) goto L_4f5;
  return this.dispatchClientActionRequest(d, n, p);   // tail call
  y = u.then(function <atom:0>).catch(function <atom:0>);
  if (!((undefined === this.options.clientActionHandler))) goto L_590;
  return undefined;
  return y;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=14B file=dil_widgets/src/DILHostActionsHandler
// args: t
// closure: i
function {
  null;
  t;
  return {completedAction: i};
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=239B file=dil_widgets/src/DILHostActionsHandler
// args: i
// locals: e
// closure: l, this, t
function {
  let e;
  e = l.toError(i);
  this.options.onDispatchError(e, {actionType: t.action.type});
  return {success: false, statusMessage: e.message};
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=4 bc=881B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e
// locals: o, this
// closure: l, d
function {
  this = this;
  let o;
  o = t.action.payload;
  if (!(e)) goto L_249;
  if (!(("open_url" === t.action.type))) goto L_249;
  if (!((o == null))) goto L_ad;
  o;
  goto L_ce;
  if (!(("string" == typeof undefined.url))) goto L_249;
  if (!((1 === Object.keys(o).length))) goto L_249;
  if (!(new RegExp("^https?:\\/\\/").test(o.url))) goto L_249;
  d.platformBrowser.openURL(o.url);
  if (!((undefined === this.options.clientActionHandler))) goto L_211;
  return undefined;
  return Promise.resolve({success: true, completedAction: i});
  if (!((undefined !== this.options.clientActionHandler))) goto L_327;
  return this.options.clientActionHandler(t).then(function <atom:0>).catch(function <atom:0>);
  this.actionHandler.handle(t);
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=dil_widgets/src/DILHostActionsHandler
// closure: n, t
function {
  return n(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=239B file=dil_widgets/src/DILHostActionsHandler
// args: i
// locals: e
// closure: l, this, t
function {
  let e;
  e = l.toError(i);
  this.options.onDispatchError(e, {actionType: t.action.type});
  return {success: false, statusMessage: e.message};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=dil_widgets/src/DILHostActionsHandler
// closure: this, t
function {
  return this.actionHandler.handle(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=181B file=dil_widgets/src/DILHostActionsHandler
// args: i
// closure: this, l, t
function {
  return this.options.onDispatchError(l.toError(i), {actionType: t.action.type});   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=4 bc=779B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, n, this
// closure: l, o
function {
  this = this;
  let n;
  let e;
  if (!(o.isVersionAtLeast(164))) goto L_49;
  if (!((undefined !== i))) goto L_49;
  null;
  t;
  t = {interactionContext: i};
  {interactionContext: i};
  if (!((this.options.beforeDispatch == null))) goto L_96;
  this.options.beforeDispatch;
  this.options;
  goto L_9a;
  // [栈深重同步 1 -> 2]
  e = <?>.call(undefined, t);
  n = this.options.serverActionHandler;
  if (!(("server" === t.handler))) goto L_26b;
  if (!((undefined !== n))) goto L_26b;
  if (((undefined === this.options.serverActionTypes))) goto L_20c;
  if (!(this.options.serverActionTypes.includes(t.action.type))) goto L_26b;
  if (!((undefined === e))) goto L_21c;
  goto L_245;
  // [栈深重同步 1 -> 0]
  return e.then(function <atom:0>).catch(function <atom:0>);   // tail call
  if (!((undefined !== e))) goto L_2c3;
  goto L_30a;
  // [栈深重同步 1 -> 0]
  this.actionHandler.handle(t);
  return;
}

// fn <atom:0>  args=1 vars=10 closure=14 cpool=0 bc=2797B file=dil_widgets/src/DILHostActionsHandler
// args: e
// locals: t, o, r, l, t#1, i, t#2, d, this
// closure: a, DILHostActionValidationError, s, i, t, u, y, h, n, _, g, A, I, c
function {
  this = this;
  let d;
  let l;
  let r;
  let o;
  if (!(a.isNonConsumingAction(e.type, "client"))) goto L_165;
  let t;
  t = e.payload;
  if (!((t == null))) goto L_92;
  t;
  goto L_b3;
  if (!((null != undefined.action))) goto L_13f;
  if (!((t.action !== e.type))) goto L_13f;
  if (!((e.type == null))) goto L_138;
  e.type;
  throw new DILHostActionValidationError("payload.action cannot redirect a non-consuming action.", ["DIL client action", ""]);
  null;
  e;
  if (!((undefined === t))) goto L_150;
  goto L_15f;
  // [栈深重同步 2 -> 1]
  null;
  t;
  null;
  {payload: {}};
  return {};
  o = this.options.securityPolicy;
  r = this.getSupportedClientActions();
  if (!((r == null))) goto L_1de;
  r;
  goto L_226;
  l = (true === undefined.includes(s.DIL_LITERAL_SANDBOX_PATH_CAPABILITY));
  if (!(("start_voice_mode" === e.type))) goto L_416;
  if (!((o == null))) goto L_262;
  o;
  goto L_283;
  if (((true === undefined.isModelWrittenDIL))) goto L_2cf;
  if (!(i.isWidgetVoiceSessionPayload(e.payload))) goto L_416;
  let t#1;
  if (!((o == null))) goto L_34a;
  o;
  goto L_377;
  if (!((undefined.getTrustedComponentAppData == null))) goto L_374;
  undefined.getTrustedComponentAppData;
  undefined;
  goto L_377;
  // [栈深重同步 4 -> 5]
  if (!((o == null))) goto L_382;
  o;
  goto L_3d8;
  if (!((undefined.getMessageMetadata == null))) goto L_3ac;
  undefined.getMessageMetadata;
  undefined;
  goto L_3d8;
  // [栈深重同步 5 -> 6]
  if (!((<?>.call(undefined) == null))) goto L_3b7;
  <?>.call(undefined);
  goto L_3d8;
  t#1 = i.getValidatedWidgetVoicePayload(e.type, e.payload, <?>.call(undefined), undefined.messageId);
  if (!(!t#1)) goto L_3f8;
  throw new DILHostActionValidationError("Voice is unavailable for this component.", ["DIL client action"]);
  return {handler: "client", type: "start_voice_mode", payload: t#1};
  if (!((o == null))) goto L_423;
  o;
  goto L_444;
  if (!((true === undefined.isModelWrittenDIL))) goto L_a01;
  if (!((e.type === "request_media_upload"))) goto L_52a;
  let i;
  if (!((o.getTrustedComponentAppData == null))) goto L_4cd;
  o.getTrustedComponentAppData;
  o;
  goto L_4d0;
  // [栈深重同步 4 -> 5]
  i = t.getValidatedWidgetMediaUploadPayload(e, <?>.call(undefined));
  if (!((undefined === i))) goto L_4ef;
  throw new DILHostActionValidationError("Media upload is unavailable for this component.", ["DIL client action"]);
  return {handler: "client", type: e.type, payload: i};
  if (!((e.type === "copy"))) goto L_53a;
  return u(e);   // tail call
  if (!((e.type === "issue_new_turn"))) goto L_54a;
  return y(e);   // tail call
  if (!((e.type === "request_user_input"))) goto L_55a;
  return h(e);   // tail call
  if (!((e.type === "open_entity_detail"))) goto L_90e;
  if (!((undefined !== e.payload))) goto L_87e;
  if (!(("value" in e.payload))) goto L_87e;
  let t#2;
  if (!((r == null))) goto L_5cc;
  r;
  goto L_614;
  if (!((true !== undefined.includes(s.DIL_ENTITY_REFERENCE_CAPABILITY)))) goto L_631;
  throw new DILHostActionValidationError("requires a supported invoking message.", ["DIL client action", "open_entity_detail"]);
  t#2 = n.readDILModelNamedEntity(e.payload);
  if (!((undefined === t#2.disambig))) goto L_75e;
  if (!((undefined === t#2.location))) goto L_75e;
  if (!((undefined === t#2.address))) goto L_75e;
  goto L_873;
  // [栈深重同步 4 -> 3]
  if (!((undefined === t#2.disambig))) goto L_78b;
  goto L_7b5;
  // [栈深重同步 6 -> 5]
  null;
  {disambiguation: t#2.disambig};
  if (!((undefined === t#2.location))) goto L_7e5;
  goto L_80f;
  // [栈深重同步 6 -> 5]
  null;
  {location: t#2.location};
  if (!((undefined === t#2.address))) goto L_83f;
  goto L_869;
  // [栈深重同步 6 -> 5]
  null;
  {address: t#2.address};
  null;
  {extraParams: {}};
  return {handler: "client", type: "open_entity_detail", payload: {query: t#2.value, category: t#2.category}};
  if (!((r == null))) goto L_88f;
  r;
  goto L_8d7;
  if (!((o.areEntityActionsReady == null))) goto L_907;
  o.areEntityActionsReady;
  o;
  goto L_90a;
  // [栈深重同步 6 -> 7]
  return _(e, (true === undefined.includes(s.DIL_ENTITY_REFERENCE_CAPABILITY)), (true === <?>.call(undefined)));   // tail call
  if (!((e.type === "open_url"))) goto L_924;
  return g(e, o, l);   // tail call
  if (!((e.type === "open_image_lightbox"))) goto L_937;
  return A(e, o);   // tail call
  if (!((e.type === "open_file_citation"))) goto L_94a;
  return I(e, o);   // tail call
  if (!((this.options.isRegisteredWidgetAction == null))) goto L_999;
  this.options.isRegisteredWidgetAction;
  this.options;
  goto L_99d;
  // [栈深重同步 3 -> 4]
  if (!((true !== <?>.call(undefined, e)))) goto L_a00;
  throw new DILHostActionValidationError("unsupported type "".concat(e.type, ""."), ["DIL client action"]);
  e.type;
  if (!((e.payload == null))) goto L_a2b;
  e.payload;
  goto L_a4c;
  d = undefined.url;
  if (!(("open_url" === e.type))) goto L_aeb;
  if (!(c.isDILSandboxURL(d))) goto L_aeb;
  if (!((undefined === c.getDILSandboxDownloadPath(d, l)))) goto L_aeb;
  throw new DILHostActionValidationError("unsafe sandbox URL in payload.url.", ["DIL client action", "open_url"]);
  return e;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=985B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: e, i, this
// closure: i, s
function {
  this = this;
  let e;
  e = this.getSupportedClientActions();
  if (!(("start_voice_mode" === t.type))) goto L_12b;
  if (!(i.isWidgetVoiceSessionPayload(t.payload))) goto L_12b;
  if (!((e == null))) goto L_b1;
  e;
  goto L_da;
  if (!((true === undefined.includes("start_voice_mode")))) goto L_12a;
  return e.includes(s.DIL_WIDGET_VOICE_SESSION_CAPABILITY);
  if (!((this.options.securityPolicy == null))) goto L_178;
  this.options.securityPolicy;
  goto L_199;
  if (!((true === undefined.isModelWrittenDIL))) goto L_35e;
  let i;
  i = t.type;
  if (!((undefined !== i))) goto L_35d;
  if ((s.isAllowedModelWrittenDILHostActionType(i))) goto L_250;
  if (!((this.options.isRegisteredWidgetAction == null))) goto L_24b;
  this.options.isRegisteredWidgetAction;
  this.options;
  goto L_24f;
  // [栈深重同步 2 -> 3]
  if (!((true === <?>.call(undefined, t)))) goto L_35d;
  if ((("start_voice_mode" !== i))) goto L_2ba;
  if (!((e == null))) goto L_271;
  e;
  goto L_2b9;
  if (!((true === undefined.includes(s.DIL_RESOLVED_WIDGET_VOICE_CAPABILITY)))) goto L_35d;
  if ((("request_media_upload" !== i))) goto L_324;
  if (!((e == null))) goto L_2db;
  e;
  goto L_323;
  if (!((true === undefined.includes(s.DIL_RESOLVED_WIDGET_MEDIA_UPLOAD_CAPABILITY)))) goto L_35d;
  if (!((e == null))) goto L_335;
  e;
  goto L_35c;
  return (true === undefined.includes(i));
  if (!((undefined !== t.type))) goto L_3d8;
  if (((undefined === e))) goto L_3d8;
  return e.includes(t.type);
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=629B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, this
// closure: DILHostActionValidationError, a
function {
  this = this;
  let e;
  if (!(this.isClientActionSupported(t))) goto L_3b;
  return {action: t, fallbackDepth: i};
  if (!((undefined === t.fallbackAction))) goto L_c1;
  throw new DILHostActionValidationError("unsupported type "".concat(t.type, ""."), ["DIL client action"]);
  if (!((i >= 3))) goto L_126;
  throw new DILHostActionValidationError("fallback action depth exceeded for type "".concat(t.type, ""."), ["DIL client action"]);
  e = this.resolveClientAction(t.fallbackAction, (i + 1));
  if (!(a.isNonConsumingAction(t.type, "client"))) goto L_271;
  if (!(!a.isNonConsumingAction(e.action.type, "client"))) goto L_271;
  if (!((t.type == null))) goto L_26a;
  t.type;
  throw new DILHostActionValidationError("non-consuming actions cannot fall back to privileged actions.", ["DIL client action", ""]);
  return e;
}

// fn u  args=1 vars=2 closure=1 cpool=0 bc=199B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i
// closure: DILHostActionValidationError
function {
  let i;
  if (!((t.payload == null))) goto L_2d;
  t.payload;
  goto L_4e;
  i = undefined.value;
  if ((("string" != typeof i))) goto L_87;
  if (!((0 === i.trim().length))) goto L_a3;
  throw new DILHostActionValidationError("payload.value must be a nonblank string.", ["DIL client action", "copy"]);
  return {handler: "client", payload: {value: i}, type: "copy"};
}

// fn y  args=1 vars=3 closure=1 cpool=0 bc=844B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i, e
// closure: DILHostActionValidationError
function {
  let e;
  let i;
  if (!((t.payload == null))) goto L_30;
  t.payload;
  goto L_51;
  i = undefined.query;
  if (!((t.payload == null))) goto L_7c;
  t.payload;
  goto L_9d;
  e = undefined.followup_metadata;
  if ((("string" != typeof i))) goto L_d6;
  if (!((0 === i.trim().length))) goto L_f2;
  throw new DILHostActionValidationError("payload.query must be a nonblank string.", ["DIL client action", "issue_new_turn"]);
  if (!((undefined === e))) goto L_135;
  goto L_337;
  // [栈深重同步 3 -> 2]
  if (!((t.payload == null))) goto L_17c;
  t.payload;
  goto L_19d;
  if (!(("string" == typeof undefined.event_name))) goto L_1ec;
  goto L_1ed;
  // [栈深重同步 4 -> 3]
  null;
  {};
  if (!((t.payload == null))) goto L_221;
  t.payload;
  goto L_242;
  if (!(("string" == typeof undefined.statsig_event_name))) goto L_291;
  goto L_292;
  // [栈深重同步 4 -> 3]
  null;
  {};
  if (!((t.payload == null))) goto L_2c2;
  t.payload;
  goto L_2e3;
  if (!((undefined === undefined.event_data))) goto L_2e9;
  goto L_332;
  // [栈深重同步 4 -> 3]
  null;
  {event_data: t.payload.event_data};
  null;
  {followup_metadata: e, message_metadata: e, attach_source_message_id: true};
  return {handler: "client", payload: {query: i.trim()}, type: "issue_new_turn"};
}

// fn h  args=1 vars=5 closure=1 cpool=0 bc=385B file=dil_widgets/src/DILHostActionsHandler
// args: t
// locals: i, e, o, i#1
// closure: DILHostActionValidationError
function {
  let e;
  let i;
  if (!((t.payload == null))) goto L_30;
  t.payload;
  goto L_51;
  i = undefined.questions;
  if ((!Array.isArray(i))) goto L_89;
  if (!((0 === i.length))) goto L_a5;
  throw new DILHostActionValidationError("payload.questions must be a nonempty array.", ["DIL client action", "request_user_input"]);
  e = {questions: i};
  let o;
  for (const o of ["submit_label", "event_name"]) {
    let i#1;
    if (!((t.payload == null))) goto L_f1;
    t.payload;
    goto L_f5;
    i#1 = undefined[o];
    if (!((undefined !== i#1))) continue;
    if (!(("string" != typeof i#1))) goto L_14f;
    throw new DILHostActionValidationError("payload.".concat(o, " must be a string when provided."), ["DIL client action", "request_user_input"]);
    e[o] = i#1;
  }
  return {handler: "client", type: "request_user_input", payload: e};
}

// fn _  args=3 vars=8 closure=3 cpool=0 bc=833B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e
// locals: o, a, r, s, c
// closure: DILHostActionValidationError, n, w
function {
  let c;
  let s;
  let r;
  let a;
  let o;
  if (!((t.payload == null))) goto L_39;
  t.payload;
  goto L_5a;
  o = undefined.query;
  if ((("string" != typeof o))) goto L_93;
  if (!((0 === o.trim().length))) goto L_af;
  throw new DILHostActionValidationError("payload.query must be a nonblank string.", ["DIL client action", "open_entity_detail"]);
  if (!((t.payload == null))) goto L_d9;
  t.payload;
  goto L_fa;
  a = undefined.category;
  if (!((undefined !== a))) goto L_156;
  if ((("string" != typeof a))) goto L_13a;
  if (!((0 === a.trim().length))) goto L_156;
  throw new DILHostActionValidationError("payload.category must be a nonblank string when provided.", ["DIL client action", "open_entity_detail"]);
  if (!((t.payload == null))) goto L_180;
  t.payload;
  goto L_1a1;
  r = undefined.extraParams;
  if (!((undefined === r))) goto L_26c;
  if (!(("string" == typeof a))) goto L_26c;
  if (!(n.isDILModelEntityReference(a.trim(), o.trim()))) goto L_26c;
  if (!(!i)) goto L_24e;
  throw new DILHostActionValidationError("message references are unavailable on this host.", ["DIL client action", "open_entity_detail"]);
  if (!(!e)) goto L_26c;
  throw new DILHostActionValidationError("the invoking message is not ready for entity actions.", ["DIL client action", "open_entity_detail"]);
  s = w(r);
  if (!((undefined !== r))) goto L_29a;
  if (!((undefined === s))) goto L_29a;
  throw new DILHostActionValidationError("payload.extraParams must be an object when provided.", ["DIL client action", "open_entity_detail"]);
  if (!((undefined === a))) goto L_2a9;
  goto L_2d0;
  // [栈深重同步 2 -> 1]
  c = {category: a.trim(), query: o.trim()};
  if (!((undefined !== s))) goto L_322;
  null;
  s;
  c.extraParams = {};
  {};
  return {handler: "client", payload: c, type: "open_entity_detail"};
}

// fn g  args=3 vars=9 closure=2 cpool=0 bc=676B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e
// locals: o, n, t#1, a, r, i#1
// closure: c, DILHostActionValidationError
function {
  let a;
  let n;
  let o;
  if (!((t.payload == null))) goto L_33;
  t.payload;
  goto L_54;
  o = undefined.url;
  n = undefined;
  if (!(c.isDILSandboxURL(o))) goto L_bc;
  if (!((undefined === c.getDILSandboxDownloadPath(o, e)))) goto L_b1;
  goto L_b4;
  // [栈深重同步 1 -> 0]
  n = o;
  o;
  goto L_14b;
  let t#1;
  t#1 = i.getTrustedNetworkPolicy();
  n = t#1.canonicalTrustedNavigationURL(o);
  t#1.canonicalTrustedNavigationURL(o);
  if (!((n == null))) goto L_14a;
  n;
  n = t#1.canonicalHTTPSNavigationURL(o);
  t#1.canonicalHTTPSNavigationURL(o);
  if (!((undefined === n))) goto L_16c;
  throw new DILHostActionValidationError("untrusted URL in payload.url.", ["DIL client action", "open_url"]);
  a = {url: n};
  if (!((t.payload == null))) goto L_1a5;
  t.payload;
  goto L_1c6;
  if (!(("string" == typeof undefined.link_type))) goto L_21c;
  a.link_type = t.payload.link_type;
  t.payload.link_type;
  let r;
  for (const r of ["event_name", "statsig_event_name", "event_data"]) {
    let i#1;
    if (!((t.payload == null))) goto L_264;
    t.payload;
    goto L_268;
    i#1 = undefined[r];
    if (!((undefined !== i#1))) goto L_27f;
    a[r] = i#1;
    i#1;
  }
  return {handler: "client", payload: a, type: "open_url"};
}

// fn I  args=2 vars=5 closure=2 cpool=0 bc=428B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o, n
// closure: w, DILHostActionValidationError
function {
  let n;
  let o;
  let e;
  e = w(t.payload);
  if (!((undefined === e))) goto L_38;
  goto L_92;
  // [栈深重同步 1 -> 0]
  if (!((Object.getOwnPropertyDescriptor(e, "file_id") == null))) goto L_71;
  Object.getOwnPropertyDescriptor(e, "file_id");
  goto L_92;
  o = undefined.value;
  if (!((undefined === e))) goto L_9d;
  goto L_f7;
  // [栈深重同步 1 -> 0]
  if (!((Object.getOwnPropertyDescriptor(e, "file_name") == null))) goto L_d6;
  Object.getOwnPropertyDescriptor(e, "file_name");
  goto L_f7;
  n = undefined.value;
  if ((("string" != typeof o))) goto L_164;
  if ((("string" != typeof n))) goto L_164;
  if (!(!i.getTrustedNetworkPolicy().isTrustedFileCitation(o, n))) goto L_180;
  throw new DILHostActionValidationError("untrusted file identity in payload.", ["DIL client action", "open_file_citation"]);
  return {handler: "client", payload: {file_id: o, file_name: n}, type: "open_file_citation"};
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=68B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// closure: L, n
function {
  return L(t, n, ["DIL client action", "open_image_lightbox", "payload.images[".concat(i, "]")]);   // tail call
}

// fn A  args=2 vars=6 closure=2 cpool=1 bc=465B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o, n, a
// closure: L, DILHostActionValidationError
function {
  let a;
  let n;
  let o;
  let e;
  if (!((t.payload == null))) goto L_36;
  t.payload;
  goto L_57;
  e = undefined.images;
  if (!((t.payload == null))) goto L_82;
  t.payload;
  goto L_a3;
  o = undefined.selected_index;
  if ((!Array.isArray(e))) goto L_db;
  if (!((0 === e.length))) goto L_f7;
  throw new DILHostActionValidationError("payload.images must be a non-empty array.", ["DIL client action", "open_image_lightbox"]);
  n = i.getTrustedNetworkPolicy();
  a = e.map(function <atom:0>);
  if ((!Number.isInteger(o))) goto L_189;
  if (((o < 0))) goto L_189;
  if (!((o >= a.length))) goto L_1a5;
  throw new DILHostActionValidationError("payload.selected_index is outside payload.images.", ["DIL client action", "open_image_lightbox"]);
  return {handler: "client", payload: {images: a, selected_index: o}, type: "open_image_lightbox"};
}

// fn v  args=2 vars=6 closure=2 cpool=0 bc=254B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o, n, i#1
// closure: L, DILHostActionValidationError
function {
  let e;
  e = undefined;
  try { // catch -> L_28
  e = L(t, i, ["DIL client action", "open_entity_detail", "payload.pinned_image"]);
  L(t, i, ["DIL client action", "open_entity_detail", "payload.pinned_image"]);
  <?>;
  goto L_3c;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_3b
  if (!(!(o instanceof DILHostActionValidationError))) goto L_38;
  throw o;
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  let n;
  for (const n of ["snippet", "attribution", "show_url", "thumbnail_render_mode"]) {
    let i#1;
    i#1 = t[n];
    if (!((undefined !== i#1))) goto L_78;
    e[n] = i#1;
    i#1;
  }
  if (!(i.isTrustedAssetURL(t.original_content_url))) goto L_f9;
  e.original_content_url = t.original_content_url;
  t.original_content_url;
  return e;
}

// fn L  args=3 vars=8 closure=4 cpool=0 bc=382B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e
// locals: o, n, a, r, t#1
// closure: w, DILHostActionValidationError, D, f
function {
  let r;
  let a;
  let n;
  let o;
  o = w(t);
  if (!((undefined === o))) goto L_25;
  throw new DILHostActionValidationError("must be an object.", e);
  n = D(o.content_url, e, "content_url", i);
  a = D(o.thumbnail_url, e, "thumbnail_url", i);
  if (!((undefined === n))) goto L_a1;
  if (!((undefined === a))) goto L_a1;
  throw new DILHostActionValidationError("must contain a trusted content_url or thumbnail_url.", e);
  r = {};
  if (!((undefined !== n))) goto L_bc;
  r.content_url = n;
  n;
  if (!((undefined !== a))) goto L_d6;
  r.thumbnail_url = a;
  a;
  if (!((undefined !== o.url))) goto L_171;
  let t#1;
  t#1 = i.canonicalTrustedLightboxURL(o.url);
  if (!((undefined === t#1))) goto L_162;
  throw new DILHostActionValidationError("contains an untrusted url.", e);
  r.url = t#1;
  f(o, r);
  return r;
}

// fn D  args=4 vars=4 closure=1 cpool=0 bc=105B file=dil_widgets/src/DILHostActionsHandler
// args: t, i, e, o
// closure: DILHostActionValidationError
function {
  if (!((null != t))) goto L_68;
  if (!(!o.isTrustedAssetURL(t))) goto L_66;
  throw new DILHostActionValidationError("contains an untrusted ".concat(e, "."), i);
  return t;
  return;
}

// fn f  args=2 vars=4 closure=0 cpool=0 bc=180B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o
function {
  if (!((t.content_size == null))) goto L_35;
  t.content_size;
  i.content_size = {width: 0, height: 0};
  if (!((t.thumbnail_size == null))) goto L_73;
  t.thumbnail_size;
  i.thumbnail_size = {width: 0, height: 0};
  let e;
  for (const e of ["thumbnail_crop_info", "title"]) {
    let o;
    o = t[e];
    if (!((undefined !== o))) goto L_ac;
    i[e] = o;
    o;
  }
  return;
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=64B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// closure: DILHostActionValidationError
function {
  if (!(!t.consumeUserInteraction(i))) goto L_3f;
  throw new DILHostActionValidationError("requires a fresh user interaction.", ["DIL client action", i]);
  return;
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_widgets/src/DILHostActionsHandler
// args: t
function {
  if (((null === t))) goto L_3d;
  if ((("object" != typeof t))) goto L_3d;
  if (!(Array.isArray(t))) goto L_41;
  return undefined;
  return t;
}

// fn E  args=2 vars=4 closure=1 cpool=0 bc=397B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, n
// closure: o
function {
  let n;
  let e;
  if (!((t.type == null))) goto L_2f;
  t.type;
  e = {type: ""};
  if (!((undefined !== t.payload))) goto L_8c;
  e.payload = t.payload;
  t.payload;
  n = {action: e, handler: i};
  if (!(("string" == typeof t.loadingBehavior))) goto L_f9;
  n.loadingBehavior = t.loadingBehavior;
  t.loadingBehavior;
  if (!(o.isVersionAtLeast(247))) goto L_188;
  if (!(("server" === i))) goto L_188;
  if (!((undefined !== t.widgetId))) goto L_188;
  n.widgetId = t.widgetId;
  t.widgetId;
  return n;
}

// fn b  args=2 vars=5 closure=0 cpool=0 bc=211B file=dil_widgets/src/DILHostActionsHandler
// args: t, i
// locals: e, o, n
function {
  let n;
  let o;
  let e;
  if (!((0 === i.length))) goto L_11;
  return t;
  if (((undefined === undefined))) goto L_2d;
  const _it1 = undefined;
  <done(_it1)>;
  e = <value(_it1)>;
  if ((<done(<catch>)>)) goto L_27;
  [][0] = <value(<catch>)>;
  goto L_1f;
  // [栈深重同步 4 -> 6]
  <?>;
  <?>;
  o = <value(_it1)>;
  goto L_31;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_16;
  // [栈深重同步 1 -> 0]
  n = o.join(".");
  if (!(("" === n))) goto L_98;
  return "Invalid ".concat(e, ": ", t);
  return "Invalid ".concat(e, " (", n, "): ", t);
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=34 bc=476B file=dil_widgets/src/DILHostActionsHandler
// args: require, module, exports
// locals: t, i, e, o, n, a, r, s, c, l, d, DILHostActionValidationError, <class_fields_init>, DILHostActionValidationError#1, p, DILHostActionsHandler, <class_fields_init>#1, DILHostActionsHandler#1, u, y, h, _, g, I, A, v, L, D, f, m, w, E, b
function {
  u = function u;
  y = function y;
  h = function h;
  _ = function _;
  g = function g;
  I = function I;
  A = function A;
  v = function v;
  L = function L;
  D = function D;
  f = function f;
  m = function m;
  w = function w;
  E = function E;
  b = function b;
  let DILHostActionsHandler#1;
  let p;
  let DILHostActionValidationError#1;
  let d;
  let l;
  let c;
  let s;
  let r;
  let a;
  let n;
  let o;
  let e;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILHostActionsHandler = undefined;
  t = require("./DILWidgetMediaUploadAction");
  i = require("./DILWidgetVoiceAction");
  e = require("./DILProductAnalytics");
  o = require("valdi_core/src/CompilerIntrinsics");
  n = require("dil_renderer/src/DILApiFacade");
  a = require("dil_renderer/src/DILUserInteraction");
  r = require("./DILEntityPinnedImage");
  s = require("./DILClientActionCapabilities");
  c = require("./DILSandboxDownloadURL");
  l = require("valdi_core/src/utils/ErrorUtils");
  d = require("valdi_platform_browser/src/PlatformBrowser");
  let DILHostActionValidationError;
  let <class_fields_init>;
  class DILHostActionValidationError extends Error { ... }
  <proto:DILHostActionValidationError>.withContext = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILHostActionValidationError>;
  DILHostActionValidationError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILHostActionValidationError
  DILHostActionValidationError#1 = function <atom:0>;
  p = 3;
  let DILHostActionsHandler;
  let <class_fields_init>#1;
  class DILHostActionsHandler extends undefined { ... }
  <proto:DILHostActionsHandler>.captureInteractionContext = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchHostActionPayload = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchHostActionPayloadUnchecked = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchModelPluginTool = function <atom:0>;
  <proto:DILHostActionsHandler>.validateReadOnlyAction = function <atom:0>;
  <proto:DILHostActionsHandler>.isSharedConversationAction = function <atom:0>;
  <proto:DILHostActionsHandler>.isSharedPersonalityQuizAction = function <atom:0>;
  <proto:DILHostActionsHandler>.isReadOnlyEntityReferenceAction = function <atom:0>;
  <proto:DILHostActionsHandler>.isReadOnlySandboxDownloadAction = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchClientAction = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchAuthorizedClientAction = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchClientActionRequest = function <atom:0>;
  <proto:DILHostActionsHandler>.dispatchWidgetAction = function <atom:0>;
  <proto:DILHostActionsHandler>.validateClientAction = function <atom:0>;
  <proto:DILHostActionsHandler>.isClientActionSupported = function <atom:0>;
  <proto:DILHostActionsHandler>.resolveClientAction = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILHostActionsHandler>;
  DILHostActionsHandler = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILHostActionsHandler#1 = function <atom:0>;
  exports.DILHostActionsHandler = DILHostActionsHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILHostActionsHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
