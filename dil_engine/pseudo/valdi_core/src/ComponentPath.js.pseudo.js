// fn e  args=1 vars=8 closure=2 cpool=0 bc=663B file=valdi_core/src/ComponentPath
// args: o
// locals: n, r, e, t, n#1, s, e#1
// closure: t, e
function {
  let s;
  let r;
  let n;
  n = t[o];
  if (!(n)) goto L_18;
  return n;
  r = o.indexOf("@");
  if (!((r >= 0))) goto L_133;
  let n#1;
  let e;
  e = o.substring(0, r);
  if (!((e.indexOf("/") >= 0))) goto L_ec;
  let t;
  t = e.split("/");
  e = t[(t.length - 1)];
  t[(t.length - 1)];
  n#1 = {filePath: o.substring((r + 1)), symbolName: e};
  t[o] = n#1;
  return n#1;
  s = o.indexOf(":");
  if (!((s >= 0))) goto L_1c4;
  return e(((o.substring(0, s) + "/") + o.substring((s + 1))));   // tail call
  if (!(o.endsWith(".valdi"))) goto L_266;
  let e#1;
  e#1 = {filePath: "".concat(o.substr(0, (o.length - 6)), ".vue.generated"), symbolName: "ComponentClass"};
  t[o] = e#1;
  return e#1;
  throw Error("Invalid componentPath ".concat(o));
}

// fn o  args=2 vars=4 closure=1 cpool=0 bc=242B file=valdi_core/src/ComponentPath
// args: t, o
// locals: n, r
// closure: e
function {
  let r;
  let n;
  n = undefined;
  if (!(("string" == typeof o))) goto L_17;
  goto L_18;
  // [栈深重同步 1 -> 0]
  n = o;
  o;
  r = t(n.filePath, true)[n.symbolName];
  if (!(!r)) goto L_ee;
  throw Error("Could not resolve component ".concat(n.symbolName, " constructor in ", n.filePath));
  return r;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=112B file=valdi_core/src/ComponentPath
// args: require, module, exports
// locals: t, e, o
function {
  e = function e;
  o = function o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseComponentPath = undefined;
  exports.resolveComponentConstructor = undefined;
  t = {};
  exports.parseComponentPath = e;
  exports.resolveComponentConstructor = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ComponentPath
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
