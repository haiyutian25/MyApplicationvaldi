// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=45B file=valdi_navigation/src/NavigationView
// closure: this
function {
  this.pop(true);
  return true;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=1 bc=228B file=valdi_navigation/src/NavigationView
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, h, k
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
  this.state = {stack: []};
  this.keySequence = 0;
  this.scheduledRebuild = false;
  this.hotReloadedComponents = {};
  this.containerRef = new h.ElementRef();
  this.taskQueue = new k.SerialTaskQueue();
  this.onBackButtonPressed = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=83B file=valdi_navigation/src/NavigationView
// closure: this, e
function {
  if (!((this.viewModel.children == null))) goto L_4c;
  this.viewModel.children;
  this.viewModel;
  goto L_52;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=1 bc=449B file=valdi_navigation/src/NavigationView
// locals: t, e, i, this
// closure: NavigationViewNavigator, l, h, w
function {
  this = this;
  let i;
  let e;
  let t;
  this.keySequence = (this.keySequence ++);
  t = (this.keySequence ++).toString();
  e = new NavigationViewNavigator(this);
  i = {key: t, reloadableData: undefined, renderFn: function <atom:0>, title: "", isModal: false, hotReloadObserver: undefined, navigator: e, ref: new l.ComponentRef(), viewContainerRef: new h.ElementRef(), occlusionViewRef: new h.ElementRef(), isTransparent: false};
  this.appendEntry(i, false);
  w.Device.setBackButtonObserver(this.onBackButtonPressed);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=198B file=valdi_navigation/src/NavigationView
// locals: t, this
// closure: w
function {
  this = this;
  w.Device.setBackButtonObserver(undefined);
  let t;
  for (const t of this.state.stack) {
    this.teardownStackEntry(t);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=363B file=valdi_navigation/src/NavigationView
// locals: this
// closure: e, i, o, R
function {
  this = this;
  e.beginRender(i, undefined);
  e.beginRender(o, undefined);
  e.setAttributeRef(this.containerRef);
  e.setAttributeStyle("style", R.itemContainer);
  this.renderNavigationStack();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=114B file=valdi_navigation/src/NavigationView
// closure: i, this
function {
  i.renderFn();
  this.setupItem(i.ref);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=241B file=valdi_navigation/src/NavigationView
// closure: e, s, i, R
function {
  e.beginRender(s, undefined);
  e.setAttributeRef(i.occlusionViewRef);
  e.setAttributeStyle("style", R.occlusionOverlay);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=7 cpool=2 bc=623B file=valdi_navigation/src/NavigationView
// locals: t, i, this
// closure: e, s, R, n, v, a, f
function {
  this = this;
  let t;
  t = this.getCurrentItem();
  let i;
  // close_loc i
  for (const i of this.state.stack) {
    e.beginRender(n, i.key);
    e.setAttributeRef(i.viewContainerRef);
    e.setAttributeStyle("style", R.item);
    e.beginComponent(v.DefaultErrorBoundary, a, undefined, undefined);
    e.setUnnamedSlot(function <atom:0>);
    e.endComponent();
    f.when((i !== t), function <atom:0>);
    e.endRender();
    // close_loc i
  }
  // close_loc i
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=246B file=valdi_navigation/src/NavigationView
// args: t
// locals: e, i, o, this
function {
  this = this;
  let i;
  let e;
  e = t.single();
  if (!(!e)) goto L_35;
  return;
  i = this.renderer.getComponentRootElements(e, false);
  let o;
  for (const o of i) {
    o.setAttribute("$width", "100%");
    o.setAttribute("$height", "100%");
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=141B file=valdi_navigation/src/NavigationView
// locals: this
function {
  this = this;
  return this.state.stack[(this.state.stack.length - 1)];
}

// fn <atom:0>  args=7 vars=9 closure=0 cpool=0 bc=97B file=valdi_navigation/src/NavigationView
// args: t, e, i, o, n, a, s
// locals: r, this
function {
  this = this;
  let r;
  r = this.makeEntry(t, e, i, o, n, a);
  this.appendEntry(r, s);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=166B file=valdi_navigation/src/NavigationView
// closure: this, t, e
function {
  // append([], 0, this.state.stack)
  [][this.state.stack] = t;
  (t ++);
  this.setState({stack: []});
  this.applyTransitionFromState(e, 1, [t]);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=45B file=valdi_navigation/src/NavigationView
// closure: this, e, t
function {
  this.applyTransitionToState(e, [t]);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=108B file=valdi_navigation/src/NavigationView
// closure: this, i
function {
  this.updateStackNonAnimated(this.state.stack);
  i();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=3 bc=404B file=valdi_navigation/src/NavigationView
// args: i
// locals: e
// closure: this, t, e, b
function {
  if (!(e)) goto L_11e;
  if (!((this.state.stack.length > 0))) goto L_11e;
  let e;
  e = this.getCurrentItem();
  this.renderer.batchUpdates(function <atom:0>);
  this.animatePromise({duration: b}, function <atom:0>).then(function <atom:0>);
  // close_loc e
  return;
  // append([], 0, this.state.stack)
  [][this.state.stack] = t;
  (t ++);
  this.updateStackNonAnimated([]);
  i();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=75B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: this
// closure: b
function {
  this = this;
  this.taskQueue.enqueueTask(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=835B file=valdi_navigation/src/NavigationView
// args: t, e, i
// locals: o, n, this
function {
  this = this;
  let o;
  o = this.containerRef.single().frame;
  let n;
  for (const n of i) {
    n.viewContainerRef.setAttribute("opacity", 1);
    if (!((e === 1))) goto L_1db;
    if (!(n.isModal)) goto L_167;
    goto L_1d8;
    // [栈深重同步 5 -> 4]
    n.viewContainerRef.setAttribute("translationX", o.width);
    goto L_252;
    if (!((e === 0))) goto L_252;
    n.viewContainerRef.setAttribute("translationY", o.height);
    e;
  }
  t.viewContainerRef.setAttribute("opacity", 1);
  t.viewContainerRef.setAttribute("translationX", 0);
  t.occlusionViewRef.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=768B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: i, o, n, this
function {
  this = this;
  let o;
  let i;
  i = this.containerRef.single().frame;
  o = false;
  let n;
  for (const n of e) {
    n.viewContainerRef.setAttribute("opacity", 1);
    if (!(n.isModal)) goto L_148;
    o = true;
    true;
    goto L_196;
    // [栈深重同步 4 -> 3]
    n.viewContainerRef.setAttribute("translationX", 0);
  }
  t.viewContainerRef.setAttribute("opacity", 1);
  if (!(o)) goto L_240;
  goto L_2b2;
  // [栈深重同步 1 -> 0]
  t.viewContainerRef.setAttribute("translationX", (-i.width / 6));
  t.occlusionViewRef.setAttribute("opacity", 1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=45B file=valdi_navigation/src/NavigationView
// closure: c, v, d
function {
  return c.resolveComponentConstructor(v, d);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=91B file=valdi_navigation/src/NavigationView
// closure: this
function {
  if ((this.isDestroyed())) goto L_5a;
  this.scheduledRebuild = false;
  this.rebuildStack();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=129B file=valdi_navigation/src/NavigationView
// closure: this, t, m
function {
  this.hotReloadedComponents[t] = true;
  if ((this.scheduledRebuild)) goto L_80;
  this.scheduledRebuild = true;
  m.onIdleInterruptible(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=252B file=valdi_navigation/src/NavigationView
// closure: e, f, r, y, R, i
function {
  e.beginComponent(f.target, r, undefined, y);
  if ((e.hasContext())) goto L_a8;
  e.setContext(R);
  e.setViewModelProperties(i);
  e.endComponent();
  return;
}

// fn <atom:0>  args=6 vars=16 closure=10 cpool=3 bc=649B file=valdi_navigation/src/NavigationView
// args: t, i, o, n, a, s
// locals: d, p, v, f, k, w, b, R, y, this
// closure: c, m, e, r, u, module, g, NavigationViewNavigator, l, h
function {
  this = this;
  let y;
  let R;
  let b;
  let w;
  let k;
  let f;
  let v;
  let p;
  let d;
  d = c.parseComponentPath(t);
  p = u.getModuleLoader(module);
  v = p.load.bind(p);
  f = new g.Lazy(function <atom:0>);
  k = p.onHotReload(module, d.filePath, function <atom:0>);
  this.keySequence = (this.keySequence ++);
  w = (this.keySequence ++).toString();
  b = new NavigationViewNavigator(this);
  null;
  o;
  R = {navigator: b};
  y = new l.ComponentRef();
  return {key: w, reloadableData: {componentPath: t, viewModel: i, context: R}, renderFn: function <atom:0>, title: n, isModal: a, hotReloadObserver: k, navigator: b, ref: y, viewContainerRef: new h.ElementRef(), occlusionViewRef: new h.ElementRef(), isTransparent: s};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=206B file=valdi_navigation/src/NavigationView
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = 0;
  if (!((e < this.state.stack.length))) goto L_cc;
  if (!((this.state.stack[e].navigator === t))) goto L_c1;
  return e;
  e = <e_new>;
  (e++);
  goto L_7;
  return -1;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=165B file=valdi_navigation/src/NavigationView
// args: i
// locals: o
// closure: this, t, e
function {
  let o;
  o = this.indexOfNavigator(t);
  if (!((o > 0))) goto L_a2;
  goto L_a4;
  // [栈深重同步 1 -> 0]
  i();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=75B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: this
function {
  this = this;
  this.taskQueue.enqueueTask(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=290B file=valdi_navigation/src/NavigationView
// args: i
// locals: o
// closure: this, t, e
function {
  let o;
  o = this.indexOfNavigator(t);
  if (!((o < 0))) goto L_35;
  i();
  return;
  if (!((o > 0))) goto L_b1;
  if (!(!this.state.stack[o].isModal)) goto L_b1;
  o = <o_new>;
  (o--);
  goto L_35;
  this.doPop(this.state.stack[o], 0, e, i);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=75B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: this
function {
  this = this;
  this.taskQueue.enqueueTask(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=158B file=valdi_navigation/src/NavigationView
// args: e
// locals: i
// closure: this, t
function {
  if (!((this.state.stack.length > 1))) goto L_9d;
  let i;
  i = this.getCurrentItem();
  this.doPop(i, 1, t, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=75B file=valdi_navigation/src/NavigationView
// args: t
// locals: this
function {
  this = this;
  this.taskQueue.enqueueTask(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=44B file=valdi_navigation/src/NavigationView
// closure: this, s, n
function {
  this.applyTransitionToState(s, n);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=45B file=valdi_navigation/src/NavigationView
// closure: this, s, e, n
function {
  this.applyTransitionFromState(s, e, n);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=266B file=valdi_navigation/src/NavigationView
// locals: t
// closure: this, t, a, o
function {
  if (!((this.state.stack.indexOf(t) >= 0))) goto L_107;
  let t;
  t = this.state.stack.slice(0, a);
  this.updateStackNonAnimated(t);
  o();
  return;
}

// fn <atom:0>  args=4 vars=10 closure=1 cpool=3 bc=781B file=valdi_navigation/src/NavigationView
// args: t, e, i, o
// locals: n, a, s, r, r#1, this
// closure: b
function {
  this = this;
  let s;
  let a;
  let n;
  n = [];
  a = this.state.stack.indexOf(t);
  s = this.state.stack[(a - 1)];
  let r;
  r = a;
  if (!((r < this.state.stack.length))) goto L_192;
  n.push(this.state.stack[r]);
  r = <r_new>;
  (r++);
  goto L_cc;
  let r#1;
  for (const r#1 of n) {
    this.teardownStackEntry(r#1);
  }
  if (!(i)) goto L_277;
  this.renderer.batchUpdates(function <atom:0>);
  goto L_30c;
  // [栈深重同步 1 -> 0]
  this.updateStackNonAnimated(this.state.stack.slice(0, a));
  o();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=47B file=valdi_navigation/src/NavigationView
// args: t
function {
  if (!((t.hotReloadObserver == null))) goto L_2b;
  t.hotReloadObserver;
  t;
  goto L_2e;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=772B file=valdi_navigation/src/NavigationView
// locals: t, e, this
function {
  this = this;
  let t;
  t = [];
  let e;
  for (const e of this.state.stack) {
    if (!(e.reloadableData)) goto L_29c;
    if (!(this.hotReloadedComponents[e.reloadableData.componentPath])) goto L_29c;
    this.teardownStackEntry(e);
    goto L_2c6;
    // [栈深重同步 4 -> 3]
    t.push(e);
  }
  this.hotReloadedComponents = {};
  this.updateStackNonAnimated(t);
  return;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=0 bc=738B file=valdi_navigation/src/NavigationView
// locals: e, i, o, n, t, e#1
// closure: this, t
function {
  let n;
  let o;
  let i;
  let e;
  this.setState({stack: t});
  e = this.getCurrentItem();
  i = this.state.stack;
  o = i.length;
  n = false;
  if (!((o > 0))) goto L_2e1;
  let t;
  o = <o_new>;
  (o--);
  t = i[o];
  if (((t === e))) goto L_d7;
  if (!(n)) goto L_1a6;
  t.viewContainerRef.setAttribute("translationX", 0);
  t.viewContainerRef.setAttribute("opacity", 1);
  n = t.isTransparent;
  t.isTransparent;
  goto L_ab;
  let e#1;
  e#1 = this.containerRef.single().frame.width;
  t.viewContainerRef.setAttribute("translationX", (10000 * e#1));
  t.viewContainerRef.setAttribute("opacity", 0);
  n = false;
  false;
  goto L_ab;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=75B file=valdi_navigation/src/NavigationView
// args: t
// locals: this
function {
  this = this;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=39B file=valdi_navigation/src/NavigationView
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.navigationView = t;
  this.__shouldDisableMakeOpaque = true;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=131B file=valdi_navigation/src/NavigationView
// args: t
// locals: e
function {
  let e;
  e = t.componentContext;
  if (!(!!e)) goto L_82;
  if (!((e.pageNavigationOptions == null))) goto L_60;
  e.pageNavigationOptions;
  goto L_81;
  return ("transparent" === undefined.pageBackgroundColor);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=256B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: this
function {
  this = this;
  if (!((t.platformNavigationTitle == null))) goto L_d3;
  t.platformNavigationTitle;
  this.navigationView.pushComponent(t.componentPath, t.componentViewModel, t.componentContext, "", false, this.hasTransparentBackground(t), e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=valdi_navigation/src/NavigationView
// args: t
// locals: this
function {
  this = this;
  this.navigationView.popToNavigator(this, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=15B file=valdi_navigation/src/NavigationView
// args: t
function {
  throw new Error("popToRoot is not currently implemented in the desktop app navigation");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=15B file=valdi_navigation/src/NavigationView
// args: t
function {
  throw new Error("popToSelf is not currently implemented in the desktop app navigation");
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=256B file=valdi_navigation/src/NavigationView
// args: t, e
// locals: this
function {
  this = this;
  if (!((t.platformNavigationTitle == null))) goto L_d3;
  t.platformNavigationTitle;
  this.navigationView.pushComponent(t.componentPath, t.componentViewModel, t.componentContext, "", true, this.hasTransparentBackground(t), e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=valdi_navigation/src/NavigationView
// args: t
// locals: this
function {
  this = this;
  this.navigationView.dismissNavigator(this, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=valdi_navigation/src/NavigationView
// args: e
// closure: t
function {
  if (!(t.isLoggingEnabled)) goto L_56;
  console.error("forceDisableDismissalGesture is not implemented in the desktop app navigation");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_navigation/src/NavigationView
// args: t
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_navigation/src/NavigationView
// args: t
function {
  return;
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=32 bc=1228B file=valdi_navigation/src/NavigationView
// args: require, module, exports
// locals: t, e, i, o, n, a, s, r, d, c, l, h, u, p, v, m, f, k, g, w, b, NavigationView, <class_fields_init>, NavigationView#1, R, NavigationViewNavigator, <class_fields_init>#1, NavigationViewNavigator#1
function {
  let NavigationViewNavigator#1;
  let R;
  let NavigationView#1;
  let b;
  let w;
  let g;
  let k;
  let f;
  let m;
  let v;
  let p;
  let u;
  let h;
  let l;
  let c;
  let d;
  let r;
  let s;
  let a;
  let n;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NavigationView = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/JSX").jsx;
  i = e.makeNodePrototype("view", ["backgroundColor", "white", "width", "100%", "height", "100%"], "mPv8OIGZ0Epeok2u");
  o = e.makeNodePrototype("layout", undefined, "dHD109xvWbHvkEi7");
  n = e.makeNodePrototype("view", undefined, "7djNXuA6SUO5q_of");
  a = e.makeComponentPrototype(undefined, "BeFvKE0yvizlMIOh");
  s = e.makeNodePrototype("view", undefined, "pOiyyJnPEt3Nd9EW");
  r = e.makeComponentPrototype(undefined, "dtESOJLmk9VndpK1");
  d = require("valdi_core/src/Component");
  c = require("valdi_core/src/ComponentPath");
  l = require("valdi_core/src/ComponentRef");
  h = require("valdi_core/src/ElementRef");
  u = require("valdi_core/src/ModuleLoaderGlobal");
  p = require("valdi_core/src/Style");
  v = require("valdi_core/src/debugging/DefaultErrorBoundary");
  m = require("valdi_core/src/utils/OnIdle");
  f = require("valdi_core/src/utils/When");
  k = require("coreutils/src/SerialTaskQueue");
  g = require("foundation/src/Lazy");
  w = require("valdi_core/src/Device");
  b = 0.25;
  let NavigationView;
  let <class_fields_init>;
  class NavigationView extends d.StatefulComponent { ... }
  <proto:NavigationView>.onCreate = function <atom:0>;
  <proto:NavigationView>.onDestroy = function <atom:0>;
  <proto:NavigationView>.onRender = function <atom:0>;
  <proto:NavigationView>.renderNavigationStack = function <atom:0>;
  <proto:NavigationView>.setupItem = function <atom:0>;
  <proto:NavigationView>.getCurrentItem = function <atom:0>;
  <proto:NavigationView>.pushComponent = function <atom:0>;
  <proto:NavigationView>.appendEntry = function <atom:0>;
  <proto:NavigationView>.applyTransitionFromState = function <atom:0>;
  <proto:NavigationView>.applyTransitionToState = function <atom:0>;
  <proto:NavigationView>.makeEntry = function <atom:0>;
  <proto:NavigationView>.indexOfNavigator = function <atom:0>;
  <proto:NavigationView>.popToNavigator = function <atom:0>;
  <proto:NavigationView>.dismissNavigator = function <atom:0>;
  <proto:NavigationView>.pop = function <atom:0>;
  <proto:NavigationView>.doPop = function <atom:0>;
  <proto:NavigationView>.teardownStackEntry = function <atom:0>;
  <proto:NavigationView>.rebuildStack = function <atom:0>;
  <proto:NavigationView>.updateStackNonAnimated = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NavigationView>;
  NavigationView = function <atom:0>;
  // close_loc <class_fields_init>
  NavigationView#1 = function <atom:0>;
  exports.NavigationView = NavigationView#1;
  R = {itemContainer: new p.Style({width: "100%", flexGrow: 1}), item: new p.Style({position: "absolute", width: "100%", height: "100%"}), occlusionOverlay: new p.Style({backgroundColor: "rgba(0, 0, 0, 0.2)", position: "absolute", width: "100%", height: "100%"})};
  let NavigationViewNavigator;
  let <class_fields_init>#1;
  class NavigationViewNavigator extends undefined { ... }
  <proto:NavigationViewNavigator>.hasTransparentBackground = function <atom:0>;
  <proto:NavigationViewNavigator>.pushComponent = function <atom:0>;
  <proto:NavigationViewNavigator>.pop = function <atom:0>;
  <proto:NavigationViewNavigator>.popToRoot = function <atom:0>;
  <proto:NavigationViewNavigator>.popToSelf = function <atom:0>;
  <proto:NavigationViewNavigator>.presentComponent = function <atom:0>;
  <proto:NavigationViewNavigator>.dismiss = function <atom:0>;
  <proto:NavigationViewNavigator>.forceDisableDismissalGesture = function <atom:0>;
  <proto:NavigationViewNavigator>.setBackButtonObserver = function <atom:0>;
  <proto:NavigationViewNavigator>.setOnPausePopAfterDelay = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:NavigationViewNavigator>;
  NavigationViewNavigator = function <atom:0>;
  // close_loc <class_fields_init>#1
  NavigationViewNavigator#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/NavigationView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
