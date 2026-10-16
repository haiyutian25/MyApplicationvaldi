// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=14B file=web_platform/src/WebIDL
// args: e
function {
  if (!((2 === e.length))) goto L_8;
  return e;
  return "�";
}

// fn e  args=1 vars=1 closure=0 cpool=3 bc=81B file=web_platform/src/WebIDL
// args: e
function {
  return "".concat(e).replace(new RegExp("[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDFFF]"), function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=web_platform/src/WebIDL
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.usvString = undefined;
  exports.usvString = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=web_platform/src/WebIDL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
