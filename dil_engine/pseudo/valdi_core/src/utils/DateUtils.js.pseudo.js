// fn i  args=3 vars=5 closure=2 cpool=2 bc=684B file=valdi_core/src/utils/DateUtils
// args: t, i, r
// locals: n, a
// closure: e, require
function {
  let a;
  let n;
  if (!((r == null))) goto L_f;
  r;
  goto L_30;
  if (!(undefined.localeIdentifier)) goto L_af;
  goto L_b0;
  // [栈深重同步 1 -> 0]
  n = undefined;
  if (!(e.Device.isAndroid())) goto L_1c7;
  if (!(!e.Device.isWeb())) goto L_1c7;
  if (!((r == null))) goto L_1a0;
  r;
  goto L_1c1;
  return require("DateFormatting").formatDate(t.getTime(), i, undefined.timeZone, n);   // tail call
  if (!(("MEDIUM" === i))) goto L_1f2;
  goto L_1f3;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((r == null))) goto L_202;
  r;
  goto L_223;
  if (!((undefined === undefined.timeZone))) goto L_229;
  goto L_251;
  // [栈深重同步 2 -> 1]
  null;
  {timeZone: r.timeZone};
  a = {month: "short", day: "numeric"};
  return new Intl.DateTimeFormat(n, a).format(t);   // tail call
}

// fn r  args=2 vars=6 closure=3 cpool=1 bc=915B file=valdi_core/src/utils/DateUtils
// args: e, t
// locals: i, r, m, t#1
// closure: n, a, o
function {
  let m;
  let r;
  let i;
  i = n[t];
  if (!(("undefined" != typeof Intl))) goto L_a2;
  if (!(("function" == typeof Intl.DateTimeFormat))) goto L_a2;
  return new Intl.DateTimeFormat(undefined, i).format(e);   // tail call
  r = e.getHours();
  if (((r % 12))) goto L_f6;
  if (!((r < 12))) goto L_161;
  goto L_166;
  // [栈深重同步 7 -> 6]
  m = "".concat(12, ":", String(e.getMinutes()).padStart(2, "0"), " ", "PM");
  if (!((undefined !== i.weekday))) goto L_1e8;
  return "".concat(a[e.getDay()], ", ", m);   // tail call
  if (!((undefined !== i.month))) goto L_38f;
  let t#1;
  t#1 = o[e.getMonth()];
  if (!(("short" === i.month))) goto L_2db;
  goto L_2de;
  // [栈深重同步 5 -> 4]
  if (!((undefined === i.year))) goto L_336;
  goto L_384;
  // [栈深重同步 4 -> 3]
  return "".concat("".concat(t#1, " ", e.getDate()), ", ".concat(e.getFullYear()), ", ", m);   // tail call
  return m;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=valdi_core/src/utils/DateUtils
// args: e
function {
  e.Time = 0;
  e[0] = "Time";
  e.WeekdayAndTime = 1;
  e[1] = "WeekdayAndTime";
  e.DateAndTime = 2;
  e[2] = "DateAndTime";
  e.DateWithYearAndTime = 3;
  e[3] = "DateWithYearAndTime";
  e.FullDateAndTime = 4;
  e[4] = "FullDateAndTime";
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=3 bc=644B file=valdi_core/src/utils/DateUtils
// args: require, module, exports
// locals: e, t, i, r, n, a, o
function {
  i = function i;
  r = function r;
  let o;
  let a;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DateTimeFormat = undefined;
  exports.formatDate = undefined;
  exports.formatDateTime = undefined;
  e = require("../Device");
  if ((t)) goto L_87;
  t = {};
  exports.DateTimeFormat = {};
  !function <atom:0>({});
  exports.formatDate = i;
  exports.formatDateTime = r;
  {}[t.Time] = {hour: "numeric", minute: "2-digit"};
  {hour: "numeric", minute: "2-digit"};
  {}[t.WeekdayAndTime] = {weekday: "long", hour: "numeric", minute: "2-digit"};
  {weekday: "long", hour: "numeric", minute: "2-digit"};
  {}[t.DateAndTime] = {month: "short", day: "numeric", hour: "numeric", minute: "2-digit"};
  {month: "short", day: "numeric", hour: "numeric", minute: "2-digit"};
  {}[t.DateWithYearAndTime] = {month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"};
  {month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"};
  {}[t.FullDateAndTime] = {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"};
  {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"};
  n = {};
  a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/DateUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
