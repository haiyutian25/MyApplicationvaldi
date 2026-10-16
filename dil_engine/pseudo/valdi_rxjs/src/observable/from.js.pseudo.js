// fn o  args=2 vars=2 closure=2 cpool=0 bc=82B file=valdi_rxjs/src/observable/from
// args: o, s
// closure: e, r
function {
  if (!(s)) goto L_2b;
  return e.scheduled(o, s);
  return r.innerFrom(o);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/from
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.from = undefined;
  e = require("../scheduled/scheduled");
  r = require("./innerFrom");
  exports.from = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/from
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
