// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=valdi_rxjs/src/util/createErrorClass
// args: r
function {
  Error.call(r);
  r.stack = new Error().stack;
  return;
}

// fn r  args=1 vars=2 closure=0 cpool=1 bc=151B file=valdi_rxjs/src/util/createErrorClass
// args: r
// locals: t
function {
  let t;
  t = r(function <atom:0>);
  t.prototype = Object.create(Error.prototype);
  t.prototype.constructor = t;
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_rxjs/src/util/createErrorClass
// args: require, module, exports
// locals: r
function {
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createErrorClass = undefined;
  exports.createErrorClass = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/createErrorClass
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
