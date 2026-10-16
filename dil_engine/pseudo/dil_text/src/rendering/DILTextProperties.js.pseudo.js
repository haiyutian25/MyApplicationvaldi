// fn e  args=2 vars=2 closure=0 cpool=0 bc=38B file=dil_text/src/rendering/DILTextProperties
// args: e, t
function {
  if (!(e)) goto L_9;
  return "strikethrough";
  if (!((true === t))) goto L_15;
  return "underline";
  if (!(("dotted" === t))) goto L_24;
  return "dotted-underline";
  return undefined;
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_text/src/rendering/DILTextProperties
// args: e
function {
  if ((("start" === e))) goto L_33;
  if ((("center" === e))) goto L_33;
  if ((("end" === e))) goto L_33;
  if ((("left" === e))) goto L_33;
  if (!(("right" === e))) goto L_37;
  return e;
  return;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=47B file=dil_text/src/rendering/DILTextProperties
// args: e, r
// closure: t
function {
  return t(e.getPropertyValueAsString("textAlign", r));   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=132B file=dil_text/src/rendering/DILTextProperties
// args: require, module, exports
// locals: e, t, r
function {
  e = function e;
  t = function t;
  r = function r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.readTextDecorationFromValue = undefined;
  exports.readTextAlignFromValue = undefined;
  exports.readTextAlign = undefined;
  exports.readTextDecorationFromValue = e;
  exports.readTextAlignFromValue = t;
  exports.readTextAlign = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextProperties
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
