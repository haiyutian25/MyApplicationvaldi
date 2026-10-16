// fn t  args=1 vars=1 closure=0 cpool=0 bc=58B file=coreutils/src/LRUCache
// args: t
function {
  if (!((t < 0))) goto L_39;
  throw new Error("Invalid maxSize ".concat(t));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=coreutils/src/LRUCache
// locals: this
function {
  this = this;
  return this.entryById.size;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=50B file=coreutils/src/LRUCache
// args: e
// locals: this
// closure: <class_fields_init>, t
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.entryById = new Map();
  t(e);
  this.maxSize = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=96B file=coreutils/src/LRUCache
// args: e
// locals: this
// closure: t
function {
  this = this;
  t(e);
  if (!((this.maxSize !== e))) goto L_5f;
  this.maxSize = e;
  this.trimToMaxSize(e);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=202B file=coreutils/src/LRUCache
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.entryById.get(t);
  if (!(e)) goto L_c9;
  this.removeEntryFromList(e);
  this.pushEntryInList(e);
  return e.item;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=517B file=coreutils/src/LRUCache
// args: t, e
// locals: i, s, this
function {
  this = this;
  let s;
  let i;
  i = false;
  s = this.entryById.get(t);
  if (!(s)) goto L_b9;
  s.item = e;
  this.removeEntryFromList(s);
  goto L_1b5;
  // [栈深重同步 1 -> 0]
  s = {key: t, item: e, previous: undefined, next: undefined};
  {key: t, item: e, previous: undefined, next: undefined};
  this.entryById.set(t, s);
  i = (this.entryById.size > this.maxSize);
  (this.entryById.size > this.maxSize);
  this.pushEntryInList(s);
  if (!(i)) goto L_204;
  this.trimToMaxSize(this.maxSize);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=coreutils/src/LRUCache
// args: t
// locals: this
function {
  this = this;
  return this.entryById.has(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=130B file=coreutils/src/LRUCache
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.entryById.get(t);
  if (!(!!e)) goto L_81;
  this.removeEntry(e);
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=41B file=coreutils/src/LRUCache
// locals: this
function {
  this = this;
  this.trimToMaxSize(0);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=175B file=coreutils/src/LRUCache
// locals: t, e, this
function {
  this = this;
  let e;
  let t;
  t = [];
  e = this.head;
  if (!(e)) goto L_ab;
  t.push(e.item);
  e = e.next;
  e.next;
  goto L_2f;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=156B file=coreutils/src/LRUCache
// args: t
// locals: t#1, this
function {
  this = this;
  if (!((this.entryById.size > t))) goto L_9b;
  let t#1;
  t#1 = this.tail;
  this.removeEntry(t#1);
  goto L_2;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=326B file=coreutils/src/LRUCache
// args: t
// locals: this
function {
  this = this;
  this.entryById.delete(t.key);
  this.removeEntryFromList(t);
  if (!(this.listener)) goto L_145;
  this.listener.onItemEvicted(t.key, t.item);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=259B file=coreutils/src/LRUCache
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = t.previous;
  i = t.next;
  if (!(e)) goto L_65;
  e.next = i;
  i;
  if (!(i)) goto L_7d;
  i.previous = e;
  e;
  if (!((this.head === t))) goto L_b4;
  this.head = i;
  i;
  if (!((this.tail === t))) goto L_eb;
  this.tail = e;
  e;
  t.previous = undefined;
  t.next = undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=137B file=coreutils/src/LRUCache
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = this.head;
  if (!(e)) goto L_3d;
  e.previous = t;
  t;
  t.next = e;
  this.head = t;
  if ((this.tail)) goto L_88;
  this.tail = t;
  t;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=14 bc=206B file=coreutils/src/LRUCache
// args: require, module, exports
// locals: t, LRUCache, <class_fields_init>, LRUCache#1
function {
  t = function t;
  let LRUCache#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LRUCache = undefined;
  let LRUCache;
  let <class_fields_init>;
  class LRUCache extends undefined { ... }
  <proto:LRUCache>.size = function <atom:0>;
  <proto:LRUCache>.setMaxSize = function <atom:0>;
  <proto:LRUCache>.get = function <atom:0>;
  <proto:LRUCache>.insert = function <atom:0>;
  <proto:LRUCache>.has = function <atom:0>;
  <proto:LRUCache>.remove = function <atom:0>;
  <proto:LRUCache>.clear = function <atom:0>;
  <proto:LRUCache>.all = function <atom:0>;
  <proto:LRUCache>.trimToMaxSize = function <atom:0>;
  <proto:LRUCache>.removeEntry = function <atom:0>;
  <proto:LRUCache>.removeEntryFromList = function <atom:0>;
  <proto:LRUCache>.pushEntryInList = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:LRUCache>;
  LRUCache = function <atom:0>;
  // close_loc <class_fields_init>
  LRUCache#1 = function <atom:0>;
  exports.LRUCache = LRUCache#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/LRUCache
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
