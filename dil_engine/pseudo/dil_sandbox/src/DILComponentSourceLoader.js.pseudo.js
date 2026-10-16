// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=115B file=dil_sandbox/src/DILComponentSourceLoader
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.sources = new Map();
  this.loads = new Map();
  this.loaders = new Map(Object.entries(e));
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=226B file=dil_sandbox/src/DILComponentSourceLoader
// args: e
// closure: r, this
function {
  if ((("string" != typeof e))) goto L_10;
  if (!((0 === e.length))) goto L_4d;
  throw new Error("Invalid DIL component source '".concat(r, "'."));
  this.sources.set(r, e);
  this.loads.delete(r);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=204B file=dil_sandbox/src/DILComponentSourceLoader
// args: o
// closure: this, r, e
function {
  this.loads.delete(r);
  throw new Error("Failed to load DIL component '".concat(r, "': ", e.toDILSandboxError(o).message));
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_sandbox/src/DILComponentSourceLoader
function {
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=3 bc=680B file=dil_sandbox/src/DILComponentSourceLoader
// args: o
// locals: t, r, o#1, s, this
// closure: e
function {
  this = this;
  let t;
  t = [];
  let r;
  // close_loc r
  for (const r of new Set(o)) {
    let s;
    let o#1;
    o#1 = this.loaders.get(r);
    if (((undefined === o#1))) goto L_c3;
    if (!(this.sources.has(r))) goto L_cb;
    // close_loc r
   continue;
    s = this.loads.get(r);
    if (!((undefined === s))) goto L_210;
    s = Promise.resolve().then(o#1).then(function <atom:0>).catch(function <atom:0>);
    Promise.resolve().then(o#1).then(function <atom:0>).catch(function <atom:0>);
    this.loads.set(r, s);
    t.push(s);
    // close_loc r
  }
  // close_loc r
  if (!((0 === t.length))) goto L_255;
  return undefined;
  return Promise.all(t).then(function <atom:0>);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=dil_sandbox/src/DILComponentSourceLoader
// args: e
// locals: this
function {
  this = this;
  return this.sources.get(e);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=dil_sandbox/src/DILComponentSourceLoader
// args: require, module, exports
// locals: e, DILComponentSourceLoader, <class_fields_init>, DILComponentSourceLoader#1
function {
  let DILComponentSourceLoader#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILComponentSourceLoader = undefined;
  e = require("./DILSandboxError");
  let DILComponentSourceLoader;
  let <class_fields_init>;
  class DILComponentSourceLoader extends undefined { ... }
  <proto:DILComponentSourceLoader>.prepare = function <atom:0>;
  <proto:DILComponentSourceLoader>.get = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILComponentSourceLoader>;
  DILComponentSourceLoader = function <atom:0>;
  // close_loc <class_fields_init>
  DILComponentSourceLoader#1 = function <atom:0>;
  exports.DILComponentSourceLoader = DILComponentSourceLoader#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILComponentSourceLoader
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
