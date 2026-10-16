// fn t  args=1 vars=1 closure=2 cpool=0 bc=132B file=oai_platform_services/src/OAIDeviceIntegrity
// args: t
// closure: i, e
function {
  if (!(i.isVersionAtLeast(11))) goto L_82;
  null;
  t;
  if (!((t.deviceIntegrityService == null))) goto L_7c;
  t.deviceIntegrityService;
  return {deviceIntegrityService: e.createDeviceIntegrityService()};
  return t;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=77B file=oai_platform_services/src/OAIDeviceIntegrity
// args: e
// closure: i
function {
  if (!(i.isVersionAtLeast(11))) goto L_4c;
  return e.deviceIntegrityService;
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=129B file=oai_platform_services/src/OAIDeviceIntegrity
// args: require, module, exports
// locals: e, i, t, r
function {
  t = function t;
  r = function r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.withDeviceIntegrityService = undefined;
  exports.getDeviceIntegrityService = undefined;
  e = require("oai_device_integrity/src/NativeDeviceIntegrity");
  i = require("valdi_core/src/CompilerIntrinsics");
  exports.withDeviceIntegrityService = t;
  exports.getDeviceIntegrityService = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/OAIDeviceIntegrity
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
