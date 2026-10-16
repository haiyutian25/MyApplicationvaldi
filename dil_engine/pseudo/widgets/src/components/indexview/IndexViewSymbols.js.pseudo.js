// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=widgets/src/components/indexview/IndexViewSymbols
// args: o
// closure: e
function {
  return e.convertLabelToSymbol(o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=390B file=widgets/src/components/indexview/IndexViewSymbols
// args: o
// closure: e
function {
  o.star = e.convertLabelToSymbol("★");
  o.smile = e.convertLabelToSymbol("☻");
  o.error = e.convertLabelToSymbol("?");
  o.other = e.convertLabelToSymbol("#");
  o.latin = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=101B file=widgets/src/components/indexview/IndexViewSymbols
// args: require, module, exports
// locals: e, o
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.IndexViewSymbols = undefined;
  e = require("./utils/convertLabelToSymbol");
  if ((o)) goto L_62;
  o = {};
  exports.IndexViewSymbols = {};
  !function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/indexview/IndexViewSymbols
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
