// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=48B file=widgets/src/styles/gradients
// args: t
function {
  return "".concat(t[0], " ", t[1]);   // tail call
}

// fn e  args=2 vars=3 closure=0 cpool=1 bc=193B file=widgets/src/styles/gradients
// args: t, e
// locals: o
function {
  let o;
  o = t.map(function <atom:0>).join(", ");
  if (!(e)) goto L_8f;
  return "linear-gradient(".concat(e, ", ", o, ")");
  return "linear-gradient(".concat(o, ")");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=48B file=widgets/src/styles/gradients
// args: t
function {
  return "".concat(t[0], " ", t[1]);   // tail call
}

// fn o  args=1 vars=1 closure=0 cpool=1 bc=126B file=widgets/src/styles/gradients
// args: t
function {
  return "radial-gradient(".concat(t.map(function <atom:0>).join(", "), ")");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=121B file=widgets/src/styles/gradients
// args: t
function {
  t.TopToBottom = "0deg";
  t.TopRightToBottomLeft = "45deg";
  t.RightToLeft = "90deg";
  t.BottomRightToTopLeft = "135deg";
  t.BottomToTop = "180deg";
  t.BottomLeftToTopRight = "225deg";
  t.LeftToRight = "270deg";
  t.TopLeftToBottomRight = "315deg";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=140B file=widgets/src/styles/gradients
// args: require, module, exports
// locals: t, e, o
function {
  e = function e;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GradientDirection = undefined;
  exports.linearGradient = undefined;
  exports.radialGradient = undefined;
  if ((t)) goto L_73;
  t = {};
  exports.GradientDirection = {};
  function <atom:0>({});
  exports.linearGradient = e;
  exports.radialGradient = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/styles/gradients
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
