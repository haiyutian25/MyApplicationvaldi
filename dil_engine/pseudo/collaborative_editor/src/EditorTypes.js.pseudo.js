// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=20B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.WRITING_BLOCKS_V1 = 0;
  E[0] = "WRITING_BLOCKS_V1";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=20B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.V1 = 0;
  E[0] = "V1";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=271B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.DOC = "doc";
  E.PARAGRAPH = "paragraph";
  E.HEADING = "heading";
  E.BLOCKQUOTE = "blockquote";
  E.LIST = "list";
  E.BULLET_LIST = "bullet_list";
  E.ORDERED_LIST = "ordered_list";
  E.REGULAR_LIST_ITEM = "regular_list_item";
  E.LIST_ITEM = "list_item";
  E.TASK_LIST_ITEM = "task_list_item";
  E.CODE_BLOCK = "code_block";
  E.HORIZONTAL_RULE = "horizontal_rule";
  E.HARD_BREAK = "hard_break";
  E.WRITING_BLOCK_IMAGE = "writing_block_image";
  E.TABLE = "table";
  E.TABLE_ROW = "table_row";
  E.TABLE_CELL = "table_cell";
  E.TEXT = "text";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=106B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.STRONG = "strong";
  E.BOLD = "bold";
  E.EM = "em";
  E.ITALIC = "italic";
  E.CODE = "code";
  E.STRIKETHROUGH = "strikethrough";
  E.LINK = "link";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=46B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.LEFT = "left";
  E.CENTER = "center";
  E.RIGHT = "right";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.MONDAY = 0;
  E[0] = "MONDAY";
  E.TUESDAY = 1;
  E[1] = "TUESDAY";
  E.WEDNESDAY = 2;
  E[2] = "WEDNESDAY";
  E.THURSDAY = 3;
  E[3] = "THURSDAY";
  E.FRIDAY = 4;
  E[4] = "FRIDAY";
  E.SATURDAY = 5;
  E[5] = "SATURDAY";
  E.SUNDAY = 6;
  E[6] = "SUNDAY";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.BACKWARD = 0;
  E[0] = "BACKWARD";
  E.FORWARD = 1;
  E[1] = "FORWARD";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.TEXT = 0;
  E[0] = "TEXT";
  E.SLICE = 1;
  E[1] = "SLICE";
  E.PARAGRAPH_BREAK = 2;
  E[2] = "PARAGRAPH_BREAK";
  E.LINE_BREAK = 3;
  E[3] = "LINE_BREAK";
  E.EMPTY = 4;
  E[4] = "EMPTY";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.OUTDENT = -1;
  E[-1] = "OUTDENT";
  E.INDENT = 1;
  E[1] = "INDENT";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=293B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.REPLACE_RANGE = 0;
  E[0] = "REPLACE_RANGE";
  E.SET_MARK = 1;
  E[1] = "SET_MARK";
  E.SET_BLOCK_TYPE = 2;
  E[2] = "SET_BLOCK_TYPE";
  E.SET_LIST = 3;
  E[3] = "SET_LIST";
  E.INDENT = 4;
  E[4] = "INDENT";
  E.SET_CHECKED = 5;
  E[5] = "SET_CHECKED";
  E.SET_NODE_ATTRIBUTES = 6;
  E[6] = "SET_NODE_ATTRIBUTES";
  E.INSERT_SLICE = 7;
  E[7] = "INSERT_SLICE";
  E.REMOVE_NODE = 8;
  E[8] = "REMOVE_NODE";
  E.REPLACE_AROUND = 9;
  E[9] = "REPLACE_AROUND";
  E.PASTE = 10;
  E[10] = "PASTE";
  E.INPUT = 11;
  E[11] = "INPUT";
  E.SET_DOCUMENT_THEME = 12;
  E[12] = "SET_DOCUMENT_THEME";
  E.UPSERT_LIVE_NOTE = 13;
  E[13] = "UPSERT_LIVE_NOTE";
  E.REMOVE_LIVE_NOTE = 14;
  E[14] = "REMOVE_LIVE_NOTE";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=273B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.REPLACE_TEXT = 0;
  E[0] = "REPLACE_TEXT";
  E.PARAGRAPH_BREAK = 1;
  E[1] = "PARAGRAPH_BREAK";
  E.LINE_BREAK = 2;
  E[2] = "LINE_BREAK";
  E.DELETE_BACKWARD = 3;
  E[3] = "DELETE_BACKWARD";
  E.DELETE_FORWARD = 4;
  E[4] = "DELETE_FORWARD";
  E.TOGGLE_MARK = 5;
  E[5] = "TOGGLE_MARK";
  E.TOGGLE_BLOCK = 6;
  E[6] = "TOGGLE_BLOCK";
  E.TOGGLE_LIST = 7;
  E[7] = "TOGGLE_LIST";
  E.INSERT_DIVIDER = 8;
  E[8] = "INSERT_DIVIDER";
  E.TOGGLE_CHECKED = 9;
  E[9] = "TOGGLE_CHECKED";
  E.INDENT = 10;
  E[10] = "INDENT";
  E.OUTDENT = 11;
  E[11] = "OUTDENT";
  E.TAB = 12;
  E[12] = "TAB";
  E.TEXT_TRANSACTION = 13;
  E[13] = "TEXT_TRANSACTION";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=134B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.PARAGRAPH = 0;
  E[0] = "PARAGRAPH";
  E.HEADING_1 = 1;
  E[1] = "HEADING_1";
  E.HEADING_2 = 2;
  E[2] = "HEADING_2";
  E.HEADING_3 = 3;
  E[3] = "HEADING_3";
  E.HEADING_4 = 4;
  E[4] = "HEADING_4";
  E.HEADING_5 = 5;
  E[5] = "HEADING_5";
  E.HEADING_6 = 6;
  E[6] = "HEADING_6";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.BULLET = 0;
  E[0] = "BULLET";
  E.NUMBERED = 1;
  E[1] = "NUMBERED";
  E.CHECKLIST = 2;
  E[2] = "CHECKLIST";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=173B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.STALE_REVISION = 0;
  E[0] = "STALE_REVISION";
  E.INVALID_OPERATION = 1;
  E[1] = "INVALID_OPERATION";
  E.UNSUPPORTED_SCHEMA = 2;
  E[2] = "UNSUPPORTED_SCHEMA";
  E.INVALID_UPDATE = 3;
  E[3] = "INVALID_UPDATE";
  E.CLOSED = 4;
  E[4] = "CLOSED";
  E.INVALID_ANCHOR = 5;
  E[5] = "INVALID_ANCHOR";
  E.INTERNAL_ERROR = 6;
  E[6] = "INTERNAL_ERROR";
  E.INVALID_PRESENCE = 7;
  E[7] = "INVALID_PRESENCE";
  E.UNSUPPORTED_MARKDOWN = 9;
  E[9] = "UNSUPPORTED_MARKDOWN";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.APPLIED = 0;
  E[0] = "APPLIED";
  E.NO_CHANGE = 1;
  E[1] = "NO_CHANGE";
  E.REJECTED = 2;
  E[2] = "REJECTED";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.EDITABLE = 0;
  E[0] = "EDITABLE";
  E.UNSUPPORTED_SCHEMA = 1;
  E[1] = "UNSUPPORTED_SCHEMA";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.LOCAL = 0;
  E[0] = "LOCAL";
  E.REMOTE = 1;
  E[1] = "REMOTE";
  E.HISTORY = 2;
  E[2] = "HISTORY";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.EMPTY = 0;
  E[0] = "EMPTY";
  E.UPDATE = 1;
  E[1] = "UPDATE";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=96B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.CHANGE = 0;
  E[0] = "CHANGE";
  E.PRESENCE_CHANGE = 1;
  E[1] = "PRESENCE_CHANGE";
  E.FAILED = 2;
  E[2] = "FAILED";
  E.PERSISTENCE = 3;
  E[3] = "PERSISTENCE";
  E.SYNCHRONIZATION = 4;
  E[4] = "SYNCHRONIZATION";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/EditorTypes
