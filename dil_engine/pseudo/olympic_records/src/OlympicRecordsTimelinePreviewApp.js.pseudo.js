// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=1B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// args: e
function {
  return;
}

// fn <atom:0>  args=0 vars=2 closure=6 cpool=0 bc=915B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: e, e#1
// closure: e, i, g, p, v, m
function {
  if (!(("open_medical_resource" === e))) goto L_189;
  let e;
  e = JSON.parse(i);
  if (!(("/records/timeline?pageSize=8" === e.link))) goto L_f6;
  return JSON.stringify({structuredContent: {medicalResource: {route: "/records/timeline", sections: g.slice(0, 1), pagination: {pageSize: 8, nextPageToken: null}, links: {next: null}}}});   // tail call
  if (!(("/records/timeline?pageSize=8&pageToken=mock-page-2" === e.link))) goto L_189;
  return JSON.stringify({structuredContent: {medicalResource: {route: "/records/timeline", sections: p, pagination: {pageSize: 8, nextPageToken: null}, links: {next: null}}}});   // tail call
  if (!(("get_organization" === e))) goto L_333;
  let e#1;
  e#1 = JSON.parse(i);
  if (!(("org_kaiser" === e#1.organization_id))) goto L_200;
  return v("org_kaiser", "Kaiser Permanente", undefined);   // tail call
  if (!(("org_function_health" === e#1.organization_id))) goto L_23f;
  return v("org_function_health", "Function Health", m);   // tail call
  if (!(("org_labcorp" === e#1.organization_id))) goto L_27c;
  return v("org_labcorp", "labcorp", undefined);   // tail call
  if (!(("org_one_medical" === e#1.organization_id))) goto L_2b9;
  return v("org_one_medical", "One Medical", undefined);   // tail call
  if (!(("org_el_camino" === e#1.organization_id))) goto L_2f6;
  return v("org_el_camino", "El Camino", undefined);   // tail call
  if (!(("org_ucsf" === e#1.organization_id))) goto L_333;
  return v("org_ucsf", "UCSF Health", undefined);   // tail call
  return JSON.stringify({isError: true, error: "Unexpected preview tool call ".concat(e)});   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=1 bc=79B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// args: e, i
// closure: g, p, v, m
function {
  return Promise.resolve().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=124B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// args: i
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_7b;
  console.warn("Olympic records preview render failure: ".concat(i));
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=48B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// closure: this, y
function {
  this.setState({displayInsets: y()});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=83B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: this, this.active_func, new.target, arguments
// closure: y, <class_fields_init>
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
  this.state = {displayInsets: y()};
  this.updateDisplayInsets = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=157B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: this
// closure: c
function {
  this = this;
  this.updateDisplayInsets();
  this.displayInsetObserver = c.Device.observeDisplayInsetChange(this.updateDisplayInsets);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: this
function {
  this = this;
  if (!((this.displayInsetObserver == null))) goto L_2c;
  this.displayInsetObserver;
  goto L_50;
  undefined.cancel();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=965B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// closure: i, a, f, e, t, u, o, b
function {
  i.beginRender(a, undefined);
  i.setAttributeStyle("style", f.root);
  i.setAttributeNumber("paddingBottom", e.bottom);
  i.setAttributeNumber("paddingLeft", e.left);
  i.setAttributeNumber("paddingRight", e.right);
  i.setAttributeNumber("paddingTop", e.top);
  i.beginRender(t, undefined);
  i.setAttributeStyle("style", f.cardPreviewFrame);
  i.beginComponent(u.OlympicRecordsTimelineComponent, o, undefined, undefined);
  if ((i.hasContext())) goto L_2ea;
  i.setContext({host: b});
  i.setViewModelProperty("state", "loading");
  i.setViewModelProperty("sections", []);
  i.endComponent();
  i.endRender();
  i.endRender();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=1 bc=350B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: e, this
// closure: i, a, f, t, u, o, b, n, r
function {
  this = this;
  let e;
  e = this.state.displayInsets;
  i.beginComponent(n.OAITheme, r, undefined, undefined);
  i.setViewModelProperty("mode", n.OAIThemeMode.System);
  i.setUnnamedSlot(function <atom:0>);
  i.endComponent();
  return;
}

// fn y  args=0 vars=0 closure=1 cpool=0 bc=310B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// closure: c
function {
  return {bottom: c.Device.getDisplayBottomInset(), left: c.Device.getDisplayLeftInset(), right: c.Device.getDisplayRightInset(), top: c.Device.getDisplayTopInset()};
}

// fn v  args=3 vars=3 closure=0 cpool=0 bc=72B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// args: e, i, r
function {
  return JSON.stringify({structuredContent: {organization: {id: e, name: i, logoBase64: r}}});   // tail call
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=22 bc=4888B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// args: require, module, exports
// locals: e, i, r, a, t, o, n, s, l, c, d, u, m, g, p, b, <class_fields_init>, OlympicRecordsTimelinePreviewApp, <class_fields_init>#1, OlympicRecordsTimelinePreviewApp#1, y, v, f
function {
  y = function y;
  v = function v;
  let f;
  let OlympicRecordsTimelinePreviewApp#1;
  let b;
  let p;
  let g;
  let m;
  let u;
  let d;
  let c;
  let l;
  let s;
  let n;
  let o;
  let t;
  let a;
  let r;
  let i;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OlympicRecordsTimelinePreviewApp = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  i = require("valdi_core/src/JSX").jsx;
  r = i.makeComponentPrototype(undefined, "Pv_xQPlRUnG75Qhb");
  a = i.makeNodePrototype("view", undefined, "FjMfwaNnoTFclILJ");
  t = i.makeNodePrototype("view", undefined, "wOzzXDbiAkUw0UBF");
  o = i.makeComponentPrototype(undefined, "KhtgfcAVR4qQ1tKP");
  n = require("oai_core/src/OAITheme");
  s = require("oai_core/src/OAITokens");
  l = require("valdi_core/src/Component");
  c = require("valdi_core/src/Device");
  d = require("valdi_core/src/Style");
  u = require("./OlympicRecordsTimelineComponent");
  m = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjI0Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBzdHJva2U9IiNDOTdENjAiIHN0cm9rZS13aWR0aD0iNC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik01IDE2TDU4IDQ2Ii8+PHBhdGggZD0iTTQgMjNMNTYgNTMiLz48cGF0aCBkPSJNNiAzMEw1MCA1NSIvPjxwYXRoIGQ9Ik0xMCAzOEwzOCA1NCIvPjxwYXRoIGQ9Ik0xMSAxMEw2MSAzOSIvPjwvZz48L3N2Zz4=";
  g = [{id: "2021-03-19", title: "19 Mar, 2021", date: "2021-03-19", cards: [{id: "fallback:2021-03-19:org_function_health", sortDateTime: "2021-03-19T12:00:00Z", source: {organizationId: "org_function_health", organizationName: "Function Health"}, categories: [{key: "metrics", label: "Lab results", rows: [{id: "observation:white-blood-cells-2021-03-19", resourceType: "Observation", category: "metrics", display: "White Blood Cells", date: "19 Mar, 2021", value: "6.1", unit: "x10^3/uL", abnormal: false, links: {self: "/Observation/white-blood-cells-2021-03-19"}}, {id: "observation:platelets-2021-03-19", resourceType: "Observation", category: "metrics", display: "Platelets", date: "19 Mar, 2021", value: "250", unit: "x10^3/uL", abnormal: false, links: {self: "/Observation/platelets-2021-03-19"}}, {id: "observation:glucose-2021-03-19", resourceType: "Observation", category: "metrics", display: "Glucose", date: "19 Mar, 2021", value: "90", unit: "mg/dL", abnormal: false, links: {self: "/Observation/glucose-2021-03-19"}}, {id: "observation:cholesterol-2021-03-19", resourceType: "Observation", category: "metrics", display: "Cholesterol", date: "19 Mar, 2021", value: "180", unit: "mg/dL", abnormal: true, links: {self: "/Observation/cholesterol-2021-03-19"}}, {id: "observation:triglycerides-2021-03-19", resourceType: "Observation", category: "metrics", display: "Triglycerides", date: "19 Mar, 2021", value: "120", unit: "mg/dL", abnormal: false, links: {self: "/Observation/triglycerides-2021-03-19"}}, {id: "observation:creatinine-2021-03-19", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "19 Mar, 2021", value: "1.0", unit: "mg/dL", abnormal: true, links: {self: "/Observation/creatinine-2021-03-19"}}, {id: "observation:bilirubin-2021-03-19", resourceType: "Observation", category: "metrics", display: "Bilirubin", date: "19 Mar, 2021", value: "0.8", unit: "mg/dL", abnormal: false, links: {self: "/Observation/bilirubin-2021-03-19"}}, {id: "observation:calcium-2021-03-19", resourceType: "Observation", category: "metrics", display: "Calcium", date: "19 Mar, 2021", value: "9.2", unit: "mg/dL", abnormal: false, links: {self: "/Observation/calcium-2021-03-19"}}, {id: "observation:sodium-2021-03-19", resourceType: "Observation", category: "metrics", display: "Sodium", date: "19 Mar, 2021", value: "140", unit: "mmol/L", abnormal: false, links: {self: "/Observation/sodium-2021-03-19"}}, {id: "observation:potassium-2021-03-19", resourceType: "Observation", category: "metrics", display: "Potassium", date: "19 Mar, 2021", value: "4.1", unit: "mmol/L", abnormal: false, links: {self: "/Observation/potassium-2021-03-19"}}, {id: "observation:magnesium-2021-03-19", resourceType: "Observation", category: "metrics", display: "Magnesium", date: "19 Mar, 2021", value: "2.0", unit: "mg/dL", abnormal: false, links: {self: "/Observation/magnesium-2021-03-19"}}, {id: "observation:vitamin-d-2021-03-19", resourceType: "Observation", category: "metrics", display: "Vitamin D", date: "19 Mar, 2021", value: "42", unit: "ng/mL", abnormal: false, links: {self: "/Observation/vitamin-d-2021-03-19"}}, {id: "observation:iron-2021-03-19", resourceType: "Observation", category: "metrics", display: "Iron", date: "19 Mar, 2021", value: "85", unit: "�g/dL", abnormal: true, links: {self: "/Observation/iron-2021-03-19"}}]}]}]}, {id: "2025-05-19", title: "May 19, 2025", date: "2025-05-19", cards: [{id: "fallback:2025-05-19:org_function_health", sortDateTime: "2025-05-19T12:00:00Z", source: {organizationId: "org_function_health", organizationName: "Function Health"}, categories: [{key: "metrics", label: "Lab results", summary: {totalCount: 1}, rows: [{id: "observation:creatinine-736", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "May 19, 2025", value: "1.53", unit: "mg/dL", abnormal: true, links: {self: "/Observation/736"}}]}, {key: "documents", label: "Documents", summary: {totalCount: 1}, rows: [{id: "document:function-health-creatinine-2025-05-19", resourceType: "DocumentReference", category: "documents", display: "Creatinine lab report", date: "May 19, 2025", abnormal: false, links: {self: "/DocumentReference/function-health-creatinine-2025-05-19"}}]}]}]}, {id: "2025-03-11", title: "Mar 11, 2025", date: "2025-03-11", cards: [{id: "fallback:2025-03-11:org_function_health", sortDateTime: "2025-03-11T12:00:00Z", source: {organizationId: "org_function_health", organizationName: "Function Health"}, categories: [{key: "metrics", label: "Lab results", rows: [{id: "observation:creatinine-635", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "Mar 11, 2025", value: "1.54", unit: "mg/dL", abnormal: true, links: {self: "/Observation/635"}}]}]}]}, {id: "2025-02-10", title: "Feb 10, 2025", date: "2025-02-10", cards: [{id: "encounter:ucsf-primary-care", sortDateTime: "2025-02-10T18:30:00Z", source: {organizationId: "org_ucsf", organizationName: "UCSF Health"}, encounter: {id: "ucsf-primary-care", display: "Primary care visit", type: "Office visit", date: "Feb 10, 2025", location: "San Francisco"}, categories: [{key: "conditions", label: "Conditions", rows: [{id: "condition:essential-hypertension", resourceType: "Condition", category: "conditions", display: "Essential hypertension", date: "Jan 20, 2025", abnormal: false, links: {self: "/Condition/essential-hypertension"}}, {id: "condition:vitamin-d-deficiency", resourceType: "Condition", category: "conditions", display: "Vitamin D deficiency", abnormal: false, links: {self: "/Condition/vitamin-d-deficiency"}}]}, {key: "medications", label: "Medications", rows: [{id: "medication:lisinopril", resourceType: "MedicationStatement", category: "medications", display: "Lisinopril", value: "10", unit: "mg", abnormal: false, links: {self: "/MedicationStatement/lisinopril"}}, {id: "medication:vitamin-d3", resourceType: "MedicationStatement", category: "medications", display: "Vitamin D3", value: "2000", unit: "IU", abnormal: false, links: {self: "/MedicationStatement/vitamin-d3"}}]}, {key: "allergies", label: "Allergies", rows: [{id: "allergy:penicillin", resourceType: "AllergyIntolerance", category: "allergies", display: "Penicillin", value: "rash", abnormal: true, links: {self: "/AllergyIntolerance/penicillin"}}]}, {key: "immunizations", label: "Immunizations", rows: [{id: "immunization:influenza", resourceType: "Immunization", category: "immunizations", display: "Influenza vaccine", date: "Oct 4, 2024", abnormal: false, links: {self: "/Immunization/influenza"}}]}, {key: "procedures", label: "Procedures", rows: [{id: "procedure:blood-pressure-screening", resourceType: "Procedure", category: "procedures", display: "Blood pressure screening", abnormal: false, links: {self: "/Procedure/blood-pressure-screening"}}]}, {key: "documents", label: "Documents", rows: [{id: "document:after-visit-summary", resourceType: "DocumentReference", category: "documents", display: "After visit summary", abnormal: false, links: {self: "/DocumentReference/after-visit-summary"}}]}, {key: "carePlans", label: "Care plans", rows: [{id: "care-plan:blood-pressure-monitoring", resourceType: "CarePlan", category: "carePlans", display: "Home blood pressure monitoring", abnormal: false, links: {self: "/CarePlan/blood-pressure-monitoring"}}]}]}]}];
  p = [{id: "2025-02-27", title: "Feb 27, 2025", date: "2025-02-27", cards: [{id: "encounter:129", sortDateTime: "2025-02-27T16:50:00Z", source: {organizationId: "org_kaiser", organizationName: "Kaiser Permanente - Northern California"}, encounter: {id: "129", display: "Office Visit", type: "Well visit, adult", date: "Feb 27, 2025", location: "DEPARTMENT OF MEDICINE"}, categories: [{key: "metrics", label: "Metrics", rows: [{id: "observation:temperature-149", resourceType: "Observation", category: "metrics", display: "Temperature", date: "Feb 27, 2025", value: "35.6", unit: "Cel", abnormal: false, links: {self: "/Observation/149"}}, {id: "observation:pulse-162", resourceType: "Observation", category: "metrics", display: "Pulse", date: "Feb 27, 2025", value: "85", unit: "/min", abnormal: false, links: {self: "/Observation/162"}}, {id: "observation:spo2-187", resourceType: "Observation", category: "metrics", display: "SpO2", date: "Feb 27, 2025", value: "94", unit: "%", abnormal: false, links: {self: "/Observation/187"}}, {id: "observation:weight-190", resourceType: "Observation", category: "metrics", display: "Weight", date: "Feb 27, 2025", value: "80.7", unit: "kg", abnormal: false, links: {self: "/Observation/190"}}]}]}]}, {id: "2019-07-05", title: "Jul 5, 2019", date: "2019-07-05", cards: [{id: "fallback:2019-07-05:org_labcorp", sortDateTime: "2019-07-05T14:55:00Z", source: {organizationId: "org_labcorp", organizationName: "labcorp"}, categories: [{key: "metrics", label: "Lab results", rows: [{id: "observation:creatinine-100", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "Jul 5, 2019", value: "1.47", unit: "mg/dL", abnormal: true, links: {self: "/Observation/100"}}]}]}, {id: "fallback:2019-07-05:org_one_medical", sortDateTime: "2019-07-05T14:55:00Z", source: {organizationId: "org_one_medical", organizationName: "One Medical"}, categories: [{key: "metrics", label: "Lab results", rows: [{id: "observation:creatinine-323", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "Jul 5, 2019", value: "1.47", unit: "mg/dL", abnormal: true, links: {self: "/Observation/323"}}]}]}]}, {id: "2019-04-24", title: "Apr 24, 2019", date: "2019-04-24", cards: [{id: "fallback:2019-04-24:org_el_camino", sortDateTime: "2019-04-24T21:08:00Z", source: {organizationId: "org_el_camino", organizationName: "El Camino"}, categories: [{key: "metrics", label: "Lab results", rows: [{id: "observation:creatinine-953", resourceType: "Observation", category: "metrics", display: "Creatinine", date: "Apr 24, 2019", value: "1.1", unit: "mg/dL", abnormal: false, links: {self: "/Observation/953"}}]}]}]}];
  let <class_fields_init>;
  class  extends undefined { ... }
  <proto:>.sendInstrument = function <atom:0>;
  <proto:>.callTool = function <atom:0>;
  <proto:>.renderFailure = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:>;
  // close_loc <class_fields_init>
  b = new function <atom:0>();
  let OlympicRecordsTimelinePreviewApp;
  let <class_fields_init>#1;
  class OlympicRecordsTimelinePreviewApp extends l.StatefulComponent { ... }
  <proto:OlympicRecordsTimelinePreviewApp>.onCreate = function <atom:0>;
  <proto:OlympicRecordsTimelinePreviewApp>.onDestroy = function <atom:0>;
  <proto:OlympicRecordsTimelinePreviewApp>.onRender = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:OlympicRecordsTimelinePreviewApp>;
  OlympicRecordsTimelinePreviewApp = function <atom:0>;
  // close_loc <class_fields_init>#1
  OlympicRecordsTimelinePreviewApp#1 = function <atom:0>;
  exports.OlympicRecordsTimelinePreviewApp = OlympicRecordsTimelinePreviewApp#1;
  f = {root: new d.Style({backgroundColor: s.OAIColor.BgPrimary, height: "100%", width: "100%"}), cardPreviewFrame: new d.Style({height: "100%", paddingLeft: 13, paddingRight: 13, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=olympic_records/src/OlympicRecordsTimelinePreviewApp
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
