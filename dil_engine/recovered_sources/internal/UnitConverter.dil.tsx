
	function significantFigures(value, digits, roundTiny) {
		if (!Number.isFinite(value)) return "";
		if (value === 0 || roundTiny && Math.abs(value) < 10 ** -digits) return "0";
		const factor = 10 ** (digits - Math.floor(Math.log10(Math.abs(value))) - 1);
		const formatted = (Math.round(value * factor) / factor).toPrecision(digits);
		return formatted.includes("e") ? formatted.replace(/(\.\d*?)0+e/, "$1e").replace(/\.e/, "e") : formatted.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
	}
	function UnitConverter({ state, significant }) {
		const category = state.categories_map[state.category];
		const coefficients = state.conversion_coefficients;
		const editable = category.options_list.every((unit) => coefficients?.[unit]);
		const sourceKey = JSON.stringify([
			state.category,
			state.top_unit,
			state.bottom_unit,
			state.top_amount,
			state.bottom_amount
		]);
		const initialValues = {
			sourceKey,
			top_amount: state.top_amount,
			bottom_amount: state.bottom_amount,
			top_unit: state.top_unit,
			bottom_unit: state.bottom_unit,
			topDraft: null,
			bottomDraft: null
		};
		const values = DIL.useRef(initialValues);
		const [, setRevision] = DIL.useState(0);
		if (values.current.sourceKey !== sourceKey) values.current = initialValues;
		function formatAmount(amount) {
			return significant ? significantFigures(amount, state.significant_digits ?? 8, state.round_tiny_nonzero_to_zero ?? false) : String(Math.round(amount * 1e7) / 1e7);
		}
		function convert(amount, fromUnit, toUnit) {
			if (fromUnit === toUnit) return amount;
			const from = coefficients[fromUnit];
			const to = coefficients[toUnit];
			return ((amount + from.intercept / from.slope) * from.slope - to.intercept) / to.slope;
		}
		function logInteraction(side, unit) {
			if (significant) return;
			GenUI.dispatchAction({
				type: "log_event",
				handler: "client",
				payload: {
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: unit === void 0 ? "VALUE_INPUT" : "OPTION",
						widget_action_target: `${side}_${unit === void 0 ? "value" : "unit"}`,
						...unit === void 0 ? {} : { widget_action_value: unit },
						surface_location: "RESPONSE",
						content_reference_type: "unit_converter"
					}
				}
			});
		}
		function changeAmount(side, value) {
			if (!editable) return;
			logInteraction(side);
			const complete = significant ? /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(value) : /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(value);
			const incomplete = /^[+-]?\.?$/.test(value) || significant && /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?$/.test(value);
			if (!complete && !incomplete) return;
			const current = { ...values.current };
			const opposite = side === "top" ? "bottom" : "top";
			current[`${side}Draft`] = value;
			if (!significant && value === "") {
				current.top_amount = 0;
				current.bottom_amount = 0;
				current[`${opposite}Draft`] = null;
			} else if (complete) {
				const amount = Number(value);
				const converted = convert(amount, current[`${side}_unit`], current[`${opposite}_unit`]);
				if (Number.isFinite(amount) && Number.isFinite(converted)) {
					current[`${side}_amount`] = amount;
					current[`${opposite}_amount`] = converted;
					current[`${opposite}Draft`] = null;
				}
			}
			values.current = current;
			setRevision((revision) => revision + 1);
		}
		function changeUnit(side, unit) {
			if (!editable || !coefficients?.[unit]) return;
			const current = { ...values.current };
			const opposite = side === "top" ? "bottom" : "top";
			const converted = convert(current[`${opposite}_amount`], current[`${opposite}_unit`], unit);
			if (!Number.isFinite(converted)) return;
			current[`${side}_unit`] = unit;
			current[`${side}_amount`] = converted;
			current.topDraft = null;
			current.bottomDraft = null;
			values.current = current;
			setRevision((revision) => revision + 1);
			logInteraction(side, unit);
		}
		const options = category.options_list.map((value) => ({
			value,
			label: category.options_names[value]
		}));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", null, ["top", "bottom"].map((side, index) => /* @__PURE__ */ __dil.jsx("col", { key: side }, index > 0 && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { top: -10 }
		}, /* @__PURE__ */ __dil.jsx("col", { flex: 1 }, /* @__PURE__ */ __dil.jsx("divider", { spacing: 2 }))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { left: 2 }
		}, editable ? /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("input", {
			variant: "plain",
			inputType: "text",
			fontSize: "fill",
			size: "md",
			pill: false,
			value: values.current[`${side}Draft`] ?? formatAmount(values.current[`${side}_amount`]),
			onChange: (value) => changeAmount(side, value)
		})) : /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			tabularNums: true,
			weight: "normal"
		}, formatAmount(state[`${side}_amount`]))), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("select", {
			variant: "ghost",
			size: "sm",
			value: values.current[`${side}_unit`],
			options,
			disabled: !editable,
			onChange: (value) => changeUnit(side, value)
		}))))));
	}



