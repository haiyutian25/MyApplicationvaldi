// fn n  args=3 vars=5 closure=1 cpool=0 bc=573B file=dil_text/src/markdown/DILMarkdownCode
// args: o, n, d
// locals: r, c
// closure: e
function {
  let r;
  r = 0;
  let c;
  for (const c of d) {
    if (!((r < c.from))) goto L_ab;
    o.appendText(n.slice(r, c.from));
    o.pushColor(e[c.kind]);
    o.appendText(n.slice(c.from, c.to));
    o.pop();
    r = c.to;
    c.to;
  }
  if (!((r < n.length))) goto L_23c;
  o.appendText(n.slice(r));
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=706B file=dil_text/src/markdown/DILMarkdownCode
// args: require, module, exports
// locals: o, e, n
function {
  n = function n;
  let e;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.appendDILMarkdownCode = undefined;
  o = require("markdown/src/MarkdownCodeToken");
  {}[o.MarkdownCodeTokenKind.Console] = "color-code-foreground";
  "color-code-foreground";
  {}[o.MarkdownCodeTokenKind.Punctuation] = "color-code-punctuation";
  "color-code-punctuation";
  {}[o.MarkdownCodeTokenKind.Comment] = "color-code-comment";
  "color-code-comment";
  {}[o.MarkdownCodeTokenKind.String] = "color-code-string";
  "color-code-string";
  {}[o.MarkdownCodeTokenKind.Keyword] = "color-code-keyword";
  "color-code-keyword";
  {}[o.MarkdownCodeTokenKind.Function] = "color-code-function";
  "color-code-function";
  {}[o.MarkdownCodeTokenKind.Number] = "color-code-number";
  "color-code-number";
  {}[o.MarkdownCodeTokenKind.Property] = "color-code-property";
  "color-code-property";
  e = {};
  exports.appendDILMarkdownCode = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/markdown/DILMarkdownCode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
