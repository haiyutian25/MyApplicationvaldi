// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=262B file=valdi_navigation/src/ToolbarMetadata
// args: e
// closure: t, i
function {
  if (!((true !== e.disabled))) goto L_36;
  throw new Error("Initial toolbar actions must be disabled");
  if (!((undefined === e.style))) goto L_d8;
  goto L_100;
  // [栈深重同步 2 -> 1]
  null;
  {style: e.style};
  return {id: e.id, title: t(e.titleKey, i), disabled: e.disabled};
}

// fn e  args=2 vars=2 closure=1 cpool=1 bc=252B file=valdi_navigation/src/ToolbarMetadata
// args: e, i
// closure: t
function {
  if (!((1 !== e.schemaVersion))) goto L_35;
  throw new Error("Unsupported toolbar metadata schema version");
  return {title: t(e.titleKey, i), titleDisplayMode: e.titleDisplayMode, backgroundVisibility: e.backgroundVisibility, trailingActions: e.trailingActions.map(function <atom:0>)};
}

// fn t  args=2 vars=3 closure=0 cpool=2 bc=168B file=valdi_navigation/src/ToolbarMetadata
// args: e, t
// locals: i
function {
  let i;
  i = t.resolveUnparsedLocalizableString(e);
  if (((undefined === i))) goto L_69;
  if (((0 === i.length))) goto L_69;
  if (!(new RegExp("\\$\\d+").test(i))) goto L_a4;
  throw new Error("Toolbar metadata requires a fixed localized string for '".concat(e, "'"));
  return i;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=2 bc=85B file=valdi_navigation/src/ToolbarMetadata
// args: require, module, exports
// locals: e, t
function {
  e = function e;
  t = function t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveToolbarMetadata = undefined;
  exports.resolveToolbarMetadata = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/ToolbarMetadata
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
