// fn t  args=2 vars=2 closure=1 cpool=0 bc=96B file=foundation/src/time
// args: t, r
// closure: e
function {
  if (!((r === e.HOURS))) goto L_33;
  return (((t / 1000) / 60) / 60);
  if (!((r === e.SECONDS))) goto L_5f;
  return (t / 1000);
  r;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=foundation/src/time
// args: e
function {
  e.HOURS = 0;
  e[0] = "HOURS";
  e.SECONDS = 1;
  e[1] = "SECONDS";
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=115B file=foundation/src/time
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TimeUnit = undefined;
  exports.convertTimestampMs = undefined;
  if ((e)) goto L_65;
  e = {};
  exports.TimeUnit = {};
  function <atom:0>({});
  exports.convertTimestampMs = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=foundation/src/time
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
