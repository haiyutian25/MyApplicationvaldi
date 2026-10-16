// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=143B file=dil_widgets/src/popover/pointerIntent
// args: t, o
function {
  if (((t.x - o.x))) goto L_8e;
  return (t.y - o.y);
}

// fn o  args=3 vars=8 closure=2 cpool=1 bc=2120B file=dil_widgets/src/popover/pointerIntent
// args: o, y, n
// locals: x, r, s, a, i
// closure: t, e
function {
  let i;
  let a;
  let s;
  let r;
  let x;
  x = [Math.abs((y.left - o.x)), Math.abs((y.right - o.x)), Math.abs((y.top - o.y)), Math.abs((y.bottom - o.y))];
  // append([], 0, x)
  x;
  r = x.indexOf(Math.min.apply(Math, []));
  s = [{x: n.left, y: n.top}, {x: n.right, y: n.top}, {x: n.right, y: n.bottom}, {x: n.left, y: n.bottom}];
  if (!((r === t.Left))) goto L_463;
  s.push({x: (o.x + 5), y: (o.y - 5)}, {x: (o.x + 5), y: (o.y + 5)});
  goto L_74e;
  if (!((r === t.Right))) goto L_55d;
  s.push({x: (o.x - 5), y: (o.y - 5)}, {x: (o.x - 5), y: (o.y + 5)});
  goto L_74e;
  if (!((r === t.Top))) goto L_657;
  s.push({x: (o.x - 5), y: (o.y + 5)}, {x: (o.x + 5), y: (o.y + 5)});
  goto L_74e;
  if (!((r === t.Bottom))) goto L_74e;
  s.push({x: (o.x - 5), y: (o.y - 5)}, {x: (o.x + 5), y: (o.y - 5)});
  r;
  s.sort(function <atom:0>);
  a = e(s);
  i = e(s.slice().reverse());
  a.pop();
  i.pop();
  return a.concat(i);   // tail call
}

// fn e  args=1 vars=5 closure=0 cpool=0 bc=451B file=dil_widgets/src/popover/pointerIntent
// args: t
// locals: o, e, t#1, y
function {
  let o;
  o = [];
  let e;
  for (const e of t) {
    if (!((o.length >= 2))) goto L_18b;
    let y;
    let t#1;
    t#1 = o[(o.length - 1)];
    y = o[(o.length - 2)];
    if (((((t#1.x - y.x) * (e.y - y.y)) < ((t#1.y - y.y) * (e.x - y.x))))) goto L_18b;
    o.pop();
    goto L_10;
    o.push(e);
  }
  return o;
}

// fn y  args=2 vars=7 closure=0 cpool=0 bc=522B file=dil_widgets/src/popover/pointerIntent
// args: t, o
// locals: e, y, n, x, r
function {
  let e;
  e = false;
  let n;
  let y;
  y = 0;
  n = (o.length - 1);
  if (!((y < o.length))) goto L_206;
  let r;
  let x;
  x = o[y];
  r = o[n];
  if (!(((x.y > t.y) != (r.y > t.y)))) goto L_1f6;
  if (!((t.x < ((((r.x - x.x) * (t.y - x.y)) / (r.y - x.y)) + x.x)))) goto L_1f6;
  e = !e;
  !e;
  y = <y_new>;
  n = (y++);
  (y++);
  goto L_13;
  return e;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=dil_widgets/src/popover/pointerIntent
// args: t
function {
  t.Left = 0;
  t[0] = "Left";
  t.Right = 1;
  t[1] = "Right";
  t.Top = 2;
  t[2] = "Top";
  t.Bottom = 3;
  t[3] = "Bottom";
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=121B file=dil_widgets/src/popover/pointerIntent
// args: require, module, exports
// locals: t, o, e, y
function {
  o = function o;
  e = function e;
  y = function y;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createPointerIntentArea = undefined;
  exports.isPointInPolygon = undefined;
  if ((t)) goto L_60;
  t = {};
  function <atom:0>({});
  exports.createPointerIntentArea = o;
  exports.isPointInPolygon = y;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/popover/pointerIntent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
