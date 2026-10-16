// fn <atom:0>  args=0 vars=2 closure=8 cpool=0 bc=1297B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// locals: i, this
// closure: e, t, o, y, r, h, d, n
function {
  this = this;
  let i;
  i = undefined;
  if (!(this.viewModel.focusedNode)) goto L_26b;
  if (!(this.viewModel.focusedNode.component)) goto L_14d;
  goto L_270;
  // [栈深重同步 1 -> 0]
  goto L_270;
  // [栈深重同步 1 -> 0]
  i = "Path from root";
  "Path from root";
  e.beginRender(t, undefined);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", y);
  e.setAttributeString("value", i);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", h.styles.console);
  e.beginRender(d, undefined);
  e.beginRender(n, undefined);
  this.renderNodePaths();
  e.endRender();
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=366B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// locals: e, this
// closure: c
function {
  this = this;
  let e;
  e = undefined;
  if (!(this.viewModel.focusedNode)) goto L_100;
  e = c.getPathToNode(this.viewModel.node, this.viewModel.focusedNode);
  c.getPathToNode(this.viewModel.node, this.viewModel.focusedNode);
  this.renderNode(this.viewModel.node, 0, e);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=119B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: e, t, o
// locals: r, this
function {
  this = this;
  let r;
  if (!(!t)) goto L_a;
  return;
  if (!((1 === t))) goto L_16;
  goto L_1b;
  // [栈深重同步 1 -> 0]
  r = "children";
  this.appendComment(o, "".concat(t, " ", r, " ", e));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=406B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: t, o
// closure: e, i, h
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", h.styles.bodyText);
  e.setAttributeString("color", h.colors.comment);
  e.setAttributeString("value", "".concat(t, "{ /* ", o, " */ }"));
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=2 bc=577B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: e, t
// locals: o, r
// closure: h
function {
  let o;
  for (const o of t) {
    let r;
    e.append(" ");
    e.append(o, {color: h.colors.attributeName});
    e.append("=", {color: h.colors.expression});
    r = t[o];
    r = r.replace(new RegExp("\\n"), "");
    r.replace(new RegExp("\\n"), "");
    if (!(Number.isNaN(parseInt(r)))) goto L_1c4;
    r = "'".concat(r, "'");
    "'".concat(r, "'");
    e.append(r, {color: h.colors.attributeValue});
  }
  return;
}

// fn <atom:0>  args=3 vars=13 closure=7 cpool=0 bc=3267B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: t, o, r
// locals: d, e, n, i, i#1, l, s, o#1, r#1, this
// closure: h, b, e, a, p, l, s
function {
  this = this;
  let i;
  let n;
  let d;
  d = "";
  let e;
  e = 0;
  if (!((e < o))) goto L_32;
  d = (d + "  ");
  (d + "  ");
  e = <e_new>;
  (e++);
  goto L_13;
  if (!(t.component)) goto L_a3;
  goto L_ee;
  // [栈深重同步 1 -> 0]
  n = {color: h.colors.tagElement};
  i = (t === this.viewModel.focusedNode);
  if (!(i)) goto L_16b;
  this.appendComment(d, "↓↓↓");
  if (!(t.children)) goto L_83e;
  if (!((t !== this.viewModel.focusedNode))) goto L_83e;
  if ((!r)) goto L_1e6;
  if (!(r.length)) goto L_83e;
  let s;
  let l;
  let i#1;
  i#1 = new b.AttributedTextBuilder().append(d).append("<", {color: h.colors.tagBracket}).append(t.tag, n);
  if (!(t.element)) goto L_3de;
  if (!(t.element.attributes)) goto L_3de;
  this.appendAttributes(i#1, t.element.attributes);
  l = i#1.append(">", {color: h.colors.tagBracket}).build();
  s = new b.AttributedTextBuilder().append(d).append("</", {color: h.colors.tagBracket}).append(t.tag, n).append(">", {color: h.colors.tagBracket}).build();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", h.styles.bodyText);
  e.setAttribute("value", l);
  e.endRender();
  this.renderNodeChildren(t, (o + 1), d, r);
  e.beginRender(p, undefined);
  e.setAttributeStyle("style", h.styles.bodyText);
  e.setAttribute("value", s);
  e.endRender();
  return;
  let r#1;
  let o#1;
  o#1 = new b.AttributedTextBuilder().append(d).append("<", {color: h.colors.tagBracket}).append(t.tag, n);
  if (!(t.element)) goto L_a2e;
  if (!(t.element.attributes)) goto L_a2e;
  this.appendAttributes(o#1, t.element.attributes);
  r#1 = o#1.append("/>", {color: h.colors.tagBracket}).build();
  if (!(i)) goto L_bcc;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", h.styles.bodyStrongText);
  e.setAttribute("value", r#1);
  goto L_cc1;
  // [栈深重同步 1 -> 0]
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", h.styles.bodyText);
  e.setAttribute("value", r#1);
  e.endRender();
  return;
}

// fn <atom:0>  args=4 vars=10 closure=0 cpool=0 bc=332B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: e, t, o, r
// locals: d, e#1, n, i, n#1, this
function {
  this = this;
  let d;
  d = e.children;
  if (!(d)) goto L_14b;
  if (!(r)) goto L_10e;
  let i;
  let n;
  let e#1;
  e#1 = r.shift();
  if (!((undefined === e#1))) goto L_6e;
  return;
  n = e#1;
  i = ((d.length - e#1) - 1);
  this.renderChildrenCount("before", n, o);
  this.renderNode(d[e#1], t, r);
  this.renderChildrenCount("after", i, o);
  return;
  let n#1;
  for (const n#1 of d) {
    this.renderNode(n#1, t, r);
  }
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/debugging/VirtualNodePathDisplayer
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

// fn <atom:0>  args=3 vars=22 closure=0 cpool=8 bc=979B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// args: require, module, exports
// locals: e, t, o, r, d, n, i, l, s, a, p, u, c, b, h, y, VirtualNodePathDisplayer, <class_fields_init>, VirtualNodePathDisplayer#1
function {
  let VirtualNodePathDisplayer#1;
  let y;
  let h;
  let b;
  let c;
  let u;
  let p;
  let a;
  let s;
  let l;
  let i;
  let n;
  let d;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VirtualNodePathDisplayer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "AYdm4CqWdKytGH6x");
  o = e.makeNodePrototype("label", ["color", "black"], "IsW3hHfFNVf-CpFZ");
  r = e.makeNodePrototype("view", undefined, "OFM6CCyYddOAWEqr");
  d = e.makeNodePrototype("scroll", ["horizontal", true], "EW1sChwXg7vWpJHd");
  n = e.makeNodePrototype("layout", undefined, "v6EY0-OR9XQh-n5r");
  i = e.makeNodePrototype("label", undefined, "hewqGTujvsIySwfY");
  l = e.makeNodePrototype("label", undefined, "3E_BgJUhNr84S6gs");
  s = e.makeNodePrototype("label", undefined, "lz6t2whGIQQ7tP74");
  a = e.makeNodePrototype("label", undefined, "6g3AC4aAJAeiYSWU");
  p = e.makeNodePrototype("label", undefined, "RZd20z4WEIN0kG2U");
  u = require("../Component");
  c = require("../IRenderedVirtualNodeData");
  b = require("../utils/AttributedTextBuilder");
  h = require("./Styles");
  y = h.styles.infoText.extend({marginBottom: 8});
  let VirtualNodePathDisplayer;
  let <class_fields_init>;
  class VirtualNodePathDisplayer extends u.Component { ... }
  <proto:VirtualNodePathDisplayer>.onRender = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.renderNodePaths = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.renderChildrenCount = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.appendComment = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.appendAttributes = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.renderNode = function <atom:0>;
  <proto:VirtualNodePathDisplayer>.renderNodeChildren = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VirtualNodePathDisplayer>;
  VirtualNodePathDisplayer = function <atom:0>;
  // close_loc <class_fields_init>
  VirtualNodePathDisplayer#1 = function <atom:0>;
  exports.VirtualNodePathDisplayer = VirtualNodePathDisplayer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/VirtualNodePathDisplayer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
