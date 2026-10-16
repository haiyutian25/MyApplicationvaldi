// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/utils/Stopwatch
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.milliseconds = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=41B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  return (this.milliseconds / 1000);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=41B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  return (1000 * this.milliseconds);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/utils/Stopwatch
// args: e
// locals: this
// closure: Duration
function {
  this = this;
  return new Duration((this.milliseconds - e.milliseconds));
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/utils/Stopwatch
// args: e
// locals: this
// closure: Duration
function {
  this = this;
  return new Duration((this.milliseconds + e.milliseconds));
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=214B file=valdi_core/src/utils/Stopwatch
// locals: e, t, s, this
function {
  this = this;
  let s;
  let t;
  let e;
  e = this.microseconds;
  t = "us";
  s = 0;
  if (!((e > 1000))) goto L_5c;
  e = (e / 1000);
  (e / 1000);
  t = "ms";
  "ms";
  s = 2;
  2;
  if (!((e > 1000))) goto L_83;
  e = (e / 1000);
  (e / 1000);
  t = "s";
  "s";
  s = 3;
  3;
  return "".concat(e.toFixed(s), t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=38B file=valdi_core/src/utils/Stopwatch
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.startTime = 0;
  this.endTime = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=55B file=valdi_core/src/utils/Stopwatch
// locals: e
// closure: Stopwatch
function {
  let e;
  e = new Stopwatch();
  e.start();
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=65B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  this.startTime = performance.now();
  this.endTime = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=54B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  this.endTime = performance.now();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=54B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  this.endTime = performance.now();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=135B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  this.startTime = (performance.now() - (this.endTime - this.startTime));
  this.endTime = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=44B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  return (1000 * this.elapsedMs());
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=valdi_core/src/utils/Stopwatch
// locals: this
function {
  this = this;
  if ((this.endTime)) goto L_51;
  return (performance.now() - this.startTime);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=47B file=valdi_core/src/utils/Stopwatch
// locals: this
// closure: Duration
function {
  this = this;
  return new Duration(this.elapsedMs());
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=15 bc=271B file=valdi_core/src/utils/Stopwatch
// args: require, module, exports
// locals: Duration, <class_fields_init>, Duration#1, Stopwatch, <class_fields_init>#1, Stopwatch#1
function {
  let Stopwatch#1;
  let Duration#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Duration = undefined;
  exports.Stopwatch = undefined;
  let Duration;
  let <class_fields_init>;
  class Duration extends undefined { ... }
  <proto:Duration>.seconds = function <atom:0>;
  <proto:Duration>.microseconds = function <atom:0>;
  <proto:Duration>.subtracting = function <atom:0>;
  <proto:Duration>.adding = function <atom:0>;
  <proto:Duration>.toString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Duration>;
  Duration = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Duration
  Duration#1 = function <atom:0>;
  exports.Duration = Duration#1;
  let Stopwatch;
  let <class_fields_init>#1;
  class Stopwatch extends undefined { ... }
  function <atom:0>.createAndStart = function <atom:0>;
  <proto:Stopwatch>.start = function <atom:0>;
  <proto:Stopwatch>.stop = function <atom:0>;
  <proto:Stopwatch>.pause = function <atom:0>;
  <proto:Stopwatch>.resume = function <atom:0>;
  <proto:Stopwatch>.elapsedMicros = function <atom:0>;
  <proto:Stopwatch>.elapsedMs = function <atom:0>;
  <proto:Stopwatch>.elapsed = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:Stopwatch>;
  Stopwatch = function <atom:0>;
  // close_loc <class_fields_init>#1
  // close_loc Stopwatch
  Stopwatch#1 = function <atom:0>;
  exports.Stopwatch = Stopwatch#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/Stopwatch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
