// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=15B file=dil_core/src/DILBreakpoints
// args: <atom:0>
// locals: e
// closure: r
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  <value(_it1)>;
  <done(_it1)>;
  e = <value(_it1)>;
  return (r >= e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=9B file=dil_core/src/DILBreakpoints
// args: <atom:0>
// locals: e
function {
  const _it1 = <atom:0>;
  <done(_it1)>;
  e = <value(_it1)>;
  return e;
}

// fn r  args=1 vars=1 closure=2 cpool=2 bc=136B file=dil_core/src/DILBreakpoints
// args: r
// closure: t, e
function {
  if ((!Number.isFinite(r))) goto L_32;
  if (!((r < 0))) goto L_38;
  return t;
  return e.filter(function <atom:0>).map(function <atom:0>);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=162B file=dil_core/src/DILBreakpoints
// args: require, module, exports
// locals: e, t, r
function {
  r = function r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveDILActiveBreakpoints = undefined;
  e = [["xs", 380], ["sm", 576], ["md", 768], ["lg", 1024], ["xl", 1280], ["2xl", 1536]];
  t = [];
  exports.resolveDILActiveBreakpoints = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILBreakpoints
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
