// fn r  args=3 vars=5 closure=1 cpool=0 bc=292B file=valdi_core/src/utils/CallbackInternal
// args: r, t, n
// locals: u, n#1
// closure: e
function {
  let u;
  if (!(!n)) goto L_8;
  return;
  u = n;
  if (!(!u[e.CALLBACK_KEY])) goto L_37;
  return n;
  if (!(u[e.OWNER_KEY])) goto L_65;
  return u;
  if (!((t instanceof Function))) goto L_f7;
  let n#1;
  n#1 = t;
  if (!((n#1[e.OWNER_KEY] === r))) goto L_f7;
  n#1[e.CALLBACK_KEY] = u[e.CALLBACK_KEY];
  return n#1;
  u[e.OWNER_KEY] = r;
  return u;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_core/src/utils/CallbackInternal
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.tryReuseCallback = undefined;
  e = require("./Callback");
  exports.tryReuseCallback = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/CallbackInternal
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
