// fn t  args=1 vars=2 closure=1 cpool=0 bc=98B file=dil_compiler/src/intrinsics/Each
// args: e
// locals: t
// closure: r
function {
  let t;
  t = e.getProperty(r);
  if (!(Array.isArray(t))) goto L_5e;
  return t;
  return [];
}

// fn <atom:0>  args=2 vars=10 closure=4 cpool=0 bc=510B file=dil_compiler/src/intrinsics/Each
// args: e, n
// locals: s, a, d, o, i, c, e#1, this
// closure: o, i, r, t
function {
  this = this;
  let d;
  let a;
  let s;
  s = o(this.props, e);
  if (!((undefined === s))) goto L_3b;
  return;
  if (!((i(this.props, "itemName", e) == null))) goto L_a0;
  i(this.props, "itemName", e);
  if (!((i(this.props, "item", e) == null))) goto L_a0;
  i(this.props, "item", e);
  a = "item";
  if (!((i(this.props, "indexName", e) == null))) goto L_106;
  i(this.props, "indexName", e);
  if (!((i(this.props, "index", e) == null))) goto L_106;
  i(this.props, "index", e);
  d = "index";
  let o;
  o = 0;
  if (!((o < s.length))) goto L_1fd;
  let c;
  let i;
  {}[a] = s[o];
  s[o];
  {}[d] = o;
  o;
  i = e.subscopeWithValues({});
  // append([], 0, t(n))
  [][t(n)] = o;
  (o ++);
  c = n.withProperty(r, []);
  let e#1;
  for (const e#1 of this.children) {
    e#1.onRender(i, c);
  }
  o = <o_new>;
  (o++);
  goto L_10c;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_compiler/src/intrinsics/Each
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

// fn o  args=2 vars=4 closure=1 cpool=0 bc=123B file=dil_compiler/src/intrinsics/Each
// args: e, r
// locals: t, o
// closure: n
function {
  let o;
  let t;
  t = e.getPropertyValue("items", r);
  if (!((undefined !== t))) goto L_40;
  return n(t);   // tail call
  o = e.getPropertyValue("of", r);
  if (!((undefined !== o))) goto L_79;
  return n(o);
  return undefined;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=62B file=dil_compiler/src/intrinsics/Each
// args: e
function {
  if (!(!Array.isArray(e))) goto L_3c;
  throw new Error("Invalid Each node: "items" or "of" must be an array.");
  return e;
}

// fn i  args=3 vars=5 closure=0 cpool=0 bc=161B file=dil_compiler/src/intrinsics/Each
// args: e, r, t
// locals: o, n
function {
  let n;
  let o;
  o = e.getProperty(r);
  n = e.getPropertyValueAsString(r, t);
  if (!((undefined !== o))) goto L_a0;
  if (!((undefined === n))) goto L_9c;
  throw new Error("Invalid Each node: "".concat(r, "" must be a string."));
  return n;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=9B file=dil_compiler/src/intrinsics/Each
// args: e, r
// closure: EachWidgetRenderer
function {
  return new EachWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=287B file=dil_compiler/src/intrinsics/Each
// args: require, module, exports
// locals: e, r, t, EachWidgetRenderer, <class_fields_init>, EachWidgetRenderer#1, o, n, i
function {
  t = function t;
  o = function o;
  n = function n;
  i = function i;
  let EachWidgetRenderer#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDILEachIndexPath = undefined;
  exports.EachWidgetRenderer = undefined;
  exports.EachWidgetFactory = undefined;
  e = require("../DILTypes");
  r = Symbol("DILEachIndexPath");
  exports.getDILEachIndexPath = t;
  let EachWidgetRenderer;
  let <class_fields_init>;
  class EachWidgetRenderer extends e.ADILWidgetRendererInternal { ... }
  <proto:EachWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:EachWidgetRenderer>;
  EachWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  EachWidgetRenderer#1 = function <atom:0>;
  exports.EachWidgetRenderer = EachWidgetRenderer#1;
  exports.EachWidgetFactory = {properties: ["items", "of", "itemName", "indexName", "item", "index"], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/intrinsics/Each
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
