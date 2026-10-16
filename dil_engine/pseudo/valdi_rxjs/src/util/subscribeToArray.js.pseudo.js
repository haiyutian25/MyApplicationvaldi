// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=148B file=valdi_rxjs/src/util/subscribeToArray
// args: r
// locals: o, s
// closure: e
function {
  let s;
  let o;
  o = 0;
  s = e.length;
  if (!((o < s))) goto L_6e;
  if (!(!r.closed)) goto L_6e;
  r.next(e[o]);
  o = <o_new>;
  (o++);
  goto L_b;
  r.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=3B file=valdi_rxjs/src/util/subscribeToArray
// args: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=92B file=valdi_rxjs/src/util/subscribeToArray
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.subscribeToArray = undefined;
  e = function <atom:0>;
  exports.subscribeToArray = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/subscribeToArray
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
