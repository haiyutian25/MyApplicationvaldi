// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=valdi_core/src/Console
// args: o
function {
  o.Debug = 0;
  o[0] = "Debug";
  o.Log = 1;
  o[1] = "Log";
  o.Info = 2;
  o[2] = "Info";
  o.Warn = 3;
  o[3] = "Warn";
  o.Error = 4;
  o[4] = "Error";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/Console
// args: o
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.logFunction = o;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=195B file=valdi_core/src/Console
// args: o, t
// locals: r, i, this
// closure: s
function {
  this = this;
  let r;
  r = ["[JS]"];
  let i;
  for (const i of t) {
    r.push(s.debugStringify(i, 20, true));
  }
  this.logFunction(o, r.join(" "));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Console
// args: s
// locals: this
// closure: o
function {
  this = this;
  s = ...0;
  this.submit(o.Debug, s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Console
// args: s
// locals: this
// closure: o
function {
  this = this;
  s = ...0;
  this.submit(o.Log, s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Console
// args: s
// locals: this
// closure: o
function {
  this = this;
  s = ...0;
  this.submit(o.Info, s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Console
// args: s
// locals: this
// closure: o
function {
  this = this;
  s = ...0;
  this.submit(o.Warn, s);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=79B file=valdi_core/src/Console
// args: s
// locals: this
// closure: o
function {
  this = this;
  s = ...0;
  this.submit(o.Error, s);
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=8 bc=178B file=valdi_core/src/Console
// args: require, module, exports
// locals: o, s, Console, <class_fields_init>, Console#1
function {
  let Console#1;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Console = undefined;
  if ((o)) goto L_52;
  o = {};
  function <atom:0>({});
  s = require("./utils/StringUtils");
  let Console;
  let <class_fields_init>;
  class Console extends undefined { ... }
  <proto:Console>.submit = function <atom:0>;
  <proto:Console>.debug = function <atom:0>;
  <proto:Console>.log = function <atom:0>;
  <proto:Console>.info = function <atom:0>;
  <proto:Console>.warn = function <atom:0>;
  <proto:Console>.error = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Console>;
  Console = function <atom:0>;
  // close_loc <class_fields_init>
  Console#1 = function <atom:0>;
  exports.Console = Console#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/Console
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
