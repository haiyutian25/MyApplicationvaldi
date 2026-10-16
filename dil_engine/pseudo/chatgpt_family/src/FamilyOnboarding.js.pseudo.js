// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_family/src/FamilyOnboarding
// args: e
function {
  e.Phone = 0;
  e[0] = "Phone";
  e.Code = 1;
  e[1] = "Code";
  e.Gmail = 2;
  e[2] = "Gmail";
  e.Messages = 3;
  e[3] = "Messages";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=chatgpt_family/src/FamilyOnboarding
// args: e
function {
  e.None = 0;
  e[0] = "None";
  e.Phone = 1;
  e[1] = "Phone";
  e.Code = 2;
  e[2] = "Code";
  e.Messages = 3;
  e[3] = "Messages";
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=393B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t
// closure: this, Ue
function {
  let t;
  if (((this.state.setupPage !== Ue.Code))) goto L_bb;
  if ((this.hasVerifiedNumber)) goto L_bb;
  if (!(this.isMessagingPending)) goto L_be;
  return;
  t = this.formatCodeInput(e);
  this.setState({code: t.text, codeSelection: [t.selectionStart, t.selectionEnd]});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=576B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t
// closure: this, Ue
function {
  let t;
  if (((this.state.setupPage !== Ue.Code))) goto L_bb;
  if ((this.hasVerifiedNumber)) goto L_bb;
  if (!(this.isMessagingPending)) goto L_be;
  return;
  t = this.formatCodeInput(e);
  if (!((t.selectionStart === this.state.codeSelection[0]))) goto L_1c3;
  if (((t.selectionEnd === this.state.codeSelection[1]))) goto L_23f;
  this.setState({codeSelection: [t.selectionStart, t.selectionEnd]});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=498B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  if ((!this.wasActive)) goto L_1f1;
  if ((this.isClosed)) goto L_1f1;
  if (((this.state.setupPage !== Ue.Code))) goto L_1f1;
  if ((this.hasVerifiedNumber)) goto L_1f1;
  if ((this.isMessagingPending)) goto L_1f1;
  if (!((this.codeInput.single() == null))) goto L_16c;
  this.codeInput.single();
  goto L_195;
  if ((!undefined.getAttribute("focused"))) goto L_1f1;
  this.setState({editingCode: true});
  this.keepSetupInputVisible();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=128B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  this.codeInput.setAttribute("focused", false);
  this.setState({editingCode: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=80B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  this.phoneInput.setAttribute("focused", false);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=358B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  if ((!this.wasActive)) goto L_165;
  if (((this.state.setupPage !== Ue.Code))) goto L_165;
  if ((this.hasVerifiedNumber)) goto L_165;
  if ((this.isMessagingPending)) goto L_165;
  this.codeInput.setAttribute("focused", true);
  this.keepSetupInputVisible();
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=4 bc=413B file=chatgpt_family/src/FamilyOnboarding
// args: t
// locals: i, o, e
// closure: e, r, s
function {
  let o;
  let i;
  if (!((t >= e.text.length))) goto L_32;
  return r.length;
  i = Math.max(0, (e.text.slice(0, t).replace(new RegExp("\\D"), "").length - s));
  if (!((0 === i))) goto L_137;
  if (!(r.startsWith("+"))) goto L_133;
  goto L_134;
  // [栈深重同步 4 -> 3]
  return Math.min(t, 0);   // tail call
  o = 0;
  let e;
  e = 0;
  if (!((e < r.length))) goto L_198;
  if (!(new RegExp("[0-9]").test(r[e]))) goto L_18e;
  o = (o ++);
  if (!(((o ++) === i))) goto L_18e;
  return (e + 1);
  e = <e_new>;
  (e++);
  goto L_13e;
  return r.length;
}

// fn <atom:0>  args=1 vars=8 closure=1 cpool=4 bc=1060B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, i, o, s, n, r, a
// closure: this
function {
  let a;
  let r;
  let n;
  let s;
  let o;
  let i;
  let t;
  t = e.text.trimStart();
  i = t.replace(new RegExp("[^0-9]"), "");
  if ((t.startsWith("+1"))) goto L_153;
  if (!(!t.startsWith("+"))) goto L_153;
  if (!(!t.startsWith("("))) goto L_153;
  if (!((11 === i.length))) goto L_153;
  o = i.startsWith("1");
  if (!(o)) goto L_15c;
  goto L_15d;
  // [栈深重同步 1 -> 0]
  s = 0;
  n = i.slice(s, (s + 10));
  if (!(t.startsWith("+"))) goto L_212;
  if (!(!o)) goto L_212;
  goto L_38f;
  // [栈深重同步 1 -> 0]
  if (!((0 === n.length))) goto L_21e;
  goto L_38f;
  // [栈深重同步 1 -> 0]
  if (!((n.length <= 3))) goto L_255;
  goto L_38f;
  // [栈深重同步 1 -> 0]
  if (!((n.length <= 6))) goto L_2e2;
  goto L_38f;
  // [栈深重同步 1 -> 0]
  r = "(".concat(n.slice(0, 3), ") ", n.slice(3, 6), "-", n.slice(6));
  if (!((r === e.text))) goto L_3bb;
  return e;
  a = function <atom:0>;
  return {text: r, selectionStart: a(e.selectionStart), selectionEnd: a(e.selectionEnd)};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=2 bc=160B file=chatgpt_family/src/FamilyOnboarding
// args: i
// closure: t, e
function {
  return Math.min(t.length, e.text.slice(0, i).replace(new RegExp("[^0-9]"), "").length);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=3 bc=267B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, i
function {
  let i;
  let t;
  t = e.text.replace(new RegExp("[^0-9]"), "").slice(0, 6);
  if (!((t === e.text))) goto L_a3;
  return e;
  i = function <atom:0>;
  return {text: t, selectionStart: i(e.selectionStart), selectionEnd: i(e.selectionEnd)};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=2 bc=464B file=chatgpt_family/src/FamilyOnboarding
// locals: e
// closure: this, Ue
function {
  let e;
  if (!(!this.validPhone)) goto L_2b;
  return;
  if (!(this.viewModel.isDebugPreview)) goto L_bd;
  this.advance(Ue.Code);
  return;
  e = this.state.phone.replace(new RegExp("\\D"), "");
  if (!((this.messaging == null))) goto L_159;
  this.messaging;
  goto L_1cf;
  undefined.send("+1".concat(e.slice(-10)));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=658B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  if (!((this.state.setupPage === Ue.Code))) goto L_291;
  if (!(this.viewModel.isDebugPreview)) goto L_154;
  if (!((6 === this.state.code.length))) goto L_291;
  goto L_291;
  // [栈深重同步 1 -> 0]
  if (!((this.messaging == null))) goto L_181;
  this.messaging;
  goto L_213;
  if (!(this.hasVerifiedNumber)) goto L_1cb;
  goto L_210;
  // [栈深重同步 3 -> 2]
  undefined.verify(this.state.code);
  this.setState({code: ""});
  this.codeInput.setAttribute("value", "");
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=699B file=chatgpt_family/src/FamilyOnboarding
// locals: e, t
// closure: this, Ue
function {
  let t;
  let e;
  if (((this.state.setupPage !== Ue.Code))) goto L_96;
  if (!(this.hasVerifiedNumber)) goto L_99;
  return;
  if (!(this.viewModel.isDebugPreview)) goto L_18a;
  this.setState({code: ""});
  this.codeInput.setAttribute("value", "");
  this.focusCodeInput();
  return;
  e = this.messaging;
  if (!((e == null))) goto L_1ba;
  e;
  goto L_204;
  if (!((undefined.snapshot == null))) goto L_1e3;
  undefined.snapshot;
  goto L_204;
  t = undefined.phoneNumber;
  if (!((e == null))) goto L_210;
  e;
  goto L_231;
  if (!(undefined.canResend)) goto L_2ba;
  if (!(!e.needsStatusRefresh)) goto L_2ba;
  if (!(t)) goto L_2ba;
  e.send(t);
  this.focusCodeInput();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=0 bc=2007B file=chatgpt_family/src/FamilyOnboarding
// locals: e, t
// closure: this, qe, Ue
function {
  let t;
  let e;
  if (!((this.messaging == null))) goto L_32;
  this.messaging;
  goto L_53;
  e = undefined.snapshot;
  if (!((e == null))) goto L_5f;
  e;
  goto L_80;
  t = (undefined.status !== this.messagingStatus);
  if (!((e == null))) goto L_b4;
  e;
  goto L_d5;
  this.messagingStatus = undefined.status;
  if (!(this.hasVerifiedNumber)) goto L_155;
  this.codeInput.setAttribute("focused", false);
  if (!((e == null))) goto L_161;
  e;
  goto L_182;
  if (((undefined.challengeId !== this.challengeId))) goto L_1ae;
  if (!(t)) goto L_26a;
  if (!((e == null))) goto L_1c3;
  e;
  goto L_1e4;
  this.challengeId = undefined.challengeId;
  this.setState({code: ""});
  this.codeInput.setAttribute("value", "");
  this.setState({messagingRevision: (this.state.messagingRevision + 1)});
  if (!(this.setupAttempt)) goto L_7d6;
  if (!(!this.isClosed)) goto L_7d6;
  if (!((e == null))) goto L_33e;
  e;
  goto L_35f;
  if (!((undefined.status === qe.FamilyMessagingStatus.Pending))) goto L_4eb;
  if (!((this.state.setupPage === Ue.Code))) goto L_49e;
  if (!(t)) goto L_4e7;
  if (!(this.wasActive)) goto L_4e7;
  goto L_4e7;
  // [栈深重同步 2 -> 1]
  this.transitionSetup(Ue.Code);
  goto L_7d5;
  if (!((undefined.status === qe.FamilyMessagingStatus.Verified))) goto L_581;
  this.transitionSetup(Ue.Code);
  goto L_7d5;
  if (!((undefined.status === qe.FamilyMessagingStatus.Active))) goto L_742;
  if (!((undefined !== this.state.setupPage))) goto L_6ef;
  if (!((this.state.setupPage !== Ue.Phone))) goto L_6ef;
  if (((this.state.setupPage !== Ue.Code))) goto L_73e;
  this.completeMessagingSetup(this.setupAttempt);
  goto L_7d5;
  if (!((undefined.status === qe.FamilyMessagingStatus.Unverified))) goto L_7d5;
  this.transitionSetup(Ue.Phone);
  undefined.status;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=293B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  this.setupAttempt = undefined;
  if (!((this.messaging == null))) goto L_39;
  this.messaging;
  goto L_5d;
  undefined.dispose();
  this.codeInput.setAttribute("value", "");
  this.setState({code: ""});
  this.context.onClose();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=255B file=chatgpt_family/src/FamilyOnboarding
// locals: e
// closure: this, Ne
function {
  let e;
  e = this.linkedMessagesPhone;
  if (!(Ne.isVersionAtLeast(179))) goto L_ad;
  if (!(e)) goto L_ad;
  if (!((this.context.onOpenLinkedMessages == null))) goto L_a5;
  this.context.onOpenLinkedMessages;
  this.context;
  goto L_fe;
  // [栈深重同步 1 -> 2]
  goto L_fe;
  // [栈深重同步 1 -> 0]
  if (!((this.context.onOpenMessages == null))) goto L_fb;
  this.context.onOpenMessages;
  this.context;
  goto L_fe;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=456B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.setupKeyboardScroll;
  if (!(t)) goto L_1c7;
  if (!((t.scroll === this.setupScroll.single()))) goto L_1c7;
  t.nativeOffset = e.y;
  if ((this.keyboardVisible)) goto L_143;
  if (!((t.restoreOffset !== e.y))) goto L_1a0;
  if (!((t.interruptedOffset === e.y))) goto L_1c7;
  t.interruptedOffset = undefined;
  goto L_1c7;
  // [栈深重同步 1 -> 0]
  this.clearSetupScroll();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=241B file=chatgpt_family/src/FamilyOnboarding
// closure: t, i, this
function {
  t.scroll.setAttribute("contentOffsetAnimated", false);
  t.scroll.setAttribute("contentOffsetY", i);
  if ((this.keyboardVisible)) goto L_f0;
  this.clearSetupScroll();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=1 bc=534B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, i
// closure: this
function {
  let i;
  let t;
  t = this.setupKeyboardScroll;
  if ((!t)) goto L_f4;
  if (((t.scroll !== this.setupScroll.single()))) goto L_f4;
  if ((!this.wasActive)) goto L_f4;
  if (!(this.isClosed)) goto L_f7;
  return;
  t.nativeOffset = e.y;
  if (((undefined === t.interruptedOffset))) goto L_196;
  if (!((e.y === t.interruptedOffset))) goto L_199;
  return;
  i = t.interruptedOffset;
  t.interruptedOffset = undefined;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=432B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  if (!(this.keyboardVisible)) goto L_188;
  if (!(this.setupKeyboardScroll)) goto L_1af;
  this.setupKeyboardScroll.interruptedOffset = undefined;
  if (!((this.setupKeyboardScroll.scroll === this.setupScroll.single()))) goto L_1af;
  goto L_1af;
  // [栈深重同步 1 -> 0]
  this.clearSetupScroll();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=206B file=chatgpt_family/src/FamilyOnboarding
// closure: e, r, o, t, this
function {
  e.setAttribute("contentOffsetAnimated", r);
  e.setAttribute("contentOffsetY", o);
  if ((r)) goto L_cd;
  e.setAttribute("staticContentHeight", undefined);
  if (!((undefined === t.interruptedOffset))) goto L_cd;
  this.setupKeyboardScroll = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=137B file=chatgpt_family/src/FamilyOnboarding
// closure: e, u, this, g
function {
  if (!(u)) goto L_55;
  e.setAttribute("contentOffsetAnimated", !this.shouldReduceMotion);
  e.setAttribute("contentOffsetY", g);
  return;
}

// fn <atom:0>  args=0 vars=18 closure=4 cpool=2 bc=3623B file=chatgpt_family/src/FamilyOnboarding
// locals: e, t, i, o, s, t#1, o#1, n, r, n#1, r#1, a, l, d, h, g, u, c
// closure: this, Ue, Le, Je
function {
  let c;
  let u;
  let g;
  let h;
  let d;
  let l;
  let a;
  let r#1;
  let n#1;
  let s;
  let o;
  let i;
  let t;
  let e;
  e = this.setupScroll.single();
  t = this.setupContent.single();
  if ((!e)) goto L_164;
  if ((!t)) goto L_164;
  if (((e.frame.height <= 0))) goto L_164;
  if (!((t.frame.height <= 0))) goto L_167;
  return;
  if (!((this.setupKeyboardScroll == null))) goto L_193;
  this.setupKeyboardScroll;
  goto L_1b4;
  if (!((undefined.scroll !== e))) goto L_1ca;
  this.setupKeyboardScroll = undefined;
  undefined;
  if (!((e.getAttribute("contentOffsetY") == null))) goto L_1fd;
  e.getAttribute("contentOffsetY");
  i = 0;
  o = e.getAttribute("staticContentHeight");
  if (!((undefined !== o))) goto L_3c9;
  if (!((t.frame.height > o))) goto L_3c9;
  if (!(!this.keyboardVisible)) goto L_357;
  if (!(this.setupKeyboardScroll)) goto L_357;
  if (!((i !== this.setupKeyboardScroll.restoreOffset))) goto L_357;
  this.setupKeyboardScroll.restoreOffset = undefined;
  undefined;
  e.setAttribute("staticContentHeight", t.frame.height);
  s = Math.max(0, (t.frame.height - e.frame.height));
  if (!(!this.keyboardVisible)) goto L_6a0;
  let t#1;
  t#1 = this.setupKeyboardScroll;
  if (!(t#1)) goto L_69f;
  let r;
  let n;
  let o#1;
  o#1 = Math.max(0, Math.min(t#1.baselineOffset, s));
  n = !this.shouldReduceMotion;
  if (!((t#1.restoreOffset === o#1))) goto L_5b8;
  if (!(n)) goto L_5b8;
  return;
  t#1.rangeOffset = Math.max(t#1.rangeOffset, i);
  if (!(n)) goto L_622;
  r = (o#1 !== i);
  t#1.restoreOffset = o#1;
  if (!((o#1 === i))) goto L_644;
  goto L_645;
  // [栈深重同步 2 -> 1]
  t#1.interruptedOffset = undefined;
  this.renderer.batchUpdates(function <atom:0>);
  // close_loc r
  // close_loc o#1
  return;
  if (!((this.state.setupPage === Ue.Phone))) goto L_755;
  goto L_80a;
  // [栈深重同步 1 -> 0]
  if (!((this.state.setupPage === Ue.Code))) goto L_809;
  goto L_80a;
  // [栈深重同步 1 -> 0]
  n#1 = undefined;
  r#1 = this.setupActions.single();
  if (!((n#1 == null))) goto L_861;
  n#1;
  goto L_88a;
  if ((!undefined.getAttribute("focused"))) goto L_92c;
  if (((n#1.frame.height <= 0))) goto L_92c;
  if ((!r#1)) goto L_92c;
  if (!((r#1.frame.height <= 0))) goto L_92f;
  return;
  a = Le.RenderedElementUtils.relativePositionTo(e, n#1);
  l = Le.RenderedElementUtils.relativePositionTo(e, r#1);
  if ((!a)) goto L_9db;
  if (!(!l)) goto L_9de;
  return;
  d = (l.y + r#1.frame.height);
  h = (a.y - Je);
  g = i;
  if (!((h < i))) goto L_a8c;
  g = h;
  goto L_b56;
  // [栈深重同步 1 -> 0]
  if (!((d > (i + e.frame.height)))) goto L_b56;
  g = Math.min((d - e.frame.height), h);
  Math.min((d - e.frame.height), h);
  g = Math.max(0, Math.min(g, s));
  Math.max(0, Math.min(g, s));
  u = (g !== i);
  if (!((this.setupKeyboardScroll == null))) goto L_beb;
  this.setupKeyboardScroll;
  goto L_c0c;
  c = (undefined !== undefined.restoreOffset);
  if ((u)) goto L_c19;
  if (!(c)) goto L_e26;
  if (!((this.setupKeyboardScroll == null))) goto L_c81;
  this.setupKeyboardScroll;
  this.setupKeyboardScroll = {scroll: e, baselineOffset: i, rangeOffset: i, nativeOffset: undefined, restoreOffset: undefined, interruptedOffset: undefined};
  {scroll: e, baselineOffset: i, rangeOffset: i, nativeOffset: undefined, restoreOffset: undefined, interruptedOffset: undefined};
  this.setupKeyboardScroll.rangeOffset = Math.max(this.setupKeyboardScroll.rangeOffset, i, g);
  this.setupKeyboardScroll.restoreOffset = undefined;
  if ((!u)) goto L_dcb;
  if (!(c)) goto L_dd2;
  if (!((this.setupKeyboardScroll.nativeOffset === g))) goto L_dd2;
  goto L_dd3;
  // [栈深重同步 2 -> 1]
  this.setupKeyboardScroll.interruptedOffset = undefined;
  this.renderer.batchUpdates(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=1 cpool=0 bc=1664B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, i, o, s, n
// closure: this
function {
  if (!((e.width > 0))) goto L_67f;
  if (!((e.height > 0))) goto L_67f;
  if ((!this.state.welcomeRootLaidOut)) goto L_173;
  if (((e.width !== this.state.width))) goto L_173;
  if (!((e.height !== this.state.height))) goto L_67f;
  let i;
  let t;
  t = this.setupKeyboardScroll;
  i = this.setupContent.single();
  if (!((e.height > this.state.height))) goto L_601;
  if (!(t)) goto L_601;
  if (!((t.scroll === this.setupScroll.single()))) goto L_601;
  if (!(i)) goto L_601;
  if (!((i.frame.height > 0))) goto L_601;
  if (!(this.wasActive)) goto L_601;
  if (!(!this.isClosed)) goto L_601;
  if (!(!this.shouldReduceMotion)) goto L_601;
  let n;
  let s;
  let o;
  if (!((t.scroll.getAttribute("contentOffsetY") == null))) goto L_400;
  t.scroll.getAttribute("contentOffsetY");
  o = 0;
  s = (e.height + Math.max(0, o, t.baselineOffset, t.rangeOffset));
  if (!((t.scroll.getAttribute("staticContentHeight") == null))) goto L_4ed;
  t.scroll.getAttribute("staticContentHeight");
  n = 0;
  if (!((s > i.frame.height))) goto L_600;
  if (!((s > n))) goto L_600;
  if ((this.keyboardVisible)) goto L_5af;
  if (((o === t.restoreOffset))) goto L_5af;
  t.restoreOffset = undefined;
  undefined;
  t.scroll.setAttribute("staticContentHeight", s);
  this.setState({width: e.width, height: e.height, welcomeRootLaidOut: true});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=273B file=chatgpt_family/src/FamilyOnboarding
// args: e
// closure: this
function {
  if (((undefined !== this.state.setupPage))) goto L_110;
  if ((this.state.showsIntroduction)) goto L_110;
  if (!((e !== this.state.welcomePage))) goto L_110;
  this.setState({welcomePage: e});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=42B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  this.transitionIntroduction(true);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=433B file=chatgpt_family/src/FamilyOnboarding
// locals: e
// closure: this
function {
  let e;
  if ((!this.wasActive)) goto L_10b;
  if (((undefined !== this.state.setupPage))) goto L_10b;
  if ((this.state.showsIntroduction)) goto L_10b;
  if (!(this.state.introductionMoving)) goto L_10e;
  return;
  e = this.state.welcomePage;
  if (!((e > 0))) goto L_189;
  goto L_1b0;
  // [栈深重同步 1 -> 0]
  this.showIntroduction();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=284B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  if (!((undefined === this.state.setupPage))) goto L_11b;
  if (!(this.wasActive)) goto L_11b;
  if (!(!this.state.introductionMoving)) goto L_11b;
  this.setState({welcomePage: 0});
  this.transitionIntroduction(false);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=299B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: e#1
// closure: this, Ue
function {
  let e#1;
  if (!((e === undefined))) goto L_c;
  e;
  e = false;
  e#1 = false;
  if ((e)) goto L_12a;
  if ((this.isDestroyed())) goto L_12a;
  if ((!this.wasActive)) goto L_12a;
  if (((this.state.setupPage !== Ue.Phone))) goto L_12a;
  this.phoneInput.setAttribute("focused", true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=92B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  return this.setState({setupPage: Ue.Phone, code: "", wordmarkFailed: false});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=2 bc=783B file=chatgpt_family/src/FamilyOnboarding
// locals: e
// closure: this, Ue, qe, je
function {
  let e;
  if (((undefined !== this.state.setupPage))) goto L_e6;
  if ((this.state.introductionMoving)) goto L_e6;
  if ((this.setupAttempt)) goto L_e6;
  if (!(this.isClosed)) goto L_e9;
  return;
  this.setupAttempt = {completing: false};
  if (!((this.messaging == null))) goto L_129;
  this.messaging;
  goto L_173;
  if (!((undefined.snapshot == null))) goto L_152;
  undefined.snapshot;
  goto L_173;
  if (!((undefined.status === qe.FamilyMessagingStatus.Active))) goto L_1e4;
  this.messagingChanged();
  return;
  e = function <atom:0>;
  this.phoneInput.setAttribute("value", this.state.phone);
  null;
  je;
  this.transition({completion: e}, function <atom:0>);
  if (!(this.shouldReduceMotion)) goto L_2e6;
  e();
  this.messagingChanged();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=52B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  return this.setState({setupPage: undefined, code: ""});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=494B file=chatgpt_family/src/FamilyOnboarding
// locals: e
// closure: this, Ue, Ye
function {
  let e;
  this.setupAttempt = undefined;
  if (!((undefined === this.state.setupPage))) goto L_5a;
  return;
  e = (this.state.setupPage === Ue.Gmail);
  this.awaitingGoogleConnection = false;
  this.phoneInput.setAttribute("focused", false);
  this.codeInput.setAttribute("focused", false);
  this.transition(Ye, function <atom:0>);
  if (!(e)) goto L_1ed;
  this.context.onGmailDisappeared();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=189B file=chatgpt_family/src/FamilyOnboarding
// args: t
// closure: this, e
function {
  if ((t)) goto L_bc;
  if ((this.isDestroyed())) goto L_bc;
  if (!(e.isLoggingEnabled)) goto L_8c;
  console.warn("[FamilyOnboarding] Wordmark animation failed to load");
  this.setState({wordmarkFailed: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=54B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  this.artworkLaidOut = true;
  this.startArtwork();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=216B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.artworkVisible;
  this.artworkVisible = e;
  if (!(!e)) goto L_b0;
  if (!(t)) goto L_b0;
  this.artworkPlayback.settle();
  goto L_d7;
  // [栈深重同步 1 -> 0]
  this.startArtwork();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=75B file=chatgpt_family/src/FamilyOnboarding
// args: e
// closure: this
function {
  return !this.loadedArt.has(e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  return this.finishArtwork();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=2 bc=748B file=chatgpt_family/src/FamilyOnboarding
// locals: e, t
// closure: this, We
function {
  let t;
  let e;
  if ((!this.artworkVisible)) goto L_d3;
  if ((!this.artworkLaidOut)) goto L_d3;
  if ((!this.wasActive)) goto L_d3;
  if ((this.shouldReduceMotion)) goto L_d3;
  if (!(this.isDestroyed())) goto L_d6;
  return;
  e = this.artworkScene;
  if (((e === We.Phone))) goto L_14b;
  if (!((e === We.Code))) goto L_176;
  goto L_179;
  // [栈深重同步 1 -> 0]
  t = [];
  if (((e === We.None))) goto L_2eb;
  if ((t.some(function <atom:0>))) goto L_2eb;
  this.artworkPlayback.update({active: this.wasActive, visible: this.artworkVisible, laidOut: this.artworkLaidOut, reducedMotion: this.shouldReduceMotion}, this.artworkBeats, undefined, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=182B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  if (!((this.state.setupPage === Ue.Gmail))) goto L_b5;
  this.advance(Ue.Messages);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=643B file=chatgpt_family/src/FamilyOnboarding
// closure: this, Ue
function {
  if (!((this.state.setupPage === Ue.Gmail))) goto L_282;
  if (!(this.viewModel.isGmailConnected)) goto L_102;
  goto L_282;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.isGmailEnabled)) goto L_282;
  if (!(!this.viewModel.isConnectingGmail)) goto L_282;
  this.awaitingGoogleConnection = true;
  if (!(this.viewModel.hasGmailError)) goto L_23a;
  goto L_282;
  // [栈深重同步 1 -> 0]
  this.context.onConnectGmail();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=13 cpool=31 bc=1177B file=chatgpt_family/src/FamilyOnboarding
// locals: this, this.active_func, new.target, arguments
// closure: Ue, qe, Ne, Le, Je, je, Ye, e, We, <class_fields_init>, Ve, Ie, _e
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
  this.state = {showsIntroduction: true, introductionMoving: false, welcomePage: 0, welcomeRootLaidOut: false, setupPage: undefined, width: 393, height: 764, phone: "", code: "", editingCode: false, codeSelection: [0, 0], messagingRevision: 0, wordmarkFailed: false};
  this.setupScroll = new Ve.ElementRef();
  this.setupContent = new Ve.ElementRef();
  this.setupActions = new Ve.ElementRef();
  this.keyboardVisible = (Ie.Application.getKeyboardHeight() > 0);
  this.phoneInput = new Ve.ElementRef();
  this.codeInput = new Ve.ElementRef();
  this.phoneArt = new Ve.ElementRef();
  this.loadedArt = new Set();
  this.artworkScene = We.None;
  this.artworkPlayback = _e.createFamilyScenePlayback(this);
  this.artworkBeats = [];
  this.artworkVisible = false;
  this.artworkLaidOut = false;
  this.awaitingGoogleConnection = false;
  this.wasActive = true;
  this.changeCode = function <atom:0>;
  this.codeSelectionChanged = function <atom:0>;
  this.beginCodeEdit = function <atom:0>;
  this.endCodeEdit = function <atom:0>;
  this.endPhoneEdit = function <atom:0>;
  this.focusCodeInput = function <atom:0>;
  this.formatPhoneInput = function <atom:0>;
  this.formatCodeInput = function <atom:0>;
  this.sendCode = function <atom:0>;
  this.verifyCode = function <atom:0>;
  this.resendCode = function <atom:0>;
  this.messagingChanged = function <atom:0>;
  this.close = function <atom:0>;
  this.openLinkedMessages = function <atom:0>;
  this.endSetupScroll = function <atom:0>;
  this.updateSetupScroll = function <atom:0>;
  this.beginSetupScroll = function <atom:0>;
  this.keepSetupInputVisible = function <atom:0>;
  this.handleLayout = function <atom:0>;
  this.handlePrototypePage = function <atom:0>;
  this.showIntroduction = function <atom:0>;
  this.previousCarouselPage = function <atom:0>;
  this.openCarousel = function <atom:0>;
  this.startSetup = function <atom:0>;
  this.backToWelcome = function <atom:0>;
  this.handleWordmarkLoad = function <atom:0>;
  this.handleArtworkLayout = function <atom:0>;
  this.handleArtworkVisibility = function <atom:0>;
  this.startArtwork = function <atom:0>;
  this.skipGmail = function <atom:0>;
  this.gmailAction = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=184B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t
// closure: this
function {
  let t;
  t = (e > 0);
  if (!((t !== this.keyboardVisible))) goto L_84;
  if (!(this.setupKeyboardScroll)) goto L_84;
  this.setupKeyboardScroll.interruptedOffset = undefined;
  undefined;
  this.keyboardVisible = t;
  this.keepSetupInputVisible();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_family/src/FamilyOnboarding
// closure: e
function {
  return e.cancel();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=41B file=chatgpt_family/src/FamilyOnboarding
function {
  return Date.now();   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=3 bc=662B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
// closure: Ie, Ne, Ke, qe, He
function {
  this = this;
  let e;
  if (!(this.isClosed)) goto L_2a;
  return;
  e = Ie.Application.observeKeyboardHeight(function <atom:0>);
  this.registerDisposable(function <atom:0>);
  if (!(Ne.isVersionAtLeast(179))) goto L_295;
  this.wasActive = (false !== this.viewModel.isActive);
  if ((this.viewModel.isDebugPreview)) goto L_295;
  this.messaging = new Ke.FamilyMessagingController(new qe.FamilyMessagingApi(new He.OAINetworkClient(this.context.platformServices)), this.messagingChanged, function <atom:0>);
  this.messaging.refresh();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=0 bc=1863B file=chatgpt_family/src/FamilyOnboarding
// locals: e, t, i, this
// closure: Ne, Ue
function {
  this = this;
  if (!(this.isClosed)) goto L_aa;
  this.setupAttempt = undefined;
  this.clearSetupScroll();
  if (!((this.messaging == null))) goto L_84;
  this.messaging;
  goto L_a8;
  undefined.dispose();
  return;
  if (!(Ne.isVersionAtLeast(179))) goto L_373;
  let i;
  let t;
  let e;
  e = (false !== this.viewModel.isActive);
  if (!(e)) goto L_151;
  t = !this.wasActive;
  if (!(t)) goto L_254;
  if (!((this.state.setupPage === Ue.Gmail))) goto L_254;
  if (!(this.viewModel.isGmailEnabled)) goto L_254;
  i = !this.viewModel.isConnectingGmail;
  this.wasActive = e;
  if (!(t)) goto L_2b7;
  if (!((this.messaging == null))) goto L_293;
  this.messaging;
  goto L_2b7;
  undefined.refresh();
  if (!(i)) goto L_372;
  if (!((this.state.setupPage === Ue.Gmail))) goto L_372;
  this.context.onGmailAppeared();
  if (!(this.wasActive)) goto L_3bc;
  if ((!this.shouldReduceMotion)) goto L_4a1;
  if ((this.wasActive)) goto L_40e;
  this.clearSetupScroll();
  this.settleIntroduction();
  this.artworkPlayback.settle();
  this.finishArtwork();
  if ((this.awaitingGoogleConnection)) goto L_55f;
  if (!(!this.viewModel.isDebugPreview)) goto L_660;
  if (!((this.setupAttempt == null))) goto L_53e;
  this.setupAttempt;
  goto L_55f;
  if (!(undefined.completing)) goto L_660;
  if (!((this.state.setupPage === Ue.Gmail))) goto L_660;
  if (!(this.wasActive)) goto L_660;
  if (!(this.viewModel.isGmailConnected)) goto L_660;
  goto L_746;
  // [栈深重同步 1 -> 0]
  if ((!this.viewModel.isGmailEnabled)) goto L_746;
  if ((this.viewModel.isConnectingGmail)) goto L_746;
  if ((this.viewModel.isGmailConnected)) goto L_746;
  this.awaitingGoogleConnection = false;
  false;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=448B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
// closure: Ue
function {
  this = this;
  let e;
  this.setupAttempt = undefined;
  this.setupKeyboardScroll = undefined;
  e = this.introductionAnimation;
  this.introductionAnimation = undefined;
  if (!((e == null))) goto L_54;
  e;
  goto L_78;
  undefined.cancel();
  this.artworkPlayback.destroy();
  if (!((this.messaging == null))) goto L_ea;
  this.messaging;
  goto L_10e;
  undefined.dispose();
  if (!((this.state.setupPage === Ue.Gmail))) goto L_1bf;
  this.context.onGmailDisappeared();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=633B file=chatgpt_family/src/FamilyOnboarding
// closure: t, d, $e, h, this
function {
  t.beginRender(d, "setup");
  t.setAttributeStyle("style", $e.screen);
  t.beginRender(h, "setup-".concat(this.state.setupPage));
  t.setAttributeStyle("style", $e.screen);
  t.setAttributeFunction("onLayoutComplete", this.handleArtworkLayout);
  this.renderSetup(this.state.setupPage);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=15 cpool=1 bc=4648B file=chatgpt_family/src/FamilyOnboarding
// closure: t, d, $e, h, this, o, s, n, e, me, r, a, pe, l, g
function {
  t.beginRender(o, undefined);
  t.setAttributeFunction("onLayout", this.handleLayout);
  t.setAttributeFunction("onLayoutComplete", this.handleArtworkLayout);
  t.setAttributeFunction("onVisibilityChanged", this.handleArtworkVisibility);
  t.setAttributeStyle("style", $e.root);
  t.beginRender(s, "introduction-track");
  t.setAttributeStyle("style", $e.introductionTrack);
  t.setAttributeNumber("width", (2 * this.state.width));
  if (!(this.state.showsIntroduction)) goto L_2d8;
  goto L_31e;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("translationX", -this.state.width);
  t.beginRender(n, "prototype-carousel");
  t.setAttributeStyle("style", $e.introductionPanel);
  t.setAttributeNumber("width", this.state.width);
  t.setAttributeNumber("left", this.state.width);
  if (!(e)) goto L_54b;
  if (!(!this.state.introductionMoving)) goto L_54b;
  t.setAttribute("touchEnabled", (undefined === this.state.setupPage));
  if (!(e)) goto L_618;
  if (!(!this.state.introductionMoving)) goto L_618;
  if (!((undefined === this.state.setupPage))) goto L_618;
  goto L_61d;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "ignored");
  t.beginComponent(me.FamilyPrototypeCarousel, r, undefined, undefined);
  if (!(e)) goto L_7fa;
  if (!(!this.state.introductionMoving)) goto L_7fa;
  if (!(this.wasActive)) goto L_7fa;
  if (!(!this.state.showsIntroduction)) goto L_7fa;
  if (!((undefined === this.state.setupPage))) goto L_7fa;
  t.setViewModelProperty("active", this.state.welcomeRootLaidOut);
  t.setViewModelProperty("page", this.state.welcomePage);
  t.setViewModelProperty("reducedMotion", this.shouldReduceMotion);
  t.setViewModelProperty("width", this.state.width);
  t.setViewModelProperty("height", this.state.height);
  t.setViewModelProperty("onPage", this.handlePrototypePage);
  t.setViewModelProperty("onPrevious", this.showIntroduction);
  t.setViewModelProperty("onClose", this.close);
  t.setViewModelProperty("onGetStarted", this.startSetup);
  t.endComponent();
  t.endRender();
  t.beginRender(a, "introduction");
  t.setAttributeStyle("style", $e.introductionPanel);
  t.setAttributeNumber("width", this.state.width);
  if (!(this.state.showsIntroduction)) goto L_d32;
  if (!(!this.state.introductionMoving)) goto L_d32;
  t.setAttribute("touchEnabled", (undefined === this.state.setupPage));
  if (!(this.state.showsIntroduction)) goto L_e41;
  if (!(!this.state.introductionMoving)) goto L_e41;
  if (!((undefined === this.state.setupPage))) goto L_e41;
  goto L_e46;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "ignored");
  t.beginComponent(pe.FamilyIntroduction, l, undefined, undefined);
  t.setViewModelProperty("width", this.state.width);
  t.setViewModelProperty("height", this.state.height);
  t.setViewModelProperty("onGetStarted", this.startSetup);
  t.setViewModelProperty("onSeeHow", this.openCarousel);
  t.endComponent();
  t.endRender();
  t.endRender();
  if (!((undefined !== this.state.setupPage))) goto L_10e7;
  function <atom:0>();
  t.beginRender(g, "navigation");
  t.setAttributeStyle("style", $e.header);
  this.renderNavigation((undefined !== this.state.setupPage));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=15 cpool=1 bc=427B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
// closure: t, d, $e, h, o, s, n, me, r, a, pe, l, g, we, i
function {
  this = this;
  let e;
  this.prepareArtwork();
  e = !this.state.showsIntroduction;
  t.beginComponent(we.OAITheme, i, undefined, undefined);
  t.setViewModelProperty("fill", true);
  t.setUnnamedSlot(function <atom:0>);
  t.endComponent();
  this.renderer.onRenderComplete(this.startArtwork);
  return;
}

// fn <atom:0>  args=1 vars=6 closure=17 cpool=0 bc=3997B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: i, o, s, n, this
// closure: Ue, t, u, $e, c, ke, p, Ee, fe, Ae, y, m, Pe, b, f, v, w
function {
  this = this;
  let n;
  let s;
  let o;
  let i;
  i = !this.state.showsIntroduction;
  if ((e)) goto L_5d;
  o = i;
  if (!(e)) goto L_116;
  if (!((this.state.setupPage === Ue.Gmail))) goto L_116;
  s = !this.viewModel.isGmailConnected;
  if (!(e)) goto L_183;
  n = (this.state.setupPage === Ue.Messages);
  t.beginRender(u, "leading");
  t.setAttributeStyle("style", $e.glassButton);
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", $e.glass);
  t.endRender();
  t.beginComponent(ke.IconButton, p, undefined, undefined);
  if (!(o)) goto L_330;
  goto L_335;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", "family.onboarding.close");
  if (!(o)) goto L_3b1;
  goto L_3f9;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityLabel", Ee.default.familyOnboardingClose());
  if (!(o)) goto L_472;
  goto L_4b7;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("src", fe.default.x);
  t.setViewModelProperty("size", Ae.OAIControlSize.Lg);
  t.setViewModelProperty("style", $e.navigationControl);
  if (!(e)) goto L_5cf;
  goto L_61c;
  // [栈深重同步 4 -> 3]
  if (!(i)) goto L_5f9;
  goto L_61c;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", this.close);
  t.endComponent();
  t.endRender();
  t.beginRender(y, "skip");
  t.setAttributeStyle("style", $e.googleSkip);
  if (!(s)) goto L_722;
  goto L_723;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.setAttribute("touchEnabled", s);
  if (!(s)) goto L_78c;
  goto L_791;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "ignored");
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", $e.glass);
  t.endRender();
  t.beginComponent(Pe.Button, b, undefined, undefined);
  if (!(s)) goto L_8c0;
  goto L_8c1;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", undefined);
  t.setViewModelProperty("label", Ee.default.familyOnboardingSkip());
  if (!(s)) goto L_98d;
  goto L_98e;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", undefined);
  t.setViewModelProperty("variant", Pe.ButtonVariant.Ghost);
  t.setViewModelProperty("style", $e.googleSkipControl);
  t.setViewModelProperty("labelStyle", $e.googleSkipLabel);
  t.endComponent();
  t.endRender();
  t.beginRender(f, "close");
  t.setAttributeStyle("style", $e.glassButton);
  if (!(n)) goto L_ba8;
  goto L_ba9;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 0);
  t.setAttribute("touchEnabled", n);
  if (!(n)) goto L_c12;
  goto L_c17;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityNavigation", "ignored");
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", $e.glass);
  t.endRender();
  t.beginComponent(ke.IconButton, w, undefined, undefined);
  if (!(n)) goto L_d46;
  goto L_d47;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("accessibilityId", undefined);
  t.setViewModelProperty("accessibilityLabel", Ee.default.familyOnboardingClose());
  t.setViewModelProperty("src", fe.default.x);
  t.setViewModelProperty("size", Ae.OAIControlSize.Lg);
  t.setViewModelProperty("style", $e.navigationControl);
  if (!(n)) goto L_f48;
  goto L_f49;
  // [栈深重同步 4 -> 3]
  t.setViewModelProperty("onPress", undefined);
  t.endComponent();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=532B file=chatgpt_family/src/FamilyOnboarding
// closure: t, P, this, $e, Qe
function {
  t.beginRender(P, undefined);
  t.setAttribute("src", this.wordmark);
  t.setAttributeStyle("style", $e.wordmarkAnimation);
  if (!(this.wasActive)) goto L_141;
  if (!(!this.shouldReduceMotion)) goto L_141;
  goto L_142;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("advanceRate", 0);
  if (!(this.shouldReduceMotion)) goto L_198;
  goto L_199;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("currentTime", 0);
  t.setAttributeFunction("onAssetLoad", this.handleWordmarkLoad);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=17 cpool=5 bc=3173B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: i, this
// closure: t, P, $e, Qe, Ue, be, Fe, A, S, ve, C, k, M, Ee, R, I, O
function {
  this = this;
  let i;
  if (((e === Ue.Phone))) goto L_55;
  if (!((e === Ue.Code))) goto L_7f;
  this.renderMessagingSetup(e);
  return;
  if (!((e === Ue.Gmail))) goto L_ce;
  this.renderGmailSetup();
  return;
  i = be.getFamilyCarouselLayout(this.state.width, this.state.height, Fe.Device.getDisplayBottomInset());
  t.beginRender(A, undefined);
  t.setAttributeStyle("style", $e.wordmarkPosition);
  t.setAttributeNumber("left", ((this.state.width / 2) - (132.9 * i.scale)));
  t.setAttributeNumber("top", ((((i.height / 2) - 259.895) + i.topOffset) * i.scale));
  t.setAttributeNumber("width", (268.8 * i.scale));
  t.setAttributeNumber("height", (477.8667 * i.scale));
  if (!(this.state.wordmarkFailed)) goto L_581;
  t.beginRender(S, undefined);
  t.setAttribute("src", ve.default.familySetupLoadingPoster);
  t.setAttributeStyle("style", $e.wordmark);
  goto L_584;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  t.endRender();
  t.beginRender(C, undefined);
  t.setAttributeStyle("style", $e.messagesContent);
  t.setAttributeNumber("bottom", i.nativeFooterBottom);
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", $e.messagesCopy);
  t.beginRender(M, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingMessagesTitle());
  t.setAttributeStyle("style", $e.title);
  t.endRender();
  t.beginRender(R, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingMessagesBody());
  t.setAttributeStyle("style", $e.messagesDescription);
  t.endRender();
  if (!(!this.canOpenMessages)) goto L_a6f;
  t.beginRender(I, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingMessagesUnavailable());
  t.setAttributeStyle("style", $e.notice);
  t.endRender();
  t.endRender();
  t.beginRender(O, undefined);
  t.setAttributeStyle("style", $e.messagesAction);
  this.button("open-messages", Ee.default.familyOnboardingOpenMessages(), this.openLinkedMessages, !this.canOpenMessages, $e.messagesPrimary, $e.primaryLabel);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=116B file=chatgpt_family/src/FamilyOnboarding
// args: e
// closure: this
function {
  if ((this.isMessagingPending)) goto L_73;
  this.setState({phone: e.text});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=799B file=chatgpt_family/src/FamilyOnboarding
// closure: this, t, T, Ee, $e
function {
  t.beginRender(T, undefined);
  t.setAttributeRef(this.phoneInput);
  t.setAttributeString("accessibilityLabel", Ee.default.familyMessagingPhone());
  t.setAttributeFunction("onEditBegin", this.keepSetupInputVisible);
  t.setAttributeFunction("onEditEnd", this.endPhoneEdit);
  t.setAttributeFunction("onLayout", this.keepSetupInputVisible);
  t.setAttribute("enabled", !this.isMessagingPending);
  t.setAttributeFunction("onWillChange", this.formatPhoneInput);
  t.setAttributeFunction("onChange", function <atom:0>);
  t.setAttributeStyle("style", $e.phone);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=326B file=chatgpt_family/src/FamilyOnboarding
// closure: t, E, this, $e
function {
  t.beginRender(E, undefined);
  if (!((this.messaging == null))) goto L_7f;
  this.messaging;
  goto L_c9;
  if (!((undefined.snapshot == null))) goto L_a8;
  undefined.snapshot;
  goto L_c9;
  t.setAttributeString("value", undefined.phoneNumber);
  t.setAttributeStyle("style", $e.phoneTitle);
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=12 cpool=2 bc=2630B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: this
// closure: t, T, Ee, $e, E, N, V, F, x, G, Ue, L
function {
  this = this;
  t.beginRender(N, undefined);
  t.setAttributeRef(this.setupScroll);
  t.setAttributeNumber("height", this.state.height);
  t.setAttributeFunction("onLayout", this.keepSetupInputVisible);
  t.setAttributeFunction("onScroll", this.updateSetupScroll);
  t.setAttributeFunction("onScrollEnd", this.endSetupScroll);
  t.setAttributeFunction("onDragStart", this.beginSetupScroll);
  t.setAttributeStyle("style", $e.phoneScroll);
  t.beginRender(V, undefined);
  t.setAttributeRef(this.setupContent);
  t.setAttributeFunction("onLayout", this.keepSetupInputVisible);
  t.setAttributeStyle("style", $e.phoneContent);
  this.renderArtworkImage(this.phoneArt, this.context.artwork.phoneCharacter, $e.character);
  t.beginRender(F, undefined);
  t.setAttributeStyle("style", $e.phoneCopy);
  t.beginRender(x, undefined);
  t.setAttributeString("value", this.title);
  t.setAttributeStyle("style", $e.phoneTitle);
  t.endRender();
  t.beginRender(G, undefined);
  if (!((e === Ue.Phone))) goto L_694;
  goto L_74a;
  // [栈深重同步 4 -> 3]
  if (!(this.hasVerifiedNumber)) goto L_702;
  goto L_74a;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("value", Ee.default.familyOnboardingCodeBody());
  t.setAttributeStyle("style", $e.phoneDescription);
  t.endRender();
  t.endRender();
  t.beginRender(L, undefined);
  t.setAttributeRef(this.setupActions);
  t.setAttributeFunction("onLayout", this.keepSetupInputVisible);
  t.setAttributeStyle("style", $e.phoneActions);
  this.renderMessagingNotice();
  if (!((e === Ue.Phone))) goto L_958;
  goto L_9a6;
  // [栈深重同步 1 -> 0]
  if (!(this.hasVerifiedNumber)) goto L_981;
  goto L_9a6;
  // [栈深重同步 1 -> 0]
  this.renderCode();
  this.renderMessagingActions(e);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  if (!((this.messaging == null))) goto L_29;
  this.messaging;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.refresh();
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=796B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: t, B, $e, Ee
function {
  this = this;
  if (!(this.messagingNotice)) goto L_11e;
  t.beginRender(B, undefined);
  t.setAttributeString("value", this.messagingNotice);
  t.setAttributeStyle("style", $e.notice);
  t.endRender();
  if (!((this.messaging == null))) goto L_149;
  this.messaging;
  goto L_16a;
  if (!(!undefined.needsStatusRefresh)) goto L_256;
  if ((this.viewModel.isDebugPreview)) goto L_256;
  if (!((this.messaging == null))) goto L_1e6;
  this.messaging;
  goto L_207;
  if ((undefined.snapshot)) goto L_256;
  if (!((this.messaging == null))) goto L_235;
  this.messaging;
  goto L_256;
  if ((undefined.busy)) goto L_31b;
  this.button("status-retry", Ee.default.familyMessagingCheckStatus(), function <atom:0>, false, $e.primary, $e.primaryLabel);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=114B file=chatgpt_family/src/FamilyOnboarding
// closure: e, Ue, this
function {
  if (!((e === Ue.Phone))) goto L_4c;
  return this.sendCode();
  return this.verifyCode();
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=0 bc=960B file=chatgpt_family/src/FamilyOnboarding
// closure: t, Pe, D, Ee, this, $e
function {
  t.beginComponent(Pe.Button, D, undefined, undefined);
  t.setViewModelProperty("label", Ee.default.familyMessagingResend());
  t.setViewModelProperty("onPress", this.resendCode);
  if ((this.isMessagingPending)) goto L_251;
  if (!(!this.viewModel.isDebugPreview)) goto L_251;
  if (!((this.messaging == null))) goto L_1e4;
  this.messaging;
  goto L_205;
  if ((!undefined.canResend)) goto L_251;
  t.setViewModelProperty("disabled", !!this.messaging.needsStatusRefresh);
  t.setViewModelProperty("variant", Pe.ButtonVariant.Ghost);
  t.setViewModelProperty("block", true);
  t.setViewModelProperty("style", $e.resendButton);
  t.setViewModelProperty("labelStyle", $e.welcomeButtonLabel);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=2 bc=744B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: this
// closure: Ue, t, Pe, D, Ee, $e, _
function {
  this = this;
  t.beginRender(_, undefined);
  t.setAttributeStyle("style", $e.phoneButtons);
  if (!((e === Ue.Phone))) goto L_ce;
  goto L_d3;
  // [栈深重同步 3 -> 2]
  if (!((e === Ue.Phone))) goto L_144;
  goto L_1fa;
  // [栈深重同步 4 -> 3]
  if (!(this.hasVerifiedNumber)) goto L_1b2;
  goto L_1fa;
  // [栈深重同步 4 -> 3]
  this.button("verify", Ee.default.familyOnboardingVerify(), function <atom:0>, this.isMessagingPrimaryDisabled(e), $e.primary, $e.primaryLabel);
  if (((e !== Ue.Code))) goto L_2bf;
  if ((this.hasVerifiedNumber)) goto L_2bf;
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=549B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: this
// closure: Ue
function {
  this = this;
  if ((this.isMessagingPending)) goto L_224;
  if (!((this.messaging == null))) goto L_55;
  this.messaging;
  goto L_76;
  if ((!!undefined.needsStatusRefresh)) goto L_224;
  if (!(!this.viewModel.isDebugPreview)) goto L_113;
  if (!((this.messaging == null))) goto L_f1;
  this.messaging;
  goto L_112;
  if ((!undefined.snapshot)) goto L_224;
  if (!((e === Ue.Phone))) goto L_164;
  return !this.validPhone;
  if ((this.hasVerifiedNumber)) goto L_223;
  if (!((6 === this.state.code.length))) goto L_223;
  if (!((this.messaging == null))) goto L_201;
  this.messaging;
  goto L_222;
  return !!undefined.expired;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=564B file=chatgpt_family/src/FamilyOnboarding
// closure: t, Y, Ee, $e, Z
function {
  t.beginRender(Y, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailConnected());
  t.setAttributeStyle("style", $e.connectedTitle);
  t.endRender();
  t.beginRender(Z, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailConnectedBody());
  t.setAttributeStyle("style", $e.notice);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=15 cpool=2 bc=2854B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: t, Y, Ee, $e, Z, H, q, K, U, W, X, Ce, j, z, Q
function {
  this = this;
  t.beginRender(H, undefined);
  t.setAttributeStyle("style", $e.gmailScroll);
  t.beginRender(q, undefined);
  t.setAttributeStyle("style", $e.gmailContent);
  t.beginRender(K, undefined);
  t.setAttributeStyle("style", $e.gmailIntro);
  t.beginRender(U, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailTitle());
  t.setAttributeStyle("style", $e.googleTitle);
  t.endRender();
  t.beginRender(W, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailBody());
  t.setAttributeStyle("style", $e.googleBody);
  t.endRender();
  t.endRender();
  t.beginRender(X, undefined);
  t.setAttributeStyle("style", $e.googleApps);
  this.renderGoogleApp("email", this.googleEmailLogo, 24.5, Ee.default.familyOnboardingGoogleEmail(), Ee.default.familyOnboardingGoogleEmailBody());
  this.renderGoogleApp("calendar", this.googleCalendarLogo, 28, Ee.default.familyOnboardingGoogleCalendar(), Ee.default.familyOnboardingGoogleCalendarBody());
  t.endRender();
  if (!(this.viewModel.isGmailConnected)) goto L_754;
  t.beginComponent(Ce.Card, j, undefined, undefined);
  t.setViewModelProperty("elevated", false);
  t.setUnnamedSlot(function <atom:0>);
  goto L_aaf;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.hasGmailError)) goto L_8b8;
  t.beginRender(z, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailError());
  t.setAttributeStyle("style", $e.notice);
  goto L_aaf;
  // [栈深重同步 1 -> 0]
  if ((this.viewModel.isDebugPreview)) goto L_aaf;
  if ((this.viewModel.isGmailEnabled)) goto L_aaf;
  if ((this.viewModel.isConnectingGmail)) goto L_aaf;
  t.beginRender(Q, undefined);
  t.setAttributeString("value", Ee.default.familyOnboardingGmailUnavailable());
  t.setAttributeStyle("style", $e.notice);
  t.endRender();
  t.endRender();
  t.endRender();
  this.renderGmailFooter();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=1179B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: t, J, $e, Ee
function {
  this = this;
  t.beginRender(J, undefined);
  t.setAttributeStyle("style", $e.gmailFooter);
  if (!(!this.viewModel.isGmailConnected)) goto L_133;
  if (!(this.viewModel.hasGmailError)) goto L_133;
  goto L_138;
  // [栈深重同步 3 -> 2]
  if (!(this.viewModel.isGmailConnected)) goto L_1c8;
  goto L_32f;
  // [栈深重同步 4 -> 3]
  if (!(this.viewModel.isConnectingGmail)) goto L_258;
  goto L_32f;
  // [栈深重同步 4 -> 3]
  if (!(this.viewModel.hasGmailError)) goto L_2e7;
  goto L_32f;
  // [栈深重同步 4 -> 3]
  if (!(!this.viewModel.isGmailConnected)) goto L_427;
  if ((!this.viewModel.isGmailEnabled)) goto L_427;
  this.button("gmail", Ee.default.familyOnboardingConnectGmail(), this.gmailAction, this.viewModel.isConnectingGmail, $e.googlePrimary, $e.googlePrimaryLabel);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=137B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Re, Ge
function {
  this = this;
  if (!((this.googleEmailAsset == null))) goto L_88;
  this.googleEmailAsset;
  this.googleEmailAsset = Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/google-connection/gmail.png.bin"));
  return Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/google-connection/gmail.png.bin"));
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=137B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Re, Ge
function {
  this = this;
  if (!((this.googleCalendarAsset == null))) goto L_88;
  this.googleCalendarAsset;
  this.googleCalendarAsset = Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/google-connection/calendar.png.bin"));
  return Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/google-connection/calendar.png.bin"));
}

// fn <atom:0>  args=5 vars=5 closure=8 cpool=0 bc=1228B file=chatgpt_family/src/FamilyOnboarding
// args: e, i, o, s, n
// closure: t, $, $e, ee, te, ie, oe, se
function {
  t.beginRender($, undefined);
  t.setAttributeString("accessibilityId", "family.onboarding.google.".concat(e));
  t.setAttributeStyle("style", $e.googleRow);
  t.beginRender(ee, undefined);
  t.setAttributeStyle("style", $e.googleIconTile);
  t.beginRender(te, undefined);
  t.setAttribute("src", i);
  t.setAttributeNumber("width", o);
  t.setAttributeNumber("height", o);
  t.endRender();
  t.endRender();
  t.beginRender(ie, undefined);
  t.setAttributeStyle("style", $e.googleRowCopy);
  t.beginRender(oe, undefined);
  t.setAttributeString("value", s);
  t.setAttributeStyle("style", $e.googleRowTitle);
  t.endRender();
  t.beginRender(se, undefined);
  t.setAttributeString("value", n);
  t.setAttributeStyle("style", $e.googleRowBody);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=260B file=chatgpt_family/src/FamilyOnboarding
// closure: t, ye, he, e, this
function {
  t.beginComponent(ye.FamilyCodeCaret, he, String(e), undefined);
  t.setViewModelProperty("after", (6 === e));
  t.setViewModelProperty("reduceMotion", this.shouldReduceMotion);
  t.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=12 cpool=1 bc=996B file=chatgpt_family/src/FamilyOnboarding
// args: s
// closure: t, ye, he, e, this, ae, $e, o, i, Ae, le, de
function {
  t.beginRender(ae, String(s));
  t.setAttributeStyle("style", $e.cellBox);
  if (!(o)) goto L_10f;
  if (!((e !== i))) goto L_10f;
  if (!((s >= e))) goto L_10f;
  if (!((s < i))) goto L_10f;
  goto L_154;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("borderColor", Ae.OAIColor.Transparent);
  t.beginRender(le, undefined);
  t.setAttributeStyle("style", $e.cellGlyph);
  t.beginRender(de, undefined);
  t.setAttributeString("accessibilityId", "family.onboarding.code.".concat(s));
  if (!((this.state.code[s] == null))) goto L_2ce;
  this.state.code[s];
  t.setAttributeString("value", "");
  t.setAttributeStyle("style", $e.cell);
  t.endRender();
  if (!(o)) goto L_393;
  if (!((e === i))) goto L_393;
  if (!((s === Math.min(e, 5)))) goto L_393;
  function <atom:0>();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=13 cpool=1 bc=2135B file=chatgpt_family/src/FamilyOnboarding
// locals: e, i, o, this
// closure: t, ye, he, ae, $e, Ae, le, de, ne, re, ge, Ee, Me
function {
  this = this;
  let o;
  let i;
  let e;
  e = Math.max(0, Math.min(this.state.code.length, this.state.codeSelection[0]));
  i = Math.max(e, Math.min(this.state.code.length, this.state.codeSelection[1]));
  if (!(this.state.editingCode)) goto L_27e;
  if (!(this.wasActive)) goto L_27e;
  if (!(!this.isClosed)) goto L_27e;
  o = !this.isMessagingPending;
  t.beginRender(ne, undefined);
  t.setAttributeFunction("onTap", this.focusCodeInput);
  t.setAttributeStyle("style", $e.codeRow);
  t.beginRender(re, undefined);
  t.setAttribute("touchEnabled", false);
  t.setAttributeStyle("style", $e.cells);
  [0, 1, 2, 3, 4, 5].map(function <atom:0>);
  t.endRender();
  t.beginRender(ge, undefined);
  t.setAttributeRef(this.codeInput);
  t.setAttributeString("accessibilityLabel", Ee.default.familyMessagingCode());
  t.setAttributeString("contentType", Me.oneTimeCodeContentType());
  t.setAttributeFunction("onEditBegin", this.beginCodeEdit);
  t.setAttributeFunction("onEditEnd", this.endCodeEdit);
  t.setAttributeFunction("onLayout", this.keepSetupInputVisible);
  t.setAttributeFunction("onWillChange", this.formatCodeInput);
  t.setAttributeFunction("onChange", this.changeCode);
  t.setAttributeFunction("onSelectionChange", this.codeSelectionChanged);
  t.setAttribute("enabled", !this.isMessagingPending);
  t.setAttributeStyle("style", $e.codeInput);
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=6 vars=7 closure=3 cpool=0 bc=672B file=chatgpt_family/src/FamilyOnboarding
// args: e, i, o, s, n, r
// locals: this
// closure: t, Pe, ue
function {
  this = this;
  if (!((this.state.setupPage == null))) goto L_fa;
  this.state.setupPage;
  t.beginComponent(Pe.Button, ue, "".concat(this.state.welcomePage, ".primary.", e), undefined);
  t.setViewModelProperty("accessibilityId", "family.onboarding.".concat(e));
  t.setViewModelProperty("label", i);
  t.setViewModelProperty("onPress", o);
  t.setViewModelProperty("disabled", s);
  t.setViewModelProperty("block", true);
  t.setViewModelProperty("style", n);
  t.setViewModelProperty("labelStyle", r);
  t.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=117B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Ne
function {
  this = this;
  if (!(Ne.isVersionAtLeast(248))) goto L_74;
  return (true === this.viewModel.isClosed);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=114B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Ne
function {
  this = this;
  if (!(Ne.isVersionAtLeast(248))) goto L_70;
  return this.context.invitationId;
  return undefined;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=0 bc=1119B file=chatgpt_family/src/FamilyOnboarding
// args: t
// locals: i, o, this
// closure: Ue, Be, Ee, e
function {
  this = this;
  let i;
  if ((t.completing)) goto L_76;
  if (!((this.messaging == null))) goto L_55;
  this.messaging;
  goto L_76;
  if (!(undefined.busy)) goto L_7a;
  return undefined; // async
  t.completing = true;
  if (!((this.messaging == null))) goto L_b0;
  this.messaging;
  goto L_f6;
  i = (await undefined.completeGroup(this.invitationId));
  if (!((undefined !== i))) goto L_45d;
  if (!(this.isCurrentSetupAttempt(t))) goto L_45d;
  if (!(i)) goto L_1e9;
  if (!(this.viewModel.isGmailConnected)) goto L_1c0;
  goto L_1e2;
  // [栈深重同步 3 -> 2]
  this.transitionSetup(Ue.Gmail);
  goto L_45d;
  try { // catch -> L_3ac
  if (!((undefined === this.invitationId))) goto L_2f1;
  goto L_339;
  // [栈深重同步 4 -> 3]
  (await Be.platformAlert.present({title: Ee.default.familyMessagingGroupErrorTitle(), message: Ee.default.familyMessagingJoinError(), actions: [{id: "ok", title: Ee.default.familyMessagingOk(), role: 1}]}));
  <?>;
  goto L_40d;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_40c
  if (!(e.isLoggingEnabled)) goto L_408;
  console.warn("Family setup alert could not be presented");
  <?>;
  goto L_40d;
  // [栈深重同步 0 -> 1]
  throw <?>;
  if (!(this.isCurrentSetupAttempt(t))) goto L_45c;
  this.backToWelcome();
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=120B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: this
function {
  this = this;
  if (!((this.setupAttempt === e))) goto L_77;
  if (!(!this.isDestroyed())) goto L_77;
  return !this.isClosed;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=161B file=chatgpt_family/src/FamilyOnboarding
// locals: this
function {
  this = this;
  if (!((this.messaging == null))) goto L_2c;
  this.messaging;
  goto L_4d;
  if ((!!undefined.busy)) goto L_a0;
  if (!((this.setupAttempt == null))) goto L_7d;
  this.setupAttempt;
  goto L_9e;
  return !!undefined.completing;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=189B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: qe
function {
  this = this;
  if (!((this.messaging == null))) goto L_2c;
  this.messaging;
  goto L_76;
  if (!((undefined.snapshot == null))) goto L_55;
  undefined.snapshot;
  goto L_76;
  return (undefined.status === qe.FamilyMessagingStatus.Verified);
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=1130B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
// closure: Ke, Ee
function {
  this = this;
  let e;
  if (!((this.messaging == null))) goto L_2f;
  this.messaging;
  goto L_50;
  e = undefined.error;
  if (!((e === Ke.FamilyMessagingError.IncorrectCode))) goto L_e5;
  return Ee.default.familyMessagingIncorrectCode();
  if (((e === Ke.FamilyMessagingError.Expired))) goto L_17d;
  if (!((this.messaging == null))) goto L_15c;
  this.messaging;
  goto L_17d;
  if (!(undefined.expired)) goto L_1c8;
  return Ee.default.familyMessagingExpired();
  if (!((e === Ke.FamilyMessagingError.RateLimited))) goto L_25c;
  return Ee.default.familyMessagingRateLimited();
  if (!((e === Ke.FamilyMessagingError.PhoneUnavailable))) goto L_2f0;
  return Ee.default.familyMessagingPhoneUnavailable();
  if (!((e === Ke.FamilyMessagingError.DisconnectRequired))) goto L_384;
  return Ee.default.familyMessagingDisconnectRequired();
  if (!((e === Ke.FamilyMessagingError.ActivationFailed))) goto L_418;
  return Ee.default.familyMessagingActivationFailed();
  if (!((undefined !== e))) goto L_468;
  return Ee.default.familyMessagingUnavailable();
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=305B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Ne
function {
  this = this;
  if (!(Ne.isVersionAtLeast(179))) goto L_130;
  if (!(!this.viewModel.isDebugPreview)) goto L_130;
  if (!(this.context.onOpenLinkedMessages)) goto L_130;
  if (!((this.messaging == null))) goto L_e6;
  this.messaging;
  return undefined;
  // [栈深重同步 0 -> 1]
  if (!((<?>.snapshot == null))) goto L_10e;
  <?>.snapshot;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.assistantPhone;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=chatgpt_family/src/FamilyOnboarding
// locals: this
function {
  this = this;
  if ((!!this.context.onOpenMessages)) goto L_6f;
  return !!this.linkedMessagesPhone;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=251B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
function {
  this = this;
  let e;
  e = this.setupKeyboardScroll;
  this.setupKeyboardScroll = undefined;
  if (!(e)) goto L_fa;
  if (!((e.scroll === this.setupScroll.single()))) goto L_fa;
  e.scroll.setAttribute("staticContentHeight", undefined);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=4 bc=152B file=chatgpt_family/src/FamilyOnboarding
// locals: this
function {
  this = this;
  return new RegExp("^(?:\\+1)?\\d{10}$").test(this.state.phone.replace(new RegExp("[^\\d+]"), ""));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=140B file=chatgpt_family/src/FamilyOnboarding
// closure: this, t
function {
  if ((this.isDestroyed())) goto L_8b;
  if (((this.introductionAnimation !== t))) goto L_8b;
  this.introductionAnimation = undefined;
  this.setState({introductionMoving: false});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=44B file=chatgpt_family/src/FamilyOnboarding
// closure: this, e
function {
  return this.setState({showsIntroduction: e});   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=548B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, this
// closure: be
function {
  this = this;
  let t;
  if (((undefined !== this.state.setupPage))) goto L_107;
  if ((!this.wasActive)) goto L_107;
  if ((this.state.introductionMoving)) goto L_107;
  if (!((this.state.showsIntroduction === e))) goto L_10a;
  return;
  if (!(this.shouldReduceMotion)) goto L_15c;
  this.setState({showsIntroduction: e});
  return;
  this.setState({introductionMoving: true});
  null;
  be.familyCarouselTransition;
  t = this.createAnimation({beginFromCurrentState: true, completion: function <atom:0>}, function <atom:0>);
  this.introductionAnimation = t;
  t.start();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=216B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
function {
  this = this;
  let e;
  e = this.introductionAnimation;
  this.introductionAnimation = undefined;
  if (!((e == null))) goto L_3e;
  e;
  goto L_62;
  undefined.cancel();
  if (!(this.state.introductionMoving)) goto L_d7;
  this.setState({introductionMoving: false});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=152B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: this
function {
  this = this;
  if (!((undefined !== this.state.setupPage))) goto L_97;
  if (!(this.setupAttempt)) goto L_97;
  this.transitionSetup(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=372B file=chatgpt_family/src/FamilyOnboarding
// args: t
// locals: t#1
// closure: e, Ue, this
function {
  let t#1;
  if (!((t === undefined))) goto L_c;
  t;
  t = false;
  t#1 = false;
  if ((t)) goto L_173;
  if (((e !== Ue.Code))) goto L_173;
  if ((this.isDestroyed())) goto L_173;
  if ((!this.wasActive)) goto L_173;
  if (((this.state.setupPage !== Ue.Code))) goto L_173;
  if ((this.hasVerifiedNumber)) goto L_173;
  this.codeInput.setAttribute("focused", true);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=57B file=chatgpt_family/src/FamilyOnboarding
// closure: this, e
function {
  return this.setState({setupPage: e, code: "", editingCode: false});   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=2 bc=765B file=chatgpt_family/src/FamilyOnboarding
// args: e
// locals: t, i, this
// closure: Ue, je
function {
  this = this;
  let i;
  let t;
  if (!((this.state.setupPage === e))) goto L_50;
  return;
  t = (this.state.setupPage === Ue.Gmail);
  this.awaitingGoogleConnection = false;
  if (!((e === Ue.Code))) goto L_137;
  this.codeInput.setAttribute("value", "");
  i = function <atom:0>;
  this.phoneInput.setAttribute("focused", false);
  this.codeInput.setAttribute("focused", false);
  null;
  je;
  this.transition({completion: i}, function <atom:0>);
  if (!(this.shouldReduceMotion)) goto L_23f;
  i();
  if (!(t)) goto L_28d;
  this.context.onGmailDisappeared();
  if (!((e === Ue.Gmail))) goto L_2fc;
  this.context.onGmailAppeared();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=82B file=chatgpt_family/src/FamilyOnboarding
// args: e, t
// locals: this
function {
  this = this;
  if (!(this.shouldReduceMotion)) goto L_2a;
  goto L_51;
  // [栈深重同步 1 -> 0]
  this.animate(e, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=117B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Ne
function {
  this = this;
  if (!(Ne.isVersionAtLeast(253))) goto L_74;
  return (true === this.viewModel.reduceMotion);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=303B file=chatgpt_family/src/FamilyOnboarding
// closure: Ze, Re, we, Ge
function {
  if (!((undefined === Ze))) goto L_12a;
  {}[we.OAI_LIGHT_THEME] = Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/messages-completion/family-setup-loading-light.json"));
  Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/messages-completion/family-setup-loading-light.json"));
  {}[we.OAI_DARK_THEME] = Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/messages-completion/family-setup-loading-dark.json"));
  Re.makeAssetFromBytes(Ge.getModuleFileEntryAsBytes("chatgpt_family", "res/messages-completion/family-setup-loading-dark.json"));
  Ze = Re.makeThemableAsset({});
  Re.makeThemableAsset({});
  return Ze;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=267B file=chatgpt_family/src/FamilyOnboarding
// args: e
function {
  if (!((e.getAppliedAttribute("opacity") == null))) goto L_31;
  e.getAppliedAttribute("opacity");
  if (!((e.getAppliedAttribute("translationX") == null))) goto L_66;
  e.getAppliedAttribute("translationX");
  if (!((e.getAppliedAttribute("translationY") == null))) goto L_9b;
  e.getAppliedAttribute("translationY");
  if (!((e.getAppliedAttribute("scaleX") == null))) goto L_d0;
  e.getAppliedAttribute("scaleX");
  if (!((e.getAppliedAttribute("scaleY") == null))) goto L_105;
  e.getAppliedAttribute("scaleY");
  return {opacity: 1, translationX: 0, translationY: 0, scaleX: 1, scaleY: 1};
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=102B file=chatgpt_family/src/FamilyOnboarding
// args: e, t
// locals: i
function {
  let i;
  for (const i of Object.keys(t)) {
    e.setAttribute(i, t[i]);
  }
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=39B file=chatgpt_family/src/FamilyOnboarding
// args: t
// closure: this, e
function {
  return this.handleArtworkLoad(e, t);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=2 cpool=1 bc=344B file=chatgpt_family/src/FamilyOnboarding
// args: e, i, o
// locals: this
// closure: t, ce
function {
  this = this;
  t.beginRender(ce, undefined);
  t.setAttributeRef(e);
  t.setAttribute("src", i);
  t.setAttributeStyle("style", o);
  t.setAttributes(this.artworkPose(e));
  t.setAttributeFunction("onAssetLoad", function <atom:0>);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=248B file=chatgpt_family/src/FamilyOnboarding
// args: t, i
// locals: this
// closure: e
function {
  this = this;
  if ((this.isDestroyed())) goto L_f7;
  this.loadedArt.add(t);
  if ((i)) goto L_d1;
  if (!(e.isLoggingEnabled)) goto L_d1;
  console.warn("[FamilyOnboarding] Illustration asset failed to load");
  this.startArtwork();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=2 cpool=0 bc=865B file=chatgpt_family/src/FamilyOnboarding
// locals: e, this
// closure: We, Xe
function {
  this = this;
  let e;
  if (!((undefined === this.state.setupPage))) goto L_70;
  goto L_b7;
  // [栈深重同步 1 -> 0]
  e = Xe[this.state.setupPage];
  if (!((e !== this.artworkScene))) goto L_360;
  this.artworkPlayback.reset();
  this.finishArtwork();
  this.artworkScene = e;
  this.buildArtworkBeats();
  if (!((e !== We.Phone))) goto L_1d5;
  if (((e !== We.Code))) goto L_2a6;
  this.artworkLaidOut = false;
  this.loadedArt.delete(this.phoneArt);
  this.setArtworkPose(this.phoneArt, {opacity: 0, translationY: 18});
  if (!(this.wasActive)) goto L_2f0;
  if ((!this.shouldReduceMotion)) goto L_360;
  this.artworkPlayback.settle();
  this.finishArtwork();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=84B file=chatgpt_family/src/FamilyOnboarding
// closure: this
function {
  return this.setArtworkPose(this.phoneArt, {opacity: 1, translationY: 0});   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=2 bc=204B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: We
function {
  this = this;
  this.artworkBeats = [];
  if (!((this.artworkScene !== We.Phone))) goto L_9d;
  if (((this.artworkScene !== We.Code))) goto L_cb;
  this.addArtworkBeat(0, 0.35, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=233B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: We
function {
  this = this;
  if (!((this.artworkScene !== We.Phone))) goto L_90;
  if (((this.artworkScene !== We.Code))) goto L_e8;
  this.setArtworkPose(this.phoneArt, {opacity: 1, translationY: 0});
  return;
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=2 bc=106B file=chatgpt_family/src/FamilyOnboarding
// args: e, t, i
// locals: this
function {
  this = this;
  this.artworkBeats.push({delayMilliseconds: e, durationSeconds: t, controlPoints: [0.22, 1, 0.36, 1], changes: i});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=762B file=chatgpt_family/src/FamilyOnboarding
// locals: this
// closure: Ue, Ee, De
function {
  this = this;
  if (!((this.state.setupPage === Ue.Phone))) goto L_b3;
  return Ee.default.familyOnboardingPhoneTitle();   // tail call
  if (!((this.state.setupPage === Ue.Code))) goto L_192;
  if (!(this.hasVerifiedNumber)) goto L_149;
  return Ee.default.familyOnboardingVerifiedTitle();
  return Ee.default.familyOnboardingCodeTitle();
  if (!((this.state.setupPage === Ue.Gmail))) goto L_200;
  return Ee.default.familyOnboardingGmailTitle();   // tail call
  if (!((this.state.setupPage === Ue.Messages))) goto L_26e;
  return Ee.default.familyOnboardingMessagesTitle();   // tail call
  return De.familyWelcomeScenes[this.state.welcomePage].title();   // tail call
}

// fn <atom:0>  args=3 vars=114 closure=0 cpool=64 bc=13040B file=chatgpt_family/src/FamilyOnboarding
// args: require, module, exports
// locals: e, t, i, o, s, n, r, a, l, d, h, g, u, c, p, y, m, b, f, v, w, A, S, P, C, k, M, R, I, O, N, V, F, x, G, L, T, E, B, _, D, H, q, K, U, W, X, j, Y, Z, z, Q, J, $, ee, te, ie, oe, se, ne, re, ae, le, de, he, ge, ue, ce, pe, ye, me, be, fe, ve, we, Ae, Se, Pe, Ce, ke, Me, Re, Ie, Oe, Ne, Ve, Fe, xe, Ge, Le, Te, Ee, Be, _e, De, He, qe, Ke, Ue, We, Xe, je, Ye, Ze, ze, Qe, Je, FamilyOnboarding, <class_fields_init>, FamilyOnboarding#1, $e
function {
  let $e;
  let FamilyOnboarding#1;
  let Je;
  let Qe;
  let ze;
  let Ze;
  let Ye;
  let je;
  let Xe;
  let Ke;
  let qe;
  let He;
  let De;
  let _e;
  let Be;
  let Ee;
  let Te;
  let Le;
  let Ge;
  let xe;
  let Fe;
  let Ve;
  let Ne;
  let Oe;
  let Ie;
  let Re;
  let Me;
  let ke;
  let Ce;
  let Pe;
  let Se;
  let Ae;
  let we;
  let ve;
  let fe;
  let be;
  let me;
  let ye;
  let pe;
  let ce;
  let ue;
  let ge;
  let he;
  let de;
  let le;
  let ae;
  let re;
  let ne;
  let se;
  let oe;
  let ie;
  let te;
  let ee;
  let $;
  let J;
  let Q;
  let z;
  let Z;
  let Y;
  let j;
  let X;
  let W;
  let U;
  let K;
  let q;
  let H;
  let D;
  let _;
  let B;
  let E;
  let T;
  let L;
  let G;
  let x;
  let F;
  let V;
  let N;
  let O;
  let I;
  let R;
  let M;
  let k;
  let C;
  let P;
  let S;
  let A;
  let w;
  let v;
  let f;
  let b;
  let m;
  let y;
  let p;
  let c;
  let u;
  let g;
  let h;
  let d;
  let l;
  let a;
  let r;
  let n;
  let s;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.FamilyOnboarding = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeComponentPrototype(undefined, "v10vvw0X4O4hSnQT");
  o = t.makeNodePrototype("view", ["accessibilityNavigation", "passthrough"], "gV4YxMYyDnwbGhQo");
  s = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.introduction.track"], "GISgXbLjI7uGcYEB");
  n = t.makeNodePrototype("view", undefined, "-BE5siH4fxnScP37");
  r = t.makeComponentPrototype(undefined, "pHcv5tKPG8p-Nlv5");
  a = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.introduction"], "9AcJfQeZATh1ZowG");
  l = t.makeComponentPrototype(undefined, "ihGqrplDwujAxdEG");
  d = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.setup"], "klVJdvX15K6-tP4P");
  h = t.makeNodePrototype("view", undefined, "Vp-paZ5-6kMHJLk2");
  g = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.header"], "oTwqCgUbMNAnfqdr");
  u = t.makeNodePrototype("view", undefined, "N61CULXaMeGBZ29n");
  c = t.makeNodePrototype("view", undefined, "9oup91X-yTmKH9In");
  p = t.makeComponentPrototype(undefined, "gSy--ycQNsUS1Dry");
  y = t.makeNodePrototype("view", ["position", "absolute", "top", 0, "right", 0], "Eln2l2_zuCqN6f5P");
  m = t.makeNodePrototype("view", undefined, "Bvw5sn7g80zhZWVM");
  b = t.makeComponentPrototype(undefined, "37PZRVak_roElFg_");
  f = t.makeNodePrototype("view", ["position", "absolute", "top", 0, "right", 0], "n6W6u5vxMfT9WUL9");
  v = t.makeNodePrototype("view", undefined, "JRzS3RlTn8YUezRu");
  w = t.makeComponentPrototype(undefined, "Urtv3rOhfhaAMPDR");
  A = t.makeNodePrototype("view", undefined, "QgGRiZJxTuye-C6E");
  S = t.makeNodePrototype("image", ["accessibilityId", "family.onboarding.wordmark-poster"], "KZQV6RUrdSUeFD8_");
  P = t.makeNodePrototype("animatedimage", undefined, "tZGudcJq-3l5ogX6");
  C = t.makeNodePrototype("layout", undefined, "dXa0abcXBmnPOvP2");
  k = t.makeNodePrototype("layout", undefined, "W2v-X5zaDUv2vRNy");
  M = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.title"], "efIT-vBRxR5ZKnOq");
  R = t.makeNodePrototype("label", undefined, "ZCBN0HPErnkGu0a-");
  I = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.messages.unavailable"], "pqd_53NZW_i9nL1U");
  O = t.makeNodePrototype("layout", undefined, "3Hf2rrl5VYRAQhk3");
  N = t.makeNodePrototype("scroll", undefined, "w9hF7ejFtoxBd0DA");
  V = t.makeNodePrototype("layout", undefined, "JVasVazKfvkSBG3D");
  F = t.makeNodePrototype("layout", undefined, "hzsCyDqhSS_fzhyG");
  x = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.title"], "HJwXxTeB2z9spdSp");
  G = t.makeNodePrototype("label", undefined, "6Ql7w3CSemTr4-Nx");
  L = t.makeNodePrototype("layout", undefined, "Cxe8NNYvjW8qeBBF");
  T = t.makeNodePrototype("textfield", ["accessibilityId", "family.onboarding.phone", "contentType", "phoneNumber", "placeholder", "(202) 555-0101"], "WLxgzUjx4jFXg_wK");
  E = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.verified.phone"], "pNAmiaFI2LwsQJK7");
  B = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.messaging.error"], "F8GVnk53Gdoix9mZ");
  _ = t.makeNodePrototype("layout", undefined, "kzSJtql-MDVO2GrO");
  D = t.makeComponentPrototype(["accessibilityId", "family.onboarding.resend"], "dIvLgYty5r0Mw4HA");
  H = t.makeNodePrototype("scroll", undefined, "Rk_uu5-9pdewg3Am");
  q = t.makeNodePrototype("layout", undefined, "VEhFj8A26IG__oz7");
  K = t.makeNodePrototype("layout", undefined, "nuq-aK9LHEnxqOFH");
  U = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.title"], "rGc6SVg_VW2RrAgR");
  W = t.makeNodePrototype("label", undefined, "kqFHyRlMjOLaXUG0");
  X = t.makeNodePrototype("layout", undefined, "O6s547sadu1zRLaC");
  j = t.makeComponentPrototype(["width", "100%"], "CtmZVTgI5SzFwIIT");
  Y = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.gmail.connected"], "c9vXhU-BxG_iynUU");
  Z = t.makeNodePrototype("label", undefined, "avLMD6oPFE6e4Ri7");
  z = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.gmail.error"], "aO5cPZug5Aq9At3F");
  Q = t.makeNodePrototype("label", ["accessibilityId", "family.onboarding.gmail.unavailable"], "Hskd135PfSyE7MRr");
  J = t.makeNodePrototype("layout", undefined, "DpY_L7lEjeJmB_7Q");
  $ = t.makeNodePrototype("view", undefined, "Ka7Rsv60qFNHe60_");
  ee = t.makeNodePrototype("view", undefined, "_ZTLWniVyRT_4lo0");
  te = t.makeNodePrototype("image", ["objectFit", "contain", "accessibilityNavigation", "ignored"], "AQcR68jH6f8UDlQF");
  ie = t.makeNodePrototype("layout", undefined, "U8efDg-5NsWPC_0p");
  oe = t.makeNodePrototype("label", undefined, "ZH9IHF1rSRTWJbnA");
  se = t.makeNodePrototype("label", undefined, "7GHJK_QV6flqHgvX");
  ne = t.makeNodePrototype("view", ["accessibilityId", "family.onboarding.code.entry"], "6XewUZIptFImN47w");
  re = t.makeNodePrototype("view", ["accessibilityNavigation", "ignored"], "H-XQpcIHx29ThO6W");
  ae = t.makeNodePrototype("view", undefined, "2tsd8E-SAxIdAfeB");
  le = t.makeNodePrototype("layout", undefined, "3DEWHg76frLNc005");
  de = t.makeNodePrototype("label", undefined, "j5_xsnrpQlwbiHRp");
  he = t.makeComponentPrototype(undefined, "I1mflM_YowIa_gTj");
  ge = t.makeNodePrototype("textfield", ["accessibilityId", "family.onboarding.code"], "XN9Ue_NW20d0dTUW");
  ue = t.makeComponentPrototype(undefined, "K_HHhZbg7LkWwxRD");
  ce = t.makeNodePrototype("image", undefined, "r2gn7a6-RQkPZhIr");
  pe = require("./FamilyIntroduction");
  ye = require("./FamilyCodeCaret");
  me = require("./FamilyPrototypeCarousel");
  be = require("./FamilyPrototypeMotion");
  fe = require("dil_icon_assets/res");
  ve = require("chatgpt_family/res/messages-completion");
  we = require("oai_core/src/OAITheme");
  Ae = require("oai_core/src/OAITokens");
  Se = require("oai_core/src/OAITypography");
  Pe = require("oai_ui/src/components/Button");
  Ce = require("oai_ui/src/components/Card");
  ke = require("oai_ui/src/components/IconButton");
  Me = require("oai_ui/src/TextInputCapabilities");
  Re = require("valdi_core/src/Asset");
  Ie = require("valdi_core/src/Application");
  Oe = require("valdi_core/src/Component");
  Ne = require("valdi_core/src/CompilerIntrinsics");
  Ve = require("valdi_core/src/ElementRef");
  Fe = require("valdi_core/src/Device");
  xe = require("valdi_core/src/Style");
  Ge = require("valdi_core/src/Valdi");
  Le = require("valdi_core/src/utils/RenderedElementUtils");
  Te = require("valdi_core/src/SystemFont");
  Ee = require("./Strings");
  Be = require("valdi_platform_alert/src/PlatformAlert");
  _e = require("./FamilyScenePlayback");
  De = require("./FamilySceneDescriptors");
  He = require("oai_platform_services/src/OAINetworkClient");
  qe = require("./FamilyMessagingApi");
  Ke = require("./FamilyMessagingController");
  if ((Ue)) goto L_117c;
  Ue = {};
  !function <atom:0>({});
  if ((We)) goto L_118a;
  We = {};
  function <atom:0>({});
  Xe = [We.Phone, We.Code, We.None, We.Messages];
  je = {duration: 0.3, appearanceBehavior: {enterAttributes: {translationX: 1}, exitAttributes: {translationX: -1}}};
  Ye = {duration: 0.3, appearanceBehavior: {exitAttributes: {translationX: 1}}};
  Ze = undefined;
  ze = 6;
  Qe = 5.7;
  Je = 44;
  let FamilyOnboarding;
  let <class_fields_init>;
  class FamilyOnboarding extends Oe.StatefulComponent { ... }
  <proto:FamilyOnboarding>.onCreate = function <atom:0>;
  <proto:FamilyOnboarding>.onViewModelUpdate = function <atom:0>;
  <proto:FamilyOnboarding>.onDestroy = function <atom:0>;
  <proto:FamilyOnboarding>.onRender = function <atom:0>;
  <proto:FamilyOnboarding>.renderNavigation = function <atom:0>;
  <proto:FamilyOnboarding>.renderSetup = function <atom:0>;
  <proto:FamilyOnboarding>.renderMessagingSetup = function <atom:0>;
  <proto:FamilyOnboarding>.renderMessagingNotice = function <atom:0>;
  <proto:FamilyOnboarding>.renderMessagingActions = function <atom:0>;
  <proto:FamilyOnboarding>.isMessagingPrimaryDisabled = function <atom:0>;
  <proto:FamilyOnboarding>.renderGmailSetup = function <atom:0>;
  <proto:FamilyOnboarding>.renderGmailFooter = function <atom:0>;
  <proto:FamilyOnboarding>.googleEmailLogo = function <atom:0>;
  <proto:FamilyOnboarding>.googleCalendarLogo = function <atom:0>;
  <proto:FamilyOnboarding>.renderGoogleApp = function <atom:0>;
  <proto:FamilyOnboarding>.renderCode = function <atom:0>;
  <proto:FamilyOnboarding>.button = function <atom:0>;
  <proto:FamilyOnboarding>.isClosed = function <atom:0>;
  <proto:FamilyOnboarding>.invitationId = function <atom:0>;
  <proto:FamilyOnboarding>.completeMessagingSetup = function <atom:0>;
  <proto:FamilyOnboarding>.isCurrentSetupAttempt = function <atom:0>;
  <proto:FamilyOnboarding>.isMessagingPending = function <atom:0>;
  <proto:FamilyOnboarding>.hasVerifiedNumber = function <atom:0>;
  <proto:FamilyOnboarding>.messagingNotice = function <atom:0>;
  <proto:FamilyOnboarding>.linkedMessagesPhone = function <atom:0>;
  <proto:FamilyOnboarding>.canOpenMessages = function <atom:0>;
  <proto:FamilyOnboarding>.clearSetupScroll = function <atom:0>;
  <proto:FamilyOnboarding>.validPhone = function <atom:0>;
  <proto:FamilyOnboarding>.transitionIntroduction = function <atom:0>;
  <proto:FamilyOnboarding>.settleIntroduction = function <atom:0>;
  <proto:FamilyOnboarding>.advance = function <atom:0>;
  <proto:FamilyOnboarding>.transitionSetup = function <atom:0>;
  <proto:FamilyOnboarding>.transition = function <atom:0>;
  <proto:FamilyOnboarding>.shouldReduceMotion = function <atom:0>;
  <proto:FamilyOnboarding>.wordmark = function <atom:0>;
  <proto:FamilyOnboarding>.artworkPose = function <atom:0>;
  <proto:FamilyOnboarding>.setArtworkPose = function <atom:0>;
  <proto:FamilyOnboarding>.renderArtworkImage = function <atom:0>;
  <proto:FamilyOnboarding>.handleArtworkLoad = function <atom:0>;
  <proto:FamilyOnboarding>.prepareArtwork = function <atom:0>;
  <proto:FamilyOnboarding>.buildArtworkBeats = function <atom:0>;
  <proto:FamilyOnboarding>.finishArtwork = function <atom:0>;
  <proto:FamilyOnboarding>.addArtworkBeat = function <atom:0>;
  <proto:FamilyOnboarding>.title = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:FamilyOnboarding>;
  FamilyOnboarding = function <atom:0>;
  // close_loc <class_fields_init>
  FamilyOnboarding#1 = function <atom:0>;
  exports.FamilyOnboarding = FamilyOnboarding#1;
  $e = {root: new xe.Style({width: "100%", height: "100%", backgroundColor: Ae.OAIColor.BgCanvas, slowClipping: true}), screen: new xe.Style({position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: Ae.OAIColor.BgCanvas}), introductionTrack: new xe.Style({position: "absolute", left: 0, top: 0, bottom: 0, limitToViewport: false}), introductionPanel: new xe.Style({position: "absolute", left: 0, top: 0, bottom: 0, backgroundColor: Ae.OAIColor.BgCanvas}), header: new xe.Style({position: "absolute", left: 16, right: 16, top: 0, height: Je, flexDirection: "row", justifyContent: "space-between"}), glassButton: new xe.Style({width: 44, height: 44, borderRadius: 36, backgroundColor: Ae.OAIColor.BgElevatedPrimary, boxShadow: "0 19.286 27 rgba(0, 0, 0, 0.08)"}), glass: new xe.Style({position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: 36, borderWidth: 1.286, borderColor: Ae.OAIColor.BorderLight, backgroundColor: Ae.OAIColor.BgElevatedPrimary, touchEnabled: false}), navigationControl: new xe.Style({width: 44, height: 44, backgroundColor: Ae.OAIColor.Transparent}), phoneScroll: new xe.Style({limitToViewport: false, width: "100%", showsVerticalScrollIndicator: false}), phoneContent: new xe.Style({paddingTop: 120, paddingLeft: 24, paddingRight: 24, paddingBottom: 24, width: "100%", alignItems: "center", gap: 24}), character: new xe.Style({width: 215, height: 122, objectFit: "contain"}), phoneCopy: new xe.Style({width: "100%", gap: 4}), phoneTitle: new xe.Style({width: "100%", font: Te.systemSemiboldFont(20), lineHeight: 25, letterSpacing: -0.46, color: Ae.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0}), phoneDescription: new xe.Style({width: "100%", font: Te.systemFont(17), lineHeight: 24, letterSpacing: -0.44, color: Ae.OAIColor.TextTertiary, textAlign: "center", numberOfLines: 0}), phoneActions: new xe.Style({width: "100%", gap: 20}), phoneButtons: new xe.Style({width: "100%", gap: 8}), resendButton: new xe.Style({height: 54, paddingLeft: 20, paddingRight: 20}), phone: new xe.Style({width: "100%", height: 49, font: Te.systemFont(20), color: Ae.OAIColor.TextPrimary, placeholderColor: Ae.OAIColor.TextTertiary, textAlign: "center", backgroundColor: Ae.OAIColor.BgTertiary, borderRadius: 16}), codeRow: new xe.Style({width: "100%", height: 49}), cells: new xe.Style({width: "100%", height: 49, flexDirection: "row", gap: 12}), cellBox: new xe.Style({width: 1, flexGrow: 1, height: 49, alignItems: "center", justifyContent: "center", borderWidth: 2, borderRadius: 16, backgroundColor: Ae.OAIColor.BgTertiary}), cellGlyph: new xe.Style({justifyContent: "center", alignItems: "center", height: "100%"}), cell: new xe.Style({font: Te.systemFont(20), letterSpacing: -0.45, color: Ae.OAIColor.TextPrimary, textAlign: "center"}), codeInput: new xe.Style({position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: 1, font: Te.systemFont(20), textAlign: "center", color: Ae.OAIColor.Transparent, tintColor: Ae.OAIColor.Transparent}), gmailScroll: new xe.Style({position: "absolute", left: 0, right: 0, top: 66, bottom: 88, showsVerticalScrollIndicator: false}), gmailContent: new xe.Style({width: "100%", paddingLeft: Ae.OAISpacing.Three, paddingRight: Ae.OAISpacing.Three, paddingBottom: Ae.OAISpacing.Two, gap: 30, alignItems: "center"}), gmailIntro: new xe.Style({width: "100%", gap: Ae.OAISpacing.One}), googleTitle: new xe.Style({width: "100%", font: Te.systemSemiboldFont(22), lineHeight: 28, letterSpacing: -0.26, color: Ae.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0}), googleBody: new xe.Style({width: "100%", font: Te.systemFont(16), lineHeight: 21, letterSpacing: -0.32, color: Ae.OAIColor.TextSecondary, textAlign: "center", numberOfLines: 0}), googleApps: new xe.Style({width: "100%", gap: 20}), googleRow: new xe.Style({width: "100%", flexDirection: "row", alignItems: "center", gap: 16}), googleIconTile: new xe.Style({width: 48, height: 48, flexShrink: 0, borderRadius: 12, borderWidth: 1, borderColor: Ae.OAIColor.BorderDefault, backgroundColor: Ae.OAIColor.BgCanvas, alignItems: "center", justifyContent: "center"}), googleRowCopy: new xe.Style({flexGrow: 1, flexShrink: 1, flexBasis: 0, gap: 2}), googleRowTitle: new xe.Style({font: Te.systemMediumFont(17), lineHeight: 24, letterSpacing: -0.43, color: Ae.OAIColor.TextPrimary, numberOfLines: 0}), googleRowBody: new xe.Style({font: Te.systemFont(15), lineHeight: 20, letterSpacing: -0.24, color: Ae.OAIColor.TextTertiary, numberOfLines: 0}), googlePrimary: new xe.Style({height: 54, backgroundColor: "#2f7cf5"}), googlePrimaryLabel: new xe.Style({font: Te.systemSemiboldFont(17), lineHeight: 24, letterSpacing: -0.3, color: Ae.OAIColor.TextInverseStatic}), googleSkip: new xe.Style({height: 44, borderRadius: 36, backgroundColor: Ae.OAIColor.BgElevatedPrimary, boxShadow: "0 19.286 27 rgba(0, 0, 0, 0.08)"}), googleSkipControl: new xe.Style({height: 44, paddingLeft: 12, paddingRight: 12}), googleSkipLabel: new xe.Style({font: Te.systemMediumFont(16), lineHeight: 21, letterSpacing: -0.32, color: Ae.OAIColor.TextPrimary}), connectedTitle: new xe.Style({width: "100%", font: Te.systemSemiboldFont(16), color: Ae.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0}), gmailFooter: new xe.Style({position: "absolute", left: 34, right: 34, bottom: 0, gap: Ae.OAISpacing.Half}), title: new xe.Style({width: "100%", font: Te.systemSemiboldFont(22), lineHeight: 28, letterSpacing: -0.26, color: Ae.OAIColor.TextPrimary, textAlign: "center", numberOfLines: 0}), messagesContent: new xe.Style({position: "absolute", left: 24, right: 24, alignItems: "center", gap: 32}), messagesAction: new xe.Style({width: 325, maxWidth: "100%"}), messagesPrimary: new xe.Style({height: 54, backgroundColor: "#2f7cf5"}), wordmarkPosition: new xe.Style({position: "absolute", touchEnabled: false, accessibilityNavigation: "ignored"}), wordmark: new xe.Style({width: "100%", height: "100%", objectFit: "contain", tint: Ae.OAIColor.TextPrimary}), wordmarkAnimation: new xe.Style({accessibilityId: "family.onboarding.wordmark-animation", accessibilityNavigation: "ignored", width: "100%", height: "100%", objectFit: "contain", loop: false, animationEndTime: 6}), messagesCopy: new xe.Style({width: "100%", gap: Ae.OAISpacing.One}), messagesDescription: new xe.Style({width: "100%", font: Te.systemFont(17), lineHeight: 24, letterSpacing: -0.44, color: Ae.OAIColor.TextTertiary, textAlign: "center", numberOfLines: 0}), primary: new xe.Style({height: 54, backgroundColor: Ae.OAIColor.ThemeBlueDefault}), primaryLabel: new xe.Style({font: Te.systemSemiboldFont(17), lineHeight: 24, letterSpacing: -0.3, color: Ae.OAIColor.TextInverseStatic}), welcomeButtonLabel: new xe.Style({font: Te.systemMediumFont(16), lineHeight: 21, letterSpacing: -0.32, color: Ae.OAIColor.TextPrimary}), notice: new xe.Style({width: "100%", font: Se.resolveOAITypography(Se.Typography.Footnote, {font: undefined, lineHeight: undefined, lineHeightMultiple: undefined}).font, color: Ae.OAIColor.TextSecondary, textAlign: "center", numberOfLines: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_family/src/FamilyOnboarding
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
