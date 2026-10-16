// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=130B file=dil_text/src/markdown/DILMarkdownComponent
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

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=214B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// closure: k, this
function {
  if (!(k.isVersionAtLeast(3))) goto L_d5;
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

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=146B file=dil_text/src/markdown/DILMarkdownComponent
// locals: this, this.active_func, new.target, arguments
// closure: k, <class_fields_init>, S
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
  this.parsedMarkdown = new S.Markdown([]);
  this.parsedRichContent = false;
  this.handleTextSelectionMenu = function <atom:0>;
  this.handleTextSelectionMenuAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=50B file=dil_text/src/markdown/DILMarkdownComponent
// locals: this
// closure: Y
function {
  this = this;
  this.codeRenderer = Y.resolveDILMarkdownCodeRenderer();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=619B file=dil_text/src/markdown/DILMarkdownComponent
// locals: e, t, i, this
// closure: S
function {
  this = this;
  let i;
  let t;
  let e;
  e = this.viewModel.markdown;
  t = this.viewModel.parsedBlocks;
  i = (true === this.viewModel.richContent);
  if (((this.parsedMarkdownSource !== e))) goto L_15d;
  if (((this.parsedMarkdownBlocks !== t))) goto L_15d;
  if (!((undefined === t))) goto L_15d;
  if (!((this.parsedRichContent !== i))) goto L_26a;
  if (!((undefined === t))) goto L_20e;
  if (!(i)) goto L_1c1;
  goto L_239;
  // [栈深重同步 2 -> 1]
  goto L_239;
  // [栈深重同步 2 -> 1]
  this.parsedMarkdown = new S.Markdown(t);
  this.parsedMarkdownBlocks = t;
  this.parsedMarkdownSource = e;
  this.parsedRichContent = i;
  i;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=574B file=dil_text/src/markdown/DILMarkdownComponent
// locals: i, n, this
// closure: w, e, t, ge
function {
  this = this;
  let n;
  let i;
  i = this.resolveStreamingAnimation();
  if (!((undefined === this.viewModel.textAlign))) goto L_85;
  goto L_8a;
  // [栈深重同步 2 -> 1]
  n = {marginLeft: undefined, marginTop: undefined, width: "100%"};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_144;
  w.applyDILAutoSpacingAttributes(n, this.viewModel.autoSpacing);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", ge.root);
  e.setAttributes(n);
  this.renderBlocks(i);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=236B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// locals: t, i, this
function {
  this = this;
  let t;
  t = this.parsedMarkdown.blocks;
  let i;
  i = 0;
  if (!((i < t.length))) goto L_eb;
  if (!((true === this.viewModel.streamingCursor))) goto L_dc;
  this.renderBlock(t[i], i, e, (i === (t.length - 1)));
  i = <i_new>;
  (i++);
  goto L_4e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=212B file=dil_text/src/markdown/DILMarkdownComponent
// closure: e, r, ge, this, t, v, g
function {
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", ge.codeScroll);
  this.renderCodeText(t, v, g);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=43B file=dil_text/src/markdown/DILMarkdownComponent
// closure: this, i, v, g
function {
  this.renderListItems(i, v, g);
  return;
}

// fn <atom:0>  args=4 vars=9 closure=19 cpool=2 bc=7859B file=dil_text/src/markdown/DILMarkdownComponent
// args: t, c, v, g
// locals: t#1, i, i#1, p, this
// closure: e, r, ge, i, n, H, re, o, D, l, d, s, a, oe, R, h, j, u, W
function {
  this = this;
  let p;
  if (!(("rule" === t.kind))) goto L_733;
  e.beginRender(i, "rule-".concat(c));
  e.setAttributeStyle("style", ge.rule);
  e.endRender();
  if (!(g)) goto L_732;
  let t#1;
  t#1 = this.resolveTextLabelTypography();
  e.beginRender(n, "streaming-cursor-".concat(c));
  e.setAttributeStyle("style", ge.text);
  if (!((undefined === this.viewModel.textAlign))) goto L_24b;
  goto L_2b4;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", H.resolveLabelTextAlign(this.viewModel.textAlign));
  if (!((undefined === this.viewModel.textAlign))) goto L_32c;
  goto L_331;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", "100%");
  if (!((this.context == null))) goto L_398;
  this.context;
  goto L_3b9;
  e.setAttribute("value", re([], "paragraph", 0, v, (true === undefined.enhancedStreamingAnimationsEnabled), (true === this.viewModel.tableTypography), this.viewModel.fontSize, true, this.viewModel.onOpenLink, (true === this.viewModel.richContent), (true === this.viewModel.dottedLinks)));
  e.setAttributeString("font", t#1.font);
  e.setAttributeNumber("lineHeight", t#1.lineHeight);
  e.setAttribute("lineHeightScalesWithFont", t#1.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", t#1.lineHeightMultiple);
  e.setAttributeFunction("onTextSelectionMenu", this.resolveTextSelectionMenuHandler());
  e.setAttributeFunction("onTextSelectionMenuAction", this.resolveTextSelectionMenuActionHandler());
  e.endRender();
  return;
  if (!(("code" === t.kind))) goto L_8fa;
  e.beginRender(o, "code-".concat(c));
  e.setAttributeStyle("style", ge.codeBlock);
  if (!((this.viewModel.renderCodeBlockHeader == null))) goto L_853;
  this.viewModel.renderCodeBlockHeader;
  this.viewModel;
  goto L_858;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t, c);
  if (!((true === this.viewModel.richContent))) goto L_8a7;
  goto L_8d0;
  // [栈深重同步 1 -> 0]
  this.renderCodeText(t, v, g);
  e.endRender();
  return;
  if (!(("math" === t.kind))) goto L_b05;
  if (!((true === this.viewModel.richContent))) goto L_b05;
  e.beginComponent(D.DILMathWidget, l, "math-".concat(c), undefined);
  e.setViewModelProperty("value", t.text);
  e.setViewModelProperty("block", true);
  e.setViewModelProperty("fontSize", this.viewModel.fontSize);
  e.endComponent();
  return;
  if (!(("quote" === t.kind))) goto L_1462;
  let i;
  i = this.resolveTextLabelTypography();
  e.beginRender(d, "quote-".concat(c));
  e.setAttributeStyle("style", ge.quote);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", ge.quoteBar);
  e.setAttributeNumber("height", this.resolveQuoteBarHeight(t.text));
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", ge.text);
  if (!((undefined === this.viewModel.textAlign))) goto L_e0d;
  goto L_e76;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", H.resolveLabelTextAlign(this.viewModel.textAlign));
  if (!((undefined === this.viewModel.textAlign))) goto L_eee;
  goto L_ef3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", "100%");
  if (!((this.context == null))) goto L_fb7;
  this.context;
  goto L_fd8;
  e.setAttribute("value", re(t.inlines, t.kind, t.level, v, (true === undefined.enhancedStreamingAnimationsEnabled), (true === this.viewModel.tableTypography), this.viewModel.fontSize, g, this.viewModel.onOpenLink, (true === this.viewModel.richContent), (true === this.viewModel.dottedLinks)));
  e.setAttributeString("font", i.font);
  e.setAttributeNumber("lineHeight", i.lineHeight);
  e.setAttribute("lineHeightScalesWithFont", i.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", i.lineHeightMultiple);
  if (!((true === this.viewModel.dottedLinks))) goto L_12f9;
  goto L_12fa;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("customUnderlineStyle", undefined);
  e.setAttributeFunction("onTextSelectionMenu", this.resolveTextSelectionMenuHandler());
  e.setAttributeFunction("onTextSelectionMenuAction", this.resolveTextSelectionMenuActionHandler());
  this.renderInlineAttachments(t.inlines, i.fontSize);
  e.endRender();
  e.endRender();
  return;
  if (!(("list" === t.kind))) goto L_15ba;
  let i#1;
  if (!((t.items == null))) goto L_14bc;
  t.items;
  i#1 = [];
  e.beginComponent(R.DILListComponent, h, "list-".concat(c), undefined);
  e.setViewModelProperty("gap", j);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
  if (!(("heading" === t.kind))) goto L_162e;
  goto L_1654;
  // [栈深重同步 1 -> 0]
  p = this.resolveTextLabelTypography();
  e.beginRender(u, "text-".concat(c));
  e.setAttributeStyle("style", ge.text);
  if (!((undefined === this.viewModel.textAlign))) goto L_176f;
  goto L_17d8;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", H.resolveLabelTextAlign(this.viewModel.textAlign));
  if (!((undefined === this.viewModel.textAlign))) goto L_1850;
  goto L_1855;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", "100%");
  if (!(("heading" === t.kind))) goto L_18f3;
  goto L_18f4;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityCategory", undefined);
  if (!(("math" === t.kind))) goto L_199d;
  goto L_19bf;
  // [栈深重同步 5 -> 4]
  if (!((this.context == null))) goto L_1a31;
  this.context;
  goto L_1a52;
  e.setAttribute("value", re(t.inlines, t.kind, t.level, v, (true === undefined.enhancedStreamingAnimationsEnabled), (true === this.viewModel.tableTypography), this.viewModel.fontSize, g, this.viewModel.onOpenLink, (true === this.viewModel.richContent), (true === this.viewModel.dottedLinks)));
  e.setAttributeString("font", p.font);
  e.setAttributeNumber("lineHeight", p.lineHeight);
  e.setAttribute("lineHeightScalesWithFont", p.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", p.lineHeightMultiple);
  if (!((true === this.viewModel.dottedLinks))) goto L_1d73;
  goto L_1d74;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("customUnderlineStyle", undefined);
  e.setAttributeFunction("onTextSelectionMenu", this.resolveTextSelectionMenuHandler());
  e.setAttributeFunction("onTextSelectionMenuAction", this.resolveTextSelectionMenuActionHandler());
  this.renderInlineAttachments(t.inlines, p.fontSize);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=11 cpool=0 bc=904B file=dil_text/src/markdown/DILMarkdownComponent
// args: i, r
// closure: this, e, D, c, o, me, t, v, ge, pe, n
function {
  if (!((true === this.viewModel.richContent))) goto L_1ea;
  if (!((undefined !== i.latex))) goto L_1ea;
  o = <o_new>;
  e.beginComponent(D.DILMathWidget, c, String((o++)), undefined);
  e.setViewModelProperty("value", i.latex);
  e.setViewModelProperty("block", false);
  e.setViewModelProperty("fontSize", this.viewModel.fontSize);
  e.endComponent();
  if (!((true === this.viewModel.dottedLinks))) goto L_387;
  if (!(me(t, r))) goto L_387;
  o = <o_new>;
  e.beginRender(v, String((o++)));
  e.setAttributeStyle("style", ge.linkIndicator);
  e.setAttribute("src", pe);
  e.setAttributeNumber("width", n);
  e.setAttributeNumber("height", n);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=8 cpool=1 bc=56B file=dil_text/src/markdown/DILMarkdownComponent
// args: t, i
// locals: n, o, this
// closure: e, D, c, me, v, ge, pe, ne
function {
  this = this;
  let o;
  let n;
  n = (i * ne);
  o = 0;
  t.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=75B file=dil_text/src/markdown/DILMarkdownComponent
// args: n
// closure: this, e, t, i
function {
  this.renderCodeLabel(e.text, t, i, n);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=1 bc=288B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i
// locals: n, this
// closure: f
function {
  this = this;
  let n;
  n = this.codeRenderer;
  if (!((undefined !== e.codeSlice))) goto L_d5;
  if (!((undefined !== n))) goto L_d5;
  goto L_11f;
  // [栈深重同步 1 -> 0]
  this.renderCodeLabel(e.text, t, i, undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=15B file=dil_text/src/markdown/DILMarkdownComponent
// closure: de, t, i, r, n, o
function {
  return de(t, i, r, n, o);   // tail call
}

// fn <atom:0>  args=4 vars=7 closure=7 cpool=1 bc=1169B file=dil_text/src/markdown/DILMarkdownComponent
// args: t, i, n, o
// locals: r, l, this
// closure: de, T, e, g, ge, H, N
function {
  this = this;
  let l;
  let r;
  if (!((this.context == null))) goto L_34;
  this.context;
  goto L_55;
  r = (true === undefined.enhancedStreamingAnimationsEnabled);
  l = T.remember(function <atom:0>, t, i, r, n, o);
  e.beginRender(g, undefined);
  if (!((true === this.viewModel.richContent))) goto L_14b;
  goto L_16f;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ge.text);
  if (!((undefined === this.viewModel.textAlign))) goto L_1e6;
  goto L_24e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", H.resolveLabelTextAlign(this.viewModel.textAlign));
  if (!((undefined === this.viewModel.textAlign))) goto L_2c5;
  goto L_2ca;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", "100%");
  e.setAttribute("value", l);
  if (!((undefined === o))) goto L_375;
  goto L_3be;
  // [栈深重同步 6 -> 5]
  e.setAttributeNumber("lineHeightMultiple", this.resolveLabelLineHeight((N.DIL_CODE_LINE_HEIGHT / N.DIL_CODE_FONT_SIZE)));
  e.setAttributeFunction("onTextSelectionMenu", this.resolveTextSelectionMenuHandler());
  e.setAttributeFunction("onTextSelectionMenuAction", this.resolveTextSelectionMenuActionHandler());
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=86B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i
// locals: n, this
function {
  this = this;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_55;
  if (!(i)) goto L_47;
  this.renderListItem(e[n], n, t, (n === (e.length - 1)));
  n = <n_new>;
  (n++);
  goto L_7;
  return;
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=0 bc=410B file=dil_text/src/markdown/DILMarkdownComponent
// args: t, i, n, o
// locals: this
// closure: e, p
function {
  this = this;
  if (!((true === this.viewModel.richContent))) goto L_170;
  if (!((undefined !== t.depth))) goto L_170;
  e.beginRender(p, "indent-".concat(i));
  e.setAttributeNumber("paddingLeft", (32 * t.depth));
  this.renderListItemContent(t, i, n, o);
  e.endRender();
  return;
  this.renderListItemContent(t, i, n, o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=0 bc=1754B file=dil_text/src/markdown/DILMarkdownComponent
// closure: e, b, ge, this, H, re, t, n, o, r, oe
function {
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", ge.text);
  if (!((undefined === this.viewModel.textAlign))) goto L_f0;
  goto L_158;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("textAlign", H.resolveLabelTextAlign(this.viewModel.textAlign));
  if (!((undefined === this.viewModel.textAlign))) goto L_1cf;
  goto L_1d4;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("width", "100%");
  if (!((this.context == null))) goto L_25d;
  this.context;
  goto L_27e;
  e.setAttribute("value", re(t.inlines, "paragraph", 0, n, (true === undefined.enhancedStreamingAnimationsEnabled), (true === this.viewModel.tableTypography), this.viewModel.fontSize, o, this.viewModel.onOpenLink, (true === this.viewModel.richContent), (true === this.viewModel.dottedLinks)));
  e.setAttributeString("font", r.font);
  e.setAttributeNumber("lineHeight", r.lineHeight);
  e.setAttribute("lineHeightScalesWithFont", r.lineHeightScalesWithFont);
  e.setAttributeNumber("lineHeightMultiple", r.lineHeightMultiple);
  if (!((true === this.viewModel.dottedLinks))) goto L_59b;
  goto L_59c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("customUnderlineStyle", undefined);
  e.setAttributeFunction("onTextSelectionMenu", this.resolveTextSelectionMenuHandler());
  e.setAttributeFunction("onTextSelectionMenuAction", this.resolveTextSelectionMenuActionHandler());
  this.renderInlineAttachments(t.inlines, r.fontSize);
  e.endRender();
  return;
}

// fn <atom:0>  args=4 vars=6 closure=9 cpool=1 bc=532B file=dil_text/src/markdown/DILMarkdownComponent
// args: t, i, n, o
// locals: r, this
// closure: e, b, ge, H, re, oe, F, m, ee
function {
  this = this;
  let r;
  r = this.resolveTextLabelTypography();
  e.beginComponent(F.DILListItemComponent, m, "item-".concat(i), undefined);
  e.setViewModelProperty("marker", t.marker);
  e.setViewModelProperty("markerFontSize", this.viewModel.fontSize);
  e.setViewModelProperty("markerGap", 6);
  e.setViewModelProperty("markerWidth", ee);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=211B file=dil_text/src/markdown/DILMarkdownComponent
// locals: this
// closure: M
function {
  this = this;
  if (!((undefined !== this.viewModel.streamingAnimation))) goto L_8d;
  return this.viewModel.streamingAnimation;
  return M.DILStreamingAnimation.Disabled;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=363B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// locals: t, this
// closure: ce, N, _
function {
  this = this;
  let t;
  t = ce(e, (true === this.viewModel.tableTypography));
  return this.resolveLabelTypography(t, N.DIL_PLATFORM_TYPOGRAPHY.current.markdown.headingWeight, _.DILFontRole.Title, N.resolveDILTitleLineHeightRatio(t));   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=304B file=dil_text/src/markdown/DILMarkdownComponent
// locals: e, this
// closure: ue, _, N
function {
  this = this;
  let e;
  e = ue((true === this.viewModel.tableTypography));
  if (!((this.viewModel.fontSize == null))) goto L_bb;
  this.viewModel.fontSize;
  return this.resolveLabelTypography(e, "normal", _.DILFontRole.Text, N.resolveDILTextLineHeightRatio(e));   // tail call
}

// fn <atom:0>  args=4 vars=9 closure=3 cpool=0 bc=338B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n
// locals: o, r, l, d, this
// closure: _, y, N
function {
  this = this;
  let d;
  let l;
  let r;
  let o;
  o = _.resolveDILRoleFontSize(e, i);
  r = this.viewModel.lineHeight;
  if (!((undefined === r))) goto L_86;
  goto L_b1;
  // [栈深重同步 1 -> 0]
  if (!((y.resolveDILStyleLineHeightRatio(r, o) == null))) goto L_b7;
  y.resolveDILStyleLineHeightRatio(r, o);
  l = n;
  d = N.resolveDILScaledLineHeight(o, l);
  if (!((undefined === d))) goto L_f7;
  goto L_123;
  // [栈深重同步 2 -> 1]
  if (((undefined !== d))) goto L_13a;
  if (!((undefined === d))) goto L_14b;
  goto L_14c;
  // [栈深重同步 2 -> 1]
  return {fontSize: o, font: _.resolveFont(e, t, false, i), lineHeight: d, lineHeightScalesWithFont: undefined, lineHeightMultiple: undefined};
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=159B file=dil_text/src/markdown/DILMarkdownComponent
// locals: e, this
// closure: y, N
function {
  this = this;
  let e;
  e = this.viewModel.lineHeight;
  if (!((undefined !== e))) goto L_9e;
  return y.resolveDILStyleLineHeightRatio(e, N.DIL_CODE_FONT_SIZE);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=45B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// closure: N
function {
  if (!((e == null))) goto L_2c;
  e;
  return N.resolveDILTextLineHeightRatio(undefined);
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=252B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// locals: t, i, this
// closure: ue, ve, y, N, K
function {
  this = this;
  let i;
  let t;
  t = this.viewModel.lineHeight;
  i = ue((true === this.viewModel.tableTypography));
  if (!((undefined === t))) goto L_a1;
  goto L_f1;
  // [栈深重同步 3 -> 2]
  if (!((y.resolveDILStyleLineHeightPixels(t, N.resolveDILTextFontSize(i)) == null))) goto L_f9;
  y.resolveDILStyleLineHeightPixels(t, N.resolveDILTextFontSize(i));
  return ve(e, K);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=132B file=dil_text/src/markdown/DILMarkdownComponent
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2d;
  this.context;
  goto L_57;
  if (!((undefined.textSelectionMenuActions == null))) goto L_56;
  undefined.textSelectionMenuActions;
  goto L_57;
  if (!((undefined.length == null))) goto L_5d;
  undefined.length;
  if (!((0 !== 0))) goto L_83;
  return this.handleTextSelectionMenu;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=132B file=dil_text/src/markdown/DILMarkdownComponent
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2d;
  this.context;
  goto L_57;
  if (!((undefined.textSelectionMenuActions == null))) goto L_56;
  undefined.textSelectionMenuActions;
  goto L_57;
  if (!((undefined.length == null))) goto L_5d;
  undefined.length;
  if (!((0 !== 0))) goto L_83;
  return this.handleTextSelectionMenuAction;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// closure: s
function {
  return s(e.href);   // tail call
}

// fn re  args=11 vars=16 closure=6 cpool=1 bc=416B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n, o, r, l, d, s, a, h
// locals: u, c, v, g, p
// closure: C, U, P, le, me, Q
function {
  let g;
  let v;
  let c;
  let u;
  if (!((undefined === s))) goto L_3c;
  goto L_3e;
  // [栈深重同步 4 -> 3]
  u = new C.AttributedTextBuilder({onOpenLink: function <atom:0>});
  c = U.pushDILStreamingTextAnimation(u, n, o);
  v = new P.DILTextFontResolver();
  g = 0;
  let p;
  p = 0;
  if (!((p < e.length))) goto L_128;
  if (!(a)) goto L_ff;
  if (!((undefined !== e[p].latex))) goto L_ff;
  g = <g_new>;
  goto L_100;
  // [栈深重同步 11 -> 10]
  if (!(h)) goto L_118;
  if (!(me(e, p))) goto L_118;
  g = <g_new>;
  goto L_119;
  // [栈深重同步 12 -> 11]
  le(u, v, e[p], t, i, r, l, a, h, undefined, undefined);
  p = <p_new>;
  (p++);
  goto L_a5;
  U.popDILStreamingTextAnimation(u, c);
  if (!(d)) goto L_178;
  le(u, v, Q, t, i, r, l, a, h, undefined, undefined);
  return u.build();   // tail call
}

// fn le  args=11 vars=13 closure=2 cpool=0 bc=599B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n, o, r, l, d, s, a, h
// locals: u, c
// closure: se, ae
function {
  let c;
  let u;
  if (!((0 === i.text.length))) goto L_2e;
  return;
  u = t.pushedFontStyleCount;
  c = se(e, t, i, n, o, r, l, d);
  if (!(i.link)) goto L_14b;
  if (!(s)) goto L_bd;
  goto L_c2;
  // [栈深重同步 3 -> 2]
  e.pushTextDecoration("underline");
  c = <c_new>;
  (c++);
  if (!((undefined !== i.href))) goto L_14b;
  e.pushLink({href: i.href});
  c = <c_new>;
  (c++);
  if (!((undefined === a))) goto L_19c;
  goto L_1c5;
  // [栈深重同步 1 -> 0]
  e.appendInlineView(a, 3);
  if (!((undefined !== h))) goto L_249;
  e.pushTextDecoration("none");
  e.appendInlineView(h, 0);
  e.pop();
  ae(e, t, c, u);
  return;
}

// fn de  args=5 vars=7 closure=6 cpool=0 bc=718B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n, o
// locals: r, l
// closure: C, q, N, U, G, Q
function {
  let l;
  let r;
  r = new C.AttributedTextBuilder();
  if (!((o == null))) goto L_5e;
  o;
  goto L_7f;
  if (!((undefined.foregroundColor == null))) goto L_af;
  undefined.foregroundColor;
  r.pushColor(q.resolveDILTextColor(undefined, "emphasis"));
  if (!((o == null))) goto L_e2;
  o;
  goto L_103;
  if (!((undefined.font == null))) goto L_12c;
  undefined.font;
  r.pushFont(N.DIL_CODE_FONT);
  l = U.pushDILStreamingTextAnimation(r, t, i);
  if (!((undefined === o))) goto L_18c;
  goto L_1d9;
  // [栈深重同步 1 -> 0]
  G.appendDILMarkdownCode(r, e, o.tokens);
  U.popDILStreamingTextAnimation(r, l);
  if (!(n)) goto L_256;
  r.appendText(Q.text);
  r.pop();
  r.pop();
  return r.build();   // tail call
}

// fn se  args=8 vars=9 closure=10 cpool=0 bc=1288B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n, o, r, l, d
// locals: s
// closure: V, z, W, ce, N, B, ue, q, E, O
function {
  let s;
  s = 0;
  if (!(d)) goto L_88;
  if (!((true === i.strikethrough))) goto L_88;
  s = (s + V.StrikethroughElement.pushStyle({}, e, t));
  (s + V.StrikethroughElement.pushStyle({}, e, t));
  if (!(i.code)) goto L_fd;
  return (s + z.CodeElement.pushStyle({}, e, t));
  if (!(("heading" === n))) goto L_1f8;
  s = (s + W.TitleElement.pushStyle({size: ce(o, r), weight: N.DIL_PLATFORM_TYPOGRAPHY.current.markdown.headingWeight}, e, t));
  goto L_2f3;
  // [栈深重同步 1 -> 0]
  s = (s + B.TextElement.pushStyle({size: ue(r), weight: "normal", italic: false}, e, t));
  (s + B.TextElement.pushStyle({size: ue(r), weight: "normal", italic: false}, e, t));
  if (!((undefined !== l))) goto L_2f3;
  t.pushFontStyle(l, undefined, undefined, undefined);
  e.pushFont(t.resolveFont());
  s = <s_new>;
  (s++);
  if (!(i.link)) goto L_372;
  e.pushColor(q.resolveDILTextColor(undefined, "primary"));
  s = <s_new>;
  (s++);
  if (!(i.bold)) goto L_489;
  if (!(("heading" !== n))) goto L_489;
  s = (s + E.BoldElement.pushStyle({weight: N.DIL_PLATFORM_TYPOGRAPHY.current.markdown.strongWeight}, e, t));
  (s + E.BoldElement.pushStyle({weight: N.DIL_PLATFORM_TYPOGRAPHY.current.markdown.strongWeight}, e, t));
  if (!(i.italic)) goto L_503;
  s = (s + O.ItalicElement.pushStyle({}, e, t));
  (s + O.ItalicElement.pushStyle({}, e, t));
  return s;
}

// fn ae  args=4 vars=5 closure=0 cpool=0 bc=139B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t, i, n
// locals: o
function {
  let o;
  o = 0;
  if (!((o < i))) goto L_3c;
  e.pop();
  o = <o_new>;
  (o++);
  goto L_5;
  if (!((t.pushedFontStyleCount > n))) goto L_8a;
  t.popFontStyle();
  goto L_3c;
  return;
}

// fn he  args=1 vars=2 closure=1 cpool=0 bc=236B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
// locals: t
// closure: N
function {
  let t;
  t = N.DIL_PLATFORM_TYPOGRAPHY.current.markdown.headingSizes;
  return t[Math.max(0, Math.min((e - 1), (t.length - 1)))];
}

// fn ue  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_text/src/markdown/DILMarkdownComponent
// args: e
function {
  if (!(e)) goto L_9;
  return "sm";
  return "md";
}

// fn ce  args=2 vars=3 closure=1 cpool=0 bc=84B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t
// locals: i
// closure: he
function {
  let i;
  i = he(e);
  if (!(!t)) goto L_f;
  return i;
  if (!((i === "2xl"))) goto L_21;
  return "xl";
  if (!((i === "xl"))) goto L_30;
  return "lg";
  if (!((i === "lg"))) goto L_3f;
  return "md";
  if (!((i === "xs"))) goto L_4e;
  return "xs";
  return "sm";
}

// fn ve  args=2 vars=4 closure=0 cpool=0 bc=89B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t
// locals: i, n
function {
  let i;
  i = 1;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_53;
  if (!((10 === e.charCodeAt(n)))) goto L_48;
  i = <i_new>;
  (i++);
  n = <n_new>;
  (n++);
  goto L_a;
  return (i * t);
}

// fn me  args=2 vars=4 closure=0 cpool=0 bc=268B file=dil_text/src/markdown/DILMarkdownComponent
// args: e, t
// locals: i, n
function {
  let n;
  let i;
  i = e[t];
  n = e[(t + 1)];
  if (!(i.link)) goto L_10b;
  if (!((undefined !== i.href))) goto L_10b;
  if (!((i.linkEnd == null))) goto L_10b;
  i.linkEnd;
  if (!((n == null))) goto L_9c;
  n;
  goto L_bd;
  if ((!undefined.link)) goto L_10b;
  return (n.href !== i.href);
}

// fn <atom:0>  args=3 vars=77 closure=0 cpool=32 bc=2809B file=dil_text/src/markdown/DILMarkdownComponent
// args: require, module, exports
// locals: e, t, i, n, o, r, l, d, s, a, h, u, c, v, g, p, m, b, S, x, M, w, A, y, L, k, T, I, C, f, D, H, R, F, _, P, q, N, E, z, O, V, B, W, U, G, Y, J, Q, j, $, Z, K, X, ee, te, ie, ne, oe, DILMarkdownComponent, <class_fields_init>, DILMarkdownComponent#1, re, le, de, se, ae, he, ue, ce, ve, ge, pe, me
function {
  re = function re;
  le = function le;
  de = function de;
  se = function se;
  ae = function ae;
  he = function he;
  ue = function ue;
  ce = function ce;
  ve = function ve;
  me = function me;
  let pe;
  let ge;
  let DILMarkdownComponent#1;
  let oe;
  let ne;
  let ie;
  let te;
  let ee;
  let X;
  let K;
  let Z;
  let $;
  let j;
  let Q;
  let J;
  let Y;
  let G;
  let U;
  let W;
  let B;
  let V;
  let O;
  let z;
  let E;
  let N;
  let q;
  let P;
  let _;
  let F;
  let R;
  let H;
  let D;
  let f;
  let C;
  let I;
  let T;
  let k;
  let L;
  let y;
  let A;
  let w;
  let M;
  let x;
  let S;
  let b;
  let m;
  let p;
  let g;
  let v;
  let c;
  let u;
  let h;
  let a;
  let s;
  let d;
  let l;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMarkdownComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "9daNBb-pszJkK9xL");
  i = e.makeNodePrototype("view", undefined, "ZzTa6y_pZ3sTQJdT");
  n = e.makeNodePrototype("label", undefined, "urGt3xD4mMZiCsc7");
  o = e.makeNodePrototype("view", undefined, "6EFNc1sNFvof14_0");
  r = e.makeNodePrototype("scroll", undefined, "iYcQdIv_jjJ88Hn3");
  l = e.makeComponentPrototype(undefined, "-yV65KNaSzj8Jgdv");
  d = e.makeNodePrototype("view", undefined, "TV1rFDGM6ayQvDQY");
  s = e.makeNodePrototype("view", undefined, "kWMlWz8E2_fH99tH");
  a = e.makeNodePrototype("label", undefined, "NdGlHxGGlNQ4uNg8");
  h = e.makeComponentPrototype(undefined, "MUctt9TDxplqVFZ5");
  u = e.makeNodePrototype("label", undefined, "OgNDvjp1SxhjtJyU");
  c = e.makeComponentPrototype(undefined, "1QFoL8CVyUfJliqZ");
  v = e.makeNodePrototype("image", undefined, "WNzqk7e1HnsQW76o");
  g = e.makeNodePrototype("label", undefined, "6Eq44tw16VCKE8fL");
  p = e.makeNodePrototype("layout", undefined, "owVRn6c7xUBxo5tf");
  m = e.makeComponentPrototype(["markerColor", "secondary", "markerWeight", "medium"], "nJiQJNJ5xhmV-T5Z");
  b = e.makeNodePrototype("label", undefined, "I3wIV_meYri70qGj");
  S = require("markdown/src/Markdown");
  x = require("dil_icon_assets/src/IconAssets");
  M = require("dil_renderer/src/DILRenderer");
  w = require("dil_core/src/layout/DILAutoSpacingAttributes");
  A = require("dil_core/src/layout/DILSpacing");
  y = require("dil_core/src/style/DILStyle");
  L = require("valdi_core/src/Component");
  k = require("valdi_core/src/CompilerIntrinsics");
  T = require("valdi_core/src/Remember");
  I = require("valdi_core/src/Style");
  C = require("valdi_core/src/utils/AttributedTextBuilder");
  f = require("valdi_core/src/utils/Callback");
  D = require("../math/DILMathWidget");
  H = require("../DILTextComponent");
  R = require("../list/DILList");
  F = require("../list/DILListItem");
  _ = require("../rendering/DILTextFont");
  P = require("../rendering/DILTextFontResolver");
  q = require("../rendering/DILTextColor");
  N = require("../rendering/DILTextTypography");
  E = require("../text_elements/BoldElement");
  z = require("../text_elements/CodeElement");
  O = require("../text_elements/ItalicElement");
  V = require("../text_elements/StrikethroughElement");
  B = require("../text_elements/TextElement");
  W = require("../text_elements/TitleElement");
  U = require("../rendering/DILStreamingText");
  G = require("./DILMarkdownCode");
  Y = require("./DILMarkdownCodeRenderer");
  J = ["dottedLinks", "fontSize", "markdown", "lineHeight", "parsedBlocks", "streamingCursor", "tableTypography", "textAlign"];
  Q = {text: " ▍", bold: false, italic: false, code: false, link: false, href: undefined};
  j = A.resolveDILSpacingUnits(4);
  $ = A.resolveDILSpacingUnits(4);
  Z = A.resolveDILSpacingUnits(1);
  K = A.resolveDILSpacingUnits(6);
  X = A.resolveDILSpacingUnits(2);
  ee = 26;
  te = 6;
  ie = 3;
  ne = 0.78;
  oe = "1.53 1.53 2.295 3.5";
  let DILMarkdownComponent;
  let <class_fields_init>;
  class DILMarkdownComponent extends L.Component { ... }
  <proto:DILMarkdownComponent>.onCreate = function <atom:0>;
  <proto:DILMarkdownComponent>.onViewModelUpdate = function <atom:0>;
  <proto:DILMarkdownComponent>.onRender = function <atom:0>;
  <proto:DILMarkdownComponent>.renderBlocks = function <atom:0>;
  <proto:DILMarkdownComponent>.renderBlock = function <atom:0>;
  <proto:DILMarkdownComponent>.renderInlineAttachments = function <atom:0>;
  <proto:DILMarkdownComponent>.renderCodeText = function <atom:0>;
  <proto:DILMarkdownComponent>.renderCodeLabel = function <atom:0>;
  <proto:DILMarkdownComponent>.renderListItems = function <atom:0>;
  <proto:DILMarkdownComponent>.renderListItem = function <atom:0>;
  <proto:DILMarkdownComponent>.renderListItemContent = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveStreamingAnimation = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveHeadingLabelTypography = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveTextLabelTypography = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveLabelTypography = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveCodeLineHeight = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveLabelLineHeight = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveQuoteBarHeight = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveTextSelectionMenuHandler = function <atom:0>;
  <proto:DILMarkdownComponent>.resolveTextSelectionMenuActionHandler = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILMarkdownComponent>;
  DILMarkdownComponent = function <atom:0>;
  // close_loc <class_fields_init>
  DILMarkdownComponent#1 = function <atom:0>;
  exports.DILMarkdownComponent = DILMarkdownComponent#1;
  DILMarkdownComponent#1.dilV2Properties = ["streaming", "value"];
  DILMarkdownComponent#1.properties = J;
  ge = {linkIndicator: new I.Style({objectFit: "contain", tint: "color-text-primary", accessibilityNavigation: "ignored"}), root: new I.Style({flexDirection: "column", gap: j}), codeScroll: new I.Style({horizontal: true, width: "100%", height: "auto", showsHorizontalScrollIndicator: true}), codeText: new I.Style({backgroundColor: "transparent", flexShrink: 0, numberOfLines: 0, selectable: true}), codeBlock: new I.Style({backgroundColor: "alpha-05", borderRadius: 6, padding: X, width: "100%"}), quote: new I.Style({alignItems: "center", flexDirection: "row", gap: $, paddingBottom: Z, paddingTop: Z, width: "100%"}), quoteBar: new I.Style({backgroundColor: "alpha-20", borderRadius: 2, width: 3}), rule: new I.Style({backgroundColor: "alpha-10", height: 1, width: "100%"}), text: new I.Style({backgroundColor: "transparent", flexShrink: 1, minWidth: 0, numberOfLines: 0, selectable: true})};
  pe = x.getIconAsset("arrow-up-right-lg");
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/markdown/DILMarkdownComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
