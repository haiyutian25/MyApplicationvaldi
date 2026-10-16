// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: o
// closure: t, e
function {
  return o.addEventListener(t, e);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=106B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t, e, o
// locals: t#1, e#1, o#1, this
function {
  this = this;
  let o#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((o === undefined))) goto L_17;
  o;
  o = null;
  o#1 = null;
  if (!(o)) goto L_21;
  goto L_43;
  // [栈深重同步 1 -> 0]
  this.dom.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// locals: this
function {
  this = this;
  return this.px(t);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=535B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// locals: e, a, i
// closure: o, s, this
function {
  let i;
  let a;
  let e;
  if (((undefined === undefined))) goto L_7b;
  e = <to_object>(undefined).h;
  a = <to_object>(undefined).d;
  i = <to_object>(undefined).w;
  <to_object>(undefined);
  goto L_ad;
  // [栈深重同步 0 -> 1]
  <?>;
  s = <s_new>;
  goto L_e;
  // [栈深重同步 1 -> 0]
  if (!((1 === s))) goto L_1c8;
  goto L_1c9;
  // [栈深重同步 8 -> 7]
  this.adaptor.append(t, this.svg("rect", {width: this.fixed(i), height: this.fixed((e + a)), x: 0, y: this.fixed(-a), fill: "none", pointer-events: "all"}));
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=1 bc=522B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// locals: e, o, s, a, this
function {
  this = this;
  let a;
  let s;
  let o;
  let e;
  if (!(this.toEmbellishedSVG(t))) goto L_39;
  return;
  e = this.standardSvgNodes(t);
  o = this.selected;
  s = 0;
  this.dom.forEach(function <atom:0>);
  o.toSVG(e);
  a = o.getOuterBBox();
  if (!(o.dom)) goto L_1bd;
  o.place((a.L * a.rscale), 0);
  this.action(this, this.data);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=185B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: e
// closure: t
function {
  t.adaptor.setAttribute(e, "data-toggle", t.node.attributes.get("selection"));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=637B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// closure: o, i, s, a
function {
  if ((o.end.node)) goto L_128;
  o.end.node = o.typesetRoot;
  o.start.node = o.typesetRoot;
  o.end.n = 0;
  o.start.n = 0;
  0;
  i.nextToggleSelection();
  if (!(i.attributes.get("data-maction-id"))) goto L_20e;
  goto L_253;
  // [栈深重同步 4 -> 3]
  o.rerender(s, a.STATE.RERENDER);
  t.stopPropagation();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=2 bc=364B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t, e
// locals: o, s, i
// closure: a
function {
  let i;
  let s;
  let o;
  t.dom.forEach(function <atom:0>);
  o = t.factory.jax.math;
  s = t.factory.jax.document;
  i = t.node;
  t.setEventHandler("click", function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=2 bc=786B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// locals: e, a, n, d
// closure: o, r, i, s, t
function {
  let d;
  let n;
  let a;
  let e;
  o.setStyle(r, "left", "0");
  o.setStyle(r, "top", "0");
  o.append(i, r);
  e = o.nodeBBox(r);
  a = o.nodeBBox(s);
  n = (((a.right - e.left) / t.metrics.em) + t.tipDx);
  d = (((a.bottom - e.bottom) / t.metrics.em) + t.tipDy);
  o.setStyle(r, "left", t.Px(n));
  o.setStyle(r, "top", t.Px(d));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=1 bc=204B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: a
// closure: o, r, i, s, t, e
function {
  e.stopTimers(s, e);
  e.hoverTimer.set(s, setTimeout(function <atom:0>, e.postDelay));
  a.stopPropagation();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=45B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// closure: o, d, r
function {
  return o.append(d, r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=203B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// locals: a
// closure: o, d, r, e, s
function {
  let a;
  e.stopTimers(s, e);
  a = setTimeout(function <atom:0>, e.clearDelay);
  e.clearTimer.set(s, a);
  t.stopPropagation();
  return;
}

// fn <atom:0>  args=2 vars=11 closure=0 cpool=2 bc=1415B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t, e
// locals: o, s, a, e#1, o#1, i, n, r, d
function {
  let o;
  o = t.childNodes[1];
  if (!(o)) goto L_586;
  let s;
  // close_loc s
  for (const s of t.dom) {
    let a;
    a = t.firstChild(s);
    if (!(o.node.isKind("mtext"))) goto L_1ca;
    let e#1;
    e#1 = o.node.getText();
    t.adaptor.insert(t.svg("title", {}, [t.text(e#1)]), a);
    goto L_577;
    let d;
    let r;
    let n;
    let i;
    let o#1;
    o#1 = t.adaptor;
    i = t.jax.container;
    n = t.node.factory.create("math", {}, [t.childNodes[1].node]);
    r = t.html("mjx-tool", {}, [t.html("mjx-tip")]);
    d = o#1.append(a, t.svg("foreignObject", {style: {display: "none"}}, [r]));
    t.jax.processMath(t.jax.factory.wrap(n), o#1.firstChild(r));
    t.childNodes[1].node.parent = t.node;
    t.setEventHandler("mouseover", function <atom:0>, s);
    t.setEventHandler("mouseout", function <atom:0>, s);
    // close_loc d
    // close_loc r
    // close_loc i
    // close_loc o#1
    // close_loc s
  }
  // close_loc s
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=48B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// closure: s, a
function {
  return s.setAttribute(t, "data-statusline", a);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=296B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: o
// locals: o#1
// closure: e, s, t, a
function {
  if (!((null === e.status))) goto L_102;
  let o#1;
  o#1 = s.body(s.document);
  e.status = s.append(o#1, t.html("mjx-status", {}, [t.text(a)]));
  o.stopPropagation();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=163B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t
// closure: e, s
function {
  if (!(e.status)) goto L_7c;
  s.remove(e.status);
  e.status = null;
  null;
  t.stopPropagation();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=3 bc=414B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: t, e
// locals: o, s, a
function {
  let o;
  o = t.childNodes[1];
  if (!(o)) goto L_19d;
  if (!(o.node.isKind("mtext"))) goto L_19d;
  let a;
  let s;
  s = t.adaptor;
  a = o.node.getText();
  t.dom.forEach(function <atom:0>);
  t.setEventHandler("mouseover", function <atom:0>);
  t.setEventHandler("mouseout", function <atom:0>);
  // close_loc a
  // close_loc s
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=7 bc=715B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// locals: i, n, SvgMaction, <class_fields_init>
// closure: a, e, t, s, o
function {
  let n;
  n = e.CommonMactionMixin(t.SvgWrapper);
  let SvgMaction;
  let <class_fields_init>;
  class SvgMaction extends n { ... }
  <proto:SvgMaction>.setEventHandler = function <atom:0>;
  <proto:SvgMaction>.Px = function <atom:0>;
  <proto:SvgMaction>.toSVG = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SvgMaction>;
  SvgMaction = function <atom:0>;
  // close_loc <class_fields_init>
  i = function <atom:0>;
  function <atom:0>.kind = s.MmlMaction.prototype.kind;
  i.styles = {[jax="SVG"] mjx-tool: {display: "inline-block", position: "relative", width: 0, height: 0}, [jax="SVG"] mjx-tool > mjx-tip: {position: "absolute", top: 0, left: 0}, mjx-tool > mjx-tip: {display: "inline-block", line-height: 0, padding: ".2em", border: "1px solid #888", background-color: "#F8F8F8", color: "black", box-shadow: "2px 2px 5px #AAAAAA"}, g[data-mml-node="maction"][data-toggle]: {cursor: "pointer"}, mjx-status: {display: "block", position: "fixed", left: "1em", bottom: "1em", min-width: "25%", padding: ".2em .4em", border: "1px solid #888", font-size: "90%", background-color: "#F8F8F8", color: "black"}, g[data-mjx-collapsed]: {fill: "#55F"}, @media (prefers-color-scheme: dark) /* svg maction */: {mjx-tool > mjx-tip: {background-color: "#303030", color: "#E0E0E0", box-shadow: "2px 2px 5px #000"}, mjx-status: {background-color: "#303030", color: "#E0E0E0"}, g[data-mjx-collapsed]: {fill: "#88F"}}};
  i.actions = new Map([["toggle", [function <atom:0>, {}]], ["tooltip", [function <atom:0>, o.TooltipData]], ["statusline", [function <atom:0>, {status: null}]]]);
  return i;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=137B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// args: require, module, exports
// locals: t, e, o, s, a
function {
  let a;
  let s;
  let o;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SvgMaction = undefined;
  t = require("../Wrapper");
  e = require("../../common/Wrappers/maction");
  o = require("../../common/Wrappers/maction");
  s = require("../../../core/MmlTree/MmlNodes/maction");
  a = require("../../../core/MathItem");
  exports.SvgMaction = function <atom:0>();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/output/svg/Wrappers/maction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
