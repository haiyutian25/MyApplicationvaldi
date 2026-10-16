// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=dil_widgets/src/maps/MapTypes
// args: t
function {
  t.Dot = "dot";
  t.Pin = "pin";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/maps/MapTypes
// args: t
function {
  t.Loading = "loading";
  t.Ready = "ready";
  t.Unavailable = "unavailable";
  t.Error = "error";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=dil_widgets/src/maps/MapTypes
// args: t
function {
  t.Bakery = "bakery";
  t.Coffee = "coffee";
  t.Museum = "museum";
  t.Park = "park";
  t.Restaurant = "restaurant";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/maps/MapTypes
// args: t
function {
  t.Loading = "loading";
  t.Success = "success";
  t.Unavailable = "unavailable";
  t.Error = "error";
  return;
}

// fn u  args=1 vars=8 closure=2 cpool=0 bc=1082B file=dil_widgets/src/maps/MapTypes
// args: e
// locals: o, r, i, n, a, u, l
// closure: p, t
function {
  let r;
  let o;
  if (!((undefined === e))) goto L_f;
  return [];
  o = [];
  r = new Set();
  let i;
  i = 0;
  if (!((i < e.length))) goto L_436;
  let l;
  let u;
  let a;
  let n;
  n = e[i];
  if ((!p(n))) goto L_429;
  if (!((n.type === t.Dot))) goto L_b7;
  goto L_d9;
  // [栈深重同步 1 -> 0]
  a = t.Pin;
  if (!((n.id == null))) goto L_107;
  n.id;
  goto L_12b;
  if ((undefined.trim())) goto L_1b0;
  u = "marker-".concat(i, "-", n.longitude, "-", n.latitude);
  if (!(r.has(u))) goto L_210;
  goto L_213;
  // [栈深重同步 1 -> 0]
  l = u;
  r.add(l);
  if (!((n.color == null))) goto L_2c2;
  n.color;
  if (!((a === t.Dot))) goto L_2bd;
  goto L_2c2;
  // [栈深重同步 4 -> 3]
  if (!(Number.isFinite(n.rating))) goto L_3eb;
  goto L_3ec;
  // [栈深重同步 4 -> 3]
  o.push({color: "--red-300", id: l, label: n.label, latitude: n.latitude, longitude: n.longitude, minimized: (true === n.minimized), rating: undefined, selected: (true === n.selected), type: a});
  i = (i + 1);
  (i + 1);
  goto L_22;
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=74B file=dil_widgets/src/maps/MapTypes
// args: t
// closure: p
function {
  if (!(Array.isArray(t))) goto L_49;
  if (!((2 === t.length))) goto L_49;
  return p({longitude: t[0], latitude: t[1]});
}

// fn l  args=1 vars=5 closure=2 cpool=1 bc=336B file=dil_widgets/src/maps/MapTypes
// args: t
// locals: e, o, r, n
// closure: p, i
function {
  let e;
  if (!((undefined === t))) goto L_c;
  return [];
  e = [];
  let o;
  o = 0;
  if (!((o < t.length))) goto L_14c;
  let n;
  let r;
  r = t[o];
  if ((!Array.isArray(r.coordinates))) goto L_13f;
  n = r.coordinates.filter(function <atom:0>);
  if (((n.length < 2))) goto L_13e;
  if (!((r.color == null))) goto L_12e;
  r.color;
  e.push({color: i[(o % i.length)], coordinates: n});
  o = (o + 1);
  (o + 1);
  goto L_15;
  return e;
}

// fn s  args=1 vars=12 closure=2 cpool=0 bc=1413B file=dil_widgets/src/maps/MapTypes
// args: t
// locals: e, o, l, l#1, t#1, r, i, n, a, l#2, u
// closure: c, exports
function {
  let u;
  let a;
  let n;
  let i;
  let r;
  let o;
  let e;
  e = t.initialViewState;
  if (!(c(e))) goto L_cc;
  return {center: {latitude: e.latitude, longitude: e.longitude}, fitBounds: false, zoom: e.zoom};
  o = [];
  let l;
  for (const l of t.markers) {
    o.push(l);
  }
  let l#1;
  for (const l#1 of t.routes) {
    let t#1;
    for (const t#1 of l#1.coordinates) {
      o.push({longitude: t#1[0], latitude: t#1[1]});
      // [栈深重同步 3 -> 6]
    }
  }
  if (!((0 === o.length))) goto L_2ba;
  return {center: {latitude: exports.DEFAULT_MAP_VIEW_STATE.latitude, longitude: exports.DEFAULT_MAP_VIEW_STATE.longitude}, fitBounds: false, zoom: exports.DEFAULT_MAP_VIEW_STATE.zoom};
  r = o[0].latitude;
  i = o[0].latitude;
  n = o[0].longitude;
  a = o[0].longitude;
  let l#2;
  for (const l#2 of o) {
    r = Math.min(r, l#2.latitude);
    Math.min(r, l#2.latitude);
    i = Math.max(i, l#2.latitude);
    Math.max(i, l#2.latitude);
    n = Math.min(n, l#2.longitude);
    Math.min(n, l#2.longitude);
    a = Math.max(a, l#2.longitude);
    Math.max(a, l#2.longitude);
  }
  if (((r !== i))) goto L_4d5;
  u = (n !== a);
  if (!(u)) goto L_50c;
  goto L_50d;
  // [栈深重同步 2 -> 1]
  return {bounds: undefined, center: {latitude: ((r + i) / 2), longitude: ((n + a) / 2)}, fitBounds: u, zoom: exports.DEFAULT_MAP_VIEW_STATE.zoom};
}

// fn d  args=2 vars=7 closure=2 cpool=0 bc=777B file=dil_widgets/src/maps/MapTypes
// args: t, e
// locals: o, r, i, u, l
// closure: a, n
function {
  let l;
  let u;
  let i;
  let r;
  let o;
  if (!((Math.abs((e.zoom - t.zoom)) >= a))) goto L_86;
  return true;
  o = Math.max(t.latitudeSpan, e.latitudeSpan);
  r = Math.max(t.longitudeSpan, e.longitudeSpan);
  if ((!Number.isFinite(o))) goto L_1d2;
  if ((!Number.isFinite(r))) goto L_1d2;
  if (((o <= 0))) goto L_1d2;
  if (!((r <= 0))) goto L_1d7;
  return true;
  i = Math.abs((e.latitude - t.latitude));
  u = (Math.abs((e.longitude - t.longitude)) % 360);
  l = Math.min(u, (360 - u));
  if (((i >= (o * n)))) goto L_308;
  return (l >= (r * n));
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=337B file=dil_widgets/src/maps/MapTypes
// args: t
function {
  if (!((undefined !== t))) goto L_150;
  if (!(Number.isFinite(t.latitude))) goto L_150;
  if (!(Number.isFinite(t.longitude))) goto L_150;
  if (!((t.latitude >= -90))) goto L_150;
  if (!((t.latitude <= 90))) goto L_150;
  if (!((t.longitude >= -180))) goto L_150;
  return (t.longitude <= 180);
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=167B file=dil_widgets/src/maps/MapTypes
// args: t
// closure: p
function {
  if (!(p(t))) goto L_a6;
  if (!(Number.isFinite(t.zoom))) goto L_a6;
  if (!((t.zoom >= 0))) goto L_a6;
  return (t.zoom <= 22);
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=14 bc=396B file=dil_widgets/src/maps/MapTypes
// args: require, module, exports
// locals: t, e, o, r, i, n, a, u, l, s, d, p, c
function {
  u = function u;
  l = function l;
  s = function s;
  d = function d;
  p = function p;
  c = function c;
  let a;
  let n;
  let i;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MapMarkerKind = undefined;
  exports.MapSurfaceStatus = undefined;
  exports.MapNearbySearchCategory = undefined;
  exports.MapNearbySearchStatus = undefined;
  exports.DEFAULT_MAP_VIEW_STATE = undefined;
  exports.normalizeMapMarkers = undefined;
  exports.normalizeMapRoutes = undefined;
  exports.resolveMapViewport = undefined;
  exports.hasMapViewportMovedMeaningfully = undefined;
  if ((t)) goto L_d0;
  t = {};
  exports.MapMarkerKind = {};
  function <atom:0>({});
  if ((e)) goto L_e6;
  e = {};
  exports.MapSurfaceStatus = {};
  function <atom:0>({});
  if ((o)) goto L_fc;
  o = {};
  exports.MapNearbySearchCategory = {};
  function <atom:0>({});
  if ((r)) goto L_112;
  r = {};
  exports.MapNearbySearchStatus = {};
  function <atom:0>({});
  exports.DEFAULT_MAP_VIEW_STATE = {latitude: 37.769, longitude: -122.404, zoom: 12};
  i = ["--blue-500", "--purple-500", "--green-500", "--orange-500", "--red-500"];
  n = 0.18;
  a = 0.35;
  exports.normalizeMapMarkers = u;
  exports.normalizeMapRoutes = l;
  exports.resolveMapViewport = s;
  exports.hasMapViewportMovedMeaningfully = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/maps/MapTypes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
