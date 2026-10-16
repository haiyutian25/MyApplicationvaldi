// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=232B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: this
// closure: <class_fields_init>, r
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.elementsMetadata = e;
  this.attachedStringIndexes = new Map();
  this.attachedValues = [];
  this.buffer = new r.Buffer(512);
  this.functionsById = new Map();
  this.functionIds = new WeakMap();
  this.nextFunctionId = 1;
  this.interactionScopes = [];
  this.callbackProps = new Map();
  this.callbackUpdates = [];
  this.writingCallbacks = [];
  this.retiredCallbacks = [];
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=228B file=dil_sandbox/src/DILRenderOperations
// locals: this
function {
  this = this;
  this.callbackUpdates.length = 0;
  this.retiredCallbacks = [];
  this.buffer.rewind();
  this.attachedValues = [];
  this.attachedStringIndexes.clear();
  this.interactionScopes = [];
  return;
}

// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=1686B file=dil_sandbox/src/DILRenderOperations
// locals: t, e, t#1, e#1, this
function {
  this = this;
  let e#1;
  let t;
  for (const t of this.callbackUpdates) {
    let e;
    if (!((this.callbackProps.get(t.nodeId) == null))) goto L_ad;
    this.callbackProps.get(t.nodeId);
    e = new Map();
    if (!((undefined !== t.callbacks))) goto L_368;
    if (!((e.get(t.propName) == null))) goto L_174;
    e.get(t.propName);
    // append([], 0, [])
    [];
    this.retiredCallbacks.push.apply(this.retiredCallbacks, []);
    if (!((t.callbacks.length > 0))) goto L_215;
    goto L_260;
    // [栈深重同步 4 -> 3]
    e.delete(t.propName);
    if (!((e.size > 0))) goto L_2f9;
    goto L_364;
    // [栈深重同步 4 -> 3]
    this.callbackProps.delete(t.nodeId);
   continue;
    let t#1;
    for (const t#1 of e.values()) {
      // append([], 0, t#1)
      t#1;
      this.retiredCallbacks.push.apply(this.retiredCallbacks, []);
      // [栈深重同步 3 -> 6]
    }
    this.callbackProps.delete(t.nodeId);
  }
  this.callbackUpdates.length = 0;
  e#1 = {descriptor: this.buffer.inner().slice(0, this.buffer.size()), descriptorSize: this.buffer.size(), attachedValues: this.attachedValues, interactionScopes: this.interactionScopes};
  this.buffer.rewind();
  this.attachedValues = [];
  this.attachedStringIndexes.clear();
  this.interactionScopes = [];
  return e#1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=228B file=dil_sandbox/src/DILRenderOperations
// locals: this
function {
  this = this;
  this.callbackUpdates.length = 0;
  this.writingCallbacks = [];
  this.buffer.rewind();
  this.attachedValues = [];
  this.attachedStringIndexes.clear();
  this.interactionScopes = [];
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=201B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  if (!((this.functionsById.get(e) == null))) goto L_54;
  this.functionsById.get(e);
  goto L_78;
  r = undefined.deref();
  if (!((undefined === r))) goto L_b9;
  throw new Error("Unknown DIL sandbox function ".concat(e, "."));
  // append([], 0, t)
  t;
  return r.apply(undefined, []);
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=57B file=dil_sandbox/src/DILRenderOperations
// locals: e, this
function {
  this = this;
  let e;
  e = this.retiredCallbacks;
  this.retiredCallbacks = [];
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=195B file=dil_sandbox/src/DILRenderOperations
// locals: this
function {
  this = this;
  this.discardBatch();
  this.callbackProps.clear();
  this.retiredCallbacks = [];
  this.functionsById.clear();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=114B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: this
function {
  this = this;
  this.writeOperation(1);
  this.buffer.putUint32_2(e, t);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=86B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: this
function {
  this = this;
  this.interactionScopes.push({nodeId: e, scope: t});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=151B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: this
function {
  this = this;
  this.writeOperation(2);
  this.buffer.putUint32_2(e, this.attach(t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=203B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: this
function {
  this = this;
  this.callbackUpdates.push({nodeId: e, propName: undefined, callbacks: undefined});
  this.writeOperation(3);
  this.buffer.putUint32(e);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=115B file=dil_sandbox/src/DILRenderOperations
// args: e, t, r
// locals: this
function {
  this = this;
  this.writeOperation(4);
  this.buffer.putUint32_3(e, t, r);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=192B file=dil_sandbox/src/DILRenderOperations
// args: e, t, r
// locals: this
function {
  this = this;
  this.writeOperation(5);
  this.buffer.putUint32_2(e, this.attach(t));
  this.writePropValue(e, t, r);
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=154B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: this
function {
  this = this;
  this.writeOperation(7);
  this.buffer.putUint32(e);
  this.writePropValue(e, undefined, t);
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=191B file=dil_sandbox/src/DILRenderOperations
// args: e, t, r
// locals: this
function {
  this = this;
  this.writingCallbacks = [];
  this.writeValue(r);
  this.callbackUpdates.push({nodeId: e, propName: t, callbacks: this.writingCallbacks});
  this.writingCallbacks = [];
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=151B file=dil_sandbox/src/DILRenderOperations
// args: e, t
// locals: this
function {
  this = this;
  this.writeOperation(6);
  this.buffer.putUint32_2(e, this.attach(t));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: this
function {
  this = this;
  this.buffer.putUint32(e);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=0 bc=406B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: t, r, t#1, this
function {
  this = this;
  let t#1;
  if (!(("string" == typeof e))) goto L_126;
  let r;
  let t;
  t = this.attachedStringIndexes.get(e);
  if (!((undefined !== t))) goto L_6b;
  return t;
  r = this.attachedValues.length;
  this.attachedValues.push(e);
  this.attachedStringIndexes.set(e, r);
  return r;
  t#1 = this.attachedValues.length;
  this.attachedValues.push(e);
  return t#1;
}

// fn <atom:0>  args=1 vars=6 closure=3 cpool=0 bc=1703B file=dil_sandbox/src/DILRenderOperations
// args: r
// locals: e, e#1, i, t, this
// closure: e, n, t
function {
  this = this;
  if (!((undefined !== r))) goto L_65d;
  if (!((null !== r))) goto L_613;
  if (!((false !== r))) goto L_5c9;
  if (!((true !== r))) goto L_57f;
  if (!(("number" == typeof r))) goto L_c5;
  this.buffer.putUint32(4);
  this.buffer.putFloat64(r);
  return;
  if (!(("string" != typeof r))) goto L_50e;
  if (!(("function" == typeof r))) goto L_19a;
  this.writingCallbacks.push(r);
  this.buffer.putUint32_2(8, this.getFunctionId(r));
  return;
  if (!(Array.isArray(r))) goto L_24d;
  this.buffer.putUint32_2(6, r.length);
  let e;
  for (const e of r) {
    this.writeValue(e);
  }
  return;
  if (!(e.isDILRuntimeElement(r))) goto L_29e;
  this.writeRuntimeElement(r);
  return;
  if (!(n(r))) goto L_49c;
  let i;
  let e#1;
  e#1 = t.getDILHtmlViewMessengerHost(r);
  if (!((undefined !== e#1))) goto L_372;
  this.buffer.putUint32_2(12, this.attach(e#1.channelId));
  return;
  i = Object.keys(r);
  this.buffer.putUint32_2(7, i.length);
  let t;
  for (const t of i) {
    this.buffer.putUint32(this.attach(t));
    this.writeValue(r[t]);
  }
  return;
  this.buffer.putUint32_2(11, this.attach(r));
  return;
  this.buffer.putUint32_2(5, this.attach(r));
  return;
  this.buffer.putUint32(3);
  return;
  this.buffer.putUint32(2);
  return;
  this.buffer.putUint32(1);
  return;
  this.buffer.putUint32(0);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=606B file=dil_sandbox/src/DILRenderOperations
// args: t
// locals: r, i, this
// closure: e
function {
  this = this;
  let i;
  let r;
  r = t.type;
  if (((r === e.DIL_FRAGMENT))) goto L_61;
  if (!(("function" == typeof r))) goto L_f8;
  this.buffer.putUint32(10);
  this.writeValue(t.children);
  return;
  i = this.elementsMetadata[r];
  if (!((undefined === i))) goto L_161;
  throw new Error("Unknown DIL element type "".concat(r, ""."));
  this.buffer.putUint32_2(9, i.typeId);
  this.writeValue(t.props);
  this.writeValue(t.children);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=330B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: t, this
// closure: i
function {
  this = this;
  let t;
  t = this.functionIds.get(e);
  if (!((undefined === t))) goto L_d2;
  this.nextFunctionId = <this.nextFunctionId_new>;
  t = (this.nextFunctionId++);
  (this.nextFunctionId++);
  this.functionIds.set(e, t);
  this.functionsById.set(t, new i.WeakRef(e));
  return t;
}

// fn s  args=3 vars=4 closure=1 cpool=0 bc=222B file=dil_sandbox/src/DILRenderOperations
// args: e, t, r
// locals: i
// closure: DILRenderOperationsReader
function {
  new DILRenderOperationsReader(e, t, r).apply();
  let i;
  if (!((e.interactionScopes == null))) goto L_5c;
  e.interactionScopes;
  for (const i of []) {
    if (!((t.onNodeInteractionScopeChanged == null))) goto L_8b;
    t.onNodeInteractionScopeChanged;
    t;
    goto L_d6;
    // [栈深重同步 4 -> 5]
    <?>.call(undefined, i.nodeId, i.scope);
  }
  return;
}

// fn <atom:0>  args=3 vars=5 closure=1 cpool=0 bc=312B file=dil_sandbox/src/DILRenderOperations
// args: e, t, r
// locals: i, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let i;
  this.encoded = e;
  this.consumer = t;
  this.valueResolver = r;
  this.offset = 0;
  i = e.descriptorSize;
  if ((!Number.isInteger(i))) goto L_ed;
  if (((i < 0))) goto L_ed;
  if (((i > e.descriptor.byteLength))) goto L_ed;
  if (!(((i % 4) != 0))) goto L_fe;
  throw new Error("Invalid DIL render operations descriptor size.");
  this.view = new DataView(e.descriptor, 0, i);
  return;
}

// fn <atom:0>  args=0 vars=10 closure=1 cpool=0 bc=1452B file=dil_sandbox/src/DILRenderOperations
// locals: e, e#1, t, e#2, t#1, e#3, t#2, e#4, t#3, this
// closure: a
function {
  this = this;
  if (!((this.offset < this.view.byteLength))) goto L_5ab;
  let e;
  e = this.readUint32();
  if (!((e === 1))) goto L_14a;
  let t;
  let e#1;
  e#1 = this.readUint32();
  t = this.readUint32();
  this.consumer.onElementNodeCreated(e#1, t);
  goto L_5a7;
  if (!((e === 2))) goto L_1f8;
  let t#1;
  let e#2;
  e#2 = this.readUint32();
  t#1 = this.readString();
  this.consumer.onTextNodeCreated(e#2, t#1);
  goto L_5a7;
  if (!((e === 3))) goto L_26e;
  this.consumer.onNodeDestroyed(this.readUint32());
  goto L_5a7;
  if (!((e === 4))) goto L_333;
  this.consumer.onNodeMoved(this.readUint32(), this.readUint32(), this.readUint32());
  goto L_5a7;
  if (!((e === 5))) goto L_3f8;
  this.consumer.onNodePropChanged(this.readUint32(), this.readString(), this.readValue());
  goto L_5a7;
  if (!((e === 6))) goto L_4a7;
  let t#2;
  let e#3;
  e#3 = this.readUint32();
  t#2 = this.readString();
  this.consumer.onTextNodeChanged(e#3, t#2);
  goto L_5a7;
  if (!((e === 7))) goto L_56c;
  let t#3;
  let e#4;
  e#4 = this.readUint32();
  t#3 = this.readValue();
  if (!(!a(t#3))) goto L_51c;
  throw new Error("Invalid DIL render operation opaque children.");
  this.consumer.onNodeOpaqueChildrenChanged(e#4, t#3);
  goto L_5a7;
  throw new Error("Unknown DIL render operation kind ".concat(e, "."));
  e;
  goto L_3;
  return;
}

// fn <atom:0>  args=0 vars=12 closure=2 cpool=0 bc=1368B file=dil_sandbox/src/DILRenderOperations
// locals: t, e, t#1, r, e#1, t#2, r#1, t#3, r#2, i, t#4, this
// closure: n, e
function {
  this = this;
  let t;
  t = this.readUint32();
  if (!((t === 0))) goto L_36;
  t;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === 1))) goto L_3d;
  return null;
  if (!((<?> === 2))) goto L_45;
  return false;
  if (!((<?> === 3))) goto L_4d;
  return true;
  if (!((<?> === 4))) goto L_78;
  return this.readFloat64();   // tail call
  if (!((<?> === 5))) goto L_a3;
  return this.readString();   // tail call
  if (!((<?> === 6))) goto L_146;
  let t#1;
  let e;
  e = this.readUint32();
  t#1 = [];
  let r;
  r = 0;
  if (!((r < e))) goto L_142;
  t#1.push(this.readValue());
  r = <r_new>;
  (r++);
  goto L_e1;
  return t#1;
  if (!((<?> === 7))) goto L_1ed;
  let t#2;
  let e#1;
  e#1 = this.readUint32();
  t#2 = {};
  let r#1;
  r#1 = 0;
  if (!((r#1 < e#1))) goto L_1e9;
  t#2[this.readString()] = this.readValue();
  r#1 = <r#1_new>;
  (r#1++);
  goto L_185;
  return t#2;
  if (!((<?> === 8))) goto L_260;
  return this.valueResolver.resolveFunction(this.readUint32());   // tail call
  if (!((<?> === 9))) goto L_3bd;
  let i;
  let r#2;
  let t#3;
  t#3 = this.valueResolver.resolveType(this.readUint32());
  r#2 = this.readValue();
  if (!((undefined !== r#2))) goto L_327;
  if (!(!n(r#2))) goto L_327;
  throw new Error("Invalid DIL render operation element props.");
  i = this.readValue();
  if (!(!Array.isArray(i))) goto L_38d;
  throw new Error("Invalid DIL render operation element children.");
  return e.createDilElement(t#3, r#2, i);   // tail call
  if (!((<?> === 10))) goto L_47e;
  let t#4;
  t#4 = this.readValue();
  if (!(!Array.isArray(t#4))) goto L_42f;
  throw new Error("Invalid DIL render operation fragment children.");
  return e.createDilElement(e.DIL_FRAGMENT, undefined, t#4);   // tail call
  if (!((<?> === 11))) goto L_4aa;
  return this.readAttached();   // tail call
  if (!((<?> === 12))) goto L_51d;
  return this.valueResolver.resolveHtmlViewMessenger(this.readString());   // tail call
  throw new Error("Unknown DIL render value kind ".concat(t, "."));
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=74B file=dil_sandbox/src/DILRenderOperations
// locals: e, this
function {
  this = this;
  let e;
  e = this.readAttached();
  if (!(("string" != typeof e))) goto L_46;
  throw new Error("Invalid DIL render operation string value.");
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=204B file=dil_sandbox/src/DILRenderOperations
// locals: e, this
function {
  this = this;
  let e;
  e = this.readUint32();
  if (!((e >= this.encoded.attachedValues.length))) goto L_84;
  throw new Error("Invalid DIL render operation attached value index.");
  return this.encoded.attachedValues[e];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=282B file=dil_sandbox/src/DILRenderOperations
// locals: e, this
function {
  this = this;
  let e;
  if (!(((this.offset + 4) > this.view.byteLength))) goto L_7e;
  throw new Error("Truncated DIL render operations descriptor.");
  e = this.view.getUint32(this.offset, true);
  this.offset = (this.offset + 4);
  return e;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=284B file=dil_sandbox/src/DILRenderOperations
// locals: e, this
function {
  this = this;
  let e;
  if (!(((this.offset + 8) > this.view.byteLength))) goto L_7f;
  throw new Error("Truncated DIL render operations descriptor.");
  e = this.view.getFloat64(this.offset, true);
  this.offset = (this.offset + 8);
  return e;
}

// fn n  args=1 vars=2 closure=1 cpool=0 bc=160B file=dil_sandbox/src/DILRenderOperations
// args: t
// locals: r
// closure: e
function {
  let r;
  if (((null === t))) goto L_3c;
  if ((("object" != typeof t))) goto L_3c;
  if (!(e.isDILRuntimeElement(t))) goto L_41;
  return false;
  r = Object.getPrototypeOf(t);
  if (((null === r))) goto L_9f;
  return (r === Object.prototype);
}

// fn a  args=1 vars=2 closure=1 cpool=0 bc=104B file=dil_sandbox/src/DILRenderOperations
// args: e
// locals: t
// closure: o
function {
  if (!(!Array.isArray(e))) goto L_30;
  return false;
  let t;
  for (const t of e) {
    if (!(("string" != typeof t))) continue;
    if (!(("number" != typeof t))) continue;
    if (!(!o(t))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn o  args=1 vars=1 closure=2 cpool=0 bc=131B file=dil_sandbox/src/DILRenderOperations
// args: e
// closure: n, a
function {
  if (!(!!n(e))) goto L_82;
  if (!(("string" == typeof e.type))) goto L_82;
  if (!(n(e.props))) goto L_82;
  return a(e.children);
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=32 bc=430B file=dil_sandbox/src/DILRenderOperations
// args: require, module, exports
// locals: e, t, r, i, DILRenderBufferDelegate, <class_fields_init>, DILRenderBufferDelegate#1, s, DILRenderOperationsReader, <class_fields_init>#1, DILRenderOperationsReader#1, n, a, o
function {
  s = function s;
  n = function n;
  a = function a;
  o = function o;
  let DILRenderOperationsReader#1;
  let DILRenderBufferDelegate#1;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILRenderBufferDelegate = undefined;
  exports.applyDILRenderOperations = undefined;
  e = require("dil_renderer/src/DILElement");
  t = require("dil_renderer/src/DILHtmlViewMessenger");
  r = require("valdi_core/src/utils/Buffer");
  i = require("./WeakRef");
  let DILRenderBufferDelegate;
  let <class_fields_init>;
  class DILRenderBufferDelegate extends undefined { ... }
  <proto:DILRenderBufferDelegate>.beginBatch = function <atom:0>;
  <proto:DILRenderBufferDelegate>.finishBatch = function <atom:0>;
  <proto:DILRenderBufferDelegate>.discardBatch = function <atom:0>;
  <proto:DILRenderBufferDelegate>.invokeFunction = function <atom:0>;
  <proto:DILRenderBufferDelegate>.takeRetiredCallbacks = function <atom:0>;
  <proto:DILRenderBufferDelegate>.dispose = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onElementNodeCreated = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onNodeInteractionScopeChanged = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onTextNodeCreated = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onNodeDestroyed = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onNodeMoved = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onNodePropChanged = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onNodeOpaqueChildrenChanged = function <atom:0>;
  <proto:DILRenderBufferDelegate>.writePropValue = function <atom:0>;
  <proto:DILRenderBufferDelegate>.onTextNodeChanged = function <atom:0>;
  <proto:DILRenderBufferDelegate>.writeOperation = function <atom:0>;
  <proto:DILRenderBufferDelegate>.attach = function <atom:0>;
  <proto:DILRenderBufferDelegate>.writeValue = function <atom:0>;
  <proto:DILRenderBufferDelegate>.writeRuntimeElement = function <atom:0>;
  <proto:DILRenderBufferDelegate>.getFunctionId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILRenderBufferDelegate>;
  DILRenderBufferDelegate = function <atom:0>;
  // close_loc <class_fields_init>
  DILRenderBufferDelegate#1 = function <atom:0>;
  exports.DILRenderBufferDelegate = DILRenderBufferDelegate#1;
  exports.applyDILRenderOperations = s;
  let DILRenderOperationsReader;
  let <class_fields_init>#1;
  class DILRenderOperationsReader extends undefined { ... }
  <proto:DILRenderOperationsReader>.apply = function <atom:0>;
  <proto:DILRenderOperationsReader>.readValue = function <atom:0>;
  <proto:DILRenderOperationsReader>.readString = function <atom:0>;
  <proto:DILRenderOperationsReader>.readAttached = function <atom:0>;
  <proto:DILRenderOperationsReader>.readUint32 = function <atom:0>;
  <proto:DILRenderOperationsReader>.readFloat64 = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:DILRenderOperationsReader>;
  DILRenderOperationsReader = function <atom:0>;
  // close_loc <class_fields_init>#1
  DILRenderOperationsReader#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILRenderOperations
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
