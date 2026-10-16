// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=62B file=olympic_connections/src/OlympicConnectionsComponent
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

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=560B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: t, o, Oe, n
function {
  this = this;
  if (!((undefined !== this.state.message))) goto L_207;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", Oe.errorMessageContainer);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", Oe.errorMessageText);
  t.setAttributeString("value", this.state.message);
  t.endRender();
  t.endRender();
  return;
  t.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=300B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, this
// closure: Ie
function {
  this = this;
  let t;
  t = e.message;
  Ie(this.viewModel.host, this.viewModel.actionHandler, t);
  if (!((undefined === this.state.message))) goto L_12b;
  this.setState({message: t});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this, W
function {
  this.addConnector(W);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=191B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this, this.active_func, new.target, arguments
// closure: W, <class_fields_init>, F
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
  this.state = {state: "loading", rows: []};
  this.requestSequence = 0;
  this.didStartHostLoad = false;
  this.viewSessionId = F.createOlympicViewSessionId();
  this.providerLogoAssets = new Map();
  this.handleAddDefaultConnector = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=199B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: F
function {
  this = this;
  if (!((this.context == null))) goto L_50;
  this.context;
  goto L_71;
  F.trackOlympicNavigationPageViewed(undefined.host, "connections", "connections", this.viewSessionId);
  this.loadFromHost();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=439B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: ve
function {
  this = this;
  if (!((this.context == null))) goto L_2d;
  this.context;
  goto L_4e;
  if (!((undefined === undefined.host))) goto L_191;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  this.scheduleHostLoad();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=647B file=olympic_connections/src/OlympicConnectionsComponent
// closure: t, d, Oe, s, a, U, this
function {
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", Oe.root);
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", Oe.scroll);
  t.beginRender(a, undefined);
  if (!(U.Device.isIOS())) goto L_1bf;
  goto L_1e3;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", Oe.content);
  this.renderList();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=374B file=olympic_connections/src/OlympicConnectionsComponent
// closure: t, d, Oe, s, a, U, this, OlympicConnectionsErrorBoundary, r
function {
  t.beginComponent(OlympicConnectionsErrorBoundary, r, undefined, undefined);
  if (!((this.context == null))) goto L_85;
  this.context;
  goto L_a6;
  t.setViewModelProperty("host", undefined.host);
  if (!((this.context == null))) goto L_ff;
  this.context;
  goto L_120;
  t.setViewModelProperty("actionHandler", undefined.actionHandler);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=1 bc=317B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: t, d, Oe, s, a, U, OlympicConnectionsErrorBoundary, r, E, i
function {
  this = this;
  this.scheduleHostLoad();
  t.beginComponent(E.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("mode", E.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=243B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: t, c, Oe
function {
  this = this;
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", Oe.list);
  this.renderAddConnectionRow();
  this.renderBody();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=528B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: Ie
function {
  this = this;
  if (!((this.state.state === "loading"))) goto L_75;
  this.renderLoadingRows();
  this.state.state;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "error"))) goto L_a5;
  this.renderErrorState();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "empty"))) goto L_af;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "loaded"))) goto L_df;
  this.renderLoadedRows();
  return;
  // [栈深重同步 0 -> 1]
  if (!((this.context == null))) goto L_10a;
  this.context;
  goto L_12b;
  if (!((this.context == null))) goto L_155;
  this.context;
  goto L_176;
  Ie(undefined.host, undefined.actionHandler, "Unsupported Olympic connections state: ".concat(this.state.state));
  this.renderErrorMessage("Failed to list account connections");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=38B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
// closure: this
function {
  return this.renderSkeletonRow(t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=254B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: t, l, Oe
function {
  this = this;
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", Oe.skeletonList);
  Array.from({length: 2}).map(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=0 bc=866B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: t, g, Oe, u, h, y, p
function {
  t.beginRender(g, "skeleton-".concat(e));
  t.setAttributeStyle("style", Oe.row);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", Oe.skeletonBadge);
  t.endRender();
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", Oe.textColumn);
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", Oe.skeletonTitle);
  t.endRender();
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", Oe.skeletonSubtitle);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=45B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
function {
  this = this;
  this.renderErrorMessage("Failed to list account connections");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=376B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: t, v, Oe, m
function {
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", Oe.errorMessageContainer);
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", Oe.errorMessageText);
  t.setAttributeString("value", e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: this
function {
  return this.renderConnectionRow(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=108B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
function {
  this = this;
  this.state.rows.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=1002B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
// closure: t, b, Oe, oe, w, S, A, C
function {
  this = this;
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", Oe.addRow);
  t.setAttributeString("accessibilityLabel", oe);
  t.setAttributeFunction("onTap", this.handleAddDefaultConnector);
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", Oe.addBadge);
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", Oe.addBadgePlusHorizontal);
  t.endRender();
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", Oe.addBadgePlusVertical);
  t.endRender();
  t.endRender();
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", Oe.addRowLabel);
  t.setAttributeString("value", oe);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=0 bc=1358B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: o, this
// closure: Ce, t, f, Oe, R, I, k
function {
  this = this;
  let o;
  o = Ce(e, this.state.pendingConnectionID, this.state.pendingActionKind, this.state.actionErrorConnectionID);
  t.beginRender(f, e.id);
  t.setAttributeStyle("style", Oe.row);
  this.renderProviderBadge(e);
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", Oe.textColumn);
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", Oe.rowTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  if (!((undefined !== o))) goto L_3ea;
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", Oe.rowSubtitle);
  t.setAttributeString("value", o);
  t.endRender();
  t.endRender();
  if (!(("account" === e.kind))) goto L_465;
  this.renderEllipsisButton(e);
  t.endRender();
  if (!(("account" === e.kind))) goto L_54d;
  if (!((this.state.openActionConnectionID === e.id))) goto L_54d;
  this.renderActionPanel(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=0 bc=1514B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: o, this
// closure: t, D, Oe, P, J, x, N, O, T, z
function {
  this = this;
  let o;
  if (!(("appleHealth" === e.kind))) goto L_1ef;
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", Oe.appleHealthBadge);
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", Oe.appleHealthIcon);
  t.setAttribute("src", J.default.appleHealth);
  t.endRender();
  t.endRender();
  return;
  o = this.providerLogoAsset(e.providerLogoBase64);
  if (!((undefined !== o))) goto L_3bc;
  t.beginRender(x, undefined);
  t.setAttributeStyle("style", Oe.providerBadge);
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", Oe.providerLogoImage);
  t.setAttribute("src", o);
  t.endRender();
  t.endRender();
  return;
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", Oe.providerBadge);
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", Oe.providerFallbackIcon);
  t.setAttribute("src", J.default.building);
  t.setAttributeString("tint", z.OAIColor.IconTertiary);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this, e
function {
  return this.toggleActionPanel(e.id);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=olympic_connections/src/OlympicConnectionsComponent
// args: t
// closure: this, e
function {
  return this.handleMenuAction(e, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=2 bc=499B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: this
// closure: t, _, L, fe, z
function {
  this = this;
  t.beginComponent(_.NativeMenuButton, L, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", "More actions for ".concat(e.title));
  t.setViewModelProperty("actions", fe(e));
  t.setViewModelProperty("foregroundColor", z.OAIColor.IconPrimary);
  t.setViewModelProperty("onFallbackTap", function <atom:0>);
  t.setViewModelProperty("onSelect", function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=3 cpool=0 bc=514B file=olympic_connections/src/OlympicConnectionsComponent
// args: t
// locals: o, e, n, this
// closure: he, q, e
function {
  this = this;
  let o;
  o = he(t);
  if (!((undefined !== o))) goto L_201;
  if (!(this.providerLogoAssets.has(o))) goto L_a7;
  return this.providerLogoAssets.get(o);   // tail call
  try { // catch -> L_12a
  let e;
  e = q.makeAssetFromUrl(o);
  this.providerLogoAssets.set(o, e);
  return e;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_200
  if (!(e.isLoggingEnabled)) goto L_1b1;
  console.warn("Failed to create Olympic provider logo asset: ".concat(String(n)));
  this.providerLogoAssets.set(o, undefined);
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this, e
function {
  return this.handleReconnect(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this, e
function {
  return this.handleSync(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this, e
function {
  return this.handleRemove(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=3 bc=426B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: this
// closure: t, B, Oe
function {
  this = this;
  t.beginRender(B, "".concat(e.id, "-actions"));
  t.setAttributeStyle("style", Oe.actionPanel);
  if (!(("expired" === e.connectionState))) goto L_124;
  goto L_152;
  // [栈深重同步 1 -> 0]
  this.renderPanelAction("Sync now", function <atom:0>, false);
  this.renderPanelAction("Remove account", function <atom:0>, true);
  t.endRender();
  return;
}

// fn <atom:0>  args=3 vars=3 closure=4 cpool=0 bc=509B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, o, n
// closure: t, H, Oe, M
function {
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", Oe.panelAction);
  t.setAttributeString("accessibilityLabel", e);
  t.setAttributeFunction("onTap", o);
  t.beginRender(M, undefined);
  if (!(n)) goto L_157;
  goto L_17b;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", Oe.panelActionLabel);
  t.setAttributeString("value", e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=160B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: this
function {
  this = this;
  null;
  this.state;
  if (!((this.state.openActionConnectionID === e))) goto L_96;
  goto L_97;
  // [栈深重同步 4 -> 3]
  this.setState({openActionConnectionID: e});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=150B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
// locals: this
function {
  this = this;
  if (!(("sync" !== t))) goto L_6f;
  if (!(("delete" !== t))) goto L_47;
  if (!(("reconnect" === t))) goto L_95;
  goto L_95;
  // [栈深重同步 1 -> 0]
  goto L_95;
  // [栈深重同步 1 -> 0]
  this.handleSync(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=292B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, this
// closure: Q
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.host;
  if (!((undefined !== t))) goto L_ac;
  goto L_123;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_d6;
  this.context;
  goto L_123;
  if (!((undefined.actionHandler == null))) goto L_ff;
  undefined.actionHandler;
  goto L_123;
  undefined.refresh();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=327B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, this
// closure: Y
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.host;
  if (!((undefined !== t))) goto L_ad;
  goto L_146;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_d7;
  this.context;
  goto L_146;
  if (!((undefined.actionHandler == null))) goto L_100;
  undefined.actionHandler;
  goto L_146;
  undefined.disconnect(e.id);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=329B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.host;
  if (!((undefined !== t))) goto L_af;
  if (!((undefined !== e.organizationId))) goto L_148;
  goto L_148;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_d9;
  this.context;
  goto L_148;
  if (!((undefined.actionHandler == null))) goto L_102;
  undefined.actionHandler;
  goto L_148;
  undefined.addConnector(e.connectorID);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=368B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, this
// closure: K, G
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  t = undefined.host;
  if (!((undefined !== t))) goto L_f7;
  if (!((e !== K))) goto L_cd;
  if (!((e !== G))) goto L_cd;
  goto L_16f;
  // [栈深重同步 1 -> 0]
  goto L_16f;
  // [栈深重同步 1 -> 0]
  if (!((this.context == null))) goto L_121;
  this.context;
  goto L_16f;
  if (!((undefined.actionHandler == null))) goto L_14a;
  undefined.actionHandler;
  goto L_16f;
  undefined.addConnector(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=184B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_b7;
  if (((t !== this.requestSequence))) goto L_b7;
  if (!((0 === e.length))) goto L_86;
  goto L_8b;
  // [栈深重同步 4 -> 3]
  this.setState({state: "loaded", errorMessage: undefined, rows: e, openActionConnectionID: undefined, pendingConnectionID: undefined, pendingActionKind: undefined, actionErrorConnectionID: undefined});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=315B file=olympic_connections/src/OlympicConnectionsComponent
// args: o
// locals: n
// closure: Ie, e, this, t
function {
  let n;
  if (!((o instanceof Error))) goto L_30;
  goto L_37;
  // [栈深重同步 1 -> 0]
  n = String(o);
  if (!((this.context == null))) goto L_66;
  this.context;
  goto L_87;
  Ie(e, undefined.actionHandler, n);
  if ((this.isDestroyed())) goto L_13a;
  if (((t !== this.requestSequence))) goto L_13a;
  this.setState({state: "error", errorMessage: n, rows: [], openActionConnectionID: undefined, pendingConnectionID: undefined, pendingActionKind: undefined, actionErrorConnectionID: undefined});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=2 bc=385B file=olympic_connections/src/OlympicConnectionsComponent
// locals: e, t, this
// closure: Ie
function {
  this = this;
  let t;
  let e;
  if (!((this.context == null))) goto L_32;
  this.context;
  goto L_53;
  e = undefined.host;
  if (!((undefined === e))) goto L_5c;
  return;
  this.didStartHostLoad = true;
  this.requestSequence = (this.requestSequence ++);
  t = (this.requestSequence ++);
  null;
  this.state;
  this.setState({state: "loading", errorMessage: undefined, openActionConnectionID: undefined, pendingConnectionID: undefined, pendingActionKind: undefined, actionErrorConnectionID: undefined});
  this.loadRows(e).then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=79B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this
function {
  if ((this.isDestroyed())) goto L_4e;
  this.loadFromHost();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=216B file=olympic_connections/src/OlympicConnectionsComponent
// locals: this
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

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: be, r
function {
  return be(e, r);   // tail call
}

// fn <atom:0>  args=1 vars=8 closure=9 cpool=1 bc=373B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, n, i, r, d, this
// closure: be, se, X, de, $, ge, le, ye, me
function {
  this = this;
  let d;
  let r;
  let i;
  let n;
  let o;
  let t;
  if (((undefined === undefined))) goto L_26;
  const _it1 = undefined;
  <done(_it1)>;
  t = <value(_it1)>;
  <done(_it1)>;
  o = <value(_it1)>;
  goto L_68;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  n = ge(le(t).accountConnections);
  i = ye(le(o).appleHealthConnectorStatus);
  r = (await this.loadOrganizations(e, n));
  d = n.map(function <atom:0>);
  if (!(i.connected)) goto L_170;
  d.push(me(i));
  return d; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  return e.organizationId;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=293B file=olympic_connections/src/OlympicConnectionsComponent
// args: o
// locals: e, n
// closure: ue, le, se, t, Z, e
function {
  try { // catch -> L_9e
  let e;
  e = ue(le((await se(t, Z, JSON.stringify({organization_id: o})))).organization);
  if (((undefined === e))) goto L_94;
  if (!((e.id !== o))) goto L_99;
  return undefined; // async
  return e; // async
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_124
  if (!(e.isLoggingEnabled)) goto L_120;
  console.warn("get_organization failed for ".concat(o), n);
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=6 closure=6 cpool=2 bc=255B file=olympic_connections/src/OlympicConnectionsComponent
// args: t, o
// locals: n, i, r, e
// closure: ue, le, se, Z, e, Ne
function {
  let r;
  let i;
  let n;
  n = Ne(o.map(function <atom:0>));
  i = (await Promise.all(n.map(function <atom:0>)));
  r = new Map();
  let e;
  for (const e of i) {
    if (!((undefined !== e))) goto L_f4;
    r.set(e.id, e);
  }
  return r; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=79B file=olympic_connections/src/OlympicConnectionsComponent
// closure: this
function {
  if ((this.isDestroyed())) goto L_4e;
  this.loadFromHost();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=291B file=olympic_connections/src/OlympicConnectionsComponent
// args: t
// locals: n
// closure: Ie, e, this, o
function {
  let n;
  if (!((t instanceof Error))) goto L_30;
  goto L_37;
  // [栈深重同步 1 -> 0]
  n = String(t);
  if (!((this.context == null))) goto L_64;
  this.context;
  goto L_85;
  Ie(e, undefined.actionHandler, n);
  if ((this.isDestroyed())) goto L_122;
  null;
  this.state;
  this.setState({state: "loaded", openActionConnectionID: undefined, pendingConnectionID: undefined, pendingActionKind: undefined, actionErrorConnectionID: o});
  return;
}

// fn <atom:0>  args=4 vars=5 closure=2 cpool=2 bc=309B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t, o, n
// locals: this
// closure: Ie, se
function {
  this = this;
  if (!((undefined === this.state.pendingConnectionID))) goto L_134;
  null;
  this.state;
  this.setState({openActionConnectionID: undefined, pendingConnectionID: o, pendingActionKind: n, actionErrorConnectionID: undefined});
  se(e, t, JSON.stringify({connection_id: o})).then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=204B file=olympic_connections/src/OlympicConnectionsComponent
// args: t
// locals: o
// closure: pe, le, e, this
function {
  let o;
  o = pe(le(t));
  if (!((undefined !== o.authUrl))) goto L_7c;
  e.openExternal(o.authUrl);
  if ((this.isDestroyed())) goto L_cb;
  this.loadFromHost();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=321B file=olympic_connections/src/OlympicConnectionsComponent
// args: o
// locals: n
// closure: Ie, e, this, t
function {
  let n;
  if (!((o instanceof Error))) goto L_30;
  goto L_37;
  // [栈深重同步 1 -> 0]
  n = String(o);
  if (!((this.context == null))) goto L_64;
  this.context;
  goto L_85;
  Ie(e, undefined.actionHandler, n);
  if ((this.isDestroyed())) goto L_140;
  null;
  this.state;
  this.setState({state: "loaded", pendingConnectionID: undefined, pendingActionKind: undefined, actionErrorConnectionID: t.id});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=6 cpool=2 bc=389B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
// locals: o, this
// closure: pe, le, Ie, Re, se, ee
function {
  this = this;
  let o;
  if (((undefined !== this.state.pendingConnectionID))) goto L_72;
  if (!((undefined === t.organizationId))) goto L_75;
  return;
  null;
  this.state;
  this.setState({openActionConnectionID: undefined, pendingConnectionID: t.id, pendingActionKind: "reconnect", actionErrorConnectionID: undefined});
  o = Re(t);
  se(e, ee, JSON.stringify(o)).then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn se  args=3 vars=4 closure=2 cpool=0 bc=57B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t, o
// locals: n
// closure: ke, ae
function {
  let n;
  n = ke((await e.callTool(t, o)));
  ae(n, t);
  return n; // async
}

// fn ae  args=2 vars=3 closure=1 cpool=0 bc=117B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
// locals: o
// closure: ce
function {
  let o;
  o = ce(e);
  if (((true === e.isError))) goto L_35;
  if (!((undefined !== o))) goto L_74;
  if (!((o == null))) goto L_70;
  o;
  throw new Error("".concat(t, " returned an error response"));
  return;
}

// fn ce  args=1 vars=4 closure=1 cpool=0 bc=500B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, n
// closure: De
function {
  let o;
  let t;
  t = e.error;
  if (!(("string" == typeof t))) goto L_88;
  if (!((t.trim().length > 0))) goto L_88;
  return t.trim();   // tail call
  o = e.content;
  if (!(Array.isArray(o))) goto L_1f3;
  let n;
  for (const n of o) {
    if (!(De(n))) continue;
    if (!(("text" === n.type))) continue;
    if (!(("string" == typeof n.text))) continue;
    if (!((n.text.trim().length > 0))) continue;
    return n.text.trim();
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn le  args=1 vars=4 closure=1 cpool=0 bc=149B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, n
// closure: De
function {
  let n;
  let o;
  let t;
  t = e.structuredContent;
  if (!(De(t))) goto L_37;
  return t;
  o = e.structured_content;
  if (!(De(o))) goto L_65;
  return o;
  n = e.result;
  if (!(De(n))) goto L_93;
  return n;
  return {};
}

// fn ge  args=1 vars=4 closure=3 cpool=0 bc=459B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, e#1
// closure: De, Pe, xe
function {
  let t;
  if (!(!Array.isArray(e))) goto L_34;
  return [];
  t = [];
  let o;
  for (const o of e) {
    let e#1;
    if ((!De(o))) continue;
    e#1 = o.id;
    if (!(("string" == typeof e#1))) goto L_1bd;
    if (!((0 !== e#1.length))) goto L_1bd;
    if (!((Pe(o.organizationId) == null))) goto L_eb;
    Pe(o.organizationId);
    if (!((Pe(o.organizationName) == null))) goto L_11c;
    Pe(o.organizationName);
    if (!(("connected" === o.connectionState))) goto L_154;
    goto L_159;
    // [栈深重同步 7 -> 6]
    if (!((Pe(o.lastSyncTime) == null))) goto L_18a;
    Pe(o.lastSyncTime);
    t.push({id: e#1, organizationId: undefined, organizationName: undefined, connectionState: "expired", lastSyncTime: undefined, operationStatus: xe(o.operationStatus)});
  }
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=146B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: De, Pe
function {
  if (!(De(e))) goto L_8e;
  if (!(("string" == typeof e.connectionType))) goto L_8e;
  if (!((Pe(e.gatewayId) == null))) goto L_85;
  Pe(e.gatewayId);
  return [{connectionType: e.connectionType, gatewayId: undefined}];
  return [];
}

// fn ue  args=1 vars=4 closure=2 cpool=1 bc=361B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, n
// closure: De, Pe
function {
  let n;
  let o;
  let t;
  if (!(!De(e))) goto L_10;
  return;
  t = e.id;
  o = e.name;
  if (!((Pe(e.logoBase64) == null))) goto L_80;
  Pe(e.logoBase64);
  n = undefined;
  if ((("string" != typeof t))) goto L_ad;
  if (((0 === t.length))) goto L_ad;
  if ((("string" != typeof o))) goto L_ad;
  if (!((0 === o.length))) goto L_b0;
  return;
  if (!(Array.isArray(e.endpoints))) goto L_160;
  goto L_163;
  // [栈深重同步 2 -> 1]
  return {id: t, name: o, logoBase64: n, endpoints: []};
}

// fn he  args=1 vars=1 closure=0 cpool=0 bc=101B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  if (!((undefined !== e))) goto L_64;
  if (!((0 !== e.length))) goto L_64;
  if (!(e.startsWith("data:image/"))) goto L_39;
  return e;
  return "data:image/png;base64,".concat(e);
  return;
}

// fn ye  args=1 vars=2 closure=2 cpool=0 bc=138B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t
// closure: De, K
function {
  let t;
  if (!(!De(e))) goto L_1a;
  return {connectorId: K, connected: false};
  t = e.connectorId;
  if (!(("string" == typeof t))) goto L_57;
  if (!((t.length > 0))) goto L_57;
  goto L_5a;
  // [栈深重同步 2 -> 1]
  return {connectorId: K, connected: (true === e.connected)};
}

// fn pe  args=1 vars=2 closure=0 cpool=0 bc=71B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t
function {
  let t;
  t = e.authUrl;
  if (!(("string" == typeof t))) goto L_40;
  if (!((t.length > 0))) goto L_40;
  goto L_41;
  // [栈深重同步 2 -> 1]
  return {authUrl: undefined};
}

// fn ve  args=1 vars=1 closure=1 cpool=0 bc=493B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: W
function {
  if (!(("Apple Health" === e.title))) goto L_fd;
  null;
  e;
  if (!((e.subtitle == null))) goto L_91;
  e.subtitle;
  if (!((e.status == null))) goto L_91;
  e.status;
  if (!((e.status == null))) goto L_e9;
  e.status;
  if (!((e.subtitle == null))) goto L_e9;
  e.subtitle;
  return {kind: "appleHealth", subtitle: "Connected", status: "Connected", canRefresh: false, canDisconnect: false};
  null;
  e;
  if ((e.canRefresh)) goto L_14c;
  if (!(e.canDisconnect)) goto L_155;
  goto L_15a;
  // [栈深重同步 2 -> 1]
  if (!(("Access has expired" === e.status))) goto L_190;
  goto L_195;
  // [栈深重同步 2 -> 1]
  if (!((e.connectorID === W))) goto L_1e6;
  goto L_1e7;
  // [栈深重同步 2 -> 1]
  return {kind: "legacy", connectionState: "connected", organizationId: undefined};
}

// fn me  args=1 vars=1 closure=0 cpool=0 bc=134B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  return {id: e.connectorId, connectorID: e.connectorId, kind: "appleHealth", title: "Apple Health", subtitle: "Connected", status: "Connected", canRefresh: false, canDisconnect: false};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  return ("fhir-gateway" === e.connectionType);
}

// fn be  args=2 vars=3 closure=3 cpool=1 bc=547B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
// locals: o
// closure: W, we, Se
function {
  let o;
  if (!((undefined !== e.organizationId))) goto L_72;
  goto L_73;
  // [栈深重同步 1 -> 0]
  o = undefined;
  if (!((o == null))) goto L_17c;
  o;
  goto L_19d;
  if (!((o == null))) goto L_1ad;
  o;
  goto L_21d;
  if (!((undefined.endpoints.find(function <atom:0>) == null))) goto L_1fc;
  undefined.endpoints.find(function <atom:0>);
  goto L_21d;
  return {id: e.id, connectorID: W, kind: "account", title: we(e, o), subtitle: Se(e), status: Se(e), canRefresh: ("deleting" !== e.operationStatus), canDisconnect: ("deleting" !== e.operationStatus), connectionState: e.connectionState, organizationId: e.organizationId, providerLogoBase64: undefined.logoBase64, gatewayId: undefined.gatewayId};
}

// fn we  args=2 vars=2 closure=0 cpool=0 bc=192B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t
function {
  if (!((undefined !== e.organizationName))) goto L_49;
  return e.organizationName;
  if (!((undefined !== t))) goto L_71;
  return t.name;
  if (!((undefined !== e.organizationId))) goto L_ba;
  return e.organizationId;
  return "Unknown provider";
}

// fn Se  args=1 vars=1 closure=1 cpool=0 bc=266B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// closure: Ae
function {
  if (!(("syncing" === e.operationStatus))) goto L_30;
  return "Syncing...";
  if (!(("deleting" === e.operationStatus))) goto L_60;
  return "Deleting...";
  if (!(("expired" === e.connectionState))) goto L_90;
  return "Access has expired";
  if (!((undefined !== e.lastSyncTime))) goto L_104;
  return "Last synced ".concat(Ae(e.lastSyncTime));
  return "Not synced yet";
}

// fn Ae  args=1 vars=5 closure=1 cpool=0 bc=312B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, e#1, o, o#1
// closure: ie
function {
  let o#1;
  let t;
  t = Date.parse(e);
  if (!(!Number.isNaN(t))) goto L_fd;
  let o;
  let e#1;
  e#1 = new Date(t);
  o = ie[e#1.getMonth()];
  if (!((undefined !== o))) goto L_fd;
  return "".concat(o, " ", e#1.getDate());   // tail call
  o#1 = e.split(" at ")[0];
  if (!((o#1.length > 0))) goto L_136;
  return o#1;
  return e;
}

// fn Ce  args=4 vars=4 closure=0 cpool=0 bc=224B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t, o, n
function {
  if (!(("account" === e.kind))) goto L_56;
  if (!((n === e.id))) goto L_56;
  return "Something went wrong.";
  if (!((t !== e.id))) goto L_9f;
  return e.subtitle;
  if (!(("sync" === o))) goto L_ae;
  return "Syncing...";
  if (!(("delete" === o))) goto L_bd;
  return "Deleting...";
  return e.subtitle;
}

// fn fe  args=1 vars=1 closure=0 cpool=0 bc=118B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  if (!(("expired" === e.connectionState))) goto L_41;
  goto L_56;
  // [栈深重同步 1 -> 0]
  return [{id: "sync", title: "Sync now"}, {id: "delete", title: "Remove account", destructive: true}];
}

// fn Re  args=1 vars=2 closure=0 cpool=0 bc=152B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t
function {
  let t;
  if (!((e.organizationId == null))) goto L_2c;
  e.organizationId;
  t = {organization_id: "", callback_mode: "chatgpt_native"};
  if (!((undefined !== e.gatewayId))) goto L_93;
  t.gateway_id = e.gatewayId;
  e.gatewayId;
  return t;
}

// fn Ie  args=3 vars=3 closure=0 cpool=0 bc=92B file=olympic_connections/src/OlympicConnectionsComponent
// args: e, t, o
function {
  if (!((undefined === e))) goto L_35;
  if (!((t == null))) goto L_e;
  t;
  goto L_5b;
  goto L_5b;
  // [栈深重同步 1 -> 0]
  e.renderFailure(o);
  return;
}

// fn ke  args=1 vars=2 closure=1 cpool=0 bc=73B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t
// closure: De
function {
  let t;
  t = JSON.parse(e);
  if (!(!De(t))) goto L_45;
  throw new Error("Host tool response was not a JSON object.");
  return t;
}

// fn De  args=1 vars=1 closure=0 cpool=0 bc=63B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn Pe  args=1 vars=1 closure=0 cpool=0 bc=20B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  if (!(("string" == typeof e))) goto L_12;
  if (!((e.length > 0))) goto L_12;
  return e;
  return undefined;
}

// fn xe  args=1 vars=1 closure=0 cpool=0 bc=28B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
function {
  if ((("syncing" === e))) goto L_12;
  if (!(("deleting" === e))) goto L_16;
  return e;
  return "idle";
}

// fn Ne  args=1 vars=4 closure=0 cpool=0 bc=186B file=olympic_connections/src/OlympicConnectionsComponent
// args: e
// locals: t, o, n
function {
  let o;
  let t;
  t = [];
  o = new Set();
  let n;
  for (const n of e) {
    if (((undefined === n))) goto L_ac;
    if ((o.has(n))) goto L_ac;
    o.add(n);
    t.push(n);
  }
  return t;
}

// fn <atom:0>  args=3 vars=95 closure=0 cpool=57 bc=6929B file=olympic_connections/src/OlympicConnectionsComponent
// args: require, module, exports
// locals: e, t, o, n, i, r, d, s, a, c, l, g, u, h, y, p, v, m, b, w, S, A, C, f, R, I, k, D, P, x, N, O, T, L, B, H, M, _, E, z, F, q, V, U, j, J, W, K, G, X, $, Z, Q, Y, ee, te, oe, ne, ie, re, de, OlympicConnectionsErrorBoundary, <class_fields_init>, OlympicConnectionsErrorBoundary#1, OlympicConnectionsComponent, <class_fields_init>#1, OlympicConnectionsComponent#1, se, ae, ce, le, ge, ue, he, ye, pe, ve, me, be, we, Se, Ae, Ce, fe, Re, Ie, ke, De, Pe, xe, Ne, Oe
function {
  se = function se;
  ae = function ae;
  ce = function ce;
  le = function le;
  ge = function ge;
  ue = function ue;
  he = function he;
  ye = function ye;
  pe = function pe;
  ve = function ve;
  me = function me;
  be = function be;
  we = function we;
  Se = function Se;
  Ae = function Ae;
  Ce = function Ce;
  fe = function fe;
  Re = function Re;
  Ie = function Ie;
  ke = function ke;
  De = function De;
  Pe = function Pe;
  xe = function xe;
  Ne = function Ne;
  let Oe;
  let OlympicConnectionsComponent#1;
  let OlympicConnectionsErrorBoundary#1;
  let de;
  let re;
  let ie;
  let ne;
  let oe;
  let te;
  let ee;
  let Y;
  let Q;
  let Z;
  let $;
  let X;
  let G;
  let K;
  let W;
  let J;
  let j;
  let U;
  let V;
  let q;
  let F;
  let z;
  let E;
  let _;
  let M;
  let H;
  let B;
  let L;
  let T;
  let O;
  let N;
  let x;
  let P;
  let D;
  let k;
  let I;
  let R;
  let f;
  let C;
  let A;
  let S;
  let w;
  let b;
  let m;
  let v;
  let p;
  let y;
  let h;
  let u;
  let g;
  let l;
  let c;
  let a;
  let s;
  let d;
  let r;
  let i;
  let n;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OlympicConnectionsComponent = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("view", undefined, "PGwAJIDZN42VRyCk");
  n = t.makeNodePrototype("label", undefined, "EINYLEKVGRExjb9K");
  i = t.makeComponentPrototype(undefined, "kWUyhikKtV6U4DO7");
  r = t.makeComponentPrototype(undefined, "JkRaGrXtZUVdlCJC");
  d = t.makeNodePrototype("view", undefined, "htC-kZlcFXYs5oJ_");
  s = t.makeNodePrototype("scroll", undefined, "w6Sd9XO9jXa5GcTj");
  a = t.makeNodePrototype("view", undefined, "QD3zFMk1dQGRddhX");
  c = t.makeNodePrototype("view", undefined, "Dmleqx9FZXOJ97G0");
  l = t.makeNodePrototype("view", ["accessibilityLabel", "Loading connections"], "kXC6BU8ofzpbDQTQ");
  g = t.makeNodePrototype("view", undefined, "DUoKuXY-3EpcTAFd");
  u = t.makeNodePrototype("view", undefined, "1xE91bNy0zPFQrFw");
  h = t.makeNodePrototype("view", undefined, "Y2WztfHOE1RLHaA3");
  y = t.makeNodePrototype("view", undefined, "sygHF1AqHoVIQ3k0");
  p = t.makeNodePrototype("view", undefined, "qWZBg4jkUbs8tjJX");
  v = t.makeNodePrototype("view", undefined, "SGsNSN6TbV86beEp");
  m = t.makeNodePrototype("label", undefined, "omcAgmtWpkk9PtZ6");
  b = t.makeNodePrototype("view", ["accessibilityCategory", "button"], "bVa5IszlyI0n7hC_");
  w = t.makeNodePrototype("view", undefined, "NyY1iPhhuk5S3om4");
  S = t.makeNodePrototype("view", undefined, "DTtzJLy1OU17Ztf9");
  A = t.makeNodePrototype("view", undefined, "DYttjmufoY1BnsHx");
  C = t.makeNodePrototype("label", undefined, "awlc5keqlQo4NZHu");
  f = t.makeNodePrototype("view", undefined, "Ku3G4okA7dJBisxR");
  R = t.makeNodePrototype("view", undefined, "MN8tNh6192FLNC0R");
  I = t.makeNodePrototype("label", undefined, "CHug60AM1WAP1b4u");
  k = t.makeNodePrototype("label", undefined, "TyAJLkONGdUQDYAI");
  D = t.makeNodePrototype("view", undefined, "giH13dRyfOW4FUX9");
  P = t.makeNodePrototype("image", ["objectFit", "contain"], "4oXtiN9e_QAE9Otg");
  x = t.makeNodePrototype("view", undefined, "7j-D_wRbn8DyNqEG");
  N = t.makeNodePrototype("image", ["objectFit", "contain"], "zqVohgCo437bfhZP");
  O = t.makeNodePrototype("view", undefined, "PHcPF31kGuEahdiH");
  T = t.makeNodePrototype("image", ["objectFit", "contain"], "Rq49tk2PR9gOap6r");
  L = t.makeComponentPrototype(undefined, "U-2Z_fpwu1pIi4O9");
  B = t.makeNodePrototype("view", undefined, "s_avc2DTGuR2Vxiu");
  H = t.makeNodePrototype("view", ["accessibilityCategory", "button"], "wDl3xce7Hce6VjMy");
  M = t.makeNodePrototype("label", undefined, "Ys0_cCwWCj0P1ebL");
  _ = require("native_menu/src/NativeMenuButton");
  E = require("oai_core/src/OAITheme");
  z = require("oai_core/src/OAITokens");
  F = require("olympic_analytics/src/OlympicNavigationAnalytics");
  q = require("valdi_core/src/Asset");
  V = require("valdi_core/src/Component");
  U = require("valdi_core/src/Device");
  j = require("valdi_core/src/Style");
  J = require("olympic_connections/res");
  W = "connector_openai_olympic";
  K = "apple_health";
  G = "health_kit";
  X = "list_account_connections";
  $ = "get_apple_health_connector_status";
  Z = "get_organization";
  Q = "sync_account_connection";
  Y = "delete_account_connection";
  ee = "initiate_organization_oauth";
  te = 2;
  oe = "Add account";
  ne = 164;
  ie = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  re = z.OAIColor.Transparent;
  de = "{}";
  let OlympicConnectionsErrorBoundary;
  let <class_fields_init>;
  class OlympicConnectionsErrorBoundary extends V.StatefulComponent { ... }
  <proto:OlympicConnectionsErrorBoundary>.onRender = function <atom:0>;
  <proto:OlympicConnectionsErrorBoundary>.onError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OlympicConnectionsErrorBoundary>;
  OlympicConnectionsErrorBoundary = function <atom:0>;
  // close_loc <class_fields_init>
  OlympicConnectionsErrorBoundary#1 = function <atom:0>;
  let OlympicConnectionsComponent;
  let <class_fields_init>#1;
  class OlympicConnectionsComponent extends V.StatefulComponent { ... }
  <proto:OlympicConnectionsComponent>.onCreate = function <atom:0>;
  <proto:OlympicConnectionsComponent>.onViewModelUpdate = function <atom:0>;
  <proto:OlympicConnectionsComponent>.onRender = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderList = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderBody = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderLoadingRows = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderSkeletonRow = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderErrorState = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderErrorMessage = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderLoadedRows = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderAddConnectionRow = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderConnectionRow = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderProviderBadge = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderEllipsisButton = function <atom:0>;
  <proto:OlympicConnectionsComponent>.providerLogoAsset = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderActionPanel = function <atom:0>;
  <proto:OlympicConnectionsComponent>.renderPanelAction = function <atom:0>;
  <proto:OlympicConnectionsComponent>.toggleActionPanel = function <atom:0>;
  <proto:OlympicConnectionsComponent>.handleMenuAction = function <atom:0>;
  <proto:OlympicConnectionsComponent>.handleSync = function <atom:0>;
  <proto:OlympicConnectionsComponent>.handleRemove = function <atom:0>;
  <proto:OlympicConnectionsComponent>.handleReconnect = function <atom:0>;
  <proto:OlympicConnectionsComponent>.addConnector = function <atom:0>;
  <proto:OlympicConnectionsComponent>.loadFromHost = function <atom:0>;
  <proto:OlympicConnectionsComponent>.scheduleHostLoad = function <atom:0>;
  <proto:OlympicConnectionsComponent>.loadRows = function <atom:0>;
  <proto:OlympicConnectionsComponent>.loadOrganizations = function <atom:0>;
  <proto:OlympicConnectionsComponent>.runConnectionTool = function <atom:0>;
  <proto:OlympicConnectionsComponent>.runReconnectTool = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OlympicConnectionsComponent>;
  OlympicConnectionsComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  OlympicConnectionsComponent#1 = function <atom:0>;
  exports.OlympicConnectionsComponent = OlympicConnectionsComponent#1;
  Oe = {root: new j.Style({backgroundColor: re, height: "100%", width: "100%"}), scroll: new j.Style({backgroundColor: re, height: "100%", width: "100%"}), content: new j.Style({alignItems: "stretch", flexDirection: "column", paddingBottom: 12, paddingTop: 12, width: "100%"}), contentWithNativeBottomClearance: new j.Style({alignItems: "stretch", flexDirection: "column", paddingBottom: ne, paddingTop: 12, width: "100%"}), list: new j.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), addRow: new j.Style({alignItems: "center", flexDirection: "row", gap: 12, minHeight: 60, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, paddingTop: 10, width: "100%"}), addBadge: new j.Style({alignItems: "center", backgroundColor: z.OAIColor.BgTertiary, borderColor: z.OAIColor.BorderLight, borderRadius: 22, borderWidth: 1, flexShrink: 0, height: 44, justifyContent: "center", position: "relative", width: 44}), addBadgePlusHorizontal: new j.Style({backgroundColor: z.OAIColor.IconPrimary, borderRadius: 1, height: 2, left: 13, position: "absolute", top: 21, width: 18}), addBadgePlusVertical: new j.Style({backgroundColor: z.OAIColor.IconPrimary, borderRadius: 1, height: 18, left: 21, position: "absolute", top: 13, width: 2}), addRowLabel: new j.Style({color: z.OAIColor.TextPrimary, font: "system-medium 17"}), row: new j.Style({alignItems: "center", backgroundColor: re, flexDirection: "row", gap: 12, minHeight: 70, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, paddingTop: 10, width: "100%"}), textColumn: new j.Style({alignItems: "stretch", flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: 3, minWidth: 0}), rowTitle: new j.Style({color: z.OAIColor.TextPrimary, font: "system 17", textOverflow: "ellipsis"}), rowSubtitle: new j.Style({color: z.OAIColor.TextSecondary, font: "system 16", textOverflow: "ellipsis"}), providerBadge: new j.Style({alignItems: "center", backgroundColor: z.OAIColor.BgTertiary, borderColor: z.OAIColor.BorderLight, borderRadius: 22, borderWidth: 1, flexShrink: 0, flexDirection: "column", height: 44, justifyContent: "center", width: 44}), providerLogoImage: new j.Style({height: 32, width: 32}), providerFallbackIcon: new j.Style({height: 18, width: 18}), appleHealthBadge: new j.Style({alignItems: "center", backgroundColor: z.OAIColor.BgTertiary, borderColor: z.OAIColor.BorderLight, borderRadius: 22, borderWidth: 1, flexShrink: 0, flexDirection: "row", height: 44, justifyContent: "center", width: 44}), appleHealthIcon: new j.Style({height: 24, width: 24}), actionPanel: new j.Style({alignItems: "stretch", backgroundColor: z.OAIColor.BgElevatedPrimary, borderColor: z.OAIColor.BorderDefault, borderRadius: 8, borderWidth: 1, flexDirection: "column", marginLeft: 72, marginRight: 16, marginTop: -4, paddingBottom: 4, paddingTop: 4}), panelAction: new j.Style({alignItems: "center", flexDirection: "row", minHeight: 42, paddingLeft: 12, paddingRight: 12}), panelActionLabel: new j.Style({color: z.OAIColor.TextPrimary, font: "system 15"}), panelActionLabelDestructive: new j.Style({color: z.OAIColor.TextStatusError, font: "system 15"}), skeletonList: new j.Style({alignItems: "stretch", flexDirection: "column", width: "100%"}), skeletonBadge: new j.Style({backgroundColor: z.OAIColor.BgTertiary, borderRadius: 22, height: 44, width: 44}), skeletonTitle: new j.Style({backgroundColor: z.OAIColor.BgTertiary, borderRadius: 8, height: 16, width: "58%"}), skeletonSubtitle: new j.Style({backgroundColor: z.OAIColor.BgTertiary, borderRadius: 7, height: 14, width: "42%"}), errorMessageContainer: new j.Style({alignItems: "center", backgroundColor: z.OAIColor.BgStatusError, borderColor: z.OAIColor.BorderStatusError, borderRadius: 20, borderWidth: 1, justifyContent: "center", minHeight: 90, paddingLeft: 16, paddingRight: 16, width: "100%"}), errorMessageText: new j.Style({color: z.OAIColor.TextStatusError, font: "system 14"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=olympic_connections/src/OlympicConnectionsComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
