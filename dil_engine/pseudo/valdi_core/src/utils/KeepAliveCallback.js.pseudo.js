// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/utils/KeepAliveCallback
function {
  return;
}

// fn e  args=0 vars=0 closure=0 cpool=1 bc=15B file=valdi_core/src/utils/KeepAliveCallback
function {
  return setInterval(function <atom:0>, 100000);   // tail call
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=8B file=valdi_core/src/utils/KeepAliveCallback
// args: e
function {
  clearInterval(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=51B file=valdi_core/src/utils/KeepAliveCallback
// args: e
// locals: this
// closure: t, n, r
function {
  this = this;
  e = ...0;
  t(n);
  return r.apply(this, e);   // tail call
}

// fn r  args=1 vars=2 closure=2 cpool=1 bc=9B file=valdi_core/src/utils/KeepAliveCallback
// args: r
// locals: n
// closure: t, e
function {
  let n;
  n = e();
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=valdi_core/src/utils/KeepAliveCallback
// args: require, module, exports
// locals: e, t, r
function {
  e = function e;
  t = function t;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.beginKeepAlive = undefined;
  exports.endKeepAlive = undefined;
  exports.makeKeepAliveCallback = undefined;
  exports.beginKeepAlive = e;
  exports.endKeepAlive = t;
  exports.makeKeepAliveCallback = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/KeepAliveCallback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
