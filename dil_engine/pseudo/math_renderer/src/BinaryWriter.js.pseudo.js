// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=133B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.length = 0;
  this.bytes = new Uint8Array(t);
  this.view = new DataView(this.bytes.buffer);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=123B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
function {
  this = this;
  this.reserve(1);
  this.length = <this.length_new>;
  this.bytes[(this.length++)] = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=163B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
function {
  this = this;
  this.reserve(4);
  this.view.setUint32(this.length, t, true);
  this.length = (this.length + 4);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=51B file=math_renderer/src/BinaryWriter
// locals: t, this
function {
  this = this;
  let t;
  t = this.length;
  this.writeUint32(0);
  return t;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=77B file=math_renderer/src/BinaryWriter
// args: t, e
// locals: this
function {
  this = this;
  this.view.setUint32(t, e, true);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=163B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
function {
  this = this;
  this.reserve(4);
  this.view.setInt32(this.length, t, true);
  this.length = (this.length + 4);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=165B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
function {
  this = this;
  this.reserve(8);
  this.view.setFloat64(this.length, t, true);
  this.length = (this.length + 8);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=227B file=math_renderer/src/BinaryWriter
// args: t
// locals: this
function {
  this = this;
  this.reserve(t.byteLength);
  this.bytes.set(t, this.length);
  this.length = (this.length + t.byteLength);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=496B file=math_renderer/src/BinaryWriter
// args: e
// locals: s, i, h, i#1, this
// closure: t
function {
  this = this;
  let s;
  s = this.length;
  this.writeUint32(e.length);
  this.reserve(e.length);
  let i;
  i = 0;
  if (!((i < e.length))) goto L_1ef;
  let h;
  h = e.charCodeAt(i);
  if (!((h > 127))) goto L_18e;
  let i#1;
  this.length = s;
  i#1 = t(e);
  this.writeUint32(i#1.length);
  this.reserve(i#1.length);
  this.bytes.set(i#1, this.length);
  this.length = (this.length + i#1.length);
  return;
  this.length = <this.length_new>;
  this.bytes[(this.length++)] = h;
  i = <i_new>;
  (i++);
  goto L_61;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=math_renderer/src/BinaryWriter
// locals: this
function {
  this = this;
  return this.bytes.subarray(0, this.length);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=352B file=math_renderer/src/BinaryWriter
// args: t
// locals: e, s, i, this
function {
  this = this;
  let i;
  let s;
  let e;
  e = (this.length + t);
  if (!((e <= this.bytes.length))) goto L_3a;
  return;
  s = Math.max(1, this.bytes.length);
  if (!((s < e))) goto L_9d;
  s = (s * 2);
  (s * 2);
  goto L_88;
  i = new Uint8Array(s);
  i.set(this.bytes.subarray(0, this.length));
  this.bytes = i;
  this.view = new DataView(i.buffer);
  return;
}

// fn t  args=1 vars=4 closure=0 cpool=0 bc=405B file=math_renderer/src/BinaryWriter
// args: t
// locals: e, s, t#1
function {
  let e;
  e = [];
  let s;
  for (const s of t) {
    let t#1;
    t#1 = s.codePointAt(0);
    if (!((t#1 <= 127))) goto L_71;
    goto L_15f;
    // [栈深重同步 4 -> 3]
    if (!((t#1 <= 2047))) goto L_b7;
    goto L_15f;
    // [栈深重同步 4 -> 3]
    if (!((t#1 <= 65535))) goto L_10b;
    goto L_15f;
    // [栈深重同步 4 -> 3]
    e.push((240 | (t#1 >> 18)), (128 | ((t#1 >> 12) & 63)), (128 | ((t#1 >> 6) & 63)), (128 | (63 & t#1)));
  }
  return Uint8Array.from(e);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=12 bc=190B file=math_renderer/src/BinaryWriter
// args: require, module, exports
// locals: BinaryWriter, <class_fields_init>, BinaryWriter#1, t
function {
  t = function t;
  let BinaryWriter#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BinaryWriter = undefined;
  let BinaryWriter;
  let <class_fields_init>;
  class BinaryWriter extends undefined { ... }
  <proto:BinaryWriter>.writeUint8 = function <atom:0>;
  <proto:BinaryWriter>.writeUint32 = function <atom:0>;
  <proto:BinaryWriter>.reserveUint32 = function <atom:0>;
  <proto:BinaryWriter>.updateUint32 = function <atom:0>;
  <proto:BinaryWriter>.writeInt32 = function <atom:0>;
  <proto:BinaryWriter>.writeFloat64 = function <atom:0>;
  <proto:BinaryWriter>.writeBytes = function <atom:0>;
  <proto:BinaryWriter>.writeString = function <atom:0>;
  <proto:BinaryWriter>.finish = function <atom:0>;
  <proto:BinaryWriter>.reserve = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BinaryWriter>;
  BinaryWriter = function <atom:0>;
  // close_loc <class_fields_init>
  BinaryWriter#1 = function <atom:0>;
  exports.BinaryWriter = BinaryWriter#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_renderer/src/BinaryWriter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
