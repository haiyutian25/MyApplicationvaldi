// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_test_utils/src/MockIntlDateTimeFormat
// args: t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.format = t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=valdi_test_utils/src/MockIntlDateTimeFormat
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.locale = t;
  this.options = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=77B file=valdi_test_utils/src/MockIntlDateTimeFormat
// args: t
// locals: this
// closure: e
function {
  this = this;
  return e(t, this.locale, this.options);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=2 bc=288B file=valdi_test_utils/src/MockIntlDateTimeFormat
// args: t
// locals: e, <class_fields_init>, this
function {
  this = this;
  let e;
  if (((undefined !== this.target))) goto L_51;
  if (!((undefined !== t.Intl))) goto L_54;
  return;
  this.originalIntl = Object.getOwnPropertyDescriptor(t, "Intl");
  e = this.format;
  let <class_fields_init>;
  class DateTimeFormat extends undefined { ... }
  <proto:DateTimeFormat>.format = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DateTimeFormat>;
  // close_loc <class_fields_init>
  Object.defineProperty(t, "Intl", {configurable: true, writable: true, value: {DateTimeFormat: function <atom:0>}});
  this.target = t;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=293B file=valdi_test_utils/src/MockIntlDateTimeFormat
// locals: this
function {
  this = this;
  if (!((undefined !== this.target))) goto L_124;
  if (!((undefined !== this.originalIntl))) goto L_c7;
  goto L_117;
  // [栈深重同步 1 -> 0]
  Reflect.deleteProperty(this.target, "Intl");
  this.target = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=123B file=valdi_test_utils/src/MockIntlDateTimeFormat
// args: require, module, exports
// locals: MockIntlDateTimeFormat, <class_fields_init>, MockIntlDateTimeFormat#1
function {
  let MockIntlDateTimeFormat#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MockIntlDateTimeFormat = undefined;
  let MockIntlDateTimeFormat;
  let <class_fields_init>;
  class MockIntlDateTimeFormat extends undefined { ... }
  <proto:MockIntlDateTimeFormat>.install = function <atom:0>;
  <proto:MockIntlDateTimeFormat>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MockIntlDateTimeFormat>;
  MockIntlDateTimeFormat = function <atom:0>;
  // close_loc <class_fields_init>
  MockIntlDateTimeFormat#1 = function <atom:0>;
  exports.MockIntlDateTimeFormat = MockIntlDateTimeFormat#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_test_utils/src/MockIntlDateTimeFormat
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
