// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: e
function {
  return e.Observable;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: r
function {
  return r.Subject;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: t
function {
  return t.BehaviorSubject;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: o
function {
  return o.ReplaySubject;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: n
function {
  return n.Subscription;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: i
function {
  return i.Subscriber;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: p
function {
  return p.pipe;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: u
function {
  return u.firstValueFrom;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: a
function {
  return a.share;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: s
function {
  return s.shareReplay;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: c
function {
  return c.skip;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: b
function {
  return b.map;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: f
function {
  return f.tap;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: l
function {
  return l.filter;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: x
function {
  return x.switchMap;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: j
function {
  return j.distinctUntilChanged;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: m
function {
  return m.combineLatest;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: v
function {
  return v.of;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=valdi_rxjs/src/index
// closure: d
function {
  return d.catchError;
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=19 bc=1724B file=valdi_rxjs/src/index
// args: require, module, exports
// locals: e, r, t, o, n, i, p, u, a, s, c, b, f, l, x, j, m, v, d
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Observable = undefined;
  exports.Subject = undefined;
  exports.BehaviorSubject = undefined;
  exports.ReplaySubject = undefined;
  exports.Subscription = undefined;
  exports.Subscriber = undefined;
  exports.pipe = undefined;
  exports.firstValueFrom = undefined;
  exports.share = undefined;
  exports.shareReplay = undefined;
  exports.skip = undefined;
  exports.map = undefined;
  exports.tap = undefined;
  exports.filter = undefined;
  exports.switchMap = undefined;
  exports.distinctUntilChanged = undefined;
  exports.combineLatest = undefined;
  exports.of = undefined;
  exports.catchError = undefined;
  e = require("./Observable");
  Object.defineProperty(exports, "Observable", {enumerable: true, get: function <atom:0>});
  r = require("./Subject");
  Object.defineProperty(exports, "Subject", {enumerable: true, get: function <atom:0>});
  t = require("./BehaviorSubject");
  Object.defineProperty(exports, "BehaviorSubject", {enumerable: true, get: function <atom:0>});
  o = require("./ReplaySubject");
  Object.defineProperty(exports, "ReplaySubject", {enumerable: true, get: function <atom:0>});
  n = require("./Subscription");
  Object.defineProperty(exports, "Subscription", {enumerable: true, get: function <atom:0>});
  i = require("./Subscriber");
  Object.defineProperty(exports, "Subscriber", {enumerable: true, get: function <atom:0>});
  p = require("./util/pipe");
  Object.defineProperty(exports, "pipe", {enumerable: true, get: function <atom:0>});
  u = require("./firstValueFrom");
  Object.defineProperty(exports, "firstValueFrom", {enumerable: true, get: function <atom:0>});
  a = require("./operators/share");
  Object.defineProperty(exports, "share", {enumerable: true, get: function <atom:0>});
  s = require("./operators/shareReplay");
  Object.defineProperty(exports, "shareReplay", {enumerable: true, get: function <atom:0>});
  c = require("./operators/skip");
  Object.defineProperty(exports, "skip", {enumerable: true, get: function <atom:0>});
  b = require("./operators/map");
  Object.defineProperty(exports, "map", {enumerable: true, get: function <atom:0>});
  f = require("./operators/tap");
  Object.defineProperty(exports, "tap", {enumerable: true, get: function <atom:0>});
  l = require("./operators/filter");
  Object.defineProperty(exports, "filter", {enumerable: true, get: function <atom:0>});
  x = require("./operators/switchMap");
  Object.defineProperty(exports, "switchMap", {enumerable: true, get: function <atom:0>});
  j = require("./operators/distinctUntilChanged");
  Object.defineProperty(exports, "distinctUntilChanged", {enumerable: true, get: function <atom:0>});
  m = require("./observable/combineLatest");
  Object.defineProperty(exports, "combineLatest", {enumerable: true, get: function <atom:0>});
  v = require("./observable/of");
  Object.defineProperty(exports, "of", {enumerable: true, get: function <atom:0>});
  d = require("./operators/catchError");
  Object.defineProperty(exports, "catchError", {enumerable: true, get: function <atom:0>});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/index
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
