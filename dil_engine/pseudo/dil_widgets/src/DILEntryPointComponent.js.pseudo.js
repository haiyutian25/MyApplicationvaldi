// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  return this.trustedNetworkPolicy.isAllowedAssetURL(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  return this.trustedNetworkPolicy;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=201B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.imageAttributionContentWidth;
  if (!((undefined !== t))) goto L_c8;
  if (!((t.value !== e.width))) goto L_c8;
  t.next(e.width);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=895B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, i
// closure: this, C, V
function {
  let i;
  let t;
  if (!(("issue_new_turn" === e.action.type))) goto L_78;
  return this.flushViewState();   // tail call
  if ((!this.isModelWrittenDIL())) goto L_147;
  if ((this.isReadOnly())) goto L_147;
  if ((("client" !== e.handler))) goto L_147;
  if (!(("open_url" !== e.action.type))) goto L_14a;
  return;
  if (!(C.isVersionAtLeast(164))) goto L_1c1;
  if (!((e.interactionContext == null))) goto L_19e;
  e.interactionContext;
  goto L_1c2;
  goto L_1c2;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!((e.action.payload == null))) goto L_259;
  e.action.payload;
  goto L_27a;
  i = V.readDILLinkActivation(this.entityAppDataInput, t, undefined.url, this.trustedNetworkPolicy);
  if (!((undefined !== i))) goto L_37e;
  try { // catch -> L_348
  if (!((this.context == null))) goto L_2dd;
  this.context;
  goto L_345;
  undefined.actionHandler.handle({handler: "client", action: {type: "log_event", payload: i}});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_37d
  this.reportWarning("Failed to report link activation");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=74B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// closure: this
function {
  return (e === this.state.activeBreakpoints[t]);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=412B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t
// closure: this, h
function {
  let t;
  if (!((this.legacyRootHeightMetrics == null))) goto L_2f;
  this.legacyRootHeightMetrics;
  goto L_54;
  undefined.observeLayout(e);
  if (!((this.outputMonitor == null))) goto L_81;
  this.outputMonitor;
  goto L_a6;
  undefined.layoutChanged(e);
  t = h.resolveDILActiveBreakpoints(e.width);
  if (!((t.length === this.state.activeBreakpoints.length))) goto L_167;
  if ((t.every(function <atom:0>))) goto L_19b;
  this.setState({activeBreakpoints: t});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=616B file=dil_widgets/src/DILEntryPointComponent
// args: t
// locals: i
// closure: e, this
function {
  if ((("value_input" !== e.affordance))) goto L_50;
  if (!((undefined === e.value))) goto L_267;
  try { // catch -> L_231
  let i;
  if (!(("follow_up_action_bar" === e.scope))) goto L_90;
  i = ("issue_new_turn" === t);
  if (!((this.context == null))) goto L_be;
  this.context;
  goto L_22e;
  if (!((undefined.valdiActionHandler == null))) goto L_e8;
  undefined.valdiActionHandler;
  goto L_22e;
  if (!(i)) goto L_116;
  goto L_138;
  // [栈深重同步 4 -> 3]
  if (!(i)) goto L_149;
  goto L_16b;
  // [栈深重同步 4 -> 3]
  if (!(("value_input" === e.affordance))) goto L_1c4;
  goto L_216;
  // [栈深重同步 4 -> 3]
  if (!((e.value == null))) goto L_1ee;
  e.value;
  goto L_216;
  undefined.interaction({target: e.target, affordance: e.affordance, widgetName: e.scope, value: undefined.slice(0, 256), hostActionType: t, dilVersion: "2.0"});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_266
  this.reportWarning("Failed to report DIL interaction");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=199B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this, C
function {
  if (!(C.isVersionAtLeast(164))) goto L_c6;
  if (!(this.isModelWrittenDIL())) goto L_c6;
  this.userInteractionTracker.observeCurrent(e.scope, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=121B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if (!((this.outputMonitor == null))) goto L_2c;
  this.outputMonitor;
  goto L_50;
  undefined.foregroundChanged();
  this.updateViewStateSynchronizationEnabled();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=53B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  this.rootIsVisible = e;
  this.updateViewStateSynchronizationEnabled();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  return this.hostSupportedClientActions;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=187B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: i, H, r, t, o
function {
  if (!(i)) goto L_2d;
  if ((H.isDILSharedConversationAction(e))) goto L_ba;
  if (!(r)) goto L_6c;
  if ((H.isDILSharedPersonalityQuizAction(e))) goto L_6c;
  if ((("personality_quiz_share_options" === e))) goto L_ba;
  if (!(t)) goto L_a8;
  if ((("open_entity_detail" === e))) goto L_a8;
  if (((e === H.DIL_ENTITY_REFERENCE_CAPABILITY))) goto L_ba;
  if (!(o)) goto L_ba;
  return ("open_url" === e);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: H
function {
  return (e !== H.DIL_ENTITY_REFERENCE_CAPABILITY);
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=2 bc=1078B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, i, r, o
// closure: H, this, C
function {
  let e;
  e = H.getEffectiveDILSupportedClientActions(this.hostSupportedClientActions, this.isModelWrittenDIL());
  if (!(C.isVersionAtLeast(256))) goto L_142;
  if (!(this.isModelWrittenDIL())) goto L_142;
  if (!(this.areRegisteredServerActionsReady())) goto L_142;
  if (!((undefined !== this.getWidgetShareHandler()))) goto L_142;
  if (!((e == null))) goto L_135;
  e;
  // append([], 0, [])
  [][[]] = "personality_quiz_share_options";
  ("personality_quiz_share_options" ++);
  e = [];
  [];
  if (!(this.isReadOnly())) goto L_3d8;
  let o;
  let r;
  let i;
  let t;
  t = this.allowsReadOnlyEntityReferences();
  if (!(this.isModelWrittenDIL())) goto L_245;
  if (!((this.hostSupportedClientActions == null))) goto L_1fc;
  this.hostSupportedClientActions;
  goto L_244;
  i = (true === undefined.includes(H.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY));
  if (!(!this.isModelWrittenDIL())) goto L_2e9;
  if (!((this.hostSupportedClientActions == null))) goto L_2a0;
  this.hostSupportedClientActions;
  goto L_2e8;
  r = (true === undefined.includes(H.DIL_SHARED_PERSONALITY_QUIZ_ACTIONS_CAPABILITY));
  if (!(this.isModelWrittenDIL())) goto L_38c;
  if (!((this.hostSupportedClientActions == null))) goto L_343;
  this.hostSupportedClientActions;
  goto L_38b;
  o = (true === undefined.includes(H.DIL_READ_ONLY_SANDBOX_DOWNLOAD_CAPABILITY));
  if (!((e == null))) goto L_399;
  e;
  goto L_3bf;
  if (!((undefined.filter(function <atom:0>) == null))) goto L_3c7;
  undefined.filter(function <atom:0>);
  e = [];
  [];
  // close_loc o
  // close_loc r
  // close_loc i
  // close_loc t
  if (!(this.hasEntityActionContext())) goto L_405;
  return e;
  if (!((e == null))) goto L_40f;
  e;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.filter(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=204B file=dil_widgets/src/DILEntryPointComponent
// closure: this, H
function {
  if (!((this.hostEntityActionsReady == null))) goto L_a0;
  this.hostEntityActionsReady;
  if (!((this.hostSupportedClientActions == null))) goto L_57;
  this.hostSupportedClientActions;
  goto L_9f;
  if (!((true === undefined.includes(H.DIL_ENTITY_REFERENCE_READY_CAPABILITY)))) goto L_cb;
  return this.hasEntityActionContext();
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=795B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, i, r, o
// closure: this
function {
  let o;
  let r;
  let i;
  let t;
  t = this.areEntityActionsReady();
  i = this.areRegisteredServerActionsReady();
  r = this.supportsWidgetVoiceSessions();
  if (((this.entityAppDataInput === e))) goto L_d4;
  if (!((this.entityAppDataOutput === e))) goto L_1a7;
  if (!((this.entityAppDataReady === t))) goto L_1a7;
  if (!((this.serverAppDataReady === i))) goto L_1a7;
  if (!((this.widgetVoiceSessionsReady === r))) goto L_1a7;
  if (!((undefined !== this.entityAppDataOutput))) goto L_1a7;
  return this.entityAppDataOutput;
  o = e.opGenui;
  this.entityAppDataInput = e;
  this.entityAppDataReady = t;
  this.serverAppDataReady = i;
  this.widgetVoiceSessionsReady = r;
  null;
  e;
  if ((("object" != typeof o))) goto L_252;
  if (((null === o))) goto L_252;
  if (!(Array.isArray(o))) goto L_257;
  goto L_25a;
  // [栈深重同步 4 -> 3]
  null;
  o;
  if (!(this.isModelWrittenDIL())) goto L_2e2;
  goto L_2e3;
  // [栈深重同步 4 -> 3]
  null;
  {};
  this.entityAppDataOutput = {opGenui: {supportsWidgetVoiceSessions: r}};
  return this.entityAppDataOutput;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=571B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this, V, j
function {
  if (!(this.isModelWrittenDIL())) goto L_23a;
  if (!((this.componentRefresh == null))) goto L_5a;
  this.componentRefresh;
  goto L_7f;
  undefined.update(e);
  this.linkMetadataByURL = V.readDILLinkMetadata(e);
  if (!((undefined === e))) goto L_104;
  goto L_14d;
  // [栈深重同步 2 -> 1]
  this.trustedNetworkPolicy = j.DILTrustedNetworkPolicy.fromAppData(e);
  this.assetURLAuthorization.allowedUrlRegexes = this.trustedNetworkPolicy.allowedUrlRegexes;
  // append([], 0, this.trustedNetworkPolicy.allowedUrlRegexes)
  this.trustedNetworkPolicy.allowedUrlRegexes;
  this.setLegacyAllowedUrlRegexes([]);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=354B file=dil_widgets/src/DILEntryPointComponent
// locals: e
// closure: this
function {
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  e = undefined.messageMetadata;
  if (!(!this.isDestroyed())) goto L_161;
  if (!(this.isModelWrittenDIL())) goto L_161;
  if (!(!this.isReadOnly())) goto L_161;
  if (!(!this.isMessageStreaming())) goto L_161;
  if (!((e == null))) goto L_115;
  e;
  goto L_136;
  if (!((undefined !== undefined.conversationId))) goto L_161;
  return (undefined !== e.messageId);
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=600B file=dil_widgets/src/DILEntryPointComponent
// closure: this, t, i, d, h, c, e, a
function {
  if (!(!this.isDestroyed())) goto L_257;
  if (!((this.context === t))) goto L_257;
  if (!((this.context == null))) goto L_8a;
  this.context;
  goto L_ab;
  if (!((undefined.platformServices === i))) goto L_257;
  if (!((this.context == null))) goto L_e2;
  this.context;
  goto L_12c;
  if (!((undefined.messageMetadata == null))) goto L_10b;
  undefined.messageMetadata;
  goto L_12c;
  if (!((undefined.conversationId === d))) goto L_257;
  if (!((this.context == null))) goto L_163;
  this.context;
  goto L_1ad;
  if (!((undefined.messageMetadata == null))) goto L_18c;
  undefined.messageMetadata;
  goto L_1ad;
  if (!((undefined.messageId === h))) goto L_257;
  if (!(this.areRegisteredServerActionsReady())) goto L_257;
  if (!(c.isRegisteredWidgetAction(e, this.entityAppDataInput))) goto L_257;
  return a.active;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=396B file=dil_widgets/src/DILEntryPointComponent
// locals: e, e#1
// closure: s, n, u, this
function {
  try { // catch -> L_ba
  let e;
  e = (await s(n));
  if ((!u())) goto L_45;
  if (!((s !== this.getWidgetShareHandler()))) goto L_56;
  throw new Error("Widget sharing is no longer available.");
  if (!(!e.success)) goto L_b5;
  if (!((e.statusMessage == null))) goto L_b1;
  e.statusMessage;
  throw new Error("Could not open sharing.");
  return e; // async
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_18b
  if (!(u())) goto L_188;
  if (!((s === this.getWidgetShareHandler()))) goto L_188;
  if (!((this.context == null))) goto L_129;
  this.context;
  goto L_188;
  if (!((undefined.widgetPublicationErrorHandler == null))) goto L_153;
  undefined.widgetPublicationErrorHandler;
  undefined;
  goto L_188;
  // [栈深重同步 1 -> 2]
  if (!((e#1 instanceof Error))) goto L_180;
  goto L_185;
  // [栈深重同步 3 -> 2]
  <?>.call(undefined, "Could not share this widget.");
  throw e#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=200B file=dil_widgets/src/DILEntryPointComponent
// closure: this, l, g
function {
  if (!((this.pendingWidgetPublications.get(l) == null))) goto L_53;
  this.pendingWidgetPublications.get(l);
  goto L_74;
  if (!((undefined.result === g))) goto L_c7;
  this.pendingWidgetPublications.delete(l);
  return;
}

// fn <atom:0>  args=1 vars=14 closure=3 cpool=3 bc=1191B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, i, r, o, n, s, a, d, h, l, p, u, g
// closure: this, c, C
function {
  let g;
  let u;
  let p;
  let l;
  let h;
  let d;
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  t = this.context;
  if (!((this.context == null))) goto L_78;
  this.context;
  goto L_99;
  i = undefined.platformServices;
  if (!((this.context == null))) goto L_c6;
  this.context;
  goto L_e7;
  r = undefined.messageMetadata;
  o = e.nativeWidgetResolutionId;
  if ((!this.areRegisteredServerActionsReady())) goto L_17b;
  if ((!this.isRegisteredWidgetAction(e))) goto L_17b;
  if (((undefined === i))) goto L_17b;
  if (((undefined === r))) goto L_17b;
  if (!((undefined === o))) goto L_18c;
  throw new Error("Widget action is unavailable.");
  if (!(!C.isVersionAtLeast(256))) goto L_1e4;
  return c.dispatchRegisteredWidgetAction(i, r, e); // async
  n = c.registeredWidgetShareRequest(e);
  if (!((undefined === n))) goto L_240;
  return c.dispatchRegisteredWidgetAction(i, r, e); // async
  s = this.getWidgetShareHandler();
  if (!((undefined === s))) goto L_27f;
  throw new Error("Widget sharing is unavailable.");
  a = c.widgetPublicationLifetimeFor(i);
  d = r.conversationId;
  h = r.messageId;
  l = JSON.stringify([o, n.mode, n.expectedRevision]);
  p = this.pendingWidgetPublications.get(l);
  if (!((p == null))) goto L_3c6;
  p;
  goto L_3ea;
  if (!(undefined.isCurrent())) goto L_411;
  return p.result; // async
  u = function <atom:0>;
  g = function <atom:0>().finally(function <atom:0>);
  this.pendingWidgetPublications.set(l, {isCurrent: u, result: g});
  return (await g); // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=76B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: c, this
function {
  return c.isRegisteredWidgetAction(e, this.entityAppDataInput);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=89B file=dil_widgets/src/DILEntryPointComponent
// args: t
// closure: i, this, e, r
function {
  if (!(i)) goto L_30;
  goto L_58;
  // [栈深重同步 1 -> 0]
  r.push(t);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=1 bc=518B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, i, r, o, t#1, n
// closure: this, C
function {
  let o;
  let r;
  let i;
  let t;
  if (!((this.context == null))) goto L_38;
  this.context;
  goto L_59;
  t = undefined.registerOnEventHandler;
  if (!((undefined === t))) goto L_70;
  throw new Error("DIL host-state event registration is unavailable.");
  i = false;
  r = [];
  o = t(function <atom:0>);
  try { // catch -> L_1cf
  if (!(C.isVersionAtLeast(74))) goto L_187;
  if ((this.didAcknowledgeHostStateEvents)) goto L_187;
  if (!((this.context == null))) goto L_109;
  this.context;
  goto L_12a;
  if (((undefined === undefined.hostStateEventsReady))) goto L_187;
  this.context.hostStateEventsReady();
  this.didAcknowledgeHostStateEvents = true;
  true;
  i = true;
  true;
  let t#1;
  for (const t#1 of r) {
    this.forwardHostEvent(t#1, e);
  }
  <?>;
  goto L_202;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_201
  o.cancel();
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=178B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((this.observedDarkMode === e))) goto L_2c;
  return;
  t = this.resolvedDarkMode;
  this.observedDarkMode = e;
  if (!((this.resolvedDarkMode !== t))) goto L_b1;
  this.scheduleRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=2 cpool=0 bc=431B file=dil_widgets/src/DILEntryPointComponent
// args: e, t, i
// locals: t#1, r
// closure: d, this
function {
  if (!((t === d.DILRootStateChangeOrigin.LocalAction))) goto L_1ae;
  let t#1;
  if (!((undefined !== i))) goto L_e8;
  null;
  this.renderedWidgetStates;
  {}[i] = e;
  e;
  this.renderedWidgetStates = {};
  if (!((this.widgetSynchronizer(i) == null))) goto L_c1;
  this.widgetSynchronizer(i);
  goto L_139;
  goto L_139;
  // [栈深重同步 1 -> 0]
  if (!((this.viewStateSynchronizer == null))) goto L_114;
  this.viewStateSynchronizer;
  goto L_139;
  undefined.rootStateChanged(e);
  t#1 = this.getLocalViewStateChangedHandler();
  if (!((undefined !== t#1))) goto L_1ae;
  try { // catch -> L_177
  t#1(e, i);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_1ad
  this.reportOutputWarning("Failed to report local DIL view state", {});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// closure: this
function {
  this.relayWarning(e, t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=545B file=dil_widgets/src/DILEntryPointComponent
// args: t, i
// locals: r, o
// closure: this, e
function {
  let r;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_79;
  if (!((undefined.platformServices == null))) goto L_58;
  undefined.platformServices;
  goto L_79;
  r = undefined.loggingService;
  if (!((undefined !== r))) goto L_151;
  try { // catch -> L_f0
  r.log({level: 2, message: t, attributesJson: JSON.stringify(i)});
  return undefined;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_150
  if (!(e.isLoggingEnabled)) goto L_14c;
  console.warn("DIL render output diagnostic sink failed");
  <?>;
  goto L_151;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((this.context == null))) goto L_17e;
  this.context;
  goto L_19f;
  if (!((undefined !== undefined.valdiActionHandler))) goto L_1cd;
  goto L_220;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_220;
  console.warn(t, i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  this.handleHostActionDispatchError(e, {});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=384B file=dil_widgets/src/DILEntryPointComponent
// args: t, i
// locals: r, o
// closure: this, e
function {
  let o;
  let r;
  this.renderHealthTracker.reportActionResolutionFailure(t);
  r = "Failed to handle DIL widget action";
  if (!(e.isLoggingEnabled)) goto L_ab;
  console.error(r, t);
  if (!((undefined === i.actionType))) goto L_d6;
  goto L_fe;
  // [栈深重同步 2 -> 1]
  null;
  {action_type: i.actionType};
  o = {error_message: t.message, error_name: t.name};
  this.relayWarning(r, o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=214B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: C, this
function {
  if (!(C.isVersionAtLeast(3))) goto L_d5;
  if (!((this.context == null))) goto L_59;
  this.context;
  goto L_d5;
  if (!((undefined.textSelectionMenuActionHandler == null))) goto L_83;
  undefined.textSelectionMenuActionHandler;
  undefined;
  goto L_d5;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=122B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_79;
  if (!((undefined.valdiActionHandler == null))) goto L_55;
  undefined.valdiActionHandler;
  goto L_79;
  undefined.textSelectionCopyCompleted();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=123B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_7a;
  if (!((undefined.valdiActionHandler == null))) goto L_55;
  undefined.valdiActionHandler;
  goto L_7a;
  undefined.copyContentResponse(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=14 cpool=26 bc=1041B file=dil_widgets/src/DILEntryPointComponent
// locals: this, this.active_func, new.target, arguments
// closure: C, V, h, H, j, c, d, e, <class_fields_init>, B, O, A, M, R
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
  this.state = {activeBreakpoints: []};
  this.compositionCollector = new B.DILV2CompositionCollector();
  this.copyContentProvider = new O.DILCopyContentProvider();
  this.userInteractionTracker = new A.DILUserInteractionTracker();
  this.pendingWidgetPublications = new Map();
  this.didAcknowledgeHostStateEvents = false;
  this.observedDarkMode = M.Device.isDarkMode();
  this.rootRef = new R.ElementRef();
  this.trustedNetworkPolicy = j.DILTrustedNetworkPolicy.empty();
  this.linkMetadataByURL = new Map();
  this.assetURLAuthorization = {isAllowed: function <atom:0>, allowedUrlRegexes: this.trustedNetworkPolicy.allowedUrlRegexes};
  this.getTrustedNetworkPolicy = function <atom:0>;
  this.rootIsVisible = false;
  this.widgetViewStateSynchronizers = new Map();
  this.renderedWidgetStates = {};
  this.entityAppDataReady = false;
  this.serverAppDataReady = false;
  this.widgetVoiceSessionsReady = false;
  this.handleAttributionContentLayout = function <atom:0>;
  this.beforeHostActionDispatch = function <atom:0>;
  this.handleRootLayout = function <atom:0>;
  this.observeInteraction = function <atom:0>;
  this.handleForegroundChange = function <atom:0>;
  this.handleRootVisibilityChanged = function <atom:0>;
  this.getHostSupportedClientActions = function <atom:0>;
  this.getEffectiveSupportedClientActions = function <atom:0>;
  this.areEntityActionsReady = function <atom:0>;
  this.withHostActionReadiness = function <atom:0>;
  this.handleTrustedNetworkAppData = function <atom:0>;
  this.arePluginToolsReady = function <atom:0>;
  this.dispatchRegisteredServerAction = function <atom:0>;
  this.isRegisteredWidgetAction = function <atom:0>;
  this.registerOnEventHandler = function <atom:0>;
  this.handleDarkModeChange = function <atom:0>;
  this.handleRootStateChange = function <atom:0>;
  this.reportWarning = function <atom:0>;
  this.reportOutputWarning = function <atom:0>;
  this.handleSandboxActionError = function <atom:0>;
  this.handleHostActionDispatchError = function <atom:0>;
  this.handleTextSelectionMenuAction = function <atom:0>;
  this.handleTextSelectionCopy = function <atom:0>;
  this.handleCopyContentResponse = function <atom:0>;
  return this;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=72B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// closure: this
function {
  return this.renderHealthTracker.reportOutput(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/DILEntryPointComponent
// closure: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/DILEntryPointComponent
// closure: t
function {
  return t.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if (!(!this.isDestroyed())) goto L_9a;
  if (!(!this.isReadOnly())) goto L_9a;
  return this.userInteractionTracker.consumeCurrent();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=155B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if (!(!this.isDestroyed())) goto L_9a;
  if (!(!this.isReadOnly())) goto L_9a;
  return this.userInteractionTracker.consumeCurrent();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=239B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_ee;
  if ((this.isReadOnly())) goto L_ee;
  if (!((this.context == null))) goto L_82;
  this.context;
  goto L_ee;
  null;
  e;
  undefined.actionHandler.handle({handler: "client", action: {type: "log_event", payload: {}}});
  return;
}

// fn <atom:0>  args=0 vars=6 closure=12 cpool=6 bc=3539B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, e#1, t#1, i, r
// closure: this, l, C, B, G, L, Q, M, X, a, k, F
function {
  let r;
  let i;
  let t;
  let e;
  if (!((this.context == null))) goto L_37;
  this.context;
  goto L_58;
  this.hostSupportedClientActions = undefined.supportedClientActions;
  this.renderedInitialState = this.viewModel.initialState;
  e = this.isModelWrittenDIL();
  t = undefined;
  this.setLegacyAllowedUrlRegexes([]);
  if (!(this.isDebugEventsRecordingEnabled())) goto L_1fc;
  l.DILDebugEventsRecorder.get().recordCreate(this.renderer.contextId, this.viewModel);
  if (!(C.isVersionAtLeast(47))) goto L_277;
  if (!((this.context == null))) goto L_252;
  this.context;
  goto L_273;
  t = undefined.renderCompositionHandler;
  undefined.renderCompositionHandler;
  if (!((undefined === this.viewModel.dilJsonObject))) goto L_352;
  goto L_395;
  // [栈深重同步 5 -> 4]
  if (!((this.context == null))) goto L_416;
  this.context;
  goto L_437;
  if (!((this.context == null))) goto L_466;
  this.context;
  goto L_487;
  if (!(e)) goto L_4df;
  goto L_4e0;
  // [栈深重同步 5 -> 4]
  this.renderHealthTracker = new B.DILRenderHealthTracker({renderer: this.renderer, dilJson: this.viewModel.dilJsonObject, hasViewState: (undefined !== this.viewModel.initialState), isModelWrittenDIL: e, context: undefined.renderMetrics, messageMetadata: undefined.messageMetadata, messageIsStreaming: this.isMessageStreaming(), compositionCollector: undefined, compositionHandler: t, reportWarning: this.reportOutputWarning});
  this.renderHealthTracker.begin();
  if (!(e)) goto L_7ed;
  if (!(this.renderHealthTracker.isDILV2())) goto L_7ed;
  let t#1;
  let e#1;
  this.outputMonitor = new G.DILRenderOutputMonitor({renderer: this.renderer, root: this.rootRef, isForegrounded: L.Application.isForegrounded, report: function <atom:0>, isStreaming: this.isMessageStreaming()});
  e#1 = L.Application.observeEnteredForeground(this.handleForegroundChange);
  this.registerDisposable(function <atom:0>);
  t#1 = L.Application.observeEnteredBackground(this.handleForegroundChange);
  this.registerDisposable(function <atom:0>);
  // close_loc t#1
  // close_loc e#1
  if (!((this.context == null))) goto L_83c;
  this.context;
  goto L_85d;
  if (!((this.context == null))) goto L_887;
  this.context;
  goto L_8a8;
  this.viewStateSynchronizer = Q.createDILViewStateSynchronizer(undefined.platformServices, undefined.messageMetadata, this.isReadOnly());
  if (!((this.context == null))) goto L_901;
  this.context;
  goto L_922;
  i = undefined.messageMetadata;
  if (!((this.context == null))) goto L_94e;
  this.context;
  goto L_96f;
  r = undefined.platformServices;
  if ((!e)) goto L_b2f;
  if ((M.Device.isWeb())) goto L_b2f;
  if ((M.Device.isDesktop())) goto L_b2f;
  if (!((r == null))) goto L_a26;
  r;
  goto L_a47;
  if (((undefined === undefined.apiService))) goto L_b2f;
  if (!((i == null))) goto L_a5b;
  i;
  goto L_a7c;
  if (((undefined === undefined.conversationId))) goto L_b2f;
  if (((undefined === i.messageId))) goto L_b2f;
  this.componentRefresh = new X.DILComponentRefresh(r, i.conversationId, i.messageId);
  new X.DILComponentRefresh(r, i.conversationId, i.messageId);
  this.updateViewStateSynchronizationEnabled();
  this.hydrateWidgetStates();
  if (!(this.isReadOnly())) goto L_bcb;
  goto L_c16;
  // [栈深重同步 3 -> 2]
  if (!((this.context == null))) goto L_bf5;
  this.context;
  goto L_c16;
  this.dictation = a.createDILDictationService(undefined.platformServices, k.NativeReferencesContext.fromComponent(this), function <atom:0>);
  if (!(this.isReadOnly())) goto L_cba;
  goto L_d05;
  // [栈深重同步 3 -> 2]
  if (!((this.context == null))) goto L_ce4;
  this.context;
  goto L_d05;
  this.speechSynthesis = F.createDILSpeechSynthesisService(undefined.platformServices, k.NativeReferencesContext.fromComponent(this), function <atom:0>, function <atom:0>);
  this.darkModeObserver = M.Device.observeDarkMode(this.handleDarkModeChange);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=1 bc=47B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: l, C, B, G, L, Q, M, X, a, k, F, b
function {
  this = this;
  b.trace("DILEntryPointComponent.onCreate", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=904B file=dil_widgets/src/DILEntryPointComponent
// closure: this, e, l
function {
  this.renderHealthTracker.updateStreamingState(this.isMessageStreaming());
  if (!((this.outputMonitor == null))) goto L_96;
  this.outputMonitor;
  goto L_df;
  undefined.updateStreamingState(this.isMessageStreaming());
  this.updateViewStateSynchronizationEnabled();
  this.hydrateWidgetStates();
  if (!((undefined !== e))) goto L_28a;
  if (!((e.initialState !== this.viewModel.initialState))) goto L_28a;
  if (!((this.viewStateSynchronizer == null))) goto L_1c9;
  this.viewStateSynchronizer;
  goto L_230;
  if (!((undefined.rootStateHydrated(this.viewModel.initialState) == null))) goto L_237;
  undefined.rootStateHydrated(this.viewModel.initialState);
  if (!(true)) goto L_289;
  this.renderedInitialState = this.viewModel.initialState;
  this.viewModel.initialState;
  if (!(this.isDebugEventsRecordingEnabled())) goto L_387;
  l.DILDebugEventsRecorder.get().recordViewModelUpdate(this.renderer.contextId, this.viewModel);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=47B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: this
// closure: l, b
function {
  this = this;
  b.trace("DILEntryPointComponent.onViewModelUpdate", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=1080B file=dil_widgets/src/DILEntryPointComponent
// locals: e
// closure: this, l
function {
  if (!((this.darkModeObserver == null))) goto L_2a;
  this.darkModeObserver;
  goto L_4e;
  undefined.cancel();
  this.darkModeObserver = undefined;
  if (!(this.isDebugEventsRecordingEnabled())) goto L_135;
  l.DILDebugEventsRecorder.get().recordDestroy(this.renderer.contextId);
  this.renderHealthTracker.stop();
  if (!((this.legacyRootHeightMetrics == null))) goto L_1a7;
  this.legacyRootHeightMetrics;
  goto L_1cb;
  undefined.stop();
  if (!((this.outputMonitor == null))) goto L_1f6;
  this.outputMonitor;
  goto L_21a;
  undefined.stop();
  if (!((this.imageAttributionContentWidth == null))) goto L_245;
  this.imageAttributionContentWidth;
  goto L_269;
  undefined.complete();
  if (!((this.viewStateSynchronizer == null))) goto L_294;
  this.viewStateSynchronizer;
  goto L_2b8;
  undefined.dispose();
  if (!((this.componentRefresh == null))) goto L_2e3;
  this.componentRefresh;
  goto L_307;
  undefined.dispose();
  let e;
  for (const e of this.widgetViewStateSynchronizers.values()) {
    e.dispose();
  }
  this.userInteractionTracker.dispose();
  this.pendingWidgetPublications.clear();
  this.setLegacyAllowedUrlRegexes(undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=47B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: l, b
function {
  this = this;
  b.trace("DILEntryPointComponent.onDestroy", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=46B file=dil_widgets/src/DILEntryPointComponent
// closure: this, o, n, h
function {
  return this.renderRootComponent(o, n, h);   // tail call
}

// fn <atom:0>  args=0 vars=9 closure=18 cpool=1 bc=3533B file=dil_widgets/src/DILEntryPointComponent
// locals: e, o, n, s, a, d, c, h, this
// closure: p, Y, M, re, C, m, D, y, te, v, ee, J, t, i, ae, E, r, f
function {
  this = this;
  let h;
  let c;
  let d;
  let a;
  let s;
  let n;
  let o;
  let e;
  e = p.getDILLegacyAndroidRootMaxHeight();
  if (!((undefined !== e))) goto L_11e;
  if (!(this.renderHealthTracker.isDILV2())) goto L_11e;
  if (!((undefined === this.legacyRootHeightMetrics))) goto L_11e;
  this.legacyRootHeightMetrics = new Y.DILLegacyAndroidRootHeightMetrics(this.isModelWrittenDIL());
  new Y.DILLegacyAndroidRootHeightMetrics(this.isModelWrittenDIL());
  if (!((this.legacyRootHeightMetrics == null))) goto L_14a;
  this.legacyRootHeightMetrics;
  goto L_1b9;
  undefined.observeGuard(e, M.Device.getDisplayScale());
  if (!((this.viewModel.errorMode == null))) goto L_208;
  this.viewModel.errorMode;
  o = "report-and-skip-subtree";
  n = re(o);
  s = this.viewModel.padding;
  a = this.resolvedDarkMode;
  if (!(this.isModelWrittenDIL())) goto L_486;
  if (!(this.renderHealthTracker.isDILV2())) goto L_486;
  if (!(!M.Device.isWeb())) goto L_486;
  if (!(!M.Device.isDesktop())) goto L_486;
  if (!(C.isVersionAtLeast(34))) goto L_486;
  if (!((this.context == null))) goto L_3ef;
  this.context;
  goto L_410;
  if (!((false !== undefined.nativePopoverPresentationEnabled))) goto L_486;
  if (!((this.context == null))) goto L_464;
  this.context;
  goto L_485;
  d = m.isDILImageAttributionEnabled(undefined.platformServices);
  if (!(d)) goto L_4f0;
  if (!((this.imageAttributionContentWidth == null))) goto L_5b8;
  this.imageAttributionContentWidth;
  this.imageAttributionContentWidth = new D.BehaviorSubject(0);
  goto L_5b8;
  // [栈深重同步 1 -> 0]
  if (!(this.imageAttributionContentWidth)) goto L_5b8;
  this.imageAttributionContentWidth.next(0);
  this.imageAttributionContentWidth.complete();
  this.imageAttributionContentWidth = undefined;
  undefined;
  if (!((te(this.viewModel.containerGutter, s) == null))) goto L_655;
  te(this.viewModel.containerGutter, s);
  if (!(a)) goto L_661;
  goto L_666;
  // [栈深重同步 3 -> 2]
  if (!((this.context == null))) goto L_6dc;
  this.context;
  goto L_726;
  if (!((undefined.messageMetadata == null))) goto L_705;
  undefined.messageMetadata;
  goto L_726;
  if (!((undefined.widgetName == null))) goto L_7a0;
  undefined.widgetName;
  if (!((this.context == null))) goto L_756;
  this.context;
  goto L_7a0;
  if (!((undefined.renderMetrics == null))) goto L_77f;
  undefined.renderMetrics;
  goto L_7a0;
  c = y.renderStateWithDILTheme(new v.DILRenderState(), "light").withProperty(ee.VIDEO_CAROUSEL_VIEWPORT_GUTTER, ("async_video_carousel" === undefined.widgetName));
  if (!(this.imageAttributionContentWidth)) goto L_83f;
  c = c.withProperty(m.DIL_IMAGE_ATTRIBUTION_CONTENT_WIDTH, this.imageAttributionContentWidth);
  c.withProperty(m.DIL_IMAGE_ATTRIBUTION_CONTENT_WIDTH, this.imageAttributionContentWidth);
  if (!(this.isModelWrittenDIL())) goto L_8b5;
  goto L_8b8;
  // [栈深重同步 1 -> 0]
  h = c;
  t.beginRender(i, undefined);
  t.setAttributeRef(this.rootRef);
  if (!((this.context == null))) goto L_98a;
  this.context;
  goto L_9ab;
  if (!(("live-activity" === undefined.presentationSurface))) goto L_9d4;
  goto L_9f8;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", ae.root);
  if (!(E.supportsAutomaticLayoutDirection())) goto L_a53;
  goto L_a54;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("direction", undefined);
  t.setAttributeNumber("maxHeight", e);
  t.setAttributeString("padding", s);
  if (!(a)) goto L_aed;
  goto L_af2;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("colorPaletteName", "light");
  if (!(this.renderHealthTracker.isDILV2())) goto L_b8d;
  goto L_b8e;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayout", undefined);
  if (!((undefined !== this.componentRefresh))) goto L_c07;
  goto L_c08;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onVisibilityChanged", undefined);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", ae.textSelectionGroup);
  t.setAttributes(this.createTextSelectionGroupAttributes());
  if (!(d)) goto L_d2a;
  goto L_d2b;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onLayout", undefined);
  this.renderTextAnimationGroup(f.createReusableCallback(function <atom:0>));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=277B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: this
// closure: t, o, ae
function {
  this = this;
  t.beginRender(o, undefined);
  if (!(this.viewModel.snappyStreamingAnimations)) goto L_c2;
  goto L_e6;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", ae.textAnimationGroup);
  e();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=558B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, i, r, this
// closure: C
function {
  this = this;
  let r;
  let i;
  let t;
  let e;
  e = undefined;
  t = undefined;
  i = undefined;
  r = undefined;
  if (!(C.isVersionAtLeast(3))) goto L_126;
  e = this.viewModel.textSelectionHighlightColor;
  this.viewModel.textSelectionHighlightColor;
  t = this.viewModel.textSelectionHandleColor;
  this.viewModel.textSelectionHandleColor;
  if (!((this.context == null))) goto L_101;
  this.context;
  goto L_122;
  i = undefined.textSelectionMenuActions;
  undefined.textSelectionMenuActions;
  if (!(C.isVersionAtLeast(90))) goto L_1a2;
  if (!((this.context == null))) goto L_17d;
  this.context;
  goto L_19e;
  r = undefined.allowsSystemTextServices;
  undefined.allowsSystemTextServices;
  if (!((i == null))) goto L_1f7;
  i;
  goto L_1f8;
  if (!((undefined.length == null))) goto L_1fe;
  undefined.length;
  if (!((0 > 0))) goto L_227;
  goto L_228;
  // [栈深重同步 2 -> 1]
  return {selectionHighlightColor: e, selectionHandleColor: t, onTextSelectionCopy: this.handleTextSelectionCopy, textSelectionMenuActions: i, allowsSystemTextServices: r, onTextSelectionMenuAction: undefined};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  this.reportError(e, undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=40B file=dil_widgets/src/DILEntryPointComponent
// closure: this, i, r
function {
  this.renderDILRootComponent(i, r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=2 bc=386B file=dil_widgets/src/DILEntryPointComponent
// args: e, i, r
// locals: this
// closure: t, N, n
function {
  this = this;
  t.beginComponent(N.DILErrorBoundary, n, undefined, undefined);
  t.setViewModelProperty("renderDiagnostic", ("report-and-render-diagnostic" === e));
  t.setViewModelProperty("reportError", function <atom:0>);
  if (!((this.context == null))) goto L_10a;
  this.context;
  goto L_12b;
  t.setViewModelProperty("recoverAfterError", (undefined !== undefined.registerOnEventHandler));
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=1142B file=dil_widgets/src/DILEntryPointComponent
// args: e, i
// locals: r, this
// closure: t, d, s
function {
  this = this;
  let r;
  r = this.getEffectiveSupportedClientActions();
  t.beginComponent(d.DILRootComponent, s, undefined, undefined);
  if ((t.hasContext())) goto L_f3;
  t.setContext(this.createDILContext());
  t.setViewModelProperty("activeBreakpoints", this.state.activeBreakpoints);
  t.setViewModelProperty("dilJson", this.viewModel.dilJson);
  t.setViewModelProperty("dilJsonObject", this.viewModel.dilJsonObject);
  t.setViewModelProperty("errorMode", e);
  t.setViewModelProperty("initialState", this.renderedInitialState);
  t.setViewModelProperty("widgetStateSnapshots", this.renderedWidgetStates);
  t.setViewModelProperty("initialRenderState", i);
  t.setViewModelProperty("messageIsStreaming", this.viewModel.messageIsStreaming);
  t.setViewModelProperty("snappyStreamingAnimations", this.viewModel.snappyStreamingAnimations);
  t.setViewModelProperty("supportedClientActions", r);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=611B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, i, this
// closure: C, V
function {
  this = this;
  let i;
  let t;
  if (!(("open_url" === e.type))) goto L_7f;
  if (!((e.payload == null))) goto L_5c;
  e.payload;
  goto L_80;
  goto L_80;
  // [栈深重同步 1 -> 0]
  t = undefined;
  if (!(("string" == typeof t))) goto L_fc;
  goto L_fd;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(C.isVersionAtLeast(164))) goto L_261;
  if (!(this.isModelWrittenDIL())) goto L_261;
  if (!(this.userInteractionTracker.hasCurrentObservation)) goto L_261;
  if (!((undefined === i))) goto L_1fa;
  goto L_25b;
  // [栈深重同步 2 -> 1]
  null;
  {loggingMetadata: {opGenui: {link: i, isCareProviderLink: V.isDILCareProviderLink(e.payload)}}};
  return {widgetName: this.userInteractionTracker.currentScope, dilVersion: "2.0"};
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  return this.entityAppDataInput;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  return this.getHostInteractionContext(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=dil_widgets/src/DILEntryPointComponent
// args: e
// closure: this
function {
  return this.userInteractionTracker.consumeCurrent(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if (!((this.context == null))) goto L_29;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.messageMetadata;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=323B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  if ((this.isMessageStreaming())) goto L_11c;
  if (!((this.context == null))) goto L_57;
  this.context;
  goto L_a1;
  if (!((undefined.messageMetadata == null))) goto L_80;
  undefined.messageMetadata;
  goto L_a1;
  if (((undefined === undefined.conversationId))) goto L_11c;
  if (!((this.context == null))) goto L_d1;
  this.context;
  goto L_11b;
  if (!((undefined.messageMetadata == null))) goto L_fa;
  undefined.messageMetadata;
  goto L_11b;
  if (!((undefined === undefined.messageId))) goto L_120;
  return undefined;
  return this.entityAppDataInput;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=dil_widgets/src/DILEntryPointComponent
// args: t
// closure: e
function {
  return (await e({handler: "client", action: {type: "log_event", payload: t.payload}})).success; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=86B file=dil_widgets/src/DILEntryPointComponent
// closure: this
function {
  return {entityActionsReady: this.areEntityActionsReady(), widgetVoiceSessionsReady: this.supportsWidgetVoiceSessions()};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// closure: this
function {
  this.reportError(e, t);
  return;
}

// fn <atom:0>  args=0 vars=14 closure=6 cpool=8 bc=4000B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, i, r, o, n, s, a, d, c, h, l, p, e#1
// closure: this, C, U, P, Z, K
function {
  let p;
  let l;
  let h;
  let c;
  let d;
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  e = undefined;
  if (!(C.isVersionAtLeast(24))) goto L_9b;
  e = this.viewModel.useNativeLatexRenderer;
  this.viewModel.useNativeLatexRenderer;
  t = false;
  if (!(C.isVersionAtLeast(34))) goto L_11c;
  if (!((this.context == null))) goto L_f6;
  this.context;
  goto L_117;
  t = (false !== undefined.nativePopoverPresentationEnabled);
  (false !== undefined.nativePopoverPresentationEnabled);
  if (!(t)) goto L_14b;
  i = C.isVersionAtLeast(76);
  if (!(C.isVersionAtLeast(81))) goto L_1c5;
  if (!((this.context == null))) goto L_1a3;
  this.context;
  goto L_1c4;
  r = (true === undefined.nativeChartSupportsMixedLineArea);
  o = undefined;
  if (!(C.isVersionAtLeast(127))) goto L_243;
  if (!((this.context == null))) goto L_21e;
  this.context;
  goto L_23f;
  o = undefined.clientDefinedWidgetAppBlockMessengerVersion;
  undefined.clientDefinedWidgetAppBlockMessengerVersion;
  if (!(C.isVersionAtLeast(72))) goto L_2ba;
  if (!((this.context == null))) goto L_297;
  this.context;
  goto L_2bb;
  goto L_2bb;
  // [栈深重同步 1 -> 0]
  n = undefined;
  s = undefined;
  if (!(C.isVersionAtLeast(165))) goto L_33b;
  if (!((this.context == null))) goto L_316;
  this.context;
  goto L_337;
  s = undefined.clientActionHandler;
  undefined.clientActionHandler;
  a = this.isModelWrittenDIL();
  d = this.isReadOnly();
  if (!((undefined === this.context))) goto L_3b4;
  goto L_656;
  // [栈深重同步 1 -> 0]
  if (!(C.isVersionAtLeast(247))) goto L_4e2;
  goto L_4e3;
  // [栈深重同步 5 -> 4]
  if (!(C.isVersionAtLeast(72))) goto L_535;
  goto L_536;
  // [栈深重同步 5 -> 4]
  c = new U.DILHostActionsHandler(this.context.actionHandler, {onDispatchError: this.handleHostActionDispatchError, beforeDispatch: this.beforeHostActionDispatch, serverActionHandler: n, serverActionTypes: undefined, registeredServerActionHandler: undefined, isRegisteredWidgetAction: this.isRegisteredWidgetAction, clientActionHandler: s, getProductAnalyticsAppData: function <atom:0>, getInteractionContext: function <atom:0>, securityPolicy: {isModelWrittenDIL: a, isReadOnly: d, getTrustedNetworkPolicy: this.getTrustedNetworkPolicy, consumeUserInteraction: function <atom:0>, areEntityActionsReady: this.areEntityActionsReady, arePluginToolsReady: this.arePluginToolsReady, getMessageMetadata: function <atom:0>, getTrustedComponentAppData: function <atom:0>}}, this.getHostSupportedClientActions);
  h = new P.DILCopyNodeActionHandler(this.getHostSupportedClientActions, this.reportWarning);
  l = undefined;
  p = undefined;
  if (!(C.isVersionAtLeast(3))) goto L_745;
  if (!((this.context == null))) goto L_720;
  this.context;
  goto L_741;
  l = undefined.textSelectionMenuActions;
  undefined.textSelectionMenuActions;
  if (!(C.isVersionAtLeast(149))) goto L_7e7;
  let e#1;
  if ((a)) goto L_77d;
  if (!(d)) goto L_782;
  goto L_7cd;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_7ac;
  this.context;
  goto L_7cd;
  e#1 = undefined.elicitationShownHandler;
  if (!((undefined !== e#1))) goto L_7e3;
  p = function <atom:0>;
  function <atom:0>;
  // close_loc e#1
  if (!(C.isVersionAtLeast(247))) goto L_86f;
  if (!((this.context == null))) goto L_84c;
  this.context;
  goto L_870;
  goto L_870;
  // [栈深重同步 2 -> 1]
  if (!((this.context == null))) goto L_8a0;
  this.context;
  goto L_8c1;
  if (!((this.context == null))) goto L_8f9;
  this.context;
  goto L_91a;
  if (!((this.context == null))) goto L_997;
  this.context;
  goto L_9b8;
  if (!(a)) goto L_9e6;
  goto L_9e7;
  // [栈深重同步 2 -> 1]
  if (!((this.outputMonitor == null))) goto L_a16;
  this.outputMonitor;
  goto L_a37;
  if (!((this.context == null))) goto L_ad0;
  this.context;
  goto L_af1;
  if (!((this.context == null))) goto L_b30;
  this.context;
  goto L_b51;
  if (!((this.context == null))) goto L_bce;
  this.context;
  goto L_bef;
  if (!((this.context == null))) goto L_c26;
  this.context;
  goto L_c47;
  if (!((this.context == null))) goto L_c76;
  this.context;
  goto L_c97;
  if (!((this.context == null))) goto L_cd3;
  this.context;
  goto L_cf4;
  if (!((undefined === undefined.registerOnEventHandler))) goto L_cfa;
  goto L_d1c;
  // [栈深重同步 2 -> 1]
  if (!((undefined === this.viewStateSynchronizer))) goto L_dc1;
  if (!((undefined === this.getLocalViewStateChangedHandler()))) goto L_dc1;
  goto L_de3;
  // [栈深重同步 2 -> 1]
  if (!((this.context == null))) goto L_e44;
  this.context;
  goto L_e65;
  return {elicitationShownHandler: p, actionsHandler: c, reconcileWidgetState: undefined, abortTransientIncrementalRenderErrors: (undefined !== undefined.registerOnEventHandler), clientDefinedWidgetAppBlockMessengerVersion: o, clientDefinedWidgetViewFactory: undefined.clientDefinedWidgetViewFactory, copyContentProvider: this.copyContentProvider, copyContentResponseHandler: this.handleCopyContentResponse, disableStreamingAnimations: undefined.disableStreamingAnimations, elementRenderObserver: undefined, onRenderStateChanged: undefined.renderStateChanged, localActionHandler: h, isModelWrittenDIL: a, transformAppData: this.withHostActionReadiness, getHostActionReadiness: function <atom:0>, getSupportedClientActions: this.getEffectiveSupportedClientActions, nativeChartViewFactory: undefined.nativeChartViewFactory, nativePopoverPresentationEnabled: t, nativePopoverMeasuredWidthEnabled: i, platformServices: undefined.platformServices, speechSynthesis: this.speechSynthesis, dictation: this.dictation, presentationSurface: undefined.presentationSurface, useNativeLatexRenderer: e, webLatexRendererClass: undefined.webLatexRendererClass, enableDebugEventsRecording: undefined.enableDebugEventsRecording, reportError: function <atom:0>, registerOnEventHandler: this.registerOnEventHandler, reportWarning: this.reportWarning, reportActionError: this.handleSandboxActionError, rootStateChangeHandler: this.handleRootStateChange, textSelectionMenuActions: l, textSelectionGroupAttributes: this.createTextSelectionGroupAttributes(), textSelectionMenuActionHandler: undefined.textSelectionMenuActionHandler, trustedNetworkAppDataHandler: this.handleTrustedNetworkAppData, assetURLAuthorization: this.assetURLAuthorization, userInteractionTracker: this.userInteractionTracker, observeInteraction: this.observeInteraction, elementsMap: Z.DIL_ELEMENTS_MAP, widgetsMap: K.getDILWidgetsMap(this.viewModel.chartRendererMode, r)};
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=48B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: C, U, P, Z, K, b
function {
  this = this;
  return b.trace("DILEntryPointComponent.createDILContext", function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=dil_widgets/src/DILEntryPointComponent
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2e;
  this.context;
  goto L_4f;
  return (true === undefined.enableDebugEventsRecording);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=251B file=dil_widgets/src/DILEntryPointComponent
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  e = undefined.messageMetadata;
  if (!((undefined !== e))) goto L_80;
  return (true === e.isModelWrittenDil);
  if (!((this.context == null))) goto L_af;
  this.context;
  goto L_f9;
  if (!((undefined.renderMetrics == null))) goto L_d8;
  undefined.renderMetrics;
  goto L_f9;
  return ("model-written-dil" === undefined.widgetName);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=167B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: C
function {
  this = this;
  if (!(!!C.isVersionAtLeast(29))) goto L_a6;
  if (!((this.context == null))) goto L_5b;
  this.context;
  goto L_a5;
  if (!((undefined.messageMetadata == null))) goto L_84;
  undefined.messageMetadata;
  goto L_a5;
  return (true === undefined.isReadOnly);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=161B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: C
function {
  this = this;
  if (!(!this.isReadOnly())) goto L_9f;
  if (!(C.isVersionAtLeast(264))) goto L_9f;
  if (!((this.context == null))) goto L_7d;
  this.context;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.localViewStateChanged;
  return undefined;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=635B file=dil_widgets/src/DILEntryPointComponent
// locals: e, this
// closure: H
function {
  this = this;
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  e = undefined.messageMetadata;
  if (!(this.isModelWrittenDIL())) goto L_27a;
  if ((!this.isReadOnly())) goto L_cc;
  if (!(this.allowsReadOnlyEntityReferences())) goto L_27a;
  if (!((e == null))) goto L_df;
  e;
  goto L_100;
  if (((undefined !== undefined.conversationId))) goto L_17a;
  if (!((this.hostSupportedClientActions == null))) goto L_131;
  this.hostSupportedClientActions;
  goto L_179;
  if (!((true === undefined.includes(H.DIL_SHARED_CONVERSATION_ACTIONS_CAPABILITY)))) goto L_27a;
  if (!((e == null))) goto L_18d;
  e;
  goto L_1ae;
  if (!((undefined !== undefined.messageId))) goto L_27a;
  if (!((this.hostSupportedClientActions == null))) goto L_1e2;
  this.hostSupportedClientActions;
  goto L_20b;
  if (!((true === undefined.includes("open_entity_detail")))) goto L_27a;
  return this.hostSupportedClientActions.includes(H.DIL_ENTITY_REFERENCE_CAPABILITY);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=161B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: H
function {
  this = this;
  if (!(this.isModelWrittenDIL())) goto L_a0;
  if (!((this.hostSupportedClientActions == null))) goto L_57;
  this.hostSupportedClientActions;
  goto L_9f;
  return (true === undefined.includes(H.DIL_READ_ONLY_ENTITY_REFERENCE_CAPABILITY));
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=605B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: H
function {
  this = this;
  if (!(!this.isReadOnly())) goto L_25c;
  if (!(!this.isMessageStreaming())) goto L_25c;
  if (!((this.context == null))) goto L_86;
  this.context;
  goto L_fd;
  if (!((undefined.messageMetadata == null))) goto L_af;
  undefined.messageMetadata;
  goto L_fd;
  if (!((undefined.conversationId == null))) goto L_d8;
  undefined.conversationId;
  goto L_fd;
  if (!((undefined.trim().length == null))) goto L_103;
  undefined.trim().length;
  if (!((0 > 0))) goto L_25c;
  if (!((this.context == null))) goto L_136;
  this.context;
  goto L_189;
  if (!((undefined.messageMetadata == null))) goto L_15f;
  undefined.messageMetadata;
  goto L_189;
  if (!((undefined.messageId == null))) goto L_188;
  undefined.messageId;
  goto L_189;
  if (!((undefined.length == null))) goto L_18f;
  undefined.length;
  if (!((0 > 0))) goto L_25c;
  if (!((this.hostSupportedClientActions == null))) goto L_1c4;
  this.hostSupportedClientActions;
  goto L_1ed;
  if (!((true === undefined.includes("start_voice_mode")))) goto L_25c;
  return this.hostSupportedClientActions.includes(H.DIL_WIDGET_VOICE_SESSION_CAPABILITY);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=242B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: this
// closure: T, _
function {
  this = this;
  if (!(this.isModelWrittenDIL())) goto L_f1;
  if (!(!T.supportsPerElementAssetURLFiltering())) goto L_f1;
  if (!((_.getValdiRuntime().setAllowedUrlRegexes == null))) goto L_aa;
  _.getValdiRuntime().setAllowedUrlRegexes;
  _.getValdiRuntime();
  goto L_f1;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=492B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, this
// closure: L
function {
  this = this;
  let e;
  if (!(!this.isReadOnly())) goto L_55;
  e = !this.isMessageStreaming();
  if (!((this.viewStateSynchronizer == null))) goto L_80;
  this.viewStateSynchronizer;
  goto L_a7;
  undefined.setSynchronizationEnabled(e);
  if (!((this.componentRefresh == null))) goto L_d3;
  this.componentRefresh;
  goto L_16c;
  if (!(e)) goto L_169;
  if (!(this.rootIsVisible)) goto L_169;
  undefined.setEnabled(L.Application.isForegrounded());
  let t;
  for (const t of this.widgetViewStateSynchronizers.values()) {
    t.setSynchronizationEnabled(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=701B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: C
function {
  this = this;
  if (!(C.isVersionAtLeast(146))) goto L_2bc;
  if (!((undefined !== this.viewModel.widgetViewState))) goto L_2bc;
  if (!((undefined !== this.viewModel.viewStateSync))) goto L_2bc;
  if (!(this.isModelWrittenDIL())) goto L_2bc;
  if (!(!this.isReadOnly())) goto L_2bc;
  if (!(!this.isMessageStreaming())) goto L_2bc;
  if (!((this.context == null))) goto L_17a;
  this.context;
  goto L_1c4;
  if (!((undefined.platformServices == null))) goto L_1a3;
  undefined.platformServices;
  goto L_1c4;
  if (!((undefined !== undefined.apiService))) goto L_2bc;
  if (!((this.context == null))) goto L_1f7;
  this.context;
  goto L_241;
  if (!((undefined.messageMetadata == null))) goto L_220;
  undefined.messageMetadata;
  goto L_241;
  if (!((undefined !== undefined.conversationId))) goto L_2bc;
  if (!((this.context == null))) goto L_271;
  this.context;
  goto L_2bb;
  if (!((undefined.messageMetadata == null))) goto L_29a;
  undefined.messageMetadata;
  goto L_2bb;
  return (undefined !== undefined.messageId);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/DILEntryPointComponent
// args: e
function {
  return e.flush();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=5B file=dil_widgets/src/DILEntryPointComponent
// args: e
function {
  return (false !== e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_widgets/src/DILEntryPointComponent
// args: e
function {
  return e.every(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=2 bc=428B file=dil_widgets/src/DILEntryPointComponent
// locals: this
function {
  this = this;
  if (!((0 === this.widgetViewStateSynchronizers.size))) goto L_97;
  if (!((this.viewStateSynchronizer == null))) goto L_72;
  this.viewStateSynchronizer;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.flush();
  if (!((this.viewStateSynchronizer == null))) goto L_e7;
  this.viewStateSynchronizer;
  goto L_10b;
  // append([undefined.flush()], 1, Array.from(this.widgetViewStateSynchronizers.values(), function <atom:0>))
  Array.from(this.widgetViewStateSynchronizers.values(), function <atom:0>);
  return Promise.all([undefined.flush()]).then(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=363B file=dil_widgets/src/DILEntryPointComponent
// locals: this
function {
  this = this;
  if (!((this.hostSupportedClientActions == null))) goto L_2c;
  this.hostSupportedClientActions;
  goto L_55;
  if (!(undefined.includes("personality_quiz_share_options"))) goto L_16a;
  if (!((this.context == null))) goto L_85;
  this.context;
  goto L_cf;
  if (!((undefined.platformServices == null))) goto L_ae;
  undefined.platformServices;
  goto L_cf;
  if (!((undefined !== undefined.accountScope))) goto L_16a;
  if (!((this.context == null))) goto L_100;
  this.context;
  goto L_121;
  if (!((undefined === undefined.widgetPublicationErrorHandler))) goto L_126;
  return undefined;
  return this.context.widgetShareHandler;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=dil_widgets/src/DILEntryPointComponent
// locals: this
function {
  this = this;
  if (!((this.hostMessageIsStreaming == null))) goto L_6f;
  this.hostMessageIsStreaming;
  return (true === this.viewModel.messageIsStreaming);
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=376B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// locals: t#1, e#1, t#2, this
// closure: C
function {
  this = this;
  if (!(C.isVersionAtLeast(122))) goto L_ab;
  let t#1;
  t#1 = e.clientActionsUpdate;
  if (!((undefined !== t#1))) goto L_ab;
  let e#1;
  e#1 = t#1.supportedClientActions;
  if (!((undefined === e#1))) goto L_8e;
  goto L_97;
  // [栈深重同步 2 -> 1]
  // append([], 0, e#1)
  e#1;
  this.hostSupportedClientActions = [];
  this.entityAppDataOutput = undefined;
  if (!(C.isVersionAtLeast(74))) goto L_174;
  let t#2;
  t#2 = e.hostStateUpdate;
  if (!((undefined !== t#2))) goto L_173;
  this.handleHostStateUpdate(t#2.messageIsStreaming, t#2.entityActionsReady);
  t(e);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=352B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// locals: i, r, this
function {
  this = this;
  let r;
  let i;
  i = this.isMessageStreaming();
  this.hostMessageIsStreaming = e;
  this.hostEntityActionsReady = t;
  r = this.isMessageStreaming();
  if (!((i !== r))) goto L_15f;
  this.renderHealthTracker.updateStreamingState(r);
  if (!((this.outputMonitor == null))) goto L_ec;
  this.outputMonitor;
  goto L_113;
  undefined.updateStreamingState(r);
  this.updateViewStateSynchronizationEnabled();
  this.hydrateWidgetStates();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=170B file=dil_widgets/src/DILEntryPointComponent
// locals: this
// closure: C
function {
  this = this;
  if (!(C.isVersionAtLeast(98))) goto L_87;
  if (!((this.viewModel.colorScheme === "light"))) goto L_7a;
  return false;
  if (!((this.viewModel.colorScheme === "dark"))) goto L_86;
  return true;
  this.viewModel.colorScheme;
  return this.observedDarkMode;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=730B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t, this
// closure: C, Q
function {
  this = this;
  let t;
  if ((!C.isVersionAtLeast(146))) goto L_c3;
  if (((undefined === this.viewModel.widgetViewState))) goto L_c3;
  if (!((undefined === this.viewModel.viewStateSync))) goto L_c6;
  return;
  t = this.widgetViewStateSynchronizers.get(e);
  if (!((undefined === t))) goto L_255;
  if (!((this.context == null))) goto L_168;
  this.context;
  goto L_189;
  if (!((this.context == null))) goto L_1b3;
  this.context;
  goto L_1d4;
  t = Q.createDILViewStateSynchronizer(undefined.platformServices, undefined.messageMetadata, this.isReadOnly(), e);
  Q.createDILViewStateSynchronizer(undefined.platformServices, undefined.messageMetadata, this.isReadOnly(), e);
  if (!((undefined !== t))) goto L_255;
  this.widgetViewStateSynchronizers.set(e, t);
  if (!((t == null))) goto L_261;
  t;
  goto L_2d5;
  if (!(!this.isReadOnly())) goto L_2d2;
  undefined.setSynchronizationEnabled(!this.isMessageStreaming());
  return t;
}

// fn <atom:0>  args=0 vars=9 closure=1 cpool=0 bc=1187B file=dil_widgets/src/DILEntryPointComponent
// locals: e, t, i, r, o, e#1, t#1, i#1, this
// closure: C
function {
  this = this;
  let t;
  let e;
  if ((!C.isVersionAtLeast(146))) goto L_5d;
  if (!(!this.isModelWrittenDIL())) goto L_60;
  return;
  if (!((this.viewStateAcknowledgement == null))) goto L_95;
  this.viewStateAcknowledgement;
  this.viewStateAcknowledgement = {};
  {};
  e = this.viewModel.widgetViewState;
  t = this.viewModel.viewStateSync;
  if (((e !== this.hydratedWidgetStates))) goto L_172;
  if (!((t !== this.hydratedViewStateSync))) goto L_4a2;
  this.hydratedWidgetStates = e;
  this.hydratedViewStateSync = t;
  try { // catch -> L_43a
  let o;
  let r;
  let i;
  if (!((undefined === t))) goto L_1ad;
  goto L_1df;
  // [栈深重同步 2 -> 1]
  if (!((JSON.parse(t) == null))) goto L_1df;
  JSON.parse(t);
  this.viewStateAcknowledgement = {};
  if (!((undefined === e))) goto L_1f2;
  goto L_21e;
  // [栈深重同步 1 -> 0]
  i = JSON.parse(e);
  if (((null === i))) goto L_262;
  if ((("object" != typeof i))) goto L_262;
  if (!(Array.isArray(i))) goto L_273;
  throw new Error("Invalid widget view state");
  r = i;
  null;
  this.renderedWidgetStates;
  o = {};
  let e#1;
  // append([], 0, Object.keys(o))
  // append([], Object.keys(o), Object.keys(r))
  Object.keys(r);
  for (const e#1 of new Set([])) {
    let t#1;
    t#1 = JSON.stringify(r[e#1]);
    if (!((this.widgetSynchronizer(e#1) == null))) goto L_37b;
    this.widgetSynchronizer(e#1);
    goto L_3c5;
    if (!((false !== undefined.rootStateHydrated(t#1, this.viewStateAcknowledgement)))) goto L_420;
    if (!((undefined === t#1))) goto L_3da;
    goto L_420;
    // [栈深重同步 5 -> 3]
    // [栈深重同步 4 -> 5]
    <?>;
    // [栈深重同步 4 -> 3]
  }
  this.renderedWidgetStates = o;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_4a1
  if (!((i#1 instanceof Error))) goto L_493;
  goto L_49b;
  // [栈深重同步 3 -> 2]
  this.reportWarning(String(i#1));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=0 bc=1103B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// locals: i, this
// closure: b, z, S, q, ne, oe
function {
  this = this;
  let i;
  b.instantTrace("DILEntryPointComponent.reportError");
  if (!((this.context == null))) goto L_7f;
  this.context;
  goto L_a0;
  z.reportDILSandboxTrace(e, undefined.platformServices);
  i = e.details.sourceError;
  if (!((i instanceof S.DILSkippedChildError))) goto L_1b5;
  if (!((t == null))) goto L_162;
  t;
  goto L_183;
  if (!(this.renderHealthTracker.reportRecoveredFailure(e, (true === undefined.isIncrementalUpdate)))) goto L_1b3;
  this.reportSkippedChildWarning(i);
  return;
  if (!((undefined !== t))) goto L_27d;
  if (!((this.viewModel.errorMode == null))) goto L_20f;
  this.viewModel.errorMode;
  if (!(("report-and-skip-subtree" === "report-and-skip-subtree"))) goto L_27d;
  goto L_2d5;
  // [栈深重同步 1 -> 0]
  if (!((undefined === t))) goto L_2cd;
  goto L_2d2;
  // [栈深重同步 4 -> 3]
  this.renderHealthTracker.reportHardFailure(e, "widget_renderer");
  if (!((t == null))) goto L_2e1;
  t;
  goto L_302;
  if (!((true !== undefined.isIncrementalUpdate))) goto L_3a4;
  if (!((this.context == null))) goto L_359;
  this.context;
  goto L_3a3;
  if (!((undefined.platformServices == null))) goto L_382;
  undefined.platformServices;
  goto L_3a3;
  q.reportDILError(e, undefined.loggingService);
  if (((undefined === this.context))) goto L_44e;
  if ((ne(e, t))) goto L_44e;
  if (!((this.context.valdiActionHandler == null))) goto L_425;
  this.context.valdiActionHandler;
  goto L_44e;
  undefined.renderFailure(oe(e));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=392B file=dil_widgets/src/DILEntryPointComponent
// args: t
// locals: i, r, this
// closure: B, e
function {
  this = this;
  let r;
  let i;
  i = "Skipped invalid DIL selected child.";
  null;
  B.getSkippedChildErrorTags(t);
  if (!((this.context == null))) goto L_64;
  this.context;
  goto L_ae;
  if (!((undefined.messageMetadata == null))) goto L_8d;
  undefined.messageMetadata;
  goto L_ae;
  r = {message_id: undefined.messageId};
  if (!((this.context == null))) goto L_df;
  this.context;
  goto L_100;
  if (!((undefined === undefined.valdiActionHandler))) goto L_15c;
  if (!(e.isLoggingEnabled)) goto L_187;
  goto L_187;
  // [栈深重同步 1 -> 0]
  this.relayWarning(i, r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=135B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_86;
  if (!((undefined.valdiActionHandler == null))) goto L_55;
  undefined.valdiActionHandler;
  goto L_86;
  undefined.renderWarning({message: e, properties: t});
  return;
}

// fn te  args=2 vars=3 closure=3 cpool=0 bc=98B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// locals: i
// closure: ie, u, v
function {
  let i;
  i = ie(e, t);
  if (!((undefined !== i))) goto L_61;
  return u.renderStateWithDILContainerGutter(new v.DILRenderState(), i);   // tail call
  return;
}

// fn ie  args=2 vars=2 closure=1 cpool=0 bc=217B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
// closure: $
function {
  if (!((undefined !== e))) goto L_a6;
  return {top: e.top, right: e.right, bottom: e.bottom, left: e.left};
  if (!((undefined !== t))) goto L_d7;
  if (!(("" !== t))) goto L_d7;
  return $.resolveDILContainerGutterContext(t);
  return undefined;
}

// fn re  args=1 vars=1 closure=0 cpool=0 bc=13B file=dil_widgets/src/DILEntryPointComponent
// args: e
function {
  if (!(("report-and-render-diagnostic" === e))) goto L_b;
  return 1;
  return 0;
}

// fn oe  args=1 vars=2 closure=2 cpool=0 bc=570B file=dil_widgets/src/DILEntryPointComponent
// args: e
// locals: t
// closure: se, g
function {
  let t;
  t = {name: e.name, message: e.message, stack: se(e.stack)};
  if (!(g.isDILDiagnosticError(e))) goto L_235;
  t.phase = e.details.phase;
  t.nodePath = e.details.nodePath;
  t.nodeType = e.details.nodeType;
  t.propName = e.details.propName;
  t.expression = e.details.expression;
  e.details.expression;
  return t;
}

// fn ne  args=2 vars=2 closure=0 cpool=0 bc=123B file=dil_widgets/src/DILEntryPointComponent
// args: e, t
function {
  if (!((t == null))) goto L_b;
  t;
  goto L_2c;
  if (!((true === undefined.isIncrementalUpdate))) goto L_7a;
  return ("CEL evaluation" === e.details.phase);
}

// fn se  args=1 vars=1 closure=0 cpool=0 bc=101B file=dil_widgets/src/DILEntryPointComponent
// args: e
function {
  if (((undefined === e))) goto L_d;
  if (!((e.length <= 2000))) goto L_11;
  return e;
  return "".concat(e.slice(0, 2000), "
...");
}

// fn <atom:0>  args=3 vars=68 closure=0 cpool=40 bc=1767B file=dil_widgets/src/DILEntryPointComponent
// args: require, module, exports
// locals: e, t, i, r, o, n, s, a, d, c, h, l, p, u, g, v, y, S, A, I, w, D, m, L, R, C, M, x, E, f, b, T, _, k, W, V, H, P, O, N, q, z, U, B, F, G, Y, j, J, Q, X, Z, K, $, ee, DILEntryPointComponent, <class_fields_init>, DILEntryPointComponent#1, te, ie, re, oe, ne, se, ae
function {
  te = function te;
  ie = function ie;
  re = function re;
  oe = function oe;
  ne = function ne;
  se = function se;
  let ae;
  let DILEntryPointComponent#1;
  let ee;
  let $;
  let K;
  let Z;
  let X;
  let Q;
  let J;
  let j;
  let Y;
  let G;
  let F;
  let B;
  let U;
  let z;
  let q;
  let N;
  let O;
  let P;
  let H;
  let V;
  let W;
  let k;
  let _;
  let T;
  let b;
  let f;
  let E;
  let x;
  let M;
  let C;
  let R;
  let L;
  let m;
  let D;
  let w;
  let I;
  let A;
  let S;
  let y;
  let v;
  let g;
  let u;
  let p;
  let l;
  let h;
  let c;
  let d;
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILEntryPointComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("layout", undefined, "B_9dAM7hEk4qjZ4R");
  r = t.makeNodePrototype("textselectiongroup", undefined, "jkRSQeQJ73GR1-Ov");
  o = t.makeNodePrototype("textanimationgroup", undefined, "yMWBYo9gln9gKTis");
  n = t.makeComponentPrototype(undefined, "elWOkGj4dffOqnFM");
  s = t.makeComponentPrototype(undefined, "RqeY1D_ittRI7RYE");
  a = require("./DILDictationService");
  d = require("dil_core/src/DILRootComponent");
  c = require("./DILRegisteredWidgetAction");
  h = require("dil_core/src/DILBreakpoints");
  l = require("dil_core/src/DILDebugEventsRecorder");
  p = require("dil_core/src/layout/DILLegacyAndroidRootHeight");
  u = require("dil_compiler/src/DILContainerGutterRenderState");
  g = require("dil_compiler/src/DILError");
  v = require("dil_compiler/src/DILRenderState");
  y = require("dil_compiler/src/DILThemeRenderState");
  S = require("dil_renderer/src/DILRenderer");
  A = require("dil_renderer/src/DILUserInteraction");
  I = require("dil_renderer/src/PolyfilledTracer");
  w = require("valdi_core/src/Component");
  D = require("valdi_rxjs/src/BehaviorSubject");
  m = require("./DILImageAttribution");
  L = require("valdi_core/src/Application");
  R = require("valdi_core/src/ElementRef");
  C = require("valdi_core/src/CompilerIntrinsics");
  M = require("valdi_core/src/Device");
  x = require("valdi_core/src/Style");
  E = require("valdi_core/src/supportsAutomaticLayoutDirection");
  f = require("valdi_core/src/utils/Callback");
  b = require("valdi_core/src/utils/Trace");
  T = require("dil_core/src/DILAssetURLAuthorization");
  _ = require("valdi_core/src/ValdiRuntimeProvider");
  k = require("valdi_core/src/NativeReferences");
  W = require("chatgpt_application/src/ChatGPTApplication");
  V = require("./DILLinkMetadata");
  H = require("./DILClientActionCapabilities");
  P = require("./DILCopyNodeActionHandler");
  O = require("./DILCopyContentProvider");
  N = require("./DILErrorBoundary");
  q = require("./DILErrorReporting");
  z = require("./DILSandboxTraceReporting");
  U = require("./DILHostActionsHandler");
  B = require("./DILRenderHealthMetrics");
  F = require("./DILSpeechSynthesisService");
  G = require("./DILRenderOutputMonitor");
  Y = require("./DILLegacyAndroidRootHeightMetrics");
  j = require("./DILTrustedNetworkPolicy");
  J = require("./DILTrustedNetworkRenderState");
  Q = require("./DILViewStateSynchronizer");
  X = require("./DILComponentRefresh");
  Z = require("./ElementsRegistry");
  K = require("./WidgetsRegistry");
  $ = require("./widgets/DILContainerGutter");
  ee = require("./widgets/VideoCarouselViewportRenderState");
  I.installPolyfilledTracer();
  W.configureRendererTracingForChatGPT();
  let DILEntryPointComponent;
  let <class_fields_init>;
  class DILEntryPointComponent extends w.StatefulComponent { ... }
  <proto:DILEntryPointComponent>.onCreate = function <atom:0>;
  <proto:DILEntryPointComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILEntryPointComponent>.onDestroy = function <atom:0>;
  <proto:DILEntryPointComponent>.onRender = function <atom:0>;
  <proto:DILEntryPointComponent>.renderTextAnimationGroup = function <atom:0>;
  <proto:DILEntryPointComponent>.createTextSelectionGroupAttributes = function <atom:0>;
  <proto:DILEntryPointComponent>.renderRootComponent = function <atom:0>;
  <proto:DILEntryPointComponent>.renderDILRootComponent = function <atom:0>;
  <proto:DILEntryPointComponent>.getHostInteractionContext = function <atom:0>;
  <proto:DILEntryPointComponent>.createDILContext = function <atom:0>;
  <proto:DILEntryPointComponent>.isDebugEventsRecordingEnabled = function <atom:0>;
  <proto:DILEntryPointComponent>.isModelWrittenDIL = function <atom:0>;
  <proto:DILEntryPointComponent>.isReadOnly = function <atom:0>;
  <proto:DILEntryPointComponent>.getLocalViewStateChangedHandler = function <atom:0>;
  <proto:DILEntryPointComponent>.hasEntityActionContext = function <atom:0>;
  <proto:DILEntryPointComponent>.allowsReadOnlyEntityReferences = function <atom:0>;
  <proto:DILEntryPointComponent>.supportsWidgetVoiceSessions = function <atom:0>;
  <proto:DILEntryPointComponent>.setLegacyAllowedUrlRegexes = function <atom:0>;
  <proto:DILEntryPointComponent>.updateViewStateSynchronizationEnabled = function <atom:0>;
  <proto:DILEntryPointComponent>.areRegisteredServerActionsReady = function <atom:0>;
  <proto:DILEntryPointComponent>.flushViewState = function <atom:0>;
  <proto:DILEntryPointComponent>.getWidgetShareHandler = function <atom:0>;
  <proto:DILEntryPointComponent>.isMessageStreaming = function <atom:0>;
  <proto:DILEntryPointComponent>.forwardHostEvent = function <atom:0>;
  <proto:DILEntryPointComponent>.handleHostStateUpdate = function <atom:0>;
  <proto:DILEntryPointComponent>.resolvedDarkMode = function <atom:0>;
  <proto:DILEntryPointComponent>.widgetSynchronizer = function <atom:0>;
  <proto:DILEntryPointComponent>.hydrateWidgetStates = function <atom:0>;
  <proto:DILEntryPointComponent>.reportError = function <atom:0>;
  <proto:DILEntryPointComponent>.reportSkippedChildWarning = function <atom:0>;
  <proto:DILEntryPointComponent>.relayWarning = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILEntryPointComponent>;
  DILEntryPointComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILEntryPointComponent#1 = function <atom:0>;
  exports.DILEntryPointComponent = DILEntryPointComponent#1;
  ae = {root: new x.Style({alignItems: "flex-start", flexDirection: "row", justifyContent: "flex-start"}), constrainedRoot: new x.Style({alignItems: "stretch", justifyContent: "flex-start"}), textSelectionGroup: new x.Style({alignItems: "stretch", justifyContent: "flex-start", width: "100%"}), textAnimationGroup: new x.Style({flushDurationThreshold: 0.3, flushMultiplier: 20}), snappyTextAnimationGroup: new x.Style({flushDurationThreshold: 0.16, flushMultiplier: 30})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILEntryPointComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
