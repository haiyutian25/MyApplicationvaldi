// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=263B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: s
// locals: s#1, i, this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s#1;
  if (!((s === undefined))) goto L_1a;
  s;
  s = null;
  s#1 = null;
  let i;
  i = this.constructor;
  this.options = t.userOptions(t.defaultOptions({}, i.OPTIONS), s);
  this.init();
  this.getPatterns();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=66B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// locals: this
function {
  this = this;
  this.strings = [];
  this.string = "";
  this.snodes = [];
  this.nodes = [];
  this.stack = [];
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=516B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// locals: s, i, n, this
// closure: t
function {
  this = this;
  let n;
  let i;
  let s;
  s = t.makeArray(this.options.skipHtmlTags);
  i = t.makeArray(this.options.ignoreHtmlClass);
  n = t.makeArray(this.options.processHtmlClass);
  this.skipHtmlTags = new RegExp((("^(?:" + s.join("|")) + ")$"), "i");
  this.ignoreHtmlClass = new RegExp((("(?:^| )(?:" + i.join("|")) + ")(?: |$)"));
  this.processHtmlClass = new RegExp((("(?:^| )(?:" + n) + ")(?: |$)"));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=2 bc=319B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// locals: this
function {
  this = this;
  if (!(this.string.match(new RegExp("\\S")))) goto L_125;
  this.strings.push(this.string);
  this.nodes.push(this.snodes);
  this.string = "";
  this.snodes = [];
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=125B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t, s
// locals: this
function {
  this = this;
  this.snodes.push([t, s.length]);
  this.string = (this.string + s);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=188B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t, s
// locals: this
function {
  this = this;
  if ((s)) goto L_74;
  this.extendString(t, this.adaptor.value(t));
  return this.adaptor.next(t);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=355B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t, s
// locals: s#1, this
function {
  this = this;
  if (!(!s)) goto L_11c;
  let s#1;
  s#1 = this.options.includeHtmlTags[this.adaptor.kind(t)];
  if (!((s#1 instanceof Function))) goto L_f2;
  goto L_11b;
  // [栈深重同步 1 -> 0]
  this.extendString(t, s#1);
  return this.adaptor.next(t);   // tail call
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=1018B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t, s
// locals: i, n, e, r, this
function {
  this = this;
  let r;
  let e;
  let n;
  let i;
  this.pushString();
  if ((this.adaptor.getAttribute(t, "class"))) goto L_88;
  i = "";
  if ((this.adaptor.kind(t))) goto L_d6;
  n = "";
  e = this.processHtmlClass.exec(i);
  r = t;
  if ((!this.adaptor.firstChild(t))) goto L_218;
  if ((this.adaptor.getAttribute(t, "data-MJX"))) goto L_218;
  if (!(!e)) goto L_269;
  if (!(this.skipHtmlTags.exec(n))) goto L_269;
  r = this.adaptor.next(t);
  goto L_3f1;
  // [栈深重同步 1 -> 0]
  if (!(this.adaptor.next(t))) goto L_34b;
  this.stack.push([this.adaptor.next(t), s]);
  r = this.adaptor.firstChild(t);
  this.adaptor.firstChild(t);
  if ((s)) goto L_3e8;
  if (!(this.ignoreHtmlClass.exec(i))) goto L_3f0;
  s = !e;
  !e;
  return [r, s];
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=111B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t, s
// locals: this
function {
  this = this;
  this.pushString();
  return this.adaptor.next(t);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=918B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: t
// locals: s, i, n, s#1, e, this
function {
  this = this;
  let e;
  let n;
  let i;
  let s;
  this.init();
  s = this.adaptor.next(t);
  i = false;
  n = this.options.includeHtmlTags;
  if (!(t)) goto L_2f9;
  if (!((t !== s))) goto L_2f9;
  let s#1;
  s#1 = this.adaptor.kind(t);
  if (!(("#text" === s#1))) goto L_15c;
  t = this.handleText(t, i);
  goto L_233;
  // [栈深重同步 1 -> 0]
  if (!(Object.hasOwn(n, s#1))) goto L_1ba;
  t = this.handleTag(t, i);
  goto L_233;
  // [栈深重同步 1 -> 0]
  if (!(s#1)) goto L_208;
  goto L_1dc;
  const _it1 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_arg_ref#0>, <make_arg_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_233;
  // [栈深重同步 4 -> 0]
  goto L_1c1;
  // [栈深重同步 1 -> 0]
  t = this.handleOther(t, i);
  this.handleOther(t, i);
  if (!(!t)) goto L_2f5;
  if (!(this.stack.length)) goto L_2f5;
  this.pushString();
  goto L_2ac;
  const _it2 = <?>;
  <done(<catch>)>;
  // put_ref_value(<make_arg_ref#0>, <make_arg_ref#1>, <value(<catch>)>)
  <done(<catch>)>;
  // put_ref_value(<make_loc_ref#0>, <make_loc_ref#1>, <value(<catch>)>)
  goto L_2f5;
  // [栈深重同步 4 -> 0]
  goto L_291;
  this.stack.pop();
  goto L_c7;
  this.pushString();
  e = [this.strings, this.nodes];
  this.init();
  return e;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=10 bc=346B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// args: require, module, exports
// locals: t, HTMLDomStrings, <class_fields_init>, HTMLDomStrings#1
function {
  let HTMLDomStrings#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HTMLDomStrings = undefined;
  t = require("../../util/Options");
  let HTMLDomStrings;
  let <class_fields_init>;
  class HTMLDomStrings extends undefined { ... }
  <proto:HTMLDomStrings>.init = function <atom:0>;
  <proto:HTMLDomStrings>.getPatterns = function <atom:0>;
  <proto:HTMLDomStrings>.pushString = function <atom:0>;
  <proto:HTMLDomStrings>.extendString = function <atom:0>;
  <proto:HTMLDomStrings>.handleText = function <atom:0>;
  <proto:HTMLDomStrings>.handleTag = function <atom:0>;
  <proto:HTMLDomStrings>.handleContainer = function <atom:0>;
  <proto:HTMLDomStrings>.handleOther = function <atom:0>;
  <proto:HTMLDomStrings>.find = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HTMLDomStrings>;
  HTMLDomStrings = function <atom:0>;
  // close_loc <class_fields_init>
  HTMLDomStrings#1 = function <atom:0>;
  exports.HTMLDomStrings = HTMLDomStrings#1;
  HTMLDomStrings#1.OPTIONS = {skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "math", "select", "option", "mjx-container"], includeHtmlTags: t.expandable({br: "
", wbr: "", #comment: ""}), ignoreHtmlClass: "mathjax_ignore", processHtmlClass: "mathjax_process"};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/handlers/html/HTMLDomStrings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
