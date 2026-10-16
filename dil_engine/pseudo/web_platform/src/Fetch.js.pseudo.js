// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=79B file=web_platform/src/Fetch
// args: e, r
// locals: arguments
// closure: g, t
function {
  arguments = <special_object 0>;
  r = ...1;
  if (!((0 === arguments.length))) goto L_45;
  return Promise.reject(new TypeError("fetch requires an input"));
  return g(t, e, r[0]);
}

// fn p  args=1 vars=2 closure=1 cpool=1 bc=60B file=web_platform/src/Fetch
// args: e
// locals: t
// closure: g
function {
  let t;
  t = {hooks: e, keepaliveBytes: 0};
  return {fetch: function <atom:0>}.fetch;
}

// fn u  args=3 vars=7 closure=0 cpool=0 bc=586B file=web_platform/src/Fetch
// args: e, t, r
// locals: o, t#1, o#1, t#2
function {
  Object.defineProperties(e, {name: {value: t, configurable: true}, length: {value: r, configurable: true}});
  let o;
  for (const o of Object.getOwnPropertyNames(e.prototype)) {
    if (!(("constructor" !== o))) continue;
    let t#1;
    t#1 = Object.getOwnPropertyDescriptor(e.prototype, o);
    t#1.enumerable = true;
    Object.defineProperty(e.prototype, o, t#1);
  }
  let o#1;
  for (const o#1 of Object.getOwnPropertyNames(e)) {
    let t#2;
    t#2 = Object.getOwnPropertyDescriptor(e, o#1);
    if (!(("function" == typeof t#2.value))) goto L_23e;
    t#2.enumerable = true;
    Object.defineProperty(e, o#1, t#2);
  }
  return e;
}

// fn f  args=1 vars=5 closure=6 cpool=0 bc=1823B file=web_platform/src/Fetch
// args: e
// locals: r, o, o#1, t
// closure: t, p, u, s, i, a
function {
  let r;
  if (!((undefined !== globalThis.fetch))) goto L_2e;
  return;
  t.installFile();
  r = {fetch: p(e), Headers: u(s.FetchHeaders, "Headers", 0), Request: u(i.FetchRequest, "Request", 1), Response: u(a.FetchResponse, "Response", 0), FormData: u(t.FetchFormData, "FormData", 0), Blob: u(Blob, "Blob", 0), File: u(File, "File", 2)};
  Object.setPrototypeOf(r.File, r.Blob);
  let o;
  for (const o of [s.FetchHeaders.prototype.forEach, t.FetchFormData.prototype.forEach, a.FetchResponse.redirect, a.FetchResponse.json]) {
    Object.defineProperty(o, "length", {value: 1, configurable: true});
  }
  let o#1;
  for (const o#1 of [t.FetchFormData.prototype.append, t.FetchFormData.prototype.set]) {
    Object.defineProperty(o#1, "length", {value: 2, configurable: true});
  }
  Object.defineProperty(s.FetchHeaders.prototype, Symbol.iterator, {value: s.FetchHeaders.prototype.entries, writable: true, configurable: true});
  Object.defineProperty(t.FetchFormData.prototype, Symbol.iterator, {value: t.FetchFormData.prototype.entries, writable: true, configurable: true});
  let t;
  for (const t of Object.keys(r)) {
    Object.defineProperty(globalThis, t, {value: r[t], configurable: true, writable: true});
  }
  return;
}

// fn y  args=2 vars=4 closure=2 cpool=0 bc=858B file=web_platform/src/Fetch
// args: e, t
// locals: r, o
// closure: s, m
function {
  let o;
  let r;
  r = new s.FetchHeaders(s.headerEntries(e.headers));
  if ((r.has("accept"))) goto L_d7;
  r.set("accept", "*/*");
  if (!(r.has("range"))) goto L_16a;
  if (!(!r.has("accept-encoding"))) goto L_16a;
  r.set("accept-encoding", "identity");
  if ((("no-cache" !== e.cache))) goto L_1f8;
  if ((r.has("cache-control"))) goto L_1f8;
  r.set("cache-control", "max-age=0");
  if (!(("reload" !== e.cache))) goto L_24d;
  if ((("no-store" !== e.cache))) goto L_317;
  if ((r.has("pragma"))) goto L_2b5;
  r.set("pragma", "no-cache");
  if ((r.has("cache-control"))) goto L_317;
  r.set("cache-control", "no-cache");
  o = m(e, t);
  if (!(("" !== o))) goto L_355;
  r.set("referer", o);
  return r;
}

// fn m  args=2 vars=7 closure=0 cpool=0 bc=788B file=web_platform/src/Fetch
// args: e, t
// locals: r, o, s, i, a
function {
  let a;
  let i;
  let s;
  let o;
  let r;
  if ((("" === e.referrer))) goto L_5f;
  if (!(("about:client" === e.referrer))) goto L_63;
  return "";
  r = new URL(e.referrer);
  if (!(("http:" !== r.protocol))) goto L_e9;
  if (!(("https:" !== r.protocol))) goto L_e9;
  return "";
  r.username = "";
  r.password = "";
  r.hash = "";
  o = (r.origin === t.origin);
  if (!(("https:" === r.protocol))) goto L_1ae;
  s = ("https:" !== t.protocol);
  i = "".concat(r.origin, "/");
  if (!((r.href.length > 4096))) goto L_22e;
  goto L_252;
  // [栈深重同步 1 -> 0]
  a = r.href;
  if ((e.referrerPolicy)) goto L_27f;
  if (!(("strict-origin-when-cross-origin" === "no-referrer"))) goto L_28a;
  return "";
  if (!(("strict-origin-when-cross-origin" === "same-origin"))) goto L_29e;
  if (!(o)) goto L_29c;
  return a;
  return "";
  if (!(("strict-origin-when-cross-origin" === "origin"))) goto L_2ab;
  return i;
  if (!(("strict-origin-when-cross-origin" === "strict-origin"))) goto L_2bf;
  if (!(s)) goto L_2bb;
  return "";
  return i;
  if (!(("strict-origin-when-cross-origin" === "origin-when-cross-origin"))) goto L_2d5;
  if (!(o)) goto L_2d1;
  return a;
  return i;
  if (!(("strict-origin-when-cross-origin" === "strict-origin-when-cross-origin"))) goto L_2f2;
  if (!(o)) goto L_2e7;
  return a;
  if (!(s)) goto L_2ee;
  return "";
  return i;
  if (!(("strict-origin-when-cross-origin" === "no-referrer-when-downgrade"))) goto L_306;
  if (!(s)) goto L_302;
  return "";
  return a;
  if (!(("strict-origin-when-cross-origin" === "unsafe-url"))) goto L_313;
  return a;
  "strict-origin-when-cross-origin";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=web_platform/src/Fetch
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=53B file=web_platform/src/Fetch
// closure: t, h
function {
  t.keepaliveBytes = (t.keepaliveBytes - h);
  h = 0;
  0;
  return;
}

// fn g  args=3 vars=9 closure=3 cpool=2 bc=826B file=web_platform/src/Fetch
// args: t, r, o
// locals: s, a, n, h, l, c
// closure: i, e, b
function {
  let l;
  let h;
  let n;
  let a;
  let s;
  s = new i.FetchRequest(r, o);
  a = i.requestState(s);
  n = e.bodyState(s);
  if (!(a.signal.aborted)) goto L_1d9;
  if (!((n.stream == null))) goto L_103;
  n.stream;
  goto L_192;
  undefined.cancel(a.signal.reason).catch(function <atom:0>);
  throw a.signal.reason;
  if (!(("only-if-cached" === a.cache))) goto L_214;
  throw new TypeError("Native fetch has no response cache");
  h = 0;
  if (!(a.keepalive)) goto L_2ea;
  if (!((null !== n.stream))) goto L_2ea;
  if (((undefined === n.length))) goto L_2a1;
  if (!(((t.keepaliveBytes + n.length) > 65536))) goto L_2b2;
  throw new TypeError("Fetch keepalive body quota exceeded");
  h = n.length;
  n.length;
  t.keepaliveBytes = (t.keepaliveBytes + h);
  l = function <atom:0>;
  try { // catch -> L_32a
  return (await b(t.hooks, a, n, l)); // async
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_339
  l();
  throw c;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=web_platform/src/Fetch
// args: e
function {
  return e.trim();   // tail call
}

// fn b  args=4 vars=18 closure=9 cpool=3 bc=3135B file=web_platform/src/Fetch
// args: t, r, o, s
// locals: i, n, h, d, o#1, o#2, p, u, f, y, e, e#1, m, e#2
// closure: F, v, e, a, R, k, c, FetchNetworkRequest, l
function {
  let h;
  let n;
  let i;
  i = undefined;
  n = new URL(r.url);
  h = o;
  let d;
  d = 0;
  goto L_48;
  d = <d_new>;
  (d++);
  let m;
  let y;
  let f;
  let u;
  let p;
  let o#1;
  if (!(r.signal.aborted)) goto L_e3;
  throw r.signal.reason;
  o#1 = n.href.replace(new RegExp("#.*$"), "");
  if ((("data:" === n.protocol))) goto L_18b;
  if (!(("blob:" === n.protocol))) goto L_377;
  let o#2;
  if (!(("blob:" === n.protocol))) goto L_1f8;
  if (!(("GET" !== r.method))) goto L_1f8;
  throw new TypeError("Local URL fetch requires GET");
  if (!(("data:" === n.protocol))) goto L_22b;
  goto L_232;
  // [栈深重同步 1 -> 0]
  o#2 = v(t, n, r);
  if (!(("HEAD" === r.method))) goto L_2f9;
  e.setBody(o#2, e.emptyBody(), a.responseState(o#2).headers);
  R(t, o#2, r.signal);
  s();
  return k(t, o#2, r.integrity, r.signal); // async
  if (!(("http:" !== n.protocol))) goto L_3de;
  if (!(("https:" !== n.protocol))) goto L_3de;
  throw new TypeError("Unsupported fetch URL scheme");
  if (!(("" !== n.port))) goto L_468;
  if (!(c.has(Number(n.port)))) goto L_468;
  throw new TypeError("Fetch URL uses a blocked port");
  if (!((undefined === i))) goto L_4b7;
  try { // catch -> L_4a1
  i = t.createTransport();
  t.createTransport();
  <?>;
  goto L_4b7;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_4b6
  throw new TypeError("Fetch transport is unavailable");
  // [栈深重同步 0 -> 1]
  throw <?>;
  p = (await new FetchNetworkRequest(t, i, r, h, o#1, (0 !== d), s).start());
  u = p.status;
  f = p.headers.get("location");
  if (!(l.has(u))) goto L_625;
  if (!(("error" === r.redirect))) goto L_625;
  if (!((p.body == null))) goto L_5f0;
  p.body;
  goto L_614;
  (await undefined.cancel());
  throw new TypeError("Fetch redirect is disallowed");
  if ((!l.has(u))) goto L_685;
  if (((null === f))) goto L_685;
  if (!(("manual" === r.redirect))) goto L_6d6;
  return k(t, p, r.integrity, r.signal); // async
  if (!((p.body == null))) goto L_702;
  p.body;
  goto L_726;
  (await undefined.cancel());
  if (!((20 === d))) goto L_73f;
  throw new TypeError("Too many fetch redirects");
  y = new URL(f, n);
  if ((f.includes("#"))) goto L_7b1;
  y.hash = n.hash;
  n.hash;
  if (!(("http:" !== y.protocol))) goto L_80a;
  if ((("https:" !== y.protocol))) goto L_85a;
  if ((y.username)) goto L_85a;
  if (!(y.password)) goto L_86b;
  throw new TypeError("Invalid fetch redirect URL");
  if (!((y.origin !== n.origin))) goto L_925;
  let e;
  for (const e of ["authorization", "proxy-authorization", "cookie", "cookie2"]) {
    r.headers.delete(e);
  }
  if (((301 === u))) goto L_937;
  if (!((302 === u))) goto L_963;
  if ((("POST" === r.method))) goto L_9c8;
  if (!((303 === u))) goto L_a7d;
  if (!(("GET" !== r.method))) goto L_a7d;
  if (!(("HEAD" !== r.method))) goto L_a7d;
  r.method = "GET";
  h = e.emptyBody();
  e.emptyBody();
  let e#1;
  for (const e#1 of ["content-encoding", "content-language", "content-location", "content-type", "content-length"]) {
    r.headers.delete(e#1);
  }
  goto L_b16;
  if (!((null !== h.stream))) goto L_b16;
  if (!((undefined === h.replay))) goto L_adc;
  throw new TypeError("Cannot replay a streaming request body after redirect");
  null;
  h;
  h = {stream: h.replay()};
  {stream: h.replay()};
  m = p.headers.get("referrer-policy");
  if (!((null !== m))) goto L_c34;
  let e#2;
  for (const e#2 of m.split(",").map(function <atom:0>)) {
    if (!(["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"].includes(e#2))) goto L_c2d;
    r.referrerPolicy = e#2;
    e#2;
  }
  n = y;
  y;
  goto L_40;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=12B file=web_platform/src/Fetch
// args: e
// closure: this
function {
  this.controller = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/Fetch
// closure: this
function {
  return this.pull();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=web_platform/src/Fetch
// args: e
// closure: this
function {
  return this.stop(e, false);   // tail call
}

// fn <atom:0>  args=7 vars=8 closure=2 cpool=3 bc=318B file=web_platform/src/Fetch
// args: t, r, o, s, i, a, n
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.hooks = t;
  this.transport = r;
  this.request = o;
  this.body = s;
  this.url = i;
  this.redirected = a;
  this.releaseQuota = n;
  this.uploadOffset = 0;
  this.uploadCredit = 0;
  this.uploadStopped = false;
  this.pumping = false;
  this.pendingDownload = 0;
  this.outstandingDownload = 0;
  this.stopped = false;
  this.completed = false;
  this.gotHeaders = false;
  this.intermediateRedirect = false;
  this.stream = e.ownedStream(new ReadableStream({type: "bytes", start: function <atom:0>, pull: function <atom:0>, cancel: function <atom:0>}));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=137B file=web_platform/src/Fetch
// closure: this
function {
  return this.fail(this.request.signal.reason);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=1 bc=1691B file=web_platform/src/Fetch
// args: e, t
// locals: e#1, r
// closure: this, y, s
function {
  this.resolve = e;
  this.reject = t;
  this.removeAbort = this.hooks.addAbortStep(this.request.signal, function <atom:0>);
  if (!(this.request.signal.aborted)) goto L_19f;
  this.fail(this.request.signal.reason);
  return;
  try { // catch -> L_652
  let e#1;
  e#1 = y(this.request, new URL(this.url));
  this.handle = this.transport.start({url: this.url, method: this.request.method, headers: s.headerEntries(e#1), hasBody: (null !== this.body.stream), contentLength: this.body.length}, {onResponse: this.onResponse.bind(this), onData: this.onData.bind(this), onUploadReady: this.onUploadReady.bind(this), onUploadStopped: this.onUploadStopped.bind(this), onComplete: this.onComplete.bind(this), onError: this.onError.bind(this)});
  if (!(this.stopped)) goto L_58c;
  goto L_629;
  // [栈深重同步 1 -> 0]
  if (!((0 !== this.pendingDownload))) goto L_629;
  this.handle.requestBytes(this.pendingDownload);
  this.pendingDownload = 0;
  0;
  this.pumpUpload();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r = <?>;
  try { // catch -> L_69a
  if (!((r instanceof TypeError))) goto L_686;
  goto L_694;
  // [栈深重同步 3 -> 2]
  this.fail(new TypeError("Fetch transport could not start"));
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=1 bc=14B file=web_platform/src/Fetch
// locals: this
// closure: y, s
function {
  this = this;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=web_platform/src/Fetch
// locals: this
function {
  this = this;
  if ((this.intermediateRedirect)) goto L_4d;
  this.releaseQuota();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=web_platform/src/Fetch
// closure: t
function {
  return t.releaseLock();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=web_platform/src/Fetch
// closure: t
function {
  return t.releaseLock();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=web_platform/src/Fetch
function {
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=3 bc=538B file=web_platform/src/Fetch
// args: e
// locals: t, this
function {
  this = this;
  this.uploadStopped = true;
  this.uploadCredit = 0;
  this.uploadChunk = undefined;
  if (!((undefined !== this.uploadReader))) goto L_d3;
  let t;
  t = this.uploadReader;
  this.uploadReader = undefined;
  t.cancel(e).then(function <atom:0>, function <atom:0>);
  // close_loc t
  return;
  if (((null === this.body.stream))) goto L_218;
  if ((this.body.stream.locked)) goto L_218;
  this.body.stream.cancel(e).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=395B file=web_platform/src/Fetch
// args: e, t
// locals: this
function {
  this = this;
  if ((this.stopped)) goto L_18a;
  this.stopped = true;
  if (!((this.handle == null))) goto L_61;
  this.handle;
  goto L_85;
  undefined.cancel();
  this.stopUpload(e);
  if (!((this.removeAbort == null))) goto L_d8;
  this.removeAbort;
  this;
  goto L_db;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.releaseFinalQuota();
  if (!(t)) goto L_14e;
  this.controller.error(e);
  if (!((this.finishPull == null))) goto L_17a;
  this.finishPull;
  this;
  goto L_17d;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.finishPull = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=web_platform/src/Fetch
// args: e
// locals: this
function {
  this = this;
  this.stop(e, true);
  this.reject(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=195B file=web_platform/src/Fetch
// args: e
// closure: this, d
function {
  this.finishPull = e;
  if (!((0 === this.outstandingDownload))) goto L_c2;
  this.outstandingDownload = d;
  if (!((undefined === this.handle))) goto L_79;
  this.pendingDownload = d;
  goto L_c2;
  // [栈深重同步 1 -> 0]
  this.handle.requestBytes(d);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=286B file=web_platform/src/Fetch
// locals: this
// closure: d
function {
  this = this;
  if (!(this.completed)) goto L_112;
  if (!((this.removeAbort == null))) goto L_54;
  this.removeAbort;
  this;
  goto L_57;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.controller.close();
  if (!((this.controller.byobRequest == null))) goto L_ea;
  this.controller.byobRequest;
  goto L_10f;
  undefined.respond(0);
  return undefined;
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=0 bc=2075B file=web_platform/src/Fetch
// locals: t, t#1, r, t#2, this
// closure: e, d
function {
  this = this;
  if ((this.pumping)) goto L_f3;
  if ((this.stopped)) goto L_f3;
  if ((this.completed)) goto L_f3;
  if ((this.uploadStopped)) goto L_f3;
  if (((0 === this.uploadCredit))) goto L_f3;
  if (!(!(undefined === this.handle))) goto L_819;
  this.pumping = true;
  try { // catch -> L_7a6
  if (!(!this.stopped)) goto L_79c;
  if (!(!this.completed)) goto L_79c;
  if (!(!this.uploadStopped)) goto L_79c;
  if (!((0 !== this.uploadCredit))) goto L_79c;
  let r;
  let t#1;
  if (!((undefined === this.uploadChunk))) goto L_58c;
  let t;
  if (!((this.uploadReader == null))) goto L_27f;
  this.uploadReader;
  this.uploadReader = this.body.stream.getReader();
  this.body.stream.getReader();
  t = (await this.uploadReader.read());
  if ((this.stopped)) goto L_33a;
  if ((this.completed)) goto L_33a;
  if (!(this.uploadStopped)) goto L_344;
  // gosub (finally 块) 2059
  return undefined; // async
  if (!(t.done)) goto L_429;
  this.uploadReader.releaseLock();
  this.uploadReader = undefined;
  this.uploadCredit = 0;
  this.handle.write(new Uint8Array(0), true);
  // gosub (finally 块) 2059
  return undefined; // async
  if (!(!(t.value instanceof Uint8Array))) goto L_465;
  throw new TypeError("Fetch upload stream must yield Uint8Array chunks");
  if (!(e.ownsStreamChunks(this.body.stream))) goto L_4f8;
  goto L_540;
  // [栈深重同步 2 -> 1]
  this.uploadChunk = t.value.slice();
  this.uploadOffset = 0;
  if (!((0 === this.uploadChunk.length))) goto L_58c;
  this.uploadChunk = undefined;
  goto L_10b;
  t#1 = Math.min(this.uploadCredit, (this.uploadChunk.length - this.uploadOffset), d);
  r = this.uploadChunk.subarray(this.uploadOffset, (this.uploadOffset + t#1));
  this.uploadOffset = (this.uploadOffset + t#1);
  this.uploadCredit = 0;
  if (!((this.uploadOffset === this.uploadChunk.length))) goto L_74b;
  this.uploadChunk = undefined;
  undefined;
  this.handle.write(r, false);
  goto L_10b;
  <?>;
  // gosub (finally 块) 2059
  undefined;
  goto L_819;
  // [栈深重同步 0 -> 1]
  t#2 = <?>;
  try { // catch -> L_805
  if ((this.uploadStopped)) goto L_7fa;
  this.fail(t#2);
  <?>;
  // gosub (finally 块) 2059
  undefined;
  goto L_819;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 2059
  throw <?>;
  this.pumping = false;
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=6 closure=4 cpool=0 bc=1009B file=web_platform/src/Fetch
// args: t
// locals: r, o, i, r#1, this
// closure: a, s, l, e
function {
  this = this;
  if (!(!this.stopped)) goto L_3f0;
  try { // catch -> L_3bf
  let i;
  let o;
  let r;
  if (!(("HEAD" !== this.request.method))) goto L_d0;
  r = !a.isNullBodyStatus(t.status);
  o = new s.FetchHeaders(t.headers);
  if (!(l.has(t.status))) goto L_1e5;
  if (!(("follow" === this.request.redirect))) goto L_1e5;
  this.intermediateRedirect = o.has("location");
  s.freezeHeaders(o);
  if (!(r)) goto L_32e;
  goto L_353;
  // [栈深重同步 3 -> 2]
  i = a.makeResponse({status: t.status, statusText: t.statusText, headers: o, url: this.url, redirected: this.redirected, type: "basic"}, e.emptyBody());
  this.gotHeaders = true;
  this.resolve(i);
  if ((r)) goto L_3bc;
  this.stop(undefined, false);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_3ef
  this.fail(r#1);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=221B file=web_platform/src/Fetch
// args: e
// locals: this
function {
  this = this;
  if ((this.stopped)) goto L_dc;
  this.outstandingDownload = (this.outstandingDownload - e.length);
  this.controller.enqueue(e);
  if (!((this.finishPull == null))) goto L_cc;
  this.finishPull;
  this;
  goto L_cf;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.finishPull = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=web_platform/src/Fetch
// closure: this
function {
  return this.pumpUpload();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=213B file=web_platform/src/Fetch
// args: e
// locals: this
function {
  this = this;
  if ((this.stopped)) goto L_d4;
  if ((this.completed)) goto L_d4;
  if ((this.uploadStopped)) goto L_d4;
  this.uploadCredit = e;
  Promise.resolve().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=41B file=web_platform/src/Fetch
// locals: this
function {
  this = this;
  this.stopUpload(undefined);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=641B file=web_platform/src/Fetch
// locals: e, this
function {
  this = this;
  if (!(!this.stopped)) goto L_280;
  this.completed = true;
  this.stopUpload(undefined);
  this.releaseFinalQuota();
  if (!(this.gotHeaders)) goto L_24c;
  if (!((0 === this.controller.desiredSize))) goto L_280;
  if (!((this.removeAbort == null))) goto L_11f;
  this.removeAbort;
  this;
  goto L_122;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.finishPull == null))) goto L_14e;
  this.finishPull;
  this;
  goto L_151;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.finishPull = undefined;
  try { // catch -> L_21c
  this.controller.close();
  if (!((this.controller.byobRequest == null))) goto L_1f4;
  this.controller.byobRequest;
  goto L_219;
  undefined.respond(0);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  e = <?>;
  try { // catch -> L_24b
  this.fail(e);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  this.fail(new TypeError("Fetch transport completed before response headers"));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=88B file=web_platform/src/Fetch
// args: e
// locals: this
function {
  this = this;
  if ((this.stopped)) goto L_57;
  this.fail(new TypeError(e));
  return;
}

// fn w  args=3 vars=4 closure=3 cpool=0 bc=295B file=web_platform/src/Fetch
// args: t, r, o
// locals: i
// closure: s, a, e
function {
  let i;
  i = new s.FetchHeaders({content-type: o, content-length: "".concat(t.size)});
  s.freezeHeaders(i);
  return a.makeResponse({status: 200, statusText: "OK", headers: i, url: r, redirected: false, type: "basic"}, e.extractBody(t));   // tail call
}

// fn v  args=3 vars=11 closure=5 cpool=4 bc=1237B file=web_platform/src/Fetch
// args: t, o, i
// locals: n, h, l, c, d, p, u, f
// closure: r, w, s, a, e
function {
  let f;
  let u;
  let p;
  let d;
  let c;
  let l;
  let h;
  let n;
  n = t.resolveBlobURL(o.href);
  if (!((undefined === n))) goto L_76;
  throw new TypeError("Blob URL is revoked or belongs to another runtime");
  h = r.makeBlobFromNative(n);
  l = i.headers.get("range");
  c = o.href.replace(new RegExp("#.*$"), "");
  if (!((null === l))) goto L_16d;
  return w(h, c, h.type);   // tail call
  d = new RegExp("^bytes=(\\d*)-(\\d*)$").exec(l);
  if (((null === d))) goto L_1b4;
  if (!(("" === d[1]))) goto L_1c5;
  if (!(("" === d[2]))) goto L_1c5;
  throw new TypeError("Invalid blob byte range");
  if (!(("" === d[1]))) goto L_22a;
  goto L_235;
  // [栈深重同步 1 -> 0]
  p = Number(d[1]);
  if ((("" === d[1]))) goto L_249;
  if (!(("" === d[2]))) goto L_273;
  goto L_2cd;
  // [栈深重同步 1 -> 0]
  u = Math.min(Number(d[2]), (h.size - 1));
  if (((p >= h.size))) goto L_302;
  if (!((u < p))) goto L_313;
  throw new TypeError("Unsatisfiable blob byte range");
  f = new s.FetchHeaders({content-type: h.type, content-length: ("" + ((u - p) + 1)), content-range: "bytes ".concat(p, "-", u, "/", h.size)});
  s.freezeHeaders(f);
  return a.makeResponse({status: 206, statusText: "Partial Content", headers: f, url: c, redirected: false, type: "basic"}, e.extractBody(h.slice(p, (u + 1), h.type)));   // tail call
}

// fn F  args=1 vars=11 closure=6 cpool=16 bc=1639B file=web_platform/src/Fetch
// args: t
// locals: r, i, l, c, d, p, e, u, e#1, f
// closure: o, h, n, s, a, e
function {
  let f;
  let u;
  let p;
  let d;
  let c;
  let l;
  let i;
  let r;
  r = t.href.replace(new RegExp("#.*$"), "").slice(5);
  i = r.indexOf(",");
  if (!((i < 0))) goto L_cd;
  throw new TypeError("Invalid data URL");
  l = r.slice(0, i).trim();
  c = new RegExp("; *base64$").test(l);
  if (!(c)) goto L_1a6;
  l = l.replace(new RegExp("; *base64$"), "").trim();
  l.replace(new RegExp("; *base64$"), "").trim();
  if ((("" === l))) goto L_1dc;
  if (!(l.startsWith(";"))) goto L_219;
  if ((l)) goto L_212;
  l = "text/plain".concat(";charset=US-ASCII");
  "text/plain".concat(";charset=US-ASCII");
  if (!((o.normalizeMime(l, false) == null))) goto L_24e;
  o.normalizeMime(l, false);
  l = "text/plain;charset=US-ASCII";
  "text/plain;charset=US-ASCII";
  d = new TextEncoder().encode(r.slice((i + 1)));
  p = 0;
  let e;
  e = 0;
  if (!((e < d.length))) goto L_3c0;
  if (!((37 === d[e]))) goto L_3a0;
  if (!(((e + 2) < d.length))) goto L_3a0;
  if (!(new RegExp("^[0-9a-f]{2}$").test(String.fromCharCode(d[(e + 1)], d[(e + 2)])))) goto L_3a0;
  p = <p_new>;
  e = (e ++);
  e = (e ++);
  d[(p++)] = parseInt(String.fromCharCode(d[(e ++)], d[(e ++)]), 16);
  goto L_3b4;
  // [栈深重同步 1 -> 0]
  p = <p_new>;
  d[(p++)] = d[e];
  d[e];
  e = <e_new>;
  (e++);
  goto L_2b7;
  u = d.subarray(0, p);
  if (!(c)) goto L_53c;
  let e#1;
  e#1 = h.decodeUTF8(u);
  e#1 = e#1.replace(new RegExp("[\\t\\n\\f\\r ]"), "");
  e#1.replace(new RegExp("[\\t\\n\\f\\r ]"), "");
  if (!(((e#1.length % 4) == 0))) goto L_491;
  e#1 = e#1.replace(new RegExp("={1,2}$"), "");
  e#1.replace(new RegExp("={1,2}$"), "");
  if ((((e#1.length % 4) == 1))) goto L_4ca;
  if (!(new RegExp("[^A-Za-z0-9+/]").test(e#1))) goto L_4db;
  throw new TypeError("Invalid base64 data URL");
  u = n.decodeFromBase64((e#1 + "=".repeat(((4 - (e#1.length % 4)) % 4))));
  n.decodeFromBase64((e#1 + "=".repeat(((4 - (e#1.length % 4)) % 4))));
  f = new s.FetchHeaders({content-type: l});
  s.freezeHeaders(f);
  return a.makeResponse({status: 200, statusText: "OK", headers: f, url: t.href.replace(new RegExp("#.*$"), ""), redirected: false, type: "basic"}, e.ownedBytesBody(u, l));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=web_platform/src/Fetch
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=web_platform/src/Fetch
// closure: i
function {
  return i.releaseLock();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=web_platform/src/Fetch
// closure: i
function {
  return i.releaseLock();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=2 bc=208B file=web_platform/src/Fetch
// closure: i, a, e, o, n
function {
  if ((a)) goto L_cf;
  a = true;
  true;
  e.error(o.reason);
  i.cancel(o.reason).then(function <atom:0>, function <atom:0>);
  n();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=102B file=web_platform/src/Fetch
// args: e
// locals: r
// closure: i, a, o, n, t
function {
  let r;
  r = function <atom:0>;
  n = t.addAbortStep(o, r);
  t.addAbortStep(o, r);
  if (!(o.aborted)) goto L_65;
  r();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=456B file=web_platform/src/Fetch
// args: e
// locals: t, t#1
// closure: i, a, n
function {
  try { // catch -> L_15a
  let t;
  t = (await i.read());
  if (!(a)) goto L_39;
  return undefined; // async
  if (!(t.done)) goto L_10d;
  a = true;
  true;
  i.releaseLock();
  n();
  e.close();
  if (!((e.byobRequest == null))) goto L_e6;
  e.byobRequest;
  goto L_156;
  goto L_156;
  // [栈深重同步 1 -> 0]
  e.enqueue(t.value);
  <?>;
  goto L_1c6;
  // [栈深重同步 0 -> 1]
  t#1 = <?>;
  try { // catch -> L_1c5
  if ((a)) goto L_1c1;
  a = true;
  true;
  i.releaseLock();
  n();
  e.error(t#1);
  <?>;
  goto L_1c6;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=118B file=web_platform/src/Fetch
// args: e
// closure: a, n, i
function {
  a = true;
  true;
  n();
  try { // catch -> L_45
  (await i.cancel(e));
  <?>;
  // gosub (finally 块) 75
  undefined;
  goto L_74;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 75
  throw <?>;
  i.releaseLock();
  // ret (finally 块) 
  return undefined; // async
}

// fn R  args=3 vars=8 closure=1 cpool=4 bc=358B file=web_platform/src/Fetch
// args: t, r, o
// locals: s, i, a, n, h
// closure: e
function {
  let h;
  let n;
  let a;
  let i;
  let s;
  s = e.bodyState(r);
  if (!((null === s.stream))) goto L_5f;
  return;
  i = s.stream.getReader();
  a = false;
  n = function <atom:0>;
  h = new ReadableStream({type: "bytes", start: function <atom:0>, pull: function <atom:0>, cancel: function <atom:0>});
  if (!(e.ownsStreamChunks(s.stream))) goto L_159;
  goto L_15c;
  // [栈深重同步 2 -> 1]
  s.stream = h;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=42B file=web_platform/src/Fetch
// args: e
function {
  return new RegExp("^(sha256|sha384|sha512)-([A-Za-z0-9+/_-]+={0,2})(?:\\?.*)?$").exec(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=web_platform/src/Fetch
// args: e
function {
  return (null !== e);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=48B file=web_platform/src/Fetch
// args: e
function {
  return Number(e[1].slice(3));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=web_platform/src/Fetch
// args: e, t
function {
  return (t - e);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=6 bc=197B file=web_platform/src/Fetch
// args: e
// closure: n, c
function {
  if (!((e[1] === "sha".concat(n)))) goto L_c4;
  return (e[2].replace(new RegExp("-"), "+").replace(new RegExp("_"), "/").replace(new RegExp("=+$"), "") === c);
}

// fn k  args=4 vars=10 closure=3 cpool=9 bc=738B file=web_platform/src/Fetch
// args: t, r, o, s
// locals: i, n, h, l, c, d
// closure: e, a, R
function {
  let d;
  let c;
  let l;
  let h;
  let n;
  let i;
  i = o.split(new RegExp("[\\t\\n\\f\\r ]+")).map(function <atom:0>).filter(function <atom:0>);
  if (!((0 === i.length))) goto L_93;
  return r; // async
  n = i.map(function <atom:0>).sort(function <atom:0>)[0];
  h = (null === r.body);
  l = (await e.consumeBody(r));
  c = t.digest("sha".concat(n), l).replace(new RegExp("=+$"), "");
  if (!(!i.some(function <atom:0>))) goto L_1ed;
  throw new TypeError("Fetch integrity verification failed");
  if (!(s.aborted)) goto L_234;
  throw s.reason;
  if (!(h)) goto L_2aa;
  goto L_2d3;
  // [栈深重同步 3 -> 2]
  d = a.makeResponse(a.responseState(r), e.ownedBytesBody(l, undefined));
  R(t, d, s);
  return d; // async
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=26 bc=897B file=web_platform/src/Fetch
// args: require, module, exports
// locals: e, t, r, o, s, i, a, n, h, l, c, d, p, u, f, y, m, g, b, FetchNetworkRequest, <class_fields_init>, FetchNetworkRequest#1, w, v, F, R, k
function {
  p = function p;
  u = function u;
  f = function f;
  y = function y;
  m = function m;
  g = function g;
  b = function b;
  w = function w;
  v = function v;
  F = function F;
  R = function R;
  k = function k;
  let FetchNetworkRequest#1;
  let d;
  let c;
  let l;
  let h;
  let n;
  let a;
  let i;
  let s;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createFetch = undefined;
  exports.installFetch = undefined;
  e = require("./FetchBody");
  t = require("./FetchFormData");
  r = require("./Blob");
  o = require("./FetchNative");
  s = require("./FetchHeaders");
  i = require("./FetchRequest");
  a = require("./FetchResponse");
  n = require("coreutils/src/Base64Native");
  h = require("./FetchTextDecoder");
  l = new Set([301, 302, 303, 307, 308]);
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483465>>] = 117;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483466>>] = 119;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483467>>] = 123;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483468>>] = 135;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483469>>] = 137;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483470>>] = 139;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483471>>] = 143;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483472>>] = 161;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483473>>] = 179;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483474>>] = 389;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483475>>] = 427;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483476>>] = 465;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483477>>] = 512;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483478>>] = 513;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483479>>] = 514;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483480>>] = 515;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483481>>] = 526;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483482>>] = 530;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483483>>] = 531;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483484>>] = 532;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483485>>] = 540;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483486>>] = 548;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483487>>] = 554;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483488>>] = 556;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483489>>] = 563;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483490>>] = 587;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483491>>] = 601;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483492>>] = 636;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483493>>] = 989;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483494>>] = 990;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483495>>] = 993;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483496>>] = 995;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483497>>] = 1719;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483498>>] = 1720;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483499>>] = 1723;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483500>>] = 2049;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483501>>] = 3659;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483502>>] = 4045;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483503>>] = 5060;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483504>>] = 5061;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483505>>] = 6000;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483506>>] = 6566;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483507>>] = 6665;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483508>>] = 6666;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483509>>] = 6667;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483510>>] = 6668;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483511>>] = 6669;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483512>>] = 6697;
  [0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115][<<bad:2147483513>>] = 10080;
  c = new Set([0, 1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115]);
  d = 65536;
  exports.createFetch = p;
  exports.installFetch = f;
  let FetchNetworkRequest;
  let <class_fields_init>;
  class FetchNetworkRequest extends undefined { ... }
  <proto:FetchNetworkRequest>.start = function <atom:0>;
  <proto:FetchNetworkRequest>.releaseFinalQuota = function <atom:0>;
  <proto:FetchNetworkRequest>.stopUpload = function <atom:0>;
  <proto:FetchNetworkRequest>.stop = function <atom:0>;
  <proto:FetchNetworkRequest>.fail = function <atom:0>;
  <proto:FetchNetworkRequest>.pull = function <atom:0>;
  <proto:FetchNetworkRequest>.pumpUpload = function <atom:0>;
  <proto:FetchNetworkRequest>.onResponse = function <atom:0>;
  <proto:FetchNetworkRequest>.onData = function <atom:0>;
  <proto:FetchNetworkRequest>.onUploadReady = function <atom:0>;
  <proto:FetchNetworkRequest>.onUploadStopped = function <atom:0>;
  <proto:FetchNetworkRequest>.onComplete = function <atom:0>;
  <proto:FetchNetworkRequest>.onError = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FetchNetworkRequest>;
  FetchNetworkRequest = function <atom:0>;
  // close_loc <class_fields_init>
  FetchNetworkRequest#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/Fetch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
