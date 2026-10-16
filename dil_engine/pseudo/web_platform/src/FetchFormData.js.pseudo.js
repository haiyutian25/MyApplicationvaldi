// fn i  args=4 vars=5 closure=1 cpool=0 bc=295B file=web_platform/src/FetchFormData
// args: e, t, i, n
// locals: o
// closure: r
function {
  let o;
  o = r.usvString(e);
  if (!(!(t instanceof Blob))) goto L_73;
  if (!(n)) goto L_46;
  throw new TypeError("A filename requires a Blob value");
  return [o, r.usvString(t)];
  if (!((t instanceof File))) goto L_88;
  if (!(!n)) goto L_88;
  return [o, t];
  if (!(n)) goto L_c0;
  goto L_c5;
  // [栈深重同步 5 -> 4]
  if (!((t instanceof File))) goto L_11a;
  goto L_11b;
  // [栈深重同步 7 -> 6]
  return [o, new File([t], "blob", {type: t.type, lastModified: undefined})];
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=100B file=web_platform/src/FetchFormData
// locals: this
// closure: FetchFormData
function {
  this = this;
  if ((!(this instanceof FetchFormData))) goto L_30;
  if (!((undefined === this.formEntries))) goto L_41;
  throw new TypeError("Incompatible FormData receiver");
  return this.formEntries;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=56B file=web_platform/src/FetchFormData
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.formEntries = [];
  if (((undefined !== e))) goto L_26;
  if (!((undefined !== t))) goto L_37;
  throw new TypeError("Native FormData does not accept DOM form elements");
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=111B file=web_platform/src/FetchFormData
// args: e, t, r
// locals: arguments, this
// closure: i
function {
  this = this;
  arguments = <special_object 0>;
  if (!((arguments.length < 2))) goto L_1a;
  throw new TypeError("FormData.append requires two arguments");
  this.getEntries().push(i(e, t, r, (arguments.length >= 3)));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=10B file=web_platform/src/FetchFormData
// args: e
// closure: n
function {
  return (e[0] === n[0]);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=19B file=web_platform/src/FetchFormData
// args: e, t
// closure: a, n
function {
  if (((t <= a))) goto L_12;
  return (e[0] !== n[0]);
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=2 bc=245B file=web_platform/src/FetchFormData
// args: e, t, r
// locals: n, o, a, arguments, this
// closure: i
function {
  this = this;
  arguments = <special_object 0>;
  let a;
  let o;
  let n;
  if (!((arguments.length < 2))) goto L_24;
  throw new TypeError("FormData.set requires two arguments");
  n = i(e, t, r, (arguments.length >= 3));
  o = this.getEntries();
  a = o.findIndex(function <atom:0>);
  if (!((a < 0))) goto L_b4;
  goto L_f4;
  // [栈深重同步 1 -> 0]
  o[a] = n;
  this.formEntries = o.filter(function <atom:0>);
  o.filter(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=web_platform/src/FetchFormData
// args: e
// closure: t
function {
  return (e[0] !== t);
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=1 bc=154B file=web_platform/src/FetchFormData
// args: e
// locals: t, arguments, this
// closure: r
function {
  this = this;
  arguments = <special_object 0>;
  let t;
  if (!((0 === arguments.length))) goto L_1d;
  throw new TypeError("FormData.delete requires a name");
  t = r.usvString(e);
  this.formEntries = this.getEntries().filter(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=web_platform/src/FetchFormData
// args: e
// closure: t
function {
  return (e[0] === t);
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=162B file=web_platform/src/FetchFormData
// args: e
// locals: t, i, arguments, this
// closure: r
function {
  this = this;
  arguments = <special_object 0>;
  let i;
  let t;
  if (!((0 === arguments.length))) goto L_20;
  throw new TypeError("FormData.get requires a name");
  t = r.usvString(e);
  i = this.getEntries().find(function <atom:0>);
  if (!((undefined === i))) goto L_9c;
  return null;
  return i[1];
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=web_platform/src/FetchFormData
// args: e
// closure: t
function {
  return (e[0] === t);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=web_platform/src/FetchFormData
// args: e
function {
  return e[1];
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=2 bc=181B file=web_platform/src/FetchFormData
// args: e
// locals: t, arguments, this
// closure: r
function {
  this = this;
  arguments = <special_object 0>;
  let t;
  if (!((0 === arguments.length))) goto L_1d;
  throw new TypeError("FormData.getAll requires a name");
  t = r.usvString(e);
  return this.getEntries().filter(function <atom:0>).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=8B file=web_platform/src/FetchFormData
// args: e
// closure: i
function {
  return (e[0] === i);
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=1 bc=150B file=web_platform/src/FetchFormData
// args: e
// locals: t, i, arguments, this
// closure: r
function {
  this = this;
  arguments = <special_object 0>;
  let i;
  let t;
  if (!((0 === arguments.length))) goto L_20;
  throw new TypeError("FormData.has requires a name");
  t = this.getEntries();
  i = r.usvString(e);
  return t.some(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/FetchFormData
// closure: this
function {
  return this.getEntries();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=155B file=web_platform/src/FetchFormData
// locals: this
// closure: t
function {
  this = this;
  this.getEntries();
  return t.makeIterator(function <atom:0>, t.IteratorKind.Entries, "FormData");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/FetchFormData
// closure: this
function {
  return this.getEntries();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=155B file=web_platform/src/FetchFormData
// locals: this
// closure: t
function {
  this = this;
  this.getEntries();
  return t.makeIterator(function <atom:0>, t.IteratorKind.Keys, "FormData");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/FetchFormData
// closure: this
function {
  return this.getEntries();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=155B file=web_platform/src/FetchFormData
// locals: this
// closure: t
function {
  this = this;
  this.getEntries();
  return t.makeIterator(function <atom:0>, t.IteratorKind.Values, "FormData");   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/FetchFormData
// closure: this
function {
  return this.getEntries();   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=212B file=web_platform/src/FetchFormData
// args: e, r
// locals: i, n, this
// closure: t
function {
  this = this;
  if (!(("function" != typeof e))) goto L_1b;
  throw new TypeError("FormData.forEach requires a callback");
  let n;
  let i;
  const _it1 = t.makeIterator(function <atom:0>, t.IteratorKind.Entries, "FormData");
  goto L_cd;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  i = <value(_it2)>;
  <done(_it2)>;
  n = <value(_it2)>;
  e.call(r, n, i, this);
  if (!(<done(_it1)>)) goto L_95;
  <value(_it1)>;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=web_platform/src/FetchFormData
// locals: this
function {
  this = this;
  return this.entries();   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=5 bc=380B file=web_platform/src/FetchFormData
// args: e, t, i
// locals: n, o, a, arguments, this.active_func, new.target, this
// closure: <class_fields_init>, r
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  let a;
  let o;
  let n;
  if (!((arguments.length < 2))) goto L_2d;
  throw new TypeError("File requires parts and a name");
  this = new new.target(e, i);
  if (!(<class_fields_init>)) goto L_48;
  <class_fields_init>.call(this);
  new new.target(e, i);
  this.fileName = r.usvString(t);
  if (!((i == null))) goto L_85;
  i;
  goto L_a6;
  n = undefined.lastModified;
  if (!((undefined === n))) goto L_d9;
  goto L_dd;
  // [栈深重同步 1 -> 0]
  o = +n;
  if (!(Number.isFinite(o))) goto L_13d;
  goto L_13e;
  // [栈深重同步 1 -> 0]
  a = 0;
  if (!((a >= 9.223372036854776e+18))) goto L_153;
  a = (a - 1.8446744073709552e+19);
  goto L_168;
  // [栈深重同步 1 -> 0]
  if (!((a < -9.223372036854776e+18))) goto L_168;
  a = (a + 1.8446744073709552e+19);
  (a + 1.8446744073709552e+19);
  this.modified = a;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=100B file=web_platform/src/FetchFormData
// locals: this
// closure: FetchFile
function {
  this = this;
  if ((!(this instanceof FetchFile))) goto L_30;
  if (!((undefined === this.fileName))) goto L_41;
  throw new TypeError("Incompatible File receiver");
  return this.fileName;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=100B file=web_platform/src/FetchFormData
// locals: this
// closure: FetchFile
function {
  this = this;
  if ((!(this instanceof FetchFile))) goto L_30;
  if (!((undefined === this.modified))) goto L_41;
  throw new TypeError("Incompatible File receiver");
  return this.modified;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=web_platform/src/FetchFormData
function {
  return "";
}

// fn n  args=0 vars=3 closure=1 cpool=4 bc=312B file=web_platform/src/FetchFormData
// locals: FetchFile, <class_fields_init>, FetchFile#1
// closure: r
function {
  if (!((undefined === globalThis.File))) goto L_137;
  let FetchFile#1;
  let FetchFile;
  let <class_fields_init>;
  class FetchFile extends Blob { ... }
  <proto:FetchFile>.name = function <atom:0>;
  <proto:FetchFile>.lastModified = function <atom:0>;
  <proto:FetchFile>.webkitRelativePath = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchFile>;
  FetchFile = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc FetchFile
  FetchFile#1 = function <atom:0>;
  Object.defineProperty(FetchFile#1.prototype, Symbol.toStringTag, {value: "File", configurable: true});
  Object.defineProperty(globalThis, "File", {value: FetchFile#1, configurable: true, writable: true});
  return;
}

// fn o  args=1 vars=1 closure=0 cpool=2 bc=47B file=web_platform/src/FetchFormData
// args: e
function {
  return e.replace(new RegExp("\\r\\n|\\r|\\n"), "
");   // tail call
}

// fn a  args=1 vars=1 closure=1 cpool=6 bc=141B file=web_platform/src/FetchFormData
// args: e
// closure: o
function {
  return o(e).replace(new RegExp("\\r"), "%0D").replace(new RegExp("\\n"), "%0A").replace(new RegExp("\""), "%22");   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=50B file=web_platform/src/FetchFormData
// args: e, t
function {
  if (!((t instanceof Uint8Array))) goto L_e;
  goto L_30;
  // [栈深重同步 2 -> 1]
  return (e + t.size);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=7B file=web_platform/src/FetchFormData
// closure: l, r
function {
  return l(r);   // tail call
}

// fn s  args=1 vars=8 closure=3 cpool=2 bc=1015B file=web_platform/src/FetchFormData
// args: e
// locals: t, n, r, i, n#1, s, e#1
// closure: l, a, o
function {
  let i;
  let r;
  let t;
  t = "----valdi-";
  let n;
  n = 0;
  if (!((n < 24))) goto L_ae;
  t = (t + Math.floor((16 * Math.random())).toString(16));
  (t + Math.floor((16 * Math.random())).toString(16));
  n = <n_new>;
  (n++);
  goto L_14;
  r = [];
  i = new TextEncoder();
  let s;
  let n#1;
  const _it1 = e.formEntries;
  goto L_300;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  n#1 = <value(_it2)>;
  <done(_it2)>;
  s = <value(_it2)>;
  let e#1;
  e#1 = "--".concat(t, "
Content-Disposition: form-data; name="", a(n#1), """);
  if (!(("string" == typeof s))) goto L_1cb;
  goto L_2ff;
  // [栈深重同步 4 -> 3]
  if ((s.type)) goto L_24c;
  e#1 = (e#1 + "; filename="".concat(a(s.name), ""
Content-Type: ", "application/octet-stream"));
  (e#1 + "; filename="".concat(a(s.name), ""
Content-Type: ", "application/octet-stream"));
  r.push(i.encode("".concat(e#1, "

")), s, i.encode("
"));
  if (!(<done(_it2)>)) goto L_e8;
  <value(_it2)>;
  r.push(i.encode("--".concat(t, "--
")));
  return {type: "multipart/form-data; boundary=".concat(t), length: r.reduce(function <atom:0>, 0), stream: function <atom:0>};
}

// fn <atom:0>  args=1 vars=4 closure=6 cpool=0 bc=657B file=web_platform/src/FetchFormData
// args: a
// locals: e, s, e#1
// closure: n, r, i, t, o, e
function {
  if (!(!n)) goto L_28f;
  let s;
  if (!((undefined !== r))) goto L_ea;
  let e;
  e = (await r.read());
  if (!(n)) goto L_49;
  return undefined; // async
  if (!(!e.done)) goto L_bc;
  a.enqueue(e.value);
  return undefined; // async
  r.releaseLock();
  r = undefined;
  undefined;
  if (!((i === t.length))) goto L_16a;
  a.close();
  if (!((a.byobRequest == null))) goto L_142;
  a.byobRequest;
  goto L_167;
  undefined.respond(0);
  return undefined; // async
  s = t[i];
  if (!((s instanceof Uint8Array))) goto L_233;
  if (!((o < s.length))) goto L_222;
  let e#1;
  e#1 = Math.min((o + 65536), s.length);
  a.enqueue(s.slice(o, e#1));
  o = e#1;
  e#1;
  return undefined; // async
  o = 0;
  0;
  i = <i_new>;
  (i++);
  goto L_0;
  i = <i_new>;
  (i++);
  r = e.streamBlob(s).getReader();
  e.streamBlob(s).getReader();
  goto L_0;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=106B file=web_platform/src/FetchFormData
// args: e
// closure: n, r
function {
  n = true;
  true;
  if (!((undefined !== r))) goto L_67;
  (await r.cancel(e));
  r.releaseLock();
  r = undefined;
  undefined;
  return undefined; // async
}

// fn l  args=1 vars=5 closure=1 cpool=2 bc=58B file=web_platform/src/FetchFormData
// args: t
// locals: r, i, n, o
// closure: e
function {
  let o;
  let n;
  let i;
  let r;
  r = undefined;
  i = 0;
  n = false;
  o = 0;
  return new ReadableStream({type: "bytes", pull: function <atom:0>, cancel: function <atom:0>});
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=19 bc=479B file=web_platform/src/FetchFormData
// args: require, module, exports
// locals: e, t, r, i, FetchFormData, <class_fields_init>, FetchFormData#1, n, o, a, s, l
function {
  i = function i;
  n = function n;
  o = function o;
  a = function a;
  s = function s;
  l = function l;
  let FetchFormData#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FetchFormData = undefined;
  exports.installFile = undefined;
  exports.multipartBody = undefined;
  e = require("./Blob");
  t = require("./FetchIterator");
  r = require("./WebIDL");
  let FetchFormData;
  let <class_fields_init>;
  class FetchFormData extends undefined { ... }
  <proto:FetchFormData>.getEntries = function <atom:0>;
  <proto:FetchFormData>.append = function <atom:0>;
  <proto:FetchFormData>.set = function <atom:0>;
  <proto:FetchFormData>.delete = function <atom:0>;
  <proto:FetchFormData>.get = function <atom:0>;
  <proto:FetchFormData>.getAll = function <atom:0>;
  <proto:FetchFormData>.has = function <atom:0>;
  <proto:FetchFormData>.entries = function <atom:0>;
  <proto:FetchFormData>.keys = function <atom:0>;
  <proto:FetchFormData>.values = function <atom:0>;
  <proto:FetchFormData>.forEach = function <atom:0>;
  <class_fields_init> = undefined;
  define_method_computed(<proto:FetchFormData>, Symbol.iterator, function <atom:0>);
  FetchFormData = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc FetchFormData
  FetchFormData#1 = function <atom:0>;
  exports.FetchFormData = FetchFormData#1;
  Object.defineProperty(FetchFormData#1.prototype, Symbol.toStringTag, {value: "FormData", configurable: true});
  exports.installFile = n;
  exports.multipartBody = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchFormData
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
