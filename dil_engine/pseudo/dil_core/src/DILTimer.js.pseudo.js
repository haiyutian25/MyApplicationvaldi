// fn o  args=0 vars=2 closure=2 cpool=0 bc=248B file=dil_core/src/DILTimer
// locals: e, o
// closure: r, exports
function {
  let o;
  let e;
  e = r.resolveProviderSource();
  o = exports.DILTimerProvider.getProviderKey();
  if (!((e == null))) goto L_80;
  e;
  goto L_a7;
  if (!((true === undefined.hasValue(o)))) goto L_d5;
  return e.getValue(o);
  return exports.DEFAULT_DIL_TIMER;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=dil_core/src/DILTimer
function {
  return Date.now();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=dil_core/src/DILTimer
// closure: o
function {
  return clearInterval(o);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=15B file=dil_core/src/DILTimer
// args: e, r
// locals: o
function {
  let o;
  o = setInterval(e, r);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=dil_core/src/DILTimer
// closure: o
function {
  return clearTimeout(o);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=15B file=dil_core/src/DILTimer
// args: e, r
// locals: o
function {
  let o;
  o = setTimeout(e, r);
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=223B file=dil_core/src/DILTimer
// args: require, module, exports
// locals: e, r, o
function {
  o = function o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DEFAULT_DIL_TIMER = undefined;
  exports.DILTimerProvider = undefined;
  exports.resolveDILTimer = undefined;
  e = require("valdi_core/src/provider/createProvider");
  r = require("valdi_core/src/provider/resolveProviderSource");
  exports.DEFAULT_DIL_TIMER = {fixedTimeMs: undefined, now: function <atom:0>, setInterval: function <atom:0>, setTimeout: function <atom:0>};
  exports.DILTimerProvider = e.createProviderComponentWithKeyName("DILTimer");
  exports.resolveDILTimer = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILTimer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
