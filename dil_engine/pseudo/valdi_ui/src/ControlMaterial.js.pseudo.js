// fn t  args=1 vars=1 closure=2 cpool=0 bc=84B file=valdi_ui/src/ControlMaterial
// args: r
// closure: s, a
function {
  if (((r === s.Glass))) goto L_53;
  if (((r === s.ClearGlass))) goto L_53;
  return a(r);
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=77B file=valdi_ui/src/ControlMaterial
// args: r
// closure: s
function {
  if (((r === s.ProminentGlass))) goto L_4c;
  return (r === s.ProminentClearGlass);
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_ui/src/ControlMaterial
// args: r
// closure: a, s
function {
  if (!(a(r))) goto L_28;
  return s.Standard;
  return r;
}

// fn o  args=1 vars=1 closure=3 cpool=0 bc=170B file=valdi_ui/src/ControlMaterial
// args: s
// closure: t, e, r
function {
  if (!(t(s))) goto L_a9;
  if (!(e.isNativeIOS())) goto L_a9;
  return (Number.parseInt(r.Device.getSystemVersion(), 10) >= 26);
}

// fn l  args=1 vars=2 closure=4 cpool=0 bc=215B file=valdi_ui/src/ControlMaterial
// args: r
// locals: t
// closure: s, e, a, o
function {
  let t;
  if (((r !== s.ProminentClearGlass))) goto L_50;
  if (!(e.supportsNativeIOSProminentClearGlassButtons())) goto L_55;
  goto L_77;
  // [栈深重同步 1 -> 0]
  t = s.ProminentGlass;
  if ((!a(t))) goto L_ae;
  if (!(o(t))) goto L_b4;
  if (!(e.supportsNativeIOSProminentGlassButtons())) goto L_b4;
  return t;
  return s.Standard;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=valdi_ui/src/ControlMaterial
// args: r
function {
  r.Standard = 0;
  r[0] = "Standard";
  r.Glass = 1;
  r[1] = "Glass";
  r.ClearGlass = 2;
  r[2] = "ClearGlass";
  r.ProminentGlass = 3;
  r[3] = "ProminentGlass";
  r.Blur = 4;
  r[4] = "Blur";
  r.ProminentClearGlass = 5;
  r[5] = "ProminentClearGlass";
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=6 bc=246B file=valdi_ui/src/ControlMaterial
// args: require, module, exports
// locals: r, e, s, t, a, n, o, l
function {
  t = function t;
  a = function a;
  n = function n;
  o = function o;
  l = function l;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ControlMaterial = undefined;
  exports.isGlassMaterial = undefined;
  exports.isProminentGlassMaterial = undefined;
  exports.resolveControlMaterial = undefined;
  exports.supportsInteractiveGlass = undefined;
  exports.resolveButtonMaterial = undefined;
  r = require("valdi_core/src/Device");
  e = require("./Platform");
  if ((s)) goto L_b7;
  s = {};
  exports.ControlMaterial = {};
  !function <atom:0>({});
  exports.isGlassMaterial = t;
  exports.isProminentGlassMaterial = a;
  exports.resolveControlMaterial = n;
  exports.supportsInteractiveGlass = o;
  exports.resolveButtonMaterial = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/ControlMaterial
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
