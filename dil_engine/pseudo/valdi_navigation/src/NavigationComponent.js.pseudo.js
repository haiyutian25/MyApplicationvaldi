// fn o  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_navigation/src/NavigationComponent
// args: o
// closure: t
function {
  return t(o).navigationController;
}

// fn t  args=1 vars=3 closure=1 cpool=0 bc=150B file=valdi_navigation/src/NavigationComponent
// args: o
// locals: e, n
// closure: t
function {
  let n;
  let e;
  e = o;
  if (!(e.navigationController)) goto L_32;
  return e;
  n = o.renderer.getComponentParent(o);
  if (!(!n)) goto L_8f;
  throw new Error("Could not resolve navigator");
  return t(n);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=107B file=valdi_navigation/src/NavigationComponent
// args: require, module, exports
// locals: o, t
function {
  o = function o;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getNavigationController = undefined;
  exports.getNavigationComponent = undefined;
  exports.getNavigationController = o;
  exports.getNavigationComponent = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/NavigationComponent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
