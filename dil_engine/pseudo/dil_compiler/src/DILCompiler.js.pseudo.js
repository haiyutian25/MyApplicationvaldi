// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=91B file=dil_compiler/src/DILCompiler
// args: e
// closure: this
function {
  if (!(this.isCompiling)) goto L_33;
  this.didReportCompilationError = true;
  true;
  this.errorReporter(e);
  return;
}

// fn <atom:0>  args=7 vars=8 closure=1 cpool=1 bc=154B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i, n, s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.widgetsMap = e;
  this.elementsMap = r;
  this.elementRenderObserver = t;
  this.celExpressionResolver = o;
  this.errorReporter = i;
  this.listener = n;
  this.fixedTimeMs = s;
  this.failedCompilationInputs = new WeakMap();
  this.isCompiling = false;
  this.didReportCompilationError = false;
  this.reportError = function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=39B file=dil_compiler/src/DILCompiler
// closure: this, e, r
function {
  return this.compileInternal(e, r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_compiler/src/DILCompiler
// closure: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=2 bc=79B file=dil_compiler/src/DILCompiler
// closure: this, e, r
function {
  this.disposeSandboxContext();
  return this.compileWithRecoveryInput(function <atom:0>, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=48B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: this
// closure: t
function {
  this = this;
  return t.trace("DILCompiler.compile", function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=129B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, this
function {
  this = this;
  let t;
  t = this.failedCompilationInputs.get(e);
  if (!((undefined === t))) goto L_56;
  return e;
  return this.recompileFailedInput(t, e, r);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=158B file=dil_compiler/src/DILCompiler
// args: e
// locals: r, this
// closure: DILWidgetRenderer, Z
function {
  this = this;
  let r;
  r = e.widgetRenderer;
  if (!((r instanceof DILWidgetRenderer))) goto L_7b;
  return Z(r.node, 0, this.reportError);
  return e.initialState;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=124B file=dil_compiler/src/DILCompiler
// closure: r, this, t, i
function {
  if (!((1 === r.kind))) goto L_51;
  return this.incrementalCompileDILV2(t, r, i);
  return this.incrementalCompileDILV1(t, r, i);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_compiler/src/DILCompiler
// args: e
// closure: this
function {
  return this.getPatchedInput(e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=2 bc=434B file=dil_compiler/src/DILCompiler
// locals: t, n, e, s
// closure: r, this, i, C, e, E, o
function {
  let n;
  let t;
  t = C(e);
  n = this.failedCompilationInputs.get(r);
  if (!((undefined !== n))) goto L_189;
  let s;
  let e;
  if (!((undefined === n.parsed))) goto L_b6;
  goto L_da;
  // [栈深重同步 1 -> 0]
  e = n.parsed;
  s = new o.ApplyJSONPatch(e);
  t.visit(s);
  return this.recompileFailedInput({json: undefined, parsed: s.value}, r, i);   // tail call
  return this.compileWithRecoveryInput(function <atom:0>, function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=4 cpool=1 bc=48B file=dil_compiler/src/DILCompiler
// args: e, r, i
// locals: this
// closure: C, E, o, t
function {
  this = this;
  return t.trace("DILCompiler.incrementalCompile", function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=240B file=dil_compiler/src/DILCompiler
// locals: o
// closure: e, E, r, this, t
function {
  let o;
  if (!((undefined === e.parsed))) goto L_4f;
  goto L_71;
  // [栈深重同步 1 -> 0]
  o = e.parsed;
  if (!((1 === r.kind))) goto L_c4;
  return this.compileDILV2FromJsonValue(o, t);
  return this.compileDILV1(o, t);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_compiler/src/DILCompiler
// closure: e
function {
  return e;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=2 bc=202B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: this
// closure: E, DILWidgetRenderer
function {
  this = this;
  if (((0 !== r.kind))) goto L_50;
  if (!((r.widgetRenderer instanceof DILWidgetRenderer))) goto L_a2;
  this.disposeSandboxContext();
  return this.compileWithRecoveryInput(function <atom:0>, function <atom:0>);
  return this.compile(e, t);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=183B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, this
function {
  this = this;
  this.isCompiling = true;
  this.didReportCompilationError = false;
  try { // catch -> L_a4
  let t;
  t = e();
  if (!(this.didReportCompilationError)) goto L_99;
  this.failedCompilationInputs.set(t, r(t));
  // gosub (finally 块) 170
  return t;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 170
  throw <?>;
  this.isCompiling = false;
  // ret (finally 块) 
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=227B file=dil_compiler/src/DILCompiler
// args: e
// closure: DILWidgetRenderer, DILRenderFunctionCompileResult
function {
  if (!((0 === e.kind))) goto L_9e;
  if (!((e.widgetRenderer instanceof DILWidgetRenderer))) goto L_9e;
  return {json: undefined, parsed: e.widgetRenderer.node};
  if (!((e instanceof DILRenderFunctionCompileResult))) goto L_d4;
  return {json: undefined, parsed: e.dilJson};
  throw new Error("Expected a DIL incremental compile result.");
}

// fn <atom:0>  args=5 vars=5 closure=2 cpool=0 bc=78B file=dil_compiler/src/DILCompiler
// args: e, r, o, i, n
// closure: this, t
function {
  return this.compileNode(e, r, o, t.errorMode, i, n);   // tail call
}

// fn <atom:0>  args=5 vars=5 closure=2 cpool=0 bc=78B file=dil_compiler/src/DILCompiler
// args: e, r, o, i, n
// closure: this, t
function {
  return this.updateRendererProps(e, r, o, i, t.errorMode, n);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=3 cpool=2 bc=538B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o, i, n, this
// closure: DILWidgetRenderer, h, Z
function {
  this = this;
  let n;
  let i;
  let o;
  o = r.widgetRenderer;
  if (!(!(o instanceof DILWidgetRenderer))) goto L_47;
  throw new Error("DILCompiler.incrementalCompile requires a DIL compile result from a previous compile call.");
  i = new h.DILIncrementalCompileJSONPatchVisitor({rootNode: o.node, rootRenderer: o.renderer, compileNode: function <atom:0>, updateRendererProps: function <atom:0>});
  n = false;
  try { // catch -> L_11d
  e.visit(i);
  n = true;
  true;
  <?>;
  // gosub (finally 块) 291
  undefined;
  goto L_14f;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 291
  throw <?>;
  i.applyInitialStateUpdates(n);
  // ret (finally 块) 
  return {kind: 0, widgetRenderer: new DILWidgetRenderer(i.rootRenderer, i.rootNode), initialState: Z(i.rootNode, t.errorMode, this.reportError)};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=dil_compiler/src/DILCompiler
// args: e, r
// closure: c
function {
  return (e !== c[r]);
}

// fn <atom:0>  args=3 vars=12 closure=7 cpool=1 bc=746B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: i, n, s, a, d, p, c, l, this
// closure: DILRenderFunctionCompileResult, o, x, P, b, N, A
function {
  this = this;
  let l;
  let c;
  let p;
  let d;
  let a;
  let s;
  let n;
  let i;
  if (!(!(r instanceof DILRenderFunctionCompileResult))) goto L_32;
  throw new Error("DILCompiler.incrementalCompile requires a DIL compile result from a previous compile call.");
  i = new o.ApplyJSONPatch(r.dilJson);
  e.visit(i);
  n = i.value;
  s = x(n);
  if (!((undefined === s))) goto L_129;
  this.disposeSandboxContext();
  return this.compileDILV2FromJsonValue(n, t);   // tail call
  a = this.transformAppData(P(n));
  d = b(n);
  p = N(n, s);
  c = r.program.requiredComponents;
  if (((p.requiredComponents.length !== c.length))) goto L_227;
  l = p.requiredComponents.some(function <atom:0>);
  if (((s !== r.source))) goto L_2a1;
  if (!(l)) goto L_2a8;
  goto L_2a9;
  // [栈深重同步 6 -> 5]
  r.context.updateAppData(a, d, true, undefined);
  return new DILRenderFunctionCompileResult(r.context, a, d, A(n), n, p);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_compiler/src/DILCompiler
// closure: E, e
function {
  return E(e.json);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=343B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: o, i, this
// closure: E, t, D
function {
  this = this;
  let o;
  if (!((undefined !== e.parsed))) goto L_73;
  return this.compileJsonValue(e.parsed, r);   // tail call
  o = undefined;
  try { // catch -> L_af
  o = t.trace("DILCompiler.parse", function <atom:0>);
  t.trace("DILCompiler.parse", function <atom:0>);
  <?>;
  goto L_12e;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_12d
  return {kind: 0, widgetRenderer: D.handleRootError(i, r.errorMode, this.reportError)};
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.compileJsonValue(o, r);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=132B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, this
// closure: x
function {
  this = this;
  let t;
  t = x(e);
  if (!((undefined !== t))) goto L_5c;
  return this.compileDILV2(e, t, r.errorMode);
  return this.compileDILV1(e, r);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=119B file=dil_compiler/src/DILCompiler
// closure: u, e, r, this
function {
  return u.validateDILJsonValue(e, {errorMode: r.errorMode, reportError: this.reportError});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=151B file=dil_compiler/src/DILCompiler
// closure: this, o, l, r
function {
  return this.compileNode(o, false, l.DILNodePath.root(), r.errorMode, undefined, false);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=2 bc=339B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: o, i, this
// closure: u, l, t, D, DILWidgetRenderer, Z
function {
  this = this;
  let o;
  o = undefined;
  try { // catch -> L_41
  o = t.trace("DILCompiler.validateV1Json", function <atom:0>);
  t.trace("DILCompiler.validateV1Json", function <atom:0>);
  <?>;
  goto L_c0;
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_bf
  return {kind: 0, widgetRenderer: D.handleRootError(i, r.errorMode, this.reportError)};
  // [栈深重同步 0 -> 1]
  throw <?>;
  return {kind: 0, widgetRenderer: new DILWidgetRenderer(t.trace("DILCompiler.compileTree", function <atom:0>), o), initialState: Z(o, r.errorMode, this.reportError)};
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=349B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, t#1, this
// closure: x, c, D
function {
  this = this;
  let t;
  t = x(e);
  if (!((undefined === t))) goto L_112;
  let t#1;
  t#1 = new c.DILDiagnosticError({phase: "DIL JSON validation", message: "Expected DIL v2 JSON root to include a string code property."});
  if (!((1 === r.errorMode))) goto L_7e;
  throw t#1;
  D.reportDILCompilerError(this.reportError, t#1);
  return this.compileDILV2(e, "", r.errorMode);   // tail call
  return this.compileDILV2(e, t, r.errorMode);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=6 cpool=0 bc=205B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o, i, this
// closure: N, v, DILRenderFunctionCompileResult, P, b, A
function {
  this = this;
  let i;
  let o;
  o = N(e, r);
  i = this.getDILSandbox().createContext(o, this.fixedTimeMs, v(t));
  this.activeSandboxContext = i;
  return new DILRenderFunctionCompileResult(i, this.transformAppData(P(e)), b(e), A(e), e, o);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=dil_compiler/src/DILCompiler
// args: e
// locals: this
function {
  this = this;
  if (!((this.listener.transformAppData == null))) goto L_4e;
  this.listener.transformAppData;
  this.listener;
  goto L_52;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, e) == null))) goto L_58;
  <?>.call(undefined, e);
  return e;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=430B file=dil_compiler/src/DILCompiler
// args: r
// locals: t, o, this
// closure: d, p, e, D, c
function {
  this = this;
  let t;
  t = undefined;
  if (!((r instanceof d.DILSandboxTimeoutError))) goto L_10a;
  try { // catch -> L_a8
  t = p.makeDILPolyfilledTraceJSON(r.mainThreadTraces, r.workerTraces);
  p.makeDILPolyfilledTraceJSON(r.mainThreadTraces, r.workerTraces);
  <?>;
  goto L_10a;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_109
  if (!(e.isLoggingEnabled)) goto L_105;
  console.warn("Failed to serialize a DIL sandbox timeout trace.", o);
  <?>;
  goto L_10a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  D.reportDILCompilerError(this.reportError, c.DILDiagnosticError.wrapError(r, {phase: "DIL render", sandboxTrace: t}));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_compiler/src/DILCompiler
// args: e
// closure: this
function {
  this.reportDILRendererError(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=283B file=dil_compiler/src/DILCompiler
// locals: this
// closure: s
function {
  this = this;
  if (!((undefined === this.dilSandbox))) goto L_f7;
  this.dilSandbox = new s.DILSandbox(this.elementsMap, this.elementRenderObserver, {reportError: function <atom:0>}, this.listener, s.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS);
  new s.DILSandbox(this.elementsMap, this.elementRenderObserver, {reportError: function <atom:0>}, this.listener, s.DIL_SANDBOX_DEFAULT_MESSAGE_TIMEOUT_MS);
  return this.dilSandbox;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=dil_compiler/src/DILCompiler
// locals: this
function {
  this = this;
  this.disposeSandboxContext();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=84B file=dil_compiler/src/DILCompiler
// locals: this
function {
  this = this;
  if (!((this.dilSandbox == null))) goto L_2e;
  this.dilSandbox;
  goto L_52;
  return (true === undefined.isPermanentlyFailed());
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=dil_compiler/src/DILCompiler
// locals: this
function {
  this = this;
  if (!((this.activeSandboxContext == null))) goto L_2c;
  this.activeSandboxContext;
  goto L_50;
  undefined.dispose();
  this.activeSandboxContext = undefined;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=0 bc=207B file=dil_compiler/src/DILCompiler
// args: e, t
// locals: t#1, o, this
// closure: K, r, c, D
function {
  this = this;
  try { // catch -> L_7b
  let t#1;
  t#1 = K(e);
  if (!(r.isCELMap(t#1))) goto L_3d;
  return t#1;
  throw new c.DILDiagnosticError({phase: "DIL JSON validation", message: "Expected DIL entry point initialState to be a JSON object."});
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_ce
  D.handleRootError(o, t, this.reportError);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=85B file=dil_compiler/src/DILCompiler
// args: e, r
// closure: this, t, o, p, c
function {
  return this.compileNode(e, true, t.child(r), o, p, c);   // tail call
}

// fn <atom:0>  args=6 vars=15 closure=9 cpool=1 bc=1374B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i, n
// locals: s, a, d, e#1, p, c, l, p#1, this
// closure: J, D, c, I, k, V, W, L, y
function {
  this = this;
  let d;
  let a;
  let s;
  s = J(e, r);
  a = {nodePath: t.toString(), nodeType: s.type, node: s};
  d = this.widgetsMap[s.type];
  if (!((undefined === d))) goto L_1a1;
  null;
  a;
  return D.handleNodeError(new c.DILDiagnosticError({phase: "DIL compilation", message: "Unknown DIL widget type "".concat(s.type, "".")}), o, this.reportError, a);   // tail call
  try { // catch -> L_504
  let l;
  let c;
  let p;
  let e#1;
  e#1 = new I.DILProperties(k(d));
  p = d.create(e#1, this.celExpressionResolver, i, t.toWidgetPathId());
  p.name = s.type;
  V(s, e#1, this.celExpressionResolver, a);
  W(s, e#1, n);
  p.onPropsChanged();
  if ((n)) goto L_323;
  c = ("Inline" === s.type);
  if (!(s.children)) goto L_397;
  goto L_39a;
  // [栈深重同步 1 -> 0]
  l = [];
  p.onChildrenChanged(l);
  this.updateRenderedProps(s, p, t, o, c);
  return new L.DILDiagnosticWidgetRenderer(y.wrapRendererWithInitialStateIfNeeded(p, s, r, this.celExpressionResolver, t.toString(), this.listener.onInitialStateUpdate), a, o, this.reportError);
  // [栈深重同步 0 -> 1]
  p#1 = <?>;
  try { // catch -> L_55d
  return D.handleNodeError(p#1, o, this.reportError, a);
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=6 vars=10 closure=4 cpool=0 bc=613B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i, n
// locals: s, t#1, a, this
// closure: V, R, W, D
function {
  this = this;
  let s;
  s = {nodePath: t.toString(), nodeType: e.type, node: e};
  try { // catch -> L_20b
  if (!((undefined === o))) goto L_101;
  r.props.clear();
  V(e, r.props, this.celExpressionResolver, s);
  goto L_15f;
  let t#1;
  for (const t#1 of o) {
    R(e, r.props, t#1, this.celExpressionResolver, s);
  }
  W(e, r.props, n);
  r.onPropsChanged();
  if ((n)) goto L_205;
  this.updateRenderedProps(e, r, t, i, ("Inline" === e.type));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_264
  D.handleNodeError(a, i, this.reportError, s);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=5 vars=7 closure=1 cpool=0 bc=184B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i
// locals: n, this
// closure: g
function {
  this = this;
  let n;
  n = g.unwrapDILWidgetRenderer(r);
  if (!((undefined !== n))) goto L_b7;
  if (!((undefined !== n.onRenderedPropsChanged))) goto L_b7;
  n.onRenderedPropsChanged(this.compileRenderedProps(e, n, t, o, i));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=7 cpool=0 bc=180B file=dil_compiler/src/DILCompiler
// args: e, n
// closure: this, t, s, a, o, r, i
function {
  if (!((1 === a.length))) goto L_76;
  goto L_77;
  // [栈深重同步 8 -> 7]
  if (!(("children" === s.name))) goto L_b1;
  return this.compileNode(e, true, t.renderedProp(s.authoredName, n), o, r, i);   // tail call
}

// fn <atom:0>  args=5 vars=9 closure=2 cpool=1 bc=291B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i
// locals: n, s, a, this
// closure: $, z
function {
  this = this;
  let n;
  n = {};
  let s;
  // close_loc s
  for (const s of $(e)) {
    let a;
    a = z(s.value, s.authoredName, {nodePath: t.toString(), nodeType: e.type, node: e});
    n[s.name] = a.map(function <atom:0>);
    // close_loc a
    // close_loc s
  }
  // close_loc s
  return n;
}

// fn v  args=1 vars=1 closure=1 cpool=0 bc=145B file=dil_compiler/src/DILCompiler
// args: e
// closure: n
function {
  if (!((0 === e))) goto L_4b;
  return n.DILRenderErrorMode.ReportAndSkipSubtree;
  return n.DILRenderErrorMode.ReportAndAbortRender;
}

// fn R  args=5 vars=8 closure=5 cpool=0 bc=639B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i
// locals: n, s, t#1
// closure: M, O, _, T, I
function {
  let s;
  let n;
  if ((("id" === t))) goto L_18;
  if (!(("$id" === t))) goto L_2c;
  r.nodeIdProperty = M(e, o, i);
  return;
  if ((("key" === t))) goto L_3e;
  if (!(("$key" === t))) goto L_52;
  r.keyProperty = O(e, o, i);
  return;
  n = r.schema.getProperty(t);
  if (!((undefined === n))) goto L_a2;
  return;
  s = undefined;
  if (!(n.isDynamic)) goto L_132;
  if (!((_(e, n.name, t, o, i) == null))) goto L_12a;
  _(e, n.name, t, o, i);
  s = T(e, n.name, o, i);
  T(e, n.name, o, i);
  goto L_1e0;
  let t#1;
  t#1 = r.getProperty(n.name);
  if (!((t#1 instanceof I.DILDynamicProperty))) goto L_1ae;
  goto L_1db;
  // [栈深重同步 1 -> 0]
  s = T(e, n.name, o, i);
  T(e, n.name, o, i);
  if (!((undefined === s))) goto L_232;
  goto L_27e;
  // [栈深重同步 1 -> 0]
  r.setProperty(s.name, s);
  return;
}

// fn <atom:0>  args=6 vars=7 closure=2 cpool=0 bc=220B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i, n
// locals: this
// closure: <class_fields_init>, w
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.context = e;
  this.appData = r;
  this.constants = t;
  this.clientDefinedWidgets = o;
  this.dilJson = i;
  this.program = n;
  this.kind = 1;
  this.renderFunction = this.context.render;
  this.appDirectiveSequenceActive = w(this.dilJson);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILCompiler
// locals: this
function {
  this = this;
  return this.program.source;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: this
function {
  this = this;
  this.context.setStateSnapshot(e, r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.renderer = e;
  this.node = r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=73B file=dil_compiler/src/DILCompiler
// closure: this, e, r
function {
  this.renderer.onRender(e, r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=47B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: this
// closure: t
function {
  this = this;
  t.trace("DILCompiler.evaluateRenderer", function <atom:0>);
  return;
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILCompiler
// args: e
// closure: DILWidgetRenderer
function {
  if (!((e instanceof DILWidgetRenderer))) goto L_2a;
  return e.renderer;
  return undefined;
}

// fn E  args=1 vars=2 closure=1 cpool=0 bc=136B file=dil_compiler/src/DILCompiler
// args: e
// locals: r
// closure: c
function {
  try { // catch -> L_31
  return JSON.parse(e);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_87
  if (!((r instanceof Error))) goto L_7d;
  goto L_7e;
  // [栈深重同步 4 -> 3]
  throw new c.DILDiagnosticError({phase: "DIL JSON parse", message: "Invalid DIL JSON: failed to parse JSON string.", sourceError: undefined});
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn C  args=1 vars=1 closure=1 cpool=0 bc=252B file=dil_compiler/src/DILCompiler
// args: e
// closure: i
function {
  if (!((undefined === e.parsed))) goto L_91;
  return i.JSONPatch.parse(e.json);
  return i.JSONPatch.fromValue(e.parsed);
}

// fn x  args=1 vars=3 closure=1 cpool=0 bc=117B file=dil_compiler/src/DILCompiler
// args: e
// locals: r, t
// closure: q
function {
  let t;
  let r;
  if (!(!q(e))) goto L_d;
  return;
  r = e.code;
  if (!(("string" == typeof r))) goto L_40;
  return r;
  t = e.compiledDil;
  if (!(("string" == typeof t))) goto L_73;
  return t;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=186B file=dil_compiler/src/DILCompiler
// args: e
// closure: q
function {
  if (!(q(e))) goto L_b9;
  if (!(("recovered_parse" === e.action))) goto L_b9;
  if (!(("unterminated_braced_value" === e.code))) goto L_b9;
  if ((("body" === e.directive))) goto L_b9;
  return ("module" === e.directive);
}

// fn w  args=1 vars=1 closure=1 cpool=1 bc=248B file=dil_compiler/src/DILCompiler
// args: e
// closure: q
function {
  if ((!q(e))) goto L_2c;
  if (!(!(null != e.programFailure))) goto L_f7;
  if (((true === e.appDirectiveSequenceActive))) goto L_f7;
  if (!(Array.isArray(e.recoveryDiagnostics))) goto L_f7;
  return e.recoveryDiagnostics.some(function <atom:0>);
}

// fn P  args=1 vars=1 closure=1 cpool=0 bc=80B file=dil_compiler/src/DILCompiler
// args: e
// closure: q
function {
  if (!(q(e))) goto L_4e;
  if (!(q(e.appData))) goto L_4e;
  return e.appData;
  return {};
}

// fn N  args=2 vars=2 closure=3 cpool=0 bc=96B file=dil_compiler/src/DILCompiler
// args: e, r
// closure: a, q, P
function {
  if (!(q(e))) goto L_54;
  goto L_55;
  // [栈深重同步 3 -> 2]
  return {source: r, requiredComponents: a.resolveDILRequiredComponents(undefined, r, P(e))};
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=80B file=dil_compiler/src/DILCompiler
// args: e
// closure: q
function {
  if (!(q(e))) goto L_4e;
  if (!(q(e.constants))) goto L_4e;
  return e.constants;
  return {};
}

// fn A  args=1 vars=1 closure=1 cpool=0 bc=79B file=dil_compiler/src/DILCompiler
// args: e
// closure: q
function {
  if (!(q(e))) goto L_4e;
  if (!(q(e.clientDefinedWidgets))) goto L_4e;
  return e.clientDefinedWidgets;
  return;
}

// fn q  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_compiler/src/DILCompiler
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn J  args=2 vars=2 closure=0 cpool=0 bc=65B file=dil_compiler/src/DILCompiler
// args: e, r
function {
  if (!(("string" == typeof e))) goto L_3f;
  if (!(r)) goto L_2d;
  return {type: "Text", value: e, inline: true, __dilStringTextNode: true};
  return {type: "Text", value: e};
  return e;
}

// fn V  args=4 vars=12 closure=4 cpool=0 bc=478B file=dil_compiler/src/DILCompiler
// args: e, r, t, o
// locals: i, s, i#1, n, s#1, a, d, p
// closure: M, O, T, _
function {
  let n;
  let i;
  r.nodeIdProperty = M(e, t, o);
  r.keyProperty = O(e, t, o);
  i = r.schema.staticPropertyNames;
  let s;
  for (const s of i) {
    let i#1;
    i#1 = T(e, s, t, o);
    if (!((undefined !== i#1))) goto L_d5;
    r.setProperty(i#1.name, i#1);
  }
  n = r.schema.dynamicPropertyNames;
  let s#1;
  s#1 = 0;
  if (!((s#1 < n.length))) goto L_1dd;
  let p;
  let d;
  let a;
  a = i[s#1];
  d = n[s#1];
  if (((undefined === a))) goto L_15c;
  if (!((undefined === d))) goto L_16d;
  throw new Error("Invalid DIL properties schema: dynamic properties must map to static properties by index.");
  p = _(e, a, d, t, o);
  if (!((undefined !== p))) goto L_1d1;
  r.setProperty(p.name, p);
  s#1 = <s#1_new>;
  (s#1++);
  goto L_126;
  return;
}

// fn W  args=3 vars=3 closure=1 cpool=0 bc=226B file=dil_compiler/src/DILCompiler
// args: e, r, t
// closure: I
function {
  if (!(t)) goto L_e1;
  if (!(("Text" === e.type))) goto L_e1;
  if (!((undefined !== r.schema.getProperty("inline")))) goto L_e1;
  r.setProperty("inline", new I.DILStaticProperty("inline", true));
  return;
}

// fn M  args=3 vars=4 closure=2 cpool=0 bc=42B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o
// closure: T, _
function {
  let o;
  o = T(e, "id", r, t);
  if (!((_(e, "id", "$id", r, t) == null))) goto L_29;
  _(e, "id", "$id", r, t);
  return o;
}

// fn O  args=3 vars=4 closure=2 cpool=0 bc=42B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o
// closure: T, _
function {
  let o;
  o = T(e, "key", r, t);
  if (!((_(e, "key", "$key", r, t) == null))) goto L_29;
  _(e, "key", "$key", r, t);
  return o;
}

// fn k  args=1 vars=3 closure=1 cpool=0 bc=181B file=dil_compiler/src/DILCompiler
// args: e
// locals: r, t
// closure: m
function {
  let t;
  let r;
  if (!((undefined !== e.propertiesSchema))) goto L_4f;
  return e.propertiesSchema;
  // append([], 0, e.properties)
  e.properties;
  r = [];
  t = new m.DILPropertiesSchema(r);
  e.propertiesSchema = t;
  return t;
}

// fn T  args=4 vars=7 closure=5 cpool=0 bc=263B file=dil_compiler/src/DILCompiler
// args: e, r, t, o
// locals: i, e#1, n
// closure: j, Q, F, X, I
function {
  let i;
  i = j(e, r);
  if (!((undefined !== i))) goto L_106;
  if (!(Q(r))) goto L_d9;
  if (!(("string" == typeof i))) goto L_8d;
  let n;
  let e#1;
  e#1 = F(o, r, i);
  n = X(i, t, e#1);
  return I.DILActionProperty.fromExpression(r, n, e#1);   // tail call
  return I.DILActionProperty.fromStatic(r, i);   // tail call
  return new I.DILStaticProperty(r, i);
  return;
}

// fn _  args=5 vars=8 closure=6 cpool=0 bc=349B file=dil_compiler/src/DILCompiler
// args: e, r, t, o, i
// locals: n, s, a
// closure: j, c, F, X, Q, I
function {
  let a;
  let s;
  let n;
  n = j(e, t);
  if (!((undefined === n))) goto L_16;
  return;
  if (!(("string" != typeof n))) goto L_c2;
  null;
  i;
  throw new c.DILDiagnosticError({phase: "DIL compilation", message: "Invalid dynamic prop "".concat(t, "" on ", e.type, ": expected a CEL expression string."), propName: t});
  s = F(i, t, n);
  a = X(n, o, s);
  if (!(Q(r))) goto L_12d;
  return I.DILActionProperty.fromExpression(r, a, s);
  return new I.DILDynamicProperty(r, a, s);
}

// fn F  args=3 vars=3 closure=0 cpool=0 bc=20B file=dil_compiler/src/DILCompiler
// args: e, r, t
function {
  return {nodeContext: e, propName: r, expression: t};
}

// fn j  args=2 vars=4 closure=0 cpool=0 bc=133B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, o
function {
  let o;
  let t;
  t = e[r];
  if (!((undefined !== t))) goto L_15;
  return t;
  o = e.props;
  if (((null === o))) goto L_7b;
  if ((("object" != typeof o))) goto L_7b;
  if (!(Array.isArray(o))) goto L_7f;
  return undefined;
  return o[r];
}

// fn $  args=1 vars=3 closure=1 cpool=0 bc=142B file=dil_compiler/src/DILCompiler
// args: e
// locals: r, t
// closure: U
function {
  let t;
  let r;
  r = undefined;
  t = e.props;
  if (((null === t))) goto L_7e;
  if ((("object" != typeof t))) goto L_7e;
  if ((Array.isArray(t))) goto L_7e;
  r = U(r, t);
  U(r, t);
  if (!((U(r, e) == null))) goto L_8d;
  U(r, e);
  return [];
}

// fn U  args=2 vars=4 closure=1 cpool=0 bc=160B file=dil_compiler/src/DILCompiler
// args: e, r
// locals: t, o
// closure: H
function {
  let t;
  for (const t of r) {
    let o;
    if ((!H(t))) continue;
    o = r[t];
    if (!((undefined !== o))) goto L_95;
    if (!((undefined === e))) goto L_31;
    e = [];
    [];
    e.push({authoredName: t, name: t.slice(1), value: o});
  }
  <catch>;
  return e;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=61B file=dil_compiler/src/DILCompiler
// args: e, o
// closure: B, G, r, t
function {
  if (!(B(e))) goto L_7;
  return e;
  throw G(r, "".concat(r, "[", o, "]"), t);
}

// fn z  args=3 vars=3 closure=2 cpool=1 bc=108B file=dil_compiler/src/DILCompiler
// args: e, r, t
// closure: B, G
function {
  if (!((null == e))) goto L_9;
  return [];
  if (!(B(e))) goto L_13;
  return [e];
  if (!(Array.isArray(e))) goto L_66;
  return e.map(function <atom:0>);   // tail call
  throw G(r, r, t);
}

// fn B  args=1 vars=1 closure=0 cpool=0 bc=75B file=dil_compiler/src/DILCompiler
// args: e
function {
  if ((("string" == typeof e))) goto L_4a;
  if (!(("object" == typeof e))) goto L_4a;
  if (!((null !== e))) goto L_4a;
  return !Array.isArray(e);
}

// fn G  args=3 vars=3 closure=1 cpool=0 bc=122B file=dil_compiler/src/DILCompiler
// args: e, r, t
// closure: c
function {
  null;
  t;
  return new c.DILDiagnosticError({phase: "DIL compilation", message: "Invalid rendered prop "".concat(e, "" at ", r, ": expected a DIL widget object, string, or array of widgets."), propName: e});
}

// fn H  args=1 vars=1 closure=0 cpool=0 bc=18B file=dil_compiler/src/DILCompiler
// args: e
function {
  if (!((e.length > 1))) goto L_11;
  return ("*" === e[0]);
}

// fn X  args=3 vars=4 closure=1 cpool=0 bc=254B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o
// closure: c
function {
  try { // catch -> L_2d
  return r.getOrCompile(e);
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_fd
  null;
  t.nodeContext;
  throw c.DILDiagnosticError.wrapError(o, {phase: "CEL compilation", propName: t.propName, expression: t.expression});
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn K  args=1 vars=2 closure=2 cpool=0 bc=137B file=dil_compiler/src/DILCompiler
// args: e
// locals: r
// closure: f, c
function {
  try { // catch -> L_2d
  return f.parseWidgetInitialStateJson(e);
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_88
  throw c.DILDiagnosticError.wrapError(r, {phase: "DIL JSON parse"});
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn Q  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_compiler/src/DILCompiler
// args: e
function {
  return e.endsWith("Action");   // tail call
}

// fn Y  args=1 vars=2 closure=1 cpool=0 bc=72B file=dil_compiler/src/DILCompiler
// args: e
// locals: r
// closure: y
function {
  let r;
  if (!(("string" == typeof e))) goto L_e;
  return;
  r = y.readInitialStateValue(e);
  if (!((undefined !== r))) goto L_46;
  null;
  r;
  return {};
  return undefined;
}

// fn Z  args=3 vars=4 closure=2 cpool=0 bc=61B file=dil_compiler/src/DILCompiler
// args: e, r, t
// locals: o
// closure: Y, D
function {
  try { // catch -> L_a
  return Y(e);
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_3c
  D.handleRootError(o, r, t);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=66 closure=0 cpool=64 bc=831B file=dil_compiler/src/DILCompiler
// args: require, module, exports
// locals: e, r, t, o, i, n, s, a, d, p, c, l, u, h, m, I, D, f, L, y, g, DILCompiler, <class_fields_init>, DILCompiler#1, v, R, DILRenderFunctionCompileResult, <class_fields_init>#1, DILRenderFunctionCompileResult#1, DILWidgetRenderer, <class_fields_init>#2, DILWidgetRenderer#1, S, E, C, x, w, P, N, b, A, q, J, V, W, M, O, k, T, _, F, j, $, U, z, B, G, H, X, K, Q, Y, Z
function {
  v = function v;
  R = function R;
  S = function S;
  E = function E;
  C = function C;
  x = function x;
  w = function w;
  P = function P;
  N = function N;
  b = function b;
  A = function A;
  q = function q;
  J = function J;
  V = function V;
  W = function W;
  M = function M;
  O = function O;
  k = function k;
  T = function T;
  _ = function _;
  F = function F;
  j = function j;
  $ = function $;
  U = function U;
  z = function z;
  B = function B;
  G = function G;
  H = function H;
  X = function X;
  K = function K;
  Q = function Q;
  Y = function Y;
  Z = function Z;
  let DILWidgetRenderer#1;
  let DILRenderFunctionCompileResult#1;
  let DILCompiler#1;
  let g;
  let y;
  let L;
  let f;
  let D;
  let I;
  let m;
  let h;
  let u;
  let l;
  let c;
  let p;
  let d;
  let a;
  let s;
  let n;
  let i;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCompiler = undefined;
  exports.getDILRootWidgetRenderer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  r = require("cel/src/CELValue");
  t = require("valdi_core/src/utils/Trace");
  o = require("json_patch/src/ApplyJSONPatch");
  i = require("json_patch/src/JSONPatch");
  n = require("dil_renderer/src/DILRenderer");
  s = require("dil_sandbox/src/DILSandbox");
  a = require("dil_sandbox/src/DILSandboxSource");
  d = require("dil_sandbox/src/DILSandboxError");
  p = require("dil_sandbox/src/DILTraceCollector");
  c = require("./DILError");
  l = require("./DILNodePath");
  u = require("./DILParser");
  h = require("./DILIncrementalCompileJSONPatchVisitor");
  m = require("./DILPropertiesSchema");
  I = require("./DILProperty");
  D = require("./DILCompilerErrorHandling");
  f = require("./CompressedWidgetState");
  L = require("./DILDiagnosticWidgetRenderer");
  y = require("./DILInitialStateScopeWidgetRenderer");
  g = require("./DILWidgetRendererUnwrap");
  let DILCompiler;
  let <class_fields_init>;
  class DILCompiler extends undefined { ... }
  <proto:DILCompiler>.compile = function <atom:0>;
  <proto:DILCompiler>.recompileAfterFailure = function <atom:0>;
  <proto:DILCompiler>.readRetainedInitialState = function <atom:0>;
  <proto:DILCompiler>.incrementalCompile = function <atom:0>;
  <proto:DILCompiler>.recompileFailedInput = function <atom:0>;
  <proto:DILCompiler>.compileWithRecoveryInput = function <atom:0>;
  <proto:DILCompiler>.getPatchedInput = function <atom:0>;
  <proto:DILCompiler>.incrementalCompileDILV1 = function <atom:0>;
  <proto:DILCompiler>.incrementalCompileDILV2 = function <atom:0>;
  <proto:DILCompiler>.compileInternal = function <atom:0>;
  <proto:DILCompiler>.compileJsonValue = function <atom:0>;
  <proto:DILCompiler>.compileDILV1 = function <atom:0>;
  <proto:DILCompiler>.compileDILV2FromJsonValue = function <atom:0>;
  <proto:DILCompiler>.compileDILV2 = function <atom:0>;
  <proto:DILCompiler>.transformAppData = function <atom:0>;
  <proto:DILCompiler>.reportDILRendererError = function <atom:0>;
  <proto:DILCompiler>.getDILSandbox = function <atom:0>;
  <proto:DILCompiler>.dispose = function <atom:0>;
  <proto:DILCompiler>.hasSandboxPermanentlyFailed = function <atom:0>;
  <proto:DILCompiler>.disposeSandboxContext = function <atom:0>;
  <proto:DILCompiler>.parseInitialState = function <atom:0>;
  <proto:DILCompiler>.compileNode = function <atom:0>;
  <proto:DILCompiler>.updateRendererProps = function <atom:0>;
  <proto:DILCompiler>.updateRenderedProps = function <atom:0>;
  <proto:DILCompiler>.compileRenderedProps = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILCompiler>;
  DILCompiler = function <atom:0>;
  // close_loc <class_fields_init>
  DILCompiler#1 = function <atom:0>;
  exports.DILCompiler = DILCompiler#1;
  let DILRenderFunctionCompileResult;
  let <class_fields_init>#1;
  class DILRenderFunctionCompileResult extends undefined { ... }
  <proto:DILRenderFunctionCompileResult>.source = function <atom:0>;
  <proto:DILRenderFunctionCompileResult>.setStateSnapshot = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILRenderFunctionCompileResult>;
  DILRenderFunctionCompileResult = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILRenderFunctionCompileResult#1 = function <atom:0>;
  let DILWidgetRenderer;
  let <class_fields_init>#2;
  class DILWidgetRenderer extends undefined { ... }
  <proto:DILWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILWidgetRenderer>;
  DILWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILWidgetRenderer#1 = function <atom:0>;
  exports.getDILRootWidgetRenderer = S;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILCompiler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
