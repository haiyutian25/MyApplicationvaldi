// fn r  args=2 vars=2 closure=1 cpool=0 bc=48B file=dil_renderer/src/DILElement
// args: e, t
// closure: o
function {
  o.set(e, {scope: t});
  return;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILElement
// args: e
// closure: o
function {
  return o.get(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=57B file=dil_renderer/src/DILElement
// closure: e
function {
  throw new Error("DIL component placeholder '".concat(e, "' must be used as a JSX element."));
}

// fn p  args=3 vars=4 closure=2 cpool=1 bc=167B file=dil_renderer/src/DILElement
// args: e, o, r
// locals: i
// closure: t, n
function {
  let i;
  i = function <atom:0>;
  Object.defineProperty(i, "name", {value: e});
  t.set(i, o);
  if (!((undefined !== r))) goto L_a2;
  n.set(i, r);
  return i;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILElement
// args: e
// closure: n
function {
  return n.get(e);   // tail call
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=40B file=dil_renderer/src/DILElement
// args: e
// closure: t
function {
  return t.get(e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=31B file=dil_renderer/src/DILElement
// args: t, n, o
// locals: r
// closure: m, e
function {
  o = ...2;
  let r;
  r = m(t, n, o);
  if (!((e == null))) goto L_16;
  e;
  goto L_1a;
  undefined(r);
  return r;
}

// fn c  args=1 vars=1 closure=2 cpool=1 bc=53B file=dil_renderer/src/DILElement
// args: e
// closure: m, exports
function {
  return {Fragment: exports.DIL_FRAGMENT, jsx: function <atom:0>};
}

// fn E  args=2 vars=4 closure=0 cpool=0 bc=100B file=dil_renderer/src/DILElement
// args: e, t
// locals: n, o
function {
  let n;
  n = {};
  if (!(e)) goto L_31;
  let o;
  for (const o of e) {
    if (!(("key" !== o))) goto L_2b;
    n[o] = e[o];
    e[o];
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  if (!((1 === t.length))) goto L_49;
  n.children = t[0];
  goto L_5f;
  // [栈深重同步 1 -> 0]
  if (!((t.length > 1))) goto L_5f;
  n.children = t;
  t;
  return n;
}

// fn u  args=1 vars=2 closure=0 cpool=0 bc=110B file=dil_renderer/src/DILElement
// args: e
// locals: t
function {
  let t;
  if (!((e.props == null))) goto L_2d;
  e.props;
  goto L_4e;
  t = undefined.key;
  if ((("string" == typeof t))) goto L_67;
  if (!(("number" == typeof t))) goto L_6d;
  return t;
  return;
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=28B file=dil_renderer/src/DILElement
// args: t
// closure: e
function {
  if (!((null !== t))) goto L_1b;
  if (!(("object" == typeof t))) goto L_1b;
  return (true === t[e]);
}

// fn m  args=3 vars=7 closure=1 cpool=0 bc=220B file=dil_renderer/src/DILElement
// args: t, n, o
// locals: r, i, e, t#1
// closure: e
function {
  let i;
  let r;
  if (!((n == null))) goto L_d;
  n;
  r = undefined;
  i = o;
  if (!((undefined !== r))) goto L_bd;
  if (!(("children" in r))) goto L_bd;
  let t#1;
  let e;
  if (((undefined === undefined))) goto L_69;
  e = <to_object>(undefined).children;
  t#1 = {};
  <to_object>(undefined);
  {children: null};
  goto L_6f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_33;
  // [栈深重同步 1 -> 0]
  r = t#1;
  t#1;
  if (!((0 === o.length))) goto L_bc;
  if (!(Array.isArray(e))) goto L_b2;
  goto L_b8;
  // [栈深重同步 1 -> 0]
  i = [e];
  [e];
  {}[e] = true;
  true;
  return {type: t, props: r, children: i};
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=10 bc=491B file=dil_renderer/src/DILElement
// args: require, module, exports
// locals: e, t, n, o, r, i, p, s, l, c, E, u, a, m
function {
  r = function r;
  i = function i;
  p = function p;
  s = function s;
  l = function l;
  c = function c;
  E = function E;
  u = function u;
  a = function a;
  m = function m;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_FRAGMENT = undefined;
  exports.TEXT_ELEMENT_TYPE = undefined;
  exports.DIL_RENDERED_PROP_ELEMENT_TYPE = undefined;
  exports.DIL_RENDERED_PROP_NAME = undefined;
  exports.setDilElementInteractionScope = undefined;
  exports.getDilElementInteractionScope = undefined;
  exports.createDilComponentPlaceholder = undefined;
  exports.getDilComponentScope = undefined;
  exports.getDilComponentResolver = undefined;
  exports.createDilJsxRuntime = undefined;
  exports.propsWithChildren = undefined;
  exports.readRuntimeElementKey = undefined;
  exports.isDILRuntimeElement = undefined;
  exports.createDilElement = undefined;
  e = Symbol("openai.valdi.dil.runtimeElement");
  exports.DIL_FRAGMENT = Symbol("oai.dil.fragment");
  exports.TEXT_ELEMENT_TYPE = "text";
  exports.DIL_RENDERED_PROP_ELEMENT_TYPE = "__dil-rendered-prop";
  exports.DIL_RENDERED_PROP_NAME = "__dilRenderedPropName";
  t = new WeakMap();
  n = new WeakMap();
  o = new WeakMap();
  exports.setDilElementInteractionScope = r;
  exports.getDilElementInteractionScope = i;
  exports.createDilComponentPlaceholder = p;
  exports.getDilComponentScope = s;
  exports.getDilComponentResolver = l;
  exports.createDilJsxRuntime = c;
  exports.propsWithChildren = E;
  exports.readRuntimeElementKey = u;
  exports.isDILRuntimeElement = a;
  exports.createDilElement = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
