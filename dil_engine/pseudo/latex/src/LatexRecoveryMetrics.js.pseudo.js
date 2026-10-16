// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=latex/src/LatexRecoveryMetrics
// args: e
function {
  e.Recovered = "recovered";
  e.Failed = "failed";
  e.Unavailable = "unavailable";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=147B file=latex/src/LatexRecoveryMetrics
// args: e
// closure: r
function {
  if (!((r.codepoint >= e.first))) goto L_92;
  return (r.codepoint <= e.last);
}

// fn o  args=2 vars=3 closure=6 cpool=2 bc=729B file=latex/src/LatexRecoveryMetrics
// args: t, a
// locals: r
// closure: l, e, c, i, s, n
function {
  let r;
  r = l(t);
  if (!((undefined === r))) goto L_58;
  goto L_5d;
  // [栈深重同步 5 -> 4]
  if (!((r == null))) goto L_6e;
  r;
  goto L_8f;
  if (!((undefined === undefined.variant))) goto L_99;
  goto L_111;
  // [栈深重同步 5 -> 4]
  if (!(i.has(r.variant))) goto L_10c;
  goto L_111;
  // [栈深重同步 5 -> 4]
  if (!((undefined === r))) goto L_124;
  goto L_180;
  // [栈深重同步 5 -> 4]
  if (!((s.find(function <atom:0>) == null))) goto L_155;
  s.find(function <atom:0>);
  goto L_176;
  if (!((undefined.name == null))) goto L_180;
  undefined.name;
  if (!((undefined === r))) goto L_194;
  goto L_2d2;
  // [栈深重同步 5 -> 4]
  if (!(n.has(String.fromCodePoint(r.codepoint)))) goto L_2cd;
  goto L_2d2;
  // [栈深重同步 5 -> 4]
  e.countMetric("latex.native.recovery", 1, {source: "native", fallback: "mathjax", outcome: a, reason: "missing_glyph", requested_variant: "other", glyph_block: "other", missing_codepoint: "other"});
  return;
}

// fn l  args=1 vars=4 closure=0 cpool=2 bc=271B file=latex/src/LatexRecoveryMetrics
// args: e
// locals: t, a, r
function {
  let r;
  let a;
  let t;
  if (!(!(e instanceof Error))) goto L_14;
  return;
  t = e.message.split("
[caused by]: ", 1)[0];
  a = new RegExp("^MathJax font data does not contain (?:replacement )?glyph U\\+([0-9A-F]{4,6})(?: with requested variant ([a-z0-9-]{1,32}))?$").exec(t);
  if (((null === a))) goto L_a2;
  if (!((a[0] !== t))) goto L_a5;
  return;
  r = Number.parseInt(a[1], 16);
  if (((r > 1114111))) goto L_f7;
  if (!((r >= 55296))) goto L_fb;
  if (!((r <= 57343))) goto L_fb;
  return undefined;
  return {codepoint: r, variant: a[2]};
}

// fn c  args=1 vars=2 closure=2 cpool=0 bc=208B file=latex/src/LatexRecoveryMetrics
// args: e
// locals: r
// closure: t, a
function {
  let r;
  if (!(!t.isVersionAtLeast(10))) goto L_33;
  return "unknown";
  r = a.readLatexRenderFailureReason(e);
  if (!(t.isVersionAtLeast(24))) goto L_90;
  if (!((6 === r))) goto L_90;
  return "layout_error";
  if (!((r === 1))) goto L_9e;
  return "renderer_unavailable";
  if (!((r === 2))) goto L_a9;
  return "empty_expression";
  if (!((r === 3))) goto L_b4;
  return "undefined_control_sequence";
  if (!((r === 4))) goto L_bf;
  return "unknown_environment";
  if (!((r === 5))) goto L_ca;
  return "tex_parse_error";
  return "unknown";
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=874B file=latex/src/LatexRecoveryMetrics
// args: require, module, exports
// locals: e, t, a, r, n, i, s, o, l, c
function {
  o = function o;
  l = function l;
  c = function c;
  let s;
  let i;
  let n;
  let a;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LatexRecoveryOutcome = undefined;
  exports.reportLatexNativeRecovery = undefined;
  e = require("oai_metrics_service/src/ValdiMetricsReporting");
  t = require("valdi_core/src/CompilerIntrinsics");
  a = require("./LatexRenderErrors");
  if ((r)) goto L_98;
  r = {};
  exports.LatexRecoveryOutcome = {};
  !function <atom:0>({});
  n = new Set("áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽàâãçêôõÀÂÃÇÊÔÕ̧̀́̂̃̈̊̌");
  ["normal", "bold", "italic", "bold-italic", "double-struck", "fraktur", "bold-fraktur", "sans-serif", "bold-sans-serif", "sans-serif-italic", "sans-serif-bold-italic", "monospace", "script", "bold-script", "-smallop", "-largeop", "-size3", "-size4", "-size5", "-size6", "-size7", "-tex-mathit", "-tex-calligraphic", "-tex-bold-calligraphic", "-tex-oldstyle", "-tex-bold-oldstyle", "-tex-variant", "-lf-tp", "-rt-bt", "-ex-md", "-bbold", "-upsmall"][<<bad:2147483465>>] = "-uplarge";
  i = new Set(["normal", "bold", "italic", "bold-italic", "double-struck", "fraktur", "bold-fraktur", "sans-serif", "bold-sans-serif", "sans-serif-italic", "sans-serif-bold-italic", "monospace", "script", "bold-script", "-smallop", "-largeop", "-size3", "-size4", "-size5", "-size6", "-size7", "-tex-mathit", "-tex-calligraphic", "-tex-bold-calligraphic", "-tex-oldstyle", "-tex-bold-oldstyle", "-tex-variant", "-lf-tp", "-rt-bt", "-ex-md", "-bbold", "-upsmall"]);
  s = [{first: 0, last: 127, name: "basic_latin"}, {first: 128, last: 255, name: "latin_1_supplement"}, {first: 256, last: 383, name: "latin_extended_a"}, {first: 384, last: 591, name: "latin_extended_b"}, {first: 768, last: 879, name: "combining_diacritical_marks"}, {first: 880, last: 1023, name: "greek_and_coptic"}, {first: 1024, last: 1327, name: "cyrillic"}, {first: 1424, last: 1535, name: "hebrew"}, {first: 1536, last: 1791, name: "arabic"}, {first: 2304, last: 2431, name: "devanagari"}, {first: 8192, last: 11263, name: "punctuation_and_symbols"}, {first: 12352, last: 12543, name: "hiragana_and_katakana"}, {first: 13312, last: 19903, name: "cjk_ideographs"}, {first: 19968, last: 40959, name: "cjk_ideographs"}, {first: 44032, last: 55215, name: "hangul_syllables"}, {first: 119808, last: 120831, name: "mathematical_alphanumeric_symbols"}, {first: 126976, last: 129791, name: "pictographs_and_symbols"}, {first: 131072, last: 205743, name: "cjk_ideographs"}];
  exports.reportLatexNativeRecovery = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=latex/src/LatexRecoveryMetrics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
