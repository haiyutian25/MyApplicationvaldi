// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=127B file=oai_integration_fixtures/res
// args: require, module, exports
// locals: e, t
function {
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  e = require("valdi_core/src/AssetCatalog");
  t = e.loadCatalog("oai_integration_fixtures/res");
  exports.default = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/res
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
