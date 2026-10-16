// fn n  args=1 vars=1 closure=1 cpool=0 bc=94B file=valdi_navigation/src/PlatformNavigation
// args: n
// closure: i
function {
  if (!(i.isVersionAtLeast(172))) goto L_5d;
  if (!((n.supportsPlatformNavigationSearch == null))) goto L_59;
  n.supportsPlatformNavigationSearch;
  n;
  goto L_5c;
  // [栈深重同步 2 -> 3]
  return (true === <?>.call(undefined));
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=93B file=valdi_navigation/src/PlatformNavigation
// args: n
// closure: i
function {
  if (!(i.isVersionAtLeast(93))) goto L_5c;
  if (!((n.supportsPlatformNavigationConfirmationDialog == null))) goto L_58;
  n.supportsPlatformNavigationConfirmationDialog;
  n;
  goto L_5b;
  // [栈深重同步 2 -> 3]
  return (true === <?>.call(undefined));
}

// fn t  args=3 vars=3 closure=1 cpool=0 bc=64B file=valdi_navigation/src/PlatformNavigation
// args: n, o, t
// closure: i
function {
  if (!(i.isVersionAtLeast(267))) goto L_3e;
  null;
  n;
  return {id: t, confirmationDialog: o};
  return n;
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=45B file=valdi_navigation/src/PlatformNavigation
// args: n
// closure: i
function {
  if (!(i.isVersionAtLeast(138))) goto L_2c;
  return n;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=valdi_navigation/src/PlatformNavigation
// args: i
function {
  return (undefined !== i.confirmationDialog);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=72B file=valdi_navigation/src/PlatformNavigation
// args: i
function {
  return i.actions.some(function <atom:0>);   // tail call
}

// fn e  args=1 vars=10 closure=2 cpool=1 bc=1318B file=valdi_navigation/src/PlatformNavigation
// args: i
// locals: n, o, n#1, t, i#1, i#2, n#2, o#1, i#3
// closure: r, s
function {
  let o;
  let n;
  if (!((i.leadingActions == null))) goto L_34;
  i.leadingActions;
  // append([], 0, [])
  if (!((i.trailingActions == null))) goto L_5f;
  i.trailingActions;
  // append([], [], [])
  [];
  n = [];
  o = new Set();
  if (!((undefined !== i.titleMenu))) goto L_1c5;
  let n#1;
  if (!(i.titleMenu.groups.some(function <atom:0>))) goto L_109;
  return "Title menu actions do not support confirmation dialogs";
  o.add(i.titleMenu.id);
  n#1 = r(i.titleMenu.groups);
  if (!((undefined !== n#1))) goto L_1c5;
  return n#1;
  let t;
  for (const t of n) {
    if (!(o.has(t.id))) goto L_227;
    return "Navigation action IDs must be unique within one navigation bar";
    // [栈深重同步 0 -> 3]
    o.add(t.id);
    if (!((undefined !== t.confirmationDialog))) goto L_334;
    let i#1;
    if (((undefined !== t.menuActions))) goto L_2f1;
    if (!((undefined !== t.menuGroups))) goto L_2fd;
    return "A navigation action cannot present both a menu and a confirmation dialog";
    // [栈深重同步 0 -> 3]
    i#1 = s(t.confirmationDialog);
    if (!((undefined !== i#1))) goto L_334;
    return i#1;
    // [栈深重同步 0 -> 3]
    if (!((undefined !== t.menuActions))) goto L_4ba;
    let i#2;
    if (!((undefined !== t.menuGroups))) goto L_394;
    return "A navigation action cannot present both flat and grouped menus";
    // [栈深重同步 0 -> 3]
    i#2 = new Set();
    let n#2;
    for (const n#2 of t.menuActions) {
      let o#1;
      if (!(i#2.has(n#2.id))) goto L_42a;
      return "Menu action IDs must be unique within one navigation action";
      // [栈深重同步 0 -> 3]
      i#2.add(n#2.id);
      o#1 = s(n#2.confirmationDialog);
      if (!((undefined !== o#1))) continue;
      return o#1;
      // [栈深重同步 0 -> 3]
    }
    // [栈深重同步 0 -> 3]
    if (!((undefined !== t.menuGroups))) continue;
    let i#3;
    i#3 = r(t.menuGroups);
    if (!((undefined !== i#3))) continue;
    return i#3;
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn r  args=1 vars=6 closure=1 cpool=0 bc=623B file=valdi_navigation/src/PlatformNavigation
// args: i
// locals: n, o, t, i#1, n#1
// closure: s
function {
  let o;
  let n;
  n = new Set();
  o = new Set();
  let t;
  for (const t of i) {
    if (!(n.has(t.id))) goto L_7a;
    return "Menu group IDs must be unique within one menu";
    // [栈深重同步 0 -> 3]
    n.add(t.id);
    if (!((1 === t.presentation))) goto L_14b;
    if (!((t.title == null))) goto L_11a;
    t.title;
    goto L_13e;
    if (!(!undefined.trim())) goto L_14b;
    return "Navigation submenus must have a nonempty title";
    // [栈深重同步 0 -> 3]
    let i#1;
    for (const i#1 of t.actions) {
      let n#1;
      if (!(o.has(i#1.id))) goto L_1d5;
      return "Menu action IDs must be unique within one navigation action";
      // [栈深重同步 0 -> 3]
      o.add(i#1.id);
      n#1 = s(i#1.confirmationDialog);
      if (!((undefined !== n#1))) continue;
      return n#1;
      // [栈深重同步 0 -> 3]
    }
    // [栈深重同步 0 -> 3]
  }
  return;
}

// fn s  args=1 vars=3 closure=0 cpool=0 bc=234B file=valdi_navigation/src/PlatformNavigation
// args: i
// locals: n, o
function {
  let n;
  if (!((undefined === i))) goto L_9;
  return;
  n = new Set();
  let o;
  for (const o of i.actions) {
    if (!(n.has(o.id))) goto L_94;
    return "Confirmation action IDs must be unique within one navigation action";
    // [栈深重同步 0 -> 3]
    n.add(o.id);
  }
  return;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=7 bc=205B file=valdi_navigation/src/PlatformNavigation
// args: require, module, exports
// locals: i, n, o, t, a, e, r, s
function {
  n = function n;
  o = function o;
  t = function t;
  a = function a;
  e = function e;
  r = function r;
  s = function s;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.supportsNavigationSearch = undefined;
  exports.supportsNavigationConfirmationDialog = undefined;
  exports.navigationMenuActionWithConfirmation = undefined;
  exports.navigationActionStateForHost = undefined;
  exports.validatePlatformNavigationBar = undefined;
  i = require("valdi_core/src/CompilerIntrinsics");
  exports.supportsNavigationSearch = n;
  exports.supportsNavigationConfirmationDialog = o;
  exports.navigationMenuActionWithConfirmation = t;
  exports.navigationActionStateForHost = a;
  exports.validatePlatformNavigationBar = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/PlatformNavigation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
