// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=dil_text/src/text_elements/ItalicElement
// args: e
function {
  return false;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=120B file=dil_text/src/text_elements/ItalicElement
// args: e, t, o
function {
  o.pushFontStyle(undefined, undefined, true, undefined);
  t.pushFont(o.resolveFont());
  return 1;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=131B file=dil_text/src/text_elements/ItalicElement
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ItalicElement = undefined;
  e = ["value"];
  exports.ItalicElement = {properties: e, dilV2Properties: [], createsParagraph: function <atom:0>, pushStyle: function <atom:0>};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/text_elements/ItalicElement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
