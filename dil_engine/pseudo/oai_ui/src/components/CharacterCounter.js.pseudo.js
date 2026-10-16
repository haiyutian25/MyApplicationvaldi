// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=oai_ui/src/components/CharacterCounter
// args: e
function {
  e.GraphemeCluster = 0;
  e[0] = "GraphemeCluster";
  e.UnicodeScalar = 1;
  e[1] = "UnicodeScalar";
  e.Utf16CodeUnit = 2;
  e[2] = "Utf16CodeUnit";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_ui/src/components/CharacterCounter
// args: e
function {
  e.Remaining = 0;
  e[0] = "Remaining";
  e.RemainingAndMaximum = 1;
  e[1] = "RemainingAndMaximum";
  return;
}

// fn <atom:0>  args=0 vars=5 closure=8 cpool=0 bc=1322B file=oai_ui/src/components/CharacterCounter
// locals: i, n, s, u, this
// closure: l, c, e, t, a, r, d, o
function {
  this = this;
  let u;
  let s;
  let n;
  let i;
  i = l(this.viewModel.value, this.viewModel.countPolicy);
  n = (this.viewModel.maximumLength - i);
  if (!((n > this.viewModel.visibilityThreshold))) goto L_12e;
  return;
  s = "".concat(n);
  if (!((this.viewModel.format == null))) goto L_1c2;
  this.viewModel.format;
  if (!((c.Remaining === c.RemainingAndMaximum))) goto L_25a;
  goto L_25d;
  // [栈深重同步 1 -> 0]
  u = s;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeString("accessibilityValue", s);
  e.beginComponent(a.Text, r, undefined, undefined);
  e.setViewModelProperty("color", d(n, this.viewModel.warningThreshold, this.viewModel.errorThreshold));
  e.setViewModelProperty("size", o.OAITextSize.BodySmall);
  e.setViewModelProperty("value", u);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/CharacterCounter
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn l  args=2 vars=2 closure=2 cpool=0 bc=354B file=oai_ui/src/components/CharacterCounter
// args: e, t
// closure: s, i
function {
  if (!((t === s.GraphemeCluster))) goto L_94;
  return i.UnicodeString.fromString(e).countGraphemeClusters();   // tail call
  if (!((t === s.UnicodeScalar))) goto L_105;
  return i.UnicodeString.fromString(e).length;
  if (!((t === s.Utf16CodeUnit))) goto L_12e;
  return e.length;
  throw new Error("Unsupported character count policy: ".concat(t));
}

// fn u  args=3 vars=11 closure=2 cpool=0 bc=541B file=oai_ui/src/components/CharacterCounter
// args: e, t, r
// locals: o, n, a, s, c, u, i, e#1
// closure: l, i
function {
  let u;
  let c;
  let s;
  let a;
  let n;
  let o;
  o = Math.max(0, Math.floor(t));
  if (!((l(e, r) <= o))) goto L_73;
  return e;
  n = i.UnicodeString.fromString(e);
  a = Array.from(e);
  s = 0;
  c = 0;
  u = 0;
  let i;
  i = 1;
  if (!((i <= n.length))) goto L_1cd;
  if (((i === n.length))) goto L_13a;
  if (!(!n.isFromGraphemeClusterAt(i))) goto L_1c2;
  let e#1;
  e#1 = l(a.slice(u, i).join(""), r);
  if ((((s + e#1) > o))) goto L_1cd;
  s = (s + e#1);
  (s + e#1);
  c = i;
  i;
  u = i;
  i;
  i = <i_new>;
  (i++);
  goto L_f6;
  return a.slice(0, c).join("");   // tail call
}

// fn d  args=3 vars=3 closure=1 cpool=0 bc=220B file=oai_ui/src/components/CharacterCounter
// args: e, t, r
// closure: o
function {
  if (!((e <= r))) goto L_4b;
  return o.OAIColor.TextStatusError;
  if (!((e <= t))) goto L_96;
  return o.OAIColor.TextStatusWarning;
  return o.OAIColor.TextSecondary;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=7 bc=498B file=oai_ui/src/components/CharacterCounter
// args: require, module, exports
// locals: e, t, r, o, i, n, a, s, c, CharacterCounter, <class_fields_init>, CharacterCounter#1, l, u, d
function {
  l = function l;
  u = function u;
  d = function d;
  let CharacterCounter#1;
  let a;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CharacterCountPolicy = undefined;
  exports.CharacterCounterFormat = undefined;
  exports.CharacterCounter = undefined;
  exports.countCharacters = undefined;
  exports.truncateCharacters = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["accessibilityCategory", "text", "accessibilityNavigation", "leaf"], "FAJDFZukCPMMVpsl");
  r = e.makeComponentPrototype(undefined, "2cTrmGwslyPYJm0F");
  o = require("oai_core/src/OAITokens");
  i = require("coreutils/src/unicode/UnicodeString");
  n = require("valdi_core/src/Component");
  a = require("./Text");
  if ((s)) goto L_16c;
  s = {};
  exports.CharacterCountPolicy = {};
  !function <atom:0>({});
  if ((c)) goto L_185;
  c = {};
  exports.CharacterCounterFormat = {};
  function <atom:0>({});
  let CharacterCounter;
  let <class_fields_init>;
  class CharacterCounter extends n.Component { ... }
  <proto:CharacterCounter>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CharacterCounter>;
  CharacterCounter = function <atom:0>;
  // close_loc <class_fields_init>
  CharacterCounter#1 = function <atom:0>;
  exports.CharacterCounter = CharacterCounter#1;
  exports.countCharacters = l;
  exports.truncateCharacters = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/CharacterCounter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
