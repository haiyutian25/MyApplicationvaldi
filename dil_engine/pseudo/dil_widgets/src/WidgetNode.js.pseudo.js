// fn e  args=4 vars=7 closure=0 cpool=0 bc=251B file=dil_widgets/src/WidgetNode
// args: e, t, o, r
// locals: n, i, e#1
function {
  let n;
  n = {type: e};
  let i;
  for (const i of t.properties) {
    let e#1;
    if (!((r == null))) goto L_43;
    r;
    goto L_8b;
    if (((true === undefined.includes(i.name)))) continue;
    e#1 = i.getValue(o);
    if (!((undefined !== e#1))) goto L_ed;
    n[i.name] = e#1;
    e#1;
  }
  return n;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=dil_widgets/src/WidgetNode
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createWidgetNode = undefined;
  exports.createWidgetNode = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/WidgetNode
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
