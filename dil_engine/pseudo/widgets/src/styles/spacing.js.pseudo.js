// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=119B file=widgets/src/styles/spacing
// args: e
function {
  e.XXS = 2;
  e[2] = "XXS";
  e.XS = 4;
  e[4] = "XS";
  e.SM = 8;
  e[8] = "SM";
  e.MD = 16;
  e[16] = "MD";
  e.LG = 32;
  e[32] = "LG";
  e.XL = 64;
  e[64] = "XL";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=246B file=widgets/src/styles/spacing
// args: i
// closure: e
function {
  if ((e.Device.isAndroid())) goto L_96;
  if (!(e.Device.isIOS())) goto L_e4;
  goto L_e5;
  // [栈深重同步 3 -> 2]
  i.HAIRLINE_WIDTH = 1;
  i[1] = "HAIRLINE_WIDTH";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=134B file=widgets/src/styles/spacing
// args: require, module, exports
// locals: e, i, c
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Spacing = undefined;
  exports.SemanticSpacing = undefined;
  e = require("valdi_core/src/Device");
  if ((i)) goto L_6d;
  i = {};
  exports.Spacing = {};
  !function <atom:0>({});
  if ((c)) goto L_84;
  c = {};
  exports.SemanticSpacing = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/styles/spacing
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
