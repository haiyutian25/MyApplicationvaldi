// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=8B file=valdi_core/src/BugReporter
// closure: t, a
function {
  t;
  delete a;
  return;
}

// fn r  args=2 vars=3 closure=2 cpool=1 bc=36B file=valdi_core/src/BugReporter
// args: r, o
// locals: a
// closure: t, e
function {
  let a;
  e = (e ++);
  a = (e ++);
  t[a] = {name: r, provider: o};
  return function <atom:0>;
}

// fn o  args=2 vars=7 closure=1 cpool=0 bc=479B file=valdi_core/src/BugReporter
// args: e, r
// locals: o, s, d, i, a
// closure: t
function {
  let o;
  o = [];
  let s;
  for (const s of t) {
    let i;
    let d;
    d = t[s];
    i = undefined;
    try { // catch -> L_59
    i = d.provider(e, r);
    d.provider(e, r);
    <catch>;
    goto L_e3;
    // [栈深重同步 2 -> 4]
    a = <?>;
    try { // catch -> L_e2
    i = {verbose: "Provider threw an error while providing log data: ".concat(a.message, ":
", a.stack)};
    {verbose: "Provider threw an error while providing log data: ".concat(a.message, ":
", a.stack)};
    <?>;
    goto L_e3;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
    o.push(d.name);
    if (!(r)) goto L_17c;
    goto L_17d;
    // [栈深重同步 5 -> 4]
    o.push(undefined);
    if (!(e)) goto L_1ce;
    goto L_1cf;
    // [栈深重同步 5 -> 4]
    o.push(undefined);
    // [栈深重同步 2 -> 3]
  }
  <?>;
  return o;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=2 bc=117B file=valdi_core/src/BugReporter
// args: require, module, exports
// locals: e, t, r, o
function {
  r = function r;
  o = function o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.registerLogMetadataProvider = undefined;
  exports.dumpLogMetadata = undefined;
  e = 0;
  t = {};
  exports.registerLogMetadataProvider = r;
  exports.dumpLogMetadata = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/BugReporter
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
