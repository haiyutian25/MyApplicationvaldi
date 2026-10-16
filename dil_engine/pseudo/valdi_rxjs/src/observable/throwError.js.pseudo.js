// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/observable/throwError
// closure: o
function {
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/observable/throwError
// args: r
// closure: s
function {
  return r.error(s());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=valdi_rxjs/src/observable/throwError
// args: r
// closure: t, i
function {
  return t.schedule(i, 0, r);   // tail call
}

// fn o  args=2 vars=4 closure=2 cpool=3 bc=111B file=valdi_rxjs/src/observable/throwError
// args: o, t
// locals: s, i
// closure: e, r
function {
  let i;
  let s;
  if (!(e.isFunction(o))) goto L_31;
  goto L_33;
  // [栈深重同步 1 -> 0]
  s = function <atom:0>;
  i = function <atom:0>;
  if (!(t)) goto L_68;
  goto L_6b;
  // [栈深重同步 3 -> 2]
  return new r.Observable(i);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/observable/throwError
// args: require, module, exports
// locals: r, e, o
function {
  o = function o;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.throwError = undefined;
  r = require("../Observable");
  e = require("../util/isFunction");
  exports.throwError = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/throwError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
