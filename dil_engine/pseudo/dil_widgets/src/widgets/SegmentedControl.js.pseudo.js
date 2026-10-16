// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=dil_widgets/src/widgets/SegmentedControl
// closure: this, e
function {
  return this.applyChange(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=137B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.runWithUserInteraction;
  if (!((undefined === t))) goto L_82;
  goto L_88;
  // [栈深重同步 1 -> 0]
  t(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=63B file=dil_widgets/src/widgets/SegmentedControl
// locals: this, this.active_func, new.target, arguments
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
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/SegmentedControl
function {
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=1673B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
// closure: e, SegmentedControlTrack, t
function {
  this = this;
  e.beginComponent(SegmentedControlTrack, t, undefined, undefined);
  e.setViewModelProperty("baseViewAttributes", this.baseViewAttributes);
  e.setViewModelProperty("block", this.viewModel.block);
  e.setViewModelProperty("defaultValue", this.viewModel.defaultValue);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("options", this.viewModel.options);
  e.setViewModelProperty("padding", this.viewModel.padding);
  e.setViewModelProperty("pill", this.viewModel.pill);
  e.setViewModelProperty("selectedValue", this.value);
  e.setViewModelProperty("size", this.viewModel.size);
  e.setViewModelProperty("textSize", this.viewModel.textSize);
  e.setViewModelProperty("trackPadding", this.viewModel.trackPadding);
  e.setViewModelProperty("valueIsControlled", (undefined !== this.viewModel.value));
  e.setViewModelProperty("variant", this.viewModel.variant);
  e.setViewModelProperty("onChange", this.handleChange);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=159B file=dil_widgets/src/widgets/SegmentedControl
// locals: e, this
// closure: c
function {
  this = this;
  let e;
  e = this.viewModel.value;
  if (!((e instanceof c.DILWidgetBinding))) goto L_9b;
  return e.asString();
  return e;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=584B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t, i, this
// closure: d, V, I
function {
  this = this;
  let i;
  let t;
  t = e.value;
  if (!((t === this.value))) goto L_54;
  return;
  d.observeDILControlInteraction(this.context, this.viewModel, {target: "segmented_control", affordance: d.DILInteractionAffordance.Option, value: t});
  i = this.viewModel.onChange;
  if (!((undefined === i))) goto L_240;
  goto L_247;
  // [栈深重同步 1 -> 0]
  i(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
// closure: this
function {
  this.handleOptionTap(t);
  return;
}

// fn <atom:0>  args=0 vars=12 closure=3 cpool=1 bc=1350B file=dil_widgets/src/widgets/SegmentedControl
// locals: e, t, i, s, o, r, e#1, s#1, o#1, r#1, s#2, n
// closure: this, L, U
function {
  let r#1;
  let o#1;
  let i;
  let t;
  let e;
  if (!((this.viewModel.options == null))) goto L_5c;
  this.viewModel.options;
  e = [];
  t = 0;
  i = 0;
  let s;
  s = 0;
  if (!((s < e.length))) goto L_2ff;
  let r;
  let o;
  o = e[s];
  r = this.optionRefs.getForKey(L(o, s));
  if (!((undefined !== r))) goto L_2f4;
  let s#1;
  let e#1;
  this.optionFrames[o.value] = U(r.frame);
  e#1 = r.children[0];
  s#1 = e#1.children[0];
  t = Math.max(t, ((s#1.frame.width + r.frame.width) - e#1.frame.width));
  Math.max(t, ((s#1.frame.width + r.frame.width) - e#1.frame.width));
  i = (i + r.frame.width);
  (i + r.frame.width);
  s = <s_new>;
  (s++);
  goto L_66;
  o#1 = this.trackRef.single();
  r#1 = this.scrollRef.single();
  if (!(this.viewModel.block)) goto L_51e;
  if (!((e.length > 0))) goto L_51e;
  if (!(o#1)) goto L_51e;
  if (!(r#1)) goto L_51e;
  let n;
  let s#2;
  s#2 = (r#1.frame.width - (o#1.frame.width - i));
  n = ((t * e.length) <= (s#2 + 0.001));
  if (!((n !== this.state.usesEqualWidths))) goto L_51d;
  this.setState({usesEqualWidths: n});
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=2 bc=353B file=dil_widgets/src/widgets/SegmentedControl
// locals: this, this.active_func, new.target, arguments
// closure: L, U, <class_fields_init>, f
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
  this.state = {localValue: this.viewModel.defaultValue, usesEqualWidths: false};
  this.optionFrames = {};
  this.optionLayoutHandlers = {};
  this.optionRefs = new f.ElementRef();
  this.trackRef = new f.ElementRef();
  this.scrollRef = new f.ElementRef();
  this.handleNativeChange = function <atom:0>;
  this.handleTrackLayoutComplete = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=279B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t, this
// closure: B
function {
  this = this;
  let t;
  if (!((undefined === e))) goto L_b;
  return;
  t = this.controlledSelectedValue;
  if (!((B(e) === t))) goto L_ed;
  if (!((this.state.activeOptionFrameValue === t))) goto L_ed;
  if (((e.options === this.viewModel.options))) goto L_116;
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=930B file=dil_widgets/src/widgets/SegmentedControl
// locals: t, o, r, this
// closure: m, e, i, K
function {
  this = this;
  let r;
  let o;
  let t;
  t = this.viewModel.baseViewAttributes;
  o = (true === this.viewModel.block);
  if (!(m.supportsNativeIOSSegmentedControls())) goto L_e7;
  r = ("ghost" !== this.variant);
  e.beginRender(i, undefined);
  e.setAttributeRef(this.scrollRef);
  e.setAttributeStyle("style", K.scroll);
  e.setAttributes(t);
  if (!(o)) goto L_20b;
  goto L_210;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignSelf", "flex-start");
  if (!(!r)) goto L_28c;
  if (!(this.viewModel.disabled)) goto L_28c;
  goto L_28d;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!(o)) goto L_2c6;
  goto L_2c7;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  if (!(r)) goto L_2fc;
  goto L_31e;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onLayoutComplete", this.handleTrackLayoutComplete);
  if (!(r)) goto L_351;
  goto L_379;
  // [栈深重同步 1 -> 0]
  this.renderTrack(o);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=615B file=dil_widgets/src/widgets/SegmentedControl
// args: t
// locals: this
// closure: e, y, o
function {
  this = this;
  e.beginComponent(y.SegmentedControl, o, undefined, undefined);
  e.setViewModelProperty("block", t);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  if (!((this.viewModel.options == null))) goto L_165;
  this.viewModel.options;
  e.setViewModelProperty("options", []);
  e.setViewModelProperty("value", this.selectedValue);
  if (!(t)) goto L_1eb;
  goto L_1ec;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("width", undefined);
  e.setViewModelProperty("onChange", this.handleNativeChange);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=10 cpool=0 bc=1470B file=dil_widgets/src/widgets/SegmentedControl
// args: t
// locals: i, o, s, this
// closure: k, D, A, p, e, r, K, w, u, F
function {
  this = this;
  let s;
  let o;
  let i;
  i = this.variant;
  o = {};
  if (!((this.viewModel.trackPadding == null))) goto L_8b;
  this.viewModel.trackPadding;
  if (!(("ghost" === i))) goto L_88;
  goto L_8b;
  // [栈深重同步 1 -> 0]
  s = D;
  A.applyResolvedDILPaddingAttributes(o, p.resolveDILPadding(s));
  e.beginRender(r, undefined);
  e.setAttributeRef(this.trackRef);
  e.setAttributeStyle("style", K.root);
  e.setAttributes(o);
  if (!((this.viewModel.label == null))) goto L_245;
  this.viewModel.label;
  e.setAttributeString("accessibilityLabel", "Options");
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  if (!(w.Device.isWeb())) goto L_336;
  goto L_337;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("focusGroup", undefined);
  if (!(("ghost" === i))) goto L_372;
  goto L_39a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", u.resolveDILColor(F));
  e.setAttribute("borderColor", undefined);
  if (!(this.pill)) goto L_420;
  goto L_463;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", this.metrics.radius);
  e.setAttribute("borderWidth", undefined);
  if (!(t)) goto L_4c8;
  goto L_4c9;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("minWidth", undefined);
  if (!(t)) goto L_545;
  if (!(this.state.usesEqualWidths)) goto L_545;
  goto L_546;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  this.renderSelectionIndicator();
  this.renderOptions();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=608B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
// closure: e, C, s, q, _, R, z
function {
  this = this;
  e.beginComponent(C.DILSlidingSelectionIndicator, s, undefined, undefined);
  e.setViewModelProperty("animation", q);
  e.setViewModelProperty("backgroundColor", _(this.variant));
  if (!(this.pill)) goto L_12a;
  goto L_171;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("borderRadius", (this.metrics.radius - R));
  e.setViewModelProperty("boxShadow", z(this.variant));
  e.setViewModelProperty("frame", this.state.activeOptionFrame);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=155B file=dil_widgets/src/widgets/SegmentedControl
// locals: e, t, this
function {
  this = this;
  let e;
  if (!((this.viewModel.options == null))) goto L_50;
  this.viewModel.options;
  e = [];
  let t;
  t = 0;
  if (!((t < e.length))) goto L_9a;
  this.renderOption(e[t], t);
  t = <t_new>;
  (t++);
  goto L_56;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_widgets/src/widgets/SegmentedControl
// closure: this, t
function {
  return this.handleOptionTap(t);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=17 cpool=2 bc=3400B file=dil_widgets/src/widgets/SegmentedControl
// args: t, i
// locals: o, r, s, d, this
// closure: A, p, e, n, L, K, w, W, E, H, R, T, M, l, a, G, j
function {
  this = this;
  let d;
  let s;
  let r;
  let o;
  o = (t.value === this.selectedValue);
  if (((true === this.viewModel.disabled))) goto L_c6;
  r = (true === t.disabled);
  s = this.variant;
  d = {};
  if (!((undefined === this.viewModel.padding))) goto L_197;
  d.paddingLeft = this.optionGutter;
  d.paddingRight = this.optionGutter;
  goto L_228;
  // [栈深重同步 1 -> 0]
  A.applyResolvedDILPaddingAttributes(d, p.resolveDILPadding(this.viewModel.padding));
  e.beginRender(n, L(t, i));
  e.setAttributeRef(this.optionRefs);
  e.setAttributeStyle("style", K.option);
  e.setAttributes(d);
  e.setAttributeString("accessibilityLabel", t.label);
  e.setAttribute("accessibilityStateSelected", o);
  if (!(w.Device.isWeb())) goto L_418;
  goto L_419;
  // [栈深重同步 4 -> 3]
  e.setAttribute("focusGroupStart", undefined);
  e.setAttribute("accessibilityStateDisabled", r);
  if (!(w.Device.isWeb())) goto L_4c7;
  goto L_4c8;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("focusRingColor", undefined);
  if (!(w.Device.isWeb())) goto L_543;
  goto L_544;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("focusRingOffset", undefined);
  if (!(t.disabled)) goto L_5e0;
  if (!(!this.viewModel.disabled)) goto L_5e0;
  goto L_5e1;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!(this.viewModel.block)) goto L_657;
  goto L_658;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  if (!(this.viewModel.block)) goto L_6ce;
  goto L_6cf;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexBasis", undefined);
  if (!(this.viewModel.block)) goto L_745;
  goto L_746;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexShrink", undefined);
  e.setAttributeString("backgroundColor", W(o, s, (undefined !== this.state.activeOptionFrame)));
  e.setAttributeString("borderColor", E(o, s));
  e.setAttributeNumber("borderWidth", H(o, s));
  if (!(this.pill)) goto L_88a;
  goto L_8d2;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", (this.metrics.radius - R));
  e.setAttributeNumber("minHeight", T(this.viewModel.size));
  e.setAttributeFunction("onLayout", this.optionLayoutHandler(t.value));
  if (!(r)) goto L_9f1;
  goto L_a18;
  // [栈深重同步 4 -> 3]
  e.setAttribute("onTap", M.createReusableCallback(function <atom:0>));
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", K.labelContainer);
  if (!(this.viewModel.block)) goto L_b0f;
  goto L_b10;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", undefined);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", K.label);
  e.setAttributeString("font", G(this.viewModel.textSize, this.viewModel.size));
  e.setAttributeString("color", j(o, s));
  e.setAttributeString("value", t.label);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_widgets/src/widgets/SegmentedControl
// args: t
// closure: this, e
function {
  return this.handleOptionLayout(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=109B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.optionLayoutHandlers[e];
  if (!((undefined === t))) goto L_68;
  t = function <atom:0>;
  function <atom:0>;
  this.optionLayoutHandlers[e] = t;
  t;
  return t;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=120B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
// locals: this
// closure: U
function {
  this = this;
  this.optionFrames[e] = U(t);
  if (!((e === this.selectedValue))) goto L_77;
  this.syncActiveOptionFrame();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=435B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t, e#1, this
// closure: J
function {
  this = this;
  let t;
  t = e.value;
  if (!((t !== this.selectedValue))) goto L_1b2;
  if (!(!this.viewModel.valueIsControlled)) goto L_16a;
  let e#1;
  e#1 = this.optionFrames[t];
  if (((undefined === e#1))) goto L_f9;
  if (!(J(this.state, t, e#1))) goto L_12b;
  goto L_169;
  // [栈深重同步 1 -> 0]
  this.setState({activeOptionFrame: e#1, activeOptionFrameValue: t, localValue: t});
  this.viewModel.onChange(e);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=328B file=dil_widgets/src/widgets/SegmentedControl
// locals: e, t, this
// closure: x, J
function {
  this = this;
  let t;
  let e;
  e = this.selectedValue;
  if (!((undefined !== e))) goto L_7c;
  if (!(!x(this.viewModel.options, e))) goto L_b3;
  this.setState({activeOptionFrame: undefined, activeOptionFrameValue: undefined});
  return;
  t = this.optionFrames[e];
  if (((undefined === t))) goto L_147;
  if ((J(this.state, e, t))) goto L_147;
  this.setState({activeOptionFrame: t, activeOptionFrameValue: e});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=109B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
function {
  this = this;
  if (!((this.controlledSelectedValue == null))) goto L_6c;
  this.controlledSelectedValue;
  return this.state.localValue;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
// closure: B
function {
  this = this;
  return B(this.viewModel);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
function {
  this = this;
  if (!((this.viewModel.pill == null))) goto L_4c;
  this.viewModel.pill;
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=84B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
// closure: N
function {
  this = this;
  if (!((this.viewModel.size == null))) goto L_52;
  this.viewModel.size;
  return N["lg"];
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=112B file=dil_widgets/src/widgets/SegmentedControl
// locals: this
function {
  this = this;
  if (!(this.pill)) goto L_6d;
  goto L_6e;
  // [栈深重同步 2 -> 1]
  return (this.metrics.gutter * 1);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=dil_widgets/src/widgets/SegmentedControl
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.viewModel.variant == null))) goto L_52;
  this.viewModel.variant;
  e = "ghost";
  if (!(("default" === e))) goto L_64;
  return "soft";
  return e;
}

// fn x  args=2 vars=3 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
// locals: i
function {
  if (!((undefined === e))) goto L_8;
  return false;
  let i;
  i = 0;
  if (!((i < e.length))) goto L_4c;
  if (!((e[i].value === t))) goto L_42;
  return true;
  i = <i_new>;
  (i++);
  goto L_d;
  return false;
}

// fn I  args=1 vars=2 closure=0 cpool=0 bc=181B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// locals: t
function {
  let t;
  t = {value: e.value, label: e.label};
  if (!((undefined !== e.disabled))) goto L_aa;
  t.disabled = e.disabled;
  e.disabled;
  return {option: t};
}

// fn L  args=2 vars=2 closure=0 cpool=0 bc=81B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
function {
  if ((e.value)) goto L_50;
  return "option-".concat(t);
}

// fn T  args=1 vars=1 closure=2 cpool=0 bc=50B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// closure: P, R
function {
  return (P.resolveDILControlHeight(e, "lg") - (2 * R));
}

// fn W  args=3 vars=3 closure=1 cpool=0 bc=13B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t, i
// closure: _
function {
  if (!(e)) goto L_c;
  if (!(!i)) goto L_c;
  return _(t);   // tail call
  return;
}

// fn _  args=1 vars=1 closure=2 cpool=0 bc=56B file=dil_widgets/src/widgets/SegmentedControl
// args: e
// closure: u, O
function {
  if (!(("ghost" === e))) goto L_f;
  return "color-surface-tertiary";
  return u.resolveDILColor(O);
}

// fn z  args=1 vars=1 closure=0 cpool=0 bc=17B file=dil_widgets/src/widgets/SegmentedControl
// args: e
function {
  if (!(("ghost" === e))) goto L_b;
  return undefined;
  return "0 1 4 rgba(0, 0, 0, 0.2)";
}

// fn E  args=2 vars=2 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
function {
  return;
}

// fn H  args=2 vars=2 closure=0 cpool=0 bc=2B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
function {
  return 0;
}

// fn j  args=2 vars=2 closure=0 cpool=0 bc=30B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
function {
  if (!(e)) goto L_9;
  return "color-text-prose";
  if (!(("ghost" === t))) goto L_18;
  return "color-text-tertiary";
  return "color-text-secondary";
}

// fn G  args=2 vars=4 closure=3 cpool=0 bc=282B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
// locals: i, o
// closure: P, v, g
function {
  let o;
  let i;
  i = P.resolveDILControlFontSize(t, "lg");
  if (!((e == null))) goto L_5b;
  e;
  if (!((12 === i))) goto L_47;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  if (!((16 === i))) goto L_56;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  o = "sm";
  return v.dynamicSystemFontForTextStyle(g.resolveDILTextFontSize(o), g.resolveDILTextDynamicTextStyle(o), v.DILSystemFontWeight.Medium, false);   // tail call
}

// fn B  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/widgets/SegmentedControl
// args: e
function {
  return e.selectedValue;
}

// fn U  args=1 vars=1 closure=0 cpool=0 bc=158B file=dil_widgets/src/widgets/SegmentedControl
// args: e
function {
  return {height: e.height, width: e.width, x: e.x, y: e.y};
}

// fn J  args=3 vars=3 closure=1 cpool=0 bc=78B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t, i
// closure: X
function {
  if (!((e.activeOptionFrameValue === t))) goto L_4d;
  return X(e.activeOptionFrame, i);
}

// fn X  args=2 vars=2 closure=0 cpool=0 bc=311B file=dil_widgets/src/widgets/SegmentedControl
// args: e, t
function {
  if (((undefined === e))) goto L_a;
  if (!((undefined === t))) goto L_10;
  return (e === t);
  if (!((e.x === t.x))) goto L_136;
  if (!((e.y === t.y))) goto L_136;
  if (!((e.width === t.width))) goto L_136;
  return (e.height === t.height);
}

// fn <atom:0>  args=3 vars=59 closure=0 cpool=43 bc=2082B file=dil_widgets/src/widgets/SegmentedControl
// args: require, module, exports
// locals: e, t, i, o, r, s, n, l, a, d, u, c, h, v, p, g, b, m, y, w, f, S, M, C, A, V, P, SegmentedControl, <class_fields_init>, SegmentedControl#1, SegmentedControlTrack, <class_fields_init>#1, SegmentedControlTrack#1, x, I, L, k, D, R, F, O, N, q, T, W, _, z, E, H, j, G, B, U, J, X, K
function {
  x = function x;
  I = function I;
  L = function L;
  T = function T;
  W = function W;
  _ = function _;
  z = function z;
  E = function E;
  H = function H;
  j = function j;
  G = function G;
  B = function B;
  U = function U;
  J = function J;
  X = function X;
  let K;
  let q;
  let N;
  let O;
  let F;
  let R;
  let D;
  let k;
  let SegmentedControlTrack#1;
  let SegmentedControl#1;
  let P;
  let V;
  let A;
  let C;
  let M;
  let S;
  let f;
  let w;
  let y;
  let m;
  let b;
  let g;
  let p;
  let v;
  let h;
  let c;
  let u;
  let d;
  let a;
  let l;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SegmentedControl = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "C3-52EN33N3JD6mP");
  i = e.makeNodePrototype("scroll", undefined, "u3UxXF6Wo339MxT7");
  o = e.makeComponentPrototype(undefined, "emLO6cmoExm6WJAd");
  r = e.makeNodePrototype("view", undefined, "o8mV11FTc75iRuFm");
  s = e.makeComponentPrototype(undefined, "gMetj0oCxLP8XsT-");
  n = e.makeNodePrototype("view", undefined, "pArkunoRCBjI7ihH");
  l = e.makeNodePrototype("layout", undefined, "2fmoFDUeg6wDicif");
  a = e.makeNodePrototype("label", undefined, "zVCkNMSLcemOiKdo");
  d = require("dil_core/src/DILInteraction");
  u = require("dil_core/src/colors/DILColor");
  c = require("dil_cel/src/WidgetBinding");
  h = require("dil_core/src/DILComponent");
  v = require("dil_core/src/typography/DILDynamicFont");
  p = require("dil_core/src/layout/DILSpacing");
  g = require("dil_text/src/rendering/DILTextTypography");
  b = require("valdi_core/src/Component");
  m = require("valdi_ui/src/Platform");
  y = require("valdi_ui/src/components/SegmentedControl");
  w = require("valdi_core/src/Device");
  f = require("valdi_core/src/ElementRef");
  S = require("valdi_core/src/Style");
  M = require("valdi_core/src/utils/Callback");
  C = require("../animation/DILSlidingSelectionIndicator");
  A = require("./attributes/DILSpacingAttributes");
  V = require("./DILWidgetBindingActions");
  P = require("./DILWidgetSizes");
  let SegmentedControl;
  let <class_fields_init>;
  class SegmentedControl extends h.DILComponent { ... }
  <proto:SegmentedControl>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:SegmentedControl>.onRender = function <atom:0>;
  <proto:SegmentedControl>.value = function <atom:0>;
  <proto:SegmentedControl>.applyChange = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SegmentedControl>;
  SegmentedControl = function <atom:0>;
  // close_loc <class_fields_init>
  SegmentedControl#1 = function <atom:0>;
  exports.SegmentedControl = SegmentedControl#1;
  SegmentedControl#1.dilV2Properties = ["block", "defaultValue", "disabled", "label", "onChange", "options", "pill", "size", "value", "variant"];
  // append([], 0, h.DIL_COMPONENT_PROPERTIES)
  [][h.DIL_COMPONENT_PROPERTIES] = "block";
  [][("block" ++)] = "defaultValue";
  [][("defaultValue" ++)] = "disabled";
  [][("disabled" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "label";
  [][("label" ++)] = "options";
  [][("options" ++)] = "padding";
  [][("padding" ++)] = "pill";
  [][("pill" ++)] = "size";
  [][("size" ++)] = "textSize";
  [][("textSize" ++)] = "trackPadding";
  [][("trackPadding" ++)] = "value";
  [][("value" ++)] = "variant";
  ("variant" ++);
  SegmentedControl#1.properties = [];
  let SegmentedControlTrack;
  let <class_fields_init>#1;
  class SegmentedControlTrack extends b.StatefulComponent { ... }
  <proto:SegmentedControlTrack>.onViewModelUpdate = function <atom:0>;
  <proto:SegmentedControlTrack>.onRender = function <atom:0>;
  <proto:SegmentedControlTrack>.renderNativeControl = function <atom:0>;
  <proto:SegmentedControlTrack>.renderTrack = function <atom:0>;
  <proto:SegmentedControlTrack>.renderSelectionIndicator = function <atom:0>;
  <proto:SegmentedControlTrack>.renderOptions = function <atom:0>;
  <proto:SegmentedControlTrack>.renderOption = function <atom:0>;
  <proto:SegmentedControlTrack>.optionLayoutHandler = function <atom:0>;
  <proto:SegmentedControlTrack>.handleOptionLayout = function <atom:0>;
  <proto:SegmentedControlTrack>.handleOptionTap = function <atom:0>;
  <proto:SegmentedControlTrack>.syncActiveOptionFrame = function <atom:0>;
  <proto:SegmentedControlTrack>.selectedValue = function <atom:0>;
  <proto:SegmentedControlTrack>.controlledSelectedValue = function <atom:0>;
  <proto:SegmentedControlTrack>.pill = function <atom:0>;
  <proto:SegmentedControlTrack>.metrics = function <atom:0>;
  <proto:SegmentedControlTrack>.optionGutter = function <atom:0>;
  <proto:SegmentedControlTrack>.variant = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:SegmentedControlTrack>;
  SegmentedControlTrack = function <atom:0>;
  // close_loc <class_fields_init>#1
  SegmentedControlTrack#1 = function <atom:0>;
  k = {x: 0, y: 0.5};
  D = 0.5;
  R = 2;
  F = {light: "gray-100", dark: "gray-0"};
  O = {light: "gray-0", dark: "gray-300"};
  N = {3xs: {gutter: 8, radius: 6}, 2xs: {gutter: 8, radius: 6}, xs: {gutter: 8, radius: 6}, sm: {gutter: 10, radius: 8}, md: {gutter: 12, radius: 8}, lg: {gutter: 12, radius: 8}, xl: {gutter: 14, radius: 10}, 2xl: {gutter: 16, radius: 12}, 3xl: {gutter: 16, radius: 12}};
  q = C.createDILSlidingSelectionIndicatorAnimation({beginFromCurrentState: true, controlPoints: [0.19, 1, 0.22, 1], duration: 0.3});
  K = {scroll: new S.Style({horizontal: true, maxWidth: "100%", showsHorizontalScrollIndicator: false}), root: new S.Style({accessibilityCategory: "radiogroup", accessibilityNavigation: "group", flexDirection: "row", alignItems: "center", gap: 2, position: "relative", slowClipping: true}), option: new S.Style({accessibilityCategory: "radio", accessibilityNavigation: "leaf", flexDirection: "row", alignItems: "center", justifyContent: "center", zIndex: 1}), labelContainer: new S.Style({flexDirection: "row", justifyContent: "center"}), label: new S.Style({flexShrink: 0, width: "max-content"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SegmentedControl
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
