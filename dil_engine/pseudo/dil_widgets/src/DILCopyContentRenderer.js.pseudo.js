// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=453B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  e.BlockContainer = 0;
  e[0] = "BlockContainer";
  e.InlineGroup = 1;
  e[1] = "InlineGroup";
  e.InlineContainer = 2;
  e[2] = "InlineContainer";
  e.Paragraph = 3;
  e[3] = "Paragraph";
  e.Heading = 4;
  e[4] = "Heading";
  e.Text = 5;
  e[5] = "Text";
  e.Strong = 6;
  e[6] = "Strong";
  e.Emphasis = 7;
  e[7] = "Emphasis";
  e.InlineCode = 8;
  e[8] = "InlineCode";
  e.CodeBlock = 9;
  e[9] = "CodeBlock";
  e.Blockquote = 10;
  e[10] = "Blockquote";
  e.HorizontalRule = 11;
  e[11] = "HorizontalRule";
  e.Link = 12;
  e[12] = "Link";
  e.List = 13;
  e[13] = "List";
  e.ListItem = 14;
  e[14] = "ListItem";
  e.Table = 15;
  e[15] = "Table";
  e.TableSection = 16;
  e[16] = "TableSection";
  e.TableRow = 17;
  e[17] = "TableRow";
  e.TableCell = 18;
  e[18] = "TableCell";
  e.Image = 19;
  e[19] = "Image";
  e.Badge = 20;
  e[20] = "Badge";
  e.BlockSeparator = 21;
  e[21] = "BlockSeparator";
  e.NativeWidget = 22;
  e[22] = "NativeWidget";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=593B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  e.Container = 0;
  e[0] = "Container";
  e.Text = 1;
  e[1] = "Text";
  e.Title = 2;
  e[2] = "Title";
  e.InlineCode = 3;
  e[3] = "InlineCode";
  e.Markdown = 4;
  e[4] = "Markdown";
  e.List = 5;
  e[5] = "List";
  e.ListItem = 6;
  e[6] = "ListItem";
  e.Table = 7;
  e[7] = "Table";
  e.TableSection = 8;
  e[8] = "TableSection";
  e.TableRow = 9;
  e[9] = "TableRow";
  e.TableCell = 10;
  e[10] = "TableCell";
  e.Image = 11;
  e[11] = "Image";
  e.SearchImage = 12;
  e[12] = "SearchImage";
  e.Badge = 13;
  e[13] = "Badge";
  e.NormalizedInline = 14;
  e[14] = "NormalizedInline";
  e.Button = 15;
  e[15] = "Button";
  e.Checkbox = 16;
  e[16] = "Checkbox";
  e.Select = 17;
  e[17] = "Select";
  e.SegmentedControl = 18;
  e[18] = "SegmentedControl";
  e.RadioGroup = 19;
  e[19] = "RadioGroup";
  e.DatePicker = 20;
  e[20] = "DatePicker";
  e.Slider = 21;
  e[21] = "Slider";
  e.Textarea = 22;
  e[22] = "Textarea";
  e.LoadingIndicator = 23;
  e[23] = "LoadingIndicator";
  e.AudioPlayer = 24;
  e[24] = "AudioPlayer";
  e.FootballLocationIndicator = 25;
  e[25] = "FootballLocationIndicator";
  e.BlankBlock = 26;
  e[26] = "BlankBlock";
  e.Transparent = 27;
  e[27] = "Transparent";
  e.Omit = 28;
  e[28] = "Omit";
  e.NativeWidget = 29;
  e[29] = "NativeWidget";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  e.Inline = 0;
  e[0] = "Inline";
  e.Block = 1;
  e[1] = "Block";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  e.Preserve = 0;
  e[0] = "Preserve";
  e.OmitAll = 1;
  e[1] = "OmitAll";
  e.OmitCompact = 2;
  e[2] = "OmitCompact";
  return;
}

// fn w  args=0 vars=0 closure=1 cpool=0 bc=44B file=dil_widgets/src/DILCopyContentRenderer
// closure: C
function {
  return Object.keys(C);   // tail call
}

// fn y  args=2 vars=3 closure=2 cpool=0 bc=23B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: V, S
function {
  let n;
  n = V(e, r);
  if (!((undefined === n))) goto L_11;
  return "";
  return S(n);
}

// fn T  args=2 vars=4 closure=3 cpool=0 bc=114B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: V, R, u
function {
  let o;
  let n;
  n = V(e, r);
  if (!((undefined === n))) goto L_15;
  goto L_5f;
  // [栈深重同步 1 -> 0]
  o = R(n.renderer, n.celScope);
  if (!((undefined === o))) goto L_6b;
  return u;
  return [o];
}

// fn x  args=3 vars=4 closure=2 cpool=0 bc=24B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o
// closure: P, S
function {
  let o;
  o = P(e, r, n);
  if (!((undefined === o))) goto L_12;
  return undefined;
  return S(o);
}

// fn S  args=1 vars=2 closure=2 cpool=0 bc=93B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r
// closure: R, L
function {
  let r;
  r = R(e.renderer, e.celScope);
  if (!((undefined === r))) goto L_53;
  return "";
  return L([r], undefined);
}

