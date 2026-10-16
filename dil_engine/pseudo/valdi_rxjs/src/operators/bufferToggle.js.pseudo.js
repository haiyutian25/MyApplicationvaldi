// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=125B file=valdi_rxjs/src/operators/bufferToggle
// closure: s, c, u, b, p
function {
  s.arrRemove(c, u);
  b.next(u);
  p.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=8 cpool=1 bc=288B file=valdi_rxjs/src/operators/bufferToggle
// args: r
// locals: u, p
// closure: s, c, b, e, o, n, t, i
function {
  let p;
  let u;
  u = [];
  c.push(u);
  p = new e.Subscription();
  p.add(o.innerFrom(n(r)).subscribe(t.createOperatorSubscriber(b, function <atom:0>, i.noop)));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=58B file=valdi_rxjs/src/operators/bufferToggle
// args: e
// locals: r
// closure: c
function {
  let r;
  for (const r of c) {
    r.push(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=125B file=valdi_rxjs/src/operators/bufferToggle
// closure: c, b
function {
  if (!((c.length > 0))) goto L_57;
  b.next(c.shift());
  goto L_0;
  b.complete();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=7 cpool=3 bc=240B file=valdi_rxjs/src/operators/bufferToggle
// args: r, b
// locals: c
// closure: s, e, o, n, t, i, u
function {
  let c;
  c = [];
  o.innerFrom(u).subscribe(t.createOperatorSubscriber(b, function <atom:0>, i.noop));
  r.subscribe(t.createOperatorSubscriber(b, function <atom:0>, function <atom:0>));
  return;
}

// fn u  args=2 vars=2 closure=6 cpool=1 bc=41B file=valdi_rxjs/src/operators/bufferToggle
// args: u, n
// closure: s, e, o, t, i, r
function {
  return r.operate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/operators/bufferToggle
// args: require, module, exports
// locals: e, r, o, t, i, s, u
function {
  u = function u;
  let s;
  let i;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.bufferToggle = undefined;
  e = require("../Subscription");
  r = require("../util/lift");
  o = require("../observable/innerFrom");
  t = require("./OperatorSubscriber");
  i = require("../util/noop");
  s = require("../util/arrRemove");
  exports.bufferToggle = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/operators/bufferToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
