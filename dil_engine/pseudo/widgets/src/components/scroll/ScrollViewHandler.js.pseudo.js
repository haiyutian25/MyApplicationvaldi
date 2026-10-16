// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=75B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listenersMainThread = [];
  this.listenersJsThread = [];
  this.handler = undefined;
  this.mode = 0;
  this.applier = e;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=150B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
// locals: this
function {
  this = this;
  if (!(t)) goto L_4e;
  goto L_95;
  // [栈深重同步 1 -> 0]
  this.listenersJsThread.push(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=320B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: t, n, this
function {
  this = this;
  let n;
  let t;
  t = this.listenersMainThread.indexOf(e);
  if (!((t >= 0))) goto L_a3;
  this.listenersMainThread.splice(t, 1);
  n = this.listenersJsThread.indexOf(e);
  if (!((n >= 0))) goto L_13f;
  this.listenersJsThread.splice(n, 1);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  return (this.mode !== this.expectedMode());
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=73B file=widgets/src/components/scroll/ScrollViewHandler
// closure: this, e
function {
  this.notifyListeners(e, this.listenersJsThread);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=153B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// closure: this, t
function {
  if (!((this.listenersJsThread.length > 0))) goto L_50;
  t.setTimeoutInterruptible(function <atom:0>);
  return this.notifyListeners(e, this.listenersMainThread);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=145B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// closure: this
function {
  this.notifyListeners(e, this.listenersMainThread);
  return this.notifyListeners(e, this.listenersJsThread);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=285B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
// closure: t, n
function {
  this = this;
  if (!(!this.needUpdate())) goto L_4d;
  return this.handler;
  this.mode = this.expectedMode();
  if (!((this.mode === 2))) goto L_d6;
  this.handler = n.makeMainThreadCallback(function <atom:0>);
  goto L_f9;
  if (!((this.mode === 1))) goto L_e9;
  this.handler = function <atom:0>;
  goto L_f9;
  if (!((this.mode === 0))) goto L_f9;
  this.handler = undefined;
  this.mode;
  return this.handler;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=86B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.listenersMainThread.length > 0))) goto L_2b;
  return 2;
  if (!((this.listenersJsThread.length > 0))) goto L_54;
  return 1;
  return 0;
}

// fn <atom:0>  args=2 vars=6 closure=1 cpool=0 bc=183B file=widgets/src/components/scroll/ScrollViewHandler
// args: t, n
// locals: i, l, n#1, this
// closure: e
function {
  this = this;
  let i;
  i = undefined;
  let l;
  for (const l of n) {
    let n#1;
    n#1 = this.applier(l, t);
    if (!(n#1)) goto L_a9;
    if (!(i)) goto L_a1;
    if (!(e.isLoggingEnabled)) goto L_a1;
    console.error("Multiple listeners returned a result.");
    i = n#1;
    n#1;
  }
  return i;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=217B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: t
// closure: this
function {
  this.contentWidth = e.width;
  this.contentHeight = e.height;
  let t;
  for (const t of this.listeners) {
    if (!(t.onContentSizeChange)) goto L_d1;
    t.onContentSizeChange(e);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=139B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listeners = [];
  this.contentWidth = 0;
  this.contentHeight = 0;
  this.onContentSizeChange = function <atom:0>;
  this.setAttribute("onContentSizeChange", this.onContentSizeChange);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=92B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2c;
  this.element;
  goto L_55;
  if (!((undefined.getAttribute("circularRatio") == null))) goto L_5b;
  undefined.getAttribute("circularRatio");
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2c;
  this.element;
  goto L_55;
  if (!((undefined.getAttribute("horizontal") == null))) goto L_5c;
  undefined.getAttribute("horizontal");
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=92B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2c;
  this.element;
  goto L_55;
  if (!((undefined.getAttribute("contentOffsetX") == null))) goto L_5b;
  undefined.getAttribute("contentOffsetX");
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=92B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2c;
  this.element;
  goto L_55;
  if (!((undefined.getAttribute("contentOffsetY") == null))) goto L_5b;
  undefined.getAttribute("contentOffsetY");
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2c;
  this.element;
  goto L_55;
  if (!((undefined.getAttribute("contentOffsetAnimated") == null))) goto L_5c;
  undefined.getAttribute("contentOffsetAnimated");
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  return this.element;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.onLayoutCallback == null))) goto L_2b;
  this.onLayoutCallback;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getHandler();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.onScrollCallback == null))) goto L_2b;
  this.onScrollCallback;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.getHandler();
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=98B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// closure: t, this
function {
  t.callback = e;
  if (!((this.element == null))) goto L_37;
  this.element;
  goto L_61;
  undefined.setAttribute("onScroll", e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=129B file=widgets/src/components/scroll/ScrollViewHandler
// closure: this
function {
  this.mainThreadScrollBinding = undefined;
  if (!((this.element == null))) goto L_35;
  this.element;
  goto L_80;
  undefined.setAttribute("onScroll", this.onScroll);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=2 bc=111B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((undefined !== this.mainThreadScrollBinding))) goto L_3a;
  throw new Error("Scroll view already has a main-thread scroll binding");
  t = {callback: undefined, listenersChanged: e};
  this.mainThreadScrollBinding = t;
  return {update: function <atom:0>, unsubscribe: function <atom:0>};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.element == null))) goto L_2b;
  this.element;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.frame;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=44B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  this.scrollTo(0, 0, false);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=59B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t, n
// locals: this
function {
  this = this;
  this.setAttributes({contentOffsetX: e, contentOffsetY: t, contentOffsetAnimated: n});
  return;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=0 bc=346B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t, n
// locals: l, r, a, this
// closure: i
function {
  this = this;
  let a;
  let r;
  let l;
  l = this.scrollViewFrame;
  if (!((l == null))) goto L_84;
  l;
  goto L_a5;
  if (!((undefined.width == null))) goto L_ab;
  undefined.width;
  r = i.clamp(e, 0, (this.getContentWidth() - 0));
  if (!((l == null))) goto L_104;
  l;
  goto L_125;
  if (!((undefined.height == null))) goto L_12b;
  undefined.height;
  a = i.clamp(t, 0, (this.getContentHeight() - 0));
  return this.scrollTo(r, a, n);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=203B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
// locals: this
function {
  this = this;
  if (!(this.element)) goto L_70;
  goto L_ca;
  // [栈深重同步 1 -> 0]
  if ((this.deferredAttributes)) goto L_a2;
  this.deferredAttributes = {};
  {};
  this.deferredAttributes[e] = t;
  t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=238B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  if (!(this.element)) goto L_6f;
  goto L_ed;
  // [栈深重同步 1 -> 0]
  if (!(this.deferredAttributes)) goto L_e1;
  goto L_ed;
  // [栈深重同步 1 -> 0]
  this.deferredAttributes = e;
  e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  this.setAttribute("translationX", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  this.setAttribute("translationY", e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  return this.contentWidth;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  return this.contentHeight;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  this.setAttribute("staticContentWidth", e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=46B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  this.setAttribute("staticContentHeight", e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=982B file=widgets/src/components/scroll/ScrollViewHandler
// closure: e, this
function {
  if (!(e.onLayout)) goto L_75;
  if (!((this.onLayoutCallback == null))) goto L_50;
  this.onLayoutCallback;
  goto L_75;
  undefined.removeListener(e);
  if (!(e.onScroll)) goto L_eb;
  if (!((this.onScrollCallback == null))) goto L_c6;
  this.onScrollCallback;
  goto L_eb;
  undefined.removeListener(e);
  if (!(e.onScrollEnd)) goto L_161;
  if (!((this.onScrollEndCallback == null))) goto L_13c;
  this.onScrollEndCallback;
  goto L_161;
  undefined.removeListener(e);
  if (!(e.onDragStart)) goto L_1d7;
  if (!((this.onDragStartCallback == null))) goto L_1b2;
  this.onDragStartCallback;
  goto L_1d7;
  undefined.removeListener(e);
  if (!(e.onDragEnding)) goto L_24d;
  if (!((this.onDragEndingCallback == null))) goto L_228;
  this.onDragEndingCallback;
  goto L_24d;
  undefined.removeListener(e);
  if (!(e.onDragEnd)) goto L_2c3;
  if (!((this.onDragEndCallback == null))) goto L_29e;
  this.onDragEndCallback;
  goto L_2c3;
  undefined.removeListener(e);
  if (!(e.onScrollRegionWillChange)) goto L_339;
  if (!((this.onScrollRegionWillChangeCallback == null))) goto L_314;
  this.onScrollRegionWillChangeCallback;
  goto L_339;
  undefined.removeListener(e);
  if (!(e.onScrollRegionDidChange)) goto L_3af;
  if (!((this.onScrollRegionDidChangeCallback == null))) goto L_38a;
  this.onScrollRegionDidChangeCallback;
  goto L_3af;
  undefined.removeListener(e);
  this.updateCallbacks();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=2000B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
// locals: this
// closure: ScrollViewCallback
function {
  this = this;
  if (!(e.onLayout)) goto L_cf;
  if ((this.onLayoutCallback)) goto L_85;
  this.onLayoutCallback = new ScrollViewCallback(this.dispatchLayout);
  new ScrollViewCallback(this.dispatchLayout);
  this.onLayoutCallback.addListener(e, false);
  if (!(e.onScroll)) goto L_1cc;
  if ((this.onScrollCallback)) goto L_153;
  this.onScrollCallback = new ScrollViewCallback(this.dispatchScroll);
  new ScrollViewCallback(this.dispatchScroll);
  if (!((t == null))) goto L_1a1;
  t;
  goto L_1c2;
  if (!((undefined.callOnScrollOnMainThread == null))) goto L_1c9;
  undefined.callOnScrollOnMainThread;
  this.onScrollCallback.addListener(e, false);
  if (!(e.onScrollEnd)) goto L_2c9;
  if ((this.onScrollEndCallback)) goto L_250;
  this.onScrollEndCallback = new ScrollViewCallback(this.onScrollEnd);
  new ScrollViewCallback(this.onScrollEnd);
  if (!((t == null))) goto L_29e;
  t;
  goto L_2bf;
  if (!((undefined.callOnScrollEndOnMainThread == null))) goto L_2c6;
  undefined.callOnScrollEndOnMainThread;
  this.onScrollEndCallback.addListener(e, false);
  if (!(e.onDragStart)) goto L_3c6;
  if ((this.onDragStartCallback)) goto L_34d;
  this.onDragStartCallback = new ScrollViewCallback(this.onDragStart);
  new ScrollViewCallback(this.onDragStart);
  if (!((t == null))) goto L_39b;
  t;
  goto L_3bc;
  if (!((undefined.callOnDragStartOnMainThread == null))) goto L_3c3;
  undefined.callOnDragStartOnMainThread;
  this.onDragStartCallback.addListener(e, false);
  if (!(e.onDragEnding)) goto L_494;
  if ((this.onDragEndingCallback)) goto L_44a;
  this.onDragEndingCallback = new ScrollViewCallback(this.onDragEnding);
  new ScrollViewCallback(this.onDragEnding);
  this.onDragEndingCallback.addListener(e, false);
  if (!(e.onDragEnd)) goto L_591;
  if ((this.onDragEndCallback)) goto L_518;
  this.onDragEndCallback = new ScrollViewCallback(this.onDragEnd);
  new ScrollViewCallback(this.onDragEnd);
  if (!((t == null))) goto L_566;
  t;
  goto L_587;
  if (!((undefined.callOnDragEndOnMainThread == null))) goto L_58e;
  undefined.callOnDragEndOnMainThread;
  this.onDragEndCallback.addListener(e, false);
  if (!(e.onScrollRegionWillChange)) goto L_65f;
  if ((this.onScrollRegionWillChangeCallback)) goto L_615;
  this.onScrollRegionWillChangeCallback = new ScrollViewCallback(this.onScrollRegionWillChange);
  new ScrollViewCallback(this.onScrollRegionWillChange);
  this.onScrollRegionWillChangeCallback.addListener(e, false);
  if (!(e.onScrollRegionDidChange)) goto L_72d;
  if ((this.onScrollRegionDidChangeCallback)) goto L_6e3;
  this.onScrollRegionDidChangeCallback = new ScrollViewCallback(this.onScrollRegionDidChange);
  new ScrollViewCallback(this.onScrollRegionDidChange);
  this.onScrollRegionDidChangeCallback.addListener(e, false);
  if (!(e.onContentSizeChange)) goto L_79b;
  this.listeners.push(e);
  this.updateCallbacks();
  return {unsubscribe: function <atom:0>};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=434B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
// locals: this
function {
  this = this;
  this.element = e;
  this.updateCallbacks();
  if (!((this.mainThreadScrollBinding == null))) goto L_5e;
  this.mainThreadScrollBinding;
  goto L_7f;
  if (!((undefined !== undefined.callback))) goto L_115;
  this.element.setAttribute("onScroll", this.mainThreadScrollBinding.callback);
  if (!(this.deferredAttributes)) goto L_1b1;
  this.element.setAttributes(this.deferredAttributes);
  this.deferredAttributes = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  this.element = undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=widgets/src/components/scroll/ScrollViewHandler
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  return this.scrollView;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!(this.scrollView)) goto L_4c;
  return [this.scrollView];
  return [];
}

// fn <atom:0>  args=6 vars=7 closure=0 cpool=0 bc=131B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t, n, i, l, r
// locals: this
function {
  this = this;
  if (!((this.onScrollRegionWillChangeCallback == null))) goto L_2c;
  this.onScrollRegionWillChangeCallback;
  goto L_82;
  if (!((undefined.getHandler() == null))) goto L_58;
  undefined.getHandler();
  goto L_82;
  undefined({regionX: e, regionY: t, regionWidth: n, regionHeight: i, newRegionWidth: l, newRegionHeight: r});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=91B file=widgets/src/components/scroll/ScrollViewHandler
// locals: this
function {
  this = this;
  if (!((this.onScrollRegionDidChangeCallback == null))) goto L_2c;
  this.onScrollRegionDidChangeCallback;
  goto L_5a;
  if (!((undefined.getHandler() == null))) goto L_58;
  undefined.getHandler();
  goto L_5a;
  undefined(undefined);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=1349B file=widgets/src/components/scroll/ScrollViewHandler
// locals: e, t, this
function {
  this = this;
  let e;
  e = this.element;
  if (!(e)) goto L_544;
  if (!((this.onLayoutCallback == null))) goto L_5a;
  this.onLayoutCallback;
  goto L_7e;
  if (!(undefined.needUpdate())) goto L_f4;
  e.setAttribute("onLayout", this.onLayoutCallback.getHandler());
  if (!((this.onScrollCallback == null))) goto L_11f;
  this.onScrollCallback;
  goto L_143;
  if (!(undefined.needUpdate())) goto L_230;
  let t;
  t = this.onScrollCallback.getHandler();
  if (!((undefined !== this.mainThreadScrollBinding))) goto L_200;
  goto L_22f;
  // [栈深重同步 1 -> 0]
  e.setAttribute("onScroll", t);
  if (!((this.onScrollEndCallback == null))) goto L_25a;
  this.onScrollEndCallback;
  goto L_27e;
  if (!(undefined.needUpdate())) goto L_2f4;
  e.setAttribute("onScrollEnd", this.onScrollEndCallback.getHandler());
  if (!((this.onDragStartCallback == null))) goto L_31f;
  this.onDragStartCallback;
  goto L_343;
  if (!(undefined.needUpdate())) goto L_3b9;
  e.setAttribute("onDragStart", this.onDragStartCallback.getHandler());
  if (!((this.onDragEndingCallback == null))) goto L_3e4;
  this.onDragEndingCallback;
  goto L_408;
  if (!(undefined.needUpdate())) goto L_47e;
  e.setAttribute("onDragEnding", this.onDragEndingCallback.getHandler());
  if (!((this.onDragEndCallback == null))) goto L_4a9;
  this.onDragEndCallback;
  goto L_4cd;
  if (!(undefined.needUpdate())) goto L_543;
  e.setAttribute("onDragEnd", this.onDragEndCallback.getHandler());
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onScrollRegionWillChange == null))) goto L_2b;
  e.onScrollRegionWillChange;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=47B file=widgets/src/components/scroll/ScrollViewHandler
// args: e
function {
  if (!((e.onScrollRegionDidChange == null))) goto L_2b;
  e.onScrollRegionDidChange;
  e;
  goto L_2e;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onLayout == null))) goto L_2b;
  e.onLayout;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onScroll == null))) goto L_2b;
  e.onScroll;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onScrollEnd == null))) goto L_2b;
  e.onScrollEnd;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onDragStart == null))) goto L_2b;
  e.onDragStart;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=47B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onDragEnding == null))) goto L_2a;
  e.onDragEnding;
  e;
  return undefined;
  // [栈深重同步 0 -> 2]
  return <?>.call(<?>, t);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=48B file=widgets/src/components/scroll/ScrollViewHandler
