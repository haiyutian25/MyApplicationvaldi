// fn n  args=1 vars=3 closure=3 cpool=2 bc=403B file=dil_widgets/src/DILLink
// args: n
// locals: i, o
// closure: e, t, r
function {
  let o;
  let i;
  if (!(("string" != typeof n))) goto L_11;
  return;
  i = n.trim();
  if (!((0 === i.length))) goto L_40;
  return;
  if (!(!e.test(i))) goto L_101;
  if ((i.startsWith("//"))) goto L_cd;
  if (!(!i.includes("."))) goto L_d0;
  return;
  i = "https://".concat(i);
  "https://".concat(i);
  o = t.hostnameFromUrl(i);
  if (!(r.test(i))) goto L_191;
  if (!((0 !== o.length))) goto L_191;
  if (!(!new RegExp("\\s").test(o))) goto L_191;
  return i;
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=34B file=dil_widgets/src/DILLink
// closure: t
function {
  return {handler: "client", type: "open_url", payload: {url: t}};
}

// fn i  args=1 vars=1 closure=0 cpool=1 bc=3B file=dil_widgets/src/DILLink
// args: t
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=6 bc=138B file=dil_widgets/src/DILLink
// args: require, module, exports
// locals: t, e, r, n, i
function {
  n = function n;
  i = function i;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.normalizeDILLinkHref = undefined;
  exports.makeDILOpenURLAction = undefined;
  t = require("coreutils/src/url");
  e = new RegExp("^[a-z][a-z\\d+.-]*:");
  r = new RegExp("^https?:\\/\\/");
  exports.normalizeDILLinkHref = n;
  exports.makeDILOpenURLAction = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILLink
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
