// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_library/src/LibraryLayout
// args: t
function {
  t.Grid = 0;
  t[0] = "Grid";
  t.List = 1;
  t[1] = "List";
  return;
}

// fn s  args=1 vars=5 closure=3 cpool=0 bc=371B file=chatgpt_library/src/LibraryLayout
// args: t
// locals: r, e, a, s
// closure: n, o, i
function {
  let s;
  let a;
  let e;
  let r;
  r = Math.min(n, Math.max(0, (t - 40)));
  if (!((r >= 720))) goto L_73;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  if (!((r >= 480))) goto L_7f;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  if (!((r >= 268))) goto L_8b;
  goto L_8c;
  // [栈深重同步 1 -> 0]
  e = 1;
  a = ((r - (o * (e - 1))) / e);
  s = Math.min(i, Math.max(1, a));
  return {cardWidth: Math.floor(s), columnCount: e, contentWidth: Math.floor(((s * e) + (o * (e - 1))))};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=chatgpt_library/src/LibraryLayout
// args: t
function {
  return (undefined !== t);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=1 bc=361B file=chatgpt_library/src/LibraryLayout
// args: t
// closure: e
function {
  return [t.title, t.subtitle, t.mimeType, t.category, t.provider, t.entityType].filter(function <atom:0>).join(" ").toLocaleLowerCase().includes(e);   // tail call
}

// fn d  args=2 vars=3 closure=0 cpool=1 bc=127B file=chatgpt_library/src/LibraryLayout
// args: t, r
// locals: e
function {
  let e;
  e = r.trim().toLocaleLowerCase();
  if (!((0 === e.length))) goto L_57;
  return t;
  return t.filter(function <atom:0>);
}

// fn c  args=2 vars=2 closure=1 cpool=2 bc=306B file=chatgpt_library/src/LibraryLayout
// args: r, e
// closure: t
function {
  if (!((r.kind === t.ChatGPTLibraryItemKind.Directory))) goto L_98;
  return Math.round((0.78 * e));
  if (!((r.kind === t.ChatGPTLibraryItemKind.SavedEntity))) goto L_130;
  return Math.round((1.1 * e));
  return e;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=4 bc=219B file=chatgpt_library/src/LibraryLayout
// args: require, module, exports
// locals: t, r, e, i, o, a, n, s, d, c
function {
  s = function s;
  d = function d;
  c = function c;
  let n;
  let a;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTLibraryLayout = undefined;
  exports.resolveChatGPTLibraryGridMetrics = undefined;
  exports.filteredLibraryItems = undefined;
  exports.libraryGridCardHeight = undefined;
  t = require("chatgpt_services/src/library/ChatGPTLibraryClient");
  if ((r)) goto L_9e;
  r = {};
  exports.ChatGPTLibraryLayout = {};
  !function <atom:0>({});
  e = 138;
  i = 220;
  o = 12;
  a = 20;
  n = 980;
  exports.resolveChatGPTLibraryGridMetrics = s;
  exports.filteredLibraryItems = d;
  exports.libraryGridCardHeight = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_library/src/LibraryLayout
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