/* ---- merged ---- */

	function significantFigures(value, digits, roundTiny) {
		if (!Number.isFinite(value)) return "";
		if (value === 0 || roundTiny && Math.abs(value) < 10 ** -digits) return "0";
		const factor = 10 ** (digits - Math.floor(Math.log10(Math.abs(value))) - 1);
		const formatted = (Math.round(value * factor) / factor).toPrecision(digits);
		return formatted.includes("e") ? formatted.replace(/(\.\d*?)0+e/, "$1e").replace(/\.e/, "e") : formatted.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
	}
	function UnitConverter({ state, significant }) {
		const category = state.categories_map[state.category];
		const coefficients = state.conversion_coefficients;
		const editable = category.options_list.every((unit) => coefficients?.[unit]);
		const sourceKey = JSON.stringify([
			state.category,
			state.top_unit,
			state.bottom_unit,
			state.top_amount,
			state.bottom_amount
		]);
		const initialValues = {
			sourceKey,
			top_amount: state.top_amount,
			bottom_amount: state.bottom_amount,
			top_unit: state.top_unit,
			bottom_unit: state.bottom_unit,
			topDraft: null,
			bottomDraft: null
		};
		const values = DIL.useRef(initialValues);
		const [, setRevision] = DIL.useState(0);
		if (values.current.sourceKey !== sourceKey) values.current = initialValues;
		function formatAmount(amount) {
			return significant ? significantFigures(amount, state.significant_digits ?? 8, state.round_tiny_nonzero_to_zero ?? false) : String(Math.round(amount * 1e7) / 1e7);
		}
		function convert(amount, fromUnit, toUnit) {
			if (fromUnit === toUnit) return amount;
			const from = coefficients[fromUnit];
			const to = coefficients[toUnit];
			return ((amount + from.intercept / from.slope) * from.slope - to.intercept) / to.slope;
		}
		function logInteraction(side, unit) {
			if (significant) return;
			GenUI.dispatchAction({
				type: "log_event",
				handler: "client",
				payload: {
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: unit === void 0 ? "VALUE_INPUT" : "OPTION",
						widget_action_target: `${side}_${unit === void 0 ? "value" : "unit"}`,
						...unit === void 0 ? {} : { widget_action_value: unit },
						surface_location: "RESPONSE",
						content_reference_type: "unit_converter"
					}
				}
			});
		}
		function changeAmount(side, value) {
			if (!editable) return;
			logInteraction(side);
			const complete = significant ? /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(value) : /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(value);
			const incomplete = /^[+-]?\.?$/.test(value) || significant && /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?$/.test(value);
			if (!complete && !incomplete) return;
			const current = { ...values.current };
			const opposite = side === "top" ? "bottom" : "top";
			current[`${side}Draft`] = value;
			if (!significant && value === "") {
				current.top_amount = 0;
				current.bottom_amount = 0;
				current[`${opposite}Draft`] = null;
			} else if (complete) {
				const amount = Number(value);
				const converted = convert(amount, current[`${side}_unit`], current[`${opposite}_unit`]);
				if (Number.isFinite(amount) && Number.isFinite(converted)) {
					current[`${side}_amount`] = amount;
					current[`${opposite}_amount`] = converted;
					current[`${opposite}Draft`] = null;
				}
			}
			values.current = current;
			setRevision((revision) => revision + 1);
		}
		function changeUnit(side, unit) {
			if (!editable || !coefficients?.[unit]) return;
			const current = { ...values.current };
			const opposite = side === "top" ? "bottom" : "top";
			const converted = convert(current[`${opposite}_amount`], current[`${opposite}_unit`], unit);
			if (!Number.isFinite(converted)) return;
			current[`${side}_unit`] = unit;
			current[`${side}_amount`] = converted;
			current.topDraft = null;
			current.bottomDraft = null;
			values.current = current;
			setRevision((revision) => revision + 1);
			logInteraction(side, unit);
		}
		const options = category.options_list.map((value) => ({
			value,
			label: category.options_names[value]
		}));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", null, ["top", "bottom"].map((side, index) => /* @__PURE__ */ __dil.jsx("col", { key: side }, index > 0 && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { top: -10 }
		}, /* @__PURE__ */ __dil.jsx("col", { flex: 1 }, /* @__PURE__ */ __dil.jsx("divider", { spacing: 2 }))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { left: 2 }
		}, editable ? /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("input", {
			variant: "plain",
			inputType: "text",
			fontSize: "fill",
			size: "md",
			pill: false,
			value: values.current[`${side}Draft`] ?? formatAmount(values.current[`${side}_amount`]),
			onChange: (value) => changeAmount(side, value)
		})) : /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			tabularNums: true,
			weight: "normal"
		}, formatAmount(state[`${side}_amount`]))), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("select", {
			variant: "ghost",
			size: "sm",
			value: values.current[`${side}_unit`],
			options,
			disabled: !editable,
			onChange: (value) => changeUnit(side, value)
		}))))));
	}

