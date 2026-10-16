// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=13B file=valdi_rxjs/src/lastValueFrom
// args: e
// closure: l, n
function {
  l = e;
  e;
  n = true;
  true;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=102B file=valdi_rxjs/src/lastValueFrom
// closure: n, s, l, o, t, u, e
function {
  if (!(n)) goto L_c;
  goto L_65;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_39;
  goto L_65;
  // [栈深重同步 1 -> 0]
  u(new e.EmptyError());
  return;
}

// fn <atom:0>  args=2 vars=4 closure=4 cpool=2 bc=80B file=valdi_rxjs/src/lastValueFrom
// args: s, u
// locals: l, n
// closure: o, t, e, r
function {
  let n;
  let l;
  l = undefined;
  n = false;
  r.subscribe({next: function <atom:0>, error: u, complete: function <atom:0>});
  return;
}

// fn r  args=2 vars=3 closure=1 cpool=1 bc=24B file=valdi_rxjs/src/lastValueFrom
// args: r, t
// locals: o
// closure: e
function {
  let o;
  o = ("object" == typeof t);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/lastValueFrom
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.lastValueFrom = undefined;
  e = require("./util/EmptyError");
  exports.lastValueFrom = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/lastValueFrom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
