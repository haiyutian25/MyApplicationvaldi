
	function LedgerCreditScoreDetail(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerCreditScoreDetail", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		const hidden = state.sensitive_values_hidden;
		const mask = state.labels.masked_value;
		const creditorLogos = state.creditor_logos ?? {};
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 6,
			padding: { bottom: 6 }
		}, state.status === "loading" && /* @__PURE__ */ __dil.jsx("box", {
			padding: { x: 5 },
			role: "status"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.loading)), state.status === "empty" && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_details)), state.status === "ready" && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.summary_label != null && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 26,
			gap: 1,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			tabularNums: true
		}, hidden ? mask : state.summary_label), state.rating_label != null && !hidden && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, "
"), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: state.rating_color === "green-400" ? "success" : state.rating_color === "yellow-400" ? {
				light: "yellow-700",
				dark: "yellow-500"
			} : state.rating_color === "red-500" ? {
				light: "danger",
				dark: "red-300"
			} : state.rating_color === "gray-400" ? "secondary" : "primary"
		}, state.rating_label)))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, state.rows.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.key,
			gap: 2.5,
			padding: {
				top: index === 0 ? 3 : 2.75,
				bottom: item.progress_percent != null ? 6 : 3
			},
			border: index > 0 ? { top: {
				size: 1,
				color: "alpha-10"
			} } : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 20,
			gap: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, item.label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			tabularNums: true
		}, hidden ? mask : item.value_label)), item.progress_percent != null && /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 5,
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: hidden ? "100%" : `${item.progress_percent}%`,
			height: 5,
			radius: "full",
			background: hidden ? "gray-300" : state.rating_color ?? "gray-400"
		}))))), state.score_factors.length > 0 && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			radius: "4xl",
			border: {
				size: 1,
				color: "alpha-10"
			},
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.labels.takeaways), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.score_factors.map((item, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hidden ? mask : item.description))))))), state.related_items.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 53,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium"
		}, state.related_items_title)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.related_items.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.key,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 68,
			gap: 2.5,
			align: "center",
			role: item.value_accessibility_label != null ? "group" : void 0,
			ariaLabel: item.value_accessibility_label != null ? hidden ? mask : item.value_accessibility_label : void 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 32,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, !hidden && item.logo_key && creditorLogos[item.logo_key] ? /* @__PURE__ */ __dil.jsx("image", {
			src: creditorLogos[item.logo_key],
			width: 32,
			height: 32,
			fit: "contain",
			radius: "full",
			alt: "",
			fallback: /* @__PURE__ */ __dil.jsx("box", {
				size: 32,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: item.icon,
				size: "sm",
				color: "secondary"
			}))
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon,
			size: "sm",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			truncate: true
		}, hidden ? mask : item.label), item.detail_label != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, hidden ? mask : item.detail_label)), item.value_label != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			tabularNums: true
		}, hidden ? mask : item.value_label)), index < state.related_items.length - 1 && /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))), state.related_items_note != null && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.related_items_note))));
	}



/* ---- merged ---- */

	function LedgerCreditScoreDetail(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LedgerCreditScoreDetail", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		const hidden = state.sensitive_values_hidden;
		const mask = state.labels.masked_value;
		const creditorLogos = state.creditor_logos ?? {};
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			gap: 6,
			padding: { bottom: 6 }
		}, state.status === "loading" && /* @__PURE__ */ __dil.jsx("box", {
			padding: { x: 5 },
			role: "status"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.loading)), state.status === "empty" && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.labels.no_details)), state.status === "ready" && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.summary_label != null && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 26,
			gap: 1,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			tabularNums: true
		}, hidden ? mask : state.summary_label), state.rating_label != null && !hidden && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, "
"), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: state.rating_color === "green-400" ? "success" : state.rating_color === "yellow-400" ? {
				light: "yellow-700",
				dark: "yellow-500"
			} : state.rating_color === "red-500" ? {
				light: "danger",
				dark: "red-300"
			} : state.rating_color === "gray-400" ? "secondary" : "primary"
		}, state.rating_label)))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, state.rows.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.key,
			gap: 2.5,
			padding: {
				top: index === 0 ? 3 : 2.75,
				bottom: item.progress_percent != null ? 6 : 3
			},
			border: index > 0 ? { top: {
				size: 1,
				color: "alpha-10"
			} } : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 20,
			gap: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, item.label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			tabularNums: true
		}, hidden ? mask : item.value_label)), item.progress_percent != null && /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 5,
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: hidden ? "100%" : `${item.progress_percent}%`,
			height: 5,
			radius: "full",
			background: hidden ? "gray-300" : state.rating_color ?? "gray-400"
		}))))), state.score_factors.length > 0 && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			radius: "4xl",
			border: {
				size: 1,
				color: "alpha-10"
			},
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.labels.takeaways), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.score_factors.map((item, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hidden ? mask : item.description))))))), state.related_items.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 53,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "medium"
		}, state.related_items_title)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.related_items.map((item, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.key,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 68,
			gap: 2.5,
			align: "center",
			role: item.value_accessibility_label != null ? "group" : void 0,
			ariaLabel: item.value_accessibility_label != null ? hidden ? mask : item.value_accessibility_label : void 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 32,
			radius: "full",
			background: "alpha-10",
			align: "center",
			justify: "center"
		}, !hidden && item.logo_key && creditorLogos[item.logo_key] ? /* @__PURE__ */ __dil.jsx("image", {
			src: creditorLogos[item.logo_key],
			width: 32,
			height: 32,
			fit: "contain",
			radius: "full",
			alt: "",
			fallback: /* @__PURE__ */ __dil.jsx("box", {
				size: 32,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: item.icon,
				size: "sm",
				color: "secondary"
			}))
		}) : /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon,
			size: "sm",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			truncate: true
		}, hidden ? mask : item.label), item.detail_label != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, hidden ? mask : item.detail_label)), item.value_label != null && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			tabularNums: true
		}, hidden ? mask : item.value_label)), index < state.related_items.length - 1 && /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })))))), state.related_items_note != null && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.related_items_note))));
	}

