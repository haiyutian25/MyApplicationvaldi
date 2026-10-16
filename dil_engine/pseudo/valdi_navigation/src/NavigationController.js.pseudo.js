// fn a  args=1 vars=3 closure=0 cpool=0 bc=585B file=valdi_navigation/src/NavigationController
// args: t
// locals: e, i
function {
  let i;
  let e;
  if (!((1 !== t.presentationStyle))) goto L_88;
  if (!((2 !== t.presentationStyle))) goto L_88;
  if (!((undefined !== t.bottomSheetOptions))) goto L_87;
  throw new Error("bottomSheetOptions requires presentationStyle BottomSheet or AdaptiveSheet");
  return;
  if (!((t.bottomSheetOptions == null))) goto L_b2;
  t.bottomSheetOptions;
  goto L_d3;
  if (!((undefined.detents == null))) goto L_dc;
  undefined.detents;
  e = [0];
  if (!((0 === e.length))) goto L_f4;
  throw new Error("bottomSheetOptions.detents must not be empty");
  if (!((new Set(e).size !== e.length))) goto L_137;
  throw new Error("bottomSheetOptions.detents must not contain duplicates");
  if (!((e.length > 1))) goto L_178;
  if (!(e.includes(0))) goto L_178;
  throw new Error("bottomSheetOptions.detents must not combine Content with other detents");
  if (!((t.bottomSheetOptions == null))) goto L_1a2;
  t.bottomSheetOptions;
  goto L_1c3;
  if (!((undefined.initialDetent == null))) goto L_1cd;
  undefined.initialDetent;
  i = e[0];
  if (!(!e.includes(i))) goto L_20a;
  throw new Error("bottomSheetOptions.initialDetent must be included in detents");
  null;
  t.bottomSheetOptions;
  // append([], 0, e)
  e;
  return {detents: [], initialDetent: i};
}

