// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/UnderlineElement
// args: e
function {
  return false;
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=133B file=dil_text/src/text_elements/UnderlineElement
// args: r, t, n
// locals: o
// closure: e
function {
  let o;
  if (!((r.underline == null))) goto L_51;
  r.underline;
  o = e.readTextDecorationFromValue(undefined, true);
  if (!(o)) goto L_83;
  t.pushTextDecoration(o);
  return 1;
  return 0;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=143B file=dil_text/src/text_elements/UnderlineElement
// args: require, module, exports
// locals: e, r
function {
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.UnderlineElement = undefined;
  e = require("../rendering/DILTextProperties");
  r = ["value", "underline"];
  exports.UnderlineElement = {properties: r, dilV2Properties: [], createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/UnderlineElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
