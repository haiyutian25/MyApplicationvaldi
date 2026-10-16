// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/BoldElement
// args: e
function {
  return false;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=162B file=dil_text/src/text_elements/BoldElement
// args: e, t, o
function {
  if (!((e.weight == null))) goto L_4f;
  e.weight;
  o.pushFontStyle(undefined, "bold", undefined, undefined);
  t.pushFont(o.resolveFont());
  return 1;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=141B file=dil_text/src/text_elements/BoldElement
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BoldElement = undefined;
  e = ["value", "weight"];
  exports.BoldElement = {properties: e, dilV2Properties: ["weight"], createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/BoldElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
