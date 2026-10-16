// fn t  args=1 vars=1 closure=0 cpool=0 bc=11B file=widgets/src/components/grid/utils
// args: e
function {
  return ((100 * e) + "%");
}

// fn r  args=2 vars=4 closure=0 cpool=0 bc=127B file=widgets/src/components/grid/utils
// args: e, t
// locals: r, n
function {
  let r;
  r = new Array();
  let n;
  n = 0;
  if (!((n < e.length))) goto L_7b;
  r.push(e.slice(n, (n + t)));
  n = (n + t);
  (n + t);
  goto L_12;
  return r;
}

// fn n  args=0 vars=0 closure=1 cpool=0 bc=219B file=widgets/src/components/grid/utils
// closure: e
function {
  return ((e.Device.getDisplayHeight() - e.Device.getDisplayTopInset()) - e.Device.getDisplayBottomInset());
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=143B file=widgets/src/components/grid/utils
// args: require, module, exports
// locals: e, t, r, n
function {
  t = function t;
  r = function r;
  n = function n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toPctStr = undefined;
  exports.splitInChunks = undefined;
  exports.calcContentArea = undefined;
  e = require("valdi_core/src/Device");
  exports.toPctStr = t;
  exports.splitInChunks = r;
  exports.calcContentArea = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/grid/utils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
