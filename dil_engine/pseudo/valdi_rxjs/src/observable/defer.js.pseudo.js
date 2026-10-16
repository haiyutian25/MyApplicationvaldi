// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=77B file=valdi_rxjs/src/observable/defer
// args: e
// closure: r, s
function {
  r.innerFrom(s()).subscribe(e);
  return;
}

// fn s  args=1 vars=1 closure=2 cpool=1 bc=43B file=valdi_rxjs/src/observable/defer
// args: s
// closure: r, e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/defer
// args: require, module, exports
// locals: e, r, s
function {
  s = function s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.defer = undefined;
  e = require("../Observable");
  r = require("./innerFrom");
  exports.defer = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/defer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
