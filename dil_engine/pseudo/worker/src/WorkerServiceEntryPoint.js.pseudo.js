// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=worker/src/WorkerServiceEntryPoint
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=worker/src/WorkerServiceEntryPoint
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=175B file=worker/src/WorkerServiceEntryPoint
// args: t
// locals: o, <class_fields_init>
// closure: r, e
function {
  let o;
  let <class_fields_init>;
  class o extends t { ... }
  <class_fields_init> = undefined;
  <proto:o>;
  // close_loc <class_fields_init>
  o = function <atom:0>;
  o.file = r.path;
  o.executorIdentifier = e;
  Object.defineProperty(o, "name", {value: t.name});
  return o;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=3B file=worker/src/WorkerServiceEntryPoint
// args: e, r
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=142B file=worker/src/WorkerServiceEntryPoint
// args: require, module, exports
// locals: WorkerServiceEntryPoint, <class_fields_init>, WorkerServiceEntryPoint#1, e
function {
  let e;
  let WorkerServiceEntryPoint#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WorkerServiceEntryPoint = undefined;
  exports.workerService = undefined;
  let WorkerServiceEntryPoint;
  let <class_fields_init>;
  class WorkerServiceEntryPoint extends undefined { ... }
  <class_fields_init> = undefined;
  <proto:WorkerServiceEntryPoint>;
  WorkerServiceEntryPoint = function <atom:0>;
  // close_loc <class_fields_init>
  WorkerServiceEntryPoint#1 = function <atom:0>;
  exports.WorkerServiceEntryPoint = WorkerServiceEntryPoint#1;
  e = function <atom:0>;
  exports.workerService = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/src/WorkerServiceEntryPoint
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
