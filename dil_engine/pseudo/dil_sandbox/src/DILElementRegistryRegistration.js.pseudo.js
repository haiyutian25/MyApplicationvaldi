// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=70B file=dil_sandbox/src/DILElementRegistryRegistration
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.listener = e;
  this.nextRegistryId = 1;
  this.registrations = [];
  this.registeredRegistryByRegistry = new WeakMap();
  return;
}

// fn <atom:0>  args=1 vars=13 closure=1 cpool=0 bc=1189B file=dil_sandbox/src/DILElementRegistryRegistration
// args: t
// locals: r, i, s, o, n, d, y, r#1, i#1, g, g#1, this
// closure: e
function {
  this = this;
  let g#1;
  let d;
  let n;
  let o;
  let s;
  let i;
  let r;
  r = this.registeredRegistryByRegistry.get(t);
  if (!((undefined !== r))) goto L_6c;
  return r;
  this.nextRegistryId = <this.nextRegistryId_new>;
  i = (this.nextRegistryId++);
  s = [];
  o = [];
  n = [];
  d = undefined;
  let y;
  for (const y of Object.keys(t)) {
    let g;
    let i#1;
    let r#1;
    r#1 = t[y];
    if (((undefined === r#1))) continue;
    i#1 = s.length;
    if (!((y === e.TEXT_ELEMENT_TYPE))) goto L_131;
    d = i#1;
    i#1;
    s.push(r#1);
    o.push(y);
    if (!(("semanticKeyPropName" in r#1))) goto L_1e6;
    if (!(("string" == typeof r#1.semanticKeyPropName))) goto L_1e6;
    goto L_1e7;
    // [栈深重同步 4 -> 3]
    g = undefined;
    if (!((undefined === g))) goto L_27a;
    goto L_283;
    // [栈深重同步 7 -> 6]
    null;
    {semanticKeyPropName: g};
    if (!((undefined === r#1.childIdentitiesPropName))) goto L_2b3;
    goto L_2dd;
    // [栈深重同步 7 -> 6]
    null;
    {childIdentitiesPropName: r#1.childIdentitiesPropName};
    if (!((undefined === r#1.renderedPropNames))) goto L_30d;
    goto L_337;
    // [栈深重同步 7 -> 6]
    null;
    {renderedPropNames: r#1.renderedPropNames};
    n.push({typeId: i#1, type: y, childrenMode: r#1.childrenMode, primitiveTextProp: r#1.primitiveTextProp});
  }
  if (!((undefined === d))) goto L_3ac;
  throw new Error("DIL element registry is missing the required "".concat(e.TEXT_ELEMENT_TYPE, "" renderer."));
  g#1 = {id: i, renderers: s, textTypeId: d, types: o};
  this.registrations.push({registryId: i, elements: n});
  this.registeredRegistryByRegistry.set(t, g#1);
  this.listener(i, n);
  return g#1;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=125B file=dil_sandbox/src/DILElementRegistryRegistration
// args: e
// locals: t, this
function {
  this = this;
  let t;
  for (const t of this.registrations) {
    e(t.registryId, t.elements);
  }
  return;
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=3 bc=134B file=dil_sandbox/src/DILElementRegistryRegistration
// args: require, module, exports
// locals: e, DILElementRegistryRegistrationStore, <class_fields_init>, DILElementRegistryRegistrationStore#1
function {
  let DILElementRegistryRegistrationStore#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILElementRegistryRegistrationStore = undefined;
  e = require("dil_renderer/src/DILElement");
  let DILElementRegistryRegistrationStore;
  let <class_fields_init>;
  class DILElementRegistryRegistrationStore extends undefined { ... }
  <proto:DILElementRegistryRegistrationStore>.getOrRegister = function <atom:0>;
  <proto:DILElementRegistryRegistrationStore>.forEachRegistration = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILElementRegistryRegistrationStore>;
  DILElementRegistryRegistrationStore = function <atom:0>;
  // close_loc <class_fields_init>
  DILElementRegistryRegistrationStore#1 = function <atom:0>;
  exports.DILElementRegistryRegistrationStore = DILElementRegistryRegistrationStore#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_sandbox/src/DILElementRegistryRegistration
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
