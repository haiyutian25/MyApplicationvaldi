// fn <atom:0>  args=0 vars=5 closure=0 cpool=0 bc=505B file=worker/test_workers/FetchWorker
// locals: e, t, a, r, e#1
function {
  try { // catch -> L_1b6
  let r;
  let a;
  let t;
  let e;
  e = URL.createObjectURL(new Blob(["worker"], {type: "text/plain"}));
  t = new Request(e);
  a = (await fetch(t));
  URL.revokeObjectURL(e);
  r = new FormData();
  r.append("worker", "parsed");
  if (!(("parsed" !== (await new Response(r).formData()).get("worker")))) goto L_149;
  throw new Error("Worker native form parser is unavailable");
  postMessage([(await a.text()), typeof Headers, typeof FormData, typeof AbortController, location.search]);
  <?>;
  goto L_1f7;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_1f6
  postMessage(["failed", "".concat(e#1)]);
  <?>;
  goto L_1f7;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=1 bc=18B file=worker/test_workers/FetchWorker
// args: require, module, exports
function {
  onmessage = function <atom:0>;
  onmessage;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=worker/test_workers/FetchWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
