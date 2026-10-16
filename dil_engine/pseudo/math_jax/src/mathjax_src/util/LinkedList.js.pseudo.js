// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=61B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: t#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = null;
  t#1 = null;
  this.next = null;
  this.prev = null;
  this.data = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=237B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: this
// closure: <class_fields_init>, ListItem, exports
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  t = ...0;
  this.list = new ListItem(exports.END);
  this.list.prev = this.list;
  this.list.next = this.list;
  // append([], 0, t)
  t;
  this.push.apply(this, []);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=math_jax/src/mathjax_src/util/LinkedList
// args: t, e
function {
  return (t < e);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=259B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: e, t#1, this
// closure: ListItem
function {
  this = this;
  t = ...0;
  let e;
  for (const e of t) {
    let t#1;
    t#1 = new ListItem(e);
    t#1.next = this.list;
    t#1.prev = this.list.prev;
    this.list.prev = t#1;
    t#1.prev.next = t#1;
  }
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=369B file=math_jax/src/mathjax_src/util/LinkedList
// locals: t, this
// closure: exports
function {
  this = this;
  let t;
  t = this.list.prev;
  if (!((t.data === exports.END))) goto L_94;
  return null;
  this.list.prev = t.prev;
  t.prev.next = this.list;
  t.prev = null;
  t.next = null;
  return t.data;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=332B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: e, t#1, this
// closure: ListItem
function {
  this = this;
  t = ...0;
  let e;
  for (const e of t.slice(0).reverse()) {
    let t#1;
    t#1 = new ListItem(e);
    t#1.next = this.list.next;
    t#1.prev = this.list;
    this.list.next = t#1;
    t#1.next.prev = t#1;
  }
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=369B file=math_jax/src/mathjax_src/util/LinkedList
// locals: t, this
// closure: exports
function {
  this = this;
  let t;
  t = this.list.next;
  if (!((t.data === exports.END))) goto L_94;
  return null;
  this.list.next = t.next;
  t.next.prev = this.list;
  t.prev = null;
  t.next = null;
  return t.data;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=553B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: e, i, s, t#1, this
// closure: exports
function {
  this = this;
  t = ...0;
  let s;
  let e;
  e = new Map();
  let i;
  for (const i of t) {
    e.set(i, true);
  }
  s = this.list.next;
  if (!((s.data !== exports.END))) goto L_226;
  let t#1;
  t#1 = s.next;
  if (!(e.has(s.data))) goto L_21a;
  s.prev.next = s.next;
  s.next.prev = s.prev;
  s.prev = null;
  s.next = null;
  null;
  s = t#1;
  t#1;
  goto L_97;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=279B file=math_jax/src/mathjax_src/util/LinkedList
// locals: this
function {
  this = this;
  this.list.prev.next = null;
  this.list.next.prev = null;
  this.list.prev = this.list;
  this.list.next = this.list;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=234B file=math_jax/src/mathjax_src/util/LinkedList
// locals: t, this
// closure: exports
function {
  this = this;
  let t;
  t = this.list.next;
  if (!((t.data !== exports.END))) goto L_e8;
  if (!(<yield>)) goto L_bb;
  return <yield>; // async
  // [栈深重同步 0 -> 1]
  <?>;
  t = t.next;
  t.next;
  goto L_4a;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=234B file=math_jax/src/mathjax_src/util/LinkedList
// locals: t, this
// closure: exports
function {
  this = this;
  let t;
  t = this.list.prev;
  if (!((t.data !== exports.END))) goto L_e8;
  if (!(<yield>)) goto L_bb;
  return <yield>; // async
  // [栈深重同步 0 -> 1]
  <?>;
  t = t.prev;
  t.prev;
  goto L_4a;
  return undefined; // async
}

// fn <atom:0>  args=2 vars=7 closure=2 cpool=0 bc=506B file=math_jax/src/mathjax_src/util/LinkedList
// args: t, e
// locals: t#1, e#1, s, i, this
// closure: ListItem, exports
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = null;
  e#1 = null;
  let i;
  let s;
  if (!((null === e))) goto L_6b;
  e = this.isBefore.bind(this);
  this.isBefore.bind(this);
  s = new ListItem(t);
  i = this.list.next;
  if (!((i.data !== exports.END))) goto L_17b;
  if (!(e(i.data, s.data))) goto L_17b;
  i = i.next;
  i.next;
  goto L_ba;
  s.prev = i.prev;
  s.next = i;
  i.prev = s;
  i.prev.next = s;
  return this;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=543B file=math_jax/src/mathjax_src/util/LinkedList
// args: t
// locals: t#1, e, s, s#1, i, this
// closure: LinkedList
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = null;
  t#1 = null;
  let e;
  if (!((null === t))) goto L_63;
  t = this.isBefore.bind(this);
  this.isBefore.bind(this);
  e = [];
  let s;
  for (const s of this) {
    e.push(new LinkedList(s));
  }
  this.list.prev = this.list;
  this.list.next = this.list;
  if (!((e.length > 1))) goto L_1e1;
  let i;
  let s#1;
  s#1 = e.shift();
  i = e.shift();
  s#1.merge(i, t);
  e.push(s#1);
  goto L_125;
  if (!(e.length)) goto L_21b;
  this.list = e[0].list;
  e[0].list;
  return this;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=2023B file=math_jax/src/mathjax_src/util/LinkedList
// args: t, e
// locals: t#1, e#1, s, i, this
// closure: exports
function {
  this = this;
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_13;
  e;
  e = null;
  e#1 = null;
  let i;
  let s;
  if (!((null === e))) goto L_6b;
  e = this.isBefore.bind(this);
  this.isBefore.bind(this);
  s = this.list.next;
  i = t.list.next;
  if (!((s.data !== exports.END))) goto L_51d;
  if (!((i.data !== exports.END))) goto L_51d;
  if (!(e(i.data, s.data))) goto L_4f1;
  goto L_243;
  const _it1 = <?>;
  <done(_it1.next)>;
  i.prev.next = <value(_it1.next)>;
  <done(_it1.next)>;
  s.prev.next = <value(_it1.next)>;
  goto L_24e;
  // [栈深重同步 4 -> 0]
  goto L_1de;
  [s, i];
  goto L_274;
  const _it2 = <?>;
  <done(_it2.next)>;
  i.prev = <value(_it2.next)>;
  <done(_it2.next)>;
  s.prev = <value(_it2.next)>;
  goto L_2c1;
  // [栈深重同步 4 -> 0]
  goto L_251;
  [s.prev, i.prev];
  goto L_369;
  const _it3 = <?>;
  <done(_it3.next)>;
  this.list.prev.next = <value(_it3.next)>;
  <done(_it3.next)>;
  t.list.prev.next = <value(_it3.next)>;
  goto L_3b4;
  // [栈深重同步 4 -> 0]
  goto L_2c5;
  [t.list, this.list];
  goto L_41a;
  const _it4 = <?>;
  <done(_it4.next)>;
  this.list.prev = <value(_it4.next)>;
  <done(_it4.next)>;
  t.list.prev = <value(_it4.next)>;
  goto L_4a7;
  // [栈深重同步 4 -> 0]
  goto L_3b7;
  [t.list.prev, this.list.prev];
  goto L_4c5;
  const _it5 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_519;
  // [栈深重同步 4 -> 0]
  goto L_4aa;
  // [栈深重同步 1 -> 0]
  s = s.next;
  s.next;
  goto L_f5;
  if (!((i.data !== exports.END))) goto L_7e3;
  this.list.prev.next = t.list.next;
  t.list.next.prev = this.list.prev;
  t.list.prev.next = this.list;
  this.list.prev = t.list.prev;
  t.list.prev = t.list;
  t.list.next = t.list;
  t.list;
  return this;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=14 bc=319B file=math_jax/src/mathjax_src/util/LinkedList
// args: require, module, exports
// locals: ListItem, <class_fields_init>, ListItem#1, LinkedList, <class_fields_init>#1, LinkedList#1
function {
  let LinkedList#1;
  let ListItem#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.END = undefined;
  exports.ListItem = undefined;
  exports.LinkedList = undefined;
  exports.END = Symbol();
  let ListItem;
  let <class_fields_init>;
  class ListItem extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:ListItem>;
  ListItem = function <atom:0>;
  // close_loc <class_fields_init>
  ListItem#1 = function <atom:0>;
  exports.ListItem = ListItem#1;
  let LinkedList;
  let <class_fields_init>#1;
  class LinkedList extends undefined { ... }
  <proto:LinkedList>.isBefore = function <atom:0>;
  <proto:LinkedList>.push = function <atom:0>;
  <proto:LinkedList>.pop = function <atom:0>;
  <proto:LinkedList>.unshift = function <atom:0>;
  <proto:LinkedList>.shift = function <atom:0>;
  <proto:LinkedList>.remove = function <atom:0>;
  <proto:LinkedList>.clear = function <atom:0>;
  define_method_computed(<proto:LinkedList>, Symbol.iterator, function <atom:0>).reversed = function <atom:0>;
  define_method_computed(<proto:LinkedList>, Symbol.iterator, function <atom:0>).insert = function <atom:0>;
  define_method_computed(<proto:LinkedList>, Symbol.iterator, function <atom:0>).sort = function <atom:0>;
  define_method_computed(<proto:LinkedList>, Symbol.iterator, function <atom:0>).merge = function <atom:0>;
  <class_fields_init>#1 = undefined;
  define_method_computed(<proto:LinkedList>, Symbol.iterator, function <atom:0>);
  LinkedList = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc LinkedList
  LinkedList#1 = function <atom:0>;
  exports.LinkedList = LinkedList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/LinkedList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
