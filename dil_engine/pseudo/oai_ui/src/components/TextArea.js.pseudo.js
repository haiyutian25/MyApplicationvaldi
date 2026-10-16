// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=oai_ui/src/components/TextArea
// args: e
function {
  e.Outline = "outline";
  e.Plain = "plain";
  e.Soft = "soft";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=322B file=oai_ui/src/components/TextArea
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.normalizeValue(e.text);
  this.updateValue(e.text, t);
  if (!((this.viewModel.onChange == null))) goto L_e8;
  this.viewModel.onChange;
  this.viewModel;
  goto L_ee;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t);
  if (!((t === e.text))) goto L_141;
  this.handleSelectionChange(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=200B file=oai_ui/src/components/TextArea
// args: e
// closure: this
function {
  if (!((this.viewModel.onSelectionChange == null))) goto L_4e;
  this.viewModel.onSelectionChange;
  this.viewModel;
  goto L_c7;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=84B file=oai_ui/src/components/TextArea
// closure: this
function {
  if (!((this.viewModel.onFocusChange == null))) goto L_4e;
  this.viewModel.onFocusChange;
  this.viewModel;
  goto L_53;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=205B file=oai_ui/src/components/TextArea
// closure: this
function {
  if (!((this.viewModel.inputRef == null))) goto L_4d;
  this.viewModel.inputRef;
  goto L_78;
  undefined.setAttribute("focused", false);
  if (!((this.viewModel.onFocusChange == null))) goto L_c7;
  this.viewModel.onFocusChange;
  this.viewModel;
  goto L_cc;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=239B file=oai_ui/src/components/TextArea
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.normalizeValue(e.text);
  this.updateValue(e.text, t);
  if (!((this.viewModel.onSubmit == null))) goto L_e8;
  this.viewModel.onSubmit;
  this.viewModel;
  goto L_ee;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=231B file=oai_ui/src/components/TextArea
// args: e
// closure: this
function {
  if (!((e.width > 0))) goto L_e6;
  if (!((e.width !== this.state.availableWidth))) goto L_e6;
  this.setState({availableWidth: e.width});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=6 bc=234B file=oai_ui/src/components/TextArea
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
  this.state = {value: this.viewModel.defaultValue};
  this.hadSelectionOverride = false;
  this.handleChange = function <atom:0>;
  this.handleSelectionChange = function <atom:0>;
  this.handleEditBegin = function <atom:0>;
  this.handleEditEnd = function <atom:0>;
  this.handleSubmit = function <atom:0>;
  this.handleLayout = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=oai_ui/src/components/TextArea
// closure: this
function {
  this.renderControl();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=803B file=oai_ui/src/components/TextArea
// locals: this
// closure: e, v, t
function {
  this = this;
  if (!(this.hasFormField)) goto L_2fd;
  e.beginComponent(v.FormField, t, undefined, undefined);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("description", this.viewModel.description);
  e.setViewModelProperty("error", this.viewModel.error);
  e.setViewModelProperty("required", this.viewModel.required);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  this.renderControl();
  return;
}

// fn <atom:0>  args=0 vars=27 closure=18 cpool=1 bc=6495B file=oai_ui/src/components/TextArea
// locals: t, o, r, d, h, v, w, M, g, b, T, P, V, N, R, F, z, L, H, q, B, E, k, _, G, W, this
// closure: u, A, l, c, C, O, f, p, y, m, S, I, a, n, s, e, i, x
function {
  this = this;
  let W;
  let G;
  let _;
  let k;
  let E;
  let B;
  let q;
  let H;
  let L;
  let z;
  let F;
  let R;
  let N;
  let V;
  let P;
  let T;
  let b;
  let g;
  let M;
  let w;
  let v;
  let h;
  let d;
  let r;
  let o;
  let t;
  t = this.viewModel.selection;
  if (((undefined !== t))) goto L_c2;
  if (!(this.hadSelectionOverride)) goto L_cf;
  goto L_d0;
  // [栈深重同步 1 -> 0]
  o = undefined;
  this.hadSelectionOverride = (undefined !== t);
  if (!((undefined !== this.viewModel.contentInsetTop))) goto L_150;
  r = u.supportsNativeTextViewContentInsets();
  d = (true === this.viewModel.disabled);
  h = (true === this.viewModel.fill);
  v = A(this.viewModel.size);
  if (!((undefined === this.viewModel.typography))) goto L_275;
  goto L_2f1;
  // [栈深重同步 1 -> 0]
  w = l.resolveOAITypography(this.viewModel.typography, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  if (!((this.viewModel.variant == null))) goto L_35e;
  this.viewModel.variant;
  M = c.Outline;
  if (!((undefined === this.viewModel.contentPadding))) goto L_3ab;
  goto L_3f3;
  // [栈深重同步 1 -> 0]
  g = C(this.viewModel.contentPadding);
  if (!((undefined !== g))) goto L_423;
  b = u.supportsNativeTextViewInsets();
  if (!((g == null))) goto L_430;
  g;
  goto L_451;
  if (!((undefined.top == null))) goto L_4a1;
  undefined.top;
  T = O(this.viewModel.size, M);
  if (!((g == null))) goto L_4ae;
  g;
  goto L_4cf;
  if (!((undefined.bottom == null))) goto L_4d7;
  undefined.bottom;
  P = T;
  if (!((g == null))) goto L_4e4;
  g;
  goto L_505;
  if (!((undefined.left == null))) goto L_555;
  undefined.left;
  V = f(this.viewModel.size, M);
  if (!((g == null))) goto L_562;
  g;
  goto L_583;
  if (!((undefined.right == null))) goto L_58b;
  undefined.right;
  N = V;
  R = (T + P);
  F = p(this.viewModel.rows);
  z = y(F, v.lineHeight, R);
  L = (true === this.viewModel.autoResize);
  if (!((true === this.viewModel.nativeSizing))) goto L_6c9;
  H = u.supportsNativeTextViewAutoSizing();
  if (!(H)) goto L_6dd;
  if (!(L)) goto L_6dd;
  q = !h;
  if (!(L)) goto L_70d;
  goto L_710;
  // [栈深重同步 1 -> 0]
  B = F;
  if (!(L)) goto L_71d;
  E = !H;
  if (!(E)) goto L_7c7;
  if (!((this.value == null))) goto L_753;
  this.value;
  goto L_7ca;
  // [栈深重同步 1 -> 0]
  k = F;
  if (!(E)) goto L_82e;
  goto L_831;
  // [栈深重同步 1 -> 0]
  _ = F;
  if (!(L)) goto L_868;
  goto L_869;
  // [栈深重同步 1 -> 0]
  G = undefined;
  if (!((undefined === this.viewModel.inputStyle))) goto L_924;
  goto L_9d4;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.accessibilityLabel == null))) goto L_ab9;
  this.viewModel.accessibilityLabel;
  if (!(E)) goto L_ad4;
  if ((!!(k > B))) goto L_adb;
  if (!(q)) goto L_aec;
  goto L_aed;
  // [栈深重同步 2 -> 1]
  if (!((undefined === this.viewModel.countPolicy))) goto L_b80;
  goto L_b81;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.closesWhenReturnKeyPressed == null))) goto L_bd1;
  this.viewModel.closesWhenReturnKeyPressed;
  if (!(r)) goto L_c21;
  goto L_c22;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.inputStyle == null))) goto L_c7c;
  this.viewModel.inputStyle;
  goto L_cbe;
  if (!((undefined.attributes.color == null))) goto L_d54;
  undefined.attributes.color;
  if (!((this.viewModel.color == null))) goto L_d54;
  this.viewModel.color;
  if (!((this.viewModel.inputStyle == null))) goto L_da5;
  this.viewModel.inputStyle;
  goto L_de7;
  if (!((undefined.attributes.font == null))) goto L_e41;
  undefined.attributes.font;
  if (!((w == null))) goto L_df7;
  w;
  goto L_e18;
  if (!((undefined.font == null))) goto L_e41;
  undefined.font;
  if (!((undefined !== w))) goto L_e73;
  goto L_ee4;
  // [栈深重同步 2 -> 1]
  if (!(s.Device.isIOS())) goto L_ec0;
  goto L_ee4;
  // [栈深重同步 2 -> 1]
  if (!((w == null))) goto L_ef4;
  w;
  goto L_f15;
  if (!((undefined === this.viewModel.onSelectionChange))) goto L_f8d;
  goto L_fb0;
  // [栈深重同步 2 -> 1]
  if (!((undefined === this.viewModel.onFocusChange))) goto L_1000;
  goto L_1023;
  // [栈深重同步 2 -> 1]
  if (!((undefined === this.viewModel.inputRef))) goto L_10bb;
  if (!((undefined === this.viewModel.onFocusChange))) goto L_10bb;
  goto L_10de;
  // [栈深重同步 2 -> 1]
  if (!((undefined === this.viewModel.onSubmit))) goto L_112e;
  goto L_1151;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.returnType == null))) goto L_11ed;
  this.viewModel.returnType;
  if (!(b)) goto L_128e;
  goto L_128f;
  // [栈深重同步 2 -> 1]
  if (!(b)) goto L_129e;
  goto L_129f;
  // [栈深重同步 2 -> 1]
  if (!(b)) goto L_12ae;
  goto L_12af;
  // [栈深重同步 2 -> 1]
  if (!(b)) goto L_12be;
  goto L_12bf;
  // [栈深重同步 2 -> 1]
  null;
  o;
  W = {ref: this.viewModel.inputRef, style: a.Style.cachingMerge(I.textarea, this.viewModel.inputStyle), accessibilityCategory: "input", accessibilityId: this.viewModel.accessibilityId, accessibilityLabel: this.viewModel.label, accessibilityStateDisabled: d, canAlwaysScrollVertical: undefined, height: undefined, characterLimit: undefined, closesWhenReturnKeyPressed: false, contentInsetTop: undefined, enabled: !d, color: n.OAIColor.TextPrimary, font: v.font, lineHeight: v.lineHeight, lineHeightMultiple: undefined.lineHeightMultiple, onChange: this.handleChange, onSelectionChange: this.handleSelectionChange, onEditBegin: this.handleEditBegin, onEditEnd: this.handleEditEnd, onReturn: this.handleSubmit, placeholder: this.viewModel.placeholder, returnType: "linereturn", selectTextOnFocus: this.viewModel.autoSelect, textGravity: this.viewModel.textGravity, textInsetTop: undefined, textInsetRight: undefined, textInsetBottom: undefined, textInsetLeft: undefined, value: this.value};
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", I.wrapper);
  if (!((this.viewModel.background == null))) goto L_149c;
  this.viewModel.background;
  if (!((M === c.Soft))) goto L_1457;
  goto L_149c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", n.OAIColor.BgPrimary);
  e.setAttributeString("borderColor", x(this.viewModel, M));
  if (!((this.viewModel.radius == null))) goto L_15ae;
  this.viewModel.radius;
  e.setAttributeNumber("borderRadius", n.OAIRadius.Md);
  if (((M === c.Outline))) goto L_164b;
  if (!((undefined !== this.viewModel.error))) goto L_1650;
  goto L_1651;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(h)) goto L_1686;
  goto L_1687;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexGrow", undefined);
  if (!(h)) goto L_16bc;
  goto L_16bd;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("flexShrink", undefined);
  if ((h)) goto L_16f4;
  if (!(q)) goto L_16f9;
  goto L_1727;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", y(_, v.lineHeight, R));
  if (!(h)) goto L_175c;
  goto L_175f;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("maxHeight", G);
  if (!(h)) goto L_1794;
  goto L_1797;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minHeight", z);
  if (!(E)) goto L_17ee;
  goto L_17ef;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onLayout", undefined);
  if (!(d)) goto L_1825;
  goto L_1826;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  if (!(b)) goto L_185b;
  goto L_185e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingBottom", P);
  if (!(b)) goto L_1893;
  goto L_1896;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingLeft", V);
  if (!(b)) goto L_18cb;
  goto L_18ce;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingRight", N);
  if (!(b)) goto L_1903;
  goto L_1906;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("paddingTop", T);
  this.renderInput(W, H);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=307B file=oai_ui/src/components/TextArea
