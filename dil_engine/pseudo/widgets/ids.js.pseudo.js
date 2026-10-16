// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=widgets/ids
function {
  return "widgets/container";
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=6B file=widgets/ids
function {
  return "widgets/ptr_container";
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=2 bc=83B file=widgets/ids
// args: require, module, exports
function {
  if (!(module)) goto L_e;
  module.sourceMapLineOffset = 1;
  module.exports.Ids = {container: function <atom:0>, ptrContainer: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/ids
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
