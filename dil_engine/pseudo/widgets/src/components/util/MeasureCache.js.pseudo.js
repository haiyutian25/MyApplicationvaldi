// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=121B file=widgets/src/components/util/MeasureCache
// args: s
// locals: this
// closure: <class_fields_init>, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.roundToPoints = s;
  this.subject = new e.Subject();
  this.observable$ = this.subject;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=widgets/src/components/util/MeasureCache
// args: e
// locals: this
function {
  this = this;
  this.subject.next(e);
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=126B file=widgets/src/components/util/MeasureCache
// args: require, module, exports
// locals: e, MeasureCache, <class_fields_init>, MeasureCache#1
function {
  let MeasureCache#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MeasureCache = undefined;
  e = require("valdi_rxjs/src/Subject");
  let MeasureCache;
  let <class_fields_init>;
  class MeasureCache extends undefined { ... }
  <proto:MeasureCache>.populate = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MeasureCache>;
  MeasureCache = function <atom:0>;
  // close_loc <class_fields_init>
  MeasureCache#1 = function <atom:0>;
  exports.MeasureCache = MeasureCache#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/util/MeasureCache
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
