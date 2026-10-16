// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=4B file=valdi_rxjs/src/observable/zip
function {
  return [];
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=valdi_rxjs/src/observable/zip
function {
  return false;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/observable/zip
// closure: t, s
function {
  s = null;
  t = null;
  null;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=valdi_rxjs/src/observable/zip
// args: e
function {
  return e.length;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_rxjs/src/observable/zip
// args: e
function {
  return e.shift();   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=13B file=valdi_rxjs/src/observable/zip
// args: e, r
// closure: s
function {
  if (!(!e.length)) goto L_c;
  return s[r];
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=3 bc=285B file=valdi_rxjs/src/observable/zip
// args: r
// locals: r#1
// closure: s, t, l, e, n
function {
  t[l].push(r);
  if (!(t.every(function <atom:0>))) goto L_11c;
  let r#1;
  r#1 = t.map(function <atom:0>);
  if (!(n)) goto L_c2;
  // append([], 0, r#1)
  r#1;
  goto L_c5;
  // [栈深重同步 3 -> 2]
  e.next(r#1);
  if (!(t.some(function <atom:0>))) goto L_11b;
  e.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=61B file=valdi_rxjs/src/observable/zip
// closure: s, l, t, e
function {
  s[l] = true;
  if (!(!t[l].length)) goto L_3c;
  e.complete();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=10B file=valdi_rxjs/src/observable/zip
// closure: t, s
function {
  s = null;
  t = null;
  null;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=6 bc=334B file=valdi_rxjs/src/observable/zip
// args: e
// locals: t, s, l
// closure: n, u, r, o
function {
  let s;
  let t;
  t = u.map(function <atom:0>);
  s = u.map(function <atom:0>);
  e.add(function <atom:0>);
  let l;
  l = 0;
  // close_loc l
  if (!(!e.closed)) goto L_148;
  if (!((l < u.length))) goto L_148;
  r.innerFrom(u[l]).subscribe(o.createOperatorSubscriber(e, function <atom:0>, function <atom:0>));
  // close_loc l
  l = <l_new>;
  (l++);
  goto L_8a;
  // close_loc l
  return function <atom:0>;
}

// fn i  args=1 vars=3 closure=6 cpool=1 bc=174B file=valdi_rxjs/src/observable/zip
// args: i
// locals: n, u
// closure: r, o, l, t, e, s
function {
  i = ...0;
  let u;
  let n;
  n = l.popResultSelector(i);
  u = t.argsOrArgArray(i);
  if (!(u.length)) goto L_89;
  return new e.Observable(function <atom:0>);
  return s.EMPTY;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=1 bc=152B file=valdi_rxjs/src/observable/zip
// args: require, module, exports
// locals: e, r, t, s, o, l, i
function {
  i = function i;
  let l;
  let o;
  let s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.zip = undefined;
  e = require("../Observable");
  r = require("./innerFrom");
  t = require("../util/argsOrArgArray");
  s = require("./empty");
  o = require("../operators/OperatorSubscriber");
  l = require("../util/args");
  exports.zip = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/zip
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
