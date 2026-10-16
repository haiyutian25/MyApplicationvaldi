// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=368B file=widgets/src/components/section/SectionBody
// locals: o, this
// closure: r, e, t
function {
  this = this;
  let o;
  if (!(this.viewModel.fullBleed)) goto L_4d;
  goto L_92;
  // [栈深重同步 1 -> 0]
  o = r.Subscreen.GUTTER_SIZE;
  e.beginRender(t, undefined);
  e.setAttributeNumber("paddingLeft", o);
  e.setAttributeNumber("paddingRight", o);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/section/SectionBody
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=273B file=widgets/src/components/section/SectionBody
// args: require, module, exports
// locals: e, t, o, r, SectionBody, <class_fields_init>, SectionBody#1
function {
  let SectionBody#1;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SectionBody = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "9XMFSr3ZUZ-lRp2f");
  o = require("valdi_core/src/Component");
  r = require("widgets/src/components/subscreen/Subscreen");
  let SectionBody;
  let <class_fields_init>;
  class SectionBody extends o.Component { ... }
  <proto:SectionBody>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SectionBody>;
  SectionBody = function <atom:0>;
  // close_loc <class_fields_init>
  SectionBody#1 = function <atom:0>;
  exports.SectionBody = SectionBody#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/section/SectionBody
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
