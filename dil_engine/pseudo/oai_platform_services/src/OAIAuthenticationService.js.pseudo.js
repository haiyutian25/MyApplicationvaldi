// fn i  args=1 vars=1 closure=1 cpool=0 bc=84B file=oai_platform_services/src/OAIAuthenticationService
// args: t
// closure: e
function {
  if (!((undefined !== t))) goto L_53;
  if (!(e.isVersionAtLeast(14))) goto L_51;
  return t.authenticationService;
  return undefined;
  return;
}

// fn o  args=2 vars=2 closure=1 cpool=0 bc=103B file=oai_platform_services/src/OAIAuthenticationService
// args: t, i
// closure: e
function {
  if (!((undefined === i))) goto L_7;
  return t;
  if (!(e.isVersionAtLeast(14))) goto L_65;
  null;
  t;
  if (!((t.authenticationService == null))) goto L_5f;
  t.authenticationService;
  return {authenticationService: i};
  return t;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=218B file=oai_platform_services/src/OAIAuthenticationService
// args: e, i
// closure: t
function {
  if (!((i === t.OAIAuthenticationMethod.Browser))) goto L_6d;
  return e.browser;
  if (!((i === t.OAIAuthenticationMethod.Codex))) goto L_d9;
  return e.codex;
  i;
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=156B file=oai_platform_services/src/OAIAuthenticationService
// args: require, module, exports
// locals: t, e, i, o, r
function {
  i = function i;
  o = function o;
  r = function r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getAuthenticationService = undefined;
  exports.withAuthenticationService = undefined;
  exports.supportsAuthenticationMethod = undefined;
  t = require("oai_authentication/src/OAIAuthenticationService");
  e = require("valdi_core/src/CompilerIntrinsics");
  exports.getAuthenticationService = i;
  exports.withAuthenticationService = o;
  exports.supportsAuthenticationMethod = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/OAIAuthenticationService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
