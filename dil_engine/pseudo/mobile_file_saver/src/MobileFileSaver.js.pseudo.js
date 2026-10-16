// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=33B file=mobile_file_saver/src/MobileFileSaver
// args: e, r
// closure: o, i
function {
  if (!((undefined === e))) goto L_1d;
  if (!((r == null))) goto L_17;
  r;
  goto L_20;
  // [栈深重同步 1 -> 0]
  i(e);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=41B file=mobile_file_saver/src/MobileFileSaver
// args: i, o
// closure: e, r
function {
  e.saveMobileFile(r, function <atom:0>);
  return;
}

// fn r  args=1 vars=1 closure=1 cpool=1 bc=280B file=mobile_file_saver/src/MobileFileSaver
// args: r
// closure: e
function {
  if (!((0 === r.filename.length))) goto L_5f;
  return Promise.reject(new Error("Cannot save a file without a filename"));
  if (!((0 === r.bytes.length))) goto L_10c;
  return Promise.reject(new Error("Cannot save empty file "".concat(r.filename, """)));
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=mobile_file_saver/src/MobileFileSaver
// args: require, module, exports
// locals: e, r
function {
  r = function r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.saveFileForUser = undefined;
  e = require("./NativeMobileFileSaver");
  exports.saveFileForUser = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=mobile_file_saver/src/MobileFileSaver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