// fn s  args=1 vars=1 closure=0 cpool=0 bc=53B file=valdi_navigation/src/NavigationController
// args: t
function {
  if (!(!t.componentPath)) goto L_34;
  throw new Error("Attempting to navigate with a Component that has not been decorated with @NavigationPage");
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=53B file=valdi_navigation/src/NavigationController
// locals: t
// closure: this
function {
  let t;
  for (const t of this.backButtonObservers) {
    t();
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=65B file=valdi_navigation/src/NavigationController
// args: t
// locals: e
// closure: this
function {
  this.latestVisibility = t;
  let e;
  for (const e of this.pageVisibilityObservers) {
    e(t);
  }
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=2 bc=150B file=valdi_navigation/src/NavigationController
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.navigator = t;
  this.disableDismissalCount = 0;
  this.backButtonObservers = [];
  this.registeredNavigatorBackButtonObserver = false;
  this.onBackButtonPressed = function <atom:0>;
  this.onPageVisibilityChange = function <atom:0>;
  this.addedVisibilityObserver = false;
  this.onPausePopAfterDelay = [];
  this.pageVisibilityObservers = new Set();
  if (!(!t)) goto L_95;
  throw new Error("Attempting to create a NavigationController with a missing navigator");
  return;
}

// fn <atom:0>  args=4 vars=10 closure=0 cpool=0 bc=200B file=valdi_navigation/src/NavigationController
// args: t, e, i, a
// locals: t#1, e#1, i#1, a#1, s, this
function {
  this = this;
  let a#1;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  i#1 = i;
  if (!((a === undefined))) goto L_24;
  a;
  a = {animated: true};
  a#1 = {animated: true};
  let s;
  s = this.makePage(t, e, i, a);
  if (!((a.animated == null))) goto L_c4;
  a.animated;
  this.navigator.pushComponent(s, true);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=valdi_navigation/src/NavigationController
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = true;
  t#1 = true;
  this.navigator.pop(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=valdi_navigation/src/NavigationController
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = true;
  t#1 = true;
  this.navigator.popToSelf(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=valdi_navigation/src/NavigationController
// args: t
// locals: t#1, this
function {
  this = this;
  let t#1;
  if (!((t === undefined))) goto L_e;
  t;
  t = true;
  t#1 = true;
  this.navigator.popToRoot(t);
  return;
}

// fn <atom:0>  args=4 vars=10 closure=0 cpool=0 bc=200B file=valdi_navigation/src/NavigationController
// args: t, e, i, a
// locals: t#1, e#1, i#1, a#1, s, this
function {
  this = this;
  let a#1;
  let i#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  i#1 = i;
  if (!((a === undefined))) goto L_24;
  a;
  a = {animated: true};
  a#1 = {animated: true};
  let s;
  s = this.createPresentationPage(t, e, i, a);
  if (!((a.animated == null))) goto L_c4;
  a.animated;
  this.navigator.presentComponent(s, true);
  return;
}

// fn <atom:0>  args=4 vars=6 closure=1 cpool=0 bc=165B file=valdi_navigation/src/NavigationController
// args: t, e, i, s
// locals: o, this
// closure: a
function {
  this = this;
  let o;
  o = this.makePage(t, e, i, s);
  if (!((s.wrapInPlatformNavigationController == null))) goto L_5b;
  s.wrapInPlatformNavigationController;
  o.wrapInPlatformNavigationController = true;
  o.presentationStyle = s.presentationStyle;
  o.bottomSheetOptions = a(s);
  return o;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_navigation/src/NavigationController
// args: t
// locals: this
function {
  this = this;
  this.navigator.dismiss(t);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=277B file=valdi_navigation/src/NavigationController
// args: e, a
// locals: t, this
// closure: t, i
function {
  this = this;
  if (!(t.isVersionAtLeast(19))) goto L_114;
  let t;
  t = i.validatePlatformNavigationBar(e);
  if (!((undefined !== t))) goto L_6c;
  throw new Error(t);
  if (!((this.navigator.setPlatformNavigationActionObserver == null))) goto L_b8;
  this.navigator.setPlatformNavigationActionObserver;
  this.navigator;
  goto L_bc;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, a);
  if (!((this.navigator.setPlatformNavigationBar == null))) goto L_109;
  this.navigator.setPlatformNavigationBar;
  this.navigator;
  goto L_113;
  // [栈深重同步 1 -> 2]
  null;
  e;
  <?>.call(undefined, {});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=249B file=valdi_navigation/src/NavigationController
// locals: this
// closure: t
function {
  this = this;
  this.setPlatformNavigationSearchObserver(undefined);
  if (!(t.isVersionAtLeast(19))) goto L_f8;
  if (!((this.navigator.setPlatformNavigationBar == null))) goto L_a3;
  this.navigator.setPlatformNavigationBar;
  this.navigator;
  goto L_a7;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, undefined);
  if (!((this.navigator.setPlatformNavigationActionObserver == null))) goto L_f4;
  this.navigator.setPlatformNavigationActionObserver;
  this.navigator;
  goto L_f8;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=75B file=valdi_navigation/src/NavigationController
// locals: this
// closure: i
function {
  this = this;
  return i.supportsNavigationSearch(this.navigator);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=47B file=valdi_navigation/src/NavigationController
// args: t, a
// closure: this, i, e
function {
  if (!((this.searchObserverOwner === i))) goto L_2e;
  e(t, a);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=162B file=valdi_navigation/src/NavigationController
// args: e
// locals: i, this
// closure: t
function {
  this = this;
  let i;
  if (!((undefined === e))) goto L_d;
  goto L_e;
  // [栈深重同步 1 -> 0]
  i = {};
  this.searchObserverOwner = i;
  if (!(t.isVersionAtLeast(172))) goto L_a1;
  if (!((this.navigator.setPlatformNavigationSearchObserver == null))) goto L_94;
  this.navigator.setPlatformNavigationSearchObserver;
  this.navigator;
  goto L_a1;
  // [栈深重同步 1 -> 2]
  if (!((undefined === e))) goto L_9c;
  goto L_9e;
  // [栈深重同步 3 -> 2]
  return;
}

// fn <atom:0>  args=4 vars=9 closure=2 cpool=0 bc=415B file=valdi_navigation/src/NavigationController
// args: t, i, a, o
// locals: r, n, h, t#1, this
// closure: e, s
function {
  this = this;
  let h;
  let n;
  let r;
  r = t;
  n = undefined;
  h = undefined;
  if (!((this.navigator == null))) goto L_3d;
  this.navigator;
  goto L_5e;
  if (!(undefined.__shouldDisableMakeOpaque)) goto L_80;
  n = i;
  i;
  if (!((a == null))) goto L_6e;
  a;
  null;
  {};
  h = {pageNavigationOptions: o};
  {pageNavigationOptions: o};
  goto L_e9;
  let t#1;
  n = e.makePropertiesOpaque(i);
  e.makePropertiesOpaque(i);
  null;
  a;
  t#1 = {pageNavigationOptions: o};
  h = e.makePropertiesOpaque(t#1);
  e.makePropertiesOpaque(t#1);
  s(r);
  return {componentPath: r.componentPath, componentViewModel: n, componentContext: h, showPlatformNavigationBar: o.showPlatformNavigationBar, platformNavigationTitle: o.platformNavigationTitle, isPartiallyHiding: o.isPartiallyHiding};
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=160B file=valdi_navigation/src/NavigationController
// locals: t
// closure: this
function {
  let t;
  this.disableDismissalCount = (this.disableDismissalCount - 1);
  t = (0 === this.disableDismissalCount);
  this.navigator.forceDisableDismissalGesture(!t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=123B file=valdi_navigation/src/NavigationController
// locals: this
function {
  this = this;
  this.disableDismissalCount = (this.disableDismissalCount + 1);
  this.navigator.forceDisableDismissalGesture(true);
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=472B file=valdi_navigation/src/NavigationController
// locals: this
function {
  this = this;
  if (!(this.backButtonObservers.length)) goto L_114;
  if ((this.registeredNavigatorBackButtonObserver)) goto L_1d7;
  this.registeredNavigatorBackButtonObserver = true;
  if (!(this.navigator.setBackButtonObserver)) goto L_1d7;
  goto L_1d7;
  // [栈深重同步 1 -> 0]
  if (!(this.registeredNavigatorBackButtonObserver)) goto L_1d7;
  this.registeredNavigatorBackButtonObserver = false;
  if (!(this.navigator.setBackButtonObserver)) goto L_1d7;
  this.navigator.setBackButtonObserver(undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=197B file=valdi_navigation/src/NavigationController
// locals: e
// closure: this, t
function {
  let e;
  e = this.backButtonObservers.indexOf(t);
  if (!((e >= 0))) goto L_c4;
  this.backButtonObservers.splice(e, 1);
  this.updateNavigatorBackButtonObserverIfNeeded();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=115B file=valdi_navigation/src/NavigationController
// args: t
// locals: this
function {
  this = this;
  this.backButtonObservers.push(t);
  this.updateNavigatorBackButtonObserverIfNeeded();
  return function <atom:0>;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=305B file=valdi_navigation/src/NavigationController
// args: t
// locals: this
function {
  this = this;
  this.pageVisibilityObservers.add(t);
  if (!(this.addedVisibilityObserver)) goto L_bf;
  if (!((undefined !== this.latestVisibility))) goto L_130;
  goto L_130;
  // [栈深重同步 1 -> 0]
  if (!((this.navigator.setPageVisibilityObserver == null))) goto L_10b;
  this.navigator.setPageVisibilityObserver;
  this.navigator;
  goto L_130;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=valdi_navigation/src/NavigationController
// args: t
// locals: this
function {
  this = this;
  this.pageVisibilityObservers.delete(t);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=359B file=valdi_navigation/src/NavigationController
// locals: t, this
function {
  this = this;
  let t;
  t = undefined;
  if (!(this.onPausePopAfterDelay.length)) goto L_9b;
  t = this.onPausePopAfterDelay[(this.onPausePopAfterDelay.length - 1)].delayMs;
  this.onPausePopAfterDelay[(this.onPausePopAfterDelay.length - 1)].delayMs;
  if (!((t !== this.currentOnPausePopAfterDelay))) goto L_166;
  this.currentOnPausePopAfterDelay = t;
  if (!(this.navigator.setOnPausePopAfterDelay)) goto L_166;
  this.navigator.setOnPausePopAfterDelay(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=199B file=valdi_navigation/src/NavigationController
// locals: t
// closure: this, e
function {
  let t;
  t = this.onPausePopAfterDelay.indexOf(e);
  if (!((t >= 0))) goto L_c6;
  this.onPausePopAfterDelay.splice(t, 1);
  this.updateOnPausePopAfterDelay();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=128B file=valdi_navigation/src/NavigationController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  e = {delayMs: t};
  this.onPausePopAfterDelay.push(e);
  this.updateOnPausePopAfterDelay();
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=22 bc=302B file=valdi_navigation/src/NavigationController
// args: require, module, exports
// locals: t, e, i, a, s, NavigationController, <class_fields_init>, NavigationController#1
function {
  a = function a;
  s = function s;
  let NavigationController#1;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NavigationController = undefined;
  t = require("valdi_core/src/CompilerIntrinsics");
  e = require("foundation/src/makePropertiesOpaque");
  i = require("./PlatformNavigation");
  let NavigationController;
  let <class_fields_init>;
  class NavigationController extends undefined { ... }
  <proto:NavigationController>.push = function <atom:0>;
  <proto:NavigationController>.pop = function <atom:0>;
  <proto:NavigationController>.popToSelf = function <atom:0>;
  <proto:NavigationController>.popToRoot = function <atom:0>;
  <proto:NavigationController>.present = function <atom:0>;
  <proto:NavigationController>.createPresentationPage = function <atom:0>;
  <proto:NavigationController>.dismiss = function <atom:0>;
  <proto:NavigationController>.setPlatformNavigationBar = function <atom:0>;
  <proto:NavigationController>.clearPlatformNavigationBar = function <atom:0>;
  <proto:NavigationController>.supportsPlatformNavigationSearch = function <atom:0>;
  <proto:NavigationController>.setPlatformNavigationSearchObserver = function <atom:0>;
  <proto:NavigationController>.makePage = function <atom:0>;
  <proto:NavigationController>.disableDismissalGesture = function <atom:0>;
  <proto:NavigationController>.updateNavigatorBackButtonObserverIfNeeded = function <atom:0>;
  <proto:NavigationController>.registerBackButtonObserver = function <atom:0>;
  <proto:NavigationController>.addPageVisibilityObserver = function <atom:0>;
  <proto:NavigationController>.removePageVisibilityObserver = function <atom:0>;
  <proto:NavigationController>.updateOnPausePopAfterDelay = function <atom:0>;
  <proto:NavigationController>.registerOnPausePopAfterDelay = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NavigationController>;
  NavigationController = function <atom:0>;
  // close_loc <class_fields_init>
  NavigationController#1 = function <atom:0>;
  exports.NavigationController = NavigationController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/NavigationController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
