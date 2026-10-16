// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=131B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>, r, i
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target(e);
  if (!(<class_fields_init>)) goto L_22;
  <class_fields_init>.call(this);
  new new.target(e);
  this.component = new r.DILValdiComponentRenderer(i.SpeechSynthesizer, e, true);
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// locals: this
function {
  this = this;
  this.component.onPropsUpdated();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=187B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// args: t
// locals: n, o, e
// closure: r, e, i, this
function {
  let o;
  let n;
  n = r.subscopeWithValues({speech: t});
  o = e.renderStateWithDILAutoSpacing(i, undefined);
  let e;
  for (const e of this.children) {
    e.onRender(n, o);
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=3 cpool=1 bc=816B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// args: r, n
// locals: i, s, this
// closure: e, t, o
function {
  this = this;
  let s;
  let i;
  i = t.renderStateWithDILTheme(n, this.props.getPropertyValueAsString("theme", r));
  this.component.begin(r, n, this.getValdiComponentKey(r), this.name);
  if (!((this.props.getPropertyValueAsString("text", r) == null))) goto L_1a6;
  this.props.getPropertyValueAsString("text", r);
  this.component.setViewModelProperty("text", "");
  this.component.setViewModelProperty("theme", t.getDILRenderTheme(i));
  s = this.props.getPropertyValue("children", r);
  if (!((null == s))) goto L_2bd;
  goto L_2e4;
  // [栈深重同步 4 -> 3]
  this.component.setViewModelProperty("renderControls", o.createReusableCallback(function <atom:0>));
  this.component.end(n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=9B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// args: e
// closure: SpeechSynthesizerWidgetRenderer
function {
  return new SpeechSynthesizerWidgetRenderer(e);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=326B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// args: require, module, exports
// locals: e, t, r, n, o, i, SpeechSynthesizerWidgetRenderer, <class_fields_init>, SpeechSynthesizerWidgetRenderer#1
function {
  let SpeechSynthesizerWidgetRenderer#1;
  let i;
  let o;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SpeechSynthesizerWidgetFactory = undefined;
  e = require("dil_compiler/src/DILAutoSpacingRenderState");
  t = require("dil_compiler/src/DILThemeRenderState");
  r = require("dil_compiler/src/DILValdiComponentRenderer");
  n = require("dil_compiler/src/DILTypes");
  o = require("valdi_core/src/utils/Callback");
  i = require("./SpeechSynthesizer");
  let SpeechSynthesizerWidgetRenderer;
  let <class_fields_init>;
  class SpeechSynthesizerWidgetRenderer extends n.ADILWidgetRendererInternal { ... }
  <proto:SpeechSynthesizerWidgetRenderer>.onPropsChanged = function <atom:0>;
  <proto:SpeechSynthesizerWidgetRenderer>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SpeechSynthesizerWidgetRenderer>;
  SpeechSynthesizerWidgetRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  SpeechSynthesizerWidgetRenderer#1 = function <atom:0>;
  // append([], 0, i.SpeechSynthesizer.properties)
  [][i.SpeechSynthesizer.properties] = "children";
  ("children" ++);
  exports.SpeechSynthesizerWidgetFactory = {properties: [], create: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/SpeechSynthesizerWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
