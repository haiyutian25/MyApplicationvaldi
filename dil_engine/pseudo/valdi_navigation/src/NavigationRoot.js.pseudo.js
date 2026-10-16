// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=215B file=valdi_navigation/src/NavigationRoot
// args: i
// locals: this
// closure: t
function {
  this = this;
  if ((this._navigationController)) goto L_5c;
  this._navigationController = new t.NavigationController(i);
  new t.NavigationController(i);
  if (!((this.viewModel == null))) goto L_87;
  this.viewModel;
  goto L_d6;
  if (!((undefined.children == null))) goto L_b1;
  undefined.children;
  undefined;
  goto L_d6;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=valdi_navigation/src/NavigationRoot
// args: i
// closure: this
function {
  this.renderChildrenWithNavigator(i);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=349B file=valdi_navigation/src/NavigationRoot
// locals: this
// closure: i, n, o
function {
  this = this;
  if (!((this.context == null))) goto L_2c;
  this.context;
  goto L_4d;
  if (!(undefined.navigator)) goto L_ba;
  goto L_15c;
  // [栈深重同步 1 -> 0]
  i.beginComponent(n.NavigationView, o, undefined, undefined);
  i.setUnnamedSlot(function <atom:0>);
  i.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_navigation/src/NavigationRoot
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=3 bc=300B file=valdi_navigation/src/NavigationRoot
// args: require, module, exports
// locals: i, o, e, t, n, r, NavigationRoot, <class_fields_init>, NavigationRoot#1
function {
  let NavigationRoot#1;
  let r;
  let n;
  let t;
  let e;
  let o;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NavigationRoot = undefined;
  i = require("valdi_core/src/JSX").jsx;
  o = i.makeComponentPrototype(undefined, "TbzWI1j0_iDWSoIP");
  e = require("valdi_core/src/Component");
  t = require("valdi_navigation/src/NavigationController");
  n = require("./NavigationView");
  r = require("valdi_core/src/CompilerIntrinsics");
  let NavigationRoot;
  let <class_fields_init>;
  class NavigationRoot extends e.Component { ... }
  <proto:NavigationRoot>.renderChildrenWithNavigator = function <atom:0>;
  <proto:NavigationRoot>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NavigationRoot>;
  NavigationRoot = function <atom:0>;
  // close_loc <class_fields_init>
  NavigationRoot#1 = function <atom:0>;
  exports.NavigationRoot = NavigationRoot#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/NavigationRoot
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
