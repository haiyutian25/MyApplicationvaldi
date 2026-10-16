// fn r  args=1 vars=1 closure=0 cpool=0 bc=160B file=coreutils/src/Uint8ArrayUtils
// args: r
function {
  if (!(runtime.bytesToString)) goto L_53;
  return runtime.bytesToString(r);
  return String.fromCharCode.apply(null, r);
}

// fn t  args=1 vars=5 closure=0 cpool=0 bc=113B file=coreutils/src/Uint8ArrayUtils
// args: r
// locals: t, e, n, o
function {
  let e;
  let t;
  t = new ArrayBuffer(r.length);
  e = new Uint8Array(t);
  let o;
  let n;
  n = 0;
  o = r.length;
  if (!((n < o))) goto L_6d;
  e[n] = r.charCodeAt(n);
  n = <n_new>;
  (n++);
  goto L_2a;
  return e;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=coreutils/src/Uint8ArrayUtils
// args: require, module, exports
// locals: r, t
function {
  r = function r;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.arrayToString = undefined;
  exports.stringToArray = undefined;
  exports.arrayToString = r;
  exports.stringToArray = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/Uint8ArrayUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
