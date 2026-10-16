// fn r  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_renderer/src/DILRuntimeUtils
// args: r
function {
  if (!((null !== r))) goto L_3c;
  if (!(("object" == typeof r))) goto L_3c;
  return ("function" == typeof r.then);
}

// fn e  args=1 vars=1 closure=0 cpool=0 bc=16B file=dil_renderer/src/DILRuntimeUtils
// args: r
function {
  if (!((null !== r))) goto L_f;
  return ("object" == typeof r);
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=28B file=dil_renderer/src/DILRuntimeUtils
// args: r
function {
  if (!((r instanceof Error))) goto L_b;
  return r;
  return new Error(String(r));
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=dil_renderer/src/DILRuntimeUtils
// args: require, module, exports
// locals: r, e, o
function {
  r = function r;
  e = function e;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isPromiseLike = undefined;
  exports.isRecord = undefined;
  exports.toError = undefined;
  exports.isPromiseLike = r;
  exports.isRecord = e;
  exports.toError = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILRuntimeUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
