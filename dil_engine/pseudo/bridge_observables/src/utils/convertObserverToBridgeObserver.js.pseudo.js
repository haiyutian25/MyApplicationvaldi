// fn <atom:0>  args=4 vars=4 closure=1 cpool=0 bc=145B file=bridge_observables/src/utils/convertObserverToBridgeObserver
// args: r, t, n, o
// closure: e
function {
  if (((r === 0))) goto L_90;
  if (!((r === 1))) goto L_37;
  e.next(n);
  goto L_90;
  if (!((r === 2))) goto L_65;
  e.error(o);
  goto L_90;
  if (!((r === 3))) goto L_90;
  e.complete();
  r;
  return;
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=3B file=bridge_observables/src/utils/convertObserverToBridgeObserver
// args: e
function {
  return function <atom:0>;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=10B file=bridge_observables/src/utils/convertObserverToBridgeObserver
// args: r
// closure: e
function {
  return {onEvent: e(r)};
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=bridge_observables/src/utils/convertObserverToBridgeObserver
// args: require, module, exports
// locals: e, r
function {
  e = function e;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createBridgeOnEventFn = undefined;
  exports.convertObserverToBridgeObserver = undefined;
  exports.createBridgeOnEventFn = e;
  exports.convertObserverToBridgeObserver = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertObserverToBridgeObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
