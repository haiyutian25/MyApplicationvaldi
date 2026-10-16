// fn <atom:0>  args=2 vars=4 closure=6 cpool=1 bc=211B file=dil_core/src/DILTooltipGeometry
// args: e, I
// locals: s, P
// closure: exports, o, O, T, r, t
function {
  let P;
  let s;
  s = (e - (exports.TOOLTIP_POINTER_BASE / 2));
  P = ((I * exports.TOOLTIP_POINTER_HEIGHT) / 9.9666925);
  if (!((o === "top"))) goto L_77;
  return [((O + T) + s), ((O + r) + P)];
  if (!((o === "bottom"))) goto L_94;
  return [((O + T) + s), (O - P)];
  if (!((o === "left"))) goto L_b5;
  return [((O + t) + P), ((O + T) + s)];
  if (!((o === "right"))) goto L_d2;
  return [(O - P), ((O + T) + s)];
  o;
  return;
}

// fn o  args=4 vars=7 closure=2 cpool=19 bc=668B file=dil_core/src/DILTooltipGeometry
// args: o, T, t, r
// locals: O, I, s
// closure: exports, e
function {
  let s;
  let I;
  let O;
  O = exports.TOOLTIP_POINTER_HEIGHT;
  I = new e.GeometricPathBuilder((t + (2 * O)), (r + (2 * O)));
  s = function <atom:0>;
  // append([], 0, s(0, -1))
  s(0, -1);
  I.moveTo.apply(I, []);
  // append([], 0, s(0, 0))
  s(0, 0);
  I.lineTo.apply(I, []);
  // append([], 0, s(7.2, 0))
  // append([], s(7.2, 0), s(9.73333, 2.93333))
  // append([], s(9.73333, 2.93333), s(12.8, 7.06667))
  s(12.8, 7.06667);
  I.cubicTo.apply(I, []);
  // append([], 0, s(14.2667, 9.06667))
  s(14.2667, 9.06667);
  I.lineTo.apply(I, []);
  // append([], 0, s(15.1333, 10.2667))
  // append([], s(15.1333, 10.2667), s(16.8667, 10.2667))
  // append([], s(16.8667, 10.2667), s(17.7333, 9.06667))
  s(17.7333, 9.06667);
  I.cubicTo.apply(I, []);
  // append([], 0, s(19.2, 7.06667))
  s(19.2, 7.06667);
  I.lineTo.apply(I, []);
  // append([], 0, s(22.2667, 2.93333))
  // append([], s(22.2667, 2.93333), s(24.8, 0))
  // append([], s(24.8, 0), s(32, 0))
  s(32, 0);
  I.cubicTo.apply(I, []);
  // append([], 0, s(32, -1))
  s(32, -1);
  I.lineTo.apply(I, []);
  return I.close().build();   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=185B file=dil_core/src/DILTooltipGeometry
// args: require, module, exports
// locals: e, o
function {
  o = function o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TOOLTIP_CORNER_RADIUS = undefined;
  exports.TOOLTIP_POINTER_HEIGHT = undefined;
  exports.TOOLTIP_POINTER_BASE = undefined;
  exports.TOOLTIP_SCREEN_PADDING = undefined;
  exports.makeDILTooltipPointer = undefined;
  e = require("valdi_core/src/GeometricPath");
  exports.TOOLTIP_CORNER_RADIUS = 12;
  exports.TOOLTIP_POINTER_HEIGHT = 10;
  exports.TOOLTIP_POINTER_BASE = 32;
  exports.TOOLTIP_SCREEN_PADDING = 8;
  exports.makeDILTooltipPointer = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILTooltipGeometry
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
