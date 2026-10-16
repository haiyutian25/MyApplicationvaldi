// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=foundation/src/staticImplements
// args: e
function {
  return;
}

// fn e  args=0 vars=0 closure=0 cpool=1 bc=3B file=foundation/src/staticImplements
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/staticImplements
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.staticImplements = undefined;
  exports.staticImplements = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/staticImplements
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
