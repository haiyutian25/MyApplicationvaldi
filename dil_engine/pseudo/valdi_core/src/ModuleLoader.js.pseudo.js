// fn o  args=1 vars=3 closure=1 cpool=0 bc=192B file=valdi_core/src/ModuleLoader
// args: e
// locals: o, s
// closure: t
function {
  let o;
  o = [];
  let s;
  for (const s of e) {
    if (!((".." === s))) goto L_77;
    if (!(o.length)) goto L_4a;
    goto L_74;
    // [栈深重同步 4 -> 3]
    o.push(s);
   continue;
    if (!(("." === s))) goto L_88;
    if ((!t)) continue;
    o.push(s);
  }
  return o;
}

// fn s  args=1 vars=4 closure=0 cpool=0 bc=267B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, t#1
function {
  let t#1;
  if (!((1 === e.length))) goto L_3a;
  e.unshift("valdi_core", "src");
  if (!((e.length > 0))) goto L_aa;
  if (!(e[0].startsWith("@"))) goto L_aa;
  let o;
  let t;
  t = e.shift();
  o = e[0];
  e[0] = (o + t);
  t#1 = e.join("/");
  e.pop();
  return {directoryPaths: e, absolutePath: t#1};
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=48B file=valdi_core/src/ModuleLoader
// args: e
// closure: s, o
function {
  return s(o(e.split("/")));   // tail call
}

// fn l  args=2 vars=4 closure=2 cpool=0 bc=219B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: r, e#1
// closure: s, o
function {
  let r;
  r = e.split("/");
  if ((("." === r[0]))) goto L_48;
  if (!((".." === r[0]))) goto L_d2;
  let e#1;
  e#1 = t.directoryPaths.slice();
  // append([], 0, r)
  r;
  e#1.push.apply(e#1, []);
  return s(o(e#1));   // tail call
  return s(o(r));   // tail call
}

// fn i  args=1 vars=2 closure=0 cpool=0 bc=52B file=valdi_core/src/ModuleLoader
// args: e
// locals: t
function {
  let t;
  for (const t of e.dependents) {
    return true;
  }
  <catch>;
  return false;
}

// fn n  args=1 vars=1 closure=0 cpool=0 bc=73B file=valdi_core/src/ModuleLoader
// args: e
function {
  throw new e.constructor(e.message);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/ModuleLoader
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=2 vars=8 closure=3 cpool=0 bc=615B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, s, l, i, e#1, r
// closure: r, this, RetryableError
function {
  let i;
  let l;
  let s;
  let o;
  o = r(e);
  s = this.modules[o.absolutePath];
  if (!(!s)) goto L_5f;
  return;
  if (!((undefined !== s.error))) goto L_b2;
  l = !(s.error instanceof RetryableError);
  if (((0 !== s.status))) goto L_e0;
  if (!(!l)) goto L_e4;
  return;
  i = s.sourceMap;
  if (!((undefined === i))) goto L_25e;
  let r;
  let e#1;
  e#1 = undefined;
  if (!(this.sourceMapResolver)) goto L_18f;
  e#1 = this.sourceMapResolver(o.absolutePath);
  this.sourceMapResolver(o.absolutePath);
  if (!((1 === s.status))) goto L_20b;
  if (!((s.moduleObject == null))) goto L_1e8;
  s.moduleObject;
  goto L_22f;
  goto L_22f;
  // [栈深重同步 3 -> 2]
  r = t(e#1, s.sourceMapLineOffset);
  if (!(r)) goto L_24f;
  s.sourceMap = r;
  i = r;
  goto L_25d;
  // [栈深重同步 1 -> 0]
  s.sourceMap = null;
  null;
  if ((i)) goto L_266;
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/ModuleLoader
function {
  return;
}

// fn <atom:0>  args=5 vars=6 closure=3 cpool=2 bc=161B file=valdi_core/src/ModuleLoader
// args: e, t, o, s, l
// locals: this
// closure: r, RetryableError, <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.modules = {};
  this.moduleCount = 0;
  this.moduleFactory = {};
  this.hotReloadCallbacks = {};
  this.moduleRegisteredCallbacks = {};
  this.preloadedValdiModules = {};
  this.getOrCreateSourceMap = function <atom:0>;
  this.jsEvaluator = t;
  this.sourceMapResolver = o;
  if (!((s == null))) goto L_7c;
  s;
  this.valdiModulePreloader = function <atom:0>;
  this.commonJsCompatible = (true === l);
  this.package = e;
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=193B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, s, r, this
// closure: r
function {
  this = this;
  let s;
  let o;
  let t;
  t = r(e);
  o = [];
  s = this.modules[t.absolutePath];
  if (!(s)) goto L_bd;
  let r;
  for (const r of s.dependencies) {
    o.push(r);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return o;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=193B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, s, r, this
// closure: r
function {
  this = this;
  let s;
  let o;
  let t;
  t = r(e);
  o = [];
  s = this.modules[t.absolutePath];
  if (!(s)) goto L_bd;
  let r;
  for (const r of s.dependents) {
    o.push(r);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return o;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=132B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, this
// closure: r
function {
  this = this;
  let o;
  let t;
  t = r(e);
  o = this.modules[t.absolutePath];
  if (!(!!o)) goto L_83;
  return (0 !== o.status);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=valdi_core/src/ModuleLoader
// locals: this
function {
  this = this;
  return (0 === this.moduleCount);
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=56B file=valdi_core/src/ModuleLoader
// args: e, t, o
// locals: s, this
// closure: r
function {
  this = this;
  let s;
  s = r(e);
  return this.doImport(s, undefined, !!t, !!o);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=86B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, this
// closure: r
function {
  this = this;
  let o;
  o = r(e);
  this.doPreload(o.absolutePath, 0, t, {});
  return;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=121B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, s, l, this
// closure: r
function {
  this = this;
  let o;
  o = {};
  let s;
  s = 0;
  if (!((s < e.length))) goto L_78;
  let l;
  l = r(e[s]);
  this.doPreload(l.absolutePath, 0, t, o);
  s = <s_new>;
  (s++);
  goto L_c;
  return;
}

// fn <atom:0>  args=4 vars=7 closure=1 cpool=0 bc=329B file=valdi_core/src/ModuleLoader
// args: e, t, o, s
// locals: l, r, this
// closure: r
function {
  this = this;
  let l;
  if (!(s[e])) goto L_b;
  return;
  s[e] = true;
  l = this.modules[e];
  if ((l)) goto L_93;
  this.doImport(r(e), undefined, false, true);
  l = this.modules[e];
  this.modules[e];
  if (!(l.lazyExports)) goto L_e3;
  l.lazyExports();
  if (!(!(t >= o))) goto L_148;
  let r;
  for (const r of l.dependencies) {
    this.doPreload(r, (t + 1), o, s);
  }
  <catch>;
  // [栈深重同步 2 -> 0]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=83B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  t = r(e);
  return (undefined !== this.moduleFactory[t.absolutePath]);
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=189B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, s, e#1, this
// closure: r
function {
  this = this;
  let s;
  let o;
  o = r(e).absolutePath;
  this.moduleFactory[o] = t;
  s = this.moduleRegisteredCallbacks[o];
  if (!(s)) goto L_bc;
  delete o;
  let e#1;
  for (const e#1 of s) {
    e#1();
    // [栈深重同步 3 -> 4]
  }
  // [栈深重同步 1 -> 0]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=123B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, this
// closure: r
function {
  this = this;
  let t;
  t = r(e).absolutePath;
  if (!(this.moduleFactory[t])) goto L_7a;
  // [栈深重同步 2 -> 1]
  this.moduleFactory;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=295B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, e#1, this
// closure: r
function {
  this = this;
  let o;
  o = r(e);
  if (!(this.moduleFactory[o.absolutePath])) goto L_56;
  t();
  return;
  let e#1;
  e#1 = this.moduleRegisteredCallbacks[o.absolutePath];
  if ((e#1)) goto L_fc;
  e#1 = [];
  [];
  this.moduleRegisteredCallbacks[o.absolutePath] = e#1;
  e#1;
  e#1.push(t);
  return;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=232B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, l, s, r, this
// closure: r
function {
  this = this;
  let s;
  let o;
  let t;
  t = {};
  o = {};
  let l;
  for (const l of e) {
    o[r(l).absolutePath] = true;
  }
  if (!(this.unloadNextModule(o, t))) goto L_7b;
  goto L_4b;
  s = [];
  let r;
  for (const r of t) {
    s.push(r);
  }
  <catch>;
  this.invokeHotReloadCallbacks(t);
  return s;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=162B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, s, this
function {
  this = this;
  let s;
  let o;
  o = this.modules[e];
  if (!(!o)) goto L_34;
  return;
  s = o.disposables;
  if ((s)) goto L_78;
  s = [];
  [];
  o.disposables = s;
  s;
  s.push(t);
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=158B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, s, this
// closure: i
function {
  this = this;
  let o;
  for (const o of this.modules) {
    let s;
    if ((e[o])) continue;
    s = this.modules[o];
    if (!(s)) continue;
    if (!(!i(s))) continue;
    this.doUnload(o, t);
    return true;
  }
  <catch>;
  return false;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=0 bc=413B file=valdi_core/src/ModuleLoader
// args: e, t, o
// locals: s, i, e#1, t#1, l, r, this
// closure: r
function {
  this = this;
  let l;
  let s;
  s = {};
  let i;
  for (const i of e) {
    let e#1;
    e#1 = r(i);
    this.doUnload(e#1.absolutePath, s);
    if (!(t)) continue;
    if (!(!this.commonJsCompatible)) continue;
    let t#1;
    if ((this.moduleDenylistedForLazyLoading)) goto L_d1;
    this.moduleDenylistedForLazyLoading = {};
    {};
    t#1 = !o;
    this.moduleDenylistedForLazyLoading[e#1.absolutePath] = t#1;
  }
  l = [];
  let r;
  for (const r of s) {
    l.push(r);
  }
  <catch>;
  if (!(t)) goto L_198;
  this.invokeHotReloadCallbacks(s);
  return l;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=162B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, e#1, o, this
function {
  this = this;
  let t;
  for (const t of e) {
    let e#1;
    e#1 = this.hotReloadCallbacks[t];
    if (!(e#1)) continue;
    let o;
    for (const o of e#1.slice()) {
      this.invokeModuleCleanup(t, o);
      // [栈深重同步 3 -> 6]
    }
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=349B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, t#1, s
function {
  try { // catch -> L_a
  t();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_15c
  try { // catch -> L_150
  let s;
  let t#1;
  if (!((o instanceof Error))) goto L_94;
  goto L_9b;
  // [栈深重同步 1 -> 0]
  t#1 = String(o);
  s = globalThis.console;
  if (!((s == null))) goto L_ce;
  s;
  goto L_ef;
  if (!(undefined.error)) goto L_14c;
  s.error("Error while cleaning up module '".concat(e, "': ", t#1));
  <?>;
  goto L_15a;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_159
  <?>;
  goto L_15a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=valdi_core/src/ModuleLoader
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=97B file=valdi_core/src/ModuleLoader
// locals: e
// closure: l, o
function {
  let e;
  e = l.indexOf(o);
  if (!((e >= 0))) goto L_60;
  l.splice(e, 1);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=1 cpool=2 bc=744B file=valdi_core/src/ModuleLoader
// args: e, t, o
// locals: s, t#1, l, i, this
// closure: r
function {
  this = this;
  let i;
  let l;
  let s;
  s = r(t);
  if (!(e.path)) goto L_123;
  let t#1;
  t#1 = r(e.path).absolutePath;
  if (!((this.modules[t#1] == null))) goto L_af;
  this.modules[t#1];
  goto L_d0;
  if (!((undefined.moduleObject !== e))) goto L_123;
  this.invokeModuleCleanup(s.absolutePath, o);
  return function <atom:0>;
  l = this.hotReloadCallbacks[s.absolutePath];
  if ((l)) goto L_1c8;
  l = [];
  [];
  this.hotReloadCallbacks[s.absolutePath] = l;
  l;
  l.push(o);
  i = function <atom:0>;
  if (!(e.path)) goto L_291;
  if (!((e.path !== t))) goto L_291;
  goto L_2e3;
  // [栈深重同步 1 -> 0]
  if (!((e.path === t))) goto L_2e3;
  l.push(i);
  return i;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=253B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, this
// closure: r
function {
  this = this;
  let o;
  let t;
  t = r(e);
  o = this.modules[t.absolutePath];
  if ((o)) goto L_d4;
  this.doImport(t, undefined, false, true);
  o = this.modules[t.absolutePath];
  this.modules[t.absolutePath];
  return this.makeRequire(o);   // tail call
}

// fn <atom:0>  args=2 vars=9 closure=0 cpool=0 bc=510B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o, r, t#1, s, r#1, r#2, this
function {
  this = this;
  let s;
  let o;
  o = this.modules[e];
  if (!(!o)) goto L_36;
  return;
  delete e;
  this.moduleCount = (this.moduleCount --);
  t[e] = true;
  let r;
  for (const r of o.dependencies) {
    let t#1;
    t#1 = this.modules[r];
    if (!(t#1)) goto L_112;
    // [栈深重同步 5 -> 4]
    t#1.dependents;
    // [栈深重同步 3 -> 4]
  }
  <?>;
  s = o.disposables;
  if (!(s)) goto L_1a2;
  let r#1;
  for (const r#1 of s.slice()) {
    this.invokeModuleCleanup(e, r#1);
    // [栈深重同步 3 -> 6]
  }
  let r#2;
  for (const r#2 of o.dependents) {
    this.doUnload(r#2, t);
    // [栈深重同步 3 -> 6]
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=223B file=valdi_core/src/ModuleLoader
// args: e, t
// locals: o
function {
  let o;
  if (!(!t)) goto L_8;
  return;
  o = t.resolvedPath.absolutePath;
  e.dependents[o] = true;
  t.dependencies[e.resolvedPath.absolutePath] = true;
  return;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=1199B file=valdi_core/src/ModuleLoader
// args: e, t, o, s
// locals: r, l, i, i#1, this
function {
  this = this;
  let l;
  let r;
  r = e.absolutePath;
  l = this.modules[r];
  if (!(l)) goto L_1d0;
  if ((s)) goto L_8b;
  this.syncDependencies(l, t);
  if (!(l.lazyExports)) goto L_1ab;
  if (!((1 !== l.status))) goto L_1ab;
  if ((o)) goto L_108;
  if (!(this.commonJsCompatible)) goto L_131;
  return l.lazyExports();   // tail call
  if (!(this.moduleDenylistedForLazyLoading)) goto L_1aa;
  if (!(this.moduleDenylistedForLazyLoading[r])) goto L_1aa;
  l.lazyExports();
  return l.exports;
  l = {resolvedPath: e, error: undefined, exports: undefined, lazyExports: undefined, status: 0, dependents: {}, dependencies: {}, sourceMap: undefined};
  {resolvedPath: e, error: undefined, exports: undefined, lazyExports: undefined, status: 0, dependents: {}, dependencies: {}, sourceMap: undefined};
  this.modules[r] = l;
  this.moduleCount = (this.moduleCount ++);
  try { // catch -> L_474
  let i;
  if ((s)) goto L_295;
  this.syncDependencies(l, t);
  l.exports = this.makeModuleExports(l);
  if (!(l.lazyExports)) goto L_3c1;
  if ((o)) goto L_31c;
  if (!(this.commonJsCompatible)) goto L_347;
  return l.lazyExports();
  if (!(this.moduleDenylistedForLazyLoading)) goto L_3c0;
  if (!(this.moduleDenylistedForLazyLoading[r])) goto L_3c0;
  l.lazyExports();
  i = e.directoryPaths[0];
  if (!(i)) goto L_470;
  if (!(!this.preloadedValdiModules[i])) goto L_470;
  this.preloadedValdiModules[i] = true;
  this.valdiModulePreloader(i, undefined);
  <?>;
  goto L_48a;
  // [栈深重同步 0 -> 1]
  i#1 = <?>;
  try { // catch -> L_489
  l.error = i#1;
  throw i#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return l.exports;
}

// fn <atom:0>  args=0 vars=2 closure=10 cpool=0 bc=336B file=valdi_core/src/ModuleLoader
// locals: o, o#1
// closure: a, e, n, this, t, s, l, r, RetryableError, i
function {
  if (!(!a)) goto L_14c;
  if (!(e.error)) goto L_53;
  n(e.error);
  e.status = 1;
  try { // catch -> L_be
  let o;
  o = this.jsEvaluator(t, s, l, r);
  if (!(o)) goto L_a9;
  throw new RetryableError(o);
  e.status = 2;
  <?>;
  // gosub (finally 块) 237
  undefined;
  goto L_11c;
  // [栈深重同步 0 -> 1]
  o#1 = <?>;
  try { // catch -> L_e7
  if (((o#1 instanceof RetryableError))) goto L_d9;
  e.error = o#1;
  o#1;
  e.status = 0;
  throw o#1;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 237
  throw <?>;
  e.sourceMapLineOffset = l.sourceMapLineOffset;
  // ret (finally 块) 
  a = true;
  true;
  i = l.exports;
  l.exports;
  return i;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=18B file=valdi_core/src/ModuleLoader
// args: e, t
// closure: a, d, i
function {
  if ((a)) goto L_b;
  d();
  return i[t];
}

// fn <atom:0>  args=3 vars=3 closure=3 cpool=0 bc=21B file=valdi_core/src/ModuleLoader
// args: e, t, o
// closure: a, d, i
function {
  if ((a)) goto L_b;
  d();
  i[t] = o;
  return true;
}

// fn <atom:0>  args=1 vars=10 closure=2 cpool=3 bc=341B file=valdi_core/src/ModuleLoader
// args: e
// locals: t, o, s, r, l, i, a, d, this
// closure: n, RetryableError
function {
  this = this;
  let d;
  let a;
  let i;
  let l;
  let r;
  let s;
  let o;
  let t;
  t = e.resolvedPath.absolutePath;
  o = this.moduleFactory[t];
  if (!(o)) goto L_92;
  return o();   // tail call
  s = this.makeRequire(e);
  r = {};
  l = {exports: r, path: t, sourceMapLineOffset: 0, loader: this};
  i = undefined;
  e.moduleObject = l;
  a = false;
  d = function <atom:0>;
  e.lazyExports = d;
  if (!(this.commonJsCompatible)) goto L_12f;
  return r;
  return new Proxy(r, {get: function <atom:0>, set: function <atom:0>});
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=204B file=valdi_core/src/ModuleLoader
// args: t, o, s
// locals: r, i
// closure: l, e, this
function {
  let i;
  let r;
  r = l(t, e.resolvedPath);
  if (!((this.modules[e.resolvedPath.absolutePath] === e))) goto L_99;
  goto L_9a;
  // [栈深重同步 1 -> 0]
  i = undefined;
  return this.doImport(r, i, !!o, !!s);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=5B file=valdi_core/src/ModuleLoader
// args: e
// locals: this
// closure: l
function {
  this = this;
  return function <atom:0>;
}

// fn a  args=5 vars=5 closure=1 cpool=0 bc=15B file=valdi_core/src/ModuleLoader
// args: e, t, o, s, r
// closure: ModuleLoader
function {
  return new ModuleLoader(e, t, o, s, r);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=34 bc=484B file=valdi_core/src/ModuleLoader
// args: require, module, exports
// locals: e, t, o, s, r, l, i, n, RetryableError, <class_fields_init>, RetryableError#1, ModuleLoader, <class_fields_init>#1, ModuleLoader#1, a
function {
  o = function o;
  s = function s;
  r = function r;
  l = function l;
  i = function i;
  n = function n;
  a = function a;
  let ModuleLoader#1;
  let RetryableError#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ModuleLoader = undefined;
  exports.create = undefined;
  e = globalThis;
  if (!((e.window == null))) goto L_a7;
  e.window;
  goto L_c8;
  t = (undefined !== undefined.document);
  let RetryableError;
  let <class_fields_init>;
  class RetryableError extends Error { ... }
  <class_fields_init> = undefined;
  <proto:RetryableError>;
  RetryableError = function <atom:0>;
  // close_loc <class_fields_init>
  RetryableError#1 = function <atom:0>;
  let ModuleLoader;
  let <class_fields_init>#1;
  class ModuleLoader extends undefined { ... }
  <proto:ModuleLoader>.getDependencies = function <atom:0>;
  <proto:ModuleLoader>.getDependents = function <atom:0>;
  <proto:ModuleLoader>.isLoaded = function <atom:0>;
  <proto:ModuleLoader>.isEmpty = function <atom:0>;
  <proto:ModuleLoader>.load = function <atom:0>;
  <proto:ModuleLoader>.preload = function <atom:0>;
  <proto:ModuleLoader>.preloadBatch = function <atom:0>;
  <proto:ModuleLoader>.doPreload = function <atom:0>;
  <proto:ModuleLoader>.hasModuleFactory = function <atom:0>;
  <proto:ModuleLoader>.registerModule = function <atom:0>;
  <proto:ModuleLoader>.unregisterModule = function <atom:0>;
  <proto:ModuleLoader>.onModuleRegistered = function <atom:0>;
  <proto:ModuleLoader>.unloadAllUnused = function <atom:0>;
  <proto:ModuleLoader>.registerModuleDisposable = function <atom:0>;
  <proto:ModuleLoader>.unloadNextModule = function <atom:0>;
  <proto:ModuleLoader>.unload = function <atom:0>;
  <proto:ModuleLoader>.invokeHotReloadCallbacks = function <atom:0>;
  <proto:ModuleLoader>.invokeModuleCleanup = function <atom:0>;
  <proto:ModuleLoader>.onHotReload = function <atom:0>;
  <proto:ModuleLoader>.resolveRequire = function <atom:0>;
  <proto:ModuleLoader>.doUnload = function <atom:0>;
  <proto:ModuleLoader>.syncDependencies = function <atom:0>;
  <proto:ModuleLoader>.doImport = function <atom:0>;
  <proto:ModuleLoader>.makeModuleExports = function <atom:0>;
  <proto:ModuleLoader>.makeRequire = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ModuleLoader>;
  ModuleLoader = function <atom:0>;
  // close_loc <class_fields_init>#1
  ModuleLoader#1 = function <atom:0>;
  exports.ModuleLoader = ModuleLoader#1;
  exports.create = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ModuleLoader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
