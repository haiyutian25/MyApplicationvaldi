// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=44B file=valdi_rxjs/src/firstValueFrom
// args: e
// closure: u, c
function {
  u(e);
  c.unsubscribe();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=86B file=valdi_rxjs/src/firstValueFrom
// closure: s, u, o, i, e
function {
  if (!(s)) goto L_2b;
  goto L_55;
  // [栈深重同步 1 -> 0]
  i(new e.EmptyError());
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=2 bc=118B file=valdi_rxjs/src/firstValueFrom
// args: u, i
// locals: c
// closure: s, o, e, r, t
function {
  let c;
  c = new r.SafeSubscriber({next: function <atom:0>, error: i, complete: function <atom:0>});
  t.subscribe(c);
  return;
}

// fn t  args=2 vars=3 closure=2 cpool=1 bc=24B file=valdi_rxjs/src/firstValueFrom
// args: t, o
// locals: s
// closure: e, r
function {
  let s;
  s = ("object" == typeof o);
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=1 bc=104B file=valdi_rxjs/src/firstValueFrom
// args: require, module, exports
// locals: e, r, t
function {
  t = function t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.firstValueFrom = undefined;
  e = require("./util/EmptyError");
  r = require("./Subscriber");
  exports.firstValueFrom = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/firstValueFrom
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
