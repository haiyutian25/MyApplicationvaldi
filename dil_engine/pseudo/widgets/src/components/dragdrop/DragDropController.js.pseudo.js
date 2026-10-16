// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=65B file=widgets/src/components/dragdrop/DragDropController
// args: e, t
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target();
  if (!(<class_fields_init>)) goto L_21;
  <class_fields_init>.call(this);
  new new.target();
  this.onCreated = e;
  this.onDestroyed = t;
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=67B file=widgets/src/components/dragdrop/DragDropController
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onElementCreated"].call(this, e);
  if (!((this.onCreated == null))) goto L_3e;
  this.onCreated;
  this;
  goto L_42;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=67B file=widgets/src/components/dragdrop/DragDropController
// args: e
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  super["onElementDestroyed"].call(this, e);
  if (!((this.onDestroyed == null))) goto L_3e;
  this.onDestroyed;
  this;
  goto L_42;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=39B file=widgets/src/components/dragdrop/DragDropController
// closure: this, e
function {
  this.objectLongPress(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=45B file=widgets/src/components/dragdrop/DragDropController
// args: e
// closure: this
function {
  e.setAttribute("onLongPress", function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=215B file=widgets/src/components/dragdrop/DragDropController
// args: e
// closure: this
function {
  if (!(this.currentObject)) goto L_73;
  if (!((this.currentObject !== e))) goto L_73;
  this.motionDoReset();
  this.currentObject = e;
  this.currentPressed = true;
  this.motionCheckStart();
  this.motionCheckMove();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=40B file=widgets/src/components/dragdrop/DragDropController
// args: t
// closure: this, e
function {
  this.containerTouch(e, t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=45B file=widgets/src/components/dragdrop/DragDropController
// args: e
// closure: this
function {
  e.setAttribute("onTouch", function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=693B file=widgets/src/components/dragdrop/DragDropController
// args: e, t
// locals: r, n
// closure: this
function {
  let n;
  let r;
  if (!(this.currentContainer)) goto L_79;
  if (!((this.currentContainer !== e))) goto L_79;
  this.motionDoReset();
  this.currentContainer = e;
  if (!((t.state === 0))) goto L_12a;
  this.currentTouched = true;
  this.currentEventOrigin = {x: t.absoluteX, y: t.absoluteY};
  this.currentEventDelta = {dx: 0, dy: 0};
  goto L_140;
  if (((t.state === 1))) goto L_140;
  if (!((t.state === 2))) goto L_140;
  this.currentTouched = false;
  t.state;
  r = this.currentEventOrigin;
  n = this.currentEventDelta;
  if (!(r)) goto L_242;
  if (!(n)) goto L_242;
  n.dx = (t.absoluteX - r.x);
  n.dy = (t.absoluteY - r.y);
  (t.absoluteY - r.y);
  this.motionCheckStart();
  this.motionCheckMove();
  this.motionCheckStop();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=4 bc=288B file=widgets/src/components/dragdrop/DragDropController
// locals: this
// closure: <class_fields_init>, r, ElementHolder
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listeners = new r.Subscribable();
  this.currentDragging = false;
  this.currentTouched = false;
  this.currentPressed = false;
  this.currentCollisions = new Set();
  this.objectCreate = function <atom:0>;
  this.objectLongPress = function <atom:0>;
  this.containerCreate = function <atom:0>;
  this.containerTouch = function <atom:0>;
  this.containers = new ElementHolder(this.containerCreate);
  this.objects = new ElementHolder(this.objectCreate);
  this.zones = new ElementHolder();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  return this.containers;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  return this.objects;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  return this.zones;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=widgets/src/components/dragdrop/DragDropController
// args: e
// locals: this
function {
  this = this;
  return this.listeners.subscribe(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=170B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  if (!(this.currentPressed)) goto L_a9;
  if (!(this.currentTouched)) goto L_a9;
  if ((this.currentDragging)) goto L_a9;
  this.currentDragging = true;
  this.motionNotify(0);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  if (!(this.currentDragging)) goto L_4e;
  this.motionNotify(1);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=274B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  if (!(this.currentPressed)) goto L_4a;
  if ((this.currentTouched)) goto L_111;
  if (!(this.currentDragging)) goto L_111;
  this.currentDragging = false;
  this.motionNotify(2);
  this.currentDragging = false;
  this.currentTouched = false;
  this.currentPressed = false;
  this.currentContainer = undefined;
  this.currentObject = undefined;
  this.currentCollisions = new Set();
  this.currentEventOrigin = undefined;
  this.currentEventDelta = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=64B file=widgets/src/components/dragdrop/DragDropController
// locals: this
function {
  this = this;
  this.currentTouched = false;
  this.currentPressed = false;
  this.motionCheckStop();
  return;
}

// fn <atom:0>  args=1 vars=21 closure=1 cpool=0 bc=2211B file=widgets/src/components/dragdrop/DragDropController
// args: e
// locals: r, n, o, s, i, c, h, i#1, u, a, l, d, g, e#1, e#2, e#3, e#4, e#5, e#6, this
// closure: t
function {
  this = this;
  let c;
  let i;
  let s;
  let o;
  let n;
  let r;
  if (!(!this.currentObject)) goto L_3c;
  return;
  if (!(!this.currentContainer)) goto L_63;
  return;
  if (!(!this.currentEventDelta)) goto L_8a;
  return;
  r = this.listeners.subscribers();
  n = this.currentObject;
  o = this.currentContainer;
  s = t.RenderedElementUtils.relativePositionTo(o, n);
  if (!(!s)) goto L_170;
  return;
  i = n.frame;
  s.x = (s.x + (this.currentEventDelta.dx + (i.width / 2)));
  s.y = (s.y + (this.currentEventDelta.dy + (i.height / 2)));
  c = [];
  let h;
  for (const h of this.zones.all()) {
    let g;
    let d;
    let l;
    let a;
    let u;
    let i#1;
    i#1 = h;
    u = i#1.id;
    a = this.currentCollisions.has(u);
    l = undefined;
    d = false;
    g = t.RenderedElementUtils.relativePositionTo(o, i#1);
    if (!(g)) goto L_54e;
    l = {x: (s.x - g.x), y: (s.y - g.y)};
    {x: (s.x - g.x), y: (s.y - g.y)};
    d = t.RenderedElementUtils.frameContainsPosition(i#1.frame, l);
    t.RenderedElementUtils.frameContainsPosition(i#1.frame, l);
    if (!(d)) goto L_54e;
    c.push(i#1);
    if (!(d)) goto L_653;
    if (!(l)) goto L_653;
    if (!((2 !== e))) goto L_653;
    if (!(a)) goto L_5ba;
    let e#1;
    for (const e#1 of r) {
      if (!((e#1.onZoneHoverMove == null))) goto L_5a4;
      e#1.onZoneHoverMove;
      e#1;
      goto L_5b0;
      // [栈深重同步 4 -> 5]
      <?>.call(undefined, n, i#1, l);
      // [栈深重同步 3 -> 6]
    }
   continue;
    let e#2;
    for (const e#2 of r) {
      if (!((e#2.onZoneHoverStart == null))) goto L_5f2;
      e#2.onZoneHoverStart;
      e#2;
      goto L_5fe;
      // [栈深重同步 4 -> 5]
      <?>.call(undefined, n, i#1, l);
      // [栈深重同步 3 -> 6]
    }
    this.currentCollisions.add(u);
   continue;
    if (!(a)) continue;
    let e#3;
    for (const e#3 of r) {
      if (!((e#3.onZoneHoverEnd == null))) goto L_693;
      e#3.onZoneHoverEnd;
      e#3;
      goto L_69c;
      // [栈深重同步 4 -> 5]
      <?>.call(undefined, n, i#1);
      // [栈深重同步 3 -> 6]
    }
    this.currentCollisions.delete(u);
  }
  if (!((e === 0))) goto L_788;
  let e#4;
  for (const e#4 of r) {
    if (!((e#4.onDragDropStart == null))) goto L_738;
    e#4.onDragDropStart;
    e#4;
    goto L_744;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, c, o);
    if (!((e#4.onContainerHoverStart == null))) goto L_772;
    e#4.onContainerHoverStart;
    e#4;
    goto L_77e;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, o, s);
    // [栈深重同步 3 -> 4]
  }
  goto L_8a2;
  if (!((_it5 === 1))) goto L_818;
  let e#5;
  for (const e#5 of r) {
    if (!((e#5.onDragDropMove == null))) goto L_7c8;
    e#5.onDragDropMove;
    e#5;
    goto L_7d4;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, c, o);
    if (!((e#5.onContainerHoverMove == null))) goto L_802;
    e#5.onContainerHoverMove;
    e#5;
    goto L_80e;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, o, s);
    // [栈深重同步 3 -> 4]
  }
  goto L_8a2;
  if (!((_it6 === 2))) goto L_8a2;
  let e#6;
  for (const e#6 of r) {
    if (!((e#6.onDragDropEnd == null))) goto L_858;
    e#6.onDragDropEnd;
    e#6;
    goto L_864;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, c, o);
    if (!((e#6.onContainerHoverEnd == null))) goto L_892;
    e#6.onContainerHoverEnd;
    e#6;
    goto L_89b;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, n, o);
    // [栈深重同步 3 -> 4]
  }
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=13 bc=294B file=widgets/src/components/dragdrop/DragDropController
// args: require, module, exports
// locals: e, t, r, ElementHolder, <class_fields_init>, ElementHolder#1, DragDropController, <class_fields_init>#1, DragDropController#1
function {
  let DragDropController#1;
  let ElementHolder#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DragDropController = undefined;
  e = require("valdi_core/src/ElementRef");
  t = require("valdi_core/src/utils/RenderedElementUtils");
  r = require("foundation/src/Subscribable");
  let ElementHolder;
  let <class_fields_init>;
  class ElementHolder extends e.ElementRef { ... }
  <proto:ElementHolder>.onElementCreated = function <atom:0>;
  <proto:ElementHolder>.onElementDestroyed = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ElementHolder>;
  ElementHolder = function <atom:0>;
  // close_loc <class_fields_init>
  ElementHolder#1 = function <atom:0>;
  let DragDropController;
  let <class_fields_init>#1;
  class DragDropController extends undefined { ... }
  <proto:DragDropController>.containersRef = function <atom:0>;
  <proto:DragDropController>.objectsRef = function <atom:0>;
  <proto:DragDropController>.zonesRef = function <atom:0>;
  <proto:DragDropController>.subscribeListener = function <atom:0>;
  <proto:DragDropController>.motionCheckStart = function <atom:0>;
  <proto:DragDropController>.motionCheckMove = function <atom:0>;
  <proto:DragDropController>.motionCheckStop = function <atom:0>;
  <proto:DragDropController>.motionDoReset = function <atom:0>;
  <proto:DragDropController>.motionNotify = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DragDropController>;
  DragDropController = function <atom:0>;
  // close_loc <class_fields_init>#1
  DragDropController#1 = function <atom:0>;
  exports.DragDropController = DragDropController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/dragdrop/DragDropController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
