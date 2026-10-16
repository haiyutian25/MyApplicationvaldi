// fn s  args=1 vars=1 closure=2 cpool=0 bc=77B file=dil_renderer/src/DILSourceEvaluator
// args: s
// closure: t, e
function {
  return t.hardenApiFacade(e.createDilJsxRuntime(s));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=120B file=dil_renderer/src/DILSourceEvaluator
// args: t
// locals: new.target
// closure: e
function {
  new.target = <special_object 3>;
  t = ...0;
  if (!((undefined === new.target))) goto L_3b;
  return new Date(e).toString();
  if (!((0 === t.length))) goto L_72;
  goto L_73;
  // [栈深重同步 4 -> 3]
  return Reflect.construct(Date, t, new.target);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=2B file=dil_renderer/src/DILSourceEvaluator
// closure: e
function {
  return e;
}

// fn r  args=1 vars=2 closure=0 cpool=2 bc=330B file=dil_renderer/src/DILSourceEvaluator
// args: e
// locals: t
function {
  let t;
  if (!((undefined === e))) goto L_e;
  return Date;
  t = function <atom:0>;
  Object.setPrototypeOf(t, Date);
  Object.defineProperty(t, "prototype", {value: Date.prototype});
  Object.defineProperty(t, "now", {configurable: false, enumerable: false, value: Object.freeze(function <atom:0>), writable: false});
  return Object.freeze(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e
function {
  return e.render(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e
function {
  return e.useAppData(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e
function {
  return e.useConstants(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  return e.useCallback(t, r, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=41B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  e.useEffect(t, r, s);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_renderer/src/DILSourceEvaluator
// closure: e, s
function {
  return e.useId(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e, s
function {
  return e.useDILMessenger(t, s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e, s
function {
  return e.useHtmlViewMessenger(t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  return e.useMemo(t, r, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  return e.useNow(t, r, s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e, s
function {
  return e.useRef(t, s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e, s
function {
  return e.useDictation(t, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=40B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  return e.useSpeechSynthesizer(t, r, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=101B file=dil_renderer/src/DILSourceEvaluator
// args: t, r
// closure: e, s
function {
  if (!((undefined === s))) goto L_60;
  if (!((r == null))) goto L_32;
  r;
  goto L_53;
  goto L_61;
  // [栈深重同步 4 -> 3]
  return e.useState(t, r, s);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_renderer/src/DILSourceEvaluator
// closure: e
function {
  return e.useTheme();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=dil_renderer/src/DILSourceEvaluator
// args: t
// closure: e
function {
  return e.useBreakpoint(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_renderer/src/DILSourceEvaluator
// closure: e
function {
  return e.useIsMobile();   // tail call
}

// fn u  args=2 vars=3 closure=1 cpool=17 bc=247B file=dil_renderer/src/DILSourceEvaluator
// args: e, s
// locals: r
// closure: t
function {
  let r;
  r = {render: function <atom:0>, useAppData: function <atom:0>, useConstants: function <atom:0>, useCallback: function <atom:0>, useEffect: function <atom:0>, useId: function <atom:0>, useDILMessenger: function <atom:0>, useHtmlViewMessenger: function <atom:0>, useMemo: function <atom:0>, useNow: function <atom:0>, useRef: function <atom:0>, useDictation: function <atom:0>, useSpeechSynthesizer: function <atom:0>, useState: function <atom:0>, useTheme: function <atom:0>, useBreakpoint: function <atom:0>, useIsMobile: function <atom:0>};
  return t.hardenApiFacade(r);   // tail call
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=3 bc=156B file=dil_renderer/src/DILSourceEvaluator
// args: require, module, exports
// locals: e, t, s, r, u
function {
  s = function s;
  r = function r;
  u = function u;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createDILJsxRuntimeFacade = undefined;
  exports.createDILDateConstructor = undefined;
  exports.createDILRuntimeApiFacade = undefined;
  e = require("./DILElement");
  t = require("./DILApiFacade");
  exports.createDILJsxRuntimeFacade = s;
  exports.createDILDateConstructor = r;
  exports.createDILRuntimeApiFacade = u;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/DILSourceEvaluator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
