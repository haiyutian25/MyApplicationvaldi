// fn o  args=1 vars=1 closure=1 cpool=0 bc=18B file=valdi_rxjs/src/util/Immediate
// args: e
// closure: s
function {
  if (!((e in s))) goto L_11;
  delete e;
  // [栈深重同步 2 -> 1]
  return s;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=12B file=valdi_rxjs/src/util/Immediate
// closure: o, n, r
function {
  if (!(o(n))) goto L_b;
  return r();
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=120B file=valdi_rxjs/src/util/Immediate
// args: r
// locals: n
// closure: o, t, s, e
function {
  let n;
  t = <t_new>;
  n = (t++);
  s[n] = true;
  if ((e)) goto L_49;
  e = Promise.resolve();
  Promise.resolve();
  e.then(function <atom:0>);
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_rxjs/src/util/Immediate
// args: e
// closure: o
function {
  o(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=valdi_rxjs/src/util/Immediate
// closure: s
function {
  return Object.keys(s).length;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=147B file=valdi_rxjs/src/util/Immediate
// args: require, module, exports
// locals: e, t, s, o
function {
  o = function o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Immediate = undefined;
  exports.TestTools = undefined;
  e = undefined;
  t = 1;
  s = {};
  exports.Immediate = {setImmediate: function <atom:0>, clearImmediate: function <atom:0>};
  exports.TestTools = {pending: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/Immediate
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
