// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/DocumentPersistenceTypes
// args: e
function {
  e.Saved = 0;
  e[0] = "Saved";
  e.Saving = 1;
  e[1] = "Saving";
  e.Failed = 2;
  e[2] = "Failed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=115B file=collaborative_editor/src/DocumentPersistenceTypes
// args: e
function {
  e.NotDownloaded = 0;
  e[0] = "NotDownloaded";
  e.Storage = 1;
  e[1] = "Storage";
  e.Recovery = 2;
  e[2] = "Recovery";
  e.UnsupportedSchema = 3;
  e[3] = "UnsupportedSchema";
  e.HostUnavailable = 4;
  e[4] = "HostUnavailable";
  e.Closed = 5;
  e[5] = "Closed";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/DocumentPersistenceTypes
// args: e
function {
  e.Offline = 0;
  e[0] = "Offline";
  e.Unavailable = 1;
  e[1] = "Unavailable";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/DocumentPersistenceTypes
// args: e
function {
  e.View = 0;
  e[0] = "View";
  e.Edit = 1;
  e[1] = "Edit";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=77B file=collaborative_editor/src/DocumentPersistenceTypes
// args: e
function {
  e.Local = 0;
  e[0] = "Local";
  e.Remote = 1;
  e[1] = "Remote";
  e.AuthoritativeSnapshot = 2;
  e[2] = "AuthoritativeSnapshot";
  e.Acknowledgment = 3;
  e[3] = "Acknowledgment";
  return;
}

// fn <atom:0>  args=3 vars=8 closure=0 cpool=5 bc=223B file=collaborative_editor/src/DocumentPersistenceTypes
// args: require, module, exports
// locals: e, t, o, n, a
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DocumentLocalSaveState = undefined;
  exports.DocumentPersistenceErrorKind = undefined;
  exports.DocumentConnectionState = undefined;
  exports.DocumentAccess = undefined;
  exports.DocumentUpdateSource = undefined;
  if ((e)) goto L_83;
  e = {};
  exports.DocumentLocalSaveState = {};
  function <atom:0>({});
  if ((t)) goto L_99;
  t = {};
  exports.DocumentPersistenceErrorKind = {};
  function <atom:0>({});
  if ((o)) goto L_af;
  o = {};
  exports.DocumentConnectionState = {};
  function <atom:0>({});
  if ((n)) goto L_c5;
  n = {};
  exports.DocumentAccess = {};
  function <atom:0>({});
  if ((a)) goto L_dd;
  a = {};
  exports.DocumentUpdateSource = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/DocumentPersistenceTypes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
