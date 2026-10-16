// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=chatgpt_finance/src/FinanceModels
// args: n
function {
  n.Full = "full";
  n.Half = "half";
  n.Unknown = "unknown";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance/src/FinanceModels
// args: n
function {
  n.Half = 1;
  n[1] = "Half";
  n.Full = 2;
  n[2] = "Full";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_finance/src/FinanceModels
// args: n
function {
  n.ConnectAccount = 0;
  n[0] = "ConnectAccount";
  n.StartConversation = 1;
  n[1] = "StartConversation";
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=6B file=chatgpt_finance/src/FinanceModels
// args: n, t
// closure: c
function {
  return c(n, t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=229B file=chatgpt_finance/src/FinanceModels
// args: n, t
function {
  if (!((n.rank == null))) goto L_4d;
  n.rank;
  if (!((t.rank == null))) goto L_9a;
  t.rank;
  if (((Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER))) goto L_e4;
  return (n.sourceIndex - t.sourceIndex);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_finance/src/FinanceModels
// args: n
function {
  return n.widget;
}

// fn r  args=1 vars=8 closure=5 cpool=3 bc=794B file=chatgpt_finance/src/FinanceModels
// args: t
// locals: e, i, o, r, n, t#1, t#2
// closure: c, n, a, u, l
function {
  let r;
  let o;
  let i;
  let e;
  if (!(!n.isRecord(t))) goto L_44;
  throw new Error("Finance dashboard response must be an object");
  e = t.widgets;
  if (!((undefined !== e))) goto L_ac;
  if (!(!Array.isArray(e))) goto L_ac;
  throw new Error("Finance dashboard response widgets must be an array");
  if (!((e == null))) goto L_b7;
  e;
  i = [].map(function <atom:0>).filter(n.isDefined);
  o = [];
  r = [];
  let n;
  for (const n of i) {
    let t#2;
    if (!(n.id.startsWith(a))) goto L_1cb;
    let t#1;
    t#1 = u(n);
    if (!((undefined !== t#1))) goto L_1c7;
    r.push(t#1);
   continue;
    t#2 = l(n);
    if (!((undefined !== t#2))) goto L_262;
    o.push({rank: n.rank, sourceIndex: n.sourceIndex, widget: t#2});
  }
  o.sort(function <atom:0>);
  return {widgets: o.map(function <atom:0>), starterCards: r, nextOffset: n.optionalNonNegativeInteger(t.dashboard_next_offset)};
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=chatgpt_finance/src/FinanceModels
// args: n
// closure: e
function {
  return e.set(n.id, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=chatgpt_finance/src/FinanceModels
// args: n
// closure: e
function {
  return e.set(n.id, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=chatgpt_finance/src/FinanceModels
// args: n
// closure: i
function {
  return i.set(n.id, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=chatgpt_finance/src/FinanceModels
// args: n
// closure: i
function {
  return i.set(n.id, n);   // tail call
}

// fn s  args=2 vars=4 closure=0 cpool=4 bc=529B file=chatgpt_finance/src/FinanceModels
// args: n, t
// locals: e, i
function {
  let i;
  let e;
  e = new Map();
  n.widgets.forEach(function <atom:0>);
  t.widgets.forEach(function <atom:0>);
  i = new Map();
  n.starterCards.forEach(function <atom:0>);
  t.starterCards.forEach(function <atom:0>);
  return {widgets: Array.from(e.values()), starterCards: Array.from(i.values()), nextOffset: t.nextOffset};
}

// fn d  args=2 vars=2 closure=0 cpool=0 bc=87B file=chatgpt_finance/src/FinanceModels
// args: n, t
function {
  null;
  n.initialState;
  return JSON.stringify({sensitive_values_hidden: t});   // tail call
}

// fn c  args=2 vars=2 closure=2 cpool=0 bc=752B file=chatgpt_finance/src/FinanceModels
// args: e, i
// closure: n, t
function {
  if (!(n.isRecord(e))) goto L_2ef;
  if (!(("string" == typeof e.id))) goto L_2ef;
  if (!((0 !== e.id.trim().length))) goto L_2ef;
  if (!(n.isRecord(e.widget))) goto L_2ef;
  if (!(n.isRecord(e.initial_state))) goto L_1af;
  goto L_1b0;
  // [栈深重同步 2 -> 1]
  if (!(n.isFiniteNumber(e.span))) goto L_26f;
  goto L_270;
  // [栈深重同步 2 -> 1]
  if (!(n.isFiniteNumber(e.dashboard_rank))) goto L_2e2;
  goto L_2e3;
  // [栈深重同步 2 -> 1]
  return {id: e.id, widget: e.widget, initialState: undefined, placement: n.toEnum(t, e.dashboard_placement), span: undefined, rank: undefined, sourceIndex: i};
  return;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=385B file=chatgpt_finance/src/FinanceModels
// args: n
// closure: f
function {
  if (!(("string" == typeof n.widget.type))) goto L_180;
  if (!((0 !== n.widget.type.trim().length))) goto L_180;
  return {id: n.id, span: f(n.span, n.placement), dil: n.widget, initialState: n.initialState};
  return;
}

// fn u  args=1 vars=6 closure=3 cpool=0 bc=706B file=chatgpt_finance/src/FinanceModels
// args: t
// locals: e, a, r, s, d
// closure: n, o, i
function {
  let d;
  let s;
  let r;
  let a;
  let e;
  e = t.initialState;
  if (!((undefined === e))) goto L_3a;
  return;
  a = n.optionalNonBlankString(e.id);
  r = n.optionalNonBlankString(e.title);
  s = n.stringValue(e.description);
  d = n.optionalNonBlankString(e.prompt);
  if (!((undefined !== a))) goto L_2c0;
  if (!((undefined !== r))) goto L_2c0;
  if (!((undefined !== s))) goto L_2c0;
  if (!((undefined !== d))) goto L_2c0;
  if (!(o.has(a))) goto L_298;
  goto L_2ba;
  // [栈深重同步 2 -> 1]
  return {id: a, title: r, description: s, prompt: d, icon: n.optionalNonBlankString(e.icon), ctaLabel: n.optionalNonBlankString(e.cta_label), actionKind: i.StartConversation};
  return undefined;
}

// fn f  args=2 vars=2 closure=2 cpool=0 bc=299B file=chatgpt_finance/src/FinanceModels
// args: n, i
// closure: e, t
function {
  if (!((undefined !== n))) goto L_71;
  if (!((n < e.Full))) goto L_4e;
  return e.Half;
  return e.Full;
  if (!((i === t.Half))) goto L_bb;
  return e.Half;
  if (((i === t.Full))) goto L_107;
  if (!((i === t.Unknown))) goto L_12a;
  return e.Full;
  i;
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=10 bc=307B file=chatgpt_finance/src/FinanceModels
// args: require, module, exports
// locals: n, t, e, i, a, o, r, s, d, c, l, u, f
function {
  r = function r;
  s = function s;
  d = function d;
  c = function c;
  l = function l;
  u = function u;
  f = function f;
  let o;
  let a;
  let n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FinanceDashboardPlacement = undefined;
  exports.FinanceWidgetSpan = undefined;
  exports.FinanceStarterActionKind = undefined;
  exports.decodeFinanceDashboardPage = undefined;
  exports.mergeFinanceDashboardPages = undefined;
  exports.financeWidgetInitialStateJson = undefined;
  n = require("./TypeUtils");
  if ((t)) goto L_bb;
  t = {};
  exports.FinanceDashboardPlacement = {};
  !function <atom:0>({});
  if ((e)) goto L_d2;
  e = {};
  exports.FinanceWidgetSpan = {};
  function <atom:0>({});
  if ((i)) goto L_e8;
  i = {};
  exports.FinanceStarterActionKind = {};
  function <atom:0>({});
  a = "ledger_finance_onboarding_widget";
  o = new Set(["finance-onboarding-connect-ledger", "finance-accounts-add-account", "repair-bank-connection"]);
  exports.decodeFinanceDashboardPage = r;
  exports.mergeFinanceDashboardPages = s;
  exports.financeWidgetInitialStateJson = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
