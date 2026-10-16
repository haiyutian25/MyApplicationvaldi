// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=dil_text/src/DILTextComponent
// closure: w
function {
  return w.DILTextLoadingType;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=348B file=dil_text/src/DILTextComponent
// args: e
// locals: t
// closure: this
function {
  let t;
  if (!((this.viewModel.editable == null))) goto L_50;
  this.viewModel.editable;
  goto L_71;
  t = undefined.onChange;
  if (!((undefined === t))) goto L_135;
  if (!((this.viewModel.editable == null))) goto L_ed;
  this.viewModel.editable;
  goto L_10e;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  t(e.text);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=184B file=dil_text/src/DILTextComponent
// args: e
// closure: this
function {
  if (!((this.viewModel.editable == null))) goto L_71;
  this.viewModel.editable;
  goto L_92;
  this.dispatchEditableAction(undefined.onFocus, e.text);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=184B file=dil_text/src/DILTextComponent
// args: e
// closure: this
function {
  if (!((this.viewModel.editable == null))) goto L_71;
  this.viewModel.editable;
  goto L_92;
  this.dispatchEditableAction(undefined.onBlur, e.text);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=130B file=dil_text/src/DILTextComponent
// args: e
// closure: this
function {
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_79;
  if (!((undefined.textSelectionMenuActions == null))) goto L_55;
  undefined.textSelectionMenuActions;
  goto L_79;
  if (!((undefined.slice() == null))) goto L_81;
  undefined.slice();
  return [];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=214B file=dil_text/src/DILTextComponent
// args: e
// closure: h, this
function {
  if (!(h.isVersionAtLeast(3))) goto L_d5;
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

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_text/src/DILTextComponent
function {
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=6 bc=133B file=dil_text/src/DILTextComponent
// locals: this, this.active_func, new.target, arguments
// closure: h, <class_fields_init>
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
  this.handleEditBegin = function <atom:0>;
  this.handleEditEnd = function <atom:0>;
  this.handleTextSelectionMenu = function <atom:0>;
  this.handleTextSelectionMenuAction = function <atom:0>;
  this.handleAttributedTextContainerTap = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=165B file=dil_text/src/DILTextComponent
// locals: this
// closure: v
function {
  this = this;
  if (!((true === this.viewModel.shimmer))) goto L_a4;
  if (!((undefined === this.timer))) goto L_a4;
  this.timer = v.resolveDILTimer();
  v.resolveDILTimer();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_text/src/DILTextComponent
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=19 closure=25 cpool=1 bc=8303B file=dil_text/src/DILTextComponent
// locals: r, n, o, d, l, s, a, h, d#1, l#1, a#1, h#1, u, c, v, g, w, y, this
// closure: e, p, x, m, L, t, B, A, T, i, N, M, C, I, E, b, f, P, S, R, s, n, V, W, o
function {
  this = this;
  let y;
  let w;
  let g;
  let v;
  let c;
  let u;
  let h#1;
  let a#1;
  let l#1;
  let d#1;
  let r;
  if (!((true === this.viewModel.isLoading))) goto L_95;
  this.renderLoading();
  return;
  r = this.viewModel.editable;
  if (!((undefined !== r))) goto L_1091;
  let h;
  let a;
  let s;
  let l;
  let d;
  let o;
  let n;
  n = p.stringFromDILTextValue(this.viewModel.value);
  if (!((this.viewModel.width == null))) goto L_1b1;
  this.viewModel.width;
  o = "100%";
  d = x(this.viewModel.textAlign);
  l = m.resolveDILTextColor(this.viewModel.color, "prose");
  if (!(this.viewModel.truncate)) goto L_2b2;
  goto L_2f6;
  // [栈深重同步 1 -> 0]
  s = this.viewModel.maxLines;
  a = this.viewModel.lineHeight;
  if (!((undefined === a))) goto L_38b;
  goto L_38c;
  // [栈深重同步 1 -> 0]
  h = undefined;
  if (!(L(s, this.viewModel.minLines))) goto L_9e0;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", B.editableTextField);
  e.setAttributeString("value", n);
  e.setAttribute("width", o);
  e.setAttributeString("textAlign", d);
  e.setAttributeString("contentType", A(r.pattern));
  e.setAttribute("enabled", true);
  e.setAttributeString("font", this.viewModel.font);
  e.setAttributeString("color", l);
  e.setAttributeNumber("minHeight", T(this.viewModel.font, a, h, this.viewModel.minLines));
  e.setAttributeString("placeholder", r.placeholder);
  e.setAttribute("selectTextOnFocus", r.autoSelect);
  e.setAttributeFunction("onChange", this.handleChange);
  e.setAttributeFunction("onEditBegin", this.handleEditBegin);
  e.setAttributeFunction("onEditEnd", this.handleEditEnd);
  e.setAttributeNumber("marginTop", this.viewModel.marginTop);
  e.setAttributeNumber("marginLeft", this.viewModel.marginLeft);
  e.setAttribute("animationsEnabled", this.viewModel.animationsEnabled);
  goto L_108f;
  // [栈深重同步 1 -> 0]
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", B.editableTextView);
  e.setAttributeString("value", n);
  e.setAttribute("width", o);
  e.setAttributeString("textAlign", d);
  e.setAttribute("enabled", true);
  e.setAttributeString("font", this.viewModel.font);
  e.setAttributeString("color", l);
  e.setAttributeString("textDecoration", this.viewModel.textDecoration);
  e.setAttributeNumber("lineHeight", a);
  e.setAttributeNumber("lineHeightMultiple", h);
  e.setAttributeNumber("numberOfLines", N(s));
  e.setAttributeNumber("minHeight", T(this.viewModel.font, a, h, this.viewModel.minLines));
  e.setAttributeString("placeholder", r.placeholder);
  e.setAttribute("selectTextOnFocus", r.autoSelect);
  e.setAttributeFunction("onChange", this.handleChange);
  e.setAttributeFunction("onEditBegin", this.handleEditBegin);
  e.setAttributeFunction("onEditEnd", this.handleEditEnd);
  e.setAttributeNumber("marginTop", this.viewModel.marginTop);
  e.setAttributeNumber("marginLeft", this.viewModel.marginLeft);
  e.setAttribute("animationsEnabled", this.viewModel.animationsEnabled);
  e.endRender();
  return;
  d#1 = this.viewModel.lineHeight;
  if (!((undefined === d#1))) goto L_114f;
  if (!((this.viewModel.lineHeightMultiple == null))) goto L_1150;
  this.viewModel.lineHeightMultiple;
  goto L_1150;
  // [栈深重同步 1 -> 0]
  l#1 = undefined;
  a#1 = M.resolveDILScaledLineHeight(C(this.viewModel.font), l#1);
  if (!(this.viewModel.truncate)) goto L_120d;
  goto L_1251;
  // [栈深重同步 1 -> 0]
  h#1 = this.viewModel.maxLines;
  if ((("string" == typeof this.viewModel.value))) goto L_133f;
  if (((true === this.viewModel.shimmer))) goto L_133f;
  if (((undefined !== this.viewModel.letterSpacing))) goto L_133f;
  u = (undefined !== a#1);
  c = I(this.viewModel.value);
  v = E(this.viewModel.value);
  g = (true !== this.viewModel.suppressTextSelection);
  if (!(g)) goto L_1482;
  if (!((this.context == null))) goto L_1450;
  this.context;
  goto L_147a;
  if (!((undefined.textSelectionMenuActions == null))) goto L_1479;
  undefined.textSelectionMenuActions;
  goto L_147a;
  if (!((undefined.length == null))) goto L_1480;
  undefined.length;
  w = (0 > 0);
  if (!(this.viewModel.interactionCaptured)) goto L_1544;
  goto L_1551;
  // [栈深重同步 2 -> 1]
  if (!(v)) goto L_1550;
  goto L_1551;
  // [栈深重同步 2 -> 1]
  if (!((this.context == null))) goto L_15e9;
  this.context;
  goto L_160a;
  if (!((this.context == null))) goto L_1635;
  this.context;
  goto L_1656;
  if (!((this.context == null))) goto L_1681;
  this.context;
  goto L_16a2;
  if ((this.viewModel.interactionCaptured)) goto L_1830;
  if ((c)) goto L_182f;
  if ((g)) goto L_182f;
  if (!(!!v)) goto L_1836;
  if ((this.viewModel.interactionCaptured)) goto L_188e;
  if ((!c)) goto L_188e;
  if (!(g)) goto L_1893;
  goto L_18b6;
  // [栈深重同步 2 -> 1]
  if (!(u)) goto L_194f;
  goto L_1950;
  // [栈深重同步 2 -> 1]
  if (!((d#1 == null))) goto L_1ad0;
  d#1;
  if (((undefined !== a#1))) goto L_1adf;
  if (!((undefined === a#1))) goto L_1af0;
  goto L_1af1;
  // [栈深重同步 2 -> 1]
  if (!((this.viewModel.textOverflow == null))) goto L_1b84;
  this.viewModel.textOverflow;
  if (!(w)) goto L_1cd7;
  goto L_1cd8;
  // [栈深重同步 2 -> 1]
  if (!(w)) goto L_1d07;
  goto L_1d08;
  // [栈深重同步 2 -> 1]
  y = {style: B.text, accessibilityCategory: this.viewModel.accessibilityCategory, accessibilityNavigation: undefined, value: b.resolveDILTextActionTaps(this.viewModel.value, undefined.dispatchActionPayload, undefined.runWithUserInteraction, undefined.observeInteraction), width: this.viewModel.width, selectable: g, textSelectionAtomicRanges: this.viewModel.selectionAtomicRanges, textSelectionParticipantId: this.viewModel.selectionParticipantId, textSelectionParticipantOrder: this.viewModel.selectionParticipantOrder, touchEnabled: undefined, onTap: this.handleAttributedTextContainerTap, letterSpacing: this.viewModel.letterSpacing, font: undefined, color: this.viewModel.color, textAlign: f(this.viewModel.textAlign), textDecoration: this.viewModel.textDecoration, customUnderlineStyle: P(this.viewModel.textDecoration, this.viewModel.value), lineHeight: a#1, lineHeightScalesWithFont: undefined, lineHeightMultiple: undefined, numberOfLines: N(h#1), minHeight: S(this.viewModel, d#1, l#1), textOverflow: R(h#1), flexShrink: this.viewModel.flexShrink, marginTop: this.viewModel.marginTop, marginLeft: this.viewModel.marginLeft, animationsEnabled: this.viewModel.animationsEnabled, onTextSelectionMenu: undefined, onTextSelectionMenuAction: undefined};
  if (!((true === this.viewModel.shimmer))) goto L_1fc6;
  e.beginComponent(s.ShimmerText, n, undefined, undefined);
  e.setViewModelProperties(y);
  if (!((this.viewModel.color == null))) goto L_1e74;
  this.viewModel.color;
  e.setViewModelProperty("color", m.resolveDILTextColor(undefined, "prose"));
  if (!((this.viewModel.shimmerHighlightColor == null))) goto L_1eee;
  this.viewModel.shimmerHighlightColor;
  e.setViewModelProperty("highlightColor", V());
  e.setViewModelProperty("timing", W);
  e.setViewModelProperty("timer", this.timer);
  e.setUnnamedSlot(function <atom:0>);
  goto L_206e;
  // [栈深重同步 1 -> 0]
  e.beginRender(o, undefined);
  e.setAttributes(y);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=114B file=dil_text/src/DILTextComponent
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  if (!((e == null))) goto L_e;
  e;
  goto L_16;
  i = undefined({value: t});
  if (!((undefined !== i))) goto L_71;
  if (!((this.context == null))) goto L_4a;
  this.context;
  goto L_71;
  undefined.dispatchActionPayload(i);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=821B file=dil_text/src/DILTextComponent
// locals: t, i, this
// closure: H, e, r, B
function {
  this = this;
  let i;
  let t;
  t = H(this.viewModel.loadingLineCount);
  if (!((this.viewModel.width == null))) goto L_e3;
  this.viewModel.width;
  if (!((1 === t))) goto L_e2;
  goto L_e3;
  // [栈深重同步 1 -> 0]
  i = undefined;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", B.loadingRoot);
  e.setAttribute("width", i);
  e.setAttributeNumber("marginTop", this.viewModel.marginTop);
  e.setAttributeNumber("marginLeft", this.viewModel.marginLeft);
  e.setAttribute("animationsEnabled", this.viewModel.animationsEnabled);
  this.renderLoadingLines(t, i);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=9 cpool=0 bc=1146B file=dil_text/src/DILTextComponent
// args: t, i
// locals: n, o, r, s, a, this
// closure: q, O, g, e, d, B, k, l, F
function {
  this = this;
  let s;
  let r;
  let o;
  let n;
  if (!((this.viewModel.loadingLineHeight == null))) goto L_5b;
  this.viewModel.loadingLineHeight;
  n = q;
  if (!((this.viewModel.loadingBlockHeight == null))) goto L_a8;
  this.viewModel.loadingBlockHeight;
  o = O;
  if (!((this.viewModel.loadingType == null))) goto L_137;
  this.viewModel.loadingType;
  r = g.DILTextLoadingType.Placeholder;
  s = g.buildDILTextLoadingLineDelays(t);
  let a;
  a = 0;
  if (!((a < t))) goto L_479;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", B.loadingLine);
  e.setAttributeString("alignItems", k(this.viewModel.textAlign));
  e.setAttributeNumber("height", n);
  e.beginComponent(g.DILTextLoadingLine, l, undefined, undefined);
  e.setViewModelProperty("animationDelayMs", s[a]);
  e.setViewModelProperty("borderRadius", (o / 2));
  e.setViewModelProperty("height", o);
  e.setViewModelProperty("loadingType", r);
  e.setViewModelProperty("width", F(this.viewModel.loadingWidth, i));
  e.endComponent();
  e.endRender();
  a = <a_new>;
  (a++);
  goto L_165;
  return;
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=65B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!(("start" === e))) goto L_f;
  return "left";
  if (!(("end" === e))) goto L_1e;
  return "right";
  if ((("center" === e))) goto L_3b;
  if ((("left" === e))) goto L_3b;
  if (!(("right" === e))) goto L_3f;
  return e;
  return undefined;
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=72B file=dil_text/src/DILTextComponent
// args: e
function {
  if (((undefined === e))) goto L_e;
  if (!(("start" === e))) goto L_16;
  return "left";
  if (!(("end" === e))) goto L_25;
  return "right";
  if ((("center" === e))) goto L_42;
  if ((("left" === e))) goto L_42;
  if (!(("right" === e))) goto L_46;
  return e;
  return undefined;
}

// fn A  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!(("number" === e))) goto L_f;
  return "number";
  return "default";
}

// fn L  args=2 vars=2 closure=1 cpool=0 bc=19B file=dil_text/src/DILTextComponent
// args: e, t
// closure: y
function {
  if (((1 === e))) goto L_12;
  if (!((undefined === e))) goto L_12;
  return !y(t);
}

// fn y  args=1 vars=2 closure=1 cpool=0 bc=22B file=dil_text/src/DILTextComponent
// args: e
// locals: t
// closure: D
function {
  let t;
  t = D(e);
  if (!((undefined !== t))) goto L_15;
  return (t > 1);
}

// fn T  args=4 vars=6 closure=3 cpool=0 bc=131B file=dil_text/src/DILTextComponent
// args: e, t, i, n
// locals: o, r
// closure: D, C, M
function {
  let r;
  let o;
  o = D(n);
  if (!((undefined === o))) goto L_12;
  return;
  r = C(e);
  if (!((undefined !== r))) goto L_81;
  if (!((t == null))) goto L_79;
  t;
  if (!((i == null))) goto L_78;
  i;
  return Math.ceil(((r * M.resolveDILTextLineHeightRatio(undefined)) * o));
  return undefined;
}

// fn S  args=3 vars=5 closure=5 cpool=0 bc=546B file=dil_text/src/DILTextComponent
// args: e, t, i
// locals: n, o
// closure: T, u, p, C, M
function {
  let o;
  let n;
  n = T(e.font, t, i, e.minLines);
  if (((undefined !== n))) goto L_f4;
  if ((!u.Device.isAndroid())) goto L_f4;
  if (!((0 === p.stringFromDILTextValue(e.value).length))) goto L_fa;
  return n;
  if (!((undefined !== t))) goto L_129;
  return Math.ceil(t);   // tail call
  if (!((undefined !== e.loadingLineHeight))) goto L_19a;
  return Math.ceil(e.loadingLineHeight);   // tail call
  o = C(e.font);
  if (!((undefined === o))) goto L_1c8;
  return undefined;
  if (!((i == null))) goto L_21d;
  i;
  return Math.ceil((o * M.resolveDILTextLineHeightRatio(undefined)));
}

// fn D  args=1 vars=1 closure=0 cpool=0 bc=137B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!((undefined !== e))) goto L_88;
  if (!(Number.isFinite(e))) goto L_88;
  return Math.max(1, Math.floor(e));   // tail call
  return;
}

// fn C  args=1 vars=3 closure=0 cpool=2 bc=129B file=dil_text/src/DILTextComponent
// args: e
// locals: t, i
function {
  let i;
  let t;
  if (!((e == null))) goto L_f;
  e;
  goto L_3a;
  t = undefined.split(new RegExp("\\s+"))[1];
  if (!((undefined === t))) goto L_43;
  return;
  i = Number(t);
  if (!(Number.isFinite(i))) goto L_7f;
  return i;
  return undefined;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=20B file=dil_text/src/DILTextComponent
// args: t, i
// closure: e
function {
  if (!((6 === t))) goto L_13;
  return ("function" == typeof e[(i + 1)]);
}

// fn I  args=1 vars=1 closure=0 cpool=1 bc=52B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!(("string" != typeof e))) goto L_33;
  return e.some(function <atom:0>);
}

// fn E  args=1 vars=3 closure=0 cpool=0 bc=71B file=dil_text/src/DILTextComponent
// args: e
// locals: t, i
function {
  if (!(("string" == typeof e))) goto L_d;
  return false;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_44;
  let i;
  i = e[t];
  if (!((17 === i))) goto L_2e;
  return true;
  if (!((2 === i))) goto L_3b;
  goto L_3c;
  // [栈深重同步 2 -> 1]
  t = (t + 2);
  (t + 2);
  goto L_12;
  return false;
}

// fn P  args=2 vars=3 closure=1 cpool=0 bc=77B file=dil_text/src/DILTextComponent
// args: e, t
// locals: i
// closure: _
function {
  if (!(("dotted-underline" === e))) goto L_d;
  return _;
  if (!(("string" != typeof t))) goto L_4c;
  let i;
  i = 0;
  if (!((i < (t.length - 1)))) goto L_4c;
  if (!((4 === t[i]))) goto L_42;
  if (!(("dotted-underline" === t[(i + 1)]))) goto L_42;
  return _;
  i = <i_new>;
  (i++);
  goto L_1c;
  return;
}

// fn R  args=1 vars=1 closure=0 cpool=0 bc=17B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!((undefined !== e))) goto L_10;
  if (!((0 !== e))) goto L_10;
  return "ellipsis";
  return;
}

// fn N  args=1 vars=1 closure=0 cpool=0 bc=8B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!((e == null))) goto L_7;
  e;
  return 0;
}

// fn H  args=1 vars=1 closure=0 cpool=0 bc=139B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!((undefined !== e))) goto L_89;
  if (!(Number.isFinite(e))) goto L_89;
  return Math.max(1, Math.floor(e));
  return 1;
}

// fn k  args=1 vars=1 closure=0 cpool=0 bc=47B file=dil_text/src/DILTextComponent
// args: e
function {
  if (!(("center" === e))) goto L_f;
  return "center";
  if ((("end" === e))) goto L_21;
  if (!(("right" === e))) goto L_29;
  return "flex-end";
  return "flex-start";
}

// fn F  args=2 vars=2 closure=0 cpool=0 bc=20B file=dil_text/src/DILTextComponent
// args: e, t
function {
  if (((undefined === e))) goto L_a;
  if (!((t === e))) goto L_12;
  return "100%";
  return e;
}

// fn V  args=0 vars=0 closure=1 cpool=0 bc=86B file=dil_text/src/DILTextComponent
// closure: u
function {
  if (!(u.Device.isDarkMode())) goto L_50;
  return "gray-900";
  return "gray-200";
}

// fn <atom:0>  args=3 vars=49 closure=0 cpool=25 bc=1400B file=dil_text/src/DILTextComponent
// args: require, module, exports
// locals: e, t, i, n, o, r, d, l, s, a, h, u, c, v, g, b, m, M, p, w, DILTextComponent, <class_fields_init>, DILTextComponent#1, x, f, A, L, y, T, S, D, C, I, E, P, R, N, H, k, F, V, q, O, _, W, B
function {
  x = function x;
  f = function f;
  A = function A;
  L = function L;
  y = function y;
  T = function T;
  S = function S;
  D = function D;
  C = function C;
  I = function I;
  E = function E;
  P = function P;
  R = function R;
  N = function N;
  H = function H;
  k = function k;
  F = function F;
  V = function V;
  let B;
  let W;
  let _;
  let O;
  let q;
  let DILTextComponent#1;
  let p;
  let M;
  let m;
  let b;
  let g;
  let v;
  let c;
  let u;
  let h;
  let a;
  let s;
  let l;
  let d;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextLoadingType = undefined;
  exports.DILTextComponent = undefined;
  exports.resolveLabelTextAlign = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("textfield", undefined, "5iByZ9Kf9UReZnsi");
  i = e.makeNodePrototype("textview", undefined, "j4ZXeFhRmkfsTysL");
  n = e.makeComponentPrototype(undefined, "sjDI1_iK034NcSuK");
  o = e.makeNodePrototype("label", undefined, "1Sar5vR23kOCeF2Q");
  r = e.makeNodePrototype("layout", undefined, "1nzqX_4SZOsR30Z3");
  d = e.makeNodePrototype("layout", undefined, "u_WfQ6C56hyAZLFw");
  l = e.makeComponentPrototype(undefined, "3VIbqt0UgA-R9l0e");
  s = require("oai_ui/src/components/ShimmerText");
  a = require("valdi_core/src/Component");
  h = require("valdi_core/src/CompilerIntrinsics");
  u = require("valdi_core/src/Device");
  c = require("valdi_core/src/Style");
  v = require("dil_core/src/DILTimer");
  g = require("./DILTextLoadingLine");
  b = require("./rendering/DILTextActionTap");
  m = require("./rendering/DILTextColor");
  M = require("./rendering/DILTextTypography");
  p = require("./rendering/DILTextValue");
  w = require("./DILTextLoadingLine");
  Object.defineProperty(exports, "DILTextLoadingType", {enumerable: true, get: function <atom:0>});
  let DILTextComponent;
  let <class_fields_init>;
  class DILTextComponent extends a.Component { ... }
  <proto:DILTextComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILTextComponent>.onRender = function <atom:0>;
  <proto:DILTextComponent>.dispatchEditableAction = function <atom:0>;
  <proto:DILTextComponent>.renderLoading = function <atom:0>;
  <proto:DILTextComponent>.renderLoadingLines = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTextComponent>;
  DILTextComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextComponent#1 = function <atom:0>;
  exports.DILTextComponent = DILTextComponent#1;
  exports.resolveLabelTextAlign = f;
  q = 20;
  O = 12;
  _ = "1 1 1 2";
  W = {initialDelayMs: 600, cycleDurationMs: 3000, restDurationMs: 900};
  B = {text: new c.Style({backgroundColor: "transparent", minWidth: 0, flexShrink: 1}), editableTextField: new c.Style({accessibilityCategory: "input", autocapitalization: "none", autocorrection: "none", backgroundColor: "transparent", flexShrink: 1, minWidth: 0}), editableTextView: new c.Style({accessibilityCategory: "input", autocapitalization: "none", autocorrection: "none", backgroundColor: "transparent", flexShrink: 1, minWidth: 0, returnType: "linereturn", textGravity: "top"}), loadingRoot: new c.Style({flexDirection: "column", flexShrink: 1, minWidth: 0}), loadingLine: new c.Style({flexDirection: "column", justifyContent: "center", minWidth: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/DILTextComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
