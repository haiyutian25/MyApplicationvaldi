// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=573B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  e.Blockquote = 0;
  e[0] = "Blockquote";
  e.Container = 1;
  e[1] = "Container";
  e.Transparent = 2;
  e[2] = "Transparent";
  e.Text = 3;
  e[3] = "Text";
  e.Title = 4;
  e[4] = "Title";
  e.InlineCode = 5;
  e[5] = "InlineCode";
  e.Link = 6;
  e[6] = "Link";
  e.Markdown = 7;
  e[7] = "Markdown";
  e.TextOnlyMarkdown = 8;
  e[8] = "TextOnlyMarkdown";
  e.List = 9;
  e[9] = "List";
  e.ListItem = 10;
  e[10] = "ListItem";
  e.Table = 11;
  e[11] = "Table";
  e.TableSection = 12;
  e[12] = "TableSection";
  e.TableRow = 13;
  e[13] = "TableRow";
  e.TableCell = 14;
  e[14] = "TableCell";
  e.Image = 15;
  e[15] = "Image";
  e.Badge = 16;
  e[16] = "Badge";
  e.Button = 17;
  e[17] = "Button";
  e.Checkbox = 18;
  e[18] = "Checkbox";
  e.Select = 19;
  e[19] = "Select";
  e.SegmentedControl = 20;
  e[20] = "SegmentedControl";
  e.RadioGroup = 21;
  e[21] = "RadioGroup";
  e.DatePicker = 22;
  e[22] = "DatePicker";
  e.Slider = 23;
  e[23] = "Slider";
  e.Textarea = 24;
  e[24] = "Textarea";
  e.LoadingIndicator = 25;
  e[25] = "LoadingIndicator";
  e.BlankBlock = 26;
  e[26] = "BlankBlock";
  e.Omit = 27;
  e[27] = "Omit";
  e.NativeWidget = 28;
  e[28] = "NativeWidget";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=42B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementStack = [];
  this.rootElements = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=60B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
