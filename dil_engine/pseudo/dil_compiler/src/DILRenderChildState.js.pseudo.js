// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=79B file=dil_compiler/src/DILRenderChildState
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.frameCount = 0;
  this.nextIndexes = [];
  this.previousNames = [];
  this.previousPills = [];
  this.previousVariants = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=43B file=dil_compiler/src/DILRenderChildState
// args: i
// locals: this
// closure: e
function {
  this = this;
  return i.withProperty(e, this);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=215B file=dil_compiler/src/DILRenderChildState
// locals: e, this
function {
  this = this;
  let e;
  e = this.frameCount;
  this.nextIndexes[e] = 0;
  this.previousNames[e] = undefined;
  this.previousPills[e] = undefined;
  this.previousVariants[e] = undefined;
  this.frameCount = (e + 1);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=304B file=dil_compiler/src/DILRenderChildState
// locals: this
function {
  this = this;
  if (!((0 !== this.frameCount))) goto L_12f;
  this.frameCount = (this.frameCount --);
  this.previousNames[this.frameCount] = undefined;
  this.previousPills[this.frameCount] = undefined;
  this.previousVariants[this.frameCount] = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=7 closure=0 cpool=0 bc=730B file=dil_compiler/src/DILRenderChildState
// args: e
// locals: i, t, s, r, n, this
function {
  this = this;
  let n;
  let r;
  let s;
  let t;
  let i;
  i = (this.frameCount - 1);
  if (!((i < 0))) goto L_40;
  return;
  t = this.nextIndexes[i];
  s = this.previousNames[i];
  r = this.previousPills[i];
  n = this.previousVariants[i];
  this.nextIndexes[i] = (t + 1);
  if (!((e == null))) goto L_13e;
  e;
  goto L_15f;
  this.previousNames[i] = undefined.name;
  if (!((e == null))) goto L_190;
  e;
  goto L_1b1;
  this.previousPills[i] = undefined.pill;
  if (!((e == null))) goto L_1e2;
  e;
  goto L_203;
  this.previousVariants[i] = undefined.variant;
  this.pushFrame();
  if (!((e == null))) goto L_23d;
  e;
  goto L_25e;
  if (!((e == null))) goto L_26c;
  e;
  goto L_28d;
  if (!((e == null))) goto L_29b;
  e;
  goto L_2bc;
  return {index: t, name: undefined.name, pill: undefined.pill, variant: undefined.variant, previousName: s, previousPill: r, previousVariant: n};
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=59B file=dil_compiler/src/DILRenderChildState
// args: i
// locals: t
// closure: e, DILRenderChildCounter
function {
  let t;
  t = i.getProperty(e);
  if (!((t instanceof DILRenderChildCounter))) goto L_39;
  return t;
  return undefined;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=6 bc=167B file=dil_compiler/src/DILRenderChildState
// args: require, module, exports
// locals: e, DILRenderChildCounter, <class_fields_init>, DILRenderChildCounter#1
function {
  let DILRenderChildCounter#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderChildCounter = undefined;
  e = Symbol("DILRenderChildCounter");
  let DILRenderChildCounter;
  let <class_fields_init>;
  class DILRenderChildCounter extends undefined { ... }
  <proto:DILRenderChildCounter>.insertInRenderState = function <atom:0>;
  <proto:DILRenderChildCounter>.pushFrame = function <atom:0>;
  <proto:DILRenderChildCounter>.popFrame = function <atom:0>;
  <proto:DILRenderChildCounter>.beginComponent = function <atom:0>;
  function <atom:0>.fromRenderState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRenderChildCounter>;
  DILRenderChildCounter = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILRenderChildCounter
  DILRenderChildCounter#1 = function <atom:0>;
  exports.DILRenderChildCounter = DILRenderChildCounter#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILRenderChildState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
