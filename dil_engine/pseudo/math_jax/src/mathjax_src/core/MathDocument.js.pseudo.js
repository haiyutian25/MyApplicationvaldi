// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=200B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, s, r, i, this
function {
  this = this;
  let e;
  e = new this();
  let s;
  const _it1 = Object.keys(t);
  goto L_bb;
  s = <value(_it1)>;
  let i;
  let r;
  if (((undefined === undefined))) goto L_55;
  const _it2 = undefined;
  <done(_it2)>;
  r = <value(_it2)>;
  <done(_it2)>;
  i = <value(_it2)>;
  goto L_86;
  <value(_it2)>;
  goto L_49;
  // [栈深重同步 4 -> 3]
  if (!(i)) goto L_ba;
  e.add(r, i);
  if (!(<done(_it2)>)) goto L_3d;
  <value(_it2)>;
  return e;
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=540B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: s, r, i, o, t#1, o#1, this
function {
  this = this;
  let o;
  let i;
  let r;
  let s;
  s = undefined;
  r = undefined;
  i = true;
  o = e[0];
  if (((1 === e.length))) goto L_2c;
  if (!(("boolean" == typeof e[1]))) goto L_88;
  if (!((2 === e.length))) goto L_3d;
  i = e[1];
  e[1];
  goto L_5b;
  const _it1 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_84;
  // [栈深重同步 4 -> 0]
  goto L_40;
  this.methodActions(t);
  goto L_1f6;
  if (!(("string" == typeof e[1]))) goto L_1a0;
  if (!(("string" == typeof e[2]))) goto L_145;
  let o#1;
  let t#1;
  if (!((4 === e.length))) goto L_bb;
  i = e[3];
  e[3];
  if (((undefined === undefined))) goto L_cf;
  const _it2 = undefined;
  <done(_it2)>;
  t#1 = <value(_it2)>;
  <done(_it2)>;
  o#1 = <value(_it2)>;
  goto L_113;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_c1;
  const _it3 = e.slice(1);
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_141;
  // [栈深重同步 4 -> 0]
  goto L_f8;
  this.methodActions(t#1, o#1);
  goto L_1f6;
  if (!((3 === e.length))) goto L_154;
  i = e[2];
  e[2];
  goto L_172;
  const _it4 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_19d;
  // [栈深重同步 4 -> 0]
  goto L_157;
  this.methodActions(e[1]);
  goto L_1f6;
  if (!((4 === e.length))) goto L_1af;
  i = e[3];
  e[3];
  goto L_1cd;
  const _it5 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_1f5;
  // [栈深重同步 4 -> 0]
  goto L_1b2;
  e.slice(1);
  return [{id: t, renderDoc: s, renderMath: r, convert: i}, o];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=15B file=math_jax/src/mathjax_src/core/MathDocument
// args: e
// closure: t
function {
  if (!(t)) goto L_b;
  e[t].call(e);
  return false;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=16B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, s
// closure: e
function {
  if (!(e)) goto L_c;
  t[e].call(t, s);
  return false;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=2 bc=27B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: t#1, e#1
function {
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = t#1;
  e#1 = t#1;
  return [function <atom:0>, function <atom:0>];
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=256B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: t#1, e#1, s, this
// closure: i
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_56;
  e;
  e = i.STATE.UNPROCESSED;
  e#1 = i.STATE.UNPROCESSED;
  let s;
  for (const s of this.items) {
    if (!((s.priority >= e))) continue;
    if (!(s.item.renderDoc(t))) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=264B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e, s
// locals: t#1, e#1, s#1, r, this
// closure: i
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_5c;
  s;
  s = i.STATE.UNPROCESSED;
  s#1 = i.STATE.UNPROCESSED;
  let r;
  for (const r of this.items) {
    if (!((r.priority >= s))) continue;
    if (!(r.item.renderMath(t, e))) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=0 bc=345B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e, s
// locals: t#1, e#1, s#1, r, this
// closure: i
function {
  this = this;
  let s#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((s === undefined))) goto L_5c;
  s;
  s = i.STATE.LAST;
  s#1 = i.STATE.LAST;
  let r;
  for (const r of this.items) {
    if (!((r.priority > s))) goto L_b6;
    return undefined;
    // [栈深重同步 0 -> 3]
    if (!(r.item.convert)) continue;
    if (!(r.item.renderMath(t, e))) continue;
    return undefined;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=165B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of this.items) {
    if (!((e.item.id === t))) continue;
    return e.item;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathDocument
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
function {
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathDocument
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

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=19B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: t#1, e#1
function {
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_10;
  e;
  e = null;
  e#1 = null;
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=2B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
function {
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathDocument
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathDocument
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/MathDocument
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

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// closure: s
function {
  return t.setAdaptor(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// closure: this
function {
  return t.setMmlFactory(this.mmlFactory);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
function {
  return t.initialize();   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=8 cpool=3 bc=1243B file=math_jax/src/mathjax_src/core/MathDocument
// args: e, s, r
// locals: i, a, this
// closure: <class_fields_init>, t, DefaultMathList, RenderList, AbstractMathDocument, DefaultOutputJax, DefaultInputJax, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let a;
  let i;
  i = this.constructor;
  this.document = e;
  this.options = t.userOptions(t.defaultOptions({}, i.OPTIONS), r);
  if ((this.options.MathList)) goto L_108;
  this.math = new DefaultMathList();
  this.renderActions = RenderList.create(this.options.renderActions);
  this._actionPromises = [];
  this._readyPromise = Promise.resolve();
  this.processed = new AbstractMathDocument.ProcessBits();
  if ((this.options.OutputJax)) goto L_24a;
  this.outputJax = new DefaultOutputJax();
  if ((this.options.InputJax)) goto L_2a4;
  a = [new DefaultInputJax()];
  if ((Array.isArray(a))) goto L_2df;
  a = [a];
  [a];
  this.inputJax = a;
  this.adaptor = s;
  this.outputJax.setAdaptor(s);
  this.inputJax.map(function <atom:0>);
  if ((this.options.MmlFactory)) goto L_3f9;
  this.mmlFactory = new o.MmlFactory();
  this.inputJax.map(function <atom:0>);
  this.outputJax.initialize();
  this.inputJax.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  return this.constructor.KIND;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=150B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: s, r, this
// closure: RenderList
function {
  this = this;
  e = ...1;
  let r;
  let s;
  if (((undefined === undefined))) goto L_1d;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_49;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_11;
  // [栈深重同步 1 -> 0]
  this.renderActions.add(s, r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=158B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.renderActions.findID(t);
  if (!(e)) goto L_9d;
  this.renderActions.remove(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  this.clearPromises();
  this.renderActions.renderDoc(this);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=117B file=math_jax/src/mathjax_src/core/MathDocument
// closure: this
function {
  this.render();
  (await this.actionPromises());
  this.clearPromises();
  return this; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=41B file=math_jax/src/mathjax_src/core/MathDocument
// closure: this, c
function {
  return c.handleRetriesFor(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=41B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
// closure: c
function {
  this = this;
  return this.whenReady(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=163B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: t#1, this
// closure: i
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_51;
  t;
  t = i.STATE.RERENDER;
  t#1 = i.STATE.RERENDER;
  this.state((t - 1));
  this.render();
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=118B file=math_jax/src/mathjax_src/core/MathDocument
// closure: this, t
function {
  this.rerender(t);
  (await this.actionPromises());
  this.clearPromises();
  return this; // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=41B file=math_jax/src/mathjax_src/core/MathDocument
// closure: this, t, c
function {
  return c.handleRetriesFor(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=121B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: t#1, this
// closure: c, i
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_51;
  t;
  t = i.STATE.RERENDER;
  t#1 = i.STATE.RERENDER;
  return this.whenReady(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=44B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// closure: r
function {
  if (!((e.name === r))) goto L_2a;
  return e;
  return t;
}

// fn <atom:0>  args=2 vars=15 closure=2 cpool=1 bc=1451B file=math_jax/src/mathjax_src/core/MathDocument
// args: e, s
// locals: e#1, s#1, r, o, a, n, c, h, u, p, l, m, this
// closure: t, i
function {
  this = this;
  let s#1;
  let e#1;
  e#1 = e;
  if (!((s === undefined))) goto L_13;
  s;
  s = {};
  s#1 = {};
  let m;
  let l;
  let p;
  let u;
  let h;
  let c;
  let n;
  let a;
  let o;
  let r;
  if (((undefined === undefined))) goto L_15d;
  r = <to_object>(undefined).format;
  o = <to_object>(undefined).display;
  a = <to_object>(undefined).end;
  n = <to_object>(undefined).ex;
  c = <to_object>(undefined).em;
  h = <to_object>(undefined).containerWidth;
  u = <to_object>(undefined).scale;
  p = <to_object>(undefined).family;
  <to_object>(undefined);
  goto L_244;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_3a;
  // [栈深重同步 1 -> 0]
  if (!((null === h))) goto L_257;
  h = (80 * n);
  (80 * n);
  l = this.inputJax.reduce(function <atom:0>, null);
  m = new this.options.MathItem(e, l, o);
  m.start.node = this.adaptor.body(this.document);
  m.setMetrics(c, n, h, u);
  if (!(p)) goto L_464;
  if (!(this.outputJax.options.mtextInheritFont)) goto L_464;
  m.outputData.mtextFamily = p;
  p;
  if (!(p)) goto L_509;
  if (!(this.outputJax.options.merrorInheritFont)) goto L_509;
  m.outputData.merrorFamily = p;
  p;
  this.clearPromises();
  m.convert(this, a);
  if ((m.typesetRoot)) goto L_5aa;
  return m.root;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=124B file=math_jax/src/mathjax_src/core/MathDocument
// locals: s
// closure: this, t, e
function {
  let s;
  s = this.convert(t, e);
  (await this.actionPromises());
  this.clearPromises();
  return s; // async
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=41B file=math_jax/src/mathjax_src/core/MathDocument
// closure: this, t, e, c
function {
  return c.handleRetriesFor(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=58B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: t#1, e#1, this
// closure: c
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_12;
  e;
  e = {};
  e#1 = {};
  return this.whenReady(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=math_jax/src/mathjax_src/core/MathDocument
// closure: s
function {
  return s;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=1 bc=188B file=math_jax/src/mathjax_src/core/MathDocument
// locals: e, s, r
// closure: this, t
function {
  let r;
  let s;
  let e;
  e = this._readyPromise;
  this._readyPromise = Promise.resolve();
  s = t();
  r = this._readyPromise.then(function <atom:0>);
  this._readyPromise = e;
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=2 bc=124B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: this
function {
  this = this;
  this._readyPromise = this._readyPromise.catch(function <atom:0>).then(function <atom:0>);
  return this._readyPromise.catch(function <atom:0>).then(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  return Promise.all(this._actionPromises);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  this._actionPromises = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: this
function {
  this = this;
  this._actionPromises.push(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=92B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = null;
  t#1 = null;
  this.processed.set("findMath");
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=643B file=math_jax/src/mathjax_src/core/MathDocument
// locals: t, e, e#1, t#1, this
function {
  this = this;
  if (!(!this.processed.isSet("compile"))) goto L_280;
  let t;
  t = [];
  let e;
  for (const e of this.math) {
    this.compileMath(e);
    if (!((undefined !== e.inputData.recompile))) goto L_126;
    t.push(e);
  }
  let e#1;
  for (const e#1 of t) {
    let t#1;
    t#1 = e#1.inputData.recompile;
    e#1.state(t#1.state);
    e#1.inputData.recompile = t#1;
    this.compileMath(e#1);
  }
  this.processed.set("compile");
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=251B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, this
function {
  this = this;
  try { // catch -> L_30
  t.compile(this);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_fa
  if ((e.retry)) goto L_7e;
  if (!(e.restart)) goto L_82;
  throw e;
  this.options.compileError(this, t, e);
  t.inputData.error = e;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=673B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: this
function {
  this = this;
  t.root = this.mmlFactory.create("math", null, [this.mmlFactory.create("merror", {data-mjx-error: e.message, title: e.message}, [this.mmlFactory.create("mtext", null, [this.mmlFactory.create("text").setText("Math input error")])])]);
  if (!(t.display)) goto L_252;
  t.root.attributes.set("display", "block");
  t.inputData.error = e.message;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=470B file=math_jax/src/mathjax_src/core/MathDocument
// locals: e, t, this
function {
  this = this;
  if (!(!this.processed.isSet("typeset"))) goto L_1d4;
  let e;
  for (const e of this.math) {
    try { // catch -> L_af
    e.typeset(this);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    t = <?>;
    try { // catch -> L_17e
    if ((t.retry)) goto L_fd;
    if (!(t.restart)) goto L_101;
    throw t;
    this.options.typesetError(this, e, t);
    e.outputData.error = t;
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  this.processed.set("typeset");
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=702B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: this
function {
  this = this;
  t.typesetRoot = this.adaptor.node("mjx-container", {class: "MathJax mjx-output-error", jax: this.outputJax.name}, [this.adaptor.node("span", {data-mjx-error: e.message, title: e.message, style: {color: "red", background-color: "yellow", line-height: "normal"}}, [this.adaptor.text("Math output error")])]);
  if (!(t.display)) goto L_26f;
  this.adaptor.setAttributes(t.typesetRoot, {style: {display: "block", margin: "1em 0", text-align: "center"}});
  t.outputData.error = e.message;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=234B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  if ((this.processed.isSet("getMetrics"))) goto L_e7;
  this.outputJax.getMetrics(this);
  this.processed.set("getMetrics");
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=285B file=math_jax/src/mathjax_src/core/MathDocument
// locals: t, this
function {
  this = this;
  if (!(!this.processed.isSet("updateDocument"))) goto L_11b;
  let t;
  for (const t of this.math.reversed()) {
    t.updateDocument(this);
  }
  this.processed.set("updateDocument");
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=17B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = false;
  t#1 = false;
  return this;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=794B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e
// locals: t#1, e#1, s, this
// closure: i
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = false;
  e#1 = false;
  let s;
  for (const s of this.math) {
    s.state(t, e);
  }
  if (!((t < i.STATE.INSERTED))) goto L_103;
  this.processed.clear("updateDocument");
  if (!((t < i.STATE.TYPESET))) goto L_1e9;
  this.processed.clear("typeset");
  this.processed.clear("getMetrics");
  if (!((t < i.STATE.COMPILED))) goto L_280;
  this.processed.clear("compile");
  if (!((t < i.STATE.FINDMATH))) goto L_317;
  this.processed.clear("findMath");
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// closure: e
function {
  // append([], 0, e.inputJax)
  e.inputJax;
  return t.reset.apply(t, []);
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=622B file=math_jax/src/mathjax_src/core/MathDocument
// args: e
// locals: e#1, this
// closure: t, exports
function {
  this = this;
  let e#1;
  if (!((e === undefined))) goto L_14;
  e;
  e = {processed: true};
  e#1 = {processed: true};
  e = t.userOptions(Object.assign({}, exports.resetOptions), e);
  if (!(t.userOptions(Object.assign({}, exports.resetOptions), e).all)) goto L_f9;
  Object.assign(e, exports.resetAllOptions);
  if (!(e.processed)) goto L_166;
  this.processed.reset();
  if (!(e.inputJax)) goto L_1d5;
  this.inputJax.forEach(function <atom:0>);
  if (!(e.outputJax)) goto L_26b;
  // append([], 0, e.outputJax)
  e.outputJax;
  this.outputJax.reset.apply(this.outputJax, []);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/core/MathDocument
// locals: this
function {
  this = this;
  this.reset();
  this.math.clear();
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/core/MathDocument
function {
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: this
function {
  this = this;
  this.math.merge(t);
  return this;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=258B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, s, this
function {
  this = this;
  let e;
  e = this.getMathItemsWithin(t);
  let s;
  for (const s of e.slice(0).reverse()) {
    s.clear();
  }
  // append([], 0, e)
  e;
  this.math.remove.apply(this.math, []);
  return e;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=490B file=math_jax/src/mathjax_src/core/MathDocument
// args: t
// locals: e, s, r, i, t#1, this
function {
  this = this;
  let r;
  let s;
  let e;
  if ((Array.isArray(t))) goto L_3f;
  t = [t];
  [t];
  e = this.adaptor;
  s = [];
  r = e.getElements(t, this.document);
  let i;
  for (const i of this.math) {
    let t#1;
    for (const t#1 of r) {
      if (!(i.start.node)) continue;
      if (!(e.contains(t#1, i.start.node))) continue;
      s.push(i);
   continue;
      // [栈深重同步 0 -> 3]
    }
  }
  return s;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e, s
function {
  t.compileError(e, s);
  return;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/core/MathDocument
// args: t, e, s
function {
  t.typesetError(e, s);
  return;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=47 bc=1594B file=math_jax/src/mathjax_src/core/MathDocument
// args: require, module, exports
// locals: t, e, s, r, i, o, a, n, c, RenderList, <class_fields_init>, RenderList#1, DefaultInputJax, <class_fields_init>#1, DefaultInputJax#1, DefaultOutputJax, <class_fields_init>#2, DefaultOutputJax#1, DefaultMathList, <class_fields_init>#3, DefaultMathList#1, DefaultMathItem, <class_fields_init>#4, DefaultMathItem#1, AbstractMathDocument, <class_fields_init>#5, AbstractMathDocument#1
function {
  let AbstractMathDocument#1;
  let DefaultMathItem#1;
  let DefaultMathList#1;
  let DefaultOutputJax#1;
  let DefaultInputJax#1;
  let RenderList#1;
  let c;
  let n;
  let a;
  let o;
  let i;
  let r;
  let s;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RenderList = undefined;
  exports.resetOptions = undefined;
  exports.resetAllOptions = undefined;
  exports.AbstractMathDocument = undefined;
  t = require("../util/Options");
  e = require("./InputJax");
  s = require("./OutputJax");
  r = require("./MathList");
  i = require("./MathItem");
  o = require("../core/MmlTree/MmlFactory");
  a = require("../util/BitField");
  n = require("../util/PrioritizedList");
  c = require("../util/Retries");
  let RenderList;
  let <class_fields_init>;
  class RenderList extends n.PrioritizedList { ... }
  function <atom:0>.create = function <atom:0>;
  function <atom:0>.action = function <atom:0>;
  function <atom:0>.methodActions = function <atom:0>;
  <proto:RenderList>.renderDoc = function <atom:0>;
  <proto:RenderList>.renderMath = function <atom:0>;
  <proto:RenderList>.renderConvert = function <atom:0>;
  <proto:RenderList>.findID = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RenderList>;
  RenderList = function <atom:0>;
  // close_loc <class_fields_init>
  RenderList#1 = function <atom:0>;
  exports.RenderList = RenderList#1;
  exports.resetOptions = {all: false, processed: false, inputJax: null, outputJax: null};
  exports.resetAllOptions = {all: true, processed: true, inputJax: [], outputJax: []};
  let DefaultInputJax;
  let <class_fields_init>#1;
  class DefaultInputJax extends e.AbstractInputJax { ... }
  <proto:DefaultInputJax>.compile = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DefaultInputJax>;
  DefaultInputJax = function <atom:0>;
  // close_loc <class_fields_init>#1
  DefaultInputJax#1 = function <atom:0>;
  let DefaultOutputJax;
  let <class_fields_init>#2;
  class DefaultOutputJax extends s.AbstractOutputJax { ... }
  <proto:DefaultOutputJax>.typeset = function <atom:0>;
  <proto:DefaultOutputJax>.escaped = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:DefaultOutputJax>;
  DefaultOutputJax = function <atom:0>;
  // close_loc <class_fields_init>#2
  DefaultOutputJax#1 = function <atom:0>;
  let DefaultMathList;
  let <class_fields_init>#3;
  class DefaultMathList extends r.AbstractMathList { ... }
  <class_fields_init>#3 = undefined;
  <proto:DefaultMathList>;
  DefaultMathList = function <atom:0>;
  // close_loc <class_fields_init>#3
  DefaultMathList#1 = function <atom:0>;
  let DefaultMathItem;
  let <class_fields_init>#4;
  class DefaultMathItem extends i.AbstractMathItem { ... }
  <class_fields_init>#4 = undefined;
  <proto:DefaultMathItem>;
  DefaultMathItem = function <atom:0>;
  // close_loc <class_fields_init>#4
  DefaultMathItem#1 = function <atom:0>;
  let AbstractMathDocument;
  let <class_fields_init>#5;
  class AbstractMathDocument extends undefined { ... }
  <proto:AbstractMathDocument>.kind = function <atom:0>;
  <proto:AbstractMathDocument>.addRenderAction = function <atom:0>;
  <proto:AbstractMathDocument>.removeRenderAction = function <atom:0>;
  <proto:AbstractMathDocument>.render = function <atom:0>;
  <proto:AbstractMathDocument>.renderPromise = function <atom:0>;
  <proto:AbstractMathDocument>.rerender = function <atom:0>;
  <proto:AbstractMathDocument>.rerenderPromise = function <atom:0>;
  <proto:AbstractMathDocument>.convert = function <atom:0>;
  <proto:AbstractMathDocument>.convertPromise = function <atom:0>;
  <proto:AbstractMathDocument>.whenReady = function <atom:0>;
  <proto:AbstractMathDocument>.actionPromises = function <atom:0>;
  <proto:AbstractMathDocument>.clearPromises = function <atom:0>;
  <proto:AbstractMathDocument>.savePromise = function <atom:0>;
  <proto:AbstractMathDocument>.findMath = function <atom:0>;
  <proto:AbstractMathDocument>.compile = function <atom:0>;
  <proto:AbstractMathDocument>.compileMath = function <atom:0>;
  <proto:AbstractMathDocument>.compileError = function <atom:0>;
  <proto:AbstractMathDocument>.typeset = function <atom:0>;
  <proto:AbstractMathDocument>.typesetError = function <atom:0>;
  <proto:AbstractMathDocument>.getMetrics = function <atom:0>;
  <proto:AbstractMathDocument>.updateDocument = function <atom:0>;
  <proto:AbstractMathDocument>.removeFromDocument = function <atom:0>;
  <proto:AbstractMathDocument>.state = function <atom:0>;
  <proto:AbstractMathDocument>.reset = function <atom:0>;
  <proto:AbstractMathDocument>.clear = function <atom:0>;
  <proto:AbstractMathDocument>.done = function <atom:0>;
  <proto:AbstractMathDocument>.concat = function <atom:0>;
  <proto:AbstractMathDocument>.clearMathItemsWithin = function <atom:0>;
  <proto:AbstractMathDocument>.getMathItemsWithin = function <atom:0>;
  <class_fields_init>#5 = undefined;
  <proto:AbstractMathDocument>;
  AbstractMathDocument = function <atom:0>;
  // close_loc <class_fields_init>#5
  // close_loc AbstractMathDocument
  AbstractMathDocument#1 = function <atom:0>;
  exports.AbstractMathDocument = AbstractMathDocument#1;
  AbstractMathDocument#1.KIND = "MathDocument";
  AbstractMathDocument#1.OPTIONS = {OutputJax: null, InputJax: null, MmlFactory: null, MathList: DefaultMathList#1, MathItem: DefaultMathItem#1, compileError: function <atom:0>, typesetError: function <atom:0>, renderActions: t.expandable({find: [i.STATE.FINDMATH, "findMath", "", false], compile: [i.STATE.COMPILED], metrics: [i.STATE.METRICS, "getMetrics", "", false], typeset: [i.STATE.TYPESET], update: [i.STATE.INSERTED, "updateDocument", false]})};
  AbstractMathDocument#1.ProcessBits = a.BitFieldClass("findMath", "compile", "getMetrics", "typeset", "updateDocument");
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/MathDocument
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
