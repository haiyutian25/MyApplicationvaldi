// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=333B file=dil_widgets/src/widgets/PieChartWebWidgetRenderer
// args: require, module, exports
// locals: e
function {
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PIE_CHART_WIDGET_PROPERTIES = undefined;
  exports.PIE_CHART_WEB_WIDGET_RENDERER_OPTIONS = undefined;
  exports.PieChartWebWidgetRendererFactory = undefined;
  e = require("../webview/WebWidgetRenderer");
  exports.PIE_CHART_WIDGET_PROPERTIES = ["cornerRadius", "data", "disableAnimation", "endAngle", "innerRadius", "minAngle", "outerRadius", "paddingAngle", "series", "showLabelLines", "showLegend", "showValueLabels", "sliceStrokeWidth", "startAngle", "xAxis"];
  exports.PIE_CHART_WEB_WIDGET_RENDERER_OPTIONS = {actionBridgeResolver: undefined, disableDocumentScroll: true};
  exports.PieChartWebWidgetRendererFactory = e.makeWebWidgetRendererFactory("PieChart", exports.PIE_CHART_WIDGET_PROPERTIES, exports.PIE_CHART_WEB_WIDGET_RENDERER_OPTIONS);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/PieChartWebWidgetRenderer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
