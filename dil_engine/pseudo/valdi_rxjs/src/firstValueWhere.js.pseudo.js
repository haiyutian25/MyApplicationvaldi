// fn i  args=3 vars=3 closure=3 cpool=0 bc=272B file=valdi_rxjs/src/firstValueWhere
// args: i, o, u
// closure: r, e, t
function {
  if (!((undefined !== u))) goto L_9f;
  return r.firstValueFrom(i.pipe(e.filter(o), t.timeout(u)));
  return r.firstValueFrom(i.pipe(e.filter(o)));
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=1 bc=115B file=valdi_rxjs/src/firstValueWhere
// args: require, module, exports
// locals: e, r, t, i
function {
  i = function i;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.firstValueWhere = undefined;
  e = require("./operators/filter");
  r = require("./firstValueFrom");
  t = require("./operators/timeout");
  exports.firstValueWhere = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/firstValueWhere
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
