// fn t  args=1 vars=13 closure=2 cpool=8 bc=896B file=svg/src/readSvgSourceSize
// args: t
// locals: r, i, n, o, u, c, d, l, f, x, e, t#1
// closure: e, s
function {
  let x;
  let f;
  let l;
  let d;
  let c;
  let u;
  let o;
  let n;
  let i;
  let r;
  r = new e.TextDecoder();
  i = t.byteOffset;
  n = r.decode(t.buffer.slice(i, (i + Math.min(t.byteLength, 256))));
  if (!(!new RegExp("^\\uFEFF?\\s*(?:<\\?xml\\s[^?]*\\?>\\s*)?<svg(?:\\s|\\/?>)").test(n))) goto L_15d;
  return;
  o = r.decode(t.buffer.slice(i, (i + t.byteLength)));
  if (!(new RegExp("&|<!|<\\?(?!xml\\s)|<(?:[\\w.-]+:)?(?:style|animate\\w*|set)\\b").test(o))) goto L_223;
  return;
  u = new RegExp("^\\uFEFF?\\s*(?:<\\?xml\\s[^?]*\\?>\\s*)?<svg((?:\\s+[A-Za-z_][\\w.:-]*\\s*=\\s*(?:\"[^\"<&]*\"|'[^'<&]*'))*)\\s*\\/?>").exec(o);
  if (!((null === u))) goto L_259;
  return;
  c = new RegExp("([A-Za-z_][\\w.:-]*)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)')");
  d = new Set();
  l = undefined;
  f = undefined;
  x = undefined;
  x = c.exec(u[1]);
  if (!((null !== c.exec(u[1])))) goto L_35e;
  let t#1;
  let e;
  e = x[1];
  if (!((x[2] == null))) goto L_2c7;
  x[2];
  t#1 = x[3];
  if ((d.has(e))) goto L_300;
  if (!(("style" === e))) goto L_303;
  return;
  d.add(e);
  if (!(("width" === e))) goto L_344;
  l = s(t#1);
  goto L_35a;
  // [栈深重同步 1 -> 0]
  if (!(("height" === e))) goto L_35a;
  f = s(t#1);
  s(t#1);
  goto L_274;
  if (!((undefined !== l))) goto L_37e;
  if (!((undefined !== f))) goto L_37e;
  return {width: l, height: f};
  return undefined;
}

// fn s  args=1 vars=3 closure=0 cpool=2 bc=134B file=svg/src/readSvgSourceSize
// args: e
// locals: t, s
function {
  let s;
  let t;
  t = new RegExp("^\\s*(\\+?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?)(?:px)?\\s*$").exec(e);
  if (!((null === t))) goto L_3f;
  goto L_4a;
  // [栈深重同步 1 -> 0]
  s = Number(t[1]);
  if (!(Number.isFinite(s))) goto L_84;
  if (!((s > 0))) goto L_84;
  return s;
  return undefined;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=96B file=svg/src/readSvgSourceSize
// args: require, module, exports
// locals: e, t, s
function {
  t = function t;
  s = function s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.readSvgSourceSize = undefined;
  e = require("coreutils/src/unicode/TextCoding");
  exports.readSvgSourceSize = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=svg/src/readSvgSourceSize
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
