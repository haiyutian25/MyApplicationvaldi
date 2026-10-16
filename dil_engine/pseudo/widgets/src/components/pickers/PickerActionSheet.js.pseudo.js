// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=widgets/src/components/pickers/PickerActionSheet
// closure: s
function {
  s.Device.performHapticFeedback("action_sheet");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=165B file=widgets/src/components/pickers/PickerActionSheet
// closure: e, d, p
function {
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", p.backgroundFill);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=1 bc=1572B file=widgets/src/components/pickers/PickerActionSheet
// locals: this
// closure: e, d, p, t, i, o, r, v, y, n, a, s
function {
  this = this;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", p.container);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", p.content);
  e.beginRender(o, undefined);
  e.setAttributeString("value", this.viewModel.title);
  e.setAttributeStyle("style", p.title);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeNumber("paddingLeft", v.Spacing.MD);
  e.setAttributeNumber("paddingRight", v.Spacing.MD);
  e.beginComponent(y.PickerView, n, undefined, undefined);
  e.setViewModelProperty("index", this.viewModel.index);
  e.setViewModelProperty("labels", this.viewModel.labels);
  e.setViewModelProperty("onChange", this.viewModel.onChange);
  e.setViewModelProperty("height", this.calculateTargetHeight());
  e.endComponent();
  e.endRender();
  e.endRender();
  a.when(s.Device.isIOS(), function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=303B file=widgets/src/components/pickers/PickerActionSheet
// closure: s
function {
  if (!(s.Device.isIOS())) goto L_12b;
  return (((0.4 * s.Device.getDisplayHeight()) - s.Device.getDisplayBottomInset()) - s.Device.getDisplayTopInset());
  return 260;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/pickers/PickerActionSheet
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

// fn <atom:0>  args=3 vars=22 closure=0 cpool=4 bc=1418B file=widgets/src/components/pickers/PickerActionSheet
// args: require, module, exports
// locals: e, t, i, o, r, n, d, l, s, c, a, u, g, v, y, PickerActionSheet, <class_fields_init>, PickerActionSheet#1, p
function {
  let p;
  let PickerActionSheet#1;
  let y;
  let v;
  let g;
  let u;
  let a;
  let c;
  let s;
  let l;
  let d;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PickerActionSheet = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "wfzzUBMDm7-2IhVd");
  i = e.makeNodePrototype("view", undefined, "q-59cTnEYGyXz0dj");
  o = e.makeNodePrototype("label", undefined, "Vnz9noh0EIV33X9K");
  r = e.makeNodePrototype("layout", ["flexGrow", 1], "C-BGTldASdujPiRt");
  n = e.makeComponentPrototype(undefined, "lWoRh77JAoNJfRWC");
  d = e.makeNodePrototype("view", undefined, "Oz9YpeHd2A9NBvST");
  l = require("valdi_core/src/Component");
  s = require("valdi_core/src/Device");
  c = require("valdi_core/src/Style");
  a = require("valdi_core/src/utils/When");
  u = require("widgets/src/styles/TextStyleFont");
  g = require("widgets/src/styles/semanticColors");
  v = require("widgets/src/styles/spacing");
  y = require("./PickerView");
  let PickerActionSheet;
  let <class_fields_init>;
  class PickerActionSheet extends l.StatefulComponent { ... }
  <proto:PickerActionSheet>.onCreate = function <atom:0>;
  <proto:PickerActionSheet>.onRender = function <atom:0>;
  <proto:PickerActionSheet>.calculateTargetHeight = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PickerActionSheet>;
  PickerActionSheet = function <atom:0>;
  // close_loc <class_fields_init>
  PickerActionSheet#1 = function <atom:0>;
  exports.PickerActionSheet = PickerActionSheet#1;
  if (!(s.Device.isIOS())) goto L_301;
  goto L_302;
  // [栈深重同步 2 -> 1]
  p = {container: undefined, content: new c.Style({backgroundColor: g.SemanticColor.Background.SURFACE, borderRadius: "24 24 0 0"}), title: new c.Style({font: u.TextStyleFont.CAPTION, color: g.SemanticColor.Text.SECONDARY, margin: v.Spacing.MD, textAlign: "center"}), backgroundFill: new c.Style({backgroundColor: g.SemanticColor.Background.SURFACE, flexGrow: 1, limitToViewport: false})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/pickers/PickerActionSheet
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
