// fn n  args=1 vars=9 closure=4 cpool=0 bc=962B file=dil_widgets/src/DILRenderOutputInspection
// args: n
// locals: o, t, u, s, c, n#1, a, t#1
// closure: r, t, i, e
function {
  let c;
  let s;
  let u;
  let o;
  o = n.frame;
  if ((!Number.isFinite(o.width))) goto L_126;
  if (((o.width <= 0))) goto L_126;
  if ((!Number.isFinite(o.height))) goto L_126;
  if (!((o.height < 0))) goto L_129;
  return;
  let t;
  t = n;
  if (!((undefined !== t))) goto L_168;
  if (!(r(t))) goto L_13d;
  return;
  t = t.parent;
  t.parent;
  goto L_12e;
  u = [n];
  s = 0;
  c = false;
  if (!((u.length > 0))) goto L_331;
  let a;
  let n#1;
  n#1 = u.pop();
  if (((undefined === n#1))) goto L_331;
  s = (s + 1);
  (s + 1);
  if (!((s > t))) goto L_1cb;
  return;
  if (!(r(n#1))) goto L_1db;
  c = true;
  true;
  goto L_173;
  if (!(i(n#1))) goto L_2bb;
  if (!((0 === o.height))) goto L_232;
  goto L_254;
  // [栈深重同步 2 -> 1]
  return {status: e.Content, width: o.width, height: o.height, hasContent: true, inspectedElementCount: s};
  a = n#1.children;
  let t#1;
  t#1 = (a.length - 1);
  if (!((t#1 >= 0))) goto L_173;
  u.push(a[t#1]);
  t#1 = (t#1 - 1);
  (t#1 - 1);
  goto L_2ec;
  if (!(c)) goto L_338;
  return undefined;
  return {status: e.Empty, width: o.width, height: o.height, hasContent: false, inspectedElementCount: s};
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=29B file=dil_widgets/src/DILRenderOutputInspection
// args: t
// closure: s
function {
  if ((("none" === s(t, "display")))) goto L_1c;
  return (0 === s(t, "opacity"));
}

// fn i  args=1 vars=1 closure=3 cpool=0 bc=141B file=dil_widgets/src/DILRenderOutputInspection
// args: t
// closure: u, s, o
function {
  if (!((t.tag === "label"))) goto L_3d;
  if ((u(s(t, "value")))) goto L_3c;
  return o(t);
  if (!((t.tag === "image"))) goto L_58;
  if (((undefined !== s(t, "src")))) goto L_57;
  return o(t);
  if (((t.tag === "layout"))) goto L_85;
  if (((t.tag === "view"))) goto L_85;
  if (((t.tag === "scroll"))) goto L_85;
  if (((t.tag === "textselectiongroup"))) goto L_85;
  if (!((t.tag === "textanimationgroup"))) goto L_8a;
  return o(t);   // tail call
  return true;
}

// fn o  args=1 vars=3 closure=1 cpool=0 bc=94B file=dil_widgets/src/DILRenderOutputInspection
// args: t
// locals: e, n
// closure: s
function {
  let n;
  let e;
  e = s(t, "backgroundColor");
  n = s(t, "borderWidth");
  if (!((undefined !== e))) goto L_2a;
  if ((("transparent" !== e))) goto L_5d;
  if (((undefined !== s(t, "background")))) goto L_5d;
  if (!(("number" == typeof n))) goto L_4f;
  if (((n > 0))) goto L_5d;
  return (undefined !== s(t, "boxShadow"));
}

// fn u  args=1 vars=4 closure=0 cpool=0 bc=249B file=dil_widgets/src/DILRenderOutputInspection
// args: t
// locals: e, n, r
function {
  if (!(("string" == typeof t))) goto L_33;
  return (t.trim().length > 0);
  if (!(!Array.isArray(t))) goto L_64;
  return (null != t);
  let e;
  e = 0;
  if (!((e < t.length))) goto L_f6;
  let r;
  let n;
  n = t[e];
  if (((2 === n))) goto L_e9;
  e = (e ++);
  r = t[(e ++)];
  if (!((1 === n))) goto L_d4;
  if (!(("string" == typeof r))) goto L_d4;
  if (!((r.trim().length > 0))) goto L_d4;
  return true;
  if (((12 === n))) goto L_e4;
  if (!((17 === n))) goto L_e9;
  return true;
  e = (e + 1);
  (e + 1);
  goto L_69;
  return false;
}

// fn s  args=2 vars=4 closure=0 cpool=0 bc=145B file=dil_widgets/src/DILRenderOutputInspection
// args: t, e
// locals: n, r
function {
  let r;
  let n;
  n = t.getAttribute(e);
  if (!((undefined !== n))) goto L_38;
  return n;
  r = t.getAttribute("style");
  if (!((r == null))) goto L_6d;
  r;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.attributes[e];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_widgets/src/DILRenderOutputInspection
// args: t
function {
  t.Content = "content";
  t.ZeroHeight = "zero_height";
  t.Empty = "empty_content";
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=142B file=dil_widgets/src/DILRenderOutputInspection
// args: require, module, exports
// locals: t, e, n, r, i, o, u, s
function {
  n = function n;
  r = function r;
  i = function i;
  o = function o;
  u = function u;
  s = function s;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderOutputStatus = undefined;
  exports.inspectDILRenderOutput = undefined;
  t = 1000;
  if ((e)) goto L_7f;
  e = {};
  exports.DILRenderOutputStatus = {};
  !function <atom:0>({});
  exports.inspectDILRenderOutput = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILRenderOutputInspection
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
