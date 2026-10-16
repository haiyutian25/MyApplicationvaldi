// fn s  args=3 vars=5 closure=2 cpool=0 bc=229B file=valdi_core/src/LocalizableStrings
// args: e, l, n
// locals: i, t
// closure: o, r
function {
  let t;
  let i;
  i = o.LocalizableStringsModule.fromExports(e);
  t = i.stringResolver;
  if (!(!(t instanceof r.InlineUnparsedLocalizableStringResolver))) goto L_af;
  throw new Error("Locales can only overriden on strings using the inline localization mode");
  i.stringResolver = t.withCurrentLocales(l, n);
  return;
}

// fn u  args=1 vars=1 closure=2 cpool=0 bc=40B file=valdi_core/src/LocalizableStrings
// args: e
// closure: s, i
function {
  s(e, i.getCurrentLocales);
  return;
}

// fn d  args=3 vars=6 closure=1 cpool=0 bc=162B file=valdi_core/src/LocalizableStrings
// args: e, r, l
// locals: n, i, o
// closure: o
function {
  let i;
  let n;
  n = new o.LocalizableStringsModule(e);
  i = r.length;
  let o;
  o = 0;
  if (!((o < i))) goto L_7d;
  n.add(r[o], l[o]);
  o = <o_new>;
  (o++);
  goto L_38;
  return n.exports;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=194B file=valdi_core/src/LocalizableStrings
// args: o
// locals: r, l
// closure: e, u, t, a
function {
  let l;
  let r;
  if (!((globalThis.__valdiPreloadedStrings == null))) goto L_34;
  globalThis.__valdiPreloadedStrings;
  goto L_36;
  r = undefined[e];
  if (!((r == null))) goto L_42;
  r;
  goto L_44;
  if (!((undefined[o] == null))) goto L_58;
  undefined[o];
  if (!((r == null))) goto L_54;
  r;
  goto L_58;
  l = undefined[u];
  if (!(("function" == typeof l))) goto L_6a;
  return l();
  return JSON.parse(t.getModuleEntry(a, e, o, true));
}

// fn c  args=5 vars=6 closure=5 cpool=1 bc=138B file=valdi_core/src/LocalizableStrings
// args: e, o, l, n, s
// locals: u
// closure: t, a, d, r, i
function {
  let u;
  u = s[n.indexOf("en")];
  return d(new r.InlineUnparsedLocalizableStringResolver(n, s, function <atom:0>, i.getCurrentLocales), o, l);   // tail call
}

// fn p  args=3 vars=3 closure=2 cpool=0 bc=47B file=valdi_core/src/LocalizableStrings
// args: o, r, l
// closure: d, e
function {
  return d(new e.ExternalUnparsedLocalizableStringResolver(o), r, l);   // tail call
}

// fn g  args=3 vars=3 closure=1 cpool=0 bc=7B file=valdi_core/src/LocalizableStrings
// args: e, o, r
// closure: p
function {
  return p(e, o, r);   // tail call
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=6 bc=405B file=valdi_core/src/LocalizableStrings
// args: require, module, exports
// locals: e, o, r, l, n, i, t, a, s, u, d, c, p, g
function {
  s = function s;
  u = function u;
  d = function d;
  c = function c;
  p = function p;
  g = function g;
  let a;
  let t;
  let i;
  let n;
  let l;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.overrideLocales = undefined;
  exports.removeOverrideLocales = undefined;
  exports.buildModuleWithResolver = undefined;
  exports.buildInlineModule = undefined;
  exports.buildExternalModule = undefined;
  exports.buildModule = undefined;
  e = require("./localization/ExternalUnparsedLocalizableStringResolver");
  o = require("./localization/LocalizableStringsModule");
  r = require("./localization/InlineUnparsedLocalizableStringResolver");
  l = require("./ValdiRuntimeProvider");
  n = require("./ModuleLoaderGlobal");
  i = require("./localization/LocaleResolver");
  t = l.getValdiRuntime();
  a = n.getModuleLoader(module).package;
  exports.overrideLocales = s;
  exports.removeOverrideLocales = u;
  exports.buildModuleWithResolver = d;
  exports.buildInlineModule = c;
  exports.buildExternalModule = p;
  exports.buildModule = g;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/LocalizableStrings
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
