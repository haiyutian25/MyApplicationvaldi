// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=64B file=native_menu/src/NativeMenuIcons
// args: s
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.onChange = s;
  this.actions = [];
  this.generation = 0;
  this.subscriptions = [];
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=55B file=native_menu/src/NativeMenuIcons
// args: <atom:0>
// locals: s, i
function {
  s = <to_object>(<atom:0>).iconAsset;
  i = {};
  <to_object>(<atom:0>);
  {iconAsset: null};
  return i;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=47B file=native_menu/src/NativeMenuIcons
// args: s, i
function {
  if (!((undefined === s.iconAsset))) goto L_2a;
  return [];
  return [i];
}

// fn <atom:0>  args=2 vars=2 closure=7 cpool=0 bc=375B file=native_menu/src/NativeMenuIcons
// args: i, r
// closure: this, c, s, o, t, e, n
function {
  if (!((this.generation === c))) goto L_176;
  if (!((undefined !== r))) goto L_af;
  if (!(s.isLoggingEnabled)) goto L_af;
  console.warn("Failed to load native menu icon: ".concat(r));
  null;
  e;
  o[t] = {iconAsset: i};
  n.delete(t);
  if (!((0 === n.size))) goto L_176;
  // append([], 0, o)
  o;
  this.actions = [];
  this.onChange(this.actions);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=8 cpool=1 bc=198B file=native_menu/src/NativeMenuIcons
// args: e, t
// closure: this, c, s, o, n, i, r, a
function {
  if (!((undefined !== e.iconAsset))) goto L_c5;
  this.subscriptions.push(i.addAssetLoadObserver(e.iconAsset, function <atom:0>, r, a, a));
  return;
}

// fn <atom:0>  args=1 vars=7 closure=3 cpool=3 bc=540B file=native_menu/src/NativeMenuIcons
// args: t
// locals: o, n, c, r, a, this
// closure: s, i, e
function {
  this = this;
  let a;
  let r;
  let c;
  let n;
  let o;
  if (!((t === this.source))) goto L_3a;
  return;
  this.dispose();
  this.source = t;
  o = t.map(function <atom:0>);
  this.actions = o;
  n = new Set(t.flatMap(function <atom:0>));
  if (!((0 === n.size))) goto L_fd;
  return;
  this.actions = [];
  c = this.generation;
  if (!(e.Device.isIOS())) goto L_17c;
  goto L_17d;
  // [栈深重同步 1 -> 0]
  r = 2;
  a = Math.ceil((24 * e.Device.getDisplayScale()));
  t.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=native_menu/src/NativeMenuIcons
// args: s
function {
  return s.unsubscribe();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=163B file=native_menu/src/NativeMenuIcons
// locals: s, this
function {
  this = this;
  let s;
  this.generation = (this.generation ++);
  this.source = undefined;
  this.actions = [];
  s = this.subscriptions;
  this.subscriptions = [];
  s.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=194B file=native_menu/src/NativeMenuIcons
// args: require, module, exports
// locals: s, i, e, NativeMenuIcons, <class_fields_init>, NativeMenuIcons#1
function {
  let NativeMenuIcons#1;
  let e;
  let i;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeMenuIcons = undefined;
  s = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/Asset");
  e = require("valdi_core/src/Device");
  let NativeMenuIcons;
  let <class_fields_init>;
  class NativeMenuIcons extends undefined { ... }
  <proto:NativeMenuIcons>.update = function <atom:0>;
  <proto:NativeMenuIcons>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeMenuIcons>;
  NativeMenuIcons = function <atom:0>;
  // close_loc <class_fields_init>
  NativeMenuIcons#1 = function <atom:0>;
  exports.NativeMenuIcons = NativeMenuIcons#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=native_menu/src/NativeMenuIcons
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
