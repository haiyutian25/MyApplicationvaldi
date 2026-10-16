// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  e.Children = 0;
  e[0] = "Children";
  e.Node = 1;
  e[1] = "Node";
  e.PropertyValue = 2;
  e[2] = "PropertyValue";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  e.RecompileOwnerNode = 0;
  e[0] = "RecompileOwnerNode";
  e.UpdateInitialStateScope = 1;
  e[1] = "UpdateInitialStateScope";
  e.UpdateRendererProps = 2;
  e[2] = "UpdateRendererProps";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  e.Append = 0;
  e[0] = "Append";
  e.Remove = 1;
  e[1] = "Remove";
  e.Truncate = 2;
  e[2] = "Truncate";
  e.Write = 3;
  e[3] = "Write";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=184B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.options = e;
  this.pendingInitialStateUpdates = new Map();
  this.rootNode = e.rootNode;
  this.rootRenderer = e.rootRenderer;
  this.contextStack = [this.makeRootContext()];
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=176B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: r, t, this
function {
  this = this;
  let t;
  let r;
  const _it1 = this.pendingInitialStateUpdates;
  goto L_63;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  t = <value(_it2)>;
  r.tryUpdateInitialState(t, e);
  if (!(<done(_it1)>)) goto L_2d;
  <value(_it1)>;
  this.pendingInitialStateUpdates.clear();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=600B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  t = this.currentContext();
  if (!((t.kind !== i.Node))) goto L_1c6;
  if (!((t.kind !== i.Children))) goto L_133;
  goto L_257;
  // [栈深重同步 1 -> 0]
  goto L_257;
  // [栈深重同步 1 -> 0]
  this.contextStack.push(this.enterNodeProperty(t.nodeRef, e, r));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=127B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// locals: this
function {
  this = this;
  if (!((this.contextStack.length <= 1))) goto L_38;
  throw new Error("DIL incremental JSON patch visitor paths ended out of order.");
  this.contextStack.pop();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: this
// closure: f
function {
  this = this;
  this.replaceRoot(f(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=79B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: this
// closure: f, P
function {
  this = this;
  this.replaceRoot(f(P(this.rootNode, e)));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=15B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
function {
  throw new Error("DIL incremental compile cannot remove the root widget.");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  throw new Error("DIL incremental compile cannot truncate the root widget.");
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: p
function {
  this = this;
  this.applyOperation(e, r, p.Append, t);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: p
function {
  this = this;
  this.applyOperation(e, r, p.Write, t);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: p
function {
  this = this;
  this.applyOperation(e, r, p.Write, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// locals: this
// closure: p
function {
  this = this;
  this.applyOperation(e, r, p.Remove, undefined);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: p
function {
  this = this;
  this.applyOperation(e, r, p.Truncate, t);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=395B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, o
// locals: n, this
// closure: i
function {
  this = this;
  let n;
  n = this.currentContext();
  if (!((n.kind !== i.Node))) goto L_13d;
  if (!((n.kind !== i.Children))) goto L_ef;
  goto L_18a;
  // [栈深重同步 1 -> 0]
  goto L_18a;
  // [栈深重同步 1 -> 0]
  this.applyNodePropertyOperation(n.nodeRef, e, r, t, o);
  return;
}

// fn <atom:0>  args=5 vars=6 closure=2 cpool=0 bc=951B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, o, n
// locals: this
// closure: s, d
function {
  this = this;
  s(e.value, r, t, o, n);
  if ((e.ownerNodeRef.isErrorState)) goto L_3b6;
  if (!(("string" != typeof e.ownerNodeRef.node))) goto L_36f;
  if (!((e.mutation !== d.UpdateInitialStateScope))) goto L_326;
  if (!((e.mutation !== d.RecompileOwnerNode))) goto L_2dc;
  if (!((e.propertyNameForRendererUpdate == null))) goto L_290;
  e.propertyNameForRendererUpdate;
  goto L_3b6;
  // [栈深重同步 1 -> 0]
  goto L_3b6;
  // [栈深重同步 1 -> 0]
  goto L_3b6;
  // [栈深重同步 1 -> 0]
  this.recompileNode(e.ownerNodeRef);
  return;
}

// fn <atom:0>  args=5 vars=6 closure=5 cpool=0 bc=725B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, n, i
// locals: this
// closure: s, o, R, m, a
function {
  this = this;
  if (!((undefined !== t))) goto L_5c;
  s(e.node, r, t, n, i);
  this.recompileNode(e);
  return;
  if (!(("children" !== r))) goto L_2aa;
  s(e.node, r, t, n, i);
  if (!(("type" !== r))) goto L_282;
  if (!(("string" != typeof e.node))) goto L_282;
  if ((e.isErrorState)) goto L_2d4;
  if (!(e.isChildNode)) goto L_16d;
  if (!(o.isDILInitialStateScopeValueProperty(r))) goto L_16d;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  if ((R(e, r))) goto L_179;
  if (!(m(e, r))) goto L_1a4;
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  if (!((r === a))) goto L_257;
  goto L_25b;
  // [栈深重同步 6 -> 5]
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  goto L_2d4;
  // [栈深重同步 1 -> 0]
  this.applyChildrenPropertyOperation(e, n, i);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=401B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: p, s
function {
  this = this;
  if (!((r !== p.Remove))) goto L_a5;
  s(e.node, "children", undefined, r, t);
  if ((e.isErrorState)) goto L_a3;
  this.recompileChildren(e);
  return;
  if (!(("string" == typeof e.node))) goto L_f8;
  this.recompileNode(e);
  return;
  delete "children";
  if (!(e.isErrorState)) goto L_146;
  e.node;
  return;
  // [栈深重同步 0 -> 1]
  e.renderer.onChildrenChanged([]);
  return;
}

// fn <atom:0>  args=4 vars=11 closure=6 cpool=0 bc=1052B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, o
// locals: n, t#1, t#2, i, d, i#1, this
// closure: h, p, g, f, v, s
function {
  this = this;
  let i#1;
  let n;
  if (!((undefined === r))) goto L_1d;
  throw new Error("DIL children patches must target a numeric child index.");
  n = h(e.node);
  if (!((t === p.Remove))) goto L_177;
  let t#1;
  g(n, r);
  if (!(e.isErrorState)) goto L_9a;
  return;
  t#1 = e.renderer.children.slice();
  t#1.splice(r, 1);
  e.renderer.onChildrenChanged(t#1);
  return;
  if (!((t === p.Write))) goto L_2fd;
  let d;
  let i;
  let t#2;
  t#2 = f(o);
  v(n, r, t#2);
  if (!(e.isErrorState)) goto L_1de;
  return;
  i = e.renderer.children.slice();
  d = this.compileChildNode(e, t#2, r);
  if (!((r === i.length))) goto L_2a7;
  goto L_2b1;
  // [栈深重同步 1 -> 0]
  i[r] = d;
  d;
  e.renderer.onChildrenChanged(i);
  return;
  s(n, String(r), r, t, o);
  if (!(e.isErrorState)) goto L_336;
  return;
  i#1 = e.renderer.children.slice();
  i#1[r] = this.compileChildNode(e, n[r], r);
  e.renderer.onChildrenChanged(i#1);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=9 cpool=0 bc=408B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: n, p
// closure: i, w, u, O, C, d, o, R, a
function {
  let p;
  let n;
  if (!(("children" === r))) goto L_43;
  if (!((undefined === t))) goto L_43;
  return {kind: i.Children, parentNodeRef: e};
  n = w(u(e.node), r, t);
  if ((O(n))) goto L_7a;
  C(r);
  p = d.UpdateRendererProps;
  if (!(e.isChildNode)) goto L_116;
  if (!(o.isDILInitialStateScopeValueProperty(r))) goto L_116;
  p = d.UpdateInitialStateScope;
  goto L_148;
  // [栈深重同步 1 -> 0]
  if (!(R(e, r))) goto L_148;
  p = d.RecompileOwnerNode;
  d.RecompileOwnerNode;
  if (!((r === a))) goto L_189;
  goto L_18a;
  // [栈深重同步 2 -> 1]
  return {kind: i.PropertyValue, value: n, ownerNodeRef: e, propertyNameForRendererUpdate: r, mutation: p};
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=0 bc=556B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// locals: t, o, n
// closure: c, i, u, d, l, y
function {
  let n;
  let o;
  let t;
  if (!((undefined === r))) goto L_1d;
  throw new Error("DIL children traversal requires a numeric child index.");
  t = c(e.node, r);
  if (!(e.isErrorState)) goto L_cd;
  return {kind: i.PropertyValue, value: u(t), ownerNodeRef: e, propertyNameForRendererUpdate: undefined, mutation: d.UpdateRendererProps};
  o = e.renderer.children[r];
  if (!((undefined === o))) goto L_153;
  throw new Error("Cannot read DIL child renderer index ".concat(r, "."));
  n = {node: t, renderer: o, nodePath: e.nodePath.child(r), isChildNode: true, inlineTextFlow: l(e), parentRenderer: e.renderer, childIndex: r, isErrorState: y(o)};
  return {kind: i.Node, nodeRef: n};
}

// fn <atom:0>  args=3 vars=4 closure=6 cpool=0 bc=346B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: o
// closure: w, O, C, i, d, N
function {
  let o;
  o = w(e.value, r, t);
  if ((O(o))) goto L_36;
  C(r);
  if (!((e.propertyNameForRendererUpdate == null))) goto L_b6;
  e.propertyNameForRendererUpdate;
  if (!((e.mutation === d.UpdateRendererProps))) goto L_132;
  if (!(N(e, r))) goto L_132;
  goto L_154;
  // [栈深重同步 2 -> 1]
  return {kind: i.PropertyValue, value: o, ownerNodeRef: e.ownerNodeRef, propertyNameForRendererUpdate: r, mutation: e.mutation};
}

// fn <atom:0>  args=1 vars=5 closure=4 cpool=0 bc=470B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: r, t, r#1, this
// closure: n, o, u, t
function {
  this = this;
  try { // catch -> L_12d
  let t;
  let r;
  r = n.getDILInitialStateScopeWidgetRenderer(e.renderer);
  t = o.readInitialStateValue(u(e.node));
  if (!((undefined !== t))) goto L_129;
  if (!((r == null))) goto L_b5;
  r;
  goto L_d6;
  if (!((undefined !== undefined.stateScope))) goto L_129;
  this.pendingInitialStateUpdates.set(r, t);
  return undefined;
  <?>;
  goto L_1af;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_1ae
  if ((!t.isDILDiagnosticError(r#1))) goto L_1a7;
  if (!(("DIL JSON parse" !== r#1.details.phase))) goto L_1ab;
  throw r#1;
  <?>;
  goto L_1af;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.recompileNode(e);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=0 bc=799B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: r, t, o, i, this
// closure: n, y
function {
  this = this;
  let i;
  let o;
  let t;
  let r;
  r = n.unwrapDILWidgetRenderer(e.parentRenderer);
  t = this.options.compileNode(e.node, e.isChildNode, e.nodePath, r, e.inlineTextFlow);
  e.renderer = t;
  e.isErrorState = y(t);
  if (!((undefined === e.parentRenderer))) goto L_23f;
  this.pendingInitialStateUpdates.clear();
  this.rootRenderer = t;
  this.rootNode = e.node;
  this.contextStack[0] = this.makeRootContext();
  return;
  o = e.childIndex;
  i = e.parentRenderer.children.slice();
  i[o] = t;
  e.parentRenderer.onChildrenChanged(i);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: r, t
// closure: this, e
function {
  return this.compileChildNode(e, r, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=276B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: r, this
function {
  this = this;
  let r;
  if (!(("string" == typeof e.node))) goto L_58;
  this.recompileNode(e);
  return;
  if (!((e.node.children == null))) goto L_a3;
  e.node.children;
  r = [].map(function <atom:0>);
  e.renderer.onChildrenChanged(r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=220B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// locals: this
// closure: n, l
function {
  this = this;
  return this.options.compileNode(r, true, e.nodePath.child(t), n.unwrapDILWidgetRenderer(e.renderer), l(e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=317B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: r
// locals: this
// closure: e
function {
  this = this;
  this.pendingInitialStateUpdates.clear();
  this.rootNode = r;
  this.rootRenderer = this.options.compileNode(r, false, e.DILNodePath.root(), undefined, false);
  this.contextStack[0] = this.makeRootContext();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=278B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// locals: r, this
// closure: e, y, i
function {
  this = this;
  let r;
  r = {node: this.rootNode, renderer: this.rootRenderer, nodePath: e.DILNodePath.root(), isChildNode: false, inlineTextFlow: false, parentRenderer: undefined, childIndex: undefined, isErrorState: y(this.rootRenderer)};
  return {kind: i.Node, nodeRef: r};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// locals: this
function {
  this = this;
  return this.contextStack[(this.contextStack.length - 1)];
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=157B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  if ((e.inlineTextFlow)) goto L_9c;
  if (!(("string" != typeof e.node))) goto L_9c;
  return ("Inline" === e.node.type);
}

// fn s  args=5 vars=5 closure=6 cpool=0 bc=174B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, o, n
// closure: p, S, E, w, I, P
function {
  if (!((o !== p.Append))) goto L_9a;
  if (!((o !== p.Remove))) goto L_91;
  if (!((o !== p.Truncate))) goto L_7e;
  goto L_ad;
  // [栈深重同步 1 -> 0]
  goto L_ad;
  // [栈深重同步 1 -> 0]
  goto L_ad;
  // [栈深重同步 1 -> 0]
  S(e, r, t, P(w(e, r, t), n));
  return;
}

// fn c  args=2 vars=3 closure=0 cpool=0 bc=143B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// locals: t
function {
  let t;
  if (!(("string" == typeof e))) goto L_1c;
  throw new Error("Cannot read children from a DIL text node.");
  t = e.children;
  if (((null == t))) goto L_4e;
  if (!((r >= t.length))) goto L_89;
  throw new Error("Cannot read DIL child index ".concat(r, "."));
  return t[r];
}

// fn h  args=1 vars=2 closure=0 cpool=0 bc=168B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// locals: r
function {
  let r;
  if (!(("string" == typeof e))) goto L_1c;
  throw new Error("Cannot mutate children on a DIL text node.");
  r = e;
  if (!((undefined !== r.children))) goto L_6e;
  if (((null !== r.children))) goto L_82;
  r.children = [];
  [];
  return r.children;
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=27B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  if (!(("string" == typeof e))) goto L_19;
  throw new Error("Cannot enter properties on a DIL text node.");
  return e;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=34B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// closure: D
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  if (!(D(e))) goto L_13;
  return e;
  throw new Error("DIL incremental compile patches must provide a string or object widget subtree.");
}

// fn y  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// closure: r
function {
  return (e === r.EMPTY_WIDGET_RENDERER_INTERNAL);
}

// fn R  args=2 vars=2 closure=1 cpool=0 bc=77B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// closure: o
function {
  if (!(e.isChildNode)) goto L_4c;
  return o.isDILInitialStateScopeWrapperProperty(r);
}

// fn m  args=2 vars=2 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// closure: a
function {
  if (!(e.isChildNode)) goto L_2b;
  return (r === a);
}

// fn N  args=2 vars=2 closure=1 cpool=0 bc=150B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// closure: o
function {
  if (!(e.ownerNodeRef.isChildNode)) goto L_95;
  if (!((undefined === e.propertyNameForRendererUpdate))) goto L_95;
  return o.isDILInitialStateScopeWrapperProperty(r);
}

// fn w  args=3 vars=3 closure=1 cpool=0 bc=232B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// closure: O
function {
  if (!(Array.isArray(e))) goto L_35;
  if (!((undefined !== t))) goto L_35;
  return e[t];
  if (!(O(e))) goto L_af;
  if (!(Object.prototype.hasOwnProperty.call(e, r))) goto L_ad;
  return e[r];
  return undefined;
  throw new Error("Cannot read property "".concat(r, "" from a non-container value."));
}

// fn S  args=4 vars=4 closure=3 cpool=0 bc=126B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t, o
// closure: v, O, x
function {
  if (!(Array.isArray(e))) goto L_38;
  if (!((undefined !== t))) goto L_38;
  v(e, t, o);
  return;
  if (!(!O(e))) goto L_77;
  throw new Error("Cannot write property "".concat(r, "" on a non-container value."));
  x(e, r, o);
  return;
}

// fn I  args=3 vars=3 closure=2 cpool=0 bc=123B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
// closure: g, O
function {
  if (!(Array.isArray(e))) goto L_37;
  if (!((undefined !== t))) goto L_37;
  g(e, t);
  return;
  if (!(!O(e))) goto L_76;
  throw new Error("Cannot remove property "".concat(r, "" from a non-container value."));
  delete r;
  e;
  return;
}

// fn C  args=1 vars=1 closure=0 cpool=0 bc=57B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  throw new Error("Cannot enter missing or non-container JSON patch property "".concat(e, ""."));
}

// fn v  args=3 vars=3 closure=0 cpool=0 bc=123B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
function {
  if (!((r > e.length))) goto L_46;
  throw new Error("Cannot write array index ".concat(r, " past length ", e.length, "."));
  if (!((r !== e.length))) goto L_54;
  e[r] = t;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  e.push(t);
  return;
}

// fn g  args=2 vars=2 closure=0 cpool=0 bc=110B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
function {
  if (!((r >= e.length))) goto L_46;
  throw new Error("Cannot remove array index ".concat(r, " from length ", e.length, "."));
  e.splice(r, 1);
  return;
}

// fn P  args=2 vars=4 closure=2 cpool=0 bc=314B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
// locals: t, t#1
// closure: D, x
function {
  if (!((undefined === e))) goto L_7;
  return r;
  if (!(("string" == typeof e))) goto L_1f;
  if (!(("string" == typeof r))) goto L_1f;
  return (e + r);
  if (!(Array.isArray(e))) goto L_dc;
  if (!(Array.isArray(r))) goto L_b3;
  let t;
  for (const t of r) {
    e.push(t);
  }
  return e;
  e.push(r);
  return e;
  if (!(D(e))) goto L_12b;
  if (!(D(r))) goto L_12b;
  let t#1;
  for (const t#1 of Object.keys(r)) {
    x(e, t#1, r[t#1]);
  }
  return e;
  throw new Error("Cannot append incompatible JSON patch values.");
}

// fn x  args=3 vars=3 closure=0 cpool=0 bc=89B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r, t
function {
  if (!(("__proto__" !== r))) goto L_11;
  e[r] = t;
  goto L_58;
  // [栈深重同步 1 -> 0]
  Object.defineProperty(e, r, {configurable: true, enumerable: true, value: t, writable: true});
  return;
}

// fn E  args=2 vars=2 closure=0 cpool=0 bc=164B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e, r
function {
  if (!(("string" == typeof e))) goto L_31;
  return e.slice(0, r);   // tail call
  if (!(Array.isArray(e))) goto L_95;
  e.length = Math.min(e.length, r);
  return e;
  throw new Error("The truncate operation requires an existing string or array value.");
}

// fn O  args=1 vars=1 closure=1 cpool=0 bc=50B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
// closure: D
function {
  if ((D(e))) goto L_31;
  return Array.isArray(e);
}

// fn D  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=36 closure=0 cpool=52 bc=517B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// args: require, module, exports
// locals: e, r, t, o, n, i, d, a, p, DILIncrementalCompileJSONPatchVisitor, <class_fields_init>, DILIncrementalCompileJSONPatchVisitor#1, l, s, c, h, u, f, y, R, m, N, w, S, I, C, v, g, P, x, E, O, D
function {
  l = function l;
  s = function s;
  c = function c;
  h = function h;
  u = function u;
  f = function f;
  y = function y;
  R = function R;
  m = function m;
  N = function N;
  w = function w;
  S = function S;
  I = function I;
  C = function C;
  v = function v;
  g = function g;
  P = function P;
  x = function x;
  E = function E;
  O = function O;
  D = function D;
  let DILIncrementalCompileJSONPatchVisitor#1;
  let a;
  let n;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILIncrementalCompileJSONPatchVisitor = undefined;
  e = require("./DILNodePath");
  r = require("./DILEmptyWidgetRenderer");
  t = require("./DILError");
  o = require("./DILInitialStateScopeWidgetRenderer");
  n = require("./DILWidgetRendererUnwrap");
  if ((i)) goto L_e0;
  i = {};
  !function <atom:0>({});
  if ((d)) goto L_ee;
  d = {};
  function <atom:0>({});
  a = "props";
  if ((p)) goto L_102;
  p = {};
  !function <atom:0>({});
  let DILIncrementalCompileJSONPatchVisitor;
  let <class_fields_init>;
  class DILIncrementalCompileJSONPatchVisitor extends undefined { ... }
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyInitialStateUpdates = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.beginSubObject = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.endSubObject = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onReplaceRoot = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onAppendRoot = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onRemoveRoot = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onTruncateRoot = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onAppend = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onInsert = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onReplace = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onRemove = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.onTruncate = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyOperation = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyPropertyValueOperation = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyNodePropertyOperation = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyChildrenPropertyOperation = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.applyChildSlotOperation = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.enterNodeProperty = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.enterChildNode = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.enterPropertyValue = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.updateInitialStateScopeOrRecompile = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.recompileNode = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.recompileChildren = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.compileChildNode = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.replaceRoot = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.makeRootContext = function <atom:0>;
  <proto:DILIncrementalCompileJSONPatchVisitor>.currentContext = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILIncrementalCompileJSONPatchVisitor>;
  DILIncrementalCompileJSONPatchVisitor = function <atom:0>;
  // close_loc <class_fields_init>
  DILIncrementalCompileJSONPatchVisitor#1 = function <atom:0>;
  exports.DILIncrementalCompileJSONPatchVisitor = DILIncrementalCompileJSONPatchVisitor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILIncrementalCompileJSONPatchVisitor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
