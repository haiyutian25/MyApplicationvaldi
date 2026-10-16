// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=64B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.depth = 0;
  this.minDepth = 0;
  this.entries = [];
  this.componentNamesStack = [];
  return;
}

// fn <atom:0>  args=0 vars=9 closure=0 cpool=0 bc=257B file=valdi_core/src/debugging/RendererEventRecorder
// locals: e, n, t, r, s, t#1, o, e#1, this
function {
  this = this;
  let s;
  let r;
  let t;
  let n;
  let e;
  e = Math.abs(this.minDepth);
  n = this.entries;
  t = n.length;
  r = "";
  s = 0;
  if (!((s < t))) goto L_fd;
  let o;
  let t#1;
  s = <s_new>;
  t#1 = (n[(s++)] + e);
  s = <s_new>;
  o = n[(s++)];
  let e#1;
  e#1 = 0;
  if (!((e#1 < t#1))) goto L_e1;
  r = (r + "  ");
  (r + "  ");
  e#1 = <e#1_new>;
  (e#1++);
  goto L_c0;
  r = (r + o);
  (r + o);
  r = (r + "
");
  (r + "
");
  goto L_8d;
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=108B file=valdi_core/src/debugging/RendererEventRecorder
// args: e
// locals: this
function {
  this = this;
  this.entries.push(this.depth, e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.appendLine("Begin render");
  this.depth = (this.depth ++);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=83B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.decrementDepth();
  this.appendLine("End render");
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=252B file=valdi_core/src/debugging/RendererEventRecorder
// args: e, n
// locals: t, this
function {
  this = this;
  let t;
  t = n.name;
  this.appendLine("Begin ".concat(t, " (key: ", e, ")"));
  this.componentNamesStack.push(t);
  this.depth = (this.depth ++);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=206B file=valdi_core/src/debugging/RendererEventRecorder
// locals: e, this
function {
  this = this;
  let e;
  e = this.componentNamesStack.pop();
  this.decrementDepth();
  if (!((e == null))) goto L_c7;
  e;
  this.appendLine("End ".concat("<unknown>"));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=133B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.depth = (this.depth --);
  this.minDepth = Math.min(this.minDepth, (this.depth --));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=45B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.appendLine("Bypass render");
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=87B file=valdi_core/src/debugging/RendererEventRecorder
// args: e
// locals: this
function {
  this = this;
  this.appendLine("ViewModel property '".concat(e, "' changed"));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=40B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.buffer = [];
  this.maxBufferSize = 0;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=16B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.buffer = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=91B file=valdi_core/src/debugging/RendererEventRecorder
// args: e
// locals: this
function {
  this = this;
  if (!((e !== this.maxBufferSize))) goto L_5a;
  this.maxBufferSize = e;
  this.shrinkToMaxBufferSizeIfNeeded();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=93B file=valdi_core/src/debugging/RendererEventRecorder
// locals: e, this
// closure: RendererEventsToString
function {
  this = this;
  let e;
  e = new RendererEventsToString();
  this.visit(e);
  return e.toString();   // tail call
}

// fn <atom:0>  args=1 vars=9 closure=0 cpool=0 bc=475B file=valdi_core/src/debugging/RendererEventRecorder
// args: e
// locals: n, t, r, t#1, t#2, s, t#3, this
function {
  this = this;
  let r;
  let t;
  let n;
  n = this.buffer;
  t = n.length;
  r = 0;
  if (!((r < t))) goto L_1da;
  let t#1;
  r = <r_new>;
  t#1 = n[(r++)];
  if (!((t#1 === 1))) goto L_83;
  e.onRenderBegin();
  goto L_1d6;
  if (!((t#1 === 2))) goto L_b1;
  e.onRenderEnd();
  goto L_1d6;
  if (!((t#1 === 3))) goto L_105;
  let s;
  let t#2;
  r = <r_new>;
  t#2 = n[(r++)];
  r = <r_new>;
  s = n[(r++)];
  e.onComponentBegin(t#2, s);
  goto L_1d6;
  if (!((t#1 === 4))) goto L_133;
  e.onComponentEnd();
  goto L_1d6;
  if (!((t#1 === 5))) goto L_160;
  e.onBypassComponentRender();
  goto L_1d6;
  if (!((t#1 === 6))) goto L_1a0;
  let t#3;
  r = <r_new>;
  t#3 = n[(r++)];
  e.onComponentViewModelPropertyChange(t#3);
  goto L_1d6;
  throw new Error("Invalid type: ".concat(t#1));
  t#1;
  goto L_37;
  return;
}

// fn <atom:0>  args=0 vars=6 closure=0 cpool=0 bc=303B file=valdi_core/src/debugging/RendererEventRecorder
// locals: e, n, t, r, n#1, this
function {
  this = this;
  let t;
  let n;
  let e;
  e = this.buffer;
  n = e.length;
  t = this.maxBufferSize;
  if (!(t)) goto L_12e;
  let r;
  r = 0;
  if (!(((n - r) > t))) goto L_f9;
  let n#1;
  r = <r_new>;
  n#1 = e[(r++)];
  if (((n#1 === 1))) goto L_f5;
  if (((n#1 === 2))) goto L_f5;
  if (((n#1 === 4))) goto L_f5;
  if (!((n#1 === 5))) goto L_9f;
  goto L_f5;
  if (!((n#1 === 3))) goto L_b0;
  r = (r + 2);
  (r + 2);
  goto L_f5;
  if (!((n#1 === 6))) goto L_bf;
  r = <r_new>;
  (r++);
  goto L_f5;
  throw new Error("Invalid type: ".concat(n#1));
  n#1;
  goto L_66;
  if (!((r > 0))) goto L_12d;
  e.splice(0, r);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.buffer.push(1);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.buffer.push(2);
  this.shrinkToMaxBufferSizeIfNeeded();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=76B file=valdi_core/src/debugging/RendererEventRecorder
// args: e, n
// locals: this
function {
  this = this;
  this.buffer.push(3, e, n);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.buffer.push(4);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=valdi_core/src/debugging/RendererEventRecorder
// locals: this
function {
  this = this;
  this.buffer.push(5);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=75B file=valdi_core/src/debugging/RendererEventRecorder
// args: e
// locals: this
function {
  this = this;
  this.buffer.push(6, e);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=22 bc=319B file=valdi_core/src/debugging/RendererEventRecorder
// args: require, module, exports
// locals: RendererEventsToString, <class_fields_init>, RendererEventsToString#1, RendererEventRecorder, <class_fields_init>#1, RendererEventRecorder#1
function {
  let RendererEventRecorder#1;
  let RendererEventsToString#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RendererEventsToString = undefined;
  exports.RendererEventRecorder = undefined;
  let RendererEventsToString;
  let <class_fields_init>;
  class RendererEventsToString extends undefined { ... }
  <proto:RendererEventsToString>.toString = function <atom:0>;
  <proto:RendererEventsToString>.appendLine = function <atom:0>;
  <proto:RendererEventsToString>.onRenderBegin = function <atom:0>;
  <proto:RendererEventsToString>.onRenderEnd = function <atom:0>;
  <proto:RendererEventsToString>.onComponentBegin = function <atom:0>;
  <proto:RendererEventsToString>.onComponentEnd = function <atom:0>;
  <proto:RendererEventsToString>.decrementDepth = function <atom:0>;
  <proto:RendererEventsToString>.onBypassComponentRender = function <atom:0>;
  <proto:RendererEventsToString>.onComponentViewModelPropertyChange = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RendererEventsToString>;
  RendererEventsToString = function <atom:0>;
  // close_loc <class_fields_init>
  RendererEventsToString#1 = function <atom:0>;
  exports.RendererEventsToString = RendererEventsToString#1;
  let RendererEventRecorder;
  let <class_fields_init>#1;
  class RendererEventRecorder extends undefined { ... }
  <proto:RendererEventRecorder>.clear = function <atom:0>;
  <proto:RendererEventRecorder>.setMaxBufferSize = function <atom:0>;
  <proto:RendererEventRecorder>.toString = function <atom:0>;
  <proto:RendererEventRecorder>.visit = function <atom:0>;
  <proto:RendererEventRecorder>.shrinkToMaxBufferSizeIfNeeded = function <atom:0>;
  <proto:RendererEventRecorder>.onRenderBegin = function <atom:0>;
  <proto:RendererEventRecorder>.onRenderEnd = function <atom:0>;
  <proto:RendererEventRecorder>.onComponentBegin = function <atom:0>;
  <proto:RendererEventRecorder>.onComponentEnd = function <atom:0>;
  <proto:RendererEventRecorder>.onBypassComponentRender = function <atom:0>;
  <proto:RendererEventRecorder>.onComponentViewModelPropertyChange = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:RendererEventRecorder>;
  RendererEventRecorder = function <atom:0>;
  // close_loc <class_fields_init>#1
  RendererEventRecorder#1 = function <atom:0>;
  exports.RendererEventRecorder = RendererEventRecorder#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/RendererEventRecorder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
