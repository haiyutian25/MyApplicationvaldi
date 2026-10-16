// fn e  args=3 vars=3 closure=0 cpool=0 bc=149B file=dil_core/src/DILInteraction
// args: t, e, n
function {
  if (!((e == null))) goto L_a;
  e;
  goto L_2b;
  if (!((undefined !== undefined.interactionElementType))) goto L_94;
  if (!((t == null))) goto L_39;
  t;
  goto L_94;
  if (!((undefined.observeInteraction == null))) goto L_63;
  undefined.observeInteraction;
  undefined;
  goto L_94;
  // [栈深重同步 1 -> 2]
  null;
  n;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=11B file=dil_core/src/DILInteraction
// closure: e, t, n, o, r
function {
  e(t, n, o);
  r();
  return;
}

// fn n  args=4 vars=5 closure=1 cpool=1 bc=104B file=dil_core/src/DILInteraction
// args: t, n, o, r
// locals: i
// closure: e
function {
  let i;
  i = function <atom:0>;
  if (!((t == null))) goto L_15;
  t;
  goto L_36;
  if (!((undefined === undefined.runWithUserInteraction))) goto L_3f;
  goto L_67;
  // [栈深重同步 1 -> 0]
  t.runWithUserInteraction(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=dil_core/src/DILInteraction
// args: t
function {
  t.Option = "option";
  t.Pressable = "pressable";
  t.ValueInput = "value_input";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=140B file=dil_core/src/DILInteraction
// args: require, module, exports
// locals: t, e, n
function {
  e = function e;
  n = function n;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILInteractionAffordance = undefined;
  exports.observeDILControlInteraction = undefined;
  exports.runDILControlInteraction = undefined;
  if ((t)) goto L_73;
  t = {};
  exports.DILInteractionAffordance = {};
  function <atom:0>({});
  exports.observeDILControlInteraction = e;
  exports.runDILControlInteraction = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/DILInteraction
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
