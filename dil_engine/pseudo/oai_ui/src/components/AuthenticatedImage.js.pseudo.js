// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=162B file=oai_ui/src/components/AuthenticatedImage
// closure: t, ResolvedAuthenticatedImage, s, this
function {
  t.beginComponent(ResolvedAuthenticatedImage, s, undefined, undefined);
  t.setViewModelProperties(this.viewModel);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=389B file=oai_ui/src/components/AuthenticatedImage
// locals: this
// closure: t, ResolvedAuthenticatedImage, s, u, i
function {
  this = this;
  t.beginComponent(u.Lazy, i, undefined, undefined);
  t.setViewModelProperty("height", this.viewModel.height);
  t.setViewModelProperty("width", this.viewModel.width);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/AuthenticatedImage
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=75B file=oai_ui/src/components/AuthenticatedImage
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
  this.state = {};
  this.requestGeneration = 0;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=oai_ui/src/components/AuthenticatedImage
// locals: this
function {
  this = this;
  this.loadImage();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=232B file=oai_ui/src/components/AuthenticatedImage
// args: e
// locals: this
// closure: M
function {
  this = this;
  if (!((undefined !== e))) goto L_e7;
  if (!((M(e) !== M(this.viewModel)))) goto L_e7;
  if (!((this.subscription == null))) goto L_65;
  this.subscription;
  goto L_89;
  undefined.cancel();
  this.subscription = undefined;
  this.setState({asset: undefined});
  this.loadImage();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=137B file=oai_ui/src/components/AuthenticatedImage
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration ++);
  if (!((this.subscription == null))) goto L_58;
  this.subscription;
  goto L_7c;
  undefined.cancel();
  this.subscription = undefined;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=165B file=oai_ui/src/components/AuthenticatedImage
// args: t, i
// closure: this, e
function {
  if ((this.isDestroyed())) goto L_a4;
  if (((e !== this.requestGeneration))) goto L_a4;
  if (!((this.viewModel.onAssetLoad == null))) goto L_9f;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_a4;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=1576B file=oai_ui/src/components/AuthenticatedImage
// locals: e, this
// closure: t, r, y, v, o
function {
  this = this;
  let e;
  if (!((undefined === this.state.asset))) goto L_2b5;
  t.beginRender(r, undefined);
  t.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setAttributeNumber("borderRadius", this.viewModel.radius);
  t.setAttribute("height", this.viewModel.height);
  t.setAttributeStyle("style", y.placeholder);
  t.setAttribute("width", this.viewModel.width);
  t.endRender();
  return;
  e = this.requestGeneration;
  t.beginComponent(v.Image, o, String(e), undefined);
  t.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  t.setViewModelProperty("height", this.viewModel.height);
  t.setViewModelProperty("objectFit", this.viewModel.objectFit);
  t.setViewModelProperty("onAssetLoad", function <atom:0>);
  t.setViewModelProperty("radius", this.viewModel.radius);
  t.setViewModelProperty("src", this.state.asset);
  t.setViewModelProperty("width", this.viewModel.width);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=378B file=oai_ui/src/components/AuthenticatedImage
// args: i
// closure: AuthenticatedImageRequestError, d, this, t, e
function {
  if (!((i instanceof AuthenticatedImageRequestError))) goto L_71;
  if (((i.kind === d.OAINetworkResultKind.Cancelled))) goto L_179;
  if ((this.isDestroyed())) goto L_179;
  if (((t !== this.requestGeneration))) goto L_179;
  if (!(e.isLoggingEnabled)) goto L_127;
  console.warn("A securely loaded image could not be displayed.");
  if (!((this.viewModel.onAssetLoad == null))) goto L_174;
  this.viewModel.onAssetLoad;
  this.viewModel;
  goto L_179;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=128B file=oai_ui/src/components/AuthenticatedImage
// args: e
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_7f;
  if (((t !== this.requestGeneration))) goto L_7f;
  this.setState({asset: e});
  return;
}

// fn <atom:0>  args=0 vars=2 closure=4 cpool=2 bc=123B file=oai_ui/src/components/AuthenticatedImage
// locals: t, this
// closure: AuthenticatedImageRequestError, d, e, A
function {
  this = this;
  let t;
  this.requestGeneration = (this.requestGeneration ++);
  t = (this.requestGeneration ++);
  this.subscription = A(this.viewModel, {onFailure: function <atom:0>, onImage: function <atom:0>});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_ui/src/components/AuthenticatedImage
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=oai_ui/src/components/AuthenticatedImage
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_ui/src/components/AuthenticatedImage
// args: e
// closure: t
function {
  return e.onFailure(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_ui/src/components/AuthenticatedImage
// args: e
// closure: s
function {
  return e.onImage(s);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=7 cpool=2 bc=1034B file=oai_ui/src/components/AuthenticatedImage
// args: e
// locals: t, t#1, s
// closure: m, i, n, d, AuthenticatedImageRequestError, c, f
function {
  let s;
  let t#1;
  if (!((m.get(i) !== n))) goto L_37;
  return;
  m.delete(i);
  if (((e.kind !== d.OAINetworkResultKind.Success))) goto L_162;
  if (!(!e.value.contentType.toLowerCase().startsWith("image/"))) goto L_2da;
  let t;
  if (!((e.kind === d.OAINetworkResultKind.Success))) goto L_21f;
  goto L_241;
  // [栈深重同步 3 -> 2]
  t = new AuthenticatedImageRequestError(e.kind);
  n.subscribers.forEach(function <atom:0>);
  n.subscribers.clear();
  return;
  t#1 = e.value.bytes;
  s = c.makeAssetFromBytes(t#1);
  f(i, s, t#1.byteLength);
  n.subscribers.forEach(function <atom:0>);
  n.subscribers.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=oai_ui/src/components/AuthenticatedImage
// args: t
// closure: e
function {
  return t.onFailure(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=244B file=oai_ui/src/components/AuthenticatedImage
// args: e
// closure: m, i, n
function {
  if (!((m.get(i) === n))) goto L_f3;
  m.delete(i);
  n.subscribers.forEach(function <atom:0>);
  n.subscribers.clear();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=335B file=oai_ui/src/components/AuthenticatedImage
// closure: n, o, t, m, i
function {
  if ((n)) goto L_14e;
  n = true;
  true;
  o.subscribers.delete(t);
  if (!((0 === o.subscribers.size))) goto L_14e;
  if (!((m.get(i) === o))) goto L_14e;
  m.delete(i);
  o.task.cancel();
  return;
}

// fn A  args=2 vars=10 closure=8 cpool=5 bc=937B file=oai_ui/src/components/AuthenticatedImage
// args: e, t
// locals: i, s, r, s#1, o, n, o#1, n#1
// closure: m, d, AuthenticatedImageRequestError, c, f, M, p, a
function {
  let n#1;
  let o#1;
  let r;
  let s;
  let i;
  i = M(e);
  s = p.get(i);
  if (!((undefined !== s))) goto L_f7;
  p.delete(i);
  p.set(i, s);
  t.onImage(s.asset);
  return {cancel: function <atom:0>};
  r = m.get(i);
  if (!((undefined === r))) goto L_34c;
  let n;
  let o;
  let s#1;
  s#1 = a.authenticatedImageRequestPath(e.src);
  if (!((undefined === s#1))) goto L_200;
  t.onFailure(new AuthenticatedImageRequestError(d.OAINetworkResultKind.InvalidRequest));
  return {cancel: function <atom:0>};
  o = new d.OAINetworkClient({apiService: e.apiService}).requestBytes({method: "GET", path: s#1});
  n = {subscribers: new Set(), task: o};
  r = n;
  n;
  m.set(i, n);
  o.result.then(function <atom:0>).catch(function <atom:0>);
  // close_loc n
  r.subscribers.add(t);
  o#1 = r;
  n#1 = false;
  return {cancel: function <atom:0>};
}

// fn I  args=1 vars=1 closure=0 cpool=0 bc=104B file=oai_ui/src/components/AuthenticatedImage
// args: e
function {
  if (!(("number" == typeof e))) goto L_66;
  if (!(Number.isFinite(e))) goto L_66;
  if (!((e > 0))) goto L_66;
  return Math.round(e);
  return undefined;
}

// fn M  args=1 vars=3 closure=1 cpool=0 bc=296B file=oai_ui/src/components/AuthenticatedImage
// args: e
// locals: t, i
// closure: I
function {
  let i;
  let t;
  if (!((e.preferredWidth == null))) goto L_51;
  e.preferredWidth;
  t = I(e.width);
  if (!((e.preferredHeight == null))) goto L_9d;
  e.preferredHeight;
  i = I(e.height);
  return "".concat(e.accountId, "
", e.src, "
", String(t), "x", String(i));   // tail call
}

// fn f  args=3 vars=5 closure=4 cpool=0 bc=403B file=oai_ui/src/components/AuthenticatedImage
// args: e, t, i
// locals: e#1, t#1
// closure: g, p, w, b
function {
  if (!(!(i > g))) goto L_192;
  p.set(e, {asset: t, byteLength: i});
  w = (w + i);
  (w + i);
  if (((p.size > b))) goto L_7e;
  if (!((w > g))) goto L_192;
  let t#1;
  let e#1;
  e#1 = p.keys().next().value;
  if (!((undefined === e#1))) goto L_fe;
  return;
  t#1 = p.get(e#1);
  p.delete(e#1);
  if (!((t#1 == null))) goto L_162;
  t#1;
  goto L_183;
  if (!((undefined.byteLength == null))) goto L_189;
  undefined.byteLength;
  w = (w - 0);
  (w - 0);
  goto L_4b;
  return;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=175B file=oai_ui/src/components/AuthenticatedImage
// args: t, i
// closure: e, p, w
function {
  if (((undefined === e))) goto L_57;
  if (!(i.startsWith("".concat(e, "
")))) goto L_ae;
  p.delete(i);
  w = (w - t.byteLength);
  (w - t.byteLength);
  return;
}

// fn q  args=1 vars=1 closure=2 cpool=1 bc=42B file=oai_ui/src/components/AuthenticatedImage
// args: e
// closure: p, w
function {
  p.forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=74B file=oai_ui/src/components/AuthenticatedImage
// args: e
// locals: this.active_func, new.target, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  // check_ctor
  this = new new.target("The authenticated image could not be loaded.");
  if (!(<class_fields_init>)) goto L_26;
  <class_fields_init>.call(this);
  new new.target("The authenticated image could not be loaded.");
  this.kind = e;
  this.message = "The authenticated image could not be loaded.";
  return this;
}

// fn <atom:0>  args=3 vars=37 closure=0 cpool=14 bc=906B file=oai_ui/src/components/AuthenticatedImage
// args: require, module, exports
// locals: e, t, i, s, r, o, n, a, d, c, l, u, h, v, g, b, p, m, w, AuthenticatedImage, <class_fields_init>, AuthenticatedImage#1, ResolvedAuthenticatedImage, <class_fields_init>#1, ResolvedAuthenticatedImage#1, y, A, I, M, f, q, AuthenticatedImageRequestError, <class_fields_init>#2, AuthenticatedImageRequestError#1
function {
  A = function A;
  I = function I;
  M = function M;
  f = function f;
  q = function q;
  let AuthenticatedImageRequestError#1;
  let y;
  let ResolvedAuthenticatedImage#1;
  let AuthenticatedImage#1;
  let w;
  let m;
  let p;
  let b;
  let g;
  let v;
  let h;
  let u;
  let l;
  let c;
  let d;
  let a;
  let n;
  let o;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AuthenticatedImage = undefined;
  exports.clearAuthenticatedImageCache = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "arLkaIOQgnHwaqxS");
  s = t.makeComponentPrototype(undefined, "ZkvUgMYfsAdM-DvF");
  r = t.makeNodePrototype("view", undefined, "eayeo_IqiBpQq01N");
  o = t.makeComponentPrototype(undefined, "t-rWOPAPLt7cvCU7");
  n = require("oai_core/src/OAITokens");
  a = require("oai_authentication_session/src/OAIBearerAPIService");
  d = require("oai_platform_services/src/OAINetworkClient");
  c = require("valdi_core/src/Asset");
  l = require("valdi_core/src/Component");
  u = require("valdi_core/src/Lazy");
  h = require("valdi_core/src/Style");
  v = require("./Image");
  g = 33554432;
  b = 48;
  p = new Map();
  m = new Map();
  w = 0;
  let AuthenticatedImage;
  let <class_fields_init>;
  class AuthenticatedImage extends l.Component { ... }
  <proto:AuthenticatedImage>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AuthenticatedImage>;
  AuthenticatedImage = function <atom:0>;
  // close_loc <class_fields_init>
  AuthenticatedImage#1 = function <atom:0>;
  exports.AuthenticatedImage = AuthenticatedImage#1;
  let ResolvedAuthenticatedImage;
  let <class_fields_init>#1;
  class ResolvedAuthenticatedImage extends l.StatefulComponent { ... }
  <proto:ResolvedAuthenticatedImage>.onCreate = function <atom:0>;
  <proto:ResolvedAuthenticatedImage>.onViewModelUpdate = function <atom:0>;
  <proto:ResolvedAuthenticatedImage>.onDestroy = function <atom:0>;
  <proto:ResolvedAuthenticatedImage>.onRender = function <atom:0>;
  <proto:ResolvedAuthenticatedImage>.loadImage = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:ResolvedAuthenticatedImage>;
  ResolvedAuthenticatedImage = function <atom:0>;
  // close_loc <class_fields_init>#1
  ResolvedAuthenticatedImage#1 = function <atom:0>;
  y = {placeholder: new h.Style({backgroundColor: n.OAIColor.BgTertiary, flexShrink: 0})};
  exports.clearAuthenticatedImageCache = q;
  let AuthenticatedImageRequestError;
  let <class_fields_init>#2;
  class AuthenticatedImageRequestError extends Error { ... }
  <class_fields_init>#2 = undefined;
  <proto:AuthenticatedImageRequestError>;
  AuthenticatedImageRequestError = function <atom:0>;
  // close_loc <class_fields_init>#2
  AuthenticatedImageRequestError#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/AuthenticatedImage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
