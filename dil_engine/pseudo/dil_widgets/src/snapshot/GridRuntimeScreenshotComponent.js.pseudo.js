// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=765B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, o, I, n, k, t
function {
  this = this;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", I.root);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", I.header);
  e.beginComponent(k.DILTextComponent, t, undefined, undefined);
  if (!((this.viewModel.title == null))) goto L_1c3;
  this.viewModel.title;
  e.setViewModelProperty("value", "Grid runtime layout checks");
  e.endComponent();
  e.endRender();
  this.renderBaselineGrid();
  this.renderSpansGrid();
  this.renderRowsGrid();
  this.renderTrackGrid();
  this.renderResponsiveFallbackGrid();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=192B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: this
function {
  this.renderGridCell("A1", "blue-100");
  this.renderGridCell("A2", "green-100");
  this.renderGridCell("A3", "orange-100");
  this.renderGridCell("A4", "gray-100");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=451B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, r, I, k, d, x, i
function {
  this = this;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", I.section);
  e.beginComponent(k.DILTextComponent, d, undefined, undefined);
  e.endComponent();
  e.beginComponent(x.Grid, i, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=244B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: this
function {
  this.renderGridCell("Tall rowSpan=2", "blue-100", 1, 2);
  this.renderGridCell("Wide span=2", "green-100", 2);
  this.renderGridCell("B1", "orange-100");
  this.renderGridCell("B2", "gray-100");
  this.renderGridCell("Full span=3", "blue-100", 3);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=451B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, l, I, k, s, x, p
function {
  this = this;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", I.section);
  e.beginComponent(k.DILTextComponent, s, undefined, undefined);
  e.endComponent();
  e.beginComponent(x.Grid, p, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=241B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: this
function {
  this.renderGridCell("Row 44", "gray-100");
  this.renderGridCell("Row 44 peer", "orange-100");
  this.renderGridCell("Row 72 span 2", "green-100", 2);
  this.renderGridCell("Row 36", "blue-100");
  this.renderGridCell("Row 36 peer", "gray-100");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=505B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, m, I, k, a, x, C
function {
  this = this;
  e.beginRender(m, undefined);
  e.setAttributeStyle("style", I.section);
  e.beginComponent(k.DILTextComponent, a, undefined, undefined);
  e.endComponent();
  e.beginComponent(x.Grid, C, undefined, undefined);
  e.setViewModelProperty("rows", [44, 72, 36]);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=289B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: this
function {
  this.renderGridCell("80px", "blue-100");
  this.renderGridCell("1fr", "green-100");
  this.renderGridCell("2fr", "orange-100");
  this.renderGridCell("25%", "gray-100");
  this.renderGridCell("span 2", "blue-100", 2);
  this.renderGridCell("tail", "green-100");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=451B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, y, I, k, v, x, g
function {
  this = this;
  e.beginRender(y, undefined);
  e.setAttributeStyle("style", I.section);
  e.beginComponent(k.DILTextComponent, v, undefined, undefined);
  e.endComponent();
  e.beginComponent(x.Grid, g, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=213B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: this
function {
  this.renderGridCell("responsive span object", "blue-100", {default: 2, md: 3});
  this.renderGridCell("peer survives", "green-100");
  this.renderGridCell("responsive rowSpan object", "orange-100", undefined, {default: 2});
  this.renderGridCell("last item", "gray-100");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=509B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: this
// closure: e, u, I, k, G, x, h
function {
  this = this;
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", I.section);
  e.beginComponent(k.DILTextComponent, G, undefined, undefined);
  e.endComponent();
  e.beginComponent(x.Grid, h, undefined, undefined);
  e.setViewModelProperty("gap", {default: 1, md: 2});
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=167B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: e, k, w, o
function {
  e.beginComponent(k.DILTextComponent, w, undefined, undefined);
  e.setViewModelProperty("value", o);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=211B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// closure: e, k, w, o, S, b, n
function {
  e.beginComponent(S.Box, b, undefined, undefined);
  e.setViewModelProperty("background", n);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=4 closure=7 cpool=1 bc=255B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// args: o, n, t, r
// closure: e, k, w, S, b, f, c
function {
  e.beginComponent(f.GridItem, c, undefined, undefined);
  e.setViewModelProperty("span", t);
  e.setViewModelProperty("rowSpan", r);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
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

// fn <atom:0>  args=3 vars=35 closure=0 cpool=8 bc=1774B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// args: require, module, exports
// locals: e, o, n, t, r, d, i, l, s, p, m, a, C, y, v, g, u, G, h, c, b, w, R, P, k, S, x, f, GridRuntimeScreenshotComponent, <class_fields_init>, GridRuntimeScreenshotComponent#1, I
function {
  let I;
  let GridRuntimeScreenshotComponent#1;
  let f;
  let x;
  let S;
  let k;
  let P;
  let R;
  let w;
  let b;
  let c;
  let h;
  let G;
  let u;
  let g;
  let v;
  let y;
  let C;
  let a;
  let m;
  let p;
  let s;
  let l;
  let i;
  let d;
  let r;
  let t;
  let n;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GridRuntimeScreenshotComponent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("layout", undefined, "vlXsTAykYDTn-wM7");
  n = e.makeNodePrototype("layout", undefined, "CV2fwGsZIaARDgtZ");
  t = e.makeComponentPrototype(undefined, "tDFDE5R5T3LdygCM");
  r = e.makeNodePrototype("layout", undefined, "E4wl8yleFqpWredq");
  d = e.makeComponentPrototype(["value", "1. baseline: four auto-key items in two columns"], "Nzt-fgjyi2VeBP8A");
  i = e.makeComponentPrototype(["columns", 2, "gap", 1], "8j6LBmJWgHvfncuc");
  l = e.makeNodePrototype("layout", undefined, "Q5r71AjbKg0m_pq2");
  s = e.makeComponentPrototype(["value", "2. spans and row spans"], "KcMXRmCD8hT9p1Gw");
  p = e.makeComponentPrototype(["columns", 3, "gap", 1], "cnR-SO57Y5uiUBgR");
  m = e.makeNodePrototype("layout", undefined, "HjeUJom4FmdlTojR");
  a = e.makeComponentPrototype(["value", "3. explicit rows with mixed item content"], "-9hDCFNXBbe_9xEy");
  C = e.makeComponentPrototype(["columns", 2, "gap", 1], "63i6CepkRJpyr-Z_");
  y = e.makeNodePrototype("layout", undefined, "_96tZjaEFSyljGpG");
  v = e.makeComponentPrototype(["value", "4. fixed/fr/percent track parsing"], "TxCVrchVhJfAmxwh");
  g = e.makeComponentPrototype(["columns", "80px 1fr 2fr 25%", "gap", 1], "nvBDKB1WgD72YZg-");
  u = e.makeNodePrototype("layout", undefined, "WdBLBGmG8IGPAtFQ");
  G = e.makeComponentPrototype(["value", "5. unresolved responsive values do not poison layout"], "9g5sHlRIwSbhZo1l");
  h = e.makeComponentPrototype(["columns", 3], "sbIRU4OwFqsYI-5P");
  c = e.makeComponentPrototype(undefined, "QpfI0cMgz8wXZf-P");
  b = e.makeComponentPrototype(["padding", 2, "radius", "md", "height", "100%", "width", "100%"], "zr6JlyR8wDlCKEf3");
  w = e.makeComponentPrototype(undefined, "eOqeM-KsgprGe9EH");
  R = require("valdi_core/src/Component");
  P = require("valdi_core/src/Style");
  k = require("dil_text/src/DILTextComponent");
  S = require("../widgets/Box");
  x = require("../widgets/Grid");
  f = require("../widgets/GridItem");
  let GridRuntimeScreenshotComponent;
  let <class_fields_init>;
  class GridRuntimeScreenshotComponent extends R.Component { ... }
  <proto:GridRuntimeScreenshotComponent>.onRender = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderBaselineGrid = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderSpansGrid = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderRowsGrid = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderTrackGrid = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderResponsiveFallbackGrid = function <atom:0>;
  <proto:GridRuntimeScreenshotComponent>.renderGridCell = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GridRuntimeScreenshotComponent>;
  GridRuntimeScreenshotComponent = function <atom:0>;
  // close_loc <class_fields_init>
  GridRuntimeScreenshotComponent#1 = function <atom:0>;
  exports.GridRuntimeScreenshotComponent = GridRuntimeScreenshotComponent#1;
  I = {root: new P.Style({width: 840, gap: 12, padding: 16, alignItems: "stretch"}), header: new P.Style({height: 34, justifyContent: "center"}), section: new P.Style({gap: 4, alignItems: "stretch"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/snapshot/GridRuntimeScreenshotComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
