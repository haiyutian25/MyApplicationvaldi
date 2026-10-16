// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=60B file=dil_text/src/rendering/DILAttributedTextBuilder
// args: t, e, i, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.href = t;
  this.title = e;
  this.action = i;
  this.interaction = r;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=132B file=dil_text/src/rendering/DILAttributedTextBuilder
// args: t
// locals: this, <home_object>
// closure: DILTextLink, e
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((t instanceof DILTextLink))) goto L_76;
  return e.makeDILTextActionTap(t.action, t.interaction);
  return super["makeLinkTap"].call(this, t);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_text/src/rendering/DILAttributedTextBuilder
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=3 bc=226B file=dil_text/src/rendering/DILAttributedTextBuilder
// args: require, module, exports
// locals: t, e, DILTextLink, <class_fields_init>, DILTextLink#1, DILAttributedTextBuilder, <class_fields_init>#1, DILAttributedTextBuilder#1
function {
  let DILAttributedTextBuilder#1;
  let DILTextLink#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextLink = undefined;
  exports.DILAttributedTextBuilder = undefined;
  t = require("valdi_core/src/utils/AttributedTextBuilder");
  e = require("./DILTextActionTap");
  let DILTextLink;
  let <class_fields_init>;
  class DILTextLink extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:DILTextLink>;
  DILTextLink = function <atom:0>;
  // close_loc <class_fields_init>
  DILTextLink#1 = function <atom:0>;
  exports.DILTextLink = DILTextLink#1;
  let DILAttributedTextBuilder;
  let <class_fields_init>#1;
  class DILAttributedTextBuilder extends t.AttributedTextBuilder { ... }
  <proto:DILAttributedTextBuilder>.makeLinkTap = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILAttributedTextBuilder>;
  DILAttributedTextBuilder = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILAttributedTextBuilder#1 = function <atom:0>;
  exports.DILAttributedTextBuilder = DILAttributedTextBuilder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILAttributedTextBuilder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
