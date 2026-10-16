// fn ye  args=1 vars=1 closure=0 cpool=0 bc=80B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
function {
  return "".concat(e.toFixed(2), " ms");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=335B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
// closure: this
function {
  if (!((e.width === this.state.viewportWidth))) goto L_d4;
  if (((e.height === this.state.viewportHeight))) goto L_14e;
  this.setState({viewportWidth: e.width, viewportHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: this
function {
  this.setState({selected: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=111B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: this
function {
  this.setZoom((2 * this.state.zoom));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=153B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: this
function {
  this.setZoom(Math.max(1, (this.state.zoom / 2)));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: this
function {
  this.setZoom(1);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=5 bc=184B file=valdi_core/src/debugging/SlowJSCallTraceViewer
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
  this.state = {viewportWidth: 0, viewportHeight: 0, zoom: 1, selected: undefined};
  this.bars = [];
  this.rows = 0;
  this.onViewportLayout = function <atom:0>;
  this.clearSelection = function <atom:0>;
  this.zoomIn = function <atom:0>;
  this.zoomOut = function <atom:0>;
  this.fit = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: this, e
function {
  return this.select(e.event);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=490B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
// closure: this, be, ye
function {
  null;
  e;
  if (!(e.event.name.startsWith(be))) goto L_de;
  goto L_121;
  // [栈深重同步 2 -> 1]
  return {label: e.event.name, accessibilityLabel: "".concat(e.event.name, ", ", ye(e.event.durationMs)), onTap: function <atom:0>};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=78B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e, t
function {
  return Math.max(e, (t.row + 1));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=446B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: this
// closure: be, ye, ee, te
function {
  this = this;
  if (!((ee.getValdiRuntime().resolveSlowJSCall == null))) goto L_52;
  ee.getValdiRuntime().resolveSlowJSCall;
  ee.getValdiRuntime();
  goto L_b9;
  // [栈深重同步 2 -> 3]
  this.trace = <?>.call(undefined, this.viewModel.warning.captureId);
  if (!((this.trace == null))) goto L_111;
  this.trace;
  goto L_132;
  if (!((undefined.events == null))) goto L_13a;
  undefined.events;
  this.bars = te.layoutSlowJSCallTrace([]).map(function <atom:0>);
  this.rows = this.bars.reduce(function <atom:0>, 0);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=0 bc=1486B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: d, this
// closure: e, t, ce, i, o, r, n, ye, l
function {
  this = this;
  let d;
  d = this.viewModel.warning;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", ce.root);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", ce.header);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", ce.summary);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", ce.title);
  e.endRender();
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", ce.duration);
  e.setAttributeString("value", ye(d.durationMs));
  e.endRender();
  e.endRender();
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", ce.caption);
  if (!(d.synchronous)) goto L_47c;
  goto L_481;
  // [栈深重同步 6 -> 5]
  if (!(d.module)) goto L_528;
  goto L_529;
  // [栈深重同步 10 -> 9]
  e.setAttributeString("value", "".concat("Asynchronous", " � ", ye(d.thresholdMs), " threshold", ""));
  e.endRender();
  e.endRender();
  this.renderTrace();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=0 bc=3195B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: this
// closure: e, d, ce, s, a, b, y, u, c, m, v, h, S
function {
  this = this;
  if ((!this.trace)) goto L_95;
  if ((!this.trace.available)) goto L_95;
  if (!(!this.bars.length)) goto L_408;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", ce.empty);
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", ce.emptyTitle);
  if (!((this.trace == null))) goto L_1e7;
  this.trace;
  goto L_208;
  if (!(undefined.available)) goto L_211;
  goto L_216;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "Trace unavailable");
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", ce.emptyText);
  if (!(this.trace)) goto L_3ae;
  if (!(this.trace.available)) goto L_3a7;
  if (!(this.trace.incomplete)) goto L_3a0;
  goto L_3b3;
  // [栈深重同步 4 -> 3]
  goto L_3b3;
  // [栈深重同步 4 -> 3]
  goto L_3b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "This capture has been released.");
  e.endRender();
  e.endRender();
  return;
  e.beginRender(b, undefined);
  e.setAttributeStyle("style", ce.separator);
  e.endRender();
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", ce.toolbar);
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", ce.trackTitle);
  e.setAttributeString("value", "JavaScript thread � ".concat(this.bars.length, " events"));
  e.endRender();
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", ce.zoom);
  e.setAttributeString("value", "".concat(this.state.zoom, "�"));
  e.endRender();
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", ce.controls);
  this.renderControl("−", "Zoom out", "debug.trace.zoom_out", this.zoomOut, (this.state.zoom > 1));
  this.renderControl("Fit", "Fit entire call", "debug.trace.fit", this.fit, true);
  this.renderControl("+", "Zoom in", "debug.trace.zoom_in", this.zoomIn, true);
  e.endRender();
  e.endRender();
  if (!(this.trace.incomplete)) goto L_b3a;
  e.beginRender(v, undefined);
  e.setAttributeStyle("style", ce.partial);
  e.beginRender(h, undefined);
  e.setAttributeStyle("style", ce.partialText);
  e.endRender();
  e.endRender();
  e.beginRender(S, undefined);
  e.setAttributeStyle("style", ce.viewport);
  e.setAttributeFunction("onLayout", this.onViewportLayout);
  this.renderTimeline();
  e.endRender();
  this.renderSelection();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e, t
// closure: d
function {
  return (t / d);
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=0 bc=544B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t
// locals: i
// closure: e, A, ce, n, ne, k, ye, l
function {
  let i;
  i = (1 === t);
  e.beginRender(A, undefined);
  e.setAttributeStyle("style", ce.tickContainer);
  if (!(i)) goto L_e7;
  goto L_ee;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("left", ((t * n) + 6));
  e.beginRender(k, undefined);
  if (!(i)) goto L_172;
  goto L_196;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ce.tick);
  e.setAttributeString("value", ye((t * l)));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=261B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t
// closure: e, x, ce, n
function {
  e.beginRender(x, undefined);
  e.setAttributeStyle("style", ce.grid);
  e.setAttributeNumber("left", Math.min((n - 1), (t * n)));
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=0 bc=1204B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t, i
// locals: o, d
// closure: r, e, P, ce, l, n, ie, T
function {
  let d;
  let o;
  o = t.event;
  d = (r === o);
  e.beginRender(P, "".concat(i));
  if (!(d)) goto L_d6;
  goto L_143;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ce.rows[(t.row % ce.rows.length)]);
  e.setAttributeNumber("left", ((o.startMs / l) * n));
  e.setAttributeNumber("top", ((t.row * ie) + 4));
  if (!((1 === o.kind))) goto L_26f;
  goto L_270;
  // [栈深重同步 6 -> 5]
  e.setAttributeNumber("width", Math.max(1, ((o.durationMs / l) * n)));
  e.setAttributeString("accessibilityLabel", t.accessibilityLabel);
  e.setAttributeString("accessibilityId", "debug.trace.event.".concat(i));
  e.setAttributeFunction("onTap", t.onTap);
  e.beginRender(T, undefined);
  e.setAttributeStyle("style", ce.barLabel);
  e.setAttributeString("value", t.label);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=18 cpool=4 bc=2471B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: t, i, o, r, n, l, d, s, a, b, this
// closure: e, A, ce, ne, k, ye, x, P, ie, T, oe, g, p, w, R, f, N, C
function {
  this = this;
  let b;
  let a;
  let s;
  let d;
  let l;
  let n;
  let r;
  let o;
  let i;
  let t;
  if (((undefined === undefined))) goto L_b9;
  t = <to_object>(undefined).viewportWidth;
  i = <to_object>(undefined).viewportHeight;
  o = <to_object>(undefined).zoom;
  r = <to_object>(undefined).selected;
  <to_object>(undefined);
  goto L_e0;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29;
  // [栈深重同步 1 -> 0]
  if (((0 === t))) goto L_ee;
  if (!((0 === i))) goto L_f1;
  return;
  n = (t * o);
  l = this.viewModel.warning.durationMs;
  d = Math.max(1, Math.min(4, Math.floor((n / 152))));
  s = Array.from({length: (d + 1)}, function <atom:0>);
  a = Math.max(0, (i - oe));
  b = Math.max(a, ((this.rows * ie) + 8));
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", ce.horizontalScroll);
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", ce.content);
  e.setAttributeNumber("width", n);
  e.setAttributeNumber("height", i);
  e.beginRender(w, undefined);
  e.setAttributeStyle("style", ce.ruler);
  e.beginRender(R, undefined);
  e.setAttributeStyle("style", ce.bottomSeparator);
  e.endRender();
  s.forEach(function <atom:0>);
  e.endRender();
  e.beginRender(f, undefined);
  e.setAttributeStyle("style", ce.verticalScroll);
  e.setAttributeNumber("width", n);
  e.setAttributeNumber("height", a);
  e.beginRender(N, undefined);
  e.setAttributeStyle("style", ce.canvas);
  e.setAttributeNumber("width", n);
  e.setAttributeNumber("height", b);
  s.forEach(function <atom:0>);
  if (!(r)) goto L_8bc;
  e.beginRender(C, undefined);
  e.setAttributeStyle("style", ce.selectionRegion);
  e.setAttributeNumber("left", ((r.startMs / l) * n));
  e.setAttributeNumber("width", ((r.durationMs / l) * n));
  e.endRender();
  this.bars.forEach(function <atom:0>);
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=10 cpool=0 bc=1675B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: t, this
// closure: e, F, ce, L, M, D, B, I, E, z
function {
  this = this;
  let t;
  t = this.state.selected;
  e.beginRender(F, undefined);
  e.setAttributeStyle("style", ce.details);
  e.beginRender(L, undefined);
  e.setAttributeStyle("style", ce.separator);
  e.endRender();
  e.beginRender(M, undefined);
  e.setAttributeStyle("style", ce.detailsHeader);
  e.beginRender(D, undefined);
  e.setAttributeStyle("style", ce.bottomSeparator);
  e.endRender();
  e.beginRender(B, undefined);
  e.setAttributeStyle("style", ce.selectionTab);
  e.beginRender(I, undefined);
  e.setAttributeStyle("style", ce.selectionTitle);
  e.endRender();
  e.beginRender(E, undefined);
  e.setAttributeStyle("style", ce.selectionUnderline);
  e.endRender();
  e.endRender();
  e.beginRender(z, undefined);
  e.setAttributeStyle("style", ce.selectionKind);
  if (!(t)) goto L_55d;
  if (!((1 === t.kind))) goto L_556;
  goto L_55e;
  // [栈深重同步 4 -> 3]
  goto L_55e;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("value", "");
  e.endRender();
  this.renderControl("Clear", "Clear event selection", "debug.trace.clear_selection", this.clearSelection, (undefined !== t));
  e.endRender();
  if (!(t)) goto L_63d;
  goto L_662;
  // [栈深重同步 1 -> 0]
  this.renderSelectionHint();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=0 bc=1444B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t
// locals: this
// closure: e, J, ce, H, q, V, ye, U
function {
  this = this;
  e.beginRender(J, undefined);
  e.setAttributeStyle("style", ce.detailsScroll);
  e.beginRender(H, undefined);
  e.setAttributeStyle("style", ce.detailsContent);
  e.beginRender(q, undefined);
  e.setAttributeStyle("style", ce.eventName);
  e.setAttributeString("value", t.name);
  e.endRender();
  e.beginRender(V, undefined);
  e.setAttributeStyle("style", ce.fieldsRow);
  this.renderField("Duration", ye(t.durationMs));
  this.renderField("Share of call", "".concat(((t.durationMs / this.viewModel.warning.durationMs) * 100).toFixed(1), "%"));
  e.endRender();
  e.beginRender(U, undefined);
  e.setAttributeStyle("style", ce.fieldsRow);
  this.renderField("Start", ye(t.startMs));
  this.renderField("End", ye((t.startMs + t.durationMs)));
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=660B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// closure: e, O, ce, W, j, G
function {
  e.beginRender(O, undefined);
  e.setAttributeStyle("style", ce.detailsScroll);
  e.beginRender(W, undefined);
  e.setAttributeStyle("style", ce.empty);
  e.beginRender(j, undefined);
  e.setAttributeStyle("style", ce.emptyTitle);
  e.endRender();
  e.beginRender(G, undefined);
  e.setAttributeStyle("style", ce.emptyText);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=587B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t, i
// closure: e, Z, ce, _, K
function {
  e.beginRender(Z, undefined);
  e.setAttributeStyle("style", ce.field);
  e.beginRender(_, undefined);
  e.setAttributeStyle("style", ce.fieldLabel);
  e.setAttributeString("value", t);
  e.endRender();
  e.beginRender(K, undefined);
  e.setAttributeStyle("style", ce.fieldValue);
  e.setAttributeString("value", i);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=5 vars=5 closure=4 cpool=0 bc=565B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: t, i, o, r, n
// closure: e, X, ce, Y
function {
  e.beginRender(X, undefined);
  e.setAttributeStyle("style", ce.control);
  e.setAttributeString("accessibilityLabel", i);
  e.setAttributeString("accessibilityId", o);
  if (!(n)) goto L_10a;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  e.beginRender(Y, undefined);
  if (!(n)) goto L_18f;
  goto L_1b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", ce.disabledControlLabel);
  e.setAttributeString("value", t);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
// locals: this
function {
  this = this;
  this.setState({selected: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
// locals: this
function {
  this = this;
  this.setState({zoom: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: e
// closure: ue
function {
  return ue.bar.extend({backgroundColor: e});   // tail call
}

// fn <atom:0>  args=3 vars=74 closure=0 cpool=14 bc=7171B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// args: require, module, exports
// locals: e, t, i, o, r, n, l, d, s, a, b, y, u, c, m, v, h, S, g, p, w, R, A, k, f, N, x, C, P, T, F, L, M, D, B, I, E, z, J, H, q, V, U, O, W, j, G, Z, _, K, X, Y, $, Q, ee, te, ie, oe, re, ne, le, de, se, ae, be, ye, SlowJSCallTraceViewer, <class_fields_init>, SlowJSCallTraceViewer#1, ue, ce
function {
  ye = function ye;
  let ce;
  let ue;
  let SlowJSCallTraceViewer#1;
  let be;
  let ae;
  let se;
  let de;
  let le;
  let ne;
  let re;
  let oe;
  let ie;
  let te;
  let ee;
  let Q;
  let $;
  let Y;
  let X;
  let K;
  let _;
  let Z;
  let G;
  let j;
  let W;
  let O;
  let U;
  let V;
  let q;
  let H;
  let J;
  let z;
  let E;
  let I;
  let B;
  let D;
  let M;
  let L;
  let F;
  let T;
  let P;
  let C;
  let x;
  let N;
  let f;
  let k;
  let A;
  let R;
  let w;
  let p;
  let g;
  let S;
  let h;
  let v;
  let m;
  let c;
  let u;
  let y;
  let b;
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
  exports.SlowJSCallTraceViewer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "pBA0l872nHSme2A1");
  i = e.makeNodePrototype("layout", undefined, "TJ9IuzcYH__pfqLv");
  o = e.makeNodePrototype("layout", undefined, "C0Wy8SbhBL-FJl41");
  r = e.makeNodePrototype("label", ["value", "Slow JavaScript call"], "K2OIVWuD733kTwF8");
  n = e.makeNodePrototype("label", undefined, "69iyBXvZDfKTMEBy");
  l = e.makeNodePrototype("label", undefined, "ME04s2jzAjIdC6Ps");
  d = e.makeNodePrototype("layout", undefined, "X29Lc3xeJC9u7UY5");
  s = e.makeNodePrototype("label", undefined, "RSAKQlJJyyd-3OKD");
  a = e.makeNodePrototype("label", undefined, "LzRsC9IksnL_1Pwp");
  b = e.makeNodePrototype("view", undefined, "EFmyJAqAdH0Gp1wn");
  y = e.makeNodePrototype("view", undefined, "HHCBSVBQHv9ngkoT");
  u = e.makeNodePrototype("label", undefined, "GWn5re-TM1XwYwnW");
  c = e.makeNodePrototype("label", undefined, "nwKEx4glDg9r58Ov");
  m = e.makeNodePrototype("view", undefined, "Eh-vGHVmeYpn9k1V");
  v = e.makeNodePrototype("view", undefined, "xCnUNE8SS0KQ37lZ");
  h = e.makeNodePrototype("label", ["value", "Partial trace � earlier events may have been overwritten."], "qtpvXS9_L-GElYmI");
  S = e.makeNodePrototype("view", undefined, "9WmF1DmhFCzzFawZ");
  g = e.makeNodePrototype("scroll", undefined, "gOR9fanhSFl29_xl");
  p = e.makeNodePrototype("layout", undefined, "-UpxRuaMj5MRwheY");
  w = e.makeNodePrototype("view", undefined, "5kFPppri8N2S5amz");
  R = e.makeNodePrototype("view", undefined, "ZsNlUwqSWHCp818u");
  A = e.makeNodePrototype("layout", undefined, "xItJI69RDA7rJM1N");
  k = e.makeNodePrototype("label", undefined, "iFZUA2YBrLqwOLo5");
  f = e.makeNodePrototype("scroll", undefined, "2yvUeOjiUgM6wnLo");
  N = e.makeNodePrototype("layout", undefined, "_hecmB7g9brcyVEQ");
  x = e.makeNodePrototype("view", undefined, "46KXwaJJ3CmOv956");
  C = e.makeNodePrototype("view", undefined, "ZpbcPvtCasyznqiu");
  P = e.makeNodePrototype("view", undefined, "aXeosCd7RlK5cqBE");
  T = e.makeNodePrototype("label", undefined, "1RUlYeMdbENK9mA3");
  F = e.makeNodePrototype("view", undefined, "AvNJjOyVfV_yb6i-");
  L = e.makeNodePrototype("view", undefined, "Fn0VBI6uLWZpcoCh");
  M = e.makeNodePrototype("layout", undefined, "nREONTq9UkM0xs-J");
  D = e.makeNodePrototype("view", undefined, "A69SBpn8hXs00CjD");
  B = e.makeNodePrototype("layout", undefined, "t26LYF5cUU2Sm4H1");
  I = e.makeNodePrototype("label", ["value", "Current selection"], "HrCvLqUnRaU1hN5Y");
  E = e.makeNodePrototype("view", undefined, "qiUx0AX2V0kPhebx");
  z = e.makeNodePrototype("label", undefined, "JexYBO2WnDaHTD2a");
  J = e.makeNodePrototype("scroll", undefined, "zqIfsMg8Iba0sJYe");
  H = e.makeNodePrototype("layout", undefined, "dZ9SrMNI-DTsmGVE");
  q = e.makeNodePrototype("label", undefined, "ElljoiUBzJLv7Gdy");
  V = e.makeNodePrototype("layout", undefined, "kpRvcjvsiqrBEUuo");
  U = e.makeNodePrototype("layout", undefined, "DwPnV1YRMiGyuIkS");
  O = e.makeNodePrototype("scroll", undefined, "m-ah4qK32keRpJzb");
  W = e.makeNodePrototype("layout", undefined, "6icAgxAa_ltc6Hhj");
  j = e.makeNodePrototype("label", ["value", "Select an event"], "sxKM0i4gQlenbqhW");
  G = e.makeNodePrototype("label", ["value", "Tap a span above to inspect its timing."], "eq8RJdUKc_qBRrki");
  Z = e.makeNodePrototype("layout", undefined, "omMfWIGoslDmoTy-");
  _ = e.makeNodePrototype("label", undefined, "ZQxt9ZABwBfcqRAm");
  K = e.makeNodePrototype("label", undefined, "zoxNICfXVcIDaIX5");
  X = e.makeNodePrototype("view", undefined, "iS1Mo2Xc94dm_EqL");
  Y = e.makeNodePrototype("label", undefined, "cSeIGpUxnq5ULHXI");
  $ = require("../Component");
  Q = require("../Style");
  ee = require("../ValdiRuntimeProvider");
  te = require("./SlowJSCallTimeline");
  ie = 28;
  oe = 28;
  re = 168;
  ne = 76;
  le = ["#C9DFF2", "#D7D1EF", "#C5E3D9", "#EDDDC2"];
  de = "#263445";
  se = "#6B7788";
  ae = "#216BCC";
  be = "Valdi.jsTrace.";
  let SlowJSCallTraceViewer;
  let <class_fields_init>;
  class SlowJSCallTraceViewer extends $.StatefulComponent { ... }
  <proto:SlowJSCallTraceViewer>.onCreate = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.onRender = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderTrace = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderTimeline = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderSelection = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderEventDetails = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderSelectionHint = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderField = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.renderControl = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.select = function <atom:0>;
  <proto:SlowJSCallTraceViewer>.setZoom = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SlowJSCallTraceViewer>;
  SlowJSCallTraceViewer = function <atom:0>;
  // close_loc <class_fields_init>
  SlowJSCallTraceViewer#1 = function <atom:0>;
  exports.SlowJSCallTraceViewer = SlowJSCallTraceViewer#1;
  ue = {caption: new Q.Style({font: "system 11", color: se, numberOfLines: 1}), controlLabel: new Q.Style({font: "system-medium 12", color: de}), separator: new Q.Style({height: 1, width: "100%", backgroundColor: "#D8DFE8", flexShrink: 0}), tick: new Q.Style({font: "system 10", color: se}), bar: new Q.Style({position: "absolute", height: 25, borderRadius: 2, justifyContent: "center", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.5)", slowClipping: true})};
  ce = {root: new Q.Style({flexGrow: 1, flexShrink: 1, minHeight: 0}), header: new Q.Style({padding: 12, flexShrink: 0}), summary: new Q.Style({flexDirection: "row", alignItems: "center", marginBottom: 5}), title: new Q.Style({font: "system-semibold 14", color: de, flexGrow: 1, flexShrink: 1}), duration: new Q.Style({font: "system-semibold 14", color: "#9A5B12", marginLeft: 12}), caption: ue.caption, toolbar: new Q.Style({flexDirection: "row", alignItems: "center", paddingLeft: 12, paddingRight: 8, height: 40, backgroundColor: "#F5F7FA", flexShrink: 0}), trackTitle: new Q.Style({font: "system-medium 12", color: de, flexGrow: 1, flexShrink: 1}), controls: new Q.Style({flexDirection: "row", alignItems: "center", padding: 2, borderRadius: 5, backgroundColor: "white", border: "1 solid #D8DFE8"}), control: new Q.Style({height: 26, minWidth: 28, paddingLeft: 8, paddingRight: 8, justifyContent: "center", alignItems: "center", borderRadius: 3}), controlLabel: ue.controlLabel, disabledControlLabel: ue.controlLabel.extend({color: "#A6AFBC"}), zoom: new Q.Style({font: "system 11", color: se, marginLeft: 8, marginRight: 8}), partial: new Q.Style({padding: 8, backgroundColor: "#FFF5DF", flexShrink: 0}), partialText: new Q.Style({font: "system 11", color: "#805B20", numberOfLines: 0}), viewport: new Q.Style({flexGrow: 1, flexShrink: 1, flexBasis: re, minHeight: 64, backgroundColor: "#FAFBFD", accessibilityId: "debug.trace.timeline"}), horizontalScroll: new Q.Style({horizontal: true, width: "100%", height: "100%", bounces: false}), content: new Q.Style({flexShrink: 0, direction: "ltr"}), ruler: new Q.Style({height: oe, backgroundColor: "#F5F7FA", flexShrink: 0}), separator: ue.separator, bottomSeparator: ue.separator.extend({position: "absolute", bottom: 0}), tickContainer: new Q.Style({position: "absolute", top: 0, height: oe, width: ne, justifyContent: "center"}), tick: ue.tick, endTick: ue.tick.extend({textAlign: "right"}), verticalScroll: new Q.Style({flexShrink: 0, bounces: false}), canvas: new Q.Style({flexShrink: 0, position: "relative"}), grid: new Q.Style({position: "absolute", top: 0, width: 1, height: "100%", backgroundColor: "#E5EAF0", touchEnabled: false}), selectionRegion: new Q.Style({position: "absolute", top: 0, height: "100%", backgroundColor: "rgba(33, 107, 204, 0.05)", touchEnabled: false}), selectedBar: ue.bar.extend({borderColor: ae, borderWidth: 2, backgroundColor: "#ACCEF5"}), barLabel: new Q.Style({font: "system-medium 11", color: de, marginLeft: 6, marginRight: 6, numberOfLines: 1}), details: new Q.Style({flexBasis: re, flexShrink: 1, minHeight: 0, backgroundColor: "white", accessibilityId: "debug.trace.details"}), detailsHeader: new Q.Style({flexDirection: "row", alignItems: "center", height: 34, flexShrink: 0, paddingLeft: 12, paddingRight: 8}), selectionTab: new Q.Style({height: "100%", justifyContent: "center", marginRight: 10}), selectionUnderline: new Q.Style({position: "absolute", bottom: 0, width: "100%", height: 2, backgroundColor: ae}), selectionTitle: new Q.Style({font: "system-medium 12", color: ae}), selectionKind: ue.caption.extend({flexGrow: 1}), detailsScroll: new Q.Style({flexGrow: 1, flexShrink: 1, minHeight: 0, width: "100%"}), detailsContent: new Q.Style({padding: 12}), eventName: new Q.Style({font: "system-semibold 12", color: de, numberOfLines: 0, marginBottom: 10}), fieldsRow: new Q.Style({flexDirection: "row", marginBottom: 8}), field: new Q.Style({flexGrow: 1, flexBasis: 0, marginRight: 12}), fieldLabel: new Q.Style({font: "system 10", color: se, marginBottom: 3}), fieldValue: new Q.Style({font: "system-medium 12", color: de}), empty: new Q.Style({flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 16}), emptyTitle: new Q.Style({font: "system-medium 12", color: de, marginBottom: 6, textAlign: "center"}), emptyText: new Q.Style({font: "system 11", color: se, numberOfLines: 0, textAlign: "center"}), rows: le.map(function <atom:0>)};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/SlowJSCallTraceViewer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
