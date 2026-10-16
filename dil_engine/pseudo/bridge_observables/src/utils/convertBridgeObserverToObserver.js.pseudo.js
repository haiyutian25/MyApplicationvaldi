// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// args: o
// closure: e
function {
  e.onEvent(1, undefined, o, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=42B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// args: o
// closure: e
function {
  e.onEvent(2, undefined, undefined, o);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// closure: e
function {
  e.onEvent(3, undefined, undefined, undefined);
  return;
}

// fn e  args=1 vars=1 closure=0 cpool=3 bc=38B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// args: e
function {
  return {next: function <atom:0>, error: function <atom:0>, complete: function <atom:0>};
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertBridgeObserverToObserver = undefined;
  exports.convertBridgeObserverToObserver = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=bridge_observables/src/utils/convertBridgeObserverToObserver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
