// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=73B file=widgets/src/components/tabs/TabsItemWithTitle
// closure: m, e, t
function {
  return m(e.badged, e.title, t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=164B file=widgets/src/components/tabs/TabsItemWithTitle
// args: e
// closure: m, t
function {
  if ((e.renderTitle)) goto L_77;
  return {key: e.key, scrollBarHandler: e.scrollBarHandler, renderHeader: function <atom:0>, renderContent: e.render};
}

// fn S  args=2 vars=2 closure=1 cpool=1 bc=39B file=widgets/src/components/tabs/TabsItemWithTitle
// args: e, t
// closure: m
function {
  return e.map(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=571B file=widgets/src/components/tabs/TabsItemWithTitle
// closure: d, e, r, y, o, n
function {
  if (!(("boolean" == typeof d))) goto L_b3;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", y.itemBadge);
  e.endRender();
  if (!(("string" == typeof d))) goto L_23a;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", y.itemTextBadgeView);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", y.itemTextBadgeLabel);
  e.setAttributeString("value", d);
  e.endRender();
  e.endRender();
  return;
}

// fn m  args=3 vars=3 closure=8 cpool=1 bc=463B file=widgets/src/components/tabs/TabsItemWithTitle
// args: d, a, s
// closure: e, r, y, o, n, t, i, l
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", y.itemBox);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", y.itemLabel);
  e.setAttributeString("value", a);
  e.setAttributeString("color", s);
  e.endRender();
  l.when(d, function <atom:0>);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=2 bc=2183B file=widgets/src/components/tabs/TabsItemWithTitle
// args: require, module, exports
// locals: e, t, i, r, o, n, d, a, l, s, c, g, S, m, y
function {
  S = function S;
  m = function m;
  let y;
  let g;
  let c;
  let s;
  let l;
  let a;
  let d;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.convertToTabItems = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("layout", undefined, "mqcXGIDblxT07Emb");
  i = e.makeNodePrototype("label", undefined, "wkw3Z9YVIcdMlG9o");
  r = e.makeNodePrototype("view", undefined, "oejVzzMX73y9pD-J");
  o = e.makeNodePrototype("view", undefined, "_QZ3cleJmn7GV4cQ");
  n = e.makeNodePrototype("label", undefined, "-e1idp3in-QvG77s");
  d = require("valdi_core/src/Device");
  a = require("valdi_core/src/Style");
  l = require("valdi_core/src/utils/When");
  s = require("widgets/src/styles/TextStyleFont");
  c = require("widgets/src/styles/semanticColors");
  g = require("widgets/src/styles/spacing");
  exports.convertToTabItems = S;
  if (!(d.Device.isDarkMode())) goto L_811;
  goto L_877;
  // [栈深重同步 5 -> 4]
  y = {itemBox: new a.Style({flexDirection: "row", alignItems: "center", paddingTop: g.Spacing.SM, paddingLeft: g.Spacing.MD, paddingRight: g.Spacing.MD, paddingBottom: g.Spacing.SM}), itemLabel: new a.Style({font: s.TextStyleFont.BODY_EMPHASIS, color: c.SemanticColor.Text.PRIMARY}), itemBadge: new a.Style({backgroundColor: c.SemanticColor.Background.DEFAULT, height: 6, width: 6, marginLeft: 4, marginRight: -4, borderRadius: 3}), itemTextBadgeView: new a.Style({paddingLeft: g.Spacing.XXS, paddingRight: g.Spacing.XXS, backgroundColor: c.SemanticColor.Background.DEFAULT, borderRadius: g.Spacing.XS, marginBottom: g.Spacing.SM, marginLeft: g.Spacing.XXS}), itemTextBadgeLabel: new a.Style({font: s.TextStyleFont.CAPTION_EMPHASIS, color: c.SemanticColor.Text.PRIMARY})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/tabs/TabsItemWithTitle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
