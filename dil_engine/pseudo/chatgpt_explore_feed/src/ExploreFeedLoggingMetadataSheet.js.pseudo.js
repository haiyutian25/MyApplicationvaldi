// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=188B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
// closure: this, c
function {
  if ((this.isDestroyed())) goto L_bb;
  c.Device.copyToClipBoard(this.viewModel.json);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=225B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
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

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=90B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
// locals: this, this.active_func, new.target, arguments
// closure: c, <class_fields_init>
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
  this.state = {};
  this.copyAll = function <atom:0>;
  this.handleContentWidthChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=2 bc=2118B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
// locals: this
// closure: e, t, y, c, o, g, i, d, n, r, l, s
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", y.host);
  e.setAttribute("open", true);
  e.setAttributeFunction("onDismiss", this.viewModel.onDismiss);
  e.setAttributeFunction("onContentWidthChange", this.handleContentWidthChange);
  if (!((this.state.contentWidth == null))) goto L_2e9;
  this.state.contentWidth;
  if (!(c.Device.isAndroid())) goto L_2a1;
  goto L_2e9;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("width", c.Device.getWindowWidth());
  e.setAttributeNumber("maxHeight", (0.85 * c.Device.getWindowHeight()));
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", y.content);
  e.setAttributeNumber("maxHeight", (0.85 * c.Device.getWindowHeight()));
  e.beginComponent(g.Text, i, undefined, undefined);
  e.setViewModelProperty("typography", d.Typography.Title3Semibold);
  e.endComponent();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", y.scroll);
  e.beginRender(r, undefined);
  e.setAttributeString("value", this.viewModel.json);
  e.setAttributeStyle("style", y.metadata);
  e.endRender();
  e.endRender();
  e.beginComponent(l.Button, s, undefined, undefined);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("onPress", this.copyAll);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=2 bc=1716B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
// args: require, module, exports
// locals: e, t, o, i, n, r, s, a, d, l, g, p, c, h, ExploreFeedLoggingMetadataSheet, <class_fields_init>, ExploreFeedLoggingMetadataSheet#1, y
function {
  let y;
  let ExploreFeedLoggingMetadataSheet#1;
  let h;
  let c;
  let p;
  let g;
  let l;
  let d;
  let a;
  let s;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ExploreFeedLoggingMetadataSheet = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["accessibilityId", "chatgpt.explore.logging-metadata-sheet", "androidClass", "com.openai.valdi.dil.widgets.DILPopoverSheetView", "iosClass", "ValdiDILPopoverSheetView"], "LTFUEF88hbjrpijN");
  o = e.makeNodePrototype("layout", undefined, "-6lC9UnQfxOyLGPa");
  i = e.makeComponentPrototype(["value", "Debug info (internal)", "align", "center"], "jMHBSZywntW8d2er");
  n = e.makeNodePrototype("scroll", undefined, "SmWg0pBA4wiJkxX4");
  r = e.makeNodePrototype("label", ["accessibilityId", "chatgpt.explore.logging-metadata-sheet.json"], "1_rY1m59vLXI1KWw");
  s = e.makeComponentPrototype(["accessibilityId", "chatgpt.explore.logging-metadata-sheet.copy", "label", "Copy all"], "KxWue0oP9A6gtLwX");
  a = require("oai_core/src/OAITokens");
  d = require("oai_core/src/OAITypography");
  l = require("oai_ui/src/components/Button");
  g = require("oai_ui/src/components/Text");
  p = require("valdi_core/src/Component");
  c = require("valdi_core/src/Device");
  h = require("valdi_core/src/Style");
  let ExploreFeedLoggingMetadataSheet;
  let <class_fields_init>;
  class ExploreFeedLoggingMetadataSheet extends p.StatefulComponent { ... }
  <proto:ExploreFeedLoggingMetadataSheet>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExploreFeedLoggingMetadataSheet>;
  ExploreFeedLoggingMetadataSheet = function <atom:0>;
  // close_loc <class_fields_init>
  ExploreFeedLoggingMetadataSheet#1 = function <atom:0>;
  exports.ExploreFeedLoggingMetadataSheet = ExploreFeedLoggingMetadataSheet#1;
  y = {host: new h.Style({backgroundColor: a.OAIColor.BgElevatedPrimary, flexDirection: "column", ignoreParentViewport: true, limitToViewport: false, position: "absolute", left: 0, top: 0}), metadata: new h.Style({font: d.DesignTypography.Footnote.font, lineHeight: d.DesignTypography.Footnote.lineHeight, color: a.OAIColor.TextPrimary, width: "100%", numberOfLines: 0, accessibilityCategory: "text"}), scroll: new h.Style({width: "100%", flexShrink: 1}), content: new h.Style({flexDirection: "column", paddingLeft: a.OAISpacing.Two, paddingRight: a.OAISpacing.Two, paddingTop: a.OAISpacing.One, paddingBottom: a.OAISpacing.Two, gap: a.OAISpacing.Two, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_explore_feed/src/ExploreFeedLoggingMetadataSheet
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
