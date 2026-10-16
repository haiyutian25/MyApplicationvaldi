// fn t  args=1 vars=1 closure=1 cpool=0 bc=287B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: e
// closure: t
function {
  if (!((undefined === e))) goto L_b;
  return "<undefined>";
  if (!((null === e))) goto L_16;
  return "<null>";
  if (!(("function" == typeof e))) goto L_26;
  return "<function>";
  if (!(Array.isArray(e))) goto L_cf;
  return "[".concat(e.map(t).join(", "), "]");   // tail call
  if (!(e.toString)) goto L_119;
  return e.toString();
  return "<unknown>";
}

// fn e  args=4 vars=10 closure=3 cpool=0 bc=931B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: o, u, r, s
// locals: i, e, n, o#1, t, n#1
// closure: n, t, e
function {
  let i;
  r.push(u);
  r.push("<");
  i = n(o);
  r.push(i);
  if (!(o.element)) goto L_22e;
  let e;
  e = o.element;
  let n;
  for (const n of e.getAttributeNames()) {
    let o#1;
    o#1 = t(e.getAttribute(n));
    r.push(" ");
    r.push(n);
    r.push("="");
    r.push(o#1.toString());
    r.push(""");
  }
  if (!(o.children.length)) goto L_377;
  if (!(s)) goto L_377;
  let t;
  r.push(">
");
  t = (u + "  ");
  let n#1;
  for (const n#1 of o.children) {
    e(n#1, t, r, s);
  }
  r.push(u);
  r.push("</");
  r.push(i);
  r.push(">
");
  return;
  r.push("/>
");
  return;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=247B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: t
function {
  if (!(t.element)) goto L_68;
  return t.element.tag;
  if (!(t.component)) goto L_f1;
  return t.component.constructor.name;
  return "undefined";
}

// fn o  args=2 vars=3 closure=1 cpool=0 bc=58B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: t, n
// locals: o
// closure: e
function {
  let o;
  o = [];
  e(t, "", o, n);
  return o.join("");   // tail call
}

// fn u  args=1 vars=4 closure=0 cpool=0 bc=311B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: t
// locals: e, n, t#1
function {
  let n;
  let e;
  e = [];
  n = t;
  if (!((undefined !== n))) goto L_10b;
  let t#1;
  t#1 = n.element;
  if (!((undefined !== t#1))) goto L_93;
  e.push(t#1.id);
  goto L_10b;
  e.push(n.key);
  n = n.parent;
  n.parent;
  goto L_c;
  return e.join("/");   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=140B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// args: require, module, exports
// locals: t, e, n, o, u
function {
  t = function t;
  e = function e;
  n = function n;
  o = function o;
  u = function u;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getNodeTag = undefined;
  exports.toXML = undefined;
  exports.computeUniqueId = undefined;
  exports.getNodeTag = n;
  exports.toXML = o;
  exports.computeUniqueId = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/RenderedVirtualNodeUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
