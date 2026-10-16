
	function JobsWidget(props) {
		const isDesktop = DIL.useBreakpoint("sm");
		const { resolutionComplete, state } = useResolvedComponentResult("JobsWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 220
		});
		const labels = {
			linkedin: "Apply on LinkedIn",
			indeed: "Apply on Indeed",
			upwork: "Apply on Upwork",
			ziprecruiter: "Apply on ZipRecruiter"
		};
		const metadata = [
			{
				label: "Location",
				value: state.location,
				icon: "map-pin"
			},
			{
				label: "Pay",
				value: state.salary,
				icon: "banknote"
			},
			{
				label: "Term",
				value: state.employment_type,
				icon: "briefcase"
			}
		].filter((item) => item.value != null);
		const heading = /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: isDesktop ? "4px" : "6px",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: isDesktop ? "6px" : "4px"
		}, state.company_logo_url != null && /* @__PURE__ */ __dil.jsx("image", {
			src: state.company_logo_url,
			alt: state.company != null ? `${state.company} logo` : "",
			fit: "contain",
			hideOnFailure: true,
			radius: "sm",
			width: 20,
			height: 20
		}), state.company != null && /* @__PURE__ */ __dil.jsx("text", {
			color: "primary",
			maxLines: 1,
			size: "sm",
			truncate: true,
			weight: "medium"
		}, state.company)), /* @__PURE__ */ __dil.jsx("title", {
			color: "primary",
			size: "lg",
			weight: "medium"
		}, state.title));
		const apply = /* @__PURE__ */ __dil.jsx("pressable", {
			align: "center",
			background: "gray-1000",
			justify: "center",
			width: isDesktop ? "fit-content" : "100%",
			padding: {
				x: 3,
				y: isDesktop ? 2 : 2.5
			},
			radius: "full",
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: state.apply_url_with_tracking,
					event_name: "jobs_widget_apply_clicked",
					statsig_event_name: "jobs_widget_apply_clicked",
					event_data: {
						widget_name: "jobs_widget",
						provider: state.source
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "gray-0",
			maxLines: 1,
			size: "sm",
			weight: "medium",
			textAlign: "center"
		}, labels[state.source] ?? "Apply"));
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface-elevated",
			gap: 0,
			onVisible: () => GenUI.dispatchAction({
				type: "log_event",
				handler: "client",
				payload: {
					event_name: "jobs_widget_impression",
					statsig_event_name: "jobs_widget_impression",
					event_data: {
						widget_name: "jobs_widget",
						provider: state.source
					}
				}
			}),
			padding: isDesktop ? 6 : 5,
			size: "full"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: isDesktop ? 2.5 : 3 }, isDesktop ? /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 3,
			justify: "between",
			wrap: "nowrap"
		}, heading, apply) : heading, /* @__PURE__ */ __dil.jsx("box", { padding: isDesktop ? { y: 1 } : 0 }, /* @__PURE__ */ __dil.jsx("box", {
			background: "border",
			height: 1
		})), (metadata.length > 0 || state.role_summary != null) && /* @__PURE__ */ __dil.jsx("col", { gap: isDesktop ? 2 : 3 }, metadata.length > 0 && /* @__PURE__ */ __dil.jsx("row", {
			align: isDesktop ? "center" : "start",
			gap: 4,
			wrap: isDesktop ? "wrap" : "nowrap"
		}, metadata.map((item) => isDesktop ? /* @__PURE__ */ __dil.jsx("row", {
			key: item.label,
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon,
			color: "secondary",
			size: "md"
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			weight: "normal"
		}, item.value)) : /* @__PURE__ */ __dil.jsx("col", {
			key: item.label,
			flex: 1,
			gap: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			size: "sm",
			weight: "normal"
		}, item.label), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "normal"
		}, item.value)))), !isDesktop && state.role_summary != null && /* @__PURE__ */ __dil.jsx("box", {
			background: "border",
			height: 1
		}), state.role_summary != null && /* @__PURE__ */ __dil.jsx("text", {
			color: "primary",
			size: "md"
		}, state.role_summary)), !isDesktop && apply));
	}

