// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=147B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// args: t
// closure: e
function {
  if (!(t.done)) goto L_4b;
  goto L_92;
  // [栈深重同步 1 -> 0]
  e.next(t.value);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=78B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// closure: e, l
function {
  l.next().then(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=94B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// locals: l
// closure: e, r, t, c
function {
  let l;
  l = r[Symbol.asyncIterator].call(r);
  t.executeSchedule(e, c, function <atom:0>, 0, true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=42B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// args: e
// closure: r, t, c
function {
  t.executeSchedule(e, c, function <atom:0>);
  return;
}

// fn r  args=2 vars=2 closure=2 cpool=1 bc=62B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// args: r, c
// closure: t, e
function {
  if (!(!r)) goto L_13;
  throw new Error("Iterable cannot be null");
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.scheduleAsyncIterable = undefined;
  e = require("../Observable");
  t = require("../util/executeSchedule");
  exports.scheduleAsyncIterable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/scheduled/scheduleAsyncIterable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
