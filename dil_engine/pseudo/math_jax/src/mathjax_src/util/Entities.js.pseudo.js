// fn a  args=2 vars=2 closure=2 cpool=0 bc=86B file=math_jax/src/mathjax_src/util/Entities
// args: e, r
// closure: exports, t
function {
  Object.assign(exports.entities, e);
  t[r] = true;
  return;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=37B file=math_jax/src/mathjax_src/util/Entities
// args: e
// closure: exports
function {
  exports.entities;
  delete e;
  return;
}

// fn o  args=1 vars=1 closure=1 cpool=2 bc=43B file=math_jax/src/mathjax_src/util/Entities
// args: e
// closure: l
function {
  return e.replace(new RegExp("&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));"), l);   // tail call
}

// fn l  args=2 vars=3 closure=5 cpool=2 bc=510B file=math_jax/src/mathjax_src/util/Entities
// args: a, i
// locals: a#1
// closure: s, exports, t, e, r
function {
  if (!(("#" === i.charAt(0)))) goto L_58;
  return s(i.slice(1));   // tail call
  if (!(exports.entities[i])) goto L_a3;
  return exports.entities[i];
  if (!(exports.options.loadMissingEntities)) goto L_1fc;
  let a#1;
  if (!(i.match(new RegExp("^[a-zA-Z](fr|scr|opf)$")))) goto L_142;
  goto L_18c;
  // [栈深重同步 1 -> 0]
  a#1 = i.charAt(0).toLowerCase();
  if ((t[a#1])) goto L_1fb;
  t[a#1] = true;
  e.retryAfter(r.asyncLoad((("./util/entities/" + a#1) + ".js")));
  return a;
}

// fn s  args=1 vars=2 closure=0 cpool=0 bc=149B file=math_jax/src/mathjax_src/util/Entities
// args: e
// locals: r
function {
  let r;
  if (!(("x" === e.charAt(0)))) goto L_61;
  goto L_68;
  // [栈深重同步 1 -> 0]
  r = parseInt(e);
  return String.fromCodePoint(r);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=5 bc=4305B file=math_jax/src/mathjax_src/util/Entities
// args: require, module, exports
// locals: e, r, t, a, i, o, l, s
function {
  a = function a;
  i = function i;
  o = function o;
  l = function l;
  s = function s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.options = undefined;
  exports.entities = undefined;
  exports.add = undefined;
  exports.remove = undefined;
  exports.translate = undefined;
  exports.numeric = undefined;
  e = require("./Retries");
  r = require("./AsyncLoad");
  exports.options = {loadMissingEntities: true};
  exports.entities = {ApplyFunction: "⁡", Backslash: "∖", Because: "∵", Breve: "˘", Cap: "⋒", CenterDot: "�", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", Congruent: "≡", ContourIntegral: "∮", Coproduct: "∐", Cross: "⨯", Cup: "⋓", CupCap: "≍", Dagger: "‡", Del: "∇", Delta: "Δ", Diamond: "⋄", DifferentialD: "ⅆ", DotEqual: "≐", DoubleDot: "�", DoubleRightTee: "⊨", DoubleVerticalBar: "∥", DownArrow: "↓", DownLeftVector: "↽", DownRightVector: "⇁", DownTee: "⊤", Downarrow: "⇓", Element: "∈", EqualTilde: "≂", Equilibrium: "⇌", Exists: "∃", ExponentialE: "ⅇ", FilledVerySmallSquare: "▪", ForAll: "∀", Gamma: "Γ", Gg: "⋙", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Hacek: "ˇ", Hat: "^", HumpDownHump: "≎", HumpEqual: "≏", Im: "ℑ", ImaginaryI: "ⅈ", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Lambda: "Λ", Larr: "↞", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDownVector: "⇃", LeftFloor: "⌊", LeftRightArrow: "↔", LeftTee: "⊣", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpVector: "↿", LeftVector: "↼", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessSlantEqual: "⩽", LessTilde: "≲", Ll: "⋘", Lleftarrow: "⇚", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lsh: "↰", MinusPlus: "∓", NestedGreaterGreater: "≫", NestedLessLess: "≪", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotPrecedes: "⊀", NotPrecedesSlantEqual: "⋠", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsSlantEqual: "⋡", NotSupersetEqual: "⊉", NotTilde: "≁", NotVerticalBar: "∤", Omega: "Ω", OverBar: "‾", OverBrace: "⏞", PartialD: "∂", Phi: "Φ", Pi: "Π", PlusMinus: "�", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Product: "∏", Proportional: "∝", Psi: "Ψ", Rarr: "↠", Re: "ℜ", ReverseEquilibrium: "⇋", RightAngleBracket: "⟩", RightArrow: "→", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDownVector: "⇂", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpVector: "↾", RightVector: "⇀", Rightarrow: "⇒", Rrightarrow: "⇛", Rsh: "↱", Sigma: "Σ", SmallCircle: "∘", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Star: "⋆", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", Therefore: "∴", Theta: "Θ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", UnderBar: "_", UnderBrace: "⏟", Union: "⋃", UnionPlus: "⊎", UpArrow: "↑", UpDownArrow: "↕", UpTee: "⊥", Uparrow: "⇑", Updownarrow: "⇕", Upsilon: "Υ", Vdash: "⊩", Vee: "⋁", VerticalBar: "∣", VerticalTilde: "≀", Vvdash: "⊪", Wedge: "⋀", Xi: "Ξ", amp: "&", acute: "�", aleph: "ℵ", alpha: "α", amalg: "⨿", and: "∧", ang: "∠", angmsd: "∡", angsph: "∢", ape: "≊", backprime: "‵", backsim: "∽", backsimeq: "⋍", beta: "β", beth: "ℶ", between: "≬", bigcirc: "◯", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", blacklozenge: "⧫", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", bowtie: "⋈", boxdl: "┐", boxdr: "┌", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxur: "└", bsol: "\", bull: "•", cap: "∩", check: "✓", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "�", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", clubs: "♣", colon: ":", comp: "∁", ctdot: "⋯", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cup: "∪", curarr: "↷", curlyvee: "⋎", curlywedge: "⋏", dagger: "†", daleth: "ℸ", ddarr: "⇊", deg: "�", delta: "δ", digamma: "ϝ", div: "�", divideontimes: "⋇", dot: "˙", doteqdot: "≑", dotplus: "∔", dotsquare: "⊡", dtdot: "⋱", ecir: "≖", efDot: "≒", egs: "⪖", ell: "ℓ", els: "⪕", empty: "∅", epsi: "ε", epsiv: "ϵ", erDot: "≓", eta: "η", eth: "�", flat: "♭", fork: "⋔", frown: "⌢", gEl: "⪌", gamma: "γ", gap: "⪆", gimel: "ℷ", gnE: "≩", gnap: "⪊", gne: "⪈", gnsim: "⋧", gt: ">", gtdot: "⋗", harrw: "↭", hbar: "ℏ", hellip: "…", hookleftarrow: "↩", hookrightarrow: "↪", imath: "ı", infin: "∞", intcal: "⊺", iota: "ι", jmath: "ȷ", kappa: "κ", kappav: "ϰ", lEg: "⪋", lambda: "λ", lap: "⪅", larrlp: "↫", larrtl: "↢", lbrace: "{", lbrack: "[", le: "≤", leftleftarrows: "⇇", leftthreetimes: "⋋", lessdot: "⋖", lmoust: "⎰", lnE: "≨", lnap: "⪉", lne: "⪇", lnsim: "⋦", longmapsto: "⟼", looparrowright: "↬", lowast: "∗", loz: "◊", lt: "<", ltimes: "⋉", ltri: "◃", macr: "�", malt: "✠", mho: "℧", mu: "μ", multimap: "⊸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", natur: "♮", nearr: "↗", nharr: "↮", nlarr: "↚", not: "�", nrarr: "↛", nu: "ν", nvDash: "⊭", nvdash: "⊬", nwarr: "↖", omega: "ω", omicron: "ο", or: "∨", osol: "⊘", period: ".", phi: "φ", phiv: "ϕ", pi: "π", piv: "ϖ", prap: "⪷", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", prime: "′", psi: "ψ", quot: """, rarrtl: "↣", rbrace: "}", rbrack: "]", rho: "ρ", rhov: "ϱ", rightrightarrows: "⇉", rightthreetimes: "⋌", ring: "˚", rmoust: "⎱", rtimes: "⋊", rtri: "▹", scap: "⪸", scnE: "⪶", scnap: "⪺", scnsim: "⋩", sdot: "⋅", searr: "↘", sect: "�", sharp: "♯", sigma: "σ", sigmav: "ς", simne: "≆", smile: "⌣", spades: "♠", sub: "⊂", subE: "⫅", subnE: "⫋", subne: "⊊", supE: "⫆", supnE: "⫌", supne: "⊋", swarr: "↙", tau: "τ", theta: "θ", thetav: "ϑ", tilde: "˜", times: "�", triangle: "▵", triangleq: "≜", upsi: "υ", upuparrows: "⇈", veebar: "⊻", vellip: "⋮", weierp: "℘", xi: "ξ", yen: "�", zeta: "ζ", zigrarr: "⇝", nbsp: "�", rsquo: "’", lsquo: "‘"};
  t = {};
  exports.add = a;
  exports.remove = i;
  exports.translate = o;
  exports.numeric = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/util/Entities
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
