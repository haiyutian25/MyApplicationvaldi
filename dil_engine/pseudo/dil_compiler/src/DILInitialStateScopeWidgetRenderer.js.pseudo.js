// fn <atom:0>  args=6 vars=7 closure=2 cpool=0 bc=144B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: t, i, r, n, a, s
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.inner = t;
  this.initialState = i;
  this.stateAliases = r;
  this.stateScope = n;
  this.widgetId = a;
  this.onInitialStateUpdate = s;
  if (!((undefined === s))) goto L_60;
  goto L_86;
  // [栈深重同步 2 -> 1]
  this.initialStateSnapshot = e.copyDILWidgetState(i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.name;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  this.inner.name = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.props;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// locals: this
function {
  this = this;
  return this.inner.children;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// locals: this
function {
  this = this;
  this.inner.onPropsChanged();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  this.inner.onChildrenChanged(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=110B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: this
function {
  this = this;
  return this.inner.getKey(this.makeScopedCELScope(e));   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=160B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.inner;
  if (!((undefined !== t.canRender))) goto L_9f;
  return t.canRender(this.makeScopedCELScope(e));
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=161B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e, t
// locals: i, this
function {
  this = this;
  let i;
  i = this.inner;
  if (!((undefined !== i.renderChildren))) goto L_a0;
  i.renderChildren(this.makeScopedCELScope(e), t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=112B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e, t
// locals: this
function {
  this = this;
  this.inner.onRender(this.makeScopedCELScope(e), t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=184B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: this
// closure: n
function {
  this = this;
  if (!(n.isDILTransparentWidgetRenderer(this.inner))) goto L_b7;
  return this.inner.getDILTransparentWidgetChildren(this.makeScopedCELScope(e));   // tail call
  return;
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=0 bc=610B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: r, n, a, t, i, this
// closure: i, t
function {
  this = this;
  let a;
  let n;
  let r;
  r = e.resolveValue("state");
  if (!((undefined === this.stateScope))) goto L_61;
  goto L_ac;
  // [栈深重同步 1 -> 0]
  n = i.readDILLocalScopedState(r, this.stateScope);
  if (!(t.isCELMap(r))) goto L_112;
  null;
  r;
  null;
  this.initialState;
  null;
  n;
  goto L_143;
  // [栈深重同步 1 -> 0]
  null;
  this.initialState;
  null;
  n;
  a = {};
  if (!((undefined !== this.stateAliases))) goto L_238;
  let t;
  for (const t of this.stateAliases) {
    let i;
    i = t.expression(this.makeStateSubscope(e, a));
    if (!((undefined !== i))) goto L_22e;
    null;
    a;
    {}[t.key] = i;
    i;
    a = {};
    {};
  }
  return this.makeStateSubscope(e, a);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=161B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: this
// closure: i
function {
  this = this;
  null;
  this.initialStateSnapshot;
  if (!((undefined === this.stateScope))) goto L_53;
  goto L_9b;
  // [栈深重同步 2 -> 1]
  null;
  i.readDILLocalScopedState(e, this.stateScope);
  return {};
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=202B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: t, i
// locals: this
// closure: e
function {
  this = this;
  if (!((undefined !== this.stateScope))) goto L_c9;
  if (!(i)) goto L_62;
  if (!((this.onInitialStateUpdate == null))) goto L_5d;
  this.onInitialStateUpdate;
  this;
  goto L_62;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, t, this);
  this.initialState = t;
  if (!((undefined === this.onInitialStateUpdate))) goto L_98;
  goto L_be;
  // [栈深重同步 2 -> 1]
  this.initialStateSnapshot = e.copyDILWidgetState(t);
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=321B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e, t
// locals: this
// closure: i
function {
  this = this;
  if (!((undefined === this.stateScope))) goto L_55;
  return e.subscopeWithValues({state: t});
  {}[i.DIL_LOCAL_STATE_SCOPE_KEY] = this.stateScope;
  this.stateScope;
  if (!((undefined === this.widgetId))) goto L_e9;
  goto L_132;
  // [栈深重同步 4 -> 3]
  {}[i.DIL_WIDGET_ID_SCOPE_KEY] = this.widgetId;
  this.widgetId;
  null;
  {};
  return e.subscopeWithValues({state: t});
}

// fn d  args=6 vars=9 closure=4 cpool=0 bc=92B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e, t, i, r, n, a
// locals: s, o, p
// closure: c, h, u, DILInitialStateScopeWidgetRenderer
function {
  let p;
  let o;
  let s;
  if (!(!i)) goto L_f;
  return e;
  s = c(t);
  o = h(t, r);
  if (!((undefined === s))) goto L_28;
  if (!((undefined === o))) goto L_28;
  return e;
  p = u(t);
  if (!((s == null))) goto L_3a;
  s;
  if (!((undefined === s))) goto L_47;
  goto L_52;
  // [栈深重同步 6 -> 5]
  if (!((p == null))) goto L_52;
  p;
  return new DILInitialStateScopeWidgetRenderer(e, {}, o, n, p, a);
}

// fn c  args=1 vars=6 closure=4 cpool=0 bc=429B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: i, n, s, e#1, i#1
// closure: r, a, t, p
function {
  let s;
  let n;
  let i;
  i = r.parseWidgetInitialStateValue(e[a]);
  if (!(t.isCELMap(i))) goto L_62;
  return i;
  n = r.parseWidgetInitialStateValue(e[p]);
  if (!(t.isCELMap(n))) goto L_bb;
  return n;
  s = e.props;
  if (!((null !== s))) goto L_1ac;
  if (!(("object" == typeof s))) goto L_1ac;
  if (!(!Array.isArray(s))) goto L_1ac;
  let i#1;
  let e#1;
  e#1 = s;
  i#1 = r.parseWidgetInitialStateValue(e#1.initialState);
  if (!(t.isCELMap(i#1))) goto L_1ac;
  return i#1;
  return;
}

// fn S  args=1 vars=1 closure=4 cpool=0 bc=33B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// closure: p, a, s, o
function {
  if (((e === p))) goto L_20;
  if (((e === a))) goto L_20;
  if (((e === s))) goto L_20;
  return (e === o);
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=15B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// closure: p, a
function {
  if (((e === p))) goto L_e;
  return (e === a);
}

// fn h  args=2 vars=6 closure=2 cpool=0 bc=226B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e, i
// locals: r, n, t, e#1
// closure: o, t
function {
  let n;
  let r;
  r = e[o];
  if (!(!t.isCELMap(r))) goto L_38;
  return;
  n = undefined;
  let t;
  for (const t of r) {
    let e#1;
    e#1 = r[t];
    if (!(("string" == typeof e#1))) goto L_d5;
    if (!((0 !== e#1.length))) goto L_d5;
    if (!((n == null))) goto L_73;
    n;
    n = [];
    [];
    n.push({key: t, expression: i.getOrCompile(e#1)});
  }
  <catch>;
  return n;
}

// fn u  args=1 vars=4 closure=1 cpool=0 bc=173B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: e
// locals: t, i, e#1
// closure: s
function {
  let i;
  let t;
  t = e[s];
  if (!(("string" == typeof t))) goto L_24;
  if (!((t.length > 0))) goto L_24;
  return t;
  i = e.props;
  if (!((null !== i))) goto L_ac;
  if (!(("object" == typeof i))) goto L_ac;
  if (!(!Array.isArray(i))) goto L_ac;
  let e#1;
  e#1 = i[s];
  if (!(("string" == typeof e#1))) goto L_ac;
  if (!((e#1.length > 0))) goto L_ac;
  return e#1;
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=22 bc=442B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// args: require, module, exports
// locals: e, t, i, r, n, a, s, o, p, DILInitialStateScopeWidgetRenderer, <class_fields_init>, DILInitialStateScopeWidgetRenderer#1, d, c, S, l, h, u
function {
  d = function d;
  c = function c;
  S = function S;
  l = function l;
  h = function h;
  u = function u;
  let DILInitialStateScopeWidgetRenderer#1;
  let p;
  let o;
  let s;
  let a;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILInitialStateScopeWidgetRenderer = undefined;
  exports.wrapRendererWithInitialStateIfNeeded = undefined;
  exports.readInitialStateValue = undefined;
  exports.isDILInitialStateScopeWrapperProperty = undefined;
  exports.isDILInitialStateScopeValueProperty = undefined;
  e = require("dil_cel/src/DILWidgetState");
  t = require("cel/src/CELValue");
  i = require("dil_cel/src/DILScopedState");
  r = require("./CompressedWidgetState");
  n = require("./DILTransparentWidgetRenderer");
  a = "__chatgptWidgetViewState";
  s = "__chatgptWidgetRefId";
  o = "__chatgptStateAliases";
  p = "initialState";
  let DILInitialStateScopeWidgetRenderer;
  let <class_fields_init>;
  class DILInitialStateScopeWidgetRenderer extends undefined { ... }
  <proto:DILInitialStateScopeWidgetRenderer>.name = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.name = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.props = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.children = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.onChildrenChanged = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.getKey = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.canRender = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.renderChildren = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.onRender = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.getDILTransparentWidgetChildren = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.makeScopedCELScope = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.getCurrentWidgetState = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.tryUpdateInitialState = function <atom:0>;
  <proto:DILInitialStateScopeWidgetRenderer>.makeStateSubscope = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILInitialStateScopeWidgetRenderer>;
  DILInitialStateScopeWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILInitialStateScopeWidgetRenderer#1 = function <atom:0>;
  exports.DILInitialStateScopeWidgetRenderer = DILInitialStateScopeWidgetRenderer#1;
  exports.wrapRendererWithInitialStateIfNeeded = d;
  exports.readInitialStateValue = c;
  exports.isDILInitialStateScopeWrapperProperty = S;
  exports.isDILInitialStateScopeValueProperty = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILInitialStateScopeWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