// args: e, t
function {
  if (!((e.onDragEnd == null))) goto L_2b;
  e.onDragEnd;
  e;
  goto L_2f;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=46 bc=571B file=widgets/src/components/scroll/ScrollViewHandler
// args: require, module, exports
// locals: e, t, n, i, ScrollViewCallback, <class_fields_init>, ScrollViewCallback#1, ScrollViewHandler, <class_fields_init>#1, ScrollViewHandler#1
function {
  let ScrollViewHandler#1;
  let ScrollViewCallback#1;
  let i;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollViewHandler = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/SetTimeout");
  n = require("valdi_core/src/utils/FunctionUtils");
  i = require("foundation/src/number");
  let ScrollViewCallback;
  let <class_fields_init>;
  class ScrollViewCallback extends undefined { ... }
  <proto:ScrollViewCallback>.addListener = function <atom:0>;
  <proto:ScrollViewCallback>.removeListener = function <atom:0>;
  <proto:ScrollViewCallback>.needUpdate = function <atom:0>;
  <proto:ScrollViewCallback>.getHandler = function <atom:0>;
  <proto:ScrollViewCallback>.expectedMode = function <atom:0>;
  <proto:ScrollViewCallback>.notifyListeners = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollViewCallback>;
  ScrollViewCallback = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollViewCallback#1 = function <atom:0>;
  let ScrollViewHandler;
  let <class_fields_init>#1;
  class ScrollViewHandler extends undefined { ... }
  <proto:ScrollViewHandler>.circularRatio = function <atom:0>;
  <proto:ScrollViewHandler>.horizontal = function <atom:0>;
  <proto:ScrollViewHandler>.scrollX = function <atom:0>;
  <proto:ScrollViewHandler>.scrollY = function <atom:0>;
  <proto:ScrollViewHandler>.scrollAnimated = function <atom:0>;
  <proto:ScrollViewHandler>.scrollView = function <atom:0>;
  <proto:ScrollViewHandler>.onLayout = function <atom:0>;
  <proto:ScrollViewHandler>.onScroll = function <atom:0>;
  <proto:ScrollViewHandler>.bindMainThreadOnScroll = function <atom:0>;
  <proto:ScrollViewHandler>.scrollViewFrame = function <atom:0>;
  <proto:ScrollViewHandler>.resetScroll = function <atom:0>;
  <proto:ScrollViewHandler>.scrollTo = function <atom:0>;
  <proto:ScrollViewHandler>.scrollToClamped = function <atom:0>;
  <proto:ScrollViewHandler>.setAttribute = function <atom:0>;
  <proto:ScrollViewHandler>.setAttributes = function <atom:0>;
  <proto:ScrollViewHandler>.setTranslationX = function <atom:0>;
  <proto:ScrollViewHandler>.setTranslationY = function <atom:0>;
  <proto:ScrollViewHandler>.getContentWidth = function <atom:0>;
  <proto:ScrollViewHandler>.getContentHeight = function <atom:0>;
  <proto:ScrollViewHandler>.setStaticContentWidth = function <atom:0>;
  <proto:ScrollViewHandler>.setStaticContentHeight = function <atom:0>;
  <proto:ScrollViewHandler>.subscribeListener = function <atom:0>;
  <proto:ScrollViewHandler>.onElementCreated = function <atom:0>;
  <proto:ScrollViewHandler>.onElementDestroyed = function <atom:0>;
  <proto:ScrollViewHandler>.setElements = function <atom:0>;
  <proto:ScrollViewHandler>.single = function <atom:0>;
  <proto:ScrollViewHandler>.all = function <atom:0>;
  <proto:ScrollViewHandler>.notifyRegionWillChange = function <atom:0>;
  <proto:ScrollViewHandler>.notifyRegionDidChange = function <atom:0>;
  <proto:ScrollViewHandler>.updateCallbacks = function <atom:0>;
  <proto:ScrollViewHandler>.onScrollRegionWillChange = function <atom:0>;
  <proto:ScrollViewHandler>.onScrollRegionDidChange = function <atom:0>;
  <proto:ScrollViewHandler>.dispatchLayout = function <atom:0>;
  <proto:ScrollViewHandler>.dispatchScroll = function <atom:0>;
  <proto:ScrollViewHandler>.onScrollEnd = function <atom:0>;
  <proto:ScrollViewHandler>.onDragStart = function <atom:0>;
  <proto:ScrollViewHandler>.onDragEnding = function <atom:0>;
  <proto:ScrollViewHandler>.onDragEnd = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ScrollViewHandler>;
  ScrollViewHandler = function <atom:0>;
  // close_loc <class_fields_init>#1
  ScrollViewHandler#1 = function <atom:0>;
  exports.ScrollViewHandler = ScrollViewHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/scroll/ScrollViewHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
