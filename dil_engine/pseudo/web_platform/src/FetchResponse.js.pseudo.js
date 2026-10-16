// fn o  args=1 vars=1 closure=1 cpool=0 bc=40B file=web_platform/src/FetchResponse
// args: e
// closure: r
function {
  return r.has(e);   // tail call
}

// fn n  args=1 vars=2 closure=0 cpool=0 bc=72B file=web_platform/src/FetchResponse
// args: e
// locals: t
function {
  let t;
  if (!((e == null))) goto L_c;
  e;
  goto L_2d;
  t = undefined.responseState;
  if (!((undefined === t))) goto L_44;
  throw new TypeError("Incompatible Response receiver");
  return t;
}

// fn a  args=2 vars=3 closure=2 cpool=0 bc=174B file=web_platform/src/FetchResponse
// args: t, s
// locals: r
// closure: FetchResponse, e
function {
  let r;
  r = Object.create(FetchResponse.prototype);
  r.responseState = t;
  e.setBody(r, s, t.headers);
  return r;
}

// fn <atom:0>  args=2 vars=8 closure=4 cpool=2 bc=1086B file=web_platform/src/FetchResponse
// args: s, r
// locals: n, a, i, u, c, this
// closure: <class_fields_init>, t, e, o
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let c;
  let u;
  let i;
  let a;
  let n;
  if (!((null != r))) goto L_48;
  if (!(("object" != typeof r))) goto L_48;
  if (!(("function" != typeof r))) goto L_48;
  throw new TypeError("Response options must be a dictionary");
  if (!((r == null))) goto L_53;
  r;
  goto L_74;
  if (!((r == null))) goto L_82;
  r;
  goto L_a3;
  if (!((r == null))) goto L_b1;
  r;
  goto L_d2;
  r = {headers: undefined.headers, status: undefined.status, statusText: undefined.statusText};
  if (!((undefined === {headers: undefined.headers, status: undefined.status, statusText: undefined.statusText}.status))) goto L_101;
  goto L_124;
  // [栈深重同步 1 -> 0]
  n = +r.status;
  if (!(Number.isFinite(n))) goto L_193;
  goto L_194;
  // [栈深重同步 1 -> 0]
  a = 0;
  if (((a < 200))) goto L_1a7;
  if (!((a > 599))) goto L_1b8;
  throw new RangeError("Response status must be between 200 and 599");
  if (!((r == null))) goto L_1c2;
  r;
  goto L_1e3;
  if (!((undefined === undefined.statusText))) goto L_1e9;
  goto L_230;
  // [栈深重同步 1 -> 0]
  i = t.byteString(r.statusText);
  if (!(new RegExp("[^\\t\\x20-\\x7e\\x80-\\xff]").test(i))) goto L_26e;
  throw new TypeError("Invalid Response status text");
  if (!((r == null))) goto L_29c;
  r;
  goto L_2bd;
  u = new t.FetchHeaders(undefined.headers);
  c = e.extractBody(s);
  if (!(o(a))) goto L_327;
  if (!((null !== c.stream))) goto L_327;
  throw new TypeError("This status cannot have a response body");
  if (((undefined === c.type))) goto L_3d4;
  if ((u.has("content-type"))) goto L_3d4;
  u.append("content-type", c.type);
  this.responseState = {status: a, statusText: i, headers: u, url: "", redirected: false, type: "default"};
  e.setBody(this, c, u);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).status;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).statusText;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).headers;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).url;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).redirected;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=39B file=web_platform/src/FetchResponse
