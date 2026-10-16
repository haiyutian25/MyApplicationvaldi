// fn s  args=1 vars=1 closure=4 cpool=0 bc=133B file=valdi_rxjs/src/observable/race
// args: n
// closure: t, e, r, o
function {
  n = ...0;
  n = t.argsOrArgArray(n);
  if (!((1 === t.argsOrArgArray(n).length))) goto L_59;
  return e.innerFrom(n[0]);
  return new r.Observable(o(n));
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=130B file=valdi_rxjs/src/observable/race
// args: r
// locals: r#1
// closure: s, o, t
function {
  if (!(s)) goto L_5b;
  let r#1;
  r#1 = 0;
  if (!((r#1 < s.length))) goto L_55;
  if (!((r#1 !== o))) goto L_4a;
  s[r#1].unsubscribe();
  r#1 = <r#1_new>;
  (r#1++);
  goto L_a;
  s = null;
  null;
  t.next(r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=250B file=valdi_rxjs/src/observable/race
// args: t
// locals: s, o
// closure: r, e, n
function {
  let s;
  s = [];
  let o;
  o = 0;
  // close_loc o
  if (!(s)) goto L_f6;
  if (!(!t.closed)) goto L_f6;
  if (!((o < r.length))) goto L_f6;
  s.push(e.innerFrom(r[o]).subscribe(n.createOperatorSubscriber(t, function <atom:0>)));
  // close_loc o
  o = <o_new>;
  (o++);
  goto L_f;
  // close_loc o
  return;
}

// fn o  args=1 vars=1 closure=2 cpool=1 bc=3B file=valdi_rxjs/src/observable/race
// args: r
// closure: e, n
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=155B file=valdi_rxjs/src/observable/race
// args: require, module, exports
// locals: r, e, t, n, s, o
function {
  s = function s;
  o = function o;
  let n;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.race = undefined;
  exports.raceInit = undefined;
  r = require("../Observable");
  e = require("./innerFrom");
  t = require("../util/argsOrArgArray");
  n = require("../operators/OperatorSubscriber");
  exports.race = s;
  exports.raceInit = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/race
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
