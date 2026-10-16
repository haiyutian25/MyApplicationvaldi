// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=71B file=dil_core/src/DILElicitationVisibility
// closure: this
function {
  return this.update(this.visible);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=1 bc=168B file=dil_core/src/DILElicitationVisibility
// args: t, i, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.handler = t;
  this.getAction = i;
  this.accepted = new Set();
  this.pending = new Set();
  this.visible = false;
  this.observation = 0;
  this.disposed = false;
  if (!((e == null))) goto L_78;
  e;
  goto L_9e;
  this.hostSubscription = undefined.subscribe(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=93B file=dil_core/src/DILElicitationVisibility
// locals: this
function {
  this = this;
  this.disposed = true;
  if (!((this.hostSubscription == null))) goto L_38;
  this.hostSubscription;
  goto L_5c;
  undefined.unsubscribe();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=94B file=dil_core/src/DILElicitationVisibility
// args: t
// locals: this
function {
  this = this;
  this.visible = t;
  this.observation = (this.observation ++);
  return this.dispatch();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_core/src/DILElicitationVisibility
function {
  return false;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=232B file=dil_core/src/DILElicitationVisibility
// args: i
// closure: this, t, s
function {
  this.pending.delete(t);
  if (!(i)) goto L_98;
  goto L_e7;
  // [栈深重同步 1 -> 0]
  if (!((this.observation !== s))) goto L_e7;
  this.dispatch();
  return;
}

// fn <atom:0>  args=0 vars=5 closure=2 cpool=2 bc=755B file=dil_core/src/DILElicitationVisibility
// locals: i, a, t, s, this
// closure: t, e
function {
  this = this;
  let a;
  let i;
  if ((this.disposed)) goto L_54;
  if (!(!this.visible)) goto L_57;
  return;
  i = this.getAction();
  if (!((undefined === i))) goto L_86;
  return;
  a = t(i);
  if (!((undefined !== a))) goto L_2ef;
  let t;
  t = JSON.stringify(i.payload);
  if (!(!this.accepted.has(t))) goto L_2ec;
  if (!(!this.pending.has(t))) goto L_2ec;
  let s;
  this.pending.add(t);
  s = this.observation;
  if (!((i.payload == null))) goto L_260;
  i.payload;
  goto L_281;
  null;
  e(undefined.event_data);
  this.handler({handler: "client", type: "log_event", payload: {event_data: {elicitation_metadata: a}}}).catch(function <atom:0>).then(function <atom:0>);
  // close_loc s
  // close_loc t
  return i;
}

// fn t  args=1 vars=3 closure=1 cpool=0 bc=446B file=dil_core/src/DILElicitationVisibility
// args: t
// locals: i, a
// closure: e
function {
  let a;
  let i;
  if (!(("client" === t.handler))) goto L_a9;
  if (!(("log_event" === t.type))) goto L_a9;
  if (!((t.payload == null))) goto L_85;
  t.payload;
  goto L_a6;
  goto L_f8;
  // [栈深重同步 1 -> 0]
  if (!(("server" === t.handler))) goto L_f7;
  goto L_f8;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!((i == null))) goto L_105;
  i;
  goto L_126;
  a = e(undefined.elicitation_metadata);
  if (!((a == null))) goto L_138;
  a;
  goto L_159;
  if (!(("shown" === undefined.stage))) goto L_1bc;
  if (!(["automation_schedule", "thinking_effort_change", "file_upload"].includes(a.elicitation_type))) goto L_1bc;
  return a;
  return undefined;
}

// fn i  args=1 vars=5 closure=2 cpool=0 bc=394B file=dil_core/src/DILElicitationVisibility
// args: i
// locals: t, a, a#1, s
// closure: t, e
function {
  let s;
  let a#1;
  if (!((undefined === t(i)))) goto L_f;
  return i;
  if (!(("client" === i.handler))) goto L_114;
  let a;
  let t;
  if (((undefined === undefined))) goto L_7d;
  t = <to_object>(undefined).elicitation_metadata;
  a = {};
  <to_object>(undefined);
  {elicitation_metadata: null};
  goto L_d7;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!((i.payload == null))) goto L_a9;
  i.payload;
  goto L_ca;
  if (!((e(undefined.event_data) == null))) goto L_47;
  e(undefined.event_data);
  goto L_47;
  // [栈深重同步 1 -> 0]
  null;
  i;
  null;
  i.payload;
  return {payload: {event_data: a}};
  if (((undefined === undefined))) goto L_14f;
  a#1 = <to_object>(undefined).elicitation_metadata;
  s = {};
  <to_object>(undefined);
  {elicitation_metadata: null};
  goto L_17a;
  // [栈深重同步 0 -> 1]
  <?>;
  if (!((i.payload == null))) goto L_119;
  i.payload;
  goto L_119;
  // [栈深重同步 1 -> 0]
  null;
  i;
  return {payload: s};
}

// fn e  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_core/src/DILElicitationVisibility
// args: t
function {
  if (((null === t))) goto L_3d;
  if ((("object" != typeof t))) goto L_3d;
  if (!(Array.isArray(t))) goto L_41;
  return undefined;
  return t;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=7 bc=165B file=dil_core/src/DILElicitationVisibility
// args: require, module, exports
// locals: DILElicitationVisibility, <class_fields_init>, DILElicitationVisibility#1, t, i, e
function {
  t = function t;
  i = function i;
  e = function e;
  let DILElicitationVisibility#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILElicitationVisibility = undefined;
  exports.withoutElicitationShown = undefined;
  let DILElicitationVisibility;
  let <class_fields_init>;
  class DILElicitationVisibility extends undefined { ... }
  <proto:DILElicitationVisibility>.unsubscribe = function <atom:0>;
  <proto:DILElicitationVisibility>.update = function <atom:0>;
  <proto:DILElicitationVisibility>.dispatch = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILElicitationVisibility>;
  DILElicitationVisibility = function <atom:0>;
  // close_loc <class_fields_init>
  DILElicitationVisibility#1 = function <atom:0>;
  exports.DILElicitationVisibility = DILElicitationVisibility#1;
  exports.withoutElicitationShown = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILElicitationVisibility
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
