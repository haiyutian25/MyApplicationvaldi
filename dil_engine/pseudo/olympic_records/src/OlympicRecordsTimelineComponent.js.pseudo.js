// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=olympic_records/src/OlympicRecordsTimelineComponent
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
  this.state = {};
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=560B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: t, o, bt, r
function {
  this = this;
  if (!((undefined !== this.state.message))) goto L_207;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", bt.errorMessageContainer);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", bt.errorMessageText);
  t.setAttributeString("value", this.state.message);
  t.endRender();
  t.endRender();
  return;
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=275B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = e.message;
  if (!((this.viewModel.host == null))) goto L_73;
  this.viewModel.host;
  goto L_9a;
  undefined.renderFailure(t);
  if (!((undefined === this.state.message))) goto L_112;
  this.setState({message: t});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=265B file=olympic_records/src/OlympicRecordsTimelineComponent
// closure: this
function {
  if ((this.state.isLoadingMore)) goto L_108;
  if (((undefined === this.state.nextLink))) goto L_108;
  this.loadTimelineFromHost(this.state.nextLink, "append");
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=204B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, ke
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
  this.state = {state: "loading", sections: [], isLoadingMore: false, organizationDetailsById: {}};
  this.requestSequence = 0;
  this.didStartHostLoad = false;
  this.viewSessionId = ke.createOlympicViewSessionId();
  this.providerLogoAssets = new Map();
  this.handleLoadMore = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=207B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: ke, xe
function {
  this = this;
  if (!((this.context == null))) goto L_50;
  this.context;
  goto L_71;
  ke.trackOlympicNavigationPageViewed(undefined.host, "records_timeline", "recordsTimeline", this.viewSessionId);
  this.loadTimelineFromHost(xe, "replace");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=463B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
function {
  this = this;
  if (!((this.context == null))) goto L_2d;
  this.context;
  goto L_4e;
  if (!((undefined === undefined.host))) goto L_1a9;
  goto L_1ce;
  // [栈深重同步 1 -> 0]
  this.scheduleHostLoad();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=700B file=olympic_records/src/OlympicRecordsTimelineComponent
// closure: t, d, bt, s, l, this, a
function {
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", bt.root);
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", bt.scroll);
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", bt.content);
  this.renderBody();
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", bt.bottomSpacer);
  t.endRender();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=252B file=olympic_records/src/OlympicRecordsTimelineComponent
// closure: t, d, bt, s, l, this, a, OlympicRecordsTimelineErrorBoundary, n
function {
  t.beginComponent(OlympicRecordsTimelineErrorBoundary, n, undefined, undefined);
  if (!((this.context == null))) goto L_85;
  this.context;
  goto L_a6;
  t.setViewModelProperty("host", undefined.host);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=317B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: t, d, bt, s, l, a, OlympicRecordsTimelineErrorBoundary, n, Se, i
function {
  this = this;
  this.scheduleHostLoad();
  t.beginComponent(Se.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("mode", Se.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=535B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
function {
  this = this;
  if (!((this.state.state === "loading"))) goto L_75;
  this.renderLoadingState();
  this.state.state;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "error"))) goto L_a5;
  this.renderErrorState();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "empty"))) goto L_d5;
  this.renderEmptyState();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "loaded"))) goto L_105;
  this.renderLoadedState();
  return;
  // [栈深重同步 0 -> 1]
  if (!((this.context == null))) goto L_130;
  this.context;
  goto L_1ea;
  if (!((undefined.host == null))) goto L_15a;
  undefined.host;
  goto L_1ea;
  undefined.renderFailure("Unsupported Olympic records timeline state: ".concat(this.state.state));
  this.renderErrorMessage("Failed to load records");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=38B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// closure: this
