// fn r  args=1 vars=1 closure=0 cpool=0 bc=185B file=valdi_core/src/utils/ErrorUtils
// args: r
function {
  if (!((r instanceof Error))) goto L_b;
  return r;
  if (!(r.message)) goto L_5b;
  return new Error(r.message);
  if (!(("string" == typeof r))) goto L_70;
  return new Error(r);
  if (!(("object" == typeof r))) goto L_ae;
  return new Error(JSON.stringify(r));
  return new Error(r);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_core/src/utils/ErrorUtils
// args: require, module, exports
// locals: r
function {
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toError = undefined;
  exports.toError = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/ErrorUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
