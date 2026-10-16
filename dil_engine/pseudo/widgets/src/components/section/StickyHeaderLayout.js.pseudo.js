// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=widgets/src/components/section/StickyHeaderLayout
// args: e
function {
  return e.id;
}

// fn o  args=3 vars=3 closure=3 cpool=1 bc=263B file=widgets/src/components/section/StickyHeaderLayout
// args: r, o, n
// closure: e, i, t
function {
  n.sections = e.required(r.getElement(o)).getChildrenByAccessibilityId(i.Section, t.ElementChildrenSortOrder.YAscending).map(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=widgets/src/components/section/StickyHeaderLayout
// args: e
function {
  return e.root;
}

// fn n  args=7 vars=21 closure=5 cpool=1 bc=1167B file=widgets/src/components/section/StickyHeaderLayout
// args: e, r, o, n, d, l, u
// locals: p, m, h, f, t, r#1, y, c, r#2, d#1, h#1, f#1, b, t#1
// closure: s, i, t, a, c
function {
  let b;
  let y;
  let f;
  let h;
  let m;
  let p;
  p = r.sections;
  m = [];
  h = 0;
  f = p.length;
  if (!((h < f))) goto L_122;
  let r#1;
  let t;
  t = ((h + f) >>> 1);
  if (!((e.getElement(p[t]) == null))) goto L_91;
  e.getElement(p[t]);
  goto L_b2;
  r#1 = undefined.frame;
  if (((undefined === r#1))) goto L_10a;
  if (!(((r#1.y + r#1.height) < l))) goto L_117;
  h = (t + 1);
  goto L_11e;
  // [栈深重同步 1 -> 0]
  f = t;
  t;
  goto L_40;
  if (!(d)) goto L_12c;
  goto L_12d;
  // [栈深重同步 1 -> 0]
  y = 0;
  let c;
  c = h;
  if (!((c < p.length))) goto L_3c5;
  let f#1;
  let h#1;
  let d#1;
  let r#2;
  r#2 = e.getElement(p[c]);
  if (((undefined === r#2))) goto L_3ba;
  if (((r#2.frame.y > (l + u)))) goto L_3c5;
  d#1 = s(r#2);
  h#1 = d#1.getChildrenByAccessibilityId(i.Backdrop, t.ElementChildrenSortOrder.TreeOrder)[0];
  m.push({root: r#2.id, header: d#1.id, backdrop: h#1.id});
  if (!((0 === c))) goto L_321;
  goto L_34f;
  // [栈深重同步 1 -> 0]
  f#1 = e.getElement(p[(c - 1)]);
  if (!((undefined === f#1))) goto L_368;
  goto L_3b1;
  // [栈深重同步 6 -> 5]
  a(r#2, d#1, h#1, c, (s(f#1).frame.height + o), y, o, n);
  c = <c_new>;
  (c++);
  goto L_137;
  b = new Set(m.map(function <atom:0>));
  let t#1;
  for (const t#1 of r.previous) {
    if ((b.has(t#1.root))) goto L_47a;
    c(e, t#1);
  }
  r.previous = m;
  return;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=178B file=widgets/src/components/section/StickyHeaderLayout
// args: e
// closure: i, t
function {
  return e.children[0].getChildrenByAccessibilityId(i.Header, t.ElementChildrenSortOrder.TreeOrder)[0];
}

// fn a  args=8 vars=11 closure=1 cpool=2 bc=835B file=widgets/src/components/section/StickyHeaderLayout
// args: e, t, i, o, n, s, a, c
// locals: d, n#1, o#1
// closure: r
function {
  let d;
  d = (t.frame.height + a);
  if (!((s < 0))) goto L_175;
  let n#1;
  n#1 = r.clamp((-s / 150), 0, 1);
  e.setAttribute("translationY", (((-n#1 * o) * d) / 1.5));
  t.setAttribute("translationY", 0);
  t.setAttribute("opacity", (1 - r.clamp(((2 * n#1) / 1.5), 0, 1)));
  i.setAttribute("opacity", 0);
  return;
  let o#1;
  o#1 = (s - e.frame.y);
  e.setAttribute("translationY", 0);
  t.setAttribute("translationY", r.clamp(o#1, 0, Math.max(0, (e.frame.height - d))));
  t.setAttribute("opacity", 1);
  if (!((c == null))) goto L_33a;
  c;
  i.setAttribute("opacity", r.clamp(((o#1 + n) / d), 0, 1));
  return;
}

// fn c  args=2 vars=5 closure=0 cpool=0 bc=441B file=widgets/src/components/section/StickyHeaderLayout
// args: e, t
// locals: r, i, o
function {
  let o;
  let i;
  let r;
  r = e.getElement(t.root);
  i = e.getElement(t.header);
  o = e.getElement(t.backdrop);
  if (!((r == null))) goto L_ec;
  r;
  goto L_116;
  undefined.setAttribute("translationY", 0);
  if (!((i == null))) goto L_122;
  i;
  goto L_14c;
  undefined.setAttribute("translationY", 0);
  if (!((i == null))) goto L_158;
  i;
  goto L_182;
  undefined.setAttribute("opacity", 1);
  if (!((o == null))) goto L_18e;
  o;
  goto L_1b8;
  undefined.setAttribute("opacity", 0);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=widgets/src/components/section/StickyHeaderLayout
// args: e
function {
  e.Section = "valdi-section";
  e.Header = "valdi-section-header";
  e.Backdrop = "valdi-section-backdrop";
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=6 bc=213B file=widgets/src/components/section/StickyHeaderLayout
// args: require, module, exports
// locals: e, t, r, i, o, n, s, a, c
function {
  o = function o;
  n = function n;
  s = function s;
  a = function a;
  c = function c;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StickyHeaderElementId = undefined;
  exports.refreshStickyHeaders = undefined;
  exports.updateStickyHeaders = undefined;
  exports.updateStickyHeader = undefined;
  e = require("foundation/src/required");
  t = require("valdi_core/src/ElementChildrenSortOrder");
  r = require("foundation/src/number");
  if ((i)) goto L_ad;
  i = {};
  exports.StickyHeaderElementId = {};
  !function <atom:0>({});
  exports.refreshStickyHeaders = o;
  exports.updateStickyHeaders = n;
  exports.updateStickyHeader = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/StickyHeaderLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
