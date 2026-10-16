// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=valdi_core/src/debugging/DebugConsole
// args: e
function {
  e.expanded = 0;
  e[0] = "expanded";
  e.collapsed = 1;
  e[1] = "collapsed";
  e.expanding = 2;
  e[2] = "expanding";
  e.collapsing = 3;
  e[3] = "collapsing";
  return;
}

// fn D  args=3 vars=6 closure=1 cpool=0 bc=291B file=valdi_core/src/debugging/DebugConsole
// args: e, t, s
// locals: i, o, e#1
// closure: f
function {
  let o;
  let i;
  i = undefined;
  o = t;
  if (!(t.startsWith(f))) goto L_105;
  let e#1;
  e#1 = t.indexOf("]");
  if (!((e#1 <= 0))) goto L_7b;
  throw new Error("Failed to resolve closing bracket");
  i = Number.parseInt(t.substr(10, (t.length - e#1)));
  Number.parseInt(t.substr(10, (t.length - e#1)));
  o = t.substr((e#1 + 2));
  t.substr((e#1 + 2));
  return {isError: e, message: o, nodeId: i, slowCall: s};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  this.goToIssue(-1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  this.goToIssue(1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=80B file=valdi_core/src/debugging/DebugConsole
// args: e
// closure: this
function {
  this.setState({rootHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=80B file=valdi_core/src/debugging/DebugConsole
// closure: this, P
function {
  this.setState({collapseState: P.collapsed});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=3 bc=513B file=valdi_core/src/debugging/DebugConsole
// closure: this, P
function {
  if (!((this.state.collapseState === P.collapsed))) goto L_117;
  this.setState({collapseState: P.expanding});
  goto L_200;
  // [栈深重同步 1 -> 0]
  if (!((this.state.collapseState === P.expanded))) goto L_200;
  this.setStateAnimatedPromise({collapseState: P.collapsing}, {duration: 0.25}).then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=108B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  this.releaseCaptures();
  this.pendingNewIssues = undefined;
  this.setState({issues: [], issueIndex: 0});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=5 bc=294B file=valdi_core/src/debugging/DebugConsole
// locals: this, this.active_func, new.target, arguments
// closure: P, <class_fields_init>, m
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
  this.state = {reloaderAvailable: false, collapseState: P.collapsed, issues: [], issueIndex: 0, bottomPadding: 0, topPadding: 0, rootHeight: 0};
  this.displayHeight = m.Device.getDisplayHeight();
  this.goToPreviousIssue = function <atom:0>;
  this.goToNextIssue = function <atom:0>;
  this.onRootLayout = function <atom:0>;
  this.expandOrCollapse = function <atom:0>;
  this.close = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=valdi_core/src/debugging/DebugConsole
// args: e
// locals: this
function {
  this = this;
  if (!((e !== this.state.reloaderAvailable))) goto L_77;
  this.setState({reloaderAvailable: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  return this.updateDisplayMargins();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=377B file=valdi_core/src/debugging/DebugConsole
// locals: e, this
// closure: m
function {
  this = this;
  let e;
  e = m.Device.observeDisplayInsetChange(function <atom:0>);
  this.registerDisposable(e.cancel);
  this.updateDisplayMargins();
  if (!((this.viewModel.daemonClientManager == null))) goto L_10b;
  this.viewModel.daemonClientManager;
  goto L_130;
  undefined.addListener(this);
  this.renderer.addObserver(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=225B file=valdi_core/src/debugging/DebugConsole
// locals: this
function {
  this = this;
  if (!((this.viewModel.daemonClientManager == null))) goto L_4d;
  this.viewModel.daemonClientManager;
  goto L_72;
  undefined.removeListener(this);
  this.renderer.removeObserver(this);
  this.releaseCaptures();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  return this.renderBody();   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=18 cpool=1 bc=2654B file=valdi_core/src/debugging/DebugConsole
// locals: e, u, p, this
// closure: P, t, s, q, i, o, k, R, n, M, A, r, T, x, a, d, l, S
function {
  this = this;
  let p;
  let u;
  let e;
  if (!(!this.state.reloaderAvailable)) goto L_98;
  if (!(!this.viewModel.showWithoutReloader)) goto L_98;
  return;
  if (!(!this.state.issues.length)) goto L_e0;
  return;
  e = (this.state.rootHeight > (this.displayHeight / 3));
  u = (this.state.collapseState === P.expanded);
  if (!((this.state.issues[this.state.issueIndex] == null))) goto L_240;
  this.state.issues[this.state.issueIndex];
  goto L_261;
  p = (undefined !== undefined.slowCall);
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", q);
  t.setAttributeFunction("onLayout", this.onRootLayout);
  t.beginRender(i, undefined);
  if (!(e)) goto L_36b;
  goto L_370;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("display", "none");
  if (!(u)) goto L_3a5;
  goto L_3a6;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("flexGrow", undefined);
  t.beginRender(o, undefined);
  if (!(p)) goto L_409;
  goto L_40c;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", R);
  if (!(u)) goto L_441;
  goto L_484;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingBottom", this.state.bottomPadding);
  if (!(u)) goto L_4fb;
  goto L_4fc;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("paddingTop", undefined);
  t.beginRender(n, undefined);
  if (!(p)) goto L_55f;
  goto L_562;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", A);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", T);
  t.beginComponent(x.DebugButton, a, undefined, undefined);
  t.setViewModelProperty("onTap", this.close);
  t.endComponent();
  t.beginRender(d, undefined);
  t.setAttributeString("value", "".concat(this.state.issues.length, " Valdi Warnings"));
  t.endRender();
  t.beginComponent(x.DebugButton, l, undefined, undefined);
  if (!((this.state.collapseState === P.expanded))) goto L_862;
  goto L_867;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("text", "Expand");
  t.setViewModelProperty("onTap", this.expandOrCollapse);
  t.endComponent();
  t.endRender();
  this.renderHeaderBottom();
  t.endRender();
  t.endRender();
  S.when((this.state.collapseState !== P.collapsed), function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1200B file=valdi_core/src/debugging/DebugConsole
// locals: this
// closure: t, u, B, P, x, p, h, F, g
function {
  this = this;
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", B);
  if (!((this.state.collapseState !== P.expanded))) goto L_f2;
  goto L_f3;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("height", undefined);
  if (!((this.state.collapseState === P.expanded))) goto L_18b;
  goto L_18c;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.beginComponent(x.DebugButton, p, undefined, undefined);
  t.setViewModelProperty("onTap", this.goToPreviousIssue);
  t.endComponent();
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", F);
  t.setAttributeString("value", "Issue ".concat((this.state.issueIndex + 1), " / ", this.state.issues.length));
  t.endRender();
  t.beginComponent(x.DebugButton, g, undefined, undefined);
  t.setViewModelProperty("onTap", this.goToNextIssue);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=209B file=valdi_core/src/debugging/DebugConsole
// locals: e, t, this
// closure: m
function {
  this = this;
  let t;
  let e;
  e = m.Device.getDisplayTopInset();
  t = m.Device.getDisplayBottomInset();
  this.setState({bottomPadding: t, topPadding: e});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=236B file=valdi_core/src/debugging/DebugConsole
// args: e
// locals: t, s, this
function {
  this = this;
  let s;
  let t;
  t = this.state.issues.length;
  if (!(!t)) goto L_54;
  return;
  s = (this.state.issueIndex + e);
  if (!((s < 0))) goto L_ac;
  s = (t - 1);
  goto L_bc;
  // [栈深重同步 1 -> 0]
  if (!((s >= t))) goto L_bc;
  s = 0;
  0;
  this.setState({issueIndex: s});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=5 cpool=0 bc=736B file=valdi_core/src/debugging/DebugConsole
// locals: e, s, this
// closure: P, t, c, C, b
function {
  this = this;
  let s;
  let e;
  e = this.state.issues[this.state.issueIndex];
  if (!(!e)) goto L_97;
  return;
  s = (this.state.collapseState === P.expanded);
  t.beginRender(c, undefined);
  if (!(s)) goto L_15c;
  goto L_15d;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("padding", 0);
  if (!(s)) goto L_192;
  goto L_193;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("height", 0);
  if (!(s)) goto L_20a;
  goto L_20b;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("marginBottom", undefined);
  t.beginComponent(C.RuntimeIssueDisplayer, b, undefined, undefined);
  t.setViewModelProperty("issue", e);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=360B file=valdi_core/src/debugging/DebugConsole
// locals: e, this
// closure: I
function {
  this = this;
  let e;
  if (!((this.pendingNewIssues == null))) goto L_93;
  this.pendingNewIssues;
  for (const e of this.state.issues.concat([])) {
    if (!(e.slowCall)) goto L_15d;
    if (!((I.getValdiRuntime().releaseSlowJSCall == null))) goto L_115;
    I.getValdiRuntime().releaseSlowJSCall;
    I.getValdiRuntime();
    goto L_15d;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, e.slowCall.captureId);
  }
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=182B file=valdi_core/src/debugging/DebugConsole
// locals: e, this
function {
  this = this;
  let e;
  e = this.pendingNewIssues;
  if (!(e)) goto L_b5;
  this.pendingNewIssues = undefined;
  // append([], 0, this.state.issues)
  // append([], this.state.issues, e)
  e;
  this.setState({issues: []});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=valdi_core/src/debugging/DebugConsole
// closure: this
function {
  this.flushPendingIssues();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=242B file=valdi_core/src/debugging/DebugConsole
// args: e
// locals: this
// closure: v
function {
  this = this;
  if (!(this.pendingNewIssues)) goto L_70;
  goto L_f1;
  // [栈深重同步 1 -> 0]
  this.pendingNewIssues = [e];
  if (!(e.slowCall)) goto L_c9;
  goto L_f1;
  // [栈深重同步 1 -> 0]
  v.setTimeoutInterruptible(function <atom:0>, 0);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=2 cpool=0 bc=156B file=valdi_core/src/debugging/DebugConsole
// args: t, s, i
// locals: e, o, this
// closure: D, e
function {
  this = this;
  try { // catch -> L_3b
  let e;
  e = D(t, s, i);
  this.appendPendingIssue(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_9b
  if (!(e.isLoggingEnabled)) goto L_98;
  console.error("Failed to parse runtime issue:", o);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=42 closure=0 cpool=15 bc=1868B file=valdi_core/src/debugging/DebugConsole
// args: require, module, exports
// locals: e, t, s, i, o, n, r, a, d, l, u, p, h, g, c, b, m, v, y, w, S, x, C, I, P, f, D, N, R, A, k, M, T, B, q, F, DebugConsole, <class_fields_init>, DebugConsole#1
function {
  D = function D;
  let DebugConsole#1;
  let F;
  let q;
  let B;
  let T;
  let M;
  let k;
  let A;
  let R;
  let N;
  let f;
  let I;
  let C;
  let x;
  let S;
  let w;
  let y;
  let v;
  let m;
  let b;
  let c;
  let g;
  let h;
  let p;
  let u;
  let l;
  let d;
  let a;
  let r;
  let n;
  let o;
  let i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DebugConsole = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  s = t.makeNodePrototype("layout", undefined, "or58SAhxeabO7gcY");
  i = t.makeNodePrototype("layout", ["flexShrink", 1], "BXoEkFFTQyZPp6R7");
  o = t.makeNodePrototype("view", undefined, "n7FLAl8EN7L4G9dI");
  n = t.makeNodePrototype("layout", undefined, "DM2Y5kXfi3CfMFMj");
  r = t.makeNodePrototype("layout", undefined, "thwUJfdrHrXk6p-y");
  a = t.makeComponentPrototype(["text", "Dismiss"], "7PzKg-_EPICuUWiX");
  d = t.makeNodePrototype("label", ["font", "system-bold 13"], "sZu-dXRL-UB10YaZ");
  l = t.makeComponentPrototype(undefined, "0fg-hxQzvwYNa9kb");
  u = t.makeNodePrototype("view", undefined, "t18IkvSTHtK3NJgw");
  p = t.makeComponentPrototype(["text", "<"], "Dlf2Dm2ZxHjC5SHq");
  h = t.makeNodePrototype("label", undefined, "8LHTM8x6c-YvGpTe");
  g = t.makeComponentPrototype(["text", ">"], "qBFbsPjUXz62MqQG");
  c = t.makeNodePrototype("view", ["backgroundColor", "white", "width", "100%", "flexGrow", 1, "flexShrink", 1], "Y8_I53Qp2EnXA4qi");
  b = t.makeComponentPrototype(undefined, "1A-WQ83NWzIYj3r6");
  m = require("valdi_core/src/Device");
  v = require("valdi_core/src/SetTimeout");
  y = require("../Component");
  w = require("../Style");
  S = require("../utils/When");
  x = require("./DebugConsoleButton");
  C = require("./RuntimeIssueDisplayer");
  I = require("../ValdiRuntimeProvider");
  if ((P)) goto L_46f;
  P = {};
  !function <atom:0>({});
  f = "[ViewNode:";
  N = 80;
  R = new w.Style({backgroundColor: "#FFF300", width: "100%", boxShadow: "0 0 3 rgba(0, 0, 0, 0.15)"});
  A = new w.Style({flexDirection: "column", padding: 8, paddingBottom: 30});
  k = new w.Style({backgroundColor: "#EEF2F7", width: "100%"});
  M = new w.Style({flexDirection: "column", padding: 8});
  T = new w.Style({flexDirection: "row", justifyContent: "space-between", flexGrow: 1});
  B = new w.Style({flexDirection: "row", width: "100%", justifyContent: "center"});
  q = new w.Style({width: "100%", height: "100%", position: "absolute", flexDirection: "column-reverse"});
  F = new w.Style({font: "system 13", margin: 8});
  let DebugConsole;
  let <class_fields_init>;
  class DebugConsole extends y.StatefulComponent { ... }
  <proto:DebugConsole>.onAvailabilityChanged = function <atom:0>;
  <proto:DebugConsole>.onCreate = function <atom:0>;
  <proto:DebugConsole>.onDestroy = function <atom:0>;
  <proto:DebugConsole>.onRender = function <atom:0>;
  <proto:DebugConsole>.renderHeaderBottom = function <atom:0>;
  <proto:DebugConsole>.updateDisplayMargins = function <atom:0>;
  <proto:DebugConsole>.goToIssue = function <atom:0>;
  <proto:DebugConsole>.renderBody = function <atom:0>;
  <proto:DebugConsole>.releaseCaptures = function <atom:0>;
  <proto:DebugConsole>.flushPendingIssues = function <atom:0>;
  <proto:DebugConsole>.appendPendingIssue = function <atom:0>;
  <proto:DebugConsole>.onRuntimeIssue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DebugConsole>;
  DebugConsole = function <atom:0>;
  // close_loc <class_fields_init>
  DebugConsole#1 = function <atom:0>;
  exports.DebugConsole = DebugConsole#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/DebugConsole
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
