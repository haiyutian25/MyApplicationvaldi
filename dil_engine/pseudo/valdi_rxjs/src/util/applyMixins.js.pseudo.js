// fn t  args=2 vars=9 closure=0 cpool=0 bc=250B file=valdi_rxjs/src/util/applyMixins
// args: t, e
// locals: o, p, p#1, r, e#1, o#1, o#2
function {
  let p;
  let o;
  o = 0;
  p = e.length;
  if (!((o < p))) goto L_f9;
  let r;
  let p#1;
  p#1 = e[o];
  r = Object.getOwnPropertyNames(p#1.prototype);
  let o#1;
  let e#1;
  e#1 = 0;
  o#1 = r.length;
  if (!((e#1 < o#1))) goto L_ee;
  let o#2;
  o#2 = r[e#1];
  t.prototype[o#2] = p#1.prototype[o#2];
  e#1 = <e#1_new>;
  (e#1++);
  goto L_80;
  o = <o_new>;
  (o++);
  goto L_b;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_rxjs/src/util/applyMixins
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.applyMixins = undefined;
  exports.applyMixins = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/applyMixins
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
