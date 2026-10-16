// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  e.Loading = 0;
  e[0] = "Loading";
  e.Loaded = 1;
  e[1] = "Loaded";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  e.All = 0;
  e[0] = "All";
  e.Images = 1;
  e[1] = "Images";
  e.Files = 2;
  e[2] = "Files";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=519B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e
// closure: this, It
function {
  if (!(this.selectionActive)) goto L_4f;
  this.clearSelection();
  return;
  if (!(!this.isRoot)) goto L_19a;
  let e;
  e = this.state.folderStack.slice(0, -1);
  this.setState({folderCategory: It.All, folderStack: e, query: "", selectedIds: []});
  this.reloadCurrentSurface(undefined, It.All);
  return;
  this.context.navigator.pop(true);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  this.setState({query: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=243B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  this.track("library_search_submitted", {queryLength: String(this.state.query.trim().length)});
  if (!(this.serverSearchEnabled)) goto L_f2;
  this.reloadCurrentSurface();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=206B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  if (!((0 !== this.state.query.length))) goto L_cd;
  this.setState({query: ""});
  if (!(this.serverSearchEnabled)) goto L_cd;
  this.reloadCurrentSurface();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.reloadCurrentSurface();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=186B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  if (!((undefined !== this.state.cursor))) goto L_b9;
  this.loadPage(this.state.cursor, true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=109B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, Ct
function {
  this.setLayout(Ct.ChatGPTLibraryLayout.Grid);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=109B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, Ct
function {
  this.setLayout(Ct.ChatGPTLibraryLayout.List);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({menuOpen: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=48B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({menuOpen: false});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=555B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this, Ct
function {
  this.setState({menuOpen: false});
  if (!((e === "upload"))) goto L_63;
  this.uploadFiles();
  e;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "new-folder"))) goto L_95;
  this.openCreateFolder();
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "select"))) goto L_13c;
  if (!((this.visibleItems.length > 0))) goto L_13a;
  this.toggleSelection(this.visibleItems[0].id);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "grid"))) goto L_1b3;
  this.setLayout(Ct.ChatGPTLibraryLayout.Grid);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "list"))) goto L_22a;
  this.setLayout(Ct.ChatGPTLibraryLayout.List);
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=128B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  if (!((this.context.uploadFiles == null))) goto L_4e;
  this.context.uploadFiles;
  this.context;
  goto L_51;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.track("library_upload_tapped", {});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({createFolderName: "", createFolderOpen: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({createFolderName: "", createFolderOpen: false});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  this.setState({createFolderName: e});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  this.createFolder();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=364B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  if ((this.isDestroyed())) goto L_16b;
  if (((e.accountId !== this.viewModel.accountId))) goto L_16b;
  // append([e], 1, this.state.items)
  this.state.items;
  this.setState({items: [e]});
  this.track("library_folder_created", {id: e.id});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=95B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_5e;
  console.warn(("Unable to create a Library folder: " + String(t)));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=59B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, r
function {
  if (!((this.activeRequest === r))) goto L_3a;
  this.activeRequest = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=3 bc=511B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: t, i, r
// closure: this, e
function {
  let r;
  let i;
  let t;
  t = this.client;
  i = this.state.createFolderName.trim();
  if (((undefined === t))) goto L_d1;
  if (((0 === i.length))) goto L_d1;
  if (!((undefined !== this.activeRequest))) goto L_d4;
  return;
  this.setState({createFolderName: "", createFolderOpen: false});
  r = t.createDirectory(i, this.currentDirectoryId);
  this.activeRequest = r;
  r.result.then(function <atom:0>).catch(function <atom:0>).finally(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=109B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, tt
function {
  this.selectSurface(tt.ChatGPTLibrarySurface.Folders);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=49B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({selectedIds: []});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=341B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  if (!((0 !== this.selectedItems.length))) goto L_154;
  if (!((undefined !== this.context.startChat))) goto L_154;
  this.context.navigator.pop(true);
  this.context.startChat(this.selectedItems);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=161B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  if (!((this.selectedItems.length > 0))) goto L_a0;
  if (!((this.context.downloadItems == null))) goto L_79;
  this.context.downloadItems;
  this.context;
  goto L_a0;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=140B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e
// closure: this
function {
  let e;
  e = this.selectedItems[0];
  if (!((undefined !== e))) goto L_8b;
  if (!(this.canDeleteSelection)) goto L_8b;
  this.setState({deleteCandidate: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=47B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.setState({deleteCandidate: undefined});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=72B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: t
function {
  return (e.id !== t.id);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: t
function {
  return (e !== t.id);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=2 bc=311B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, this
function {
  if ((this.isDestroyed())) goto L_136;
  this.setState({items: this.state.items.filter(function <atom:0>), selectedIds: this.state.selectedIds.filter(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=95B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_5e;
  console.warn(("Unable to delete a Library item: " + String(t)));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=59B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, r
function {
  if (!((this.activeRequest === r))) goto L_3a;
  this.activeRequest = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=3 bc=389B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: t, i, r
// closure: this, e
function {
  let r;
  let i;
  let t;
  t = this.state.deleteCandidate;
  i = this.client;
  if (((undefined === t))) goto L_82;
  if (!((undefined === i))) goto L_85;
  return;
  this.setState({deleteCandidate: undefined});
  r = i.deleteItem(t);
  this.activeRequest = r;
  r.result.then(function <atom:0>).catch(function <atom:0>).finally(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=46B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this
function {
  this.track("library_storage_manage_tapped", {});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=25 bc=726B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this, this.active_func, new.target, arguments
// closure: It, Ct, e, tt, <class_fields_init>, ft
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {createFolderName: "", createFolderOpen: false, failedThumbnailIds: [], folderCategory: It.All, folderPreviewItems: [], folderStack: [], items: [], layout: Ct.ChatGPTLibraryLayout.Grid, loadingMore: false, menuOpen: false, query: "", selectedIds: [], status: ft.Loading, surface: tt.ChatGPTLibrarySurface.Suggested};
  this.requestGeneration = 0;
  this.navigateBack = function <atom:0>;
  this.updateQuery = function <atom:0>;
  this.submitQuery = function <atom:0>;
  this.clearSearch = function <atom:0>;
  this.refresh = function <atom:0>;
  this.loadMore = function <atom:0>;
  this.showGrid = function <atom:0>;
  this.showList = function <atom:0>;
  this.openMenu = function <atom:0>;
  this.closeMenu = function <atom:0>;
  this.selectMenuOption = function <atom:0>;
  this.uploadFiles = function <atom:0>;
  this.openCreateFolder = function <atom:0>;
  this.dismissCreateFolder = function <atom:0>;
  this.updateCreateFolderName = function <atom:0>;
  this.submitCreateFolder = function <atom:0>;
  this.createFolder = function <atom:0>;
  this.openFoldersSurface = function <atom:0>;
  this.clearSelection = function <atom:0>;
  this.startChatWithSelection = function <atom:0>;
  this.downloadSelection = function <atom:0>;
  this.confirmSelectedDelete = function <atom:0>;
  this.dismissDelete = function <atom:0>;
  this.deleteCandidate = function <atom:0>;
  this.dismissStorageFixture = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=423B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, t, this
// closure: tt, wt
function {
  this = this;
  let t;
  let e;
  if (!((this.viewModel.initialSurface == null))) goto L_95;
  this.viewModel.initialSurface;
  e = tt.ChatGPTLibrarySurface.Suggested;
  if (!((this.viewModel.fixtureVariant === wt.ChatGPTLibraryFixtureVariant.Folder))) goto L_13b;
  goto L_13e;
  // [栈深重同步 1 -> 0]
  t = [];
  null;
  this.state;
  this.state = {folderStack: t, surface: e};
  this.initializeClient();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  this.disposeClient();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=1376B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, r, _t, vt, this, o, n, e
function {
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", _t.root);
  t.setAttributeNumber("height", vt.Device.getWindowHeight());
  t.setAttributeNumber("paddingTop", vt.Device.getDisplayTopInset());
  this.renderHeader();
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", _t.scroll);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", _t.content);
  t.setAttributeNumber("maxWidth", (e.contentWidth + 40));
  if (!(this.isRoot)) goto L_32c;
  this.renderRootTabs();
  if ((this.isRoot)) goto L_37c;
  this.renderFolderFilters();
  this.renderSearch();
  this.renderStorageBanner();
  this.renderToolbar();
  this.renderContent(e);
  t.endRender();
  t.endRender();
  if (!(this.selectionActive)) goto L_4bf;
  this.renderSelectionFooter();
  this.renderMenu();
  this.renderDeleteDialog();
  this.renderCreateFolderDialog();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=1 bc=439B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: t, r, _t, vt, o, n, Ct, rt, i
function {
  this = this;
  let e;
  e = Ct.resolveChatGPTLibraryGridMetrics(vt.Device.getWindowWidth());
  t.beginComponent(rt.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setViewModelProperty("mode", rt.OAIThemeMode.System);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=0 bc=1471B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, s, _t, ct, a, ot, it, d, l, c
function {
  this = this;
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", _t.header);
  t.beginComponent(ct.IconButton, a, undefined, undefined);
  if (!(this.isRoot)) goto L_124;
  goto L_129;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", "Back to Library");
  t.setViewModelProperty("onPress", this.navigateBack);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("src", it.getIconAsset("arrow-left"));
  t.endComponent();
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", _t.headerTitle);
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", _t.headerLabel);
  t.setAttributeString("value", this.pageTitle);
  t.endRender();
  t.endRender();
  t.beginComponent(ct.IconButton, c, undefined, undefined);
  t.setViewModelProperty("onPress", this.openMenu);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("src", it.getIconAsset("dots-horizontal-more-menu"));
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.selectSurface(e.surface);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=654B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, b, i, ot, _t, e, m
function {
  t.beginRender(b, undefined);
  if (!(i)) goto L_a1;
  goto L_e6;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("color", ot.OAIColor.TextSecondary);
  if (!(i)) goto L_13e;
  goto L_162;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", _t.tabLabel);
  t.setAttributeString("value", e.label);
  t.endRender();
  if (!(i)) goto L_28d;
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", _t.tabIndicator);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=9 cpool=2 bc=658B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: i
// closure: this, t, b, ot, _t, m, ut, h, Tt
function {
  let i;
  i = (e.surface === this.state.surface);
  t.beginComponent(ut.Pressable, h, ("library-tab-" + String(e.surface)), undefined);
  t.setViewModelProperty("accessibilityId", ("chatgpt.library.tab." + Tt(e.surface)));
  t.setViewModelProperty("accessibilityLabel", e.label);
  t.setViewModelProperty("accessibilityStateSelected", i);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("style", _t.tab);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=1 bc=374B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, b, ot, _t, m, ut, h, Tt, y, u, At
function {
  this = this;
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", _t.tabScroll);
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", _t.tabRow);
  At.forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.selectFolderCategory(e.category);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=506B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, mt, S, i, ot, e
function {
  t.beginComponent(mt.Text, S, undefined, undefined);
  if (!(i)) goto L_c6;
  goto L_10b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", ot.OAIColor.TextSecondary);
  t.setViewModelProperty("size", ot.OAITextSize.LabelLarge);
  t.setViewModelProperty("value", e.label);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=2 bc=1123B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: i
// closure: this, t, mt, S, ot, ut, v, Mt
function {
  let i;
  i = (e.category === this.state.folderCategory);
  t.beginComponent(ut.Pressable, v, ("library-folder-filter-" + String(e.category)), undefined);
  t.setViewModelProperty("accessibilityId", ("chatgpt.library.folder-filter." + Mt(e.category)));
  t.setViewModelProperty("accessibilityLabel", (("Show " + e.label.toLocaleLowerCase()) + " in this folder"));
  t.setViewModelProperty("accessibilityStateSelected", i);
  if (!(i)) goto L_265;
  goto L_2aa;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("background", ot.OAIColor.BgTertiary);
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("padding", {x: ot.OAISpacing.OnePointSeventyFive, y: ot.OAISpacing.One});
  t.setViewModelProperty("radius", ot.OAIRadius.Pill);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=1 bc=374B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, mt, S, ot, ut, v, Mt, g, _t, p, Lt
function {
  this = this;
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", _t.folderFilterScroll);
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", _t.folderFilterRow);
  Lt.forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=738B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, P, _t, ht, w, it
function {
  this = this;
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", _t.searchContainer);
  t.beginComponent(ht.SearchField, w, undefined, undefined);
  t.setViewModelProperty("iconSrc", it.getIconAsset("search"));
  t.setViewModelProperty("onChange", this.updateQuery);
  t.setViewModelProperty("onSubmit", this.submitQuery);
  if (!(this.isRoot)) goto L_219;
  goto L_21e;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("placeholder", "Search folder");
  t.setViewModelProperty("value", this.state.query);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=10 cpool=0 bc=1234B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: wt, t, C, _t, f, I, A, at, L, ot
function {
  this = this;
  if (!((this.viewModel.fixtureVariant === wt.ChatGPTLibraryFixtureVariant.StorageFull))) goto L_4d1;
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", _t.storageBanner);
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", _t.storageBannerText);
  t.beginRender(I, undefined);
  t.setAttributeStyle("style", _t.storageBannerTitle);
  t.endRender();
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", _t.storageBannerBody);
  t.endRender();
  t.endRender();
  t.beginComponent(at.Button, L, undefined, undefined);
  t.setViewModelProperty("onPress", this.dismissStorageFixture);
  t.setViewModelProperty("size", ot.OAIControlSize.Sm);
  t.setViewModelProperty("variant", at.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=428B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, at, V, this, ot
function {
  t.beginComponent(at.Button, V, undefined, undefined);
  t.setViewModelProperty("onPress", this.clearSelection);
  t.setViewModelProperty("size", ot.OAIControlSize.Sm);
  t.setViewModelProperty("variant", at.ButtonVariant.Ghost);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=0 bc=1623B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, F, _t, ct, O, this, ot, it, Ct, x
function {
  t.beginRender(F, undefined);
  t.setAttributeStyle("style", _t.layoutButtons);
  t.beginComponent(ct.IconButton, O, undefined, undefined);
  t.setViewModelProperty("onPress", this.showGrid);
  t.setViewModelProperty("size", ot.OAIControlSize.Sm);
  t.setViewModelProperty("src", it.getIconAsset("grid"));
  if (!((this.state.layout === Ct.ChatGPTLibraryLayout.Grid))) goto L_2e5;
  goto L_32a;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("variant", ct.IconButtonVariant.Ghost);
  t.endComponent();
  t.beginComponent(ct.IconButton, x, undefined, undefined);
  t.setViewModelProperty("onPress", this.showList);
  t.setViewModelProperty("size", ot.OAIControlSize.Sm);
  t.setViewModelProperty("src", it.getIconAsset("list"));
  if (!((this.state.layout === Ct.ChatGPTLibraryLayout.List))) goto L_5be;
  goto L_603;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("variant", ct.IconButtonVariant.Ghost);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=16 cpool=2 bc=1123B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: t, at, V, ot, F, _t, ct, O, it, Ct, x, R, T, M, ft, k
function {
  this = this;
  let e;
  e = this.visibleItems.length;
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", _t.toolbar);
  t.beginRender(T, undefined);
  t.setAttributeStyle("style", _t.toolbarTitle);
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", _t.sectionTitle);
  if (!(this.selectionActive)) goto L_211;
  goto L_233;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", this.sectionTitle);
  t.endRender();
  if ((this.selectionActive)) goto L_3e5;
  if (((this.state.status !== ft.Loaded))) goto L_3e5;
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", _t.countLabel);
  if (!((1 === e))) goto L_3b4;
  goto L_3b9;
  // [栈深重同步 5 -> 4]
  t.setAttributeString("value", (String(e) + " items"));
  t.endRender();
  t.endRender();
  if (!(this.selectionActive)) goto L_437;
  goto L_43a;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=9 cpool=0 bc=2058B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: ft, tt, Ct, t, G, _t, at, B, ot
function {
  this = this;
  if (((this.state.status !== ft.Loading))) goto L_b2;
  if (!((0 !== this.state.items.length))) goto L_7e3;
  if (((this.state.status !== ft.Failed))) goto L_167;
  if (!((0 !== this.state.items.length))) goto L_7bc;
  if (!((0 !== this.visibleItems.length))) goto L_795;
  if (!(this.isRoot)) goto L_32f;
  if (!((this.state.surface === tt.ChatGPTLibrarySurface.Suggested))) goto L_32f;
  if (!((this.state.folderPreviewItems.length > 0))) goto L_32f;
  if (!((0 === this.state.query.trim().length))) goto L_32f;
  this.renderSuggestedFolders();
  if (!((this.state.layout === Ct.ChatGPTLibraryLayout.Grid))) goto L_3e3;
  goto L_408;
  // [栈深重同步 1 -> 0]
  this.renderList();
  if (!((undefined !== this.state.cursor))) goto L_809;
  t.beginRender(G, undefined);
  t.setAttributeStyle("style", _t.loadMore);
  t.beginComponent(at.Button, B, undefined, undefined);
  if (!(this.state.loadingMore)) goto L_598;
  goto L_59d;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("label", "Load more");
  t.setViewModelProperty("loading", this.state.loadingMore);
  t.setViewModelProperty("onPress", this.loadMore);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Secondary);
  t.endComponent();
  goto L_809;
  // [栈深重同步 1 -> 0]
  goto L_809;
  // [栈深重同步 1 -> 0]
  goto L_809;
  // [栈深重同步 1 -> 0]
  this.renderLoading(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=349B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, mt, _, ot
function {
  t.beginComponent(mt.Text, _, undefined, undefined);
  t.setViewModelProperty("color", ot.OAIColor.ThemeBlueText);
  t.setViewModelProperty("size", ot.OAITextSize.LabelLarge);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  return this.renderFolderPreview(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=2 bc=1213B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, mt, _, ot, N, _t, D, q, ut, z, E, U
function {
  this = this;
  t.beginRender(N, undefined);
  t.setAttributeStyle("style", _t.suggestedFolders);
  t.beginRender(D, undefined);
  t.setAttributeStyle("style", _t.suggestedFoldersHeader);
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", _t.subsectionTitle);
  t.endRender();
  t.beginComponent(ut.Pressable, z, undefined, undefined);
  t.setViewModelProperty("onPress", this.openFoldersSurface);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  t.beginRender(E, undefined);
  t.setAttributeStyle("style", _t.folderPreviewScroll);
  t.beginRender(U, undefined);
  t.setAttributeStyle("style", _t.folderPreviewRow);
  this.state.folderPreviewItems.slice(0, 4).forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.openItem(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=743B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, W, _t, this, e, j, H
function {
  t.beginRender(W, undefined);
  t.setAttributeStyle("style", _t.folderPreviewIcon);
  this.renderFolderPreviewMedia(e);
  t.endRender();
  t.beginRender(j, undefined);
  t.setAttributeStyle("style", _t.folderPreviewTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  if (((undefined === e.subtitle))) goto L_2e6;
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", _t.folderPreviewSubtitle);
  t.setAttributeString("value", e.subtitle);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=2 bc=502B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: t, W, _t, j, H, ut, K
function {
  this = this;
  t.beginComponent(ut.Pressable, K, ("suggested-folder-" + e.id), undefined);
  t.setViewModelProperty("accessibilityId", ("chatgpt.library.folder-preview." + e.id));
  t.setViewModelProperty("accessibilityLabel", ("Open folder " + e.title));
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("style", _t.folderPreviewCard);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=378B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: t, lt, X, ot, it
function {
  this = this;
  if ((this.renderThumbnail(e, 40, 40, "cover"))) goto L_179;
  t.beginComponent(lt.Icon, X, undefined, undefined);
  t.setViewModelProperty("color", ot.OAIColor.ThemeBlueText);
  t.setViewModelProperty("src", it.getIconAsset("folder"));
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: this, e
function {
  return this.renderGridCard(t, e.cardWidth);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=319B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: t, Q, _t
function {
  this = this;
  t.beginRender(Q, undefined);
  t.setAttributeStyle("style", _t.grid);
  t.setAttributeNumber("width", e.contentWidth);
  this.visibleItems.forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.toggleSelection(e.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.activateItem(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1108B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, J, _t, r, i, this, e, o, Z, $, ee, Vt
function {
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", _t.gridPreview);
  t.setAttributeNumber("height", r);
  t.setAttributeNumber("width", i);
  this.renderItemPreview(e, i, r, "cover");
  if (!(o)) goto L_141;
  this.renderSelectionBadge();
  if (((undefined === e.provider))) goto L_1b7;
  this.renderProviderBadge(e.provider);
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeStyle("style", _t.gridMetadata);
  t.beginRender($, undefined);
  t.setAttributeStyle("style", _t.gridTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", _t.gridSubtitle);
  t.setAttributeString("value", Vt(e));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=6 closure=11 cpool=3 bc=996B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, i
// locals: r, o, n, this
// closure: t, J, _t, Z, $, ee, Vt, Ct, ut, Y, Ft
function {
  this = this;
  let n;
  let o;
  let r;
  r = Ct.libraryGridCardHeight(e, i);
  o = this.isSelected(e.id);
  if (!(!this.selectionActive)) goto L_c9;
  n = !this.canActivateItem(e);
  t.beginComponent(ut.Pressable, Y, ("library-grid-" + e.id), undefined);
  t.setViewModelProperty("accessibilityId", ("chatgpt.library.item." + e.id));
  t.setViewModelProperty("accessibilityLabel", Ft(e, n));
  t.setViewModelProperty("accessibilityStateDisabled", n);
  t.setViewModelProperty("accessibilityStateSelected", o);
  t.setViewModelProperty("onLongPress", function <atom:0>);
  if (!(n)) goto L_28c;
  goto L_28e;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("selected", o);
  t.setViewModelProperty("selectedStyle", _t.cardSelected);
  t.setViewModelProperty("style", _t.gridCard);
  t.setViewModelProperty("width", i);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  return this.renderListRow(e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=240B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, te, _t
function {
  this = this;
  t.beginRender(te, undefined);
  t.setAttributeStyle("style", _t.list);
  this.visibleItems.forEach(function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.toggleSelection(e.id);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, e
function {
  return this.activateItem(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=0 bc=1336B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, re, _t, this, e, oe, ne, se, Vt, i, r, lt, ae, ot, it
function {
  t.beginRender(re, undefined);
  t.setAttributeStyle("style", _t.listThumbnail);
  this.renderItemPreview(e, 52, 52, "cover");
  t.endRender();
  t.beginRender(oe, undefined);
  t.setAttributeStyle("style", _t.listText);
  t.beginRender(ne, undefined);
  t.setAttributeStyle("style", _t.listTitle);
  t.setAttributeString("value", e.title);
  t.endRender();
  t.beginRender(se, undefined);
  t.setAttributeStyle("style", _t.listSubtitle);
  t.setAttributeString("value", Vt(e));
  t.endRender();
  t.endRender();
  if (((undefined === e.provider))) goto L_3be;
  this.renderProviderBadge(e.provider);
  if (!(i)) goto L_3ec;
  goto L_537;
  // [栈深重同步 1 -> 0]
  if ((r)) goto L_537;
  t.beginComponent(lt.Icon, ae, undefined, undefined);
  t.setViewModelProperty("color", ot.OAIColor.IconTertiary);
  t.setViewModelProperty("src", it.getIconAsset("chevron-right"));
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=14 cpool=3 bc=907B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: i, r, this
// closure: t, re, _t, oe, ne, se, Vt, lt, ae, ot, it, ut, ie, Ft
function {
  this = this;
  let r;
  let i;
  i = this.isSelected(e.id);
  if (!(!this.selectionActive)) goto L_9e;
  r = !this.canActivateItem(e);
  t.beginComponent(ut.Pressable, ie, ("library-list-" + e.id), undefined);
  t.setViewModelProperty("accessibilityId", ("chatgpt.library.item." + e.id));
  t.setViewModelProperty("accessibilityLabel", Ft(e, r));
  t.setViewModelProperty("accessibilityStateDisabled", r);
  t.setViewModelProperty("accessibilityStateSelected", i);
  t.setViewModelProperty("onLongPress", function <atom:0>);
  if (!(r)) goto L_261;
  goto L_263;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", function <atom:0>);
  t.setViewModelProperty("selected", i);
  t.setViewModelProperty("selectedStyle", _t.rowSelected);
  t.setViewModelProperty("style", _t.listRow);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=4 vars=5 closure=10 cpool=1 bc=989B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, i, r, o
// locals: this
// closure: t, de, _t, lt, le, tt, ot, it, xt, Gt
function {
  this = this;
  if ((this.renderThumbnail(e, i, r, o))) goto L_3dc;
  t.beginRender(de, undefined);
  t.setAttributeStyle("style", _t.iconPreview);
  t.setAttributeNumber("height", r);
  t.setAttributeNumber("width", i);
  t.beginComponent(lt.Icon, le, undefined, undefined);
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_236;
  goto L_27b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("color", ot.OAIColor.IconSecondary);
  t.setViewModelProperty("size", Math.min(42, Math.round((0.35 * i))));
  t.setViewModelProperty("src", it.getIconAsset(xt(e)));
  t.setViewModelProperty("symbol", Gt(e));
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=72B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: this, e
function {
  return this.handleThumbnailLoad(e.id, t);   // tail call
}

// fn <atom:0>  args=4 vars=8 closure=6 cpool=1 bc=1632B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, i, r, o
// locals: n, s, a, this
// closure: t, st, ce, ot, yt, ye
function {
  this = this;
  let a;
  let s;
  let n;
  n = e.thumbnailUrl;
  s = this.context.platformServices.apiService;
  if (((undefined === n))) goto L_155;
  if ((this.state.failedThumbnailIds.includes(e.id))) goto L_155;
  if (!(e.requiresAuthentication)) goto L_15a;
  if (!((undefined === s))) goto L_15a;
  return false;
  a = function <atom:0>;
  if (!(e.requiresAuthentication)) goto L_439;
  if (!((undefined === s))) goto L_193;
  return false;
  t.beginComponent(st.AuthenticatedImage, ce, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", e.title);
  t.setViewModelProperty("accountId", e.accountId);
  t.setViewModelProperty("apiService", s);
  t.setViewModelProperty("height", r);
  t.setViewModelProperty("objectFit", o);
  t.setViewModelProperty("onAssetLoad", a);
  t.setViewModelProperty("radius", ot.OAIRadius.Lg);
  t.setViewModelProperty("src", n);
  t.setViewModelProperty("width", i);
  t.endComponent();
  goto L_65d;
  t.beginComponent(yt.Image, ye, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", e.title);
  t.setViewModelProperty("height", r);
  t.setViewModelProperty("objectFit", o);
  t.setViewModelProperty("onAssetLoad", a);
  t.setViewModelProperty("radius", ot.OAIRadius.Lg);
  t.setViewModelProperty("src", n);
  t.setViewModelProperty("width", i);
  t.endComponent();
  return true;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=328B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t, i
// locals: this
// closure: e
function {
  this = this;
  if ((i)) goto L_147;
  if ((this.state.failedThumbnailIds.includes(t))) goto L_147;
  if (!(e.isLoggingEnabled)) goto L_cf;
  console.warn("A Library thumbnail could not be displayed; showing the item icon instead.");
  // append([], 0, this.state.failedThumbnailIds)
  [][this.state.failedThumbnailIds] = t;
  (t ++);
  this.setState({failedThumbnailIds: []});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=376B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: t, ue, _t, he
function {
  t.beginRender(ue, undefined);
  t.setAttributeStyle("style", _t.providerBadge);
  t.beginRender(he, undefined);
  t.setAttributeStyle("style", _t.providerBadgeLabel);
  t.setAttributeString("value", e);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=330B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, be, _t, me
function {
  t.beginRender(be, undefined);
  t.setAttributeStyle("style", _t.selectionBadge);
  t.beginRender(me, undefined);
  t.setAttributeStyle("style", _t.selectionCheck);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=335B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: i, r
// closure: t, we, _t, e
function {
  t.beginRender(we, ("library-loading-" + String(r)));
  t.setAttributeStyle("style", _t.loadingCard);
  t.setAttributeNumber("height", e.cardWidth);
  t.setAttributeNumber("width", e.cardWidth);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=9 cpool=1 bc=1092B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: t, we, _t, ge, pe, ve, nt, Se, Pe
function {
  t.beginRender(ge, undefined);
  t.setAttributeStyle("style", _t.loading);
  t.beginRender(pe, undefined);
  t.setAttributeStyle("style", _t.loadingHeader);
  t.beginRender(ve, undefined);
  t.setAttributeStyle("style", _t.loadingLabel);
  t.endRender();
  t.beginComponent(nt.ActivityIndicator, Se, undefined, undefined);
  t.setViewModelProperty("size", nt.ActivityIndicatorSize.Small);
  t.endComponent();
  t.endRender();
  t.beginRender(Pe, undefined);
  t.setAttributeStyle("style", _t.grid);
  t.setAttributeNumber("width", e.contentWidth);
  Array((2 * e.columnCount)).fill(undefined).forEach(function <atom:0>);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=535B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, at, Re, i, this, ot
function {
  t.beginComponent(at.Button, Re, undefined, undefined);
  if (!(i)) goto L_86;
  goto L_8b;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("label", "Clear search");
  if (!(i)) goto L_e3;
  goto L_107;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.clearSearch);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Secondary);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=545B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, at, Te, r, this, ot
function {
  t.beginComponent(at.Button, Te, undefined, undefined);
  if (!(!r)) goto L_c9;
  t.setViewModelProperty("disabled", (undefined === this.context.uploadFiles));
  if (!(r)) goto L_102;
  goto L_107;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("label", "Upload files");
  if (!(r)) goto L_15f;
  goto L_183;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.uploadFiles);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=17 cpool=2 bc=1829B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, i, r, this
// closure: t, at, Re, ot, Te, tt, Ce, _t, fe, lt, Ie, it, zt, Ae, Dt, Le, qt
function {
  this = this;
  let r;
  let i;
  let e;
  e = (this.state.query.trim().length > 0);
  if (!(e)) goto L_e9;
  if (!(!this.serverSearchEnabled)) goto L_e9;
  i = (undefined !== this.state.cursor);
  if (!(this.isRoot)) goto L_19c;
  r = (this.state.surface === tt.ChatGPTLibrarySurface.Folders);
  t.beginRender(Ce, undefined);
  t.setAttributeStyle("style", _t.empty);
  t.beginRender(fe, undefined);
  t.setAttributeStyle("style", _t.emptyIcon);
  t.beginComponent(lt.Icon, Ie, undefined, undefined);
  t.setViewModelProperty("color", ot.OAIColor.ThemeBlueText);
  if (!(e)) goto L_3b3;
  goto L_3fa;
  // [栈深重同步 5 -> 4]
  t.setViewModelProperty("src", it.getIconAsset(zt(this.state.surface)));
  if (!(e)) goto L_434;
  goto L_439;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("symbol", "▱");
  t.endComponent();
  t.endRender();
  t.beginRender(Ae, undefined);
  t.setAttributeStyle("style", _t.emptyTitle);
  if (!(i)) goto L_53f;
  goto L_592;
  // [栈深重同步 4 -> 3]
  if (!(e)) goto L_54b;
  goto L_592;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", Dt(this.state.surface));
  t.endRender();
  t.beginRender(Le, undefined);
  t.setAttributeStyle("style", _t.emptyBody);
  if (!(i)) goto L_670;
  goto L_6c3;
  // [栈深重同步 4 -> 3]
  if (!(e)) goto L_67c;
  goto L_6c3;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", qt(this.state.surface));
  t.endRender();
  if (!(e)) goto L_6f9;
  goto L_6fc;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=12 cpool=0 bc=1420B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, Me, _t, ke, lt, Ve, ot, it, Fe, Oe, at, xe
function {
  this = this;
  t.beginRender(Me, undefined);
  t.setAttributeStyle("style", _t.empty);
  t.beginRender(ke, undefined);
  t.setAttributeStyle("style", _t.errorIcon);
  t.beginComponent(lt.Icon, Ve, undefined, undefined);
  t.setViewModelProperty("color", ot.OAIColor.IconStatusError);
  t.setViewModelProperty("src", it.getIconAsset("triangle-alert"));
  t.endComponent();
  t.endRender();
  t.beginRender(Fe, undefined);
  t.setAttributeStyle("style", _t.emptyTitle);
  t.endRender();
  t.beginRender(Oe, undefined);
  t.setAttributeStyle("style", _t.emptyBody);
  if (!((this.state.error == null))) goto L_3fe;
  this.state.error;
  t.setAttributeString("value", "Check your connection and try again.");
  t.endRender();
  t.beginComponent(at.Button, xe, undefined, undefined);
  t.setViewModelProperty("onPress", this.refresh);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=9 cpool=0 bc=1764B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, Ge, _t, vt, ot, at, Be, Ne, De
function {
  this = this;
  t.beginRender(Ge, undefined);
  t.setAttributeStyle("style", _t.selectionFooter);
  t.setAttributeNumber("paddingBottom", (vt.Device.getDisplayBottomInset() + ot.OAISpacing.One));
  t.beginComponent(at.Button, Be, undefined, undefined);
  t.setViewModelProperty("disabled", !this.canStartChatSelection);
  t.setViewModelProperty("onPress", this.startChatWithSelection);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.endComponent();
  t.beginComponent(at.Button, Ne, undefined, undefined);
  t.setViewModelProperty("disabled", !this.canDownloadSelection);
  t.setViewModelProperty("onPress", this.downloadSelection);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Secondary);
  t.endComponent();
  t.beginComponent(at.Button, De, undefined, undefined);
  t.setViewModelProperty("disabled", !this.canDeleteSelection);
  t.setViewModelProperty("onPress", this.confirmSelectedDelete);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Secondary);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=475B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, bt, ze, this, Ct
function {
  t.beginComponent(bt.SelectionMenu, ze, undefined, undefined);
  t.setViewModelProperty("onChange", this.selectMenuOption);
  t.setViewModelProperty("options", this.menuOptions);
  if (!((this.state.layout === Ct.ChatGPTLibraryLayout.Grid))) goto L_1aa;
  goto L_1af;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("value", "list");
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=470B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, bt, ze, Ct, dt, qe
function {
  this = this;
  t.beginComponent(dt.Dialog, qe, undefined, undefined);
  t.setViewModelProperty("isOpen", this.state.menuOpen);
  t.setViewModelProperty("onDismiss", this.closeMenu);
  t.setViewModelProperty("placement", dt.DialogPlacement.Bottom);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1503B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, Ee, _t, Ue, Ke, e, We, at, je, this, ot, He
function {
  t.beginRender(Ee, undefined);
  t.setAttributeStyle("style", _t.dialogContent);
  t.beginRender(Ue, undefined);
  t.setAttributeStyle("style", _t.dialogTitle);
  t.endRender();
  t.beginRender(Ke, undefined);
  t.setAttributeStyle("style", _t.dialogBody);
  if (!((undefined === e))) goto L_1d2;
  goto L_1fc;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", (e.title + " will be moved to Deleted and removed after 30 days."));
  t.endRender();
  t.beginRender(We, undefined);
  t.setAttributeStyle("style", _t.dialogActions);
  t.beginComponent(at.Button, je, undefined, undefined);
  t.setViewModelProperty("onPress", this.dismissDelete);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Ghost);
  t.endComponent();
  t.beginComponent(at.Button, He, undefined, undefined);
  t.setViewModelProperty("onPress", this.deleteCandidate);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=12 cpool=1 bc=365B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: t, Ee, _t, Ue, Ke, We, at, je, ot, He, dt, _e
function {
  this = this;
  let e;
  e = this.state.deleteCandidate;
  t.beginComponent(dt.Dialog, _e, undefined, undefined);
  t.setViewModelProperty("isOpen", (undefined !== e));
  t.setViewModelProperty("onDismiss", this.dismissDelete);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1885B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: t, Qe, _t, Ye, gt, Je, this, Ze, at, $e, ot, et
function {
  t.beginRender(Qe, undefined);
  t.setAttributeStyle("style", _t.dialogContent);
  t.beginRender(Ye, undefined);
  t.setAttributeStyle("style", _t.dialogTitle);
  t.endRender();
  t.beginComponent(gt.TextArea, Je, undefined, undefined);
  t.setViewModelProperty("autoResize", true);
  t.setViewModelProperty("closesWhenReturnKeyPressed", true);
  t.setViewModelProperty("onChange", this.updateCreateFolderName);
  t.setViewModelProperty("onSubmit", this.submitCreateFolder);
  t.setViewModelProperty("value", this.state.createFolderName);
  t.endComponent();
  t.beginRender(Ze, undefined);
  t.setAttributeStyle("style", _t.dialogActions);
  t.beginComponent(at.Button, $e, undefined, undefined);
  t.setViewModelProperty("onPress", this.dismissCreateFolder);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.setViewModelProperty("variant", at.ButtonVariant.Ghost);
  t.endComponent();
  t.beginComponent(at.Button, et, undefined, undefined);
  t.setViewModelProperty("disabled", (0 === this.state.createFolderName.trim().length));
  t.setViewModelProperty("onPress", this.createFolder);
  t.setViewModelProperty("size", ot.OAIControlSize.Md);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=13 cpool=1 bc=356B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: t, Qe, _t, Ye, gt, Je, Ze, at, $e, ot, et, dt, Xe
function {
  this = this;
  t.beginComponent(dt.Dialog, Xe, undefined, undefined);
  t.setViewModelProperty("isOpen", this.state.createFolderOpen);
  t.setViewModelProperty("onDismiss", this.dismissCreateFolder);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=704B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: wt, ft, tt
function {
  this = this;
  let e;
  e = this.viewModel.fixtureVariant;
  if (!((undefined !== e))) goto L_116;
  if (!((e !== wt.ChatGPTLibraryFixtureVariant.Live))) goto L_116;
  this.client = wt.createChatGPTLibraryFixtureClient(this.viewModel.accountId, e);
  goto L_297;
  if (!((undefined === this.context.platformServices.apiService))) goto L_1d7;
  this.setState({error: "This device does not have an authenticated Library capability.", status: ft.Failed});
  return;
  this.client = tt.createChatGPTLibraryClient({accountId: this.viewModel.accountId, platformServices: this.context.platformServices});
  this.loadPage(undefined, false);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=317B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  this.requestGeneration = (this.requestGeneration ++);
  if (!((this.activeRequest == null))) goto L_58;
  this.activeRequest;
  goto L_7c;
  undefined.cancel();
  this.activeRequest = undefined;
  if (!((this.folderPreviewRequest == null))) goto L_b2;
  this.folderPreviewRequest;
  goto L_d6;
  undefined.cancel();
  this.folderPreviewRequest = undefined;
  if (!((this.client == null))) goto L_10c;
  this.client;
  goto L_130;
  undefined.dispose();
  this.client = undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=181B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: r, this
function {
  if (!(!r.has(e.id))) goto L_b4;
  return (e.accountId === this.viewModel.accountId);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  return e.id;
}

// fn <atom:0>  args=1 vars=5 closure=6 cpool=3 bc=1151B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: t, r, o, s
// closure: this, n, i, wt, ft, tt
function {
  let s;
  let o;
  let r;
  let t;
  if ((this.isDestroyed())) goto L_c8;
  if (((n !== this.requestGeneration))) goto L_c8;
  if (!((e.accountId !== this.viewModel.accountId))) goto L_cb;
  return;
  if (!(i)) goto L_113;
  goto L_116;
  // [栈深重同步 1 -> 0]
  t = [];
  r = new Set(t.map(function <atom:0>));
  o = e.items.filter(function <atom:0>);
  if (((this.viewModel.fixtureVariant !== wt.ChatGPTLibraryFixtureVariant.Selection))) goto L_221;
  if (!(i)) goto L_268;
  goto L_2b7;
  // [栈深重同步 1 -> 0]
  s = o.slice(0, 2).map(function <atom:0>);
  // append([], 0, t)
  // append([], t, o)
  o;
  this.setState({cursor: e.cursor, items: [], loadingMore: false, selectedIds: s, status: ft.Loaded});
  if (!(!i)) goto L_47e;
  if (!(this.isRoot)) goto L_47e;
  if (!((this.state.surface === tt.ChatGPTLibrarySurface.Suggested))) goto L_47e;
  if (!((0 === this.state.folderPreviewItems.length))) goto L_47e;
  this.loadFolderPreview();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=366B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// locals: i
// closure: tt, this, n, e, ft
function {
  let i;
  if (((t instanceof tt.ChatGPTLibraryCancelledError))) goto L_7c;
  if ((this.isDestroyed())) goto L_7c;
  if (!((n !== this.requestGeneration))) goto L_7f;
  return;
  if (!((t instanceof Error))) goto L_ac;
  goto L_b1;
  // [栈深重同步 1 -> 0]
  i = "The Library is temporarily unavailable.";
  if (!(e.isLoggingEnabled)) goto L_10c;
  console.warn(("The account Library could not load: " + i));
  this.setState({error: "Check your connection and try again.", loadingMore: false, status: ft.Failed});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, d
function {
  if (!((this.activeRequest === d))) goto L_36;
  this.activeRequest = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=3 vars=12 closure=5 cpool=3 bc=1073B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t, i, r
// locals: t#1, i#1, r#1, o, n, s, a, d, this
// closure: wt, ft, tt, e, Ot
function {
  this = this;
  let r#1;
  let i#1;
  let t#1;
  t#1 = t;
  i#1 = i;
  if (!((r === undefined))) goto L_5b;
  r;
  r = this.state.folderCategory;
  r#1 = this.state.folderCategory;
  let d;
  let a;
  let s;
  let n;
  let o;
  o = this.client;
  if (((undefined === o))) goto L_bd;
  if (!((undefined !== this.activeRequest))) goto L_c0;
  return;
  this.requestGeneration = (this.requestGeneration ++);
  n = (this.requestGeneration ++);
  s = this.currentDirectoryId;
  if (!((undefined === s))) goto L_11f;
  goto L_124;
  // [栈深重同步 1 -> 0]
  a = Ot(r);
  if (!((undefined === t))) goto L_153;
  goto L_15a;
  // [栈深重同步 4 -> 3]
  null;
  {cursor: t};
  if (!((undefined === s))) goto L_169;
  goto L_172;
  // [栈深重同步 4 -> 3]
  null;
  {directoryId: s};
  if (!((undefined === a))) goto L_181;
  goto L_18a;
  // [栈深重同步 4 -> 3]
  null;
  {categories: a};
  if (!(this.serverSearchEnabled)) goto L_294;
  if (!((this.state.query.trim().length > 0))) goto L_294;
  goto L_295;
  // [栈深重同步 4 -> 3]
  null;
  {};
  d = o.load({surface: this.state.surface});
  this.activeRequest = d;
  if (!(i)) goto L_36f;
  goto L_391;
  // [栈深重同步 4 -> 3]
  this.setState({error: undefined, loadingMore: i, status: ft.Loading});
  d.result.then(function <atom:0>).catch(function <atom:0>).finally(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  return (e.kind === tt.ChatGPTLibraryItemKind.Directory);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=311B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt, this, i
function {
  if ((this.isDestroyed())) goto L_136;
  if (((i !== this.requestGeneration))) goto L_136;
  if (((e.accountId !== this.viewModel.accountId))) goto L_136;
  this.setState({folderPreviewItems: e.items.filter(function <atom:0>)});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=129B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: tt, e
function {
  if (((t instanceof tt.ChatGPTLibraryCancelledError))) goto L_80;
  if (!(e.isLoggingEnabled)) goto L_80;
  console.warn("The optional Suggested folder preview could not load.");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=chatgpt_library/src/ChatGPTLibraryScreen
// closure: this, r
function {
  if (!((this.folderPreviewRequest === r))) goto L_36;
  this.folderPreviewRequest = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=3 bc=408B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: t, i, r, this
// closure: tt, e
function {
  this = this;
  let r;
  let i;
  let t;
  t = this.client;
  if (((undefined === t))) goto L_5b;
  if (!((undefined !== this.folderPreviewRequest))) goto L_5e;
  return;
  i = this.requestGeneration;
  r = t.load({surface: tt.ChatGPTLibrarySurface.Folders});
  this.folderPreviewRequest = r;
  r.result.then(function <atom:0>).catch(function <atom:0>).finally(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  return (0 === this.state.folderStack.length);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=181B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  if (!((this.state.folderStack[(this.state.folderStack.length - 1)] == null))) goto L_93;
  this.state.folderStack[(this.state.folderStack.length - 1)];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.id;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=192B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  if (!((this.state.folderStack[(this.state.folderStack.length - 1)] == null))) goto L_94;
  this.state.folderStack[(this.state.folderStack.length - 1)];
  goto L_b5;
  if (!((undefined.title == null))) goto L_bf;
  undefined.title;
  return "Library";
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  return ("image" === e.category);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=41B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  return ("image" !== e.category);
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=2 bc=511B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: Ct, It
function {
  this = this;
  let e;
  e = Ct.filteredLibraryItems(this.state.items, this.state.query);
  if ((this.isRoot)) goto L_13d;
  if (!((this.state.folderCategory === It.All))) goto L_143;
  return e;
  if (!((this.state.folderCategory === It.Images))) goto L_1d5;
  return e.filter(function <atom:0>);
  return e.filter(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=73B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: e
function {
  return e.has(t.id);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=187B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
function {
  this = this;
  let e;
  e = new Set(this.state.selectedIds);
  return this.state.items.filter(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  return (this.state.selectedIds.length > 0);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=471B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: tt
function {
  this = this;
  if (!((undefined === this.currentDirectoryId))) goto L_1d6;
  if (!((this.state.surface !== tt.ChatGPTLibrarySurface.Folders))) goto L_1d6;
  if (!((this.state.surface !== tt.ChatGPTLibrarySurface.Favorites))) goto L_1d6;
  return (this.state.surface !== tt.ChatGPTLibrarySurface.Bookmarks);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  return (e.kind === tt.ChatGPTLibraryItemKind.File);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=189B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: tt
function {
  this = this;
  if (!((undefined !== this.context.startChat))) goto L_bc;
  if (!((this.selectedItems.length > 0))) goto L_bc;
  return this.selectedItems.every(function <atom:0>);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=105B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  return (e.kind === tt.ChatGPTLibraryItemKind.File);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=189B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: tt
function {
  this = this;
  if (!((undefined !== this.context.downloadItems))) goto L_bc;
  if (!((this.selectedItems.length > 0))) goto L_bc;
  return this.selectedItems.every(function <atom:0>);
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=274B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
// closure: tt
function {
  this = this;
  let e;
  e = this.selectedItems;
  if (!((1 === e.length))) goto L_111;
  if (!((e[0].kind !== tt.ChatGPTLibraryItemKind.SavedEntity))) goto L_111;
  return (e[0].availability !== tt.ChatGPTLibraryItemAvailability.Unavailable);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=227B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
function {
  this = this;
  return [{disabled: (undefined === this.context.uploadFiles), label: "Upload files", value: "upload"}, {label: "New folder", value: "new-folder"}, {disabled: (0 === this.visibleItems.length), label: "Select", value: "select"}, {label: "View as grid", value: "grid"}, {label: "View as list", value: "list"}];
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=104B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: e, this
function {
  this = this;
  let e;
  e = this.state.selectedIds.length;
  if (!((1 === e))) goto L_61;
  goto L_66;
  // [栈深重同步 2 -> 1]
  return (String(e) + " items selected");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=103B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: this
function {
  return (e.surface === this.state.surface);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=137B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: this
// closure: At
function {
  this = this;
  if (!(this.isRoot)) goto L_83;
  if (!((At.find(function <atom:0>) == null))) goto L_57;
  At.find(function <atom:0>);
  goto L_78;
  if (!((undefined.label == null))) goto L_88;
  undefined.label;
  return "Library";
  return "Items";
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=106B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
function {
  this = this;
  return this.state.selectedIds.includes(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=269B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: Tt
function {
  this = this;
  if (!((e !== this.state.surface))) goto L_10c;
  if (!(this.isRoot)) goto L_10c;
  this.setState({query: "", selectedIds: [], surface: e});
  this.reloadCurrentSurface(e);
  this.track("library_surface_selected", {surface: Tt(e)});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=264B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: Mt
function {
  this = this;
  if ((this.isRoot)) goto L_107;
  if (((e === this.state.folderCategory))) goto L_107;
  this.setState({folderCategory: e, selectedIds: []});
  this.reloadCurrentSurface(undefined, e);
  this.track("library_folder_filter_selected", {category: Mt(e)});
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=720B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, t
// locals: e#1, t#1, this
// closure: tt, ft
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_54;
  t;
  t = this.state.folderCategory;
  t#1 = this.state.folderCategory;
  this.requestGeneration = (this.requestGeneration ++);
  if (!((this.activeRequest == null))) goto L_ab;
  this.activeRequest;
  goto L_cf;
  undefined.cancel();
  this.activeRequest = undefined;
  if (!((this.folderPreviewRequest == null))) goto L_105;
  this.folderPreviewRequest;
  goto L_129;
  undefined.cancel();
  this.folderPreviewRequest = undefined;
  if (!((e === tt.ChatGPTLibrarySurface.Suggested))) goto L_1fa;
  goto L_1fd;
  // [栈深重同步 4 -> 3]
  if (!((undefined === e))) goto L_240;
  goto L_247;
  // [栈深重同步 4 -> 3]
  null;
  {surface: e};
  if (!((t === this.state.folderCategory))) goto L_296;
  goto L_29d;
  // [栈深重同步 4 -> 3]
  null;
  {folderCategory: t};
  this.setState({cursor: undefined, error: undefined, failedThumbnailIds: [], folderPreviewItems: [], items: [], loadingMore: false, status: ft.Loading});
  this.loadPage(undefined, false, t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=257B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: Ct
function {
  this = this;
  if (!((e !== this.state.layout))) goto L_100;
  this.setState({layout: e});
  if (!((e === Ct.ChatGPTLibraryLayout.Grid))) goto L_f3;
  goto L_f8;
  // [栈深重同步 5 -> 4]
  this.track("library_layout_changed", {layout: "list"});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=192B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
function {
  this = this;
  if (!(this.selectionActive)) goto L_6f;
  goto L_bf;
  // [栈深重同步 1 -> 0]
  if (!(this.canActivateItem(e))) goto L_bf;
  this.openItem(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=1248B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: tt, It, kt
function {
  this = this;
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_208;
  // append([], 0, this.state.folderStack)
  [][this.state.folderStack] = {id: e.id, title: e.title};
  ({id: e.id, title: e.title} ++);
  this.setState({folderCategory: It.All, folderStack: [], query: "", selectedIds: []});
  this.reloadCurrentSurface(undefined, It.All);
  this.track("library_folder_opened", {id: e.id});
  return undefined;
  if (!((undefined !== this.context.openItem))) goto L_318;
  this.context.openItem(e);
  this.track("library_item_opened", {id: e.id, kind: kt(e.kind)});
  return undefined;
  if (!((undefined !== e.originationConversationId))) goto L_4dd;
  if (!((undefined !== this.context.openConversation))) goto L_4dd;
  this.context.navigator.pop(true);
  this.context.openConversation(e.originationConversationId);
  this.track("library_item_opened", {id: e.id, kind: kt(e.kind)});
  return undefined;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=407B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: this
// closure: tt
function {
  this = this;
  if (!((e.availability !== tt.ChatGPTLibraryItemAvailability.Unavailable))) goto L_196;
  if (((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_196;
  if (((undefined !== this.context.openItem))) goto L_196;
  if (!((undefined !== e.originationConversationId))) goto L_196;
  return (undefined !== this.context.openConversation);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=4B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: t
// closure: e
function {
  return (t !== e);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=276B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!(this.isSelected(e))) goto L_98;
  goto L_e4;
  // [栈深重同步 1 -> 0]
  // append([], 0, this.state.selectedIds)
  [][this.state.selectedIds] = e;
  (e ++);
  t = [];
  this.setState({selectedIds: t});
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=125B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, t
// locals: this
function {
  this = this;
  if (!((this.context.trackEvent == null))) goto L_4e;
  this.context.trackEvent;
  this.context;
  goto L_7c;
  // [栈深重同步 1 -> 2]
  return;
}

// fn Tt  args=1 vars=1 closure=1 cpool=0 bc=555B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e === tt.ChatGPTLibrarySurface.Suggested))) goto L_50;
  return "suggested";
  if (!((e === tt.ChatGPTLibrarySurface.Folders))) goto L_9f;
  return "folders";
  if (!((e === tt.ChatGPTLibrarySurface.Favorites))) goto L_ee;
  return "favorites";
  if (!((e === tt.ChatGPTLibrarySurface.Images))) goto L_13d;
  return "images";
  if (!((e === tt.ChatGPTLibrarySurface.All))) goto L_18c;
  return "all";
  if (!((e === tt.ChatGPTLibrarySurface.Uploads))) goto L_1db;
  return "uploads";
  if (!((e === tt.ChatGPTLibrarySurface.Bookmarks))) goto L_22a;
  return "bookmarks";
  e;
  return;
}

// fn Mt  args=1 vars=1 closure=1 cpool=0 bc=134B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: It
function {
  if (!((e === It.All))) goto L_2d;
  return "all";
  if (!((e === It.Images))) goto L_59;
  return "images";
  if (!((e === It.Files))) goto L_85;
  return "files";
  e;
  return;
}

// fn kt  args=1 vars=1 closure=1 cpool=0 bc=239B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e === tt.ChatGPTLibraryItemKind.File))) goto L_50;
  return "file";
  if (!((e === tt.ChatGPTLibraryItemKind.Directory))) goto L_9f;
  return "directory";
  if (!((e === tt.ChatGPTLibraryItemKind.SavedEntity))) goto L_ee;
  return "saved_entity";
  e;
  return;
}

// fn Vt  args=1 vars=1 closure=3 cpool=0 bc=571B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt, Nt, Bt
function {
  if (!((e.state === tt.ChatGPTLibraryItemState.Uploading))) goto L_70;
  return "Uploading";
  if (!((e.state === tt.ChatGPTLibraryItemState.Failed))) goto L_e0;
  return "Upload failed";
  if (!((undefined !== e.subtitle))) goto L_129;
  return e.subtitle;
  if (!((undefined !== e.modifiedAt))) goto L_17a;
  return ("Modified " + Nt(e.modifiedAt));
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_1ea;
  return "Folder";
  if (!((undefined === e.mimeType))) goto L_216;
  return "Library item";
  return Bt(e.mimeType);
}

// fn Ft  args=2 vars=4 closure=1 cpool=0 bc=426B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e, t
// locals: i, r
// closure: tt
function {
  let r;
  let i;
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_77;
  goto L_ed;
  // [栈深重同步 1 -> 0]
  if (!((e.kind === tt.ChatGPTLibraryItemKind.SavedEntity))) goto L_e8;
  goto L_ed;
  // [栈深重同步 1 -> 0]
  i = "file";
  if (!((undefined === e.provider))) goto L_117;
  goto L_13f;
  // [栈深重同步 1 -> 0]
  r = (", from " + e.provider);
  if (!(e.isShared)) goto L_19b;
  goto L_19c;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_1a7;
  goto L_1a8;
  // [栈深重同步 2 -> 1]
  return (((((e.title + ", ") + i) + r) + "") + "");
}

// fn Ot  args=1 vars=1 closure=2 cpool=0 bc=130B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: It, Rt
function {
  if (!((e === It.All))) goto L_28;
  e;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === It.Images))) goto L_57;
  return ["image"];
  if (!((<?> === It.Files))) goto L_81;
  return Rt;
  return;
}

// fn xt  args=1 vars=2 closure=1 cpool=0 bc=526B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: t
// closure: tt
function {
  let t;
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_73;
  return "folder";
  if (!((e.kind === tt.ChatGPTLibraryItemKind.SavedEntity))) goto L_e3;
  return "star";
  if (!((e.mimeType == null))) goto L_10b;
  e.mimeType;
  t = "";
  if (!(t.includes("pdf"))) goto L_140;
  return "file-pdf";
  if (!(t.includes("presentation"))) goto L_174;
  return "file-presentation";
  if ((t.includes("sheet"))) goto L_1d0;
  if (!(t.includes("excel"))) goto L_1d8;
  return "file-spreadsheet";
  if (!(("image" === e.category))) goto L_208;
  return "file-image";
  return "file-document";
}

// fn Gt  args=1 vars=1 closure=1 cpool=0 bc=230B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e.kind === tt.ChatGPTLibraryItemKind.Directory))) goto L_70;
  return "▱";
  if (!((e.kind === tt.ChatGPTLibraryItemKind.SavedEntity))) goto L_e0;
  return "★";
  return "▤";
}

// fn Bt  args=1 vars=1 closure=0 cpool=0 bc=252B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
function {
  if (!(e.includes("pdf"))) goto L_32;
  return "PDF";
  if (!(e.includes("presentation"))) goto L_64;
  return "Presentation";
  if ((e.includes("sheet"))) goto L_bc;
  if (!(e.includes("excel"))) goto L_c4;
  return "Spreadsheet";
  if (!(e.startsWith("image/"))) goto L_f6;
  return "Image";
  return "Document";
}

// fn Nt  args=1 vars=2 closure=0 cpool=0 bc=173B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// locals: t
function {
  let t;
  t = Date.parse(e);
  if (!(!Number.isFinite(t))) goto L_63;
  return "recently";
  return new Date(t).toLocaleString("en-US", {month: "short", day: "numeric"});   // tail call
}

// fn Dt  args=1 vars=1 closure=1 cpool=0 bc=555B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e === tt.ChatGPTLibrarySurface.Suggested))) goto L_50;
  return "Make something worth revisiting";
  if (!((e === tt.ChatGPTLibrarySurface.Folders))) goto L_9f;
  return "No folders yet";
  if (!((e === tt.ChatGPTLibrarySurface.Favorites))) goto L_ee;
  return "No favorites yet";
  if (!((e === tt.ChatGPTLibrarySurface.Images))) goto L_13d;
  return "No images yet";
  if (!((e === tt.ChatGPTLibrarySurface.All))) goto L_18c;
  return "Add your files";
  if (!((e === tt.ChatGPTLibrarySurface.Uploads))) goto L_1db;
  return "No uploads yet";
  if (!((e === tt.ChatGPTLibrarySurface.Bookmarks))) goto L_22a;
  return "No bookmarks yet";
  e;
  return;
}

// fn qt  args=1 vars=1 closure=1 cpool=0 bc=555B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e === tt.ChatGPTLibrarySurface.Suggested))) goto L_50;
  return "Your most useful creations and files will show up here.";
  if (!((e === tt.ChatGPTLibrarySurface.Folders))) goto L_9f;
  return "Create folders to keep related work together.";
  if (!((e === tt.ChatGPTLibrarySurface.Favorites))) goto L_ee;
  return "Favorite files, messages, places, and products to find them here.";
  if (!((e === tt.ChatGPTLibrarySurface.Images))) goto L_13d;
  return "Create or upload an image and it will appear here.";
  if (!((e === tt.ChatGPTLibrarySurface.All))) goto L_18c;
  return "Ask questions, get summaries, and more with your files.";
  if (!((e === tt.ChatGPTLibrarySurface.Uploads))) goto L_1db;
  return "Files you upload directly to Library will show up here.";
  if (!((e === tt.ChatGPTLibrarySurface.Bookmarks))) goto L_22a;
  return "Bookmark files and entities to find them here.";
  e;
  return;
}

// fn zt  args=1 vars=1 closure=1 cpool=0 bc=546B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: e
// closure: tt
function {
  if (!((e === tt.ChatGPTLibrarySurface.Favorites))) goto L_50;
  return "star";
  if (!((e === tt.ChatGPTLibrarySurface.Images))) goto L_9f;
  return "image";
  if (!((e === tt.ChatGPTLibrarySurface.Folders))) goto L_ee;
  return "folder";
  if (((e === tt.ChatGPTLibrarySurface.Suggested))) goto L_1cc;
  if (((e === tt.ChatGPTLibrarySurface.All))) goto L_1cc;
  if (!((e === tt.ChatGPTLibrarySurface.Uploads))) goto L_1d2;
  return "file-document";
  if (!((e === tt.ChatGPTLibrarySurface.Bookmarks))) goto L_221;
  return "star";
  e;
  return;
}

// fn <atom:0>  args=3 vars=156 closure=0 cpool=73 bc=18098B file=chatgpt_library/src/ChatGPTLibraryScreen
// args: require, module, exports
// locals: e, t, i, r, o, n, s, a, d, l, c, y, u, h, b, m, g, p, v, S, P, w, C, f, I, A, L, R, T, M, k, V, F, O, x, G, B, N, D, q, z, _, E, U, K, W, j, H, X, Q, Y, J, Z, $, ee, te, ie, re, oe, ne, se, ae, de, le, ce, ye, ue, he, be, me, ge, pe, ve, Se, Pe, we, Ce, fe, Ie, Ae, Le, Re, Te, Me, ke, Ve, Fe, Oe, xe, Ge, Be, Ne, De, qe, ze, _e, Ee, Ue, Ke, We, je, He, Xe, Qe, Ye, Je, Ze, $e, et, tt, it, rt, ot, nt, st, at, dt, lt, ct, yt, ut, ht, bt, mt, gt, pt, vt, St, Pt, wt, Ct, ft, It, At, Lt, Rt, ChatGPTLibraryScreen, <class_fields_init>, ChatGPTLibraryScreen#1, Tt, Mt, kt, Vt, Ft, Ot, xt, Gt, Bt, Nt, Dt, qt, zt, _t
function {
  Tt = function Tt;
  Mt = function Mt;
  kt = function kt;
  Vt = function Vt;
  Ft = function Ft;
  Ot = function Ot;
  xt = function xt;
  Gt = function Gt;
  Bt = function Bt;
  Nt = function Nt;
  Dt = function Dt;
  qt = function qt;
  zt = function zt;
  let _t;
  let ChatGPTLibraryScreen#1;
  let Rt;
  let Lt;
  let At;
  let Ct;
  let wt;
  let Pt;
  let St;
  let vt;
  let pt;
  let gt;
  let mt;
  let bt;
  let ht;
  let ut;
  let yt;
  let ct;
  let lt;
  let dt;
  let at;
  let st;
  let nt;
  let ot;
  let rt;
  let it;
  let tt;
  let et;
  let $e;
  let Ze;
  let Je;
  let Ye;
  let Qe;
  let Xe;
  let He;
  let je;
  let We;
  let Ke;
  let Ue;
  let Ee;
  let _e;
  let ze;
  let qe;
  let De;
  let Ne;
  let Be;
  let Ge;
  let xe;
  let Oe;
  let Fe;
  let Ve;
  let ke;
  let Me;
  let Te;
  let Re;
  let Le;
  let Ae;
  let Ie;
  let fe;
  let Ce;
  let we;
  let Pe;
  let Se;
  let ve;
  let pe;
  let ge;
  let me;
  let be;
  let he;
  let ue;
  let ye;
  let ce;
  let le;
  let de;
  let ae;
  let se;
  let ne;
  let oe;
  let re;
  let ie;
  let te;
  let ee;
  let $;
  let Z;
  let J;
  let Y;
  let Q;
  let X;
  let H;
  let j;
  let W;
  let K;
  let U;
  let E;
  let _;
  let z;
  let q;
  let D;
  let N;
  let B;
  let G;
  let x;
  let O;
  let F;
  let V;
  let k;
  let M;
  let T;
  let R;
  let L;
  let A;
  let I;
  let f;
  let C;
  let w;
  let P;
  let S;
  let v;
  let p;
  let g;
  let m;
  let b;
  let h;
  let u;
  let y;
  let c;
  let l;
  let d;
  let a;
  let s;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ChatGPTLibraryScreen = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "z_d4C0qPjL9fj6BS");
  r = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library"], "oWYAbVs-F3C7vI4u");
  o = t.makeNodePrototype("scroll", undefined, "4OEFeo07Nxo8eFBp");
  n = t.makeNodePrototype("view", undefined, "ExPL90StJfT41eEb");
  s = t.makeNodePrototype("view", undefined, "Gub5WsM1R-TFAD7G");
  a = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.back", "symbol", "‹"], "tBl6SWnBNGm5hAqm");
  d = t.makeNodePrototype("view", undefined, "AQEJmjcWFfvsNovg");
  l = t.makeNodePrototype("label", undefined, "dfeeRitnvzOf2eUi");
  c = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.menu", "accessibilityLabel", "Library menu", "symbol", "•••"], "Dpye_yUekwY9YKo2");
  y = t.makeNodePrototype("scroll", ["horizontal", true], "Zi_CnXtGFgifGEHZ");
  u = t.makeNodePrototype("view", undefined, "5bxmjuHujysmJTNw");
  h = t.makeComponentPrototype(undefined, "T2pi9fDZcVFqZBNv");
  b = t.makeNodePrototype("label", undefined, "FzgnXD813DWuj4Ub");
  m = t.makeNodePrototype("view", undefined, "8rHyHgLufddkBKAA");
  g = t.makeNodePrototype("scroll", ["horizontal", true], "1mHzpNCU_reNezoc");
  p = t.makeNodePrototype("view", undefined, "yKUNxTCw6cukjSMA");
  v = t.makeComponentPrototype(undefined, "DkA2fUYbJDda0MPj");
  S = t.makeComponentPrototype(undefined, "ZMyxaaSd3nAqdDv_");
  P = t.makeNodePrototype("view", undefined, "6JDGjOEywwao2xj0");
  w = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.search"], "Hrr0oiCfnvlXbu3f");
  C = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.storage-full"], "fa3mcTgfheyPFm6z");
  f = t.makeNodePrototype("view", undefined, "bFARB9vKA1fuglPV");
  I = t.makeNodePrototype("label", ["value", "Your library is full"], "C5A5fQzCMFsOjQQ7");
  A = t.makeNodePrototype("label", ["value", "New files can’t be added until you free up space or upgrade for more storage."], "7PPhvGTTuREYXPnc");
  L = t.makeComponentPrototype(["label", "Manage"], "f1XhCzyQeteaImJL");
  R = t.makeNodePrototype("view", undefined, "79QDxXOs736Y_8eH");
  T = t.makeNodePrototype("view", undefined, "yUY-nGihgudQ7_vs");
  M = t.makeNodePrototype("label", undefined, "3Zw3xLmvVZwbWYAZ");
  k = t.makeNodePrototype("label", undefined, "Vv_gAjAnz_DUnDsP");
  V = t.makeComponentPrototype(["label", "Done"], "Dv8vB9RnHNVk2LS1");
  F = t.makeNodePrototype("view", undefined, "VUu_3EPQ_KZAYaK_");
  O = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.layout.grid", "accessibilityLabel", "View as grid", "symbol", "▦"], "J37l1vEEtonfeC-x");
  x = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.layout.list", "accessibilityLabel", "View as list", "symbol", "☷"], "svaVdupWUFsxacT-");
  G = t.makeNodePrototype("view", undefined, "dXuSdmHf5RMiqtHd");
  B = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.load-more"], "6k6T7NY3YYkSEl0V");
  N = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.suggested-folders"], "FqpYoRXSMbv7kT3X");
  D = t.makeNodePrototype("view", undefined, "h4xhVWbNcr6Pg67H");
  q = t.makeNodePrototype("label", ["value", "Folders"], "Xuy9jHE4DGlBISUG");
  z = t.makeComponentPrototype(["accessibilityLabel", "View all folders"], "lBQX__vLa_y6MsA6");
  _ = t.makeComponentPrototype(["value", "View all"], "ZR_e73pAGcFz2-RU");
  E = t.makeNodePrototype("scroll", ["horizontal", true], "iBkkcv7KuagtG0nN");
  U = t.makeNodePrototype("view", undefined, "kI-2ovQHWj8lC5gI");
  K = t.makeComponentPrototype(undefined, "tIKSTBm4cwlHZ_Bv");
  W = t.makeNodePrototype("view", undefined, "D4Zm5m8tf1wk8rwJ");
  j = t.makeNodePrototype("label", undefined, "nK3ORpL4nJi85YND");
  H = t.makeNodePrototype("label", undefined, "ULBfyLKXKCwrUiC2");
  X = t.makeComponentPrototype(["size", 24, "symbol", "▱"], "yX303OSFNgiGZGjh");
  Q = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.grid"], "7L4_98RXfFxGxS-6");
  Y = t.makeComponentPrototype(undefined, "ultx1nyuoIgQmi8s");
  J = t.makeNodePrototype("view", undefined, "Smt2v0cgoD9XgBIR");
  Z = t.makeNodePrototype("view", undefined, "cR_WKgFgTfGoNbs6");
  $ = t.makeNodePrototype("label", undefined, "HFpQNM9lbACri6zA");
  ee = t.makeNodePrototype("label", undefined, "3ookjvqFpihLKFPK");
  te = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.list"], "PIVuazP8gfnZvlWh");
  ie = t.makeComponentPrototype(undefined, "0oKng0nL089zTX3Z");
  re = t.makeNodePrototype("view", undefined, "HM5JUI81UPwzAs1k");
  oe = t.makeNodePrototype("view", undefined, "UhH6QRUnV11DCeDb");
  ne = t.makeNodePrototype("label", undefined, "oit3kcFKJmFyg7sA");
  se = t.makeNodePrototype("label", undefined, "GyR7hqyESE8Elkrf");
  ae = t.makeComponentPrototype(["size", 16, "symbol", "›"], "-AdyF9fMYPtkDupO");
  de = t.makeNodePrototype("view", undefined, "yyEWUOCUxT8eIPpb");
  le = t.makeComponentPrototype(undefined, "_y-598mm8NgMhHCM");
  ce = t.makeComponentPrototype(undefined, "vTR8djkHo2gfmNP9");
  ye = t.makeComponentPrototype(undefined, "YEHGE8S31Ut0paQw");
  ue = t.makeNodePrototype("view", undefined, "7dSJL8FVezmDTYi3");
  he = t.makeNodePrototype("label", undefined, "KScTA3qwOdARjjij");
  be = t.makeNodePrototype("view", ["accessibilityLabel", "Selected"], "deZYTa7JbyPVPdTQ");
  me = t.makeNodePrototype("label", ["value", "✓"], "ToG1tiZuGyksnPDN");
  ge = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.loading"], "An-hKbiVxxGyGWnM");
  pe = t.makeNodePrototype("view", undefined, "WP0Qtx9VrxaFVQ8Q");
  ve = t.makeNodePrototype("label", ["value", "Loading your library"], "2dEoXf-rNv6qBRUK");
  Se = t.makeComponentPrototype(["accessibilityLabel", "Loading your library"], "whEoWJZKchzgQUOG");
  Pe = t.makeNodePrototype("view", undefined, "zIB9HO5L_XI5AU3S");
  we = t.makeNodePrototype("view", undefined, "xQBvp0O8VTolvusV");
  Ce = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.empty"], "MSRSC2fE_fr1RNe6");
  fe = t.makeNodePrototype("view", undefined, "X6SL9IYjCcdXr95E");
  Ie = t.makeComponentPrototype(["size", 34], "Dx-k7SSa1Lt6eALc");
  Ae = t.makeNodePrototype("label", undefined, "BsAzddvSe067CJ8U");
  Le = t.makeNodePrototype("label", undefined, "vCe5eA-oPi785Tkk");
  Re = t.makeComponentPrototype(undefined, "4CfPqS2Khyv55CvP");
  Te = t.makeComponentPrototype(undefined, "ixPO6YXWPdkmTq70");
  Me = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.error"], "Y3Nf4o9hOE3FZhBS");
  ke = t.makeNodePrototype("view", undefined, "m_twJKSLILyr2ch4");
  Ve = t.makeComponentPrototype(["size", 32, "symbol", "!"], "CwlCguTJtrSY5Xx3");
  Fe = t.makeNodePrototype("label", ["value", "Unable to load Library"], "dFSRF0oO7uKBoq7-");
  Oe = t.makeNodePrototype("label", undefined, "CsnOIfIDofN5YOn0");
  xe = t.makeComponentPrototype(["label", "Try again"], "zCb4m2FhLfMiRlD0");
  Ge = t.makeNodePrototype("view", ["accessibilityId", "chatgpt.library.selection-footer"], "n0Wfb3uhn_eg7b3Z");
  Be = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.selection.chat", "label", "Chat"], "40j0KZv5-GRbSKYk");
  Ne = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.selection.download", "label", "Download"], "VCsAhgRbo2iYnUVp");
  De = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.selection.delete", "label", "Delete"], "BFqz0lOKWwrqMt0G");
  qe = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.menu-dialog", "accessibilityLabel", "Library menu"], "DjjkanrmdQOANA0D");
  ze = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.menu-options", "title", "Library"], "RSP8xdQUe4mGgG6Q");
  _e = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.delete-dialog", "accessibilityLabel", "Delete from Library"], "L8opbgFE9bw7na-w");
  Ee = t.makeNodePrototype("view", undefined, "NDqHKEpzi4Lj81IQ");
  Ue = t.makeNodePrototype("label", ["value", "Delete from Library?"], "NVnYA0zIBBACjBf6");
  Ke = t.makeNodePrototype("label", undefined, "LcfmNcoLgxsJ7Q0D");
  We = t.makeNodePrototype("view", undefined, "m5dM3YIJRuTO8x6A");
  je = t.makeComponentPrototype(["label", "Cancel"], "l8v_UMvg8V0v0sPN");
  He = t.makeComponentPrototype(["label", "Delete"], "WXMeul0_n1RmhlB4");
  Xe = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.create-folder-dialog", "accessibilityLabel", "Create folder"], "mm7dgGQIUz1-pn3v");
  Qe = t.makeNodePrototype("view", undefined, "zb_Ib2cRdpB-nD3-");
  Ye = t.makeNodePrototype("label", ["value", "Create folder"], "fzTG-OCb-cGwvt9G");
  Je = t.makeComponentPrototype(["accessibilityId", "chatgpt.library.create-folder-name", "accessibilityLabel", "Folder name", "maxLength", 120, "maxRows", 1, "placeholder", "Folder name", "rows", 1], "BGdxaRlSuexXvIr2");
  Ze = t.makeNodePrototype("view", undefined, "MAd0rWbTCVdfVHou");
  $e = t.makeComponentPrototype(["label", "Cancel"], "iSbUbwQXF2Q6N4XP");
  et = t.makeComponentPrototype(["label", "Create"], "AC9XXIimUTvBIpCi");
  tt = require("chatgpt_services/src/library/ChatGPTLibraryClient");
  it = require("dil_icon_assets/src/IconAssets");
  require("oai_core/src/OAIAttributes");
  rt = require("oai_core/src/OAITheme");
  ot = require("oai_core/src/OAITokens");
  nt = require("oai_ui/src/components/ActivityIndicator");
  st = require("oai_ui/src/components/AuthenticatedImage");
  at = require("oai_ui/src/components/Button");
  dt = require("oai_ui/src/components/Dialog");
  lt = require("oai_ui/src/components/Icon");
  ct = require("oai_ui/src/components/IconButton");
  yt = require("oai_ui/src/components/Image");
  ut = require("oai_ui/src/components/Pressable");
  ht = require("oai_ui/src/components/SearchField");
  bt = require("oai_ui/src/components/SelectionMenu");
  mt = require("oai_ui/src/components/Text");
  gt = require("oai_ui/src/components/TextArea");
  pt = require("valdi_core/src/Component");
  vt = require("valdi_core/src/Device");
  St = require("valdi_core/src/Style");
  Pt = require("valdi_core/src/SystemFont");
  wt = require("./ChatGPTLibraryFixtures");
  Ct = require("./LibraryLayout");
  if ((ft)) goto L_1b37;
  ft = {};
  !function <atom:0>({});
  if ((It)) goto L_1b45;
  It = {};
  function <atom:0>({});
  At = [{label: "Suggested", surface: tt.ChatGPTLibrarySurface.Suggested}, {label: "Folders", surface: tt.ChatGPTLibrarySurface.Folders}, {label: "Favorites", surface: tt.ChatGPTLibrarySurface.Favorites}, {label: "Images", surface: tt.ChatGPTLibrarySurface.Images}, {label: "All", surface: tt.ChatGPTLibrarySurface.All}];
  Lt = [{category: It.All, label: "All"}, {category: It.Images, label: "Images"}, {category: It.Files, label: "Files"}];
  Rt = ["video", "audio", "pdf", "text", "other"];
  let ChatGPTLibraryScreen;
  let <class_fields_init>;
  class ChatGPTLibraryScreen extends pt.StatefulComponent { ... }
  <proto:ChatGPTLibraryScreen>.onCreate = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.onDestroy = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.onRender = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderHeader = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderRootTabs = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderFolderFilters = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderSearch = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderStorageBanner = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderToolbar = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderContent = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderSuggestedFolders = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderFolderPreview = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderFolderPreviewMedia = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderGrid = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderGridCard = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderList = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderListRow = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderItemPreview = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderThumbnail = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.handleThumbnailLoad = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderProviderBadge = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderSelectionBadge = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderLoading = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderEmpty = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderError = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderSelectionFooter = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderMenu = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderDeleteDialog = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.renderCreateFolderDialog = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.initializeClient = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.disposeClient = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.loadPage = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.loadFolderPreview = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.isRoot = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.currentDirectoryId = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.pageTitle = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.visibleItems = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.selectedItems = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.selectionActive = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.serverSearchEnabled = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.canStartChatSelection = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.canDownloadSelection = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.canDeleteSelection = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.menuOptions = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.selectedCountLabel = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.sectionTitle = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.isSelected = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.selectSurface = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.selectFolderCategory = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.reloadCurrentSurface = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.setLayout = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.activateItem = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.openItem = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.canActivateItem = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.toggleSelection = function <atom:0>;
  <proto:ChatGPTLibraryScreen>.track = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ChatGPTLibraryScreen>;
  ChatGPTLibraryScreen = function <atom:0>;
  // close_loc <class_fields_init>
  ChatGPTLibraryScreen#1 = function <atom:0>;
  exports.ChatGPTLibraryScreen = ChatGPTLibraryScreen#1;
  _t = {root: new St.Style({backgroundColor: ot.OAIColor.BgPrimary, flexDirection: "column", width: "100%"}), header: new St.Style({alignItems: "center", flexDirection: "row", height: 58, paddingLeft: ot.OAISpacing.OneAndHalf, paddingRight: ot.OAISpacing.OneAndHalf, width: "100%"}), headerTitle: new St.Style({alignItems: "center", flexGrow: 1, flexShrink: 1}), headerLabel: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(17), numberOfLines: 1}), scroll: new St.Style({flexGrow: 1, flexShrink: 1, width: "100%"}), content: new St.Style({alignSelf: "center", flexDirection: "column", paddingBottom: 110, paddingLeft: 20, paddingRight: 20, width: "100%"}), tabScroll: new St.Style({flexShrink: 0, marginBottom: 18, marginLeft: -20, marginRight: -20, width: "auto"}), tabRow: new St.Style({alignItems: "center", flexDirection: "row", gap: 22, paddingLeft: 20, paddingRight: 20}), tab: new St.Style({alignItems: "center", flexDirection: "column", minHeight: 38, paddingBottom: 6, paddingTop: 4}), tabLabel: new St.Style({font: Pt.systemMediumFont(15)}), tabLabelSelected: new St.Style({font: Pt.systemSemiboldFont(15)}), tabIndicator: new St.Style({backgroundColor: ot.OAIColor.TextPrimary, borderRadius: ot.OAIRadius.Pill, bottom: 0, height: 2, left: 0, position: "absolute", right: 0}), folderFilterScroll: new St.Style({flexShrink: 0, marginBottom: 16, marginLeft: -20, marginRight: -20, width: "auto"}), folderFilterRow: new St.Style({alignItems: "center", flexDirection: "row", gap: 8, paddingLeft: 20, paddingRight: 20}), searchContainer: new St.Style({marginBottom: 20, width: "100%"}), toolbar: new St.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, minHeight: 36, width: "100%"}), toolbarTitle: new St.Style({alignItems: "baseline", flexDirection: "row", gap: 8}), sectionTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(19)}), countLabel: new St.Style({color: ot.OAIColor.TextTertiary, font: Pt.systemMediumFont(11)}), layoutButtons: new St.Style({alignItems: "center", flexDirection: "row", gap: 4}), storageBanner: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.BgStatusWarning, borderRadius: ot.OAIRadius.Xl, flexDirection: "row", gap: ot.OAISpacing.One, marginBottom: 20, padding: ot.OAISpacing.OneAndHalf, width: "100%"}), storageBannerText: new St.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: 3}), storageBannerTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(14)}), storageBannerBody: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(12), lineHeight: 17, numberOfLines: 2}), suggestedFolders: new St.Style({flexDirection: "column", marginBottom: 24, width: "100%"}), suggestedFoldersHeader: new St.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 12, width: "100%"}), subsectionTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(16)}), folderPreviewScroll: new St.Style({flexShrink: 0, marginLeft: -20, marginRight: -20, width: "auto"}), folderPreviewRow: new St.Style({flexDirection: "row", gap: 10, paddingLeft: 20, paddingRight: 20}), folderPreviewCard: new St.Style({backgroundColor: ot.OAIColor.BgSecondary, borderColor: ot.OAIColor.BorderDefault, borderRadius: ot.OAIRadius.Xl, borderWidth: 1, flexDirection: "column", gap: 5, padding: 12, width: 144}), folderPreviewIcon: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.ThemeBlueBackground, borderRadius: ot.OAIRadius.Lg, height: 40, justifyContent: "center", marginBottom: 3, width: 40}), folderPreviewTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(13), numberOfLines: 1}), folderPreviewSubtitle: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(11), numberOfLines: 1}), grid: new St.Style({alignItems: "flex-start", flexDirection: "row", flexWrap: "wrap", gap: 12}), gridCard: new St.Style({flexDirection: "column", gap: 8}), cardSelected: new St.Style({opacity: 0.84}), gridPreview: new St.Style({backgroundColor: ot.OAIColor.BgTertiary, borderColor: ot.OAIColor.BorderDefault, borderRadius: ot.OAIRadius.Xl, borderWidth: 1}), gridMetadata: new St.Style({flexDirection: "column", gap: 2, paddingLeft: 2, paddingRight: 2}), gridTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemMediumFont(13), numberOfLines: 1}), gridSubtitle: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(11), numberOfLines: 1}), iconPreview: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.BgSecondary, justifyContent: "center"}), providerBadge: new St.Style({backgroundColor: ot.OAIColor.BgElevatedPrimary, borderRadius: ot.OAIRadius.Pill, paddingLeft: 6, paddingRight: 6, paddingBottom: 3, paddingTop: 3, position: "absolute", right: 7, top: 7}), providerBadgeLabel: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemSemiboldFont(9), numberOfLines: 1}), selectionBadge: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.InteractiveBgPrimaryDefault, borderColor: ot.OAIColor.TextInverseStatic, borderRadius: ot.OAIRadius.Pill, borderWidth: 2, height: 24, justifyContent: "center", position: "absolute", right: 8, top: 8, width: 24}), selectionCheck: new St.Style({color: ot.OAIColor.TextInverseStatic, font: Pt.systemBoldFont(13), textAlign: "center"}), list: new St.Style({borderColor: ot.OAIColor.BorderDefault, borderRadius: ot.OAIRadius.Xl, borderWidth: 1, flexDirection: "column", width: "100%"}), listRow: new St.Style({alignItems: "center", flexDirection: "row", gap: 12, minHeight: 74, padding: 10, width: "100%"}), rowSelected: new St.Style({backgroundColor: ot.OAIColor.ThemeBlueBackground}), listThumbnail: new St.Style({backgroundColor: ot.OAIColor.BgTertiary, borderRadius: ot.OAIRadius.Lg, height: 52, width: 52}), listText: new St.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: 3}), listTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemMediumFont(14), numberOfLines: 1}), listSubtitle: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(12), numberOfLines: 1}), loading: new St.Style({flexDirection: "column", width: "100%"}), loadingHeader: new St.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 16, width: "100%"}), loadingLabel: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemMediumFont(13)}), loadingCard: new St.Style({backgroundColor: ot.OAIColor.BgTertiary, borderRadius: ot.OAIRadius.Xl}), empty: new St.Style({alignItems: "center", flexDirection: "column", gap: 12, paddingBottom: 48, paddingTop: 54, width: "100%"}), emptyIcon: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.ThemeBlueBackground, borderRadius: ot.OAIRadius.Xxl, height: 72, justifyContent: "center", marginBottom: 4, width: 72}), errorIcon: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.BgStatusError, borderRadius: ot.OAIRadius.Xxl, height: 72, justifyContent: "center", marginBottom: 4, width: 72}), emptyTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(19), textAlign: "center"}), emptyBody: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(14), lineHeight: 20, maxWidth: 320, numberOfLines: 3, textAlign: "center"}), loadMore: new St.Style({alignItems: "center", paddingBottom: 20, paddingTop: 28, width: "100%"}), selectionFooter: new St.Style({alignItems: "center", backgroundColor: ot.OAIColor.BgElevatedPrimary, bottom: 0, flexDirection: "row", gap: 8, justifyContent: "center", left: 0, paddingLeft: 16, paddingRight: 16, paddingTop: ot.OAISpacing.One, position: "absolute", right: 0, zIndex: 20}), dialogContent: new St.Style({flexDirection: "column", gap: ot.OAISpacing.One, padding: ot.OAISpacing.One}), dialogTitle: new St.Style({color: ot.OAIColor.TextPrimary, font: Pt.systemSemiboldFont(18)}), dialogBody: new St.Style({color: ot.OAIColor.TextSecondary, font: Pt.systemFont(14), lineHeight: 20, numberOfLines: 3}), dialogActions: new St.Style({flexDirection: "row", gap: ot.OAISpacing.One, justifyContent: "flex-end", marginTop: ot.OAISpacing.One})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_library/src/ChatGPTLibraryScreen
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
