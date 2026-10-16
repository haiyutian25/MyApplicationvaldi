// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=60B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this._nodes = t;
  this.startStr = "";
  this.startI = 0;
  this.stopI = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._nodes;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=85B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  t = ...0;
  // append([], 0, t)
  t;
  this._nodes.push.apply(this._nodes, []);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._nodes.pop();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._nodes[(this.Size() - 1)];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=78B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  this._nodes[(this.Size() - 1)] = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._nodes[0];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  this._nodes[0] = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=121B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  if (!((null == t))) goto L_b;
  t = 1;
  1;
  return this._nodes.slice((this.Size() - t));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._nodes.length;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  this._nodes = [];
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=192B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t, e
// locals: t#1, e#1, this
function {
  this = this;
  let e#1;
  let t#1;
  if (!((t === undefined))) goto L_11;
  t;
  t = true;
  t#1 = true;
  e#1 = e;
  if (((1 !== this._nodes.length))) goto L_3e;
  if (!(e)) goto L_9d;
  if (!(t)) goto L_71;
  goto L_76;
  // [栈深重同步 4 -> 3]
  return this.create("node", "mrow", this._nodes, {});
  return this.First;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=152B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t, e
// locals: this
function {
  this = this;
  e = ...1;
  // append([t], 1, e)
  e;
  return this.factory.configuration.nodeFactory.create.apply(this.factory.configuration.nodeFactory, [t]);
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=138B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t, e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  e = ...1;
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target(e);
  this.factory = t;
  this.global = {};
  this._properties = {};
  if (!(this.isOpen)) goto L_85;
  this._env = {};
  {};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/StackItem
function {
  return "base";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this._env;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  this._env = t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/StackItem
function {
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  return this._properties[t];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t, e
// locals: this
function {
  this = this;
  this._properties[t] = e;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/StackItem
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/StackItem
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/input/tex/StackItem
function {
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  return (t === this.kind);
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=942B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: e
// locals: s, r, this
// closure: BaseItem, t
function {
  this = this;
  if (!(e.isKind("over"))) goto L_d0;
  if (!(this.isOpen)) goto L_d0;
  e.setProperty("num", this.toMml(false));
  this.Clear();
  if (!(e.isKind("cell"))) goto L_1d0;
  if (!(this.isOpen)) goto L_1d0;
  if (!(e.getProperty("linebreak"))) goto L_178;
  return BaseItem.fail;
  throw new t.default("Misplaced", "Misplaced %1", e.getName());
  if (!(e.isClose)) goto L_2f8;
  if (!(this.getErrors(e.kind))) goto L_2f8;
  let r;
  let s;
  if (((undefined === undefined))) goto L_25a;
  const _it1 = undefined;
  <done(_it1)>;
  s = <value(_it1)>;
  <done(_it1)>;
  r = <value(_it1)>;
  goto L_2a4;
  // [栈深重同步 4 -> 1]
  _it1;
  goto L_24e;
  // [栈深重同步 1 -> 0]
  throw new t.default(s, r, e.getName());
  if (!(e.isFinal)) goto L_389;
  this.Push(e.First);
  return BaseItem.fail;
  return BaseItem.success;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=130B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: t, this
function {
  this = this;
  let t;
  for (const t of Object.keys(this.env)) {
    delete t;
    // [栈深重同步 4 -> 3]
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
function {
  this = this;
  Object.assign(this._properties, t);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=44B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return this.getProperty("name");   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=125B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: this
function {
  this = this;
  return (((this.kind + "[") + this.nodes.join("; ")) + "]");
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=114B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t
// locals: this
// closure: BaseItem
function {
  this = this;
  if ((this.constructor.errors[t])) goto L_71;
  return BaseItem.errors[t];
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=559B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: t, s
// locals: t#1, s#1, r, i, this
// closure: e
function {
  this = this;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_13;
  s;
  s = "";
  s#1 = "";
  let r;
  r = this.startStr.slice(this.startI, this.stopI);
  if (!(r)) goto L_22e;
  let i;
  if (!(s)) goto L_ba;
  goto L_bd;
  // [栈深重同步 1 -> 0]
  i = r;
  t.attributes.set(e.TexConstant.Attr.LATEXITEM, i);
  if (!(("}" !== i))) goto L_22d;
  t.attributes.set(e.TexConstant.Attr.LATEX, i);
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=31 bc=541B file=math_jax/src/mathjax_src/input/tex/StackItem
// args: require, module, exports
// locals: t, e, MmlStack, <class_fields_init>, MmlStack#1, BaseItem, <class_fields_init>#1, BaseItem#1
function {
  let BaseItem#1;
  let MmlStack#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MmlStack = undefined;
  exports.BaseItem = undefined;
  t = require("./TexError");
  e = require("./TexConstants");
  let MmlStack;
  let <class_fields_init>;
  class MmlStack extends undefined { ... }
  <proto:MmlStack>.nodes = function <atom:0>;
  <proto:MmlStack>.Push = function <atom:0>;
  <proto:MmlStack>.Pop = function <atom:0>;
  <proto:MmlStack>.First = function <atom:0>;
  <proto:MmlStack>.First = function <atom:0>;
  <proto:MmlStack>.Last = function <atom:0>;
  <proto:MmlStack>.Last = function <atom:0>;
  <proto:MmlStack>.Peek = function <atom:0>;
  <proto:MmlStack>.Size = function <atom:0>;
  <proto:MmlStack>.Clear = function <atom:0>;
  <proto:MmlStack>.toMml = function <atom:0>;
  <proto:MmlStack>.create = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MmlStack>;
  MmlStack = function <atom:0>;
  // close_loc <class_fields_init>
  MmlStack#1 = function <atom:0>;
  exports.MmlStack = MmlStack#1;
  let BaseItem;
  let <class_fields_init>#1;
  class BaseItem extends MmlStack#1 { ... }
  <proto:BaseItem>.kind = function <atom:0>;
  <proto:BaseItem>.env = function <atom:0>;
  <proto:BaseItem>.env = function <atom:0>;
  <proto:BaseItem>.copyEnv = function <atom:0>;
  <proto:BaseItem>.getProperty = function <atom:0>;
  <proto:BaseItem>.setProperty = function <atom:0>;
  <proto:BaseItem>.isOpen = function <atom:0>;
  <proto:BaseItem>.isClose = function <atom:0>;
  <proto:BaseItem>.isFinal = function <atom:0>;
  <proto:BaseItem>.isKind = function <atom:0>;
  <proto:BaseItem>.checkItem = function <atom:0>;
  <proto:BaseItem>.clearEnv = function <atom:0>;
  <proto:BaseItem>.setProperties = function <atom:0>;
  <proto:BaseItem>.getName = function <atom:0>;
  <proto:BaseItem>.toString = function <atom:0>;
  <proto:BaseItem>.getErrors = function <atom:0>;
  <proto:BaseItem>.addLatexItem = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:BaseItem>;
  BaseItem = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc BaseItem
  BaseItem#1 = function <atom:0>;
  exports.BaseItem = BaseItem#1;
  BaseItem#1.fail = [null, false];
  BaseItem#1.success = [null, true];
  BaseItem#1.errors = {end: ["MissingBeginExtraEnd", "Missing \begin{%1} or extra \end{%1}"], close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"], right: ["MissingLeftExtraRight", "Missing \left or extra \right"], middle: ["ExtraMiddle", "Extra \middle"]};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/StackItem
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
