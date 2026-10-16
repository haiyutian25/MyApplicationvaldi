// fn t  args=2 vars=3 closure=1 cpool=0 bc=22B file=dil_core/src/DILStreamingJSONPatch
// args: e, t
// locals: r
// closure: n
function {
  let r;
  r = [];
  n(e, t, "", r);
  return r;
}

// fn n  args=4 vars=4 closure=4 cpool=0 bc=489B file=dil_core/src/DILStreamingJSONPatch
// args: t, n, p, a
// closure: e, r, i, o
function {
  if (!((t !== n))) goto L_1e8;
  if (!(("string" == typeof t))) goto L_d1;
  if (!(("string" == typeof n))) goto L_d1;
  if (!(n.startsWith(t))) goto L_d1;
  goto L_1e8;
  // [栈深重同步 1 -> 0]
  if (!(Array.isArray(t))) goto L_134;
  if (!(Array.isArray(n))) goto L_134;
  goto L_1e8;
  // [栈深重同步 1 -> 0]
  if (!(i(t))) goto L_18f;
  if (!(i(n))) goto L_18f;
  if (!((t.type === n.type))) goto L_18f;
  goto L_1e8;
  // [栈深重同步 1 -> 0]
  a.push({o: e.Replace, p: p, v: n});
  return;
}

// fn r  args=4 vars=8 closure=3 cpool=0 bc=352B file=dil_core/src/DILStreamingJSONPatch
// args: t, r, o, i
// locals: a, e, n, n#1
// closure: n, p, e
function {
  let a;
  a = Math.min(t.length, r.length);
  let e;
  e = 0;
  if (!((e < a))) goto L_65;
  n(t[e], r[e], p(o, String(e)), i);
  e = <e_new>;
  (e++);
  goto L_36;
  let n;
  n = (t.length - 1);
  if (!((n >= r.length))) goto L_de;
  i.push({o: e.Remove, p: p(o, String(n))});
  n = <n_new>;
  (n--);
  goto L_6d;
  let n#1;
  n#1 = t.length;
  if (!((n#1 < r.length))) goto L_15f;
  i.push({o: e.Add, p: p(o, String(n#1)), v: r[n#1]});
  n#1 = <n#1_new>;
  (n#1++);
  goto L_e4;
  return;
}

// fn o  args=4 vars=8 closure=3 cpool=0 bc=270B file=dil_core/src/DILStreamingJSONPatch
// args: t, r, o, i
// locals: n, a, s, c
// closure: e, p, n
function {
  let n;
  for (const n of t) {
    if (!((undefined === r[n]))) goto L_6b;
    i.push({o: e.Remove, p: p(o, n)});
  }
  <catch>;
  let a;
  for (const a of r) {
    let c;
    let s;
    s = t[a];
    c = p(o, a);
    if (!((undefined === s))) goto L_f5;
    goto L_105;
    // [栈深重同步 4 -> 3]
    n(s, r[a], c, i);
    // [栈深重同步 3 -> 5]
  }
  return;
}

// fn p  args=2 vars=3 closure=0 cpool=4 bc=154B file=dil_core/src/DILStreamingJSONPatch
// args: e, t
// locals: n
function {
  let n;
  n = t.replace(new RegExp("~"), "~0").replace(new RegExp("\\/"), "~1");
  if (!((0 === e.length))) goto L_6b;
  return n;
  return "".concat(e, "/", n);
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_core/src/DILStreamingJSONPatch
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_core/src/DILStreamingJSONPatch
// args: e
function {
  e.Add = "add";
  e.Append = "append";
  e.Remove = "remove";
  e.Replace = "replace";
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=7 bc=133B file=dil_core/src/DILStreamingJSONPatch
// args: require, module, exports
// locals: e, t, n, r, o, p, i
function {
  t = function t;
  n = function n;
  r = function r;
  o = function o;
  p = function p;
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILStreamingJSONPatchOperationKind = undefined;
  exports.makeDILStreamingJSONPatch = undefined;
  if ((e)) goto L_77;
  e = {};
  exports.DILStreamingJSONPatchOperationKind = {};
  function <atom:0>({});
  exports.makeDILStreamingJSONPatch = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILStreamingJSONPatch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
