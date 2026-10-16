// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/adaptors/lite/Text
function {
  return "#text";
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=39B file=math_jax/src/mathjax_src/adaptors/lite/Text
// args: e
// locals: e#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  if (!((e === undefined))) goto L_1a;
  e;
  e = "";
  e#1 = "";
  this.value = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/adaptors/lite/Text
function {
  return "#comment";
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/adaptors/lite/Text
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

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=177B file=math_jax/src/mathjax_src/adaptors/lite/Text
// args: require, module, exports
// locals: LiteText, <class_fields_init>, LiteText#1, LiteComment, <class_fields_init>#1, LiteComment#1
function {
  let LiteComment#1;
  let LiteText#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LiteText = undefined;
  exports.LiteComment = undefined;
  let LiteText;
  let <class_fields_init>;
  class LiteText extends undefined { ... }
  <proto:LiteText>.kind = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LiteText>;
  LiteText = function <atom:0>;
  // close_loc <class_fields_init>
  LiteText#1 = function <atom:0>;
  exports.LiteText = LiteText#1;
  let LiteComment;
  let <class_fields_init>#1;
  class LiteComment extends LiteText#1 { ... }
  <proto:LiteComment>.kind = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:LiteComment>;
  LiteComment = function <atom:0>;
  // close_loc <class_fields_init>#1
  LiteComment#1 = function <atom:0>;
  exports.LiteComment = LiteComment#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/lite/Text
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
