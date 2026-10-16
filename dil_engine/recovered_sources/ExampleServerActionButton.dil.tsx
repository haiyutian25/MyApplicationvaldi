
	function ExampleButtonView({ state }) {
		const [clickCount, setClickCount] = DIL.useState(state.local_click_count ?? 0);
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("button", {
			size: "md",
			onClick: () => {
				const next = clickCount + 1;
				setClickCount(next);
				GenUI.dispatchAction({
					handler: "server",
					type: "example_server_action_button_click",
					payload: {
						local_click_count: next,
						random_blob: {
							source: "dil-client-state",
							nonce: Date.now()
						}
					}
				});
			}
		}, "Trigger server action"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, `Local counter (client state): ${clickCount}`)));
	}
	function ExampleServerActionButton(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ExampleServerActionButton", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 110
		});
		return /* @__PURE__ */ __dil.jsx(ExampleButtonView, { state });
	}

