// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=143B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, l, s
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.parser = new l.LiteParser();
  this.window = new s.LiteWindow();
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: this
function {
  this = this;
  return this.parser.parseFromString(t, e, this);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=59B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: t#1, e#1
// closure: r
function {
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_10;
  e;
  e = null;
  e#1 = null;
  return new r.LiteElement(t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// closure: i
function {
  return new i.LiteText(t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// closure: i
function {
  return new i.LiteComment(t);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// closure: n
function {
  return new n.LiteDocument();
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=82B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_2e;
  t;
  t = this.document;
  t#1 = this.document;
  return t.head;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=82B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_2e;
  t;
  t = this.document;
  t#1 = this.document;
  return t.body;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=82B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_2e;
  t;
  t = this.document;
  t#1 = this.document;
  return t.root;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=82B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_2e;
  t;
  t = this.document;
  t#1 = this.document;
  return t.type;
}

// fn <atom:0>  args=4 vars=12 closure=0 cpool=0 bc=374B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n, r
// locals: t#1, e#1, n#1, r#1, i, s, l, t#2
function {
  let r#1;
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((n === undefined))) goto L_18;
  n;
  n = null;
  n#1 = null;
  if (!((r === undefined))) goto L_21;
  r;
  r = null;
  r#1 = null;
  let l;
  let s;
  let i;
  i = [];
  s = [];
  if (!(n)) goto L_3c;
  return s;
  l = t;
  if (!(l)) goto L_172;
  let t#2;
  t#2 = l.kind;
  if (!(("#text" !== t#2))) goto L_143;
  if (!(("#comment" !== t#2))) goto L_143;
  if (!((t#2 === e))) goto L_ca;
  s.push(l);
  if (!((s.length === r))) goto L_ca;
  return s;
  if (!(l.children.length)) goto L_142;
  i = l.children.concat(i);
  l.children.concat(i);
  l = i.shift();
  i.shift();
  goto L_3f;
  return s;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=361B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, r
function {
  let r;
  let n;
  n = [];
  r = t;
  if (!(r)) goto L_167;
  if (!(("#text" !== r.kind))) goto L_138;
  if (!(("#comment" !== r.kind))) goto L_138;
  if (!((r.attributes.id === e))) goto L_bf;
  return r;
  if (!(r.children.length)) goto L_137;
  n = r.children.concat(n);
  r.children.concat(n);
  r = n.shift();
  n.shift();
  goto L_c;
  return null;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=562B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n
// locals: t#1, e#1, n#1, r, i, s
function {
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((n === undefined))) goto L_15;
  n;
  n = null;
  n#1 = null;
  let s;
  let i;
  let r;
  r = [];
  i = [];
  s = t;
  if (!(s)) goto L_22e;
  if (!(("#text" !== s.kind))) goto L_1ff;
  if (!(("#comment" !== s.kind))) goto L_1ff;
  if ((s.attributes.class)) goto L_db;
  if (!("".trim().split(new RegExp(" +")).includes(e))) goto L_186;
  i.push(s);
  if (!((i.length === n))) goto L_186;
  return i;
  if (!(s.children.length)) goto L_1fe;
  r = s.children.concat(r);
  s.children.concat(r);
  s = r.shift();
  r.shift();
  goto L_2b;
  return i;
}

// fn <atom:0>  args=4 vars=11 closure=0 cpool=0 bc=420B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n, r
// locals: t#1, e#1, n#1, r#1, i, s, l
function {
  let r#1;
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  n#1 = n;
  if (!((r === undefined))) goto L_1a;
  r;
  r = null;
  r#1 = null;
  let l;
  let s;
  let i;
  i = [];
  s = [];
  l = t;
  if (!(l)) goto L_1a0;
  if (!(("#text" !== l.kind))) goto L_171;
  if (!(("#comment" !== l.kind))) goto L_171;
  if (!((l.attributes[e] === n))) goto L_f8;
  s.push(l);
  if (!((s.length === r))) goto L_f8;
  return s;
  if (!(l.children.length)) goto L_170;
  i = l.children.concat(i);
  l.children.concat(i);
  l = i.shift();
  i.shift();
  goto L_31;
  return s;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=4 bc=1118B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, r, i, t#1, t#2, this
function {
  this = this;
  let r;
  let n;
  n = [];
  r = this.body(e);
  let i;
  for (const i of t) {
    if (!(("string" == typeof i))) goto L_2e0;
    if (!(("#" === i.charAt(0)))) goto L_10a;
    let t#1;
    t#1 = this.elementById(r, i.slice(1));
    if (!(t#1)) goto L_106;
    n.push(t#1);
   continue;
    if (!(("." === i.charAt(0)))) goto L_1bd;
    n = n.concat(this.elementsByClass(r, i.slice(1)));
    n.concat(this.elementsByClass(r, i.slice(1)));
   continue;
    if (!(i.match(new RegExp("^[-a-z][-a-z0-9]*$")))) goto L_246;
    n = n.concat(this.tags(r, i));
    n.concat(this.tags(r, i));
   continue;
    let t#2;
    t#2 = i.match(new RegExp("^\\[(.*?)=\"(.*?)\"\\]$"));
    if (!(t#2)) goto L_2dc;
    n = n.concat(this.elementsByAttribute(r, t#2[1], t#2[2]));
    n.concat(this.elementsByAttribute(r, t#2[1], t#2[2]));
   continue;
    if (!(Array.isArray(i))) goto L_33f;
    n = n.concat(i);
    goto L_450;
    // [栈深重同步 4 -> 3]
    if (((i instanceof this.window.NodeList))) goto L_3d3;
    if (!((i instanceof this.window.HTMLCollection))) goto L_426;
    n = n.concat(i.nodes);
    goto L_450;
    // [栈深重同步 4 -> 3]
    n.push(i);
  }
  return n;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=4 bc=575B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: t#1, e#1, r, this
// closure: n
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_33;
  e;
  e = this.document;
  e#1 = this.document;
  let r;
  if (!((e instanceof n.LiteDocument))) goto L_88;
  e = this.body(e);
  this.body(e);
  if (!(("#" === t.charAt(0)))) goto L_103;
  return this.elementById(e, t.slice(1));   // tail call
  if (!(("." === t.charAt(0)))) goto L_181;
  return this.elementsByClass(e, t.slice(1), 1)[0];
  if (!(t.match(new RegExp("^[-a-z][-a-z0-9]*$")))) goto L_1d9;
  return this.tags(e, t, null, 1)[0];
  r = t.match(new RegExp("^\\[(.*?)=\"(.*?)\"\\]$"));
  if (!(r)) goto L_23d;
  return this.elementsByAttribute(e, r[1], r[2], 1)[0];
  return null;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=55B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: this
function {
  this = this;
  if (!(e)) goto L_33;
  if (!((e !== t))) goto L_33;
  e = this.parent(e);
  goto L_2;
  return !!e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return t.parent;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: e
// closure: t
function {
  return (e === t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=144B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  if (!(t.parent)) goto L_8e;
  return t.parent.children.findIndex(function <atom:0>);
  return -1;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=164B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: this
function {
  this = this;
  if (!(e.parent)) goto L_4e;
  this.remove(e);
  t.children.push(e);
  e.parent = t;
  return e;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=320B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, this
function {
  this = this;
  if (!(t.parent)) goto L_4e;
  this.remove(t);
  if (!(e)) goto L_13f;
  if (!(e.parent)) goto L_13f;
  let n;
  n = this.childIndex(e);
  e.parent.children.splice(n, 0, t);
  t.parent = e.parent;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=174B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.childIndex(t);
  if (!((e >= 0))) goto L_a0;
  t.parent.children.splice(e, 1);
  t.parent = null;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=187B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, this
function {
  this = this;
  let n;
  n = this.childIndex(e);
  if (!((n >= 0))) goto L_b8;
  e.parent.children[n] = t;
  t.parent = e.parent;
  e.parent = null;
  null;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=295B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: e
// closure: i, this, n
function {
  if (!(("#text" === t.kind))) goto L_75;
  return new i.LiteText(t.value);
  if (!(("#comment" === t.kind))) goto L_ea;
  return new i.LiteComment(t.value);
  let e;
  e = this.clone(t);
  e.parent = n;
  return e;
}

// fn <atom:0>  args=2 vars=6 closure=2 cpool=1 bc=246B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: t#1, e#1, n, this
// closure: i, r
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = true;
  e#1 = true;
  let n;
  n = new r.LiteElement(t.kind);
  null;
  t.attributes;
  n.attributes = {};
  if (!(e)) goto L_e6;
  goto L_e9;
  // [栈深重同步 2 -> 1]
  n.children = [];
  return n;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=397B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, this
// closure: i
function {
  this = this;
  let n;
  n = new i.LiteText(t.value.slice(e));
  t.value = t.value.slice(0, e);
  t.parent.children.splice((this.childIndex(t) + 1), 0, n);
  n.parent = t.parent;
  return n;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=185B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: e, n, this
function {
  this = this;
  let n;
  let e;
  e = t.parent;
  if (!(!e)) goto L_33;
  return null;
  n = (this.childIndex(t) + 1);
  if (!((n >= 0))) goto L_b7;
  if (!((n < e.children.length))) goto L_b7;
  return e.children[n];
  return null;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=142B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: e, n, this
function {
  this = this;
  let n;
  let e;
  e = t.parent;
  if (!(!e)) goto L_33;
  return null;
  n = (this.childIndex(t) - 1);
  if (!((n >= 0))) goto L_8c;
  return e.children[n];
  return null;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return t.children[0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return t.children[(t.children.length - 1)];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  // append([], 0, t.children)
  t.children;
  return [];
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
function {
  return t.children[e];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return t.kind;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=202B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  if (!(("#text" === t.kind))) goto L_4d;
  return t.value;
  if (!(("#comment" === t.kind))) goto L_c8;
  return t.value.replace(new RegExp("^<!(--)?((?:.|\\n)*)\\1>$"), "$2");
  return "";
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=164B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// closure: this
function {
  if (!(("#text" === e.kind))) goto L_4f;
  goto L_a2;
  // [栈深重同步 2 -> 1]
  if (!(("#comment" === e.kind))) goto L_7c;
  goto L_a2;
  // [栈深重同步 2 -> 1]
  return (t + this.textContent(e));
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=75B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: this
function {
  this = this;
  return t.children.reduce(function <atom:0>, "");   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: this
function {
  this = this;
  return this.parser.serializeInner(this, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: this
function {
  this = this;
  return this.parser.serialize(this, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: this
function {
  this = this;
  return this.parser.serialize(this, t, true);   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=0 cpool=4 bc=209B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n, r
// locals: t#1, e#1, n#1, r#1
function {
  let r#1;
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  n#1 = n;
  if (!((r === undefined))) goto L_1a;
  r;
  r = null;
  r#1 = null;
  if (!(("string" != typeof n))) goto L_2f;
  n = String(n);
  String(n);
  if (!(r)) goto L_93;
  e = ((r.replace(new RegExp(".*\\/"), "") + ":") + e.replace(new RegExp("^.*:"), ""));
  ((r.replace(new RegExp(".*\\/"), "") + ":") + e.replace(new RegExp("^.*:"), ""));
  t.attributes[e] = n;
  if (!(("style" === e))) goto L_d0;
  t.styles = null;
  null;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
function {
  return t.attributes[e];
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
function {
  t.attributes;
  delete e;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=76B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
function {
  return Object.hasOwn(t.attributes, e);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=167B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: e, n, r
function {
  let n;
  let e;
  e = t.attributes;
  n = [];
  let r;
  for (const r of Object.keys(e)) {
    n.push({name: r, value: e[r]});
  }
  return n;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=2 bc=311B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, r
function {
  let r;
  let n;
  n = t.attributes.class;
  if (!((n == null))) goto L_55;
  n;
  goto L_7e;
  if ((undefined.split(new RegExp(" ")))) goto L_85;
  r = [];
  if ((r.includes(e))) goto L_136;
  r.push(e);
  t.attributes.class = r.join(" ");
  r.join(" ");
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=2 bc=323B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: n, r, i
function {
  let i;
  let r;
  let n;
  n = t.attributes.class;
  if (!((n == null))) goto L_58;
  n;
  goto L_81;
  if ((undefined.split(new RegExp(" ")))) goto L_88;
  r = [];
  i = r.indexOf(e);
  if (!((i >= 0))) goto L_142;
  r.splice(i, 1);
  t.attributes.class = r.join(" ");
  r.join(" ");
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=2 bc=150B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
function {
  if ((t.attributes.class)) goto L_48;
  return "".split(new RegExp(" ")).includes(e);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=319B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n
// locals: this
// closure: u
function {
  this = this;
  if ((t.styles)) goto L_86;
  t.styles = new u.Styles(this.getAttribute(t, "style"));
  new u.Styles(this.getAttribute(t, "style"));
  t.styles.set(e, n);
  t.attributes.style = t.styles.cssText;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=218B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: e#1, this
// closure: u
function {
  this = this;
  if (!(!t.styles)) goto L_93;
  let e#1;
  e#1 = this.getAttribute(t, "style");
  if (!(!e#1)) goto L_5e;
  return "";
  t.styles = new u.Styles(e#1);
  return t.styles.get(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=45B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: this
function {
  this = this;
  return this.getAttribute(t, "style");   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=140B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e
// locals: this
function {
  this = this;
  t.children = [this.text(((this.textContent(t) + "

") + e.join("

")))];
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return 0;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return "";
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t, e, n
// locals: t#1, e#1, n#1
function {
  let n#1;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = 1;
  e#1 = 1;
  if (!((n === undefined))) goto L_1c;
  n;
  n = null;
  n#1 = null;
  return [0, 0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=26B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
function {
  return {left: 0, right: 0, top: 0, bottom: 0};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
function {
  return null; // async
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
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

// fn a  args=1 vars=2 closure=1 cpool=0 bc=22B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: t
// locals: t#1
// closure: LiteAdaptor
function {
  let t#1;
  if (!((t === undefined))) goto L_b;
  t;
  t = null;
  t#1 = null;
  return new LiteAdaptor(null, t);
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=56 bc=788B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// args: require, module, exports
// locals: t, e, n, r, i, s, l, u, LiteBase, <class_fields_init>, LiteBase#1, c, LiteAdaptor, <class_fields_init>#1, LiteAdaptor#1, a
function {
  a = function a;
  let LiteAdaptor#1;
  let c;
  let LiteBase#1;
  let u;
  let l;
  let s;
  let i;
  let r;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LiteBase = undefined;
  exports.LiteAdaptor = undefined;
  exports.liteAdaptor = undefined;
  t = require("../core/DOMAdaptor");
  e = require("./NodeMixin");
  n = require("./lite/Document");
  r = require("./lite/Element");
  i = require("./lite/Text");
  s = require("./lite/Window");
  l = require("./lite/Parser");
  u = require("../util/Styles");
  let LiteBase;
  let <class_fields_init>;
  class LiteBase extends t.AbstractDOMAdaptor { ... }
  <proto:LiteBase>.parse = function <atom:0>;
  <proto:LiteBase>.create = function <atom:0>;
  <proto:LiteBase>.text = function <atom:0>;
  <proto:LiteBase>.comment = function <atom:0>;
  <proto:LiteBase>.createDocument = function <atom:0>;
  <proto:LiteBase>.head = function <atom:0>;
  <proto:LiteBase>.body = function <atom:0>;
  <proto:LiteBase>.root = function <atom:0>;
  <proto:LiteBase>.doctype = function <atom:0>;
  <proto:LiteBase>.tags = function <atom:0>;
  <proto:LiteBase>.elementById = function <atom:0>;
  <proto:LiteBase>.elementsByClass = function <atom:0>;
  <proto:LiteBase>.elementsByAttribute = function <atom:0>;
  <proto:LiteBase>.getElements = function <atom:0>;
  <proto:LiteBase>.getElement = function <atom:0>;
  <proto:LiteBase>.contains = function <atom:0>;
  <proto:LiteBase>.parent = function <atom:0>;
  <proto:LiteBase>.childIndex = function <atom:0>;
  <proto:LiteBase>.append = function <atom:0>;
  <proto:LiteBase>.insert = function <atom:0>;
  <proto:LiteBase>.remove = function <atom:0>;
  <proto:LiteBase>.replace = function <atom:0>;
  <proto:LiteBase>.clone = function <atom:0>;
  <proto:LiteBase>.split = function <atom:0>;
  <proto:LiteBase>.next = function <atom:0>;
  <proto:LiteBase>.previous = function <atom:0>;
  <proto:LiteBase>.firstChild = function <atom:0>;
  <proto:LiteBase>.lastChild = function <atom:0>;
  <proto:LiteBase>.childNodes = function <atom:0>;
  <proto:LiteBase>.childNode = function <atom:0>;
  <proto:LiteBase>.kind = function <atom:0>;
  <proto:LiteBase>.value = function <atom:0>;
  <proto:LiteBase>.textContent = function <atom:0>;
  <proto:LiteBase>.innerHTML = function <atom:0>;
  <proto:LiteBase>.outerHTML = function <atom:0>;
  <proto:LiteBase>.serializeXML = function <atom:0>;
  <proto:LiteBase>.setAttribute = function <atom:0>;
  <proto:LiteBase>.getAttribute = function <atom:0>;
  <proto:LiteBase>.removeAttribute = function <atom:0>;
  <proto:LiteBase>.hasAttribute = function <atom:0>;
  <proto:LiteBase>.allAttributes = function <atom:0>;
  <proto:LiteBase>.addClass = function <atom:0>;
  <proto:LiteBase>.removeClass = function <atom:0>;
  <proto:LiteBase>.hasClass = function <atom:0>;
  <proto:LiteBase>.setStyle = function <atom:0>;
  <proto:LiteBase>.getStyle = function <atom:0>;
  <proto:LiteBase>.allStyles = function <atom:0>;
  <proto:LiteBase>.insertRules = function <atom:0>;
  <proto:LiteBase>.fontSize = function <atom:0>;
  <proto:LiteBase>.fontFamily = function <atom:0>;
  <proto:LiteBase>.nodeSize = function <atom:0>;
  <proto:LiteBase>.nodeBBox = function <atom:0>;
  <proto:LiteBase>.createWorker = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LiteBase>;
  LiteBase = function <atom:0>;
  // close_loc <class_fields_init>
  LiteBase#1 = function <atom:0>;
  exports.LiteBase = LiteBase#1;
  c = e.NodeMixin(LiteBase#1);
  let LiteAdaptor;
  let <class_fields_init>#1;
  class LiteAdaptor extends c { ... }
  <class_fields_init>#1 = undefined;
  <proto:LiteAdaptor>;
  LiteAdaptor = function <atom:0>;
  // close_loc <class_fields_init>#1
  LiteAdaptor#1 = function <atom:0>;
  exports.LiteAdaptor = LiteAdaptor#1;
  exports.liteAdaptor = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/liteAdaptor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
