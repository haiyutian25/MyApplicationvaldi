// fn t  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_core/src/utils/TestUtils
// args: t
// closure: e
function {
  e.push(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=valdi_core/src/utils/TestUtils
// args: e
function {
  return e();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=41B file=valdi_core/src/utils/TestUtils
// closure: e
function {
  return e.forEach(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=105B file=valdi_core/src/utils/TestUtils
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.registerValdiTestSuiteDoneCallback = undefined;
  e = [];
  globalThis.__onValdiTestSuiteDone = function <atom:0>;
  exports.registerValdiTestSuiteDoneCallback = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/TestUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
