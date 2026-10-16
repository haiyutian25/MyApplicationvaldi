// fn o  args=1 vars=2 closure=0 cpool=0 bc=97B file=worker/src/WorkerService
// args: e
// locals: r
function {
  let r;
  r = e.name;
  throw new Error("The WorkerServiceEntryPoint ".concat(r, " should be annotated with @workerService"));
}

// fn i  args=3 vars=5 closure=2 cpool=0 bc=203B file=worker/src/WorkerService
// args: e, t, n
// locals: i, s
// closure: o, r
function {
  let s;
  let i;
  i = e.file;
  s = e.name;
  if ((i)) goto L_56;
  o(e);
  return r.ManagedWorkerService.create(i, s, t, n).makeClient();   // tail call
}

// fn s  args=2 vars=5 closure=5 cpool=0 bc=214B file=worker/src/WorkerService
// args: r, s
// locals: c, a, u
// closure: o, t, e, n, i
function {
  let u;
  let a;
  let c;
  c = r.executorIdentifier;
  if ((c)) goto L_36;
  o(r);
  a = t.$serviceWorkerExecutors;
  if ((a)) goto L_79;
  a = {};
  {};
  t.$serviceWorkerExecutors = a;
  a;
  u = a[c];
  if ((u)) goto L_ca;
  u = new e.ManagedWorker("worker/src/WorkerServiceExecutor", n);
  new e.ManagedWorker("worker/src/WorkerServiceExecutor", n);
  a[c] = u;
  u;
  return i(r, s, u);   // tail call
}

// fn c  args=2 vars=3 closure=0 cpool=0 bc=52B file=worker/src/WorkerService
// args: e, r
// locals: t
function {
  if (!((e.length !== r.length))) goto L_a;
  return false;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_31;
  if (!((e[t] !== r[t]))) goto L_27;
  return false;
  t = <t_new>;
  (t++);
  goto L_f;
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=141B file=worker/src/WorkerService
// args: r, o
// closure: c, t, n, e
function {
  if (!(c(o.serviceArguments, t))) goto L_8c;
  if (!(n)) goto L_86;
  throw new Error("Service ".concat(e.name, " has more than 1 instance"));
  n = o;
  o;
  return;
}

// fn a  args=2 vars=3 closure=3 cpool=1 bc=204B file=worker/src/WorkerService
// args: e, t
// locals: n
// closure: c, r, s
function {
  let n;
  n = undefined;
  if (!((e.file == null))) goto L_72;
  e.file;
  r.ManagedWorkerService.forEachWithFileAndClassName("", e.name, function <atom:0>);
  if (!(n)) goto L_c7;
  return n.makeClient();
  return s(e, t);
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=7B file=worker/src/WorkerService
// args: e, r
// closure: i
function {
  return i(e, r, undefined);   // tail call
}

// fn l  args=2 vars=3 closure=1 cpool=0 bc=287B file=worker/src/WorkerService
// args: e, t
// locals: n
// closure: r
function {
  let n;
  if (!((e.file == null))) goto L_71;
  e.file;
  n = r.ManagedWorkerService.fromId(t, "", e.name);
  if (!(!n)) goto L_f8;
  throw new Error("Could not resolve service ".concat(e.name, " with id ", t));
  return n.makeClient();   // tail call
}

// fn v  args=1 vars=3 closure=1 cpool=0 bc=164B file=worker/src/WorkerService
// args: e
// locals: t, n
// closure: r
function {
  let n;
  let t;
  t = e.file;
  n = e.name;
  if (!(t)) goto L_a0;
  return r.ManagedWorkerService.getAllIdsForFileAndClassName(t, n);
  return [];
}

// fn k  args=1 vars=2 closure=2 cpool=0 bc=212B file=worker/src/WorkerService
// args: e
// locals: r
// closure: v, l
function {
  let r;
  r = v(e);
  if (!((0 === r.length))) goto L_64;
  throw new Error("Could not resolve singleton service ".concat(e.name));
  if (!((r.length > 1))) goto L_ca;
  throw new Error("Service ".concat(e.name, " has more than 1 instance, found ", r.length));
  return l(e, r[0]);   // tail call
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=9 bc=269B file=worker/src/WorkerService
// args: require, module, exports
// locals: e, r, t, n, o, i, s, c, a, u, l, v, k
function {
  o = function o;
  i = function i;
  s = function s;
  c = function c;
  a = function a;
  u = function u;
  l = function l;
  v = function v;
  k = function k;
  let n;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.startWorkerService = undefined;
  exports.useOrStartWorkerService = undefined;
  exports.startWorkerServiceInForeground = undefined;
  exports.useWorkerService = undefined;
  exports.getWorkerServiceIdsForEntryPoint = undefined;
  exports.useWorkerServiceSingleton = undefined;
  e = require("./internal/ManagedWorker");
  r = require("./internal/ManagedWorkerService");
  t = globalThis;
  n = 30000;
  exports.startWorkerService = s;
  exports.useOrStartWorkerService = a;
  exports.startWorkerServiceInForeground = u;
  exports.useWorkerService = l;
  exports.getWorkerServiceIdsForEntryPoint = v;
  exports.useWorkerServiceSingleton = k;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/WorkerService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
