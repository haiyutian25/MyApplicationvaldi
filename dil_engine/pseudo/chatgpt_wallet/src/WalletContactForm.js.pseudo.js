// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=chatgpt_wallet/src/WalletContactForm
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Dialog = 1;
  e[1] = "Dialog";
  e.NativeAlert = 2;
  e[2] = "NativeAlert";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=31B file=chatgpt_wallet/src/WalletContactForm
// args: e
function {
  e.KeepEditing = "keep-editing";
  e.Refresh = "refresh";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=136B file=chatgpt_wallet/src/WalletContactForm
// args: e
function {
  e.Name = "name";
  e.Email = "email";
  e.Phone = "phone";
  e.Street = "street";
  e.Apartment = "apartment";
  e.City = "city";
  e.Region = "region";
  e.PostalCode = "postal-code";
  e.Country = "country";
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=377B file=chatgpt_wallet/src/WalletContactForm
// locals: e, t
// closure: this, T
function {
  if (!(!this.isBusy)) goto L_178;
  if (!((undefined === this.viewModel.onReload))) goto L_178;
  if (!(T.hasCompleteWalletContact(this.state))) goto L_178;
  let t;
  let e;
  if (((undefined === undefined))) goto L_105;
  e = <to_object>(undefined).refreshConfirmation;
  t = {};
  <to_object>(undefined);
  {refreshConfirmation: null};
  goto L_12c;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_cf;
  // [栈深重同步 1 -> 0]
  this.viewModel.onSubmit(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=702B file=chatgpt_wallet/src/WalletContactForm
// closure: this, Y, T, X
function {
  if (!(this.active)) goto L_2bd;
  if (!(!this.isBusy)) goto L_2bd;
  if (!((this.state.refreshConfirmation === Y.None))) goto L_2bd;
  if (!((undefined !== this.viewModel.onRefresh))) goto L_2bd;
  if (!(T.sameWalletContactInfo(this.savedValue, this.state))) goto L_1ce;
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  if (!(X.supportsNativeAndroidPlatformAlert())) goto L_26e;
  this.setState({refreshConfirmation: Y.NativeAlert});
  goto L_2bd;
  // [栈深重同步 1 -> 0]
  this.setState({refreshConfirmation: Y.Dialog});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=120B file=chatgpt_wallet/src/WalletContactForm
// closure: this, Y
function {
  if (!(this.active)) goto L_77;
  this.setState({refreshConfirmation: Y.None});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=356B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this, Y, U
function {
  if (!(this.active)) goto L_163;
  if (!((this.state.refreshConfirmation !== Y.None))) goto L_163;
  this.dismissRefresh();
  if (((e !== U.Refresh))) goto L_163;
  if ((this.isBusy)) goto L_163;
  if (!((this.viewModel.onRefresh == null))) goto L_160;
  this.viewModel.onRefresh;
  this.viewModel;
  goto L_163;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=10 cpool=4 bc=1260B file=chatgpt_wallet/src/WalletContactForm
// locals: this, this.active_func, new.target, arguments
// closure: T, Y, X, U, <class_fields_init>, _, G, z, Z, N
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
  null;
  this.viewModel.initialValue;
  this.state = {refreshConfirmation: Y.None};
  this.savedValue = this.viewModel.initialValue;
  this.active = true;
  if (!(_.Device.isAndroid())) goto L_1a2;
  this.isAndroid = !_.Device.isWeb();
  if (!(this.isAndroid)) goto L_1d9;
  goto L_1dc;
  // [栈深重同步 2 -> 1]
  this.platformStyles = z;
  {}[Z.Name] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Email] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Phone] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Street] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Apartment] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.City] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Region] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.PostalCode] = new N.ElementRef();
  new N.ElementRef();
  {}[Z.Country] = new N.ElementRef();
  new N.ElementRef();
  this.inputRefs = {};
  this.submit = function <atom:0>;
  this.requestRefresh = function <atom:0>;
  this.dismissRefresh = function <atom:0>;
  this.handleRefreshAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=382B file=chatgpt_wallet/src/WalletContactForm
