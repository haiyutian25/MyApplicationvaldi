// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/AudioPlayer
// closure: B
function {
  return new B.AudioPlayerController();
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=dil_widgets/src/widgets/AudioPlayer
// closure: B
function {
  return new B.AudioPlayerController();
}

// fn $  args=1 vars=1 closure=2 cpool=1 bc=13B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// closure: B, Y
function {
  if (!((e == null))) goto L_8;
  e;
  Y = function <atom:0>;
  function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=188B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// closure: this
function {
  if (!((this.state.rootWidth !== e.width))) goto L_bb;
  this.setState({rootWidth: e.width});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=47B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// closure: this
function {
  this.progressBarWidth = e.width;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=721B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: t
// closure: this, Z
function {
  let t;
  if (!((0 === e.state))) goto L_ef;
  this.shouldResumeAfterProgressScrub = this.state.playing;
  if (!(this.state.playing)) goto L_ef;
  this.pause();
  if (((this.progressBarWidth <= 0))) goto L_140;
  if (!((this.durationSeconds <= 0))) goto L_193;
  if (!((2 === e.state))) goto L_191;
  this.resumeAfterProgressScrub();
  return;
  t = (Z((e.x / this.progressBarWidth), 0, 1) * this.durationSeconds);
  this.controller.seek(t);
  this.setState({currentTimeSeconds: t});
  if (!((2 === e.state))) goto L_2d0;
  this.resumeAfterProgressScrub();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=152B file=dil_widgets/src/widgets/AudioPlayer
// closure: this
function {
  if (!(this.state.playing)) goto L_70;
  goto L_97;
  // [栈深重同步 1 -> 0]
  this.play();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=268B file=dil_widgets/src/widgets/AudioPlayer
// locals: e, t, i
// closure: this
function {
  let i;
  let t;
  let e;
  e = this.playbackRates;
  t = e.indexOf(this.playbackRate);
  if (!((e[((t + 1) % e.length)] == null))) goto L_8e;
  e[((t + 1) % e.length)];
  i = 1;
  this.controller.setRate(i);
  this.setState({playbackRate: i});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=167B file=dil_widgets/src/widgets/AudioPlayer
// closure: this
function {
  if ((this.state.downloading)) goto L_a6;
  this.setState({downloading: true, failedMessage: undefined});
  this.downloadAsync();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=3 cpool=6 bc=215B file=dil_widgets/src/widgets/AudioPlayer
// locals: this, this.active_func, new.target, arguments
// closure: Z, <class_fields_init>, Y
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
  this.state = {currentTimeSeconds: 0, durationSeconds: 0, downloading: false, playing: false};
  this.controller = Y();
  this.progressBarWidth = 0;
  this.shouldResumeAfterProgressScrub = false;
  this.handleRootLayout = function <atom:0>;
  this.handleProgressLayout = function <atom:0>;
  this.handleProgressTouch = function <atom:0>;
  this.togglePlayback = function <atom:0>;
  this.cyclePlaybackRate = function <atom:0>;
  this.download = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=47B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  this.controller.listener = this;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=477B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  if (!(this.hasPlayableSource)) goto L_196;
  if (!((undefined !== e))) goto L_16f;
  if (!((e.src === this.viewModel.src))) goto L_16f;
  this.controller.setRate(this.playbackRate);
  goto L_1dc;
  // [栈深重同步 1 -> 0]
  goto L_1dc;
  // [栈深重同步 1 -> 0]
  this.controller.unload();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  this.controller.dispose();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=92B file=dil_widgets/src/widgets/AudioPlayer
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((get_super_value(this, super, "hasButtonAccessibility"))) goto L_5b;
  return ("button" === this.viewModel.role);
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=443B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: t, i, this
function {
  this = this;
  let i;
  let t;
  if (!((e.durationSeconds == null))) goto L_78;
  e.durationSeconds;
  if (!((this.viewModel.durationSeconds == null))) goto L_78;
  this.viewModel.durationSeconds;
  t = 0;
  if (!((this.viewModel.initialCurrentTimeSeconds == null))) goto L_c2;
  this.viewModel.initialCurrentTimeSeconds;
  i = 0;
  this.setState({durationSeconds: t, failedMessage: undefined});
  if (!((i > 0))) goto L_14a;
  this.controller.seek(i);
  if (!((true === this.viewModel.autoPlay))) goto L_1ba;
  this.play();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=175B file=dil_widgets/src/widgets/AudioPlayer
// args: t
// locals: this
// closure: e
function {
  this = this;
  if (!(e.isLoggingEnabled)) goto L_59;
  console.warn("AudioPlayer failed", t);
  this.setState({failedMessage: t.message, playing: false});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=84B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: this
// closure: Z
function {
  this = this;
  this.setState({currentTimeSeconds: Z(e, 0, this.durationSeconds)});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=84B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: this
// closure: Z
function {
  this = this;
  this.setState({availablePlaybackDurationSeconds: Z(e, 0, this.durationSeconds)});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=358B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.loop))) goto L_111;
  this.controller.seek(0);
  this.controller.play();
  this.setState({currentTimeSeconds: 0, playing: true});
  return;
  this.setState({currentTimeSeconds: this.durationSeconds, playing: false});
  return;
}

// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=1029B file=dil_widgets/src/widgets/AudioPlayer
// locals: e, o, this
// closure: t, i, oe
function {
  this = this;
  let o;
  let e;
  if (!(!this.hasPlayableSource)) goto L_2e;
  return;
  e = this.isMinimalLayout;
  o = this.baseViewAttributes;
  t.beginRender(i, undefined);
  t.setAttributeStyle("style", oe.card);
  t.setAttributes(o);
  if (!(("button" === this.viewModel.role))) goto L_197;
  goto L_1bb;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityCategory", o.accessibilityCategory);
  t.setAttributeString("accessibilityLabel", this.viewModel.title);
  t.setAttributeFunction("onLayout", this.handleRootLayout);
  if (!(e)) goto L_2aa;
  goto L_2cf;
  // [栈深重同步 1 -> 0]
  this.renderHeader();
  this.renderTimeLabels();
  this.renderProgressBar();
  if (!((undefined !== this.state.failedMessage))) goto L_38a;
  this.renderFailure();
  if (!(e)) goto L_3b7;
  goto L_3dc;
  // [栈深重同步 1 -> 0]
  this.renderControls();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=277B file=dil_widgets/src/widgets/AudioPlayer
// closure: t, s, oe, this
function {
  t.beginRender(s, undefined);
  t.setAttributeStyle("style", oe.subtitle);
  t.setAttributeString("value", this.viewModel.subtitle);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=686B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, s, oe, o, r, n
function {
  this = this;
  t.beginRender(o, undefined);
  t.setAttributeStyle("style", oe.header);
  t.beginRender(r, undefined);
  t.setAttributeStyle("style", oe.titleColumn);
  t.beginRender(n, undefined);
  t.setAttributeStyle("style", oe.title);
  t.setAttributeString("value", this.viewModel.title);
  t.endRender();
  if (!((undefined !== this.viewModel.subtitle))) goto L_25d;
  function <atom:0>();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=277B file=dil_widgets/src/widgets/AudioPlayer
// closure: t, u, oe, this
function {
  t.beginRender(u, undefined);
  t.setAttributeStyle("style", oe.subtitleCompact);
  t.setAttributeString("value", this.viewModel.subtitle);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=1 bc=770B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, u, oe, l, a, d
function {
  this = this;
  t.beginRender(l, undefined);
  t.setAttributeStyle("style", oe.minimalHeader);
  t.beginRender(a, undefined);
  t.setAttributeStyle("style", oe.titleColumn);
  t.beginRender(d, undefined);
  t.setAttributeStyle("style", oe.titleCompact);
  t.setAttributeString("value", this.viewModel.title);
  t.endRender();
  if (!((undefined !== this.viewModel.subtitle))) goto L_25d;
  function <atom:0>();
  t.endRender();
  this.renderIconButton("download", this.download, "Download audio", true);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=704B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, c, oe, h, ee, y
function {
  this = this;
  t.beginRender(c, undefined);
  t.setAttributeStyle("style", oe.timeRow);
  t.beginRender(h, undefined);
  t.setAttributeStyle("style", oe.timeLabel);
  t.setAttributeString("value", ee(this.currentTimeSeconds));
  t.endRender();
  t.beginRender(y, undefined);
  t.setAttributeStyle("style", oe.timeLabel);
  t.setAttributeString("value", "-".concat(ee(this.remainingTimeSeconds)));
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=3 closure=7 cpool=0 bc=1233B file=dil_widgets/src/widgets/AudioPlayer
// locals: e, i, this
// closure: t, b, oe, ee, g, S, m
function {
  this = this;
  let i;
  let e;
  e = this.progressRatio;
  i = this.bufferRatio;
  t.beginRender(b, undefined);
  t.setAttributeStyle("style", oe.progressHitArea);
  t.setAttributeString("accessibilityValue", ee(this.currentTimeSeconds));
  t.setAttributeFunction("onLayout", this.handleProgressLayout);
  t.setAttributeFunction("onTouch", this.handleProgressTouch);
  t.beginRender(g, undefined);
  t.setAttributeStyle("style", oe.progressTrack);
  t.beginRender(S, undefined);
  t.setAttributeStyle("style", oe.progressBuffer);
  t.setAttributeNumber("scaleX", i);
  t.setAttributeNumber("translationX", -this.progressBarWidth);
  t.endRender();
  t.beginRender(m, undefined);
  t.setAttributeStyle("style", oe.progressFill);
  t.setAttributeNumber("scaleX", e);
  t.setAttributeNumber("translationX", -this.progressBarWidth);
  t.endRender();
  t.endRender();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=279B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, v, oe
function {
  this = this;
  t.beginRender(v, undefined);
  t.setAttributeStyle("style", oe.failure);
  t.setAttributeString("value", this.state.failedMessage);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=0 bc=1101B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, w, oe, p, R, te
function {
  this = this;
  t.beginRender(w, undefined);
  t.setAttributeStyle("style", oe.controls);
  t.beginRender(p, undefined);
  t.setAttributeStyle("style", oe.rateButton);
  t.setAttributeFunction("onTap", this.cyclePlaybackRate);
  t.beginRender(R, undefined);
  t.setAttributeStyle("style", oe.rateLabel);
  t.setAttributeString("value", "".concat(te(this.playbackRate), "x"));
  t.endRender();
  t.endRender();
  this.renderSeekButton(-15);
  if (!(this.state.playing)) goto L_32b;
  goto L_330;
  // [栈深重同步 3 -> 2]
  if (!(this.state.playing)) goto L_39e;
  goto L_3a3;
  // [栈深重同步 5 -> 4]
  this.renderIconButton("play", this.togglePlayback, "Play", false);
  this.renderSeekButton(30);
  this.renderIconButton("download", this.download, "Download audio", true);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=483B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: t, f, oe
function {
  this = this;
  t.beginRender(f, undefined);
  t.setAttributeStyle("style", oe.minimalControls);
  this.renderSeekButton(-15);
  if (!(this.state.playing)) goto L_115;
  goto L_11a;
  // [栈深重同步 3 -> 2]
  if (!(this.state.playing)) goto L_188;
  goto L_18d;
  // [栈深重同步 5 -> 4]
  this.renderIconButton("play", this.togglePlayback, "Play", false);
  this.renderSeekButton(30);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=dil_widgets/src/widgets/AudioPlayer
// closure: this, e
function {
  return this.seekBy(e);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=5 cpool=3 bc=481B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: i, o, this
// closure: t, P, oe, D, J
function {
  this = this;
  let o;
  let i;
  if (!((e < 0))) goto L_11;
  goto L_13;
  // [栈深重同步 1 -> 0]
  i = "30";
  if (!((e < 0))) goto L_20;
  goto L_25;
  // [栈深重同步 1 -> 0]
  o = "forward-30";
  t.beginRender(P, undefined);
  t.setAttributeStyle("style", oe.seekButton);
  t.setAttribute("onTap", D.createReusableCallback(function <atom:0>));
  if (!((e < 0))) goto L_158;
  goto L_189;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("accessibilityLabel", "Forward ".concat(i, " seconds"));
  this.renderIcon(o, J);
  t.endRender();
  return;
}

// fn <atom:0>  args=4 vars=5 closure=4 cpool=0 bc=462B file=dil_widgets/src/widgets/AudioPlayer
// args: e, i, o, r
// locals: this
// closure: t, A, oe, J
function {
  this = this;
  t.beginRender(A, undefined);
  if (!((true === r))) goto L_83;
  goto L_a7;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", oe.controlSlot);
  t.setAttributeFunction("onTap", i);
  t.setAttributeString("accessibilityLabel", o);
  if (!(("download" === e))) goto L_17c;
  if (!(this.state.downloading)) goto L_17c;
  goto L_1a5;
  // [栈深重同步 1 -> 0]
  this.renderIcon(e, J);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=309B file=dil_widgets/src/widgets/AudioPlayer
// closure: t, k, oe, J, U
function {
  t.beginRender(k, undefined);
  t.setAttributeStyle("style", oe.downloadSpinner);
  t.setAttributeNumber("width", J);
  t.setAttributeNumber("height", J);
  t.setAttributeString("color", U);
  t.endRender();
  return;
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=0 bc=407B file=dil_widgets/src/widgets/AudioPlayer
// args: e, i
// locals: o
// closure: I, t, M, oe, U
function {
  let o;
  o = I.resolveIconAsset(e);
  if (!((undefined !== o))) goto L_196;
  t.beginRender(M, undefined);
  t.setAttributeStyle("style", oe.icon);
  t.setAttribute("src", o);
  t.setAttributeNumber("width", i);
  t.setAttributeNumber("height", i);
  t.setAttributeString("tint", U);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=329B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  this.controller.setRate(this.playbackRate);
  this.controller.setVolume(this.resolvedVolume);
  this.controller.play();
  this.setState({playing: true});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=119B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  this.controller.pause();
  this.setState({playing: false});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!(this.shouldResumeAfterProgressScrub)) goto L_59;
  this.shouldResumeAfterProgressScrub = false;
  this.play();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=200B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: t, this
// closure: Z
function {
  this = this;
  let t;
  t = Z((this.currentTimeSeconds + e), 0, this.durationSeconds);
  this.controller.seek(t);
  this.setState({currentTimeSeconds: t});
  return;
}

// fn <atom:0>  args=0 vars=6 closure=3 cpool=0 bc=868B file=dil_widgets/src/widgets/AudioPlayer
// locals: t, i, e, o, t#1, this
// closure: N, T, e
function {
  this = this;
  let i;
  let t;
  if (!((this.viewModel.downloadUrl == null))) goto L_96;
  this.viewModel.downloadUrl;
  t = this.viewModel.src;
  if (!((this.viewModel.downloadFilename == null))) goto L_124;
  this.viewModel.downloadFilename;
  i = this.viewModel.title;
  if (!((undefined !== t))) goto L_362;
  if (!((undefined !== i))) goto L_362;
  try { // catch -> L_292
  let e;
  e = (await new N.HTTPClient().perform(t, "GET", undefined, undefined));
  if (!((undefined === e.body))) goto L_1fc;
  throw new Error("Download response for "".concat(i, "" did not include a body"));
  this.setState({downloading: false});
  (await T.saveFileForUser({bytes: e.body, filename: i, mimeType: "audio/mpeg"}));
  <?>;
  goto L_362;
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_361
  let t#1;
  if (!((o instanceof Error))) goto L_2c8;
  goto L_2cd;
  // [栈深重同步 1 -> 0]
  t#1 = "Audio download failed";
  if (!(e.isLoggingEnabled)) goto L_326;
  console.warn("AudioPlayer download failed", o);
  this.setState({downloading: false, failedMessage: t#1});
  <?>;
  goto L_362;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=4 closure=0 cpool=0 bc=704B file=dil_widgets/src/widgets/AudioPlayer
// locals: e, t, i, this
function {
  this = this;
  let i;
  let t;
  let e;
  if (!((undefined === this.viewModel.src))) goto L_53;
  return;
  if (!((this.viewModel.initialCurrentTimeSeconds == null))) goto L_9c;
  this.viewModel.initialCurrentTimeSeconds;
  e = 0;
  if (!((this.viewModel.durationSeconds == null))) goto L_e6;
  this.viewModel.durationSeconds;
  t = 0;
  if (!((this.viewModel.defaultPlaybackRate == null))) goto L_130;
  this.viewModel.defaultPlaybackRate;
  i = 1;
  this.setState({currentTimeSeconds: e, availablePlaybackDurationSeconds: undefined, durationSeconds: t, failedMessage: undefined, playbackRate: i, playing: false});
  this.controller.setRate(i);
  this.controller.setVolume(this.resolvedVolume);
  this.controller.loadItemWithUrl(this.viewModel.src);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=145B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((undefined !== this.viewModel.src))) goto L_90;
  return (undefined !== this.viewModel.title);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=107B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: ie
function {
  this = this;
  return ie(this.viewModel.playbackRates, this.playbackRate);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((this.state.playbackRate == null))) goto L_93;
  this.state.playbackRate;
  if (!((this.viewModel.defaultPlaybackRate == null))) goto L_93;
  this.viewModel.defaultPlaybackRate;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.muted))) goto L_4c;
  return 0;
  return 1;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((this.state.currentTimeSeconds == null))) goto L_93;
  this.state.currentTimeSeconds;
  if (!((this.viewModel.initialCurrentTimeSeconds == null))) goto L_93;
  this.viewModel.initialCurrentTimeSeconds;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=148B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  if (!((this.state.durationSeconds == null))) goto L_93;
  this.state.durationSeconds;
  if (!((this.viewModel.durationSeconds == null))) goto L_93;
  this.viewModel.durationSeconds;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
function {
  this = this;
  return Math.max(0, (this.durationSeconds - this.currentTimeSeconds));   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=116B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: Z
function {
  this = this;
  if (!((this.durationSeconds <= 0))) goto L_2a;
  return 0;
  return Z((this.currentTimeSeconds / this.durationSeconds), 0, 1);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=191B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: Z
function {
  this = this;
  if (!((this.durationSeconds <= 0))) goto L_2a;
  return 0;
  if (!((this.state.availablePlaybackDurationSeconds == null))) goto L_96;
  this.state.availablePlaybackDurationSeconds;
  return Z(((this.currentTimeSeconds + 0) / this.durationSeconds), 0, 1);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=147B file=dil_widgets/src/widgets/AudioPlayer
// locals: this
// closure: _
function {
  this = this;
  if (!((undefined !== this.state.rootWidth))) goto L_92;
  return (this.state.rootWidth < _);
}

// fn Z  args=3 vars=3 closure=0 cpool=0 bc=85B file=dil_widgets/src/widgets/AudioPlayer
// args: e, t, i
function {
  return Math.min(i, Math.max(t, e));   // tail call
}

// fn ee  args=1 vars=3 closure=0 cpool=1 bc=203B file=dil_widgets/src/widgets/AudioPlayer
// args: e
// locals: t, i
function {
  let i;
  let t;
  t = Math.max(0, Math.floor(e));
  i = (t % 60);
  if (!((i < 10))) goto L_c4;
  goto L_c5;
  // [栈深重同步 5 -> 4]
  return "".concat(Math.floor((t / 60)), ":", "", i);   // tail call
}

// fn te  args=1 vars=1 closure=0 cpool=0 bc=61B file=dil_widgets/src/widgets/AudioPlayer
// args: e
function {
  if (!(((e % 1) == 0))) goto L_2c;
  goto L_3a;
  // [栈深重同步 3 -> 2]
  if (!((((10 * e) % 1) == 0))) goto L_39;
  goto L_3a;
  // [栈深重同步 3 -> 2]
  return e.toFixed(2);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=4B file=dil_widgets/src/widgets/AudioPlayer
// args: e, t
function {
  return (e - t);
}

// fn ie  args=2 vars=6 closure=1 cpool=1 bc=232B file=dil_widgets/src/widgets/AudioPlayer
// args: e, t
// locals: i, o, r, n
// closure: W
function {
  let r;
  let o;
  let i;
  if (((undefined === e))) goto L_14;
  if (!((0 === e.length))) goto L_1b;
  goto L_1c;
  // [栈深重同步 1 -> 0]
  i = e;
  o = {};
  r = [];
  let n;
  // append([], 0, i)
  [][i] = t;
  [][(t ++)] = 1;
  (1 ++);
  for (const n of []) {
    if ((!Number.isFinite(n))) goto L_b5;
    if (((n <= 0))) goto L_b5;
    if (((true === o[n]))) goto L_b5;
    o[n] = true;
    r.push(n);
  }
  return r.sort(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=64 closure=0 cpool=49 bc=4560B file=dil_widgets/src/widgets/AudioPlayer
// args: require, module, exports
// locals: e, t, i, o, r, n, s, l, a, d, u, c, h, y, b, g, S, m, v, w, p, R, f, P, A, k, M, C, F, N, B, T, x, D, I, L, E, H, W, _, j, V, z, q, X, J, K, U, O, Q, G, Y, $, AudioPlayer, <class_fields_init>, AudioPlayer#1, Z, ee, te, ie, oe
function {
  $ = function $;
  Z = function Z;
  ee = function ee;
  te = function te;
  ie = function ie;
  let oe;
  let AudioPlayer#1;
  let Y;
  let G;
  let Q;
  let O;
  let U;
  let K;
  let J;
  let X;
  let q;
  let z;
  let V;
  let j;
  let _;
  let W;
  let H;
  let E;
  let L;
  let I;
  let D;
  let x;
  let T;
  let B;
  let N;
  let F;
  let C;
  let M;
  let k;
  let A;
  let P;
  let f;
  let R;
  let p;
  let w;
  let v;
  let m;
  let S;
  let g;
  let b;
  let y;
  let h;
  let c;
  let u;
  let d;
  let a;
  let l;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setAudioPlayerControllerFactoryForTest = undefined;
  exports.AudioPlayer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/JSX").jsx;
  i = t.makeNodePrototype("view", undefined, "QqKt8UXEBBXzNeIM");
  o = t.makeNodePrototype("view", undefined, "aYesx2PV4rNLRCwM");
  r = t.makeNodePrototype("view", undefined, "y87BSJl3UE0Ya_Pf");
  n = t.makeNodePrototype("label", undefined, "KS1QjiYKk6lhfdvw");
  s = t.makeNodePrototype("label", undefined, "J1cRX09o_fCIztFG");
  l = t.makeNodePrototype("view", undefined, "QvJWZiHqWEW1AxxF");
  a = t.makeNodePrototype("view", undefined, "NcyzcdQPtFWK9DCi");
  d = t.makeNodePrototype("label", undefined, "C0UOvD7DN2dI32vB");
  u = t.makeNodePrototype("label", undefined, "q768rVGOe66sa5yN");
  c = t.makeNodePrototype("view", undefined, "M0QhwvZdMQZRU3GB");
  h = t.makeNodePrototype("label", undefined, "iMaNjTPHbKmhP2Gm");
  y = t.makeNodePrototype("label", undefined, "toCh-JgWJrYN3egY");
  b = t.makeNodePrototype("view", ["accessibilityCategory", "input"], "MmopG3R9LVSsFFBb");
  g = t.makeNodePrototype("view", undefined, "Fd2FBNFB74jW5EYa");
  S = t.makeNodePrototype("view", undefined, "M0fPPyKJ81w8rc8z");
  m = t.makeNodePrototype("view", undefined, "fXBzHRPgWf7uEnze");
  v = t.makeNodePrototype("label", undefined, "ztbQ22RiSqmDny1v");
  w = t.makeNodePrototype("view", undefined, "RNPlMhqXPjZJlRnx");
  p = t.makeNodePrototype("view", ["accessibilityCategory", "button", "accessibilityLabel", "Playback speed"], "WuQ__CY2kagJwnt7");
  R = t.makeNodePrototype("label", undefined, "whcyLlIfl8U71uKe");
  f = t.makeNodePrototype("view", undefined, "O-p8f2i724898X4E");
  P = t.makeNodePrototype("view", ["accessibilityCategory", "button"], "DQ0v4Ry57t8vj_Xd");
  A = t.makeNodePrototype("view", ["accessibilityCategory", "button"], "4G4iN_k_-z7vVKo4");
  k = t.makeNodePrototype("spinner", undefined, "dJrjjVfvsgDKnszf");
  M = t.makeNodePrototype("image", ["objectFit", "contain"], "PPKNoC51ccdeH5OY");
  C = require("dil_core/src/DILComponent");
  F = require("dil_core/src/typography/DILDynamicFont");
  N = require("valdi_http/src/HTTPClient");
  B = require("audio_player/src/AudioPlayer");
  T = require("mobile_file_saver/src/MobileFileSaver");
  x = require("valdi_core/src/Style");
  D = require("valdi_core/src/utils/Callback");
  I = require("./Icon");
  L = 0;
  E = 0;
  H = 1;
  W = [0.75, 1, 1.25, 1.5, 2];
  _ = 280;
  j = 20;
  V = 6;
  z = 12;
  q = 6;
  X = 6;
  J = 24;
  K = 42;
  U = "#111111";
  O = "#8A8A8A";
  Q = "#E1E1E1";
  G = "#BDBDBD";
  Y = function <atom:0>;
  exports.setAudioPlayerControllerFactoryForTest = $;
  let AudioPlayer;
  let <class_fields_init>;
  class AudioPlayer extends C.DILStatefulComponent { ... }
  <proto:AudioPlayer>.onCreate = function <atom:0>;
  <proto:AudioPlayer>.onViewModelUpdate = function <atom:0>;
  <proto:AudioPlayer>.onDestroy = function <atom:0>;
  <proto:AudioPlayer>.hasButtonAccessibility = function <atom:0>;
  <proto:AudioPlayer>.onLoaded = function <atom:0>;
  <proto:AudioPlayer>.onFailure = function <atom:0>;
  <proto:AudioPlayer>.onPlaybackProgress = function <atom:0>;
  <proto:AudioPlayer>.onPlaybackBufferDurationChanged = function <atom:0>;
  <proto:AudioPlayer>.onPlaybackEnded = function <atom:0>;
  <proto:AudioPlayer>.onRender = function <atom:0>;
  <proto:AudioPlayer>.renderHeader = function <atom:0>;
  <proto:AudioPlayer>.renderMinimalHeader = function <atom:0>;
  <proto:AudioPlayer>.renderTimeLabels = function <atom:0>;
  <proto:AudioPlayer>.renderProgressBar = function <atom:0>;
  <proto:AudioPlayer>.renderFailure = function <atom:0>;
  <proto:AudioPlayer>.renderControls = function <atom:0>;
  <proto:AudioPlayer>.renderMinimalControls = function <atom:0>;
  <proto:AudioPlayer>.renderSeekButton = function <atom:0>;
  <proto:AudioPlayer>.renderIconButton = function <atom:0>;
  <proto:AudioPlayer>.renderDownloadSpinner = function <atom:0>;
  <proto:AudioPlayer>.renderIcon = function <atom:0>;
  <proto:AudioPlayer>.play = function <atom:0>;
  <proto:AudioPlayer>.pause = function <atom:0>;
  <proto:AudioPlayer>.resumeAfterProgressScrub = function <atom:0>;
  <proto:AudioPlayer>.seekBy = function <atom:0>;
  <proto:AudioPlayer>.downloadAsync = function <atom:0>;
  <proto:AudioPlayer>.loadCurrentItem = function <atom:0>;
  <proto:AudioPlayer>.hasPlayableSource = function <atom:0>;
  <proto:AudioPlayer>.playbackRates = function <atom:0>;
  <proto:AudioPlayer>.playbackRate = function <atom:0>;
  <proto:AudioPlayer>.resolvedVolume = function <atom:0>;
  <proto:AudioPlayer>.currentTimeSeconds = function <atom:0>;
  <proto:AudioPlayer>.durationSeconds = function <atom:0>;
  <proto:AudioPlayer>.remainingTimeSeconds = function <atom:0>;
  <proto:AudioPlayer>.progressRatio = function <atom:0>;
  <proto:AudioPlayer>.bufferRatio = function <atom:0>;
  <proto:AudioPlayer>.isMinimalLayout = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AudioPlayer>;
  AudioPlayer = function <atom:0>;
  // close_loc <class_fields_init>
  AudioPlayer#1 = function <atom:0>;
  exports.AudioPlayer = AudioPlayer#1;
  // append([], 0, C.DIL_COMPONENT_PROPERTIES)
  [][C.DIL_COMPONENT_PROPERTIES] = "autoPlay";
  [][("autoPlay" ++)] = "compact";
  [][("compact" ++)] = "defaultPlaybackRate";
  [][("defaultPlaybackRate" ++)] = "downloadFilename";
  [][("downloadFilename" ++)] = "downloadUrl";
  [][("downloadUrl" ++)] = "durationSeconds";
  [][("durationSeconds" ++)] = "initialCurrentTimeSeconds";
  [][("initialCurrentTimeSeconds" ++)] = "loop";
  [][("loop" ++)] = "muted";
  [][("muted" ++)] = "playbackRates";
  [][("playbackRates" ++)] = "preload";
  [][("preload" ++)] = "role";
  [][("role" ++)] = "src";
  [][("src" ++)] = "subtitle";
  [][("subtitle" ++)] = "title";
  ("title" ++);
  AudioPlayer#1.properties = [];
  oe = {card: new x.Style({backgroundColor: "#FFFFFF", borderColor: "#E0E0E0", borderRadius: j, borderWidth: 1, flexDirection: "column", gap: 12, maxWidth: "100%", padding: 16, slowClipping: true, width: "100%"}), header: new x.Style({alignItems: "center", flexDirection: "row", gap: 16}), minimalHeader: new x.Style({alignItems: "center", flexDirection: "row", gap: 12}), titleColumn: new x.Style({flexDirection: "column", flexGrow: 1, flexShrink: 1, gap: 4}), title: new x.Style({color: U, font: F.dynamicMediumSystemFontForSize(16), flexShrink: 1, lineHeightMultiple: 1.5}), titleCompact: new x.Style({color: U, font: F.dynamicMediumSystemFontForSize(14), flexShrink: 1, lineHeightMultiple: (20 / 14)}), subtitle: new x.Style({color: O, font: F.dynamicSystemFontForSize(14), flexShrink: 1, lineHeightMultiple: (20 / 14)}), subtitleCompact: new x.Style({color: O, font: F.dynamicSystemFontForSize(12), flexShrink: 1, lineHeightMultiple: 1.5}), timeRow: new x.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%"}), timeLabel: new x.Style({color: O, font: F.dynamicSystemFontForSize(14), lineHeightMultiple: (20 / 14)}), progressHitArea: new x.Style({height: z, justifyContent: "center", width: "100%"}), progressTrack: new x.Style({backgroundColor: Q, borderRadius: "100%", height: 6, slowClipping: true, width: "100%"}), progressBuffer: new x.Style({backgroundColor: G, height: 6, position: "absolute", width: "200%"}), progressFill: new x.Style({backgroundColor: U, height: 6, position: "absolute", width: "200%"}), failure: new x.Style({color: "#B42318", font: F.dynamicSystemFontForSize(13)}), controls: new x.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", minHeight: 48, width: "100%"}), minimalControls: new x.Style({alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%"}), rateButton: new x.Style({alignItems: "flex-start", height: 32, justifyContent: "center", width: K}), rateLabel: new x.Style({color: U, font: F.dynamicMediumSystemFontForSize(14), lineHeightMultiple: (20 / 14)}), seekButton: new x.Style({alignItems: "center", flexDirection: "column", height: 36, justifyContent: "center", width: K}), controlSlot: new x.Style({alignItems: "center", height: 36, justifyContent: "center", width: K}), trailingControlSlot: new x.Style({alignItems: "flex-end", height: 36, justifyContent: "center", width: K}), icon: new x.Style({flexShrink: 0}), downloadSpinner: new x.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/AudioPlayer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
