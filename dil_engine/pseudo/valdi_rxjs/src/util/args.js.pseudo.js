// fn r  args=1 vars=1 closure=0 cpool=0 bc=7B file=valdi_rxjs/src/util/args
// args: e
function {
  return e[(e.length - 1)];
}

// fn t  args=1 vars=1 closure=2 cpool=0 bc=82B file=valdi_rxjs/src/util/args
// args: o
// closure: e, r
function {
  if (!(e.isFunction(r(o)))) goto L_50;
  return o.pop();
  return undefined;
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=82B file=valdi_rxjs/src/util/args
// args: e
// closure: o, r
function {
  if (!(o.isScheduler(r(e)))) goto L_50;
  return e.pop();
  return undefined;
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=52B file=valdi_rxjs/src/util/args
// args: e, o
// closure: r
function {
  if (!(("number" == typeof r(e)))) goto L_32;
  return e.pop();
  return o;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=161B file=valdi_rxjs/src/util/args
// args: require, module, exports
// locals: e, o, r, t, p, u
function {
  r = function r;
  t = function t;
  p = function p;
  u = function u;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.popResultSelector = undefined;
  exports.popScheduler = undefined;
  exports.popNumber = undefined;
  e = require("./isFunction");
  o = require("./isScheduler");
  exports.popResultSelector = t;
  exports.popScheduler = p;
  exports.popNumber = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/args
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
