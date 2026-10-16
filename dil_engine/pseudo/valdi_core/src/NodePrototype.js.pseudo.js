// fn <atom:0>  args=4 vars=5 closure=2 cpool=0 bc=90B file=valdi_core/src/NodePrototype
// args: t, o, r, s
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.handleFactory = undefined;
  if (!((s == null))) goto L_2f;
  s;
  e = (e ++);
  this.id = ("__node" + (e ++));
  this.tag = t;
  this.viewClass = o;
  this.attributes = r;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=1 cpool=0 bc=47B file=valdi_core/src/NodePrototype
// args: e, t, o
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e, "Deferred", t, o);
  if (!(<class_fields_init>)) goto L_29;
  <class_fields_init>.call(this);
  new new.target(e, "Deferred", t, o);
  return this;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=167B file=valdi_core/src/NodePrototype
// args: require, module, exports
// locals: e, NodePrototype, <class_fields_init>, NodePrototype#1, DeferredNodePrototype, <class_fields_init>#1, DeferredNodePrototype#1
function {
  let DeferredNodePrototype#1;
  let NodePrototype#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NodePrototype = undefined;
  exports.DeferredNodePrototype = undefined;
  e = 0;
  let NodePrototype;
  let <class_fields_init>;
  class NodePrototype extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:NodePrototype>;
  NodePrototype = function <atom:0>;
  // close_loc <class_fields_init>
  NodePrototype#1 = function <atom:0>;
  exports.NodePrototype = NodePrototype#1;
  let DeferredNodePrototype;
  let <class_fields_init>#1;
  class DeferredNodePrototype extends NodePrototype#1 { ... }
  <class_fields_init>#1 = undefined;
  <proto:DeferredNodePrototype>;
  DeferredNodePrototype = function <atom:0>;
  // close_loc <class_fields_init>#1
  DeferredNodePrototype#1 = function <atom:0>;
  exports.DeferredNodePrototype = DeferredNodePrototype#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/NodePrototype
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
