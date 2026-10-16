// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=widgets/src/RegisterSemanticColors
// closure: require
function {
  return require("./InitSemanticColors");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=38B file=widgets/src/RegisterSemanticColors
// args: e
function {
  e.initializeSemanticColors();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=2 bc=118B file=widgets/src/RegisterSemanticColors
// closure: require
function {
  Promise.resolve().then(function <atom:0>).then(function <atom:0>);
  return;
}

// fn o  args=0 vars=0 closure=3 cpool=1 bc=82B file=widgets/src/RegisterSemanticColors
// closure: require, e, module
function {
  e.getModuleLoader(module).onModuleRegistered("DeviceBridge", function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=widgets/src/RegisterSemanticColors
// args: require, module, exports
// locals: e, o
function {
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.registerSemanticColors = undefined;
  e = require("valdi_core/src/ModuleLoaderGlobal");
  exports.registerSemanticColors = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/RegisterSemanticColors
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
