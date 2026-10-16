// fn <atom:0>  args=2 vars=2 closure=5 cpool=0 bc=363B file=valdi_ui/src/components/AudioWaveform
// args: t, r
// closure: e, o, s, i, d
function {
  e.beginRender(o, String(r));
  e.setAttributeString("backgroundColor", s);
  if (!((i[r] == null))) goto L_e7;
  i[r];
  e.setAttributeNumber("height", Math.max(3, Math.min(28, (112 * 0))));
  e.setAttributeStyle("style", d.bar);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=1 bc=745B file=valdi_ui/src/components/AudioWaveform
// locals: i, n, s, this
// closure: e, o, d, a, t, r
function {
  this = this;
  let s;
  let n;
  let i;
  if (((undefined === undefined))) goto L_7d;
  i = <to_object>(undefined).levels;
  n = <to_object>(undefined).sampling;
  s = <to_object>(undefined).color;
  <to_object>(undefined);
  goto L_a3;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_10;
  // [栈深重同步 1 -> 0]
  if (!(a.supportsNativeIOSAudioWaveform())) goto L_210;
  e.beginRender(t, undefined);
  if (!((i[(i.length - 1)] == null))) goto L_132;
  i[(i.length - 1)];
  e.setAttributeNumber("waveformLevel", 0);
  e.setAttribute("waveformSampling", n);
  e.setAttributeString("waveformColor", s);
  e.setAttributeStyle("style", d.native);
  e.endRender();
  return;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", d.fallback);
  Array.from({length: 40}, function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/AudioWaveform
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=2 bc=647B file=valdi_ui/src/components/AudioWaveform
// args: require, module, exports
// locals: e, t, r, o, i, n, a, AudioWaveform, <class_fields_init>, AudioWaveform#1, d
function {
  let d;
  let AudioWaveform#1;
  let a;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AudioWaveform = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeAudioWaveform"], "N3BH2-zkm5Lawv_p");
  r = e.makeNodePrototype("view", undefined, "H1UIMS0K6eV1cvB4");
  o = e.makeNodePrototype("view", undefined, "shaK3V1yaO1Bxwcf");
  i = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  a = require("../Platform");
  let AudioWaveform;
  let <class_fields_init>;
  class AudioWaveform extends i.Component { ... }
  <proto:AudioWaveform>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AudioWaveform>;
  AudioWaveform = function <atom:0>;
  // close_loc <class_fields_init>
  AudioWaveform#1 = function <atom:0>;
  exports.AudioWaveform = AudioWaveform#1;
  d = {native: new n.Style({height: 24, width: "100%", touchEnabled: false}), fallback: new n.Style({height: 28, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", touchEnabled: false}), bar: new n.Style({width: 2, borderRadius: 1, flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/AudioWaveform
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
