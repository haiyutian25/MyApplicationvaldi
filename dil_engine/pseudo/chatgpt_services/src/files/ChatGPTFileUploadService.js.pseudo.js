// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, n
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.session = e;
  this.networkClient = t;
  this.uploadClient = n;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// closure: c
function {
  c(e);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=509B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: n, o, e#1, r, this
// closure: w
function {
  this = this;
  let n;
  n = [];
  let o;
  for (const o of e) {
    let r;
    let e#1;
    if (!(!t.isActive())) goto L_49;
    return n; // async
    // [栈深重同步 0 -> 3]
    e#1 = (await this.createFileUpload(o, t));
    if (!(!t.isActive())) goto L_a5;
    return n; // async
    // [栈深重同步 0 -> 3]
    r = (await this.uploadFileContents(o, e#1, t));
    if (!(!t.isActive())) goto L_104;
    return n; // async
    // [栈深重同步 0 -> 3]
    if ((w(e#1.uploadURL))) goto L_17d;
    (await this.processUploadedFile(o, e#1.fileId, t));
    if (!((undefined === r))) goto L_1de;
    goto L_1e7;
    // [栈深重同步 7 -> 6]
    null;
    {imageDimensions: r};
    n.push({file: o, fileId: e#1.fileId});
  }
  return n; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
function {
  return e;
}

// fn <atom:0>  args=2 vars=5 closure=4 cpool=1 bc=832B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: o, r, this
// closure: i, n, P, p
function {
  this = this;
  let r;
  let o;
  if (!(e.mimeType.startsWith("image/"))) goto L_1a7;
  goto L_1ac;
  // [栈深重同步 6 -> 5]
  o = this.networkClient.requestJson({request: {method: "POST", path: i, jsonBody: {client_resolved_mime_type: e.mimeType, entry_surface: "chat_composer", file_name: e.name, file_size: e.size, mime_resolution_source: "declared_mime", mime_type: e.mimeType, reset_rate_limits: false, selection_method: "file_picker", timezone_offset_min: new Date().getTimezoneOffset(), use_case: "ace_upload"}}, decode: function <atom:0>});
  t.trackAPIRequest(o);
  r = (await o.result);
  if (!((r.kind !== n.OAINetworkResultKind.Success))) goto L_2d6;
  throw P(r.kind, r.statusCode, "start");
  return p(r.value, this.session.baseUrl); // async
}

// fn <atom:0>  args=3 vars=12 closure=7 cpool=0 bc=1272B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, n
// locals: i, a, s, l, n#1, o, n#2, c, this
// closure: d, h, _, r, y, v, o
function {
  this = this;
  let l;
  let s;
  let a;
  let i;
  i = d(e);
  if (!(e.mimeType.startsWith("image/"))) goto L_89;
  goto L_8a;
  // [栈深重同步 1 -> 0]
  a = undefined;
  s = undefined;
  l = undefined;
  if (!(_(t.uploadURL))) goto L_2c1;
  let o;
  let n#1;
  n#1 = "valdi-".concat(r.createChatGPTConversationMessageId());
  o = y(e, i, t, n#1);
  s = this.uploadClient.post(t.uploadURL.href, o, {Authorization: "Bearer ".concat(this.session.accessToken), ChatGPT-Account-Id: this.session.activeAccount.id, Content-Type: "multipart/form-data; boundary=".concat(n#1)});
  this.uploadClient.post(t.uploadURL.href, o, {Authorization: "Bearer ".concat(this.session.accessToken), ChatGPT-Account-Id: this.session.activeAccount.id, Content-Type: "multipart/form-data; boundary=".concat(n#1)});
  goto L_3cc;
  let n#2;
  n#2 = {Content-Type: e.mimeType};
  if ((v(t.uploadURL))) goto L_336;
  n#2["x-ms-blob-type"] = "BlockBlob";
  n#2["x-ms-version"] = "2020-04-08";
  "2020-04-08";
  s = this.uploadClient.put(t.uploadURL.href, i, n#2);
  this.uploadClient.put(t.uploadURL.href, i, n#2);
  n.trackUploadRequest(s);
  try { // catch -> L_40d
  l = (await s);
  (await s);
  <?>;
  // gosub (finally 块) 1096
  undefined;
  goto L_470;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_442
  throw new o.ChatGPTConversationError("The selected attachment could not be uploaded.");
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1096
  throw <?>;
  n.trackUploadRequest(undefined);
  // ret (finally 块) 
  if (((l.statusCode < 200))) goto L_4c4;
  if (!((l.statusCode >= 300))) goto L_4f4;
  throw new o.ChatGPTConversationError("The selected attachment could not be uploaded.");
  return a; // async
}

// fn <atom:0>  args=3 vars=6 closure=4 cpool=0 bc=571B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, o
// locals: r, i, this
// closure: a, n, g, P
function {
  this = this;
  let i;
  let r;
  if (!(e.mimeType.startsWith("image/"))) goto L_f1;
  goto L_f6;
  // [栈深重同步 5 -> 4]
  r = this.networkClient.requestText({method: "POST", path: a, jsonBody: {entry_surface: "chat_composer", file_id: t, file_name: e.name, index_for_retrieval: false, use_case: "ace_upload"}});
  o.trackAPIRequest(r);
  i = (await r.result);
  if (((i.kind !== n.OAINetworkResultKind.Success))) goto L_1e7;
  if (!(g(i.value))) goto L_239;
  throw P(i.kind, i.statusCode, "process");
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=124B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// closure: a, r
function {
  if (!(e.startsWith("."))) goto L_55;
  return a.endsWith(e);
  return (e === r.mimeType);
}

// fn c  args=1 vars=7 closure=3 cpool=5 bc=986B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// locals: n, r, e#1, i, a, l
// closure: t, o, s
function {
  let n;
  if (!((e.length > t.MAX_PICKED_FILES))) goto L_5a;
  throw new o.ChatGPTConversationError("Too many attachments were selected.");
  n = 0;
  let r;
  // close_loc r
  for (const r of e) {
    let l;
    let a;
    let i;
    let e#1;
    if (!((r.name.length > 0))) goto L_11a;
    if (!((r.name.length <= s))) goto L_11a;
    e#1 = !new RegExp("[\\u0000-\\u001f\\u007f/\\\\\"]").test(r.name);
    if (!((r.mimeType.length <= 128))) goto L_195;
    i = new RegExp("^[A-Za-z\\d][A-Za-z\\d!#$&^_.+-]*\\/[A-Za-z\\d][A-Za-z\\d!#$&^_.+-]*$").test(r.mimeType);
    a = r.name.toLowerCase();
    l = t.ATTACHMENT_ACCEPT_TYPES.some(function <atom:0>);
    if ((!e#1)) goto L_312;
    if ((!i)) goto L_312;
    if ((!l)) goto L_312;
    if ((!Number.isSafeInteger(r.size))) goto L_312;
    if (((r.size <= 0))) goto L_312;
    if (!((r.size > t.MAX_PICKED_FILE_BYTES))) goto L_342;
    throw new o.ChatGPTConversationError("The selected attachment is invalid or too large.");
    n = (n + r.size);
    (n + r.size);
    if (!((n > t.MAX_PICKED_TOTAL_BYTES))) goto L_3c7;
    throw new o.ChatGPTConversationError("The selected attachments exceed the upload size limit.");
    // close_loc a
    // close_loc r
  }
  // close_loc r
  return;
}

// fn d  args=1 vars=5 closure=2 cpool=2 bc=658B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: t
// locals: n, r, i, a
// closure: o, e
function {
  let i;
  let r;
  let n;
  n = "data:".concat(t.mimeType, ";base64,");
  if (!(!t.dataUrl.startsWith(n))) goto L_d4;
  throw new o.ChatGPTConversationError("The selected attachment contents are invalid.");
  r = t.dataUrl.slice(n.length);
  if ((!new RegExp("^[A-Za-z\\d+/]+={0,2}$").test(r))) goto L_158;
  if (!(((r.length % 4) != 0))) goto L_188;
  throw new o.ChatGPTConversationError("The selected attachment contents are invalid.");
  i = undefined;
  try { // catch -> L_1e2
  i = e.Base64.toByteArray(r);
  e.Base64.toByteArray(r);
  <?>;
  goto L_217;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_216
  throw new o.ChatGPTConversationError("The selected attachment contents are invalid.");
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((i.byteLength !== t.size))) goto L_28e;
  throw new o.ChatGPTConversationError("The selected attachment contents are invalid.");
  return i;
}

// fn h  args=2 vars=5 closure=4 cpool=0 bc=817B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: n, r, e#1
// closure: m, f, u, o
function {
  let r;
  let n;
  n = 0;
  r = 0;
  if (!(("image/png" === e))) goto L_7e;
  if (!((t.byteLength >= 24))) goto L_7e;
  if (!((137 === t[0]))) goto L_7e;
  if (!((80 === t[1]))) goto L_7e;
  if (!((78 === t[2]))) goto L_7e;
  if (!((71 === t[3]))) goto L_7e;
  if (!(m(t, 12, "IHDR"))) goto L_7e;
  n = f(t, 16);
  f(t, 16);
  r = f(t, 20);
  f(t, 20);
  goto L_2c7;
  if (!(("image/gif" === e))) goto L_eb;
  if (!((t.byteLength >= 10))) goto L_eb;
  if ((m(t, 0, "GIF87a"))) goto L_c4;
  if (!(m(t, 0, "GIF89a"))) goto L_eb;
  n = (t[6] + (256 * t[7]));
  (t[6] + (256 * t[7]));
  r = (t[8] + (256 * t[9]));
  (t[8] + (256 * t[9]));
  goto L_2c7;
  if (!(("image/jpeg" === e))) goto L_150;
  let e#1;
  e#1 = u(t);
  n = e#1.width;
  e#1.width;
  r = e#1.height;
  e#1.height;
  goto L_2c7;
  if (!(("image/webp" === e))) goto L_2c6;
  if (!((t.byteLength >= 30))) goto L_2c6;
  if (!(m(t, 0, "RIFF"))) goto L_2c6;
  if (!(m(t, 8, "WEBP"))) goto L_2c6;
  if (!(m(t, 12, "VP8X"))) goto L_1f7;
  n = (((1 + t[24]) + (256 * t[25])) + (65536 * t[26]));
  (((1 + t[24]) + (256 * t[25])) + (65536 * t[26]));
  r = (((1 + t[27]) + (256 * t[28])) + (65536 * t[29]));
  goto L_2c6;
  // [栈深重同步 1 -> 0]
  if (!(m(t, 12, "VP8L"))) goto L_26e;
  if (!((47 === t[20]))) goto L_26e;
  n = ((1 + t[21]) + (256 * (63 & t[22])));
  ((1 + t[21]) + (256 * (63 & t[22])));
  r = (((1 + Math.floor((t[22] / 64))) + (4 * t[23])) + (1024 * (15 & t[24])));
  goto L_2c6;
  // [栈深重同步 1 -> 0]
  if (!(m(t, 12, "VP8 "))) goto L_2c6;
  if (!((157 === t[23]))) goto L_2c6;
  if (!((1 === t[24]))) goto L_2c6;
  if (!((42 === t[25]))) goto L_2c6;
  n = (t[26] + (256 * (63 & t[27])));
  (t[26] + (256 * (63 & t[27])));
  r = (t[28] + (256 * (63 & t[29])));
  (t[28] + (256 * (63 & t[29])));
  if (((n <= 0))) goto L_2ef;
  if (((r <= 0))) goto L_2ef;
  if (((n > 32768))) goto L_2ef;
  if (!((r > 32768))) goto L_31f;
  throw new o.ChatGPTConversationError("The selected image is invalid or too large.");
  return {height: r, width: n};
}

// fn u  args=1 vars=4 closure=1 cpool=0 bc=634B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// locals: t, n, o
// closure: o
function {
  let t;
  if (((e.byteLength < 4))) goto L_3d;
  if (((255 !== e[0]))) goto L_3d;
  if (!((216 !== e[1]))) goto L_6d;
  throw new o.ChatGPTConversationError("The selected image is invalid or too large.");
  t = 2;
  if (!(((t + 3) < e.byteLength))) goto L_24c;
  if (!((255 === e[t]))) goto L_24c;
  let o;
  let n;
  if (!((t < e.byteLength))) goto L_ed;
  if (!((255 === e[t]))) goto L_ed;
  t = <t_new>;
  (t++);
  goto L_b0;
  t = <t_new>;
  n = e[(t++)];
  if (((216 === n))) goto L_11b;
  if (((1 === n))) goto L_11b;
  if (!((n >= 208))) goto L_120;
  if (((n <= 215))) goto L_6f;
  if (((217 === n))) goto L_15e;
  if (((218 === n))) goto L_15e;
  if ((((t + 1) >= e.byteLength))) goto L_24c;
  o = ((256 * e[t]) + e[(t + 1)]);
  if (((o < 2))) goto L_1a8;
  if ((((t + o) > e.byteLength))) goto L_24c;
  if (!((o >= 7))) goto L_23d;
  if (!((n >= 192))) goto L_1c9;
  if (((n <= 195))) goto L_209;
  if (!((n >= 197))) goto L_1df;
  if (((n <= 199))) goto L_209;
  if (!((n >= 201))) goto L_1f5;
  if (((n <= 203))) goto L_209;
  if (!((n >= 205))) goto L_23d;
  if (!((n <= 207))) goto L_23d;
  return {height: ((256 * e[(t + 3)]) + e[(t + 4)]), width: ((256 * e[(t + 5)]) + e[(t + 6)])};
  t = (t + o);
  (t + o);
  goto L_6f;
  throw new o.ChatGPTConversationError("The selected image is invalid or too large.");
}

// fn m  args=3 vars=4 closure=0 cpool=0 bc=123B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, n
// locals: o
function {
  if (!(((t + n.length) > e.byteLength))) goto L_2c;
  return false;
  let o;
  o = 0;
  if (!((o < n.length))) goto L_78;
  if (!((e[(t + o)] !== n.charCodeAt(o)))) goto L_6e;
  return false;
  o = <o_new>;
  (o++);
  goto L_31;
  return true;
}

// fn f  args=2 vars=2 closure=0 cpool=0 bc=38B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
function {
  return ((((16777216 * e[t]) + (65536 * e[(t + 1)])) + (256 * e[(t + 2)])) + e[(t + 3)]);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// closure: r
function {
  return r.hostname.endsWith(e);   // tail call
}

// fn p  args=2 vars=6 closure=5 cpool=3 bc=674B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: n, r, i, a
// closure: G, o, C, l, _
function {
  let a;
  let i;
  let r;
  let n;
  if ((!G(e))) goto L_ec;
  if ((("success" !== e.status))) goto L_ec;
  if ((("string" != typeof e.file_id))) goto L_ec;
  if ((!new RegExp("^[A-Za-z\\d_-]{1,256}$").test(e.file_id))) goto L_ec;
  if (!(("string" != typeof e.upload_url))) goto L_11c;
  throw new o.ChatGPTConversationError("ChatGPT could not create a secure attachment upload.");
  n = C(t, undefined);
  if (!((n == null))) goto L_14f;
  n;
  goto L_170;
  r = C(e.upload_url, undefined.origin);
  if (((undefined === n))) goto L_180;
  if (!((undefined === r))) goto L_1b0;
  throw new o.ChatGPTConversationError("ChatGPT returned an invalid attachment destination.");
  i = (r.origin === n.origin);
  a = l.some(function <atom:0>);
  if (!(!i)) goto L_230;
  if ((!a)) goto L_241;
  if (!(i)) goto L_271;
  if (!(!_(r))) goto L_271;
  throw new o.ChatGPTConversationError("ChatGPT returned an untrusted attachment destination.");
  return {fileId: e.file_id, uploadURL: r};
}

// fn C  args=2 vars=6 closure=0 cpool=7 bc=762B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: n, o, r, i
function {
  let i;
  let r;
  let o;
  let n;
  if ((new RegExp("[\\u0000-\\u001f\\u007f\\\\]").test(e))) goto L_64;
  if (!(e.includes("#"))) goto L_67;
  return;
  if (!(e.startsWith("/"))) goto L_ee;
  if (!(!e.startsWith("//"))) goto L_ee;
  if (!((undefined !== t))) goto L_ee;
  goto L_ef;
  // [栈深重同步 1 -> 0]
  n = e;
  o = new RegExp("^https:\\/\\/([^/?#]+)(\\/[^?#]*)?(\\?[^#]*)?$").exec(n);
  if (((null === o))) goto L_154;
  if (!(o[1].includes("@"))) goto L_157;
  return;
  r = new RegExp("^([A-Za-z\\d.-]+)(?::(\\d+))?$").exec(o[1]);
  if (((null === r))) goto L_239;
  if ((r[1].startsWith("."))) goto L_239;
  if ((r[1].endsWith("."))) goto L_239;
  if ((r[1].includes(".."))) goto L_239;
  if (!((undefined !== r[2]))) goto L_23c;
  if (!(("443" !== r[2]))) goto L_23c;
  return;
  i = r[1].toLowerCase();
  if (!((o[2] == null))) goto L_2b7;
  o[2];
  if (!((o[3] == null))) goto L_2c9;
  o[3];
  goto L_2ee;
  if (!((undefined.slice(1) == null))) goto L_2f4;
  undefined.slice(1);
  return {href: n, hostname: i, origin: "https://".concat(i), pathname: "/", query: ""};
}

// fn T  args=2 vars=7 closure=1 cpool=4 bc=440B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// locals: r, e#1, i, a, n
// closure: o
function {
  let r;
  for (const r of e.query.split("&")) {
    let a;
    let i;
    let e#1;
    e#1 = r.indexOf("=");
    if (!((e#1 < 0))) goto L_95;
    goto L_c0;
    // [栈深重同步 4 -> 3]
    i = r.slice(0, e#1);
    if (!((e#1 < 0))) goto L_cb;
    goto L_f7;
    // [栈深重同步 4 -> 3]
    a = r.slice((e#1 + 1));
    try { // catch -> L_178
    if (!((decodeURIComponent(i.replace(new RegExp("\\+"), " ")) === t))) goto L_175;
    return decodeURIComponent(a.replace(new RegExp("\\+"), " "));
    // [栈深重同步 0 -> 3]
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_1ad
    throw new o.ChatGPTConversationError("ChatGPT returned an invalid attachment destination.");
    // [栈深重同步 3 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return;
}

// fn _  args=1 vars=1 closure=0 cpool=0 bc=155B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
function {
  if ((e.pathname.endsWith("/api/estuary/upload_content_and_finalize"))) goto L_9a;
  return e.pathname.endsWith("/api/estuary/upload_content_bytes");
}

// fn w  args=1 vars=1 closure=0 cpool=0 bc=75B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
function {
  return e.pathname.endsWith("/api/estuary/upload_content_and_finalize");   // tail call
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=75B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
function {
  return e.hostname.endsWith(".amazonaws.com");   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=138B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
// closure: i, r, o
function {
  i.push(r.encode("--".concat(o, "
Content-Disposition: form-data; name="", e, ""

", t, "
")));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=37B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t
function {
  return (e + t.byteLength);
}

// fn y  args=4 vars=10 closure=2 cpool=2 bc=962B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, n, o
// locals: r, i, a, s, l, c
// closure: T, w
function {
  let l;
  let s;
  let a;
  let i;
  let r;
  r = new TextEncoder();
  i = [];
  a = function <atom:0>;
  i.push(r.encode("--".concat(o, "
Content-Disposition: form-data; name="file"; filename="", e.name, ""
Content-Type: ", e.mimeType, "

")), t, r.encode("
"));
  if (!((T(n.uploadURL, "upload_url") == null))) goto L_197;
  T(n.uploadURL, "upload_url");
  a("upload_url", n.uploadURL.href);
  if (!(w(n.uploadURL))) goto L_29c;
  a("file_id", n.fileId);
  a("file_name", e.name);
  if (!(e.mimeType.startsWith("image/"))) goto L_278;
  goto L_27d;
  // [栈深重同步 3 -> 2]
  a("use_case", "ace_upload");
  a("index_for_retrieval", "false");
  a("entry_surface", "chat_composer");
  i.push(r.encode("--".concat(o, "--
")));
  s = new Uint8Array(i.reduce(function <atom:0>, 0));
  l = 0;
  let c;
  for (const c of i) {
    s.set(c, l);
    l = (l + c.byteLength);
    (l + c.byteLength);
  }
  return s;
}

// fn g  args=1 vars=5 closure=2 cpool=0 bc=484B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
// locals: n, e#1, r, t
// closure: o, G
function {
  if (!((undefined === e))) goto L_8;
  return true;
  let n;
  for (const n of e.split("
")) {
    let r;
    let e#1;
    e#1 = n.trim();
    if (((0 === e#1.length))) continue;
    r = undefined;
    try { // catch -> L_ae
    r = JSON.parse(e#1);
    JSON.parse(e#1);
    <catch>;
    goto L_e3;
    // [栈深重同步 2 -> 4]
    t = <?>;
    try { // catch -> L_e2
    throw new o.ChatGPTConversationError("ChatGPT returned an invalid attachment processing response.");
    // [栈深重同步 3 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
    if (!(G(r))) continue;
    if (!(("string" == typeof r.event))) continue;
    if (!((r.event.split(".").pop() == null))) goto L_1cc;
    r.event.split(".").pop();
    if (!(["error", "failed", "cancelled", "unknown"].includes(""))) continue;
    return true;
    // [栈深重同步 0 -> 2]
  }
  return false;
}

// fn P  args=3 vars=3 closure=2 cpool=0 bc=249B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e, t, r
// closure: o, n
function {
  if (!((401 === t))) goto L_35;
  return new o.ChatGPTConversationError("Your ChatGPT session expired. Sign in again.");
  if (!((429 === t))) goto L_6a;
  return new o.ChatGPTConversationError("The ChatGPT attachment upload limit has been reached.");
  if (!((t == null))) goto L_ec;
  t;
  return new o.ChatGPTConversationError("The ChatGPT attachment ".concat(r, " request failed (", String(n.OAINetworkResultKind[e]), ")."));
}

// fn G  args=1 vars=1 closure=0 cpool=0 bc=63B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=22 bc=326B file=chatgpt_services/src/files/ChatGPTFileUploadService
// args: require, module, exports
// locals: e, t, n, o, r, i, a, s, l, ChatGPTFileUploadService, <class_fields_init>, ChatGPTFileUploadService#1, c, d, h, u, m, f, p, C, T, _, w, v, y, g, P, G
function {
  c = function c;
  d = function d;
  h = function h;
  u = function u;
  m = function m;
  f = function f;
  p = function p;
  C = function C;
  T = function T;
  _ = function _;
  w = function w;
  v = function v;
  y = function y;
  g = function g;
  P = function P;
  G = function G;
  let ChatGPTFileUploadService#1;
  let l;
  let s;
  let a;
  let i;
  let r;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTFileUploadService = undefined;
  e = require("coreutils/src/Base64");
  t = require("oai_file_picker/src/FilePickerPolicy");
  n = require("oai_platform_services/src/OAINetworkClient");
  o = require("../conversations/ChatGPTConversationError");
  r = require("../conversations/ChatGPTConversationIdentifiers");
  i = "/backend-api/files";
  a = "/backend-api/files/process_upload_stream";
  s = 512;
  l = [".blob.core.windows.net", ".blob.storage.azure.net", ".amazonaws.com", ".oaiusercontent.com"];
  let ChatGPTFileUploadService;
  let <class_fields_init>;
  class ChatGPTFileUploadService extends undefined { ... }
  <proto:ChatGPTFileUploadService>.validate = function <atom:0>;
  <proto:ChatGPTFileUploadService>.upload = function <atom:0>;
  <proto:ChatGPTFileUploadService>.createFileUpload = function <atom:0>;
  <proto:ChatGPTFileUploadService>.uploadFileContents = function <atom:0>;
  <proto:ChatGPTFileUploadService>.processUploadedFile = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTFileUploadService>;
  ChatGPTFileUploadService = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTFileUploadService#1 = function <atom:0>;
  exports.ChatGPTFileUploadService = ChatGPTFileUploadService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_services/src/files/ChatGPTFileUploadService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
