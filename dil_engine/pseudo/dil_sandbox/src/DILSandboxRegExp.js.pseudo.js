// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=127B file=dil_sandbox/src/DILSandboxRegExp
// args: e
// locals: t, n
// closure: o, c, r
function {
  let t;
  if (((null === e))) goto L_1c;
  if (!(("object" != typeof e))) goto L_21;
  if (!(("function" != typeof e))) goto L_21;
  return false;
  t = e[Symbol.match];
  if (!((undefined !== t))) goto L_5c;
  return Boolean(t);   // tail call
  try { // catch -> L_74
  o(c, e, []);
  return (e !== r);
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_7e
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=4 closure=7 cpool=1 bc=107B file=dil_sandbox/src/DILSandboxRegExp
// args: n, u
// locals: s, new.target
// closure: o, c, r, p, t, e, i
function {
  new.target = <special_object 3>;
  let s;
  s = new.target;
  if (!((undefined === s))) goto L_44;
  if (!((undefined === u))) goto L_44;
  if (!(function <atom:0>(n))) goto L_44;
  if (!((n.constructor === p))) goto L_44;
  return n;
  if (((undefined === s))) goto L_5f;
  if (!((s === i))) goto L_66;
  goto L_69;
  // [栈深重同步 4 -> 3]
  return t(e, [n, u], s);
}

// fn e  args=1 vars=10 closure=0 cpool=1 bc=704B file=dil_sandbox/src/DILSandboxRegExp
// args: e
// locals: t, o, r, n, c, i, p, u, t#1
function {
  let p;
  let i;
  let c;
  let n;
  let r;
  let o;
  let t;
  t = Reflect.construct;
  o = Reflect.apply;
  r = e.prototype;
  if (!((Object.getOwnPropertyDescriptor(r, "source") == null))) goto L_bf;
  Object.getOwnPropertyDescriptor(r, "source");
  goto L_e0;
  n = undefined.get;
  if (!((undefined === n))) goto L_f7;
  throw new Error("Sandbox RegExp requires the native source getter.");
  c = n;
  i = function <atom:0>;
  Object.defineProperty(i, "prototype", {value: r});
  p = i.bind(undefined);
  Object.defineProperties(p, {name: {value: "RegExp", configurable: true}, length: {value: 2, configurable: true}, prototype: {value: r}});
  let u;
  for (const u of ["escape", Symbol.species]) {
    let t#1;
    if (((undefined === u))) continue;
    t#1 = Object.getOwnPropertyDescriptor(e, u);
    if (!((undefined !== t#1))) goto L_27a;
    Object.defineProperty(p, u, t#1);
  }
  Object.defineProperty(r, "constructor", {value: p});
  return p;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_sandbox/src/DILSandboxRegExp
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createSandboxRegExp = undefined;
  exports.createSandboxRegExp = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILSandboxRegExp
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
