// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=382B file=settings_text_editor/src/TextEditorScreen
// args: e
// closure: this
function {
  if (!((this.headerRef.single() == null))) goto L_9a;
  this.headerRef.single();
  goto L_be;
  this.inputRef.setAttribute("topScrollEdgeContainer", undefined.getNativeNode());
  if (!((e.height !== this.state.headerHeight))) goto L_17d;
  this.setState({headerHeight: e.height});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=235B file=settings_text_editor/src/TextEditorScreen
// closure: e, V, w, this
function {
  e.beginComponent(V.ActivityIndicator, w, undefined, undefined);
  e.setViewModelProperty("color", this.appearance.text);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=498B file=settings_text_editor/src/TextEditorScreen
// args: e
// locals: t
// closure: this, S
function {
  let t;
  if (!(this.viewModel.isSaving)) goto L_4b;
  return;
  t = S.truncateCharacters(e, this.viewModel.maximumLength, this.viewModel.countPolicy);
  if (!((t !== this.state.draft))) goto L_1f1;
  this.setState({draft: t});
  if (!((this.context == null))) goto L_1a9;
  this.context;
  goto L_1f1;
  undefined.callbacks.onDraftChanged(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=227B file=settings_text_editor/src/TextEditorScreen
// closure: this
function {
  if (!(this.canFinishEditing)) goto L_e2;
  if (!((this.context == null))) goto L_58;
  this.context;
  goto L_e2;
  undefined.callbacks.onEditingFinished(this.state.draft);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=4 bc=310B file=settings_text_editor/src/TextEditorScreen
// locals: this, this.active_func, new.target, arguments
// closure: e, V, w, S, <class_fields_init>, R
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
  this.inputRef = new R.ElementRef();
  this.headerRef = new R.ElementRef();
  this.state = {headerHeight: 0, draft: this.viewModel.value, consumedSuggestionIDs: []};
  this.handleHeaderLayout = function <atom:0>;
  this.renderSaving = function <atom:0>;
  this.updateDraft = function <atom:0>;
  this.finishEditing = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=237B file=settings_text_editor/src/TextEditorScreen
// locals: e, this
function {
  this = this;
  let e;
  e = this.state.draft.length;
  this.inputRef.setAttribute("selection", [e, e]);
  this.inputRef.setAttribute("focused", true);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=450B file=settings_text_editor/src/TextEditorScreen
// args: e
// locals: e#1, this
function {
  this = this;
  if (!((undefined !== e))) goto L_1c1;
  if (!((e.value !== this.viewModel.value))) goto L_1c1;
  let e#1;
  e#1 = (this.viewModel.value !== this.state.draft);
  if (!(e#1)) goto L_175;
  goto L_1b8;
  // [栈深重同步 4 -> 3]
  this.setState({draft: this.viewModel.value, consumedSuggestionIDs: this.state.consumedSuggestionIDs});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=settings_text_editor/src/TextEditorScreen
// closure: m
function {
  return m.resolveSettingsEditorAppearance();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=448B file=settings_text_editor/src/TextEditorScreen
// closure: e, o, this, p
function {
  e.beginRender(o, undefined);
  e.setAttributeRef(this.headerRef);
  if (!(p)) goto L_e9;
  goto L_ea;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", undefined);
  if (!(p)) goto L_140;
  goto L_141;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onLayout", undefined);
  this.renderInlineTitle();
  if (!(p)) goto L_197;
  this.renderDescription();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=1308B file=settings_text_editor/src/TextEditorScreen
// closure: e, d, L, this, S, a, l
function {
  e.beginRender(d, undefined);
  e.setAttributeString("accessibilityId", L);
  e.setAttributeStyle("style", this.appearance.bottomActions);
  e.beginComponent(S.CharacterCounter, a, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.characterCountAccessibilityLabel);
  e.setViewModelProperty("countPolicy", this.viewModel.countPolicy);
  e.setViewModelProperty("errorThreshold", this.viewModel.errorThreshold);
  e.setViewModelProperty("format", S.CharacterCounterFormat.RemainingAndMaximum);
  e.setViewModelProperty("maximumLength", this.viewModel.maximumLength);
  e.setViewModelProperty("value", this.state.draft);
  e.setViewModelProperty("visibilityThreshold", this.viewModel.visibilityThreshold);
  e.setViewModelProperty("warningThreshold", this.viewModel.warningThreshold);
  e.endComponent();
  if ((l)) goto L_4f3;
  this.renderFinishAction();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=18 cpool=2 bc=2885B file=settings_text_editor/src/TextEditorScreen
// closure: e, o, this, p, d, L, S, a, l, i, s, x, r, k, f, n, _, N
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", this.appearance.root);
  e.setAttribute("slowClipping", p);
  if ((l)) goto L_d6;
  function <atom:0>();
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", this.appearance.editorContent);
  if ((p)) goto L_19f;
  this.renderDescription();
  e.beginComponent(x.TextArea, r, undefined, undefined);
  e.setViewModelProperty("accessibilityId", k);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setViewModelProperty("background", this.appearance.background);
  e.setViewModelProperty("color", this.appearance.text);
  if (!(p)) goto L_3e4;
  goto L_3e5;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("contentInsetTop", undefined);
  if (!((undefined === this.viewModel.description))) goto L_49e;
  goto L_4e1;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("contentPadding", this.appearance.contentPaddingWithDescription);
  e.setViewModelProperty("countPolicy", this.viewModel.countPolicy);
  e.setViewModelProperty("fill", true);
  e.setViewModelProperty("disabled", this.viewModel.isSaving);
  e.setViewModelProperty("typography", this.appearance.typography);
  e.setViewModelProperty("inputRef", this.inputRef);
  e.setViewModelProperty("maxLength", this.viewModel.maximumLength);
  e.setViewModelProperty("onChange", this.updateDraft);
  e.setViewModelProperty("placeholder", this.viewModel.placeholder);
  e.setViewModelProperty("radius", this.appearance.radius);
  e.setViewModelProperty("size", this.appearance.inputSize);
  e.setViewModelProperty("value", this.state.draft);
  e.setViewModelProperty("variant", x.TextAreaVariant.Plain);
  e.endComponent();
  this.renderSuggestions();
  e.endRender();
  e.beginComponent(f.SafeArea, n, undefined, undefined);
  e.setViewModelProperty("accessibilityId", _);
  e.setViewModelProperty("edges", N);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=19 cpool=1 bc=519B file=settings_text_editor/src/TextEditorScreen
// locals: l, p, this
// closure: e, o, d, L, S, a, i, s, x, r, k, f, n, _, N, m, T, P, t
function {
  this = this;
  let p;
  let l;
  l = (m.resolveSettingsTheme().editorPresentation === m.SettingsEditorPresentation.Page);
  if (!(!l)) goto L_c2;
  p = T.supportsNativeTextViewScrollEdges();
  e.beginComponent(P.OAITheme, t, undefined, undefined);
  e.setViewModelProperty("fill", true);
  e.setViewModelProperty("mode", P.OAIThemeMode.System);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=815B file=settings_text_editor/src/TextEditorScreen
// locals: this
// closure: e, l, E, C, p
function {
  this = this;
  e.beginRender(l, undefined);
  e.setAttributeString("accessibilityId", E);
  e.setAttributeStyle("style", this.appearance.inlineTitle);
  e.beginComponent(C.Text, p, undefined, undefined);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.title);
  e.setViewModelProperty("color", this.appearance.text);
  e.setViewModelProperty("typography", this.appearance.titleTypography);
  e.setViewModelProperty("value", this.viewModel.title);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=676B file=settings_text_editor/src/TextEditorScreen
// locals: t, this
// closure: e, c, C, h
function {
  this = this;
  let t;
  t = this.viewModel.description;
  if (!((undefined !== t))) goto L_2a3;
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", this.appearance.description);
  e.beginComponent(C.Text, h, undefined, undefined);
  e.setViewModelProperty("size", this.appearance.descriptionSize);
  e.setViewModelProperty("tone", C.TextTone.Secondary);
  e.setViewModelProperty("value", t);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=139B file=settings_text_editor/src/TextEditorScreen
// args: e
// closure: this
function {
  return !this.state.consumedSuggestionIDs.includes(e.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=settings_text_editor/src/TextEditorScreen
// args: e
// closure: this
function {
  return this.renderSuggestion(e);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=2 bc=372B file=settings_text_editor/src/TextEditorScreen
// locals: t, this
// closure: B, e, u
function {
  this = this;
  let t;
  if (!((this.viewModel.suggestionActions == null))) goto L_51;
  this.viewModel.suggestionActions;
  t = B([]).filter(function <atom:0>);
  if (!((0 !== t.length))) goto L_173;
  e.beginRender(u, undefined);
  e.setAttributeStyle("style", this.appearance.suggestions);
  t.map(function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=settings_text_editor/src/TextEditorScreen
// closure: this, t
function {
  return this.applySuggestion(t);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=1 bc=1136B file=settings_text_editor/src/TextEditorScreen
// args: t
// locals: i, o, this
// closure: H, e, b, y, D
function {
  this = this;
  let o;
  let i;
  i = H(this.state.draft, t.insertedText);
  if ((this.viewModel.isSaving)) goto L_109;
  if (((true === t.disabled))) goto L_109;
  o = !this.isValid(i);
  e.beginComponent(b.Button, y, undefined, undefined);
  e.setViewModelProperty("accessibilityId", "".concat(D, t.id));
  if (!((t.accessibilityLabel == null))) goto L_244;
  t.accessibilityLabel;
  e.setViewModelProperty("accessibilityLabel", t.label);
  e.setViewModelProperty("disabled", o);
  e.setViewModelProperty("label", t.label);
  e.setViewModelProperty("onPress", function <atom:0>);
  e.setViewModelProperty("size", this.appearance.suggestionSize);
  e.setViewModelProperty("style", this.appearance.suggestionButton);
  e.setViewModelProperty("variant", b.ButtonVariant.Ghost);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=1398B file=settings_text_editor/src/TextEditorScreen
// locals: this
// closure: e, g, I, v, q, M
function {
  this = this;
  e.beginRender(g, undefined);
  e.setAttributeStyle("style", this.appearance.finishActionLayout);
  e.beginComponent(I.IconButton, v, undefined, undefined);
  e.setViewModelProperty("accessibilityId", q);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.saveAccessibilityLabel);
  e.setViewModelProperty("disabled", !this.canFinishEditing);
  e.setViewModelProperty("loading", this.viewModel.isSaving);
  if (!(this.viewModel.isSaving)) goto L_2e1;
  goto L_2e2;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("children", undefined);
  e.setViewModelProperty("imageStyle", this.appearance.finishActionIcon);
  e.setViewModelProperty("material", this.appearance.finishMaterial);
  e.setViewModelProperty("onPress", this.finishEditing);
  e.setViewModelProperty("style", this.appearance.finishAction);
  e.setViewModelProperty("src", M.default.checkCircleFilled);
  e.setViewModelProperty("tintImage", true);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=179B file=settings_text_editor/src/TextEditorScreen
// locals: this
function {
  this = this;
  if (!(!this.viewModel.isSaving)) goto L_b2;
  return this.isValid(this.state.draft);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=176B file=settings_text_editor/src/TextEditorScreen
// args: e
// locals: this
// closure: S
function {
  this = this;
  return (S.countCharacters(e, this.viewModel.countPolicy) <= this.viewModel.maximumLength);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=754B file=settings_text_editor/src/TextEditorScreen
// args: e
// locals: t, this
// closure: H
function {
  this = this;
  let t;
  if ((this.viewModel.isSaving)) goto L_104;
  if (((true === e.disabled))) goto L_104;
  if (!(this.state.consumedSuggestionIDs.includes(e.id))) goto L_107;
  return;
  t = H(this.state.draft, e.insertedText);
  if (!(this.isValid(t))) goto L_2f1;
  // append([], 0, this.state.consumedSuggestionIDs)
  [][this.state.consumedSuggestionIDs] = e.id;
  (e.id ++);
  this.setState({consumedSuggestionIDs: []});
  this.updateDraft(t);
  if (!((this.context == null))) goto L_28a;
  this.context;
  goto L_2f1;
  undefined.callbacks.onSuggestionSelected(e.id);
  return;
}

// fn H  args=2 vars=2 closure=0 cpool=4 bc=191B file=settings_text_editor/src/TextEditorScreen
// args: e, t
function {
  if (((0 === e.length))) goto L_68;
  if (((0 === t.length))) goto L_68;
  if ((new RegExp("\\s$").test(e))) goto L_68;
  if (!(new RegExp("^\\s").test(t))) goto L_92;
  return "".concat(e, t);
  return "".concat(e, " ", t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=155B file=settings_text_editor/src/TextEditorScreen
// args: e
// closure: t
function {
  if (!(!t.has(e.id))) goto L_9a;
  t.add(e.id);
  return true;
}

// fn B  args=1 vars=2 closure=0 cpool=1 bc=52B file=settings_text_editor/src/TextEditorScreen
// args: e
// locals: t
function {
  let t;
  t = new Set();
  return e.filter(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=46 closure=0 cpool=15 bc=1507B file=settings_text_editor/src/TextEditorScreen
// args: require, module, exports
// locals: e, t, i, o, s, r, n, d, a, l, p, c, h, u, y, g, v, w, m, M, P, b, V, S, f, C, x, A, R, T, I, k, E, L, _, q, D, N, TextEditorScreen, <class_fields_init>, TextEditorScreen#1, H, B
function {
  H = function H;
  B = function B;
  let TextEditorScreen#1;
  let N;
  let D;
  let q;
  let _;
  let L;
  let E;
  let k;
  let I;
  let T;
  let R;
  let A;
  let x;
  let C;
  let f;
  let S;
  let V;
  let b;
  let P;
  let M;
  let m;
  let w;
  let v;
  let g;
  let y;
  let u;
  let h;
  let c;
  let p;
  let l;
  let a;
  let d;
  let n;
  let r;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TextEditorScreen = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "QHwgtbBIjMRfC4yQ");
  i = e.makeNodePrototype("view", undefined, "52kl0w5UIi7aNJwH");
  o = e.makeNodePrototype("view", undefined, "hcXN9DigmcrRxKEG");
  s = e.makeNodePrototype("view", undefined, "n0I8oWHnB4HMxKtO");
  r = e.makeComponentPrototype(["textGravity", "top"], "Ng5Ic14q532wdDNH");
  n = e.makeComponentPrototype(undefined, "JPHs2RLCZW92Sc8r");
  d = e.makeNodePrototype("view", undefined, "8wR4SX12ezMxkkLc");
  a = e.makeComponentPrototype(undefined, "mBMJ__cG5o6CWfvn");
  l = e.makeNodePrototype("view", undefined, "hur7yiqe48zqOsT0");
  p = e.makeComponentPrototype(["accessibilityCategory", "header", "align", "center"], "qhqlIsre3Cna4AQ3");
  c = e.makeNodePrototype("view", undefined, "laxteRgn4iOJEJIP");
  h = e.makeComponentPrototype(undefined, "CQuicpIuGrGmrwXA");
  u = e.makeNodePrototype("view", undefined, "nvF9BuXnDz8TBBgX");
  y = e.makeComponentPrototype(undefined, "hFxOVTXiskrEbHUd");
  g = e.makeNodePrototype("view", undefined, "8VG2Huu9tZ6NV9A8");
  v = e.makeComponentPrototype(undefined, "Xrfckj_QfHlYPHwv");
  w = e.makeComponentPrototype(undefined, "UCXVn8idns6jpNk4");
  m = require("oai_ui/src/components/settings/SettingsTheme");
  M = require("dil_icon_assets/res");
  P = require("oai_core/src/OAITheme");
  b = require("oai_ui/src/components/Button");
  V = require("oai_ui/src/components/ActivityIndicator");
  S = require("oai_ui/src/components/CharacterCounter");
  f = require("oai_ui/src/components/SafeArea");
  C = require("oai_ui/src/components/Text");
  x = require("oai_ui/src/components/TextArea");
  A = require("valdi_core/src/Component");
  R = require("valdi_core/src/ElementRef");
  T = require("valdi_ui/src/Platform");
  I = require("valdi_ui/src/components/IconButton");
  k = "settings-text-editor.input";
  E = "settings-text-editor.inline-title";
  L = "settings-text-editor.bottom-actions";
  _ = "settings-text-editor.bottom-safe-area";
  q = "settings-text-editor.save";
  D = "settings-text-editor.suggestion.";
  N = [f.SafeAreaEdge.Bottom];
  let TextEditorScreen;
  let <class_fields_init>;
  class TextEditorScreen extends A.StatefulComponent { ... }
  <proto:TextEditorScreen>.onCreate = function <atom:0>;
  <proto:TextEditorScreen>.onViewModelUpdate = function <atom:0>;
  <proto:TextEditorScreen>.appearance = function <atom:0>;
  <proto:TextEditorScreen>.onRender = function <atom:0>;
  <proto:TextEditorScreen>.renderInlineTitle = function <atom:0>;
  <proto:TextEditorScreen>.renderDescription = function <atom:0>;
  <proto:TextEditorScreen>.renderSuggestions = function <atom:0>;
  <proto:TextEditorScreen>.renderSuggestion = function <atom:0>;
  <proto:TextEditorScreen>.renderFinishAction = function <atom:0>;
  <proto:TextEditorScreen>.canFinishEditing = function <atom:0>;
  <proto:TextEditorScreen>.isValid = function <atom:0>;
  <proto:TextEditorScreen>.applySuggestion = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TextEditorScreen>;
  TextEditorScreen = function <atom:0>;
  // close_loc <class_fields_init>
  TextEditorScreen#1 = function <atom:0>;
  exports.TextEditorScreen = TextEditorScreen#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=settings_text_editor/src/TextEditorScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
