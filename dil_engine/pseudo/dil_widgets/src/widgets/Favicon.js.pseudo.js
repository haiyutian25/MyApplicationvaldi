// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=68B file=dil_widgets/src/widgets/Favicon
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
  this.state = {failedSource: undefined};
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=161B file=dil_widgets/src/widgets/Favicon
// args: e
// locals: this
function {
  this = this;
  if (!((e == null))) goto L_b;
  e;
  goto L_2c;
  if (!((undefined.url !== this.viewModel.url))) goto L_a0;
  this.setState({failedSource: undefined});
  return;
}

// fn <atom:0>  args=0 vars=5 closure=9 cpool=0 bc=2184B file=dil_widgets/src/widgets/Favicon
// locals: o, l, a, u, this
// closure: n, i, e, t, h, s, r, v, d
function {
  this = this;
  let u;
  let a;
  let l;
  let o;
  if (!((this.viewModel.size == null))) goto L_5a;
  this.viewModel.size;
  o = 12;
  if (!((undefined === this.viewModel.url))) goto L_a6;
  goto L_10f;
  // [栈深重同步 1 -> 0]
  l = n.resolveFaviconURL(this.viewModel.url);
  if (!((this.context == null))) goto L_162;
  this.context;
  goto L_183;
  a = i.isDILAssetSourceAllowed(l, undefined.assetURLAuthorization);
  if (!((undefined !== this.viewModel.url))) goto L_228;
  if (((undefined === l))) goto L_228;
  if ((!a)) goto L_228;
  u = (this.state.failedSource === l);
  if ((u)) goto L_237;
  if (!((undefined === l))) goto L_23c;
  goto L_265;
  // [栈深重同步 2 -> 1]
  this.loadHandler = this.getLoadHandler(l);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", h.favicon);
  e.setAttributes(this.autoSpacingAttributes);
  if (!((this.context == null))) goto L_3ae;
  this.context;
  goto L_3cf;
  e.setAttribute("allowedUrlRegexes", i.getDILAssetURLRegexes(undefined.assetURLAuthorization));
  if (!(u)) goto L_42e;
  goto L_431;
  // [栈深重同步 4 -> 3]
  e.setAttribute("src", l);
  if (!(u)) goto L_490;
  goto L_491;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("tint", undefined);
  e.setAttributeFunction("onAssetLoad", this.loadHandler);
  e.setAttribute("width", o);
  e.setAttribute("height", o);
  if (!((true === this.viewModel.inline))) goto L_5ba;
  goto L_5bb;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("marginRight", undefined);
  if (!(this.viewModel.frame)) goto L_635;
  goto L_636;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(this.viewModel.frame)) goto L_6ac;
  goto L_6ad;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttribute("borderRadius", v(this.viewModel.radius, o));
  e.setAttributeString("accessibilityLabel", this.viewModel.alt);
  if (((true !== this.viewModel.inline))) goto L_856;
  if (!(d.Device.isWeb())) goto L_85b;
  goto L_85c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("translationY", 2);
  e.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=133B file=dil_widgets/src/widgets/Favicon
// args: i
// closure: this, t, e
function {
  if ((this.isDestroyed())) goto L_84;
  if (((this.loadHandler !== t))) goto L_84;
  if ((i)) goto L_84;
  this.setState({failedSource: e});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=153B file=dil_widgets/src/widgets/Favicon
// args: e
// locals: t, this
function {
  this = this;
  if (((undefined === this.loadHandler))) goto L_4e;
  if (!((this.loadSource !== e))) goto L_76;
  let t;
  this.loadSource = e;
  t = function <atom:0>;
  this.loadHandler = t;
  // close_loc t
  return this.loadHandler;
}

// fn v  args=2 vars=3 closure=1 cpool=0 bc=86B file=dil_widgets/src/widgets/Favicon
// args: e, t
// locals: i
// closure: l
function {
  let i;
  i = l.resolveDILRadius(e);
  if (((undefined === i))) goto L_3c;
  if (!(("100%" === i))) goto L_52;
  if (!(("number" == typeof t))) goto L_4c;
  return (t / 2);
  return "50%";
  return i;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=5 bc=591B file=dil_widgets/src/widgets/Favicon
// args: require, module, exports
// locals: e, t, i, o, r, s, l, d, a, n, u, c, Favicon, <class_fields_init>, Favicon#1, v, h
function {
  v = function v;
  let h;
  let Favicon#1;
  let c;
  let u;
  let n;
  let a;
  let d;
  let l;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Favicon = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("image", undefined, "MClvitFSavUwAZ7n");
  i = require("dil_core/src/DILAssetURLAuthorization");
  o = require("dil_core/src/DILComponent");
  r = require("dil_core/src/colors/DILColor");
  s = require("dil_icon_assets/src/IconAssets");
  l = require("dil_core/src/layout/DILLayout");
  d = require("valdi_core/src/Device");
  a = require("valdi_core/src/Style");
  n = require("./FaviconURLResolver");
  u = 2;
  c = 2;
  let Favicon;
  let <class_fields_init>;
  class Favicon extends o.DILStatefulComponent { ... }
  <proto:Favicon>.onViewModelUpdate = function <atom:0>;
  <proto:Favicon>.onRender = function <atom:0>;
  <proto:Favicon>.getLoadHandler = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Favicon>;
  Favicon = function <atom:0>;
  // close_loc <class_fields_init>
  Favicon#1 = function <atom:0>;
  exports.Favicon = Favicon#1;
  Favicon#1.dilV2Properties = ["alt", "frame", "inline", "size", "url"];
  // append([], 0, o.DIL_COMPONENT_PROPERTIES)
  [][o.DIL_COMPONENT_PROPERTIES] = "alt";
  [][("alt" ++)] = "frame";
  [][("frame" ++)] = "inline";
  [][("inline" ++)] = "radius";
  [][("radius" ++)] = "size";
  [][("size" ++)] = "url";
  ("url" ++);
  Favicon#1.properties = [];
  h = {favicon: new a.Style({alignSelf: "center", flexShrink: 0, objectFit: "cover"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Favicon
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