// args: E
function {
  E.OPENED = 0;
  E[0] = "OPENED";
  E.UNSUPPORTED_SCHEMA = 1;
  E[1] = "UNSUPPORTED_SCHEMA";
  E.INVALID_INITIAL_STATE = 2;
  E[2] = "INVALID_INITIAL_STATE";
  return;
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=20 bc=748B file=collaborative_editor/src/EditorTypes
// args: require, module, exports
// locals: E, t, T, A, _, R, N, e, I, o, D, S, i, r, L, O, n, C, s, P
function {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EditorSchema = undefined;
  exports.YjsUpdateEncoding = undefined;
  exports.DocumentNodeType = undefined;
  exports.DocumentMarkType = undefined;
  exports.TableCellAlignment = undefined;
  exports.NoteLiveTaskDayOfWeek = undefined;
  exports.EditorAffinity = undefined;
  exports.EditorReplacementKind = undefined;
  exports.IndentDelta = undefined;
  exports.EditorOperationKind = undefined;
  exports.EditorInputAction = undefined;
  exports.EditorBlockStyle = undefined;
  exports.EditorListStyle = undefined;
  exports.EditorErrorCode = undefined;
  exports.EditorResultStatus = undefined;
  exports.EditorSnapshotStatus = undefined;
  exports.EditorChangeOrigin = undefined;
  exports.EditorInitialStateKind = undefined;
  exports.EditorEventKind = undefined;
  exports.EditorOpenStatus = undefined;
  if ((E)) goto L_128;
  E = {};
  exports.EditorSchema = {};
  function <atom:0>({});
  if ((t)) goto L_13e;
  t = {};
  exports.YjsUpdateEncoding = {};
  function <atom:0>({});
  if ((T)) goto L_154;
  T = {};
  exports.DocumentNodeType = {};
  function <atom:0>({});
  if ((A)) goto L_16a;
  A = {};
  exports.DocumentMarkType = {};
  function <atom:0>({});
  if ((_)) goto L_182;
  _ = {};
  exports.TableCellAlignment = {};
  function <atom:0>({});
  if ((R)) goto L_19a;
  R = {};
  exports.NoteLiveTaskDayOfWeek = {};
  function <atom:0>({});
  if ((N)) goto L_1b2;
  N = {};
  exports.EditorAffinity = {};
  function <atom:0>({});
  if ((e)) goto L_1ca;
  e = {};
  exports.EditorReplacementKind = {};
  function <atom:0>({});
  if ((I)) goto L_1e2;
  I = {};
  exports.IndentDelta = {};
  function <atom:0>({});
  if ((o)) goto L_1fa;
  o = {};
  exports.EditorOperationKind = {};
  function <atom:0>({});
  if ((D)) goto L_212;
  D = {};
  exports.EditorInputAction = {};
  function <atom:0>({});
  if ((S)) goto L_22a;
  S = {};
  exports.EditorBlockStyle = {};
  function <atom:0>({});
  if ((i)) goto L_242;
  i = {};
  exports.EditorListStyle = {};
  function <atom:0>({});
  if ((r)) goto L_25a;
  r = {};
  exports.EditorErrorCode = {};
  function <atom:0>({});
  if ((L)) goto L_272;
  L = {};
  exports.EditorResultStatus = {};
  function <atom:0>({});
  if ((O)) goto L_28a;
  O = {};
  exports.EditorSnapshotStatus = {};
  function <atom:0>({});
  if ((n)) goto L_2a2;
  n = {};
  exports.EditorChangeOrigin = {};
  function <atom:0>({});
  if ((C)) goto L_2ba;
  C = {};
  exports.EditorInitialStateKind = {};
  function <atom:0>({});
  if ((s)) goto L_2d2;
  s = {};
  exports.EditorEventKind = {};
  function <atom:0>({});
  if ((P)) goto L_2ea;
  P = {};
  exports.EditorOpenStatus = {};
  function <atom:0>({});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/EditorTypes
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
