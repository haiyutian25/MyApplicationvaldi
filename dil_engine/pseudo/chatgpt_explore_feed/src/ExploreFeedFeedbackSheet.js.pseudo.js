// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=225B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// args: e
// closure: this
function {
  if (!(!this.isDestroyed())) goto L_e0;
  if (!(Number.isFinite(e))) goto L_e0;
  if (!((e > 0))) goto L_e0;
  if (!((e !== this.state.contentWidth))) goto L_e0;
  this.setState({contentWidth: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=54B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// args: e
// closure: this
function {
  this.setState({text: e, failed: false});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=179B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_b2;
  this.setState({submitting: false, failed: !e});
  if (!(e)) goto L_b2;
  this.viewModel.onDismiss();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=426B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// closure: this
function {
  if ((this.state.submitting)) goto L_1a9;
  if (((0 === this.state.text.trim().length))) goto L_1a9;
  this.setState({submitting: true, failed: false});
  this.viewModel.onSubmit(this.state.text).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=3 bc=124B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
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
  this.state = {text: "", submitting: false, failed: false};
  this.handleContentWidthChange = function <atom:0>;
  this.handleTextChanged = function <atom:0>;
  this.submit = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=2 bc=3692B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// locals: this
// closure: e, t, g, d, h, i, o, s, p, a, r, l, n
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.host);
  e.setAttributeString("backgroundColor", d.OAIColor.BgElevatedPrimary);
  e.setAttribute("open", true);
  e.setAttributeFunction("onDismiss", this.viewModel.onDismiss);
  e.setAttributeFunction("onContentWidthChange", this.handleContentWidthChange);
  if (!((this.state.contentWidth == null))) goto L_35b;
  this.state.contentWidth;
  if (!(h.Device.isAndroid())) goto L_313;
  goto L_35b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("width", h.Device.getWindowWidth());
  e.setAttributeNumber("maxHeight", (0.85 * h.Device.getWindowHeight()));
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", g.scroll);
  e.setAttributeNumber("maxHeight", (0.85 * h.Device.getWindowHeight()));
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", g.content);
  e.beginRender(s, undefined);
  e.setAttributeString("value", p.default.feedbackSheetTitle());
  e.setAttributeStyle("style", g.title);
  e.endRender();
  e.beginComponent(a.TextArea, r, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", p.default.feedbackSheetPlaceholder());
  e.setViewModelProperty("placeholder", p.default.feedbackSheetPlaceholder());
  e.setViewModelProperty("value", this.state.text);
  e.setViewModelProperty("disabled", this.state.submitting);
  if (!(this.state.failed)) goto L_936;
  goto L_937;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("error", undefined);
  e.setViewModelProperty("onChange", this.handleTextChanged);
  e.setViewModelProperty("radius", d.OAIRadius.Xs);
  e.setViewModelProperty("background", d.OAIColor.BgElevatedPrimary);
  e.setViewModelProperty("contentPadding", d.OAISpacing.Two);
  e.endComponent();
  e.beginComponent(l.Button, n, undefined, undefined);
  e.setViewModelProperty("label", p.default.feedbackSheetSubmit());
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("style", g.submit);
  e.setViewModelProperty("labelStyle", g.submitLabel);
  if ((this.state.submitting)) goto L_d79;
  e.setViewModelProperty("disabled", (0 === this.state.text.trim().length));
  e.setViewModelProperty("onPress", this.submit);
  e.endComponent();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=4 bc=1641B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// args: require, module, exports
// locals: e, t, i, o, s, r, n, d, l, a, c, h, b, u, p, ExploreFeedFeedbackSheet, <class_fields_init>, ExploreFeedFeedbackSheet#1, g
function {
  let g;
  let ExploreFeedFeedbackSheet#1;
  let p;
  let u;
  let b;
  let h;
  let c;
  let a;
  let l;
  let d;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedFeedbackSheet = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["accessibilityId", "chatgpt.explore.feedback-sheet", "androidClass", "com.openai.valdi.dil.widgets.DILPopoverSheetView", "iosClass", "ValdiDILPopoverSheetView"], "twWET_Sz8mbLYcql");
  i = e.makeNodePrototype("scroll", undefined, "bU0F-a_kPjgfM0pP");
  o = e.makeNodePrototype("layout", undefined, "bg8wT5Iiqu_9Ti97");
  s = e.makeNodePrototype("label", undefined, "srPkyugxFduOHfUs");
  r = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.feedback-sheet.text", "rows", 6, "maxLength", 2000], "ABTnrduOm0TbMKek");
  n = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.feedback-sheet.submit"], "dK_vbG7VEPEr1gA7");
  d = require("oai_core/src/OAITokens");
  l = require("oai_ui/src/components/Button");
  a = require("oai_ui/src/components/TextArea");
  c = require("valdi_core/src/Component");
  h = require("valdi_core/src/Device");
  b = require("valdi_core/src/Style");
  u = require("valdi_core/src/SystemFont");
  p = require("./Strings");
  let ExploreFeedFeedbackSheet;
  let <class_fields_init>;
  class ExploreFeedFeedbackSheet extends c.StatefulComponent { ... }
  <proto:ExploreFeedFeedbackSheet>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedFeedbackSheet>;
  ExploreFeedFeedbackSheet = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedFeedbackSheet#1 = function <atom:0>;
  exports.ExploreFeedFeedbackSheet = ExploreFeedFeedbackSheet#1;
  g = {host: new b.Style({flexDirection: "column", ignoreParentViewport: true, limitToViewport: false, position: "absolute", left: 0, top: 0}), scroll: new b.Style({width: "100%", flexShrink: 1}), content: new b.Style({flexDirection: "column", paddingLeft: d.OAISpacing.Two, paddingRight: d.OAISpacing.Two, paddingTop: d.OAISpacing.One, paddingBottom: d.OAISpacing.Two, gap: d.OAISpacing.Two, width: "100%"}), title: new b.Style({font: u.systemBoldFont(20), lineHeight: 24, letterSpacing: 0.1, color: d.OAIColor.TextPrimary, textAlign: "center", width: "100%", accessibilityCategory: "header"}), submit: new b.Style({height: 44}), submitLabel: new b.Style({font: u.systemFont(14), lineHeight: 20, letterSpacing: 0.1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedFeedbackSheet
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
