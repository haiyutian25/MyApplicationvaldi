// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  e.TextElement = 0;
  e[0] = "TextElement";
  e.InlineAction = 1;
  e[1] = "InlineAction";
  e.Passthrough = 2;
  e[2] = "Passthrough";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=106B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, b
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(t);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(t);
  this.element = e;
  this.celExpressionResolver = n;
  this.editableActionExpressions = new Map();
  b = <b_new>;
  this.textSelectionParticipantNamespace = (b++);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=91B file=dil_text/src/rendering/DILTextWidgetRenderer
// closure: this, v, r
function {
  if (!((v == null))) goto L_2d;
  v;
  goto L_4e;
  if (!((undefined.inlineViews == null))) goto L_56;
  undefined.inlineViews;
  this.renderInlineViews([], r);
  return;
}

// fn <atom:0>  args=2 vars=27 closure=13 cpool=1 bc=4181B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: n, r
// locals: l, d, a, o, l#1, c, h, u, g, T, I, m, v, C, f, R, w, y, b, D, W, P, M, V, this
// closure: o, i, j, S, s, L, A, U, $, e, x, t, p
function {
  this = this;
  let a;
  let d;
  let l;
  l = o.DILRenderChildCounter.fromRenderState(r);
  d = i.getDILAutoSpacingContext(r);
  if (!((l == null))) goto L_88;
  l;
  goto L_d5;
  a = undefined.beginComponent({name: this.name});
  try { // catch -> L_101d
  let V;
  let M;
  let P;
  let W;
  let D;
  let b;
  let y;
  let w;
  let R;
  let f;
  let C;
  let v;
  let m;
  let I;
  let T;
  let g;
  let u;
  let h;
  let c;
  let l#1;
  let o;
  o = this.createElementRenderModel(n, r);
  l#1 = o.viewModel;
  c = this.resolveEditable(l#1.editable, n);
  h = j(l#1.isLoading);
  u = S.rememberDILStreamingTextAnimation(s.getDILStreamingAnimation(r), o.rememberKeys, s.isDILEnhancedStreamingEnabled(r));
  if (!((undefined === c))) goto L_284;
  g = (true !== h);
  T = this.resolveNativeStyle(l#1);
  I = L.readTextDecorationFromValue(j(l#1.lineThrough), l#1.underline);
  if (!(g)) goto L_355;
  goto L_356;
  // [栈深重同步 1 -> 0]
  m = undefined;
  if (!(g)) goto L_3b9;
  if (!((undefined === m))) goto L_3b9;
  if (!(o.hasPassthroughContent)) goto L_3b9;
  goto L_3ba;
  // [栈深重同步 1 -> 0]
  v = undefined;
  if (!(g)) goto L_423;
  if (!((undefined === m))) goto L_423;
  if (!((undefined === v))) goto L_423;
  goto L_424;
  // [栈深重同步 1 -> 0]
  C = undefined;
  if (!((m == null))) goto L_4bb;
  m;
  if (!((v == null))) goto L_43c;
  v;
  goto L_45d;
  if (!((undefined.value == null))) goto L_4bb;
  undefined.value;
  if (!((C == null))) goto L_46d;
  C;
  goto L_48e;
  if (!((undefined.value == null))) goto L_4bb;
  undefined.value;
  f = A(l#1.value);
  if (!((v == null))) goto L_4c8;
  v;
  goto L_4e9;
  if (!((undefined.selectionAtomicRanges == null))) goto L_51a;
  undefined.selectionAtomicRanges;
  if (!((C == null))) goto L_4f9;
  C;
  goto L_51a;
  R = undefined.selectionAtomicRanges;
  w = this.resolveLineHeight(l#1);
  if (!((undefined === w))) goto L_579;
  goto L_57a;
  // [栈深重同步 1 -> 0]
  y = undefined;
  b = this.resolveAutoSpacingMargin(a, d);
  D = U(l#1.minLines);
  if (!((undefined === m))) goto L_5e0;
  goto L_5e9;
  // [栈深重同步 1 -> 0]
  if (!((D == null))) goto L_5e9;
  D;
  W = 1;
  P = $(l#1.width);
  if (!(("column" === i.getDILFlexDirection(r)))) goto L_646;
  goto L_647;
  // [栈深重同步 1 -> 0]
  M = undefined;
  if (!(!s.isDILStreamingAnimationEnabled(u))) goto L_677;
  V = undefined;
  e.beginComponent(x.DILTextComponent, t, undefined, undefined);
  e.setViewModelProperty("accessibilityCategory", this.element.accessibilityCategory);
  e.setViewModelProperty("autoSpacingRole", this.element.autoSpacingRole);
  e.setViewModelProperty("value", f);
  e.setViewModelProperty("width", P);
  e.setViewModelProperty("textAlign", L.readTextAlignFromValue(l#1.textAlign));
  e.setViewModelProperty("truncate", j(l#1.truncate));
  e.setViewModelProperty("maxLines", U(l#1.maxLines));
  e.setViewModelProperty("minLines", W);
  if (!((undefined === m))) goto L_98d;
  goto L_992;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("textOverflow", "clip");
  if (!((d == null))) goto L_9cf;
  d;
  goto L_9f0;
  if (!(("column" === undefined.direction))) goto L_9f8;
  goto L_9f9;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("marginTop", undefined);
  if (!((d == null))) goto L_a36;
  d;
  goto L_a57;
  if (!(("row" === undefined.direction))) goto L_a5f;
  goto L_a60;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("marginLeft", undefined);
  e.setViewModelProperty("flexShrink", M);
  e.setViewModelProperty("animationsEnabled", V);
  e.setViewModelProperty("selectionAtomicRanges", R);
  e.setViewModelProperty("selectionParticipantId", this.resolveTextSelectionParticipantId(n));
  e.setViewModelProperty("selectionParticipantOrder", this.textSelectionParticipantNamespace);
  e.setViewModelProperty("lineHeight", w);
  e.setViewModelProperty("lineHeightMultiple", y);
  e.setViewModelProperty("editable", c);
  e.setViewModelProperty("textDecoration", I);
  e.setViewModelProperty("font", T.font);
  e.setViewModelProperty("letterSpacing", T.letterSpacing);
  if (!((undefined === c))) goto L_d34;
  if (!((undefined === m))) goto L_d34;
  goto L_d58;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("color", T.color);
  e.setViewModelProperty("isLoading", h);
  e.setViewModelProperty("loadingType", this.resolveLoadingType(l#1));
  e.setViewModelProperty("loadingWidth", $(l#1.loadingWidth));
  e.setViewModelProperty("loadingLineCount", U(l#1.loadingLineCount));
  e.setViewModelProperty("loadingLineHeight", this.resolveLoadingLineHeight(l#1));
  e.setViewModelProperty("loadingBlockHeight", this.resolveLoadingBlockHeight(l#1));
  if (!(!p.isDILTextSelectionSuppressed(r))) goto L_fb5;
  if ((!(false !== j(l#1.selectable)))) goto L_fbb;
  e.setViewModelProperty("suppressTextSelection", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  // close_loc v
  <?>;
  // gosub (finally 块) 4131
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 4131
  throw <?>;
  if (!((l == null))) goto L_102e;
  l;
  goto L_1052;
  undefined.popFrame();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.getValdiComponentKey(e) == null))) goto L_75;
  this.getValdiComponentKey(e);
  return "dil-text:".concat(this.textSelectionParticipantNamespace);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=216B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n
// closure: s, P, D
function {
  let n;
  if ((("text" !== e.element.autoSpacingRole))) goto L_9f;
  if (((e.children.length > 0))) goto L_9f;
  if (!(s.isDILStreamingAnimationEnabled(t))) goto L_a2;
  return;
  n = P(e.viewModel, false, false);
  if (!(D(n))) goto L_d6;
  return n;
  return undefined;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=536B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: this
// closure: n, z, j
function {
  this = this;
  if (!((null != e))) goto L_217;
  if (!((false !== e))) goto L_217;
  if (!(n.isCELMap(e))) goto L_217;
  if (!((e.$onBlur == null))) goto L_aa;
  e.$onBlur;
  if (!((e.$onChangeAction == null))) goto L_11e;
  e.$onChangeAction;
  if (!((e.$onFocus == null))) goto L_192;
  e.$onFocus;
  return {onBlur: this.resolveEditableAction(e.onBlur, t), onChangeAction: this.resolveEditableAction(e.onChangeAction, t), onFocus: this.resolveEditableAction(e.onFocus, t), pattern: z(e.pattern), placeholder: z(e.placeholder), autoSelect: j(e.autoSelect)};
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=59B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: r
// closure: t, n
function {
  let r;
  if (!((undefined === e))) goto L_b;
  goto L_31;
  // [栈深重同步 1 -> 0]
  r = t.subscopeWithValues(e);
  return n(r);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_text/src/rendering/DILTextWidgetRenderer
// closure: e
function {
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=2 bc=120B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, this
// closure: n
function {
  this = this;
  if (!((null != e))) goto L_77;
  if (!(("function" == typeof e))) goto L_13;
  return e;
  if (!(("string" == typeof e))) goto L_4a;
  let n;
  n = this.getEditableActionExpression(e);
  return function <atom:0>;
  if (!(n.isCELMap(e))) goto L_75;
  return function <atom:0>;
  return undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=244B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.editableActionExpressions.get(e);
  if (!((undefined === t))) goto L_ef;
  t = this.celExpressionResolver.getOrCompile(e);
  this.celExpressionResolver.getOrCompile(e);
  this.editableActionExpressions.set(e, t);
  return t;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=89B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.element.resolveNativeStyle == null))) goto L_4e;
  this.element.resolveNativeStyle;
  this.element;
  goto L_52;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, e) == null))) goto L_58;
  <?>.call(undefined, e);
  return {};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=52B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// closure: g
function {
  if (!((undefined !== t))) goto L_33;
  if (!((undefined !== e))) goto L_33;
  return g.resolveDILAutoSpacingChildMargin(t, e);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=155B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.element.resolveLineHeightMultiple == null))) goto L_4e;
  this.element.resolveLineHeightMultiple;
  this.element;
  goto L_52;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, e) == null))) goto L_9a;
  <?>.call(undefined, e);
  return this.element.lineHeightMultiple;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=155B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.element.resolveLineHeight == null))) goto L_4e;
  this.element.resolveLineHeight;
  this.element;
  goto L_52;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, e) == null))) goto L_9a;
  <?>.call(undefined, e);
  return this.element.lineHeight;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.element.resolveLoadingLineHeight == null))) goto L_4d;
  this.element.resolveLoadingLineHeight;
  this.element;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  if (!((this.element.resolveLoadingBlockHeight == null))) goto L_4d;
  this.element.resolveLoadingBlockHeight;
  this.element;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, e);
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=477B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: z, x
function {
  let t;
  t = z(e.loadingType);
  if (!((t === x.DILTextLoadingType.Placeholder))) goto L_b9;
  return x.DILTextLoadingType.Placeholder;
  if (!((t === x.DILTextLoadingType.Message))) goto L_14a;
  return x.DILTextLoadingType.Message;
  if (!((t === x.DILTextLoadingType.Indeterminate))) goto L_1db;
  return x.DILTextLoadingType.Indeterminate;
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=40B file=dil_text/src/rendering/DILTextWidgetRenderer
// closure: this, e, t, n
function {
  return this.buildAttributedText(e, t, n);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=88B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: this
// closure: I
function {
  this = this;
  // append([function <atom:0>, t, n], 3, e.rememberKeys)
  e.rememberKeys;
  return I.remember.apply(undefined, [function <atom:0>, t, n]);
}

// fn <atom:0>  args=3 vars=8 closure=3 cpool=0 bc=330B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, s, this
// closure: T, S, C
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  r = new T.AttributedTextBuilder();
  i = S.pushDILStreamingTextAnimation(r, t, n);
  o = [];
  s = {hasCurrentParagraphOutput: false, hasTrailingCollapsibleWhitespace: false, fontResolver: new C.DILTextFontResolver(), noWrap: false, preserveWhitespace: false, selectionAtomicRanges: o};
  this.appendAttributedText(e, r, s);
  S.popDILStreamingTextAnimation(r, i);
  return {value: r.build(), selectionAtomicRanges: o};
}

// fn <atom:0>  args=3 vars=9 closure=4 cpool=0 bc=405B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, l, d, this
// closure: T, S, s, C
function {
  this = this;
  let d;
  let l;
  let o;
  let i;
  let r;
  r = new T.AttributedTextBuilder();
  i = S.pushDILStreamingTextAnimation(r, n, s.isDILEnhancedStreamingEnabled(t));
  o = [];
  l = [];
  d = {hasCurrentParagraphOutput: false, hasTrailingCollapsibleWhitespace: false, fontResolver: new C.DILTextFontResolver(), noWrap: false, preserveWhitespace: false, selectionAtomicRanges: l, renderState: t, styleFrames: [], inlineViews: o};
  this.appendInlineAttributedText(e, r, d);
  S.popDILStreamingTextAnimation(r, i);
  return {value: r.build(), inlineViews: o, selectionAtomicRanges: l};
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=40B file=dil_text/src/rendering/DILTextWidgetRenderer
// closure: this, e, t, n
function {
  return this.buildInlineAttributedText(e, t, n);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=87B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: this
// closure: I
function {
  this = this;
  // append([function <atom:0>, n], 2, e.rememberKeys)
  e.rememberKeys;
  return I.remember.apply(undefined, [function <atom:0>, n]);
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=0 bc=292B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, e#1
// closure: i, O, c
function {
  let n;
  for (const n of e) {
    let e#1;
    e#1 = i.renderStateWithDILAutoSpacing(O(t, n.styleFrames), undefined);
    if (!(n.viewBackedInlineText)) goto L_113;
    goto L_116;
    // [栈深重同步 7 -> 6]
    n.renderer.onRender(n.celScope, e#1);
  }
  return;
}

// fn <atom:0>  args=3 vars=18 closure=3 cpool=0 bc=1953B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, s, l, d, a, c, h, p, u, r#1, i#1, u#1, this
// closure: m, P, M
function {
  this = this;
  let p;
  let h;
  let c;
  let a;
  let d;
  let l;
  let s;
  let o;
  let i;
  let r;
  r = e.viewModel;
  i = n.noWrap;
  o = n.preserveWhitespace;
  if ((n.noWrap)) goto L_db;
  n.noWrap = ("nowrap" === r.wrap);
  if ((n.preserveWhitespace)) goto L_17d;
  if (((true === r.preserveWhitespace))) goto L_17d;
  n.preserveWhitespace = (e.element === m.CodeElement);
  s = false;
  if (!(e.element.createsParagraph(r))) goto L_247;
  if (!(n.hasCurrentParagraphOutput)) goto L_247;
  t.appendText("
");
  s = true;
  true;
  n.hasCurrentParagraphOutput = false;
  n.hasTrailingCollapsibleWhitespace = false;
  false;
  l = t.getTextLength();
  d = {element: e.element, viewModel: r, rememberKeys: e.rememberKeys};
  n.styleFrames.push(d);
  a = n.fontResolver.pushedFontStyleCount;
  c = e.element.pushStyle(r, t, n.fontResolver);
  if (!(n.hasCurrentParagraphOutput)) goto L_434;
  h = P(r, n.preserveWhitespace, !n.hasTrailingCollapsibleWhitespace);
  p = M(h, n.noWrap);
  if (!((p.length > 0))) goto L_532;
  t.appendText(p);
  s = true;
  true;
  n.hasCurrentParagraphOutput = true;
  if (!(!n.preserveWhitespace)) goto L_528;
  if (!((true === r.__dilStringTextNode))) goto L_528;
  n.hasTrailingCollapsibleWhitespace = h.endsWith(" ");
  h.endsWith(" ");
  let u;
  u = 0;
  if (!((u < e.children.length))) goto L_63d;
  let i#1;
  let r#1;
  r#1 = e.children[u];
  if ((this.shouldSkipEdgeCollapsibleWhitespaceAroundViewBackedInlineChildren(e.children, u, n))) goto L_632;
  i#1 = this.appendInlineAttributedTextChild(r#1, t, n);
  if ((s)) goto L_618;
  s = i#1;
  i#1;
  if (!(i#1)) goto L_631;
  n.hasCurrentParagraphOutput = true;
  true;
  u = <u_new>;
  (u++);
  goto L_539;
  let u#1;
  u#1 = 0;
  if (!((u#1 < c))) goto L_67c;
  t.pop();
  u#1 = <u#1_new>;
  (u#1++);
  goto L_643;
  if (!((n.fontResolver.pushedFontStyleCount > a))) goto L_70f;
  n.fontResolver.popFontStyle();
  goto L_67c;
  this.appendAtomicSelectionRange(e, l, t, n);
  n.styleFrames.pop();
  n.noWrap = i;
  n.preserveWhitespace = o;
  return s;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=437B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: this
// closure: w
function {
  this = this;
  if (!((e.kind === w.Passthrough))) goto L_b5;
  return this.appendInlinePassthroughRenderer(e.renderer, e.celScope, t, n);   // tail call
  if (!((e.kind === w.InlineAction))) goto L_124;
  return this.appendInlineActionText(e.renderModel, t, n);   // tail call
  if (!((e.kind === w.TextElement))) goto L_1b4;
  return e.renderer.appendInlineAttributedText(e.renderModel, t, n);   // tail call
  e.kind;
  return;
}

// fn <atom:0>  args=4 vars=11 closure=1 cpool=0 bc=1441B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, s, l, e#1, d, this
// closure: DILTextWidgetRenderer
function {
  this = this;
  let d;
  let l;
  let s;
  let o;
  let i;
  i = DILTextWidgetRenderer.getScopedChild(e, t);
  o = DILTextWidgetRenderer.getTextChild(i.renderer);
  if (!((undefined !== o))) goto L_128;
  return o.appendInlineAttributedText(o.createElementRenderModel(i.celScope, r.renderState), n, r);   // tail call
  s = this.createInlineActionRenderModel(i.renderer, i.celScope, r.renderState);
  if (!((undefined !== s))) goto L_1eb;
  return this.appendInlineActionText(s, n, r);   // tail call
  l = DILTextWidgetRenderer.getTransparentChild(i.renderer);
  if (!((undefined !== l))) goto L_30b;
  let e#1;
  e#1 = l.getDILTransparentWidgetChildren(i.celScope);
  if (!((undefined !== e#1))) goto L_30a;
  return this.appendInlinePassthroughChildren(e#1.children, e#1.celScope, n, r);
  d = DILTextWidgetRenderer.getInlineTextContent(i.renderer, i.celScope);
  if (!((undefined !== d))) goto L_52d;
  if ((d.viewBacked)) goto L_3fe;
  if (((undefined !== d.inlineViewVerticalAlignment))) goto L_3fe;
  if (!((1 === d.plainTextBehavior))) goto L_4bc;
  return this.appendInlineView(i.renderer, i.celScope, n, r, d.viewBacked, d.inlineViewVerticalAlignment);
  return this.appendInlinePassthroughChildren(d.children, d.celScope, n, r);
  return this.appendInlineView(i.renderer, i.celScope, n, r, false, undefined);
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=0 bc=88B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, e#1, this
function {
  this = this;
  let i;
  i = false;
  let o;
  for (const o of e) {
    let e#1;
    e#1 = this.appendInlinePassthroughRenderer(o, t, n, r);
    if ((i)) goto L_49;
    i = e#1;
    e#1;
  }
  return i;
}

// fn <atom:0>  args=6 vars=6 closure=0 cpool=0 bc=234B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r, i, o
function {
  r.hasTrailingCollapsibleWhitespace = false;
  if (!((o == null))) goto L_5a;
  o;
  n.appendInlineView(r.inlineViews.length, 0);
  // append([], 0, r.styleFrames)
  r.styleFrames;
  r.inlineViews.push({renderer: e, celScope: t, styleFrames: [], viewBackedInlineText: i});
  return true;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=318B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, s, this
// closure: DILTextWidgetRenderer
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  if ((n.preserveWhitespace)) goto L_60;
  if (!(!DILTextWidgetRenderer.isCollapsibleWhitespaceTextChild(e[t]))) goto L_65;
  return false;
  r = DILTextWidgetRenderer.findNearestNonWhitespaceTextChild(e, t, -1);
  i = DILTextWidgetRenderer.findNearestNonWhitespaceTextChild(e, t, 1);
  if (!((undefined !== r))) goto L_ed;
  o = this.childHasViewBackedInlineContent(r);
  if (!((undefined !== i))) goto L_120;
  s = this.childHasViewBackedInlineContent(i);
  if (!((undefined === r))) goto L_12d;
  if ((s)) goto L_13d;
  if (!(o)) goto L_13d;
  return (undefined === i);
}

// fn <atom:0>  args=2 vars=9 closure=1 cpool=0 bc=1052B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r, e#1, i, o, s, this
// closure: DILTextWidgetRenderer
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  let n;
  n = DILTextWidgetRenderer.getScopedChild(e, t);
  r = DILTextWidgetRenderer.getTransparentChild(n.renderer);
  if (!((undefined !== r))) goto L_156;
  let e#1;
  e#1 = r.getDILTransparentWidgetChildren(n.celScope);
  if (!((undefined !== e#1))) goto L_156;
  return this.hasViewBackedInlineRendererChild(e#1.children, e#1.celScope);   // tail call
  i = DILTextWidgetRenderer.getTextChild(n.renderer);
  if (!((undefined !== i))) goto L_217;
  return this.hasViewBackedInlineRendererChild(i.children, n.celScope);   // tail call
  o = DILTextWidgetRenderer.getInlineActionChild(n.renderer);
  if (!((undefined !== o))) goto L_2d9;
  return this.hasViewBackedInlineRendererChild(o.children, n.celScope);   // tail call
  s = DILTextWidgetRenderer.getInlineTextContent(n.renderer, n.celScope);
  if (!((undefined !== s))) goto L_41b;
  if ((!!s.viewBacked)) goto L_41b;
  if (!((1 !== s.plainTextBehavior))) goto L_41b;
  return this.hasViewBackedInlineRendererChild(s.children, s.celScope);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=69B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, this
function {
  this = this;
  let n;
  for (const n of e) {
    if (!(this.hasViewBackedInlineRenderer(n, t))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of e.children) {
    if (!(this.childHasViewBackedInlineContent(t))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=398B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
// closure: w
function {
  this = this;
  if (!((e.kind === w.Passthrough))) goto L_b3;
  return this.hasViewBackedInlineRenderer(e.renderer, e.celScope);   // tail call
  if (!((e.kind === w.InlineAction))) goto L_120;
  return this.inlineActionHasViewBackedInlineContent(e.renderModel);   // tail call
  if (!((e.kind === w.TextElement))) goto L_18d;
  return this.hasViewBackedInlineContent(e.renderModel);   // tail call
  e.kind;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of e.children) {
    if (!(this.inlineRenderModelHasViewBackedInlineContent(t))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=265B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: this
// closure: w
function {
  this = this;
  if (!((e.kind === w.Passthrough))) goto L_70;
  return this.childHasViewBackedInlineContent(e);   // tail call
  if (!((e.kind === w.InlineAction))) goto L_bc;
  return this.inlineActionHasViewBackedInlineContent(e);   // tail call
  if (!((e.kind === w.TextElement))) goto L_108;
  return this.hasViewBackedInlineContent(e);   // tail call
  e.kind;
  return;
}

// fn <atom:0>  args=3 vars=17 closure=4 cpool=0 bc=1615B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, s, l, d, a, c, h, p, e#1, r#1, p#1, this
// closure: m, P, M, DILTextWidgetRenderer
function {
  this = this;
  let h;
  let c;
  let a;
  let d;
  let l;
  let s;
  let o;
  let i;
  let r;
  r = e.viewModel;
  i = n.noWrap;
  o = n.preserveWhitespace;
  if ((n.noWrap)) goto L_d8;
  n.noWrap = ("nowrap" === r.wrap);
  if ((n.preserveWhitespace)) goto L_17a;
  if (((true === r.preserveWhitespace))) goto L_17a;
  n.preserveWhitespace = (e.element === m.CodeElement);
  s = false;
  if (!(e.element.createsParagraph(r))) goto L_244;
  if (!(n.hasCurrentParagraphOutput)) goto L_244;
  t.appendText("
");
  s = true;
  true;
  n.hasCurrentParagraphOutput = false;
  n.hasTrailingCollapsibleWhitespace = false;
  false;
  l = t.getTextLength();
  d = n.fontResolver.pushedFontStyleCount;
  a = e.element.pushStyle(r, t, n.fontResolver);
  if (!(n.hasCurrentParagraphOutput)) goto L_38e;
  c = P(r, n.preserveWhitespace, !n.hasTrailingCollapsibleWhitespace);
  h = M(c, n.noWrap);
  if (!((h.length > 0))) goto L_48c;
  t.appendText(h);
  s = true;
  true;
  n.hasCurrentParagraphOutput = true;
  if (!(!n.preserveWhitespace)) goto L_482;
  if (!((true === r.__dilStringTextNode))) goto L_482;
  n.hasTrailingCollapsibleWhitespace = c.endsWith(" ");
  c.endsWith(" ");
  let p;
  for (const p of e.children) {
    let e#1;
    e#1 = DILTextWidgetRenderer.getInlineChildRenderModel(p);
    if (!((undefined !== e#1))) continue;
    let r#1;
    r#1 = this.appendInlineRenderModel(e#1, t, n);
    if ((s)) goto L_527;
    s = r#1;
    r#1;
  }
  let p#1;
  p#1 = 0;
  if (!((p#1 < a))) goto L_571;
  t.pop();
  p#1 = <p#1_new>;
  (p#1++);
  goto L_538;
  if (!((n.fontResolver.pushedFontStyleCount > d))) goto L_604;
  n.fontResolver.popFontStyle();
  goto L_571;
  this.appendAtomicSelectionRange(e, l, t, n);
  n.noWrap = i;
  n.preserveWhitespace = o;
  return s;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=250B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i
function {
  let i;
  if (!((e.element.resolveTextSelectionBehavior == null))) goto L_54;
  e.element.resolveTextSelectionBehavior;
  e.element;
  goto L_79;
  // [栈深重同步 2 -> 3]
  if (!(("atomic" !== <?>.call(undefined, e.viewModel)))) goto L_7d;
  return;
  i = n.getTextLength();
  if (!((i > t))) goto L_f9;
  r.selectionAtomicRanges.push([t, i]);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=472B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: this
// closure: w, DILTextWidgetRenderer
function {
  this = this;
  if (!((e.kind === w.Passthrough))) goto L_e7;
  if (!(!!DILTextWidgetRenderer.isInlineAppendContext(n))) goto L_e6;
  return this.appendInlinePassthroughRenderer(e.renderer, e.celScope, t, n);
  if (!((e.kind === w.InlineAction))) goto L_135;
  return this.appendInlineActionText(e, t, n);   // tail call
  if (!((e.kind === w.TextElement))) goto L_1d7;
  if (!(DILTextWidgetRenderer.isInlineAppendContext(n))) goto L_1ae;
  return this.appendInlineAttributedText(e, t, n);
  return this.appendAttributedText(e, t, n);
  e.kind;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=347B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, e#1, this
// closure: v
function {
  this = this;
  let r;
  if (!((undefined !== e.action))) goto L_99;
  t.pushOnTap(v.makeDILTextActionTap(e.action));
  r = false;
  let i;
  for (const i of e.children) {
    let e#1;
    e#1 = this.appendInlineRenderModel(i, t, n);
    if ((r)) goto L_fe;
    r = e#1;
    e#1;
  }
  if (!((undefined !== e.action))) goto L_156;
  t.pop();
  return r;
}

// fn <atom:0>  args=2 vars=10 closure=4 cpool=0 bc=460B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r, i, o, s, l, t#1, this
// closure: H, P, Y, w
function {
  this = this;
  let s;
  let o;
  let i;
  let r;
  let n;
  n = this.createElementViewModel(e, t);
  r = H(t, n);
  i = [];
  if (((P(n, false, false).length > 0))) goto L_5b;
  o = Y(n);
  s = false;
  let l;
  for (const l of this.children) {
    let t#1;
    t#1 = this.appendChildRenderModels(l, e, r, i);
    if ((o)) goto L_ec;
    o = t#1.hasTextOutput;
    t#1.hasTextOutput;
    if ((s)) goto L_11c;
    s = t#1.hasPassthroughContent;
    t#1.hasPassthroughContent;
  }
  return {kind: w.TextElement, element: this.element, viewModel: n, children: i, rememberKeys: this.createRememberKeys(n, i), hasTextOutput: o, hasPassthroughContent: s};
}

// fn <atom:0>  args=3 vars=13 closure=2 cpool=0 bc=643B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, i, o, s, l, d, a, c, e#1, this
// closure: DILTextWidgetRenderer, w
function {
  this = this;
  let a;
  let d;
  let l;
  let s;
  let o;
  let i;
  let r;
  r = DILTextWidgetRenderer.getScopedChild(e, t);
  i = DILTextWidgetRenderer.getInlineActionChild(r.renderer);
  if (!((undefined === i))) goto L_96;
  return;
  o = i.getDILInlineTextAction(r.celScope);
  if (!((undefined === o))) goto L_ea;
  return;
  s = o.action;
  l = [];
  d = false;
  a = false;
  let c;
  for (const c of i.children) {
    let e#1;
    e#1 = this.appendInlineRenderModels(c, r.celScope, n, l);
    if ((d)) goto L_1ca;
    d = e#1.hasTextOutput;
    e#1.hasTextOutput;
    if ((a)) goto L_1fa;
    a = e#1.hasPassthroughContent;
    e#1.hasPassthroughContent;
  }
  return {kind: w.InlineAction, action: s, children: l, rememberKeys: DILTextWidgetRenderer.createInlineActionRememberKeys(s, l), hasTextOutput: d, hasPassthroughContent: a};
}

// fn <atom:0>  args=4 vars=11 closure=3 cpool=0 bc=1061B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, e#1, s, l, e#2, this
// closure: DILTextWidgetRenderer, w, G
function {
  this = this;
  let l;
  let s;
  let o;
  let i;
  i = DILTextWidgetRenderer.getScopedChild(e, t);
  o = DILTextWidgetRenderer.getTextChild(i.renderer);
  if (!((undefined !== o))) goto L_1ba;
  let e#1;
  e#1 = o.createElementRenderModel(i.celScope, n);
  r.push({kind: w.TextElement, renderer: o, renderModel: e#1, celScope: i.celScope});
  return {hasTextOutput: e#1.hasTextOutput, hasPassthroughContent: e#1.hasPassthroughContent};
  s = this.createInlineActionRenderModel(e, t, n);
  if (!((undefined !== s))) goto L_298;
  r.push({kind: w.InlineAction, renderModel: s});
  return {hasTextOutput: s.hasTextOutput, hasPassthroughContent: s.hasPassthroughContent};
  l = DILTextWidgetRenderer.getTransparentChild(i.renderer);
  if (!((undefined !== l))) goto L_3bb;
  let e#2;
  e#2 = l.getDILTransparentWidgetChildren(i.celScope);
  if (!((undefined !== e#2))) goto L_3b7;
  return this.appendTransparentChildRenderModels(e#2.children, e#2.celScope, n, r);
  return G;
  r.push({kind: w.Passthrough, renderer: e, celScope: t});
  return {hasTextOutput: false, hasPassthroughContent: true};
}

// fn <atom:0>  args=4 vars=11 closure=3 cpool=0 bc=916B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, e#1, s, l, d, this
// closure: DILTextWidgetRenderer, w, G
function {
  this = this;
  let d;
  let l;
  let s;
  let o;
  let i;
  i = DILTextWidgetRenderer.getScopedChild(e, t);
  o = DILTextWidgetRenderer.getTextChild(i.renderer);
  if (!((undefined !== o))) goto L_15f;
  let e#1;
  e#1 = o.createElementRenderModel(i.celScope, n);
  r.push(e#1);
  return {hasTextOutput: e#1.hasTextOutput, hasPassthroughContent: e#1.hasPassthroughContent};
  s = this.createInlineActionRenderModel(e, t, n);
  if (!((undefined !== s))) goto L_20d;
  r.push(s);
  return {hasTextOutput: s.hasTextOutput, hasPassthroughContent: s.hasPassthroughContent};
  l = DILTextWidgetRenderer.getTransparentChild(i.renderer);
  if (!((undefined === l))) goto L_2cb;
  r.push({kind: w.Passthrough, renderer: e, celScope: t});
  return {hasTextOutput: false, hasPassthroughContent: true};
  d = l.getDILTransparentWidgetChildren(i.celScope);
  if (!((undefined === d))) goto L_323;
  return G;
  return this.appendTransparentInlineRenderModels(d.children, d.celScope, n, r);
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=88B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, this
// closure: J
function {
  this = this;
  let i;
  i = {hasTextOutput: false, hasPassthroughContent: false};
  let o;
  for (const o of e) {
    J(i, this.appendChildRenderModels(o, t, n, r));
  }
  return i;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=88B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n, r
// locals: i, o, this
// closure: J
function {
  this = this;
  let i;
  i = {hasTextOutput: false, hasPassthroughContent: false};
  let o;
  for (const o of e) {
    J(i, this.appendInlineRenderModels(o, t, n, r));
  }
  return i;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=615B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r, r#1, this
// closure: w
function {
  this = this;
  let n;
  n = [this.element];
  let r;
  for (const r of this.element.properties) {
    n.push(r, e[r]);
  }
  n.push(t.length);
  let r#1;
  for (const r#1 of t) {
    if (!((r#1.kind === w.Passthrough))) goto L_199;
    n.push(w.Passthrough, r#1.renderer);
    goto L_259;
    if (((r#1.kind === w.InlineAction))) goto L_1e5;
    if (!((r#1.kind === w.TextElement))) goto L_259;
    // append([], 0, r#1.renderModel.rememberKeys)
    r#1.renderModel.rememberKeys;
    n.push.apply(n, []);
    r#1.kind;
  }
  return n;
}

// fn <atom:0>  args=2 vars=6 closure=7 cpool=0 bc=1267B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, i, r, this
// closure: R, u, V, k, E, B, _
function {
  this = this;
  let r;
  let n;
  n = {};
  let i;
  for (const i of this.element.properties) {
    n[i] = this.props.getPropertyValue(i, e);
  }
  if (!(R.isDILTableTypographyEnabled(t))) goto L_141;
  R.applyDILTableTypographySize(n, this.element.tableTypographyRole);
  r = u.getDILInheritedTextStyle(t);
  if (!((undefined === n.color))) goto L_242;
  if (!((r == null))) goto L_1a2;
  r;
  goto L_1c3;
  if (!((undefined !== undefined.color))) goto L_242;
  if (!(V(this.element.properties))) goto L_242;
  n.color = r.color;
  r.color;
  if (!((undefined === n.weight))) goto L_31c;
  if (!((r == null))) goto L_27c;
  r;
  goto L_29d;
  if (!((undefined !== undefined.weight))) goto L_31c;
  if (!(k(this.element.properties))) goto L_31c;
  n.weight = r.weight;
  r.weight;
  if (!((undefined === n.size))) goto L_445;
  if (!((r == null))) goto L_356;
  r;
  goto L_377;
  if (!((undefined !== undefined.size))) goto L_445;
  if (!((true === this.element.inheritsTextSize))) goto L_445;
  if (!(E(this.element.properties))) goto L_445;
  n.size = r.size;
  r.size;
  if (!((r == null))) goto L_452;
  r;
  goto L_473;
  if (!((undefined !== undefined.textDecoration))) goto L_4ee;
  if (!(B(this.element.properties))) goto L_4ee;
  _(n, r.textDecoration);
  return n;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=91B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// closure: DILTextWidgetRenderer, a
function {
  return {renderer: DILTextWidgetRenderer.unwrapChildRenderer(e), celScope: a.makeScopedDILWidgetRendererCELScope(e, t)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=58B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: DILTextWidgetRenderer
function {
  let t;
  t = DILTextWidgetRenderer.unwrapChildRenderer(e);
  if (!((t instanceof DILTextWidgetRenderer))) goto L_39;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=91B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: DILTextWidgetRenderer, h
function {
  let t;
  t = DILTextWidgetRenderer.unwrapChildRenderer(e);
  if (!(h.isDILInlineTextActionRenderer(t))) goto L_5a;
  return t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=127B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n
// closure: DILTextWidgetRenderer, c
function {
  let n;
  n = DILTextWidgetRenderer.unwrapChildRenderer(e);
  if (!(c.isDILInlineTextContentRenderer(n))) goto L_7e;
  return n.getDILInlineTextContent(t);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=91B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: DILTextWidgetRenderer, l
function {
  let t;
  t = DILTextWidgetRenderer.unwrapChildRenderer(e);
  if (!(l.isDILTransparentWidgetRenderer(t))) goto L_5a;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// closure: a
function {
  return a.unwrapDILWidgetRenderer(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=75B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return Array.isArray(e.inlineViews);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=185B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// closure: w
function {
  if (!((e.kind === w.Passthrough))) goto L_49;
  e.kind;
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === w.InlineAction))) goto L_95;
  if (!((<?> === w.TextElement))) goto L_b8;
  return e.renderModel;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=93B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r, t#1
// closure: DILTextWidgetRenderer
function {
  let r;
  r = (t + n);
  if (!((r >= 0))) goto L_5c;
  if (!((r < e.length))) goto L_5c;
  let t#1;
  t#1 = e[r];
  if (!(!DILTextWidgetRenderer.isCollapsibleWhitespaceTextChild(t#1))) goto L_50;
  return t#1;
  r = (r + n);
  (r + n);
  goto L_7;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=353B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: w, A
function {
  let t;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  if (!((undefined.kind !== w.TextElement))) goto L_55;
  return false;
  t = e.renderModel;
  if (!((0 === t.children.length))) goto L_160;
  if (!((true === t.viewModel.__dilStringTextNode))) goto L_160;
  return (0 === A(t.viewModel.value).trim().length);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=333B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r
// closure: w
function {
  let n;
  n = [w.InlineAction, e, t.length];
  let r;
  for (const r of t) {
    if (!((r.kind === w.Passthrough))) goto L_ed;
    goto L_13f;
    // [栈深重同步 4 -> 3]
    // append([], 0, r.rememberKeys)
    r.rememberKeys;
    n.push.apply(n, []);
  }
  return n;
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if (!((null == e))) goto L_7;
  return "";
  return String(e);
}

// fn D  args=1 vars=3 closure=2 cpool=0 bc=198B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t, n
// closure: W, r
function {
  let t;
  if (!(!W.test(e))) goto L_31;
  return false;
  t = r.UnicodeString.fromString(e);
  let n;
  n = 0;
  if (!((n < t.length))) goto L_c3;
  if (!(t.isEmojiAt(n))) goto L_b9;
  return true;
  n = <n_new>;
  (n++);
  goto L_80;
  return false;
}

// fn P  args=3 vars=4 closure=2 cpool=0 bc=240B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t, n
// locals: r
// closure: A, f
function {
  let r;
  r = A(e.value);
  if ((t)) goto L_7b;
  if (((true === e.preserveWhitespace))) goto L_7b;
  if (!((true !== e.__dilStringTextNode))) goto L_81;
  return r;
  return f.normalizeDILTextWhitespace(r, n, f.DILTextWhitespaceMode.Normal);
}

// fn M  args=2 vars=2 closure=1 cpool=0 bc=51B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// closure: y
function {
  if (!(t)) goto L_31;
  return e.replace(y, "�");
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return ("color" === e);
}

// fn V  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return e.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return ("weight" === e);
}

// fn k  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return e.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return ("size" === e);
}

// fn E  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return e.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if ((("lineThrough" === e))) goto L_12;
  return ("underline" === e);
}

// fn B  args=1 vars=1 closure=0 cpool=1 bc=39B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  return e.some(function <atom:0>);   // tail call
}

// fn O  args=2 vars=4 closure=1 cpool=0 bc=69B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r
// closure: H
function {
  let n;
  n = e;
  let r;
  for (const r of t) {
    n = H(n, r.viewModel);
    H(n, r.viewModel);
  }
  return n;
}

// fn H  args=2 vars=7 closure=7 cpool=0 bc=396B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
// locals: n, r, i, o, s
// closure: q, F, L, j, N, K, u
function {
  let s;
  let o;
  let i;
  let r;
  let n;
  n = {};
  r = q(t.color);
  i = F(t);
  o = L.readTextDecorationFromValue(j(t.lineThrough), t.underline);
  if (!((t.weight == null))) goto L_f6;
  t.weight;
  s = N(K(t.strong));
  if (!((undefined !== r))) goto L_112;
  n.color = r;
  r;
  if (!((undefined !== i))) goto L_12c;
  n.size = i;
  i;
  if (!((undefined !== o))) goto L_146;
  n.textDecoration = o;
  o;
  if (!((undefined !== s))) goto L_160;
  n.weight = s;
  s;
  return u.renderStateWithDILInheritedTextStyleValues(e, n);   // tail call
}

// fn _  args=2 vars=2 closure=0 cpool=0 bc=156B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
function {
  if (!((undefined === e.lineThrough))) goto L_9b;
  if (!((undefined === e.underline))) goto L_9b;
  if (!(("strikethrough" !== t))) goto L_8e;
  if (!(("underline" !== t))) goto L_7f;
  if (!(("dotted-underline" === t))) goto L_9b;
  e.underline = "dotted";
  goto L_9b;
  // [栈深重同步 1 -> 0]
  e.underline = true;
  goto L_9b;
  // [栈深重同步 1 -> 0]
  e.lineThrough = true;
  true;
  return;
}

// fn q  args=1 vars=1 closure=1 cpool=0 bc=142B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// closure: n
function {
  if ((("string" == typeof e))) goto L_88;
  if (!(n.isCELMap(e))) goto L_8c;
  if (!(("string" == typeof e.light))) goto L_8c;
  if (!(("string" == typeof e.dark))) goto L_8c;
  return e;
  return undefined;
}

// fn F  args=1 vars=2 closure=0 cpool=0 bc=137B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
function {
  let t;
  if (!(!("inline" in e))) goto L_e;
  return;
  t = e.size;
  if (!(("number" == typeof t))) goto L_6b;
  if ((Number.isFinite(t))) goto L_81;
  if (!(("string" == typeof t))) goto L_87;
  if (!((t.length > 0))) goto L_87;
  return t;
  return undefined;
}

// fn N  args=1 vars=1 closure=0 cpool=0 bc=45B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if ((("normal" === e))) goto L_28;
  if ((("medium" === e))) goto L_28;
  if ((("semibold" === e))) goto L_28;
  if (!(("bold" === e))) goto L_2c;
  return e;
  return;
}

// fn K  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if (!((true === e))) goto L_c;
  return "semibold";
  return undefined;
}

// fn z  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn j  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if (!(("boolean" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn U  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn $  args=1 vars=1 closure=0 cpool=0 bc=26B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
function {
  if ((("string" == typeof e))) goto L_14;
  if (!(("number" == typeof e))) goto L_18;
  return e;
  return undefined;
}

// fn Y  args=1 vars=2 closure=1 cpool=0 bc=134B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e
// locals: t
// closure: A
function {
  let t;
  t = A(e.value);
  if (!((true === e.__dilStringTextNode))) goto L_85;
  if (!((t.length > 0))) goto L_85;
  return (0 === t.trim().length);
}

// fn J  args=2 vars=2 closure=0 cpool=0 bc=165B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: e, t
function {
  if ((e.hasTextOutput)) goto L_49;
  e.hasTextOutput = t.hasTextOutput;
  if ((e.hasPassthroughContent)) goto L_9b;
  e.hasPassthroughContent = t.hasPassthroughContent;
  return;
}

// fn <atom:0>  args=3 vars=58 closure=0 cpool=80 bc=1133B file=dil_text/src/rendering/DILTextWidgetRenderer
// args: require, module, exports
// locals: e, t, n, r, i, o, s, l, d, a, c, h, p, u, g, T, I, x, m, v, C, L, f, R, S, w, y, b, DILTextWidgetRenderer, <class_fields_init>, DILTextWidgetRenderer#1, A, D, W, P, M, V, k, E, B, O, H, _, q, F, N, K, z, j, U, $, Y, J, X, G
function {
  A = function A;
  D = function D;
  P = function P;
  M = function M;
  V = function V;
  k = function k;
  E = function E;
  B = function B;
  O = function O;
  H = function H;
  _ = function _;
  q = function q;
  F = function F;
  N = function N;
  K = function K;
  z = function z;
  j = function j;
  U = function U;
  $ = function $;
  Y = function Y;
  J = function J;
  let G;
  let X;
  let W;
  let DILTextWidgetRenderer#1;
  let b;
  let y;
  let S;
  let R;
  let f;
  let L;
  let C;
  let v;
  let m;
  let x;
  let I;
  let T;
  let g;
  let u;
  let p;
  let h;
  let c;
  let a;
  let d;
  let l;
  let s;
  let o;
  let i;
  let r;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextWidgetRenderer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "zxLPwY9Ygq6plYmx");
  n = require("cel/src/CELValue");
  r = require("coreutils/src/unicode/UnicodeString");
  i = require("dil_compiler/src/DILAutoSpacingRenderState");
  o = require("dil_compiler/src/DILRenderChildState");
  s = require("dil_compiler/src/DILStreamingRenderState");
  l = require("dil_compiler/src/DILTransparentWidgetRenderer");
  d = require("dil_compiler/src/DILTypes");
  a = require("dil_compiler/src/DILWidgetRendererUnwrap");
  c = require("dil_core/src/DILInlineTextContentRenderer");
  h = require("dil_core/src/DILInlineTextActionRenderer");
  p = require("dil_core/src/DILTextSelectionRenderState");
  u = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  g = require("dil_core/src/layout/DILAutoSpacingAttributes");
  require("valdi_core/src/Style");
  T = require("valdi_core/src/utils/AttributedTextBuilder");
  I = require("valdi_core/src/Remember");
  x = require("../DILTextComponent");
  m = require("../text_elements/CodeElement");
  v = require("./DILTextActionTap");
  C = require("./DILTextFontResolver");
  L = require("./DILTextProperties");
  f = require("./DILTextWhitespace");
  R = require("./DILTableTypographyRenderState");
  S = require("./DILStreamingText");
  if ((w)) goto L_22b;
  w = {};
  !function <atom:0>({});
  y = new RegExp("[ \\t\\f\\r]+");
  b = 0;
  let DILTextWidgetRenderer;
  let <class_fields_init>;
  class DILTextWidgetRenderer extends d.ADILWidgetRendererInternal { ... }
  <proto:DILTextWidgetRenderer>.onRender = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveTextSelectionParticipantId = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveEmojiTextValue = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveEditable = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveEditableAction = function <atom:0>;
  <proto:DILTextWidgetRenderer>.getEditableActionExpression = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveNativeStyle = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveAutoSpacingMargin = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveLineHeightMultiple = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveLineHeight = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveLoadingLineHeight = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveLoadingBlockHeight = function <atom:0>;
  <proto:DILTextWidgetRenderer>.resolveLoadingType = function <atom:0>;
  <proto:DILTextWidgetRenderer>.buildRememberedAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.buildAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.buildInlineAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.buildRememberedInlineAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.renderInlineViews = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineAttributedTextChild = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlinePassthroughRenderer = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlinePassthroughChildren = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineView = function <atom:0>;
  <proto:DILTextWidgetRenderer>.shouldSkipEdgeCollapsibleWhitespaceAroundViewBackedInlineChildren = function <atom:0>;
  <proto:DILTextWidgetRenderer>.hasViewBackedInlineRenderer = function <atom:0>;
  <proto:DILTextWidgetRenderer>.hasViewBackedInlineRendererChild = function <atom:0>;
  <proto:DILTextWidgetRenderer>.hasViewBackedInlineContent = function <atom:0>;
  <proto:DILTextWidgetRenderer>.childHasViewBackedInlineContent = function <atom:0>;
  <proto:DILTextWidgetRenderer>.inlineActionHasViewBackedInlineContent = function <atom:0>;
  <proto:DILTextWidgetRenderer>.inlineRenderModelHasViewBackedInlineContent = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendAttributedText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendAtomicSelectionRange = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineRenderModel = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineActionText = function <atom:0>;
  <proto:DILTextWidgetRenderer>.createElementRenderModel = function <atom:0>;
  <proto:DILTextWidgetRenderer>.createInlineActionRenderModel = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendChildRenderModels = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendInlineRenderModels = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendTransparentChildRenderModels = function <atom:0>;
  <proto:DILTextWidgetRenderer>.appendTransparentInlineRenderModels = function <atom:0>;
  <proto:DILTextWidgetRenderer>.createRememberKeys = function <atom:0>;
  <proto:DILTextWidgetRenderer>.createElementViewModel = function <atom:0>;
  function <atom:0>.getScopedChild = function <atom:0>;
  function <atom:0>.getTextChild = function <atom:0>;
  function <atom:0>.getInlineActionChild = function <atom:0>;
  function <atom:0>.getInlineTextContent = function <atom:0>;
  function <atom:0>.getTransparentChild = function <atom:0>;
  function <atom:0>.unwrapChildRenderer = function <atom:0>;
  function <atom:0>.isInlineAppendContext = function <atom:0>;
  function <atom:0>.getInlineChildRenderModel = function <atom:0>;
  function <atom:0>.findNearestNonWhitespaceTextChild = function <atom:0>;
  function <atom:0>.isCollapsibleWhitespaceTextChild = function <atom:0>;
  function <atom:0>.createInlineActionRememberKeys = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextWidgetRenderer>;
  DILTextWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILTextWidgetRenderer
  DILTextWidgetRenderer#1 = function <atom:0>;
  exports.DILTextWidgetRenderer = DILTextWidgetRenderer#1;
  W = new RegExp("[\\u203c-\\uffff]");
  X = {hasTextOutput: false, hasPassthroughContent: true};
  G = {hasTextOutput: false, hasPassthroughContent: false};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
