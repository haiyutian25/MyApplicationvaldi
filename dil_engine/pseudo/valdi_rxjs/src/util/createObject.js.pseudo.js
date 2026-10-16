// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=9B file=valdi_rxjs/src/util/createObject
// args: e, r, c
// closure: t
function {
  e[r] = t[c];
  return e;
}

// fn e  args=2 vars=2 closure=0 cpool=1 bc=40B file=valdi_rxjs/src/util/createObject
// args: e, t
function {
  return e.reduce(function <atom:0>, {});   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_rxjs/src/util/createObject
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createObject = undefined;
  exports.createObject = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/createObject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
