// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=113B file=dil_widgets/src/DILSpeechSynthesisService
// args: t
// locals: s
// closure: c, e
function {
  if (!((undefined !== t))) goto L_70;
  try { // catch -> L_10
  c(t);
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_6f
  if (!(e.isLoggingEnabled)) goto L_6c;
  console.warn("DIL speech request logging failed");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=dil_widgets/src/DILSpeechSynthesisService
// args: e
// closure: c, t
function {
  c(t.sanitizeDILSpeechState(e));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=287B file=dil_widgets/src/DILSpeechSynthesisService
// args: e
// closure: o, s, a, n
function {
  if (!(o.state.available)) goto L_11e;
  if (!((o.state.status === s.SpeechSynthesisStatus.Idle))) goto L_11e;
  if (!(a())) goto L_11e;
  try { // catch -> L_111
  o.play();
  <?>;
  // gosub (finally 块) 279
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 279
  throw <?>;
  n(e);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=161B file=dil_widgets/src/DILSpeechSynthesisService
// args: e
// locals: t
// closure: o, a, n
function {
  let t;
  if (!((undefined !== e))) goto L_55;
  if (!(o.state.available)) goto L_55;
  t = a();
  try { // catch -> L_8c
  o.stop();
  <?>;
  // gosub (finally 块) 146
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 146
  throw <?>;
  if (!(t)) goto L_9e;
  n(e);
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/DILSpeechSynthesisService
// closure: o
function {
  return o.dispose();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=6 cpool=4 bc=128B file=dil_widgets/src/DILSpeechSynthesisService
// args: e, c
// locals: o
// closure: t, s, a, n, i, r
function {
  let o;
  o = s.createSpeechSynthesizer(i, r, function <atom:0>);
  o.setSource(e);
  return {play: function <atom:0>, stop: function <atom:0>, dispose: function <atom:0>};
}

// fn i  args=4 vars=5 closure=3 cpool=2 bc=25B file=dil_widgets/src/DILSpeechSynthesisService
// args: i, r, a, c
// locals: n
// closure: e, t, s
function {
  let n;
  n = function <atom:0>;
  return {createSession: function <atom:0>};
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=151B file=dil_widgets/src/DILSpeechSynthesisService
// args: require, module, exports
// locals: e, t, s, i
function {
  i = function i;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILSpeechSynthesisService = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("dil_renderer/src/DILSpeechSynthesis");
  s = require("oai_platform_services/src/SpeechSynthesizer");
  exports.createDILSpeechSynthesisService = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILSpeechSynthesisService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
