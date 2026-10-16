// fn i  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: t
// closure: e
function {
  return e.test(t);   // tail call
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: e
// closure: t
function {
  return t.test(e);   // tail call
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: e
// closure: r
function {
  return r.test(e);   // tail call
}

// fn u  args=1 vars=1 closure=1 cpool=0 bc=42B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: e
// closure: a
function {
  return !a.test(e);
}

// fn d  args=1 vars=1 closure=1 cpool=0 bc=40B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: e
// closure: n
function {
  return n.test(e);   // tail call
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=235B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: e
// closure: a
function {
  if (!(e.startsWith("/"))) goto L_ea;
  if (!(!e.startsWith("//"))) goto L_ea;
  if (!(!e.includes("\"))) goto L_ea;
  if (!(!e.includes("://"))) goto L_ea;
  return !a.test(e);
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=16 bc=263B file=oai_authentication_session/src/OAIAuthenticationValidation
// args: require, module, exports
// locals: e, t, i, s, r, a, n, o, u, d, c
function {
  i = function i;
  s = function s;
  o = function o;
  u = function u;
  d = function d;
  c = function c;
  let n;
  let a;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isValidOAIBearerToken = undefined;
  exports.isValidOAIAccountIdentifier = undefined;
  exports.isValidHTTPHeaderName = undefined;
  exports.isValidHTTPHeaderValue = undefined;
  exports.isTrustedOAIAPIOrigin = undefined;
  exports.isSafeOriginRelativePath = undefined;
  e = new RegExp("^[a-z\\d._~+/=-]+$");
  t = new RegExp("^[a-z\\d._-]+$");
  exports.isValidOAIBearerToken = i;
  exports.isValidOAIAccountIdentifier = s;
  r = new RegExp("^[!#$%&'*+.^_`|~a-z0-9-]+$");
  a = new RegExp("[\\u0000-\\u001f\\u007f]");
  n = new RegExp("^https:\\/\\/(?:[a-z\\d-]+\\.)*(?:openai\\.com|chatgpt\\.com|openai-staging\\.com|chatgpt-staging\\.com)$");
  exports.isValidHTTPHeaderName = o;
  exports.isValidHTTPHeaderValue = u;
  exports.isTrustedOAIAPIOrigin = d;
  exports.isSafeOriginRelativePath = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_authentication_session/src/OAIAuthenticationValidation
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
