// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=62B file=valdi_core/src/ViewNodeAssetTracker
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.assetStateById = {};
  this._assetCount = 0;
  this.onAllAssetsLoadedCallbacks = [];
  this.assetStateRoot = undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=valdi_core/src/ViewNodeAssetTracker
// locals: this
function {
  this = this;
  return this._assetCount;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=141B file=valdi_core/src/ViewNodeAssetTracker
// args: e, s, t
// locals: this
function {
  this = this;
  if (!((e === 1))) goto L_31;
  this.onBeganRequestingLoadedAsset(s);
  goto L_8c;
  if (!((e === 2))) goto L_5f;
  this.onEndRequestingLoadedAsset(s);
  goto L_8c;
  if (!((e === 3))) goto L_8c;
  this.onLoadedAssetChanged(s, t);
  e;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=232B file=valdi_core/src/ViewNodeAssetTracker
// locals: e, s, this
function {
  this = this;
  let s;
  let e;
  e = undefined;
  s = this.assetStateRoot;
  if (!(s)) goto L_e4;
  if (!(s.error)) goto L_b7;
  if ((e)) goto L_6b;
  e = [];
  [];
  e.push(s.error);
  s = s.next;
  s.next;
  goto L_2d;
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=112B file=valdi_core/src/ViewNodeAssetTracker
// args: e
// locals: this
function {
  this = this;
  this.onAllAssetsLoadedCallbacks.push(e);
  this.flushAllAssetsLoadedIfNeeded();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=279B file=valdi_core/src/ViewNodeAssetTracker
// args: e
// locals: s, t, this
function {
  this = this;
  let t;
  let s;
  s = e.prev;
  t = e.next;
  if (!(s)) goto L_65;
  s.next = t;
  t;
  if (!(t)) goto L_7d;
  t.prev = s;
  s;
  this._assetCount = (this._assetCount --);
  if (!((e === this.assetStateRoot))) goto L_ff;
  this.assetStateRoot = e.next;
  e.next;
  e.prev = undefined;
  e.next = undefined;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=186B file=valdi_core/src/ViewNodeAssetTracker
// args: e
// locals: this
function {
  this = this;
  this._assetCount = (this._assetCount ++);
  if (!(this.assetStateRoot)) goto L_ad;
  this.assetStateRoot.prev = e;
  e.next = this.assetStateRoot;
  this.assetStateRoot;
  this.assetStateRoot = e;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=172B file=valdi_core/src/ViewNodeAssetTracker
// locals: e, this
function {
  this = this;
  let e;
  e = this.assetStateRoot;
  if (!(e)) goto L_a9;
  if (!(!e.loaded)) goto L_7e;
  if (!(!e.error)) goto L_7e;
  return false;
  e = e.next;
  e.next;
  goto L_28;
  return true;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=153B file=valdi_core/src/ViewNodeAssetTracker
// locals: e, s, this
function {
  this = this;
  if (!(this.areAllAssetsLoaded())) goto L_98;
  if (!((this.onAllAssetsLoadedCallbacks.length > 0))) goto L_98;
  let e;
  e = this.onAllAssetsLoadedCallbacks;
  this.onAllAssetsLoadedCallbacks = [];
  let s;
  for (const s of e) {
    s();
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=239B file=valdi_core/src/ViewNodeAssetTracker
// args: e
// locals: s, t, this
function {
  this = this;
  let t;
  let s;
  s = this.assetStateById[e];
  if (!(s)) goto L_5c;
  this.removeAssetState(s);
  t = {prev: undefined, next: undefined, loaded: false, error: undefined};
  this.assetStateById[e] = t;
  this.appendAssetState(t);
  this.flushAllAssetsLoadedIfNeeded();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=165B file=valdi_core/src/ViewNodeAssetTracker
// args: e
// locals: s, this
function {
  this = this;
  let s;
  s = this.assetStateById[e];
  delete e;
  if (!(s)) goto L_7e;
  this.removeAssetState(s);
  this.assetStateById;
  this.flushAllAssetsLoadedIfNeeded();
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=114B file=valdi_core/src/ViewNodeAssetTracker
// args: e, s
// locals: t, this
function {
  this = this;
  let t;
  t = this.assetStateById[e];
  if (!(t)) goto L_71;
  t.loaded = !s;
  t.error = s;
  this.flushAllAssetsLoadedIfNeeded();
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=12 bc=195B file=valdi_core/src/ViewNodeAssetTracker
// args: require, module, exports
// locals: ViewNodeAssetTracker, <class_fields_init>, ViewNodeAssetTracker#1
function {
  let ViewNodeAssetTracker#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ViewNodeAssetTracker = undefined;
  let ViewNodeAssetTracker;
  let <class_fields_init>;
  class ViewNodeAssetTracker extends undefined { ... }
  <proto:ViewNodeAssetTracker>.assetsCount = function <atom:0>;
  <proto:ViewNodeAssetTracker>.onAssetEvent = function <atom:0>;
  <proto:ViewNodeAssetTracker>.collectErrors = function <atom:0>;
  <proto:ViewNodeAssetTracker>.onAllAssetsLoaded = function <atom:0>;
  <proto:ViewNodeAssetTracker>.removeAssetState = function <atom:0>;
  <proto:ViewNodeAssetTracker>.appendAssetState = function <atom:0>;
  <proto:ViewNodeAssetTracker>.areAllAssetsLoaded = function <atom:0>;
  <proto:ViewNodeAssetTracker>.flushAllAssetsLoadedIfNeeded = function <atom:0>;
  <proto:ViewNodeAssetTracker>.onBeganRequestingLoadedAsset = function <atom:0>;
  <proto:ViewNodeAssetTracker>.onEndRequestingLoadedAsset = function <atom:0>;
  <proto:ViewNodeAssetTracker>.onLoadedAssetChanged = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ViewNodeAssetTracker>;
  ViewNodeAssetTracker = function <atom:0>;
  // close_loc <class_fields_init>
  ViewNodeAssetTracker#1 = function <atom:0>;
  exports.ViewNodeAssetTracker = ViewNodeAssetTracker#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/ViewNodeAssetTracker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
