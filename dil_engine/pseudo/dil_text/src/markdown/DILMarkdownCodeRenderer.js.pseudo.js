// fn d  args=0 vars=2 closure=2 cpool=0 bc=215B file=dil_text/src/markdown/DILMarkdownCodeRenderer
// locals: e, r
// closure: o, exports
function {
  let r;
  let e;
  e = o.resolveProviderSource();
  r = exports.DILMarkdownCodeRendererProvider.getProviderKey();
  if (!((e == null))) goto L_80;
  e;
  goto L_a7;
  if (!((true === undefined.hasValue(r)))) goto L_d5;
  return e.getValue(r);
  return undefined;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=211B file=dil_text/src/markdown/DILMarkdownCodeRenderer
// args: require, module, exports
// locals: e, r, o, d
function {
  d = function d;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILMarkdownCodeRendererProvider = undefined;
  exports.resolveDILMarkdownCodeRenderer = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("valdi_core/src/provider/createProvider");
  o = require("valdi_core/src/provider/resolveProviderSource");
  exports.DILMarkdownCodeRendererProvider = r.createProviderComponentWithKeyName("DILMarkdownCodeRenderer");
  exports.resolveDILMarkdownCodeRenderer = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/markdown/DILMarkdownCodeRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