function {
  return this.renderSkeletonCard(t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=254B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: t, c, bt
function {
  this = this;
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", bt.skeletonList);
  Array.from({length: 3}).map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// closure: this
function {
  return this.renderSkeletonCategory(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=1 bc=1266B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: o, this
// closure: pt, t, y, bt, g, u, m, v, h, w
function {
  this = this;
  let o;
  o = pt[(e % pt.length)];
  if (!((undefined !== o))) goto L_4f1;
  t.beginRender(y, "records-skeleton-".concat(e));
  t.setAttributeStyle("style", bt.card);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", bt.cardHeader);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", bt.skeletonBadge);
  t.endRender();
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", bt.headerTextColumn);
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", bt.skeletonTitle);
  t.endRender();
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", bt.skeletonSubtitle);
  t.endRender();
  t.endRender();
  t.endRender();
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", bt.skeletonCategories);
  o.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=74B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t, o
// closure: this, e
function {
  return this.renderSkeletonRow(t, o, e.rows.length);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=1 bc=941B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o
// locals: this
// closure: t, b, bt, p, S, R, k
function {
  this = this;
  t.beginRender(b, "records-skeleton-category-".concat(o));
  t.setAttributeStyle("style", bt.skeletonCategory);
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", bt.skeletonCategoryHeader);
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", bt.skeletonCategoryDot);
  t.endRender();
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", bt.skeletonCategoryLabel);
  t.endRender();
  t.endRender();
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", bt.skeletonRows);
  e.rows.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=4 closure=9 cpool=0 bc=1298B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o, r
// locals: i
// closure: t, A, bt, f, C, x, I, L, P
function {
  let i;
  i = (o < (r - 1));
  t.beginRender(A, "records-skeleton-row-".concat(o));
  t.setAttributeStyle("style", bt.skeletonRowGroup);
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", bt.skeletonRow);
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", bt.skeletonRowTextColumn);
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", e.lineStyle);
  t.endRender();
  if (!((undefined !== e.detailLineStyle))) goto L_319;
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", e.detailLineStyle);
  t.endRender();
  t.endRender();
  if (!((true === e.showValue))) goto L_412;
  t.beginRender(L, undefined);
  t.setAttributeStyle("style", bt.skeletonValueLine);
  t.endRender();
  t.endRender();
  if (!(i)) goto L_4e9;
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", bt.rowDivider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=45B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
function {
  this = this;
  this.renderErrorMessage("Failed to load records");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=376B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: t, T, bt, N
function {
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", bt.errorMessageContainer);
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", bt.errorMessageText);
  t.setAttributeString("value", e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=495B file=olympic_records/src/OlympicRecordsTimelineComponent
// closure: t, O, bt, D, B
function {
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", bt.emptyCard);
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", bt.emptyTitle);
  t.endRender();
  t.beginRender(B, undefined);
  t.setAttributeStyle("style", bt.emptySubtitle);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// closure: this
function {
  return this.renderSectionGroup(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=384B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: t, M, bt
function {
  this = this;
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", bt.sections);
  this.state.sections.map(function <atom:0>);
  t.endRender();
  if (!((undefined !== this.state.nextLink))) goto L_17f;
  this.renderLoadMoreButton();
  return;
}

// fn <atom:0>  args=2 vars=8 closure=5 cpool=0 bc=730B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o
// locals: r, i, n, d, s, this
// closure: at, bt, t, H, V
function {
  this = this;
  let s;
  let d;
  let n;
  let i;
  let r;
  r = this.state.sections[(o - 1)];
  i = at(e);
  if (!((undefined === r))) goto L_69;
  goto L_6e;
  // [栈深重同步 1 -> 0]
  n = at(r);
  if (!((o > 0))) goto L_8f;
  if (!((undefined !== i))) goto L_8f;
  if (!((undefined !== n))) goto L_8f;
  d = (i !== n);
  if (!((0 === o))) goto L_bb;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  if (!(d)) goto L_e6;
  goto L_10a;
  // [栈深重同步 1 -> 0]
  s = bt.sectionGroupSpaced;
  t.beginRender(H, e.id);
  t.setAttributeStyle("style", s);
  if (!(d)) goto L_1b9;
  this.renderYearDivider(i);
  t.beginRender(V, undefined);
  if (!(d)) goto L_23a;
  goto L_25e;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", bt.sectionImmediate);
  this.renderSection(e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=0 bc=752B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: t, G, bt, z, E, _
function {
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", bt.yearDivider);
  t.setAttributeString("accessibilityLabel", e);
  t.beginRender(z, undefined);
  t.setAttributeStyle("style", bt.yearDividerMark);
  t.endRender();
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", bt.yearDividerLabel);
  t.setAttributeString("value", e);
  t.endRender();
  t.beginRender(_, undefined);
  t.setAttributeStyle("style", bt.yearDividerMark);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t
// closure: this, e
function {
  return this.renderCard(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=405B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: this
// closure: t, q, bt, F
function {
  this = this;
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", bt.section);
  t.beginRender(F, undefined);
  t.setAttributeStyle("style", bt.sectionCards);
  e.cards.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=79B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t, r
// closure: this, e, o, lt
function {
  return this.renderCategory(e, t, r, o.categories.length, lt(o, t));   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=10 cpool=1 bc=1667B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o
// locals: r, i, n, this
// closure: lt, dt, t, U, bt, Q, W, J, j, Z
function {
  this = this;
  let n;
  let i;
  let r;
  if (!((undefined !== o.source.organizationId))) goto L_de;
  goto L_df;
  // [栈深重同步 1 -> 0]
  r = undefined;
  if (!((r == null))) goto L_eb;
  r;
  goto L_10c;
  if (!((undefined.name == null))) goto L_15e;
  undefined.name;
  if (!((o.source.organizationName == null))) goto L_15e;
  o.source.organizationName;
  i = "Health records";
  n = dt(o);
  t.beginRender(U, o.id);
  t.setAttributeStyle("style", bt.card);
  t.setAttributeString("accessibilityLabel", n);
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", bt.cardHeader);
  this.renderProviderBadge(r);
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", bt.headerTextColumn);
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", bt.sourceTitle);
  t.setAttributeString("value", i);
  t.endRender();
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", bt.sourceSubtitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.endRender();
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", bt.categories);
  o.categories.map(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=0 bc=966B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: o, this
// closure: t, K, bt, Y, X, $, Oe, Re
function {
  this = this;
  let o;
  if (!((e == null))) goto L_30;
  e;
  goto L_51;
  o = this.providerLogoAsset(undefined.logoBase64);
  if (!((undefined !== o))) goto L_1da;
  t.beginRender(K, undefined);
  t.setAttributeStyle("style", bt.providerBadge);
  t.beginRender(Y, undefined);
  t.setAttributeStyle("style", bt.providerLogoImage);
  t.setAttribute("src", o);
  t.endRender();
  t.endRender();
  return;
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", bt.providerBadge);
  t.beginRender($, undefined);
  t.setAttributeStyle("style", bt.providerFallbackIcon);
  t.setAttribute("src", Oe);
  t.setAttributeString("tint", Re.OAIColor.IconTertiary);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=105B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t, r
// locals: i
// closure: o, d, s, this, e
function {
  let i;
  if (((r < (o.rows.length - 1)))) goto L_3b;
  if (((undefined !== d))) goto L_3b;
  i = !s;
  this.renderRow(e, t, i);
  return;
}

// fn <atom:0>  args=5 vars=8 closure=11 cpool=1 bc=1430B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o, r, i, n
// locals: d, s, this
// closure: st, t, ee, bt, te, oe, ct, re, ie, ne, de
function {
  this = this;
  let s;
  let d;
  d = st(o);
  s = (r === (i - 1));
  t.beginRender(ee, o.key);
  t.setAttributeStyle("style", bt.category);
  if (!(n)) goto L_2f9;
  t.beginRender(te, undefined);
  t.setAttributeStyle("style", bt.categoryHeader);
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", ct(o.key));
  t.endRender();
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", bt.categoryLabel);
  t.setAttributeString("value", o.label);
  t.endRender();
  t.endRender();
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", bt.rows);
  o.rows.map(function <atom:0>);
  if (!((undefined !== d))) goto L_545;
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", bt.collapsedRow);
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", bt.collapsedLabel);
  t.setAttributeString("value", d);
  t.endRender();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=5 closure=8 cpool=0 bc=1433B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, o, r
// locals: i, this
// closure: t, se, bt, le, ae, ce, ye, ge
function {
  this = this;
  let i;
  if (!((undefined !== o.date))) goto L_72;
  i = (o.date !== e.title);
  t.beginRender(se, o.id);
  t.setAttributeStyle("style", bt.rowGroup);
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", bt.row);
  t.beginRender(ae, undefined);
  t.setAttributeStyle("style", bt.rowTextColumn);
  t.beginRender(ce, undefined);
  t.setAttributeStyle("style", bt.rowDisplay);
  t.setAttributeString("value", o.display);
  t.endRender();
  if (!(i)) goto L_3fc;
  t.beginRender(ye, undefined);
  t.setAttributeStyle("style", bt.rowDate);
  t.setAttributeString("value", o.date);
  t.endRender();
  t.endRender();
  if (((undefined !== o.value))) goto L_471;
  if (!((undefined !== o.unit))) goto L_49b;
  this.renderRowValue(o);
  t.endRender();
  if (!(r)) goto L_570;
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", bt.rowDivider);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=813B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: t, ue, bt, me, ve
function {
  t.beginRender(ue, undefined);
  t.setAttributeStyle("style", bt.rowValueGroup);
  if (!((undefined !== e.value))) goto L_1e5;
  t.beginRender(me, undefined);
  if (!(e.abnormal)) goto L_147;
  goto L_16b;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", bt.rowValue);
  t.setAttributeString("value", e.value);
  t.endRender();
  if (!((undefined !== e.unit))) goto L_304;
  t.beginRender(ve, undefined);
  t.setAttributeStyle("style", bt.rowUnit);
  t.setAttributeString("value", e.unit);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=702B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: t, he, bt, we, be
function {
  this = this;
  t.beginRender(he, undefined);
  t.setAttributeStyle("style", bt.loadMoreContainer);
  t.beginRender(we, undefined);
  t.setAttributeStyle("style", bt.loadMoreButton);
  t.setAttributeFunction("onTap", this.handleLoadMore);
  t.beginRender(be, undefined);
  t.setAttributeStyle("style", bt.loadMoreLabel);
  if (!(this.state.isLoadingMore)) goto L_23d;
  goto L_242;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", "Load more");
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=514B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t
// locals: o, e, r, this
// closure: yt, Ae, e
function {
  this = this;
  let o;
  o = yt(t);
  if (!((undefined !== o))) goto L_201;
  if (!(this.providerLogoAssets.has(o))) goto L_a7;
  return this.providerLogoAssets.get(o);   // tail call
  try { // catch -> L_12a
  let e;
  e = Ae.makeAssetFromUrl(o);
  this.providerLogoAssets.set(o, e);
  return e;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_200
  if (!(e.isLoggingEnabled)) goto L_1b1;
  console.warn("Failed to create Olympic records provider logo asset: ".concat(String(r)));
  this.providerLogoAssets.set(o, undefined);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=479B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: o
// closure: this, r, t, it, nt
function {
  let o;
  if ((this.isDestroyed())) goto L_52;
  if (!((r !== this.requestSequence))) goto L_55;
  return;
  if (!(("replace" === t))) goto L_82;
  goto L_e9;
  // [栈深重同步 1 -> 0]
  o = it(this.state.sections, e.sections);
  if (!((0 === o.length))) goto L_11c;
  goto L_121;
  // [栈深重同步 4 -> 3]
  null;
  this.state.organizationDetailsById;
  null;
  nt(e.organizationDetailsById);
  this.setState({state: "loaded", errorMessage: undefined, sections: o, nextLink: e.nextLink, isLoadingMore: false, organizationDetailsById: {}});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=369B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: i
// closure: o, this, r, t
function {
  let i;
  if (!((e instanceof Error))) goto L_30;
  goto L_37;
  // [栈深重同步 1 -> 0]
  i = String(e);
  o.renderFailure(i);
  if ((this.isDestroyed())) goto L_170;
  if (((r !== this.requestSequence))) goto L_170;
  null;
  this.state;
  if (!(("replace" === t))) goto L_116;
  goto L_159;
  // [栈深重同步 4 -> 3]
  this.setState({state: this.state.state, errorMessage: i, isLoadingMore: false});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=2 bc=452B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// locals: o, r, this
// closure: it, nt
function {
  this = this;
  let r;
  let o;
  if (!((this.context == null))) goto L_32;
  this.context;
  goto L_53;
  o = undefined.host;
  if (!((undefined === o))) goto L_5c;
  return;
  this.didStartHostLoad = true;
  this.requestSequence = (this.requestSequence ++);
  r = (this.requestSequence ++);
  null;
  this.state;
  if (!(("replace" === t))) goto L_f0;
  goto L_133;
  // [栈深重同步 4 -> 3]
  this.setState({state: this.state.state, errorMessage: undefined, isLoadingMore: ("append" === t)});
  this.loadTimelinePage(o, e).then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=87B file=olympic_records/src/OlympicRecordsTimelineComponent
// closure: this, xe
function {
  if ((this.isDestroyed())) goto L_56;
  this.loadTimelineFromHost(xe, "replace");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=216B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: this
// closure: xe
function {
  this = this;
  if ((this.didStartHostLoad)) goto L_d7;
  if (!((this.context == null))) goto L_56;
  this.context;
  goto L_77;
  if (((undefined === undefined.host))) goto L_d7;
  this.didStartHostLoad = true;
  Promise.resolve().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=0 bc=160B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// locals: o, r, this
// closure: Je, Fe, Ie
function {
  this = this;
  let r;
  let o;
  o = Je((await Fe(e, Ie, JSON.stringify({link: t}))));
  r = (await this.loadOrganizations(e, o.sections));
  null;
  o;
  return {organizationDetailsById: r}; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=68B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  return e.source.organizationId;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=72B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  return e.cards.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=293B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: o
// locals: e, r
// closure: rt, We, Fe, t, Le, e
function {
  try { // catch -> L_9e
  let e;
  e = rt(We((await Fe(t, Le, JSON.stringify({organization_id: o})))).organization);
  if (((undefined === e))) goto L_94;
  if (!((e.id !== o))) goto L_99;
  return undefined; // async
  return e; // async
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_124
  if (!(e.isLoggingEnabled)) goto L_120;
  console.warn("get_organization failed for ".concat(o), r);
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=2 bc=255B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: t, o
// locals: r, i, n, e
// closure: rt, We, Fe, Le, e, ht
function {
  let n;
  let i;
  let r;
  r = ht(o.flatMap(function <atom:0>));
  i = (await Promise.all(r.map(function <atom:0>)));
  n = new Map();
  let e;
  for (const e of i) {
    if (!((undefined !== e))) goto L_f4;
    n.set(e.id, e);
  }
  return n; // async
}

// fn Fe  args=3 vars=4 closure=2 cpool=0 bc=57B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t, o
// locals: r
// closure: gt, Ue
function {
  let r;
  r = gt((await e.callTool(t, o)));
  Ue(r, t);
  return r; // async
}

// fn Ue  args=2 vars=3 closure=1 cpool=0 bc=117B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// locals: o
// closure: Qe
function {
  let o;
  o = Qe(e);
  if (((true === e.isError))) goto L_35;
  if (!((undefined !== o))) goto L_74;
  if (!((o == null))) goto L_70;
  o;
  throw new Error("".concat(t, " returned an error response"));
  return;
}

// fn Qe  args=1 vars=4 closure=1 cpool=0 bc=500B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o, r
// closure: ut
function {
  let o;
  let t;
  t = e.error;
  if (!(("string" == typeof t))) goto L_88;
  if (!((t.trim().length > 0))) goto L_88;
  return t.trim();   // tail call
  o = e.content;
  if (!(Array.isArray(o))) goto L_1f3;
  let r;
  for (const r of o) {
    if (!(ut(r))) continue;
    if (!(("text" === r.type))) continue;
    if (!(("string" == typeof r.text))) continue;
    if (!((r.text.trim().length > 0))) continue;
    return r.text.trim();
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn We  args=1 vars=4 closure=1 cpool=0 bc=149B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o, r
// closure: ut
function {
  let r;
  let o;
  let t;
  t = e.structuredContent;
  if (!(ut(t))) goto L_37;
  return t;
  o = e.structured_content;
  if (!(ut(o))) goto L_65;
  return o;
  r = e.result;
  if (!(ut(r))) goto L_93;
  return r;
  return {};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=25B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: je
function {
  let t;
  t = je(e);
  if (!((undefined === t))) goto L_12;
  return [];
  return [t];
}

// fn Je  args=1 vars=2 closure=4 cpool=1 bc=417B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: je, We, ut, mt
function {
  let t;
  t = We(e).medicalResource;
  if (!(!ut(t))) goto L_3f;
  throw new Error("Timeline response did not include a medical resource.");
  if (!(("/records/timeline" !== t.route))) goto L_7a;
  throw new Error("Timeline response used an unexpected shape.");
  if ((!Array.isArray(t.sections))) goto L_f3;
  if (!(!ut(t.links))) goto L_104;
  throw new Error("Timeline response used an unexpected shape.");
  return {sections: t.sections.flatMap(function <atom:0>), nextLink: mt(t.links.next)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=25B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: Ze
function {
  let t;
  t = Ze(e);
  if (!((undefined === t))) goto L_12;
  return [];
  return [t];
}

// fn je  args=1 vars=3 closure=3 cpool=1 bc=355B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o
// closure: Ze, ut, mt
function {
  let o;
  let t;
  if (!(!ut(e))) goto L_d;
  return;
  t = e.id;
  o = e.title;
  if (!(("string" == typeof t))) goto L_161;
  if (!((0 !== t.length))) goto L_161;
  if (!(("string" == typeof o))) goto L_161;
  if (!((0 !== o.length))) goto L_161;
  if (!(Array.isArray(e.cards))) goto L_158;
  goto L_15b;
  // [栈深重同步 2 -> 1]
  return {id: t, title: o, date: mt(e.date), cards: []};
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=25B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: Ke
function {
  let t;
  t = Ke(e);
  if (!((undefined === t))) goto L_12;
  return [];
  return [t];
}

// fn Ze  args=1 vars=2 closure=5 cpool=1 bc=367B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: Ke, ut, mt, Xe, $e
function {
  let t;
  if (!(!ut(e))) goto L_a;
  return;
  t = e.id;
  if (!(("string" == typeof t))) goto L_16d;
  if (!((0 !== t.length))) goto L_16d;
  if (!(Array.isArray(e.categories))) goto L_164;
  goto L_167;
  // [栈深重同步 2 -> 1]
  return {id: t, sortDateTime: mt(e.sortDateTime), source: Xe(e.source), encounter: $e(e.encounter), categories: []};
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=25B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: Ye
function {
  let t;
  t = Ye(e);
  if (!((undefined === t))) goto L_12;
  return [];
  return [t];
}

// fn Ke  args=1 vars=3 closure=4 cpool=1 bc=341B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o
// closure: Ye, ut, ot, tt
function {
  let o;
  let t;
  if (!(!ut(e))) goto L_d;
  return;
  t = ot(e.key);
  o = e.label;
  if (!((undefined !== t))) goto L_153;
  if (!(("string" == typeof o))) goto L_153;
  if (!((0 !== o.length))) goto L_153;
  if (!(Array.isArray(e.rows))) goto L_121;
  goto L_124;
  // [栈深重同步 2 -> 1]
  return {key: t, label: o, rows: [], summary: tt(e.summary)};
  return undefined;
}

// fn Ye  args=1 vars=5 closure=5 cpool=0 bc=575B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o, r, i
// closure: ut, ot, mt, Xe, et
function {
  let i;
  let r;
  let o;
  let t;
  if (!(!ut(e))) goto L_13;
  return;
  t = e.id;
  o = e.resourceType;
  r = ot(e.category);
  i = e.display;
  if (!(("string" == typeof t))) goto L_23d;
  if (!((0 !== t.length))) goto L_23d;
  if (!(("string" == typeof o))) goto L_23d;
  if (!((0 !== o.length))) goto L_23d;
  if (!((undefined !== r))) goto L_23d;
  if (!(("string" == typeof i))) goto L_23d;
  if (!((0 !== i.length))) goto L_23d;
  if (!(ut(e.source))) goto L_20b;
  goto L_20c;
  // [栈深重同步 2 -> 1]
  return {id: t, resourceType: o, category: r, display: i, date: mt(e.date), value: mt(e.value), unit: mt(e.unit), abnormal: (true === e.abnormal), source: undefined, links: et(e.links)};
  return undefined;
}

// fn Xe  args=1 vars=1 closure=2 cpool=0 bc=91B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: ut, mt
function {
  if (!(ut(e))) goto L_59;
  return {organizationId: mt(e.organizationId), organizationName: mt(e.organizationName)};
  return {};
}

// fn $e  args=1 vars=2 closure=2 cpool=0 bc=247B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: ut, mt
function {
  let t;
  if (!(!ut(e))) goto L_a;
  return;
  t = e.id;
  if (!(("string" == typeof t))) goto L_f5;
  if (!((0 !== t.length))) goto L_f5;
  return {id: t, display: mt(e.display), type: mt(e.type), date: mt(e.date), location: mt(e.location)};
  return undefined;
}

// fn et  args=1 vars=1 closure=2 cpool=0 bc=103B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: ut, mt
function {
  if (!(ut(e))) goto L_5f;
  if (!((mt(e.self) == null))) goto L_30;
  mt(e.self);
  return {self: "", detail: mt(e.detail)};
  return {self: ""};
}

// fn tt  args=1 vars=3 closure=2 cpool=0 bc=123B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o
// closure: ut, vt
function {
  let o;
  let t;
  if (!(!ut(e))) goto L_d;
  return;
  t = vt(e.abnormalCount);
  o = vt(e.totalCount);
  if (((undefined !== t))) goto L_65;
  if (!((undefined !== o))) goto L_79;
  return {abnormalCount: t, totalCount: o};
  return undefined;
}

// fn ot  args=1 vars=1 closure=0 cpool=0 bc=122B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!((e === "allergies"))) goto L_10;
  return "allergies";
  if (!((e === "conditions"))) goto L_1f;
  return "conditions";
  if (!((e === "medications"))) goto L_2e;
  return "medications";
  if (!((e === "documents"))) goto L_3d;
  return "documents";
  if (!((e === "metrics"))) goto L_4c;
  return "metrics";
  if (!((e === "immunizations"))) goto L_5b;
  return "immunizations";
  if (!((e === "procedures"))) goto L_6a;
  return "procedures";
  if (!((e === "carePlans"))) goto L_79;
  return "carePlans";
  e;
  return;
}

// fn rt  args=1 vars=3 closure=2 cpool=0 bc=184B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o
// closure: ut, mt
function {
  let o;
  let t;
  if (!(!ut(e))) goto L_d;
  return;
  t = e.id;
  o = e.name;
  if (!(("string" == typeof t))) goto L_b6;
  if (!((0 !== t.length))) goto L_b6;
  if (!(("string" == typeof o))) goto L_b6;
  if (!((0 !== o.length))) goto L_b6;
  return {id: t, name: o, logoBase64: mt(e.logoBase64)};
  return undefined;
}

// fn it  args=2 vars=6 closure=0 cpool=0 bc=653B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
// locals: o, r, r#1, e#1
function {
  let o;
  o = new Map();
  let r;
  for (const r of e) {
    null;
    r;
    // append([], 0, r.cards)
    r.cards;
    o.set(r.id, {cards: []});
  }
  let r#1;
  for (const r#1 of t) {
    let e#1;
    e#1 = o.get(r#1.id);
    if (!((undefined !== e#1))) goto L_1b0;
    null;
    e#1;
    // append([], 0, e#1.cards)
    // append([], e#1.cards, r#1.cards)
    r#1.cards;
    goto L_233;
    // [栈深重同步 4 -> 3]
    null;
    r#1;
    // append([], 0, r#1.cards)
    r#1.cards;
    o.set(r#1.id, {cards: []});
  }
  return Array.from(o.values());   // tail call
}

// fn nt  args=1 vars=4 closure=0 cpool=0 bc=46B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o, r
function {
  let t;
  t = {};
  let r;
  let o;
  const _it1 = e;
  goto L_24;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  o = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  t[o] = r;
  if (!(<done(_it1)>)) goto L_f;
  <value(_it1)>;
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=12B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!((undefined !== e))) goto L_b;
  return (e.length > 0);
}

// fn dt  args=1 vars=2 closure=0 cpool=1 bc=330B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
function {
  let t;
  if (!((e.encounter == null))) goto L_2d;
  e.encounter;
  goto L_4e;
  if (!((undefined.display == null))) goto L_9e;
  undefined.display;
  if (!((e.encounter == null))) goto L_7d;
  e.encounter;
  goto L_9e;
  if (!((e.encounter == null))) goto L_c8;
  e.encounter;
  goto L_e9;
  t = [undefined.type, undefined.location].filter(function <atom:0>);
  if (!((0 === t.length))) goto L_11d;
  return undefined;
  return t.join(" � ");
}

// fn st  args=1 vars=3 closure=0 cpool=0 bc=392B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o
function {
  let o;
  let t;
  if (!((e.summary == null))) goto L_30;
  e.summary;
  goto L_51;
  if (!((undefined.totalCount == null))) goto L_79;
  undefined.totalCount;
  t = e.rows.length;
  o = Math.max((t - e.rows.length), 0);
  if (!(!(o <= 0))) goto L_187;
  if (!(("metrics" === e.key))) goto L_142;
  if (!((1 === o))) goto L_139;
  goto L_13e;
  // [栈深重同步 5 -> 4]
  return "View ".concat(o, " in-range result", "s");
  if (!((1 === o))) goto L_17e;
  goto L_183;
  // [栈深重同步 5 -> 4]
  return "View ".concat(o, " more ", "records");
  return;
}

// fn lt  args=2 vars=2 closure=0 cpool=0 bc=82B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e, t
function {
  if (((1 !== e.categories.length))) goto L_51;
  return ("metrics" !== t.key);
}

// fn at  args=1 vars=2 closure=0 cpool=4 bc=193B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
function {
  let t;
  if (!((e.date == null))) goto L_2d;
  e.date;
  goto L_60;
  if (!((undefined.match(new RegExp("^\\d{4}")) == null))) goto L_5e;
  undefined.match(new RegExp("^\\d{4}"));
  goto L_60;
  t = undefined[0];
  if (!((undefined !== t))) goto L_6c;
  return t;
  if (!((e.title.match(new RegExp("\\b\\d{4}\\b")) == null))) goto L_be;
  e.title.match(new RegExp("\\b\\d{4}\\b"));
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>[0];
}

// fn ct  args=1 vars=1 closure=1 cpool=0 bc=370B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// closure: bt
function {
  if (!((e === "allergies"))) goto L_2f;
  return bt.categoryAccentAllergies;
  if (!((e === "conditions"))) goto L_5d;
  return bt.categoryAccentConditions;
  if (!((e === "medications"))) goto L_8b;
  return bt.categoryAccentMedications;
  if (!((e === "documents"))) goto L_b9;
  return bt.categoryAccentDocuments;
  if (!((e === "metrics"))) goto L_e7;
  return bt.categoryAccentMetrics;
  if (!((e === "immunizations"))) goto L_115;
  return bt.categoryAccentImmunizations;
  if (!((e === "procedures"))) goto L_143;
  return bt.categoryAccentProcedures;
  if (!((e === "carePlans"))) goto L_171;
  return bt.categoryAccentCarePlans;
  e;
  return;
}

// fn yt  args=1 vars=1 closure=0 cpool=0 bc=101B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!((undefined !== e))) goto L_64;
  if (!((0 !== e.length))) goto L_64;
  if (!(e.startsWith("data:image/"))) goto L_39;
  return e;
  return "data:image/png;base64,".concat(e);
  return;
}

// fn gt  args=1 vars=2 closure=1 cpool=0 bc=73B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t
// closure: ut
function {
  let t;
  t = JSON.parse(e);
  if (!(!ut(t))) goto L_45;
  throw new Error("Host tool response was not a JSON object.");
  return t;
}

// fn ut  args=1 vars=1 closure=0 cpool=0 bc=63B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn mt  args=1 vars=1 closure=0 cpool=0 bc=20B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!(("string" == typeof e))) goto L_12;
  if (!((e.length > 0))) goto L_12;
  return e;
  return undefined;
}

// fn vt  args=1 vars=1 closure=0 cpool=0 bc=103B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
function {
  if (!(("number" == typeof e))) goto L_66;
  if (!(Number.isFinite(e))) goto L_66;
  if (!(!(e < 0))) goto L_66;
  return Math.floor(e);   // tail call
  return;
}

// fn ht  args=1 vars=4 closure=0 cpool=0 bc=186B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: e
// locals: t, o, r
function {
  let o;
  let t;
  t = [];
  o = new Set();
  let r;
  for (const r of e) {
    if (((undefined === r))) goto L_ac;
    if ((o.has(r))) goto L_ac;
    o.add(r);
    t.push(r);
  }
  return t;
}

// fn <atom:0>  args=3 vars=137 closure=0 cpool=60 bc=14281B file=olympic_records/src/OlympicRecordsTimelineComponent
// args: require, module, exports
// locals: e, t, o, r, i, n, d, s, l, a, c, y, g, u, m, v, h, w, b, p, S, R, k, A, f, C, x, I, L, P, T, N, O, D, B, M, H, V, G, z, E, _, q, F, U, Q, W, J, j, Z, K, Y, X, $, ee, te, oe, re, ie, ne, de, se, le, ae, ce, ye, ge, ue, me, ve, he, we, be, pe, Se, Re, ke, Ae, fe, Ce, xe, Ie, Le, Pe, Te, Ne, Oe, De, Be, Me, He, Ve, Ge, ze, Ee, _e, qe, OlympicRecordsTimelineErrorBoundary, <class_fields_init>, OlympicRecordsTimelineErrorBoundary#1, OlympicRecordsTimelineComponent, <class_fields_init>#1, OlympicRecordsTimelineComponent#1, Fe, Ue, Qe, We, Je, je, Ze, Ke, Ye, Xe, $e, et, tt, ot, rt, it, nt, dt, st, lt, at, ct, yt, gt, ut, mt, vt, ht, wt, bt, pt
function {
  Fe = function Fe;
  Ue = function Ue;
  Qe = function Qe;
  We = function We;
  Je = function Je;
  je = function je;
  Ze = function Ze;
  Ke = function Ke;
  Ye = function Ye;
  Xe = function Xe;
  $e = function $e;
  et = function et;
  tt = function tt;
  ot = function ot;
  rt = function rt;
  it = function it;
  nt = function nt;
  dt = function dt;
  st = function st;
  lt = function lt;
  at = function at;
  ct = function ct;
  yt = function yt;
  gt = function gt;
  ut = function ut;
  mt = function mt;
  vt = function vt;
  ht = function ht;
  let pt;
  let bt;
  let wt;
  let OlympicRecordsTimelineComponent#1;
  let OlympicRecordsTimelineErrorBoundary#1;
  let qe;
  let _e;
  let Ee;
  let ze;
  let Ge;
  let Ve;
  let He;
  let Me;
  let Be;
  let De;
  let Oe;
  let Ne;
  let Te;
  let Pe;
  let Le;
  let Ie;
  let xe;
  let Ce;
  let fe;
  let Ae;
  let ke;
  let Re;
  let Se;
  let pe;
  let be;
  let we;
  let he;
  let ve;
  let me;
  let ue;
  let ge;
  let ye;
  let ce;
  let ae;
  let le;
  let se;
  let de;
  let ne;
  let ie;
  let re;
  let oe;
  let te;
  let ee;
  let $;
  let X;
  let Y;
  let K;
  let Z;
  let j;
  let J;
  let W;
  let Q;
  let U;
  let F;
  let q;
  let _;
  let E;
  let z;
  let G;
  let V;
  let H;
  let M;
  let B;
  let D;
  let O;
  let N;
  let T;
  let P;
  let L;
  let I;
  let x;
  let C;
  let f;
  let A;
  let k;
  let R;
  let S;
  let p;
  let b;
  let w;
  let h;
  let v;
  let m;
  let u;
  let g;
  let y;
  let c;
  let a;
  let l;
  let s;
  let d;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OlympicRecordsTimelineComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("view", undefined, "N2bkAHv5nMUSM-Al");
  r = t.makeNodePrototype("label", undefined, "_cV8OGbK4CQIVmbI");
  i = t.makeComponentPrototype(undefined, "LQz0TxnV2emSJYZH");
  n = t.makeComponentPrototype(undefined, "sBf0QBb-OCtRogqi");
  d = t.makeNodePrototype("view", undefined, "6Pc5-x5IeelB_ZPN");
  s = t.makeNodePrototype("scroll", undefined, "Wv-GwSn0dnqpLBiL");
  l = t.makeNodePrototype("view", undefined, "F_V2t-AY0TCnrsY8");
  a = t.makeNodePrototype("view", undefined, "GZV1NaDSb1S4bhbM");
  c = t.makeNodePrototype("view", ["accessibilityLabel", "Loading records"], "Mi3mUIGp7H0uugSZ");
  y = t.makeNodePrototype("view", undefined, "Y0czAU1yxqwQeRHC");
  g = t.makeNodePrototype("view", undefined, "keAJR9iYIC6kSjzc");
  u = t.makeNodePrototype("view", undefined, "If31M9uNuRs0pl2m");
  m = t.makeNodePrototype("view", undefined, "fe1hemKcRzdIuJQH");
  v = t.makeNodePrototype("view", undefined, "hd72qwkXHULhJ7K6");
  h = t.makeNodePrototype("view", undefined, "_SpKcgGVki992CVU");
  w = t.makeNodePrototype("view", undefined, "e2TmD-LvFBc0ImLZ");
  b = t.makeNodePrototype("view", undefined, "4ChQfRGKx2SmSB0M");
  p = t.makeNodePrototype("view", undefined, "JFekGVpovInGh4Pt");
  S = t.makeNodePrototype("view", undefined, "bGpAh--z9Z2N0fvL");
  R = t.makeNodePrototype("view", undefined, "Q1w23zONT7xkOnJA");
  k = t.makeNodePrototype("view", undefined, "A8qAZQuIN_mT7_R3");
  A = t.makeNodePrototype("view", undefined, "Ke4LvOBsjsuJIcJ7");
  f = t.makeNodePrototype("view", undefined, "aEad9r32SSzKObkX");
  C = t.makeNodePrototype("view", undefined, "ZvEMKY9B-EKb7-PB");
  x = t.makeNodePrototype("view", undefined, "u7LQJO9XLViGossu");
  I = t.makeNodePrototype("view", undefined, "QN_m9StOBKsbgwgA");
  L = t.makeNodePrototype("view", undefined, "zxInGlRD7rQIdl4H");
  P = t.makeNodePrototype("view", undefined, "H2iPmqYm1oyav04Q");
  T = t.makeNodePrototype("view", undefined, "71k8FVin0kzdeVmN");
  N = t.makeNodePrototype("label", undefined, "UQlOGag_kz3kYU_3");
  O = t.makeNodePrototype("view", undefined, "msNXJlrO1Wr9YZZI");
  D = t.makeNodePrototype("label", ["value", "No records found"], "TVxaPZzn2iHym-U_");
  B = t.makeNodePrototype("label", ["value", "Connected records will appear here after sync."], "472-9Qp7RZuNp6la");
  M = t.makeNodePrototype("view", undefined, "KLa5qY16j0BLA2p8");
  H = t.makeNodePrototype("view", undefined, "mJNdJf6qbTMhkxb1");
  V = t.makeNodePrototype("view", undefined, "vBC2ODWj7ZD4cxjh");
  G = t.makeNodePrototype("view", undefined, "DT4VeEN4ep4ck7Xk");
  z = t.makeNodePrototype("view", undefined, "8Rt5zbKrGzvwkn7s");
  E = t.makeNodePrototype("label", undefined, "mpAHb9sBvstjh9gp");
  _ = t.makeNodePrototype("view", undefined, "uVTvDmbjQMOS9cUT");
  q = t.makeNodePrototype("view", undefined, "GAiqvZdEvBrvyeXv");
  F = t.makeNodePrototype("view", undefined, "RD_F-KwvDzK-ThSf");
  U = t.makeNodePrototype("view", undefined, "_hOU17lq46VHKiSj");
  Q = t.makeNodePrototype("view", undefined, "d3JqnMBxMlHL2Aaq");
  W = t.makeNodePrototype("view", undefined, "5_toFobRCT6dTIyk");
  J = t.makeNodePrototype("label", undefined, "eWVWxEEJwQi1RD9g");
  j = t.makeNodePrototype("label", undefined, "26STMSwf3lfoM1PF");
  Z = t.makeNodePrototype("view", undefined, "3IXGkJC3gt_TsUuq");
  K = t.makeNodePrototype("view", undefined, "pQeyr2trSZ93SJVS");
  Y = t.makeNodePrototype("image", ["objectFit", "contain"], "jwRiwVwCEiwSEemG");
  X = t.makeNodePrototype("view", undefined, "kMDuGQoYGv5GcoEd");
  $ = t.makeNodePrototype("image", ["objectFit", "contain"], "lFGGA-STtlNMlXIA");
  ee = t.makeNodePrototype("view", undefined, "vkZXKb9LhWUUlt8e");
  te = t.makeNodePrototype("view", undefined, "P2daBgQSfWQ_SmZA");
  oe = t.makeNodePrototype("view", undefined, "ZE0wNMdVbnrOym8_");
  re = t.makeNodePrototype("label", undefined, "BclLehIW_SDwTNof");
  ie = t.makeNodePrototype("view", undefined, "5UCKN43AJYcO7g5K");
  ne = t.makeNodePrototype("view", undefined, "q6aT4JsiPiPr6q5X");
  de = t.makeNodePrototype("label", undefined, "36KSE-dTeX3cp7-4");
  se = t.makeNodePrototype("view", undefined, "TbDtDCfFQGPrVEgy");
  le = t.makeNodePrototype("view", undefined, "M4-PsNn7RmpILwO4");
  ae = t.makeNodePrototype("view", undefined, "n7seO91qohN11LJt");
  ce = t.makeNodePrototype("label", undefined, "sSTHWnl_gVuGASCA");
  ye = t.makeNodePrototype("label", undefined, "1O4t_g6Ta52LVNax");
  ge = t.makeNodePrototype("view", undefined, "WxGp5hgCM3UE7QNZ");
  ue = t.makeNodePrototype("view", undefined, "VAGipM2cASi4ShTj");
  me = t.makeNodePrototype("label", undefined, "y8gi3ByUY7XntQ3s");
  ve = t.makeNodePrototype("label", undefined, "9Xb0olyBZw-nvws1");
  he = t.makeNodePrototype("view", undefined, "tiT7Q-0nGhyoRyiQ");
  we = t.makeNodePrototype("view", ["accessibilityCategory", "button", "accessibilityLabel", "Load more"], "3PpwTvRi1lWORlUs");
  be = t.makeNodePrototype("label", undefined, "xSrlzhFU8UMlcA_H");
  pe = require("dil_icon_assets/res");
  Se = require("oai_core/src/OAITheme");
  Re = require("oai_core/src/OAITokens");
  ke = require("olympic_analytics/src/OlympicNavigationAnalytics");
  Ae = require("valdi_core/src/Asset");
  fe = require("valdi_core/src/Component");
  Ce = require("valdi_core/src/Style");
  xe = "/records/timeline?pageSize=8";
  Ie = "open_medical_resource";
  Le = "get_organization";
  Pe = 3;
  Te = 220;
  Ne = Re.OAIColor.Transparent;
  Oe = pe.default.buildingWorkspace;
  De = "system 15 subheadline";
  Be = "system-medium 17 body";
  Me = "system-medium 15 subheadline";
  He = "system 11 caption2";
  Ve = 20;
  Ge = 20;
  ze = 13;
  Ee = -0.24;
  _e = -0.44;
  qe = 0;
  let OlympicRecordsTimelineErrorBoundary;
  let <class_fields_init>;
  class OlympicRecordsTimelineErrorBoundary extends fe.StatefulComponent { ... }
  <proto:OlympicRecordsTimelineErrorBoundary>.onRender = function <atom:0>;
  <proto:OlympicRecordsTimelineErrorBoundary>.onError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OlympicRecordsTimelineErrorBoundary>;
  OlympicRecordsTimelineErrorBoundary = function <atom:0>;
  // close_loc <class_fields_init>
  OlympicRecordsTimelineErrorBoundary#1 = function <atom:0>;
  let OlympicRecordsTimelineComponent;
  let <class_fields_init>#1;
  class OlympicRecordsTimelineComponent extends fe.StatefulComponent { ... }
  <proto:OlympicRecordsTimelineComponent>.onCreate = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.onViewModelUpdate = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.onRender = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderBody = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderLoadingState = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderSkeletonCard = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderSkeletonCategory = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderSkeletonRow = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderErrorState = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderErrorMessage = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderEmptyState = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderLoadedState = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderSectionGroup = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderYearDivider = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderSection = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderCard = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderProviderBadge = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderCategory = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderRow = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderRowValue = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.renderLoadMoreButton = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.providerLogoAsset = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.loadTimelineFromHost = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.scheduleHostLoad = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.loadTimelinePage = function <atom:0>;
  <proto:OlympicRecordsTimelineComponent>.loadOrganizations = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OlympicRecordsTimelineComponent>;
  OlympicRecordsTimelineComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  OlympicRecordsTimelineComponent#1 = function <atom:0>;
  exports.OlympicRecordsTimelineComponent = OlympicRecordsTimelineComponent#1;
  wt = new Ce.Style({borderRadius: 4, flexShrink: 0, height: 8, width: 8});
  bt = {root: new Ce.Style({backgroundColor: Ne, height: "100%", width: "100%"}), scroll: new Ce.Style({backgroundColor: Ne, height: "100%", width: "100%"}), content: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 24, paddingBottom: 0, paddingLeft: 16, paddingRight: 16, paddingTop: 24, width: "100%"}), bottomSpacer: new Ce.Style({flexShrink: 0, height: Te, width: "100%"}), sections: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), sectionGroup: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), sectionGroupSpaced: new Ce.Style({alignItems: "stretch", flexDirection: "column", marginTop: 16, width: "100%"}), sectionGroupWithYearDivider: new Ce.Style({alignItems: "stretch", flexDirection: "column", marginTop: 6, width: "100%"}), sectionAfterYearDivider: new Ce.Style({marginTop: 6, width: "100%"}), sectionImmediate: new Ce.Style({width: "100%"}), section: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), yearDivider: new Ce.Style({alignItems: "center", flexDirection: "column", gap: 6, width: "100%"}), yearDividerMark: new Ce.Style({backgroundColor: Re.OAIColor.BorderDefault, borderRadius: 1, height: 12, width: 2}), yearDividerLabel: new Ce.Style({color: Re.OAIColor.TextSecondary, font: "system-semibold 15"}), sectionCards: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 16, width: "100%"}), card: new Ce.Style({alignItems: "stretch", backgroundColor: Re.OAIColor.BgElevatedPrimary, borderColor: Re.OAIColor.BorderLight, borderRadius: 20, borderWidth: 1, flexDirection: "column", paddingBottom: 8, paddingLeft: 20, paddingRight: 20, paddingTop: 20, width: "100%"}), cardHeader: new Ce.Style({alignItems: "center", flexDirection: "row", gap: 8, width: "100%"}), providerBadge: new Ce.Style({alignItems: "center", backgroundColor: Re.OAIColor.BgElevatedPrimary, borderColor: Re.OAIColor.BorderLight, borderRadius: 22, borderWidth: 1, flexShrink: 0, height: 44, justifyContent: "center", width: 44}), providerLogoImage: new Ce.Style({height: 28, width: 28}), providerFallbackIcon: new Ce.Style({height: 18, width: 18}), headerTextColumn: new Ce.Style({alignItems: "stretch", flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: 0, marginTop: 2, minWidth: 0}), sourceTitle: new Ce.Style({color: Re.OAIColor.TextPrimary, font: Be, letterSpacing: _e, lineHeight: Ge, textOverflow: "ellipsis"}), sourceSubtitle: new Ce.Style({color: Re.OAIColor.TextSecondary, font: He, letterSpacing: 0, lineHeight: ze, textOverflow: "ellipsis"}), categories: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 16, marginTop: 14, width: "100%"}), category: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 2, width: "100%"}), categoryHeader: new Ce.Style({alignItems: "center", flexDirection: "row", gap: 8, width: "100%"}), categoryLabel: new Ce.Style({color: Re.OAIColor.TextPrimary, font: "system-semibold 16", textOverflow: "ellipsis"}), categoryAccentAllergies: wt.extend({backgroundColor: "#769AD1"}), categoryAccentConditions: wt.extend({backgroundColor: "#6F86B6"}), categoryAccentMedications: wt.extend({backgroundColor: "#737373"}), categoryAccentDocuments: wt.extend({backgroundColor: "#A3A3A3"}), categoryAccentMetrics: wt.extend({backgroundColor: "#F37B2D"}), categoryAccentImmunizations: wt.extend({backgroundColor: "#B58A2B"}), categoryAccentProcedures: wt.extend({backgroundColor: "#5A6F9E"}), categoryAccentCarePlans: wt.extend({backgroundColor: "#58908F"}), rows: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), rowGroup: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), row: new Ce.Style({alignItems: "center", flexDirection: "row", gap: 16, minHeight: 42, paddingBottom: 5, paddingTop: 5, width: "100%"}), rowDivider: new Ce.Style({backgroundColor: Re.OAIColor.BorderLight, height: 1, width: "100%"}), rowTextColumn: new Ce.Style({alignItems: "stretch", flexDirection: "column", flexGrow: 1, flexShrink: 1, minWidth: 0}), rowDisplay: new Ce.Style({color: Re.OAIColor.TextSecondary, font: De, letterSpacing: Ee, lineHeight: Ve, textOverflow: "ellipsis"}), rowDate: new Ce.Style({color: Re.OAIColor.TextSecondary, font: "system 13", textOverflow: "ellipsis"}), rowValueGroup: new Ce.Style({alignItems: "center", flexDirection: "row", flexShrink: 1, gap: 2, justifyContent: "flex-end", maxWidth: "45%", minWidth: 0}), rowValue: new Ce.Style({color: Re.OAIColor.TextPrimary, font: Me, letterSpacing: Ee, lineHeight: Ve, textOverflow: "ellipsis"}), rowValueAbnormal: new Ce.Style({color: Re.OAIColor.TextStatusError, font: Me, letterSpacing: Ee, lineHeight: Ve, textOverflow: "ellipsis"}), rowUnit: new Ce.Style({color: Re.OAIColor.TextTertiary, font: De, letterSpacing: Ee, lineHeight: Ve, textOverflow: "ellipsis"}), collapsedRow: new Ce.Style({paddingBottom: 10, paddingTop: 10, width: "100%"}), collapsedLabel: new Ce.Style({color: Re.OAIColor.TextSecondary, font: "system 14"}), loadMoreContainer: new Ce.Style({alignItems: "center", justifyContent: "center", paddingBottom: 4, width: "100%"}), loadMoreButton: new Ce.Style({alignItems: "center", backgroundColor: Re.OAIColor.BgElevatedPrimary, borderColor: Re.OAIColor.BorderDefault, borderRadius: 24, borderWidth: 1, justifyContent: "center", minHeight: 42, paddingLeft: 20, paddingRight: 20}), loadMoreLabel: new Ce.Style({color: Re.OAIColor.TextPrimary, font: "system-semibold 14"}), emptyCard: new Ce.Style({alignItems: "center", backgroundColor: Re.OAIColor.BgElevatedPrimary, borderColor: Re.OAIColor.BorderDefault, borderRadius: 20, borderWidth: 1, flexDirection: "column", justifyContent: "center", minHeight: 160, paddingLeft: 20, paddingRight: 20, width: "100%"}), emptyTitle: new Ce.Style({color: Re.OAIColor.TextPrimary, font: "system-semibold 16"}), emptySubtitle: new Ce.Style({color: Re.OAIColor.TextSecondary, font: "system 14"}), skeletonList: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 16, width: "100%"}), skeletonBadge: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 24, height: 48, width: 48}), skeletonTitle: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "58%"}), skeletonSubtitle: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 7, height: 14, width: "42%"}), skeletonCategories: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 16, marginTop: 24, width: "100%"}), skeletonCategory: new Ce.Style({alignItems: "stretch", flexDirection: "column", gap: 8, width: "100%"}), skeletonCategoryHeader: new Ce.Style({alignItems: "center", flexDirection: "row", gap: 8, width: "100%"}), skeletonCategoryDot: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 4, flexShrink: 0, height: 8, width: 8}), skeletonCategoryLabel: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: 112}), skeletonRows: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), skeletonRowGroup: new Ce.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), skeletonRow: new Ce.Style({alignItems: "center", flexDirection: "row", gap: 16, minHeight: 48, paddingBottom: 8, paddingTop: 8, width: "100%"}), skeletonRowTextColumn: new Ce.Style({alignItems: "stretch", flexDirection: "column", flexGrow: 1, flexShrink: 1, minWidth: 0}), skeletonRowLine72: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "72%"}), skeletonRowLine66: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "66%"}), skeletonRowLine60: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "60%"}), skeletonRowLine54: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "54%"}), skeletonRowLine48: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "48%"}), skeletonRowLine78: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "78%"}), skeletonDetailLine: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 6, height: 12, marginTop: 8, width: 96}), skeletonValueLine: new Ce.Style({backgroundColor: Re.OAIColor.BgTertiary, borderRadius: 8, flexShrink: 0, height: 16, width: 64}), errorMessageContainer: new Ce.Style({alignItems: "center", backgroundColor: Re.OAIColor.BgStatusError, borderColor: Re.OAIColor.BorderStatusError, borderRadius: 20, borderWidth: 1, justifyContent: "center", minHeight: 90, paddingLeft: 16, paddingRight: 16, width: "100%"}), errorMessageText: new Ce.Style({color: Re.OAIColor.TextStatusError, font: "system 14"})};
  pt = [[{rows: [{lineStyle: bt.skeletonRowLine72}, {lineStyle: bt.skeletonRowLine54, detailLineStyle: bt.skeletonDetailLine}]}, {rows: [{lineStyle: bt.skeletonRowLine60, showValue: true}]}], [{rows: [{lineStyle: bt.skeletonRowLine66}]}, {rows: [{lineStyle: bt.skeletonRowLine78}, {lineStyle: bt.skeletonRowLine48}]}], [{rows: [{lineStyle: bt.skeletonRowLine72}, {lineStyle: bt.skeletonRowLine54, detailLineStyle: bt.skeletonDetailLine}]}, {rows: [{lineStyle: bt.skeletonRowLine60, showValue: true}]}]];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=olympic_records/src/OlympicRecordsTimelineComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
