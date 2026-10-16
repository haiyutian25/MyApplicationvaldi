// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=widgets/src/components/indexview/IndexViewHandler
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementRefs = new Map();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=106B file=widgets/src/components/indexview/IndexViewHandler
// args: e
// locals: this
function {
  this = this;
  return this.elementRefs.get(e.key);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=277B file=widgets/src/components/indexview/IndexViewHandler
// args: t
// locals: r, this
// closure: e
function {
  this = this;
  let r;
  r = this.elementRefs.get(t.key);
  if ((r)) goto L_110;
  r = new e.ElementRef();
  new e.ElementRef();
  this.elementRefs.set(t.key, r);
  return r;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=widgets/src/components/indexview/IndexViewHandler
// args: require, module, exports
// locals: e, IndexViewHandler, <class_fields_init>, IndexViewHandler#1
function {
  let IndexViewHandler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IndexViewHandler = undefined;
  e = require("valdi_core/src/ElementRef");
  let IndexViewHandler;
  let <class_fields_init>;
  class IndexViewHandler extends undefined { ... }
  <proto:IndexViewHandler>.getRef = function <atom:0>;
  <proto:IndexViewHandler>.getOrCreateRef = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IndexViewHandler>;
  IndexViewHandler = function <atom:0>;
  // close_loc <class_fields_init>
  IndexViewHandler#1 = function <atom:0>;
  exports.IndexViewHandler = IndexViewHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/indexview/IndexViewHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
