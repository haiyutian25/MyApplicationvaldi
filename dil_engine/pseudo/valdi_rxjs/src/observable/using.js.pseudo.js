// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=valdi_rxjs/src/observable/using
// closure: i
function {
  if (!(i)) goto L_2e;
  i.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=139B file=valdi_rxjs/src/observable/using
// args: e
// locals: i, t
// closure: n, u, r, s
function {
  let t;
  let i;
  i = n();
  t = u(i);
  if (!(t)) goto L_3e;
  goto L_62;
  // [栈深重同步 1 -> 0]
  s.EMPTY.subscribe(e);
  return function <atom:0>;
}

// fn n  args=2 vars=2 closure=3 cpool=1 bc=43B file=valdi_rxjs/src/observable/using
// args: n, u
// closure: r, s, e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/observable/using
// args: require, module, exports
// locals: e, r, s, n
function {
  n = function n;
  let s;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.using = undefined;
  e = require("../Observable");
  r = require("./innerFrom");
  s = require("./empty");
  exports.using = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/using
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
