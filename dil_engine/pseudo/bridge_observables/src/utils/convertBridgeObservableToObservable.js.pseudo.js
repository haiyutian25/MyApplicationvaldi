// fn <atom:0>  args=4 vars=5 closure=3 cpool=0 bc=283B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// args: r, a, b, c
// locals: r#1
// closure: t, s, e
function {
  let r#1;
  if (!((r === 0))) goto L_23;
  if (!(t)) goto L_1a;
  if (!((a == null))) goto L_17;
  a;
  goto L_1f;
  goto L_1f;
  // [栈深重同步 2 -> 1]
  s = a;
  a;
  goto L_11a;
  if (!((r === 1))) goto L_52;
  e.next(b);
  goto L_11a;
  if (!((r === 2))) goto L_ef;
  if (!((c == null))) goto L_69;
  c;
  goto L_8a;
  r#1 = new Error(undefined.message);
  if (!((c == null))) goto L_9a;
  c;
  goto L_bb;
  r#1.stack = undefined.stack;
  e.error(r#1);
  goto L_11a;
  if (!((r === 3))) goto L_11a;
  e.complete();
  r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=26B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// closure: t, s
function {
  t = true;
  true;
  if (!((s == null))) goto L_12;
  s;
  goto L_13;
  undefined();
  s = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=54B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// args: e
// locals: s, t
// closure: r
function {
  let t;
  let s;
  s = undefined;
  t = false;
  r.subscribe(function <atom:0>);
  return function <atom:0>;
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=43B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// args: r
// closure: e
function {
  return new e.Observable(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertBridgeObservableToObservable = undefined;
  e = require("valdi_rxjs/src/Observable");
  exports.convertBridgeObservableToObservable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertBridgeObservableToObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
