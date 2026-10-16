// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=35B file=valdi_core/src/Valdi
// args: n, o
// locals: r
// closure: t, e
function {
  let r;
  r = parseInt(o, 10);
  if (!((r >= t.length))) goto L_1d;
  throw ("not enough args provided for string: " + e);
  return t[r];
}

// fn l  args=2 vars=2 closure=0 cpool=3 bc=48B file=valdi_core/src/Valdi
// args: e, t
function {
  t = ...1;
  return e.replace(new RegExp("\\$(\\d+)"), function <atom:0>);   // tail call
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Valdi
// args: e
// closure: d, m
function {
  return d.isModuleLoaded(m, e);   // tail call
}

// fn p  args=2 vars=2 closure=2 cpool=0 bc=45B file=valdi_core/src/Valdi
// args: e, t
// closure: d, m
function {
  d.loadModule(m, e, t);
  return;
}

// fn c  args=2 vars=2 closure=2 cpool=0 bc=46B file=valdi_core/src/Valdi
// args: e, t
// closure: d, m
function {
  return d.getModuleEntry(m, e, t, false);   // tail call
}

// fn g  args=2 vars=2 closure=2 cpool=0 bc=46B file=valdi_core/src/Valdi
// args: e, t
// closure: d, m
function {
  return d.getModuleEntry(m, e, t, true);   // tail call
}

// fn h  args=1 vars=1 closure=2 cpool=0 bc=43B file=valdi_core/src/Valdi
// args: e
// closure: d, m
function {
  return d.getModuleJsPaths(m, e);   // tail call
}

// fn f  args=1 vars=9 closure=0 cpool=0 bc=562B file=valdi_core/src/Valdi
// args: e
// locals: t, n, o, r, n#1, s, i, a
function {
  let o;
  let n;
  let t;
  t = new Array();
  n = e.split(".");
  o = undefined;
  let r;
  for (const r of n) {
    let n#1;
    n#1 = r.indexOf("[");
    if (!((n#1 > 0))) goto L_1b6;
    let a;
    let i;
    let s;
    s = r.indexOf("]");
    if (((-1 === s))) goto L_cd;
    if (!((n#1 > s))) goto L_e6;
    throw new Error((("Invalid nodeIdPath: '" + e) + "'"));
    i = r.substr(0, n#1);
    t.push({id: i});
    a = r.substr((n#1 + 1), ((s - n#1) - 1));
    t.push({forEachKey: a});
    o = i;
    i;
   continue;
    t.push({id: r});
    o = undefined;
    undefined;
  }
  if (!(o)) goto L_22d;
  t.push({id: o});
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=valdi_core/src/Valdi
// args: t
// closure: e, n
function {
  t = ...0;
  e.callAction(n, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=39B file=valdi_core/src/Valdi
// args: t, n
// locals: o
// closure: e
function {
  let o;
  o = t[n];
  if ((o)) goto L_22;
  o = function <atom:0>;
  function <atom:0>;
  t[n] = o;
  o;
  return o;
}

// fn C  args=1 vars=1 closure=0 cpool=1 bc=20B file=valdi_core/src/Valdi
// args: e
function {
  return new Proxy({}, {get: function <atom:0>});
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.renderer.contextId;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.renderer.getComponentKey(this);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.renderer.getComponentParent(this);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.renderer.getComponentChildren(this);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.renderer.getComponentRootElements(this, false);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=111B file=valdi_core/src/Valdi
// locals: e, t, this
function {
  this = this;
  let e;
  for (const e of this.rootElements) {
    let t;
    t = e.getAttribute("$id");
    if (!(t)) continue;
    return t;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return this.constructor;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=90B file=valdi_core/src/Valdi
// locals: this
// closure: C
function {
  this = this;
  if ((this._actions)) goto L_36;
  this._actions = C(this);
  C(this);
  return this._actions;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=38B file=valdi_core/src/Valdi
// args: e, t
function {
  return e.getAppliedAttribute(t);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=43B file=valdi_core/src/Valdi
// args: e, t, n
function {
  e.setAttribute(t, n);
  return true;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=2 bc=281B file=valdi_core/src/Valdi
// locals: e, t, n, o, this
function {
  this = this;
  if (!(!this._elements)) goto L_f5;
  let e;
  e = {};
  let t;
  for (const t of this.componentClass.elements) {
    let o;
    let n;
    n = this.elementRefs[t];
    o = new Proxy(n, {get: function <atom:0>, set: function <atom:0>});
    e[t] = {attributes: o};
  }
  this._elements = e;
  return this._elements;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  if ((this._elementRefs)) goto L_34;
  this._elementRefs = {};
  {};
  return this._elementRefs;
}

// fn <atom:0>  args=3 vars=7 closure=4 cpool=0 bc=417B file=valdi_core/src/Valdi
// args: t, o, r
// locals: s, e, t#1, this
// closure: <class_fields_init>, require, e, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s;
  this.renderer = t;
  this.viewModel = o;
  this.context = r;
  s = this.componentClass;
  if ((s.renderTemplate)) goto L_ee;
  require(e.parseComponentPath(s.componentPath).filePath, true, true);
  if (!(s.elements.length)) goto L_1a0;
  let e;
  e = this.elementRefs;
  let t#1;
  for (const t#1 of s.elements) {
    e[t#1] = new n.ElementRef();
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  this.renderer.renderComponent(this, undefined);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=310B file=valdi_core/src/Valdi
// locals: e, this
function {
  this = this;
  let e;
  e = this.animationOptions;
  if (!(e)) goto L_cd;
  this.animationOptions = undefined;
  goto L_135;
  // [栈深重同步 1 -> 0]
  this.componentClass.renderTemplate.apply(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=52B file=valdi_core/src/Valdi
// closure: e, n
function {
  if (!((e.completion == null))) goto L_2b;
  e.completion;
  e;
  goto L_30;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, false);
  n();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=76B file=valdi_core/src/Valdi
// closure: t, this
function {
  t();
  this.renderer.renderComponent(this, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=2 bc=92B file=valdi_core/src/Valdi
// args: n
// closure: e, t, this
function {
  null;
  e;
  this.renderer.animate({completion: function <atom:0>}, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=14B file=valdi_core/src/Valdi
// args: e, t
// locals: this
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=211B file=valdi_core/src/Valdi
// args: e
// locals: t, n, e#1, n#1, this
function {
  this = this;
  let t;
  t = [];
  let n;
  for (const n of e) {
    let e#1;
    e#1 = this.elementRefs[n];
    if (!(e#1)) continue;
    let n#1;
    for (const n#1 of e#1.all()) {
      t.push(n#1.id);
      // [栈深重同步 3 -> 6]
    }
  }
  return t;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=78B file=valdi_core/src/Valdi
// closure: this, e, t, n
function {
  this.callRuntimeElementIdMethod(this.stringIdsToElementIds(e), t, n);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=75B file=valdi_core/src/Valdi
// args: e, t, n
// locals: this
function {
  this = this;
  this.renderer.onRenderComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=34B file=valdi_core/src/Valdi
// args: t
// closure: r, s, o, e, n
function {
  r[s] = t;
  o = <o_new>;
  (o++);
  if (!((o === e.length))) goto L_21;
  n(r);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=141B file=valdi_core/src/Valdi
// args: e, t, n
// locals: o, r, s, i, this
function {
  this = this;
  let r;
  let o;
  o = 0;
  r = [];
  let s;
  s = 0;
  // close_loc s
  if (!((s < e.length))) goto L_89;
  let i;
  i = e[s];
  r.push(undefined);
  t(this.componentId, i, function <atom:0>);
  // close_loc s
  s = <s_new>;
  (s++);
  goto L_17;
  // close_loc s
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  this.callRuntimeElementIdMethodFromStringIds(e, d.getFrameForElementId, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  this.callRuntimeElementIdMethod(e, d.getFrameForElementId, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  this.callRuntimeElementIdMethodFromStringIds(e, d.getNativeViewForElementId, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  this.callRuntimeElementIdMethodFromStringIds(e, d.getLayoutDebugInfo, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=78B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  this.callRuntimeElementIdMethodFromStringIds(e, d.getViewNodeDebugInfo, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_core/src/Valdi
// args: e
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=valdi_core/src/Valdi
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Valdi
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/Valdi
function {
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=94B file=valdi_core/src/Valdi
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  d.postMessage(this.componentId, "callAction", {action: e, parameters: t});
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=184B file=valdi_core/src/Valdi
// args: e, t
// locals: n, this
// closure: a
function {
  this = this;
  let n;
  if (!(this.isDestroyed())) goto L_2d;
  return;
  n = a.mergePartial(e, this.state);
  if (!(n)) goto L_af;
  this.state = n;
  this.render();
  if (!(t)) goto L_b7;
  t();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=valdi_core/src/Valdi
// args: e
// locals: this
function {
  this = this;
  this.renderer.registerComponentDisposable(this, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=valdi_core/src/Valdi
// args: e
// locals: this
function {
  this = this;
  this.animationOptions = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=valdi_core/src/Valdi
// closure: this, e
function {
  this.setState(e);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=42B file=valdi_core/src/Valdi
// args: e, t
// locals: this
function {
  this = this;
  return this.animate(t, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=valdi_core/src/Valdi
// locals: this
function {
  this = this;
  return !this.renderer.isComponentAlive(this);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=155B file=valdi_core/src/Valdi
// args: e, t
// locals: n
function {
  let n;
  n = e.indexOf(":");
  if (!((-1 != n))) goto L_8c;
  t = e.substring(0, n);
  e = e.substring((n + 1));
  e.substring((n + 1));
  return {bundleName: t, valdiPath: e};
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=32B file=valdi_core/src/Valdi
// args: e, t, n
// locals: o
function {
  let o;
  o = e;
  o.renderTemplate = n;
  o.elements = t;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/Valdi
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
  return this;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/Valdi
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
  return this;
}

// fn x  args=1 vars=3 closure=1 cpool=0 bc=279B file=valdi_core/src/Valdi
// args: e
// locals: t, n
// closure: LegacyVueComponent
function {
  let n;
  let t;
  t = e.componentClass.componentPath;
  n = LegacyVueComponent.resolveBundleAndPath(t);
  return {valdiPath: n.valdiPath, bundleName: n.bundleName, viewModel: e.viewModel, context: e.context};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/Valdi
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.actionCaller = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=valdi_core/src/Valdi
// args: e
// locals: this
function {
  this = this;
  this.actionCaller.callAction("push", [e]);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=134B file=valdi_core/src/Valdi
// args: e
// locals: t, this
// closure: x
function {
  this = this;
  let t;
  t = x(e);
  null;
  t;
  this.push({animated: e.animated, newNavigationTitle: e.newNavigationTitle});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=valdi_core/src/Valdi
// args: e
// locals: this
function {
  this = this;
  this.actionCaller.callAction("present", [e]);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=173B file=valdi_core/src/Valdi
// args: e
// locals: t, this
// closure: x
function {
  this = this;
  let t;
  t = x(e);
  null;
  t;
  this.present({animated: e.animated, newNavigationTitle: e.newNavigationTitle, wrapInNavigationController: e.wrapInNavigationController});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=valdi_core/src/Valdi
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_e;
  e;
  e = true;
  e#1 = true;
  this.actionCaller.callAction("back", [{animated: e}]);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=valdi_core/src/Valdi
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_e;
  e;
  e = true;
  e#1 = true;
  this.actionCaller.callAction("popToSelf", [{animated: e}]);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=valdi_core/src/Valdi
// args: e
// locals: e#1, this
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_e;
  e;
  e = true;
  e#1 = true;
  this.actionCaller.callAction("dismiss", [{animated: e}]);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=71B file=valdi_core/src/Valdi
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>, Navigation
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
  this.navigation = new Navigation(this);
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=55B file=valdi_core/src/Valdi
// args: e
// locals: this
function {
  this = this;
  this.callAction("setNavigationTitle", [{title: e}]);
  return;
}

// fn M  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/Valdi
// args: e
// closure: d
function {
  d.performSyncWithMainThread(e);
  return;
}

// fn I  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_core/src/Valdi
// closure: v
function {
  return v;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=valdi_core/src/Valdi
// args: t
// closure: e
function {
  if (!((e.rootComponents[t] == null))) goto L_2d;
  e.rootComponents[t];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.renderer;
}

// fn E  args=0 vars=1 closure=6 cpool=1 bc=494B file=valdi_core/src/Valdi
// locals: e
// closure: y, o, v, r, d, i
function {
  if (!(y)) goto L_58;
  o.jsx.removeCustomMessageHandler(y);
  y = undefined;
  undefined;
  if (!(d.isDebugEnabled)) goto L_10f;
  goto L_110;
  // [栈深重同步 4 -> 3]
  v = new r.RootComponentsManager(o.jsx, undefined, d.submitDebugMessage);
  new r.RootComponentsManager(o.jsx, undefined, d.submitDebugMessage);
  if (!(d.isDebugEnabled)) goto L_1ea;
  let e;
  e = v;
  y = new i.DebuggerInputMessageHandler(function <atom:0>);
  new i.DebuggerInputMessageHandler(function <atom:0>);
  o.jsx.addCustomMessageHandler(y);
  // close_loc e
  return v;
}

// fn b  args=3 vars=3 closure=1 cpool=0 bc=76B file=valdi_core/src/Valdi
// args: e, t, n
// closure: o
function {
  o.jsx.onDaemonClientEvent(e, t, n);
  return;
}

// fn P  args=0 vars=0 closure=1 cpool=0 bc=70B file=valdi_core/src/Valdi
// closure: o
function {
  return o.jsx.daemonClientManager;
}

// fn <atom:0>  args=3 vars=44 closure=0 cpool=60 bc=1214B file=valdi_core/src/Valdi
// args: require, module, exports
// locals: e, t, n, o, r, s, i, a, l, d, m, u, p, c, g, h, f, C, LegacyVueComponent, <class_fields_init>, LegacyVueComponent#1, LegacyVueStatefulComponent, <class_fields_init>#1, LegacyVueStatefulComponent#1, LegacyVuePureComponent, <class_fields_init>#2, LegacyVuePureComponent#1, x, Navigation, <class_fields_init>#3, Navigation#1, ViewControllerComponent, <class_fields_init>#4, ViewControllerComponent#1, M, v, y, I, E, b, P
function {
  l = function l;
  u = function u;
  p = function p;
  c = function c;
  g = function g;
  h = function h;
  f = function f;
  C = function C;
  x = function x;
  M = function M;
  I = function I;
  E = function E;
  b = function b;
  P = function P;
  let y;
  let v;
  let ViewControllerComponent#1;
  let Navigation#1;
  let LegacyVuePureComponent#1;
  let LegacyVueStatefulComponent#1;
  let LegacyVueComponent#1;
  let m;
  let d;
  let a;
  let i;
  let s;
  let r;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.formatParameterizedString = undefined;
  exports.isModuleLoaded = undefined;
  exports.loadModule = undefined;
  exports.getModuleFileEntryAsBytes = undefined;
  exports.getModuleFileEntryAsString = undefined;
  exports.getModuleJsPaths = undefined;
  exports.parseNodeIdPath = undefined;
  exports.LegacyVueComponent = undefined;
  exports.LegacyVueStatefulComponent = undefined;
  exports.LegacyVuePureComponent = undefined;
  exports.Navigation = undefined;
  exports.ViewControllerComponent = undefined;
  exports.performSyncWithMainThread = undefined;
  exports.getLastRootComponentsManager = undefined;
  exports.makeRootComponentsManager = undefined;
  exports.onDaemonClientEvent = undefined;
  exports.getDaemonClientManager = undefined;
  e = require("./ComponentPath");
  t = require("./ValdiRuntimeProvider");
  n = require("./ElementRef");
  o = require("./JSXBootstrap");
  r = require("./RootComponentsManager");
  s = require("./ModuleLoaderGlobal");
  i = require("./debugging/DebuggerInputMessageHandler");
  a = require("./utils/PartialUtils");
  exports.formatParameterizedString = l;
  d = t.getValdiRuntime();
  m = s.getModuleLoader(module).package;
  exports.isModuleLoaded = u;
  exports.loadModule = p;
  exports.getModuleFileEntryAsBytes = c;
  exports.getModuleFileEntryAsString = g;
  exports.getModuleJsPaths = h;
  exports.parseNodeIdPath = f;
  let LegacyVueComponent;
  let <class_fields_init>;
  class LegacyVueComponent extends undefined { ... }
  <proto:LegacyVueComponent>.componentId = function <atom:0>;
  <proto:LegacyVueComponent>.componentKey = function <atom:0>;
  <proto:LegacyVueComponent>.parent = function <atom:0>;
  <proto:LegacyVueComponent>.children = function <atom:0>;
  <proto:LegacyVueComponent>.rootElements = function <atom:0>;
  <proto:LegacyVueComponent>.elementIdWithinParent = function <atom:0>;
  <proto:LegacyVueComponent>.componentClass = function <atom:0>;
  <proto:LegacyVueComponent>.actions = function <atom:0>;
  <proto:LegacyVueComponent>.elements = function <atom:0>;
  <proto:LegacyVueComponent>.elementRefs = function <atom:0>;
  <proto:LegacyVueComponent>.render = function <atom:0>;
  <proto:LegacyVueComponent>.onRender = function <atom:0>;
  <proto:LegacyVueComponent>.animate = function <atom:0>;
  <proto:LegacyVueComponent>.stringIdsToElementIds = function <atom:0>;
  <proto:LegacyVueComponent>.callRuntimeElementIdMethodFromStringIds = function <atom:0>;
  <proto:LegacyVueComponent>.callRuntimeElementIdMethod = function <atom:0>;
  <proto:LegacyVueComponent>.getElementFrames = function <atom:0>;
  <proto:LegacyVueComponent>.getElementFramesFromRawElementIds = function <atom:0>;
  <proto:LegacyVueComponent>.getElementNativeViews = function <atom:0>;
  <proto:LegacyVueComponent>.getElementLayoutDebugInfos = function <atom:0>;
  <proto:LegacyVueComponent>.getElementNativeDebugInfos = function <atom:0>;
  <proto:LegacyVueComponent>.onViewModelUpdate = function <atom:0>;
  <proto:LegacyVueComponent>.onStateUpdate = function <atom:0>;
  <proto:LegacyVueComponent>.onCreate = function <atom:0>;
  <proto:LegacyVueComponent>.onDestroy = function <atom:0>;
  <proto:LegacyVueComponent>.callAction = function <atom:0>;
  <proto:LegacyVueComponent>.setState = function <atom:0>;
  <proto:LegacyVueComponent>.registerDisposable = function <atom:0>;
  <proto:LegacyVueComponent>.setAnimationOptionsForNextRender = function <atom:0>;
  <proto:LegacyVueComponent>.setStateAnimated = function <atom:0>;
  <proto:LegacyVueComponent>.isDestroyed = function <atom:0>;
  function <atom:0>.resolveBundleAndPath = function <atom:0>;
  function <atom:0>.setup = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LegacyVueComponent>;
  LegacyVueComponent = function <atom:0>;
  // close_loc <class_fields_init>
  LegacyVueComponent#1 = function <atom:0>;
  exports.LegacyVueComponent = LegacyVueComponent#1;
  let LegacyVueStatefulComponent;
  let <class_fields_init>#1;
  class LegacyVueStatefulComponent extends LegacyVueComponent#1 { ... }
  <class_fields_init>#1 = undefined;
  <proto:LegacyVueStatefulComponent>;
  LegacyVueStatefulComponent = function <atom:0>;
  // close_loc <class_fields_init>#1
  LegacyVueStatefulComponent#1 = function <atom:0>;
  exports.LegacyVueStatefulComponent = LegacyVueStatefulComponent#1;
  let LegacyVuePureComponent;
  let <class_fields_init>#2;
  class LegacyVuePureComponent extends LegacyVueComponent#1 { ... }
  <class_fields_init>#2 = undefined;
  <proto:LegacyVuePureComponent>;
  LegacyVuePureComponent = function <atom:0>;
  // close_loc <class_fields_init>#2
  LegacyVuePureComponent#1 = function <atom:0>;
  exports.LegacyVuePureComponent = LegacyVuePureComponent#1;
  let Navigation;
  let <class_fields_init>#3;
  class Navigation extends undefined { ... }
  <proto:Navigation>.push = function <atom:0>;
  <proto:Navigation>.pushTyped = function <atom:0>;
  <proto:Navigation>.present = function <atom:0>;
  <proto:Navigation>.presentTyped = function <atom:0>;
  <proto:Navigation>.back = function <atom:0>;
  <proto:Navigation>.popToSelf = function <atom:0>;
  <proto:Navigation>.dismiss = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:Navigation>;
  Navigation = function <atom:0>;
  // close_loc <class_fields_init>#3
  Navigation#1 = function <atom:0>;
  exports.Navigation = Navigation#1;
  let ViewControllerComponent;
  let <class_fields_init>#4;
  class ViewControllerComponent extends LegacyVueComponent#1 { ... }
  <proto:ViewControllerComponent>.setNavigationTitle = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:ViewControllerComponent>;
  ViewControllerComponent = function <atom:0>;
  // close_loc <class_fields_init>#4
  ViewControllerComponent#1 = function <atom:0>;
  v = undefined;
  y = undefined;
  exports.ViewControllerComponent = ViewControllerComponent#1;
  exports.performSyncWithMainThread = M;
  exports.getLastRootComponentsManager = I;
  exports.makeRootComponentsManager = E;
  exports.onDaemonClientEvent = b;
  exports.getDaemonClientManager = P;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Valdi
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
