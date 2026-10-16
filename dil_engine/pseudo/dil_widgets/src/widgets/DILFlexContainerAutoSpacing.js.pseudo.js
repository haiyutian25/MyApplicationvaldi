// fn o  args=4 vars=10 closure=1 cpool=0 bc=371B file=dil_widgets/src/widgets/DILFlexContainerAutoSpacing
// args: e, t, o, r
// locals: n, i, _, s, c, p
// closure: exports
function {
  let p;
  let c;
  let s;
  let _;
  let i;
  let n;
  n = e.getPropertyValue("gap", t);
  if (!((null != n))) goto L_46;
  return;
  i = e.getPropertyValue("columnGap", t);
  if (!((null != i))) goto L_7a;
  return;
  _ = e.getPropertyValue("rowGap", t);
  if (!((null != _))) goto L_ae;
  return;
  if (!(("column" === o))) goto L_db;
  goto L_fd;
  // [栈深重同步 1 -> 0]
  s = exports.DIL_ROW_AUTO_SPACING_CONTEXT;
  c = e.getPropertyValueAsString("align", t);
  if (!((undefined === c))) goto L_13b;
  if (!((undefined === r))) goto L_13b;
  return s;
  if (!((undefined === r))) goto L_145;
  goto L_154;
  // [栈深重同步 1 -> 0]
  null;
  s;
  p = {containerName: r};
  if (!((undefined === c))) goto L_161;
  return p;
  null;
  p;
  return {align: c};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=250B file=dil_widgets/src/widgets/DILFlexContainerAutoSpacing
// args: require, module, exports
// locals: e, t, o
function {
  o = function o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_COLUMN_AUTO_SPACING_CONTEXT = undefined;
  exports.DIL_ROW_AUTO_SPACING_CONTEXT = undefined;
  exports.getDILFlexContainerAutoSpacingContext = undefined;
  e = require("dil_core/src/layout/DILSpacing");
  t = e.resolveDILSpacingUnits(e.DIL_DEFAULT_CONTAINER_GAP);
  exports.DIL_COLUMN_AUTO_SPACING_CONTEXT = {direction: "column", spacing: t};
  exports.DIL_ROW_AUTO_SPACING_CONTEXT = {direction: "row", spacing: t};
  exports.getDILFlexContainerAutoSpacingContext = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILFlexContainerAutoSpacing
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
