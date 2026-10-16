// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=49B file=valdi_core/src/provider/ProviderSource
// args: e, r, o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.parent = e;
  this.key = r;
  this.value = o;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=213B file=valdi_core/src/provider/ProviderSource
// args: e
// locals: this
function {
  this = this;
  if (!((this.key.keyName === e.keyName))) goto L_8d;
  return this.value;
  return this.parent.getValue(e);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=180B file=valdi_core/src/provider/ProviderSource
// args: e
// locals: this
function {
  this = this;
  if (((this.key.keyName === e.keyName))) goto L_b3;
  return this.parent.hasValue(e);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=13B file=valdi_core/src/provider/ProviderSource
// args: e, r
// locals: this
// closure: ProviderSourceWithValue
function {
  this = this;
  return new ProviderSourceWithValue(this, e, r);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=valdi_core/src/provider/ProviderSource
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=90B file=valdi_core/src/provider/ProviderSource
// args: e
function {
  throw new Error("Could not resolve Value for Provider Key '".concat(e.keyName, "'"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=valdi_core/src/provider/ProviderSource
// args: e
function {
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=13B file=valdi_core/src/provider/ProviderSource
// args: e, r
// locals: this
// closure: ProviderSourceWithValue
function {
  this = this;
  return new ProviderSourceWithValue(this, e, r);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/provider/ProviderSource
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.providerSources = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=226B file=valdi_core/src/provider/ProviderSource
// args: e
// locals: r, this
function {
  this = this;
  let r;
  for (const r of this.providerSources) {
    if (!(r.hasValue(e))) continue;
    return r.getValue(e);
    // [栈深重同步 0 -> 3]
  }
  throw new Error("Could not resolve Value for Provider Key '".concat(e.keyName, "'"));
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=101B file=valdi_core/src/provider/ProviderSource
// args: e
// locals: r, this
function {
  this = this;
  let r;
  for (const r of this.providerSources) {
    if (!(r.hasValue(e))) continue;
    return true;
    // [栈深重同步 0 -> 3]
  }
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=13B file=valdi_core/src/provider/ProviderSource
// args: e, r
// locals: this
// closure: ProviderSourceWithValue
function {
  this = this;
  return new ProviderSourceWithValue(this, e, r);
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=12 bc=263B file=valdi_core/src/provider/ProviderSource
// args: require, module, exports
// locals: ProviderSourceWithValue, <class_fields_init>, ProviderSourceWithValue#1, ProviderSourceHead, <class_fields_init>#1, ProviderSourceHead#1, ProviderSourceList, <class_fields_init>#2, ProviderSourceList#1
function {
  let ProviderSourceList#1;
  let ProviderSourceHead#1;
  let ProviderSourceWithValue#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProviderSourceHead = undefined;
  exports.ProviderSourceList = undefined;
  let ProviderSourceWithValue;
  let <class_fields_init>;
  class ProviderSourceWithValue extends undefined { ... }
  <proto:ProviderSourceWithValue>.getValue = function <atom:0>;
  <proto:ProviderSourceWithValue>.hasValue = function <atom:0>;
  <proto:ProviderSourceWithValue>.withValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ProviderSourceWithValue>;
  ProviderSourceWithValue = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc ProviderSourceWithValue
  ProviderSourceWithValue#1 = function <atom:0>;
  let ProviderSourceHead;
  let <class_fields_init>#1;
  class ProviderSourceHead extends undefined { ... }
  <proto:ProviderSourceHead>.getValue = function <atom:0>;
  <proto:ProviderSourceHead>.hasValue = function <atom:0>;
  <proto:ProviderSourceHead>.withValue = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ProviderSourceHead>;
  ProviderSourceHead = function <atom:0>;
  // close_loc <class_fields_init>#1
  ProviderSourceHead#1 = function <atom:0>;
  exports.ProviderSourceHead = ProviderSourceHead#1;
  let ProviderSourceList;
  let <class_fields_init>#2;
  class ProviderSourceList extends undefined { ... }
  <proto:ProviderSourceList>.getValue = function <atom:0>;
  <proto:ProviderSourceList>.hasValue = function <atom:0>;
  <proto:ProviderSourceList>.withValue = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:ProviderSourceList>;
  ProviderSourceList = function <atom:0>;
  // close_loc <class_fields_init>#2
  ProviderSourceList#1 = function <atom:0>;
  exports.ProviderSourceList = ProviderSourceList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/provider/ProviderSource
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
