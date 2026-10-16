// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_core/src/DILDebugEventsRecorder
// args: e
function {
  e.CREATE = "create";
  e.DESTROY = "destroy";
  e.VIEW_MODEL_UPDATE = "viewModelUpdate";
  e.JSON_PATCH = "jsonPatch";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=27B file=dil_core/src/DILDebugEventsRecorder
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.count = 0;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_core/src/DILDebugEventsRecorder
// closure: d
function {
  return d;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=138B file=dil_core/src/DILDebugEventsRecorder
// args: e, t
// locals: this
// closure: o
function {
  this = this;
  this.record({type: o.CREATE, contextId: e, date: Date.now(), viewModel: t});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=132B file=dil_core/src/DILDebugEventsRecorder
// args: e
// locals: this
// closure: o
function {
  this = this;
  this.record({type: o.DESTROY, contextId: e, date: Date.now()});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=138B file=dil_core/src/DILDebugEventsRecorder
// args: e, t
// locals: this
// closure: o
function {
  this = this;
  this.record({type: o.VIEW_MODEL_UPDATE, contextId: e, date: Date.now(), viewModel: t});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=138B file=dil_core/src/DILDebugEventsRecorder
// args: e, t
// locals: this
// closure: o
function {
  this = this;
  this.record({type: o.JSON_PATCH, contextId: e, date: Date.now(), jsonPatch: t});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=266B file=dil_core/src/DILDebugEventsRecorder
// locals: e, t, this
// closure: r
function {
  this = this;
  let t;
  let e;
  e = [];
  t = this.head;
  if (!((undefined !== t))) goto L_af;
  e.push(r(t.event));
  t = t.next;
  t.next;
  goto L_2f;
  return Promise.resolve({payload: JSON.stringify(e)});   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=484B file=dil_core/src/DILDebugEventsRecorder
// args: o
// locals: r, d, this
// closure: t, e
function {
  this = this;
  let d;
  let r;
  r = (o.date - t);
  if (!((undefined !== this.head))) goto L_eb;
  if (!((r > this.head.event.date))) goto L_eb;
  this.removeFirst();
  goto L_2f;
  d = {event: o};
  if (!((undefined === this.tail))) goto L_129;
  this.head = d;
  goto L_158;
  // [栈深重同步 1 -> 0]
  this.tail.next = d;
  d;
  this.tail = d;
  this.count = (this.count + 1);
  if (!((this.count > e))) goto L_1e3;
  this.removeFirst();
  goto L_193;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=220B file=dil_core/src/DILDebugEventsRecorder
// locals: this
function {
  this = this;
  if (!((undefined !== this.head))) goto L_db;
  this.head = this.head.next;
  this.count = (this.count - 1);
  if (!((undefined === this.head))) goto L_db;
  this.tail = undefined;
  undefined;
  return;
}

// fn r  args=1 vars=2 closure=0 cpool=0 bc=378B file=dil_core/src/DILDebugEventsRecorder
// args: e
// locals: t
function {
  let t;
  t = e.jsonPatch;
  if (!((t == null))) goto L_d5;
  t;
  goto L_f6;
  if (!((undefined === undefined.patchObject))) goto L_127;
  if (!((t == null))) goto L_104;
  t;
  goto L_174;
  goto L_174;
  // [栈深重同步 2 -> 1]
  return {type: e.type, contextId: String(e.contextId), date: e.date, viewModel: e.viewModel, jsonPatch: JSON.stringify(t.patchObject)};
}

// fn s  args=0 vars=0 closure=1 cpool=0 bc=75B file=dil_core/src/DILDebugEventsRecorder
// closure: DILDebugEventsRecorder
function {
  return DILDebugEventsRecorder.get().collectDebugRecordedEvents();   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=12 bc=246B file=dil_core/src/DILDebugEventsRecorder
// args: require, module, exports
// locals: e, t, o, DILDebugEventsRecorder, <class_fields_init>, DILDebugEventsRecorder#1, r, d, s
function {
  r = function r;
  s = function s;
  let d;
  let DILDebugEventsRecorder#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILDebugEventsRecorder = undefined;
  exports.collectDebugRecordedEvents = undefined;
  e = 1024;
  t = 600000;
  if ((o)) goto L_75;
  o = {};
  !function <atom:0>({});
  let DILDebugEventsRecorder;
  let <class_fields_init>;
  class DILDebugEventsRecorder extends undefined { ... }
  function <atom:0>.get = function <atom:0>;
  <proto:DILDebugEventsRecorder>.recordCreate = function <atom:0>;
  <proto:DILDebugEventsRecorder>.recordDestroy = function <atom:0>;
  <proto:DILDebugEventsRecorder>.recordViewModelUpdate = function <atom:0>;
  <proto:DILDebugEventsRecorder>.recordJsonPatch = function <atom:0>;
  <proto:DILDebugEventsRecorder>.collectDebugRecordedEvents = function <atom:0>;
  <proto:DILDebugEventsRecorder>.record = function <atom:0>;
  <proto:DILDebugEventsRecorder>.removeFirst = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILDebugEventsRecorder>;
  DILDebugEventsRecorder = function <atom:0>;
  // close_loc <class_fields_init>
  DILDebugEventsRecorder#1 = function <atom:0>;
  exports.DILDebugEventsRecorder = DILDebugEventsRecorder#1;
  d = new DILDebugEventsRecorder#1();
  exports.collectDebugRecordedEvents = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILDebugEventsRecorder
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
