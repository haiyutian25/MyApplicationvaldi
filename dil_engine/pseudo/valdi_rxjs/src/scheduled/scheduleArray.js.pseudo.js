// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=172B file=valdi_rxjs/src/scheduled/scheduleArray
// locals: this
// closure: s, r, e
function {
  this = this;
  if (!((s === r.length))) goto L_31;
  goto L_ab;
  // [栈深重同步 1 -> 0]
  s = <s_new>;
  e.next(r[(s++)]);
  if ((e.closed)) goto L_ab;
  this.schedule();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=44B file=valdi_rxjs/src/scheduled/scheduleArray
// args: e
// locals: s
// closure: r, t
function {
  let s;
  s = 0;
  return t.schedule(function <atom:0>);   // tail call
}

// fn r  args=2 vars=2 closure=1 cpool=1 bc=43B file=valdi_rxjs/src/scheduled/scheduleArray
// args: r, t
// closure: e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/scheduled/scheduleArray
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduleArray = undefined;
  e = require("../Observable");
  exports.scheduleArray = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduleArray
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