// locals: e, this
// closure: T
function {
  this = this;
  let e;
  e = !T.sameWalletContactInfo(this.savedValue, this.viewModel.initialValue);
  this.savedValue = this.viewModel.initialValue;
  if (!(e)) goto L_17d;
  null;
  this.savedValue;
  this.setState({contactAddress: this.savedValue.contactAddress});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=15B file=chatgpt_wallet/src/WalletContactForm
// locals: this
function {
  this = this;
  this.active = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=141B file=chatgpt_wallet/src/WalletContactForm
// locals: this
function {
  this = this;
  if ((this.viewModel.isSaving)) goto L_8c;
  return this.viewModel.isRefreshing;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=38B file=chatgpt_wallet/src/WalletContactForm
// closure: this
function {
  this.renderForm();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=8 cpool=1 bc=1221B file=chatgpt_wallet/src/WalletContactForm
// locals: this
// closure: t, x, o, z, j, U, W, Y
function {
  this = this;
  t.beginComponent(x.ConfirmationDialog, o, undefined, undefined);
  t.setViewModelProperty("style", z.presentation);
  t.setViewModelProperty("title", j.default.walletContactRefreshTitle());
  t.setViewModelProperty("message", j.default.walletContactRefreshMessage());
  t.setViewModelProperty("actions", [{id: U.KeepEditing, title: j.default.walletContactKeepEditing(), role: W.ConfirmationDialogRole.Cancel}, {id: U.Refresh, title: j.default.walletContactRefresh(), role: W.ConfirmationDialogRole.Destructive}]);
  t.setViewModelProperty("isPresented", (this.state.refreshConfirmation === Y.Dialog));
  t.setViewModelProperty("onAction", this.handleRefreshAction);
  t.setViewModelProperty("onDismiss", this.dismissRefresh);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=319B file=chatgpt_wallet/src/WalletContactForm
// closure: t, WalletContactHeader, n, j, this
function {
  t.beginComponent(WalletContactHeader, n, undefined, undefined);
  t.setViewModelProperty("title", j.default.walletContactTitle());
  t.setViewModelProperty("onBack", this.viewModel.onBack);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=0 bc=607B file=chatgpt_wallet/src/WalletContactForm
// closure: t, O, l, this, E, V, j
function {
  t.beginComponent(O.Text, l, undefined, undefined);
  if (!(this.isAndroid)) goto L_107;
  goto L_14c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("typography", V.Typography.Subheadline);
  t.setViewModelProperty("tone", O.TextTone.Secondary);
  t.setViewModelProperty("value", j.default.walletContactDescription());
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({line1: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({line2: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({city: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({state: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({postalCode: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.changeAddress({country: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=463B file=chatgpt_wallet/src/WalletContactForm
// closure: t, O, p, V, this
function {
  t.beginComponent(O.Text, p, undefined, undefined);
  t.setViewModelProperty("typography", V.Typography.Subheadline);
  t.setViewModelProperty("tone", O.TextTone.Danger);
  t.setViewModelProperty("value", this.viewModel.errorMessage);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=547B file=chatgpt_wallet/src/WalletContactForm
// closure: t, I, c, j, this
function {
  t.beginComponent(I.Button, c, undefined, undefined);
  t.setViewModelProperty("label", j.default.walletContactReload());
  t.setViewModelProperty("variant", I.ButtonVariant.Secondary);
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("onPress", this.viewModel.onReload);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=628B file=chatgpt_wallet/src/WalletContactForm
// closure: t, I, u, j, z, this
function {
  t.beginComponent(I.Button, u, undefined, undefined);
  t.setViewModelProperty("label", j.default.walletCancel());
  t.setViewModelProperty("variant", I.ButtonVariant.Ghost);
  t.setViewModelProperty("style", z.button);
  t.setViewModelProperty("labelStyle", z.buttonLabel);
  t.setViewModelProperty("onPress", this.viewModel.onBack);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=20 cpool=11 bc=3985B file=chatgpt_wallet/src/WalletContactForm
// closure: t, O, l, this, E, V, j, p, I, c, u, z, s, WalletAddressIntro, a, d, Z, q, h, T
function {
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", z.content);
  if (!(this.viewModel.isEditing)) goto L_11b;
  t.beginComponent(WalletAddressIntro, a, undefined, undefined);
  goto L_11e;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", z.fields);
  if (!(this.viewModel.isRefreshing)) goto L_20e;
  goto L_20f;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 1);
  this.renderMissingContactFields();
  if (!((this.state.contactAddress == null))) goto L_312;
  this.state.contactAddress;
  goto L_333;
  if (!((undefined.line1 == null))) goto L_339;
  undefined.line1;
  this.renderInput(Z.Street, j.default.walletContactStreet(), "", function <atom:0>, q.TextInputType.Text, "streetAddressLine1");
  if (!((this.state.contactAddress == null))) goto L_462;
  this.state.contactAddress;
  goto L_483;
  if (!((undefined.line2 == null))) goto L_489;
  undefined.line2;
  this.renderInput(Z.Apartment, j.default.walletContactApartment(), "", function <atom:0>, q.TextInputType.Text, "streetAddressLine2");
  if (!((this.state.contactAddress == null))) goto L_5b2;
  this.state.contactAddress;
  goto L_5d3;
  if (!((undefined.city == null))) goto L_5d9;
  undefined.city;
  this.renderInput(Z.City, j.default.walletContactCity(), "", function <atom:0>, q.TextInputType.Text, "addressCity");
  if (!((this.state.contactAddress == null))) goto L_702;
  this.state.contactAddress;
  goto L_723;
  if (!((undefined.state == null))) goto L_729;
  undefined.state;
  this.renderInput(Z.Region, j.default.walletContactRegion(), "", function <atom:0>, q.TextInputType.Text, "addressState");
  if (!((this.state.contactAddress == null))) goto L_852;
  this.state.contactAddress;
  goto L_873;
  if (!((undefined.postalCode == null))) goto L_879;
  undefined.postalCode;
  this.renderInput(Z.PostalCode, j.default.walletContactPostalCode(), "", function <atom:0>, q.TextInputType.Text, "postalCode");
  if (!((this.state.contactAddress == null))) goto L_9a2;
  this.state.contactAddress;
  goto L_9c3;
  if (!((undefined.country == null))) goto L_9c9;
  undefined.country;
  this.renderInput(Z.Country, j.default.walletContactCountry(), "", function <atom:0>, q.TextInputType.Text, "countryName");
  t.endRender();
  if (((undefined === this.viewModel.errorMessage))) goto L_a8d;
  function <atom:0>();
  if (((undefined === this.viewModel.onReload))) goto L_ada;
  function <atom:0>();
  t.beginComponent(I.Button, h, undefined, undefined);
  if (!(this.viewModel.isEditing)) goto L_ba1;
  goto L_ba6;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "wallet.contact.continue");
  if (!(this.viewModel.isEditing)) goto L_c62;
  goto L_caa;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("label", j.default.walletContactContinue());
  t.setViewModelProperty("style", z.button);
  t.setViewModelProperty("labelStyle", z.buttonLabel);
  t.setViewModelProperty("loading", this.viewModel.isSaving);
  if ((this.isBusy)) goto L_ea3;
  if (((undefined !== this.viewModel.onReload))) goto L_ea3;
  t.setViewModelProperty("disabled", !T.hasCompleteWalletContact(this.state));
  t.setViewModelProperty("onPress", this.submit);
  t.endComponent();
  if (!(this.viewModel.isEditing)) goto L_f68;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=24 cpool=2 bc=708B file=chatgpt_wallet/src/WalletContactForm
// locals: this
// closure: t, WalletContactHeader, n, j, O, l, E, V, p, I, c, u, z, s, WalletAddressIntro, a, d, Z, q, h, T, i, K, r
function {
  this = this;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", z.root);
  if ((this.viewModel.isEditing)) goto L_c9;
  function <atom:0>();
  t.beginComponent(K.RefreshControl, r, undefined, undefined);
  t.setViewModelProperty("allowContentOverflow", this.viewModel.isEditing);
  t.setViewModelProperty("refreshing", this.viewModel.isRefreshing);
  t.setViewModelProperty("onRefresh", this.requestRefresh);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.setState({name: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.setState({email: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=44B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this
function {
  return this.setState({phone: e});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=3 bc=1292B file=chatgpt_wallet/src/WalletContactForm
// locals: this
// closure: Z, j, q
function {
  this = this;
  if ((this.viewModel.initialValue.name.trim())) goto L_1af;
  this.renderInput(Z.Name, j.default.walletContactName(), this.state.name, function <atom:0>, q.TextInputType.Text, "name");
  if ((this.viewModel.initialValue.email.trim())) goto L_35d;
  this.renderInput(Z.Email, j.default.walletContactEmail(), this.state.email, function <atom:0>, q.TextInputType.Email, "email");
  if ((this.viewModel.initialValue.phone.trim())) goto L_50b;
  this.renderInput(Z.Phone, j.default.walletContactPhone(), this.state.phone, function <atom:0>, q.TextInputType.Tel, "phoneNumber");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=42B file=chatgpt_wallet/src/WalletContactForm
// args: e
// closure: this, n
function {
  if ((this.isBusy)) goto L_29;
  n(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=40B file=chatgpt_wallet/src/WalletContactForm
// args: e
function {
  return (undefined !== e.single());
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=300B file=chatgpt_wallet/src/WalletContactForm
// args: e
// locals: t, o
// closure: this, n, a
function {
  let o;
  let t;
  if (!(this.isBusy)) goto L_2b;
  return;
  n(e);
  t = Object.values(this.inputRefs);
  o = t.slice((t.indexOf(a) + 1)).find(function <atom:0>);
  if (!((o == null))) goto L_100;
  o;
  goto L_12b;
  undefined.setAttribute("focused", true);
  return;
}

// fn <atom:0>  args=6 vars=9 closure=11 cpool=2 bc=1870B file=chatgpt_wallet/src/WalletContactForm
// args: e, o, i, n, r, s
// locals: a, l, this
// closure: Z, t, y, z, O, m, E, w, q, v, B
function {
  this = this;
  let l;
  let a;
  a = this.inputRefs[e];
  l = (e === Z.Country);
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", z.fieldGroup);
  if (!(this.viewModel.isEditing)) goto L_2c5;
  t.beginComponent(O.Text, m, undefined, undefined);
  t.setViewModelProperty("typography", E.resolveSettingsTheme().typography.Description);
  t.setViewModelProperty("tone", O.TextTone.Secondary);
  t.setViewModelProperty("value", o);
  t.endComponent();
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", this.platformStyles.field);
  t.beginComponent(q.TextInput, v, undefined, undefined);
  t.setViewModelProperty("accessibilityId", "wallet.contact.".concat(e));
  t.setViewModelProperty("accessibilityLabel", o);
  t.setViewModelProperty("placeholder", o);
  t.setViewModelProperty("value", i);
  t.setViewModelProperty("variant", q.TextInputVariant.Settings);
  t.setViewModelProperty("inputType", r);
  t.setViewModelProperty("contentType", B.contactAutofillContentType(s));
  t.setViewModelProperty("inputRef", a);
  t.setViewModelProperty("closesWhenReturnKeyPressed", l);
  if (!(l)) goto L_620;
  goto L_625;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("returnKeyText", "next");
  t.setViewModelProperty("disabled", this.isBusy);
  t.setViewModelProperty("onChange", function <atom:0>);
  t.setViewModelProperty("onSubmit", function <atom:0>);
  t.endComponent();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=125B file=chatgpt_wallet/src/WalletContactForm
// args: e
// locals: this
function {
  this = this;
  null;
  this.state.contactAddress;
  null;
  e;
  this.setState({contactAddress: {}});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=481B file=chatgpt_wallet/src/WalletContactForm
// closure: F, j, U
function {
  return F.platformAlert.present({title: j.default.walletContactRefreshTitle(), message: j.default.walletContactRefreshMessage(), actions: [{id: U.KeepEditing, title: j.default.walletContactKeepEditing(), role: 1}, {id: U.Refresh, title: j.default.walletContactRefresh(), role: 2}]});   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=1 bc=569B file=chatgpt_wallet/src/WalletContactForm
// locals: t, this
// closure: F, j, U, L, e, Y
function {
  this = this;
  let t;
  t = undefined;
  try { // catch -> L_80
  t = (await L.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  (await L.withLocalNativeRefs(this.renderer.contextId, function <atom:0>));
  <?>;
  goto L_1c6;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_1c5
  if (!(e.isLoggingEnabled)) goto L_dc;
  console.warn("Unable to present native Wallet refresh confirmation");
  if (!(this.active)) goto L_1c1;
  if (!((this.state.refreshConfirmation === Y.NativeAlert))) goto L_1c1;
  this.setState({refreshConfirmation: Y.Dialog});
  return undefined; // async
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!((t.selectedActionId == null))) goto L_233;
  t.selectedActionId;
  this.handleRefreshAction(U.KeepEditing);
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=11 cpool=0 bc=1359B file=chatgpt_wallet/src/WalletContactForm
// locals: e
// closure: _, t, f, z, O, g, S, V, j, C, E
function {
  let e;
  if (!(_.Device.isAndroid())) goto L_98;
  e = !_.Device.isWeb();
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", z.intro);
  t.beginComponent(O.Text, g, undefined, undefined);
  if (!(e)) goto L_201;
  goto L_246;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("typography", V.Typography.Title2);
  t.setViewModelProperty("value", j.default.walletAddress());
  t.endComponent();
  t.beginComponent(O.Text, C, undefined, undefined);
  if (!(e)) goto L_3cf;
  goto L_414;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("typography", V.Typography.Subheadline);
  t.setViewModelProperty("tone", O.TextTone.Secondary);
  t.setViewModelProperty("value", j.default.walletAddressDescription());
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletContactForm
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

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=835B file=chatgpt_wallet/src/WalletContactForm
// closure: t, M, o, k, P, j, e, R, this
function {
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", o.back);
  t.beginComponent(k.IconButton, P, undefined, undefined);
  t.setViewModelProperty("accessibilityLabel", j.default.walletBack());
  if (!(e)) goto L_1b8;
  goto L_1fd;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", R.default.chevronLeft);
  t.setViewModelProperty("flipOnRtl", true);
  t.setViewModelProperty("style", o.backButton);
  t.setViewModelProperty("onPress", this.viewModel.onBack);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=14 cpool=1 bc=874B file=chatgpt_wallet/src/WalletContactForm
// locals: e, o, this
// closure: t, M, k, P, j, R, _, G, z, b, O, A, S, V
function {
  this = this;
  let o;
  let e;
  if (!(_.Device.isAndroid())) goto L_9d;
  e = !_.Device.isWeb();
  if (!(e)) goto L_a8;
  goto L_ab;
  // [栈深重同步 1 -> 0]
  o = z;
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", o.header);
  if (((undefined === this.viewModel.onBack))) goto L_175;
  function <atom:0>();
  t.beginComponent(O.Text, A, undefined, undefined);
  if (!(e)) goto L_261;
  goto L_2a6;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("typography", V.Typography.Headline);
  t.setViewModelProperty("value", this.viewModel.title);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=chatgpt_wallet/src/WalletContactForm
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

// fn <atom:0>  args=3 vars=63 closure=0 cpool=17 bc=4937B file=chatgpt_wallet/src/WalletContactForm
// args: require, module, exports
// locals: e, t, o, i, n, r, s, a, l, d, p, c, h, u, y, m, w, v, f, g, C, b, M, P, A, R, T, S, V, I, x, k, O, B, E, q, D, W, _, N, L, H, F, K, X, j, Y, U, Z, WalletContactForm, <class_fields_init>, WalletContactForm#1, WalletAddressIntro, <class_fields_init>#1, WalletAddressIntro#1, WalletContactHeader, <class_fields_init>#2, WalletContactHeader#1, z, G
function {
  let G;
  let z;
  let WalletContactHeader#1;
  let WalletAddressIntro#1;
  let WalletContactForm#1;
  let j;
  let X;
  let K;
  let F;
  let H;
  let L;
  let N;
  let _;
  let W;
  let D;
  let q;
  let E;
  let B;
  let O;
  let k;
  let x;
  let I;
  let V;
  let S;
  let T;
  let R;
  let A;
  let P;
  let M;
  let b;
  let C;
  let g;
  let f;
  let v;
  let w;
  let m;
  let y;
  let u;
  let h;
  let c;
  let p;
  let d;
  let l;
  let a;
  let s;
  let r;
  let n;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WalletContactForm = undefined;
  exports.WalletAddressIntro = undefined;
  exports.WalletContactHeader = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  o = t.makeComponentPrototype(undefined, "qEnF1EAnEUqudd1Q");
  i = t.makeNodePrototype("view", undefined, "v-_Bqv7g-EKDr5un");
  n = t.makeComponentPrototype(undefined, "CekEGcvIgMpbFrMf");
  r = t.makeComponentPrototype(["accessibilityId", "wallet.contact.scroll"], "s5YuCTH9q17m9Ewr");
  s = t.makeNodePrototype("layout", undefined, "qRl93lA6WFbIguD1");
  a = t.makeComponentPrototype(undefined, "rtPFTAhiOBc2tRl-");
  l = t.makeComponentPrototype(["numberOfLines", 0], "3sqlWIJvTKLoXbfm");
  d = t.makeNodePrototype("view", undefined, "dwhC_k6ViFXqYZO0");
  p = t.makeComponentPrototype(["numberOfLines", 0], "SB-pXQfXSW5hTaz7");
  c = t.makeComponentPrototype(undefined, "CXv02oRv5EoYx9Y0");
  h = t.makeComponentPrototype(undefined, "hFI1oOf8VC5TcsbB");
  u = t.makeComponentPrototype(["accessibilityId", "wallet.contact.cancel"], "n2y8uLYzWe8lD8Cm");
  y = t.makeNodePrototype("layout", undefined, "nd_QVBDxxNYTtXI0");
  m = t.makeComponentPrototype(["numberOfLines", 0], "UKO2JZRLNgrdtdRt");
  w = t.makeNodePrototype("view", undefined, "kkkrrcIZILzCvKhY");
  v = t.makeComponentPrototype(undefined, "E5aj3ckV-8aW3co-");
  f = t.makeNodePrototype("layout", undefined, "XwInUC_5mn44uksq");
  g = t.makeComponentPrototype(["numberOfLines", 0], "_PAbc6DjcDQeZgL2");
  C = t.makeComponentPrototype(["numberOfLines", 0], "EmSklXcE1OYjGAWF");
  b = t.makeNodePrototype("layout", undefined, "DrtHR6uqgc1ipu6P");
  M = t.makeNodePrototype("layout", undefined, "1XgCk2LiKwoed29r");
  P = t.makeComponentPrototype(["accessibilityId", "wallet.contact.back"], "Z6jYMeD_WhwZsvZP");
  A = t.makeComponentPrototype(["numberOfLines", 0], "SeOszbqi5TaRWVue");
  R = require("dil_icon_assets/res");
  T = require("chatgpt_wallet_core/src/WalletContactInfo");
  S = require("oai_core/src/OAITokens");
  V = require("oai_core/src/OAITypography");
  I = require("oai_ui/src/components/Button");
  x = require("oai_ui/src/components/ConfirmationDialog");
  k = require("oai_ui/src/components/IconButton");
  O = require("oai_ui/src/components/Text");
  B = require("oai_ui/src/TextInputCapabilities");
  E = require("oai_ui/src/components/settings/SettingsTheme");
  q = require("oai_ui/src/components/TextInput");
  D = require("valdi_core/src/Component");
  W = require("valdi_core/src/ConfirmationDialog");
  _ = require("valdi_core/src/Device");
  N = require("valdi_core/src/ElementRef");
  L = require("valdi_core/src/NativeReferences");
  H = require("valdi_core/src/Style");
  F = require("valdi_platform_alert/src/PlatformAlert");
  K = require("valdi_ui/src/components/RefreshControl");
  X = require("valdi_ui/src/Platform");
  j = require("./Strings");
  if ((Y)) goto L_6c2;
  Y = {};
  !function <atom:0>({});
  if ((U)) goto L_6d0;
  U = {};
  function <atom:0>({});
  if ((Z)) goto L_6dd;
  Z = {};
  function <atom:0>({});
  let WalletContactForm;
  let <class_fields_init>;
  class WalletContactForm extends D.StatefulComponent { ... }
  <proto:WalletContactForm>.onViewModelUpdate = function <atom:0>;
  <proto:WalletContactForm>.onDestroy = function <atom:0>;
  <proto:WalletContactForm>.isBusy = function <atom:0>;
  <proto:WalletContactForm>.onRender = function <atom:0>;
  <proto:WalletContactForm>.renderForm = function <atom:0>;
  <proto:WalletContactForm>.renderMissingContactFields = function <atom:0>;
  <proto:WalletContactForm>.renderInput = function <atom:0>;
  <proto:WalletContactForm>.changeAddress = function <atom:0>;
  <proto:WalletContactForm>.presentNativeRefreshConfirmation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:WalletContactForm>;
  WalletContactForm = function <atom:0>;
  // close_loc <class_fields_init>
  WalletContactForm#1 = function <atom:0>;
  exports.WalletContactForm = WalletContactForm#1;
  let WalletAddressIntro;
  let <class_fields_init>#1;
  class WalletAddressIntro extends D.Component { ... }
  <proto:WalletAddressIntro>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:WalletAddressIntro>;
  WalletAddressIntro = function <atom:0>;
  // close_loc <class_fields_init>#1
  WalletAddressIntro#1 = function <atom:0>;
  exports.WalletAddressIntro = WalletAddressIntro#1;
  let WalletContactHeader;
  let <class_fields_init>#2;
  class WalletContactHeader extends D.Component { ... }
  <proto:WalletContactHeader>.onRender = function <atom:0>;
  <class_fields_init>#2 = undefined;
  <proto:WalletContactHeader>;
  WalletContactHeader = function <atom:0>;
  // close_loc <class_fields_init>#2
  WalletContactHeader#1 = function <atom:0>;
  exports.WalletContactHeader = WalletContactHeader#1;
  null;
  V.resolveOAITypography(V.Typography.BodyMedium, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined});
  z = {presentation: new H.Style({width: "100%", height: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0}), root: new H.Style({width: "100%", height: "100%", backgroundColor: S.OAIColor.BgCanvas, accessibilityId: "wallet.contact.form"}), header: new H.Style({width: "100%", minHeight: 64, justifyContent: "center", alignItems: "center", paddingLeft: 72, paddingRight: 72}), back: new H.Style({position: "absolute", left: S.OAISpacing.Three, top: S.OAISpacing.OneAndHalf}), backButton: new H.Style({width: 44, height: 44, backgroundColor: S.OAIColor.BgSecondary, borderRadius: S.OAIRadius.Pill}), content: new H.Style({width: "100%", padding: S.OAISpacing.Three, gap: S.OAISpacing.Three}), intro: new H.Style({width: "100%", gap: S.OAISpacing.Three}), fields: new H.Style({width: "100%", gap: S.OAISpacing.One, limitToViewport: false}), fieldGroup: new H.Style({width: "100%", gap: S.OAISpacing.Half}), field: new H.Style({width: "100%", minHeight: 56, paddingTop: S.OAISpacing.Half, paddingBottom: S.OAISpacing.Half, justifyContent: "center", borderRadius: S.OAIRadius.Lg, borderWidth: 1, borderColor: S.OAIColor.BorderDefault}), button: new H.Style({width: "100%", minHeight: 54, height: "auto", paddingTop: S.OAISpacing.OneAndHalf, paddingBottom: S.OAISpacing.OneAndHalf}), buttonLabel: new H.Style({numberOfLines: 0})};
  null;
  z;
  G = {header: z.header.extend({alignItems: "flex-start", paddingLeft: 72, paddingRight: S.OAISpacing.Three}), back: z.back.extend({left: S.OAISpacing.Two, top: S.OAISpacing.One}), backButton: z.backButton.extend({width: 48, height: 48, backgroundColor: S.OAIColor.Transparent}), field: z.field.extend({backgroundColor: S.OAIColor.BgLayer3, borderWidth: 0, paddingTop: 0, paddingBottom: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_wallet/src/WalletContactForm
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
