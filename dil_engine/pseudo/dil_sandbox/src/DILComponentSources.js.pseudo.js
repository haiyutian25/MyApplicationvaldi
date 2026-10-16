// fn n  args=1 vars=1 closure=2 cpool=0 bc=226B file=dil_sandbox/src/DILComponentSources
// args: e
// closure: t, o
function {
  if (!(t.DIL_COMPONENT_NAMES.includes(e))) goto L_e1;
  return !Object.prototype.hasOwnProperty.call(o.DIL_COMPONENT_SOURCES, e);
}

// fn r  args=2 vars=3 closure=1 cpool=0 bc=153B file=dil_sandbox/src/DILComponentSources
// args: o, t
// locals: n
// closure: e
function {
  let n;
  if (!((e.DIL_COMPONENT_SOURCES[o] == null))) goto L_54;
  e.DIL_COMPONENT_SOURCES[o];
  n = t.get(o);
  if (!((undefined === n))) goto L_95;
  throw new Error("DIL sandbox component '".concat(o, "' is not loaded."));
  return n;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=2 bc=199B file=dil_sandbox/src/DILComponentSources
// args: require, module, exports
// locals: e, o, t, n, r
function {
  n = function n;
  r = function r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_COMPONENT_SOURCES = undefined;
  exports.isDILRestrictedComponent = undefined;
  exports.getDILComponentSource = undefined;
  e = require("dil_generated_components/src/DILComponentSources.generated");
  o = require("dil_generated_components/src/DILPublicComponentSources.generated");
  t = require("dil_generated_components/src/DILComponentNames.generated");
  exports.DIL_COMPONENT_SOURCES = e.DIL_COMPONENT_SOURCES;
  exports.isDILRestrictedComponent = n;
  exports.getDILComponentSource = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILComponentSources
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
