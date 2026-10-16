// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=107B file=valdi_ui/src/components/TextInput
// args: e
// closure: this
function {
  this.viewModel.onChange(e.text);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=116B file=valdi_ui/src/components/TextInput
// args: e
// closure: this
function {
  if (!((this.viewModel.onSubmit == null))) goto L_4e;
  this.viewModel.onSubmit;
  this.viewModel;
  goto L_73;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=77B file=valdi_ui/src/components/TextInput
// locals: this, this.active_func, new.target, arguments
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
  this.handleChange = function <atom:0>;
  this.handleSubmit = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=1 bc=2019B file=valdi_ui/src/components/TextInput
// locals: r, this
// closure: s, e, t, i
function {
  this = this;
  let r;
  r = this.resolveStyles(s.resolveValdiUITheme());
  e.beginRender(t, undefined);
  if (!((true === this.viewModel.disabled))) goto L_f1;
  goto L_f2;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", r.container);
  e.renderNamedSlot("leading", this);
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  e.setAttributeString("autocapitalization", this.viewModel.autocapitalization);
  e.setAttributeString("autocorrection", this.viewModel.autocorrection);
  e.setAttribute("enabled", (true !== this.viewModel.disabled));
  if (!((true === this.viewModel.disabled))) goto L_4bb;
  goto L_4dd;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", this.handleChange);
  if (((true === this.viewModel.disabled))) goto L_599;
  if (!((undefined === this.viewModel.onSubmit))) goto L_59e;
  goto L_5c0;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onReturn", this.handleSubmit);
  e.setAttributeString("placeholder", this.viewModel.placeholder);
  e.setAttributeString("returnKeyText", this.viewModel.returnKeyText);
  e.setAttributeStyle("style", r.input);
  e.setAttributeString("value", this.viewModel.value);
  e.endRender();
  e.renderNamedSlot("trailing", this);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=750B file=valdi_ui/src/components/TextInput
// args: e
// locals: t, i, r, this
// closure: d, o
function {
  this = this;
  let r;
  let i;
  let t;
  t = this.viewModel.style;
  i = this.viewModel.inputStyle;
  if (!((this.cachedTheme === e))) goto L_155;
  if (!((this.cachedContainerOverride === t))) goto L_155;
  if (!((this.cachedInputOverride === i))) goto L_155;
  if (!((undefined !== this.cachedStyles))) goto L_155;
  return this.cachedStyles;
  r = d(e);
  this.cachedTheme = e;
  this.cachedContainerOverride = t;
  this.cachedInputOverride = i;
  if (!((undefined === t))) goto L_1ad;
  goto L_21c;
  // [栈深重同步 3 -> 2]
  if (!((undefined === i))) goto L_24e;
  goto L_2bd;
  // [栈深重同步 3 -> 2]
  this.cachedStyles = {container: o.Style.merge(r.container, t), input: o.Style.merge(r.input, i)};
  return this.cachedStyles;
}

// fn d  args=1 vars=2 closure=2 cpool=0 bc=1048B file=valdi_ui/src/components/TextInput
// args: e
// locals: t
// closure: n, o
function {
  let t;
  t = n.get(e);
  if (((undefined !== t))) goto L_413;
  t = {container: new o.Style({alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.controlRadius, borderWidth: 1, flexDirection: "row", gap: e.spacing.small, height: e.metrics.controlHeight, paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium, width: "100%"}), input: new o.Style({color: e.colors.text, flexGrow: 1, flexShrink: 1, font: e.typography.body, height: e.metrics.controlHeight, minWidth: 0, placeholderColor: e.colors.mutedText})};
  {container: new o.Style({alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.controlRadius, borderWidth: 1, flexDirection: "row", gap: e.spacing.small, height: e.metrics.controlHeight, paddingLeft: e.spacing.medium, paddingRight: e.spacing.medium, width: "100%"}), input: new o.Style({color: e.colors.text, flexGrow: 1, flexShrink: 1, font: e.typography.body, height: e.metrics.controlHeight, minWidth: 0, placeholderColor: e.colors.mutedText})};
  n.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=4 bc=378B file=valdi_ui/src/components/TextInput
// args: require, module, exports
// locals: e, t, i, r, o, s, TextInput, <class_fields_init>, TextInput#1, n, d
function {
  d = function d;
  let n;
  let TextInput#1;
  let s;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextInput = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "CvzK71UgiPnYQyH8");
  i = e.makeNodePrototype("textfield", ["accessibilityCategory", "input"], "57EJi-YBCCSrFTLu");
  r = require("valdi_core/src/Component");
  o = require("valdi_core/src/Style");
  s = require("valdi_ui_theme/src/ValdiUITheme");
  let TextInput;
  let <class_fields_init>;
  class TextInput extends r.Component { ... }
  <proto:TextInput>.onRender = function <atom:0>;
  <proto:TextInput>.resolveStyles = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextInput>;
  TextInput = function <atom:0>;
  // close_loc <class_fields_init>
  TextInput#1 = function <atom:0>;
  exports.TextInput = TextInput#1;
  n = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/TextInput
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
