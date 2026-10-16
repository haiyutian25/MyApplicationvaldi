// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=cel/src/CELCallSpecs
// args: t, i
// closure: e
function {
  return e.contains(i[0], t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.endsWith(e, t[0]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.indexOf(e, t[0], t[1]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=cel/src/CELCallSpecs
// args: t, i
// closure: e
function {
  return e.join(t, i[0]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.lastIndexOf(e, t[0], t[1]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.matches(e, t[0]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.replace(e, t[0], t[1]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=cel/src/CELCallSpecs
// args: e
// closure: t
function {
  return t.sizeValue(e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.split(e, t[0], t[1]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=43B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.startsWith(e, t[0]);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=46B file=cel/src/CELCallSpecs
// args: e, t
// closure: i
function {
  return i.substring(e, t[0], t[1]);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=11 bc=561B file=cel/src/CELCallSpecs
// args: require, module, exports
// locals: e, t, i
function {
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DEFAULT_RECEIVER_CALL_SPECS = undefined;
  exports.DEFAULT_RECEIVER_MACRO_SPECS = undefined;
  e = require("./stdlib/Collections");
  t = require("./stdlib/StandardLibrary");
  i = require("./stdlib/String");
  exports.DEFAULT_RECEIVER_CALL_SPECS = {contains: {arity: 1, helper: function <atom:0>}, endsWith: {arity: 1, helper: function <atom:0>}, indexOf: {maxArity: 2, minArity: 1, helper: function <atom:0>}, join: {maxArity: 1, minArity: 0, helper: function <atom:0>}, lastIndexOf: {maxArity: 2, minArity: 1, helper: function <atom:0>}, matches: {arity: 1, cacheRegex: true, helper: function <atom:0>}, replace: {arity: 2, helper: function <atom:0>}, size: {arity: 0, helper: function <atom:0>}, split: {maxArity: 2, minArity: 1, helper: function <atom:0>}, startsWith: {arity: 1, helper: function <atom:0>}, substring: {maxArity: 2, minArity: 1, helper: function <atom:0>}};
  exports.DEFAULT_RECEIVER_MACRO_SPECS = {all: {name: "all", bodyCounts: [1]}, exists: {name: "exists", bodyCounts: [1]}, exists_one: {name: "exists_one", bodyCounts: [1]}, filter: {name: "filter", bodyCounts: [1]}, map: {name: "map", bodyCounts: [1, 2]}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/CELCallSpecs
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
