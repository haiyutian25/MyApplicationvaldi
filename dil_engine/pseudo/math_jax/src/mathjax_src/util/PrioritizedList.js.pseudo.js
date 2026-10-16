// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=42B file=math_jax/src/mathjax_src/util/PrioritizedList
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.items = [];
  this.items = [];
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=31B file=math_jax/src/mathjax_src/util/PrioritizedList
// closure: t, i
function {
  i = <i_new>;
  return {value: t[(i++)], done: (i > t.length)};
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=59B file=math_jax/src/mathjax_src/util/PrioritizedList
// locals: i, t, this
function {
  this = this;
  let t;
  let i;
  i = 0;
  t = this.items;
  return {next: function <atom:0>};
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=277B file=math_jax/src/mathjax_src/util/PrioritizedList
// args: i, t
// locals: i#1, t#1, e, this
// closure: PrioritizedList
function {
  this = this;
  let t#1;
  let i#1;
  i#1 = i;
  if (!((t === undefined))) goto L_35;
  t;
  t = PrioritizedList.DEFAULTPRIORITY;
  t#1 = PrioritizedList.DEFAULTPRIORITY;
  let e;
  e = this.items.length;
  e = <e_new>;
  (e--);
  if (!((e >= 0))) goto L_b7;
  if (((t < this.items[e].priority))) goto L_5d;
  this.items.splice((e + 1), 0, {item: i, priority: t});
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=219B file=math_jax/src/mathjax_src/util/PrioritizedList
// args: i
// locals: t, this
function {
  this = this;
  let t;
  t = this.items.length;
  t = <t_new>;
  (t--);
  if (!((t >= 0))) goto L_83;
  if (((this.items[t].item !== i))) goto L_29;
  if (!((t >= 0))) goto L_d8;
  this.items.splice(t, 1);
  return this;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=181B file=math_jax/src/mathjax_src/util/PrioritizedList
// args: require, module, exports
// locals: PrioritizedList, <class_fields_init>, PrioritizedList#1
function {
  let PrioritizedList#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PrioritizedList = undefined;
  let PrioritizedList;
  let <class_fields_init>;
  class PrioritizedList extends undefined { ... }
  define_method_computed(<proto:PrioritizedList>, Symbol.iterator, function <atom:0>).add = function <atom:0>;
  define_method_computed(<proto:PrioritizedList>, Symbol.iterator, function <atom:0>).remove = function <atom:0>;
  <class_fields_init> = undefined;
  define_method_computed(<proto:PrioritizedList>, Symbol.iterator, function <atom:0>);
  PrioritizedList = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc PrioritizedList
  PrioritizedList#1 = function <atom:0>;
  exports.PrioritizedList = PrioritizedList#1;
  PrioritizedList#1.DEFAULTPRIORITY = 5;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/PrioritizedList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
