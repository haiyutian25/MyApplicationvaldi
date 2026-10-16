// fn <atom:0>  args=1 vars=4 closure=5 cpool=0 bc=520B file=widgets/src/components/section/SectionList.vmtc
// args: o
// locals: n, a, e
// closure: e, r, d, t, i
function {
  let a;
  let n;
  n = e.RenderedElementTree.getCurrentTree();
  if (!((undefined === o))) goto L_86;
  r.refreshStickyHeaders(n, d[0], d[1]);
  if (!((undefined === o))) goto L_b5;
  goto L_fe;
  // [栈深重同步 3 -> 2]
  a = n.getElement(t.required(o.elementId));
  if (!((undefined !== a))) goto L_1f0;
  let e;
  if (!((o == null))) goto L_118;
  o;
  goto L_139;
  if (!((undefined.y == null))) goto L_170;
  undefined.y;
  if (!((a.getAttribute("contentOffsetY") == null))) goto L_170;
  a.getAttribute("contentOffsetY");
  e = 0;
  i.updateStickyHeaders(n, d[1], d[3], d[4], d[5], e, a.frame.height);
  if (!((undefined !== o))) goto L_207;
  if (!((d[6] == null))) goto L_203;
  d[6];
  d;
  goto L_207;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=3B file=widgets/src/components/section/SectionList.vmtc
// args: d
// closure: e, r, t, i
function {
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=7B file=widgets/src/components/section/SectionList.vmtc
// closure: e
function {
  return e[0](undefined);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=3B file=widgets/src/components/section/SectionList.vmtc
// args: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=95B file=widgets/src/components/section/SectionList.vmtc
// args: require, module, exports
// locals: e, r, t, i
function {
  let i;
  let t;
  let r;
  let e;
  e = require("valdi_core/src/RenderedElementTree");
  r = require("./StickyHeaderLayout");
  t = require("foundation/src/required");
  i = require("./StickyHeaderLayout");
  module.exports.mainThreadCallbacks = [function <atom:0>, function <atom:0>];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionList.vmtc
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
