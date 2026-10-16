// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_global_search/src/GlobalSearchModels
// args: e
function {
  e.Top = 0;
  e[0] = "Top";
  e.Chats = 1;
  e[1] = "Chats";
  e.Images = 2;
  e[2] = "Images";
  e.Documents = 3;
  e[3] = "Documents";
  e.Projects = 4;
  e[4] = "Projects";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_global_search/src/GlobalSearchModels
// args: e
function {
  e.Conversation = 0;
  e[0] = "Conversation";
  e.Image = 1;
  e[1] = "Image";
  e.Document = 2;
  e[2] = "Document";
  e.Project = 3;
  e[3] = "Project";
  e.Folder = 4;
  e[4] = "Folder";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=chatgpt_global_search/src/GlobalSearchModels
// args: e
function {
  e.Live = 0;
  e[0] = "Live";
  e.Demo = 1;
  e[1] = "Demo";
  return;
}

// fn l  args=1 vars=1 closure=6 cpool=0 bc=264B file=chatgpt_global_search/src/GlobalSearchModels
// args: r
// closure: e, s, t, a, c, n
function {
  if (!((r === e.Top))) goto L_2b;
  return s;
  if (!((r === e.Chats))) goto L_55;
  return t;
  if (!((r === e.Images))) goto L_7f;
  return a;
  if (!((r === e.Documents))) goto L_a9;
  return c;
  if (!((r === e.Projects))) goto L_d3;
  return n;
  r;
  throw new Error("Unknown global search filter: ".concat(r));
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=4 bc=596B file=chatgpt_global_search/src/GlobalSearchModels
// args: require, module, exports
// locals: e, r, o, s, t, a, c, n, l
function {
  l = function l;
  let n;
  let c;
  let a;
  let t;
  let s;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GlobalSearchFilter = undefined;
  exports.GlobalSearchResultKind = undefined;
  exports.GlobalSearchBackend = undefined;
  exports.GLOBAL_SEARCH_FILTERS = undefined;
  exports.configurationForFilter = undefined;
  if ((e)) goto L_96;
  e = {};
  exports.GlobalSearchFilter = {};
  function <atom:0>({});
  if ((r)) goto L_ac;
  r = {};
  exports.GlobalSearchResultKind = {};
  function <atom:0>({});
  if ((o)) goto L_c2;
  o = {};
  exports.GlobalSearchBackend = {};
  function <atom:0>({});
  s = {label: "Top", sources: ["conversation", "library", "project"], libraryLanes: ["image", "document", "folder"]};
  t = {label: "Chats", sources: ["conversation"], libraryLanes: []};
  a = {label: "Images", sources: ["library"], libraryLanes: ["image"]};
  c = {label: "Documents", sources: ["library"], libraryLanes: ["document"]};
  n = {label: "Projects", sources: ["project"], libraryLanes: []};
  exports.GLOBAL_SEARCH_FILTERS = [e.Top, e.Chats, e.Images, e.Documents, e.Projects];
  exports.configurationForFilter = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_global_search/src/GlobalSearchModels
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
