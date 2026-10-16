// fn <atom:0>  args=1 vars=10 closure=1 cpool=1 bc=339B file=widgets/src/components/util/DragToDismissController
// args: <atom:0>
// locals: s, i, l, o, o#1, l#1, i#1, s#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let o;
  let l;
  let i;
  let s;
  if (((<atom:0> === undefined))) goto L_d1;
  if (!((<to_object>(<atom:0>).distanceDismissThreshold === undefined))) goto L_4f;
  <to_object>(<atom:0>).distanceDismissThreshold;
  s = 30;
  if (!((<to_object>(<atom:0>).distanceDismissSlop === undefined))) goto L_79;
  <to_object>(<atom:0>).distanceDismissSlop;
  i = 10;
  if (!((<to_object>(<atom:0>).velocityDismissThresHold === undefined))) goto L_a4;
  <to_object>(<atom:0>).velocityDismissThresHold;
  l = -0.6;
  if (!((<to_object>(<atom:0>).minVelocityDismissDistance === undefined))) goto L_cd;
  <to_object>(<atom:0>).minVelocityDismissDistance;
  o = 5;
  <to_object>(<atom:0>);
  goto L_d6;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_25;
  // [栈深重同步 1 -> 0]
  o#1 = o;
  l#1 = l;
  i#1 = i;
  s#1 = s;
  this.isEligibleForDismiss = true;
  this.shouldDismissOnScrollRelease = false;
  this.wasEligibleForDismiss = false;
  this.isDragging = false;
  this.distanceDismissThreshold = s#1;
  this.distanceDismissSlop = i#1;
  this.velocityDismissThreshold = l#1;
  this.minVelocityDismissDistance = o#1;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=widgets/src/components/util/DragToDismissController
// locals: this
function {
  this = this;
  this.isDragging = true;
  this.isEligibleForDismiss = true;
  this.wasEligibleForDismiss = false;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=634B file=widgets/src/components/util/DragToDismissController
// args: s
// locals: this
function {
  this = this;
  if (!((s.y > this.distanceDismissSlop))) goto L_7f;
  if (!(!this.wasEligibleForDismiss)) goto L_7f;
  this.isEligibleForDismiss = false;
  false;
  if (!(this.isDragging)) goto L_279;
  if (!(this.isEligibleForDismiss)) goto L_279;
  if (!((-s.y > this.distanceDismissThreshold))) goto L_1ad;
  if (!(!this.shouldDismissOnScrollRelease)) goto L_1ad;
  this.shouldDismissOnScrollRelease = true;
  this.wasEligibleForDismiss = true;
  if (!(this.onCouldDismiss)) goto L_279;
  goto L_279;
  // [栈深重同步 1 -> 0]
  if (!((-s.y < this.distanceDismissThreshold))) goto L_279;
  if (!(this.shouldDismissOnScrollRelease)) goto L_279;
  this.shouldDismissOnScrollRelease = false;
  if (!(this.onCouldDismiss)) goto L_279;
  this.onCouldDismiss(false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=437B file=widgets/src/components/util/DragToDismissController
// args: s
// locals: this
function {
  this = this;
  if (((s.velocityY > 0))) goto L_1b4;
  if (!((s.velocityY < this.velocityDismissThreshold))) goto L_11d;
  if (!((s.y <= -this.minVelocityDismissDistance))) goto L_11d;
  if (!(this.isEligibleForDismiss)) goto L_11d;
  if (!(!this.shouldDismissOnScrollRelease)) goto L_11d;
  this.shouldDismissOnScrollRelease = true;
  true;
  this.isDragging = false;
  this.wasEligibleForDismiss = false;
  if (!(this.shouldDismissOnScrollRelease)) goto L_1b4;
  this.shouldDismissOnScrollRelease = false;
  if (!(this.onShouldDismiss)) goto L_1b4;
  this.onShouldDismiss(s);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=131B file=widgets/src/components/util/DragToDismissController
// args: require, module, exports
// locals: DragToDismissController, <class_fields_init>, DragToDismissController#1
function {
  let DragToDismissController#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DragToDismissController = undefined;
  let DragToDismissController;
  let <class_fields_init>;
  class DragToDismissController extends undefined { ... }
  <proto:DragToDismissController>.onDragStart = function <atom:0>;
  <proto:DragToDismissController>.onScroll = function <atom:0>;
  <proto:DragToDismissController>.onDragEnd = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DragToDismissController>;
  DragToDismissController = function <atom:0>;
  // close_loc <class_fields_init>
  DragToDismissController#1 = function <atom:0>;
  exports.DragToDismissController = DragToDismissController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/DragToDismissController
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
