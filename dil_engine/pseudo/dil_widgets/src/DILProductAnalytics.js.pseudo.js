// fn o  args=3 vars=17 closure=8 cpool=0 bc=1624B file=dil_widgets/src/DILProductAnalytics
// args: e, o, s
// locals: p, v, _, l, f, I, y, h, g, m, P, x, S, T
// closure: i, d, r, a, u, c, n, t
function {
  let T;
  let S;
  let x;
  let P;
  let m;
  let g;
  let h;
  let y;
  let I;
  let f;
  let l;
  let _;
  let v;
  let p;
  if ((("log_event" !== e.type))) goto L_a7;
  if (!((e.payload == null))) goto L_85;
  e.payload;
  goto L_a6;
  if (!(("chatgpt_product_interaction" !== undefined.event_name))) goto L_ab;
  return e;
  p = i(e.payload.event_data);
  if (!((p == null))) goto L_fd;
  p;
  goto L_11e;
  v = d(undefined.productId);
  if (!((p == null))) goto L_130;
  p;
  goto L_151;
  if ((("shown" !== undefined.type))) goto L_15b;
  if (!((undefined === v))) goto L_15f;
  return e;
  _ = r.Device.isIOS();
  if ((r.Device.isWeb())) goto L_243;
  if (!(!_)) goto L_247;
  if (!(!r.Device.isAndroid())) goto L_247;
  return e;
  l = d(p.productUrl);
  if (!((undefined === l))) goto L_278;
  goto L_27d;
  // [栈深重同步 1 -> 0]
  f = a(l);
  I = d(p.productTitle);
  y = d(p.productMerchants);
  h = d(p.productProvider);
  g = d(p.productEventUuid);
  if (!((undefined === f))) goto L_329;
  goto L_330;
  // [栈深重同步 1 -> 0]
  m = u(f);
  P = c(p.productIndex);
  if (!((o == null))) goto L_366;
  o;
  goto L_387;
  x = d(undefined.messageId);
  if (!((o == null))) goto L_394;
  o;
  goto L_3b5;
  S = d(undefined.conversationId);
  if (!((o == null))) goto L_3c1;
  o;
  goto L_3e2;
  if (!((undefined.contentReferenceStartIndex == null))) goto L_3e8;
  undefined.contentReferenceStartIndex;
  T = -1;
  null;
  e;
  null;
  e.payload;
  if (!(_)) goto L_425;
  goto L_42a;
  // [栈深重同步 3 -> 2]
  if (!(_)) goto L_462;
  goto L_473;
  // [栈深重同步 4 -> 3]
  null;
  {messageId: x, conversationId: S};
  if (!((undefined === P))) goto L_516;
  goto L_523;
  // [栈深重同步 4 -> 3]
  if (!(_)) goto L_521;
  goto L_522;
  // [栈深重同步 5 -> 4]
  if (!(_)) goto L_590;
  goto L_595;
  // [栈深重同步 4 -> 3]
  if (!((undefined === x))) goto L_613;
  goto L_643;
  // [栈深重同步 5 -> 4]
  return {payload: {event_name: ("Android" + ": Search: Content Reference Shown"), statsig_event_name: "__protobuf_structured_event__", event_data: {type: "product_entity", content_reference_start_index: T, product_id: v, product_url: f, product_title: I, product_hostname: m, product_merchants: y, product_provider: h, product_price: d(p.productPrice), product_event_uuid: n.findLegacyProductEventUuid(s, v, g), product_index: (P + 0), eventId: t.v4(), eventCreatedAt: new Date().toISOString(), eventType: "client-android", eventParams: {@type: "openai.buf.dev/openai/protobuf-analytics-events/protobuf_analytics_events.v1.ChatgptProductInteractionEvent", type: "CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SHOWN", productId: v, productUrl: f, productTitle: I, productHostname: m, productMerchants: y, productProvider: h, productIndex: P, productEventUuid: g, contentReferenceType: "product_entity", messageId: x, conversationId: S, contentReferenceId: "".concat(x, "-", T)}}}};
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_widgets/src/DILProductAnalytics
// args: e
function {
  if (((null === e))) goto L_3d;
  if ((("object" != typeof e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_41;
  return undefined;
  return e;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=56B file=dil_widgets/src/DILProductAnalytics
// args: e
function {
  if (!(("string" == typeof e))) goto L_36;
  if (!((e.trim().length > 0))) goto L_36;
  return e;
  return undefined;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=72B file=dil_widgets/src/DILProductAnalytics
// args: e
function {
  if (!(("number" == typeof e))) goto L_46;
  if (!(Number.isInteger(e))) goto L_46;
  if (!((e >= 0))) goto L_46;
  if (!((e <= 2147483647))) goto L_46;
  return e;
  return undefined;
}

// fn u  args=1 vars=4 closure=1 cpool=4 bc=269B file=dil_widgets/src/DILProductAnalytics
// args: t
// locals: r, n, o
// closure: e
function {
  let o;
  let n;
  let r;
  if (!(new RegExp("[\\s\\\\]").test(t))) goto L_36;
  return;
  r = e.hostnameFromUrl(t);
  n = r.slice((r.lastIndexOf("@") + 1));
  o = new RegExp("^(\\[[0-9a-f:.]+\\]|[a-z0-9.-]+)(?::([0-9]+))?$").exec(n);
  if (((null === o))) goto L_103;
  if (!((undefined !== o[2]))) goto L_107;
  if (!((Number(o[2]) > 65535))) goto L_107;
  return undefined;
  return o[1];
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=50B file=dil_widgets/src/DILProductAnalytics
// args: e, t
function {
  return String.fromCharCode(parseInt(t, 16));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=3 bc=95B file=dil_widgets/src/DILProductAnalytics
// args: e
function {
  return ("oppcref" !== e.split("=", 1)[0].replace(new RegExp("%([0-9a-f]{2})"), function <atom:0>));
}

// fn a  args=1 vars=8 closure=0 cpool=1 bc=548B file=dil_widgets/src/DILProductAnalytics
// args: e
// locals: t, r, n, o, i, d, c
function {
  let c;
  let d;
  let i;
  let o;
  let n;
  let r;
  let t;
  t = e.indexOf("#");
  if (!((-1 === t))) goto L_4a;
  goto L_73;
  // [栈深重同步 1 -> 0]
  r = e.slice(0, t);
  n = r.indexOf("?");
  if (!((-1 === n))) goto L_aa;
  return e;
  o = r.slice((n + 1)).split("&");
  i = o.filter(function <atom:0>);
  if (!((i.length === o.length))) goto L_138;
  return e;
  if (!((0 === i.length))) goto L_143;
  goto L_198;
  // [栈深重同步 1 -> 0]
  d = "?".concat(i.join("&"));
  if (!((-1 === t))) goto L_1a4;
  goto L_1cc;
  // [栈深重同步 1 -> 0]
  c = e.slice(t);
  return "".concat(r.slice(0, n), d, c);   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=148B file=dil_widgets/src/DILProductAnalytics
// args: require, module, exports
// locals: e, t, r, n, o, i, d, c, u, a
function {
  o = function o;
  i = function i;
  d = function d;
  c = function c;
  u = function u;
  a = function a;
  let n;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.enrichDILProductShownEvent = undefined;
  e = require("coreutils/src/url");
  t = require("foundation/src/uuid");
  r = require("valdi_core/src/Device");
  n = require("./DILProductAnalyticsMetadata");
  exports.enrichDILProductShownEvent = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILProductAnalytics
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
