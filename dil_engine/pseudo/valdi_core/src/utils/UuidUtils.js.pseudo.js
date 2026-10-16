// fn t  args=1 vars=3 closure=1 cpool=0 bc=100B file=valdi_core/src/utils/UuidUtils
// args: t
// locals: r, o
// closure: e
function {
  let r;
  r = "";
  let o;
  o = 0;
  if (!((o < 16))) goto L_60;
  if (!((4 !== o))) goto L_34;
  if (!((6 !== o))) goto L_34;
  if (!((8 !== o))) goto L_34;
  if (((10 !== o))) goto L_45;
  r = (r + "-");
  (r + "-");
  r = (r + e(t[o]));
  (r + e(t[o]));
  o = <o_new>;
  (o++);
  goto L_a;
  return r;
}

// fn e  args=1 vars=2 closure=0 cpool=1 bc=62B file=valdi_core/src/utils/UuidUtils
// args: t
// locals: e
function {
  let e;
  e = t.toString(16);
  if (!((e.length < 2))) goto L_3a;
  return ("0" + e);
  return e;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=94B file=valdi_core/src/utils/UuidUtils
// args: e, r
// closure: t
function {
  // append([], 0, r.toBytes())
  // append([], r.toBytes(), e.toBytes())
  e.toBytes();
  return t(new Uint8Array([]));   // tail call
}

// fn o  args=1 vars=8 closure=0 cpool=0 bc=452B file=valdi_core/src/utils/UuidUtils
// args: t
// locals: e, r, o, n, e#1, n#1, r#1
function {
  let o;
  let r;
  let e;
  e = [8];
  r = [8];
  o = 0;
  let n;
  n = 0;
  if (!((n < 8))) goto L_bb;
  let e#1;
  e#1 = t.slice(o, (o + 2));
  r[n] = Number.parseInt(e#1, 16);
  o = (o + 2);
  (o + 2);
  if (!(("-" === t[o]))) goto L_af;
  o = <o_new>;
  (o++);
  n = <n_new>;
  (n++);
  goto L_1c;
  let n#1;
  n#1 = 0;
  if (!((n#1 < 8))) goto L_160;
  let r#1;
  r#1 = t.slice(o, (o + 2));
  e[n#1] = Number.parseInt(r#1, 16);
  o = (o + 2);
  (o + 2);
  if (!(("-" === t[o]))) goto L_154;
  o = <o_new>;
  (o++);
  n#1 = <n#1_new>;
  (n#1++);
  goto L_c1;
  return {highBits: Long.fromBytes(r), lowBits: Long.fromBytes(e)};
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=135B file=valdi_core/src/utils/UuidUtils
// args: require, module, exports
// locals: t, e, r, o
function {
  t = function t;
  e = function e;
  r = function r;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.uuidBytesToString = undefined;
  exports.uuidToString = undefined;
  exports.stringToUUID = undefined;
  exports.uuidBytesToString = t;
  exports.uuidToString = r;
  exports.stringToUUID = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/UuidUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