function {
  this = this;
  this.elementStack.length = 0;
  this.rootElements = [];
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=300B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: n, t, this
function {
  this = this;
  let t;
  let n;
  n = {type: e, props: {}, children: []};
  t = this.currentElement();
  if (!((undefined === t))) goto L_96;
  goto L_e1;
  // [栈深重同步 1 -> 0]
  t.children.push(n);
  this.elementStack.push(n);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=76B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: this
function {
  this = this;
  this.requireCurrentElement().props[e] = o;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=56B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: this
function {
  this = this;
  if ((o)) goto L_37;
  this.requireCurrentElement().rawChildren = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=92B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
function {
  this = this;
  if (!((undefined === this.elementStack.pop()))) goto L_5b;
  throw new Error("Unbalanced DIL v2 copy element observer stack.");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=101B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
function {
  this = this;
  if (!((0 !== this.elementStack.length))) goto L_64;
  this.elementStack.length = 0;
  throw new Error("DIL v2 copy element observer ended with unclosed elements.");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=110B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
// closure: d, W
function {
  this = this;
  return this.rootElements.map(d).filter(W);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=79B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
// closure: n
function {
  this = this;
  return n.serializeDILCopyContentNodesForCopy(this.captureCopyContent(), undefined);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_widgets/src/DILV2CopyContentCollector
// locals: this
function {
  this = this;
  return this.elementStack[(this.elementStack.length - 1)];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=69B file=dil_widgets/src/DILV2CopyContentCollector
// locals: e, this
function {
  this = this;
  let e;
  e = this.currentElement();
  if (!((undefined === e))) goto L_41;
  throw new Error("DIL v2 copy element observer received data outside an element.");
  return e;
}

// fn s  args=0 vars=0 closure=1 cpool=0 bc=44B file=dil_widgets/src/DILV2CopyContentCollector
// closure: p
function {
  return Object.keys(p);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=74B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: m, n
function {
  return m(n.DILCopyFlow.Block, e);   // tail call
}

// fn d  args=1 vars=3 closure=21 cpool=1 bc=5250B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// locals: o, l
// closure: m, n, p, u, t, T, y, g, v, C, w, f, _, N, I, x, h, S, K, A, r
function {
  let l;
  let o;
  o = p[e.type];
  if (!((undefined === o))) goto L_8e;
  throw new Error("Missing copy semantics for DIL v2 element "".concat(e.type, ""."));
  l = u(e);
  if (!((o.behavior === t.Blockquote))) goto L_179;
  return T(n.DILCopyContentKind.Blockquote, n.DILCopyFlow.Block, y(e, l));   // tail call
  if (!((o.behavior === t.Container))) goto L_1ce;
  return g(o.flow, l);   // tail call
  if (!((o.behavior === t.Transparent))) goto L_1ff;
  return v(l);   // tail call
  if (!((o.behavior === t.Text))) goto L_255;
  return C(e, o.flow, l);   // tail call
  if (!((o.behavior === t.Title))) goto L_287;
  return w(e, l);   // tail call
  if (!((o.behavior === t.InlineCode))) goto L_34a;
  return T(n.DILCopyContentKind.InlineCode, n.DILCopyFlow.Inline, y(e, l));   // tail call
  if (!((o.behavior === t.Link))) goto L_37c;
  return f(e, l);   // tail call
  if (!((o.behavior === t.Markdown))) goto L_43f;
  if ((_(e.props.value))) goto L_43c;
  return n.buildDILCopyMarkdownNode(N(e.rawChildren));   // tail call
  if (!((o.behavior === t.TextOnlyMarkdown))) goto L_502;
  if ((_(e.props.value))) goto L_4ff;
  return n.buildDILCopyTextOnlyMarkdownNode(N(e.rawChildren));   // tail call
  if (!((o.behavior === t.List))) goto L_663;
  if (((true === e.props.ordered))) goto L_65d;
  return {kind: n.DILCopyContentKind.List, flow: n.DILCopyFlow.Block, children: l, ordered: ("decimal" === e.props.marker)};
  if (!((o.behavior === t.ListItem))) goto L_721;
  return T(n.DILCopyContentKind.ListItem, n.DILCopyFlow.Block, l);   // tail call
  if (!((o.behavior === t.Table))) goto L_7df;
  return T(n.DILCopyContentKind.Table, n.DILCopyFlow.Block, l);   // tail call
  if (!((o.behavior === t.TableSection))) goto L_89d;
  return T(n.DILCopyContentKind.TableSection, n.DILCopyFlow.Block, l);   // tail call
  if (!((o.behavior === t.TableRow))) goto L_9b1;
  return {kind: n.DILCopyContentKind.TableRow, flow: n.DILCopyFlow.Block, children: l, header: (true === e.props.header)};
  if (!((o.behavior === t.TableCell))) goto L_a6f;
  return T(n.DILCopyContentKind.TableCell, n.DILCopyFlow.Block, l);   // tail call
  if (!((o.behavior === t.Image))) goto L_a9e;
  return I(e);   // tail call
  if (!((o.behavior === t.Badge))) goto L_ba8;
  return T(n.DILCopyContentKind.Badge, n.DILCopyFlow.Inline, x(e.props.label, y(e, l)));   // tail call
  if (!((o.behavior === t.Button))) goto L_c6c;
  if ((_(e.props.label))) goto L_c69;
  return m(o.flow, N(e.rawChildren));   // tail call
  if (!((o.behavior === t.Checkbox))) goto L_cc6;
  return g(o.flow, h(e, l));   // tail call
  if (!((o.behavior === t.Select))) goto L_d3c;
  return m(o.flow, S(e.props));   // tail call
  if (!((o.behavior === t.SegmentedControl))) goto L_dfb;
  return m(o.flow, K(e.props.options).join(""));   // tail call
  if (!((o.behavior === t.RadioGroup))) goto L_ffe;
  if (!((undefined === e.props.options))) goto L_f02;
  return T(n.DILCopyContentKind.BlockContainer, n.DILCopyFlow.Block, l);
  return T(n.DILCopyContentKind.BlockContainer, n.DILCopyFlow.Block, K(e.props.options).map(function <atom:0>));
  if (!((o.behavior === t.DatePicker))) goto L_10e4;
  if (!((e.props.value == null))) goto L_10df;
  e.props.value;
  return m(o.flow, A(_(e.props.defaultValue)));   // tail call
  if (((o.behavior === t.Slider))) goto L_1134;
  if (!((o.behavior === t.LoadingIndicator))) goto L_11a3;
  return m(o.flow, _(e.props.label));   // tail call
  if (!((o.behavior === t.Textarea))) goto L_1285;
  if (!((e.props.value == null))) goto L_1281;
  e.props.value;
  return m(o.flow, _(e.props.defaultValue));   // tail call
  if (!((o.behavior === t.BlankBlock))) goto L_1343;
  return T(n.DILCopyContentKind.BlockSeparator, n.DILCopyFlow.Block, r);   // tail call
  if (!((o.behavior === t.Omit))) goto L_136c;
  o.behavior;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === t.NativeWidget))) goto L_1481;
  return {kind: n.DILCopyContentKind.NativeWidget, flow: n.DILCopyFlow.Block, children: r, invocationId: _(e.props.invocationId)};
  return;
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=108B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: d, W
function {
  return e.children.map(d).filter(W);   // tail call
}

// fn C  args=3 vars=5 closure=4 cpool=0 bc=505B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o, t
// locals: r, l
// closure: n, y, T, g
function {
  let l;
  let r;
  if (!((true === e.props.isLoading))) goto L_4f;
  return;
  if (!(("text" === e.type))) goto L_10b;
  if (!((true === e.props.inline))) goto L_10b;
  goto L_10c;
  // [栈深重同步 1 -> 0]
  r = o;
  l = y(e, t);
  if (!((r === n.DILCopyFlow.Block))) goto L_1f0;
  return T(n.DILCopyContentKind.Paragraph, n.DILCopyFlow.Block, l);
  return g(r, l);
}

// fn w  args=2 vars=3 closure=3 cpool=0 bc=391B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: t
// closure: y, g, n
function {
  let t;
  if (!((true === e.props.isLoading))) goto L_4c;
  return;
  t = y(e, o);
  if (!((undefined !== e.props.editable))) goto L_e3;
  return g(n.DILCopyFlow.Block, t);
  return {kind: n.DILCopyContentKind.Heading, flow: n.DILCopyFlow.Block, children: t, level: 3};
}

// fn I  args=1 vars=2 closure=4 cpool=0 bc=258B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// locals: o
// closure: M, n, r, R
function {
  let o;
  o = M(e.props);
  if (!((undefined !== o))) goto L_101;
  return {kind: n.DILCopyContentKind.Image, flow: n.DILCopyFlow.Block, children: r, source: o, alt: R(e.props)};
  return;
}

// fn f  args=2 vars=4 closure=4 cpool=0 bc=295B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, t
// locals: r, l
// closure: y, o, v, n
function {
  let l;
  let r;
  r = y(e, t);
  l = o.normalizeDILLinkHref(e.props.href);
  if (!((undefined === l))) goto L_81;
  return v(r);
  return {kind: n.DILCopyContentKind.Link, flow: n.DILCopyFlow.Inline, children: r, source: l};
}

// fn y  args=2 vars=3 closure=3 cpool=0 bc=212B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: n
// closure: L, B, _
function {
  if (!((undefined !== e.rawChildren))) goto L_84;
  let n;
  n = L(e.rawChildren, o);
  if (((n.length > 0))) goto L_7e;
  if (!((e.rawChildren.length > 0))) goto L_84;
  return n;
  if (!((o.length > 0))) goto L_8c;
  return o;
  return B(_(e.props.value));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=146B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n
function {
  if (!((e.flow === n.DILCopyFlow.Block))) goto L_8d;
  return e.children;
  return [e];
}

// fn h  args=2 vars=3 closure=4 cpool=1 bc=180B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: t
// closure: n, L, B, _
function {
  let t;
  if (!((o.length > 0))) goto L_32;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  if (!((e.rawChildren == null))) goto L_5d;
  e.rawChildren;
  t = L([], o);
  if (!((t.length > 0))) goto L_6c;
  return t;
  return B(_(e.props.label));
}

// fn L  args=2 vars=4 closure=1 cpool=0 bc=35B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: n, t
// closure: k
function {
  let n;
  n = [];
  let t;
  for (const t of e) {
    k(t, n, o);
  }
  return n;
}

// fn k  args=3 vars=4 closure=4 cpool=0 bc=208B file=dil_widgets/src/DILV2CopyContentCollector
// args: o, n, t
// locals: e
// closure: k, e, D, F
function {
  if (!((null != o))) goto L_cf;
  if (!(("boolean" != typeof o))) goto L_cf;
  if (!(("string" != typeof o))) goto L_a0;
  if (!(("number" != typeof o))) goto L_a0;
  if (!(Array.isArray(o))) goto L_6f;
  let e;
  for (const e of o) {
    k(e, n, t);
  }
  return;
  if (!(e.isDILRuntimeElement(o))) goto L_9e;
  D(o, n, t);
  return;
  n.push(F(String(o)));
  return;
}

// fn D  args=3 vars=8 closure=9 cpool=0 bc=1572B file=dil_widgets/src/DILV2CopyContentCollector
// args: t, r, l
// locals: e, e#1, i, a, e#2
// closure: e, k, b, _, L, F, T, n, o
function {
  let a;
  let i;
  if (!((t.type === e.DIL_FRAGMENT))) goto L_87;
  let e;
  for (const e of t.children) {
    k(e, r, l);
  }
  return;
  if (!(("string" != typeof t.type))) goto L_b3;
  return;
  if (!(("__chatgptClientDefinedWidget" === t.type))) goto L_167;
  let e#1;
  if (!((t.props == null))) goto L_10f;
  t.props;
  goto L_130;
  e#1 = b(_(undefined.invocationId), l);
  if (!((undefined !== e#1))) goto L_165;
  r.push(e#1);
  return;
  // append([], 0, L(t.children, l))
  L(t.children, l);
  i = [];
  if (!((t.props == null))) goto L_1c0;
  t.props;
  goto L_1e1;
  a = _(undefined.value);
  if (!((a.length > 0))) goto L_225;
  if (!((0 === i.length))) goto L_225;
  i.unshift(F(a));
  if ((("pressable" !== t.type))) goto L_2ec;
  if (!((t.props == null))) goto L_281;
  t.props;
  goto L_2a2;
  if (((true !== undefined.inline))) goto L_2ec;
  if (!((undefined === t.props.onClick))) goto L_5f3;
  if (!((t.type === "code"))) goto L_3d7;
  r.push(T(n.DILCopyContentKind.InlineCode, n.DILCopyFlow.Inline, i));
  t.type;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "link"))) goto L_55d;
  let e#2;
  if (!((t.props == null))) goto L_434;
  t.props;
  goto L_455;
  e#2 = o.normalizeDILLinkHref(undefined.href);
  if (!((undefined === e#2))) goto L_491;
  // append([], 0, i)
  i;
  goto L_55b;
  // [栈深重同步 2 -> 1]
  r.push({kind: n.DILCopyContentKind.Link, flow: n.DILCopyFlow.Inline, children: i, source: e#2});
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "bold"))) goto L_5c0;
  if (((<?> === "caption"))) goto L_5c0;
  if (((<?> === "italic"))) goto L_5c0;
  if (((<?> === "label"))) goto L_5c0;
  if (((<?> === "popover-trigger"))) goto L_5c0;
  if (((<?> === "pressable"))) goto L_5c0;
  if (((<?> === "radio"))) goto L_5c0;
  if (((<?> === "strikethrough"))) goto L_5c0;
  if (((<?> === "text"))) goto L_5c0;
  if (((<?> === "title"))) goto L_5c0;
  if (!((<?> === "underline"))) goto L_5f1;
  // append([], 0, i)
  i;
  r.push.apply(r, []);
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  return;
  // append([], 0, i)
  i;
  r.push.apply(r, []);
  return;
}

// fn b  args=2 vars=4 closure=2 cpool=0 bc=233B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: t, o#1
// closure: n, b
function {
  let t;
  for (const t of o) {
    let o#1;
    if (!((t.kind === n.DILCopyContentKind.NativeWidget))) goto L_a8;
    if (!((t.invocationId === e))) goto L_a8;
    return t;
    // [栈深重同步 0 -> 3]
    o#1 = b(e, t.children);
    if (!((undefined !== o#1))) continue;
    return o#1;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n
function {
  return (e.flow === n.DILCopyFlow.Block);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n
function {
  return (e.flow === n.DILCopyFlow.Block);
}

// fn v  args=1 vars=1 closure=2 cpool=2 bc=367B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n, T
function {
  if (!(e.some(function <atom:0>))) goto L_71;
  goto L_b6;
  // [栈深重同步 2 -> 1]
  if (!(e.some(function <atom:0>))) goto L_126;
  goto L_16b;
  // [栈深重同步 3 -> 2]
  return T(n.DILCopyContentKind.InlineGroup, n.DILCopyFlow.Inline, e);   // tail call
}

// fn g  args=2 vars=2 closure=2 cpool=0 bc=219B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// closure: T, n
function {
  if (!((e === n.DILCopyFlow.Block))) goto L_91;
  goto L_d6;
  // [栈深重同步 2 -> 1]
  return T(n.DILCopyContentKind.InlineGroup, e, o);   // tail call
}

// fn m  args=2 vars=2 closure=2 cpool=0 bc=8B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// closure: g, B
function {
  return g(e, B(o));   // tail call
}

// fn B  args=1 vars=1 closure=2 cpool=0 bc=17B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: r, F
function {
  if (!((0 === e.length))) goto L_a;
  return r;
  return [F(e)];
}

// fn F  args=1 vars=1 closure=2 cpool=0 bc=164B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n, r
function {
  return {kind: n.DILCopyContentKind.Text, flow: n.DILCopyFlow.Inline, children: r, text: e};
}

// fn T  args=3 vars=3 closure=0 cpool=0 bc=20B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o, n
function {
  return {kind: e, flow: o, children: n};
}

// fn x  args=2 vars=3 closure=2 cpool=0 bc=30B file=dil_widgets/src/DILV2CopyContentCollector
// args: e, o
// locals: n
// closure: _, F
function {
  let n;
  n = _(e);
  if (!((0 === n.length))) goto L_11;
  return o;
  // append([F(n)], 1, o)
  o;
  return [F(n)];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: n
function {
  return (e.value === n);
}

// fn S  args=1 vars=4 closure=2 cpool=1 bc=220B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// locals: o, n, t
// closure: E, _
function {
  let t;
  let n;
  let o;
  o = E(e.options);
  if (!((e.value == null))) goto L_77;
  e.value;
  n = e.defaultValue;
  if (!((o.find(function <atom:0>) == null))) goto L_ab;
  o.find(function <atom:0>);
  t = o[0];
  if (!((t == null))) goto L_b8;
  t;
  goto L_d9;
  return _(undefined.label);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: _
function {
  return _(e.label);   // tail call
}

// fn K  args=1 vars=1 closure=2 cpool=1 bc=41B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: _, E
function {
  return E(e).map(function <atom:0>);   // tail call
}

// fn E  args=1 vars=1 closure=1 cpool=0 bc=87B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: V
function {
  if (!(Array.isArray(e))) goto L_53;
  return e.filter(V);
  return [];
}

// fn M  args=1 vars=3 closure=2 cpool=0 bc=907B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// locals: o, n
// closure: V, q
function {
  if (!(V(e.searchImage))) goto L_157;
  let n;
  let o;
  o = q(e.searchImage.content_url, e.searchImage.contentUrl);
  if (!((undefined !== o))) goto L_c3;
  return o;
  n = q(e.searchImage.thumbnail_url, e.searchImage.thumbnailUrl);
  if (!((undefined !== n))) goto L_157;
  return n;
  if (!(("string" == typeof e.src))) goto L_1a5;
  return e.src;
  if (!(("string" == typeof e.light))) goto L_1f3;
  return e.light;
  if (!(("string" == typeof e.dark))) goto L_241;
  return e.dark;
  if (!(V(e.src))) goto L_38a;
  if (!(("string" == typeof e.src.light))) goto L_2fa;
  return e.src.light;
  if (!(("string" == typeof e.src.dark))) goto L_38a;
  return e.src.dark;
  return;
}

// fn R  args=1 vars=1 closure=2 cpool=0 bc=300B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: V, _
function {
  if (!(("string" == typeof e.alt))) goto L_4e;
  return e.alt;
  if (!(V(e.searchImage))) goto L_107;
  if (!(("string" == typeof e.searchImage.title))) goto L_107;
  return e.searchImage.title;
  return _(e.alt);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=17B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  if (!(("string" == typeof e))) goto L_10;
  return (e.length > 0);
}

// fn q  args=1 vars=1 closure=0 cpool=1 bc=42B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  e = ...0;
  return ...0.find(function <atom:0>);   // tail call
}

// fn N  args=1 vars=1 closure=1 cpool=0 bc=83B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: O
function {
  if (!((undefined === e))) goto L_7;
  return "";
  return e.map(O).join("");
}

// fn O  args=1 vars=1 closure=1 cpool=0 bc=152B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// closure: O
function {
  if ((("string" == typeof e))) goto L_14;
  if (!(("number" == typeof e))) goto L_1e;
  return String(e);
  if (!(Array.isArray(e))) goto L_96;
  return e.map(O).join("");
  return "";
}

// fn _  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  if (!((null == e))) goto L_7;
  return "";
  return String(e);
}

// fn A  args=1 vars=2 closure=0 cpool=2 bc=155B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
// locals: o
function {
  let o;
  o = e.match(new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$"));
  if (!((null === o))) goto L_37;
  return e;
  return "".concat(o[2], "/", o[3], "/", o[1].slice(2));
}

// fn V  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn W  args=1 vars=1 closure=0 cpool=0 bc=4B file=dil_widgets/src/DILV2CopyContentCollector
// args: e
function {
  return (undefined !== e);
}

// fn <atom:0>  args=3 vars=48 closure=0 cpool=44 bc=6019B file=dil_widgets/src/DILV2CopyContentCollector
// args: require, module, exports
// locals: e, o, n, t, r, l, i, a, c, p, DILV2CopyContentCollector, <class_fields_init>, DILV2CopyContentCollector#1, s, d, u, C, w, I, f, y, h, L, k, D, b, v, g, m, B, F, T, x, S, K, E, M, R, q, N, O, _, A, V, W
function {
  s = function s;
  d = function d;
  u = function u;
  C = function C;
  w = function w;
  I = function I;
  f = function f;
  y = function y;
  h = function h;
  L = function L;
  k = function k;
  D = function D;
  b = function b;
  v = function v;
  g = function g;
  m = function m;
  B = function B;
  F = function F;
  T = function T;
  x = function x;
  S = function S;
  K = function K;
  E = function E;
  M = function M;
  R = function R;
  q = function q;
  N = function N;
  O = function O;
  _ = function _;
  A = function A;
  V = function V;
  W = function W;
  let DILV2CopyContentCollector#1;
  let p;
  let c;
  let a;
  let i;
  let l;
  let r;
  let n;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILV2CopyContentCollector = undefined;
  exports.getDILV2CopyElementDefinitionNames = undefined;
  e = require("dil_renderer/src/DILElement");
  o = require("./DILLink");
  n = require("./DILCopyContentRenderer");
  if ((t)) goto L_10d;
  t = {};
  !function <atom:0>({});
  r = [];
  l = {behavior: t.Container, flow: n.DILCopyFlow.Block};
  i = {behavior: t.Transparent, flow: n.DILCopyFlow.Inline};
  a = {behavior: t.Omit, flow: n.DILCopyFlow.Block};
  c = {behavior: t.Omit, flow: n.DILCopyFlow.Inline};
  p = {animate: i, animate-group: i, animate-item: i, badge: {behavior: t.Badge, flow: n.DILCopyFlow.Inline}, blockquote: {behavior: t.Blockquote, flow: n.DILCopyFlow.Block}, bold: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, box: l, button: {behavior: t.Button, flow: n.DILCopyFlow.Inline}, card: l, carousel: l, carousel-item: l, carousel-media-item: l, caption: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, celebration: i, chart: a, checkbox: {behavior: t.Checkbox, flow: n.DILCopyFlow.Block}, __chatgptClientDefinedWidget: {behavior: t.NativeWidget, flow: n.DILCopyFlow.Block}, code: {behavior: t.InlineCode, flow: n.DILCopyFlow.Inline}, col: l, date-picker: {behavior: t.DatePicker, flow: n.DILCopyFlow.Inline}, __dil-rendered-prop: a, divider: {behavior: t.BlankBlock, flow: n.DILCopyFlow.Block}, favicon: {behavior: t.BlankBlock, flow: n.DILCopyFlow.Block}, flashcard-flip: i, flow: l, flow-item: l, follow-up-action-bar: l, form: l, grid: l, grid-item: l, horizontal-swipe-surface: i, icon: c, image: {behavior: t.Image, flow: n.DILCopyFlow.Block}, input: {behavior: t.BlankBlock, flow: n.DILCopyFlow.Block}, italic: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, label: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, link: {behavior: t.Link, flow: n.DILCopyFlow.Inline}, list: {behavior: t.List, flow: n.DILCopyFlow.Block}, list-item: {behavior: t.ListItem, flow: n.DILCopyFlow.Block}, loading: {behavior: t.LoadingIndicator, flow: n.DILCopyFlow.Block}, loading-block: {behavior: t.BlankBlock, flow: n.DILCopyFlow.Block}, loading-indicator: {behavior: t.LoadingIndicator, flow: n.DILCopyFlow.Block}, lottie: a, markdown: {behavior: t.Markdown, flow: n.DILCopyFlow.Block}, math: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, pie-chart: a, popover: i, popover-content: a, popover-trigger: i, pressable: i, pulse-indicator: c, radio-group: {behavior: t.RadioGroup, flow: n.DILCopyFlow.Block}, radio: {behavior: t.Text, flow: n.DILCopyFlow.Block}, row: l, search-image: {behavior: t.Image, flow: n.DILCopyFlow.Block}, select: {behavior: t.Select, flow: n.DILCopyFlow.Inline}, segmented-control: {behavior: t.SegmentedControl, flow: n.DILCopyFlow.Block}, shimmer-text: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, slider: {behavior: t.Slider, flow: n.DILCopyFlow.Block}, spacer: {behavior: t.BlankBlock, flow: n.DILCopyFlow.Block}, strikethrough: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, svg: a, table: {behavior: t.Table, flow: n.DILCopyFlow.Block}, table-cell: {behavior: t.TableCell, flow: n.DILCopyFlow.Block}, table-row: {behavior: t.TableRow, flow: n.DILCopyFlow.Block}, table-section: {behavior: t.TableSection, flow: n.DILCopyFlow.Block}, text: {behavior: t.Text, flow: n.DILCopyFlow.Block}, text-only-markdown: {behavior: t.TextOnlyMarkdown, flow: n.DILCopyFlow.Block}, textarea: {behavior: t.Textarea, flow: n.DILCopyFlow.Block}, title: {behavior: t.Title, flow: n.DILCopyFlow.Block}, tooltip: i, transition: i, underline: {behavior: t.Text, flow: n.DILCopyFlow.Inline}, youtube: a};
  let DILV2CopyContentCollector;
  let <class_fields_init>;
  class DILV2CopyContentCollector extends undefined { ... }
  <proto:DILV2CopyContentCollector>.beginRender = function <atom:0>;
  <proto:DILV2CopyContentCollector>.beginElement = function <atom:0>;
  <proto:DILV2CopyContentCollector>.setProp = function <atom:0>;
  <proto:DILV2CopyContentCollector>.setChildren = function <atom:0>;
  <proto:DILV2CopyContentCollector>.endElement = function <atom:0>;
  <proto:DILV2CopyContentCollector>.endRender = function <atom:0>;
  <proto:DILV2CopyContentCollector>.captureCopyContent = function <atom:0>;
  <proto:DILV2CopyContentCollector>.getCopyContent = function <atom:0>;
  <proto:DILV2CopyContentCollector>.currentElement = function <atom:0>;
  <proto:DILV2CopyContentCollector>.requireCurrentElement = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILV2CopyContentCollector>;
  DILV2CopyContentCollector = function <atom:0>;
  // close_loc <class_fields_init>
  DILV2CopyContentCollector#1 = function <atom:0>;
  exports.DILV2CopyContentCollector = DILV2CopyContentCollector#1;
  exports.getDILV2CopyElementDefinitionNames = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILV2CopyContentCollector
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
