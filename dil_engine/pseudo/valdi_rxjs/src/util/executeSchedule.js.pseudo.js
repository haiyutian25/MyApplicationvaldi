// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=124B file=valdi_rxjs/src/util/executeSchedule
// locals: this
// closure: u, c, e, s
function {
  this = this;
  u();
  if (!(c)) goto L_56;
  goto L_7b;
  // [栈深重同步 1 -> 0]
  this.unsubscribe();
  return;
}

// fn e  args=5 vars=11 closure=0 cpool=1 bc=142B file=valdi_rxjs/src/util/executeSchedule
// args: e, t, u, s, c
// locals: e#1, t#1, u#1, s#1, c#1, d
function {
  let c#1;
  let s#1;
  let u#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  u#1 = u;
  if (!((s === undefined))) goto L_1d;
  s;
  s = 0;
  s#1 = 0;
  if (!((c === undefined))) goto L_2b;
  c;
  c = false;
  c#1 = false;
  let d;
  d = t.schedule(function <atom:0>, s);
  e.add(d);
  if (!(!c)) goto L_8d;
  return d;
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_rxjs/src/util/executeSchedule
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.executeSchedule = undefined;
  exports.executeSchedule = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/executeSchedule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
