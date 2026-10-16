// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=902B file=valdi_core/src/debugging/Styles
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.fonts = undefined;
  exports.colors = undefined;
  exports.styles = undefined;
  e = require("../Style");
  exports.fonts = {body: "Menlo-Regular 12", medium: "Menlo-Bold 12", title: "Menlo-Bold 16"};
  exports.colors = {errorText: "#ff0000", infoText: "white", tagBracket: "#808080", tagComponent: "#4EC9B0", tagElement: "#569cd6", comment: "#6A9955", expression: "#C8C8C8", attributeName: "#9CDCFE", attributeValue: "#CE9178", special: "#C586C0"};
  exports.styles = {console: new e.Style({backgroundColor: "#1E1E1E", padding: 8, borderRadius: 8}), mainBackground: new e.Style({backgroundColor: "#252526"}), consoleText: new e.Style({color: "#D4D4D4", font: exports.fonts.body}), infoText: new e.Style({color: "black", font: exports.fonts.medium}), bodyText: new e.Style({color: "white", font: exports.fonts.body}), bodyStrongText: new e.Style({color: "white", font: exports.fonts.medium})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/Styles
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
