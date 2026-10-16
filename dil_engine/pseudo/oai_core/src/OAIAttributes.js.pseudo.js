// fn s  args=2 vars=2 closure=4 cpool=0 bc=1447B file=oai_core/src/OAIAttributes
// args: t, e
// closure: i, c, l, n
function {
  t.alignItems = e.align;
  t.flexBasis = e.basis;
  if (!((e.grow == null))) goto L_a2;
  e.grow;
  t.flexGrow = e.flex;
  if (!((e.shrink == null))) goto L_fd;
  e.shrink;
  if (!((undefined === e.flex))) goto L_fc;
  goto L_fd;
  // [栈深重同步 2 -> 1]
  t.flexShrink = 1;
  if (!((e.direction == null))) goto L_150;
  e.direction;
  t.flexDirection = i.Column;
  t.gap = c(e.gap);
  t.justifyContent = e.justify;
  t.height = e.height;
  t.maxHeight = e.maxHeight;
  t.maxWidth = e.maxWidth;
  t.minHeight = e.minHeight;
  t.minWidth = e.minWidth;
  t.width = e.width;
  t.accessibilityCategory = e.accessibilityCategory;
  t.accessibilityId = e.accessibilityId;
  t.accessibilityHint = e.accessibilityHint;
  t.accessibilityLabel = e.accessibilityLabel;
  t.accessibilityValue = e.accessibilityValue;
  t.accessibilityStateDisabled = e.accessibilityStateDisabled;
  t.accessibilityStateSelected = e.accessibilityStateSelected;
  t.backgroundColor = e.background;
  t.borderColor = e.borderColor;
  t.borderWidth = e.borderWidth;
  t.borderRadius = l(e.radius);
  t.opacity = e.opacity;
  t.onLongPress = e.onLongPress;
  t.onTap = e.onTap;
  t.slowClipping = e.clip;
  n(t, "padding", e.padding);
  n(t, "margin", e.margin);
  return;
}

// fn o  args=2 vars=2 closure=0 cpool=0 bc=177B file=oai_core/src/OAIAttributes
// args: i, t
function {
  i.accessibilityId = t.accessibilityId;
  i.accessibilityHint = t.accessibilityHint;
  i.accessibilityLabel = t.accessibilityLabel;
  i.accessibilityValue = t.accessibilityValue;
  return;
}

// fn n  args=3 vars=7 closure=2 cpool=0 bc=363B file=oai_core/src/OAIAttributes
// args: i, t, e
// locals: s, o, n, a
// closure: r, c
function {
  let a;
  let n;
  let o;
  let s;
  if (!((undefined === e))) goto L_12;
  return;
  if (!(("number" == typeof e))) goto L_28;
  r(i, t, e, e, e, e);
  return;
  if (!((e.top == null))) goto L_71;
  e.top;
  s = e.y;
  if (!((e.right == null))) goto L_bb;
  e.right;
  o = e.x;
  if (!((e.bottom == null))) goto L_105;
  e.bottom;
  n = e.y;
  if (!((e.left == null))) goto L_14f;
  e.left;
  a = e.x;
  r(i, t, c(s), c(o), c(n), c(a));
  return;
}

// fn r  args=6 vars=6 closure=0 cpool=0 bc=107B file=oai_core/src/OAIAttributes
// args: i, t, e, s, o, n
function {
  if (!(("margin" === t))) goto L_3a;
  i.marginTop = e;
  i.marginRight = s;
  i.marginBottom = o;
  i.marginLeft = n;
  return;
  i.paddingTop = e;
  i.paddingRight = s;
  i.paddingBottom = o;
  i.paddingLeft = n;
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=11B file=oai_core/src/OAIAttributes
// args: i
function {
  return ((i / 16) + "rem");
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=8B file=oai_core/src/OAIAttributes
// args: i
function {
  if (!((undefined !== i))) goto L_7;
  return i;
  return;
}

// fn l  args=1 vars=1 closure=0 cpool=0 bc=8B file=oai_core/src/OAIAttributes
// args: i
function {
  if (!((undefined !== i))) goto L_7;
  return i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=oai_core/src/OAIAttributes
// args: i
function {
  i.Row = "row";
  i.Column = "column";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=oai_core/src/OAIAttributes
// args: i
function {
  i.Start = "flex-start";
  i.Center = "center";
  i.End = "flex-end";
  i.Stretch = "stretch";
  i.Baseline = "baseline";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=oai_core/src/OAIAttributes
// args: i
function {
  i.Start = "flex-start";
  i.Center = "center";
  i.End = "flex-end";
  i.Between = "space-between";
  i.Around = "space-around";
  i.Evenly = "space-evenly";
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=10 bc=297B file=oai_core/src/OAIAttributes
// args: require, module, exports
// locals: i, t, e, s, o, n, r, a, c, l
function {
  s = function s;
  o = function o;
  n = function n;
  r = function r;
  a = function a;
  c = function c;
  l = function l;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIStackDirection = undefined;
  exports.OAIAlign = undefined;
  exports.OAIJustify = undefined;
  exports.applyOAIBoxAttributes = undefined;
  exports.applyOAIAccessibilityAttributes = undefined;
  exports.remFromPoints = undefined;
  exports.resolveOAISpacing = undefined;
  exports.resolveOAIOptionalRadius = undefined;
  if ((i)) goto L_bf;
  i = {};
  exports.OAIStackDirection = {};
  function <atom:0>({});
  if ((t)) goto L_d5;
  t = {};
  exports.OAIAlign = {};
  function <atom:0>({});
  if ((e)) goto L_eb;
  e = {};
  exports.OAIJustify = {};
  function <atom:0>({});
  exports.applyOAIBoxAttributes = s;
  exports.applyOAIAccessibilityAttributes = o;
  exports.remFromPoints = a;
  exports.resolveOAISpacing = c;
  exports.resolveOAIOptionalRadius = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_core/src/OAIAttributes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
