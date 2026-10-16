// fn l  args=0 vars=0 closure=1 cpool=0 bc=39B file=collaborative_editor/src/NoteThemeDefinition
// closure: s
function {
  return s.slice();   // tail call
}

// fn b  args=1 vars=1 closure=1 cpool=0 bc=10B file=collaborative_editor/src/NoteThemeDefinition
// args: e
// closure: o
function {
  if (!((e == null))) goto L_9;
  e;
  return o;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=9 bc=1530B file=collaborative_editor/src/NoteThemeDefinition
// args: require, module, exports
// locals: e, t, o, a, i, f, n, d, c, r, s, l, b
function {
  l = function l;
  b = function b;
  let s;
  let r;
  let c;
  let d;
  let n;
  let f;
  let i;
  let a;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.getAvailableNoteThemes = undefined;
  exports.getNoteThemeDefinition = undefined;
  e = ["#a12745", "#7637a2", "#2748a4", "#006776", "#006b48", "#715a00", "#995008", "#765048"];
  t = ["#ff9bad", "#d4aeff", "#94baff", "#72d5e6", "#83dba9", "#e5cf70", "#ffa96e", "#dab5a2"];
  o = {id: "standard", name: "Standard", fonts: {heading1: {family: "system", weight: 600}, heading2: {family: "system", weight: 600}, heading3: {family: "system", weight: 600}, heading4: {family: "system", weight: 600}, heading5: {family: "system", weight: 600}, heading6: {family: "system", weight: 600}, body: {family: "system", weight: 400}}, lightColorScheme: {text: "#0d0d0d", background: "#ffffff", diff: "#004f1f", link: "#1d53bf", monospaceText: "#242424", monospaceBackground: "#f5f5f5", collaborators: e}, darkColorScheme: {text: "#ffffff", background: "#131313", diff: "#83dba9", link: "#7ab7ff", monospaceText: "#ededed", monospaceBackground: "#242424", collaborators: t}};
  a = {family: "Hedvig Letters Serif", weight: 400, ttfUrl: "https://persistent.oaistatic.com/writing-blocks/notes/themes/fonts/v1/10eb164574c5858855e2708bb12a628a385e021be5dd9ff2f586c4ff73b8ce5c.ttf"};
  i = {family: "Reenie Beanie", weight: 400, ttfUrl: "https://persistent.oaistatic.com/writing-blocks/notes/themes/fonts/v1/0ea608aa325bf9e11c9590cc0b63dcf7cd215e270784f1ebbe6fad4927b31ff8.ttf"};
  f = {family: "DM Mono", weight: 400, ttfUrl: "https://persistent.oaistatic.com/writing-blocks/notes/themes/fonts/v1/55b4c98f123daebb3ed27947ba47b2af00554fc6284d639a540bcef5e6258ad2.ttf"};
  n = {family: "DM Mono", weight: 500, ttfUrl: "https://persistent.oaistatic.com/writing-blocks/notes/themes/fonts/v1/fd327daf461db87b44a87def475d251bf03b997f7c07d9680592d75dbbfaad0b.ttf"};
  d = {id: "reporter", name: "Reporter", fonts: {heading1: a, heading2: a, heading3: a, heading4: a, heading5: a, heading6: a, body: a}, lightColorScheme: {text: "#252858", background: "#fbf7ee", diff: "#36643b", link: "#4d388c", monospaceText: "#303250", monospaceBackground: "#eee9dd", collaborators: e}, darkColorScheme: {text: "#c7c9e7", background: "#292724", diff: "#99d1a2", link: "#c4b1ff", monospaceText: "#e2e1f0", monospaceBackground: "#383631", collaborators: t}};
  null;
  i;
  null;
  i;
  null;
  i;
  null;
  i;
  null;
  i;
  null;
  i;
  null;
  i;
  c = {id: "paper", name: "Paper", fonts: {heading1: {fontSizeMultiplier: 1.5}, heading2: {fontSizeMultiplier: 1.5}, heading3: {fontSizeMultiplier: 1.5}, heading4: {fontSizeMultiplier: 1.5}, heading5: {fontSizeMultiplier: 1.5}, heading6: {fontSizeMultiplier: 1.5}, body: {fontSizeMultiplier: 1.5}}, lightColorScheme: {text: "#4f433c", background: "#ffffff", diff: "#386341", link: "#895125", monospaceText: "#483e38", monospaceBackground: "#f7f2ed", collaborators: e}, darkColorScheme: {text: "#bbbbbb", background: "#131313", diff: "#9bd7a4", link: "#ffc395", monospaceText: "#e4ddd7", monospaceBackground: "#262321", collaborators: t}};
  r = {id: "terminal", name: "Terminal", fonts: {heading1: n, heading2: n, heading3: n, heading4: n, heading5: n, heading6: n, body: f}, lightColorScheme: {text: "#98af99", background: "#222222", diff: "#c5ef91", link: "#80ded0", monospaceText: "#b9d7b6", monospaceBackground: "#161c17", collaborators: t}, darkColorScheme: {text: "#98af99", background: "#000000", diff: "#c5ef91", link: "#80ded0", monospaceText: "#b9d7b6", monospaceBackground: "#111711", collaborators: t}};
  s = [{theme: o}, {theme: d}, {theme: c}, {theme: r}];
  exports.getAvailableNoteThemes = l;
  exports.getNoteThemeDefinition = b;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/NoteThemeDefinition
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
