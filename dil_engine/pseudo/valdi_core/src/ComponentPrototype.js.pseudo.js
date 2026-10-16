// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_core/src/ComponentPrototype
// args: t, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.id = t;
  this.attributes = o;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=15B file=valdi_core/src/ComponentPrototype
// closure: t
function {
  t = (t ++);
  return ("__component" + (t ++));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=48B file=valdi_core/src/ComponentPrototype
// args: t
// closure: ComponentPrototype
function {
  return new ComponentPrototype(ComponentPrototype.newId(), t);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=135B file=valdi_core/src/ComponentPrototype
// args: require, module, exports
// locals: t, ComponentPrototype, <class_fields_init>, ComponentPrototype#1
function {
  let ComponentPrototype#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ComponentPrototype = undefined;
  t = 0;
  let ComponentPrototype;
  let <class_fields_init>;
  class ComponentPrototype extends undefined { ... }
  function <atom:0>.newId = function <atom:0>;
  function <atom:0>.instanceWithNewId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ComponentPrototype>;
  ComponentPrototype = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc ComponentPrototype
  ComponentPrototype#1 = function <atom:0>;
  exports.ComponentPrototype = ComponentPrototype#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ComponentPrototype
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
