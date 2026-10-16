// fn e  args=0 vars=0 closure=0 cpool=0 bc=15B file=web_platform/src/FetchNative
function {
  throw new Error("FetchNative requires a native Valdi runtime with Fetch support");
}

// fn r  args=0 vars=0 closure=1 cpool=0 bc=4B file=web_platform/src/FetchNative
// closure: e
function {
  return e();   // tail call
}

// fn t  args=2 vars=2 closure=1 cpool=0 bc=4B file=web_platform/src/FetchNative
// args: r, t
// closure: e
function {
  return e();   // tail call
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=4B file=web_platform/src/FetchNative
// args: r, t
// closure: e
function {
  return e();   // tail call
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=4B file=web_platform/src/FetchNative
// args: r, t
// closure: e
function {
  return e();   // tail call
}

// fn s  args=2 vars=2 closure=1 cpool=0 bc=4B file=web_platform/src/FetchNative
// args: r, t
// closure: e
function {
  return e();   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=6 bc=189B file=web_platform/src/FetchNative
// args: require, module, exports
// locals: e, r, t, o, n, s
function {
  e = function e;
  r = function r;
  t = function t;
  o = function o;
  n = function n;
  s = function s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createTransport = undefined;
  exports.resolveBlobURL = undefined;
  exports.digest = undefined;
  exports.normalizeMime = undefined;
  exports.parseFormData = undefined;
  exports.createTransport = r;
  exports.resolveBlobURL = t;
  exports.digest = o;
  exports.normalizeMime = n;
  exports.parseFormData = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/FetchNative
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
