// fn e  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/FaviconURLResolver
// args: e
// closure: o
function {
  o = e;
  e;
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=7B file=dil_widgets/src/widgets/FaviconURLResolver
// args: e
// closure: o
function {
  return o(e);   // tail call
}

// fn t  args=1 vars=2 closure=0 cpool=2 bc=113B file=dil_widgets/src/widgets/FaviconURLResolver
// args: o
// locals: e
function {
  let e;
  if (!((o.match(new RegExp("^(https?:\\/\\/[^/?#]+)(?:[/?#]|$)")) == null))) goto L_35;
  o.match(new RegExp("^(https?:\\/\\/[^/?#]+)(?:[/?#]|$)"));
  goto L_37;
  e = undefined[1];
  if (!((undefined !== e))) goto L_70;
  return "https://www.google.com/s2/favicons?domain=".concat(e, "&sz=32");   // tail call
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=163B file=dil_widgets/src/widgets/FaviconURLResolver
// args: require, module, exports
// locals: o, e, s, t
function {
  e = function e;
  s = function s;
  t = function t;
  let o;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.GOOGLE_FAVICON_URL_PATTERN = undefined;
  exports.setFaviconURLResolver = undefined;
  exports.resolveFaviconURL = undefined;
  exports.resolveGoogleFaviconURL = undefined;
  exports.GOOGLE_FAVICON_URL_PATTERN = new RegExp("^https:\\/\\/www\\.google\\.com\\/s2\\/favicons(?:[?#][\\s\\S]*)?(?![\\s\\S])");
  o = t;
  exports.setFaviconURLResolver = e;
  exports.resolveFaviconURL = s;
  exports.resolveGoogleFaviconURL = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/FaviconURLResolver
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
