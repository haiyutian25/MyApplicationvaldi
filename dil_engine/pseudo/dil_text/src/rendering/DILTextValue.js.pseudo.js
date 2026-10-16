// fn e  args=1 vars=3 closure=0 cpool=0 bc=136B file=dil_text/src/rendering/DILTextValue
// args: e
// locals: r, t
function {
  let r;
  if (!(("string" == typeof e))) goto L_f;
  return e;
  if (!(!Array.isArray(e))) goto L_3e;
  return "";
  r = "";
  let t;
  t = 0;
  if (!((t < e.length))) goto L_84;
  if (!((1 === e[t]))) goto L_79;
  if (!(("string" == typeof e[(t + 1)]))) goto L_79;
  r = (r + e[(t + 1)]);
  (r + e[(t + 1)]);
  t = <t_new>;
  (t++);
  goto L_45;
  return r;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_text/src/rendering/DILTextValue
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.stringFromDILTextValue = undefined;
  exports.stringFromDILTextValue = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextValue
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
