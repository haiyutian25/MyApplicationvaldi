// fn a  args=3 vars=3 closure=5 cpool=0 bc=370B file=oai_web_launcher/src/openURL
// args: a, i, s
// closure: e, n, r, t, o
function {
  if (!((0 === e.hostnameFromUrl(i).length))) goto L_2c;
  return;
  if (!((s == null))) goto L_35;
  s;
  goto L_56;
  if (!((undefined.presentation == null))) goto L_7d;
  undefined.presentation;
  if (!((n.Platform === n.Embedded))) goto L_128;
  goto L_171;
  // [栈深重同步 1 -> 0]
  o.platformBrowser.openURL(i);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_web_launcher/src/openURL
// args: e
function {
  e.Platform = 0;
  e[0] = "Platform";
  e.Embedded = 1;
  e[1] = "Embedded";
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=164B file=oai_web_launcher/src/openURL
// args: require, module, exports
// locals: e, r, o, t, n, a
function {
  a = function a;
  let t;
  let o;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OpenURLPresentation = undefined;
  exports.openURL = undefined;
  e = require("coreutils/src/url");
  r = require("valdi_navigation/src/NavigationController");
  o = require("valdi_platform_browser/src/PlatformBrowser");
  t = require("./WebPage");
  if ((n)) goto L_94;
  n = {};
  exports.OpenURLPresentation = {};
  !function <atom:0>({});
  exports.openURL = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_web_launcher/src/openURL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