// locals: this
// closure: n
function {
  this = this;
  return n(this).type;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=61B file=web_platform/src/FetchResponse
// locals: e, this
// closure: n
function {
  this = this;
  let e;
  e = n(this).status;
  if (!((e >= 200))) goto L_3c;
  return (e <= 299);
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=145B file=web_platform/src/FetchResponse
// locals: s, r, this
// closure: n, t, a, e
function {
  this = this;
  let r;
  let s;
  s = n(this);
  r = t.cloneHeaders(s.headers);
  null;
  s;
  return a({headers: r}, e.cloneBody(this));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=170B file=web_platform/src/FetchResponse
// locals: s
// closure: t, a, e
function {
  let s;
  s = new t.FetchHeaders();
  t.freezeHeaders(s);
  return a({status: 0, statusText: "", headers: s, url: "", redirected: false, type: "error"}, e.emptyBody());   // tail call
}

// fn <atom:0>  args=2 vars=6 closure=4 cpool=0 bc=373B file=web_platform/src/FetchResponse
// args: e, r
// locals: o, a, i, arguments
// closure: s, FetchResponse, t, n
function {
  arguments = <special_object 0>;
  let i;
  let a;
  let o;
  if (!((0 === arguments.length))) goto L_21;
  throw new TypeError("Response.redirect requires a URL");
  o = new URL(s.usvString(e));
  if (!((undefined === r))) goto L_5b;
  goto L_98;
  // [栈深重同步 1 -> 0]
  a = (((Math.trunc(+r) % 65536) + 65536) % 65536);
  if (!(![301, 302, 303, 307, 308].includes(a))) goto L_e4;
  throw new RangeError("Invalid redirect status");
  i = new FetchResponse(null, {status: a, headers: {location: o.href}});
  t.freezeHeaders(n(i).headers);
  return i;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=512B file=web_platform/src/FetchResponse
// args: e, s
// locals: r, o, arguments
// closure: t, FetchResponse
function {
  arguments = <special_object 0>;
  let o;
  let r;
  if (!((0 === arguments.length))) goto L_1e;
  throw new TypeError("Response.json requires data");
  r = JSON.stringify(e);
  if (!((undefined === r))) goto L_5f;
  throw new TypeError("Value cannot be serialized to JSON");
  if (!((null != s))) goto L_87;
  if (!(("object" != typeof s))) goto L_87;
  if (!(("function" != typeof s))) goto L_87;
  throw new TypeError("Response options must be a dictionary");
  if (!((s == null))) goto L_b5;
  s;
  goto L_d6;
  o = new t.FetchHeaders(undefined.headers);
  if ((o.has("content-type"))) goto L_13b;
  o.set("content-type", "application/json");
  if (!((s == null))) goto L_17a;
  s;
  goto L_19b;
  if (!((s == null))) goto L_1a9;
  s;
  goto L_1ca;
  return new FetchResponse(new TextEncoder().encode(r), {status: undefined.status, statusText: undefined.statusText, headers: t.headerEntries(o)});
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=46B file=web_platform/src/FetchResponse
// args: e
// closure: FetchResponse
function {
  if (!((e instanceof FetchResponse))) goto L_2d;
  return (undefined !== e.responseState);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=16 bc=559B file=web_platform/src/FetchResponse
// args: require, module, exports
// locals: e, t, s, r, o, n, a, FetchResponse, <class_fields_init>, FetchResponse#1
function {
  o = function o;
  n = function n;
  a = function a;
  let FetchResponse#1;
  let r;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isNullBodyStatus = undefined;
  exports.responseState = undefined;
  exports.makeResponse = undefined;
  exports.FetchResponse = undefined;
  e = require("./FetchBody");
  t = require("./FetchHeaders");
  s = require("./WebIDL");
  r = new Set([101, 103, 204, 205, 304]);
  exports.isNullBodyStatus = o;
  exports.responseState = n;
  exports.makeResponse = a;
  let FetchResponse;
  let <class_fields_init>;
  class FetchResponse extends undefined { ... }
  <proto:FetchResponse>.status = function <atom:0>;
  <proto:FetchResponse>.statusText = function <atom:0>;
  <proto:FetchResponse>.headers = function <atom:0>;
  <proto:FetchResponse>.url = function <atom:0>;
  <proto:FetchResponse>.redirected = function <atom:0>;
  <proto:FetchResponse>.type = function <atom:0>;
  <proto:FetchResponse>.ok = function <atom:0>;
  <proto:FetchResponse>.clone = function <atom:0>;
  function <atom:0>.error = function <atom:0>;
  function <atom:0>.redirect = function <atom:0>;
  function <atom:0>.json = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchResponse>;
  FetchResponse = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc FetchResponse
  FetchResponse#1 = function <atom:0>;
  exports.FetchResponse = FetchResponse#1;
  Object.defineProperty(FetchResponse#1.prototype, Symbol.toStringTag, {value: "Response", configurable: true});
  e.installBodyMixin(FetchResponse#1.prototype, function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchResponse
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
