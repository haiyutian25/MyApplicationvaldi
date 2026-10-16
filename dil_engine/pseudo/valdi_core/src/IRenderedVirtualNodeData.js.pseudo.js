// fn o  args=2 vars=5 closure=1 cpool=0 bc=193B file=valdi_core/src/IRenderedVirtualNodeData
// args: e, t
// locals: r, i, e#1
// closure: o
function {
  if (!((e === t))) goto L_9;
  return [];
  if (!(e.children)) goto L_c0;
  let r;
  r = 0;
  let i;
  for (const i of e.children) {
    let e#1;
    if (!((i === t))) goto L_73;
    return [r];
    // [栈深重同步 0 -> 3]
    e#1 = o(i, t);
    if (!(e#1)) goto L_b2;
    e#1.unshift(r);
    return e#1;
    // [栈深重同步 0 -> 3]
    r = <r_new>;
    (r++);
  }
  return;
}

// fn r  args=3 vars=14 closure=3 cpool=0 bc=933B file=valdi_core/src/IRenderedVirtualNodeData
// args: o, i, n
// locals: d, l, s, e, e#1, r, o#1, i#1, e#2, u, f
// closure: r, t, e
function {
  let f;
  let u;
  let s;
  let l;
  let d;
  d = undefined;
  l = undefined;
  s = undefined;
  if (!(o.children.length)) goto L_a0;
  d = [];
  [];
  let e;
  for (const e of o.children) {
    d.push(r(e, i, n));
  }
  if (!(o.element)) goto L_1f7;
  let r;
  let e#1;
  e#1 = o.element;
  r = undefined;
  if (!(i)) goto L_197;
  r = {};
  {};
  let o#1;
  for (const o#1 of e#1.getAttributeNames()) {
    let i#1;
    i#1 = e#1.getAttribute(o#1);
    r[o#1] = t.debugStringify(i#1, 3, true);
  }
  l = {id: e#1.id, frame: e#1.frame, attributes: r};
  {id: e#1.id, frame: e#1.frame, attributes: r};
  if (!(o.component)) goto L_323;
  let e#2;
  s = {viewModel: t.debugStringify(o.component.viewModel, 4, true)};
  {viewModel: t.debugStringify(o.component.viewModel, 4, true)};
  e#2 = o.component.state;
  if (!((undefined !== e#2))) goto L_322;
  null;
  s;
  s = {state: t.debugStringify(e#2, 4, true)};
  {state: t.debugStringify(e#2, 4, true)};
  u = e.getNodeTag(o);
  f = {key: o.key, tag: u, element: l, component: s, children: d};
  if (!(n)) goto L_3a0;
  n(o, f);
  return f;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=13B file=valdi_core/src/IRenderedVirtualNodeData
// args: o, r
// closure: e, t
function {
  if (!((o === e))) goto L_c;
  t = r;
  r;
  return;
}

// fn i  args=1 vars=3 closure=1 cpool=1 bc=115B file=valdi_core/src/IRenderedVirtualNodeData
// args: e
// locals: t, o
// closure: r
function {
  let o;
  let t;
  t = undefined;
  o = e;
  if (!(o.parent)) goto L_5b;
  o = o.parent;
  o.parent;
  goto L_a;
  return {root: r(o, false, function <atom:0>), child: t};
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=156B file=valdi_core/src/IRenderedVirtualNodeData
// args: require, module, exports
// locals: e, t, o, r, i
function {
  o = function o;
  r = function r;
  i = function i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getPathToNode = undefined;
  exports.fromRenderedVirtualNode = undefined;
  exports.getVirtualNodeDataFromRootToChild = undefined;
  e = require("./utils/RenderedVirtualNodeUtils");
  t = require("./utils/StringUtils");
  exports.getPathToNode = o;
  exports.fromRenderedVirtualNode = r;
  exports.getVirtualNodeDataFromRootToChild = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/IRenderedVirtualNodeData
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
