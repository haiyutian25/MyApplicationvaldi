// fn e  args=1 vars=1 closure=1 cpool=0 bc=11B file=dil_widgets/src/utils/ISODate
// args: e
// closure: a
function {
  if (!((undefined === a(e)))) goto L_9;
  return undefined;
  return e;
}

// fn t  args=1 vars=2 closure=1 cpool=0 bc=180B file=dil_widgets/src/utils/ISODate
// args: e
// locals: t
// closure: a
function {
  let t;
  t = a(e);
  if (!((undefined !== t))) goto L_b3;
  return (new Date(t.year, (t.month - 1), t.day, 12).getTime() / 1000);
  return;
}

// fn o  args=3 vars=6 closure=2 cpool=0 bc=135B file=dil_widgets/src/utils/ISODate
// args: e, o, r
// locals: n, a, i
// closure: t, s
function {
  let i;
  let a;
  let n;
  n = t(o);
  a = t(r);
  if (!((t(e) == null))) goto L_1b;
  t(e);
  i = s();
  if (!((a == null))) goto L_4d;
  a;
  if (!((n == null))) goto L_7e;
  n;
  return Math.min(i, Math.max(i, i));   // tail call
}

// fn r  args=1 vars=2 closure=1 cpool=0 bc=193B file=dil_widgets/src/utils/ISODate
// args: e
// locals: t
// closure: i
function {
  let t;
  t = new Date((1000 * e));
  return "".concat(i(t.getFullYear(), 4), "-", i((t.getMonth() + 1), 2), "-", i(t.getDate(), 2));   // tail call
}

// fn n  args=1 vars=2 closure=2 cpool=0 bc=184B file=dil_widgets/src/utils/ISODate
// args: e
// locals: t
// closure: a, i
function {
  let t;
  t = a(e);
  if (!((undefined === t))) goto L_10;
  return "";
  return "".concat(i(t.month, 2), "/", i(t.day, 2), "/", i((t.year % 100), 2));
}

// fn a  args=1 vars=6 closure=0 cpool=2 bc=297B file=dil_widgets/src/utils/ISODate
// args: e
// locals: t, o, r, n, a
function {
  let a;
  let n;
  let r;
  let o;
  let t;
  if (!((undefined === e))) goto L_15;
  return;
  t = new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$").exec(e);
  if (!((null === t))) goto L_48;
  return;
  o = Number(t[1]);
  r = Number(t[2]);
  n = Number(t[3]);
  a = new Date(o, (r - 1), n, 12);
  if (!((a.getFullYear() === o))) goto L_127;
  if (!((a.getMonth() === (r - 1)))) goto L_127;
  if (!((a.getDate() === n))) goto L_127;
  return {day: n, month: r, year: o};
  return undefined;
}

// fn s  args=0 vars=1 closure=0 cpool=0 bc=182B file=dil_widgets/src/utils/ISODate
// locals: e
function {
  let e;
  e = new Date();
  return (new Date(e.getFullYear(), e.getMonth(), e.getDate(), 12).getTime() / 1000);
}

// fn i  args=2 vars=2 closure=0 cpool=1 bc=46B file=dil_widgets/src/utils/ISODate
// args: e, t
function {
  return String(e).padStart(t, "0");   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=8 bc=196B file=dil_widgets/src/utils/ISODate
// args: require, module, exports
// locals: e, t, o, r, n, a, s, i
function {
  e = function e;
  t = function t;
  o = function o;
  r = function r;
  n = function n;
  a = function a;
  s = function s;
  i = function i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.normalizeISODate = undefined;
  exports.parseISODateSeconds = undefined;
  exports.resolveNativeDateSeconds = undefined;
  exports.formatDateSecondsAsISODate = undefined;
  exports.formatISODateForDisplay = undefined;
  exports.normalizeISODate = e;
  exports.parseISODateSeconds = t;
  exports.resolveNativeDateSeconds = o;
  exports.formatDateSecondsAsISODate = r;
  exports.formatISODateForDisplay = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/utils/ISODate
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
