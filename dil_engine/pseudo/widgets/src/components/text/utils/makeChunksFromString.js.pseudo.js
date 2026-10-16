// fn n  args=2 vars=6 closure=1 cpool=0 bc=395B file=widgets/src/components/text/utils/makeChunksFromString
// args: n, i
// locals: o, r, s, t
// closure: e
function {
  let t;
  let s;
  let r;
  let o;
  o = n.indexOf("<", i);
  if (!((o < 0))) goto L_40;
  return;
  r = (o + 1);
  s = false;
  if (!(("/" === n[r]))) goto L_68;
  r = (r + 1);
  (r + 1);
  s = true;
  true;
  t = n.indexOf(">", r);
  if (!((t < 0))) goto L_13f;
  if (!(e.isLoggingEnabled)) goto L_f8;
  console.error("Xml tag is missing '>' in string:", n);
  return {key: n.slice(r), before: o, after: n.length, closing: s};
  return {key: n.slice(r, t), before: o, after: (t + 1), closing: s};
}

// fn i  args=1 vars=7 closure=2 cpool=0 bc=1077B file=widgets/src/components/text/utils/makeChunksFromString
// args: i
// locals: o, r, s, t, g, s#1
// closure: n, e
function {
  let s#1;
  let r;
  let o;
  o = [];
  r = 0;
  let g;
  let t;
  let s;
  s = r;
  t = n(i, r);
  if (((undefined === t))) goto L_3cf;
  if (!(t.closing)) goto L_ac;
  if (!(e.isLoggingEnabled)) goto L_ac;
  console.error("Xml opening tag is marked as closing in string:", i);
  r = t.after;
  t.after;
  o.push({text: i.slice(s, t.before)});
  g = n(i, r);
  if (!((undefined === g))) goto L_1ba;
  if (!(e.isLoggingEnabled)) goto L_1b6;
  console.error("Xml tag not closed in string:", i);
  goto L_3cf;
  if ((g.closing)) goto L_239;
  if (!(e.isLoggingEnabled)) goto L_239;
  console.error("Xml closing tag is marked as an opening tag in string:", i);
  r = g.after;
  g.after;
  if (!((t.key !== g.key))) goto L_307;
  if (!(e.isLoggingEnabled)) goto L_307;
  console.error("Xml tag key doesn't match opening and closing tag in string:", i);
  o.push({key: t.key, text: i.slice(t.after, g.before)});
  goto L_f;
  s#1 = i.slice(r);
  if (!(s#1)) goto L_430;
  o.push({text: s#1});
  return o;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=132B file=widgets/src/components/text/utils/makeChunksFromString
// args: require, module, exports
// locals: e, n, i
function {
  n = function n;
  i = function i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeChunksFromString = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  exports.makeChunksFromString = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/text/utils/makeChunksFromString
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
