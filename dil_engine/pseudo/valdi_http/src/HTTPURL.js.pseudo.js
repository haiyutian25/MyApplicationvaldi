// fn e  args=2 vars=2 closure=0 cpool=0 bc=212B file=valdi_http/src/HTTPURL
// args: e, r
function {
  if (!((r.indexOf("://") >= 0))) goto L_30;
  return r;
  if (!(!e)) goto L_43;
  throw new Error("baseUrl should be specified when providing a relative path");
  if ((e.endsWith("/"))) goto L_79;
  e = (e + "/");
  (e + "/");
  if (!(r.startsWith("/"))) goto L_cf;
  r = r.substring(1);
  r.substring(1);
  return (e + r);
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=82B file=valdi_http/src/HTTPURL
// args: require, module, exports
// locals: e
function {
  e = function e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolveHTTPURL = undefined;
  exports.resolveHTTPURL = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_http/src/HTTPURL
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
