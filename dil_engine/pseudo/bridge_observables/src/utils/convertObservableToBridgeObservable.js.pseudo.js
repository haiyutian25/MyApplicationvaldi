// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: e
// closure: r
function {
  r(1, undefined, e, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: e
// closure: r
function {
  r(2, undefined, undefined, e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=9B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// closure: r
function {
  r(3, undefined, undefined, undefined);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// closure: o
function {
  return o.unsubscribe();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=4 bc=57B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: r
// locals: o
// closure: e
function {
  let o;
  o = e.subscribe(function <atom:0>, function <atom:0>, function <atom:0>);
  r(0, function <atom:0>, undefined, undefined);
  return;
}

// fn e  args=1 vars=1 closure=0 cpool=1 bc=3B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: e
function {
  return function <atom:0>;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=10B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: r
// closure: e
function {
  return {subscribe: e(r)};
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// args: require, module, exports
// locals: e, r
function {
  e = function e;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createBridgeSubscribeFn = undefined;
  exports.convertObservableToBridgeObservable = undefined;
  exports.createBridgeSubscribeFn = e;
  exports.convertObservableToBridgeObservable = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertObservableToBridgeObservable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
