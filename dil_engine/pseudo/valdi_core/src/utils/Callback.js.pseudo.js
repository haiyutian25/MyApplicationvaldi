// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=82B file=valdi_core/src/utils/Callback
// args: e
// locals: this
// closure: t, exports
function {
  this = this;
  e = ...0;
  return t[exports.CALLBACK_KEY].apply(this, e);   // tail call
}

// fn e  args=1 vars=2 closure=1 cpool=1 bc=54B file=valdi_core/src/utils/Callback
// args: e
// locals: t
// closure: exports
function {
  let t;
  t = function <atom:0>;
  t[exports.CALLBACK_KEY] = e;
  return t;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=136B file=valdi_core/src/utils/Callback
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OWNER_KEY = undefined;
  exports.CALLBACK_KEY = undefined;
  exports.createReusableCallback = undefined;
  exports.OWNER_KEY = Symbol();
  exports.CALLBACK_KEY = Symbol();
  exports.createReusableCallback = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/Callback
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
