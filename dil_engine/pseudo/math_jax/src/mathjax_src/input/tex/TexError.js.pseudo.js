// fn <atom:0>  args=2 vars=6 closure=1 cpool=6 bc=627B file=math_jax/src/mathjax_src/input/tex/TexError
// args: r, t
// locals: e, s, o, r#1
// closure: TexError
function {
  let e;
  e = r.split(TexError.pattern);
  let o;
  let s;
  s = 1;
  o = e.length;
  if (!((s < o))) goto L_24b;
  let r#1;
  r#1 = e[s].charAt(0);
  if (!((r#1 >= "0"))) goto L_10b;
  if (!((r#1 <= "9"))) goto L_10b;
  e[s] = t[(parseInt(e[s], 10) - 1)];
  if (!(("number" == typeof e[s]))) goto L_107;
  e[s] = e[s].toString();
  e[s].toString();
  goto L_23e;
  if (!(("{" === r#1))) goto L_23e;
  r#1 = e[s].substring(1);
  e[s].substring(1);
  if (!((r#1 >= "0"))) goto L_1f3;
  if (!((r#1 <= "9"))) goto L_1f3;
  e[s] = t[(parseInt(e[s].substring(1, (e[s].length - 1)), 10) - 1)];
  if (!(("number" == typeof e[s]))) goto L_1f0;
  e[s] = e[s].toString();
  e[s].toString();
  goto L_23e;
  if (!(e[s].match(new RegExp("^\\{([a-z]+):%(\\d+)\\|(.*)\\}$")))) goto L_23d;
  e[s] = ("%" + e[s]);
  ("%" + e[s]);
  s = (s + 2);
  (s + 2);
  goto L_5a;
  return e.join("");   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=0 bc=82B file=math_jax/src/mathjax_src/input/tex/TexError
// args: r, t, e
// locals: this
// closure: <class_fields_init>, TexError
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  e = ...2;
  this.id = r;
  this.message = TexError.processString(t, e);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=126B file=math_jax/src/mathjax_src/input/tex/TexError
// args: require, module, exports
// locals: TexError, <class_fields_init>, TexError#1
function {
  let TexError#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  let TexError;
  let <class_fields_init>;
  class TexError extends undefined { ... }
  function <atom:0>.processString = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TexError>;
  TexError = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc TexError
  TexError#1 = function <atom:0>;
  TexError#1.pattern = new RegExp("%(\\d+|\\{\\d+\\}|\\{[a-z]+:%\\d+(?:\\|(?:%\\{\\d+\\}|%.|[^}])*)+\\}|.)");
  exports.default = TexError#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/TexError
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
