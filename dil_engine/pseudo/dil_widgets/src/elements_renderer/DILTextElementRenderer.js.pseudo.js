// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=222B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: this
// closure: <class_fields_init>, n, W
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementType = e;
  this.element = t;
  this.childrenMode = n.DILElementChildrenMode.ResolvedValues;
  this.primitiveTextProp = undefined;
  this.states = [];
  this.allowedPropNames = W.createDILPropNameAllowlist(t.dilV2Properties);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=405B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: this
// closure: E
function {
  this = this;
  this.states.push({collapsesWhitespace: false, inlineViewChildren: [], options: t, props: {}, streamingAnimation: t.streamingAnimation});
  if (!((this.componentPrototype == null))) goto L_fe;
  this.componentPrototype;
  this.componentPrototype = E.jsx.makeComponentPrototype(undefined, undefined);
  E.jsx.beginComponent(this.componentClass, this.componentPrototype, e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=0 bc=516B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n, this
// closure: W, i, x, q, Y
function {
  this = this;
  let n;
  if (!((true !== this.allowedPropNames[e]))) goto L_78;
  W.warnUnsupportedDILPropName(this.elementType, e);
  return;
  n = this.currentState();
  if (!(("value" === e))) goto L_ff;
  n.collapsesWhitespace = i.isRenderingDILTextNode(n.options);
  i.isRenderingDILTextNode(n.options);
  if (!(("value" === e))) goto L_201;
  if (!(("string" == typeof t))) goto L_201;
  if (!(n.collapsesWhitespace)) goto L_201;
  goto L_202;
  // [栈深重同步 3 -> 2]
  n.props[e] = t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: c
function {
  return c.resolveDILV2ChildRenderOptions(undefined, undefined, e);   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=0 bc=1037B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n, i, i#1, this
// closure: j, y, x, q, Y, ee
function {
  this = this;
  let i;
  let n;
  if (!((undefined === t))) goto L_67;
  throw new Error("DIL v2 ".concat(this.elementType, " element renderer requires values children."));
  n = this.currentState();
  n.childRenderer = e;
  i = j.primitiveChildrenToString(t);
  if (!((undefined !== i))) goto L_25f;
  if (!((true !== n.props.preserveWhitespace))) goto L_161;
  n.collapsesWhitespace = (this.element !== y.CodeElement);
  if (!(n.collapsesWhitespace)) goto L_252;
  goto L_255;
  // [栈深重同步 2 -> 1]
  n.props.value = i;
  return;
  if (!((t.length > 0))) goto L_40c;
  let i#1;
  i#1 = ee(t, this.elementType);
  if (!((undefined === i#1))) goto L_2c9;
  n.renderChildren = e.render;
  return;
  if (!((true !== n.props.preserveWhitespace))) goto L_35f;
  n.collapsesWhitespace = (this.element !== y.CodeElement);
  n.children = i#1.children;
  // append([], 0, i#1.inlineViewChildren)
  i#1.inlineViewChildren;
  n.inlineViewChildren.push.apply(n.inlineViewChildren, []);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=183B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: this, a, e, t
function {
  this.renderInlineViewChildren(a, e.inlineViewChildren, t.isDILInteractionCaptured(e.options.renderState));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=110B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: c, e, t
function {
  c.runWithDILV2ChildRenderFrame(e.options.renderState, t);
  return;
}

// fn <atom:0>  args=0 vars=14 closure=10 cpool=2 bc=2368B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// locals: e, n, r, l, s, i, o, s#1, a, t, a#1, a#2, e#1, this
// closure: t, c, i, o, O, z, F, E, M, q
function {
  this = this;
  let s;
  let l;
  let r;
  let n;
  let e;
  e = this.states.pop();
  if (!((undefined === e))) goto L_bc;
  throw new Error("Unbalanced DIL v2 ".concat(this.elementType, " element renderer stack."));
  n = e.options.renderState;
  if (!(i.isRenderingDILTextNode(e.options))) goto L_1b0;
  if (!((undefined !== n))) goto L_1b0;
  if (!((o.getDILAutoSpacingContext(n) == null))) goto L_189;
  o.getDILAutoSpacingContext(n);
  goto L_1aa;
  if (!(("list-item" === undefined.containerName))) goto L_1b0;
  goto L_21f;
  // [栈深重同步 1 -> 0]
  r = c.beginDILV2AutoSpacingElement(this.elementType, e.props, n);
  l = undefined;
  s = undefined;
  try { // catch -> L_760
  let a;
  let s#1;
  let o;
  let i;
  if (!(("link" === this.elementType))) goto L_26a;
  O(e);
  i = z(this.element, e.props, e.children, e.inlineViewChildren, this.shimmer, e.streamingAnimation, (true === e.options.enhancedStreamingAnimationsEnabled), n);
  l = i.value;
  i.value;
  F(i);
  if (!((r == null))) goto L_3d5;
  r;
  goto L_3f6;
  if (!(("column" === undefined.direction))) goto L_41f;
  goto L_420;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((r == null))) goto L_432;
  r;
  goto L_453;
  if (!(("row" === undefined.direction))) goto L_47c;
  goto L_47d;
  // [栈深重同步 1 -> 0]
  s#1 = undefined;
  if (((undefined !== o))) goto L_4d5;
  if (!(E.jsx.hasViewModelProperty("marginTop"))) goto L_529;
  E.jsx.setViewModelProperty("marginTop", o);
  if (((undefined !== s#1))) goto L_580;
  if (!(E.jsx.hasViewModelProperty("marginLeft"))) goto L_5d4;
  E.jsx.setViewModelProperty("marginLeft", s#1);
  a = e.childRenderer;
  if (!((e.inlineViewChildren.length > 0))) goto L_63e;
  if (!((undefined !== a))) goto L_63e;
  e.renderChildren = function <atom:0>;
  function <atom:0>;
  if (!((undefined !== e.renderChildren))) goto L_708;
  let t;
  t = e.renderChildren;
  E.jsx.setUnnamedSlot(M.createReusableCallback(function <atom:0>));
  // close_loc t
  goto L_752;
  E.jsx.setUnnamedSlot(undefined);
  // close_loc a
  <?>;
  // gosub (finally 块) 1919
  undefined;
  goto L_828;
  // [栈深重同步 0 -> 1]
  a#1 = <?>;
  try { // catch -> L_779
  s = a#1;
  a#1;
  <?>;
  // gosub (finally 块) 1919
  undefined;
  goto L_828;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1919
  throw <?>;
  try { // catch -> L_7d7
  E.jsx.endComponent();
  <?>;
  // gosub (finally 块) 2045
  undefined;
  goto L_827;
  // [栈深重同步 0 -> 1]
  a#2 = <?>;
  try { // catch -> L_7f7
  if (!((s == null))) goto L_7e8;
  s;
  s = a#2;
  a#2;
  <?>;
  // gosub (finally 块) 2045
  undefined;
  goto L_827;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2045
  throw <?>;
  c.endDILV2AutoSpacingElement(r);
  // ret (finally 块) 
  // ret (finally 块) 
  if (!((undefined !== s))) goto L_8cf;
  let e#1;
  if (!((s instanceof Error))) goto L_866;
  goto L_86f;
  // [栈深重同步 1 -> 0]
  e#1 = String(s);
  throw new Error("Failed to render DIL v2 element "".concat(this.elementType, "": ", e#1));
  q.recordDILInlineTextSiblingOutput(e.options, l, e.collapsesWhitespace);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: p
function {
  return p.DILTextComponent;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=76B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: this
function {
  this = this;
  this.currentState().props[e] = t;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=179B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// locals: e, this
function {
  this = this;
  let e;
  e = this.states[(this.states.length - 1)];
  if (!((undefined === e))) goto L_af;
  throw new Error("Unbalanced DIL v2 ".concat(this.elementType, " element renderer stack."));
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=78B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: e, r
function {
  e.renderSelected([r.element], undefined);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=1 bc=384B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, r, this
// closure: R
function {
  this = this;
  let i;
  i = 0;
  if (!((i < t.length))) goto L_17f;
  let r;
  r = t[i];
  if (!((r.kind === 0))) goto L_115;
  if (!((undefined === r.action))) goto L_bc;
  goto L_112;
  // [栈深重同步 2 -> 1]
  this.renderTappableInlineView(e, r, "inline-action:".concat(i), n);
  goto L_170;
  if (!((r.kind === 1))) goto L_170;
  this.renderLinkIcon("link-icon:".concat(i), r, n);
  r.kind;
  // close_loc r
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: e, t
function {
  e.renderSelected([t.element], undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=74B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: e, t, R
function {
  R.withDILInlineTextStyle(t.textStyle, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// closure: s, r
function {
  s.renderWithDILTextSelectionSuppressed(r);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=5 cpool=2 bc=1378B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n, i
// locals: r, this
// closure: R, s, E, _, M
function {
  this = this;
  let r;
  if (!((this.inlineActionComponentPrototype == null))) goto L_77;
  this.inlineActionComponentPrototype;
  this.inlineActionComponentPrototype = E.jsx.makeComponentPrototype(undefined, undefined);
  E.jsx.beginComponent(_.Pressable, this.inlineActionComponentPrototype, n);
  E.jsx.setViewModelProperty("inline", true);
  E.jsx.setViewModelProperty("interactionCaptured", i);
  E.jsx.setViewModelProperty("onClickAction", t.action);
  if (!((t.interaction == null))) goto L_293;
  t.interaction;
  goto L_2b4;
  E.jsx.setViewModelProperty("interactionElementType", undefined.target);
  if (!((t.interaction == null))) goto L_32c;
  t.interaction;
  goto L_34d;
  E.jsx.setViewModelProperty("interactionScope", undefined.scope);
  if (!((undefined !== t.ariaLabel))) goto L_3e8;
  E.jsx.setViewModelProperty("ariaLabel", t.ariaLabel);
  if (!((undefined !== t.ariaPressed))) goto L_480;
  E.jsx.setViewModelProperty("ariaPressed", t.ariaPressed);
  r = M.createReusableCallback(function <atom:0>);
  E.jsx.setUnnamedSlot(M.createReusableCallback(function <atom:0>));
  E.jsx.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=3 cpool=0 bc=1566B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: this
// closure: E, A, P
function {
  this = this;
  if (!((this.linkIconComponentPrototype == null))) goto L_74;
  this.linkIconComponentPrototype;
  this.linkIconComponentPrototype = E.jsx.makeComponentPrototype(undefined, undefined);
  E.jsx.beginComponent(A.Icon, this.linkIconComponentPrototype, e);
  E.jsx.setViewModelProperty("ariaHidden", true);
  E.jsx.setViewModelProperty("inline", true);
  E.jsx.setViewModelProperty("name", "arrow-up-right-link");
  if (!((t.textStyle == null))) goto L_274;
  t.textStyle;
  goto L_295;
  E.jsx.setViewModelProperty("inlineFontSize", undefined.fontSize);
  if (!((t.textStyle == null))) goto L_30d;
  t.textStyle;
  goto L_32e;
  E.jsx.setViewModelProperty("inlineTextColor", undefined.color);
  if ((P.Device.isWeb())) goto L_5d4;
  E.jsx.setViewModelProperty("onClickAction", t.link.action);
  E.jsx.setViewModelProperty("interactionCaptured", n);
  if (!((t.link.interaction == null))) goto L_4f6;
  t.link.interaction;
  goto L_517;
  E.jsx.setViewModelProperty("interactionElementType", undefined.target);
  if (!((t.link.interaction == null))) goto L_5b0;
  t.link.interaction;
  goto L_5d1;
  E.jsx.setViewModelProperty("interactionScope", undefined.scope);
  E.jsx.endComponent();
  return;
}

// fn O  args=1 vars=5 closure=7 cpool=0 bc=908B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: t, n, i, r
// closure: V, ge, k, u, de, l, ce
function {
  let r;
  let i;
  let n;
  let t;
  e.props.inline = true;
  t = V.normalizeDILLinkHref(e.props.href);
  if (((undefined === t))) goto L_cf;
  if (!((undefined !== e.renderChildren))) goto L_d2;
  return;
  if (!((e.children == null))) goto L_141;
  e.children;
  n = [ge(e.props.value)];
  delete "value";
  i = [{children: n, element: k.UnderlineElement, kind: 0, viewModel: {underline: "dotted"}}];
  if (!(e.options.isModelWrittenDIL)) goto L_335;
  goto L_336;
  // [栈深重同步 7 -> 6]
  r = new u.DILTextLink(t, de(e.props.title), V.makeDILOpenURLAction(t), undefined);
  ce(i, e.inlineViewChildren, r);
  e.children = [{link: r, children: i, kind: 1}];
  e.props;
  return;
}

// fn F  args=1 vars=3 closure=1 cpool=0 bc=103B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: t, n
// closure: E
function {
  let t;
  t = e;
  let n;
  for (const n of t) {
    E.jsx.setViewModelProperty(n, t[n]);
  }
  return;
}

// fn z  args=8 vars=22 closure=18 cpool=0 bc=2373B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: i, r, o, l, c, p, h, u
// locals: g, e, x, L, T, y, D, C, w, S, b, k, P, E
// closure: ue, f, m, d, v, xe, H, I, n, e, U, ge, fe, Ie, a, t, s, Le
function {
  let E;
  let P;
  let k;
  let b;
  let S;
  let w;
  let C;
  let D;
  let y;
  let T;
  let L;
  let x;
  let g;
  g = ue(r);
  if (!(f.isDILTableTypographyElementScopeActive())) goto L_1cf;
  f.applyDILTableTypographySize(r, i.tableTypographyRole);
  if (!((i.tableTypographyRole === m.DILFontRole.Text))) goto L_1cf;
  if (!((undefined === r.weight))) goto L_1cf;
  if (!((true !== r.strong))) goto L_1cf;
  if (!((undefined !== u))) goto L_1cf;
  let e;
  if (!((d.getDILInheritedTextStyle(u) == null))) goto L_195;
  d.getDILInheritedTextStyle(u);
  goto L_1b6;
  e = undefined.weight;
  if (!((undefined !== e))) goto L_1ce;
  r.weight = e;
  e;
  x = r;
  L = v.readTextDecorationFromValue(xe(r.lineThrough), r.underline);
  if (!((o == null))) goto L_249;
  o;
  T = {children: [], element: i, kind: 0, viewModel: x};
  y = [c];
  H(T, y);
  if (!(c)) goto L_2e7;
  goto L_2ea;
  // [栈深重同步 2 -> 1]
  D = I.rememberDILStreamingTextAnimation(p, y, h);
  C = (D !== n.DILStreamingAnimation.Disabled);
  if (!(!c)) goto L_378;
  if ((C)) goto L_378;
  if (((undefined !== o))) goto L_378;
  w = (undefined === i.resolveNativeStyle);
  if (!((i.resolveNativeStyle == null))) goto L_3a5;
  i.resolveNativeStyle;
  i;
  goto L_3ab;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, x) == null))) goto L_3b1;
  <?>.call(undefined, x);
  S = {};
  if ((!w)) goto L_40a;
  if (((undefined !== S.letterSpacing))) goto L_40a;
  b = e.supportsScaledLineHeight();
  if (!(w)) goto L_414;
  goto L_438;
  // [栈深重同步 1 -> 0]
  k = S.color;
  if (!((i.resolveLineHeight == null))) goto L_465;
  i.resolveLineHeight;
  i;
  goto L_46b;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, x) == null))) goto L_492;
  <?>.call(undefined, x);
  P = i.lineHeight;
  if (!((undefined === P))) goto L_4f5;
  if (!((i.resolveLineHeightMultiple == null))) goto L_4c6;
  i.resolveLineHeightMultiple;
  i;
  goto L_4cc;
  // [栈深重同步 1 -> 2]
  if (!((<?>.call(undefined, x) == null))) goto L_4f6;
  <?>.call(undefined, x);
  goto L_4f6;
  // [栈深重同步 1 -> 0]
  E = undefined;
  if (!(w)) goto L_55e;
  goto L_586;
  // [栈深重同步 2 -> 1]
  if (!(b)) goto L_6c6;
  goto L_6c7;
  // [栈深重同步 2 -> 1]
  if (!((g == null))) goto L_701;
  g;
  goto L_722;
  if (!((undefined === undefined.color))) goto L_72a;
  goto L_773;
  // [栈深重同步 2 -> 1]
  if (!(!C)) goto L_781;
  if ((!!c)) goto L_790;
  if (!((undefined !== u))) goto L_7f3;
  if ((s.isDILTextSelectionSuppressed(u))) goto L_820;
  if ((!!(false === xe(r.selectable)))) goto L_827;
  if (!((i.resolveLoadingLineHeight == null))) goto L_903;
  i.resolveLoadingLineHeight;
  i;
  goto L_909;
  // [栈深重同步 2 -> 3]
  if (!((i.resolveLoadingBlockHeight == null))) goto L_939;
  i.resolveLoadingBlockHeight;
  i;
  goto L_93f;
  // [栈深重同步 2 -> 3]
  return {accessibilityCategory: i.accessibilityCategory, autoSpacingRole: i.autoSpacingRole, value: ge(x.value), width: fe(r.width), textAlign: v.readTextAlignFromValue(r.textAlign), textDecoration: L, truncate: xe(r.truncate), maxLines: Ie(r.maxLines), minLines: Ie(r.minLines), lineHeight: P, lineHeightMultiple: E, font: undefined, letterSpacing: S.letterSpacing, color: a.resolveDILTextColor(g.color), animationsEnabled: undefined, shimmer: undefined, interactionCaptured: t.isDILInteractionCaptured(u), suppressTextSelection: undefined, isLoading: xe(r.isLoading), loadingType: Le(r.loadingType), loadingWidth: fe(r.loadingWidth), loadingLineCount: Ie(r.loadingLineCount), loadingLineHeight: <?>.call(undefined, x), loadingBlockHeight: <?>.call(undefined, x)};
}

// fn H  args=2 vars=5 closure=1 cpool=0 bc=689B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n, i, n#1
// closure: H
function {
  if (!(("string" != typeof e))) goto L_289;
  t.push(e.kind);
  if (!((2 !== e.kind))) goto L_21e;
  if (!((0 === e.kind))) goto L_19e;
  t.push(e.element);
  let n;
  for (const n of e.element.properties) {
    let i;
    i = e.viewModel[n];
    if (!((undefined !== i))) goto L_197;
    t.push(n, i);
  }
  t.push(e.children.length);
  let n#1;
  for (const n#1 of e.children) {
    H(n#1, t);
  }
  return;
  t.push(e.childIndex, e.verticalAlignment);
  return;
  t.push(e);
  return;
}

// fn U  args=4 vars=7 closure=7 cpool=0 bc=541B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n, i
// locals: r, o, l
// closure: DILInlineTextBuilder, I, d, a, B, g, x
function {
  let l;
  let o;
  let r;
  r = new DILInlineTextBuilder();
  o = I.pushDILStreamingTextAnimation(r, n, i);
  if (!((d.getActiveDILInheritedTextStyleOverride() == null))) goto L_69;
  d.getActiveDILInheritedTextStyleOverride();
  goto L_8a;
  l = undefined.color;
  if (!((a.resolveDILTextColor(l) == null))) goto L_e1;
  a.resolveDILTextColor(l);
  r.pushColor("color-text-prose");
  B(e, r, {captionColor: undefined, compactInlineBadgeAlignment: false, fontResolver: new g.DILTextFontResolver(), hasCurrentParagraphOutput: false, hasTrailingCollapsibleWhitespace: false, inheritedTextDecoration: undefined, inlineViewChildren: t, noWrap: false, preserveWhitespace: false, preservesInheritedTextDecoration: false, whitespaceMode: x.DILTextWhitespaceMode.PreLine});
  r.pop();
  I.popDILStreamingTextAnimation(r, o);
  return r.build();   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=29B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  this.color = e;
  return super["pushColor"](e);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
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

// fn B  args=3 vars=22 closure=10 cpool=0 bc=2592B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, r, o, l, s, c, p, h, u, m, g, v, I, f, e#1, L, a, e#2, a#1
// closure: $, Y, x, y, X, d, a, ge, Z, K
function {
  let L;
  let f;
  let I;
  let v;
  let g;
  let m;
  let u;
  let h;
  let p;
  let c;
  let s;
  let l;
  let o;
  let r;
  let i;
  i = t.color;
  r = n.captionColor;
  o = $(e, n);
  l = o.viewModel;
  s = n.compactInlineBadgeAlignment;
  c = n.inheritedTextDecoration;
  p = n.noWrap;
  h = n.whitespaceMode;
  u = n.preserveWhitespace;
  if (!((undefined !== l.size))) goto L_20f;
  if ((("3xs" === l.size))) goto L_205;
  if ((("2xs" === l.size))) goto L_205;
  n.compactInlineBadgeAlignment = ("xs" === l.size);
  ("xs" === l.size);
  if ((n.noWrap)) goto L_261;
  n.noWrap = ("nowrap" === l.wrap);
  if (!((Y(l) === x.DILTextWhitespaceMode.Normal))) goto L_309;
  n.whitespaceMode = x.DILTextWhitespaceMode.Normal;
  x.DILTextWhitespaceMode.Normal;
  if ((n.preserveWhitespace)) goto L_3a5;
  if (((true === l.preserveWhitespace))) goto L_3a5;
  n.preserveWhitespace = (o.element === y.CodeElement);
  m = false;
  if (!(o.element.createsParagraph(l))) goto L_472;
  if (!(n.hasCurrentParagraphOutput)) goto L_472;
  t.appendText("
");
  m = true;
  true;
  n.hasCurrentParagraphOutput = false;
  n.hasTrailingCollapsibleWhitespace = false;
  false;
  g = n.fontResolver.pushedFontStyleCount;
  v = o.element.pushStyle(l, t, n.fontResolver);
  if (!(("inherit" === l.color))) goto L_58f;
  if (!((undefined !== i))) goto L_58f;
  t.pushColor(i);
  v = <v_new>;
  (v++);
  I = X(o);
  if (!((undefined === n.inheritedTextDecoration))) goto L_5d7;
  if (!((undefined !== I))) goto L_5d7;
  n.inheritedTextDecoration = I;
  goto L_680;
  // [栈深重同步 1 -> 0]
  if (!(n.preservesInheritedTextDecoration)) goto L_680;
  if (!((undefined !== n.inheritedTextDecoration))) goto L_680;
  if (!((undefined !== I))) goto L_680;
  t.pushTextDecoration(n.inheritedTextDecoration);
  v = <v_new>;
  (v++);
  f = d.getActiveDILInheritedTextStyleOverride();
  if (!((f == null))) goto L_6b4;
  f;
  goto L_6d5;
  if (!((undefined !== undefined.color))) goto L_763;
  let e#1;
  e#1 = a.resolveDILTextColor(f.color);
  if (!((undefined !== e#1))) goto L_762;
  t.pushColor(e#1);
  v = <v_new>;
  (v++);
  if (!((f == null))) goto L_76f;
  f;
  goto L_790;
  if (!((undefined !== undefined.textDecoration))) goto L_7e6;
  t.pushTextDecoration(f.textDecoration);
  v = <v_new>;
  (v++);
  L = ge(l.value);
  if (!((L.length > 0))) goto L_88a;
  t.appendText(Z(L, n.noWrap));
  m = true;
  true;
  n.hasCurrentParagraphOutput = true;
  n.hasTrailingCollapsibleWhitespace = false;
  false;
  let a;
  for (const a of o.children) {
    let e#2;
    e#2 = K(a, t, n);
    if ((m)) goto L_8cf;
    m = e#2;
    e#2;
    if (!(e#2)) goto L_8e8;
    n.hasCurrentParagraphOutput = true;
    true;
  }
  let a#1;
  a#1 = 0;
  if (!((a#1 < v))) goto L_92e;
  t.pop();
  a#1 = <a#1_new>;
  (a#1++);
  goto L_8f5;
  if (!((n.fontResolver.pushedFontStyleCount > g))) goto L_9c1;
  n.fontResolver.popFontStyle();
  goto L_92e;
  n.compactInlineBadgeAlignment = s;
  n.inheritedTextDecoration = c;
  n.noWrap = p;
  n.whitespaceMode = h;
  n.preserveWhitespace = u;
  n.captionColor = r;
  t.color = i;
  return m;
}

// fn $  args=2 vars=3 closure=2 cpool=0 bc=657B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n
// closure: T, S
function {
  if (!((e.element === T.DILV2CaptionElement))) goto L_a3;
  if (!((e.viewModel.color == null))) goto L_97;
  e.viewModel.color;
  t.captionColor = "secondary";
  goto L_28f;
  if (!((undefined !== t.captionColor))) goto L_28f;
  if (!((e.element === S.TextElement))) goto L_28f;
  let n;
  null;
  e.viewModel;
  if (!((e.viewModel.inline == null))) goto L_18d;
  e.viewModel.inline;
  if (!((e.viewModel.color == null))) goto L_24b;
  e.viewModel.color;
  if (!((false === e.viewModel.inline))) goto L_229;
  goto L_24b;
  // [栈深重同步 2 -> 1]
  n = {inline: true, color: t.captionColor};
  t.captionColor = n.color;
  null;
  e;
  return {viewModel: n};
  return e;
}

// fn X  args=1 vars=1 closure=4 cpool=0 bc=439B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: w, k, v, xe
function {
  if (!((e.element === w.StrikethroughElement))) goto L_4f;
  return "strikethrough";
  if (!((e.element === k.UnderlineElement))) goto L_109;
  if (!((e.viewModel.underline == null))) goto L_107;
  e.viewModel.underline;
  return v.readTextDecorationFromValue(undefined, true);
  return v.readTextDecorationFromValue(xe(e.viewModel.lineThrough), e.viewModel.underline);
}

// fn K  args=3 vars=4 closure=4 cpool=0 bc=458B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i
// closure: Q, B, J, G
function {
  if (!(("string" == typeof e))) goto L_11;
  return Q(e, t, n);   // tail call
  if (!((e.kind === 0))) goto L_3f;
  return B(e, t, n);   // tail call
  if (!((e.kind === 1))) goto L_4b;
  return J(e, t, n);   // tail call
  if (!((e.kind === 2))) goto L_1c9;
  let i;
  n.hasTrailingCollapsibleWhitespace = false;
  i = n.inlineViewChildren[e.childIndex];
  if (!((undefined !== i))) goto L_134;
  i.textStyle = {fontSize: n.fontResolver.resolveFontSize(), color: t.color};
  {fontSize: n.fontResolver.resolveFontSize(), color: t.color};
  t.appendInlineView(e.childIndex, G(e.verticalAlignment, i, n.compactInlineBadgeAlignment));
  return true;
  e.kind;
  return;
}

// fn G  args=3 vars=3 closure=1 cpool=0 bc=622B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// closure: P
function {
  if (!((t == null))) goto L_a;
  t;
  goto L_2b;
  if (((1 === undefined.kind))) goto L_11e;
  if (!((t == null))) goto L_3d;
  t;
  goto L_5e;
  if (!((0 === undefined.kind))) goto L_122;
  if (!(("icon" === t.element.type))) goto L_122;
  if (!((t.element.props == null))) goto L_fc;
  t.element.props;
  goto L_11d;
  if (!((true === undefined.inline))) goto L_122;
  return 4;
  if (!(P.Device.isWeb())) goto L_26c;
  if (!((t == null))) goto L_179;
  t;
  goto L_19a;
  if (!((0 === undefined.kind))) goto L_25e;
  if (!(("favicon" === t.element.type))) goto L_25e;
  if (!((t.element.props == null))) goto L_238;
  t.element.props;
  goto L_259;
  if (!((true === undefined.inline))) goto L_25e;
  return 4;
  if (((0 !== e))) goto L_266;
  if (!(n)) goto L_26a;
  return e;
  return 3;
  return e;
}

// fn J  args=3 vars=7 closure=2 cpool=0 bc=583B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, r, o, e#1
// closure: h, K
function {
  let r;
  let i;
  i = n.preservesInheritedTextDecoration;
  n.preservesInheritedTextDecoration = true;
  if (!((undefined !== e.link))) goto L_a5;
  goto L_15e;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== e.action))) goto L_15e;
  t.pushOnTap(h.makeDILTextActionTap(e.action, e.interaction));
  r = false;
  let o;
  for (const o of e.children) {
    let e#1;
    e#1 = K(o, t, n);
    if ((e#1)) goto L_1a0;
    r = r;
    r;
    if (!(e#1)) goto L_1b9;
    n.hasCurrentParagraphOutput = true;
    true;
  }
  if (!((undefined === e.link))) goto L_20c;
  if (((undefined === e.action))) goto L_235;
  t.pop();
  n.preservesInheritedTextDecoration = i;
  return r;
}

// fn Q  args=3 vars=4 closure=2 cpool=0 bc=423B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i
// closure: x, Z
function {
  let i;
  if (!(n.preserveWhitespace)) goto L_2b;
  goto L_bc;
  // [栈深重同步 1 -> 0]
  if (!(n.hasCurrentParagraphOutput)) goto L_99;
  i = x.normalizeDILTextWhitespace(e, !n.hasTrailingCollapsibleWhitespace, n.whitespaceMode);
  if (!((0 !== i.length))) goto L_1a6;
  t.appendText(Z(i, n.noWrap));
  if (!(!n.preserveWhitespace)) goto L_19b;
  if ((i.endsWith(" "))) goto L_19b;
  n.hasTrailingCollapsibleWhitespace = i.endsWith("
");
  return true;
}

// fn Y  args=1 vars=1 closure=2 cpool=0 bc=264B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: f, x
function {
  if (((true === e.truncate))) goto L_7a;
  if ((("nowrap" === e.wrap))) goto L_7a;
  if (!(f.isDILTableTypographyElementScopeActive())) goto L_c2;
  return x.DILTextWhitespaceMode.Normal;
  return x.DILTextWhitespaceMode.PreLine;
}

// fn Z  args=2 vars=2 closure=0 cpool=2 bc=53B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
function {
  if (!(t)) goto L_33;
  return e.replace(new RegExp("[ \\t\\n\\f\\r]+"), "�");
  return e;
}

// fn ee  args=2 vars=5 closure=3 cpool=0 bc=186B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n, i, o
// closure: r, re, te
function {
  let o;
  let i;
  let n;
  n = [];
  i = [];
  o = e[0];
  if ((("title" === t))) goto L_27;
  if (!(("text" === t))) goto L_98;
  if (!((1 === e.length))) goto L_98;
  if (!(r.isDILRuntimeElement(o))) goto L_98;
  if (!(("list" === o.type))) goto L_98;
  if ((re(o, n, i))) goto L_a5;
  if (!(te(e, n, i))) goto L_b9;
  return {children: n, inlineViewChildren: i};
  return;
}

// fn te  args=3 vars=4 closure=1 cpool=0 bc=34B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i
// closure: ne
function {
  let i;
  for (const i of e) {
    if (!(!ne(i, t, n))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn ne  args=3 vars=4 closure=3 cpool=0 bc=218B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i
// closure: ne, r, ie
function {
  if (((null == e))) goto L_f;
  if (!(("boolean" == typeof e))) goto L_14;
  return true;
  if ((("string" == typeof e))) goto L_28;
  if (!(("number" == typeof e))) goto L_5a;
  t.push(String(e));
  return true;
  if (!(Array.isArray(e))) goto L_a8;
  let i;
  for (const i of e) {
    if (!(!ne(i, t, n))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
  if (!(!!r.isDILRuntimeElement(e))) goto L_d9;
  return ie(e, t, n);
}

// fn ie  args=3 vars=12 closure=9 cpool=0 bc=1126B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, i#1, r, o, l, s, a, d, o#1
// closure: r, te, se, ae, N, le, ve, Te, he
function {
  let o#1;
  let i;
  if (!((e.type === r.DIL_FRAGMENT))) goto L_77;
  return te(e.children, t, n);   // tail call
  if (!(("string" != typeof e.type))) goto L_a9;
  return se(e, t, n);   // tail call
  if (!(("link" === e.type))) goto L_da;
  return ae(e, t, n);   // tail call
  i = N[e.type];
  if (!((undefined === i))) goto L_3c5;
  if (!(le(e))) goto L_3be;
  let d;
  let a;
  let s;
  let l;
  let o;
  let r;
  let i#1;
  i#1 = [];
  r = n.length;
  if (!(!te(e.children, i#1, n))) goto L_15f;
  return false;
  o = e.props;
  if (!((o == null))) goto L_18d;
  o;
  goto L_1ae;
  if (!(undefined.disabled)) goto L_1b3;
  goto L_1e3;
  // [栈深重同步 1 -> 0]
  if (!((o == null))) goto L_1c1;
  o;
  goto L_1e2;
  l = ve(undefined.onClick);
  s = i#1[0];
  a = n[r];
  if (!((undefined !== l))) goto L_27b;
  if (!((1 === i#1.length))) goto L_27b;
  if (!(("string" != typeof s))) goto L_27b;
  if (!((2 === s.kind))) goto L_27b;
  if (!((n.length === (r + 1)))) goto L_27b;
  if (!((a == null))) goto L_259;
  a;
  goto L_27a;
  d = (0 === undefined.kind);
  if (!(d)) goto L_36b;
  null;
  a;
  if (!((o == null))) goto L_2b7;
  o;
  goto L_2d8;
  if (!(("string" == typeof undefined.ariaLabel))) goto L_302;
  goto L_303;
  // [栈深重同步 4 -> 3]
  if (!((o == null))) goto L_318;
  o;
  goto L_339;
  if (!(("boolean" == typeof undefined.ariaPressed))) goto L_363;
  goto L_364;
  // [栈深重同步 4 -> 3]
  n[r] = {interaction: Te(e), action: l, ariaLabel: undefined, ariaPressed: undefined};
  {interaction: Te(e), action: l, ariaLabel: undefined, ariaPressed: undefined};
  if (!(d)) goto L_397;
  goto L_39a;
  // [栈深重同步 4 -> 3]
  t.push({action: l, interaction: Te(e), children: i#1, kind: 1});
  return true;
  return se(e, t, n);   // tail call
  o#1 = [];
  if (!(!!te(e.children, o#1, n))) goto L_465;
  t.push({children: o#1, element: i.element, kind: 0, viewModel: he(e, i)});
  return true;
}

// fn re  args=3 vars=11 closure=3 cpool=0 bc=801B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, r, o, l, s, a, d, c
// closure: r, oe, te
function {
  let c;
  let d;
  let a;
  let s;
  let l;
  let o;
  let i;
  i = e.props;
  if (!((i == null))) goto L_48;
  i;
  goto L_69;
  if (!(("number" !== undefined.marker))) goto L_6f;
  return false;
  let r;
  for (const r of i) {
    if (!(("marker" !== r))) continue;
    if (!(("start" !== r))) continue;
    return false;
  }
  <catch>;
  o = e.children[0];
  if (((1 !== e.children.length))) goto L_173;
  if ((!r.isDILRuntimeElement(o))) goto L_173;
  if ((("list-item" !== o.type))) goto L_173;
  if ((oe(o))) goto L_173;
  if (!((1 !== o.children.length))) goto L_178;
  return false;
  l = o.children[0];
  if ((!r.isDILRuntimeElement(l))) goto L_1ff;
  if ((("text" !== l.type))) goto L_1ff;
  if (!(oe(l))) goto L_204;
  return false;
  s = [];
  a = n.length;
  if (!(!te(l.children, s, n))) goto L_24a;
  n.length = a;
  return false;
  if (!((i == null))) goto L_255;
  i;
  goto L_276;
  d = undefined.start;
  if (!(("number" == typeof d))) goto L_2be;
  if (!(Number.isInteger(d))) goto L_2be;
  if (!((d > 0))) goto L_2be;
  goto L_2bf;
  // [栈深重同步 3 -> 2]
  c = 1;
  // append(["".concat(c, ". ")], 1, s)
  s;
  t.push.apply(t, ["".concat(c, ". ")]);
  return true;
}

// fn oe  args=1 vars=1 closure=0 cpool=0 bc=119B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!((undefined !== e.props))) goto L_76;
  return (0 !== Object.keys(e.props).length);
}

// fn le  args=1 vars=1 closure=1 cpool=0 bc=236B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: _
function {
  if (!(("pressable" === e.type))) goto L_eb;
  if (!((e.props == null))) goto L_5b;
  e.props;
  goto L_7c;
  if (!((true === undefined.inline))) goto L_eb;
  return (undefined === _.resolvePressableAccessibilityRole(e.props.role));
}

// fn se  args=3 vars=3 closure=1 cpool=0 bc=164B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// closure: pe
function {
  if ((pe(e))) goto L_5f;
  if (!(("math" === e.type))) goto L_64;
  goto L_65;
  // [栈深重同步 4 -> 3]
  t.push({childIndex: n.length, kind: 2, verticalAlignment: 3});
  n.push({element: e, kind: 0});
  return true;
}

// fn ae  args=3 vars=7 closure=7 cpool=0 bc=553B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
// locals: i, r, o, l
// closure: te, V, k, u, de, Te, ce
function {
  let l;
  let o;
  let r;
  let i;
  i = [];
  if (!(!te(e.children, i, n))) goto L_3e;
  return false;
  if (!((e.props == null))) goto L_8c;
  e.props;
  goto L_ad;
  r = V.normalizeDILLinkHref(undefined.href);
  if (!((undefined === r))) goto L_e9;
  // append([], 0, i)
  i;
  t.push.apply(t, []);
  return true;
  o = [{children: i, element: k.UnderlineElement, kind: 0, viewModel: {underline: "dotted"}}];
  if (!((e.props == null))) goto L_18a;
  e.props;
  goto L_1ab;
  l = new u.DILTextLink(r, de(undefined.title), V.makeDILOpenURLAction(r), Te(e));
  ce(o, n, l);
  t.push({link: l, children: o, kind: 1});
  return true;
}

// fn de  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!(("string" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn ce  args=3 vars=3 closure=0 cpool=0 bc=109B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t, n
function {
  e.push({childIndex: t.length, kind: 2, verticalAlignment: 3});
  t.push({kind: 1, link: n});
  return;
}

// fn pe  args=1 vars=3 closure=1 cpool=0 bc=382B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: t, e#1
// closure: r
function {
  if (!(("badge" === e.type))) goto L_2d;
  return true;
  if (!(("popover" !== e.type))) goto L_5a;
  return false;
  let t;
  for (const t of e.children) {
    if (!(r.isDILRuntimeElement(t))) continue;
    if (!(("popover-trigger" === t.type))) continue;
    let e#1;
    for (const e#1 of t.children) {
      if (!(r.isDILRuntimeElement(e#1))) continue;
      if (!(("badge" === e#1.type))) continue;
      return true;
      // [栈深重同步 0 -> 3]
    }
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn he  args=2 vars=5 closure=3 cpool=0 bc=386B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e, t
// locals: n, i, r
// closure: W, f, ue
function {
  let i;
  let n;
  n = {};
  i = e.props;
  if (!((undefined !== i))) goto L_e3;
  let r;
  for (const r of i) {
    if (!((true === t.allowedPropNames[r]))) goto L_7d;
    n[r] = i[r];
    goto L_da;
    // [栈深重同步 4 -> 3]
    if (!(("key" !== r))) goto L_da;
    W.warnUnsupportedDILPropName(String(e.type), r);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  if (!(f.isDILTableTypographyElementScopeActive())) goto L_177;
  f.applyDILTableTypographySize(n, t.element.tableTypographyRole);
  ue(n);
  return n;
}

// fn ue  args=1 vars=2 closure=1 cpool=0 bc=317B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: t
// closure: d
function {
  let t;
  t = d.getActiveDILInheritedTextStyleOverride();
  if (!((t == null))) goto L_35;
  t;
  goto L_56;
  if (!((undefined !== undefined.color))) goto L_8a;
  e.color = t.color;
  t.color;
  if (!((t == null))) goto L_96;
  t;
  goto L_b7;
  if (!((undefined.textDecoration === "strikethrough"))) goto L_ce;
  e.lineThrough = true;
  goto L_138;
  if (!((undefined.textDecoration === "underline"))) goto L_f1;
  e.lineThrough = false;
  e.underline = true;
  goto L_138;
  if (!((undefined.textDecoration === "dotted-underline"))) goto L_117;
  e.lineThrough = false;
  e.underline = "dotted";
  goto L_138;
  if (!((undefined.textDecoration === "none"))) goto L_138;
  e.lineThrough = false;
  e.underline = false;
  undefined.textDecoration;
  return t;
}

// fn me  args=1 vars=1 closure=1 cpool=0 bc=84B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: W
function {
  return {allowedPropNames: W.createDILPropNameAllowlist(e.dilV2Properties), element: e};
}

// fn ge  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!((null == e))) goto L_7;
  return "";
  return String(e);
}

// fn ve  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!(("function" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn xe  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!(("boolean" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn Ie  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn fe  args=1 vars=1 closure=0 cpool=0 bc=26B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
function {
  if ((("string" == typeof e))) goto L_14;
  if (!(("number" == typeof e))) goto L_18;
  return e;
  return undefined;
}

// fn Le  args=1 vars=1 closure=1 cpool=0 bc=229B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// closure: p
function {
  if (((e === p.DILTextLoadingType.Placeholder))) goto L_e0;
  if (((e === p.DILTextLoadingType.Message))) goto L_e0;
  if (!((e === p.DILTextLoadingType.Indeterminate))) goto L_e4;
  return e;
  return;
}

// fn Te  args=1 vars=2 closure=2 cpool=0 bc=252B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: e
// locals: t
// closure: r, l
function {
  let t;
  t = r.getDilElementInteractionScope(e);
  if (((undefined === t))) goto L_5c;
  if (!(("string" != typeof e.type))) goto L_60;
  return undefined;
  return {target: e.type, affordance: l.DILInteractionAffordance.Pressable, scope: t.scope};
}

// fn <atom:0>  args=3 vars=85 closure=0 cpool=51 bc=1369B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// args: require, module, exports
// locals: e, t, n, i, r, o, l, s, a, d, c, p, h, u, m, g, v, x, I, f, L, T, y, D, C, w, S, b, k, P, E, M, V, A, _, R, W, q, j, N, DILTextElementRenderer, <class_fields_init>, DILTextElementRenderer#1, O, F, z, H, U, DILInlineTextBuilder, <class_fields_init>#1, DILInlineTextBuilder#1, B, $, X, K, G, J, Q, Y, Z, ee, te, ne, ie, re, oe, le, se, ae, de, ce, pe, he, ue, me, ge, ve, xe, Ie, fe, Le, Te
function {
  O = function O;
  F = function F;
  z = function z;
  H = function H;
  U = function U;
  B = function B;
  $ = function $;
  X = function X;
  K = function K;
  G = function G;
  J = function J;
  Q = function Q;
  Y = function Y;
  Z = function Z;
  ee = function ee;
  te = function te;
  ne = function ne;
  ie = function ie;
  re = function re;
  oe = function oe;
  le = function le;
  se = function se;
  ae = function ae;
  de = function de;
  ce = function ce;
  pe = function pe;
  he = function he;
  ue = function ue;
  me = function me;
  ge = function ge;
  ve = function ve;
  xe = function xe;
  Ie = function Ie;
  fe = function fe;
  Le = function Le;
  Te = function Te;
  let DILInlineTextBuilder#1;
  let DILTextElementRenderer#1;
  let N;
  let j;
  let q;
  let W;
  let R;
  let _;
  let A;
  let V;
  let M;
  let E;
  let P;
  let k;
  let b;
  let S;
  let w;
  let C;
  let D;
  let y;
  let T;
  let L;
  let f;
  let I;
  let x;
  let v;
  let g;
  let m;
  let u;
  let h;
  let p;
  let c;
  let d;
  let a;
  let s;
  let l;
  let o;
  let r;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_LINK_TEXT_ELEMENT = undefined;
  exports.DILTextElementRenderer = undefined;
  e = require("valdi_core/src/SystemFont");
  t = require("dil_core/src/DILInteractionRenderState");
  n = require("dil_renderer/src/DILRenderer");
  i = require("dil_renderer/src/DILTextNodeRenderState");
  r = require("dil_renderer/src/DILElement");
  o = require("dil_compiler/src/DILAutoSpacingRenderState");
  l = require("dil_core/src/DILInteraction");
  s = require("dil_core/src/DILTextSelectionRenderState");
  a = require("dil_core/src/colors/DILColor");
  d = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  c = require("dil_core/src/layout/DILV2AutoSpacing");
  p = require("dil_text/src/DILTextComponent");
  h = require("dil_text/src/rendering/DILTextActionTap");
  u = require("dil_text/src/rendering/DILAttributedTextBuilder");
  m = require("dil_text/src/rendering/DILTextFont");
  g = require("dil_text/src/rendering/DILTextFontResolver");
  v = require("dil_text/src/rendering/DILTextProperties");
  x = require("dil_text/src/rendering/DILTextWhitespace");
  I = require("dil_text/src/rendering/DILStreamingText");
  f = require("dil_text/src/rendering/DILTableTypographyRenderState");
  L = require("dil_text/src/text_elements/BoldElement");
  T = require("dil_text/src/text_elements/CaptionElement");
  y = require("dil_text/src/text_elements/CodeElement");
  D = require("dil_text/src/text_elements/ItalicElement");
  C = require("dil_text/src/text_elements/LabelElement");
  w = require("dil_text/src/text_elements/StrikethroughElement");
  S = require("dil_text/src/text_elements/TextElement");
  b = require("dil_text/src/text_elements/TitleElement");
  k = require("dil_text/src/text_elements/UnderlineElement");
  P = require("valdi_core/src/Device");
  E = require("valdi_core/src/JSX");
  M = require("valdi_core/src/utils/Callback");
  V = require("../DILLink");
  A = require("../widgets/Icon");
  _ = require("../widgets/Pressable");
  R = require("./DILInlineTextStyle");
  W = require("./DILPropNameValidation");
  q = require("./DILInlineTextSiblingRenderState");
  j = require("./primitiveChildrenToString");
  N = {bold: me(L.BoldElement), caption: me(T.DILV2CaptionElement), code: me(y.CodeElement), italic: me(D.ItalicElement), label: me(C.LabelElement), strikethrough: me(w.StrikethroughElement), text: me(S.TextElement), title: me(b.TitleElement), underline: me(k.UnderlineElement)};
  null;
  S.TextElement;
  exports.DIL_LINK_TEXT_ELEMENT = {dilV2Properties: ["href", "title"]};
  let DILTextElementRenderer;
  let <class_fields_init>;
  class DILTextElementRenderer extends undefined { ... }
  <proto:DILTextElementRenderer>.beginRender = function <atom:0>;
  <proto:DILTextElementRenderer>.setProp = function <atom:0>;
  <proto:DILTextElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILTextElementRenderer>.setChildren = function <atom:0>;
  <proto:DILTextElementRenderer>.endRender = function <atom:0>;
  <proto:DILTextElementRenderer>.shimmer = function <atom:0>;
  <proto:DILTextElementRenderer>.componentClass = function <atom:0>;
  <proto:DILTextElementRenderer>.setTrustedProp = function <atom:0>;
  <proto:DILTextElementRenderer>.currentState = function <atom:0>;
  <proto:DILTextElementRenderer>.renderInlineViewChildren = function <atom:0>;
  <proto:DILTextElementRenderer>.renderTappableInlineView = function <atom:0>;
  <proto:DILTextElementRenderer>.renderLinkIcon = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextElementRenderer>;
  DILTextElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextElementRenderer#1 = function <atom:0>;
  exports.DILTextElementRenderer = DILTextElementRenderer#1;
  let DILInlineTextBuilder;
  let <class_fields_init>#1;
  class DILInlineTextBuilder extends u.DILAttributedTextBuilder { ... }
  <proto:DILInlineTextBuilder>.pushColor = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILInlineTextBuilder>;
  DILInlineTextBuilder = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILInlineTextBuilder#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILTextElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
