// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=8B file=valdi_rxjs/src/operators/exhaustMap
// args: e, r
// closure: p, t, i
function {
  return p(t, e, i, r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=116B file=valdi_rxjs/src/operators/exhaustMap
// args: t, i
// closure: p, r, u, e
function {
  return r.innerFrom(u(t, i)).pipe(e.map(function <atom:0>));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=43B file=valdi_rxjs/src/operators/exhaustMap
// args: t
// closure: p, r, u, e, o
function {
  return t.pipe(o(function <atom:0>));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=51B file=valdi_rxjs/src/operators/exhaustMap
// closure: p, s, t
function {
  p = null;
  null;
  if (!(s)) goto L_32;
  t.complete();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=1 bc=145B file=valdi_rxjs/src/operators/exhaustMap
// args: e
// closure: p, s, t, i, r, u, o
function {
  if ((p)) goto L_90;
  p = i.createOperatorSubscriber(t, undefined, function <atom:0>);
  i.createOperatorSubscriber(t, undefined, function <atom:0>);
  o = <o_new>;
  r.innerFrom(u(e, (o++))).subscribe(p);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=53B file=valdi_rxjs/src/operators/exhaustMap
// closure: s, p, t
function {
  s = true;
  true;
  if (!(!p)) goto L_34;
  t.complete();
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=2 bc=96B file=valdi_rxjs/src/operators/exhaustMap
// args: e, t
// locals: o, p, s
// closure: i, r, u
function {
  let s;
  let p;
  let o;
  o = 0;
  p = null;
  s = false;
  e.subscribe(i.createOperatorSubscriber(t, function <atom:0>, function <atom:0>));
  return;
}

// fn o  args=2 vars=2 closure=5 cpool=2 bc=46B file=valdi_rxjs/src/operators/exhaustMap
// args: u, p
// closure: r, e, o, i, t
function {
  if (!(p)) goto L_6;
  return function <atom:0>;
  return t.operate(function <atom:0>);
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=1 bc=128B file=valdi_rxjs/src/operators/exhaustMap
// args: require, module, exports
// locals: e, r, t, i, o
function {
  o = function o;
  let i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.exhaustMap = undefined;
  e = require("./map");
  r = require("../observable/innerFrom");
  t = require("../util/lift");
  i = require("./OperatorSubscriber");
  exports.exhaustMap = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/exhaustMap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
