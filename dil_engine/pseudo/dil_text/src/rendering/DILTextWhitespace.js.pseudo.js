// fn s  args=3 vars=4 closure=5 cpool=0 bc=326B file=dil_text/src/rendering/DILTextWhitespace
// args: s, i, a
// locals: c
// closure: o, r, n, t, e
function {
  let c;
  if (!((0 === s.length))) goto L_b;
  return s;
  if (!((a === o.PreLine))) goto L_b9;
  if (!(r.test(s))) goto L_b9;
  goto L_e6;
  // [栈深重同步 1 -> 0]
  c = s.replace(e, " ");
  if (!(!i)) goto L_142;
  if (!(c.startsWith(" "))) goto L_142;
  return c.slice(1);
  return c;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=dil_text/src/rendering/DILTextWhitespace
// args: e
function {
  e.Normal = 0;
  e[0] = "Normal";
  e.PreLine = 1;
  e[1] = "PreLine";
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=10 bc=156B file=dil_text/src/rendering/DILTextWhitespace
// args: require, module, exports
// locals: e, t, r, n, o, s
function {
  s = function s;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTextWhitespaceMode = undefined;
  exports.normalizeDILTextWhitespace = undefined;
  e = new RegExp("[ \\t\\n\\f\\r]+");
  t = new RegExp("[ \\t\\f]+");
  r = new RegExp("[\\r\\n]");
  n = new RegExp("[ \\t\\f]*(?:\\r\\n?|\\n)[ \\t\\f]*");
  if ((o)) goto L_8c;
  o = {};
  exports.DILTextWhitespaceMode = {};
  !function <atom:0>({});
  exports.normalizeDILTextWhitespace = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextWhitespace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
