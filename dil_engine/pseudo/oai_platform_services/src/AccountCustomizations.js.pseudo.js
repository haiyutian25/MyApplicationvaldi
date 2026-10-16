// fn s  args=1 vars=1 closure=1 cpool=0 bc=82B file=oai_platform_services/src/AccountCustomizations
// args: t
// closure: o
function {
  if (!((undefined !== t))) goto L_51;
  if (!(o.isVersionAtLeast(30))) goto L_51;
  return t.accountCustomizationsService;
  return;
}

// fn i  args=1 vars=2 closure=2 cpool=0 bc=139B file=oai_platform_services/src/AccountCustomizations
// args: e
// locals: o
// closure: o, t
function {
  if (!(o.isVersionAtLeast(30))) goto L_7c;
  let o;
  o = e;
  return t.convertBridgeObservableToObservable(o.observeCustomizations());   // tail call
  throw new Error("Account customizations are unavailable");
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=212B file=oai_platform_services/src/AccountCustomizations
// args: t, e
// closure: o
function {
  if (!(o.isVersionAtLeast(53))) goto L_9d;
  return t.updateCustomization({field: e.field, value: e.value});   // tail call
  return Promise.reject(new Error("Account customization updates are unavailable"));   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=87B file=oai_platform_services/src/AccountCustomizations
// args: <atom:0>
// locals: t, o
function {
  t = <to_object>(<atom:0>).field;
  o = <to_object>(<atom:0>).value;
  <to_object>(<atom:0>);
  return {field: t, value: o};
}

// fn n  args=3 vars=3 closure=1 cpool=1 bc=214B file=oai_platform_services/src/AccountCustomizations
// args: t, e, s
// closure: o
function {
  if (!(o.isVersionAtLeast(74))) goto L_9f;
  return t.updateCustomizations(e.map(function <atom:0>), Array.from(s));   // tail call
  return Promise.reject(new Error("Atomic account customization updates are unavailable"));   // tail call
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=136B file=oai_platform_services/src/AccountCustomizations
// args: t, e
// closure: o
function {
  if (!(o.isVersionAtLeast(74))) goto L_50;
  return t.setCustomizationsEnabled(e);
  return Promise.reject(new Error("Account customization activation is unavailable"));
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=135B file=oai_platform_services/src/AccountCustomizations
// args: t
// closure: o
function {
  if (!(o.isVersionAtLeast(74))) goto L_4f;
  return t.refresh();
  return Promise.reject(new Error("Account customization refresh is unavailable"));
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=oai_platform_services/src/AccountCustomizations
// args: t
function {
  t.CustomInstructions = 0;
  t[0] = "CustomInstructions";
  t.AboutYou = 1;
  t[1] = "AboutYou";
  t.Name = 2;
  t[2] = "Name";
  t.Occupation = 3;
  t[3] = "Occupation";
  t.PersonalityType = 4;
  t[4] = "PersonalityType";
  return;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=273B file=oai_platform_services/src/AccountCustomizations
// args: require, module, exports
// locals: t, o, e, s, i, r, n, u, a
function {
  s = function s;
  i = function i;
  r = function r;
  n = function n;
  u = function u;
  a = function a;
  let o;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AccountCustomizationField = undefined;
  exports.accountCustomizationsFor = undefined;
  exports.observeAccountCustomizations = undefined;
  exports.updateAccountCustomization = undefined;
  exports.updateAccountCustomizations = undefined;
  exports.setAccountCustomizationsEnabled = undefined;
  exports.refreshAccountCustomizations = undefined;
  t = require("bridge_observables/src/utils/convertBridgeObservableToObservable");
  o = require("valdi_core/src/CompilerIntrinsics");
  if ((e)) goto L_c6;
  e = {};
  exports.AccountCustomizationField = {};
  !function <atom:0>({});
  exports.accountCustomizationsFor = s;
  exports.observeAccountCustomizations = i;
  exports.updateAccountCustomization = r;
  exports.updateAccountCustomizations = n;
  exports.setAccountCustomizationsEnabled = u;
  exports.refreshAccountCustomizations = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_platform_services/src/AccountCustomizations
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
