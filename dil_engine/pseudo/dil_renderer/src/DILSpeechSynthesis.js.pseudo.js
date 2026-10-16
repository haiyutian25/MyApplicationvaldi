// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_renderer/src/DILSpeechSynthesis
// args: e
function {
  e.Idle = "idle";
  e.Loading = "loading";
  e.Playing = "playing";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_renderer/src/DILSpeechSynthesis
// args: e
function {
  e.Play = "play";
  e.Request = "request";
  e.Response = "response";
  e.Streaming = "streaming";
  return;
}

// fn o  args=1 vars=11 closure=2 cpool=0 bc=785B file=dil_renderer/src/DILSpeechSynthesis
// args: e
// locals: t, n, e#1, r, o, e#2, t#1, n#1, e#3, t#2
// closure: r, n
function {
  try { // catch -> L_2da
  let o;
  let n;
  let t;
  if (((null === e))) goto L_4b;
  if ((("object" != typeof e))) goto L_4b;
  if (!(Array.isArray(e))) goto L_50;
  return undefined;
  t = e;
  n = {};
  let e#1;
  for (const e#1 of r) {
    let r;
    r = t[e#1];
    if (!((undefined !== r))) continue;
    if ((("string" != typeof r))) goto L_b2;
    if ((!r.trim())) goto L_b2;
    if (!((r.length > 256))) goto L_bb;
    return undefined;
    // [栈深重同步 0 -> 3]
    n[e#1] = r;
  }
  if (!((0 === Object.keys(n).length))) goto L_100;
  return undefined;
  o = t.event_data;
  if (!((undefined !== o))) goto L_2a0;
  let t#1;
  let e#2;
  if (((null === o))) goto L_179;
  if ((("object" != typeof o))) goto L_179;
  if (!(Array.isArray(o))) goto L_17e;
  return undefined;
  e#2 = Object.keys(o);
  if (!((e#2.length > 32))) goto L_1b8;
  return undefined;
  t#1 = Object.create(null);
  let n#1;
  for (const n#1 of e#2) {
    let e#3;
    e#3 = o[n#1];
    if (((n#1.length > 128))) goto L_274;
    if (((null === e#3))) goto L_273;
    if ((("boolean" == typeof e#3))) goto L_273;
    if (!(("string" == typeof e#3))) goto L_235;
    if (((e#3.length <= 2048))) goto L_273;
    if (!(("number" == typeof e#3))) goto L_273;
    if (!(!Number.isFinite(e#3))) goto L_27d;
    return undefined;
    // [栈深重同步 0 -> 3]
    t#1[n#1] = e#3;
  }
  n.event_data = t#1;
  if (!((JSON.stringify(n).length <= 16384))) goto L_2d8;
  return n;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  t#2 = <?>;
  try { // catch -> L_310
  n.warn("DIL speech logging metadata could not be read");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn i  args=1 vars=8 closure=1 cpool=1 bc=445B file=dil_renderer/src/DILSpeechSynthesis
// args: e
// locals: t, n, r, i, e#1, n#1, o
// closure: s
function {
  let o;
  let r;
  let n;
  let t;
  if (((null === e))) goto L_1b;
  if (!(("object" != typeof e))) goto L_1f;
  return null;
  t = e;
  n = t.text;
  if ((("string" != typeof n))) goto L_8a;
  if ((!n.trim())) goto L_8a;
  if (!((n.length > 32768))) goto L_8e;
  return null;
  r = {text: n};
  let i;
  for (const i of Object.keys(s)) {
    let n#1;
    let e#1;
    e#1 = t[i];
    if (((undefined === e#1))) continue;
    n#1 = s[i];
    if ((("string" != typeof e#1))) goto L_100;
    if (!((e#1.length > n#1))) goto L_108;
    return null;
    // [栈深重同步 0 -> 3]
    if (!(("version" === i))) goto L_11a;
    if ((("" === e#1))) goto L_12a;
    r[i] = e#1;
    e#1;
  }
  o = t.playbackSpeed;
  if (!(("number" == typeof o))) goto L_1b8;
  if (!(Number.isFinite(o))) goto L_1b8;
  if (!((o >= 0.25))) goto L_1b8;
  if (!((o <= 4))) goto L_1b8;
  r.playbackSpeed = o;
  o;
  return r;
}

// fn a  args=1 vars=6 closure=3 cpool=0 bc=872B file=dil_renderer/src/DILSpeechSynthesis
// args: n
// locals: r, o, e, n#1, t
// closure: exports, t, e
function {
  let o;
  let r;
  if (((null === n))) goto L_15;
  if (!(("object" != typeof n))) goto L_3a;
  return exports.UNAVAILABLE_DIL_SPEECH;
  r = n;
  o = null;
  if (!((null !== r.error))) goto L_225;
  if (!(("object" == typeof r.error))) goto L_225;
  let n#1;
  let e;
  e = r.error;
  n#1 = e.failureStage;
  if (((n#1 === t.Play))) goto L_18d;
  if (((n#1 === t.Request))) goto L_18d;
  if (((n#1 === t.Response))) goto L_18d;
  if (!((n#1 === t.Streaming))) goto L_225;
  let t;
  t = e.httpStatus;
  if (!(("number" == typeof t))) goto L_21a;
  if (!(Number.isInteger(t))) goto L_21a;
  if (!((t >= 100))) goto L_21a;
  if (!((t <= 599))) goto L_21a;
  goto L_21b;
  // [栈深重同步 2 -> 1]
  null;
  {};
  o = {failureStage: n#1};
  {failureStage: n#1};
  if (!((null !== o))) goto L_27e;
  goto L_35a;
  // [栈深重同步 2 -> 1]
  if (((r.status === e.Loading))) goto L_310;
  if (!((r.status === e.Playing))) goto L_338;
  goto L_35a;
  // [栈深重同步 2 -> 1]
  return {available: (true === r.available), status: e.Idle, error: o};
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=388B file=dil_renderer/src/DILSpeechSynthesis
// args: require, module, exports
// locals: e, t, n, r, o, s, i, a
function {
  o = function o;
  i = function i;
  a = function a;
  let s;
  let r;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSpeechStatus = undefined;
  exports.DILSpeechFailureStage = undefined;
  exports.normalizeDILSpeechRequestLog = undefined;
  exports.UNAVAILABLE_DIL_SPEECH = undefined;
  exports.normalizeDILSpeechSource = undefined;
  exports.sanitizeDILSpeechState = undefined;
  if ((e)) goto L_a3;
  e = {};
  exports.DILSpeechStatus = {};
  function <atom:0>({});
  if ((t)) goto L_b9;
  t = {};
  exports.DILSpeechFailureStage = {};
  function <atom:0>({});
  n = console;
  r = ["event_name", "statsig_event_name", "structured_event_name"];
  exports.normalizeDILSpeechRequestLog = o;
  exports.UNAVAILABLE_DIL_SPEECH = Object.freeze({status: e.Idle, available: false, error: null});
  s = {language: 128, pronunciationHint: 4096, version: 256, source: 128};
  exports.normalizeDILSpeechSource = i;
  exports.sanitizeDILSpeechState = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILSpeechSynthesis
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
