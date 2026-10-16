// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=108B file=valdi_core/src/GeometricPath
// args: t, e, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.data = [];
  if (!((r == null))) goto L_68;
  r;
  this.data.push(t, e, 1);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=valdi_core/src/GeometricPath
// args: t, e
// locals: this
function {
  this = this;
  this.data.push(1, t, e);
  return this;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=78B file=valdi_core/src/GeometricPath
// args: t, e
// locals: this
function {
  this = this;
  this.data.push(2, t, e);
  return this;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=45B file=valdi_core/src/GeometricPath
// args: t, e, r, i
// locals: this
function {
  this = this;
  return this.roundRectTo(t, e, r, i, 0, 0);   // tail call
}

// fn <atom:0>  args=6 vars=7 closure=0 cpool=0 bc=86B file=valdi_core/src/GeometricPath
// args: t, e, r, i, a, s
// locals: this
function {
  this = this;
  this.data.push(5, t, e, r, i, a, s);
  return this;
}

// fn <atom:0>  args=5 vars=6 closure=0 cpool=0 bc=83B file=valdi_core/src/GeometricPath
// args: t, e, r, i, a
// locals: this
function {
  this = this;
  this.data.push(6, t, e, r, i, a);
  return this;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=49B file=valdi_core/src/GeometricPath
// args: t, e, r, i
// locals: this
function {
  this = this;
  return this.roundRectTo(t, e, r, i, (r / 2), (i / 2));   // tail call
}

// fn <atom:0>  args=6 vars=7 closure=0 cpool=0 bc=86B file=valdi_core/src/GeometricPath
// args: t, e, r, i, a, s
// locals: this
function {
  this = this;
  this.data.push(4, t, e, r, i, a, s);
  return this;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=80B file=valdi_core/src/GeometricPath
// args: t, e, r, i
// locals: this
function {
  this = this;
  this.data.push(3, t, e, r, i);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=valdi_core/src/GeometricPath
// locals: this
function {
  this = this;
  this.data.push(7);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=valdi_core/src/GeometricPath
// locals: this
function {
  this = this;
  return Float64Array.from(this.data);   // tail call
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=25B file=valdi_core/src/GeometricPath
// args: t
function {
  if (((1 === t))) goto L_18;
  if (((2 === t))) goto L_18;
  if (((3 === t))) goto L_18;
  return (4 === t);
}

// fn e  args=3 vars=3 closure=0 cpool=0 bc=7B file=valdi_core/src/GeometricPath
// args: t, e, r
function {
  return ((e + r) <= t.length);
}

// fn r  args=2 vars=6 closure=2 cpool=0 bc=791B file=valdi_core/src/GeometricPath
// args: r, i
// locals: a, s, u, o
// closure: t, e
function {
  let o;
  let u;
  let s;
  let a;
  if (!((r.length < 3))) goto L_15;
  return false;
  a = 0;
  a = <a_new>;
  s = r[(a++)];
  a = <a_new>;
  u = r[(a++)];
  a = <a_new>;
  o = r[(a++)];
  if (((s <= 0))) goto L_4d;
  if (((u <= 0))) goto L_4d;
  if (!(!t(o))) goto L_52;
  return false;
  if (!((i.beginPath == null))) goto L_7d;
  i.beginPath;
  i;
  goto L_89;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, s, u, o);
  if (!((a < r.length))) goto L_314;
  a = <a_new>;
  if (!((r[(a++)] === 1))) goto L_eb;
  if (!(!e(r, a, 2))) goto L_b0;
  return false;
  a = <a_new>;
  a = <a_new>;
  i.moveTo(r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 2))) goto L_138;
  if (!(!e(r, a, 2))) goto L_fd;
  return false;
  a = <a_new>;
  a = <a_new>;
  i.lineTo(r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 3))) goto L_197;
  if (!(!e(r, a, 4))) goto L_14a;
  return false;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  i.quadTo(r[(a++)], r[(a++)], r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 4))) goto L_208;
  if (!(!e(r, a, 6))) goto L_1a9;
  return false;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  i.cubicTo(r[(a++)], r[(a++)], r[(a++)], r[(a++)], r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 5))) goto L_279;
  if (!(!e(r, a, 6))) goto L_21a;
  return false;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  i.roundRectTo(r[(a++)], r[(a++)], r[(a++)], r[(a++)], r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 6))) goto L_2e0;
  if (!(!e(r, a, 5))) goto L_28b;
  return false;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  a = <a_new>;
  i.arcTo(r[(a++)], r[(a++)], r[(a++)], r[(a++)], r[(a++)]);
  goto L_310;
  if (!((r[(a++)] === 7))) goto L_30d;
  i.close();
  goto L_310;
  return false;
  r[(a++)];
  goto L_8a;
  return true;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=14 bc=221B file=valdi_core/src/GeometricPath
// args: require, module, exports
// locals: GeometricPathBuilder, <class_fields_init>, GeometricPathBuilder#1, t, e, r
function {
  t = function t;
  e = function e;
  r = function r;
  let GeometricPathBuilder#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GeometricPathBuilder = undefined;
  exports.visitGeometricPath = undefined;
  let GeometricPathBuilder;
  let <class_fields_init>;
  class GeometricPathBuilder extends undefined { ... }
  <proto:GeometricPathBuilder>.moveTo = function <atom:0>;
  <proto:GeometricPathBuilder>.lineTo = function <atom:0>;
  <proto:GeometricPathBuilder>.rectTo = function <atom:0>;
  <proto:GeometricPathBuilder>.roundRectTo = function <atom:0>;
  <proto:GeometricPathBuilder>.arcTo = function <atom:0>;
  <proto:GeometricPathBuilder>.ovalTo = function <atom:0>;
  <proto:GeometricPathBuilder>.cubicTo = function <atom:0>;
  <proto:GeometricPathBuilder>.quadTo = function <atom:0>;
  <proto:GeometricPathBuilder>.close = function <atom:0>;
  <proto:GeometricPathBuilder>.build = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:GeometricPathBuilder>;
  GeometricPathBuilder = function <atom:0>;
  // close_loc <class_fields_init>
  GeometricPathBuilder#1 = function <atom:0>;
  exports.GeometricPathBuilder = GeometricPathBuilder#1;
  exports.visitGeometricPath = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/GeometricPath
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
