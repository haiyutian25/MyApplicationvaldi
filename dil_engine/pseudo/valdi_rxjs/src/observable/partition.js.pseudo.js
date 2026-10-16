// fn i  args=3 vars=3 closure=3 cpool=0 bc=197B file=valdi_rxjs/src/observable/partition
// args: i, o, n
// closure: e, t, r
function {
  return [e.filter(o, n)(t.innerFrom(i)), e.filter(r.not(o, n))(t.innerFrom(i))];
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/observable/partition
// args: require, module, exports
// locals: r, e, t, i
function {
  i = function i;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.partition = undefined;
  r = require("../util/not");
  e = require("../operators/filter");
  t = require("./innerFrom");
  exports.partition = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/partition
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
