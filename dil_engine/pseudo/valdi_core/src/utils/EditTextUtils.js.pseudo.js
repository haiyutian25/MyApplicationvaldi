// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=271B file=valdi_core/src/utils/EditTextUtils
// args: t, e
// locals: n, i, o, l, s, t#1, e#1
function {
  let s;
  let l;
  let o;
  let i;
  let n;
  n = t.text;
  i = e;
  o = t.selectionStart;
  l = t.selectionEnd;
  s = (i.length - n.length);
  if (!((0 !== s))) goto L_f5;
  let t#1;
  t#1 = 0;
  let e#1;
  e#1 = 0;
  if (!((e#1 < n.length))) goto L_c7;
  if (!((n[e#1] !== i[e#1]))) goto L_bd;
  t#1 = e#1;
  e#1;
  goto L_c7;
  e#1 = <e#1_new>;
  (e#1++);
  goto L_98;
  if (!((t#1 <= o))) goto L_dd;
  o = (o + s);
  (o + s);
  if (!((t#1 <= l))) goto L_f4;
  l = (l + s);
  (l + s);
  return {text: i, selectionStart: o, selectionEnd: l};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=13B file=valdi_core/src/utils/EditTextUtils
// args: t
function {
  t.makeUpdatedEvent = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=89B file=valdi_core/src/utils/EditTextUtils
// args: require, module, exports
// locals: t
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EditTextUtils = undefined;
  if ((t)) goto L_57;
  t = {};
  exports.EditTextUtils = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/EditTextUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
