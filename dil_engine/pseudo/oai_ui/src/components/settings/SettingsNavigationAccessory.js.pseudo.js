// fn <atom:0>  args=0 vars=2 closure=4 cpool=0 bc=556B file=oai_ui/src/components/settings/SettingsNavigationAccessory
// locals: i, this
// closure: o, e, t, s
function {
  this = this;
  let i;
  i = o.resolveSettingsTheme();
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", i.styles.navigationAccessory);
  e.renderUnnamedSlot(this);
  if (!(i.layout.navigationShowsDisclosure)) goto L_203;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", i.styles.navigationDisclosure);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/settings/SettingsNavigationAccessory
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=328B file=oai_ui/src/components/settings/SettingsNavigationAccessory
// args: require, module, exports
// locals: e, t, s, o, i, SettingsNavigationAccessory, <class_fields_init>, SettingsNavigationAccessory#1
function {
  let SettingsNavigationAccessory#1;
  let i;
  let o;
  let s;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SettingsNavigationAccessory = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "W5ShmcTo6QUyVJM-");
  s = e.makeNodePrototype("image", undefined, "sAKYK1rw1SvL8SrX");
  o = require("./SettingsTheme");
  i = require("valdi_core/src/Component");
  let SettingsNavigationAccessory;
  let <class_fields_init>;
  class SettingsNavigationAccessory extends i.Component { ... }
  <proto:SettingsNavigationAccessory>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SettingsNavigationAccessory>;
  SettingsNavigationAccessory = function <atom:0>;
  // close_loc <class_fields_init>
  SettingsNavigationAccessory#1 = function <atom:0>;
  exports.SettingsNavigationAccessory = SettingsNavigationAccessory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/settings/SettingsNavigationAccessory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
