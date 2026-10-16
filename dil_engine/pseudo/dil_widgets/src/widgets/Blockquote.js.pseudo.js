// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=1008B file=dil_widgets/src/widgets/Blockquote
// locals: this
// closure: e, t, c, o, r, d, i
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", c.container);
  e.setAttributeNumber("marginTop", this.viewModel.marginTop);
  e.setAttributeNumber("marginLeft", this.viewModel.marginLeft);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", c.quoteBar);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", c.content);
  e.beginComponent(d.DILTextComponent, i, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("marginTop", undefined);
  e.setViewModelProperty("marginLeft", undefined);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Blockquote
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=725B file=dil_widgets/src/widgets/Blockquote
// args: require, module, exports
// locals: e, t, o, r, i, n, d, l, s, Blockquote, <class_fields_init>, Blockquote#1, c
function {
  let c;
  let Blockquote#1;
  let s;
  let l;
  let d;
  let n;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Blockquote = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "JccGWjDWNd2_qTtx");
  o = e.makeNodePrototype("view", undefined, "_c1Q2qyzE0kpXFWk");
  r = e.makeNodePrototype("layout", undefined, "77EEa6JPXhv31FuV");
  i = e.makeComponentPrototype(undefined, "Ip8WkxoUpCdAkcQy");
  n = require("dil_core/src/layout/DILSpacing");
  d = require("dil_text/src/DILTextComponent");
  l = require("valdi_core/src/Component");
  s = require("valdi_core/src/Style");
  let Blockquote;
  let <class_fields_init>;
  class Blockquote extends l.Component { ... }
  <proto:Blockquote>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Blockquote>;
  Blockquote = function <atom:0>;
  // close_loc <class_fields_init>
  Blockquote#1 = function <atom:0>;
  exports.Blockquote = Blockquote#1;
  Blockquote#1.dilV2Properties = [];
  c = {container: new s.Style({flexDirection: "row", alignItems: "stretch", flexShrink: 0, gap: n.resolveDILSpacingUnits(3)}), quoteBar: new s.Style({width: 4, flexShrink: 0, backgroundColor: "color-border", borderRadius: 2}), content: new s.Style({flexGrow: 1, flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Blockquote
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
