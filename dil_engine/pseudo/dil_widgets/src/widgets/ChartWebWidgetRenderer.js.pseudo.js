// fn t  args=2 vars=3 closure=3 cpool=0 bc=102B file=dil_widgets/src/widgets/ChartWebWidgetRenderer
// args: e, t
// locals: a
// closure: i, r, o
function {
  let a;
  a = i(e.getPropertyValue("onHoverAction", t));
  if (!((undefined !== a))) goto L_65;
  return {actions: [{action: a, expression: r, propertyName: "onHoverAction", type: o}]};
  return;
}

// fn a  args=1 vars=2 closure=1 cpool=0 bc=213B file=dil_widgets/src/widgets/ChartWebWidgetRenderer
// args: e
// locals: r
// closure: o
function {
  let r;
  if (!((e == null))) goto L_d;
  e;
  goto L_2f;
  if (!((1 !== undefined.actions.length))) goto L_33;
  return;
  r = e.actions[0];
  if (!((r.type === o))) goto L_d3;
  if (!(("onHoverAction" === r.propertyName))) goto L_d3;
  return r.action;
  return undefined;
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=14B file=dil_widgets/src/widgets/ChartWebWidgetRenderer
// args: e
function {
  if (!(("function" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=3 bc=504B file=dil_widgets/src/widgets/ChartWebWidgetRenderer
// args: require, module, exports
// locals: e, o, r, t, a, i
function {
  t = function t;
  a = function a;
  i = function i;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CHART_WIDGET_PROPERTIES = undefined;
  exports.CHART_WEB_WIDGET_RENDERER_OPTIONS = undefined;
  exports.ChartWebWidgetRendererFactory = undefined;
  exports.getChartHoverAction = undefined;
  e = require("../webview/WebWidgetRenderer");
  o = "dil.valdi.chart-hover";
  r = "{ 'type': '".concat(o, "', 'handler': 'client', 'loadingBehavior': 'none', 'payload': { 'hoverValue': hoverValue, 'hoverPayload': hoverPayload, 'hoverFormatted': hoverFormatted } }");
  exports.CHART_WIDGET_PROPERTIES = ["barCategoryGap", "barGap", "barRadius", "data", "disableAnimation", "disableUserScroll", "hoverIndicatorDataKey", "minPointWidth", "onHoverAction", "padding", "scrollable", "scrollToValue", "series", "showDots", "showGrid", "showHoverCursor", "showHoverDots", "showIdleHoverIndicator", "showLegend", "showTooltip", "showTooltipCursor", "showValueLabels", "showValues", "showYAxis", "tooltipValueFormatter", "valueLabelInterval", "valueLabelOffset", "visiblePointCount", "xAxis", "yAxis"];
  exports.CHART_WEB_WIDGET_RENDERER_OPTIONS = {actionBridgeResolver: t, disableDocumentScroll: true};
  exports.ChartWebWidgetRendererFactory = e.makeWebWidgetRendererFactory("Chart", exports.CHART_WIDGET_PROPERTIES, exports.CHART_WEB_WIDGET_RENDERER_OPTIONS);
  exports.getChartHoverAction = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/ChartWebWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
