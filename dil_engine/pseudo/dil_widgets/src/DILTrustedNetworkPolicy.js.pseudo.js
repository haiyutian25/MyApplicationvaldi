// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=130B file=dil_widgets/src/DILTrustedNetworkPolicy
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.assetURLs = new Set();
  this.navigationURLs = new Set();
  this.lightboxURLs = new Set();
  this.fileCitationNamesByID = new Map();
  this.youtubeVideoIDs = new Set();
  this.youtubeThumbnailURLs = new Set();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=8B file=dil_widgets/src/DILTrustedNetworkPolicy
// closure: DILTrustedNetworkPolicy
function {
  return new DILTrustedNetworkPolicy();
}

// fn <atom:0>  args=1 vars=10 closure=3 cpool=0 bc=1190B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, r, i, s, o, e#1, r#1, s#1, a
// closure: DILTrustedNetworkPolicy, O, p
function {
  let s;
  let i;
  let r;
  let t;
  t = new DILTrustedNetworkPolicy();
  if (!((Object.getOwnPropertyDescriptor(e, "opGenui") == null))) goto L_4c;
  Object.getOwnPropertyDescriptor(e, "opGenui");
  goto L_6d;
  r = O(undefined.value);
  if (!((undefined === r))) goto L_7a;
  return t;
  if (!((Object.getOwnPropertyDescriptor(r, "componentResults") == null))) goto L_b4;
  Object.getOwnPropertyDescriptor(r, "componentResults");
  goto L_d5;
  i = O(undefined.value);
  if (!((undefined === i))) goto L_e2;
  return t;
  if (!((Object.getOwnPropertyDescriptor(r, "modelDataBindings") == null))) goto L_11b;
  Object.getOwnPropertyDescriptor(r, "modelDataBindings");
  goto L_13c;
  s = undefined.value;
  t.addModelBindingFavicons(s);
  if (!((Object.getOwnPropertyDescriptor(r, "modelDataBindingSafeUrls") == null))) goto L_1c8;
  Object.getOwnPropertyDescriptor(r, "modelDataBindingSafeUrls");
  goto L_1e9;
  t.addModelBindingImageURLs(s, undefined.value);
  let o;
  for (const o of Object.keys(i)) {
    let a;
    let s#1;
    let r#1;
    let e#1;
    if (!((Object.getOwnPropertyDescriptor(i, o) == null))) goto L_266;
    Object.getOwnPropertyDescriptor(i, o);
    goto L_287;
    e#1 = O(undefined.value);
    if (!((undefined === e#1))) goto L_294;
    goto L_2ee;
    // [栈深重同步 4 -> 3]
    if (!((Object.getOwnPropertyDescriptor(e#1, "componentName") == null))) goto L_2cd;
    Object.getOwnPropertyDescriptor(e#1, "componentName");
    goto L_2ee;
    r#1 = undefined.value;
    if (!(("string" == typeof r#1))) goto L_301;
    goto L_306;
    // [栈深重同步 4 -> 3]
    s#1 = p(o);
    if (((undefined === s#1))) goto L_37a;
    if (((undefined === e#1))) goto L_37a;
    if (!((Object.getOwnPropertyDescriptor(e#1, "status") == null))) goto L_358;
    Object.getOwnPropertyDescriptor(e#1, "status");
    goto L_379;
    if ((("resolved" !== undefined.value))) continue;
    if (!((Object.getOwnPropertyDescriptor(e#1, "state") == null))) goto L_3b9;
    Object.getOwnPropertyDescriptor(e#1, "state");
    goto L_3da;
    a = O(undefined.value);
    if (!((undefined !== a))) goto L_498;
    if (!((Object.getOwnPropertyDescriptor(e#1, "safe_urls") == null))) goto L_446;
    Object.getOwnPropertyDescriptor(e#1, "safe_urls");
    goto L_467;
    t.addApprovedAssetURLs(undefined.value);
    t.addComponentState(s#1, a);
  }
  return t;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=0 bc=522B file=dil_widgets/src/DILTrustedNetworkPolicy
// locals: r, e, e#1, this
// closure: e, l, t, g
function {
  this = this;
  if (!((undefined === this.cachedAllowedUrlRegexes))) goto L_1e7;
  let r;
  // append([], 0, e.DIL_LOCAL_ASSET_URL_REGEXES)
  [][e.DIL_LOCAL_ASSET_URL_REGEXES] = l.source;
  [][(l.source ++)] = t.GOOGLE_FAVICON_URL_PATTERN.source;
  (t.GOOGLE_FAVICON_URL_PATTERN.source ++);
  r = [];
  let e;
  for (const e of this.assetURLs) {
    r.push("^".concat(g(e), "$"));
  }
  let e#1;
  for (const e#1 of this.youtubeThumbnailURLs) {
    r.push("^".concat(g(e#1), "$"));
  }
  this.cachedAllowedUrlRegexes = r;
  return this.cachedAllowedUrlRegexes;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=321B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: r
// locals: this
// closure: e, l, t
function {
  this = this;
  if ((e.isDILLocalAssetURL(r))) goto L_140;
  if ((l.test(r))) goto L_140;
  if ((t.GOOGLE_FAVICON_URL_PATTERN.test(r))) goto L_140;
  if ((this.assetURLs.has(r))) goto L_140;
  return this.youtubeThumbnailURLs.has(r);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=86B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: this
function {
  this = this;
  if (!(("string" == typeof e))) goto L_55;
  return this.assetURLs.has(e);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=193B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e, t
// locals: r, this
function {
  this = this;
  let r;
  if ((("string" != typeof e))) goto L_19;
  if (!(("string" != typeof t))) goto L_1e;
  return false;
  r = this.fileCitationNamesByID.get(e);
  if (!((r == null))) goto L_72;
  r;
  goto L_93;
  if (!((1 === undefined.size))) goto L_c0;
  return r.has(t);
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=86B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: this
function {
  this = this;
  if (!(("string" == typeof e))) goto L_55;
  return this.youtubeVideoIDs.has(e);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=131B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.canonicalHTTPSNavigationURL(e);
  if (!((undefined !== t))) goto L_82;
  if (!(this.navigationURLs.has(t))) goto L_82;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=211B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.canonicalHTTPSNavigationURL(e);
  if (!((undefined !== t))) goto L_d2;
  if ((this.navigationURLs.has(t))) goto L_cc;
  if (!(this.lightboxURLs.has(t))) goto L_d2;
  return t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// closure: v
function {
  if (!((v(e) == null))) goto L_a;
  v(e);
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.canonicalURL;
}

// fn <atom:0>  args=1 vars=7 closure=4 cpool=0 bc=658B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: r, i, e#1, s, a, this
// closure: O, o, v, t
function {
  this = this;
  let r;
  r = O(e);
  if (!((undefined !== r))) goto L_291;
  let i;
  for (const i of Object.keys(r)) {
    let a;
    let s;
    let e#1;
    if ((!o.test(i))) continue;
    if (!((Object.getOwnPropertyDescriptor(r, i) == null))) goto L_b9;
    Object.getOwnPropertyDescriptor(r, i);
    goto L_da;
    e#1 = O(undefined.value);
    if (!((undefined === e#1))) goto L_e6;
    goto L_142;
    // [栈深重同步 4 -> 3]
    if (!((Object.getOwnPropertyDescriptor(e#1, "url") == null))) goto L_120;
    Object.getOwnPropertyDescriptor(e#1, "url");
    goto L_141;
    s = O(undefined.value);
    if (((undefined === s))) goto L_1ac;
    if (!((Object.getOwnPropertyDescriptor(s, "$type") == null))) goto L_18a;
    Object.getOwnPropertyDescriptor(s, "$type");
    goto L_1ab;
    if ((("uri" !== undefined.value))) continue;
    if (!((Object.getOwnPropertyDescriptor(s, "uri") == null))) goto L_1eb;
    Object.getOwnPropertyDescriptor(s, "uri");
    goto L_20c;
    a = v(undefined.value);
    if (!((undefined !== a))) goto L_287;
    this.addAssetURL(t.resolveGoogleFaviconURL(a.originalURL));
  }
  return;
}

// fn <atom:0>  args=2 vars=9 closure=2 cpool=0 bc=696B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e, t
// locals: r, i, s, e#1, t#1, r#1, this
// closure: O, v
function {
  this = this;
  let i;
  let r;
  r = O(e);
  i = O(t);
  if (!((undefined !== r))) goto L_2b7;
  if (!((undefined !== i))) goto L_2b7;
  let s;
  for (const s of Object.keys(i)) {
    let e#1;
    if (!((Object.getOwnPropertyDescriptor(r, s) == null))) goto L_94;
    Object.getOwnPropertyDescriptor(r, s);
    goto L_b5;
    if (((undefined === undefined.value))) continue;
    if (!((Object.getOwnPropertyDescriptor(i, s) == null))) goto L_f2;
    Object.getOwnPropertyDescriptor(i, s);
    goto L_113;
    e#1 = undefined.value;
    if (!(Array.isArray(e#1))) continue;
    let t#1;
    t#1 = 0;
    if (!((t#1 < e#1.length))) continue;
    let r#1;
    if (!((Object.getOwnPropertyDescriptor(e#1, String(t#1)) == null))) goto L_199;
    Object.getOwnPropertyDescriptor(e#1, String(t#1));
    goto L_1ba;
    r#1 = v(undefined.value);
    if (!((undefined !== r#1))) goto L_2a0;
    this.assetURLs.add(r#1.originalURL);
    this.lightboxURLs.add(r#1.canonicalURL);
    t#1 = (t#1 + 1);
    (t#1 + 1);
    goto L_14b;
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=209B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, this
function {
  this = this;
  if (!(Array.isArray(e))) goto L_d0;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_d0;
  if (!((Object.getOwnPropertyDescriptor(e, String(t)) == null))) goto L_9e;
  Object.getOwnPropertyDescriptor(e, String(t));
  goto L_bf;
  this.addAssetURL(undefined.value);
  t = (t + 1);
  (t + 1);
  goto L_36;
  return;
}

// fn <atom:0>  args=2 vars=7 closure=1 cpool=0 bc=2340B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e, t
// locals: e#1, t#1, r, e#2, this
// closure: O
function {
  this = this;
  if (!((e === "AsyncVideo"))) goto L_36;
  this.addYouTubeVideoID(t);
  e;
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "AsyncImage"))) goto L_48;
  if (!((<?> === "AsyncImageGroup"))) goto L_92;
  this.addImageRecords(t.images);
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "EntityThumbnailList"))) goto L_a7;
  if (!((<?> === "EntityExplorer"))) goto L_12c;
  if (!((Object.getOwnPropertyDescriptor(t, "entities") == null))) goto L_101;
  Object.getOwnPropertyDescriptor(t, "entities");
  goto L_122;
  this.addImageGridAssets(undefined.value, "image");
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "EntityCard"))) goto L_1ba;
  if (!((Object.getOwnPropertyDescriptor(t, "image") == null))) goto L_192;
  Object.getOwnPropertyDescriptor(t, "image");
  goto L_1b3;
  this.addSearchImageAsset(undefined.value, true);
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "EntityOverviewWidget"))) goto L_1cf;
  if (!((<?> === "LocalBusinessWidget"))) goto L_24f;
  if (!((Object.getOwnPropertyDescriptor(t, "images") == null))) goto L_229;
  Object.getOwnPropertyDescriptor(t, "images");
  goto L_24a;
  this.addSearchImageAssets(undefined.value);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "EntityOverviewCarouselWidget"))) goto L_3f8;
  let e#1;
  if (!((Object.getOwnPropertyDescriptor(t, "items") == null))) goto L_295;
  Object.getOwnPropertyDescriptor(t, "items");
  goto L_2b6;
  e#1 = undefined.value;
  if (!(!Array.isArray(e#1))) goto L_2e7;
  return;
  // [栈深重同步 0 -> 1]
  let t#1;
  t#1 = 0;
  if (!((t#1 < e#1.length))) goto L_3f7;
  let r;
  if (!((Object.getOwnPropertyDescriptor(e#1, String(t#1)) == null))) goto L_33a;
  Object.getOwnPropertyDescriptor(e#1, String(t#1));
  goto L_35b;
  r = O(undefined.value);
  if (!((undefined !== r))) goto L_3e9;
  if (!((Object.getOwnPropertyDescriptor(r, "images") == null))) goto L_3c5;
  Object.getOwnPropertyDescriptor(r, "images");
  goto L_3e6;
  this.addSearchImageAssets(undefined.value);
  t#1 = (t#1 + 1);
  (t#1 + 1);
  goto L_2ec;
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "VisualCardCarouselWidget"))) goto L_489;
  if (!((Object.getOwnPropertyDescriptor(t, "items") == null))) goto L_45e;
  Object.getOwnPropertyDescriptor(t, "items");
  goto L_47f;
  this.addImageGridAssets(undefined.value, "image");
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "PersonWidget"))) goto L_49e;
  if (!((<?> === "PersonWidgetAlwaysTrigger"))) goto L_58a;
  let e#2;
  if (!((Object.getOwnPropertyDescriptor(t, "image_card") == null))) goto L_4d9;
  Object.getOwnPropertyDescriptor(t, "image_card");
  goto L_4fa;
  e#2 = O(undefined.value);
  if (!((undefined !== e#2))) goto L_588;
  if (!((Object.getOwnPropertyDescriptor(e#2, "images") == null))) goto L_564;
  Object.getOwnPropertyDescriptor(e#2, "images");
  goto L_585;
  this.addSearchImageAssets(undefined.value);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "ImageGrid"))) goto L_6c5;
  this.addImageRecords(t.images);
  this.addImageGridRows(t.rows);
  this.addImageGridAssets(t.tiles, "image");
  this.addImageGridAssets(t.recommendations, "thumbnail_image");
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "Citation"))) goto L_6da;
  if (!((<?> === "Cite"))) goto L_75a;
  if (!((Object.getOwnPropertyDescriptor(t, "items") == null))) goto L_734;
  Object.getOwnPropertyDescriptor(t, "items");
  goto L_755;
  this.addNavigationRecords(undefined.value);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "FileCite"))) goto L_78c;
  this.addFileCitation(t);
  return;
  // [栈深重同步 0 -> 1]
  if (((<?> === "Link"))) goto L_7a1;
  if (!((<?> === "LinkCard"))) goto L_87d;
  this.addNavigationURL(t.url);
  this.addAssetURL(t.thumbnail_url);
  this.addAssetURL(t.image_url);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "NewsCarousel"))) goto L_8d0;
  this.addImageAndNavigationRecords(t.items);
  return;
  // [栈深重同步 0 -> 1]
  if (!((<?> === "ProductCard"))) goto L_923;
  this.addAssetURL(t.image_url);
  return;
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=1 vars=6 closure=3 cpool=0 bc=889B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, r, i, s, this
// closure: O, a, n
function {
  this = this;
  let s;
  let i;
  let r;
  let t;
  if (!((Object.getOwnPropertyDescriptor(e, "file_id") == null))) goto L_46;
  Object.getOwnPropertyDescriptor(e, "file_id");
  goto L_67;
  t = undefined.value;
  if (!((Object.getOwnPropertyDescriptor(e, "file_name") == null))) goto L_9f;
  Object.getOwnPropertyDescriptor(e, "file_name");
  goto L_c0;
  r = undefined.value;
  if (!((Object.getOwnPropertyDescriptor(e, "file_action_payload") == null))) goto L_f9;
  Object.getOwnPropertyDescriptor(e, "file_action_payload");
  goto L_11a;
  i = O(undefined.value);
  if ((("string" != typeof t))) goto L_29e;
  if ((!a.test(t))) goto L_29e;
  if ((("string" != typeof r))) goto L_29e;
  if (((0 === r.trim().length))) goto L_29e;
  if ((n.test(r))) goto L_29e;
  if (((undefined === i))) goto L_29e;
  if (!((Object.getOwnPropertyDescriptor(i, "file_id") == null))) goto L_217;
  Object.getOwnPropertyDescriptor(i, "file_id");
  goto L_238;
  if (((undefined.value !== t))) goto L_29e;
  if (!((Object.getOwnPropertyDescriptor(i, "file_name") == null))) goto L_279;
  Object.getOwnPropertyDescriptor(i, "file_name");
  goto L_29a;
  if (!((undefined.value !== r))) goto L_2a1;
  return;
  s = this.fileCitationNamesByID.get(t);
  if (!((undefined === s))) goto L_34e;
  goto L_378;
  // [栈深重同步 1 -> 0]
  s.add(r);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=578B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, r, this
// closure: O, d
function {
  this = this;
  let r;
  let t;
  if (!((Object.getOwnPropertyDescriptor(e, "video") == null))) goto L_40;
  Object.getOwnPropertyDescriptor(e, "video");
  goto L_61;
  t = O(undefined.value);
  if (!((undefined === t))) goto L_6b;
  return;
  if (!((Object.getOwnPropertyDescriptor(t, "video_id") == null))) goto L_a4;
  Object.getOwnPropertyDescriptor(t, "video_id");
  goto L_c5;
  r = undefined.value;
  if (!(("string" == typeof r))) goto L_241;
  if (!(d.test(r))) goto L_241;
  this.youtubeVideoIDs.add(r);
  this.youtubeThumbnailURLs.add("https://img.youtube.com/vi/".concat(r, "/maxresdefault.jpg"));
  this.youtubeThumbnailURLs.add("https://img.youtube.com/vi/".concat(r, "/hqdefault.jpg"));
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=316B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, e#1, this
// closure: O
function {
  this = this;
  if (!(Array.isArray(e))) goto L_13b;
  let t;
  for (const t of e) {
    let e#1;
    e#1 = O(t);
    if (!((undefined !== e#1))) goto L_131;
    this.addImageRecords(e#1.images);
    this.addImageAndNavigationRecords(e#1.tiles);
    this.addImageGridAssets(e#1.tiles, "image");
  }
  return;
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=0 bc=320B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e, t
// locals: r, i, this
// closure: O
function {
  this = this;
  if (!(Array.isArray(e))) goto L_13f;
  let r;
  r = 0;
  if (!((r < e.length))) goto L_13f;
  let i;
  if (!((Object.getOwnPropertyDescriptor(e, String(r)) == null))) goto L_80;
  Object.getOwnPropertyDescriptor(e, String(r));
  goto L_a1;
  i = O(undefined.value);
  if (!((undefined !== i))) goto L_131;
  if (!((Object.getOwnPropertyDescriptor(i, t) == null))) goto L_106;
  Object.getOwnPropertyDescriptor(i, t);
  goto L_127;
  this.addSearchImageAsset(undefined.value, ("image" === t));
  r = (r + 1);
  (r + 1);
  goto L_36;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=211B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, this
function {
  this = this;
  if (!(Array.isArray(e))) goto L_d2;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_d2;
  if (!((Object.getOwnPropertyDescriptor(e, String(t)) == null))) goto L_9e;
  Object.getOwnPropertyDescriptor(e, String(t));
  goto L_bf;
  this.addSearchImageAsset(undefined.value, true);
  t = (t + 1);
  (t + 1);
  goto L_36;
  return;
}

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=494B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e, t
// locals: r, e#1, this
// closure: O, v
function {
  this = this;
  let r;
  r = O(e);
  if (!((undefined !== r))) goto L_1ed;
  if (!((Object.getOwnPropertyDescriptor(r, "content_url") == null))) goto L_6e;
  Object.getOwnPropertyDescriptor(r, "content_url");
  goto L_8f;
  this.addAssetURL(undefined.value);
  if (!((Object.getOwnPropertyDescriptor(r, "thumbnail_url") == null))) goto L_ee;
  Object.getOwnPropertyDescriptor(r, "thumbnail_url");
  goto L_10f;
  this.addAssetURL(undefined.value);
  if (!(t)) goto L_1ed;
  let e#1;
  if (!((Object.getOwnPropertyDescriptor(r, "url") == null))) goto L_156;
  Object.getOwnPropertyDescriptor(r, "url");
  goto L_177;
  e#1 = v(undefined.value);
  if (!((undefined !== e#1))) goto L_1ec;
  this.lightboxURLs.add(e#1.canonicalURL);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=311B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, e#1, this
// closure: O
function {
  this = this;
  if (!(Array.isArray(e))) goto L_136;
  let t;
  for (const t of e) {
    let e#1;
    e#1 = O(t);
    if (!((undefined !== e#1))) goto L_12c;
    this.addAssetURL(e#1.content_url);
    this.addAssetURL(e#1.thumbnail_url);
    this.addNavigationURL(e#1.url);
  }
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=445B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, r, this
// closure: O
function {
  this = this;
  if (!(Array.isArray(e))) goto L_1bc;
  let t;
  t = 0;
  if (!((t < e.length))) goto L_1bc;
  let r;
  if (!((Object.getOwnPropertyDescriptor(e, String(t)) == null))) goto L_80;
  Object.getOwnPropertyDescriptor(e, String(t));
  goto L_a1;
  r = O(undefined.value);
  if (!((undefined !== r))) goto L_1ae;
  if (!((Object.getOwnPropertyDescriptor(r, "url") == null))) goto L_10a;
  Object.getOwnPropertyDescriptor(r, "url");
  goto L_12b;
  this.addNavigationURL(undefined.value);
  if (!((Object.getOwnPropertyDescriptor(r, "thumbnail_url") == null))) goto L_18a;
  Object.getOwnPropertyDescriptor(r, "thumbnail_url");
  goto L_1ab;
  this.addAssetURL(undefined.value);
  t = (t + 1);
  (t + 1);
  goto L_36;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=385B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, e#1, this
// closure: O
function {
  this = this;
  if (!(Array.isArray(e))) goto L_180;
  let t;
  for (const t of e) {
    let e#1;
    e#1 = O(t);
    if (!((undefined !== e#1))) goto L_176;
    this.addAssetURL(e#1.content_url);
    this.addAssetURL(e#1.thumbnail_url);
    this.addAssetURL(e#1.image_url);
    this.addNavigationURL(e#1.url);
  }
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=125B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, this
// closure: v
function {
  this = this;
  let t;
  t = v(e);
  if (!((undefined !== t))) goto L_7c;
  this.assetURLs.add(t.originalURL);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=239B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: r, this
// closure: v, t
function {
  this = this;
  let r;
  r = v(e);
  if (!((undefined !== r))) goto L_ee;
  this.navigationURLs.add(r.canonicalURL);
  this.addAssetURL(t.resolveGoogleFaviconURL(r.originalURL));
  return;
}

// fn g  args=1 vars=1 closure=0 cpool=2 bc=47B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
function {
  return e.replace(new RegExp("[.*+?^${}()|[\\]\\\\]"), "\$&");   // tail call
}

// fn p  args=1 vars=2 closure=0 cpool=0 bc=134B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t
function {
  try { // catch -> L_7c
  let t;
  t = JSON.parse(e);
  if ((!Array.isArray(t))) goto L_70;
  if (!(("string" != typeof t[0]))) goto L_75;
  return undefined;
  return t[0];
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_85
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn v  args=1 vars=4 closure=2 cpool=2 bc=440B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, i, s
// closure: r, h
function {
  let s;
  let i;
  let t;
  if ((("string" != typeof e))) goto L_a4;
  if (((0 === e.length))) goto L_a4;
  if (((e !== e.trim()))) goto L_a4;
  if ((r.test(e))) goto L_a4;
  if (!(e.includes("\"))) goto L_a7;
  return;
  t = new RegExp("^https:\\/\\/([^/?#]+)([/?#].*)?$").exec(e);
  if (((null === t))) goto L_109;
  if (!(t[1].includes("@"))) goto L_10c;
  return;
  i = h(t[1]);
  if (!((undefined === i))) goto L_11c;
  return;
  if (!((t[2] == null))) goto L_127;
  t[2];
  s = "";
  if (((0 === s.length))) goto L_176;
  if ((("?" === s[0]))) goto L_176;
  if (!(("#" === s[0]))) goto L_1a6;
  goto L_1a9;
  // [栈深重同步 5 -> 4]
  return {canonicalURL: "https://".concat(i, s), originalURL: e};
}

// fn h  args=1 vars=5 closure=1 cpool=2 bc=274B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t, r, i, e#1
// closure: y
function {
  let i;
  let r;
  let t;
  t = new RegExp("^([^:]+)(?::(\\d+))?$").exec(e);
  if (((null === t))) goto L_45;
  if (!(!y(t[1]))) goto L_48;
  return;
  r = t[1].toLowerCase();
  i = t[2];
  if (!((undefined !== i))) goto L_10e;
  let e#1;
  e#1 = Number(i);
  if ((!Number.isInteger(e#1))) goto L_d2;
  if (((e#1 < 1))) goto L_d2;
  if (!((e#1 > 65535))) goto L_d5;
  return;
  if (!((443 !== e#1))) goto L_10e;
  return "".concat(r, ":", e#1);   // tail call
  return r;
}

// fn y  args=1 vars=2 closure=2 cpool=0 bc=288B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
// locals: t
// closure: i, s
function {
  if (((0 === e.length))) goto L_67;
  if (((e.length > 253))) goto L_67;
  if ((!i.test(e))) goto L_67;
  if (!(s.test(e))) goto L_6c;
  return false;
  let t;
  for (const t of e.split(".")) {
    if (((0 === t.length))) goto L_10e;
    if (((t.length > 63))) goto L_10e;
    if ((t.startsWith("-"))) goto L_10e;
    if (!(t.endsWith("-"))) continue;
    return false;
    // [栈深重同步 0 -> 3]
  }
  return true;
}

// fn O  args=1 vars=1 closure=0 cpool=0 bc=67B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: e
function {
  if (((null === e))) goto L_3d;
  if ((("object" != typeof e))) goto L_3d;
  if (!(Array.isArray(e))) goto L_41;
  return undefined;
  return e;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=46 bc=514B file=dil_widgets/src/DILTrustedNetworkPolicy
// args: require, module, exports
// locals: e, t, r, i, s, o, a, n, d, c, u, l, DILTrustedNetworkPolicy, <class_fields_init>, DILTrustedNetworkPolicy#1, g, p, v, h, y, O
function {
  g = function g;
  p = function p;
  v = function v;
  h = function h;
  y = function y;
  O = function O;
  let DILTrustedNetworkPolicy#1;
  let l;
  let u;
  let c;
  let d;
  let n;
  let a;
  let o;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILTrustedNetworkPolicy = undefined;
  e = require("dil_core/src/DILAssetURLAuthorization");
  t = require("./widgets/FaviconURLResolver");
  r = new RegExp("[\\u0000-\\u0020\\u007f]");
  i = new RegExp("^[a-z0-9-]+(?:\\.[a-z0-9-]+)*$");
  s = new RegExp("^(?:0x[0-9a-f]+|\\d+)(?:\\.(?:0x[0-9a-f]+|\\d+))*$");
  o = new RegExp("^turn\\d+[a-z][a-z0-9_-]*\\d+$");
  a = new RegExp("^file[-_][A-Za-z0-9][A-Za-z0-9_-]*$");
  n = new RegExp("[\\u0000-\\u001f\\u007f]");
  d = new RegExp("^[A-Za-z0-9_-]{11}$");
  c = "data:image/png;base64,iVBORw0KGgo";
  u = 131072;
  l = new RegExp("^".concat(c, "[\s\S]{0,131039}(?![\s\S])"));
  let DILTrustedNetworkPolicy;
  let <class_fields_init>;
  class DILTrustedNetworkPolicy extends undefined { ... }
  function <atom:0>.empty = function <atom:0>;
  function <atom:0>.fromAppData = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.allowedUrlRegexes = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.isAllowedAssetURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.isTrustedAssetURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.isTrustedFileCitation = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.isTrustedYouTubeVideoID = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.canonicalTrustedNavigationURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.canonicalTrustedLightboxURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.canonicalHTTPSNavigationURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addModelBindingFavicons = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addModelBindingImageURLs = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addApprovedAssetURLs = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addComponentState = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addFileCitation = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addYouTubeVideoID = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addImageGridRows = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addImageGridAssets = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addSearchImageAssets = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addSearchImageAsset = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addImageRecords = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addNavigationRecords = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addImageAndNavigationRecords = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addAssetURL = function <atom:0>;
  <proto:DILTrustedNetworkPolicy>.addNavigationURL = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILTrustedNetworkPolicy>;
  DILTrustedNetworkPolicy = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc DILTrustedNetworkPolicy
  DILTrustedNetworkPolicy#1 = function <atom:0>;
  exports.DILTrustedNetworkPolicy = DILTrustedNetworkPolicy#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILTrustedNetworkPolicy
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
