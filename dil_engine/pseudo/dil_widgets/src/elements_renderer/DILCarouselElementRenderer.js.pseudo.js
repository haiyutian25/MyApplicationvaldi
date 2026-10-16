// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=171B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(this.viewModel.flush)) goto L_4b;
  goto L_4d;
  // [栈深重同步 2 -> 1]
  e.paddingTop = 8;
  if (!(this.viewModel.flush)) goto L_9f;
  goto L_a1;
  // [栈深重同步 2 -> 1]
  e.paddingBottom = 8;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=683B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: t, r, i, o, this, <home_object>
// closure: v
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  let i;
  let r;
  let t;
  super["applyAdditionalScrollContainerAttributes"].call(this, e);
  if (!((e.left == null))) goto L_56;
  e.left;
  e.left = undefined;
  undefined;
  if (!((e.marginLeft == null))) goto L_8a;
  e.marginLeft;
  e.marginLeft = undefined;
  undefined;
  if (!((e.marginRight == null))) goto L_be;
  e.marginRight;
  e.marginRight = undefined;
  undefined;
  if (!((e.viewportExtensionLeft == null))) goto L_f2;
  e.viewportExtensionLeft;
  e.viewportExtensionLeft = undefined;
  undefined;
  if (!((e.viewportExtensionRight == null))) goto L_126;
  e.viewportExtensionRight;
  e.viewportExtensionRight = undefined;
  undefined;
  t = this.viewModel.containerGutter;
  if (!((undefined === t))) goto L_174;
  return;
  r = v(t.left);
  i = v(t.right);
  if (((undefined === r))) goto L_1e0;
  if (((undefined === i))) goto L_1e0;
  if (!((0 === r))) goto L_1e3;
  if (!((0 === i))) goto L_1e3;
  return;
  e.left = -r;
  e.marginLeft = 0;
  e.marginRight = -(r + i);
  o = Math.max(0, r, i);
  if (!((e.viewportExtensionLeft == null))) goto L_274;
  e.viewportExtensionLeft;
  e.viewportExtensionLeft = o;
  o;
  if (!((e.viewportExtensionRight == null))) goto L_2aa;
  e.viewportExtensionRight;
  e.viewportExtensionRight = o;
  o;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
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

