// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=76B file=dil_widgets/src/layout/FlowPlacement
// args: o, t
function {
  return Math.max(o, t.columns);   // tail call
}

// fn o  args=2 vars=5 closure=1 cpool=1 bc=162B file=dil_widgets/src/layout/FlowPlacement
// args: o, e
// locals: r, n, s
// closure: t
function {
  let n;
  let r;
  r = o.reduce(function <atom:0>, Math.max(1, e));
  n = [];
  let s;
  for (const s of o) {
    n.push(t(s, r, n));
  }
  return n;
}

// fn t  args=3 vars=8 closure=0 cpool=0 bc=600B file=dil_widgets/src/layout/FlowPlacement
// args: o, t, e
// locals: r, n, s, t#1, c
function {
  let r;
  r = 0;
  let n;
  n = (1 / 0);
  let s;
  s = 0;
  if (!((s <= (t - o.columns)))) goto L_24d;
  let t#1;
  t#1 = false;
  let c;
  for (const c of e) {
    if (!((s < (c.column + c.columns)))) goto L_21a;
    if (!(((s + o.columns) > c.column))) goto L_21a;
    if (!((r < (c.row + c.rows)))) goto L_21a;
    if (!(((r + o.rows) > c.row))) goto L_21a;
    t#1 = true;
    true;
    n = Math.min(n, (c.row + c.rows));
    Math.min(n, (c.row + c.rows));
  }
  if (!(!t#1)) goto L_242;
  null;
  o;
  return {column: s, row: r};
  s = <s_new>;
  (s++);
  goto L_11;
  r = n;
  n;
  goto L_5;
}

// fn e  args=1 vars=5 closure=0 cpool=2 bc=203B file=dil_widgets/src/layout/FlowPlacement
// args: o
// locals: t, e, r, n
function {
  let r;
  let e;
  let t;
  t = 0;
  e = 0;
  r = false;
  let n;
  for (const n of o) {
    if (!(new RegExp("\\s").test(n))) goto L_55;
    if (!((0 === e))) goto L_55;
    r = false;
    goto L_94;
    // [栈深重同步 4 -> 3]
    if ((r)) goto L_6a;
    t = <t_new>;
    (t++);
    r = true;
    true;
    if (!(("(" === n))) goto L_7f;
    e = <e_new>;
    (e++);
    if (!((")" === n))) goto L_94;
    e = <e_new>;
    (e--);
  }
  return Math.max(1, t);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=110B file=dil_widgets/src/layout/FlowPlacement
// args: require, module, exports
// locals: o, t, e
function {
  o = function o;
  t = function t;
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.placePackedFlowItems = undefined;
  exports.countFlowColumns = undefined;
  exports.placePackedFlowItems = o;
  exports.countFlowColumns = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/layout/FlowPlacement
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
