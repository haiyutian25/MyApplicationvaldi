// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=825B file=dil_core/src/DILSandboxCrashView
// closure: e, o, a, t, r, n, d
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", a.root);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", a.indicator);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", a.content);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", a.title);
  e.endRender();
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", a.message);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_core/src/DILSandboxCrashView
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

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=1041B file=dil_core/src/DILSandboxCrashView
// args: require, module, exports
// locals: e, o, t, r, n, d, i, s, l, DILSandboxCrashView, <class_fields_init>, DILSandboxCrashView#1, a
function {
  let a;
  let DILSandboxCrashView#1;
  let l;
  let s;
  let i;
  let d;
  let n;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILSandboxCrashView = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("view", undefined, "bljyg75B-EogKk8r");
  t = e.makeNodePrototype("view", undefined, "DoutJ1NnWBo5C3UJ");
  r = e.makeNodePrototype("view", undefined, "S33sjQjrmPACRN9p");
  n = e.makeNodePrototype("label", ["value", "Component crashed"], "ONjZ8Y5Y4sv_0kEg");
  d = e.makeNodePrototype("label", ["value", "This component stopped responding and was disabled."], "Cfur5U0MeTO-zkf5");
  i = require("dil_core/src/typography/DILDynamicFont");
  s = require("valdi_core/src/Component");
  l = require("valdi_core/src/Style");
  let DILSandboxCrashView;
  let <class_fields_init>;
  class DILSandboxCrashView extends s.Component { ... }
  <proto:DILSandboxCrashView>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILSandboxCrashView>;
  DILSandboxCrashView = function <atom:0>;
  // close_loc <class_fields_init>
  DILSandboxCrashView#1 = function <atom:0>;
  exports.DILSandboxCrashView = DILSandboxCrashView#1;
  a = {root: new l.Style({width: "100%", maxWidth: 420, minHeight: 64, padding: 12, gap: 10, flexDirection: "row", alignItems: "center", backgroundColor: "color-surface-elevated", borderColor: "color-border-danger-outline", borderWidth: 1, borderRadius: 10, accessibilityLabel: "Component crashed"}), indicator: new l.Style({width: 8, height: 8, borderRadius: 4, backgroundColor: "color-text-danger", flexShrink: 0}), content: new l.Style({flexGrow: 1, flexShrink: 1, gap: 2}), title: new l.Style({numberOfLines: 1, color: "color-text-danger", font: i.dynamicBoldSystemFontForSize(13)}), message: new l.Style({numberOfLines: 0, color: "color-text-secondary", font: i.dynamicSystemFontForSize(12)})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILSandboxCrashView
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
