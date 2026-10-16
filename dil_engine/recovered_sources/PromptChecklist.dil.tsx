
	const SvgPath = "path";
	function PromptChecklist(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("PromptChecklist", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedPromptChecklist, { state });
	}
	function TaskHeading({ task, completed, expanded, expandable }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: completed ? "check-circle-filled" : "empty-circle",
			size: "2xl",
			color: "tertiary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			width: "100%",
			size: "md",
			color: completed ? "tertiary" : "default"
		}, task.title), expandable ? /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-up" : "chevron-down",
			size: "sm",
			color: "secondary"
		}) : null);
	}
	function PromptTaskDetails({ task, defaultLabel }) {
		const hasIcons = task.prompts.some((prompt) => Boolean(prompt.icon));
		const hasImages = task.prompts.some((prompt) => Boolean(prompt.image_url));
		return /* @__PURE__ */ __dil.jsx("col", {
			key: task.id,
			gap: 0,
			padding: { bottom: 2 }
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, task.prompts.slice(0, 3).map((prompt) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: prompt.id,
			width: "100%",
			padding: {
				x: 2,
				y: 2
			},
			radius: "lg",
			border: 0,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: {
					query: prompt.prompt_text,
					prompt: prompt.prompt_text
				}
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, hasIcons ? /* @__PURE__ */ __dil.jsx("box", {
			size: 48,
			radius: "lg",
			align: "center",
			justify: "center",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: prompt.icon,
			size: "lg"
		})) : null, hasImages ? /* @__PURE__ */ __dil.jsx("box", {
			size: 73,
			radius: "lg",
			align: "center",
			justify: "center",
			background: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			}
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: prompt.image_url,
			width: 73,
			height: 73,
			radius: "lg",
			fit: "cover",
			hideOnFailure: true
		})) : null, /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, prompt.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 2
		}, prompt.summary || prompt.prompt_text)))))), /* @__PURE__ */ __dil.jsx("box", {
			padding: { top: 2 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			color: "secondary",
			block: true,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: {
					query: task.try_your_own_prompt_text,
					prompt: task.try_your_own_prompt_text
				}
			})
		}, task.try_your_own_label || defaultLabel)));
	}
	function ResolvedPromptChecklist({ state }) {
		const [localMode, setMode] = DIL.useState(void 0);
		const mode = localMode ?? state.mode;
		const [localSelectedTaskId, setSelectedTaskId] = DIL.useState(void 0);
		const selectedTaskId = localSelectedTaskId === void 0 ? state.selected_task_id ?? null : localSelectedTaskId;
		const [localCompletedItemsExpanded, setCompletedItemsExpanded] = DIL.useState(void 0);
		const completedItemsExpanded = localCompletedItemsExpanded ?? state.completed_items_expanded ?? false;
		const tasks = state.tasks ?? [];
		const completedIds = state.completed_task_ids ?? [];
		const olderCompletedTasks = tasks.filter((task) => completedIds.includes(task.id) && task.id !== state.latest_completed_task_id);
		const compactVisibleTasks = tasks.filter((task) => !completedIds.includes(task.id) || task.id === state.latest_completed_task_id || completedItemsExpanded);
		const isFinished = mode === "compact" && tasks.length > 0 && tasks.every((task) => completedIds.includes(task.id));
		const isCompact = mode === "compact" && !isFinished && Boolean(state.latest_completed_task_title || tasks.some((task) => task.id === state.latest_completed_task_id));
		const isFullReady = mode !== "compact" && tasks.length > 0;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, isFinished ? /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 4,
			padding: {
				x: 4,
				top: 6,
				bottom: 2
			},
			minHeight: 249
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 48,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("svg", {
			viewBox: "0 0 24 24",
			size: 40
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C15.6238 7.61436 15 7.72284 14.6822 8.17451L10.6504 13.9039L8.98994 12.0773C8.61843 11.6687 7.98598 11.6386 7.57733 12.0101C7.16867 12.3816 7.13855 13.014 7.51006 13.4227L10.0101 16.1727C10.2142 16.3973 10.5093 16.517 10.8123 16.4981C11.1152 16.4792 11.3931 16.3237 11.5678 16.0755L16.3178 9.32549C16.6356 8.87383 16.5272 8.25003 16.0755 7.93219Z",
			fill: "currentColor"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			width: "100%",
			size: "lg",
			weight: "semibold",
			textAlign: "center"
		}, state.completion_state.headline), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 329,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			width: "100%",
			size: "md",
			color: "secondary",
			textAlign: "center"
		}, state.completion_state.body))), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: { y: 2 }
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: {
				x: 4,
				y: 2
			},
			radius: "full",
			border: {
				size: 1,
				color: "subtle"
			},
			onClick: () => {
				setMode("full");
				setSelectedTaskId(null);
			}
		}, /* @__PURE__ */ __dil.jsx("box", { minHeight: 24 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			textAlign: "center"
		}, state.completion_state.show_completed_items_label))))) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: 4
		}, isCompact || isFullReady ? /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, state.title) : null, isCompact ? /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, compactVisibleTasks.map((task, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: task.id,
			gap: 0
		}, task.prompts.length > 0 ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: {
				x: 2,
				y: 2
			},
			radius: "lg",
			border: 0,
			onClick: () => {
				setMode("full");
				setSelectedTaskId(task.id);
			}
		}, /* @__PURE__ */ __dil.jsx(TaskHeading, {
			task,
			completed: completedIds.includes(task.id),
			expanded: false,
			expandable: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: {
				x: 2,
				y: 2
			}
		}, /* @__PURE__ */ __dil.jsx(TaskHeading, {
			task,
			completed: completedIds.includes(task.id),
			expanded: false,
			expandable: false
		})), index !== compactVisibleTasks.length - 1 ? /* @__PURE__ */ __dil.jsx("divider", { color: "subtle" }) : null))), olderCompletedTasks.length > 0 && !completedItemsExpanded ? /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			color: "secondary",
			block: true,
			onClick: () => setCompletedItemsExpanded(true)
		}, state.show_completed_items_label) : null) : null, isFullReady && !isCompact ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, tasks.map((task, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: task.id,
			gap: 0
		}, task.prompts.length > 0 ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: {
				x: 2,
				y: 2
			},
			radius: "lg",
			border: 0,
			onClick: () => {
				setMode("full");
				setSelectedTaskId(selectedTaskId === task.id ? null : task.id);
			}
		}, /* @__PURE__ */ __dil.jsx(TaskHeading, {
			task,
			completed: completedIds.includes(task.id),
			expanded: selectedTaskId === task.id,
			expandable: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: {
				x: 2,
				y: 2
			}
		}, /* @__PURE__ */ __dil.jsx(TaskHeading, {
			task,
			completed: completedIds.includes(task.id),
			expanded: false,
			expandable: false
		})), /* @__PURE__ */ __dil.jsx("animate", {
			hideOverflow: true,
			preventInitialTransition: false,
			initial: {
				opacity: 0,
				translateY: -6
			},
			enter: {
				opacity: 1,
				translateY: 0,
				delay: 0,
				duration: 180
			},
			exit: {
				opacity: 0,
				translateY: -4,
				delay: 0,
				duration: 120
			},
			layoutEnter: {
				delay: 0,
				duration: 220
			},
			layoutExit: {
				delay: 0,
				duration: 160
			},
			layoutMove: {
				delay: 0,
				duration: 220
			}
		}, task.prompts.length > 0 && selectedTaskId === task.id ? /* @__PURE__ */ __dil.jsx(PromptTaskDetails, {
			key: task.id,
			task,
			defaultLabel: state.try_your_own_label
		}) : null), index !== tasks.length - 1 ? /* @__PURE__ */ __dil.jsx("divider", { color: "subtle" }) : null))) : null));
	}

