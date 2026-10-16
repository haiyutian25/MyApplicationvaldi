// fn r  args=1 vars=8 closure=1 cpool=0 bc=549B file=dil_renderer/src/DILDictation
// args: e
// locals: n, r, i, o, c, s, a
// closure: t
function {
  let a;
  let s;
  let c;
  let o;
  let i;
  let r;
  let n;
  if (((null === e))) goto L_52;
  if ((("object" != typeof e))) goto L_52;
  if (!(Array.isArray(e))) goto L_56;
  return null;
  n = e;
  r = n.language;
  if (!((undefined !== r))) goto L_ca;
  if ((("string" != typeof r))) goto L_c6;
  if ((!r.trim())) goto L_c6;
  if (!((r.length > 128))) goto L_ca;
  return null;
  if (!((undefined === r))) goto L_d4;
  goto L_dd;
  // [栈深重同步 1 -> 0]
  i = {language: r};
  o = n.context;
  if (!((undefined === o))) goto L_10e;
  return i;
  if (((null === o))) goto L_151;
  if ((("object" != typeof o))) goto L_151;
  if (!(Array.isArray(o))) goto L_155;
  return null;
  c = o;
  s = c.kind;
  a = c.expectedPhrase;
  if (!((s === t.SpeakingExercise))) goto L_223;
  if (!(("string" == typeof a))) goto L_223;
  if (!(a.trim())) goto L_223;
  null;
  i;
  return {context: {kind: s, expectedPhrase: a}};
  return null;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=16B file=dil_renderer/src/DILDictation
// args: t
function {
  t.SpeakingExercise = "speaking_exercise";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=dil_renderer/src/DILDictation
// args: t
function {
  t.Idle = "idle";
  t.Starting = "starting";
  t.Recording = "recording";
  t.Stopping = "stopping";
  t.Done = "done";
  t.Error = "error";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=dil_renderer/src/DILDictation
// args: t
function {
  t.Recording = "recording";
  t.Transcript = "transcript";
  t.Stopping = "stopping";
  t.Done = "done";
  t.Error = "error";
  t.Cancelled = "cancelled";
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=181B file=dil_renderer/src/DILDictation
// args: require, module, exports
// locals: t, e, n, r
function {
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDictationContextKind = undefined;
  exports.DILDictationStatus = undefined;
  exports.DILDictationEventKind = undefined;
  exports.normalizeDILDictationOptions = undefined;
  if ((t)) goto L_7b;
  t = {};
  exports.DILDictationContextKind = {};
  function <atom:0>({});
  if ((e)) goto L_91;
  e = {};
  exports.DILDictationStatus = {};
  function <atom:0>({});
  if ((n)) goto L_a7;
  n = {};
  exports.DILDictationEventKind = {};
  function <atom:0>({});
  exports.normalizeDILDictationOptions = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILDictation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
