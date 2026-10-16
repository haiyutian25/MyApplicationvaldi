// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=coreutils/src/url
// args: r
// closure: e
function {
  return (undefined !== e[r]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=coreutils/src/url
// args: r
// closure: e
function {
  return [r, e[r]].map(encodeURIComponent).join("=");   // tail call
}

// fn e  args=1 vars=1 closure=0 cpool=2 bc=159B file=coreutils/src/url
// args: e
function {
  return Object.keys(e).filter(function <atom:0>).map(function <atom:0>).join("&");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=coreutils/src/url
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=coreutils/src/url
// args: e
function {
  return e.split("=").map(decodeURIComponent);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=20B file=coreutils/src/url
// args: e, r
function {
  if (!((r.length > 1))) goto L_10;
  goto L_11;
  // [栈深重同步 3 -> 2]
  e[r[0]] = undefined;
  return e;
}

// fn r  args=1 vars=1 closure=0 cpool=3 bc=157B file=coreutils/src/url
// args: e
function {
  return e.split("&").filter(function <atom:0>).map(function <atom:0>).reduce(function <atom:0>, {});   // tail call
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=48B file=coreutils/src/url
// args: r, t
// closure: e
function {
  return [r, e(t)].join("?");   // tail call
}

// fn o  args=1 vars=2 closure=1 cpool=0 bc=70B file=coreutils/src/url
// args: e
// locals: t
// closure: r
function {
  let t;
  if (!(!e)) goto L_9;
  return {};
  t = e.split("?");
  if (!((t.length <= 1))) goto L_3e;
  return {};
  return r(t[1]);
}

// fn n  args=1 vars=1 closure=0 cpool=2 bc=42B file=coreutils/src/url
// args: e
function {
  return e.match(new RegExp("^https?\\:\\/\\/([^\\/?#]+)(?:[\\/?#]|$)"));   // tail call
}

// fn s  args=1 vars=2 closure=1 cpool=0 bc=25B file=coreutils/src/url
// args: e
// locals: r
// closure: n
function {
  let r;
  r = n(e);
  if (!(r)) goto L_13;
  if ((r[1])) goto L_18;
  return "";
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=188B file=coreutils/src/url
// args: require, module, exports
// locals: e, r, t, o, n, s
function {
  e = function e;
  r = function r;
  t = function t;
  o = function o;
  n = function n;
  s = function s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.encodeQueryParams = undefined;
  exports.decodeQueryParams = undefined;
  exports.pathWithParams = undefined;
  exports.paramsFromUrl = undefined;
  exports.hostnameFromUrl = undefined;
  exports.encodeQueryParams = e;
  exports.decodeQueryParams = r;
  exports.pathWithParams = t;
  exports.paramsFromUrl = o;
  exports.hostnameFromUrl = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/url
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
