// fn <atom:0>  args=3 vars=7 closure=0 cpool=0 bc=287B file=dil_compiler/src/DILIntrinsicWidgets
// args: require, module, exports
// locals: e, i, r, o
function {
  let o;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.INTRINSICS_WIDGETS_MAP = undefined;
  e = require("./intrinsics/Each");
  i = require("./intrinsics/Scope");
  r = require("./intrinsics/Show");
  o = require("./intrinsics/ShowElse");
  exports.INTRINSICS_WIDGETS_MAP = {Each: e.EachWidgetFactory, Scope: i.ScopeWidgetFactory, Show: r.ShowWidgetFactory, Show.Else: o.ShowElseWidgetFactory};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILIntrinsicWidgets
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
