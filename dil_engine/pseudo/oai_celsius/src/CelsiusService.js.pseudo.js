// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_celsius/src/CelsiusService
// args: e
function {
  e.Pending = 0;
  e[0] = "Pending";
  e.Ready = 1;
  e[1] = "Ready";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=oai_celsius/src/CelsiusService
// args: e
function {
  e.Live = 0;
  e[0] = "Live";
  e.Catchup = 1;
  e[1] = "Catchup";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=oai_celsius/src/CelsiusService
// args: e
function {
  e.Unavailable = 0;
  e[0] = "Unavailable";
  e.Transport = 1;
  e[1] = "Transport";
  e.Protocol = 2;
  e[2] = "Protocol";
  e.Unknown = 3;
  e[3] = "Unknown";
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=155B file=oai_celsius/src/CelsiusService
// args: require, module, exports
// locals: e, o, i
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CelsiusSubscriptionState = undefined;
  exports.CelsiusDelivery = undefined;
  exports.CelsiusFailureCode = undefined;
  if ((e)) goto L_6d;
  e = {};
  exports.CelsiusSubscriptionState = {};
  function <atom:0>({});
  if ((o)) goto L_83;
  o = {};
  exports.CelsiusDelivery = {};
  function <atom:0>({});
  if ((i)) goto L_99;
  i = {};
  exports.CelsiusFailureCode = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_celsius/src/CelsiusService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
