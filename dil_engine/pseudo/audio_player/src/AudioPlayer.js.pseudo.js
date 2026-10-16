// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=audio_player/src/AudioPlayer
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.getListener = e;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=124B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  if (!((this.getListener() == null))) goto L_2f;
  this.getListener();
  goto L_7b;
  undefined.onLoaded({durationSeconds: e.durationSeconds});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=127B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  if (!((this.getListener() == null))) goto L_2f;
  this.getListener();
  goto L_7e;
  undefined.onFailure(new Error(e.message));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=85B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  if (!((this.getListener() == null))) goto L_2f;
  this.getListener();
  goto L_54;
  undefined.onPlaybackProgress(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=85B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  if (!((this.getListener() == null))) goto L_2f;
  this.getListener();
  goto L_54;
  undefined.onPlaybackBufferDurationChanged(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=84B file=audio_player/src/AudioPlayer
// locals: this
function {
  this = this;
  if (!((this.getListener() == null))) goto L_2f;
  this.getListener();
  goto L_53;
  undefined.onPlaybackEnded();
  return;
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=12B file=audio_player/src/AudioPlayer
// args: e
// closure: t, o
function {
  if (!((e == null))) goto L_7;
  e;
  t = o;
  o;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=audio_player/src/AudioPlayer
// closure: this
function {
  return this.listener;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=153B file=audio_player/src/AudioPlayer
// locals: this
// closure: <class_fields_init>, t, NativeAudioPlayerControllerListenerAdapter
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nativeController = t();
  this.listenerAdapter = new NativeAudioPlayerControllerListenerAdapter(function <atom:0>);
  this.nativeController.setListener(this.listenerAdapter);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=audio_player/src/AudioPlayer
// locals: this
function {
  this = this;
  this.nativeController.play();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=audio_player/src/AudioPlayer
// locals: this
function {
  this = this;
  this.nativeController.pause();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  this.nativeController.setRate(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  this.nativeController.setVolume(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  this.nativeController.loadItemWithUrl(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=audio_player/src/AudioPlayer
// locals: this
function {
  this = this;
  this.nativeController.unload();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=audio_player/src/AudioPlayer
// args: e
// locals: this
function {
  this = this;
  this.nativeController.seek(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=157B file=audio_player/src/AudioPlayer
// locals: this
function {
  this = this;
  this.nativeController.setListener(undefined);
  this.nativeController.dispose();
  this.listener = undefined;
  return;
}

// fn o  args=0 vars=0 closure=1 cpool=0 bc=39B file=audio_player/src/AudioPlayer
// closure: e
function {
  return e.createNativeAudioPlayerController();   // tail call
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=17 bc=289B file=audio_player/src/AudioPlayer
// args: require, module, exports
// locals: e, NativeAudioPlayerControllerListenerAdapter, <class_fields_init>, NativeAudioPlayerControllerListenerAdapter#1, t, r, AudioPlayerController, <class_fields_init>#1, AudioPlayerController#1, o
function {
  r = function r;
  o = function o;
  let AudioPlayerController#1;
  let t;
  let NativeAudioPlayerControllerListenerAdapter#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setNativeAudioPlayerControllerFactoryForTest = undefined;
  exports.AudioPlayerController = undefined;
  e = require("./NativeAudioPlayer");
  let NativeAudioPlayerControllerListenerAdapter;
  let <class_fields_init>;
  class NativeAudioPlayerControllerListenerAdapter extends undefined { ... }
  <proto:NativeAudioPlayerControllerListenerAdapter>.onLoaded = function <atom:0>;
  <proto:NativeAudioPlayerControllerListenerAdapter>.onFailure = function <atom:0>;
  <proto:NativeAudioPlayerControllerListenerAdapter>.onPlaybackProgress = function <atom:0>;
  <proto:NativeAudioPlayerControllerListenerAdapter>.onPlaybackBufferDurationChanged = function <atom:0>;
  <proto:NativeAudioPlayerControllerListenerAdapter>.onPlaybackEnded = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeAudioPlayerControllerListenerAdapter>;
  NativeAudioPlayerControllerListenerAdapter = function <atom:0>;
  // close_loc <class_fields_init>
  NativeAudioPlayerControllerListenerAdapter#1 = function <atom:0>;
  t = o;
  exports.setNativeAudioPlayerControllerFactoryForTest = r;
  let AudioPlayerController;
  let <class_fields_init>#1;
  class AudioPlayerController extends undefined { ... }
  <proto:AudioPlayerController>.play = function <atom:0>;
  <proto:AudioPlayerController>.pause = function <atom:0>;
  <proto:AudioPlayerController>.setRate = function <atom:0>;
  <proto:AudioPlayerController>.setVolume = function <atom:0>;
  <proto:AudioPlayerController>.loadItemWithUrl = function <atom:0>;
  <proto:AudioPlayerController>.unload = function <atom:0>;
  <proto:AudioPlayerController>.seek = function <atom:0>;
  <proto:AudioPlayerController>.dispose = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AudioPlayerController>;
  AudioPlayerController = function <atom:0>;
  // close_loc <class_fields_init>#1
  AudioPlayerController#1 = function <atom:0>;
  exports.AudioPlayerController = AudioPlayerController#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=audio_player/src/AudioPlayer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
