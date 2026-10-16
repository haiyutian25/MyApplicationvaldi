// fn r  args=1 vars=7 closure=3 cpool=0 bc=714B file=widgets/src/components/indexview/utils/lookupSymbolForString
// args: r
// locals: e, e#1, n, o, e#2, r#1
// closure: t, o, e
function {
  let n;
  if (!(!t)) goto L_16a;
  t = new Map();
  new Map();
  let e;
  for (const e of o.IndexViewSymbols.latin) {
    t.set(e.key, e);
  }
  let e#1;
  e#1 = 0;
  if (!((e#1 < 10))) goto L_16a;
  t.set(e#1.toString(), o.IndexViewSymbols.other);
  e#1 = <e#1_new>;
  (e#1++);
  goto L_c0;
  n = t.get(r);
  if (!(n)) goto L_19c;
  return n;
  if (!((r.length > 0))) goto L_284;
  let o;
  o = e.normalize(r[0]).trim().toLocaleUpperCase();
  if (!((e.normalize.length > 0))) goto L_284;
  let r#1;
  let e#2;
  e#2 = o[0];
  r#1 = t.get(e#2);
  if (!(r#1)) goto L_284;
  return r#1;
  return o.IndexViewSymbols.other;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=109B file=widgets/src/components/indexview/utils/lookupSymbolForString
// args: require, module, exports
// locals: e, o, t, r
function {
  r = function r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.lookupSymbolForString = undefined;
  e = require("foundation/src/unicode");
  o = require("../IndexViewSymbols");
  t = undefined;
  exports.lookupSymbolForString = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/indexview/utils/lookupSymbolForString
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
