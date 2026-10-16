// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=foundation/src/Lazy
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.work = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=174B file=foundation/src/Lazy
// locals: this
function {
  this = this;
  if ((this.value)) goto L_69;
  this.value = {value: this.work()};
  this.work = undefined;
  undefined;
  return this.value.value;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=foundation/src/Lazy
// locals: this
function {
  this = this;
  return (undefined !== this.value);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=123B file=foundation/src/Lazy
// args: require, module, exports
// locals: Lazy, <class_fields_init>, Lazy#1
function {
  let Lazy#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Lazy = undefined;
  let Lazy;
  let <class_fields_init>;
  class Lazy extends undefined { ... }
  <proto:Lazy>.target = function <atom:0>;
  <proto:Lazy>.isCreated = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Lazy>;
  Lazy = function <atom:0>;
  // close_loc <class_fields_init>
  Lazy#1 = function <atom:0>;
  exports.Lazy = Lazy#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/Lazy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
