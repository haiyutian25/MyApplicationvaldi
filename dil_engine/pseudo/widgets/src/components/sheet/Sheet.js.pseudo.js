// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=165B file=widgets/src/components/sheet/Sheet
// closure: e, i, b
function {
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", b.iOSBlurBackground);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=213B file=widgets/src/components/sheet/Sheet
// closure: e, s, b, w
function {
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", b.grabber);
  e.setAttributeString("backgroundColor", w);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=11 closure=10 cpool=2 bc=1663B file=widgets/src/components/sheet/Sheet
// locals: n, d, c, g, y, S, h, v, p, w, this
// closure: e, i, b, s, u, t, r, o, a, l
function {
  this = this;
  let w;
  let p;
  let v;
  let h;
  let S;
  let y;
  let g;
  let c;
  let d;
  let n;
  if (((undefined === undefined))) goto L_16d;
  n = <to_object>(undefined).accessibilityId;
  d = <to_object>(undefined).accessibilityLabel;
  c = <to_object>(undefined).scrollViewBouncesFromDragAtStart;
  g = <to_object>(undefined).scrollViewBouncesFromDragAtEnd;
  y = <to_object>(undefined).height;
  S = <to_object>(undefined).onTapOut;
  h = <to_object>(undefined).backgroundColor;
  v = <to_object>(undefined).isBlurredBackground;
  p = <to_object>(undefined).shouldShowGrabber;
  <to_object>(undefined);
  goto L_194;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_29;
  // [栈深重同步 1 -> 0]
  if (!((this.viewModel.grabberColor == null))) goto L_243;
  this.viewModel.grabberColor;
  w = u.SemanticColor.Button.TERTIARY;
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", n);
  e.setAttributeString("accessibilityLabel", d);
  e.setAttribute("bouncesFromDragAtStart", c);
  e.setAttribute("bouncesFromDragAtEnd", g);
  e.setAttributeStyle("style", b.scroll);
  e.setAttribute("showsVerticalScrollIndicator", false);
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", b.tapOutTarget);
  e.setAttributeFunction("onTap", S);
  e.endRender();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", b.sheet);
  e.setAttributeString("backgroundColor", h);
  e.setAttribute("height", y);
  if (!(l.Device.isIOS())) goto L_5d6;
  a.when(v, function <atom:0>);
  a.when(p, function <atom:0>);
  e.renderUnnamedSlot(this);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/sheet/Sheet
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

// fn <atom:0>  args=3 vars=19 closure=0 cpool=3 bc=1063B file=widgets/src/components/sheet/Sheet
// args: require, module, exports
// locals: e, t, r, o, i, s, n, l, d, a, u, c, b, Sheet, <class_fields_init>, Sheet#1
function {
  let Sheet#1;
  let b;
  let c;
  let u;
  let a;
  let d;
  let l;
  let n;
  let s;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Sheet = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("scroll", undefined, "Hf4IiqF0g6uT1lM2");
  r = e.makeNodePrototype("view", undefined, "F9dysapGQUQKGyMO");
  o = e.makeNodePrototype("view", undefined, "49jQR1NyrMA0NRlP");
  i = e.makeNodePrototype("blur", undefined, "uaKK5-t7xjaxtiFk");
  s = e.makeNodePrototype("view", undefined, "FOfUTw22JW8yNl-y");
  n = require("valdi_core/src/Component");
  l = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  a = require("valdi_core/src/utils/When");
  u = require("widgets/src/styles/semanticColors");
  c = 4;
  b = {scroll: new d.Style({height: "100%", width: "100%"}), tapOutTarget: new d.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0}), sheet: new d.Style({position: "absolute", bottom: 0, left: 0, right: 0, minHeight: 100, backgroundColor: u.SemanticColor.Background.SURFACE, borderRadius: 20}), grabber: new d.Style({position: "absolute", alignSelf: "center", top: 6, width: 44, opacity: 0.23, height: 4, borderRadius: 2}), iOSBlurBackground: new d.Style({position: "absolute", width: "100%", height: "100%", borderRadius: 14})};
  let Sheet;
  let <class_fields_init>;
  class Sheet extends n.Component { ... }
  <proto:Sheet>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Sheet>;
  Sheet = function <atom:0>;
  // close_loc <class_fields_init>
  Sheet#1 = function <atom:0>;
  exports.Sheet = Sheet#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/sheet/Sheet
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
