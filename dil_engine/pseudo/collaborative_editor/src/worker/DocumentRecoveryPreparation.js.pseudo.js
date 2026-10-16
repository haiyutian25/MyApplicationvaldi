// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=56B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// args: e
function {
  null;
  e;
  return {bytes: new Uint8Array(e.bytes)};
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=549B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// args: a
// locals: n
// closure: o, t, e, r
function {
  let n;
  if (!(o)) goto L_17;
  throw new Error("Document recovery preparation is closed");
  null;
  a;
  if (!((undefined === a.pendingLocalUpdate))) goto L_a7;
  goto L_d2;
  // [栈深重同步 2 -> 1]
  if (!((undefined === a.savedSnapshot))) goto L_100;
  goto L_12b;
  // [栈深重同步 2 -> 1]
  n = {checkpoint: new Uint8Array(a.checkpoint), authoritativeCheckpoint: new Uint8Array(a.authoritativeCheckpoint), pendingLocalUpdate: new Uint8Array(a.pendingLocalUpdate), savedSnapshot: new Uint8Array(a.savedSnapshot), journal: a.journal.map(function <atom:0>)};
  if (!((t == null))) goto L_1d7;
  t;
  t = e.startWorkerService(r.DocumentStorageWorker, [undefined]);
  e.startWorkerService(r.DocumentStorageWorker, [undefined]);
  return (await t.api.prepare(n)); // async
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=288B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// args: a
// locals: n
// closure: o, t, e, r
function {
  let n;
  if (!(o)) goto L_17;
  throw new Error("Document recovery preparation is closed");
  n = {base: new Uint8Array(a.base), update: new Uint8Array(a.update)};
  if (!((t == null))) goto L_d2;
  t;
  t = e.startWorkerService(r.DocumentStorageWorker, [undefined]);
  e.startWorkerService(r.DocumentStorageWorker, [undefined]);
  return (await t.api.prepareUpdate(n)); // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=68B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// closure: o, t
function {
  if ((o)) goto L_43;
  o = true;
  true;
  if (!((t == null))) goto L_19;
  t;
  goto L_3d;
  undefined.dispose();
  t = undefined;
  undefined;
  return;
}

// fn t  args=0 vars=2 closure=2 cpool=3 bc=37B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// locals: t, o
// closure: e, r
function {
  let o;
  let t;
  t = undefined;
  o = false;
  return {prepare: function <atom:0>, prepareUpdate: function <atom:0>, dispose: function <atom:0>};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDocumentRecoveryPreparation = undefined;
  e = require("worker/src/WorkerService");
  r = require("./DocumentStorageWorker");
  exports.createDocumentRecoveryPreparation = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/worker/DocumentRecoveryPreparation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
