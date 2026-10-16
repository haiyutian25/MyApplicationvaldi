// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=coreutils/src/ByteBuffer
// locals: this
function {
  this = this;
  return this._inner.subarray(0, this._size);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=coreutils/src/ByteBuffer
// locals: this
function {
  this = this;
  return this._size;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=coreutils/src/ByteBuffer
// locals: this
function {
  this = this;
  return this._inner.length;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=59B file=coreutils/src/ByteBuffer
// args: t
// locals: t#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = 0;
  t#1 = 0;
  this._size = 0;
  this._inner = new Uint8Array(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=246B file=coreutils/src/ByteBuffer
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = (this._size + t.length);
  if (!((e > this.capacity))) goto L_7d;
  this.grow(e);
  this._inner.set(t, this._size);
  this._size = e;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=204B file=coreutils/src/ByteBuffer
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  if (!((0 === this.capacity))) goto L_31;
  goto L_53;
  // [栈深重同步 1 -> 0]
  e = this.capacity;
  if (!((e < t))) goto L_67;
  e = (e * 2);
  (e * 2);
  goto L_54;
  i = new Uint8Array(e);
  i.set(this.inner);
  this._inner = i;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=6 bc=147B file=coreutils/src/ByteBuffer
// args: require, module, exports
// locals: ByteBuffer, <class_fields_init>, ByteBuffer#1
function {
  let ByteBuffer#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ByteBuffer = undefined;
  let ByteBuffer;
  let <class_fields_init>;
  class ByteBuffer extends undefined { ... }
  <proto:ByteBuffer>.inner = function <atom:0>;
  <proto:ByteBuffer>.size = function <atom:0>;
  <proto:ByteBuffer>.capacity = function <atom:0>;
  <proto:ByteBuffer>.appendData = function <atom:0>;
  <proto:ByteBuffer>.grow = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ByteBuffer>;
  ByteBuffer = function <atom:0>;
  // close_loc <class_fields_init>
  ByteBuffer#1 = function <atom:0>;
  exports.ByteBuffer = ByteBuffer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/ByteBuffer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
