// fn t  args=2 vars=2 closure=0 cpool=0 bc=70B file=valdi_core/src/ElementRef
// args: t, e
function {
  return (t.parentIndex - e.parentIndex);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=valdi_core/src/ElementRef
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementById = {};
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=263B file=valdi_core/src/ElementRef
// locals: e, t, s, this
// closure: t
function {
  this = this;
  let e;
  e = this._all;
  if (!(!e)) goto L_103;
  e = [];
  [];
  this._all = e;
  let t;
  for (const t of this.elementById) {
    let s;
    s = this.elementById[t];
    if (!(s)) goto L_ca;
    e.push(s);
  }
  <catch>;
  if (!((e.length > 1))) goto L_102;
  e.sort(t);
  // [栈深重同步 2 -> 0]
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=121B file=valdi_core/src/ElementRef
// locals: t, this
function {
  this = this;
  let t;
  t = this.all();
  if (!(t.length)) goto L_78;
  if (!((t.length > 1))) goto L_72;
  throw Error("Cannot get a single element from a ref which has ".concat(t.length, " elements"));
  return t[0];
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=165B file=valdi_core/src/ElementRef
// args: t
// locals: e, t#1, this
function {
  this = this;
  let e;
  e = this.elementByKey;
  if (!(!e)) goto L_9f;
  e = {};
  {};
  this.elementByKey = e;
  let t#1;
  for (const t#1 of this.all()) {
    e[t#1.key] = t#1;
  }
  return e[t];
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=183B file=valdi_core/src/ElementRef
// args: t, e
// locals: s, this
function {
  this = this;
  if ((this.attributes)) goto L_34;
  this.attributes = {};
  {};
  this.attributes[t] = e;
  let s;
  for (const s of this.all()) {
    s.setAttribute(t, e);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=76B file=valdi_core/src/ElementRef
// args: t
// locals: this
function {
  this = this;
  if (!(this.attributes)) goto L_4b;
  return this.attributes[t];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=144B file=valdi_core/src/ElementRef
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of t) {
    if ((this.elementById[e.id])) goto L_7d;
    this.onElementCreated(e);
  }
  this._all = t;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=0 cpool=0 bc=396B file=valdi_core/src/ElementRef
// args: t
// locals: e, s, t#1, i, this
function {
  this = this;
  let e;
  e = t;
  this._all = undefined;
  this.elementById[e.id] = e;
  if (!(this.attributes)) goto L_117;
  let s;
  for (const s of this.attributes) {
    let i;
    let t#1;
    t#1 = s;
    i = this.attributes[t#1];
    e.setAttribute(t#1, i);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  if (!(this.elementByKey)) goto L_18b;
  this.elementByKey[e.key] = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=200B file=valdi_core/src/ElementRef
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = t;
  this._all = undefined;
  delete e.id;
  if (!(this.elementByKey)) goto L_c7;
  // [栈深重同步 3 -> 2]
  this.elementById;
  this.elementByKey;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=10 bc=174B file=valdi_core/src/ElementRef
// args: require, module, exports
// locals: t, ElementRef, <class_fields_init>, ElementRef#1
function {
  t = function t;
  let ElementRef#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ElementRef = undefined;
  let ElementRef;
  let <class_fields_init>;
  class ElementRef extends undefined { ... }
  <proto:ElementRef>.all = function <atom:0>;
  <proto:ElementRef>.single = function <atom:0>;
  <proto:ElementRef>.getForKey = function <atom:0>;
  <proto:ElementRef>.setAttribute = function <atom:0>;
  <proto:ElementRef>.getAppliedAttribute = function <atom:0>;
  <proto:ElementRef>.setElements = function <atom:0>;
  <proto:ElementRef>.onElementCreated = function <atom:0>;
  <proto:ElementRef>.onElementDestroyed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ElementRef>;
  ElementRef = function <atom:0>;
  // close_loc <class_fields_init>
  ElementRef#1 = function <atom:0>;
  exports.ElementRef = ElementRef#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ElementRef
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
