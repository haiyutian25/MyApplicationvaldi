// fn t  args=2 vars=2 closure=1 cpool=0 bc=85B file=oai_platform_services/src/OAIExperimentService
// args: t, r
// closure: e
function {
  if (!((undefined !== t))) goto L_54;
  if (!(e.isVersionAtLeast(28))) goto L_54;
  return t.getLayer(r);   // tail call
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=oai_platform_services/src/OAIExperimentService
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.values = e;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=62B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getValue(e);
  if (!(("boolean" == typeof r))) goto L_3c;
  return r;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=108B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getValue(e);
  if (!(("number" == typeof r))) goto L_6a;
  if (!(Number.isFinite(r))) goto L_6a;
  return r;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=62B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getValue(e);
  if (!(("string" == typeof r))) goto L_3c;
  return r;
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=9B file=oai_platform_services/src/OAIExperimentService
// args: e
function {
  return ("string" == typeof e);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=145B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getValue(e);
  if (!(Array.isArray(r))) goto L_8f;
  if (!(r.every(function <atom:0>))) goto L_8f;
  // append([], 0, r)
  r;
  return [];
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=57B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: n, this
// closure: r
function {
  this = this;
  let n;
  n = this.getValue(e);
  if (!(r(n))) goto L_37;
  return n;
  return t;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=96B file=oai_platform_services/src/OAIExperimentService
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  r = this.getValue(e);
  if (!(Array.isArray(r))) goto L_5e;
  return r;
  return t;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=64B file=oai_platform_services/src/OAIExperimentService
// args: e
// locals: t, this
// closure: r, ExperimentDynamicConfig
function {
  this = this;
  let t;
  t = this.getValue(e);
  if (!(r(t))) goto L_3e;
  return new ExperimentDynamicConfig(t);
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=185B file=oai_platform_services/src/OAIExperimentService
// args: e
// locals: this
function {
  this = this;
  if (!(Object.prototype.hasOwnProperty.call(this.values, e))) goto L_b7;
  return this.values[e];
  return undefined;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=63B file=oai_platform_services/src/OAIExperimentService
// args: e
function {
  if (!((null !== e))) goto L_3e;
  if (!(("object" == typeof e))) goto L_3e;
  return !Array.isArray(e);
}

// fn n  args=2 vars=3 closure=3 cpool=0 bc=168B file=oai_platform_services/src/OAIExperimentService
// args: t, n
// locals: e
// closure: e, r, ExperimentDynamicConfig
function {
  if (!((undefined !== t))) goto L_a7;
  if (!(e.isVersionAtLeast(224))) goto L_a7;
  let e;
  e = JSON.parse(t.getDynamicConfigJson(n));
  if (!(!r(e))) goto L_9c;
  throw new TypeError("Dynamic config snapshot must be a JSON object");
  return new ExperimentDynamicConfig(e);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=12 bc=242B file=oai_platform_services/src/OAIExperimentService
// args: require, module, exports
// locals: e, t, ExperimentDynamicConfig, <class_fields_init>, ExperimentDynamicConfig#1, r, n
function {
  t = function t;
  r = function r;
  n = function n;
  let ExperimentDynamicConfig#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.experimentLayer = undefined;
  exports.ExperimentDynamicConfig = undefined;
  exports.experimentDynamicConfig = undefined;
  e = require("valdi_core/src/CompilerIntrinsics");
  exports.experimentLayer = t;
  let ExperimentDynamicConfig;
  let <class_fields_init>;
  class ExperimentDynamicConfig extends undefined { ... }
  <proto:ExperimentDynamicConfig>.getBoolean = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getNumber = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getString = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getStringList = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getObject = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getArray = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getConfig = function <atom:0>;
  <proto:ExperimentDynamicConfig>.getValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ExperimentDynamicConfig>;
  ExperimentDynamicConfig = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc ExperimentDynamicConfig
  ExperimentDynamicConfig#1 = function <atom:0>;
  exports.ExperimentDynamicConfig = ExperimentDynamicConfig#1;
  exports.experimentDynamicConfig = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/OAIExperimentService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
