// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=167B file=widgets/src/components/section/utils/makeSectionModelSimple
// closure: e, r, o, p
function {
  e.beginComponent(r.SectionHeader, o, undefined, undefined);
  e.setViewModelProperty("title", p);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=3B file=widgets/src/components/section/utils/makeSectionModelSimple
// closure: m
function {
  m();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=163B file=widgets/src/components/section/utils/makeSectionModelSimple
// closure: m, e, d, t
function {
  e.beginComponent(d.Card, t, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=163B file=widgets/src/components/section/utils/makeSectionModelSimple
// closure: m, e, d, t, i, n
function {
  e.beginComponent(i.SectionBody, n, undefined, undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn p  args=2 vars=2 closure=7 cpool=2 bc=32B file=widgets/src/components/section/utils/makeSectionModelSimple
// args: p, m
// closure: e, r, o, d, t, i, n
function {
  return {key: p, onRenderHeader: function <atom:0>, onRenderBody: function <atom:0>};
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=1 bc=311B file=widgets/src/components/section/utils/makeSectionModelSimple
// args: require, module, exports
// locals: e, o, n, t, d, i, r, p
function {
  p = function p;
  let r;
  let i;
  let d;
  let t;
  let n;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeSectionModelSimple = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "PqaxHTsCCPkOqlw8");
  n = e.makeComponentPrototype(undefined, "ndLPKIxuEuMjxXqW");
  t = e.makeComponentPrototype(undefined, "nnFP3iedff0tUtT4");
  d = require("../../card/Card");
  i = require("../SectionBody");
  r = require("../SectionHeader");
  exports.makeSectionModelSimple = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/utils/makeSectionModelSimple
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
