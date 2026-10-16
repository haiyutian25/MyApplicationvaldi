// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=50B file=valdi_rxjs/src/operators/timestamp
// args: e
// closure: r
function {
  return {value: e, timestamp: r.now()};
}

// fn r  args=1 vars=2 closure=2 cpool=1 bc=88B file=valdi_rxjs/src/operators/timestamp
// args: r
// locals: r#1
// closure: e, t
function {
  let r#1;
  if (!((r === undefined))) goto L_2e;
  r;
  r = e.dateTimestampProvider;
  r#1 = e.dateTimestampProvider;
  return t.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/operators/timestamp
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.timestamp = undefined;
  e = require("../scheduler/dateTimestampProvider");
  t = require("./map");
  exports.timestamp = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/timestamp
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