// fn L  args=2 vars=3 closure=5 cpool=0 bc=125B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: He, ie, ee, m, k
function {
  let n;
  if (!((undefined === r))) goto L_12;
  goto L_42;
  // [栈深重同步 4 -> 3]
  n = He(ie(ee(e), {imageBehavior: k.Preserve, nativeWidgets: r}));
  if (!((0 === n.length))) goto L_4f;
  return "";
  return "".concat(n, "
");
}

// fn P  args=3 vars=7 closure=3 cpool=0 bc=410B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o, e#1, r#1, o#1
// closure: V, Me, P
function {
  let o;
  o = V(e, r);
  if (!((undefined !== o))) goto L_199;
  if (!((o.renderer.props.nodeIdProperty == null))) goto L_80;
  o.renderer.props.nodeIdProperty;
  goto L_c8;
  if (!((undefined.getValue(o.celScope) === n))) goto L_d0;
  return o;
  let e#1;
  for (const e#1 of Me(o.renderer, o.celScope)) {
    let r#1;
    for (const r#1 of e#1.children) {
      let o#1;
      o#1 = P(r#1, e#1.celScope, n);
      if (!((undefined !== o#1))) continue;
      return o#1;
      // [栈深重同步 0 -> 3]
    }
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn V  args=2 vars=4 closure=1 cpool=0 bc=112B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: o, t
// closure: n
function {
  let t;
  let o;
  o = n.makeScopedDILWidgetRendererCELScope(e, r);
  t = n.unwrapDILWidgetRenderer(e);
  if (!((undefined === t))) goto L_5e;
  return undefined;
  return {celScope: o, renderer: t};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: re, g
function {
  return re(g.Block, e);   // tail call
}

// fn R  args=2 vars=5 closure=29 cpool=1 bc=3342B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, n#1, o
// closure: re, g, C, h, Le, Z, D, ee, f, k, $, M, N, Y, Ee, A, te, W, E, O, z, Oe, H, U, _, F, j, u, l
function {
  let n;
  n = C[e.name];
  if (!((undefined === n))) goto L_8b;
  throw new Error("Missing copy semantics for DIL renderer "".concat(e.name, ""."));
  if (!((n.behavior === h.Container))) goto L_12f;
  if (!(Le(e, r))) goto L_de;
  n.behavior;
  return;
  // [栈深重同步 0 -> 1]
  return Z(n.flow, D(e, r).nodes);   // tail call
  if (!((<?> === h.Transparent))) goto L_182;
  return ee(D(e, r).nodes);   // tail call
  if (!((<?> === h.NormalizedInline))) goto L_2a2;
  if (!(("Pressable" === e.name))) goto L_278;
  goto L_29c;
  // [栈深重同步 3 -> 2]
  return {kind: f.InlineContainer, flow: g.Inline, children: D(e, r).nodes, imageBehavior: k.Preserve};
  if (!((<?> === h.Text))) goto L_2f4;
  return $(e, r, n.flow);   // tail call
  if (!((<?> === h.Title))) goto L_322;
  return M(e, r);   // tail call
  if (!((<?> === h.InlineCode))) goto L_350;
  return N(e, r);   // tail call
  if (!((<?> === h.Markdown))) goto L_382;
  return Y(Ee(e, r));   // tail call
  if (!((<?> === h.List))) goto L_3b0;
  return A(e, r);   // tail call
  if (!((<?> === h.ListItem))) goto L_449;
  return te(f.ListItem, g.Block, D(e, r).nodes);   // tail call
  if (!((<?> === h.Table))) goto L_4e2;
  return te(f.Table, g.Block, D(e, r).nodes);   // tail call
  if (!((<?> === h.TableSection))) goto L_510;
  return W(e, r);   // tail call
  if (!((<?> === h.TableRow))) goto L_53e;
  return E(e, r);   // tail call
  if (!((<?> === h.TableCell))) goto L_5d7;
  return te(f.TableCell, g.Block, D(e, r).nodes);   // tail call
  if (((<?> === h.Image))) goto L_623;
  if (!((<?> === h.SearchImage))) goto L_62b;
  return O(e, r);   // tail call
  if (!((<?> === h.Badge))) goto L_659;
  return z(e, r);   // tail call
  if (((<?> === h.Button))) goto L_6a5;
  if (!((<?> === h.Checkbox))) goto L_71d;
  return re(n.flow, Oe(e.props.getPropertyValue("label", r)));   // tail call
  if (!((<?> === h.Select))) goto L_771;
  return re(n.flow, H(e, r));   // tail call
  if (!((<?> === h.SegmentedControl))) goto L_7ea;
  return re(n.flow, U(e, r).join(""));   // tail call
  if (!((<?> === h.RadioGroup))) goto L_888;
  return te(f.BlockContainer, g.Block, U(e, r).map(function <atom:0>));   // tail call
  if (!((<?> === h.DatePicker))) goto L_8dc;
  return re(n.flow, _(e, r));   // tail call
  if (((<?> === h.Slider))) goto L_928;
  if (!((<?> === h.LoadingIndicator))) goto L_9a0;
  return re(n.flow, Oe(e.props.getPropertyValue("label", r)));   // tail call
  if (!((<?> === h.Textarea))) goto L_a92;
  if (!((e.props.getPropertyValue("value", r) == null))) goto L_a8e;
  e.props.getPropertyValue("value", r);
  return re(n.flow, Oe(e.props.getPropertyValue("defaultValue", r)));   // tail call
  if (!((<?> === h.AudioPlayer))) goto L_ac0;
  return F(e, r);   // tail call
  if (!((<?> === h.FootballLocationIndicator))) goto L_b10;
  return j(n.flow);   // tail call
  if (!((<?> === h.BlankBlock))) goto L_b85;
  return te(f.BlockSeparator, g.Block, u);   // tail call
  if (!((<?> === h.Omit))) goto L_bac;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === h.NativeWidget))) goto L_d0d;
  let o;
  let n#1;
  n#1 = e.props.getPropertyValueAsString("category", r);
  o = l.readContentReferenceIndex(e.props.getPropertyValue("refIndex", r));
  if (((undefined === n#1))) goto L_ca8;
  if (!((undefined === o))) goto L_cab;
  return;
  // [栈深重同步 0 -> 1]
  return {kind: f.NativeWidget, flow: g.Block, children: u, contentReferenceIndex: o};
  return;
}

// fn D  args=2 vars=8 closure=3 cpool=0 bc=342B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t, e#1, r#1, o#1
// closure: Me, V, R
function {
  let o;
  let n;
  n = [];
  o = false;
  let t;
  for (const t of Me(e, r)) {
    if (!((t.children.length > 0))) goto L_4a;
    o = true;
    true;
    let e#1;
    for (const e#1 of t.children) {
      let o#1;
      let r#1;
      r#1 = V(e#1, t.celScope);
      if (((undefined === r#1))) continue;
      o#1 = R(r#1.renderer, r#1.celScope);
      if (!((undefined !== o#1))) goto L_131;
      n.push(o#1);
    }
    // [栈深重同步 0 -> 3]
  }
  return {nodes: n, hadRenderedChildren: o};
}

// fn $  args=3 vars=6 closure=7 cpool=0 bc=543B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o, t, i
// closure: D, ne, Oe, g, te, f, Z
function {
  let i;
  let t;
  let o;
  if (!((true === e.props.getPropertyValueAsBoolean("isLoading", r)))) goto L_5b;
  return;
  o = D(e, r);
  if (!(o.hadRenderedChildren)) goto L_ac;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  t = ne(Oe(e.props.getPropertyValue("value", r)));
  if (!(("Text" === e.name))) goto L_19c;
  if (!((true === e.props.getPropertyValueAsBoolean("inline", r)))) goto L_19c;
  goto L_19d;
  // [栈深重同步 1 -> 0]
  i = n;
  if (!((i === g.Block))) goto L_214;
  return te(f.Paragraph, g.Block, t);
  return Z(i, t);
}

// fn M  args=2 vars=4 closure=6 cpool=0 bc=470B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: D, ne, Oe, Z, g, f
function {
  let o;
  let n;
  if (!((true === e.props.getPropertyValueAsBoolean("isLoading", r)))) goto L_58;
  return;
  n = D(e, r);
  if (!(n.hadRenderedChildren)) goto L_a9;
  goto L_f9;
  // [栈深重同步 1 -> 0]
  o = ne(Oe(e.props.getPropertyValue("value", r)));
  if (!((undefined !== e.props.getPropertyValue("editable", r)))) goto L_174;
  return Z(g.Block, o);
  return {kind: f.Heading, flow: g.Block, children: o, level: 3};
}

// fn N  args=2 vars=4 closure=6 cpool=0 bc=247B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: D, ne, Oe, te, f, g
function {
  let o;
  let n;
  n = D(e, r);
  if (!(n.hadRenderedChildren)) goto L_57;
  goto L_a7;
  // [栈深重同步 1 -> 0]
  o = ne(Oe(e.props.getPropertyValue("value", r)));
  return te(f.InlineCode, g.Inline, o);   // tail call
}

// fn A  args=2 vars=2 closure=3 cpool=0 bc=209B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: f, g, D
function {
  return {kind: f.List, flow: g.Block, children: D(e, r).nodes, ordered: ("decimal" === e.props.getPropertyValueAsString("marker", r))};
}

// fn W  args=2 vars=4 closure=6 cpool=0 bc=432B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: D, Oe, f, g, te, ne
function {
  let o;
  let n;
  // append([], 0, D(e, r).nodes)
  D(e, r).nodes;
  n = [];
  o = Oe(e.props.getPropertyValue("label", r));
  if (!((o.length > 0))) goto L_162;
  n.unshift({kind: f.TableRow, flow: g.Block, children: [te(f.TableCell, g.Block, ne(o))], header: false});
  return te(f.TableSection, g.Block, n);   // tail call
}

// fn E  args=2 vars=2 closure=3 cpool=0 bc=206B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: f, g, D
function {
  return {kind: f.TableRow, flow: g.Block, children: D(e, r).nodes, header: (true === e.props.getPropertyValueAsBoolean("header", r))};
}

// fn O  args=2 vars=3 closure=6 cpool=0 bc=140B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: Ce, f, g, u, we, xe
function {
  let n;
  n = Ce(e, r);
  if (!((undefined !== n))) goto L_8b;
  if (!((we(e, r) == null))) goto L_7a;
  we(e, r);
  return {kind: f.Image, flow: g.Block, children: u, source: n, alt: "", compact: xe(e, r)};
  return;
}

// fn z  args=2 vars=4 closure=6 cpool=0 bc=270B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: D, Oe, ne, te, f, g
function {
  let o;
  let n;
  // append([], 0, D(e, r).nodes)
  D(e, r).nodes;
  n = [];
  o = Oe(e.props.getPropertyValue("label", r));
  if (!((o.length > 0))) goto L_be;
  // append([], 0, ne(o))
  ne(o);
  n.unshift.apply(n, []);
  return te(f.Badge, g.Inline, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=43B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return "".concat(e, "x");   // tail call
}

// fn F  args=2 vars=9 closure=9 cpool=1 bc=1025B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t, i, l, a, c
// closure: Oe, ze, G, q, d, f, g, u, te
function {
  let c;
  let a;
  let l;
  let i;
  let t;
  let o;
  let n;
  n = Oe(e.props.getPropertyValue("title", r));
  o = Oe(e.props.getPropertyValue("subtitle", r));
  t = ze(e.props.getPropertyValue("durationSeconds", r));
  if (!((ze(e.props.getPropertyValue("initialCurrentTimeSeconds", r)) == null))) goto L_156;
  ze(e.props.getPropertyValue("initialCurrentTimeSeconds", r));
  i = 0;
  if (!((ze(e.props.getPropertyValue("defaultPlaybackRate", r)) == null))) goto L_1ab;
  ze(e.props.getPropertyValue("defaultPlaybackRate", r));
  l = 1;
  a = Oe(e.props.getPropertyValue("src", r));
  c = [];
  G(c, n);
  G(c, o);
  if (!((undefined !== t))) goto L_289;
  G(c, q(i));
  G(c, "-".concat(q(Math.max(0, (t - i)))));
  G(c, "".concat(d.map(function <atom:0>).join(""), "Playback speed: ", l, "x", l, "x"));
  if (!((a.length > 0))) goto L_3af;
  c.push({kind: f.Link, flow: g.Block, children: u, source: a});
  return te(f.BlockContainer, g.Block, c);   // tail call
}

// fn j  args=1 vars=1 closure=2 cpool=0 bc=45B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: re, p
function {
  return re(e, p.join(""));   // tail call
}

// fn G  args=2 vars=2 closure=2 cpool=0 bc=83B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: re, g
function {
  if (!((r.length > 0))) goto L_52;
  e.push(re(g.Block, r));
  return;
}

// fn q  args=1 vars=2 closure=0 cpool=1 bc=228B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r
function {
  let r;
  r = Math.max(0, Math.floor(e));
  return "".concat(Math.floor((r / 60)), ":", String((r % 60)).padStart(2, "0"));   // tail call
}

// fn _  args=2 vars=4 closure=1 cpool=2 bc=322B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
// closure: Oe
function {
  let o;
  let n;
  if (!((e.props.getPropertyValue("value", r) == null))) goto L_a4;
  e.props.getPropertyValue("value", r);
  n = Oe(e.props.getPropertyValue("defaultValue", r));
  o = n.match(new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$"));
  if (!((null === o))) goto L_de;
  return n;
  return "".concat(o[2], "/", o[3], "/", o[1].slice(2));
}

// fn H  args=2 vars=5 closure=2 cpool=0 bc=321B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t
// closure: K, Oe
function {
  let o;
  let n;
  if (!((e.props.getPropertyValue("value", r) == null))) goto L_a3;
  e.props.getPropertyValue("value", r);
  n = e.props.getPropertyValue("defaultValue", r);
  o = K(e, r);
  let t;
  for (const t of o) {
    if (!((t.value === n))) continue;
    return Oe(t.label);
    // [栈深重同步 0 -> 3]
  }
  if (!((o.length > 0))) goto L_13f;
  return Oe(o[0].label);
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Oe
function {
  return Oe(e.label);   // tail call
}

// fn U  args=2 vars=2 closure=2 cpool=1 bc=42B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: Oe, K
function {
  return K(e, r).map(function <atom:0>);   // tail call
}

// fn K  args=2 vars=3 closure=1 cpool=0 bc=206B file=dil_widgets/src/DILCopyContentRenderer
// args: r, n
// locals: o
// closure: e
function {
  let o;
  o = r.props.getPropertyValue("options", n);
  if (!(Array.isArray(o))) goto L_ca;
  return o.filter(e.isCELMap);
  return [];
}

// fn Y  args=1 vars=1 closure=2 cpool=0 bc=77B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Q, t
function {
  return Q(t.Markdown.parse(e));   // tail call
}

// fn J  args=1 vars=1 closure=2 cpool=0 bc=77B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Q, t
function {
  return Q(t.Markdown.parseTextOnly(e));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=108B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: te, f, g, X
function {
  return te(f.ListItem, g.Block, X(e.inlines));   // tail call
}

// fn Q  args=1 vars=4 closure=5 cpool=3 bc=1341B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r, n, e#1
// closure: te, f, g, X, u
function {
  let r;
  r = [];
  let n;
  for (const n of e.blocks) {
    if (!((n.kind === "heading"))) goto L_12f;
    r.push({kind: f.Heading, flow: g.Block, children: X(n.inlines), level: n.level});
    goto L_4e8;
    if (!((n.kind === "paragraph"))) goto L_1d2;
    r.push(te(f.Paragraph, g.Block, X(n.inlines)));
    goto L_4e8;
    if (!((n.kind === "quote"))) goto L_275;
    r.push(te(f.Blockquote, g.Block, X(n.inlines)));
    goto L_4e8;
    if (!((n.kind === "code"))) goto L_32c;
    r.push({kind: f.CodeBlock, flow: g.Block, children: u, text: n.text});
    goto L_4e8;
    if (!((n.kind === "rule"))) goto L_3a9;
    r.push(te(f.HorizontalRule, g.Block, u));
    goto L_4e8;
    if (!((n.kind === "list"))) goto L_4e8;
    let e#1;
    if (!((n.items == null))) goto L_3e4;
    n.items;
    e#1 = [];
    if (!((e#1.length > 0))) goto L_4df;
    r.push({kind: f.List, flow: g.Block, children: e#1.map(function <atom:0>), ordered: new RegExp("^\\d").test(e#1[0].marker)});
    n.kind;
  }
  return te(f.BlockContainer, g.Block, r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=619B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r
// closure: oe, te, f, g
function {
  let r;
  r = oe(e.text);
  if (!(e.code)) goto L_9e;
  r = te(f.InlineCode, g.Inline, [r]);
  te(f.InlineCode, g.Inline, [r]);
  if (!(e.bold)) goto L_115;
  r = te(f.Strong, g.Inline, [r]);
  te(f.Strong, g.Inline, [r]);
  if (!(e.italic)) goto L_18c;
  r = te(f.Emphasis, g.Inline, [r]);
  te(f.Emphasis, g.Inline, [r]);
  if (!(e.link)) goto L_266;
  if (!((undefined !== e.href))) goto L_266;
  r = {kind: f.Link, flow: g.Inline, children: [r], source: e.href};
  {kind: f.Link, flow: g.Inline, children: [r], source: e.href};
  return r;
}

// fn X  args=1 vars=1 closure=4 cpool=1 bc=39B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: oe, te, f, g
function {
  return e.map(function <atom:0>);   // tail call
}

// fn Z  args=2 vars=2 closure=3 cpool=0 bc=114B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: te, g, f
function {
  if (!((e === g.Block))) goto L_4b;
  goto L_6d;
  // [栈深重同步 2 -> 1]
  return te(f.InlineGroup, e, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: g
function {
  return (e.flow === g.Block);
}

// fn ee  args=1 vars=1 closure=2 cpool=1 bc=116B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: g, Z
function {
  if (!(e.some(function <atom:0>))) goto L_4e;
  goto L_70;
  // [栈深重同步 2 -> 1]
  return Z(g.Inline, e);   // tail call
}

// fn re  args=2 vars=2 closure=2 cpool=0 bc=8B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: Z, ne
function {
  return Z(e, ne(r));   // tail call
}

// fn ne  args=1 vars=1 closure=2 cpool=0 bc=17B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: u, oe
function {
  if (!((0 === e.length))) goto L_a;
  return u;
  return [oe(e)];
}

// fn oe  args=1 vars=1 closure=3 cpool=0 bc=94B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: f, g, u
function {
  return {kind: f.Text, flow: g.Inline, children: u, text: e};
}

// fn te  args=3 vars=3 closure=0 cpool=0 bc=20B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
function {
  return {kind: e, flow: r, children: n};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return "> ".concat(e);   // tail call
}

// fn ie  args=2 vars=5 closure=15 cpool=1 bc=2236B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, n#1, n#2
// closure: f, ae, je, k, se, Ge, le, de, ue, pe, _e, fe, ge, be, s
function {
  if (((e.kind === f.BlockContainer))) goto L_6e;
  if (!((e.kind === f.InlineGroup))) goto L_96;
  return ae(e.children, r, "");   // tail call
  if (!((e.kind === f.InlineContainer))) goto L_160;
  if (!((e.imageBehavior === k.OmitCompact))) goto L_15a;
  null;
  r;
  goto L_15b;
  // [栈深重同步 5 -> 4]
  return je(ae(e.children, r, ""));   // tail call
  if (!((e.kind === f.Paragraph))) goto L_1af;
  return se(e.children, r);   // tail call
  if (!((e.kind === f.Heading))) goto L_28c;
  let n;
  n = se(e.children, r);
  if (!((0 === n.length))) goto L_20d;
  return "";
  if (!((e.level == null))) goto L_27d;
  e.level;
  return "".concat("#".repeat(1), " ", n);
  if (!((e.kind === f.Text))) goto L_2e0;
  if (!((e.text == null))) goto L_2dd;
  e.text;
  return Ge("");   // tail call
  if (!((e.kind === f.NativeWidget))) goto L_30e;
  return le(e, r);   // tail call
  if (!((e.kind === f.Strong))) goto L_3c2;
  let n#1;
  n#1 = se(e.children, r);
  if (!((0 === n#1.trim().length))) goto L_390;
  return "";
  return "**".concat(n#1, "**");
  if (!((e.kind === f.Emphasis))) goto L_476;
  let n#2;
  n#2 = se(e.children, r);
  if (!((0 === n#2.trim().length))) goto L_444;
  return "";
  return "_".concat(n#2, "_");
  if (!((e.kind === f.InlineCode))) goto L_4a7;
  return de(ue(e));   // tail call
  if (!((e.kind === f.CodeBlock))) goto L_4fb;
  if (!((e.text == null))) goto L_4f8;
  e.text;
  return pe("");   // tail call
  if (!((e.kind === f.Blockquote))) goto L_5c3;
  return se(e.children, r).split("
").map(function <atom:0>).join("
");   // tail call
  if (!((e.kind === f.HorizontalRule))) goto L_5ef;
  return "---";
  if (!((e.kind === f.Link))) goto L_69e;
  if (!((e.source == null))) goto L_695;
  e.source;
  return "[".concat(se(e.children, r), "](", _e(""), ")");   // tail call
  if (!((e.kind === f.List))) goto L_6cc;
  return fe(e, r);   // tail call
  if (!((e.kind === f.ListItem))) goto L_71a;
  return ae(e.children, r, "");   // tail call
  if (!((e.kind === f.Table))) goto L_748;
  return ge(e, r);   // tail call
  if (((e.kind === f.TableSection))) goto L_7ba;
  if (((e.kind === f.TableRow))) goto L_7ba;
  if (!((e.kind === f.TableCell))) goto L_7e2;
  return ae(e.children, r, "");   // tail call
  if (!((e.kind === f.Image))) goto L_810;
  return be(e, r);   // tail call
  if (!((e.kind === f.Badge))) goto L_891;
  null;
  r;
  return je(ae(e.children, {imageBehavior: k.OmitAll}, " "));   // tail call
  if (!((e.kind === f.BlockSeparator))) goto L_8bb;
  return s;
  e.kind;
  return;
}

// fn le  args=2 vars=4 closure=0 cpool=0 bc=322B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
function {
  let o;
  let n;
  n = r.nativeWidgets;
  if (!((undefined === n))) goto L_32;
  return "";
  if (!((undefined === e.invocationId))) goto L_7c;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  o = n.referenceIndexByInvocationId.get(e.invocationId);
  if (!((undefined === o))) goto L_f0;
  return "";
  if (!((n.markdownByReferenceIndex.get(o) == null))) goto L_141;
  n.markdownByReferenceIndex.get(o);
  return "";
}

// fn ae  args=3 vars=8 closure=5 cpool=0 bc=468B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o, t, i, e#1, l
// closure: f, ce, g, ie, He
function {
  let t;
  let o;
  o = undefined;
  t = "";
  let i;
  for (const i of e) {
    let l;
    let e#1;
    if (!((i.kind === f.BlockSeparator))) goto L_96;
    t = ce(t);
    ce(t);
    o = g.Block;
    g.Block;
   continue;
    e#1 = ie(i, r);
    if (!((i.flow === g.Block))) goto L_ef;
    goto L_f2;
    // [栈深重同步 4 -> 3]
    l = e#1;
    if (!((0 !== l.length))) goto L_1c6;
    if (!((t.length > 0))) goto L_191;
    if (((o === g.Block))) goto L_17f;
    if (!((i.flow === g.Block))) goto L_188;
    goto L_18d;
    // [栈深重同步 4 -> 3]
    t = (t + n);
    (t + n);
    t = (t + l);
    (t + l);
    o = i.flow;
    i.flow;
  }
  return t;
}

// fn ce  args=1 vars=1 closure=1 cpool=0 bc=94B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: s
function {
  if (((0 === e.length))) goto L_30;
  if (!(e.endsWith(s))) goto L_34;
  return e;
  return "".concat(e, s);
}

// fn se  args=2 vars=8 closure=4 cpool=0 bc=339B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, i, e#1, r#1, t
// closure: ie, f, Fe, ce
function {
  let t;
  let o;
  let n;
  n = "";
  o = "";
  let i;
  for (const i of e) {
    let e#1;
    e#1 = ie(i, r);
    if (!((i.kind === f.NativeWidget))) goto L_cd;
    if (!((e#1.length > 0))) goto L_cd;
    let r#1;
    r#1 = Fe(o).trim();
    if (!((r#1.length > 0))) goto L_b6;
    n = (ce(n) + r#1);
    (ce(n) + r#1);
    n = (ce(n) + e#1);
    (ce(n) + e#1);
    o = "";
    "";
   continue;
    o = (o + e#1);
    (o + e#1);
  }
  t = Fe(o);
  if (!((0 === n.length))) goto L_f5;
  return t;
  if (!((0 === t.trim().length))) goto L_125;
  return n;
  return (ce(n) + t.trim());
}

// fn ue  args=1 vars=1 closure=2 cpool=0 bc=221B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: f, ue
function {
  if (!((e.kind === f.Text))) goto L_70;
  if (!((e.text == null))) goto L_dc;
  e.text;
  return "";
  return e.children.map(ue).join("");
}

// fn de  args=1 vars=4 closure=0 cpool=4 bc=238B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r, n, o
function {
  let o;
  let n;
  let r;
  if (!((0 === e.length))) goto L_11;
  return "";
  r = e.replace(new RegExp("\\r?\\n|\\r"), " ");
  n = "`";
  if (!(r.includes(n))) goto L_83;
  n = (n + "`");
  (n + "`");
  goto L_47;
  if (!(new RegExp("^`|^ .*?[^ ].* $|`$").test(r))) goto L_b8;
  goto L_b9;
  // [栈深重同步 1 -> 0]
  o = "";
  return "".concat(n, o, r, o, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return "    ".concat(e);   // tail call
}

// fn pe  args=1 vars=1 closure=0 cpool=3 bc=163B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\n$"), "").split("
").map(function <atom:0>).join("
");   // tail call
}

// fn fe  args=2 vars=7 closure=5 cpool=0 bc=359B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t, i, r#1
// closure: He, ie, f, he, s
function {
  let o;
  let n;
  n = [];
  o = 0;
  let t;
  for (const t of e.children) {
    let i;
    i = He(ie(t, r));
    if (!((0 !== i.length))) continue;
    if (!((t.kind === f.ListItem))) goto L_109;
    let r#1;
    if (!((true === e.ordered))) goto L_d0;
    o = (o ++);
    goto L_d5;
    // [栈深重同步 4 -> 3]
    r#1 = "* ";
    n.push(he(i, r#1));
   continue;
    n.push(i);
  }
  return n.join(s);   // tail call
}

// fn he  args=2 vars=2 closure=0 cpool=2 bc=50B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
function {
  return (r + e.replace(new RegExp("\\n"), "
    "));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.header;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=77B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
function {
  return Math.max(e, r.values.length);   // tail call
}

// fn ge  args=2 vars=5 closure=2 cpool=2 bc=271B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t
// closure: ke, Ie
function {
  let t;
  let o;
  let n;
  n = [];
  ke(e.children, r, n);
  if (!((0 === n.length))) goto L_40;
  return "";
  if (!(n.some(function <atom:0>))) goto L_70;
  goto L_d1;
  // [栈深重同步 1 -> 0]
  // append([{header: true, values: n[0].values}], 1, n.slice(1))
  n.slice(1);
  o = [{header: true, values: n[0].values}];
  t = o.reduce(function <atom:0>, 0);
  if (!((0 === t))) goto L_106;
  return "";
  return Ie(o, t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: f
function {
  return (e.kind === f.TableCell);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=8B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Be, me, r
function {
  return Be(me(e, r));   // tail call
}

// fn ke  args=3 vars=4 closure=4 cpool=2 bc=415B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o
// closure: f, Be, me, ke
function {
  let o;
  for (const o of e) {
    if (!((o.kind !== f.TableSection))) goto L_16c;
    if (!((o.kind === f.TableRow))) goto L_194;
    goto L_194;
    // [栈深重同步 4 -> 3]
    ke(o.children, r, n);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: me, r
function {
  return me(e, r);   // tail call
}

// fn me  args=2 vars=2 closure=3 cpool=1 bc=374B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// closure: me, f, le
function {
  if (!((e.kind === f.Text))) goto L_73;
  if (!((e.text == null))) goto L_175;
  e.text;
  return "";
  if (!((e.kind === f.Image))) goto L_bc;
  return "";
  if (!((e.kind === f.NativeWidget))) goto L_108;
  return le(e, r);
  return e.children.map(function <atom:0>).join("");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return "-".repeat(e);   // tail call
}

// fn Ie  args=2 vars=7 closure=1 cpool=1 bc=468B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, t, e#1, o, t#1
// closure: ve
function {
  let o;
  let n;
  n = Array(r).fill(3);
  let t;
  for (const t of e) {
    let e#1;
    e#1 = 0;
    if (!((e#1 < r))) continue;
    if (!((t.values[e#1] == null))) goto L_aa;
    t.values[e#1];
    n[e#1] = Math.max(n[e#1], "".length);
    e#1 = <e#1_new>;
    (e#1++);
    goto L_41;
  }
  o = [];
  let t#1;
  for (const t#1 of e) {
    o.push(ve(t#1.values, n));
    if (!(t#1.header)) goto L_19e;
    o.push(ve(n.map(function <atom:0>), n));
  }
  return o.join("
");   // tail call
}

// fn ve  args=2 vars=4 closure=0 cpool=0 bc=217B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
function {
  let n;
  n = [];
  let o;
  o = 0;
  if (!((o < r.length))) goto L_7f;
  if (!((e[o] == null))) goto L_43;
  e[o];
  n.push("".padEnd(r[o], " "));
  o = <o_new>;
  (o++);
  goto L_c;
  return "| ".concat(n.join(" | "), " |");   // tail call
}

// fn Be  args=1 vars=1 closure=0 cpool=6 bc=175B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\s+"), " ").trim().replace(new RegExp("\\\\"), "\\").replace(new RegExp("\\|"), "\|");   // tail call
}

// fn be  args=2 vars=3 closure=3 cpool=0 bc=459B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: k, qe, _e
function {
  let n;
  if (((r.imageBehavior === k.OmitAll))) goto L_b8;
  if (!((r.imageBehavior === k.OmitCompact))) goto L_bc;
  if (!((true === e.compact))) goto L_bc;
  return "";
  if (!((e.source == null))) goto L_e4;
  e.source;
  n = "";
  if (!((0 === n.length))) goto L_ef;
  return "";
  if (!((e.alt == null))) goto L_13e;
  e.alt;
  if (!((undefined === e.title))) goto L_172;
  goto L_1c2;
  // [栈深重同步 6 -> 5]
  return "![".concat(qe(""), "](", _e(n), " "".concat(e.title, """), ")");
}

// fn Ce  args=2 vars=8 closure=4 cpool=0 bc=514B file=dil_widgets/src/DILCopyContentRenderer
// args: r, n
// locals: o, t, i, o#1, t#1, l
// closure: e, Te, i, ye
function {
  let l;
  let t#1;
  let o#1;
  if (!(("SearchImage" === r.name))) goto L_f8;
  let i;
  let t;
  let o;
  o = r.props.getPropertyValue("searchImage", n);
  if (!(!e.isCELMap(o))) goto L_b8;
  return;
  if (!((Te(o, "content_url") == null))) goto L_d1;
  Te(o, "content_url");
  t = Te(o, "contentUrl");
  if (!((Te(o, "thumbnail_url") == null))) goto L_eb;
  Te(o, "thumbnail_url");
  i = Te(o, "thumbnailUrl");
  if (!((t == null))) goto L_f7;
  t;
  return i;
  o#1 = r.props.getPropertyValue("src", n);
  if (!(("string" == typeof o#1))) goto L_155;
  return o#1;
  if (!(!e.isCELMap(o#1))) goto L_181;
  return;
  t#1 = i.Device.isDarkMode();
  if (!(t#1)) goto L_1d7;
  goto L_1dc;
  // [栈深重同步 1 -> 0]
  l = "dark";
  if (!(t#1)) goto L_1ee;
  goto L_1f3;
  // [栈深重同步 3 -> 2]
  if (!((ye(o#1, "light") == null))) goto L_201;
  ye(o#1, "light");
  return ye(o#1, l);
}

// fn we  args=2 vars=4 closure=2 cpool=0 bc=274B file=dil_widgets/src/DILCopyContentRenderer
// args: r, n
// locals: o, t
// closure: e, ye
function {
  let t;
  let o;
  o = r.props.getPropertyValue("alt", n);
  if (!(("string" == typeof o))) goto L_63;
  return o;
  if (!(("SearchImage" !== r.name))) goto L_8e;
  return;
  t = r.props.getPropertyValue("searchImage", n);
  if (!(e.isCELMap(t))) goto L_110;
  return ye(t, "title");
  return undefined;
}

// fn ye  args=2 vars=3 closure=0 cpool=0 bc=25B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
function {
  let n;
  n = e[r];
  if (!(("string" == typeof n))) goto L_17;
  return n;
  return undefined;
}

// fn Te  args=2 vars=3 closure=1 cpool=0 bc=29B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: ye
function {
  let n;
  n = ye(e, r);
  if (!((undefined !== n))) goto L_1b;
  if (!((n.length > 0))) goto L_1b;
  return n;
  return undefined;
}

// fn xe  args=2 vars=5 closure=1 cpool=0 bc=271B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, t
// closure: Se
function {
  let t;
  let o;
  let n;
  n = e.props.getPropertyValue("size", r);
  if (!((e.props.getPropertyValue("height", r) == null))) goto L_aa;
  e.props.getPropertyValue("height", r);
  o = n;
  if (!((e.props.getPropertyValue("width", r) == null))) goto L_ff;
  e.props.getPropertyValue("width", r);
  t = n;
  if (!(Se(o))) goto L_10e;
  return Se(t);
}

// fn Se  args=1 vars=2 closure=0 cpool=2 bc=98B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r
function {
  let r;
  if (!(("number" == typeof e))) goto L_12;
  return (e <= 48);
  if (!(("string" != typeof e))) goto L_1f;
  return false;
  r = e.match(new RegExp("^(\\d+(?:\\.\\d+)?)px$"));
  if (!((null !== r))) goto L_61;
  return (Number(r[1]) <= 48);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=74B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return ("Grid.Item" === e.renderer.name);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=13B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Re, De, $e
function {
  if (!(Re(e))) goto L_c;
  return De($e(e));
}

// fn Le  args=2 vars=3 closure=4 cpool=2 bc=144B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
// closure: Re, De, $e, Pe
function {
  let n;
  if (!(("Grid" !== e.name))) goto L_30;
  return false;
  n = Pe(e, r).filter(function <atom:0>);
  if (!((n.length >= 8))) goto L_8f;
  return n.every(function <atom:0>);
}

// fn Pe  args=2 vars=5 closure=2 cpool=0 bc=122B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o, e#1
// closure: Me, Ve
function {
  let n;
  n = [];
  let o;
  for (const o of Me(e, r)) {
    let e#1;
    for (const e#1 of o.children) {
      Ve(e#1, o.celScope, n);
      // [栈深重同步 3 -> 6]
    }
  }
  return n;
}

// fn Ve  args=3 vars=7 closure=5 cpool=0 bc=480B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o, t, i, e#1
// closure: V, C, h, Me, Ve
function {
  let t;
  let o;
  o = V(e, r);
  if (!((undefined === o))) goto L_13;
  return;
  t = C[o.renderer.name];
  if (!((t == null))) goto L_68;
  t;
  goto L_89;
  if (((undefined.behavior === h.Transparent))) goto L_fb;
  if (!(("Table.Section" === o.renderer.name))) goto L_1b6;
  let i;
  for (const i of Me(o.renderer, o.celScope)) {
    let e#1;
    for (const e#1 of i.children) {
      Ve(e#1, i.celScope, n);
      // [栈深重同步 3 -> 6]
    }
  }
  return;
  n.push(o);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=225B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  if (!(("Box" === e.renderer.name))) goto L_e0;
  return (undefined !== e.renderer.props.getPropertyValue("height", e.celScope));
}

// fn Re  args=1 vars=1 closure=1 cpool=1 bc=108B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: Pe
function {
  return Pe(e.renderer, e.celScope).some(function <atom:0>);   // tail call
}

// fn De  args=1 vars=1 closure=0 cpool=2 bc=98B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  if ((new RegExp("^(?:\\d|[+\\-−×÷*/.=])$").test(e))) goto L_61;
  if ((("AC" === e))) goto L_61;
  if ((("C" === e))) goto L_61;
  if ((("CE" === e))) goto L_61;
  if ((("%" === e))) goto L_61;
  return ("�" === e);
}

// fn $e  args=1 vars=2 closure=4 cpool=0 bc=94B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// locals: r
// closure: R, je, me, m
function {
  let r;
  r = R(e.renderer, e.celScope);
  if (!((undefined === r))) goto L_53;
  return "";
  return je(me(r, m));
}

// fn Me  args=2 vars=6 closure=5 cpool=0 bc=473B file=dil_widgets/src/DILCopyContentRenderer
// args: e, n
// locals: t, i, r, r#1
// closure: a, Ne, Ae, r, o
function {
  let i;
  let t;
  t = a.getBaseCarouselMediaItemCopyContentChildren(e);
  if (!((undefined !== t))) goto L_47;
  return [{celScope: n, children: t}];
  i = Ne(e, n);
  if (!((undefined !== i))) goto L_5c;
  return Ae(e, n, i);   // tail call
  if (!(r.isDILTransparentWidgetRenderer(e))) goto L_c0;
  let r;
  r = e.getDILTransparentWidgetChildren(n);
  if (!((undefined === r))) goto L_b9;
  return [];
  return [r];
  if (!(o.isDILInlineTextContentRenderer(e))) goto L_1a7;
  let r#1;
  r#1 = e.getDILInlineTextContent(n);
  if (!((r#1 == null))) goto L_121;
  r#1;
  goto L_142;
  if (!((1 === undefined.plainTextBehavior))) goto L_149;
  return [];
  if (!((undefined !== r#1))) goto L_1a7;
  return [{celScope: r#1.celScope, children: r#1.children}];
  return [{celScope: n, children: e.children}];
}

// fn Ne  args=2 vars=3 closure=0 cpool=0 bc=281B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n
function {
  let n;
  if (!(("Each" !== e.name))) goto L_2e;
  return;
  if (!((e.props.getPropertyValue("items", r) == null))) goto L_cb;
  e.props.getPropertyValue("items", r);
  n = e.props.getPropertyValue("of", r);
  if (!((undefined === n))) goto L_d7;
  return [];
  if (!(!Array.isArray(n))) goto L_115;
  throw new Error("Invalid Each node: "items" or "of" must be an array.");
  return n;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=96B file=dil_widgets/src/DILCopyContentRenderer
// args: n, i
// closure: r, o, t, e
function {
  {}[o] = n;
  n;
  {}[t] = i;
  i;
  return {celScope: r.subscopeWithValues({}), children: e.children};
}

// fn Ae  args=3 vars=5 closure=1 cpool=1 bc=113B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o, t
// closure: We
function {
  let t;
  let o;
  if (!((We(e, "itemName", r) == null))) goto L_27;
  We(e, "itemName", r);
  if (!((We(e, "item", r) == null))) goto L_27;
  We(e, "item", r);
  o = "item";
  if (!((We(e, "indexName", r) == null))) goto L_49;
  We(e, "indexName", r);
  if (!((We(e, "index", r) == null))) goto L_49;
  We(e, "index", r);
  t = "index";
  return n.map(function <atom:0>);   // tail call
}

// fn We  args=3 vars=4 closure=0 cpool=0 bc=220B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r, n
// locals: o
function {
  let o;
  if (!((undefined === e.props.getProperty(r)))) goto L_4f;
  return;
  o = e.props.getPropertyValueAsString(r, n);
  if (!((undefined === o))) goto L_d8;
  throw new Error("Invalid Each node: "".concat(r, "" must be a string."));
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return ("string" == typeof e);
}

// fn Ee  args=2 vars=4 closure=0 cpool=1 bc=319B file=dil_widgets/src/DILCopyContentRenderer
// args: e, r
// locals: n, o
function {
  let o;
  let n;
  n = e.props.getPropertyValue("value", r);
  if (!(("string" == typeof n))) goto L_63;
  return n;
  o = e.props.getPropertyValue("children", r);
  if (!(("string" == typeof o))) goto L_c0;
  return o;
  if (!(Array.isArray(o))) goto L_13d;
  return o.filter(function <atom:0>).join("");
  return "";
}

// fn Oe  args=1 vars=1 closure=0 cpool=0 bc=15B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  if (!((null == e))) goto L_7;
  return "";
  return String(e);
}

// fn ze  args=1 vars=1 closure=0 cpool=0 bc=58B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  if (!(("number" == typeof e))) goto L_38;
  if (!(Number.isFinite(e))) goto L_38;
  return e;
  return undefined;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=83B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("[ \\t\\r\\n]+"), " ").trim();   // tail call
}

// fn Fe  args=1 vars=1 closure=1 cpool=1 bc=153B file=dil_widgets/src/DILCopyContentRenderer
// args: e
// closure: s
function {
  return e.split(s).map(function <atom:0>).join(s).trim();   // tail call
}

// fn je  args=1 vars=1 closure=0 cpool=2 bc=83B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\s+"), " ").trim();   // tail call
}

// fn Ge  args=1 vars=1 closure=0 cpool=22 bc=507B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\\\"), "\\").replace(new RegExp("\\*"), "\*").replace(new RegExp("^- "), "\- ").replace(new RegExp("^\\+ "), "\+ ").replace(new RegExp("^(#{1,6}) "), "\$1 ").replace(new RegExp("`"), "\`").replace(new RegExp("^~~~"), "\~~~").replace(new RegExp("\\["), "\[").replace(new RegExp("\\]"), "\]").replace(new RegExp("^>"), "\>").replace(new RegExp("^(\\d+)\\. "), "$1\. ");   // tail call
}

// fn qe  args=1 vars=1 closure=0 cpool=6 bc=139B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\\\"), "\\").replace(new RegExp("\\["), "\[").replace(new RegExp("\\]"), "\]");   // tail call
}

// fn _e  args=1 vars=1 closure=0 cpool=6 bc=139B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.replace(new RegExp("\\\\"), "\\").replace(new RegExp("\\("), "\(").replace(new RegExp("\\)"), "\)");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.trimEnd();   // tail call
}

// fn He  args=1 vars=1 closure=0 cpool=3 bc=203B file=dil_widgets/src/DILCopyContentRenderer
// args: e
function {
  return e.split("
").map(function <atom:0>).join("
").replace(new RegExp("\\n{3,}"), "

").trim();   // tail call
}

// fn <atom:0>  args=3 vars=104 closure=0 cpool=86 bc=5328B file=dil_widgets/src/DILCopyContentRenderer
// args: require, module, exports
// locals: e, r, n, o, t, i, l, a, c, s, u, d, p, f, h, g, k, m, I, v, B, b, C, w, y, T, x, S, L, P, V, R, D, $, M, N, A, W, E, O, z, F, j, G, q, _, H, U, K, Y, J, Q, X, Z, ee, re, ne, oe, te, ie, le, ae, ce, se, ue, de, pe, fe, he, ge, ke, me, Ie, ve, Be, be, Ce, we, ye, Te, xe, Se, Le, Pe, Ve, Re, De, $e, Me, Ne, Ae, We, Ee, Oe, ze, Fe, je, Ge, qe, _e, He
function {
  w = function w;
  y = function y;
  T = function T;
  x = function x;
  S = function S;
  L = function L;
  P = function P;
  V = function V;
  R = function R;
  D = function D;
  $ = function $;
  M = function M;
  N = function N;
  A = function A;
  W = function W;
  E = function E;
  O = function O;
  z = function z;
  F = function F;
  j = function j;
  G = function G;
  q = function q;
  _ = function _;
  H = function H;
  U = function U;
  K = function K;
  Y = function Y;
  J = function J;
  Q = function Q;
  X = function X;
  Z = function Z;
  ee = function ee;
  re = function re;
  ne = function ne;
  oe = function oe;
  te = function te;
  ie = function ie;
  le = function le;
  ae = function ae;
  ce = function ce;
  se = function se;
  ue = function ue;
  de = function de;
  pe = function pe;
  fe = function fe;
  he = function he;
  ge = function ge;
  ke = function ke;
  me = function me;
  Ie = function Ie;
  ve = function ve;
  Be = function Be;
  be = function be;
  Ce = function Ce;
  we = function we;
  ye = function ye;
  Te = function Te;
  xe = function xe;
  Se = function Se;
  Le = function Le;
  Pe = function Pe;
  Ve = function Ve;
  Re = function Re;
  De = function De;
  $e = function $e;
  Me = function Me;
  Ne = function Ne;
  Ae = function Ae;
  We = function We;
  Ee = function Ee;
  Oe = function Oe;
  ze = function ze;
  Fe = function Fe;
  je = function je;
  Ge = function Ge;
  qe = function qe;
  _e = function _e;
  He = function He;
  let C;
  let b;
  let B;
  let v;
  let I;
  let m;
  let p;
  let d;
  let u;
  let s;
  let c;
  let a;
  let l;
  let i;
  let t;
  let o;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILCopyContentKind = undefined;
  exports.DILCopyFlow = undefined;
  exports.DILCopyImageBehavior = undefined;
  exports.getDILCopyRendererDefinitionNames = undefined;
  exports.serializeDILRendererForCopy = undefined;
  exports.captureDILRendererCopyContent = undefined;
  exports.findAndSerializeDILNodeForCopy = undefined;
  exports.serializeDILCopyContentNodesForCopy = undefined;
  exports.buildDILCopyMarkdownNode = undefined;
  exports.buildDILCopyTextOnlyMarkdownNode = undefined;
  e = require("cel/src/CELValue");
  r = require("dil_compiler/src/DILTransparentWidgetRenderer");
  n = require("dil_compiler/src/DILWidgetRendererUnwrap");
  o = require("dil_core/src/DILInlineTextContentRenderer");
  t = require("markdown/src/Markdown");
  i = require("valdi_core/src/Device");
  l = require("./DILClientDefinedWidgetMapping");
  a = require("./widgets/BaseCarouselMediaItemWidgetRenderer");
  c = 8;
  s = "

";
  u = [];
  d = [0.75, 1, 1.25, 1.3, 1.5, 2];
  p = [10, 20, 30, 40, 50, 40, 30, 20, 10];
  if ((f)) goto L_2a7;
  f = {};
  exports.DILCopyContentKind = {};
  !function <atom:0>({});
  if ((h)) goto L_2b5;
  h = {};
  function <atom:0>({});
  if ((g)) goto L_2cd;
  g = {};
  exports.DILCopyFlow = {};
  function <atom:0>({});
  if ((k)) goto L_2e5;
  k = {};
  exports.DILCopyImageBehavior = {};
  function <atom:0>({});
  m = {imageBehavior: k.Preserve};
  I = {behavior: h.Container, flow: g.Block};
  v = {behavior: h.Transparent, flow: g.Inline};
  B = {behavior: h.Omit, flow: g.Block};
  b = {behavior: h.Omit, flow: g.Inline};
  C = {Each: v, Scope: v, Show: v, Show.Else: v, Animate: v, Animate.Item: v, AnimateGroup: v, HorizontalSwipeSurface: v, RunInterval: v, Transition: v, Basic: I, Response: I, Box: I, Col: I, Row: I, Card: I, CardCarousel: I, CardLinkItem: I, BaseCarousel: I, BaseCarousel.Item: I, BaseCarousel.MediaItem: I, Carousel: I, Carousel.Item: I, Carousel.MediaItem: I, Flow: I, Flow.Item: I, FollowUpActionBar: I, Form: I, Grid: I, Grid.Item: I, ListView: I, ListViewItem: I, OverflowRow: I, Inline: {behavior: h.NormalizedInline, flow: g.Inline}, Cite: {behavior: h.NormalizedInline, flow: g.Inline}, Pressable: {behavior: h.NormalizedInline, flow: g.Inline}, Popover: v, Popover.Trigger: {behavior: h.NormalizedInline, flow: g.Inline}, Popover.Content: B, Text: {behavior: h.Text, flow: g.Block}, Title: {behavior: h.Title, flow: g.Block}, Caption: {behavior: h.Text, flow: g.Inline}, Label: {behavior: h.Text, flow: g.Inline}, Bold: {behavior: h.Text, flow: g.Inline}, Italic: {behavior: h.Text, flow: g.Inline}, Underline: {behavior: h.Text, flow: g.Inline}, Highlight: {behavior: h.Text, flow: g.Inline}, ShimmerText: {behavior: h.Text, flow: g.Inline}, Math: {behavior: h.Text, flow: g.Inline}, Code: {behavior: h.InlineCode, flow: g.Inline}, Markdown: {behavior: h.Markdown, flow: g.Block}, List: {behavior: h.List, flow: g.Block}, Item: {behavior: h.ListItem, flow: g.Block}, List.Item: {behavior: h.ListItem, flow: g.Block}, List.Marker: b, Table: {behavior: h.Table, flow: g.Block}, Table.Section: {behavior: h.TableSection, flow: g.Block}, Table.Row: {behavior: h.TableRow, flow: g.Block}, Table.Cell: {behavior: h.TableCell, flow: g.Block}, Image: {behavior: h.Image, flow: g.Block}, SearchImage: {behavior: h.SearchImage, flow: g.Block}, Badge: {behavior: h.Badge, flow: g.Inline}, Button: {behavior: h.Button, flow: g.Inline}, Checkbox: {behavior: h.Checkbox, flow: g.Block}, Select: {behavior: h.Select, flow: g.Inline}, SegmentedControl: {behavior: h.SegmentedControl, flow: g.Block}, RadioGroup: {behavior: h.RadioGroup, flow: g.Block}, DatePicker: {behavior: h.DatePicker, flow: g.Inline}, Slider: {behavior: h.Slider, flow: g.Block}, Textarea: {behavior: h.Textarea, flow: g.Block}, Input: {behavior: h.BlankBlock, flow: g.Block}, LoadingIndicator: {behavior: h.LoadingIndicator, flow: g.Block}, AudioPlayer: {behavior: h.AudioPlayer, flow: g.Block}, FootballLocationIndicator: {behavior: h.FootballLocationIndicator, flow: g.Block}, Chart: B, Map: B, PieChart: B, ValdiChart: B, ValdiPieChart: B, Divider: {behavior: h.BlankBlock, flow: g.Block}, Favicon: {behavior: h.BlankBlock, flow: g.Block}, Celebration: b, Icon: b, LoadingBlock: {behavior: h.BlankBlock, flow: g.Block}, LoadingDot: b, PulseIndicator: b, Spacer: {behavior: h.BlankBlock, flow: g.Block}, SpeechSynthesizer: B, Svg: B, YouTubeEmbed: B, __chatgptClientDefinedWidget: {behavior: h.NativeWidget, flow: g.Block}, ChartsWidgetV2: B, StockChart: B, WeatherChart: B, WeatherWidget: B, WeatherWidgetWithSource: B};
  exports.getDILCopyRendererDefinitionNames = w;
  exports.serializeDILRendererForCopy = y;
  exports.captureDILRendererCopyContent = T;
  exports.findAndSerializeDILNodeForCopy = x;
  exports.serializeDILCopyContentNodesForCopy = L;
  exports.buildDILCopyMarkdownNode = Y;
  exports.buildDILCopyTextOnlyMarkdownNode = J;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILCopyContentRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
