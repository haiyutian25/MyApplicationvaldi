// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=166B file=foundation/src/NativeViewUtils
// locals: i, r
// closure: t, e
function {
  let r;
  let i;
  if (!(!t)) goto L_e;
  return undefined; // async
  i = e();
  if (!((i.single() == null))) goto L_40;
  i.single();
  goto L_64;
  if (!((undefined.getNativeView() == null))) goto L_93;
  undefined.getNativeView();
  r = (await Promise.resolve(undefined));
  if (!(r)) goto L_a3;
  t(r);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=16B file=foundation/src/NativeViewUtils
// args: e
// closure: t, i
function {
  t = e;
  e;
  if (!(t)) goto L_f;
  return i;
  return;
}

// fn e  args=1 vars=3 closure=0 cpool=2 bc=19B file=foundation/src/NativeViewUtils
// args: e
// locals: t, i
function {
  let i;
  let t;
  t = undefined;
  i = function <atom:0>;
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/NativeViewUtils
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeFactoryForEventWithNativeView = undefined;
  exports.makeFactoryForEventWithNativeView = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/NativeViewUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
