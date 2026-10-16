// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=40B file=json_patch/src/ApplyJSONPatch
// args: r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.rootValue = r;
  this.pathStack = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=json_patch/src/ApplyJSONPatch
// locals: this
function {
  this = this;
  return this.rootValue;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=86B file=json_patch/src/ApplyJSONPatch
// args: r, t
// locals: this
function {
  this = this;
  this.pathStack.push({key: r, keyAsNumber: t});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=json_patch/src/ApplyJSONPatch
// locals: this
function {
  this = this;
  this.popFrame();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=json_patch/src/ApplyJSONPatch
// args: r
// locals: this
function {
  this = this;
  this.rootValue = r;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=50B file=json_patch/src/ApplyJSONPatch
// args: r
// locals: this
// closure: n
function {
  this = this;
  this.rootValue = n(this.rootValue, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=json_patch/src/ApplyJSONPatch
// locals: this
function {
  this = this;
  this.rootValue = null;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=50B file=json_patch/src/ApplyJSONPatch
// args: r
// locals: this
// closure: a
function {
  this = this;
  this.rootValue = a(this.rootValue, r);
  return;
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=64B file=json_patch/src/ApplyJSONPatch
// args: r, t, i
// locals: a, this
// closure: o, n, e
function {
  this = this;
  let a;
  a = this.resolveCurrentContainer(t);
  o(a, r, t, n(e(a, r, t), i));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=43B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
// locals: this
function {
  this = this;
  this.writeValue(r, t, e);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=43B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
// locals: this
function {
  this = this;
  this.writeValue(r, t, e);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=222B file=json_patch/src/ApplyJSONPatch
// args: r, t
// locals: e, this
// closure: l, y
function {
  this = this;
  let e;
  e = this.resolveCurrentContainer(t);
  if (!(Array.isArray(e))) goto L_67;
  if (!((undefined !== t))) goto L_67;
  l(e, t);
  return;
  if (!(!y(e))) goto L_d7;
  if (!(!Array.isArray(e))) goto L_d7;
  throw new Error("Cannot remove property "".concat(r, "" from a non-container value."));
  delete r;
  e;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=3 cpool=0 bc=64B file=json_patch/src/ApplyJSONPatch
// args: r, t, n
// locals: i, this
// closure: o, a, e
function {
  this = this;
  let i;
  i = this.resolveCurrentContainer(t);
  o(i, r, t, a(e(i, r, t), n));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=48B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
// locals: this
// closure: o
function {
  this = this;
  o(this.resolveCurrentContainer(t), r, t, e);
  return;
}

// fn <atom:0>  args=1 vars=8 closure=5 cpool=0 bc=440B file=json_patch/src/ApplyJSONPatch
// args: e
// locals: o, n, i, a, h, l, this
// closure: p, s, r, u, t
function {
  this = this;
  let o;
  if (!((0 === this.pathStack.length))) goto L_52;
  return this.rootValue;
  if ((p(this.rootValue))) goto L_ae;
  this.rootValue = s(this.pathStack[0]);
  s(this.pathStack[0]);
  o = this.rootValue;
  let n;
  n = 0;
  if (!((n < this.pathStack.length))) goto L_1b4;
  let l;
  let h;
  let a;
  let i;
  i = this.pathStack[n];
  a = this.pathStack[(n + 1)];
  h = r(o, i);
  if (!(p(h))) goto L_17e;
  o = h;
  h;
  goto L_1a7;
  if (!((undefined === a))) goto L_18a;
  goto L_18f;
  // [栈深重同步 1 -> 0]
  l = s(a);
  t(o, i, l);
  o = l;
  l;
  n = (n + 1);
  (n + 1);
  goto L_d8;
  return o;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=92B file=json_patch/src/ApplyJSONPatch
// locals: this
function {
  this = this;
  if (!((undefined === this.pathStack.pop()))) goto L_5b;
  throw new Error("JSON patch visitor paths ended out of order.");
  return;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=446B file=json_patch/src/ApplyJSONPatch
// args: r, t
// closure: y
function {
  if (!(Array.isArray(r))) goto L_77;
  if (!((undefined !== t.keyAsNumber))) goto L_77;
  return r[t.keyAsNumber];
  if (!(!y(r))) goto L_107;
  if (!(!Array.isArray(r))) goto L_107;
  throw new Error("Cannot enter property "".concat(t.key, "" on a non-container value."));
  if (!(Object.prototype.hasOwnProperty.call(r, t.key))) goto L_1bc;
  return r[t.key];
  return undefined;
}

// fn t  args=3 vars=3 closure=3 cpool=0 bc=306B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
// closure: h, y, i
function {
  if (!(Array.isArray(r))) goto L_7a;
  if (!((undefined !== t.keyAsNumber))) goto L_7a;
  h(r, t.keyAsNumber, e);
  return;
  if (!(!y(r))) goto L_10a;
  if (!(!Array.isArray(r))) goto L_10a;
  throw new Error("Cannot write property "".concat(t.key, "" on a non-container value."));
  i(r, t.key, e);
  return;
}

// fn e  args=3 vars=3 closure=1 cpool=0 bc=278B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
// closure: y
function {
  if (!(Array.isArray(r))) goto L_35;
  if (!((undefined !== e))) goto L_35;
  return r[e];
  if ((y(r))) goto L_66;
  if (!(Array.isArray(r))) goto L_dd;
  if (!(Object.prototype.hasOwnProperty.call(r, t))) goto L_db;
  return r[t];
  return undefined;
  throw new Error("Cannot read property "".concat(t, "" from a non-container value."));
}

// fn o  args=4 vars=4 closure=3 cpool=0 bc=171B file=json_patch/src/ApplyJSONPatch
// args: r, t, e, o
// closure: h, y, i
function {
  if (!(Array.isArray(r))) goto L_38;
  if (!((undefined !== e))) goto L_38;
  h(r, e, o);
  return;
  if (!(!y(r))) goto L_a4;
  if (!(!Array.isArray(r))) goto L_a4;
  throw new Error("Cannot write property "".concat(t, "" on a non-container value."));
  i(r, t, o);
  return;
}

// fn n  args=2 vars=4 closure=2 cpool=0 bc=314B file=json_patch/src/ApplyJSONPatch
// args: r, t
// locals: e, e#1
// closure: y, i
function {
  if (!((undefined === r))) goto L_7;
  return t;
  if (!(("string" == typeof r))) goto L_1f;
  if (!(("string" == typeof t))) goto L_1f;
  return (r + t);
  if (!(Array.isArray(r))) goto L_dc;
  if (!(Array.isArray(t))) goto L_b3;
  let e;
  for (const e of t) {
    r.push(e);
  }
  return r;
  r.push(t);
  return r;
  if (!(y(r))) goto L_12b;
  if (!(y(t))) goto L_12b;
  let e#1;
  for (const e#1 of Object.keys(t)) {
    i(r, e#1, t[e#1]);
  }
  return r;
  throw new Error("Cannot append incompatible JSON patch values.");
}

// fn i  args=3 vars=3 closure=0 cpool=0 bc=89B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
function {
  if (!(("__proto__" !== t))) goto L_11;
  r[t] = e;
  goto L_58;
  // [栈深重同步 1 -> 0]
  Object.defineProperty(r, t, {configurable: true, enumerable: true, value: e, writable: true});
  return;
}

// fn a  args=2 vars=2 closure=0 cpool=0 bc=164B file=json_patch/src/ApplyJSONPatch
// args: r, t
function {
  if (!(("string" == typeof r))) goto L_31;
  return r.slice(0, t);   // tail call
  if (!(Array.isArray(r))) goto L_95;
  r.length = Math.min(r.length, t);
  return r;
  throw new Error("The truncate operation requires an existing string or array value.");
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=44B file=json_patch/src/ApplyJSONPatch
// args: r
function {
  if (!((undefined === r.keyAsNumber))) goto L_28;
  return {};
  return [];
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=11B file=json_patch/src/ApplyJSONPatch
// args: r
function {
  if (!((undefined === r))) goto L_7;
  return {};
  return [];
}

// fn h  args=3 vars=3 closure=0 cpool=0 bc=123B file=json_patch/src/ApplyJSONPatch
// args: r, t, e
function {
  if (!((t > r.length))) goto L_46;
  throw new Error("Cannot write array index ".concat(t, " past length ", r.length, "."));
  if (!((t !== r.length))) goto L_54;
  r[t] = e;
  goto L_7a;
  // [栈深重同步 1 -> 0]
  r.push(e);
  return;
}

// fn l  args=2 vars=2 closure=0 cpool=0 bc=110B file=json_patch/src/ApplyJSONPatch
// args: r, t
function {
  if (!((t >= r.length))) goto L_46;
  throw new Error("Cannot remove array index ".concat(t, " from length ", r.length, "."));
  r.splice(t, 1);
  return;
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=50B file=json_patch/src/ApplyJSONPatch
// args: r
// closure: y
function {
  if ((y(r))) goto L_31;
  return Array.isArray(r);
}

// fn y  args=1 vars=1 closure=0 cpool=0 bc=63B file=json_patch/src/ApplyJSONPatch
// args: r
function {
  if (!(("object" == typeof r))) goto L_3e;
  if (!((null !== r))) goto L_3e;
  return !Array.isArray(r);
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=29 bc=278B file=json_patch/src/ApplyJSONPatch
// args: require, module, exports
// locals: ApplyJSONPatch, <class_fields_init>, ApplyJSONPatch#1, r, t, e, o, n, i, a, s, u, h, l, p, y
function {
  r = function r;
  t = function t;
  e = function e;
  o = function o;
  n = function n;
  i = function i;
  a = function a;
  s = function s;
  u = function u;
  h = function h;
  l = function l;
  p = function p;
  y = function y;
  let ApplyJSONPatch#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ApplyJSONPatch = undefined;
  let ApplyJSONPatch;
  let <class_fields_init>;
  class ApplyJSONPatch extends undefined { ... }
  <proto:ApplyJSONPatch>.value = function <atom:0>;
  <proto:ApplyJSONPatch>.beginSubObject = function <atom:0>;
  <proto:ApplyJSONPatch>.endSubObject = function <atom:0>;
  <proto:ApplyJSONPatch>.onReplaceRoot = function <atom:0>;
  <proto:ApplyJSONPatch>.onAppendRoot = function <atom:0>;
  <proto:ApplyJSONPatch>.onRemoveRoot = function <atom:0>;
  <proto:ApplyJSONPatch>.onTruncateRoot = function <atom:0>;
  <proto:ApplyJSONPatch>.onAppend = function <atom:0>;
  <proto:ApplyJSONPatch>.onInsert = function <atom:0>;
  <proto:ApplyJSONPatch>.onReplace = function <atom:0>;
  <proto:ApplyJSONPatch>.onRemove = function <atom:0>;
  <proto:ApplyJSONPatch>.onTruncate = function <atom:0>;
  <proto:ApplyJSONPatch>.writeValue = function <atom:0>;
  <proto:ApplyJSONPatch>.resolveCurrentContainer = function <atom:0>;
  <proto:ApplyJSONPatch>.popFrame = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ApplyJSONPatch>;
  ApplyJSONPatch = function <atom:0>;
  // close_loc <class_fields_init>
  ApplyJSONPatch#1 = function <atom:0>;
  exports.ApplyJSONPatch = ApplyJSONPatch#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=json_patch/src/ApplyJSONPatch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
