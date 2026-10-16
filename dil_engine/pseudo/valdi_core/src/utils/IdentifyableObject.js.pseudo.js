// fn t  args=1 vars=1 closure=1 cpool=0 bc=25B file=valdi_core/src/utils/IdentifyableObject
// args: t
// closure: e
function {
  if (!(t)) goto L_18;
  e = (e ++);
  t.$objectId = (e ++);
  (e ++);
  return;
}

// fn o  args=1 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/utils/IdentifyableObject
// args: e
function {
  if (!(e)) goto L_26;
  return e.$objectId;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=112B file=valdi_core/src/utils/IdentifyableObject
// args: require, module, exports
// locals: e, t, o
function {
  t = function t;
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setObjectId = undefined;
  exports.getObjectId = undefined;
  e = 0;
  exports.setObjectId = t;
  exports.getObjectId = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/IdentifyableObject
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
