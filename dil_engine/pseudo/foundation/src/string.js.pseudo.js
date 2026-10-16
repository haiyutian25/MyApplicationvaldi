// fn e  args=1 vars=1 closure=0 cpool=8 bc=177B file=foundation/src/string
// args: e
function {
  return e.replace(new RegExp("\\?.*"), "").replace(new RegExp("[^a-z0-9 -]"), "").replace(new RegExp("\\s+"), "-").replace(new RegExp("-+"), "-");   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=foundation/src/string
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.slugifyUrlPath = undefined;
  exports.slugifyUrlPath = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/string
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
