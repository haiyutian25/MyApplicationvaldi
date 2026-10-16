// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=331B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// args: e
function {
  e.Root = "oai_integration_fixture.navigation.root";
  e.Unavailable = "oai_integration_fixture.navigation.unavailable";
  e.Push = "oai_integration_fixture.navigation.push";
  e.PushNext = "oai_integration_fixture.navigation.push_next";
  e.Pop = "oai_integration_fixture.navigation.pop";
  e.PopToSelf = "oai_integration_fixture.navigation.pop_to_self";
  e.PopToRoot = "oai_integration_fixture.navigation.pop_to_root";
  e.PresentFull = "oai_integration_fixture.navigation.present.full";
  e.PresentPartial = "oai_integration_fixture.navigation.present.partial";
  e.PresentUnwrapped = "oai_integration_fixture.navigation.present.unwrapped";
  e.FullModal = "oai_integration_fixture.navigation.modal.full";
  e.PartialModal = "oai_integration_fixture.navigation.modal.partial";
  e.UnwrappedModal = "oai_integration_fixture.navigation.modal.unwrapped";
  e.PageScroll = "oai_integration_fixture.navigation.page.scroll";
  e.Dismiss = "oai_integration_fixture.navigation.dismiss";
  e.DisableDismissalGesture = "oai_integration_fixture.navigation.dismissal.disable";
  e.EnableDismissalGesture = "oai_integration_fixture.navigation.dismissal.enable";
  e.DismissalGestureStatus = "oai_integration_fixture.navigation.dismissal.status";
  e.RegisterBackObserver = "oai_integration_fixture.navigation.back_observer.register";
  e.UnregisterBackObserver = "oai_integration_fixture.navigation.back_observer.unregister";
  e.BackObserverStatus = "oai_integration_fixture.navigation.back_observer.status";
  e.VisibilityStatus = "oai_integration_fixture.navigation.visibility.status";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// args: e
function {
  e.Pushed = 0;
  e[0] = "Pushed";
  e.FullModal = 1;
  e[1] = "FullModal";
  e.PartialModal = 2;
  e[2] = "PartialModal";
  e.UnwrappedModal = 3;
  e[3] = "UnwrappedModal";
  e.ModalPushed = 4;
  e[4] = "ModalPushed";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=240B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: e
// closure: this, R, q, U
function {
  let e;
  e = this.viewModel.navigator;
  if (!((undefined !== e))) goto L_ef;
  new R.NavigationController(e).push(q, {depth: 1, kind: U.Pushed}, {}, {animated: true, platformNavigationTitle: "Navigation child 1", showPlatformNavigationBar: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this, U
function {
  this.presentModal({kind: U.FullModal, isPartiallyHiding: false, wrapsInNavigationStack: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this, U
function {
  this.presentModal({kind: U.PartialModal, isPartiallyHiding: true, wrapsInNavigationStack: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this, U
function {
  this.presentModal({kind: U.UnwrappedModal, isPartiallyHiding: false, wrapsInNavigationStack: false});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=4 bc=105B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this, this.active_func, new.target, arguments
// closure: R, q, U, <class_fields_init>
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
  this.push = function <atom:0>;
  this.presentFullModal = function <atom:0>;
  this.presentPartialModal = function <atom:0>;
  this.presentUnwrappedModal = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=0 bc=2405B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: t, o, G, z, n, f, s, K, N, a, r, l, d
function {
  this = this;
  if (!((undefined === this.viewModel.navigator))) goto L_24d;
  t.beginRender(o, undefined);
  t.setAttributeString("accessibilityId", G.Unavailable);
  t.beginComponent(z.Text, n, undefined, undefined);
  t.setViewModelProperty("size", f.OAITextSize.BodySmall);
  t.setViewModelProperty("tone", z.TextTone.Secondary);
  t.endComponent();
  t.endRender();
  return;
  t.beginRender(s, undefined);
  t.setAttributeString("accessibilityId", G.Root);
  t.setAttributeStyle("style", K.actions);
  t.beginComponent(N.Button, a, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.Push);
  t.setViewModelProperty("onPress", this.push);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, r, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PresentFull);
  t.setViewModelProperty("onPress", this.presentFullModal);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, l, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PresentPartial);
  t.setViewModelProperty("onPress", this.presentPartialModal);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, d, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PresentUnwrapped);
  t.setViewModelProperty("onPress", this.presentUnwrappedModal);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=350B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// args: e
// locals: i, this
// closure: R, q
function {
  this = this;
  let i;
  i = this.viewModel.navigator;
  if (!((undefined !== i))) goto L_15d;
  new R.NavigationController(i).present(q, {depth: 0, kind: e.kind}, {}, {animated: true, isPartiallyHiding: e.isPartiallyHiding, platformNavigationTitle: "Navigation modal", showPlatformNavigationBar: e.wrapsInNavigationStack, wrapInPlatformNavigationController: e.wrapsInNavigationStack});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=411B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: i, t
// closure: this, U, e
function {
  let t;
  let i;
  i = (this.viewModel.depth + 1);
  if (!((this.viewModel.kind === U.Pushed))) goto L_dc;
  goto L_fe;
  // [栈深重同步 1 -> 0]
  t = U.ModalPushed;
  this.navigationController.push(e, {depth: i, kind: t}, {}, {animated: true, platformNavigationTitle: "Navigation child ".concat(i), showPlatformNavigationBar: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  this.navigationController.pop(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  this.navigationController.popToSelf(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  this.navigationController.popToRoot(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  this.navigationController.dismiss(true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=177B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  if (!((undefined === this.enableDismissalGesture))) goto L_b0;
  this.enableDismissalGesture = this.navigationController.disableDismissalGesture();
  this.setState({isDismissalGestureDisabled: true});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=115B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: e
// closure: this
function {
  let e;
  e = this.enableDismissalGesture;
  if (!((undefined !== e))) goto L_72;
  this.enableDismissalGesture = undefined;
  e();
  this.setState({isDismissalGestureDisabled: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=164B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  if (!((undefined === this.unregisterBackObserver))) goto L_a3;
  this.unregisterBackObserver = this.navigationController.registerBackButtonObserver(this.handleBackButton);
  this.navigationController.registerBackButtonObserver(this.handleBackButton);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=67B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: e
// closure: this
function {
  let e;
  e = this.unregisterBackObserver;
  if (!((undefined !== e))) goto L_42;
  this.unregisterBackObserver = undefined;
  e();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=117B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: this
function {
  this.setState({backButtonPressCount: (this.state.backButtonPressCount + 1)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// args: e
// closure: this
function {
  this.setState({visibility: e});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=11 bc=356B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this, this.active_func, new.target, arguments
// closure: U, e, <class_fields_init>, R
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
  this.state = {backButtonPressCount: 0, isDismissalGestureDisabled: false, visibility: undefined};
  this.navigationController = new R.NavigationController(this.context.navigator);
  this.pushNext = function <atom:0>;
  this.pop = function <atom:0>;
  this.popToSelf = function <atom:0>;
  this.popToRoot = function <atom:0>;
  this.dismiss = function <atom:0>;
  this.disableDismissalGesture = function <atom:0>;
  this.restoreDismissalGesture = function <atom:0>;
  this.registerBackButtonObserver = function <atom:0>;
  this.removeBackButtonObserver = function <atom:0>;
  this.handleBackButton = function <atom:0>;
  this.handleVisibility = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=107B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
function {
  this = this;
  this.navigationController.addPageVisibilityObserver(this.handleVisibility);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=201B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
function {
  this = this;
  this.navigationController.removePageVisibilityObserver(this.handleVisibility);
  if (!((this.unregisterBackObserver == null))) goto L_96;
  this.unregisterBackObserver;
  this;
  goto L_99;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.enableDismissalGesture == null))) goto L_c5;
  this.enableDismissalGesture;
  this;
  goto L_c8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=0 bc=2368B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// closure: t, v, this, K, u, G, g, z, m, f, P, c, b, h, y
function {
  t.beginRender(v, undefined);
  t.setAttributeString("accessibilityId", this.pageAccessibilityId());
  t.setAttributeStyle("style", K.page);
  t.beginRender(u, undefined);
  t.setAttributeString("accessibilityId", G.PageScroll);
  t.setAttributeStyle("style", K.pageScroll);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", K.pageContent);
  t.beginComponent(z.Text, m, undefined, undefined);
  t.setViewModelProperty("size", f.OAITextSize.TitleSmall);
  t.setViewModelProperty("value", this.pageTitle());
  t.endComponent();
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", K.actions);
  this.renderStackActions();
  this.renderModalActions();
  this.renderBackObserverActions();
  t.endRender();
  this.renderModalStatus();
  t.beginRender(c, undefined);
  t.setAttributeString("accessibilityId", G.BackObserverStatus);
  t.beginComponent(z.Text, b, undefined, undefined);
  t.setViewModelProperty("size", f.OAITextSize.BodySmall);
  t.setViewModelProperty("value", "back:".concat(this.state.backButtonPressCount));
  t.endComponent();
  t.endRender();
  t.beginRender(h, undefined);
  t.setAttributeString("accessibilityId", G.VisibilityStatus);
  t.beginComponent(z.Text, y, undefined, undefined);
  t.setViewModelProperty("size", f.OAITextSize.BodySmall);
  t.setViewModelProperty("value", "visibility:".concat(this.visibilityLabel()));
  t.endComponent();
  t.endRender();
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=16 cpool=1 bc=279B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: t, v, K, u, G, g, z, m, f, P, c, b, h, y, B, p
function {
  this = this;
  t.beginComponent(B.OAITheme, p, undefined, undefined);
  t.setViewModelProperty("mode", B.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1691B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: U, t, N, w, G, f, C, M, S
function {
  this = this;
  if (!((this.viewModel.kind !== U.UnwrappedModal))) goto L_69a;
  t.beginComponent(N.Button, w, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PushNext);
  t.setViewModelProperty("onPress", this.pushNext);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, C, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.Pop);
  t.setViewModelProperty("onPress", this.pop);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, M, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PopToSelf);
  t.setViewModelProperty("onPress", this.popToSelf);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, S, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.PopToRoot);
  t.setViewModelProperty("onPress", this.popToRoot);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=0 bc=1296B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: U, t, N, k, G, f, I, x
function {
  this = this;
  if (!((this.viewModel.kind !== U.Pushed))) goto L_50f;
  t.beginComponent(N.Button, k, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.Dismiss);
  t.setViewModelProperty("onPress", this.dismiss);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, I, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.DisableDismissalGesture);
  t.setViewModelProperty("onPress", this.disableDismissalGesture);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, x, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.EnableDismissalGesture);
  t.setViewModelProperty("onPress", this.restoreDismissalGesture);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=788B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: t, N, _, G, f, O
function {
  this = this;
  t.beginComponent(N.Button, _, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.RegisterBackObserver);
  t.setViewModelProperty("onPress", this.registerBackButtonObserver);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  t.beginComponent(N.Button, O, undefined, undefined);
  t.setViewModelProperty("accessibilityId", G.UnregisterBackObserver);
  t.setViewModelProperty("onPress", this.removeBackButtonObserver);
  t.setViewModelProperty("size", f.OAIControlSize.Sm);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=635B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: U, t, V, G, z, A, f
function {
  this = this;
  if (!((this.viewModel.kind !== U.Pushed))) goto L_27a;
  t.beginRender(V, undefined);
  t.setAttributeString("accessibilityId", G.DismissalGestureStatus);
  t.beginComponent(z.Text, A, undefined, undefined);
  t.setViewModelProperty("size", f.OAITextSize.BodySmall);
  if (!(this.state.isDismissalGestureDisabled)) goto L_222;
  goto L_227;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", "dismissal:enabled");
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=473B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: U, G
function {
  this = this;
  if (!((this.viewModel.kind === U.FullModal))) goto L_8e;
  return G.FullModal;
  if (!((this.viewModel.kind === U.PartialModal))) goto L_d7;
  return G.PartialModal;
  if (!((this.viewModel.kind === U.UnwrappedModal))) goto L_120;
  return G.UnwrappedModal;
  if (((this.viewModel.kind === U.Pushed))) goto L_16c;
  if (!((this.viewModel.kind === U.ModalPushed))) goto L_1d8;
  return "oai_integration_fixture.navigation.page.".concat(this.viewModel.depth);   // tail call
  this.viewModel.kind;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=327B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
// closure: U
function {
  this = this;
  if (((this.viewModel.kind === U.Pushed))) goto L_d2;
  if (!((this.viewModel.kind === U.ModalPushed))) goto L_141;
  return "Native navigation page ".concat(this.viewModel.depth);
  return "Native navigation modal";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=102B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: this
function {
  this = this;
  if (!((this.state.visibility === 1))) goto L_50;
  return "visible";
  if (!((this.state.visibility === 0))) goto L_5b;
  return "hidden";
  if (!((this.state.visibility === undefined))) goto L_65;
  return "unknown";
  this.state.visibility;
  return;
}

// fn <atom:0>  args=3 vars=51 closure=0 cpool=16 bc=2850B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// args: require, module, exports
// locals: e, i, t, o, n, s, a, r, l, d, p, v, u, g, m, P, c, b, h, y, w, C, M, S, k, I, x, _, O, V, A, B, f, N, z, T, D, R, F, G, U, OAINavigationFixture, <class_fields_init>, OAINavigationFixture#1, q, OAINavigationFixturePage, <class_fields_init>#1, K
function {
  let K;
  let q;
  let OAINavigationFixture#1;
  let F;
  let R;
  let D;
  let T;
  let z;
  let N;
  let f;
  let B;
  let A;
  let V;
  let O;
  let _;
  let x;
  let I;
  let k;
  let S;
  let M;
  let C;
  let w;
  let y;
  let h;
  let b;
  let c;
  let P;
  let m;
  let g;
  let u;
  let v;
  let p;
  let d;
  let l;
  let r;
  let a;
  let s;
  let n;
  let o;
  let t;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAINavigationFixtureAccessibilityId = undefined;
  exports.OAINavigationFixturePageKind = undefined;
  exports.OAINavigationFixture = undefined;
  exports.OAINavigationFixturePage = undefined;
  i = require("tslib");
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeNodePrototype("view", undefined, "CeFRSiBPYEO9Imhi");
  n = t.makeComponentPrototype(["value", "Native navigator unavailable"], "9Kdz4dZhPScr2mCt");
  s = t.makeNodePrototype("view", undefined, "V1-CxwxByx9Kogtv");
  a = t.makeComponentPrototype(["label", "Push child"], "_yYaudpX1QZC3_4v");
  r = t.makeComponentPrototype(["label", "Present full modal"], "ekkqKyLxWfwGmqft");
  l = t.makeComponentPrototype(["label", "Present partial modal"], "snALSVyjcFIqi4cA");
  d = t.makeComponentPrototype(["label", "Present modal without navigation"], "dzA1KHjuFIR1nqvS");
  p = t.makeComponentPrototype(undefined, "aai8WLyqIv21zASb");
  v = t.makeNodePrototype("view", undefined, "Jbk7IA6EI6YBtpiT");
  u = t.makeNodePrototype("scroll", undefined, "tdJQEfjL8CbZ2RhG");
  g = t.makeNodePrototype("view", undefined, "CIVluQdMtynFOPnu");
  m = t.makeComponentPrototype(undefined, "fcyMG7xcVHZhWa4W");
  P = t.makeNodePrototype("view", undefined, "acPLFa63l8O7RjsN");
  c = t.makeNodePrototype("view", undefined, "sKwgjXMZrLG3YKTd");
  b = t.makeComponentPrototype(undefined, "Xq-BBXZhiiJHVKKt");
  h = t.makeNodePrototype("view", undefined, "1Zs4BPC15ZRBLY9J");
  y = t.makeComponentPrototype(undefined, "VsNlVj_a3vc47FIe");
  w = t.makeComponentPrototype(["label", "Push next"], "g6b0C0BTNpEODH4w");
  C = t.makeComponentPrototype(["label", "Pop page"], "If5aLkBMjhdVko3C");
  M = t.makeComponentPrototype(["label", "Pop to this page"], "I5eJkPjNl-zvG94L");
  S = t.makeComponentPrototype(["label", "Pop to root"], "smC9kVO9u6FmfFcw");
  k = t.makeComponentPrototype(["label", "Dismiss modal"], "HboBwJmWISGv7WPl");
  I = t.makeComponentPrototype(["label", "Disable dismissal gesture"], "Szmt5tZsid17HKI_");
  x = t.makeComponentPrototype(["label", "Enable dismissal gesture"], "jv4k5Do72Hh5FuZe");
  _ = t.makeComponentPrototype(["label", "Register back observer"], "3KSScmQoT4KJgnrh");
  O = t.makeComponentPrototype(["label", "Unregister back observer"], "atwKQgiYf0rv389m");
  V = t.makeNodePrototype("view", undefined, "PG4bOKrWxORdvcCf");
  A = t.makeComponentPrototype(undefined, "BiHQIcM8mLSo7SST");
  B = require("oai_core/src/OAITheme");
  f = require("oai_core/src/OAITokens");
  N = require("oai_ui/src/components/Button");
  z = require("oai_ui/src/components/Text");
  T = require("valdi_core/src/Component");
  D = require("valdi_core/src/Style");
  R = require("valdi_navigation/src/NavigationController");
  F = require("valdi_navigation/src/NavigationPage");
  if ((G)) goto L_766;
  G = {};
  exports.OAINavigationFixtureAccessibilityId = {};
  !function <atom:0>({});
  if ((U)) goto L_77f;
  U = {};
  exports.OAINavigationFixturePageKind = {};
  function <atom:0>({});
  let OAINavigationFixture;
  let <class_fields_init>;
  class OAINavigationFixture extends T.Component { ... }
  <proto:OAINavigationFixture>.onRender = function <atom:0>;
  <proto:OAINavigationFixture>.presentModal = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAINavigationFixture>;
  OAINavigationFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAINavigationFixture#1 = function <atom:0>;
  exports.OAINavigationFixture = OAINavigationFixture#1;
  let OAINavigationFixturePage;
  let <class_fields_init>#1;
  class OAINavigationFixturePage extends T.StatefulComponent { ... }
  <proto:OAINavigationFixturePage>.onCreate = function <atom:0>;
  <proto:OAINavigationFixturePage>.onDestroy = function <atom:0>;
  <proto:OAINavigationFixturePage>.onRender = function <atom:0>;
  <proto:OAINavigationFixturePage>.renderStackActions = function <atom:0>;
  <proto:OAINavigationFixturePage>.renderModalActions = function <atom:0>;
  <proto:OAINavigationFixturePage>.renderBackObserverActions = function <atom:0>;
  <proto:OAINavigationFixturePage>.renderModalStatus = function <atom:0>;
  <proto:OAINavigationFixturePage>.pageAccessibilityId = function <atom:0>;
  <proto:OAINavigationFixturePage>.pageTitle = function <atom:0>;
  <proto:OAINavigationFixturePage>.visibilityLabel = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OAINavigationFixturePage>;
  OAINavigationFixturePage = function <atom:0>;
  // close_loc <class_fields_init>#1
  e = function <atom:0>;
  q = function <atom:0>;
  exports.OAINavigationFixturePage = q;
  e = i.__decorate([F.NavigationPage(module)], q);
  q = i.__decorate([F.NavigationPage(module)], q);
  exports.OAINavigationFixturePage = i.__decorate([F.NavigationPage(module)], q);
  K = {actions: new D.Style({alignItems: "flex-start", flexDirection: "column", gap: f.OAISpacing.One, width: "100%"}), page: new D.Style({backgroundColor: f.OAIColor.BgPrimary, flexDirection: "column", height: "100%", width: "100%"}), pageContent: new D.Style({flexDirection: "column", gap: f.OAISpacing.One, padding: f.OAISpacing.Two, width: "100%"}), pageScroll: new D.Style({flexGrow: 1, flexShrink: 1, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAINavigationFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
