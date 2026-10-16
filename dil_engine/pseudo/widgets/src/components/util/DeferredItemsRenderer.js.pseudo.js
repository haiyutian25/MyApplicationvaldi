// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=116B file=widgets/src/components/util/DeferredItemsRenderer
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.newRenderScheduled = false;
  this.initialItemsCount = e;
  this.itemsCountIncrement = t;
  this.listener = r;
  this.renderedItemsCount = 0;
  this.currentAllowedItems = this.initialItemsCount;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=14B file=widgets/src/components/util/DeferredItemsRenderer
// locals: this
function {
  this = this;
  this.renderedItemsCount = 0;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=50B file=widgets/src/components/util/DeferredItemsRenderer
// closure: this
function {
  this.newRenderScheduled = false;
  this.renderNextItemsIfNeeded();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=213B file=widgets/src/components/util/DeferredItemsRenderer
// locals: this
// closure: e
function {
  this = this;
  if (!((this.renderedItemsCount >= this.currentAllowedItems))) goto L_a6;
  if ((this.newRenderScheduled)) goto L_a2;
  this.newRenderScheduled = true;
  e.onIdleInterruptible(function <atom:0>);
  return false;
  this.renderedItemsCount = (this.renderedItemsCount ++);
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=190B file=widgets/src/components/util/DeferredItemsRenderer
// locals: this
function {
  this = this;
  this.currentAllowedItems = (this.currentAllowedItems + this.itemsCountIncrement);
  this.prepareForRender();
  this.listener.onReadyToRenderNewItems(this);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=142B file=widgets/src/components/util/DeferredItemsRenderer
// args: require, module, exports
// locals: e, DeferredItemsRenderer, <class_fields_init>, DeferredItemsRenderer#1
function {
  let DeferredItemsRenderer#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DeferredItemsRenderer = undefined;
  e = require("valdi_core/src/utils/OnIdle");
  let DeferredItemsRenderer;
  let <class_fields_init>;
  class DeferredItemsRenderer extends undefined { ... }
  <proto:DeferredItemsRenderer>.prepareForRender = function <atom:0>;
  <proto:DeferredItemsRenderer>.shouldRenderNextItem = function <atom:0>;
  <proto:DeferredItemsRenderer>.renderNextItemsIfNeeded = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DeferredItemsRenderer>;
  DeferredItemsRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DeferredItemsRenderer#1 = function <atom:0>;
  exports.DeferredItemsRenderer = DeferredItemsRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/DeferredItemsRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
