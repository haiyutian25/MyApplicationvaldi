// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=75B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// closure: n
function {
  n.set(e.name, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// closure: n
function {
  return n.get(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=116B file=math_jax/src/mathjax_src/input/tex/MapHandler
// locals: this
// closure: <class_fields_init>, r, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this._configuration = new r.PrioritizedList();
  this._fallback = new i.FunctionList();
  return;
}

// fn <atom:0>  args=3 vars=9 closure=2 cpool=0 bc=516B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e, t, i
// locals: e#1, t#1, i#1, r, e#2, this
// closure: r, exports
function {
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_5c;
  i;
  i = r.PrioritizedList.DEFAULTPRIORITY;
  i#1 = r.PrioritizedList.DEFAULTPRIORITY;
  let r;
  for (const r of e.slice().reverse()) {
    let e#2;
    e#2 = exports.MapHandler.getMap(r);
    if (!(!e#2)) goto L_160;
    this.warn("Configuration '".concat(r, "' not found! Omitted."));
    return undefined;
    // [栈深重同步 0 -> 3]
    this._configuration.add(e#2, i);
  }
  if (!(t)) goto L_203;
  this._fallback.add(t, i);
  return;
}

// fn <atom:0>  args=2 vars=7 closure=0 cpool=0 bc=243B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e, t
// locals: e#1, t#1, r, e#2, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_13;
  t;
  t = null;
  t#1 = null;
  let r;
  for (const r of e) {
    let e#2;
    e#2 = this.retrieve(r);
    if (!(e#2)) goto L_9b;
    this._configuration.remove(e#2);
  }
  if (!(t)) goto L_f2;
  this._fallback.remove(t);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=338B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: i, t, t#1, r, this
// closure: SubHandler
function {
  this = this;
  let r;
  let t#1;
  let i;
  for (const <v> of this._configuration) {
    i = <to_object>(<value(_it1)>).item;
    <to_object>(<value(_it1)>);
    let t;
    t = i.parse(e);
    if (((t === SubHandler.FALLBACK))) goto L_c3;
    if (!(t)) continue;
    return t;
    // [栈深重同步 0 -> 3]
  }
  if (((undefined === undefined))) goto L_d5;
  const _it2 = undefined;
  <done(_it2)>;
  t#1 = <value(_it2)>;
  <done(_it2)>;
  r = <value(_it2)>;
  goto L_d9;
  // [栈深重同步 4 -> 1]
  _it2;
  goto L_c9;
  // [栈深重同步 1 -> 0]
  Array.from(this._fallback)[0].item(t#1, r);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=92B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.applicable(e);
  if (!(t)) goto L_5a;
  return t.lookup(e);
  return null;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=173B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: r, this
// closure: t
function {
  this = this;
  let r;
  r = this.applicable(e);
  if ((!r)) goto L_ab;
  if (!((r instanceof t.CharacterMap))) goto L_ab;
  return !(null === r.lookup(e).char);
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=212B file=math_jax/src/mathjax_src/input/tex/MapHandler
// locals: e, t, this
function {
  this = this;
  let e;
  e = [];
  let t;
  for (const <v> of this._configuration) {
    t = <to_object>(<value(_it1)>).item;
    <to_object>(<value(_it1)>);
    e.push(t.name);
  }
  return e.join(", ");   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=137B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const <v> of this._configuration) {
    t = <to_object>(<value(_it1)>).item;
    <to_object>(<value(_it1)>);
    if (!(t.contains(e))) continue;
    return t;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=135B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const <v> of this._configuration) {
    t = <to_object>(<value(_it1)>).item;
    <to_object>(<value(_it1)>);
    if (!((t.name === e))) continue;
    return t;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_58;
  console.log(("TexParser Warning: " + t));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=35B file=math_jax/src/mathjax_src/input/tex/MapHandler
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.map = new Map();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=0 bc=322B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e, t, i
// locals: e#1, t#1, i#1, r, n, o, this
// closure: r, SubHandler
function {
  this = this;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((i === undefined))) goto L_5c;
  i;
  i = r.PrioritizedList.DEFAULTPRIORITY;
  i#1 = r.PrioritizedList.DEFAULTPRIORITY;
  let r;
  for (const r of Object.keys(e)) {
    let o;
    let n;
    n = r;
    o = this.get(n);
    if ((o)) goto L_104;
    o = new SubHandler();
    new SubHandler();
    this.set(n, o);
    o.add(e[n], t[n], i);
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=159B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e, t
// locals: r, i, this
function {
  this = this;
  let r;
  for (const r of Object.keys(e)) {
    let i;
    i = this.get(r);
    if (!(i)) goto L_97;
    i.remove(e[r], t[r]);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e, t
// locals: this
function {
  this = this;
  this.map.set(e, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: this
function {
  this = this;
  return this.map.get(e);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=144B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: e
// locals: t, r, this
function {
  this = this;
  let t;
  for (const t of this.map.values()) {
    let r;
    r = t.retrieve(e);
    if (!(r)) continue;
    return r;
    // [栈深重同步 0 -> 3]
  }
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=math_jax/src/mathjax_src/input/tex/MapHandler
// locals: this
function {
  this = this;
  return this.map.keys();   // tail call
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=19 bc=445B file=math_jax/src/mathjax_src/input/tex/MapHandler
// args: require, module, exports
// locals: e, t, r, i, n, SubHandler, <class_fields_init>, SubHandler#1, SubHandlers, <class_fields_init>#1, SubHandlers#1
function {
  let SubHandlers#1;
  let SubHandler#1;
  let n;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapHandler = undefined;
  exports.SubHandler = undefined;
  exports.SubHandlers = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./TokenMap");
  r = require("../../util/PrioritizedList");
  i = require("../../util/FunctionList");
  n = new Map();
  exports.MapHandler = {register: function <atom:0>, getMap: function <atom:0>};
  let SubHandler;
  let <class_fields_init>;
  class SubHandler extends undefined { ... }
  <proto:SubHandler>.add = function <atom:0>;
  <proto:SubHandler>.remove = function <atom:0>;
  <proto:SubHandler>.parse = function <atom:0>;
  <proto:SubHandler>.lookup = function <atom:0>;
  <proto:SubHandler>.contains = function <atom:0>;
  <proto:SubHandler>.toString = function <atom:0>;
  <proto:SubHandler>.applicable = function <atom:0>;
  <proto:SubHandler>.retrieve = function <atom:0>;
  <proto:SubHandler>.warn = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubHandler>;
  SubHandler = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc SubHandler
  SubHandler#1 = function <atom:0>;
  exports.SubHandler = SubHandler#1;
  SubHandler#1.FALLBACK = Symbol("fallback");
  let SubHandlers;
  let <class_fields_init>#1;
  class SubHandlers extends undefined { ... }
  <proto:SubHandlers>.add = function <atom:0>;
  <proto:SubHandlers>.remove = function <atom:0>;
  <proto:SubHandlers>.set = function <atom:0>;
  <proto:SubHandlers>.get = function <atom:0>;
  <proto:SubHandlers>.retrieve = function <atom:0>;
  <proto:SubHandlers>.keys = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:SubHandlers>;
  SubHandlers = function <atom:0>;
  // close_loc <class_fields_init>#1
  SubHandlers#1 = function <atom:0>;
  exports.SubHandlers = SubHandlers#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/MapHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
