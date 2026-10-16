// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=104B file=coreutils/src/Base64
// args: t, <atom:0>
// locals: t#1, r, r#1
// closure: e
function {
  let r;
  let t#1;
  t#1 = t;
  if (((<atom:0> === undefined))) goto L_34;
  r = <to_object>(<atom:0>).urlSafe;
  <to_object>(<atom:0>);
  goto L_38;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_d;
  // [栈深重同步 1 -> 0]
  r#1 = r;
  return e.encodeToBase64(t, (true === r#1));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=coreutils/src/Base64
// args: t
// closure: e
function {
  return e.decodeFromBase64(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=132B file=coreutils/src/Base64
// args: e
// locals: t, r
function {
  let r;
  let t;
  t = e.indexOf("=");
  if (!((-1 === t))) goto L_40;
  t = e.length;
  e.length;
  if (!(((t % 4) == 1))) goto L_59;
  throw new Error("Invalid string. Length must be a valid Base64 length");
  if (!((t === e.length))) goto L_6c;
  goto L_73;
  // [栈深重同步 1 -> 0]
  r = (4 - (t % 4));
  return (((3 * (t + r)) / 4) - r);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=3 bc=37B file=coreutils/src/Base64
// args: t
// closure: e
function {
  t.fromByteArray = function <atom:0>;
  t.toByteArray = function <atom:0>;
  t.byteLength = function <atom:0>;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=101B file=coreutils/src/Base64
// args: require, module, exports
// locals: e, t
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Base64 = undefined;
  e = require("./Base64Native");
  if ((t)) goto L_62;
  t = {};
  exports.Base64 = {};
  !function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/Base64
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
