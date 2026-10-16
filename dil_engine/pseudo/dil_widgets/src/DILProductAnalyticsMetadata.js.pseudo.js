// fn t  args=3 vars=13 closure=4 cpool=0 bc=526B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t, n, i
// locals: u, d, a, s, f, c, t#1, o, t#2, e
// closure: r, c, o, e
function {
  let f;
  let s;
  let a;
  let d;
  let u;
  u = r(t, "opGenui");
  d = c(r(u, "componentResults"));
  a = c(r(u, "componentData"));
  if (!((undefined === d))) goto L_40;
  if (((undefined === a))) goto L_6c;
  if (!((0 === n.trim().length))) goto L_6f;
  return;
  if (!((d == null))) goto L_a8;
  d;
  // append([], 0, Object.keys({}))
  if (!((a == null))) goto L_db;
  a;
  // append([], Object.keys({}), Object.keys({}))
  Object.keys({});
  s = new Set([]);
  f = undefined;
  let c;
  for (const c of s) {
    let t#1;
    t#1 = o(r(d, c), r(a, c));
    if (!((undefined !== t#1))) continue;
    let o;
    for (const o of e(t#1)) {
      let e;
      let t#2;
      if (((r(o, "id") !== n))) continue;
      t#2 = r(o, "product_event_uuid");
      if (!(("string" == typeof t#2))) goto L_182;
      if (!((t#2.trim().length > 0))) goto L_182;
      goto L_183;
      // [栈深重同步 4 -> 3]
      if (((undefined !== i))) continue;
      e = r(r(o, "analytics_meta"), "product_event_uuid");
      if ((("string" != typeof e))) goto L_1e4;
      if (((0 === e.trim().length))) goto L_1e4;
      if (!((undefined !== f))) goto L_1f0;
      if (!((f !== e))) goto L_1f0;
      return undefined;
      // [栈深重同步 0 -> 3]
      f = e;
      e;
    }
    // [栈深重同步 0 -> 3]
  }
  return f;
}

// fn o  args=2 vars=5 closure=2 cpool=0 bc=146B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t, o
// locals: e, n, i
// closure: r, c
function {
  let i;
  let n;
  let e;
  e = r(t, "status");
  n = c(r(t, "state"));
  if (!(("resolved" === e))) goto L_33;
  if (!((undefined !== n))) goto L_33;
  return n;
  i = r(t, "code");
  if (!(("pending" !== e))) goto L_90;
  if ((("failed" !== e))) goto L_8a;
  if (!(("component_unavailable" !== i))) goto L_77;
  if (!(("tool_failed" !== i))) goto L_77;
  if ((("invalid_tool_result" !== i))) goto L_8a;
  if (!(("boolean" != typeof r(t, "retryable")))) goto L_90;
  return c(o);
  return undefined;
}

// fn e  args=1 vars=4 closure=3 cpool=0 bc=175B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t
// locals: o, e, i
// closure: r, n, i
function {
  let e;
  let o;
  o = [r(t, "product"), n(r(t, "click_action")), i(r(t, "action_payload")), n(r(t, "default_on_click_action"))];
  e = r(t, "images");
  if (!(Array.isArray(e))) goto L_ab;
  let i;
  for (const i of e) {
    o.push(n(r(i, "default_on_click_action")));
  }
  return o;
}

// fn n  args=1 vars=1 closure=2 cpool=0 bc=29B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t
// closure: r, i
function {
  if (!(("open_entity_detail" === r(t, "type")))) goto L_1b;
  return i(r(t, "payload"));
  return undefined;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=34B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t
// closure: r
function {
  if (!(("product" === r(t, "category")))) goto L_20;
  return r(r(t, "extraParams"), "product");
  return undefined;
}

// fn r  args=2 vars=3 closure=1 cpool=0 bc=102B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t, o
// locals: e
// closure: c
function {
  let e;
  e = c(t);
  if (!((undefined === e))) goto L_10;
  return undefined;
  if (!((Object.getOwnPropertyDescriptor(e, o) == null))) goto L_44;
  Object.getOwnPropertyDescriptor(e, o);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.value;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: t
function {
  if (((null === t))) goto L_3d;
  if ((("object" != typeof t))) goto L_3d;
  if (!(Array.isArray(t))) goto L_41;
  return undefined;
  return t;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=7 bc=103B file=dil_widgets/src/DILProductAnalyticsMetadata
// args: require, module, exports
// locals: t, o, e, n, i, r, c
function {
  t = function t;
  o = function o;
  e = function e;
  n = function n;
  i = function i;
  r = function r;
  c = function c;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.findLegacyProductEventUuid = undefined;
  exports.findLegacyProductEventUuid = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILProductAnalyticsMetadata
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
