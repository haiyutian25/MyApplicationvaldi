// fn <atom:0>  args=1 vars=14 closure=0 cpool=0 bc=867B file=dil_widgets/src/layout/TableLayout
// args: e
// locals: t, o, r, i, n, l, s, u, e#1, a, c, d, this
function {
  this = this;
  let n;
  let i;
  let r;
  let o;
  let t;
  t = [];
  o = [];
  r = [];
  i = false;
  n = 0;
  let l;
  l = 0;
  if (!((l < e.length))) goto L_302;
  let u;
  let s;
  s = 0;
  u = e[l].getCells();
  let e#1;
  e#1 = 0;
  if (!((e#1 < u.length))) goto L_2f7;
  let d;
  let c;
  let a;
  a = u[e#1];
  if (!(this.isOccupied(t, l, s))) goto L_c9;
  s = <s_new>;
  (s++);
  goto L_8e;
  c = this.readPositiveInteger(a.viewModel.colSpan);
  d = this.readPositiveInteger(a.viewModel.rowSpan);
  if (((c > 1))) goto L_1b1;
  if (!((d > 1))) goto L_1bb;
  i = true;
  true;
  n = Math.max(n, (s + c));
  Math.max(n, (s + c));
  this.markOccupied(t, l, s, d, c);
  if (!((1 === c))) goto L_28e;
  if (!((undefined === r[s]))) goto L_28e;
  r[s] = a.viewModel.width;
  a.viewModel.width;
  o.push({component: a, row: l, column: s, rowSpan: d, colSpan: c});
  s = (s + c);
  (s + c);
  e#1 = <e#1_new>;
  (e#1++);
  goto L_6f;
  l = <l_new>;
  (l++);
  goto L_2a;
  return {cells: o, columnCount: n, dividers: this.computeDividerLayout(e.length, o), hasSpans: i, rowCount: t.length, rows: e, widths: r};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=104B file=dil_widgets/src/layout/TableLayout
// args: e
function {
  if (!(("number" == typeof e))) goto L_66;
  if (!(Number.isFinite(e))) goto L_66;
  if (!((e > 1))) goto L_66;
  return Math.floor(e);
  return 1;
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=17B file=dil_widgets/src/layout/TableLayout
// args: e, t, o
function {
  if (!((e[t] == null))) goto L_d;
  e[t];
  goto L_f;
  return (true === undefined[o]);
}

// fn <atom:0>  args=5 vars=8 closure=0 cpool=0 bc=92B file=dil_widgets/src/layout/TableLayout
// args: e, t, o, r, i
// locals: n, r#1, t#1
function {
  let n;
  n = 0;
  if (!((n < r))) goto L_5b;
  let r#1;
  r#1 = (t + n);
  if (!((undefined === e[r#1]))) goto L_2a;
  e[r#1] = [];
  [];
  let t#1;
  t#1 = 0;
  if (!((t#1 < i))) goto L_51;
  e[r#1][(o + t#1)] = true;
  t#1 = <t#1_new>;
  (t#1++);
  goto L_30;
  n = <n_new>;
  (n++);
  goto L_5;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=133B file=dil_widgets/src/layout/TableLayout
// args: e, t
// locals: o, r, this
function {
  this = this;
  let o;
  o = [];
  let r;
  r = 0;
  if (!((r < e))) goto L_81;
  if (!((r < (e - 1)))) goto L_6e;
  o.push({visible: this.canDrawFullWidthDividerAfterRow(r, t)});
  r = <r_new>;
  (r++);
  goto L_e;
  return o;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=161B file=dil_widgets/src/layout/TableLayout
// args: e, t
// locals: o, r
function {
  let o;
  o = 0;
  if (!((o < t.length))) goto L_9e;
  let r;
  r = t[o];
  if (!((r.row <= e))) goto L_93;
  if (!((((r.row + r.rowSpan) - 1) > e))) goto L_93;
  return false;
  o = <o_new>;
  (o++);
  goto L_5;
  return true;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=dil_widgets/src/layout/TableLayout
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=7 bc=155B file=dil_widgets/src/layout/TableLayout
// args: require, module, exports
// locals: TableLayout, <class_fields_init>, TableLayout#1
function {
  let TableLayout#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TableLayout = undefined;
  let TableLayout;
  let <class_fields_init>;
  class TableLayout extends undefined { ... }
  <proto:TableLayout>.computeLayout = function <atom:0>;
  <proto:TableLayout>.readPositiveInteger = function <atom:0>;
  <proto:TableLayout>.isOccupied = function <atom:0>;
  <proto:TableLayout>.markOccupied = function <atom:0>;
  <proto:TableLayout>.computeDividerLayout = function <atom:0>;
  <proto:TableLayout>.canDrawFullWidthDividerAfterRow = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TableLayout>;
  TableLayout = function <atom:0>;
  // close_loc <class_fields_init>
  TableLayout#1 = function <atom:0>;
  exports.TableLayout = TableLayout#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/layout/TableLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
