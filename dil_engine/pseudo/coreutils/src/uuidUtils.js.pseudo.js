// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=11B file=coreutils/src/uuidUtils
// args: t
function {
  return parseInt(t, 16);   // tail call
}

// fn t  args=1 vars=2 closure=0 cpool=5 bc=221B file=coreutils/src/uuidUtils
// args: t
// locals: r
function {
  let r;
  if ((t.trim().replace(new RegExp("-"), "").match(new RegExp(".{2}")))) goto L_82;
  r = [].map(function <atom:0>);
  // append([], 0, r)
  r;
  return Uint8Array.of.apply(Uint8Array, []);
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=38B file=coreutils/src/uuidUtils
// args: r
// closure: t
function {
  return r.map(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=83B file=coreutils/src/uuidUtils
// args: t
function {
  return ("00" + t.toString(16)).slice(-2);   // tail call
}

// fn e  args=1 vars=1 closure=0 cpool=3 bc=163B file=coreutils/src/uuidUtils
// args: t
function {
  return Array.from(t).map(function <atom:0>).join("").replace(new RegExp("(.{8})(.{4})(.{4})(.{4})(.{12})"), "$1-$2-$3-$4-$5");   // tail call
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=38B file=coreutils/src/uuidUtils
// args: t
// closure: e
function {
  return t.map(e);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=157B file=coreutils/src/uuidUtils
// args: require, module, exports
// locals: t, r, e, i
function {
  t = function t;
  r = function r;
  e = function e;
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.uuidStringToBytes = undefined;
  exports.uuidStringToBytesList = undefined;
  exports.uuidBytesToString = undefined;
  exports.uuidBytesToStringList = undefined;
  exports.uuidStringToBytes = t;
  exports.uuidStringToBytesList = r;
  exports.uuidBytesToString = e;
  exports.uuidBytesToStringList = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=coreutils/src/uuidUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
