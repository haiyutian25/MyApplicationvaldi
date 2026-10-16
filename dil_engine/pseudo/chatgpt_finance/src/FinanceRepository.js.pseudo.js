// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=chatgpt_finance/src/FinanceRepository
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.api = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_finance/src/FinanceRepository
// locals: this
function {
  this = this;
  return this.dashboard;
}

// fn <atom:0>  args=0 vars=5 closure=5 cpool=0 bc=624B file=chatgpt_finance/src/FinanceRepository
// locals: a, r, o, t, n
// closure: s, this, t, exports, e
function {
  let o;
  let r;
  let a;
  s = this.api.dashboardWidgets(0, true);
  this.api.dashboardWidgets(0, true);
  a = (await s.result);
  this.dashboard = a;
  r = new Set([0]);
  o = 1;
  if (!(!t)) goto L_26c;
  if (!((a.widgets.length < exports.FINANCE_INITIAL_WIDGET_TARGET))) goto L_26c;
  if (!((undefined !== a.nextOffset))) goto L_26c;
  if (!((o < 8))) goto L_26c;
  let n;
  let t;
  t = a.nextOffset;
  if ((r.has(t))) goto L_26c;
  r.add(t);
  s = this.api.dashboardWidgets(t, false);
  this.api.dashboardWidgets(t, false);
  n = (await s.result);
  a = e.mergeFinanceDashboardPages(a, n);
  e.mergeFinanceDashboardPages(a, n);
  this.dashboard = a;
  o = (o + 1);
  (o + 1);
  goto L_9a;
  return a; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=chatgpt_finance/src/FinanceRepository
// closure: t, s
function {
  t = true;
  true;
  if (!((s == null))) goto L_12;
  s;
  goto L_36;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=38B file=chatgpt_finance/src/FinanceRepository
// locals: s, t, a, this
// closure: exports, e
function {
  this = this;
  let a;
  let t;
  let s;
  s = undefined;
  t = false;
  a = function <atom:0>();
  return {cancel: function <atom:0>, result: a};
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_finance/src/FinanceRepository
// closure: t
function {
  t.cancel();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=159B file=chatgpt_finance/src/FinanceRepository
// args: t
// locals: a, r
// closure: this, s, e
function {
  let r;
  let a;
  a = this.dashboard;
  if (((undefined === a))) goto L_58;
  if (!((a.nextOffset !== s))) goto L_64;
  if (!((a == null))) goto L_63;
  a;
  return t;
  r = e.mergeFinanceDashboardPages(a, t);
  this.dashboard = r;
  return r;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=168B file=chatgpt_finance/src/FinanceRepository
// args: s
// locals: t, this
// closure: e
function {
  this = this;
  let t;
  t = this.api.dashboardWidgets(s, false);
  return {cancel: function <atom:0>, result: t.result.then(function <atom:0>)};
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=4 bc=172B file=chatgpt_finance/src/FinanceRepository
// args: require, module, exports
// locals: e, s, FinanceRepository, <class_fields_init>, FinanceRepository#1
function {
  let FinanceRepository#1;
  let s;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FINANCE_INITIAL_WIDGET_TARGET = undefined;
  exports.FinanceRepository = undefined;
  e = require("./FinanceModels");
  exports.FINANCE_INITIAL_WIDGET_TARGET = 10;
  s = 8;
  let FinanceRepository;
  let <class_fields_init>;
  class FinanceRepository extends undefined { ... }
  <proto:FinanceRepository>.cachedDashboard = function <atom:0>;
  <proto:FinanceRepository>.loadDashboard = function <atom:0>;
  <proto:FinanceRepository>.loadMore = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FinanceRepository>;
  FinanceRepository = function <atom:0>;
  // close_loc <class_fields_init>
  FinanceRepository#1 = function <atom:0>;
  exports.FinanceRepository = FinanceRepository#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_finance/src/FinanceRepository
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
