// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=63B file=valdi_core/src/utils/Buffer
// args: t
// locals: s, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let s;
  s = new ArrayBuffer(t);
  this.array = new DataView(s);
  this.pos = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=valdi_core/src/utils/Buffer
// locals: this
function {
  this = this;
  return this.array.buffer;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=38B file=valdi_core/src/utils/Buffer
// locals: this
function {
  this = this;
  return !this.pos;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=valdi_core/src/utils/Buffer
// locals: this
function {
  this = this;
  this.pos = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/utils/Buffer
// locals: this
function {
  this = this;
  return this.pos;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=304B file=valdi_core/src/utils/Buffer
// args: t
// locals: s, e, i, this
function {
  this = this;
  let i;
  let e;
  let s;
  s = this.array;
  if (!((t < s.byteLength))) goto L_5a;
  return s;
  e = new ArrayBuffer(Math.max((2 * s.byteLength), t));
  new Uint8Array(e).set(new Uint8Array(s.buffer));
  i = new DataView(e);
  this.array = i;
  return i;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=141B file=valdi_core/src/utils/Buffer
// args: t
// locals: s, this
function {
  this = this;
  let s;
  s = this.pos;
  this.ensureCapacity((s + 4)).setUint32(s, t, true);
  this.pos = (s + 4);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=198B file=valdi_core/src/utils/Buffer
// args: t, s
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = this.pos;
  i = this.ensureCapacity((e + 8));
  i.setUint32(e, t, true);
  i.setUint32((e + 4), s, true);
  this.pos = (e + 8);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=0 bc=247B file=valdi_core/src/utils/Buffer
// args: t, s, e
// locals: i, n, this
function {
  this = this;
  let n;
  let i;
  i = this.pos;
  n = this.ensureCapacity((i + 12));
  n.setUint32(i, t, true);
  n.setUint32((i + 4), s, true);
  n.setUint32((i + 8), e, true);
  this.pos = (i + 12);
  return;
}

// fn <atom:0>  args=4 vars=7 closure=0 cpool=0 bc=296B file=valdi_core/src/utils/Buffer
// args: t, s, e, i
// locals: n, r, this
function {
  this = this;
  let r;
  let n;
  n = this.pos;
  r = this.ensureCapacity((n + 16));
  r.setUint32(n, t, true);
  r.setUint32((n + 4), s, true);
  r.setUint32((n + 8), e, true);
  r.setUint32((n + 12), i, true);
  this.pos = (n + 16);
  return;
}

// fn <atom:0>  args=5 vars=8 closure=0 cpool=0 bc=347B file=valdi_core/src/utils/Buffer
// args: t, s, e, i, n
// locals: r, a, this
function {
  this = this;
  let a;
  let r;
  r = this.pos;
  a = this.ensureCapacity((r + 20));
  a.setUint32(r, t, true);
  a.setUint32((r + 4), s, true);
  a.setUint32((r + 8), e, true);
  a.setUint32((r + 12), i, true);
  a.setUint32((r + 16), n, true);
  this.pos = (r + 20);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=143B file=valdi_core/src/utils/Buffer
// args: t
// locals: s, this
function {
  this = this;
  let s;
  s = this.pos;
  this.ensureCapacity((s + 8)).setFloat64(s, t, true);
  this.pos = (s + 8);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=12 bc=195B file=valdi_core/src/utils/Buffer
// args: require, module, exports
// locals: Buffer, <class_fields_init>, Buffer#1
function {
  let Buffer#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Buffer = undefined;
  let Buffer;
  let <class_fields_init>;
  class Buffer extends undefined { ... }
  <proto:Buffer>.inner = function <atom:0>;
  <proto:Buffer>.empty = function <atom:0>;
  <proto:Buffer>.rewind = function <atom:0>;
  <proto:Buffer>.size = function <atom:0>;
  <proto:Buffer>.ensureCapacity = function <atom:0>;
  <proto:Buffer>.putUint32 = function <atom:0>;
  <proto:Buffer>.putUint32_2 = function <atom:0>;
  <proto:Buffer>.putUint32_3 = function <atom:0>;
  <proto:Buffer>.putUint32_4 = function <atom:0>;
  <proto:Buffer>.putUint32_5 = function <atom:0>;
  <proto:Buffer>.putFloat64 = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Buffer>;
  Buffer = function <atom:0>;
  // close_loc <class_fields_init>
  Buffer#1 = function <atom:0>;
  exports.Buffer = Buffer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/Buffer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
