// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_navigation/src/NavigationPage
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=363B file=valdi_navigation/src/NavigationPage
// locals: r, t, n
// closure: e, o, t
function {
  let r;
  r = e.exports;
  let t;
  for (const t of r) {
    let n;
    n = r[t];
    if (((o === n))) goto L_b8;
    if (!(Object.prototype.isPrototypeOf.call(o, n))) continue;
    return "".concat(t, "@", e.path);   // tail call
  }
  <catch>;
  throw new Error("Could not resolve componentPath of ctor '".concat(t.name, "'"));
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=182B file=valdi_navigation/src/NavigationPage
// args: t
// locals: o, <class_fields_init>
// closure: e
function {
  let o;
  let <class_fields_init>;
  class o extends t { ... }
  <class_fields_init> = undefined;
  <proto:o>;
  // close_loc <class_fields_init>
  o = function <atom:0>;
  Object.defineProperty(o, "componentPath", {enumerable: false, get: function <atom:0>});
  Object.defineProperty(o, "name", {value: t.name});
  return o;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=1 bc=3B file=valdi_navigation/src/NavigationPage
// args: e
function {
  return function <atom:0>;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=1 bc=92B file=valdi_navigation/src/NavigationPage
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NavigationPage = undefined;
  e = function <atom:0>;
  exports.NavigationPage = e;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_navigation/src/NavigationPage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
