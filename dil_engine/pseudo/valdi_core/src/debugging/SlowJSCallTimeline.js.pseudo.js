// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=143B file=valdi_core/src/debugging/SlowJSCallTimeline
// args: t, s
function {
  if (((t.startMs - s.startMs))) goto L_8e;
  return (s.durationMs - t.durationMs);
}

// fn t  args=1 vars=12 closure=0 cpool=1 bc=778B file=valdi_core/src/debugging/SlowJSCallTimeline
// args: t
// locals: s, o, r, e, n, t#1, s#1, o#1, s#2, a, l
function {
  let e;
  let r;
  let o;
  let s;
  // append([], 0, t)
  t;
  s = [].sort(function <atom:0>);
  o = [];
  r = [];
  e = [];
  let n;
  for (const n of s) {
    let l;
    let a;
    let s#2;
    let t#1;
    t#1 = (n.startMs + n.durationMs);
    if (!(r.length)) goto L_1af;
    let o#1;
    let s#1;
    s#1 = r[(r.length - 1)];
    o#1 = (s#1.event.startMs + s#1.event.durationMs);
    if (!((o#1 > n.startMs))) goto L_184;
    if (((o#1 >= t#1))) goto L_1af;
    r.pop();
    goto L_a9;
    s#2 = r[(r.length - 1)];
    if (!(s#2)) goto L_1e8;
    goto L_1e9;
    // [栈深重同步 4 -> 3]
    a = 0;
    if (!((a < e.length))) goto L_22d;
    if (!((e[a] > n.startMs))) goto L_22d;
    a = <a_new>;
    (a++);
    goto L_1eb;
    e[a] = t#1;
    l = {event: n, row: a, parent: s#2};
    o.push(l);
    if (!((0 === n.kind))) goto L_2fc;
    if (!((n.durationMs > 0))) goto L_2fc;
    r.push(l);
  }
  return o;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_core/src/debugging/SlowJSCallTimeline
// args: require, module, exports
// locals: t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.layoutSlowJSCallTrace = undefined;
  exports.layoutSlowJSCallTrace = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/SlowJSCallTimeline
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
