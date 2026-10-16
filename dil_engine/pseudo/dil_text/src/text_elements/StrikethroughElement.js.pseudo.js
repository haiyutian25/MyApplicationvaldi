// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/StrikethroughElement
// args: e
function {
  return false;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=96B file=dil_text/src/text_elements/StrikethroughElement
// args: r, t, o
// locals: i
// closure: e
function {
  let i;
  i = e.readTextDecorationFromValue(true, undefined);
  if (!((undefined !== i))) goto L_5e;
  t.pushTextDecoration(i);
  return 1;
  return 0;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=138B file=dil_text/src/text_elements/StrikethroughElement
// args: require, module, exports
// locals: e, r
function {
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StrikethroughElement = undefined;
  e = require("../rendering/DILTextProperties");
  r = ["value"];
  exports.StrikethroughElement = {properties: r, dilV2Properties: [], createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/StrikethroughElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
