// fn o  args=0 vars=0 closure=2 cpool=0 bc=282B file=oai_ui/src/TextInputCapabilities
// closure: i, e
function {
  if (!(!i.Device.isWeb())) goto L_114;
  if ((i.Device.isIOS())) goto L_e2;
  if (!(i.Device.isAndroid())) goto L_114;
  if (!(e.isVersionAtLeast(177))) goto L_114;
  return "oneTimeCode";
  return "number";
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=274B file=oai_ui/src/TextInputCapabilities
// args: o
// closure: i, e
function {
  if (!(!i.Device.isWeb())) goto L_110;
  if ((i.Device.isIOS())) goto L_e2;
  if (!(i.Device.isAndroid())) goto L_110;
  if (!(e.isVersionAtLeast(246))) goto L_110;
  return o;
  return undefined;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=129B file=oai_ui/src/TextInputCapabilities
// args: require, module, exports
// locals: e, i, o, t
function {
  o = function o;
  t = function t;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.oneTimeCodeContentType = undefined;
  exports.contactAutofillContentType = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  i = require("valdi_core/src/Device");
  exports.oneTimeCodeContentType = o;
  exports.contactAutofillContentType = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/TextInputCapabilities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
