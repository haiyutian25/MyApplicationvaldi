// fn e  args=5 vars=6 closure=2 cpool=0 bc=171B file=dil_widgets/src/widgets/DILWidgetBindingActions
// args: e, i, c, o, n
// locals: r
// closure: t, a
function {
  let r;
  r = undefined;
  if (!((i instanceof t.DILWidgetBinding))) goto L_68;
  if (!((c == null))) goto L_37;
  c;
  goto L_3b;
  r = a(undefined(n), i.createPatchState(o));
  goto L_78;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== c))) goto L_78;
  r = c(n);
  c(n);
  if (!((undefined !== r))) goto L_aa;
  e.dispatchActionPayload(r);
  return;
}

// fn a  args=2 vars=3 closure=1 cpool=0 bc=203B file=dil_widgets/src/widgets/DILWidgetBindingActions
// args: t, e
// locals: a
// closure: i
function {
  let a;
  if (!((undefined === t))) goto L_10;
  return {patchState: e};
  a = [];
  if (!(i(t.patchState))) goto L_62;
  a = t.patchState;
  goto L_b3;
  // [栈深重同步 1 -> 0]
  if (!((undefined !== t.patchState))) goto L_b3;
  a = [t.patchState];
  [t.patchState];
  null;
  t;
  // append([e], 1, a)
  a;
  return {patchState: [e]};
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=42B file=dil_widgets/src/widgets/DILWidgetBindingActions
// args: t
function {
  return Array.isArray(t);   // tail call
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=99B file=dil_widgets/src/widgets/DILWidgetBindingActions
// args: require, module, exports
// locals: t, e, a, i
function {
  e = function e;
  a = function a;
  i = function i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.dispatchActionPayload = undefined;
  t = require("dil_cel/src/WidgetBinding");
  exports.dispatchActionPayload = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/DILWidgetBindingActions
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
