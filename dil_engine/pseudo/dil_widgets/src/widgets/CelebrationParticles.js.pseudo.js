// fn l  args=2 vars=13 closure=2 cpool=12 bc=1691B file=dil_widgets/src/widgets/CelebrationParticles
// args: l, t
// locals: o, i, a, p, s, f, r, y, x, v, c
// closure: exports, e
function {
  let c;
  let v;
  let x;
  let y;
  let r;
  let f;
  let s;
  let p;
  let a;
  let i;
  let o;
  o = exports.CONFETTI_PARTICLES[l];
  i = ((t - exports.CELEBRATION_DELAY_MS) / 1000);
  if (!((i <= 1))) goto L_7b;
  goto L_85;
  // [栈深重同步 1 -> 0]
  a = (1 + (0.6 * (i - 1)));
  p = e[l];
  if (!(p)) goto L_160;
  if (!((i >= p.start))) goto L_160;
  if (!((i < p.end))) goto L_111;
  goto L_163;
  // [栈深重同步 1 -> 0]
  goto L_163;
  // [栈深重同步 1 -> 0]
  s = i;
  if (!((s <= 1))) goto L_171;
  goto L_182;
  // [栈深重同步 1 -> 0]
  f = (1 + ((s - 1) / (1 + (4 * (s - 1)))));
  r = (1.5 * (((o.left - 106) + (o.vx * f)) + ((o.ax * f) * f)));
  if (!(p)) goto L_303;
  if (!((i >= p.start))) goto L_303;
  if (!((i < p.end))) goto L_28c;
  goto L_3cb;
  // [栈深重同步 1 -> 0]
  goto L_3cb;
  // [栈深重同步 1 -> 0]
  if (!((a > 0.25))) goto L_3c9;
  if (!((a < 1))) goto L_3c9;
  goto L_3ca;
  // [栈深重同步 2 -> 1]
  y = (((1.25 * ((o.top + (o.vy * a)) + ((o.ay * a) * a))) - 38) + 0);
  x = Math.abs(Math.cos(((s * o.flip) + o.phase)));
  if (!((i <= (o.life - 0.55)))) goto L_49e;
  goto L_4f6;
  // [栈深重同步 1 -> 0]
  if (!((i >= o.life))) goto L_4cb;
  goto L_4f6;
  // [栈深重同步 1 -> 0]
  v = ((o.life - i) / 0.55);
  c = (0.12 + (0.88 * x));
  if (!((0 === l))) goto L_5e0;
  goto L_5e2;
  // [栈深重同步 3 -> 2]
  if (!(((l % 2) == 0))) goto L_670;
  goto L_671;
  // [栈深重同步 2 -> 1]
  if (!(((l % 2) == 0))) goto L_680;
  goto L_683;
  // [栈深重同步 2 -> 1]
  return {width: o.size, height: o.size, backgroundColor: o.color, translationX: (r - (o.size / 2)), translationY: ((y - (o.size / 2)) + 8), rotation: (o.phase + (((s * o.flip) * Math.PI) / 10)), scaleX: 1, scaleY: c, opacity: ((0.65 + (0.35 * x)) * v)};
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/CelebrationParticles
// args: e, l
function {
  return (e - l);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/CelebrationParticles
// args: e
// closure: exports
function {
  return (exports.CELEBRATION_DELAY_MS + (1000 * e));
}

// fn t  args=1 vars=3 closure=2 cpool=9 bc=375B file=dil_widgets/src/widgets/CelebrationParticles
// args: l
// locals: t, o
// closure: exports, e
function {
  let o;
  let t;
  t = exports.CONFETTI_PARTICLES[l];
  o = e[l];
  if (!(o)) goto L_d5;
  goto L_12b;
  // [栈深重同步 1 -> 0]
  return [0.08, 0.25, 0.65, 1, 2, (t.life - 0.55), t.life].sort(function <atom:0>).map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=213 bc=2368B file=dil_widgets/src/widgets/CelebrationParticles
// args: require, module, exports
// locals: e, l, t
function {
  l = function l;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CELEBRATION_DELAY_MS = undefined;
  exports.CELEBRATION_DURATION_MS = undefined;
  exports.CONFETTI_PARTICLES = undefined;
  exports.confettiParticleAttributes = undefined;
  exports.confettiParticleKeyframes = undefined;
  exports.CELEBRATION_DELAY_MS = 160;
  exports.CELEBRATION_DURATION_MS = 5200;
  exports.CONFETTI_PARTICLES = [{left: 83, top: 6.7, color: "blue-400", size: 7, vx: -138.7, vy: -234.1, ax: 85.9, ay: 376.3, flip: 5.1, phase: 0, life: 3.9}, {left: 129.4, top: 7.2, color: "blue-400", size: 8, vx: 78.3, vy: -363.2, ax: -60.4, ay: 431.9, flip: 7.4, phase: 0.71, life: 3.55}, {left: 123.6, top: 27.9, color: "blue-400", size: 7, vx: -175.6, vy: -173, ax: 137.5, ay: 346.5, flip: 6.2, phase: 1.42, life: 3.65}, {left: 138, top: 38.7, color: "blue-400", size: 6, vx: 80.9, vy: -183.2, ax: -38.7, ay: 347.2, flip: 8.5, phase: 2.13, life: 3.4}, {left: 103.3, top: 46.4, color: "blue-400", size: 8, vx: 27, vy: -301.7, ax: -27.9, ay: 422.8, flip: 4.8, phase: 2.84, life: 3.75}, {left: 100.8, top: 52.6, color: "blue-400", size: 7, vx: 141.9, vy: -302.1, ax: -100.4, ay: 349.2, flip: 7.8, phase: 3.55, life: 3.95}, {left: 78.1, top: 58.5, color: "blue-400", size: 6, vx: 29.1, vy: -302.5, ax: -44.6, ay: 400.4, flip: 9.1, phase: 4.26, life: 3.35}, {left: 120.6, top: 60.3, color: "blue-400", size: 8, vx: -70.8, vy: -286.8, ax: 57.6, ay: 412.7, flip: 5.5, phase: 4.97, life: 3.8}, {left: 92.5, top: 66.3, color: "blue-400", size: 6, vx: -139.9, vy: -295, ax: 102, ay: 371.9, flip: 8.8, phase: 5.68, life: 3.6}, {left: 93.2, top: -4.3, color: "pink-400", size: 6, vx: 79.3, vy: -246.3, ax: -38.9, ay: 393.3, flip: 6.6, phase: 0.11, life: 3.5}, {left: 110.1, top: 13.1, color: "pink-400", size: 7, vx: -59.8, vy: -270.3, ax: 64.8, ay: 404.3, flip: 7.2, phase: 0.82, life: 3.7}, {left: 75.3, top: 14.5, color: "pink-400", size: 6, vx: 143.3, vy: -228, ax: -110.8, ay: 377.5, flip: 8.1, phase: 1.53, life: 3.85}, {left: 88.5, top: 25.9, color: "pink-400", size: 7, vx: 58.1, vy: -251.3, ax: -50, ay: 395.6, flip: 5.9, phase: 2.24, life: 3.45}, {left: 92.4, top: 48.9, color: "pink-400", size: 8, vx: 150.1, vy: -330.9, ax: -91.5, ay: 406.9, flip: 9, phase: 2.95, life: 4}, {left: 93.2, top: 73.6, color: "pink-400", size: 7, vx: 203.1, vy: -122.5, ax: -133.9, ay: 171.6, flip: 4.7, phase: 3.66, life: 3.65}, {left: 115.1, top: -13, color: "yellow-400", size: 6, vx: -187.1, vy: -234.5, ax: 130.9, ay: 323.5, flip: 7.6, phase: 4.37, life: 3.75}, {left: 81.8, top: -9.8, color: "yellow-400", size: 6, vx: -39.2, vy: -290.4, ax: -1.6, ay: 415.9, flip: 6, phase: 5.08, life: 3.55}, {left: 142.3, top: -7.4, color: "yellow-400", size: 8, vx: 192.5, vy: -338, ax: -123.6, ay: 446.3, flip: 8.7, phase: 5.79, life: 3.85}, {left: 121.9, top: 7.2, color: "yellow-400", size: 7, vx: 21.9, vy: -203.2, ax: -22.1, ay: 268.8, flip: 5.3, phase: 0.21, life: 3.95}, {left: 69.7, top: 26, color: "yellow-400", size: 8, vx: -152.3, vy: -231.4, ax: 82.9, ay: 383.3, flip: 9.3, phase: 0.92, life: 3.4}, {left: 102.4, top: 34.1, color: "yellow-400", size: 6, vx: -1.3, vy: -254.7, ax: -0.5, ay: 378.9, flip: 6.8, phase: 1.63, life: 3.65}, {left: 80.1, top: 47.2, color: "yellow-400", size: 8, vx: -53.7, vy: -248.9, ax: 33.9, ay: 387.6, flip: 7, phase: 2.34, life: 3.9}, {left: 71.9, top: 54.1, color: "yellow-400", size: 7, vx: -77.3, vy: -272.5, ax: 24.3, ay: 394.1, flip: 8.3, phase: 3.05, life: 3.5}, {left: 111.2, top: 66.2, color: "yellow-400", size: 7, vx: -23.2, vy: -217.5, ax: 15.9, ay: 375.6, flip: 5.7, phase: 3.76, life: 4}];
  e = {<bad:2147483433>: {start: 0.58, end: 2.45, top: -1, gravity: 260}, <bad:2147483434>: {start: 0.82, end: 2.65, top: -9, gravity: 245}, <bad:2147483442>: {start: 0.6, end: 2.8, top: -9, gravity: 240}, <bad:2147483445>: {start: 0.48, end: 2.55, top: -9, gravity: 250}, <bad:2147483448>: {start: 0.76, end: 2.95, top: -9, gravity: 235}, <bad:2147483450>: {start: 0.77, end: 3.1, top: -9, gravity: 230}};
  exports.confettiParticleAttributes = l;
  exports.confettiParticleKeyframes = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/CelebrationParticles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