// fn v  args=1 vars=3 closure=0 cpool=0 bc=322B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: t, r
function {
  let r;
  let t;
  if (!(("number" == typeof e))) goto L_40;
  if (!(Number.isFinite(e))) goto L_3e;
  return e;
  return undefined;
  if (!(e.trim().endsWith("px"))) goto L_de;
  goto L_103;
  // [栈深重同步 1 -> 0]
  t = e.trim();
  r = Number(t);
  if (!(Number.isFinite(r))) goto L_140;
  return r;
  return undefined;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=62B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this.active_func, new.target, this
// closure: DILV2BaseCarousel, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("carousel", DILV2BaseCarousel);
  if (!(<class_fields_init>)) goto L_29;
  <class_fields_init>.call(this);
  new new.target("carousel", DILV2BaseCarousel);
  this.itemSizingContexts = [];
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=457B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, r
// locals: i, o, this, <home_object>
// closure: t
function {
  <home_object> = <special_object 4>;
  this = this;
  let o;
  let i;
  super["beginRender"].call(this, e, r);
  this.itemSizingContexts.push(undefined);
  i = r.renderState;
  if (!((undefined === i))) goto L_8f;
  goto L_b7;
  // [栈深重同步 1 -> 0]
  o = t.getDILContainerGutterContext(i);
  this.setViewModelProperty("bleed", true);
  this.setViewModelProperty("containerGutter", o);
  this.setViewModelProperty("scrollable", true);
  this.setViewModelProperty("scrollableContentGutterMode", "padding");
  this.setViewModelProperty("gap", 2);
  this.setViewModelProperty("flush", false);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=298B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: t, r, i, this, <home_object>
// closure: c
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  let t;
  t = super["resolveChildRenderOptions"].call(this, e);
  r = t.renderState;
  if (!((undefined === r))) goto L_4e;
  return t;
  i = {viewportWidth: c.resolveDILHorizontalScrollViewportWidth(this.getViewModelProperty("width"))};
  this.itemSizingContexts[(this.itemSizingContexts.length - 1)] = i;
  null;
  t;
  return {renderState: c.renderStateWithDILHorizontalScrollItemContext(r, i)};
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=315B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: r, this, <home_object>
// closure: l
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  r = this.itemSizingContexts[(this.itemSizingContexts.length - 1)];
  if (!((undefined !== r))) goto L_12b;
  r.fittedWidth = l.resolveCarouselItemWidth(r.viewportWidth, this.getViewModelProperty("gap"), this.getViewModelProperty("visibleItems"), e.count);
  l.resolveCarouselItemWidth(r.viewportWidth, this.getViewModelProperty("gap"), this.getViewModelProperty("visibleItems"), e.count);
  super["setChildren"].call(this, e, t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_20
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 38
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 38
  throw <?>;
  this.itemSizingContexts.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=95B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this.active_func, new.target, this
// closure: p, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("card", p.Card);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("card", p.Card);
  this.cardStack = [];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=150B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: I
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.cardStack.push({padding: undefined, variant: undefined});
  this.setViewModelProperty("style", I);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=363B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: r, this, <home_object>
// closure: p
function {
  <home_object> = <special_object 4>;
  this = this;
  let r;
  super["setProp"].call(this, e, t);
  r = this.cardStack[(this.cardStack.length - 1)];
  if (!(("padding" === e))) goto L_7a;
  r.padding = t;
  goto L_16a;
  // [栈深重同步 1 -> 0]
  if (!(("variant" === e))) goto L_16a;
  if (!((t === p.CardVariant.Soft))) goto L_11b;
  goto L_160;
  // [栈深重同步 2 -> 1]
  r.variant = p.CardVariant.Default;
  p.CardVariant.Default;
  return;
}

// fn <atom:0>  args=1 vars=9 closure=4 cpool=0 bc=507B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: r
// locals: i, o, n, s, d, l, this, <home_object>
// closure: p, h, t, e
function {
  <home_object> = <special_object 4>;
  this = this;
  let l;
  let d;
  let s;
  let n;
  let o;
  let i;
  i = super["resolveChildRenderOptions"].call(this, r);
  o = i.renderState;
  if (!((undefined === o))) goto L_59;
  return i;
  n = this.cardStack[(this.cardStack.length - 1)];
  if (!((n.padding == null))) goto L_137;
  n.padding;
  s = p.resolveCardSurface(n.variant).padding;
  d = h.resolveDILContainerGutterContext(s);
  if (!((false === this.getViewModelProperty("selectable")))) goto L_1e0;
  goto L_1e3;
  // [栈深重同步 2 -> 1]
  l = t.renderStateWithDILContainerGutter(o, d);
  null;
  i;
  return {renderState: l};
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=111B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  try { // catch -> L_20
  super["endRender"].call(this);
  <?>;
  // gosub (finally 块) 38
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 38
  throw <?>;
  this.cardStack.pop();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=80B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this.active_func, new.target, this
// closure: a, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("carousel-item", a.BaseCarouselItem);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("carousel-item", a.BaseCarouselItem);
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=30B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: w, S
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  w(this, t);
  S(this, t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=25B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: L
function {
  <home_object> = <special_object 4>;
  this = this;
  L(this, e);
  super["setProp"].call(this, e, t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=147B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this, <home_object>
// closure: g
function {
  <home_object> = <special_object 4>;
  this = this;
  this.setViewModelProperty("radius", g(this.getViewModelProperty("radius"), this.getViewModelProperty("variant")));
  super["endComponent"].call(this);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=22B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this, <home_object>
// closure: D
function {
  <home_object> = <special_object 4>;
  this = this;
  return D(super["resolveChildRenderOptions"].call(this, e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  this.setViewModelProperty("horizontalScrollItemViewportWidth", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=90B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  this.setViewModelProperty("carouselFittedWidth", e);
  this.setViewModelProperty("width", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=113B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(("width" === e))) goto L_39;
  goto L_70;
  // [栈深重同步 1 -> 0]
  if (!(("minWidth" === e))) goto L_70;
  this.setViewModelProperty("carouselHasAuthoredMinWidth", true);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=181B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this.active_func, new.target, this
// closure: u, <class_fields_init>, n
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("carousel-media-item", u.BaseCarouselMediaItem);
  if (!(<class_fields_init>)) goto L_4a;
  <class_fields_init>.call(this);
  new new.target("carousel-media-item", u.BaseCarouselMediaItem);
  this.childrenMode = n.DILElementChildrenMode.ResolvedValues;
  this.renderedPropNames = ["media"];
  return this;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=75B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: w, S
function {
  <home_object> = <special_object 4>;
  this = this;
  super["beginRender"].call(this, e, t);
  this.setViewModelProperty("mediaFrameRadius", 24);
  w(this, t);
  S(this, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=22B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this, <home_object>
// closure: D
function {
  <home_object> = <special_object 4>;
  this = this;
  return D(super["resolveChildRenderOptions"].call(this, e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  this.setViewModelProperty("horizontalScrollItemViewportWidth", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=90B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  this.setViewModelProperty("carouselFittedWidth", e);
  this.setViewModelProperty("width", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=113B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: this
function {
  this = this;
  if (!(("width" === e))) goto L_39;
  goto L_70;
  // [栈深重同步 1 -> 0]
  if (!(("minWidth" === e))) goto L_70;
  this.setViewModelProperty("carouselHasAuthoredMinWidth", true);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=25B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: this, <home_object>
// closure: L
function {
  <home_object> = <special_object 4>;
  this = this;
  L(this, e);
  super["setProp"].call(this, e, t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=147B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: this, <home_object>
// closure: g
function {
  <home_object> = <special_object 4>;
  this = this;
  this.setViewModelProperty("radius", g(this.getViewModelProperty("radius"), this.getViewModelProperty("variant")));
  super["endComponent"].call(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=85B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// closure: e, a, l, m
function {
  if (!(l)) goto L_50;
  goto L_51;
  // [栈深重同步 4 -> 3]
  e.renderSelected(a, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// closure: M
function {
  return !M(e);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// closure: e, p
function {
  e.renderSelected(p, undefined);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=40B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: t, r
// closure: e
function {
  e.renderSelected(t, r);
  return;
}

// fn <atom:0>  args=2 vars=10 closure=7 cpool=4 bc=1385B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: r, i, n, l, a, p, this, <home_object>
// closure: m, M, o, R, u, s, d
function {
  <home_object> = <special_object 4>;
  this = this;
  let i;
  let r;
  if (!((undefined === t))) goto L_21;
  throw new Error("DIL v2 carousel media item renderer requires resolved children.");
  r = t.find(M);
  if (!((r == null))) goto L_7b;
  r;
  i = this.getViewModelProperty("media");
  if (!(o.isDILRuntimeElement(i))) goto L_46a;
  let p;
  let a;
  let l;
  let n;
  if (!((r == null))) goto L_c0;
  r;
  goto L_e3;
  if (!((undefined.children[0] == null))) goto L_eb;
  undefined.children[0];
  n = i;
  if (!(o.isDILRuntimeElement(n))) goto L_142;
  l = ("image" === n.type);
  if (!(o.isDILRuntimeElement(n))) goto L_1e6;
  if (!((n.props == null))) goto L_1c4;
  n.props;
  goto L_1e5;
  this.setViewModelProperty("mediaOwnsRadius", (null != undefined.radius));
  this.setViewModelProperty("mediaIntrinsicWidth", R(n, u.resolveCarouselMediaFrameHeight(this.getViewModelProperty("size"))));
  if (!((r == null))) goto L_277;
  r;
  goto L_299;
  if (!((1 === undefined.children.length))) goto L_2ec;
  if (!(o.isDILRuntimeElement(n))) goto L_2ec;
  goto L_2f2;
  // [栈深重同步 1 -> 0]
  a = [i];
  s.jsx.setNamedSlot("media", d.createReusableCallback(function <atom:0>));
  if (!((undefined === r))) goto L_373;
  goto L_39a;
  // [栈深重同步 1 -> 0]
  p = t.filter(function <atom:0>);
  if (!((0 === p.length))) goto L_3f4;
  s.jsx.setNamedSlot("default", undefined);
  super["setChildren"].call(this, {count: p.length, render: d.createReusableCallback(function <atom:0>), renderSelected: d.createReusableCallback(function <atom:0>)}, p);
  return;
  this.setViewModelProperty("mediaIntrinsicWidth", undefined);
  s.jsx.setNamedSlot("media", undefined);
  if (!((0 === e.count))) goto L_557;
  s.jsx.setUnnamedSlot(undefined);
  super["setChildren"].call(this, e, t);
  return;
}

// fn g  args=2 vars=2 closure=0 cpool=0 bc=42B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
function {
  if (!((e == null))) goto L_29;
  e;
  if ((("outline" === t))) goto L_23;
  if ((("soft" === t))) goto L_23;
  if (!(("elevated" === t))) goto L_28;
  return 24;
  return undefined;
}

// fn R  args=2 vars=6 closure=3 cpool=0 bc=810B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: n, s, d, l
// closure: o, r, i
function {
  let l;
  let d;
  let s;
  let n;
  if ((!o.isDILRuntimeElement(e))) goto L_88;
  if (!((e.props == null))) goto L_66;
  e.props;
  goto L_87;
  if (!(("100%" !== undefined.width))) goto L_8b;
  return;
  n = e.props.aspectRatio;
  if ((("number" == typeof n))) goto L_e7;
  if (!(("string" == typeof n))) goto L_113;
  goto L_114;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (((undefined === s))) goto L_154;
  if ((!Number.isFinite(s))) goto L_154;
  if (!((s <= 0))) goto L_157;
  return;
  if (((null == e.props.height))) goto L_239;
  if ((("auto" === e.props.height))) goto L_239;
  if (!(("100%" === e.props.height))) goto L_23e;
  goto L_2a6;
  // [栈深重同步 1 -> 0]
  d = i.parseCSSValue(e.props.height);
  if ((("number" != typeof d))) goto L_2eb;
  if ((!Number.isFinite(d))) goto L_2eb;
  if (!((d < 0))) goto L_2ee;
  return;
  l = (d * s);
  if (!(Number.isFinite(l))) goto L_328;
  return l;
  return undefined;
}

// fn w  args=2 vars=4 closure=1 cpool=0 bc=140B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: r, i
// closure: c
function {
  let i;
  let r;
  r = t.renderState;
  if (!((undefined === r))) goto L_31;
  return;
  i = c.getDILHorizontalScrollItemViewportWidth(r);
  if (!((undefined !== i))) goto L_8b;
  e.setHorizontalScrollItemViewportWidth(i);
  return;
}

// fn S  args=2 vars=4 closure=1 cpool=0 bc=140B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
// locals: r, i
// closure: c
function {
  let i;
  let r;
  r = t.renderState;
  if (!((undefined === r))) goto L_31;
  return;
  i = c.getDILHorizontalScrollItemFittedWidth(r);
  if (!((undefined !== i))) goto L_8b;
  e.setCarouselFittedWidth(i);
  return;
}

// fn L  args=2 vars=2 closure=0 cpool=0 bc=61B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e, t
function {
  if (!(("width" !== t))) goto L_12;
  if ((("minWidth" !== t))) goto L_3c;
  e.markCarouselSizeAuthored(t);
  return;
}

// fn D  args=1 vars=2 closure=1 cpool=0 bc=146B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// locals: t
// closure: c
function {
  let t;
  t = e.renderState;
  if (((undefined === t))) goto L_59;
  if (!((undefined === c.getDILHorizontalScrollItemViewportWidth(t)))) goto L_5d;
  return e;
  null;
  e;
  return {renderState: c.renderStateWithoutDILHorizontalScrollItemContext(t)};
}

// fn M  args=1 vars=1 closure=1 cpool=0 bc=206B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: e
// closure: o
function {
  if (!(o.isDILRuntimeElement(e))) goto L_cd;
  if (!((e.type === o.DIL_RENDERED_PROP_ELEMENT_TYPE))) goto L_cd;
  if (!((e.props == null))) goto L_a7;
  e.props;
  goto L_cc;
  return ("media" === undefined[o.DIL_RENDERED_PROP_NAME]);
}

// fn <atom:0>  args=3 vars=43 closure=0 cpool=38 bc=906B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// args: require, module, exports
// locals: e, t, r, i, o, n, s, d, l, a, u, p, h, c, m, C, DILV2BaseCarousel, <class_fields_init>, DILV2BaseCarousel#1, v, DILCarouselElementRenderer, <class_fields_init>#1, DILCarouselElementRenderer#1, I, DILCardElementRenderer, <class_fields_init>#2, DILCardElementRenderer#1, DILCarouselItemElementRenderer, <class_fields_init>#3, DILCarouselItemElementRenderer#1, DILCarouselMediaItemElementRenderer, <class_fields_init>#4, DILCarouselMediaItemElementRenderer#1, g, R, w, S, L, D, M
function {
  v = function v;
  g = function g;
  R = function R;
  w = function w;
  S = function S;
  L = function L;
  D = function D;
  M = function M;
  let DILCarouselMediaItemElementRenderer#1;
  let DILCarouselItemElementRenderer#1;
  let DILCardElementRenderer#1;
  let I;
  let DILCarouselElementRenderer#1;
  let DILV2BaseCarousel#1;
  let C;
  let m;
  let c;
  let h;
  let p;
  let u;
  let a;
  let l;
  let d;
  let s;
  let n;
  let o;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCarouselElementRenderer = undefined;
  exports.DILCardElementRenderer = undefined;
  exports.DILCarouselItemElementRenderer = undefined;
  exports.DILCarouselMediaItemElementRenderer = undefined;
  e = require("dil_core/src/DILTextSelectionRenderState");
  t = require("dil_compiler/src/DILContainerGutterRenderState");
  r = require("dil_core/src/layout/DILLayout");
  i = require("dil_core/src/utils/AttributeParser");
  o = require("dil_renderer/src/DILElement");
  n = require("dil_renderer/src/DILRenderer");
  s = require("valdi_core/src/JSX");
  d = require("valdi_core/src/utils/Callback");
  l = require("../widgets/BaseCarousel");
  a = require("../widgets/BaseCarouselItem");
  u = require("../widgets/BaseCarouselMediaItem");
  p = require("../widgets/Card");
  h = require("../widgets/DILContainerGutter");
  c = require("../widgets/DILFlexContainerWidgetRenderer");
  m = require("./DILImageFrameRenderState");
  C = require("./DILComponentElementRenderer");
  let DILV2BaseCarousel;
  let <class_fields_init>;
  class DILV2BaseCarousel extends l.BaseCarousel { ... }
  <proto:DILV2BaseCarousel>.applyAdditionalScrollContentAttributes = function <atom:0>;
  <proto:DILV2BaseCarousel>.applyAdditionalScrollContainerAttributes = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILV2BaseCarousel>;
  DILV2BaseCarousel = function <atom:0>;
  // close_loc <class_fields_init>
  DILV2BaseCarousel#1 = function <atom:0>;
  let DILCarouselElementRenderer;
  let <class_fields_init>#1;
  class DILCarouselElementRenderer extends C.DILComponentElementRenderer { ... }
  <proto:DILCarouselElementRenderer>.beginRender = function <atom:0>;
  <proto:DILCarouselElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILCarouselElementRenderer>.setChildren = function <atom:0>;
  <proto:DILCarouselElementRenderer>.endRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILCarouselElementRenderer>;
  DILCarouselElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILCarouselElementRenderer#1 = function <atom:0>;
  exports.DILCarouselElementRenderer = DILCarouselElementRenderer#1;
  I = {borderRadius: 16};
  let DILCardElementRenderer;
  let <class_fields_init>#2;
  class DILCardElementRenderer extends C.DILComponentElementRenderer { ... }
  <proto:DILCardElementRenderer>.beginRender = function <atom:0>;
  <proto:DILCardElementRenderer>.setProp = function <atom:0>;
  <proto:DILCardElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILCardElementRenderer>.endRender = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DILCardElementRenderer>;
  DILCardElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#2
  DILCardElementRenderer#1 = function <atom:0>;
  exports.DILCardElementRenderer = DILCardElementRenderer#1;
  let DILCarouselItemElementRenderer;
  let <class_fields_init>#3;
  class DILCarouselItemElementRenderer extends C.DILComponentElementRenderer { ... }
  <proto:DILCarouselItemElementRenderer>.beginRender = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.setProp = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.endComponent = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.setHorizontalScrollItemViewportWidth = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.setCarouselFittedWidth = function <atom:0>;
  <proto:DILCarouselItemElementRenderer>.markCarouselSizeAuthored = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:DILCarouselItemElementRenderer>;
  DILCarouselItemElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#3
  DILCarouselItemElementRenderer#1 = function <atom:0>;
  exports.DILCarouselItemElementRenderer = DILCarouselItemElementRenderer#1;
  let DILCarouselMediaItemElementRenderer;
  let <class_fields_init>#4;
  class DILCarouselMediaItemElementRenderer extends C.DILComponentElementRenderer { ... }
  <proto:DILCarouselMediaItemElementRenderer>.beginRender = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.resolveChildRenderOptions = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.setHorizontalScrollItemViewportWidth = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.setCarouselFittedWidth = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.markCarouselSizeAuthored = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.setProp = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.endComponent = function <atom:0>;
  <proto:DILCarouselMediaItemElementRenderer>.setChildren = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:DILCarouselMediaItemElementRenderer>;
  DILCarouselMediaItemElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>#4
  DILCarouselMediaItemElementRenderer#1 = function <atom:0>;
  exports.DILCarouselMediaItemElementRenderer = DILCarouselMediaItemElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILCarouselElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
