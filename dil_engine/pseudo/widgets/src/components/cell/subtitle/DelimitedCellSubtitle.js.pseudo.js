// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=87B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
// args: t
// closure: e, i
function {
  e.beginRender(i, undefined);
  t();
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=406B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
// args: t, i
// closure: e, n, d, l
function {
  if (!((i > 0))) goto L_192;
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", d.style.label.delimiter);
  e.setAttributeString("color", l.delimiterColor);
  e.setAttributeString("value", d.SUBTITLE_DELIMITER);
  e.endRender();
  t();
  return;
}

// fn <atom:0>  args=0 vars=6 closure=7 cpool=2 bc=1274B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
// locals: l, s, a, u, c, this
// closure: e, i, n, d, t, o, r
function {
  this = this;
  let c;
  let u;
  let a;
  let s;
  let l;
  if (!((this.viewModel == null))) goto L_3b;
  this.viewModel;
  l = {};
  if (!(!Array.isArray(l.renderFunction))) goto L_b2;
  s = l.renderFunction;
  if (!(Array.isArray(l.renderFunction))) goto L_128;
  a = l.renderFunction;
  if (!((l.packing == null))) goto L_197;
  l.packing;
  u = d.CellPacking.Large70;
  c = d.packingSubtitleMinHeights[u];
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", d.style.container.subtitle);
  e.setAttributeNumber("minHeight", c);
  o.when(this.viewModel.children, function <atom:0>);
  if (!(s)) goto L_329;
  goto L_4d1;
  // [栈深重同步 1 -> 0]
  if (!(a)) goto L_4d1;
  e.beginRender(r, undefined);
  if (!(l.singleLine)) goto L_416;
  goto L_47c;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", d.style.container.wrappable);
  a.forEach(function <atom:0>);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
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

// fn <atom:0>  args=3 vars=14 closure=0 cpool=2 bc=468B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
// args: require, module, exports
// locals: e, t, i, r, n, l, o, d, DelimitedCellSubtitle, <class_fields_init>, DelimitedCellSubtitle#1
function {
  let DelimitedCellSubtitle#1;
  let d;
  let o;
  let l;
  let n;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DelimitedCellSubtitle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "AYasv0EYkn8EknQm");
  i = e.makeNodePrototype("layout", ["marginRight", 6, "alignSelf", "flex-start"], "xbhE98KMSew1c_xH");
  r = e.makeNodePrototype("layout", undefined, "LD_AtgOj-xM4zb3B");
  n = e.makeNodePrototype("label", undefined, "di8KJ2i24Oz--UI4");
  l = require("valdi_core/src/Component");
  o = require("valdi_core/src/utils/When");
  d = require("../style");
  let DelimitedCellSubtitle;
  let <class_fields_init>;
  class DelimitedCellSubtitle extends l.Component { ... }
  <proto:DelimitedCellSubtitle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DelimitedCellSubtitle>;
  DelimitedCellSubtitle = function <atom:0>;
  // close_loc <class_fields_init>
  DelimitedCellSubtitle#1 = function <atom:0>;
  exports.DelimitedCellSubtitle = DelimitedCellSubtitle#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/cell/subtitle/DelimitedCellSubtitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
