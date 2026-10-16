// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=web_platform/src/FetchIterator
// args: e
function {
  e.Keys = 0;
  e[0] = "Keys";
  e.Values = 1;
  e[1] = "Values";
  e.Entries = 2;
  e[2] = "Entries";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=61B file=web_platform/src/FetchIterator
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.entries = e;
  this.kind = t;
  this.index = 0;
  this.done = false;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=446B file=web_platform/src/FetchIterator
// locals: t, r, this
// closure: e
function {
  this = this;
  let r;
  let t;
  if (!((this == null))) goto L_12;
  this;
  goto L_33;
  if (!((undefined === undefined.entries))) goto L_45;
  throw new TypeError("Incompatible iterator receiver");
  t = this.entries();
  if ((this.done)) goto L_b8;
  if (!((this.index >= t.length))) goto L_d5;
  this.done = true;
  return {done: true, value: undefined};
  this.index = <this.index_new>;
  r = t[(this.index++)];
  if (!((this.kind === e.Keys))) goto L_15d;
  goto L_1b8;
  // [栈深重同步 2 -> 1]
  if (!((this.kind === e.Values))) goto L_1ab;
  goto L_1b8;
  // [栈深重同步 2 -> 1]
  return {done: false, value: [r[0], r[1]]};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=4B file=web_platform/src/FetchIterator
// locals: this
function {
  this = this;
  return this;
}

// fn r  args=3 vars=6 closure=2 cpool=0 bc=586B file=web_platform/src/FetchIterator
// args: e, r, o
// locals: i, e#1, n
// closure: t, FetchIterator
function {
  let n;
  let i;
  i = t.get(o);
  if (!((undefined === i))) goto L_20c;
  let e#1;
  e#1 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator].call([])));
  i = Object.create(e#1);
  Object.create(e#1);
  {next: {value: FetchIterator.prototype.next, enumerable: true, writable: true, configurable: true}}[Symbol.toStringTag] = {value: "".concat(o, " Iterator"), configurable: true};
  {value: "".concat(o, " Iterator"), configurable: true};
  Object.defineProperties(i, {next: {value: FetchIterator.prototype.next, enumerable: true, writable: true, configurable: true}});
  t.set(o, i);
  n = new FetchIterator(e, r);
  Object.setPrototypeOf(n, i);
  return n;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=5 bc=207B file=web_platform/src/FetchIterator
// args: require, module, exports
// locals: e, t, FetchIterator, <class_fields_init>, FetchIterator#1, r
function {
  r = function r;
  let FetchIterator#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IteratorKind = undefined;
  exports.makeIterator = undefined;
  if ((e)) goto L_6c;
  e = {};
  exports.IteratorKind = {};
  function <atom:0>({});
  t = new Map();
  let FetchIterator;
  let <class_fields_init>;
  class FetchIterator extends undefined { ... }
  <proto:FetchIterator>.next = function <atom:0>;
  <class_fields_init> = undefined;
  define_method_computed(<proto:FetchIterator>, Symbol.iterator, function <atom:0>);
  FetchIterator = function <atom:0>;
  // close_loc <class_fields_init>
  FetchIterator#1 = function <atom:0>;
  exports.makeIterator = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchIterator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
