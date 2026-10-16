// fn t  args=3 vars=3 closure=1 cpool=0 bc=42B file=markdown_diff/src/MarkdownDiff
// args: t, i, r
// closure: e
function {
  return e.getDiffHighlights(t, i, r);   // tail call
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=markdown_diff/src/MarkdownDiff
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getDiffHighlights = undefined;
  e = require("../runtime_bundle/MarkdownDiff");
  exports.getDiffHighlights = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=markdown_diff/src/MarkdownDiff
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
