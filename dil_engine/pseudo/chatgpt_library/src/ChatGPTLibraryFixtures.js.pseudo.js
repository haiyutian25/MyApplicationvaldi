// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=153B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  t.Live = 0;
  t[0] = "Live";
  t.Populated = 1;
  t[1] = "Populated";
  t.Empty = 2;
  t[2] = "Empty";
  t.Error = 3;
  t[3] = "Error";
  t.Loading = 4;
  t[4] = "Loading";
  t.Selection = 5;
  t[5] = "Selection";
  t.Folder = 6;
  t[6] = "Folder";
  t.StorageFull = 7;
  t[7] = "StorageFull";
  return;
}

// fn a  args=2 vars=2 closure=2 cpool=0 bc=17B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t, e
// closure: FixtureChatGPTLibraryClient, i
function {
  if ((t)) goto L_c;
  return new FixtureChatGPTLibraryClient(i, e);
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t, e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.accountId = t;
  this.variant = e;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=7 cpool=0 bc=664B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
// locals: i, r, a, this
// closure: e, u, f, s, d, o, n
function {
  this = this;
  let a;
  let r;
  let i;
  if (!((this.variant === e.Error))) goto L_64;
  return u(new Error("The fixture Library could not be loaded."));   // tail call
  if (!((this.variant === e.Loading))) goto L_af;
  return f();   // tail call
  if (!((this.variant === e.Empty))) goto L_151;
  return s({accountId: this.accountId, items: [], surface: t.surface});   // tail call
  i = d(this.accountId);
  r = o(this.accountId);
  if (((undefined !== t.directoryId))) goto L_20c;
  if (!((this.variant === e.Folder))) goto L_213;
  goto L_23c;
  // [栈深重同步 1 -> 0]
  a = n(r, t.surface);
  return s({accountId: this.accountId, items: a, surface: t.surface});   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=244B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e, i
// locals: this
// closure: s, t
function {
  this = this;
  if (!((undefined === i))) goto L_8e;
  goto L_95;
  // [栈深重同步 3 -> 2]
  null;
  {parentDirectoryId: i};
  return s({accountId: this.accountId, id: "folder-created", isShared: false, kind: t.ChatGPTLibraryItemKind.Directory, requiresAuthentication: false, state: t.ChatGPTLibraryItemState.Ready, title: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=5B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
// closure: s
function {
  return s(undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=149B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e
// closure: t
function {
  if (!((e.kind !== t.ChatGPTLibraryItemKind.Directory))) goto L_94;
  return ("uploaded-screenshot" !== e.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e
// closure: t
function {
  return (e.kind === t.ChatGPTLibraryItemKind.Directory);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=85B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  if ((("favorite-product" === t.id))) goto L_54;
  return ("trip-notes" === t.id);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  return ("image" === t.category);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e
// closure: t
function {
  return (e.kind === t.ChatGPTLibraryItemKind.File);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  return ("uploaded-screenshot" === t.id);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=85B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  if ((("favorite-product" === t.id))) goto L_54;
  return ("trip-notes" === t.id);
}

// fn n  args=2 vars=2 closure=1 cpool=7 bc=786B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e, i
// closure: t
function {
  if (!((i === t.ChatGPTLibrarySurface.Suggested))) goto L_71;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.Folders))) goto L_e1;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.Favorites))) goto L_151;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.Images))) goto L_1c1;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.All))) goto L_231;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.Uploads))) goto L_2a1;
  return e.filter(function <atom:0>);   // tail call
  if (!((i === t.ChatGPTLibrarySurface.Bookmarks))) goto L_311;
  return e.filter(function <atom:0>);   // tail call
  i;
  return;
}

