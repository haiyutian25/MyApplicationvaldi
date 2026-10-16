// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=66B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
// locals: t#1, a#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let a#1;
  let t#1;
  if (!((t === undefined))) goto L_21;
  t;
  t = "???";
  t#1 = "???";
  if (!((a === undefined))) goto L_2a;
  a;
  a = "";
  a#1 = "";
  this.tag = t;
  this.id = a;
  return;
}

// fn <atom:0>  args=8 vars=17 closure=1 cpool=0 bc=241B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a, s, e, r, i, n, o
// locals: t#1, a#1, s#1, e#1, r#1, i#1, n#1, o#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let o#1;
  let n#1;
  let i#1;
  let r#1;
  let e#1;
  let s#1;
  let a#1;
  let t#1;
  if (!((t === undefined))) goto L_31;
  t;
  t = "";
  t#1 = "";
  if (!((a === undefined))) goto L_3b;
  a;
  a = false;
  a#1 = false;
  if (!((s === undefined))) goto L_45;
  s;
  s = false;
  s#1 = false;
  if (!((e === undefined))) goto L_4e;
  e;
  e = null;
  e#1 = null;
  if (!((r === undefined))) goto L_5b;
  r;
  r = "";
  r#1 = "";
  if (!((i === undefined))) goto L_69;
  i;
  i = "";
  i#1 = "";
  if (!((n === undefined))) goto L_78;
  n;
  n = false;
  n#1 = false;
  if (!((o === undefined))) goto L_86;
  o;
  o = "";
  o#1 = "";
  this.env = t;
  this.taggable = a;
  this.defaultTags = s;
  this.tag = e;
  this.tagId = r;
  this.tagFormat = i;
  this.noTag = n;
  this.labelId = o;
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=463B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
// locals: s, e, r, this
function {
  this = this;
  let r;
  let e;
  let s;
  s = this.configuration.nodeFactory;
  e = s.create("node", "mtd", [t]);
  r = s.create("node", "mlabeledtr", [a, e]);
  return s.create("node", "mtable", [r], {side: this.configuration.options.tagSide, minlabelspacing: this.configuration.options.tagIndent, displaystyle: true});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=172B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
// closure: <class_fields_init>, TagInfo
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.counter = 0;
  this.allCounter = 0;
  this.configuration = null;
  this.ids = {};
  this.allIds = {};
  this.labels = {};
  this.allLabels = {};
  this.redo = false;
  this.refUpdate = false;
  this.currentTag = new TagInfo();
  this.history = [];
  this.stack = [];
  this.enTag = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=217B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a, s
// locals: e, this
// closure: TagInfo
function {
  this = this;
  let e;
  if (!(this.currentTag)) goto L_93;
  this.stack.push(this.currentTag);
  e = this.label;
  this.currentTag = new TagInfo(t, a, s);
  this.label = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  return this.currentTag.env;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=286B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: t, this
function {
  this = this;
  let t;
  this.history.push(this.currentTag);
  t = this.label;
  this.currentTag = this.stack.pop();
  if (!(t)) goto L_11d;
  if (!(!this.label)) goto L_11d;
  this.label = t;
  t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=179B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
// locals: this
function {
  this = this;
  this.currentTag.tag = t;
  if (!(a)) goto L_56;
  goto L_7c;
  // [栈深重同步 2 -> 1]
  this.currentTag.tagFormat = this.formatTag(t);
  this.currentTag.noTag = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=89B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  this.tag("", true);
  this.currentTag.noTag = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  return this.currentTag.noTag;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=47B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: this
function {
  this = this;
  this.currentTag.labelId = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  return this.currentTag.labelId;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=16B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
function {
  return ((a + "#") + encodeURIComponent(t));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=15B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
function {
  return ["(", t, ")"];
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: this
function {
  this = this;
  return this.formatTag(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=54B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
function {
  return ("mjx-eqn:" + t.replace(new RegExp("\\s"), "_"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
function {
  return t.toString();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=233B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  if (!((null == this.currentTag.tag))) goto L_e8;
  this.counter = (this.counter ++);
  this.tag(this.formatNumber(this.counter), false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  this.tag(null, true);
  this.currentTag.tagId = "";
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=370B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: t#1, a, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = false;
  t#1 = false;
  let a;
  if (!(t)) goto L_60;
  this.autoTag();
  return this.makeTag();   // tail call
  a = this.currentTag;
  if (!(a.taggable)) goto L_170;
  if (!(!a.noTag)) goto L_170;
  if (!(a.defaultTags)) goto L_123;
  this.autoTag();
  if (!(a.tag)) goto L_170;
  return this.makeTag();
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  this.history = [];
  this.redo = false;
  this.refUpdate = false;
  this.clearTag();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=108B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_d;
  t;
  t = 0;
  t#1 = 0;
  this.resetTag();
  this.allCounter = t;
  this.counter = t;
  this.allLabels = {};
  this.allIds = {};
  this.label = "";
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=302B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: a, this
// closure: TagInfo
function {
  this = this;
  let a;
  this.history = [];
  this.stack = [];
  this.clearTag();
  this.currentTag = new TagInfo("", undefined, undefined);
  this.labels = {};
  this.ids = {};
  this.counter = this.allCounter;
  this.redo = false;
  a = t.inputData.recompile;
  if (!(a)) goto L_12d;
  this.refUpdate = true;
  this.counter = a.counter;
  a.counter;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=474B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: this
function {
  this = this;
  if (!(this.redo)) goto L_a9;
  t.inputData.recompile = {state: t.state(), counter: this.allCounter};
  {state: t.state(), counter: this.allCounter};
  if ((this.refUpdate)) goto L_fd;
  this.allCounter = this.counter;
  this.counter;
  Object.assign(this.allIds, this.ids);
  Object.assign(this.allLabels, this.labels);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=270B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
// locals: s, this
function {
  this = this;
  let s;
  if ((!a.display)) goto L_bb;
  if ((this.currentTag.env)) goto L_bb;
  if (!((null == this.currentTag.tag))) goto L_bf;
  return t;
  s = this.makeTag();
  return this.enTag(t, s);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=292B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this
function {
  this = this;
  if (!(this.configuration.options.useLabelIds)) goto L_d0;
  if ((this.label)) goto L_117;
  this.currentTag.tagId = this.formatId(this.currentTag.tag);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=53B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
function {
  if (!(t)) goto L_33;
  return "\text{".concat(t, "}");
  return "";
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=1020B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: a, s, e, this
// closure: Label, t
function {
  this = this;
  let e;
  let s;
  let a;
  this.makeId();
  if (!(this.label)) goto L_139;
  this.labels[this.label] = new Label(this.currentTag.tag, this.currentTag.tagId);
  this.label = "";
  "";
  a = this.currentTag.tagFormat;
  if (!(Array.isArray(a))) goto L_1b1;
  goto L_214;
  // [栈深重同步 1 -> 0]
  if (!((a.match(new RegExp("^(\\(|\\[|\\{)(.*)(\\}|\\]|\\))$")) == null))) goto L_1e5;
  a.match(new RegExp("^(\\(|\\[|\\{)(.*)(\\}|\\]|\\))$"));
  goto L_20a;
  if ((undefined.slice(1))) goto L_214;
  s = [a];
  e = new t.default(s.map(function <atom:0>).join(""), {}, this.configuration).mml();
  return this.configuration.nodeFactory.create("node", "mtd", [e], {id: this.currentTag.tagId, rowalign: this.configuration.options.tagAlign});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=math_jax/src/mathjax_src/input/tex/Tags
function {
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=89B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.currentTag.tag)) goto L_57;
  return super["getTag"].call(this);
  return null;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/Tags
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

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
function {
  return t.taggable;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=201B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, a
// locals: s, this
function {
  this = this;
  let s;
  if ((!a.display)) goto L_74;
  if (!(this.history.find(function <atom:0>))) goto L_78;
  return t;
  s = this.getTag(true);
  return this.enTag(t, s);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/Tags
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

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t, s
// closure: a
function {
  a.set(t, s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=135B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: a
// closure: exports
function {
  let a;
  for (const a of Object.keys(t)) {
    exports.TagsFactory.add(a, t[a]);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=116B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// locals: e
// closure: a, s
function {
  let e;
  if ((a.get(t))) goto L_59;
  e = a.get(s);
  if (!(!e)) goto L_6c;
  throw Error("Unknown tags class");
  return new e();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=math_jax/src/mathjax_src/input/tex/Tags
// args: t
// closure: s
function {
  s = t;
  t;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/Tags
// closure: exports, s
function {
  return exports.TagsFactory.create(s);   // tail call
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=36 bc=715B file=math_jax/src/mathjax_src/input/tex/Tags
// args: require, module, exports
// locals: t, Label, <class_fields_init>, Label#1, TagInfo, <class_fields_init>#1, TagInfo#1, AbstractTags, <class_fields_init>#2, AbstractTags#1, NoTags, <class_fields_init>#3, NoTags#1, AllTags, <class_fields_init>#4, AllTags#1, a, s
function {
  let s;
  let a;
  let AllTags#1;
  let NoTags#1;
  let AbstractTags#1;
  let TagInfo#1;
  let Label#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Label = undefined;
  exports.TagInfo = undefined;
  exports.AbstractTags = undefined;
  exports.NoTags = undefined;
  exports.AllTags = undefined;
  exports.TagsFactory = undefined;
  t = require("./TexParser");
  let Label;
  let <class_fields_init>;
  class Label extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:Label>;
  Label = function <atom:0>;
  // close_loc <class_fields_init>
  Label#1 = function <atom:0>;
  exports.Label = Label#1;
  let TagInfo;
  let <class_fields_init>#1;
  class TagInfo extends undefined { ... }
  <class_fields_init>#1 = undefined;
  <proto:TagInfo>;
  TagInfo = function <atom:0>;
  // close_loc <class_fields_init>#1
  TagInfo#1 = function <atom:0>;
  exports.TagInfo = TagInfo#1;
  let AbstractTags;
  let <class_fields_init>#2;
  class AbstractTags extends undefined { ... }
  <proto:AbstractTags>.start = function <atom:0>;
  <proto:AbstractTags>.env = function <atom:0>;
  <proto:AbstractTags>.end = function <atom:0>;
  <proto:AbstractTags>.tag = function <atom:0>;
  <proto:AbstractTags>.notag = function <atom:0>;
  <proto:AbstractTags>.noTag = function <atom:0>;
  <proto:AbstractTags>.label = function <atom:0>;
  <proto:AbstractTags>.label = function <atom:0>;
  <proto:AbstractTags>.formatUrl = function <atom:0>;
  <proto:AbstractTags>.formatTag = function <atom:0>;
  <proto:AbstractTags>.formatRef = function <atom:0>;
  <proto:AbstractTags>.formatId = function <atom:0>;
  <proto:AbstractTags>.formatNumber = function <atom:0>;
  <proto:AbstractTags>.autoTag = function <atom:0>;
  <proto:AbstractTags>.clearTag = function <atom:0>;
  <proto:AbstractTags>.getTag = function <atom:0>;
  <proto:AbstractTags>.resetTag = function <atom:0>;
  <proto:AbstractTags>.reset = function <atom:0>;
  <proto:AbstractTags>.startEquation = function <atom:0>;
  <proto:AbstractTags>.finishEquation = function <atom:0>;
  <proto:AbstractTags>.finalize = function <atom:0>;
  <proto:AbstractTags>.makeId = function <atom:0>;
  <proto:AbstractTags>.makeTag = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:AbstractTags>;
  AbstractTags = function <atom:0>;
  // close_loc <class_fields_init>#2
  AbstractTags#1 = function <atom:0>;
  exports.AbstractTags = AbstractTags#1;
  let NoTags;
  let <class_fields_init>#3;
  class NoTags extends AbstractTags#1 { ... }
  <proto:NoTags>.autoTag = function <atom:0>;
  <proto:NoTags>.getTag = function <atom:0>;
  <class_fields_init>#3 = undefined;
  <proto:NoTags>;
  NoTags = function <atom:0>;
  // close_loc <class_fields_init>#3
  NoTags#1 = function <atom:0>;
  exports.NoTags = NoTags#1;
  let AllTags;
  let <class_fields_init>#4;
  class AllTags extends AbstractTags#1 { ... }
  <proto:AllTags>.finalize = function <atom:0>;
  <class_fields_init>#4 = undefined;
  <proto:AllTags>;
  AllTags = function <atom:0>;
  // close_loc <class_fields_init>#4
  AllTags#1 = function <atom:0>;
  exports.AllTags = AllTags#1;
  a = new Map([["none", NoTags#1], ["all", AllTags#1]]);
  s = "none";
  exports.TagsFactory = {OPTIONS: {tags: s, tagSide: "right", tagIndent: "0.8em", useLabelIds: true, ignoreDuplicateLabels: false, tagAlign: "baseline"}, add: function <atom:0>, addTags: function <atom:0>, create: function <atom:0>, setDefault: function <atom:0>, getDefault: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/Tags
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
