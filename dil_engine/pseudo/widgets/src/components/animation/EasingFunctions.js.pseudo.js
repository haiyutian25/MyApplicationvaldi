// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=widgets/src/components/animation/EasingFunctions
// args: i
// closure: s, n
function {
  return s(n.clamp(i, 0, 1));   // tail call
}

// fn s  args=1 vars=1 closure=1 cpool=1 bc=3B file=widgets/src/components/animation/EasingFunctions
// args: s
// closure: n
function {
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=widgets/src/components/animation/EasingFunctions
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return n;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return (n * n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return (n * (2 - n));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=22B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  if (!((n < 0.5))) goto L_c;
  return ((2 * n) * n);
  return (((4 - (2 * n)) * n) - 1);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=6B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return ((n * n) * n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=10B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  n = (n --);
  return ((((n --) * n) * n) + 1);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=32B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  if (!((n < 0.5))) goto L_e;
  return (((4 * n) * n) * n);
  return ((((n - 1) * ((2 * n) - 2)) * ((2 * n) - 2)) + 1);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return (((n * n) * n) * n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=12B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  n = (n --);
  return (1 - ((((n --) * n) * n) * n));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=32B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  if (!((n < 0.5))) goto L_11;
  return ((((8 * n) * n) * n) * n);
  n = (n --);
  return (1 - ((((8 * (n --)) * n) * n) * n));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=10B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  return ((((n * n) * n) * n) * n);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=14B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  n = (n --);
  return (1 + (((((n --) * n) * n) * n) * n));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=36B file=widgets/src/components/animation/EasingFunctions
// args: n
function {
  if (!((n < 0.5))) goto L_13;
  return (((((16 * n) * n) * n) * n) * n);
  n = (n --);
  return (1 + (((((16 * (n --)) * n) * n) * n) * n));
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=15 bc=330B file=widgets/src/components/animation/EasingFunctions
// args: require, module, exports
// locals: n, s, EasingFunctions, <class_fields_init>, EasingFunctions#1
function {
  s = function s;
  let EasingFunctions#1;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EasingFunctions = undefined;
  n = require("foundation/src/number");
  let EasingFunctions;
  let <class_fields_init>;
  class EasingFunctions extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:EasingFunctions>;
  EasingFunctions = function <atom:0>;
  // close_loc <class_fields_init>
  EasingFunctions#1 = function <atom:0>;
  exports.EasingFunctions = EasingFunctions#1;
  EasingFunctions#1.linear = s(function <atom:0>);
  EasingFunctions#1.easeInQuad = s(function <atom:0>);
  EasingFunctions#1.easeOutQuad = s(function <atom:0>);
  EasingFunctions#1.easeInOutQuad = s(function <atom:0>);
  EasingFunctions#1.easeInCubic = s(function <atom:0>);
  EasingFunctions#1.easeOutCubic = s(function <atom:0>);
  EasingFunctions#1.easeInOutCubic = s(function <atom:0>);
  EasingFunctions#1.easeInQuart = s(function <atom:0>);
  EasingFunctions#1.easeOutQuart = s(function <atom:0>);
  EasingFunctions#1.easeInOutQuart = s(function <atom:0>);
  EasingFunctions#1.easeInQuint = s(function <atom:0>);
  EasingFunctions#1.easeOutQuint = s(function <atom:0>);
  EasingFunctions#1.easeInOutQuint = s(function <atom:0>);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/animation/EasingFunctions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
