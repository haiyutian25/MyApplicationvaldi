// fn e  args=4 vars=7 closure=1 cpool=0 bc=172B file=valdi_core/src/utils/ComponentUtils
// args: t, n, o, r
// locals: s, e, i
// closure: e
function {
  let s;
  s = t.renderer.getComponentChildren(t);
  let e;
  for (const e of s) {
    if (!((e instanceof n))) goto L_86;
    r.push(e);
  }
  if (!(o)) goto L_ab;
  let i;
  for (const i of s) {
    e(i, n, o, r);
  }
  return;
}

// fn t  args=2 vars=2 closure=0 cpool=0 bc=113B file=valdi_core/src/utils/ComponentUtils
// args: e, t
function {
  if (!((e.elementRefs[t].single() == null))) goto L_4f;
  e.elementRefs[t].single();
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.emittingComponent;
}

// fn n  args=3 vars=5 closure=0 cpool=0 bc=307B file=valdi_core/src/utils/ComponentUtils
// args: e, t, n
// locals: o, r
function {
  let o;
  o = [];
  let r;
  for (const r of e[n].all()) {
    if (!((r.emittingComponent instanceof t))) goto L_125;
    o.push({key: r.renderer.getComponentKey(r.emittingComponent), item: r.emittingComponent});
  }
  return o;
}

// fn o  args=3 vars=7 closure=1 cpool=0 bc=45B file=valdi_core/src/utils/ComponentUtils
// args: t, n, o
// locals: t#1, n#1, o#1, r
// closure: e
function {
  let o#1;
  let n#1;
  let t#1;
  t#1 = t;
  n#1 = n;
  if (!((o === undefined))) goto L_16;
  o;
  o = false;
  o#1 = false;
  let r;
  r = [];
  e(t, n, o, r);
  return r;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=135B file=valdi_core/src/utils/ComponentUtils
// args: require, module, exports
// locals: e, t, n, o
function {
  e = function e;
  t = function t;
  n = function n;
  o = function o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getChildComponent = undefined;
  exports.getForEachComponents = undefined;
  exports.getChildComponentsOfType = undefined;
  exports.getChildComponent = t;
  exports.getForEachComponents = n;
  exports.getChildComponentsOfType = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/ComponentUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
