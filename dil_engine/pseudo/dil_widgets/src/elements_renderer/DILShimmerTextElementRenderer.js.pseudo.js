// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=47B file=dil_widgets/src/elements_renderer/DILShimmerTextElementRenderer
// locals: this.active_func, new.target, this
// closure: r, <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("shimmer-text", r);
  if (!(<class_fields_init>)) goto L_29;
  <class_fields_init>.call(this);
  new new.target("shimmer-text", r);
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=dil_widgets/src/elements_renderer/DILShimmerTextElementRenderer
function {
  return true;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=283B file=dil_widgets/src/elements_renderer/DILShimmerTextElementRenderer
// args: require, module, exports
// locals: e, t, r, DILShimmerTextElementRenderer, <class_fields_init>, DILShimmerTextElementRenderer#1
function {
  let DILShimmerTextElementRenderer#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILShimmerTextElementRenderer = undefined;
  e = require("dil_text/src/text_elements/TextElement");
  t = require("./DILTextElementRenderer");
  null;
  e.TextElement;
  r = {dilV2Properties: ["color", "italic", "lineThrough", "maxLines", "minLines", "size", "tabularNums", "textAlign", "truncate", "weight", "width"]};
  let DILShimmerTextElementRenderer;
  let <class_fields_init>;
  class DILShimmerTextElementRenderer extends t.DILTextElementRenderer { ... }
  <proto:DILShimmerTextElementRenderer>.shimmer = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILShimmerTextElementRenderer>;
  DILShimmerTextElementRenderer = function <atom:0>;
  // close_loc <class_fields_init>
  DILShimmerTextElementRenderer#1 = function <atom:0>;
  exports.DILShimmerTextElementRenderer = DILShimmerTextElementRenderer#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/elements_renderer/DILShimmerTextElementRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