// args: t, i
// closure: e, o, r
function {
  if (!(i)) goto L_b6;
  e.beginRender(o, undefined);
  e.setAttributes(t);
  e.setAttribute("iosClass", "SCValdiAutoSizingTextView");
  goto L_132;
  // [栈深重同步 1 -> 0]
  e.beginRender(r, undefined);
  e.setAttributes(t);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=221B file=oai_ui/src/components/TextArea
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.label))) goto L_dc;
  if (((undefined !== this.viewModel.description))) goto L_dc;
  return (undefined !== this.viewModel.error);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=217B file=oai_ui/src/components/TextArea
// locals: this
function {
  this = this;
  if (!((this.state.nativeValue == null))) goto L_d8;
  this.state.nativeValue;
  if (!((this.viewModel.value == null))) goto L_d8;
  this.viewModel.value;
  return this.state.value;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=886B file=oai_ui/src/components/TextArea
// args: e
// locals: t, i, this
// closure: h, b
function {
  this = this;
  let t;
  if (((undefined === this.viewModel.maxLength))) goto L_93;
  if (!((undefined === this.viewModel.countPolicy))) goto L_97;
  return e;
  t = this.value;
  if (!((undefined !== t))) goto L_2c8;
  if (!((h.countCharacters(e, this.viewModel.countPolicy) > this.viewModel.maxLength))) goto L_2c8;
  let i;
  if (!((h.countCharacters(t, this.viewModel.countPolicy) === this.viewModel.maxLength))) goto L_22e;
  return t;
  i = b(t, e, this.viewModel.maxLength, this.viewModel.countPolicy);
  if (!((undefined !== i))) goto L_2c8;
  return i;
  return h.truncateCharacters(e, this.viewModel.maxLength, this.viewModel.countPolicy);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=229B file=oai_ui/src/components/TextArea
// args: e, t
// locals: this
function {
  this = this;
  if (!((t !== e))) goto L_35;
  this.setState({nativeValue: e});
  if (!((undefined === this.viewModel.value))) goto L_b1;
  goto L_e4;
  // [栈深重同步 1 -> 0]
  if (!((t !== e))) goto L_e4;
  this.setState({nativeValue: undefined});
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=139B file=oai_ui/src/components/TextArea
// args: e
function {
  if (!((undefined !== e))) goto L_89;
  if (!(Number.isFinite(e))) goto L_89;
  return Math.max(1, Math.floor(e));
  return 3;
}

// fn b  args=4 vars=10 closure=1 cpool=0 bc=484B file=oai_ui/src/components/TextArea
// args: e, t, i, o
// locals: r, n, l, d, s, a
// closure: h
function {
  let a;
  let s;
  let d;
  let l;
  let n;
  let r;
  r = Array.from(e);
  n = Array.from(t);
  l = 0;
  if (!((l < r.length))) goto L_a7;
  if (!((l < n.length))) goto L_a7;
  if (!((r[((r.length - l) - 1)] === n[((n.length - l) - 1)]))) goto L_a7;
  l = <l_new>;
  (l++);
  goto L_6a;
  if (!((0 === l))) goto L_af;
  return;
  d = n.slice((n.length - l)).join("");
  s = (i - h.countCharacters(d, o));
  if (!((s < 0))) goto L_139;
  return;
  a = n.slice(0, (n.length - l)).join("");
  return "".concat(h.truncateCharacters(a, s, o), d);   // tail call
}

// fn m  args=1 vars=2 closure=1 cpool=0 bc=325B file=oai_ui/src/components/TextArea
// args: e
// locals: t
// closure: p
function {
  let t;
  t = p(e.rows);
  if (!((undefined !== e.maxRows))) goto L_116;
  if (!(Number.isFinite(e.maxRows))) goto L_116;
  return Math.max(t, Math.floor(e.maxRows));
  return Math.max(t, 8);
}

// fn y  args=3 vars=3 closure=0 cpool=0 bc=6B file=oai_ui/src/components/TextArea
// args: e, t, i
function {
  return ((e * t) + i);
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=92B file=oai_ui/src/components/TextArea
// args: e, t
// closure: r
function {
  return (e + Math.max(1, Math.ceil((t.length / r))));
}

// fn S  args=4 vars=5 closure=2 cpool=1 bc=230B file=oai_ui/src/components/TextArea
// args: e, t, i, o
// locals: r
// closure: M, g
function {
  let r;
  if (!((undefined === t))) goto L_e;
  goto L_94;
  // [栈深重同步 1 -> 0]
  r = Math.max(1, Math.floor((Math.max(0, (t - i)) / (o * g))));
  return e.split("
").reduce(function <atom:0>, 0);   // tail call
}

// fn x  args=2 vars=2 closure=2 cpool=0 bc=218B file=oai_ui/src/components/TextArea
// args: e, t
// closure: n, c
function {
  if (!((undefined !== e.error))) goto L_6c;
  return n.OAIColor.BorderStatusError;
  if (!((t === c.Outline))) goto L_d8;
  return n.OAIColor.BorderDefault;
  return undefined;
}

// fn A  args=1 vars=1 closure=1 cpool=0 bc=287B file=oai_ui/src/components/TextArea
// args: e
// closure: n
function {
  if (!((e === n.OAIControlSize.Sm))) goto L_b4;
  return n.resolveOAITextStyle(n.OAITextSize.BodyMedium);
  return n.resolveOAITextStyle(n.OAITextSize.BodyLarge);
}

// fn f  args=2 vars=2 closure=2 cpool=0 bc=464B file=oai_ui/src/components/TextArea
// args: e, t
// closure: c, n
function {
  if (!((t === c.Plain))) goto L_6c;
  return n.OAISpacing.Half;
  if (!((e === n.OAIControlSize.Sm))) goto L_fb;
  return n.OAISpacing.OneAndHalf;
  if (!((e === n.OAIControlSize.Lg))) goto L_18a;
  return n.OAISpacing.Two;
  return n.OAISpacing.OnePointSeventyFive;
}

// fn C  args=1 vars=1 closure=0 cpool=0 bc=374B file=oai_ui/src/components/TextArea
// args: e
function {
  if (!(("number" == typeof e))) goto L_24;
  return {top: e, right: e, bottom: e, left: e};
  if (!((e.top == null))) goto L_74;
  e.top;
  if (!((e.y == null))) goto L_74;
  e.y;
  if (!((e.right == null))) goto L_c8;
  e.right;
  if (!((e.x == null))) goto L_c8;
  e.x;
  if (!((e.bottom == null))) goto L_11c;
  e.bottom;
  if (!((e.y == null))) goto L_11c;
  e.y;
  if (!((e.left == null))) goto L_170;
  e.left;
  if (!((e.x == null))) goto L_170;
  e.x;
  return {top: 0, right: 0, bottom: 0, left: 0};
}

// fn O  args=2 vars=2 closure=2 cpool=0 bc=396B file=oai_ui/src/components/TextArea
// args: e, t
// closure: c, n
function {
  if (((t === c.Plain))) goto L_6f;
  if (!((e === n.OAIControlSize.Sm))) goto L_b7;
  return n.OAISpacing.One;
  if (!((e === n.OAIControlSize.Lg))) goto L_146;
  return n.OAISpacing.OneAndHalf;
  return n.OAISpacing.OnePointTwentyFive;
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=19 bc=958B file=oai_ui/src/components/TextArea
// args: require, module, exports
// locals: e, t, i, o, r, n, l, d, s, a, h, v, u, c, w, M, g, TextArea, <class_fields_init>, TextArea#1, p, b, m, y, S, x, A, f, C, O, I
function {
  p = function p;
  b = function b;
  m = function m;
  y = function y;
  S = function S;
  x = function x;
  A = function A;
  f = function f;
  C = function C;
  O = function O;
  let I;
  let TextArea#1;
  let g;
  let M;
  let w;
  let u;
  let v;
  let h;
  let a;
  let s;
  let d;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextAreaVariant = undefined;
  exports.TextArea = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "i8qZLdT-GQ14AqtC");
  i = e.makeNodePrototype("view", undefined, "qU95RawGtZrk4usi");
  o = e.makeNodePrototype("custom-view", undefined, "95YxDQpiX8en1Fhz");
  r = e.makeNodePrototype("textview", undefined, "ZNN8YgqpugBG88ch");
  n = require("oai_core/src/OAITokens");
  l = require("oai_core/src/OAITypography");
  d = require("valdi_core/src/Component");
  s = require("valdi_core/src/Device");
  a = require("valdi_core/src/Style");
  h = require("./CharacterCounter");
  v = require("./FormField");
  u = require("valdi_ui/src/Platform");
  if ((c)) goto L_1fb;
  c = {};
  exports.TextAreaVariant = {};
  !function <atom:0>({});
  w = 3;
  M = 36;
  g = (1 / 3);
  let TextArea;
  let <class_fields_init>;
  class TextArea extends d.StatefulComponent { ... }
  <proto:TextArea>.onRender = function <atom:0>;
  <proto:TextArea>.renderControl = function <atom:0>;
  <proto:TextArea>.renderInput = function <atom:0>;
  <proto:TextArea>.hasFormField = function <atom:0>;
  <proto:TextArea>.value = function <atom:0>;
  <proto:TextArea>.normalizeValue = function <atom:0>;
  <proto:TextArea>.updateValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextArea>;
  TextArea = function <atom:0>;
  // close_loc <class_fields_init>
  TextArea#1 = function <atom:0>;
  exports.TextArea = TextArea#1;
  I = {wrapper: new a.Style({flexShrink: 0, width: "100%"}), textarea: new a.Style({autocorrection: "default", color: n.OAIColor.TextPrimary, flexShrink: 1, height: "100%", placeholderColor: n.OAIColor.TextTertiary, textGravity: "top", width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/TextArea
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
