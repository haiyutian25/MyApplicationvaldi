// fn <atom:0>  args=0 vars=6 closure=4 cpool=0 bc=835B file=dil_widgets/src/widgets/Table
// locals: t, e, n, e#1, i, o
// closure: this, Ht, Gt, Ut
function {
  let o;
  let i;
  let n;
  let e;
  let t;
  t = this.tableRef.single();
  if (!((undefined === t))) goto L_60;
  return;
  e = this.resolveFullBleedContainerGutter();
  n = Ht(this.scrollRef.single(), e);
  if (!(this.setAutoTableAvailableContentWidth(n))) goto L_190;
  let e#1;
  e#1 = t.getAttribute("gridTemplateColumns");
  this.applyTableSizingFromCurrentLayout();
  if (!((t.getAttribute("gridTemplateColumns") !== e#1))) goto L_190;
  return;
  if (!(!this.usesMeasuredStaticContentWidth)) goto L_1b8;
  return;
  i = Gt(t);
  if (!((i > t.frame.width))) goto L_264;
  t.setAttribute("minWidth", Math.ceil(i));
  o = Ut(i, this.scrollRef.single(), e);
  if (!((o !== this.appliedStaticContentWidth))) goto L_342;
  this.appliedStaticContentWidth = o;
  this.scrollRef.setAttribute("staticContentWidth", o);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=230B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, t#1
// closure: this
function {
  let e;
  e = Math.max(0, t.x);
  if (!((e !== this.horizontalScrollOffset))) goto L_e5;
  this.horizontalScrollOffset = e;
  let t#1;
  for (const t#1 of this.labeledRows) {
    t#1.applyLabelScrollOffset(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=2 bc=308B file=dil_widgets/src/widgets/Table
// locals: this, this.active_func, new.target, arguments
// closure: Ht, Gt, Ut, <class_fields_init>, R, A
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
  this.scrollRef = new R.ElementRef();
  this.tableRef = new R.ElementRef();
  this.labeledRows = [];
  this.horizontalScrollOffset = 0;
  this.usesMeasuredStaticContentWidth = false;
  this.handleTableLayoutComplete = function <atom:0>;
  this.handleTableScroll = function <atom:0>;
  this.handleStickyTableScroll = A.makeMainThreadCallback(this.handleTableScroll);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/widgets/Table
function {
  return true;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=519B file=dil_widgets/src/widgets/Table
// closure: t, n, this, he, a
function {
  t.beginRender(n, undefined);
  t.setAttributeRef(this.tableRef);
  t.setAttributeStyle("style", he.table);
  if (!((this.context == null))) goto L_115;
  this.context;
  goto L_136;
  t.setAttributes(undefined.textSelectionGroupAttributes);
  t.setAttribute("gap", a);
  t.setAttributeFunction("onLayoutComplete", this.handleTableLayoutComplete);
  this.renderTableContent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=404B file=dil_widgets/src/widgets/Table
// closure: t, i, this, he, a
function {
  t.beginRender(i, undefined);
  t.setAttributeRef(this.tableRef);
  t.setAttributeStyle("style", he.table);
  t.setAttribute("gap", a);
  t.setAttributeFunction("onLayoutComplete", this.handleTableLayoutComplete);
  this.renderTableContent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=2 bc=2281B file=dil_widgets/src/widgets/Table
// locals: o, r, l, a, this
// closure: t, n, he, i, w, e, L
function {
  this = this;
  let a;
  let l;
  let r;
  let o;
  o = this.baseViewAttributes;
  if (!((o.left == null))) goto L_6a;
  o.left;
  o.left = undefined;
  undefined;
  if (!((o.marginLeft == null))) goto L_a2;
  o.marginLeft;
  o.marginLeft = undefined;
  undefined;
  if (!((o.marginRight == null))) goto L_da;
  o.marginRight;
  o.marginRight = undefined;
  undefined;
  if (!((o.alignSelf == null))) goto L_112;
  o.alignSelf;
  o.alignSelf = undefined;
  undefined;
  if (!((o.paddingLeft == null))) goto L_14a;
  o.paddingLeft;
  o.paddingLeft = undefined;
  undefined;
  if (!((o.paddingRight == null))) goto L_182;
  o.paddingRight;
  o.paddingRight = undefined;
  undefined;
  if (!((o.viewportExtensionLeft == null))) goto L_1ba;
  o.viewportExtensionLeft;
  o.viewportExtensionLeft = undefined;
  undefined;
  if (!((o.viewportExtensionRight == null))) goto L_1f2;
  o.viewportExtensionRight;
  o.viewportExtensionRight = undefined;
  undefined;
  r = this.resolveFullBleedContainerGutter();
  if (!((undefined !== r))) goto L_3d7;
  o.left = -r.left;
  o.marginLeft = 0;
  o.marginRight = -(r.left + r.right);
  o.alignSelf = "stretch";
  o.paddingLeft = r.left;
  o.paddingRight = r.right;
  o.viewportExtensionLeft = (r.left + o.paddingLeft);
  o.viewportExtensionRight = (r.right + o.paddingRight);
  goto L_558;
  // [栈深重同步 1 -> 0]
  if (((undefined === this.viewModel.containerGutter))) goto L_558;
  if (!((true === this.viewModel.fitContent))) goto L_4b5;
  if (((undefined === this.viewModel.width))) goto L_558;
  if (((undefined !== o.paddingRight))) goto L_558;
  o.paddingRight = this.viewModel.containerGutter.right;
  this.viewModel.containerGutter.right;
  if (!((undefined === r))) goto L_5b0;
  if (!((this.viewModel.width == null))) goto L_5b1;
  this.viewModel.width;
  goto L_5b1;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!((undefined === this.viewModel.gap))) goto L_5fd;
  goto L_666;
  // [栈深重同步 1 -> 0]
  a = w.resolveDILSpacing(this.viewModel.gap);
  t.beginRender(e, undefined);
  t.setAttributeRef(this.scrollRef);
  t.setAttributeStyle("style", he.scrollContainer);
  t.setAttributes(o);
  t.setAttribute("width", l);
  if (!(L.Device.isIOS())) goto L_7d9;
  goto L_7dc;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  this.applyDynamicTableLayout();
  if (!((this.labeledRows.length > 0))) goto L_8c2;
  goto L_8e5;
  // [栈深重同步 4 -> 3]
  this.scrollRef.setAttribute("onScroll", this.handleTableScroll);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=646B file=dil_widgets/src/widgets/Table
// locals: t, e, n, i, this
function {
  this = this;
  let n;
  let e;
  let t;
  if (!((undefined !== this.viewModel.renderChildren))) goto L_9d;
  this.viewModel.renderChildren();
  return;
  t = this.viewModel.columns;
  if (!((undefined === t))) goto L_ea;
  return;
  if (!((false === this.viewModel.dividers))) goto L_136;
  goto L_17a;
  // [栈深重同步 1 -> 0]
  e = this.viewModel.rowDivider;
  if (!((t.length > 0))) goto L_1b1;
  this.renderDataHeader(t, e);
  if (!((this.viewModel.rows == null))) goto L_1fe;
  this.viewModel.rows;
  n = [];
  if (!((0 !== n.length))) goto L_257;
  let i;
  i = 0;
  if (!((i < n.length))) goto L_285;
  this.renderDataRow(t, n[i], i, e);
  i = <i_new>;
  (i++);
  goto L_20c;
  this.renderEmptyDataRow(t.length, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=dil_widgets/src/widgets/Table
// closure: this, e
function {
  this.renderDataHeaderCells(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=1 bc=182B file=dil_widgets/src/widgets/Table
// args: e, n
// locals: this
// closure: t, TableRow, o
function {
  this = this;
  t.beginComponent(TableRow, o, "data-header", undefined);
  t.setViewModelProperty("rowDivider", n);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=363B file=dil_widgets/src/widgets/Table
// closure: t, l, he, i, this
function {
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", he.dataHeaderText);
  t.setAttributeString("value", i.label);
  t.setAttribute("selectable", (true !== this.viewModel.suppressTextSelection));
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=1 bc=418B file=dil_widgets/src/widgets/Table
// args: e
// locals: n, i, this
// closure: t, l, he, TableCell, r
function {
  this = this;
  let n;
  n = 0;
  if (!((n < e.length))) goto L_1a1;
  let i;
  i = e[n];
  t.beginComponent(TableCell, r, "data-header-".concat(i.key, "-", n), undefined);
  t.setViewModelProperty("align", i.align);
  t.setViewModelProperty("width", i.width);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  // close_loc i
  n = <n_new>;
  (n++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=40B file=dil_widgets/src/widgets/Table
// closure: this, e, n
function {
  this.renderDataCells(e, n);
  return;
}

// fn <atom:0>  args=4 vars=5 closure=3 cpool=1 bc=219B file=dil_widgets/src/widgets/Table
// args: e, n, i, o
// locals: this
// closure: t, TableRow, a
function {
  this = this;
  t.beginComponent(TableRow, a, "data-row-".concat(i), undefined);
  t.setViewModelProperty("rowDivider", o);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=369B file=dil_widgets/src/widgets/Table
// closure: t, d, he, Rt, n, o, this
function {
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", he.dataText);
  t.setAttributeString("value", Rt(n[o.key]));
  t.setAttribute("selectable", (true !== this.viewModel.suppressTextSelection));
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=6 cpool=1 bc=418B file=dil_widgets/src/widgets/Table
// args: e, n
// locals: i, o, this
// closure: t, d, he, Rt, TableCell, s
function {
  this = this;
  let i;
  i = 0;
  if (!((i < e.length))) goto L_1a1;
  let o;
  o = e[i];
  t.beginComponent(TableCell, s, "data-cell-".concat(o.key, "-", i), undefined);
  t.setViewModelProperty("align", o.align);
  t.setViewModelProperty("width", o.width);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  // close_loc o
  i = <i_new>;
  (i++);
  goto L_7;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=330B file=dil_widgets/src/widgets/Table
// closure: t, h, he, i, this
function {
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", he.emptyDataText);
  t.setAttributeString("value", i);
  t.setAttribute("selectable", (true !== this.viewModel.suppressTextSelection));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=220B file=dil_widgets/src/widgets/Table
// closure: t, h, he, i, this, TableCell, c, e
function {
  t.beginComponent(TableCell, c, undefined, undefined);
  t.setViewModelProperty("colSpan", Math.max(1, e));
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=7 cpool=1 bc=265B file=dil_widgets/src/widgets/Table
// args: e, n
// locals: i, this
// closure: t, h, he, TableCell, c, TableRow, u
function {
  this = this;
  let i;
  i = this.viewModel.emptyLabel;
  if (!((undefined !== i))) goto L_108;
  t.beginComponent(TableRow, u, "data-empty", undefined);
  t.setViewModelProperty("rowDivider", n);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=2 cpool=0 bc=1936B file=dil_widgets/src/widgets/Table
// locals: t, e, n, i, o, t#1, e#1, r, o#1, t#2, this
// closure: Yt, Zt
function {
  this = this;
  let i;
  let n;
  let e;
  let t;
  this.labeledRows.length = 0;
  t = this.resolveDynamicTableLayout();
  if (!((undefined === t))) goto L_6b;
  return;
  e = this.tableRef.single();
  this.applyResolvedTableSizing(t);
  n = t.layout;
  i = Yt(n.rowCount, n.rows);
  if (!((e == null))) goto L_158;
  e;
  goto L_1ce;
  undefined.setAttribute("gridTemplateRows", Zt(i, n.rows, n.dividers));
  let o;
  o = 0;
  if (!((o < n.cells.length))) goto L_46c;
  let r;
  let e#1;
  let t#1;
  t#1 = n.cells[o];
  e#1 = i[t#1.row];
  r = i[Math.min(((t#1.row + t#1.rowSpan) - 1), (i.length - 1))];
  if (!((undefined !== e#1))) goto L_460;
  if (!((undefined !== r))) goto L_460;
  t#1.component.applyTableLayout({cellIndex: t#1.column, columnCount: n.columnCount, columnStart: (t#1.column + 1), columnSpan: t#1.colSpan, rowStart: e#1.contentRowStart, rowSpan: ((r.contentRowStart - e#1.contentRowStart) + 1)});
  o = <o_new>;
  (o++);
  goto L_1d5;
  let o#1;
  o#1 = 0;
  if (!((o#1 < n.rows.length))) goto L_78f;
  let t#2;
  t#2 = i[o#1];
  if (!((undefined !== t#2))) goto L_783;
  n.rows[o#1].applyLabelLayout({columnCount: n.columnCount, rowStart: t#2.labelRowStart});
  if (!((n.dividers[o#1] == null))) goto L_626;
  n.dividers[o#1];
  goto L_647;
  n.rows[o#1].applyDividerLayout({columnCount: n.columnCount, rowStart: t#2.dividerRowStart, visible: (true === undefined.visible)});
  if (!(n.rows[o#1].hasLabel())) goto L_783;
  this.labeledRows.push(n.rows[o#1]);
  n.rows[o#1].applyLabelScrollOffset(this.horizontalScrollOffset);
  o#1 = <o#1_new>;
  (o#1++);
  goto L_472;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=93B file=dil_widgets/src/widgets/Table
// locals: t, this
function {
  this = this;
  let t;
  t = this.resolveDynamicTableLayout();
  if (!((undefined !== t))) goto L_5c;
  this.applyResolvedTableSizing(t);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=433B file=dil_widgets/src/widgets/Table
// locals: t, e, this
// closure: Jt, D
function {
  this = this;
  let e;
  let t;
  t = Jt(this.viewModel);
  if (!((undefined === t))) goto L_35;
  return;
  e = this.renderer.getComponentParent(this);
  if (!((e instanceof D.DILFlexContainer))) goto L_d6;
  if (!(!("row" === e.getFlexDirection()))) goto L_1b0;
  if (!((undefined !== e))) goto L_1ac;
  if (!((e instanceof D.DILFlexContainer))) goto L_15b;
  if (!((true === e.viewModel.scrollable))) goto L_15b;
  return;
  e = this.renderer.getComponentParent(e);
  this.renderer.getComponentParent(e);
  goto L_dc;
  return t;
  return;
}

// fn <atom:0>  args=0 vars=14 closure=7 cpool=0 bc=1245B file=dil_widgets/src/widgets/Table
// locals: t, e, n, i, o, r, l, a, s, d, u, c, h, this
// closure: k, W, X, U, J, _, Nt
function {
  this = this;
  let h;
  let c;
  let u;
  let d;
  let s;
  let a;
  let l;
  let r;
  let o;
  let i;
  let n;
  let e;
  let t;
  t = k(this);
  if (!((0 === t.length))) goto L_61;
  this.setUsesMeasuredStaticContentWidth(false);
  return;
  e = new W.TableLayout().computeLayout(t);
  n = X(e.widths);
  i = U(e.widths);
  o = ("equal" === this.viewModel.columnSizing);
  if (!((true === this.viewModel.fitContent))) goto L_1dc;
  r = (undefined === this.viewModel.width);
  if (!(r)) goto L_26b;
  if (!(!o)) goto L_26b;
  if (!(!e.hasSpans)) goto L_26b;
  if (!(i)) goto L_26b;
  l = e.widths.some(J);
  if (!(l)) goto L_299;
  a = (undefined !== this.autoTableAvailableContentWidth);
  if (!(r)) goto L_2ae;
  if (!(!o)) goto L_2ae;
  s = !i;
  if (!(!r)) goto L_2e5;
  if (!(!i)) goto L_2e5;
  d = !e.hasSpans;
  if (!(!o)) goto L_316;
  if ((s)) goto L_2fe;
  if ((a)) goto L_2fe;
  if (!(d)) goto L_316;
  if ((s)) goto L_313;
  goto L_317;
  // [栈深重同步 1 -> 0]
  u = undefined;
  if (!((u == null))) goto L_324;
  u;
  goto L_345;
  if (!((undefined.textLengths == null))) goto L_34d;
  undefined.textLengths;
  c = [];
  h = {availableContentWidth: this.autoTableAvailableContentWidth, columnSizing: this.viewModel.columnSizing, columnTextLengths: c, fitContent: r, gap: this.viewModel.gap, hasSpans: e.hasSpans, widths: e.widths};
  if (!((u == null))) goto L_47a;
  u;
  goto L_49b;
  if (!((undefined.minimumWidths == null))) goto L_4a3;
  undefined.minimumWidths;
  return {columnMinimumContentWidths: [], columnTextLengths: c, hasFixedWidths: n, layout: e, tableContentWidth: Nt(h), tableContentWidthInput: h, usesEqualColumnSizing: o};
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=1257B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, o, n#1, this
// closure: qt, O, B, Et
function {
  this = this;
  let o;
  let i;
  let n;
  let e;
  e = this.tableRef.single();
  n = qt(t.tableContentWidthInput, t.tableContentWidth);
  i = O({availableContentWidth: this.autoTableAvailableContentWidth, columnSizing: this.viewModel.columnSizing, columnMinimumContentWidths: t.columnMinimumContentWidths, columnTextLengths: t.columnTextLengths, contentWidth: t.tableContentWidth, fitContent: t.tableContentWidthInput.fitContent, gap: this.viewModel.gap, layout: t.layout});
  if (!((e == null))) goto L_24b;
  e;
  goto L_274;
  if (((undefined.getAttribute("gridTemplateColumns") !== i))) goto L_301;
  if (!((e == null))) goto L_28a;
  e;
  goto L_2b3;
  if (((undefined.getAttribute("width") !== t.tableContentWidth))) goto L_301;
  o = (this.usesMeasuredStaticContentWidth !== n);
  this.setUsesMeasuredStaticContentWidth(n);
  if (!((e == null))) goto L_337;
  e;
  goto L_363;
  undefined.setAttribute("gridTemplateColumns", i);
  if (!((e == null))) goto L_370;
  e;
  goto L_425;
  undefined.setAttribute("justifyContent", B(t.tableContentWidthInput, t.tableContentWidth, t.hasFixedWidths, t.usesEqualColumnSizing));
  if (!(o)) goto L_492;
  let n#1;
  if (!(Et(t.tableContentWidthInput))) goto L_457;
  goto L_458;
  // [栈深重同步 1 -> 0]
  n#1 = undefined;
  if (!((e == null))) goto L_465;
  e;
  goto L_491;
  undefined.setAttribute("minWidth", n#1);
  if (!((e == null))) goto L_49d;
  e;
  goto L_4e8;
  undefined.setAttribute("width", t.tableContentWidth);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=149B file=dil_widgets/src/widgets/Table
// args: t
// locals: this
function {
  this = this;
  this.usesMeasuredStaticContentWidth = t;
  if ((t)) goto L_94;
  if (((undefined === this.appliedStaticContentWidth))) goto L_94;
  this.appliedStaticContentWidth = undefined;
  this.scrollRef.setAttribute("staticContentWidth", undefined);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=56B file=dil_widgets/src/widgets/Table
// args: t
// locals: this
function {
  this = this;
  if (!((t !== this.autoTableAvailableContentWidth))) goto L_37;
  this.autoTableAvailableContentWidth = t;
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=205B file=dil_widgets/src/widgets/Table
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, R
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
  this.dividerRef = new R.ElementRef();
  this.labelCellRef = new R.ElementRef();
  this.labelContentRef = new R.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=46B file=dil_widgets/src/widgets/Table
// closure: t, this
function {
  t.renderNamedSlot("label", this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=392B file=dil_widgets/src/widgets/Table
// closure: t, p, he, this
function {
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", he.rowLabelText);
  t.setAttributeString("value", this.viewModel.label);
  t.setAttribute("selectable", (true !== this.viewModel.suppressTextSelection));
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=2 bc=995B file=dil_widgets/src/widgets/Table
// locals: this
// closure: t, p, he, m, f, b
function {
  this = this;
  if (!(this.hasLabel())) goto L_2ca;
  t.beginRender(m, undefined);
  t.setAttributeRef(this.labelCellRef);
  if (!((true === this.viewModel.usesV2LabelLayout))) goto L_13b;
  goto L_15f;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", he.rowLabelCell);
  t.beginRender(f, undefined);
  t.setAttributeRef(this.labelContentRef);
  t.setAttributeStyle("style", he.rowLabelContent);
  if (!((true === this.viewModel.hasRichLabel))) goto L_277;
  goto L_27a;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  t.endRender();
  t.renderUnnamedSlot(this);
  t.beginRender(b, undefined);
  t.setAttributeRef(this.dividerRef);
  t.setAttributeStyle("style", he.divider);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=228B file=dil_widgets/src/widgets/Table
// locals: this
function {
  this = this;
  if (((true === this.viewModel.hasRichLabel))) goto L_e3;
  if (!(("string" == typeof this.viewModel.label))) goto L_e3;
  return (this.viewModel.label.length > 0);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=417B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.labelCellRef.single();
  if (!((undefined !== e))) goto L_1a0;
  if (!((undefined !== t.rowStart))) goto L_1a0;
  e.setAttribute("gridColumnStart", 1);
  if (!((t.columnCount > 0))) goto L_14d;
  goto L_14e;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gridColumnEnd", undefined);
  e.setAttribute("gridRowStart", t.rowStart);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/Table
// args: t
// locals: this
function {
  this = this;
  this.labelContentRef.setAttribute("translationX", t);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=701B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, this
// closure: te, ne
function {
  this = this;
  let i;
  let n;
  let e;
  e = this.dividerRef.single();
  if (!((undefined === e))) goto L_5a;
  return;
  n = te(this.viewModel.rowDivider);
  if (!(t.visible)) goto L_ec;
  i = ne(n.size);
  e.setAttribute("gridColumnStart", 1);
  if (!((t.columnCount > 0))) goto L_1b7;
  goto L_1b8;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gridColumnEnd", undefined);
  e.setAttribute("gridRowStart", t.rowStart);
  if (!(i)) goto L_25f;
  goto L_260;
  // [栈深重同步 4 -> 3]
  e.setAttribute("height", 0);
  if (!(i)) goto L_2b8;
  goto L_2b9;
  // [栈深重同步 4 -> 3]
  e.setAttribute("backgroundColor", undefined);
  return;
}

// fn <atom:0>  args=0 vars=5 closure=1 cpool=0 bc=181B file=dil_widgets/src/widgets/Table
// locals: t, e, n, i, this
// closure: TableCell
function {
  this = this;
  let e;
  let t;
  t = [];
  e = this.renderer.getComponentChildren(this);
  let n;
  n = 0;
  if (!((n < e.length))) goto L_b1;
  let i;
  i = e[n];
  if (!((i instanceof TableCell))) goto L_a6;
  t.push(i);
  n = <n_new>;
  (n++);
  goto L_5c;
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=101B file=dil_widgets/src/widgets/Table
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, R
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
  this.cellRef = new R.ElementRef();
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=723B file=dil_widgets/src/widgets/Table
// locals: e, this
// closure: t, g, he, ce
function {
  this = this;
  let e;
  e = this.baseViewAttributes;
  t.beginRender(g, undefined);
  t.setAttributeRef(this.cellRef);
  t.setAttributeStyle("style", he.cell);
  t.setAttributes(e);
  if (!((ce(this.viewModel.align) == null))) goto L_192;
  ce(this.viewModel.align);
  t.setAttributeString("alignItems", "flex-start");
  if (!((ce(this.viewModel.vAlign) == null))) goto L_20e;
  ce(this.viewModel.vAlign);
  t.setAttributeString("justifyContent", "flex-start");
  t.setAttribute("width", this.viewModel.width);
  t.renderUnnamedSlot(this);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=757B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, this
// closure: oe
function {
  this = this;
  let e;
  e = this.cellRef.single();
  if (!((undefined !== e))) goto L_2f4;
  e.setAttribute("gridColumnStart", t.columnStart);
  if (!((t.columnSpan > 1))) goto L_143;
  goto L_144;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gridColumnEnd", undefined);
  e.setAttribute("gridRowStart", t.rowStart);
  if (!((t.rowSpan > 1))) goto L_233;
  goto L_234;
  // [栈深重同步 4 -> 3]
  e.setAttribute("gridRowEnd", undefined);
  e.setAttribute("width", undefined);
  oe(e, this.viewModel.padding, t.cellIndex, t.columnCount);
  return;
}

// fn <atom:0>  args=2 vars=13 closure=8 cpool=0 bc=1210B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o, e#1, i#1, n#1, o#1, r, n#2, e#2, this
// closure: TableRow, xt, ft, F, D, Mt, Xt, wt
function {
  this = this;
  let n;
  t.textLength = 0;
  t.contentWidth = 0;
  t.minimumContentWidth = 0;
  n = this.cellRef.single();
  if (!((undefined !== n))) goto L_4b9;
  let o;
  let i;
  i = this.renderer.getComponentParent(this);
  if (((true === this.viewModel.header))) goto L_167;
  if (!((i instanceof TableRow))) goto L_167;
  o = (true === i.viewModel.header);
  if (!(e)) goto L_17b;
  if (!(!o)) goto L_17b;
  t.breaksWithinWords = xt(n);
  if (!(e)) goto L_1b0;
  goto L_1d2;
  // [栈深重同步 4 -> 3]
  ft(n, t, F.Content);
  if (!(e)) goto L_4b9;
  let i#1;
  let e#1;
  e#1 = 0;
  i#1 = n.children;
  let n#1;
  n#1 = 0;
  if (!((n#1 < i#1.length))) goto L_45b;
  let r;
  let o#1;
  o#1 = i#1[n#1];
  r = o#1.emittingComponent;
  if (!((r instanceof D.DILFlexContainer))) goto L_2af;
  if (!((r.getTableCellContentElement() == null))) goto L_2ab;
  r.getTableCellContentElement();
  o#1 = o#1;
  o#1;
  if (!(!Mt(o#1))) goto L_450;
  let n#2;
  n#2 = (Xt(o#1, "paddingLeft") + Xt(o#1, "paddingRight"));
  e#1 = Math.max(e#1, n#2);
  Math.max(e#1, n#2);
  if (!((o#1.children.length > 1))) goto L_450;
  if (!(("row" === o#1.getAttribute("flexDirection")))) goto L_450;
  let e#2;
  e#2 = wt(o#1, t.breaksWithinWords);
  t.contentWidth = Math.max(t.contentWidth, e#2);
  t.minimumContentWidth = Math.max(t.minimumContentWidth, e#2);
  n#1 = <n#1_new>;
  (n#1++);
  goto L_20e;
  t.contentWidth = (t.contentWidth + e#1);
  t.minimumContentWidth = (t.minimumContentWidth + e#1);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=95B file=dil_widgets/src/widgets/Table
// locals: t, this
// closure: vt
function {
  this = this;
  let t;
  t = this.cellRef.single();
  if (!((undefined === t))) goto L_55;
  return 0;
  return vt(t, false, false);
}

// fn I  args=0 vars=0 closure=0 cpool=0 bc=27B file=dil_widgets/src/widgets/Table
function {
  return {breaksWithinWords: false, textLength: 0, contentWidth: 0, minimumContentWidth: 0};
}

// fn k  args=1 vars=5 closure=1 cpool=0 bc=176B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, t#1
// closure: TableRow
function {
  let n;
  let e;
  e = [];
  n = t.renderer.getComponentChildren(t);
  let i;
  i = 0;
  if (!((i < n.length))) goto L_ac;
  let t#1;
  t#1 = n[i];
  if (!((t#1 instanceof TableRow))) goto L_a1;
  e.push(t#1);
  i = <i_new>;
  (i++);
  goto L_57;
  return e;
}

// fn O  args=1 vars=14 closure=7 cpool=0 bc=1447B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, t#1, n#1, i, t#2, n#2, i#1, o, e#1, r, l, a
// closure: U, K, $, N, lt, at, Vt
function {
  let r;
  let o;
  let i#1;
  let n;
  let e;
  e = t.layout;
  if (!((e.columnCount <= 0))) goto L_5b;
  return;
  n = U(e.widths);
  if (!(("equal" === t.columnSizing))) goto L_184;
  let t#1;
  t#1 = [];
  let n#1;
  n#1 = 0;
  if (!((n#1 < e.columnCount))) goto L_158;
  let i;
  i = e.widths[n#1];
  if (!((undefined === i))) goto L_144;
  goto L_149;
  // [栈深重同步 3 -> 2]
  t#1.push(K(i));
  n#1 = <n#1_new>;
  (n#1++);
  goto L_bb;
  return t#1.join(" ");   // tail call
  if (!(t.fitContent)) goto L_1b3;
  if (!(!n)) goto L_1b3;
  return $(t);   // tail call
  if (!(e.hasSpans)) goto L_280;
  if (!(!n)) goto L_280;
  let t#2;
  t#2 = [];
  let n#2;
  n#2 = 0;
  if (!((n#2 < e.columnCount))) goto L_254;
  t#2.push("1fr");
  n#2 = <n#2_new>;
  (n#2++);
  goto L_1f3;
  return t#2.join(" ");   // tail call
  if (!((undefined !== t.contentWidth))) goto L_2d5;
  if (!(!e.hasSpans)) goto L_2d5;
  i#1 = !n;
  if (!(t.fitContent)) goto L_351;
  if (!(n)) goto L_351;
  if (!(!e.hasSpans)) goto L_351;
  o = (undefined !== t.availableContentWidth);
  if (!(o)) goto L_36b;
  let e#1;
  e#1 = N(t);
  if (!((undefined !== e#1))) goto L_36b;
  return e#1;
  r = [];
  let l;
  l = 0;
  if (!((l < e.columnCount))) goto L_57b;
  let a;
  a = e.widths[l];
  if (!((undefined !== a))) goto L_406;
  goto L_56f;
  // [栈深重同步 1 -> 0]
  if ((!n)) goto L_43e;
  if (!(o)) goto L_543;
  if (!((undefined !== t.columnTextLengths[l]))) goto L_543;
  if (!((t.columnMinimumContentWidths[l] == null))) goto L_50c;
  t.columnMinimumContentWidths[l];
  goto L_56f;
  // [栈深重同步 1 -> 0]
  r.push("auto");
  l = <l_new>;
  (l++);
  goto L_376;
  return r.join(" ");   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=171B file=dil_widgets/src/widgets/Table
// args: e, n
// closure: J, t
function {
  if (!(J(t.layout.widths[n]))) goto L_7f;
  return "minmax(".concat(e, "px, ", e, "px)");
  return "".concat(e, "px");
}

// fn N  args=1 vars=12 closure=8 cpool=1 bc=1243B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, o, r, n#1, t#1, l, a, s, d
// closure: J, w, K, V, E, Vt, ct, q
function {
  let o;
  let i;
  let n;
  let e;
  e = t.availableContentWidth;
  if (!((undefined === e))) goto L_37;
  return;
  if (!((undefined === t.gap))) goto L_60;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  n = w.resolveDILSpacing(t.gap);
  if (!(("number" != typeof n))) goto L_b5;
  return;
  i = [];
  o = [];
  let r;
  r = 0;
  if (!((r < t.layout.columnCount))) goto L_3f4;
  let d;
  let s;
  let a;
  let l;
  let n#1;
  n#1 = K(t.layout.widths[r]);
  if (!(("auto" !== n#1))) goto L_1e2;
  let t#1;
  t#1 = V(n#1, e);
  if (!((undefined === t#1))) goto L_189;
  return;
  i.push(t#1);
  o.push(t#1);
  goto L_3e9;
  l = t.columnTextLengths[r];
  a = E(l, e);
  if (!((undefined === a))) goto L_21e;
  return;
  if (!((t.columnMinimumContentWidths[r] == null))) goto L_2ba;
  t.columnMinimumContentWidths[r];
  s = Math.max(a.min, Math.ceil((0 + Vt(0, r, t.layout.columnCount))));
  d = Math.max(s, Math.min(a.max, ct(l, a)));
  i.push(s);
  o.push(d);
  r = <r_new>;
  (r++);
  goto L_c3;
  return q({minimumWidths: i, preferredWidths: o, availableWidth: (e - (n * Math.max(0, (t.layout.columnCount - 1)))), allowsGrowthBeyondPreferredWidths: false}).map(function <atom:0>).join(" ");   // tail call
}

// fn E  args=2 vars=3 closure=5 cpool=0 bc=38B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n
// closure: ut, Q, rt, ot, st
function {
  let n;
  if (!((undefined === t))) goto L_9;
  return;
  n = ut(e);
  if (!((t <= Q))) goto L_1d;
  return rt(ot, n);
  return st(t, n);
}

// fn V  args=2 vars=5 closure=3 cpool=0 bc=211B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o
// closure: Qt, kt, S
function {
  let o;
  let i;
  let n;
  if (!(("number" == typeof t))) goto L_48;
  if (!(Number.isFinite(t))) goto L_46;
  if (!((t >= 0))) goto L_46;
  return t;
  return undefined;
  n = Qt(t);
  if (!((undefined !== n))) goto L_84;
  return Math.round(((e * n) / 100));   // tail call
  i = kt(t);
  if (!((undefined !== i))) goto L_93;
  return i;
  o = S.parseCSSValue(t);
  if (!(("number" == typeof o))) goto L_d1;
  if (!((o >= 0))) goto L_d1;
  return o;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/widgets/Table
// args: t
function {
  return "".concat(t, "px");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/widgets/Table
// args: t
function {
  return "".concat(t, "px");   // tail call
}

// fn $  args=1 vars=15 closure=7 cpool=2 bc=1174B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, o, r, l, a, s, n#1, d, u, c, h, m
// closure: dt, ut, Vt, Dt, st, j, q
function {
  let a;
  let l;
  let r;
  let o;
  let i;
  let n;
  let e;
  e = t.layout.columnCount;
  n = dt(t.availableContentWidth);
  i = ut(t.availableContentWidth);
  o = [];
  r = [];
  l = [];
  a = 0;
  let s;
  s = 0;
  if (!((s < e))) goto L_379;
  let m;
  let h;
  let c;
  let u;
  let d;
  let n#1;
  n#1 = Vt(t.columnTextLengths[s], s, e);
  if (!((t.columnTextLengths[s] == null))) goto L_15b;
  t.columnTextLengths[s];
  d = Vt(Math.min(0, Dt), s, e);
  if (!((t.columnMinimumContentWidths[s] == null))) goto L_196;
  t.columnMinimumContentWidths[s];
  u = (0 + Vt(0, s, e));
  c = Math.ceil(Math.max(d, u));
  h = st(t.columnTextLengths[s], i);
  if (!((undefined === h))) goto L_237;
  goto L_2b3;
  // [栈深重同步 1 -> 0]
  m = Math.max(c, Math.min(n#1, h.max));
  o.push(c);
  r.push(Math.max(c, n#1));
  l.push(m);
  a = (a + m);
  (a + m);
  s = <s_new>;
  (s++);
  goto L_ba;
  if (!((a > n))) goto L_422;
  if (!(j(t.layout, t.columnMinimumContentWidths))) goto L_422;
  return l.map(function <atom:0>).join(" ");
  return q({minimumWidths: o, preferredWidths: r, availableWidth: n, allowsGrowthBeyondPreferredWidths: true}).map(function <atom:0>).join(" ");
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/Table
// args: t, e
function {
  return (t + e);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/Table
// args: t, e
function {
  return (t + e);
}

// fn q  args=1 vars=16 closure=0 cpool=2 bc=662B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, o, r, l, a, s, d, u, c, h, t#1, i#1, o#1
function {
  let c;
  let u;
  let d;
  let s;
  let a;
  let l;
  let r;
  let o;
  let i;
  let n;
  let e;
  if (((undefined === undefined))) goto L_93;
  e = <to_object>(undefined).minimumWidths;
  n = <to_object>(undefined).preferredWidths;
  i = <to_object>(undefined).availableWidth;
  <to_object>(undefined);
  goto L_97;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_26;
  // [栈深重同步 1 -> 0]
  o = e.reduce(function <atom:0>, 0);
  r = n.reduce(function <atom:0>, 0);
  l = (r - o);
  if (!(t.allowsGrowthBeyondPreferredWidths)) goto L_124;
  a = (i > r);
  if (!(a)) goto L_130;
  goto L_133;
  // [栈深重同步 1 -> 0]
  s = e;
  if (!(a)) goto L_169;
  goto L_16c;
  // [栈深重同步 5 -> 4]
  d = Math.max(0, (i - o));
  if (!(a)) goto L_17c;
  goto L_17f;
  // [栈深重同步 1 -> 0]
  u = l;
  c = [];
  let h;
  h = 0;
  if (!((h < e.length))) goto L_292;
  let o#1;
  let i#1;
  let t#1;
  if (!(a)) goto L_1b0;
  goto L_1bf;
  // [栈深重同步 1 -> 0]
  t#1 = (n[h] - e[h]);
  if (!((u > 0))) goto L_1fe;
  goto L_1ff;
  // [栈深重同步 1 -> 0]
  i#1 = 0;
  if (!(a)) goto L_20b;
  goto L_23a;
  // [栈深重同步 1 -> 0]
  o#1 = Math.min(t#1, i#1);
  c.push((s[h] + o#1));
  d = (d - o#1);
  (d - o#1);
  u = (u - t#1);
  (u - t#1);
  h = <h_new>;
  (h++);
  goto L_18c;
  return c;
}

// fn j  args=2 vars=4 closure=0 cpool=0 bc=538B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i
function {
  let n;
  n = 0;
  if (!((n < t.cells.length))) goto L_217;
  let i;
  i = t.cells[n];
  if (!((1 === i.colSpan))) goto L_20c;
  if (!((t.rows[i.row] == null))) goto L_d7;
  t.rows[i.row];
  goto L_119;
  if (!((true !== undefined.viewModel.header))) goto L_20c;
  if (!((true !== i.component.viewModel.header))) goto L_20c;
  if (!((e[i.column] == null))) goto L_1b9;
  e[i.column];
  if (!((0 > 0))) goto L_20c;
  if (!((i.component.getFixedNonTextContentWidth() > 0))) goto L_20c;
  return true;
  n = <n_new>;
  (n++);
  goto L_5;
  return false;
}

// fn _  args=3 vars=26 closure=4 cpool=0 bc=2423B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, o, r, l, a, s, d, u, c, e#1, h, m, e#2, d#1, e#3, o#1, a#1, t#1, s#1, u#1, c#1, h#1, t#2
// closure: I, J, H, mt
function {
  let s;
  let a;
  let l;
  let r;
  let o;
  let i;
  if (!(e)) goto L_61;
  goto L_62;
  // [栈深重同步 3 -> 2]
  i = Array(t.columnCount).fill(0);
  if (!(e)) goto L_b8;
  goto L_b9;
  // [栈深重同步 1 -> 0]
  o = undefined;
  r = Array(t.columnCount).fill(0);
  l = I();
  a = false;
  s = false;
  let d;
  d = 0;
  if (!((d < t.cells.length))) goto L_508;
  let m;
  let h;
  let c;
  let u;
  u = t.cells[d];
  if (!((t.rows[u.row] == null))) goto L_1ca;
  t.rows[u.row];
  goto L_20c;
  if (((true === undefined.viewModel.header))) goto L_27a;
  c = (true === u.component.viewModel.header);
  if ((c)) goto L_289;
  a = true;
  true;
  if (!((1 !== u.colSpan))) goto L_2bc;
  s = true;
  true;
  goto L_4fd;
  if (!(e)) goto L_30e;
  if ((!J(t.widths[u.column]))) goto L_4fd;
  u.component.measureContentInto(l, n);
  if (!(n)) goto L_42f;
  let e#1;
  e#1 = (l.minimumContentWidth + H(u, t.columnCount));
  r[u.column] = Math.max(r[u.column], e#1);
  if (!(e)) goto L_45d;
  if (((0 === l.textLength))) goto L_4fd;
  h = mt(l);
  if (!(c)) goto L_475;
  if (!((undefined !== o))) goto L_475;
  goto L_478;
  // [栈深重同步 1 -> 0]
  m = i;
  if (!((m[u.column] == null))) goto L_4f6;
  m[u.column];
  m[u.column] = Math.max(0, h);
  d = <d_new>;
  (d++);
  goto L_119;
  if (!((undefined !== o))) goto L_5cb;
  let e#2;
  e#2 = 0;
  if (!((e#2 < t.columnCount))) goto L_5b9;
  if (!(a)) goto L_550;
  if (((undefined === i[e#2]))) goto L_5ad;
  if (((undefined === o[e#2]))) goto L_5ad;
  if (!((i[e#2] == null))) goto L_59b;
  i[e#2];
  if (!((o[e#2] == null))) goto L_5a8;
  o[e#2];
  i[e#2] = Math.max(0, 0);
  Math.max(0, 0);
  e#2 = <e#2_new>;
  (e#2++);
  goto L_518;
  return {textLengths: i, minimumWidths: r};
  if (!(!s)) goto L_5e3;
  return {textLengths: i, minimumWidths: r};
  let d#1;
  d#1 = 0;
  if (!((d#1 < t.cells.length))) goto L_965;
  let h#1;
  let c#1;
  let u#1;
  let s#1;
  let a#1;
  let o#1;
  let e#3;
  e#3 = t.cells[d#1];
  if (((1 === e#3.colSpan))) goto L_95a;
  o#1 = 0;
  a#1 = 0;
  let t#1;
  t#1 = 0;
  if (!((t#1 < e#3.colSpan))) goto L_72e;
  if (!((i[(e#3.column + t#1)] == null))) goto L_6e8;
  i[(e#3.column + t#1)];
  o#1 = (o#1 + 0);
  (o#1 + 0);
  a#1 = (a#1 + r[(e#3.column + t#1)]);
  (a#1 + r[(e#3.column + t#1)]);
  t#1 = <t#1_new>;
  (t#1++);
  goto L_689;
  e#3.component.measureContentInto(l, n);
  s#1 = mt(l);
  if (!(n)) goto L_7d3;
  goto L_7d4;
  // [栈深重同步 1 -> 0]
  u#1 = 0;
  c#1 = (Math.max(0, (s#1 - o#1)) / e#3.colSpan);
  h#1 = (Math.max(0, (u#1 - a#1)) / e#3.colSpan);
  let t#2;
  t#2 = 0;
  if (!((t#2 < e#3.colSpan))) goto L_95a;
  if (!((i[(e#3.column + t#2)] == null))) goto L_917;
  i[(e#3.column + t#2)];
  i[(e#3.column + t#2)] = (0 + c#1);
  <dup2#0>[<dup2#1>] = (<dup2#2>[<dup2#3>] + h#1);
  t#2 = <t#2_new>;
  (t#2++);
  goto L_88c;
  d#1 = <d#1_new>;
  (d#1++);
  goto L_5e9;
  return {textLengths: i, minimumWidths: r};
}

// fn H  args=2 vars=10 closure=4 cpool=0 bc=816B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o, r, l, a, d, s
// closure: ae, w, S, Vt
function {
  let s;
  let a;
  let l;
  let r;
  let o;
  let i;
  let n;
  n = t.component.viewModel.padding;
  if (!((undefined === n))) goto L_83;
  return 0;
  i = ae(t.column, e);
  if (!(("object" == typeof n))) goto L_100;
  goto L_128;
  // [栈深重同步 1 -> 0]
  o = w.resolveDILSpacing(n);
  if (!(("object" == typeof n))) goto L_1d5;
  if (!((w.resolveOptionalDILSpacing(n.left) == null))) goto L_1d8;
  w.resolveOptionalDILSpacing(n.left);
  if (!((o == null))) goto L_1d8;
  o;
  goto L_1d8;
  // [栈深重同步 2 -> 1]
  r = S.parseCSSValue(o);
  if (!(("object" == typeof n))) goto L_286;
  if (!((w.resolveOptionalDILSpacing(n.right) == null))) goto L_289;
  w.resolveOptionalDILSpacing(n.right);
  if (!((o == null))) goto L_289;
  o;
  goto L_289;
  // [栈深重同步 2 -> 1]
  l = S.parseCSSValue(o);
  if ((("number" != typeof r))) goto L_2a4;
  if (!(("number" != typeof l))) goto L_2a8;
  return 0;
  a = 0;
  let d;
  d = 0;
  if (!((d < t.colSpan))) goto L_316;
  a = (a + Vt(0, (t.column + d), e));
  (a + Vt(0, (t.column + d), e));
  d = <d_new>;
  (d++);
  goto L_2b1;
  s = ((r + l) - a);
  if (!((s <= 0))) goto L_32c;
  return 0;
  return s;
}

// fn B  args=4 vars=4 closure=1 cpool=0 bc=28B file=dil_widgets/src/widgets/Table
// args: t, e, n, i
// closure: G
function {
  if ((n)) goto L_e;
  if ((i)) goto L_e;
  if (!(G(t, e))) goto L_16;
  return "flex-start";
  return "space-between";
}

// fn G  args=2 vars=2 closure=1 cpool=0 bc=128B file=dil_widgets/src/widgets/Table
// args: t, e
// closure: U
function {
  if (!((undefined !== e))) goto L_7f;
  if (!(("equal" !== t.columnSizing))) goto L_7f;
  if (!(!t.hasSpans)) goto L_7f;
  return !U(t.widths);
}

// fn U  args=1 vars=2 closure=0 cpool=0 bc=38B file=dil_widgets/src/widgets/Table
// args: t
// locals: e
function {
  let e;
  e = 0;
  if (!((e < t.length))) goto L_23;
  if (!((undefined !== t[e]))) goto L_19;
  return true;
  e = <e_new>;
  (e++);
  goto L_5;
  return false;
}

// fn X  args=1 vars=3 closure=1 cpool=0 bc=54B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
// closure: Qt
function {
  let e;
  e = 0;
  if (!((e < t.length))) goto L_33;
  let n;
  n = t[e];
  if (!((undefined !== n))) goto L_29;
  if (!((undefined === Qt(n)))) goto L_29;
  return true;
  e = <e_new>;
  (e++);
  goto L_5;
  return false;
}

// fn J  args=1 vars=1 closure=1 cpool=0 bc=10B file=dil_widgets/src/widgets/Table
// args: t
// closure: K
function {
  return ("auto" === K(t));
}

// fn K  args=1 vars=5 closure=2 cpool=2 bc=398B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, e#1, n, t#1
// closure: kt, S
function {
  let n;
  let e;
  if (!((undefined === t))) goto L_11;
  return "auto";
  if (!(("number" == typeof t))) goto L_46;
  return "".concat(t, "px");   // tail call
  e = kt(t);
  if (!((undefined !== e))) goto L_7e;
  return "".concat(e, "px");   // tail call
  if (!(t.endsWith("rem"))) goto L_110;
  let e#1;
  e#1 = S.parseCSSValue(t);
  if (!(("number" == typeof e#1))) goto L_10e;
  return "".concat(e#1, "px");
  return t;
  n = t.match(new RegExp("^([0-9.]+)%$"));
  if (!((null !== n))) goto L_18c;
  let t#1;
  t#1 = Number(n[1]);
  if (!(Number.isFinite(t#1))) goto L_18c;
  if (!((t#1 <= 1))) goto L_18c;
  return "auto";
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/Table
// args: t
function {
  t.TextOnly = 0;
  t[0] = "TextOnly";
  t.Content = 1;
  t[1] = "Content";
  t.ContentAndMinimum = 2;
  t[2] = "ContentAndMinimum";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/widgets/Table
// args: t
function {
  t.Small = 0;
  t[0] = "Small";
  t.Medium = 1;
  t[1] = "Medium";
  t.Large = 2;
  t[2] = "Large";
  t.ExtraLarge = 3;
  t[3] = "ExtraLarge";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/widgets/Table
// args: t
function {
  t.Bounded = 0;
  t[0] = "Bounded";
  t.FixedPreferred = 1;
  t[1] = "FixedPreferred";
  t.FlexibleMax = 2;
  t[2] = "FlexibleMax";
  return;
}

// fn rt  args=2 vars=3 closure=2 cpool=0 bc=224B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n
// closure: dt, nt
function {
  let n;
  n = dt(e);
  return {min: Math.round(((n * t.min) / nt)), max: Math.round(((n * t.max) / nt)), flexibleMaxTrackFraction: t.max};
}

// fn lt  args=6 vars=10 closure=7 cpool=0 bc=883B file=dil_widgets/src/widgets/Table
// args: t, e, n, i, o, r
// locals: l, a, s, d
// closure: ut, Q, rt, ot, st, z, ct
function {
  let d;
  let s;
  let a;
  let l;
  if (!(r)) goto L_16;
  goto L_17;
  // [栈深重同步 1 -> 0]
  l = e;
  if (!(r)) goto L_33;
  if (!((undefined !== t))) goto L_33;
  if (!((t <= Q))) goto L_33;
  goto L_3b;
  // [栈深重同步 1 -> 0]
  a = st(t, l);
  if (!((undefined === a))) goto L_49;
  return "auto";
  if (!((n === z.FixedPreferred))) goto L_cd;
  return "".concat(Math.max(i, ct(t, a)), "px");   // tail call
  if (!(r)) goto L_129;
  goto L_14d;
  // [栈深重同步 1 -> 0]
  s = a.min;
  if (!(r)) goto L_1d0;
  goto L_24a;
  // [栈深重同步 1 -> 0]
  d = Math.max(a.min, Math.ceil(i), s);
  if (!((n === z.FlexibleMax))) goto L_2f1;
  goto L_36b;
  // [栈深重同步 5 -> 4]
  return "minmax(".concat(d, "px, ", "".concat(Math.max(a.max, d), "px"), ")");   // tail call
}

// fn at  args=3 vars=3 closure=1 cpool=0 bc=115B file=dil_widgets/src/widgets/Table
// args: t, e, n
// closure: z
function {
  if (!(t)) goto L_50;
  if (!((e === (n - 1)))) goto L_2d;
  return z.FlexibleMax;
  return z.FixedPreferred;
  return z.Bounded;
}

// fn st  args=2 vars=2 closure=3 cpool=0 bc=18B file=dil_widgets/src/widgets/Table
// args: t, e
// closure: rt, it, ht
function {
  if (!((undefined !== t))) goto L_11;
  return rt(it[ht(t)], e);   // tail call
  return;
}

// fn dt  args=1 vars=1 closure=1 cpool=0 bc=11B file=dil_widgets/src/widgets/Table
// args: t
// closure: et
function {
  if (!((undefined === t))) goto L_9;
  return et;
  return t;
}

// fn ut  args=1 vars=1 closure=2 cpool=0 bc=47B file=dil_widgets/src/widgets/Table
// args: t
// closure: et, dt
function {
  return Math.max(et, dt(t));   // tail call
}

// fn ct  args=2 vars=2 closure=2 cpool=0 bc=166B file=dil_widgets/src/widgets/Table
// args: t, e
// closure: Wt, Pt
function {
  if (!((undefined === t))) goto L_28;
  return e.min;
  return Math.max(e.min, Math.ceil(((t * Wt) + Pt)));
}

// fn ht  args=1 vars=1 closure=4 cpool=0 bc=161B file=dil_widgets/src/widgets/Table
// args: t
// closure: tt, P, Z, Y
function {
  if (!((t > tt))) goto L_2a;
  return P.ExtraLarge;
  if (!((t > Z))) goto L_54;
  return P.Large;
  if (!((t > Y))) goto L_7e;
  return P.Medium;
  return P.Small;
}

// fn mt  args=1 vars=1 closure=1 cpool=0 bc=265B file=dil_widgets/src/widgets/Table
// args: t
// closure: Wt
function {
  if (!((t.contentWidth <= (t.textLength * Wt)))) goto L_6e;
  return t.textLength;
  return Math.max(t.textLength, Math.ceil((t.contentWidth / Wt)));
}

// fn ft  args=3 vars=7 closure=4 cpool=0 bc=114B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, o, r, l
// closure: Mt, pt, bt, ft
function {
  let r;
  let o;
  let i;
  i = Mt(t);
  o = pt(t, e, n, i);
  if (!(i)) goto L_26;
  bt(t, e, o);
  r = t.children;
  let l;
  l = 0;
  if (!((l < r.length))) goto L_71;
  ft(r[l], e, o);
  l = <l_new>;
  (l++);
  goto L_4f;
  return;
}

// fn pt  args=4 vars=6 closure=1 cpool=0 bc=712B file=dil_widgets/src/widgets/Table
// args: t, e, n, i
// locals: o, r
// closure: F
function {
  let r;
  let o;
  if (!((n === F.TextOnly))) goto L_2e;
  return n;
  o = t.getAttribute("width");
  if (!(("number" == typeof o))) goto L_1a0;
  if (!(Number.isFinite(o))) goto L_1a0;
  if (!((o > 0))) goto L_1a0;
  e.contentWidth = Math.max(e.contentWidth, o);
  if (!((n === F.ContentAndMinimum))) goto L_17c;
  e.minimumContentWidth = Math.max(e.minimumContentWidth, o);
  Math.max(e.minimumContentWidth, o);
  return F.TextOnly;
  if ((i)) goto L_1d6;
  if (((n !== F.ContentAndMinimum))) goto L_1d6;
  if (!(("100%" !== o))) goto L_1da;
  return n;
  r = t.getAttribute("maxWidth");
  if ((("number" != typeof r))) goto L_249;
  if ((!Number.isFinite(r))) goto L_249;
  if (!((r <= 0))) goto L_24d;
  return n;
  e.minimumContentWidth = Math.max(e.minimumContentWidth, r);
  return F.Content;
}

// fn bt  args=3 vars=7 closure=4 cpool=0 bc=421B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, o, r, n#1
// closure: Lt, F, yt, Ct
function {
  let r;
  let o;
  let i;
  i = t.getAttribute("value");
  o = Lt(i);
  e.textLength = (e.textLength + o);
  if (!((n === F.TextOnly))) goto L_90;
  return;
  r = yt(t, i);
  e.contentWidth = Math.max(e.contentWidth, r);
  if (!((n === F.ContentAndMinimum))) goto L_1a4;
  let n#1;
  n#1 = Ct(t, i, o, r, e.breaksWithinWords);
  e.minimumContentWidth = Math.max(e.minimumContentWidth, n#1);
  return;
}

// fn gt  args=1 vars=5 closure=3 cpool=0 bc=297B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, o
// closure: Mt, yt, gt
function {
  let i;
  let n;
  let e;
  e = t.getAttribute("width");
  if (!(("number" == typeof e))) goto L_79;
  if (!(Number.isFinite(e))) goto L_79;
  if (!((e > 0))) goto L_79;
  return e;
  if (!(Mt(t))) goto L_ad;
  goto L_ae;
  // [栈深重同步 1 -> 0]
  n = 0;
  i = t.children;
  let o;
  o = 0;
  if (!((o < i.length))) goto L_125;
  n = Math.max(n, gt(i[o]));
  Math.max(n, gt(i[o]));
  o = <o_new>;
  (o++);
  goto L_d7;
  return n;
}

// fn vt  args=3 vars=10 closure=5 cpool=0 bc=513B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, o, e#1, r, e#2, i#1, l
// closure: Mt, yt, Ct, Lt, vt
function {
  let r;
  let o;
  let i;
  i = Mt(t);
  if (!(!e)) goto L_18;
  if (!(i)) goto L_18;
  return 0;
  o = t.getAttribute("width");
  if (!(("number" == typeof o))) goto L_88;
  if (!(Number.isFinite(o))) goto L_88;
  if (!((o > 0))) goto L_88;
  return o;
  if (!(!i)) goto L_10f;
  if (!(("100%" === o))) goto L_10f;
  let e#1;
  e#1 = t.getAttribute("maxWidth");
  if (!(("number" == typeof e#1))) goto L_10f;
  if (!(Number.isFinite(e#1))) goto L_10f;
  if (!((e#1 > 0))) goto L_10f;
  return e#1;
  r = 0;
  if (!(i)) goto L_166;
  let i#1;
  let e#2;
  e#2 = t.getAttribute("value");
  i#1 = yt(t, e#2);
  r = Ct(t, e#2, Lt(e#2), i#1, n);
  Ct(t, e#2, Lt(e#2), i#1, n);
  let l;
  l = 0;
  if (!((l < t.children.length))) goto L_1fd;
  r = Math.max(r, vt(t.children[l], e, n));
  Math.max(r, vt(t.children[l], e, n));
  l = <l_new>;
  (l++);
  goto L_16c;
  return r;
}

// fn wt  args=2 vars=8 closure=2 cpool=0 bc=222B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o, r, t#1, l
// closure: vt, Xt
function {
  let o;
  let i;
  let n;
  n = 0;
  i = 0;
  o = t.children;
  let r;
  r = 0;
  if (!((r < o.length))) goto L_95;
  let l;
  let t#1;
  t#1 = o[r];
  l = vt(t#1, true, e);
  if (((l <= 0))) goto L_8a;
  n = (n + ((l + Xt(t#1, "marginLeft")) + Xt(t#1, "marginRight")));
  (n + ((l + Xt(t#1, "marginLeft")) + Xt(t#1, "marginRight")));
  i = <i_new>;
  (i++);
  r = <r_new>;
  (r++);
  goto L_35;
  if ((Xt(t, "columnGap"))) goto L_ac;
  return (n + (Xt(t, "gap") * Math.max(0, (i - 1))));
}

// fn Ct  args=5 vars=5 closure=3 cpool=0 bc=105B file=dil_widgets/src/widgets/Table
// args: t, e, n, i, o
// closure: St, y, Wt
function {
  if (!((1 === t.getAttribute("numberOfLines")))) goto L_30;
  return i;
  if (!(o)) goto L_3a;
  goto L_62;
  // [栈深重同步 3 -> 2]
  return (i - ((n - St(y.stringFromDILTextValue(e))) * Wt));
}

// fn St  args=1 vars=3 closure=0 cpool=2 bc=117B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
function {
  let e;
  e = 0;
  let n;
  for (const n of t.split(new RegExp("\\s+"))) {
    e = Math.max(e, n.length);
    Math.max(e, n.length);
  }
  return e;
}

// fn xt  args=1 vars=1 closure=4 cpool=0 bc=204B file=dil_widgets/src/widgets/Table
// args: t
// closure: Mt, It, y, xt
function {
  if ((!Mt(t))) goto L_7f;
  if ((!!It.test(y.stringFromDILTextValue(t.getAttribute("value"))))) goto L_cb;
  return t.children.some(xt);
}

// fn yt  args=2 vars=9 closure=3 cpool=0 bc=593B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, t#1, e#1, o, r, l
// closure: Lt, Wt, gt
function {
  let n;
  n = (Lt(e) * Wt);
  if (!(!Array.isArray(e))) goto L_3c;
  return n;
  let i;
  i = 0;
  if (!((i < (e.length - 1)))) goto L_24d;
  let l;
  let r;
  let o;
  if (!((15 === e[i]))) goto L_169;
  let t#1;
  t#1 = e[(i + 1)];
  if (!(("number" == typeof t#1))) goto L_8c;
  n = (n + (2 * t#1));
  (n + (2 * t#1));
  goto L_242;
  if (!(("object" == typeof t#1))) goto L_242;
  if (!((null !== t#1))) goto L_242;
  let e#1;
  e#1 = t#1;
  if (!(("number" == typeof e#1.left))) goto L_102;
  goto L_103;
  // [栈深重同步 2 -> 1]
  n = (n + 0);
  (n + 0);
  if (!(("number" == typeof e#1.right))) goto L_15f;
  goto L_160;
  // [栈深重同步 2 -> 1]
  n = (n + 0);
  (n + 0);
  goto L_242;
  if (((17 !== e[i]))) goto L_242;
  o = e[(i + 1)];
  if ((("object" != typeof o))) goto L_192;
  if (((null === o))) goto L_242;
  r = o.childIndex;
  if ((("number" != typeof r))) goto L_201;
  if ((!Number.isInteger(r))) goto L_201;
  if (((r < 0))) goto L_242;
  l = t.children[r];
  if (!((undefined !== l))) goto L_241;
  n = (n + gt(l));
  (n + gt(l));
  i = <i_new>;
  (i++);
  goto L_41;
  return n;
}

// fn Mt  args=1 vars=1 closure=0 cpool=0 bc=85B file=dil_widgets/src/widgets/Table
// args: t
function {
  if ((("label" === t.tag))) goto L_54;
  return ("textview" === t.tag);
}

// fn Lt  args=1 vars=1 closure=1 cpool=0 bc=63B file=dil_widgets/src/widgets/Table
// args: t
// closure: Tt
function {
  if (!(("string" == typeof t))) goto L_d;
  return t.length;
  if (!(Array.isArray(t))) goto L_3d;
  return Tt(t);
  return 0;
}

// fn Rt  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/widgets/Table
// args: t
function {
  if (!((null == t))) goto L_7;
  return "";
  return String(t);
}

// fn Tt  args=1 vars=3 closure=0 cpool=0 bc=80B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
function {
  let e;
  e = 0;
  let n;
  n = 0;
  if (!((n < (t.length - 1)))) goto L_4c;
  if (!((1 === t[n]))) goto L_41;
  if (!(("string" == typeof t[(n + 1)]))) goto L_41;
  e = (e + t[(n + 1)].length);
  (e + t[(n + 1)].length);
  n = <n_new>;
  (n++);
  goto L_a;
  return e;
}

// fn kt  args=1 vars=3 closure=1 cpool=2 bc=176B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
// closure: At
function {
  let n;
  let e;
  e = t.match(new RegExp("^([0-9.]+)ch$"));
  if (!((null === e))) goto L_39;
  return;
  n = Number(e[1]);
  if ((!Number.isFinite(n))) goto L_7b;
  if (!((n < 0))) goto L_7f;
  return undefined;
  return Math.ceil((n * At));
}

// fn Ot  args=2 vars=6 closure=1 cpool=0 bc=188B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, o, e#1, i
// closure: w
function {
  let i;
  let n;
  n = 0;
  let o;
  o = 0;
  if (!((o < t.length))) goto L_41;
  let e#1;
  e#1 = t[o];
  if (!(("number" != typeof e#1))) goto L_2b;
  return;
  n = (n + e#1);
  (n + e#1);
  o = <o_new>;
  (o++);
  goto L_d;
  if (!((0 === t.length))) goto L_48;
  return;
  if (!((undefined === e))) goto L_50;
  goto L_76;
  // [栈深重同步 1 -> 0]
  i = w.resolveDILSpacing(e);
  if (!(("number" == typeof i))) goto L_ba;
  return (n + (i * Math.max(0, (t.length - 1))));
  return undefined;
}

// fn Nt  args=1 vars=3 closure=4 cpool=0 bc=160B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
// closure: Ot, Bt, Et, jt
function {
  let n;
  let e;
  e = Ot(t.widths, t.gap);
  if (!((undefined !== e))) goto L_58;
  return e;
  n = Bt(t.widths);
  if (!((undefined !== n))) goto L_88;
  return n;
  if (!(Et(t))) goto L_93;
  return "100%";
  if (!(jt(t))) goto L_9a;
  return undefined;
  return "100%";
}

// fn Et  args=1 vars=1 closure=1 cpool=0 bc=120B file=dil_widgets/src/widgets/Table
// args: t
// closure: U
function {
  if (!(t.fitContent)) goto L_77;
  if (!(("equal" !== t.columnSizing))) goto L_77;
  return !U(t.widths);
}

// fn Vt  args=3 vars=3 closure=2 cpool=0 bc=78B file=dil_widgets/src/widgets/Table
// args: t, e, n
// closure: Wt, Pt
function {
  if (!((t == null))) goto L_2d;
  t;
  if (((0 === e))) goto L_40;
  if (!((e === (n - 1)))) goto L_49;
  goto L_4c;
  // [栈深重同步 2 -> 1]
  return (Math.ceil((0 * Wt)) + Pt);
}

// fn qt  args=2 vars=2 closure=2 cpool=0 bc=51B file=dil_widgets/src/widgets/Table
// args: t, e
// closure: U, Et
function {
  if (((undefined === e))) goto L_32;
  if ((U(t.widths))) goto L_32;
  return Et(t);
}

// fn jt  args=1 vars=2 closure=3 cpool=0 bc=281B file=dil_widgets/src/widgets/Table
// args: t
// locals: e
// closure: U, _t, dt
function {
  let e;
  if ((("equal" === t.columnSizing))) goto L_79;
  if ((t.hasSpans)) goto L_79;
  if (!(U(t.widths))) goto L_7e;
  return false;
  e = _t(t.columnTextLengths, t.gap, t.availableContentWidth);
  if (((undefined === e))) goto L_118;
  return (e > dt(t.availableContentWidth));
}

// fn _t  args=3 vars=8 closure=3 cpool=0 bc=239B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, r, e#1, o, o#1
// closure: st, ct, w
function {
  let o#1;
  let i;
  i = 0;
  let r;
  r = 0;
  if (!((r < t.length))) goto L_7b;
  let o;
  let e#1;
  e#1 = t[r];
  o = st(e#1, n);
  if (!((undefined === o))) goto L_30;
  return;
  if (!((r === (t.length - 1)))) goto L_63;
  goto L_6b;
  // [栈深重同步 2 -> 1]
  i = (i + ct(e#1, o));
  (i + ct(e#1, o));
  r = <r_new>;
  (r++);
  goto L_d;
  if (!((undefined === e))) goto L_83;
  goto L_a9;
  // [栈深重同步 1 -> 0]
  o#1 = w.resolveDILSpacing(e);
  if (!(("number" == typeof o#1))) goto L_ee;
  return (i + (o#1 * Math.max(0, (t.length - 1))));
  return;
}

// fn Ht  args=2 vars=4 closure=0 cpool=0 bc=325B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i
function {
  let i;
  let n;
  if (!((t == null))) goto L_f;
  t;
  goto L_51;
  n = undefined.frame.width;
  if (((undefined === n))) goto L_91;
  if ((!Number.isFinite(n))) goto L_91;
  if (!((n <= 0))) goto L_94;
  return;
  if (!((undefined === e))) goto L_c5;
  return Math.round(n);   // tail call
  i = ((n - e.left) - e.right);
  if (!((i > 0))) goto L_143;
  return Math.round(i);
  return undefined;
}

// fn Bt  args=1 vars=3 closure=2 cpool=0 bc=94B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
// closure: Qt, $t
function {
  let e;
  e = 0;
  if (!((e < t.length))) goto L_5d;
  let n;
  n = Qt(t[e]);
  if (!((undefined !== n))) goto L_53;
  if (!((n > 1))) goto L_53;
  return "".concat($t, "%");   // tail call
  e = <e_new>;
  (e++);
  goto L_5;
  return;
}

// fn Gt  args=1 vars=5 closure=1 cpool=0 bc=453B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i, t#1
// closure: zt
function {
  let n;
  let e;
  e = t.frame.width;
  n = t.children;
  let i;
  i = 0;
  if (!((i < n.length))) goto L_130;
  let t#1;
  t#1 = n[i].frame;
  e = Math.max(e, (t#1.x + t#1.width));
  Math.max(e, (t#1.x + t#1.width));
  i = <i_new>;
  (i++);
  goto L_72;
  if (!((e > (t.frame.width + zt)))) goto L_181;
  return e;
  return t.frame.width;
}

// fn Ut  args=3 vars=3 closure=1 cpool=0 bc=100B file=dil_widgets/src/widgets/Table
// args: t, e, n
// closure: Xt
function {
  if (!((n == null))) goto L_30;
  n;
  goto L_51;
  if (!((undefined.left == null))) goto L_57;
  undefined.left;
  return Math.ceil(((t + 0) + Xt(e, "paddingRight")));   // tail call
}

// fn Xt  args=2 vars=3 closure=0 cpool=0 bc=114B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n
function {
  let n;
  if (!((t == null))) goto L_c;
  t;
  goto L_31;
  n = undefined.getAttribute(e);
  if (!(("number" == typeof n))) goto L_70;
  if (!(Number.isFinite(n))) goto L_70;
  return n;
  return 0;
}

// fn Jt  args=1 vars=4 closure=1 cpool=0 bc=307B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n, i
// closure: Kt
function {
  let i;
  let n;
  let e;
  e = t.containerGutter;
  if (((undefined === e))) goto L_ae;
  if (((true !== t.fitContent))) goto L_ae;
  if ((("equal" === t.columnSizing))) goto L_ae;
  if (!((undefined !== t.width))) goto L_b1;
  return;
  n = Kt(e.left);
  i = Kt(e.right);
  if (((undefined === n))) goto L_11d;
  if (((undefined === i))) goto L_11d;
  if (!((0 === n))) goto L_121;
  if (!((0 === i))) goto L_121;
  return undefined;
  return {left: n, right: i};
}

// fn Kt  args=1 vars=2 closure=1 cpool=0 bc=214B file=dil_widgets/src/widgets/Table
// args: t
// locals: e
// closure: S
function {
  let e;
  if (!(("string" == typeof t))) goto L_37;
  if (!(("" === t.trim()))) goto L_37;
  return;
  if (!(("string" == typeof t))) goto L_8c;
  goto L_8d;
  // [栈深重同步 2 -> 1]
  e = S.parseCSSValue(t);
  if (!(("number" == typeof e))) goto L_d4;
  if (!(Number.isFinite(e))) goto L_d4;
  if (!((e >= 0))) goto L_d4;
  return e;
  return undefined;
}

// fn Qt  args=1 vars=3 closure=0 cpool=2 bc=132B file=dil_widgets/src/widgets/Table
// args: t
// locals: e, n
function {
  let n;
  let e;
  if (!(("string" != typeof t))) goto L_11;
  return;
  e = t.match(new RegExp("^([0-9.]+)%$"));
  if (!((null === e))) goto L_44;
  return;
  n = Number(e[1]);
  if (!(Number.isFinite(n))) goto L_82;
  return n;
  return undefined;
}

// fn Yt  args=2 vars=8 closure=0 cpool=0 bc=199B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o, t#1, r, l
function {
  let i;
  let n;
  n = [];
  i = 1;
  let o;
  o = 0;
  if (!((o < t))) goto L_c3;
  let l;
  let r;
  let t#1;
  if (!((e[o] == null))) goto L_33;
  e[o];
  goto L_57;
  if (!((true === undefined.hasLabel()))) goto L_63;
  i = <i_new>;
  goto L_64;
  // [栈深重同步 1 -> 0]
  t#1 = undefined;
  i = <i_new>;
  r = (i++);
  i = <i_new>;
  l = (i++);
  n.push({contentRowStart: r, dividerRowStart: l, labelRowStart: t#1});
  o = <o_new>;
  (o++);
  goto L_11;
  return n;
}

// fn Zt  args=3 vars=6 closure=2 cpool=0 bc=440B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i, o, r
// closure: te, ie
function {
  let i;
  if (!((0 === t.length))) goto L_a;
  return;
  i = [];
  let o;
  o = 0;
  if (!((o < t.length))) goto L_18c;
  let r;
  if (!((undefined !== t[o].labelRowStart))) goto L_79;
  i.push("auto");
  i.push("auto");
  if (!((e[o] == null))) goto L_b5;
  e[o];
  goto L_f7;
  r = te(undefined.viewModel.rowDivider);
  if (!((n[o] == null))) goto L_12c;
  n[o];
  goto L_14d;
  if (!((true === undefined.visible))) goto L_178;
  goto L_17d;
  // [栈深重同步 3 -> 2]
  i.push("0px");
  o = <o_new>;
  (o++);
  goto L_13;
  return i.join(" ");   // tail call
}

// fn te  args=1 vars=1 closure=2 cpool=0 bc=186B file=dil_widgets/src/widgets/Table
// args: t
// closure: ee, M
function {
  if (!(("number" == typeof t))) goto L_1e;
  return {color: "alpha-10", size: ee(t)};
  if (!((undefined !== t))) goto L_a8;
  if (!((t.size == null))) goto L_a1;
  t.size;
  return {color: M.resolveDILBorderColor(t.color, "subtle"), size: ee(1)};
  return {color: "alpha-10", size: 1};
}

// fn ee  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_widgets/src/widgets/Table
// args: t
function {
  if ((!Number.isFinite(t))) goto L_32;
  if (!((t <= 0))) goto L_36;
  return 0;
  return t;
}

// fn ne  args=1 vars=1 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/Table
// args: t
function {
  return (t > 0);
}

// fn ie  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/widgets/Table
// args: t
function {
  return "".concat(t, "px");   // tail call
}

// fn oe  args=4 vars=4 closure=4 cpool=0 bc=84B file=dil_widgets/src/widgets/Table
// args: t, e, n, i
// closure: le, se, w, re
function {
  if (!((undefined !== e))) goto L_4e;
  if (!(("string" != typeof e))) goto L_23;
  if (!(("number" != typeof e))) goto L_23;
  goto L_53;
  // [栈深重同步 1 -> 0]
  goto L_53;
  // [栈深重同步 1 -> 0]
  re(t, n, i);
  return;
}

// fn re  args=3 vars=4 closure=3 cpool=0 bc=162B file=dil_widgets/src/widgets/Table
// args: t, e, n
// locals: i
// closure: ae, ue, de
function {
  let i;
  i = ae(e, n);
  ue(t);
  de(t, i.top, i.right, i.bottom, i.left);
  return;
}

// fn le  args=4 vars=7 closure=4 cpool=0 bc=648B file=dil_widgets/src/widgets/Table
// args: t, e, n, i
// locals: o, r, l
// closure: ae, w, ue, de
function {
  let l;
  let r;
  let o;
  o = ae(n, i);
  r = w.resolveOptionalDILSpacing(e.x);
  l = w.resolveOptionalDILSpacing(e.y);
  ue(t);
  if (!((w.resolveOptionalDILSpacing(e.top) == null))) goto L_11c;
  w.resolveOptionalDILSpacing(e.top);
  if (!((l == null))) goto L_11c;
  l;
  if (!((w.resolveOptionalDILSpacing(e.right) == null))) goto L_194;
  w.resolveOptionalDILSpacing(e.right);
  if (!((r == null))) goto L_194;
  r;
  if (!((w.resolveOptionalDILSpacing(e.bottom) == null))) goto L_20c;
  w.resolveOptionalDILSpacing(e.bottom);
  if (!((l == null))) goto L_20c;
  l;
  if (!((w.resolveOptionalDILSpacing(e.left) == null))) goto L_284;
  w.resolveOptionalDILSpacing(e.left);
  if (!((r == null))) goto L_284;
  r;
  de(t, o.top, o.right, o.bottom, o.left);
  return;
}

// fn ae  args=2 vars=5 closure=1 cpool=0 bc=223B file=dil_widgets/src/widgets/Table
// args: t, e
// locals: n, i, o
// closure: w
function {
  let o;
  let i;
  let n;
  n = w.resolveDILPadding(2);
  if ((("string" == typeof n))) goto L_48;
  if (!(("number" == typeof n))) goto L_4f;
  goto L_73;
  // [栈深重同步 1 -> 0]
  i = n.left;
  o = {top: i, right: i, bottom: i, left: i, x: i, y: i};
  if (!((0 === t))) goto L_bb;
  o.left = 0;
  0;
  if (!((undefined !== e))) goto L_da;
  if (!((t === (e - 1)))) goto L_da;
  o.right = 0;
  0;
  return o;
}

// fn se  args=2 vars=2 closure=2 cpool=0 bc=217B file=dil_widgets/src/widgets/Table
// args: t, e
// closure: ue, de
function {
  ue(t);
  if (!(("string" != typeof e))) goto L_ad;
  if (!(("number" != typeof e))) goto L_ad;
  goto L_d8;
  // [栈深重同步 1 -> 0]
  t.setAttribute("padding", e);
  return;
}

// fn de  args=5 vars=5 closure=0 cpool=0 bc=178B file=dil_widgets/src/widgets/Table
// args: t, e, n, i, o
function {
  t.setAttribute("paddingTop", e);
  t.setAttribute("paddingRight", n);
  t.setAttribute("paddingBottom", i);
  t.setAttribute("paddingLeft", o);
  return;
}

// fn ue  args=1 vars=1 closure=0 cpool=0 bc=220B file=dil_widgets/src/widgets/Table
// args: t
function {
  t.setAttribute("padding", undefined);
  t.setAttribute("paddingTop", undefined);
  t.setAttribute("paddingRight", undefined);
  t.setAttribute("paddingBottom", undefined);
  t.setAttribute("paddingLeft", undefined);
  return;
}

// fn ce  args=1 vars=1 closure=0 cpool=0 bc=32B file=dil_widgets/src/widgets/Table
// args: t
function {
  if (!(("start" === t))) goto L_f;
  return "flex-start";
  if (!(("end" === t))) goto L_1e;
  return "flex-end";
  return t;
}

// fn <atom:0>  args=3 vars=133 closure=0 cpool=105 bc=4395B file=dil_widgets/src/widgets/Table
// args: require, module, exports
// locals: t, e, n, i, o, r, l, a, s, d, u, c, h, m, f, p, b, g, v, w, C, S, x, y, M, L, R, T, A, W, D, Table, <class_fields_init>, Table#1, TableRow, <class_fields_init>#1, TableRow#1, TableCell, <class_fields_init>#2, TableCell#1, I, F, P, z, k, O, N, E, V, $, q, j, _, H, B, G, U, X, J, K, Q, Y, Z, tt, et, nt, it, ot, rt, lt, at, st, dt, ut, ct, ht, mt, ft, pt, bt, gt, vt, wt, Ct, St, xt, yt, Mt, Lt, Rt, Tt, At, Wt, Dt, It, Ft, Pt, zt, kt, Ot, Nt, Et, Vt, $t, qt, jt, _t, Ht, Bt, Gt, Ut, Xt, Jt, Kt, Qt, Yt, Zt, te, ee, ne, ie, oe, re, le, ae, se, de, ue, ce, he
function {
  I = function I;
  k = function k;
  O = function O;
  N = function N;
  E = function E;
  V = function V;
  $ = function $;
  q = function q;
  j = function j;
  _ = function _;
  H = function H;
  B = function B;
  G = function G;
  U = function U;
  X = function X;
  J = function J;
  K = function K;
  rt = function rt;
  lt = function lt;
  at = function at;
  st = function st;
  dt = function dt;
  ut = function ut;
  ct = function ct;
  ht = function ht;
  mt = function mt;
  ft = function ft;
  pt = function pt;
  bt = function bt;
  gt = function gt;
  vt = function vt;
  wt = function wt;
  Ct = function Ct;
  St = function St;
  xt = function xt;
  yt = function yt;
  Mt = function Mt;
  Lt = function Lt;
  Rt = function Rt;
  Tt = function Tt;
  kt = function kt;
  Ot = function Ot;
  Nt = function Nt;
  Et = function Et;
  Vt = function Vt;
  qt = function qt;
  jt = function jt;
  _t = function _t;
  Ht = function Ht;
  Bt = function Bt;
  Gt = function Gt;
  Ut = function Ut;
  Xt = function Xt;
  Jt = function Jt;
  Kt = function Kt;
  Qt = function Qt;
  Yt = function Yt;
  Zt = function Zt;
  te = function te;
  ee = function ee;
  ne = function ne;
  ie = function ie;
  oe = function oe;
  re = function re;
  le = function le;
  ae = function ae;
  se = function se;
  de = function de;
  ue = function ue;
  ce = function ce;
  let he;
  let $t;
  let zt;
  let Pt;
  let Ft;
  let It;
  let Dt;
  let Wt;
  let At;
  let ot;
  let it;
  let nt;
  let et;
  let tt;
  let Z;
  let Y;
  let Q;
  let TableCell#1;
  let TableRow#1;
  let Table#1;
  let D;
  let W;
  let A;
  let T;
  let R;
  let L;
  let M;
  let y;
  let x;
  let S;
  let C;
  let w;
  let v;
  let g;
  let b;
  let p;
  let f;
  let m;
  let h;
  let c;
  let u;
  let d;
  let s;
  let a;
  let l;
  let r;
  let o;
  let i;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Table = undefined;
  exports.TableRow = undefined;
  exports.TableCell = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("scroll", undefined, "IV6PP3GKGgwW2Dej");
  n = t.makeNodePrototype("textselectiongroup", undefined, "kZ_hlAlc_ud7gphS");
  i = t.makeNodePrototype("view", undefined, "o3KWIwPvEv4fkW8j");
  o = t.makeComponentPrototype(["header", true], "l8BoTn1095d81pq1");
  r = t.makeComponentPrototype(undefined, "a_tpk33COr9Fgw4z");
  l = t.makeNodePrototype("label", undefined, "hQ0KHHy8-uuHRmOC");
  a = t.makeComponentPrototype(undefined, "VMnJxpMzItfIk4mz");
  s = t.makeComponentPrototype(undefined, "sGWAeveq2cdbaq7X");
  d = t.makeNodePrototype("label", undefined, "c0ztu4ZPIeJrsuEI");
  u = t.makeComponentPrototype(undefined, "uc2n9xMoX2pM057X");
  c = t.makeComponentPrototype(undefined, "TlSBDeLWfsvv9X-7");
  h = t.makeNodePrototype("label", undefined, "rcR37-jLBfTsNivo");
  m = t.makeNodePrototype("view", undefined, "hLABWVs--pD3Hw8z");
  f = t.makeNodePrototype("view", undefined, "JEtYWyiAVcBQ7M-a");
  p = t.makeNodePrototype("label", undefined, "jipC1anS5ScOQUit");
  b = t.makeNodePrototype("view", undefined, "YPhZL7ImcyI4WIYM");
  g = t.makeNodePrototype("view", undefined, "jaNDV5Bug2nprjOw");
  v = require("dil_core/src/DILComponent");
  w = require("dil_core/src/layout/DILSpacing");
  C = require("dil_core/src/typography/DILDynamicFont");
  S = require("dil_core/src/utils/AttributeParser");
  x = require("dil_text/src/rendering/DILTextTypography");
  y = require("dil_text/src/rendering/DILTextValue");
  M = require("dil_core/src/colors/DILColor");
  L = require("valdi_core/src/Device");
  R = require("valdi_core/src/ElementRef");
  T = require("valdi_core/src/Style");
  A = require("valdi_core/src/utils/FunctionUtils");
  W = require("../layout/TableLayout");
  D = require("./DILFlexContainer");
  let Table;
  let <class_fields_init>;
  class Table extends v.DILComponent { ... }
  <proto:Table>.viewportUsesContentCoordinates = function <atom:0>;
  <proto:Table>.onRender = function <atom:0>;
  <proto:Table>.renderTableContent = function <atom:0>;
  <proto:Table>.renderDataHeader = function <atom:0>;
  <proto:Table>.renderDataHeaderCells = function <atom:0>;
  <proto:Table>.renderDataRow = function <atom:0>;
  <proto:Table>.renderDataCells = function <atom:0>;
  <proto:Table>.renderEmptyDataRow = function <atom:0>;
  <proto:Table>.applyDynamicTableLayout = function <atom:0>;
  <proto:Table>.applyTableSizingFromCurrentLayout = function <atom:0>;
  <proto:Table>.resolveFullBleedContainerGutter = function <atom:0>;
  <proto:Table>.resolveDynamicTableLayout = function <atom:0>;
  <proto:Table>.applyResolvedTableSizing = function <atom:0>;
  <proto:Table>.setUsesMeasuredStaticContentWidth = function <atom:0>;
  <proto:Table>.setAutoTableAvailableContentWidth = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Table>;
  Table = function <atom:0>;
  // close_loc <class_fields_init>
  Table#1 = function <atom:0>;
  exports.Table = Table#1;
  Table#1.dilV2Properties = ["columnSizing", "columns", "dividers", "emptyLabel", "rows", "stickyHeader"];
  // append([], 0, v.DIL_COMPONENT_PROPERTIES)
  [][v.DIL_COMPONENT_PROPERTIES] = "columns";
  [][("columns" ++)] = "gap";
  [][("gap" ++)] = "columnSizing";
  [][("columnSizing" ++)] = "dividers";
  [][("dividers" ++)] = "emptyLabel";
  [][("emptyLabel" ++)] = "rowDivider";
  [][("rowDivider" ++)] = "rows";
  [][("rows" ++)] = "width";
  ("width" ++);
  Table#1.properties = [];
  Table#1.useRenderChildrenProperty = true;
  let TableRow;
  let <class_fields_init>#1;
  class TableRow extends v.DILComponent { ... }
  <proto:TableRow>.onRender = function <atom:0>;
  <proto:TableRow>.hasLabel = function <atom:0>;
  <proto:TableRow>.applyLabelLayout = function <atom:0>;
  <proto:TableRow>.applyLabelScrollOffset = function <atom:0>;
  <proto:TableRow>.applyDividerLayout = function <atom:0>;
  <proto:TableRow>.getCells = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:TableRow>;
  TableRow = function <atom:0>;
  // close_loc <class_fields_init>#1
  TableRow#1 = function <atom:0>;
  exports.TableRow = TableRow#1;
  TableRow#1.dilV2Properties = ["header", "label", "labelColSpan"];
  // append([], 0, v.DIL_COMPONENT_PROPERTIES)
  [][v.DIL_COMPONENT_PROPERTIES] = "header";
  [][("header" ++)] = "label";
  [][("label" ++)] = "rowDivider";
  ("rowDivider" ++);
  TableRow#1.properties = [];
  let TableCell;
  let <class_fields_init>#2;
  class TableCell extends v.DILComponent { ... }
  <proto:TableCell>.onRender = function <atom:0>;
  <proto:TableCell>.applyTableLayout = function <atom:0>;
  <proto:TableCell>.measureContentInto = function <atom:0>;
  <proto:TableCell>.getFixedNonTextContentWidth = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:TableCell>;
  TableCell = function <atom:0>;
  // close_loc <class_fields_init>#2
  TableCell#1 = function <atom:0>;
  exports.TableCell = TableCell#1;
  TableCell#1.dilV2Properties = ["align", "colSpan", "header", "padding", "rowSpan", "vAlign", "width"];
  // append([], 0, v.DIL_COMPONENT_PROPERTIES)
  [][v.DIL_COMPONENT_PROPERTIES] = "align";
  [][("align" ++)] = "colSpan";
  [][("colSpan" ++)] = "padding";
  [][("padding" ++)] = "rowSpan";
  [][("rowSpan" ++)] = "vAlign";
  [][("vAlign" ++)] = "width";
  ("width" ++);
  TableCell#1.properties = [];
  if ((F)) goto L_959;
  F = {};
  function <atom:0>({});
  if ((P)) goto L_966;
  P = {};
  function <atom:0>({});
  if ((z)) goto L_973;
  z = {};
  function <atom:0>({});
  Q = 10;
  Y = 40;
  Z = 100;
  tt = 160;
  et = 640;
  nt = 24;
  it = [{min: 4, max: 6}, {min: 6, max: 8}, {min: 8, max: 12}, {min: 14, max: 18}];
  ot = {min: 0, max: 4};
  At = (x.resolveDILTextFontSize(undefined) / 2);
  Wt = (0.6 * x.resolveDILTextFontSize(undefined));
  Dt = 6;
  It = new RegExp("\\S{25,}");
  Ft = w.resolveDILSpacing(2);
  if (!(("number" == typeof Ft))) goto L_a76;
  goto L_a77;
  // [栈深重同步 1 -> 0]
  Pt = 0;
  zt = 0.001;
  $t = 100;
  he = {scrollContainer: new T.Style({minWidth: 0, minHeight: 0, flexShrink: 1, horizontal: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false}), table: new T.Style({display: "grid", extendViewportWithChildren: true, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", minWidth: "100%"}), cell: new T.Style({flexShrink: 1, flexDirection: "column", justifyContent: "flex-start", minWidth: 0}), dataText: new T.Style({color: "color-text-prose", font: C.dynamicSystemFontForSize(x.resolveDILTextFontSize("sm")), lineHeightMultiple: (x.resolveDILTextLineHeight("sm") / x.resolveDILTextFontSize("sm")), numberOfLines: 0}), dataHeaderText: new T.Style({color: "color-text-prose", font: C.dynamicSemiboldSystemFontForSize(x.resolveDILTextFontSize("sm")), lineHeightMultiple: (x.resolveDILTextLineHeight("sm") / x.resolveDILTextFontSize("sm")), numberOfLines: 0}), emptyDataText: new T.Style({color: "color-text-secondary", font: C.dynamicSystemFontForSize(x.resolveDILTextFontSize("sm")), lineHeightMultiple: (x.resolveDILTextLineHeight("sm") / x.resolveDILTextFontSize("sm")), numberOfLines: 0}), rowLabelCell: new T.Style({width: "100%", flexShrink: 1, flexDirection: "column", alignItems: "flex-start", paddingTop: w.resolveDILSpacing(2), paddingRight: w.resolveDILSpacing(2), paddingBottom: 0, paddingLeft: w.resolveDILSpacing(2)}), rowLabelContent: new T.Style({flexShrink: 0, flexDirection: "column", alignItems: "flex-start", backgroundColor: "surface"}), rowLabelText: new T.Style({color: "color-text-secondary", font: C.dynamicSystemFontForSize(x.resolveDILTextFontSize("xs")), lineHeightMultiple: (x.resolveDILTextLineHeight("xs") / x.resolveDILTextFontSize("xs")), numberOfLines: 0}), v2RowLabelCell: new T.Style({width: "100%", flexShrink: 1, flexDirection: "column", alignItems: "flex-start", paddingTop: w.resolveDILSpacing(2), paddingBottom: 0}), divider: new T.Style({width: "100%", flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Table
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
