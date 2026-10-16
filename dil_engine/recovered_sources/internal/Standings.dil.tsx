
	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}



/* ---- merged ---- */

	function ResolvedStandings({ state }) {
		const liveActivity = useIsLiveActivity();
		const isWide = DIL.useBreakpoint("sm");
		const { theme } = DIL.useTheme();
		const [defaultConferenceId, setDefaultConferenceId] = DIL.useState(state.defaultConferenceId);
		const activeConference = state.conferences.find((conference) => conference.id === defaultConferenceId);
		const teamWidth = isWide ? 240 : 180;
		const textSize = isWide ? "md" : "sm";
		if (liveActivity) {
			const division = activeConference?.divisions[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: {
					x: 2,
					y: 1
				},
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, division?.teams.slice(0, 2).map((team) => /* @__PURE__ */ __dil.jsx("row", {
				key: team.id,
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, `${team.rank}. ${team.name}`), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, team.values.length > 1 && division.headers[1]?.key === "points" ? `${team.values[1].text} ${division.headers[1].text}` : team.values.length > 1 ? `${team.values[0].text}-${team.values[1].text}` : team.values[0]?.text ?? ""))))));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("title", { size: "lg" }, state.title), state.hasMultipleConferences && /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: state.conferences.map((conference) => ({
				value: conference.id,
				label: isWide || conference.shortName == null ? conference.name : conference.shortName
			})),
			value: defaultConferenceId,
			onChange: setDefaultConferenceId,
			variant: "soft",
			size: "md",
			pill: true
		})), activeConference ? /* @__PURE__ */ __dil.jsx("col", {
			key: activeConference.id,
			gap: 3
		}, activeConference.divisions.map((division) => /* @__PURE__ */ __dil.jsx("box", { key: division.id }, /* @__PURE__ */ __dil.jsx("box", {
			gap: 0,
			padding: { top: 2 }
		}, division.show_division_name && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, division.name), /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			scrollable: true,
			padding: { x: 0 }
		}, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: teamWidth,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			maxLines: 1
		}, state.teamHeader))), ...division.headers.map((header) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, header.text))))])), /* @__PURE__ */ __dil.jsx("table-section", null, division.teams.map((team) => /* @__PURE__ */ __dil.jsx("table-row", null, [/* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			padding: {
				x: 0,
				y: 1.25
			},
			width: teamWidth
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "nowrap",
			width: teamWidth,
			minWidth: teamWidth
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 32,
			minWidth: 32,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			color: "secondary",
			maxLines: 1,
			textAlign: "center"
		}, team.rank)), team.logo && /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			src: team.logo,
			width: 32,
			height: 32,
			fit: "contain",
			radius: "md",
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", { size: textSize }, team.name)))), ...team.values.map((value) => /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			width: 42,
			padding: {
				x: 0,
				y: 1.25
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 42,
			minWidth: 42,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: textSize,
			maxLines: 1
		}, value.text))))]))))))))) : null));
	}
	function StandingsWidget({ componentName, widgetProps }) {
		const { state, resolutionComplete } = useResolvedComponentResult(componentName, widgetProps);
		if (!state) return resolutionComplete ? widgetProps.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 500
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStandings, { state });
	}

