// fn a  args=1 vars=1 closure=1 cpool=0 bc=89B file=dil_widgets/src/DILSandboxDownloadURL
// args: e
// closure: t
function {
  if (!(("string" == typeof e))) goto L_58;
  return e.toLowerCase().startsWith(t);
}

// fn u  args=2 vars=6 closure=4 cpool=0 bc=214B file=dil_widgets/src/DILSandboxDownloadURL
// args: t, e
// locals: n, r, s, t#1
// closure: i, f, l, o
function {
  let r;
  let n;
  if ((("string" != typeof t))) goto L_21;
  if (((t.length > i))) goto L_21;
  if (!(!f(t, e))) goto L_24;
  return;
  n = t.slice(8);
  r = n;
  let s;
  s = 0;
  if (!((s < 4))) goto L_d5;
  let t#1;
  if (!(l(r, e))) goto L_68;
  return;
  t#1 = undefined;
  try { // catch -> L_ac
  t#1 = decodeURIComponent(r.replace(o, "%25"));
  decodeURIComponent(r.replace(o, "%25"));
  <?>;
  goto L_b6;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_b5
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((t#1 === r))) goto L_c3;
  return n;
  r = t#1;
  t#1;
  s = <s_new>;
  (s++);
  goto L_55;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_widgets/src/DILSandboxDownloadURL
// args: e
// closure: t
function {
  return t.startsWith(e);   // tail call
}

// fn f  args=2 vars=4 closure=4 cpool=1 bc=366B file=dil_widgets/src/DILSandboxDownloadURL
// args: t, e
// locals: o, i
// closure: n, d, s, r
function {
  let i;
  let o;
  if (!(!n.some(function <atom:0>))) goto L_35;
  return false;
  if (!(d(t))) goto L_3d;
  return false;
  o = t.slice((t.lastIndexOf("/") + 1));
  if (((0 === o.length))) goto L_af;
  if ((("." === o))) goto L_af;
  if (!((".." === o))) goto L_b4;
  return false;
  if (!(e)) goto L_ba;
  return true;
  i = o.lastIndexOf(".");
  if (!((-1 === i))) goto L_11a;
  return !s.test(o);
  return r.test(o.slice((i + 1)));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=19B file=dil_widgets/src/DILSandboxDownloadURL
// args: t
function {
  if ((("." === t))) goto L_12;
  return (".." === t);
}

// fn l  args=2 vars=2 closure=1 cpool=1 bc=186B file=dil_widgets/src/DILSandboxDownloadURL
// args: t, e
// closure: d
function {
  if (!(!e)) goto L_5e;
  if ((t.includes("?"))) goto L_5e;
  if ((t.includes("#"))) goto L_b9;
  if ((t.split("/").some(function <atom:0>))) goto L_b9;
  return d(t);
}

// fn d  args=1 vars=3 closure=0 cpool=0 bc=86B file=dil_widgets/src/DILSandboxDownloadURL
// args: t
// locals: e, t#1
function {
  let e;
  for (const e of t) {
    let t#1;
    t#1 = e.charCodeAt(0);
    if (((t#1 <= 31))) goto L_44;
    if (!((127 === t#1))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=11 bc=324B file=dil_widgets/src/DILSandboxDownloadURL
// args: require, module, exports
// locals: t, e, n, r, o, s, i, c, a, u, f, l, d
function {
  a = function a;
  u = function u;
  f = function f;
  l = function l;
  d = function d;
  let c;
  let i;
  let s;
  let o;
  let r;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isDILSandboxURL = undefined;
  exports.getDILSandboxDownloadPath = undefined;
  t = "sandbox:";
  e = "".concat(t, "/root/.codex/skills/remote-skills/");
  n = ["".concat(t, "/mnt/data/"), "".concat(t, "/workspace/"), e];
  r = new RegExp("^[A-Za-z0-9][A-Za-z0-9_-]{0,15}$");
  o = new RegExp("%(?![0-9a-f]{2})");
  s = new RegExp(":\\d+:(?:\\s|$)");
  i = 4096;
  c = 4;
  exports.isDILSandboxURL = a;
  exports.getDILSandboxDownloadPath = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILSandboxDownloadURL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
