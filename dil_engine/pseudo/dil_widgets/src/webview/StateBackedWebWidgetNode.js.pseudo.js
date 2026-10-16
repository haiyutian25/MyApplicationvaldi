// fn t  args=1 vars=6 closure=1 cpool=0 bc=506B file=dil_widgets/src/webview/StateBackedWebWidgetNode
// args: t
// locals: o, s, i, n, a
// closure: e
function {
  let i;
  let s;
  let o;
  o = {};
  s = {type: t.type, initialState: o};
  i = [];
  let n;
  for (const n of Object.keys(t).sort()) {
    let a;
    if ((e.has(n))) continue;
    a = t[n];
    if (!((undefined !== a))) goto L_180;
    if (!(("function" != typeof a))) goto L_180;
    o[n] = a;
    i.push(n);
    s["$".concat(n)] = "state.".concat(n);
    "state.".concat(n);
  }
  return {node: s, signature: JSON.stringify({type: t.type, stateKeys: i}), state: o};
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=118B file=dil_widgets/src/webview/StateBackedWebWidgetNode
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createStateBackedWebWidgetNode = undefined;
  e = new Set(["children", "initialState", "props", "type"]);
  exports.createStateBackedWebWidgetNode = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/webview/StateBackedWebWidgetNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
