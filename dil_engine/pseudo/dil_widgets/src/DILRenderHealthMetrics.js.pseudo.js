// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  t.Success = "success";
  t.Failure = "failure";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  t.Web = "web";
  t.IOS = "ios";
  t.Android = "android";
  t.Other = "other";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=80B file=dil_widgets/src/DILRenderHealthMetrics
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.collectionEnabled = true;
  this.componentCounts = new Map();
  this.totalComponentCount = 0;
  this.latestSourceGeneration = 0;
  this.renderingSourceGeneration = -1;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=164B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
function {
  this = this;
  if (!((this.collectionEnabled !== t))) goto L_a3;
  this.collectionEnabled = t;
  if ((t)) goto L_a3;
  this.componentCounts.clear();
  this.totalComponentCount = 0;
  this.latestSuccessfulSnapshot = undefined;
  this.renderingSourceGeneration = -1;
  -1;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
function {
  this = this;
  this.snapshotAvailableHandler = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
function {
  this = this;
  this.renderSuccessHandler = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
function {
  this = this;
  this.latestSourceGeneration = t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=94B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// locals: this
function {
  this = this;
  this.latestSourceGeneration = e;
  if (!(this.collectionEnabled)) goto L_5d;
  this.componentCounts = new Map();
  this.totalComponentCount = 0;
  this.renderingSourceGeneration = t;
  t;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=364B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, s, n
// locals: this
// closure: i, e
function {
  this = this;
  if (!(this.collectionEnabled)) goto L_16b;
  if (!((n !== i.DILElementRenderNodeKind.Text))) goto L_16b;
  if (!((t !== e.DIL_RENDERED_PROP_ELEMENT_TYPE))) goto L_16b;
  if (!((this.componentCounts.get(t) == null))) goto L_137;
  this.componentCounts.get(t);
  this.componentCounts.set(t, (0 + 1));
  this.totalComponentCount = (this.totalComponentCount + 1);
  (this.totalComponentCount + 1);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
function {
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/DILRenderHealthMetrics
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=324B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!(!t)) goto L_a;
  return;
  if (!((this.renderSuccessHandler == null))) goto L_35;
  this.renderSuccessHandler;
  this;
  goto L_38;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!(!this.collectionEnabled)) goto L_5f;
  return;
  e = new Map(this.componentCounts);
  this.latestSuccessfulSnapshot = {componentCounts: e, distinctComponentTypeCount: e.size, sourceGeneration: this.renderingSourceGeneration, totalComponentCount: this.totalComponentCount};
  if (!((this.snapshotAvailableHandler == null))) goto L_140;
  this.snapshotAvailableHandler;
  this;
  goto L_143;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=302B file=dil_widgets/src/DILRenderHealthMetrics
// locals: t, this
function {
  this = this;
  let t;
  t = this.latestSuccessfulSnapshot;
  if (!((undefined !== t))) goto L_12d;
  if (!((t.sourceGeneration === this.latestSourceGeneration))) goto L_12d;
  return {componentCounts: new Map(t.componentCounts), distinctComponentTypeCount: t.distinctComponentTypeCount, sourceGeneration: t.sourceGeneration, totalComponentCount: t.totalComponentCount};
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=dil_widgets/src/DILRenderHealthMetrics
// closure: this, D
function {
  this.emitInitialResult(D.Success, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=327B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// closure: this, l
function {
  if (!(this.isActive)) goto L_146;
  if ((this.didEmitFailure)) goto L_f9;
  if ((this.didEmitSuccess)) goto L_f9;
  this.didEmitSuccess = true;
  this.count(l, 1, this.baseTags);
  this.emitFirstVisibleToken(t);
  if ((this.isStreaming)) goto L_146;
  this.handleFinalDraw(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// closure: this
function {
  if (!(this.isActive)) goto L_58;
  this.didScheduleCompositionDraw = false;
  this.handleFinalDraw(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=321B file=dil_widgets/src/DILRenderHealthMetrics
// closure: this
function {
  if ((!this.isActive)) goto L_140;
  if ((this.isStreaming)) goto L_140;
  if ((!this.didHandleFinalDraw)) goto L_140;
  if ((this.didEmitComposition)) goto L_140;
  if ((this.didScheduleCompositionDraw)) goto L_140;
  this.didScheduleCompositionDraw = true;
  this.renderer.onNextDraw(this.onFinalDraw);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=4 bc=2193B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: e, this
// closure: D, l, <class_fields_init>, I, s, a
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e;
  this.emittedSoftFailures = new Set();
  this.didBegin = false;
  this.didEmitFailure = false;
  this.didEmitSuccess = false;
  this.didEmitInitialResult = false;
  this.didEmitFirstVisibleToken = false;
  this.didEmitLastVisibleToken = false;
  this.didHandleFinalDraw = false;
  this.didScheduleFinalDraw = false;
  this.didScheduleCompositionDraw = false;
  this.didEmitComposition = false;
  this.isActive = true;
  this.onInitialRenderSuccess = function <atom:0>;
  this.onInitialDraw = function <atom:0>;
  this.onFinalDraw = function <atom:0>;
  this.onCompositionSnapshotAvailable = function <atom:0>;
  this.reportWarning = t.reportWarning;
  this.messageMetadata = t.messageMetadata;
  e = I(t.dilJson);
  this.renderer = t.renderer;
  if (!((t.count == null))) goto L_1ce;
  t.count;
  this.count = s.countMetric;
  if (!((t.histogram == null))) goto L_223;
  t.histogram;
  this.histogram = s.recordHistogram;
  if (!((t.context == null))) goto L_257;
  t.context;
  goto L_278;
  if (!((undefined.dilVersion == null))) goto L_2a1;
  undefined.dilVersion;
  this.dilVersion = e.dilVersion;
  this.isModelWrittenDIL = t.isModelWrittenDIL;
  this.isStreaming = (true === t.messageIsStreaming);
  this.compositionCollector = t.compositionCollector;
  this.compositionHandler = t.compositionHandler;
  if (!((this.compositionCollector == null))) goto L_387;
  this.compositionCollector;
  goto L_3ce;
  undefined.setCollectionEnabled(!this.isStreaming);
  if (!((this.compositionCollector == null))) goto L_3f9;
  this.compositionCollector;
  goto L_43f;
  undefined.setSnapshotAvailableHandler(this.onCompositionSnapshotAvailable);
  if (!((this.compositionCollector == null))) goto L_46a;
  this.compositionCollector;
  goto L_4b0;
  undefined.setRenderSuccessHandler(this.onInitialRenderSuccess);
  null;
  e.loggingMetadata;
  if (!((t.context == null))) goto L_537;
  t.context;
  goto L_558;
  if (!((undefined.widgetType == null))) goto L_581;
  undefined.widgetType;
  if (!((t.context == null))) goto L_5b0;
  t.context;
  goto L_5d1;
  if (!((t.context == null))) goto L_65f;
  t.context;
  goto L_680;
  if (!((undefined === undefined.dilUrlPresent))) goto L_686;
  goto L_6cf;
  // [栈深重同步 3 -> 2]
  this.baseTags = {dil_version: this.dilVersion, widget_renderer_type: "valdi", widget_type: e.widgetType, widget_name: undefined.widgetName, has_view_state: String(t.hasViewState), is_legacy_dil_version: String((this.dilVersion === a)), dil_url_present: String(t.context.dilUrlPresent)};
  if (!((t.messageMetadata == null))) goto L_709;
  t.messageMetadata;
  goto L_72a;
  if (!((undefined === undefined.messageId))) goto L_731;
  goto L_887;
  // [栈深重同步 2 -> 1]
  null;
  this.baseTags;
  if (!((undefined === t.messageMetadata.contentReferenceIndex))) goto L_833;
  goto L_882;
  // [栈深重同步 3 -> 2]
  null;
  {_dil_content_reference_index: String(t.messageMetadata.contentReferenceIndex)};
  this.timingTags = {_dil_message_id: t.messageMetadata.messageId, _dil_conversation_id: t.messageMetadata.conversationId};
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=41B file=dil_widgets/src/DILRenderHealthMetrics
// locals: this
// closure: r
function {
  this = this;
  return (this.dilVersion === r);
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=1013B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// locals: this
// closure: R, o
function {
  this = this;
  if (!(this.isActive)) goto L_3f4;
  if (!(this.isDILV2())) goto L_3f4;
  null;
  this.baseTags;
  this.count("dil.widget.render_output", 1, {platform: R(), output_status: t.status});
  if (!((t.status !== o.DILRenderOutputStatus.Content))) goto L_3f4;
  if (!((this.reportWarning == null))) goto L_174;
  this.reportWarning;
  this;
  goto L_3f4;
  // [栈深重同步 1 -> 2]
  if (!((this.messageMetadata == null))) goto L_2e3;
  this.messageMetadata;
  goto L_304;
  if (!((this.messageMetadata == null))) goto L_333;
  this.messageMetadata;
  goto L_354;
  if (!((this.messageMetadata == null))) goto L_383;
  this.messageMetadata;
  goto L_3a4;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=552B file=dil_widgets/src/DILRenderHealthMetrics
// locals: this
// closure: a, r, d, p
function {
  this = this;
  if ((this.didBegin)) goto L_227;
  this.didBegin = true;
  if (!((this.dilVersion !== a))) goto L_146;
  if (!((this.dilVersion === r))) goto L_227;
  this.count(d, 1, this.baseTags);
  goto L_227;
  // [栈深重同步 1 -> 0]
  this.count(p, 1, {dil_version: this.dilVersion, widget_renderer_type: this.baseTags.widget_renderer_type, widget_type: this.baseTags.widget_type});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/DILRenderHealthMetrics
// locals: this
function {
  this = this;
  this.isActive = false;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=351B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: e, this
// closure: r
function {
  this = this;
  let e;
  e = this.isStreaming;
  this.isStreaming = t;
  if (!((this.compositionCollector == null))) goto L_5d;
  this.compositionCollector;
  goto L_83;
  undefined.setCollectionEnabled(!t);
  if ((!e)) goto L_15e;
  if ((t)) goto L_15e;
  if ((this.didScheduleFinalDraw)) goto L_15e;
  if (((this.dilVersion !== r))) goto L_15e;
  this.didScheduleFinalDraw = true;
  this.renderer.onNextDraw(this.onFinalDraw);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=151B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// locals: this
// closure: D, y
function {
  this = this;
  this.emitInitialResult(D.Failure, e);
  this.emitFailureOnce(y(this.baseTags, t, e));
  return;
}

// fn <atom:0>  args=2 vars=9 closure=9 cpool=0 bc=1456B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// locals: s, n, o, a, d, l, this
// closure: i, r, x, D, y, L, V, w, u
function {
  this = this;
  let l;
  let d;
  let a;
  let o;
  let n;
  let s;
  if (!((t.details.sourceError instanceof i.DILSkippedChildError))) goto L_c4;
  goto L_c5;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((this.dilVersion !== r))) goto L_f9;
  if (!((undefined === s))) goto L_f9;
  return false;
  if (!(("CEL evaluation" === t.details.phase))) goto L_14b;
  goto L_150;
  // [栈深重同步 1 -> 0]
  n = "node-render";
  o = x(t, e);
  if (!(("drop-widget" === o))) goto L_1b0;
  this.emitInitialResult(D.Failure, "root_error");
  null;
  y(this.baseTags, t, "soft-failure");
  if (!((undefined === s))) goto L_2de;
  goto L_2e5;
  // [栈深重同步 2 -> 1]
  null;
  L(s);
  a = {error_scope: n, recovery: o, node_type: t.details.nodeType, prop: t.details.propName, path_id_present: String((undefined !== t.details.nodePath))};
  if (!((s == null))) goto L_322;
  s;
  goto L_343;
  d = JSON.stringify([n, o, undefined.parentNodeType, t.details.nodeType, t.details.propName, t.details.nodePath, V(t), t.message]);
  if (!(!this.emittedSoftFailures.has(d))) goto L_4d2;
  l = (this.emittedSoftFailures.size < w);
  if (!(l)) goto L_581;
  this.emittedSoftFailures.add(d);
  if (!((this.dilVersion === r))) goto L_581;
  this.count(u, 1, a);
  this.emitFailureOnce(a);
  return l;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=218B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
// closure: r, u
function {
  this = this;
  if (!((this.dilVersion === r))) goto L_d9;
  null;
  this.baseTags;
  this.count(u, 1, {error_boundary: "DILErrorBoundary", error_source: "soft-failure", error_name: t.name, error_scope: "action-resolution", recovery: "action-no-op", path_id_present: "false"});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=315B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// locals: this
// closure: r, h
function {
  this = this;
  if (!(this.isActive)) goto L_13a;
  if (!(this.didBegin)) goto L_13a;
  if (!(this.isModelWrittenDIL)) goto L_13a;
  if (!((this.dilVersion === r))) goto L_13a;
  if (!(!this.didEmitInitialResult)) goto L_13a;
  this.didEmitInitialResult = true;
  null;
  this.baseTags;
  this.count(h, 1, {result: t, error_source: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=209B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
function {
  this = this;
  if ((this.didHandleFinalDraw)) goto L_aa;
  this.didHandleFinalDraw = true;
  if (!(!this.didEmitFailure)) goto L_aa;
  if (!(this.didEmitSuccess)) goto L_aa;
  this.emitLastVisibleToken(t);
  this.emitComposition();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=179B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
// closure: k, m
function {
  this = this;
  if (!(!this.didEmitFirstVisibleToken)) goto L_b2;
  if (!((undefined !== this.timingTags))) goto L_b2;
  if (!(k(t))) goto L_b2;
  this.didEmitFirstVisibleToken = true;
  this.histogram(m, t, this.timingTags);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=220B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
// closure: k, g
function {
  this = this;
  if (!(!this.didEmitLastVisibleToken)) goto L_db;
  if (!(this.didEmitFirstVisibleToken)) goto L_db;
  if (!((undefined !== this.timingTags))) goto L_db;
  if (!(k(t))) goto L_db;
  this.didEmitLastVisibleToken = true;
  this.histogram(g, t, this.timingTags);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=6 cpool=0 bc=1102B file=dil_widgets/src/DILRenderHealthMetrics
// locals: e, i, t, s, this
// closure: t, C, v, S, f, E
function {
  this = this;
  let i;
  let e;
  if ((!this.isModelWrittenDIL)) goto L_7d;
  if ((this.didEmitComposition)) goto L_7d;
  if (!((undefined === this.compositionCollector))) goto L_82;
  return true;
  e = this.compositionCollector.getSnapshot();
  if (!((undefined === e))) goto L_d4;
  return false;
  this.didEmitComposition = true;
  i = {componentCountsJson: JSON.stringify(Array.from(e.componentCounts)), distinctComponentTypeCount: e.distinctComponentTypeCount, totalComponentCount: e.totalComponentCount};
  if (!((undefined !== this.compositionHandler))) goto L_26e;
  try { // catch -> L_20d
  this.compositionHandler(i);
  return true;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_26d
  if (!(t.isLoggingEnabled)) goto L_269;
  console.warn("DIL composition handler failed; falling back to Valdi metrics emission.");
  <?>;
  goto L_26e;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.count(C, 1, {renderer: "valdi", result: "complete"});
  this.histogram(v, e.totalComponentCount, undefined);
  this.histogram(S, e.distinctComponentTypeCount, undefined);
  let s;
  let t;
  const _it1 = e.componentCounts;
  goto L_3b9;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  t = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  this.histogram(f, s, {component_type: t});
  if (!(<done(_it1)>)) goto L_379;
  <value(_it1)>;
  if (!((e.componentCounts.get("svg") == null))) goto L_43f;
  e.componentCounts.get("svg");
  this.count(E, 1, {contains_svg: String((0 > 0))});
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=137B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: this
// closure: r, c
function {
  this = this;
  if (((this.dilVersion !== r))) goto L_88;
  if ((this.didEmitFailure)) goto L_88;
  this.didEmitFailure = true;
  this.count(c, 1, t);
  return;
}

// fn I  args=1 vars=2 closure=4 cpool=0 bc=331B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: e
// closure: M, r, T, a
function {
  try { // catch -> L_141
  let e;
  if (!(("string" == typeof t))) goto L_3e;
  goto L_3f;
  // [栈深重同步 1 -> 0]
  e = t;
  if (!(!M(e))) goto L_4b;
  return {};
  if ((("string" == typeof e.code))) goto L_a5;
  if (!(("string" == typeof e.compiledDil))) goto L_dd;
  goto L_13f;
  // [栈深重同步 1 -> 0]
  if (!(("string" == typeof e.type))) goto L_139;
  goto L_13a;
  // [栈深重同步 2 -> 1]
  return {dilVersion: a, widgetType: undefined};
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_14a
  return {};
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn T  args=1 vars=4 closure=1 cpool=0 bc=232B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// locals: e, i, s
// closure: M
function {
  let e;
  if ((!M(t))) goto L_30;
  if (!(!M(t.logging_metadata))) goto L_33;
  return;
  e = {};
  let s;
  let i;
  const _it1 = Object.entries(t.logging_metadata);
  goto L_de;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  i = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  if ((("string" != typeof s))) goto L_dd;
  if ((i.startsWith("_dil_"))) goto L_dd;
  e[i] = s;
  s;
  if (!(<done(_it1)>)) goto L_89;
  <value(_it1)>;
  return e;
}

// fn y  args=3 vars=3 closure=2 cpool=0 bc=219B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e, i
// closure: V, F
function {
  null;
  t;
  if (!((e.details.sourceError == null))) goto L_b4;
  e.details.sourceError;
  goto L_d5;
  return {error_boundary: "DILErrorBoundary", error_source: i, error_name: V(e), dil_expression_phase: F(e.details.phase), dil_cause_name: undefined.name};
}

// fn V  args=1 vars=1 closure=0 cpool=0 bc=148B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  if (!((t.details.sourceError == null))) goto L_4b;
  t.details.sourceError;
  goto L_6c;
  if (!((undefined.name == null))) goto L_93;
  undefined.name;
  return t.name;
}

// fn F  args=1 vars=1 closure=0 cpool=0 bc=32B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  if (!((t === "CEL compilation"))) goto L_10;
  return "compilation";
  if (!((t === "CEL evaluation"))) goto L_1f;
  return "evaluation";
  t;
  return;
}

// fn L  args=1 vars=1 closure=1 cpool=0 bc=117B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
// closure: R
function {
  return {failure_classification: "invalid-selected-child", failure_reason: t.reason, parent_node_type: t.parentNodeType, render_stage: "selected-children", recovery: "drop-node", platform: R()};
}

// fn R  args=0 vars=0 closure=2 cpool=0 bc=362B file=dil_widgets/src/DILRenderHealthMetrics
// closure: n, b
function {
  if (!(n.Device.isWeb())) goto L_6d;
  return b.Web;
  if (!(n.Device.isIOS())) goto L_da;
  return b.IOS;
  if (!(n.Device.isAndroid())) goto L_147;
  return b.Android;
  return b.Other;
}

// fn x  args=2 vars=2 closure=1 cpool=0 bc=279B file=dil_widgets/src/DILRenderHealthMetrics
// args: t, e
// closure: i
function {
  if (!((t.details.sourceError instanceof i.DILSkippedChildError))) goto L_70;
  return "drop-node";
  if (!(e)) goto L_c4;
  if (!(("CEL evaluation" === t.details.phase))) goto L_c4;
  return "retain-previous-output";
  if (!((undefined === t.details.nodePath))) goto L_111;
  return "drop-widget";
  return "drop-node";
}

// fn M  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  if (!((null !== t))) goto L_3e;
  if (!(("object" == typeof t))) goto L_3e;
  return !Array.isArray(t);
}

// fn k  args=1 vars=1 closure=0 cpool=0 bc=50B file=dil_widgets/src/DILRenderHealthMetrics
// args: t
function {
  if (!(Number.isFinite(t))) goto L_31;
  return (t >= 0);
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=39 bc=924B file=dil_widgets/src/DILRenderHealthMetrics
// args: require, module, exports
// locals: t, e, i, s, n, o, r, a, d, l, c, h, u, p, m, g, _, C, v, S, f, E, w, D, b, DILV2CompositionCollector, <class_fields_init>, DILV2CompositionCollector#1, DILRenderHealthTracker, <class_fields_init>#1, DILRenderHealthTracker#1, I, T, y, V, F, L, R, x, M, k
function {
  I = function I;
  T = function T;
  y = function y;
  V = function V;
  F = function F;
  L = function L;
  R = function R;
  x = function x;
  M = function M;
  k = function k;
  let DILRenderHealthTracker#1;
  let DILV2CompositionCollector#1;
  let w;
  let E;
  let f;
  let S;
  let v;
  let C;
  let _;
  let g;
  let m;
  let p;
  let u;
  let h;
  let c;
  let l;
  let d;
  let a;
  let r;
  let o;
  let n;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILV2CompositionCollector = undefined;
  exports.DILRenderHealthTracker = undefined;
  exports.getSkippedChildErrorTags = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("dil_renderer/src/DILElement");
  i = require("dil_renderer/src/DILRenderer");
  s = require("oai_metrics_service/src/ValdiMetricsReporting");
  n = require("valdi_core/src/Device");
  o = require("./DILRenderOutputInspection");
  r = "2.0";
  a = "1.0";
  d = "dil.widget.render_attempt";
  l = "dil.widget.render_success";
  c = "dil.widget.render_failure";
  h = "dil.widget.initial_render_result";
  u = "dil.widget.soft_failure";
  p = "dil.widget.legacy_v1_render_attempt";
  m = "dil.widget.time_to_first_visible_token_ms";
  g = "dil.widget.time_to_last_visible_token_ms";
  _ = "chatgpt.model_written_dil.v2.render";
  C = "".concat(_, ".composition.result");
  v = "".concat(_, ".total_component_count");
  S = "".concat(_, ".distinct_component_type_count");
  f = "".concat(_, ".component_instances");
  E = "".concat(_, ".contains_svg");
  w = 64;
  if ((D)) goto L_269;
  D = {};
  !function <atom:0>({});
  if ((b)) goto L_277;
  b = {};
  function <atom:0>({});
  let DILV2CompositionCollector;
  let <class_fields_init>;
  class DILV2CompositionCollector extends undefined { ... }
  <proto:DILV2CompositionCollector>.setCollectionEnabled = function <atom:0>;
  <proto:DILV2CompositionCollector>.setSnapshotAvailableHandler = function <atom:0>;
  <proto:DILV2CompositionCollector>.setRenderSuccessHandler = function <atom:0>;
  <proto:DILV2CompositionCollector>.sourceGenerationChanged = function <atom:0>;
  <proto:DILV2CompositionCollector>.beginRender = function <atom:0>;
  <proto:DILV2CompositionCollector>.beginElement = function <atom:0>;
  <proto:DILV2CompositionCollector>.setProp = function <atom:0>;
  <proto:DILV2CompositionCollector>.setChildren = function <atom:0>;
  <proto:DILV2CompositionCollector>.endElement = function <atom:0>;
  <proto:DILV2CompositionCollector>.endRender = function <atom:0>;
  <proto:DILV2CompositionCollector>.getSnapshot = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILV2CompositionCollector>;
  DILV2CompositionCollector = function <atom:0>;
  // close_loc <class_fields_init>
  DILV2CompositionCollector#1 = function <atom:0>;
  exports.DILV2CompositionCollector = DILV2CompositionCollector#1;
  let DILRenderHealthTracker;
  let <class_fields_init>#1;
  class DILRenderHealthTracker extends undefined { ... }
  <proto:DILRenderHealthTracker>.isDILV2 = function <atom:0>;
  <proto:DILRenderHealthTracker>.reportOutput = function <atom:0>;
  <proto:DILRenderHealthTracker>.begin = function <atom:0>;
  <proto:DILRenderHealthTracker>.stop = function <atom:0>;
  <proto:DILRenderHealthTracker>.updateStreamingState = function <atom:0>;
  <proto:DILRenderHealthTracker>.reportHardFailure = function <atom:0>;
  <proto:DILRenderHealthTracker>.reportRecoveredFailure = function <atom:0>;
  <proto:DILRenderHealthTracker>.reportActionResolutionFailure = function <atom:0>;
  <proto:DILRenderHealthTracker>.emitInitialResult = function <atom:0>;
  <proto:DILRenderHealthTracker>.handleFinalDraw = function <atom:0>;
  <proto:DILRenderHealthTracker>.emitFirstVisibleToken = function <atom:0>;
  <proto:DILRenderHealthTracker>.emitLastVisibleToken = function <atom:0>;
  <proto:DILRenderHealthTracker>.emitComposition = function <atom:0>;
  <proto:DILRenderHealthTracker>.emitFailureOnce = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILRenderHealthTracker>;
  DILRenderHealthTracker = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILRenderHealthTracker#1 = function <atom:0>;
  exports.DILRenderHealthTracker = DILRenderHealthTracker#1;
  exports.getSkippedChildErrorTags = L;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILRenderHealthMetrics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