// fn o  args=1 vars=1 closure=4 cpool=0 bc=958B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e
// closure: c, l, t, r
function {
  return [c(e, {category: "image", id: "shopping-look", modifiedAt: "2026-08-21T20:12:00Z", subtitle: "Shopping", thumbnailUrl: l("Summer dinner", "#f6cfb8", "#c16f5c", "#6e302d", "✦"), title: "Summer dinner look"}), c(e, {category: "image", id: "garden-render", modifiedAt: "2026-08-21T16:28:00Z", subtitle: "Generated image", thumbnailUrl: l("Garden", "#b6d6bd", "#3f7656", "#e8f3d6", "✿"), title: "Garden renovation"}), c(e, {category: "document", id: "trip-notes", isShared: true, mimeType: "application/pdf", modifiedAt: "2026-08-20T18:00:00Z", subtitle: "PDF � Shared", title: "Kyoto field notes.pdf"}), c(e, {category: "document", id: "launch-plan", mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation", modifiedAt: "2026-08-19T14:42:00Z", subtitle: "Presentation", title: "Q4 launch plan.pptx"}), c(e, {category: "image", id: "uploaded-screenshot", modifiedAt: "2026-08-19T10:05:00Z", subtitle: "Uploaded image", thumbnailUrl: l("Screenshot", "#a8c8f0", "#3e5e9b", "#f4f7ff", "▣"), title: "Screenshot.png"}), c(e, {id: "client-work", kind: t.ChatGPTLibraryItemKind.Directory, modifiedAt: "2026-08-18T12:18:00Z", subtitle: "12 items", thumbnailUrl: l("Client work", "#91c4ee", "#3678ad", "#123d67", "C"), title: "Client work"}), c(e, {id: "google-drive", kind: t.ChatGPTLibraryItemKind.Directory, provider: "Google Drive", subtitle: "Connected", title: "Google Drive"}), c(e, {id: "shared-with-me", isShared: true, kind: t.ChatGPTLibraryItemKind.Directory, subtitle: "8 items", thumbnailUrl: r, title: "Shared with me"}), c(e, {entityDescription: "A restrained oak chair with a woven seat.", entityType: "Product", id: "favorite-product", kind: t.ChatGPTLibraryItemKind.SavedEntity, subtitle: "Product", thumbnailUrl: l("Sailmaker", "#d9c2a0", "#735136", "#f8ebd1", "◆"), title: "Sailmaker dining chair"})];
}

// fn d  args=1 vars=1 closure=3 cpool=0 bc=298B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e
// closure: c, l, t
function {
  return [c(e, {category: "document", id: "folder-brief", mimeType: "application/pdf", modifiedAt: "2026-08-21T09:35:00Z", subtitle: "PDF", title: "Project brief.pdf"}), c(e, {category: "image", id: "folder-moodboard", modifiedAt: "2026-08-20T13:10:00Z", subtitle: "Generated image", thumbnailUrl: l("Moodboard", "#d9c1e8", "#725287", "#f7ecff", "◈"), title: "Moodboard"}), c(e, {id: "folder-research", kind: t.ChatGPTLibraryItemKind.Directory, subtitle: "4 items", thumbnailUrl: l("Research", "#e8c888", "#9b6835", "#4d311b", "R"), title: "Research"})];
}

// fn c  args=2 vars=2 closure=1 cpool=0 bc=485B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: e, i
// closure: t
function {
  null;
  i;
  if (!((i.isShared == null))) goto L_5d;
  i.isShared;
  if (!((i.kind == null))) goto L_ce;
  i.kind;
  if (!((undefined !== i.thumbnailUrl))) goto L_147;
  if (!((i.state == null))) goto L_1b8;
  i.state;
  return {accountId: e, id: i.id, isShared: false, kind: t.ChatGPTLibraryItemKind.File, requiresAuthentication: !i.thumbnailUrl.startsWith("data:"), state: t.ChatGPTLibraryItemState.Ready, title: i.title};
}

// fn l  args=5 vars=5 closure=0 cpool=0 bc=92B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t, e, i, r, a
function {
  return ("data:image/svg+xml;charset=utf-8," + encodeURIComponent("<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="".concat(e, ""/><stop offset="1" stop-color="", i, ""/></linearGradient></defs>
    <rect width="640" height="640" fill="url(#g)"/>
    <circle cx="540" cy="110" r="150" fill="", r, "" opacity=".18"/>
    <circle cx="98" cy="560" r="210" fill="#fff" opacity=".16"/>
    <rect x="46" y="46" width="548" height="548" rx="38" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="3"/>
    <text x="320" y="335" text-anchor="middle" font-family="sans-serif" font-size="160" fill="", r, "" opacity=".9">", a, "</text>
    <text x="320" y="540" text-anchor="middle" font-family="sans-serif" font-size="34" font-weight="600" fill="#fff">", t, "</text>
  </svg>")));
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return;
}

// fn s  args=1 vars=1 closure=0 cpool=1 bc=57B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  return {result: Promise.resolve(t), cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return;
}

// fn u  args=1 vars=1 closure=0 cpool=1 bc=57B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: t
function {
  return {result: Promise.reject(t), cancel: function <atom:0>};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return;
}

// fn f  args=0 vars=0 closure=0 cpool=2 bc=26B file=chatgpt_library/src/ChatGPTLibraryFixtures
function {
  return {result: new Promise(function <atom:0>), cancel: function <atom:0>};
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=15 bc=240B file=chatgpt_library/src/ChatGPTLibraryFixtures
// args: require, module, exports
// locals: t, e, i, r, a, FixtureChatGPTLibraryClient, <class_fields_init>, FixtureChatGPTLibraryClient#1, n, o, d, c, l, s, u, f
function {
  a = function a;
  n = function n;
  o = function o;
  d = function d;
  c = function c;
  l = function l;
  s = function s;
  u = function u;
  f = function f;
  let FixtureChatGPTLibraryClient#1;
  let r;
  let i;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTLibraryFixtureVariant = undefined;
  exports.createChatGPTLibraryFixtureClient = undefined;
  t = require("chatgpt_services/src/library/ChatGPTLibraryClient");
  if ((e)) goto L_9a;
  e = {};
  exports.ChatGPTLibraryFixtureVariant = {};
  !function <atom:0>({});
  i = "library-fixture-account";
  r = "data:image/png;base64,aW52YWxpZA==";
  exports.createChatGPTLibraryFixtureClient = a;
  let FixtureChatGPTLibraryClient;
  let <class_fields_init>;
  class FixtureChatGPTLibraryClient extends undefined { ... }
  <proto:FixtureChatGPTLibraryClient>.load = function <atom:0>;
  <proto:FixtureChatGPTLibraryClient>.createDirectory = function <atom:0>;
  <proto:FixtureChatGPTLibraryClient>.deleteItem = function <atom:0>;
  <proto:FixtureChatGPTLibraryClient>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FixtureChatGPTLibraryClient>;
  FixtureChatGPTLibraryClient = function <atom:0>;
  // close_loc <class_fields_init>
  FixtureChatGPTLibraryClient#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_library/src/ChatGPTLibraryFixtures
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
