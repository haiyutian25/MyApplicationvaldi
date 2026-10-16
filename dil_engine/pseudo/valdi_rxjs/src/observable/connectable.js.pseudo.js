// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=valdi_rxjs/src/observable/connectable
// closure: e
function {
  return new e.Subject();
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_rxjs/src/observable/connectable
// args: e
// closure: u
function {
  return u.subscribe(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=valdi_rxjs/src/observable/connectable
// closure: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=9B file=valdi_rxjs/src/observable/connectable
// closure: u, s
function {
  u = s();
  return s();
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=2 bc=187B file=valdi_rxjs/src/observable/connectable
// closure: e, u, s, o, c, b
function {
  if (!(o)) goto L_2c;
  if ((!o.closed)) goto L_b6;
  o = c.defer(function <atom:0>).subscribe(u);
  c.defer(function <atom:0>).subscribe(u);
  if (!(b)) goto L_b6;
  o.add(function <atom:0>);
  return o;
}

// fn r  args=2 vars=9 closure=3 cpool=2 bc=195B file=valdi_rxjs/src/observable/connectable
// args: e, r
// locals: e#1, r#1, o, s, b, u, i
// closure: c, t, n
function {
  let r#1;
  let e#1;
  e#1 = e;
  if (!((r === undefined))) goto L_12;
  r;
  r = t;
  r#1 = t;
  let i;
  let u;
  let b;
  let s;
  let o;
  o = null;
  if (((undefined === undefined))) goto L_7b;
  s = <to_object>(undefined).connector;
  if (!((<to_object>(undefined).resetOnDisconnect === undefined))) goto L_76;
  <to_object>(undefined).resetOnDisconnect;
  b = true;
  <to_object>(undefined);
  goto L_7f;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29;
  // [栈深重同步 1 -> 0]
  u = s();
  i = new n.Observable(function <atom:0>);
  i.connect = function <atom:0>;
  return i;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=141B file=valdi_rxjs/src/observable/connectable
// args: require, module, exports
// locals: e, n, c, t, r
function {
  r = function r;
  let t;
  let c;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.connectable = undefined;
  e = require("../Subject");
  n = require("../Observable");
  c = require("./defer");
  t = {connector: function <atom:0>, resetOnDisconnect: true};
  exports.connectable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/observable/connectable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
