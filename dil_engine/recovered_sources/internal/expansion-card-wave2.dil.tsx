
	function cardAction(type, state) {
		GenUI.dispatchAction({
			type,
			payload: type === "card.dismiss" ? {
				card_id: state.card_id,
				feed_id: state.feed_id
			} : {
				card_id: state.card_id,
				conversation_id: state.conversation_id,
				feed_id: state.feed_id
			}
		});
	}
	function CardActionButton({ name, type, state }) {
		return /* @__PURE__ */ __dil.jsx("button", {
			variant: "ghost",
			size: "md",
			uniform: true,
			onClick: () => cardAction(type, state)
		}, /* @__PURE__ */ __dil.jsx("icon", { name }));
	}
	function ExpansionActions({ state, showDismiss }) {
		if (!state.show_actions) return null;
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", { width: "2px" }), state.show_thumbs_up && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.reaction === "like" ? "thumb-up-filled" : "thumb-up",
			type: state.reaction === "like" ? "card.reaction.remove" : "card.thumbs_up",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_thumbs_down && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.reaction === "dislike" ? "thumb-down-filled" : "thumb-down",
			type: state.reaction === "dislike" ? "card.reaction.remove" : "card.thumbs_down",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_share && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: "share",
			type: "card.share",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_save && /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.is_saved ? "saved-filled-xs" : "saved-xs",
			type: state.is_saved ? "card.unsave" : "card.save",
			state
		}), showDismiss && state.show_dismiss && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("box", { width: 2 }), /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: "x",
			type: "card.dismiss",
			state
		})));
	}
	function ExpansionCardView({ state, task }) {
		const isSm = DIL.useBreakpoint("sm");
		const showImage = task ? task.showImage : true;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: task ? 0 : 4,
			shadow: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, task && /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 4,
				y: 3
			},
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			flex: 1,
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, task.emoji), /* @__PURE__ */ __dil.jsx("text", { size: "md" }, task.title))), state.show_dismiss && /* @__PURE__ */ __dil.jsx("button", {
			variant: "ghost",
			color: "primary",
			size: "md",
			uniform: true,
			onClick: () => cardAction("card.dismiss", state)
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "x" })))), /* @__PURE__ */ __dil.jsx("box", { padding: task ? 4 : 0 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: isSm ? "row" : "col",
			align: isSm ? "center" : "stretch",
			gap: isSm ? 2 : 3
		}, showImage && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			width: isSm ? 128 : "100%",
			flex: isSm ? "0 0 auto" : void 0,
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.image ?? "",
			alt: "Wildflower meadow with butterflies",
			width: isSm ? 128 : "100%",
			height: isSm ? 128 : "100%",
			aspectRatio: isSm ? 1 : "3/2",
			radius: "xl",
			hideOnFailure: !isSm
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: "auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			width: "100%",
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("box", { width: 4 }), /* @__PURE__ */ __dil.jsx("title", {
			weight: "medium",
			size: "md"
		}, state.title)), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("box", { width: 4 }), /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.description)))), /* @__PURE__ */ __dil.jsx(ExpansionActions, {
			state,
			showDismiss: !task
		}))))));
	}



/* ---- merged ---- */

	function cardAction(type, state) {
		GenUI.dispatchAction({
			type,
			payload: type === "card.dismiss" ? {
				card_id: state.card_id,
				feed_id: state.feed_id
			} : {
				card_id: state.card_id,
				conversation_id: state.conversation_id,
				feed_id: state.feed_id
			}
		});
	}
	function CardActionButton({ name, type, state }) {
		return /* @__PURE__ */ __dil.jsx("button", {
			variant: "ghost",
			size: "md",
			uniform: true,
			onClick: () => cardAction(type, state)
		}, /* @__PURE__ */ __dil.jsx("icon", { name }));
	}
	function ExpansionActions({ state, showDismiss }) {
		if (!state.show_actions) return null;
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", { width: "2px" }), state.show_thumbs_up && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.reaction === "like" ? "thumb-up-filled" : "thumb-up",
			type: state.reaction === "like" ? "card.reaction.remove" : "card.thumbs_up",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_thumbs_down && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.reaction === "dislike" ? "thumb-down-filled" : "thumb-down",
			type: state.reaction === "dislike" ? "card.reaction.remove" : "card.thumbs_down",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_share && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: "share",
			type: "card.share",
			state
		}), /* @__PURE__ */ __dil.jsx("box", { width: 2 })), state.show_save && /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: state.is_saved ? "saved-filled-xs" : "saved-xs",
			type: state.is_saved ? "card.unsave" : "card.save",
			state
		}), showDismiss && state.show_dismiss && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("box", { width: 2 }), /* @__PURE__ */ __dil.jsx(CardActionButton, {
			name: "x",
			type: "card.dismiss",
			state
		})));
	}
	function ExpansionCardView({ state, task }) {
		const isSm = DIL.useBreakpoint("sm");
		const showImage = task ? task.showImage : true;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: task ? 0 : 4,
			shadow: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, task && /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 4,
				y: 3
			},
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			flex: 1,
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, task.emoji), /* @__PURE__ */ __dil.jsx("text", { size: "md" }, task.title))), state.show_dismiss && /* @__PURE__ */ __dil.jsx("button", {
			variant: "ghost",
			color: "primary",
			size: "md",
			uniform: true,
			onClick: () => cardAction("card.dismiss", state)
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "x" })))), /* @__PURE__ */ __dil.jsx("box", { padding: task ? 4 : 0 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: isSm ? "row" : "col",
			align: isSm ? "center" : "stretch",
			gap: isSm ? 2 : 3
		}, showImage && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			width: isSm ? 128 : "100%",
			flex: isSm ? "0 0 auto" : void 0,
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: state.image ?? "",
			alt: "Wildflower meadow with butterflies",
			width: isSm ? 128 : "100%",
			height: isSm ? 128 : "100%",
			aspectRatio: isSm ? 1 : "3/2",
			radius: "xl",
			hideOnFailure: !isSm
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: "auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.title,
			width: "100%",
			onClick: () => cardAction("card.open", state)
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("box", { width: 4 }), /* @__PURE__ */ __dil.jsx("title", {
			weight: "medium",
			size: "md"
		}, state.title)), /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("box", { width: 4 }), /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.description)))), /* @__PURE__ */ __dil.jsx(ExpansionActions, {
			state,
			showDismiss: !task
		}))))));
	}

