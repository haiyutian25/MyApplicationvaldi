// fn t  args=1 vars=1 closure=1 cpool=0 bc=11B file=valdi_rxjs/src/NotificationFactories
// args: t
// closure: e
function {
  return e("E", undefined, t);   // tail call
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=11B file=valdi_rxjs/src/NotificationFactories
// args: t
// closure: e
function {
  return e("N", t, undefined);   // tail call
}

// fn e  args=3 vars=3 closure=0 cpool=0 bc=20B file=valdi_rxjs/src/NotificationFactories
// args: t, o, e
function {
  return {kind: t, value: o, error: e};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=162B file=valdi_rxjs/src/NotificationFactories
// args: require, module, exports
// locals: t, o, e
function {
  t = function t;
  o = function o;
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.COMPLETE_NOTIFICATION = undefined;
  exports.errorNotification = undefined;
  exports.nextNotification = undefined;
  exports.createNotification = undefined;
  exports.COMPLETE_NOTIFICATION = e("C", undefined, undefined);
  exports.errorNotification = t;
  exports.nextNotification = o;
  exports.createNotification = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/NotificationFactories
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
