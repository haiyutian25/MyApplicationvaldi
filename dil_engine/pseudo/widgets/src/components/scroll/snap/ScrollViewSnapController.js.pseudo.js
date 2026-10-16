// fn h  args=3 vars=3 closure=0 cpool=0 bc=143B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e, i
function {
  if (!(t)) goto L_49;
  return (e.x - i.x);
  return (e.y - i.y);
}

// fn a  args=3 vars=3 closure=1 cpool=0 bc=148B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e, i
// closure: h
function {
  if (!(e.origin)) goto L_92;
  if (!(i.origin)) goto L_90;
  return h(t, e.origin, i.origin);
  return 1;
  return -1;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
function {
  t.DoSnapNow = "do-snap-now";
  t.AnchorScroll = "anchor-scroll";
  t.AnchorSnap = "anchor-snap";
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=99B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: i
// closure: this
function {
  let i;
  for (const i of this.listenersArray) {
    if (!((i.onAnchorSnap == null))) goto L_56;
    i.onAnchorSnap;
    i;
    goto L_5b;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, t, e);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=99B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: i
// closure: this
function {
  let i;
  for (const i of this.listenersArray) {
    if (!((i.onAnchorScroll == null))) goto L_56;
    i.onAnchorScroll;
    i;
    goto L_5b;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, t, e);
  }
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// closure: this
function {
  this.setNeedsSort();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=3 bc=285B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.items = [];
  this.needsSort = false;
  this.waiting = false;
  this.renderWaiting = false;
  this.renderCounter = 0;
  this.renderCompletions = {};
  this.lastItems = {};
  this.scrollSubscription = undefined;
  this.listenersArray = [];
  this.listenersCounter = 0;
  this._currentSnapIndex = 0;
  this.callListenersAnchorSnap = function <atom:0>;
  this.callListenersAnchorScroll = function <atom:0>;
  this.onLayout = function <atom:0>;
  this.handler = t;
  if (!((e == null))) goto L_c6;
  e;
  this.options = {};
  this.staticAnchorSize = this.options.staticAnchorSize;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: this
function {
  this = this;
  return this._currentSnapIndex;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=157B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: this
function {
  this = this;
  this.applyOnLayout(t);
  this.setNeedsSort();
  this.items.push({element: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=44B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// closure: h, n, e
function {
  return h(n, t.origin, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=37B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: e
// closure: t
function {
  return (e.element === t);
}

// fn <atom:0>  args=1 vars=6 closure=2 cpool=2 bc=576B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, n, s, e#1, this
// closure: h, i
function {
  this = this;
  let e#1;
  if (!(!this.needsSort)) goto L_1a1;
  let e;
  e = this.computeElementOrigin(t);
  if (!(e)) goto L_19e;
  let s;
  let n;
  n = this.handler.horizontal;
  s = i.binarySearch(this.items, function <atom:0>);
  if (!((-1 !== s))) goto L_19b;
  if (!((this.items[s].element === t))) goto L_19b;
  this.items.splice(s, 1);
  return;
  // close_loc n
  // close_loc e
  e#1 = this.items.findIndex(function <atom:0>);
  if (!((-1 !== e#1))) goto L_23f;
  this.items.splice(e#1, 1);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=8B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
function {
  return {element: t};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=145B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of t) {
    this.applyOnLayout(e);
  }
  this.setNeedsSort();
  this.items = t.map(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=247B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: e
// closure: this, t
function {
  this.listenersCounter = (this.listenersCounter --);
  if (!(t)) goto L_d1;
  let e;
  e = this.listenersArray.indexOf(t);
  if (!((e >= 0))) goto L_d0;
  this.listenersArray.splice(e, 1);
  this.updateScrollSubscription();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=175B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: this
function {
  this = this;
  this.listenersCounter = (this.listenersCounter ++);
  if (!(t)) goto L_7a;
  this.listenersArray.push(t);
  this.updateScrollSubscription();
  return {unsubscribe: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=316B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// closure: e, this, l
function {
  if (!((e === this.renderCounter))) goto L_13b;
  this.renderWaiting = false;
  if (!((this.renderCompletions[l.DoSnapNow] == null))) goto L_87;
  this.renderCompletions[l.DoSnapNow];
  this.renderCompletions;
  goto L_8a;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.renderCompletions[l.AnchorScroll] == null))) goto L_d9;
  this.renderCompletions[l.AnchorScroll];
  this.renderCompletions;
  goto L_dc;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  if (!((this.renderCompletions[l.AnchorSnap] == null))) goto L_12b;
  this.renderCompletions[l.AnchorSnap];
  this.renderCompletions;
  goto L_12e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.renderCompletions = {};
  {};
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=140B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, this
// closure: l
function {
  this = this;
  let e;
  if (!(this.staticAnchorSize)) goto L_2a;
  return;
  this.renderWaiting = true;
  this.renderCounter = (this.renderCounter ++);
  e = (this.renderCounter ++);
  t.onLayoutComplete(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=94B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: n
// closure: this, t, e, i
function {
  let n;
  n = this.findSnapIndex(t, e);
  if (!((undefined !== n))) goto L_5d;
  this.doSnapNowToIndex(n, i);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=76B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e, i
// locals: this
// closure: l
function {
  this = this;
  this.scheduleWhenFramesAvailable(l.DoSnapNow, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=0 bc=986B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: i, n, s, t
// closure: this, t, e, l
function {
  let s;
  let n;
  let i;
  i = this.findSnapItem(t);
  n = this.findSnapScrollOffset(i);
  if (!((e == null))) goto L_61;
  e;
  s = false;
  if (!((undefined !== n))) goto L_3d9;
  let t;
  if (!((this.handler.scrollX === n.x))) goto L_1fd;
  if (!((this.handler.scrollY === n.y))) goto L_1fd;
  if (!((this.handler.scrollAnimated === s))) goto L_1fd;
  this.triggerSnapEvent(l.AnchorSnap, this.callListenersAnchorSnap);
  return;
  if (!((undefined === this.staticAnchorSize))) goto L_226;
  goto L_26c;
  // [栈深重同步 1 -> 0]
  t = (this.staticAnchorSize * this.items.length);
  if (!(this.handler.horizontal)) goto L_2fd;
  goto L_346;
  // [栈深重同步 1 -> 0]
  this.handler.setStaticContentHeight(t);
  this.handler.scrollTo(n.x, n.y, s);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=76B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: this
// closure: l
function {
  this = this;
  this.scheduleWhenFramesAvailable(l.DoSnapNow, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=11 closure=5 cpool=0 bc=711B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: i
// locals: e, s, r, l, h, a, c, d, m, p
// closure: e, t, n, o, this
function {
  if (!((e === 0))) goto L_2b2;
  let p;
  let m;
  let d;
  let c;
  let a;
  let h;
  let l;
  let r;
  let s;
  let e;
  if (!((t.flingMaxVelocityX == null))) goto L_55;
  t.flingMaxVelocityX;
  e = (1 / 0);
  if (!((t.flingMaxVelocityY == null))) goto L_82;
  t.flingMaxVelocityY;
  s = (1 / 0);
  if (!((t.flingMaxDistanceX == null))) goto L_af;
  t.flingMaxDistanceX;
  r = (1 / 0);
  if (!((t.flingMaxDistanceY == null))) goto L_dc;
  t.flingMaxDistanceY;
  l = (1 / 0);
  h = n.clamp(i.velocityX, -e, e);
  a = n.clamp(i.velocityY, -s, s);
  c = n.clamp((h * o), -r, r);
  d = n.clamp((a * o), -l, l);
  m = this.findSnapIndex((i.x + c), (i.y + d));
  p = this.findSnapItem(m);
  return this.findSnapScrollOffset(p);   // tail call
  if (!((e === 1))) goto L_2c6;
  this.waiting = true;
  e;
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=264B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// closure: this, l
function {
  if (!(this.waiting)) goto L_9d;
  this.waiting = false;
  this.doSnapNow(t.x, t.y, true);
  this.triggerSnapEvent(l.AnchorSnap, this.callListenersAnchorSnap);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=106B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// closure: this, l
function {
  this.triggerSnapEvent(l.AnchorScroll, this.callListenersAnchorScroll);
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=3 bc=446B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: t, e, this
// closure: n, o, l
function {
  this = this;
  if (!((undefined === this.scrollSubscription))) goto L_11e;
  if (!((this.listenersCounter > 0))) goto L_11e;
  let e;
  let t;
  t = this.options;
  if (!((t.type == null))) goto L_a7;
  t.type;
  e = 0;
  this.scrollSubscription = this.handler.subscribeListener({onDragEnding: function <atom:0>, onScrollEnd: function <atom:0>, onScroll: function <atom:0>});
  return;
  if (!((undefined !== this.scrollSubscription))) goto L_1bd;
  if (!((this.listenersCounter <= 0))) goto L_1bd;
  this.scrollSubscription.unsubscribe();
  this.scrollSubscription = undefined;
  return;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=82B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: this
function {
  this = this;
  if (!(this.renderWaiting)) goto L_4f;
  this.renderCompletions[t] = e;
  goto L_51;
  // [栈深重同步 1 -> 0]
  e();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=3 cpool=0 bc=402B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: i, n, s, r, o
// closure: this, t, e
function {
  let o;
  let r;
  let s;
  let n;
  let i;
  i = this.lastItems[t];
  n = this.handler.scrollX;
  s = this.handler.scrollY;
  if (!((this.findSnapIndex(n, s) == null))) goto L_ed;
  this.findSnapIndex(n, s);
  r = 0;
  this._currentSnapIndex = r;
  o = this.findSnapItem(r);
  if (!((i !== o))) goto L_191;
  if (!((undefined !== o))) goto L_191;
  if (!(e)) goto L_167;
  e(r, o.element);
  this.lastItems[t] = o;
  o;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=43B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: this
function {
  this = this;
  this.scheduleWhenFramesAvailable(t, function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=196B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: this
function {
  this = this;
  if (!((t == null))) goto L_6e;
  t;
  if (!((e == null))) goto L_bc;
  e;
  return this.computeClosestItemIndex({x: this.handler.scrollX, y: this.handler.scrollY});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=84B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== t))) goto L_53;
  if (!(this.ensureElementsSort())) goto L_53;
  return this.items[t];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=117B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== t))) goto L_74;
  if (!((undefined !== t.origin))) goto L_74;
  return this.computeScrollOffsetFromItemOrigin(t.origin);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=44B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// closure: h, s, n
function {
  return h(s, t.origin, n);   // tail call
}

// fn <atom:0>  args=1 vars=10 closure=2 cpool=1 bc=839B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, n, s, r, o, l, t#1, e#1, this
// closure: h, i
function {
  this = this;
  let l;
  let o;
  let r;
  let s;
  let n;
  let e;
  if (!(!this.ensureElementsSort())) goto L_3f;
  return;
  e = this.handler.scrollViewFrame;
  if (!(!e)) goto L_8b;
  return;
  n = this.normalizedScrollOffsetToItemOrigin(t, e);
  s = this.handler.horizontal;
  r = i.binarySearchRange(this.items, function <atom:0>);
  o = this.items[r.min];
  l = this.items[r.max];
  if (!(o)) goto L_2f1;
  if (!(l)) goto L_2f1;
  let e#1;
  let t#1;
  t#1 = h(s, o.origin, n);
  e#1 = h(s, l.origin, n);
  if (!((Math.abs(t#1) <= Math.abs(e#1)))) goto L_2cc;
  return r.min;
  return r.max;
  if (!(o)) goto L_31b;
  return r.min;
  if (!(l)) goto L_345;
  return r.max;
  return undefined;
}

// fn <atom:0>  args=1 vars=7 closure=1 cpool=0 bc=900B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, i, s, t#1, t#2, this
// closure: n
function {
  this = this;
  let s;
  let i;
  let e;
  e = this.handler.scrollViewFrame;
  if (!(!e)) goto L_58;
  return;
  i = this.normalizedItemOriginToScrollOffset(t, e);
  s = (this.handler.circularRatio > 1);
  if (!(this.handler.horizontal)) goto L_24b;
  let t#1;
  t#1 = (this.handler.getContentWidth() - e.width);
  if (!(s)) goto L_1af;
  goto L_1fc;
  // [栈深重同步 2 -> 1]
  return {x: n.clamp(i.x, 0, t#1), y: this.handler.scrollY};
  let t#2;
  t#2 = (this.handler.getContentHeight() - e.height);
  if (!(s)) goto L_331;
  goto L_37e;
  // [栈深重同步 2 -> 1]
  return {x: this.handler.scrollX, y: n.clamp(i.y, 0, t#2)};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=198B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.normalizedScrollFrameDelta(e);
  return {x: (t.x + i.x), y: (t.y + i.y)};
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=198B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
// locals: i, this
function {
  this = this;
  let i;
  i = this.normalizedScrollFrameDelta(e);
  return {x: (t.x - i.x), y: (t.y - i.y)};
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=649B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: e, this
function {
  this = this;
  let e;
  if (!((this.options.extraOffsetX == null))) goto L_4f;
  this.options.extraOffsetX;
  if (!((this.options.extraOffsetY == null))) goto L_9e;
  this.options.extraOffsetY;
  e = {x: -0, y: -0};
  if (!((1 === this.options.align))) goto L_197;
  e.x = (e.x + (t.width / 2));
  e.y = (e.y + (t.height / 2));
  goto L_284;
  // [栈深重同步 1 -> 0]
  if (!((2 === this.options.align))) goto L_284;
  e.x = (e.x + t.width);
  e.y = (e.y + t.height);
  (e.y + t.height);
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: this
function {
  this = this;
  this.needsSort = true;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=136B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e
function {
  return (t.element.parentIndex - e.element.parentIndex);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
function {
  return t.origin;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=9B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: e, i
// closure: a, t
function {
  return a(t, e, i);   // tail call
}

// fn <atom:0>  args=0 vars=9 closure=1 cpool=3 bc=830B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: t, e, i, n, s, r, t#1, t#2, this
// closure: a
function {
  this = this;
  if (!(this.needsSort)) goto L_33d;
  if (!(this.staticAnchorSize)) goto L_1c5;
  let s;
  let n;
  let i;
  let e;
  let t;
  t = this.staticAnchorSize;
  this.items.sort(function <atom:0>);
  e = 0;
  i = 0;
  if (!(this.handler.horizontal)) goto L_123;
  e = t;
  goto L_12a;
  // [栈深重同步 1 -> 0]
  i = t;
  t;
  n = 0;
  s = 0;
  let r;
  for (const r of this.items) {
    r.origin = this.makeElementOrigin(n, s, t, t);
    n = (n + e);
    (n + e);
    s = (s + i);
    (s + i);
  }
  this.needsSort = false;
  return;
  let t#1;
  for (const t#1 of this.items) {
    t#1.origin = this.computeElementOrigin(t#1.element);
  }
  if (!(this.items.every(function <atom:0>))) goto L_33d;
  let t#2;
  t#2 = this.handler.horizontal;
  this.items.sort(function <atom:0>);
  this.needsSort = false;
  // close_loc t#2
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=169B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: this
// closure: t
function {
  this = this;
  this.sortElementsIfNeeded();
  if ((!this.needsSort)) goto L_a8;
  if (!(t.isLoggingEnabled)) goto L_a5;
  console.error("could not compute elements to snap to, make sure all anchors are within the scroll view");
  return false;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=79B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: this
function {
  this = this;
  t.setAttribute("onLayout", this.onLayout);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=413B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t
// locals: i, n, this
// closure: e
function {
  this = this;
  let i;
  i = this.handler.scrollView;
  if (!(i)) goto L_19c;
  let n;
  n = e.RenderedElementUtils.relativePositionTo(i, t);
  if (!(n)) goto L_19c;
  return this.makeElementOrigin(n.x, n.y, t.frame.width, t.frame.height);   // tail call
  return;
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=145B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: t, e, i, n
// locals: this
function {
  this = this;
  if (!((this.options.align == null))) goto L_4b;
  this.options.align;
  if (!((0 === 0))) goto L_5e;
  return {x: t, y: e};
  if (!((0 === 1))) goto L_79;
  return {x: (t + (i / 2)), y: (e + (n / 2))};
  if (!((0 === 2))) goto L_90;
  return {x: (t + i), y: (e + n)};
  0;
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=30 bc=483B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// args: require, module, exports
// locals: t, e, i, n, s, r, o, l, h, a, ScrollViewSnapController, <class_fields_init>, ScrollViewSnapController#1
function {
  h = function h;
  a = function a;
  let ScrollViewSnapController#1;
  let o;
  let r;
  let s;
  let n;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ScrollViewSnapController = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("valdi_core/src/utils/RenderedElementUtils");
  i = require("coreutils/src/ArrayUtils");
  n = require("foundation/src/number");
  s = 0.998;
  r = (1000 * Math.log(s));
  o = (1 / -r);
  if ((l)) goto L_f0;
  l = {};
  !function <atom:0>({});
  let ScrollViewSnapController;
  let <class_fields_init>;
  class ScrollViewSnapController extends undefined { ... }
  <proto:ScrollViewSnapController>.currentSnapIndex = function <atom:0>;
  <proto:ScrollViewSnapController>.onElementCreated = function <atom:0>;
  <proto:ScrollViewSnapController>.onElementDestroyed = function <atom:0>;
  <proto:ScrollViewSnapController>.setElements = function <atom:0>;
  <proto:ScrollViewSnapController>.startSnapping = function <atom:0>;
  <proto:ScrollViewSnapController>.notifyWillRender = function <atom:0>;
  <proto:ScrollViewSnapController>.doSnapNow = function <atom:0>;
  <proto:ScrollViewSnapController>.doSnapNowToIndex = function <atom:0>;
  <proto:ScrollViewSnapController>.updateScrollSubscription = function <atom:0>;
  <proto:ScrollViewSnapController>.scheduleWhenFramesAvailable = function <atom:0>;
  <proto:ScrollViewSnapController>.triggerSnapEvent = function <atom:0>;
  <proto:ScrollViewSnapController>.findSnapIndex = function <atom:0>;
  <proto:ScrollViewSnapController>.findSnapItem = function <atom:0>;
  <proto:ScrollViewSnapController>.findSnapScrollOffset = function <atom:0>;
  <proto:ScrollViewSnapController>.computeClosestItemIndex = function <atom:0>;
  <proto:ScrollViewSnapController>.computeScrollOffsetFromItemOrigin = function <atom:0>;
  <proto:ScrollViewSnapController>.normalizedScrollOffsetToItemOrigin = function <atom:0>;
  <proto:ScrollViewSnapController>.normalizedItemOriginToScrollOffset = function <atom:0>;
  <proto:ScrollViewSnapController>.normalizedScrollFrameDelta = function <atom:0>;
  <proto:ScrollViewSnapController>.setNeedsSort = function <atom:0>;
  <proto:ScrollViewSnapController>.sortElementsIfNeeded = function <atom:0>;
  <proto:ScrollViewSnapController>.ensureElementsSort = function <atom:0>;
  <proto:ScrollViewSnapController>.applyOnLayout = function <atom:0>;
  <proto:ScrollViewSnapController>.computeElementOrigin = function <atom:0>;
  <proto:ScrollViewSnapController>.makeElementOrigin = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ScrollViewSnapController>;
  ScrollViewSnapController = function <atom:0>;
  // close_loc <class_fields_init>
  ScrollViewSnapController#1 = function <atom:0>;
  exports.ScrollViewSnapController = ScrollViewSnapController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/scroll/snap/ScrollViewSnapController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
