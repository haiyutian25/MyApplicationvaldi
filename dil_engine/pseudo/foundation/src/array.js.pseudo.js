// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=foundation/src/array
// closure: r
function {
  return r;
}

// fn e  args=2 vars=2 closure=1 cpool=1 bc=7B file=foundation/src/array
// args: e, r
// closure: t
function {
  return t(e, function <atom:0>);   // tail call
}

// fn t  args=2 vars=4 closure=0 cpool=0 bc=78B file=foundation/src/array
// args: e, t
// locals: r, n
function {
  let r;
  r = [];
  let n;
  n = 0;
  if (!((n < e))) goto L_4a;
  r.push(t(n));
  n = <n_new>;
  (n++);
  goto L_c;
  return r;
}

// fn r  args=3 vars=3 closure=0 cpool=0 bc=88B file=foundation/src/array
// args: e, t, r
function {
  // append([], 0, e.slice(0, t))
  [][e.slice(0, t)] = r;
  // append([], (r ++), e.slice(t))
  e.slice(t);
  return [];
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=72B file=foundation/src/array
// args: e, s
// locals: e#1
// closure: t, r, n
function {
  if (!(t[s])) goto L_47;
  let e#1;
  e#1 = (s + r);
  n.splice(e#1, 0, t[s]);
  r = (r + 1);
  (r + 1);
  return;
}

// fn n  args=2 vars=4 closure=0 cpool=1 bc=98B file=foundation/src/array
// args: e, t
// locals: r, n
function {
  let n;
  let r;
  r = 0;
  n = Object.assign([], e);
  e.forEach(function <atom:0>);
  return n;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=51B file=foundation/src/array
// args: e, r
// closure: t
function {
  if (!(t(r))) goto L_9;
  goto L_a;
  // [栈深重同步 2 -> 1]
  e[1].push(r);
  return e;
}

// fn s  args=2 vars=2 closure=0 cpool=1 bc=48B file=foundation/src/array
// args: e, t
function {
  return e.reduce(function <atom:0>, [[], []]);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=184B file=foundation/src/array
// args: require, module, exports
// locals: e, t, r, n, s
function {
  e = function e;
  t = function t;
  r = function r;
  n = function n;
  s = function s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.arrayRepeat = undefined;
  exports.arrayGenerate = undefined;
  exports.insert = undefined;
  exports.multiInsert = undefined;
  exports.partition = undefined;
  exports.arrayRepeat = e;
  exports.arrayGenerate = t;
  exports.insert = r;
  exports.multiInsert = n;
  exports.partition = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/array
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
