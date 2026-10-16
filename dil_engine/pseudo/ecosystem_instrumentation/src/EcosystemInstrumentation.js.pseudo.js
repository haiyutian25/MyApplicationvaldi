// fn e  args=3 vars=3 closure=0 cpool=0 bc=150B file=ecosystem_instrumentation/src/EcosystemInstrumentation
// args: e, t, s
function {
  if (!((e == null))) goto L_a;
  e;
  goto L_2b;
  if (!((undefined !== undefined.sendInstrument))) goto L_95;
  e.sendInstrument(JSON.stringify({type: "event", label: t, payload: s}));
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=ecosystem_instrumentation/src/EcosystemInstrumentation
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.sendEcosystemEvent = undefined;
  exports.sendEcosystemEvent = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=ecosystem_instrumentation/src/EcosystemInstrumentation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
