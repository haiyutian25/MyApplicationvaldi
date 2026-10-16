// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=52B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
function {
  if (!(Array.isArray(t))) goto L_2e;
  return t;
  return [t, i];
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// closure: this, e
function {
  return this.makeProcessor(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// closure: this, e
function {
  return this.makeProcessor(t, e);   // tail call
}

// fn <atom:0>  args=2 vars=11 closure=3 cpool=2 bc=1068B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, s
// locals: t#1, s#1, e, o, n, a, c, d, this
// closure: r, Configuration, i
function {
  this = this;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_13;
  s;
  s = {};
  s#1 = {};
  let d;
  let c;
  let a;
  let n;
  let o;
  let e;
  if (!((s.priority == null))) goto L_92;
  s.priority;
  e = r.PrioritizedList.DEFAULTPRIORITY;
  if (!(s.init)) goto L_104;
  goto L_105;
  // [栈深重同步 1 -> 0]
  o = null;
  if (!(s.config)) goto L_177;
  goto L_178;
  // [栈深重同步 1 -> 0]
  n = null;
  if ((s.preprocessors)) goto L_1a3;
  a = [].map(function <atom:0>);
  if ((s.postprocessors)) goto L_1f4;
  c = [].map(function <atom:0>);
  if ((s.parser)) goto L_247;
  d = "tex";
  if ((s[i.ConfigurationType.HANDLER])) goto L_29a;
  if ((s[i.ConfigurationType.FALLBACK])) goto L_2e6;
  if ((s[i.ConfigurationType.ITEMS])) goto L_332;
  if ((s[i.ConfigurationType.TAGS])) goto L_37e;
  if ((s[i.ConfigurationType.OPTIONS])) goto L_3ca;
  if ((s[i.ConfigurationType.NODES])) goto L_416;
  return new Configuration(t, {}, {}, {}, {}, {}, {}, a, c, o, n, e, d);
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=141B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
// locals: t#1, i#1, s
// closure: Configuration, exports
function {
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_10;
  i;
  i = {};
  i#1 = {};
  let s;
  s = Configuration._create(t, i);
  exports.ConfigurationHandler.set(t, s);
  return s;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=53B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// locals: t#1
// closure: Configuration
function {
  let t#1;
  if (!((t === undefined))) goto L_b;
  t;
  t = {};
  t#1 = {};
  return Configuration._create("", t);   // tail call
}

// fn <atom:0>  args=13 vars=27 closure=2 cpool=0 bc=722B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, s, e, o, r, n, a, c, d, h, g, p, u
// locals: t#1, s#1, e#1, o#1, r#1, n#1, a#1, c#1, d#1, h#1, g#1, p#1, u#1, this
// closure: <class_fields_init>, i
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let u#1;
  let p#1;
  let g#1;
  let h#1;
  let d#1;
  let c#1;
  let a#1;
  let n#1;
  let r#1;
  let o#1;
  let e#1;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_42;
  s;
  s = {};
  s#1 = {};
  if (!((e === undefined))) goto L_4b;
  e;
  e = {};
  e#1 = {};
  if (!((o === undefined))) goto L_54;
  o;
  o = {};
  o#1 = {};
  if (!((r === undefined))) goto L_61;
  r;
  r = {};
  r#1 = {};
  if (!((n === undefined))) goto L_6f;
  n;
  n = {};
  n#1 = {};
  if (!((a === undefined))) goto L_7d;
  a;
  a = {};
  a#1 = {};
  if (!((c === undefined))) goto L_8d;
  c;
  c = [];
  c#1 = [];
  if (!((d === undefined))) goto L_9d;
  d;
  d = [];
  d#1 = [];
  if (!((h === undefined))) goto L_ab;
  h;
  h = null;
  h#1 = null;
  if (!((g === undefined))) goto L_b9;
  g;
  g = null;
  g#1 = null;
  p#1 = p;
  u#1 = u;
  this.name = t;
  this.handler = s;
  this.fallback = e;
  this.items = o;
  this.tags = r;
  this.options = n;
  this.nodes = a;
  this.preprocessors = c;
  this.postprocessors = d;
  this.initMethod = h;
  this.configMethod = g;
  this.priority = p;
  this.parser = u;
  {}[i.HandlerType.CHARACTER] = [];
  [];
  {}[i.HandlerType.DELIMITER] = [];
  [];
  {}[i.HandlerType.MACRO] = [];
  [];
  {}[i.HandlerType.ENVIRONMENT] = [];
  [];
  this.handler = Object.assign({}, s);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/input/tex/Configuration
// locals: this
function {
  this = this;
  if (!(this.initMethod)) goto L_4b;
  return this.initMethod[0];
  return null;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/input/tex/Configuration
// locals: this
function {
  this = this;
  if (!(this.configMethod)) goto L_4b;
  return this.configMethod[0];
  return null;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=42B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
// closure: a
function {
  a.set(t, i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// closure: a
function {
  return a.get(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/Configuration
// closure: a
function {
  return a.keys();   // tail call
}

// fn <atom:0>  args=2 vars=8 closure=4 cpool=0 bc=616B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
// locals: t#1, i#1, s, s#1, e, this
// closure: <class_fields_init>, o, r, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let i#1;
  let t#1;
  t#1 = t;
  if (!((i === undefined))) goto L_28;
  i;
  i = ["tex"];
  i#1 = ["tex"];
  this.initMethod = new o.FunctionList();
  this.configMethod = new o.FunctionList();
  this.configurations = new r.PrioritizedList();
  this.parsers = [];
  this.handlers = new e.SubHandlers();
  this.items = {};
  this.tags = {};
  this.options = {};
  this.nodes = {};
  this.parsers = i;
  let s;
  for (const s of t.slice().reverse()) {
    this.addPackage(s);
  }
  let e;
  let s#1;
  for (const <v> of this.configurations) {
    s#1 = <to_object>(<value(_it2)>).item;
    e = <to_object>(<value(_it2)>).priority;
    <to_object>(<value(_it2)>);
    this.append(s#1, e);
  }
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/input/tex/Configuration
// locals: this
function {
  this = this;
  this.initMethod.execute(this);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=198B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// locals: i, this
function {
  this = this;
  this.configMethod.execute(this, t);
  let i;
  for (const i of this.configurations) {
    this.addFilters(t, i.item);
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=198B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// locals: i, s, this
function {
  this = this;
  let s;
  let i;
  if (!(("string" == typeof t))) goto L_15;
  goto L_18;
  // [栈深重同步 1 -> 0]
  i = t[0];
  s = this.getPackage(i);
  if (!(s)) goto L_c5;
  if (!(("string" == typeof t))) goto L_bf;
  goto L_c2;
  // [栈深重同步 4 -> 3]
  this.configurations.add(s, t[1]);
  return;
}

// fn <atom:0>  args=3 vars=10 closure=2 cpool=0 bc=1035B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i, e
// locals: t#1, i#1, e#1, o, r, s, this
// closure: n, s
function {
  this = this;
  let e#1;
  let i#1;
  let t#1;
  t#1 = t;
  i#1 = i;
  if (!((e === undefined))) goto L_18;
  e;
  e = {};
  e#1 = {};
  let r;
  let o;
  o = this.getPackage(t);
  this.append(o);
  this.configurations.add(o, o.priority);
  this.init();
  r = i.parseOptions;
  r.nodeFactory.setCreators(o.nodes);
  let s;
  for (const s of Object.keys(o.items)) {
    r.itemFactory.setNodeClass(s, o.items[s]);
  }
  n.TagsFactory.addTags(o.tags);
  s.defaultOptions(r.options, o.options);
  s.userOptions(r.options, e);
  this.addFilters(i, o);
  if (!(o.config)) goto L_40a;
  o.config(this, i);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=344B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t
// locals: i, this
// closure: exports
function {
  this = this;
  let i;
  i = exports.ConfigurationHandler.get(t);
  if (!(i)) goto L_f8;
  if (!(!this.parsers.includes(i.parser))) goto L_f8;
  throw Error("Package '".concat(t, "' doesn't target the proper parser"));
  if ((i)) goto L_153;
  this.warn("Package '".concat(t, "' not found.  Omitted."));
  return i;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=986B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
// locals: this
// closure: s
function {
  this = this;
  if ((i)) goto L_29;
  i = t.priority;
  if (!(t.initMethod)) goto L_e1;
  this.initMethod.add(t.initMethod[0], t.initMethod[1]);
  if (!(t.configMethod)) goto L_199;
  this.configMethod.add(t.configMethod[0], t.configMethod[1]);
  this.handlers.add(t.handler, t.fallback, i);
  Object.assign(this.items, t.items);
  Object.assign(this.tags, t.tags);
  s.defaultOptions(this.options, t.options);
  Object.assign(this.nodes, t.nodes);
  return;
}

// fn <atom:0>  args=2 vars=6 closure=0 cpool=0 bc=273B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: t, i
// locals: s, e, s#1, e#1
function {
  let e;
  let s;
  const _it1 = i.preprocessors;
  goto L_82;
  const _it2 = <value(_it1)>;
  <done(_it2)>;
  s = <value(_it2)>;
  <done(_it2)>;
  e = <value(_it2)>;
  t.preFilters.add(s, e);
  if (!(<done(_it1)>)) goto L_2b;
  <value(_it1)>;
  let e#1;
  let s#1;
  const _it3 = i.postprocessors;
  goto L_10a;
  const _it4 = <value(_it3)>;
  <done(_it4)>;
  s#1 = <value(_it4)>;
  <done(_it4)>;
  e#1 = <value(_it4)>;
  t.postFilters.add(s#1, e#1);
  if (!(<done(_it3)>)) goto L_b3;
  <value(_it3)>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=89B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: i
// closure: t
function {
  if (!(t.isLoggingEnabled)) goto L_58;
  console.warn(("MathJax Warning: " + i));
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=19 bc=470B file=math_jax/src/mathjax_src/input/tex/Configuration
// args: require, module, exports
// locals: t, i, s, e, o, r, n, Configuration, <class_fields_init>, Configuration#1, a, ParserConfiguration, <class_fields_init>#1, ParserConfiguration#1
function {
  let ParserConfiguration#1;
  let a;
  let Configuration#1;
  let n;
  let r;
  let o;
  let e;
  let s;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Configuration = undefined;
  exports.ConfigurationHandler = undefined;
  exports.ParserConfiguration = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("./HandlerTypes");
  s = require("../../util/Options");
  e = require("./MapHandler");
  o = require("../../util/FunctionList");
  r = require("../../util/PrioritizedList");
  n = require("./Tags");
  let Configuration;
  let <class_fields_init>;
  class Configuration extends undefined { ... }
  function <atom:0>.makeProcessor = function <atom:0>;
  function <atom:0>._create = function <atom:0>;
  function <atom:0>.create = function <atom:0>;
  function <atom:0>.local = function <atom:0>;
  <proto:Configuration>.init = function <atom:0>;
  <proto:Configuration>.config = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Configuration>;
  Configuration = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Configuration
  Configuration#1 = function <atom:0>;
  exports.Configuration = Configuration#1;
  a = new Map();
  exports.ConfigurationHandler = {set: function <atom:0>, get: function <atom:0>, keys: function <atom:0>};
  let ParserConfiguration;
  let <class_fields_init>#1;
  class ParserConfiguration extends undefined { ... }
  <proto:ParserConfiguration>.init = function <atom:0>;
  <proto:ParserConfiguration>.config = function <atom:0>;
  <proto:ParserConfiguration>.addPackage = function <atom:0>;
  <proto:ParserConfiguration>.add = function <atom:0>;
  <proto:ParserConfiguration>.getPackage = function <atom:0>;
  <proto:ParserConfiguration>.append = function <atom:0>;
  <proto:ParserConfiguration>.addFilters = function <atom:0>;
  <proto:ParserConfiguration>.warn = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ParserConfiguration>;
  ParserConfiguration = function <atom:0>;
  // close_loc <class_fields_init>#1
  ParserConfiguration#1 = function <atom:0>;
  exports.ParserConfiguration = ParserConfiguration#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/Configuration
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
