// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=110B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// closure: i, this, p
function {
  i.openURL(this.context.navigator, p);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=185B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// closure: i, this, p
function {
  i.openURL(this.context.navigator, p, {presentation: i.OpenURLPresentation.Embedded});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=2 bc=77B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// locals: this, this.active_func, new.target, arguments
// closure: i, p, <class_fields_init>
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
  this.openMemoryFAQ = function <atom:0>;
  this.openMemoryFAQEmbedded = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=0 bc=795B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// locals: this
// closure: e, o, c, s, t, n, r
function {
  this = this;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", c.actions);
  e.beginComponent(s.Button, t, undefined, undefined);
  e.setViewModelProperty("onPress", this.openMemoryFAQ);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.beginComponent(s.Button, r, undefined, undefined);
  e.setViewModelProperty("onPress", this.openMemoryFAQEmbedded);
  e.setViewModelProperty("size", n.OAIControlSize.Sm);
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=2 bc=609B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// args: require, module, exports
// locals: e, o, t, r, n, i, s, d, a, p, OAIWebLauncherFixture, <class_fields_init>, OAIWebLauncherFixture#1, c
function {
  let c;
  let OAIWebLauncherFixture#1;
  let p;
  let a;
  let d;
  let s;
  let i;
  let n;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OAIWebLauncherFixture = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("view", undefined, "8NmY3dUZiljU8szW");
  t = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.web_launcher.open_url.run", "label", "Open Memory FAQ"], "0V8FRvbknW8Z_rYa");
  r = e.makeComponentPrototype(["accessibilityId", "oai_integration_fixture.web_launcher.open_url.embedded", "label", "Open Memory FAQ Embedded"], "ZHSTgrY8zIXSdLrW");
  n = require("oai_core/src/OAITokens");
  i = require("oai_web_launcher/src/openURL");
  s = require("oai_ui/src/components/Button");
  d = require("valdi_core/src/Component");
  a = require("valdi_core/src/Style");
  p = "https://help.openai.com/articles/8590148-memory-faq";
  let OAIWebLauncherFixture;
  let <class_fields_init>;
  class OAIWebLauncherFixture extends d.Component { ... }
  <proto:OAIWebLauncherFixture>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OAIWebLauncherFixture>;
  OAIWebLauncherFixture = function <atom:0>;
  // close_loc <class_fields_init>
  OAIWebLauncherFixture#1 = function <atom:0>;
  exports.OAIWebLauncherFixture = OAIWebLauncherFixture#1;
  c = {actions: new a.Style({alignItems: "flex-start", flexDirection: "column", gap: n.OAISpacing.One})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_integration_fixtures/src/fixtures/OAIWebLauncherFixture
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
