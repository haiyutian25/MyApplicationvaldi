
	function SuperbowlRiddleWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("SuperbowlRiddleWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(Riddle, { state });
	}
	function Riddle({ state }) {
		const items = [
			"fox",
			"chicken",
			"grain"
		];
		const [left, setLeft] = DIL.useState(state.left ?? items);
		const [right, setRight] = DIL.useState(state.right ?? []);
		const [boatSide, setBoatSide] = DIL.useState(state.boatSide ?? "left");
		const [inBoat, setInBoat] = DIL.useState(state.inBoat ?? "");
		const [status, setStatus] = DIL.useState(state.status ?? "playing");
		function reset() {
			setLeft(items);
			setRight([]);
			setBoatSide("left");
			setInBoat("");
			setStatus("playing");
		}
		function pick(item, side) {
			const next = (side === "left" ? left : right).filter((value) => value !== item).concat(inBoat ? [inBoat] : []);
			if (side === "left") setLeft(next);
			else setRight(next);
			setInBoat(item);
		}
		function unload() {
			if (boatSide === "left") setLeft(left.concat(inBoat));
			else setRight(right.concat(inBoat));
			setInBoat("");
		}
		function cross() {
			const unattended = boatSide === "left" ? left : right;
			const lost = unattended.includes("chicken") && (unattended.includes("fox") || unattended.includes("grain"));
			const nextRight = boatSide === "left" && inBoat ? right.concat(inBoat) : right;
			if (boatSide === "right" && inBoat) setLeft(left.concat(inBoat));
			setRight(nextRight);
			setStatus(lost ? "lost" : items.every((item) => nextRight.includes(item)) ? "won" : "playing");
			setInBoat("");
			setBoatSide(boatSide === "left" ? "right" : "left");
		}
		const followups = status === "won" ? [
			"What are the riddles I am ready to solve in my life?",
			"How can I keep this momentum after a win?",
			"What did this puzzle teach me about patience and tradeoffs?"
		] : [
			"How do I deal with failure when it stings?",
			"What is one small move that could change this story?",
			"What riddle am I avoiding in my life right now?"
		];
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "lg",
			padding: 12
		}, status === "playing" ? /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("title", null, "Fox, Chicken, Grain"), /* @__PURE__ */ __dil.jsx("text", null, "Move one item at a time. Never leave fox with chicken, or chicken with grain, without the boat."), /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			minWidth: 120
		}, /* @__PURE__ */ __dil.jsx("text", null, "Left Bank"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, items.filter((item) => left.includes(item)).map((item) => /* @__PURE__ */ __dil.jsx("button", {
			key: item,
			size: "sm",
			disabled: boatSide !== "left",
			onClick: () => pick(item, "left")
		}, item)))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			minWidth: 240,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 240,
			height: 110,
			padding: 2,
			radius: "lg",
			border: {
				size: 1,
				color: "blue-200"
			},
			background: "blue-50"
		}, /* @__PURE__ */ __dil.jsx("col", {
			height: "100%",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			height: "30%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "50%",
			align: "center",
			justify: "start"
		}, inBoat && boatSide === "left" && /* @__PURE__ */ __dil.jsx("button", {
			size: "xs",
			onClick: unload
		}, inBoat)), /* @__PURE__ */ __dil.jsx("box", {
			width: "50%",
			align: "center",
			justify: "end"
		}, inBoat && boatSide === "right" && /* @__PURE__ */ __dil.jsx("button", {
			size: "xs",
			onClick: unload
		}, inBoat))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			height: "70%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "50%",
			align: "center",
			justify: "start"
		}, boatSide === "left" && /* @__PURE__ */ __dil.jsx("box", {
			width: 70,
			height: 26,
			radius: "md",
			background: "orange-300",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, "boat"))), /* @__PURE__ */ __dil.jsx("box", {
			width: "50%",
			align: "center",
			justify: "end"
		}, boatSide === "right" && /* @__PURE__ */ __dil.jsx("box", {
			width: 70,
			height: 26,
			radius: "md",
			background: "orange-300",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, "boat")))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "xs",
			onClick: cross
		}, "<->"))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			minWidth: 120
		}, /* @__PURE__ */ __dil.jsx("text", null, "Right Bank"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, items.filter((item) => right.includes(item)).map((item) => /* @__PURE__ */ __dil.jsx("button", {
			key: item,
			size: "sm",
			disabled: boatSide !== "right",
			onClick: () => pick(item, "right")
		}, item))))), /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			color: "secondary",
			onClick: reset
		}, "Reset"))) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("title", null, status === "won" ? "Solved!" : "Game Over"), /* @__PURE__ */ __dil.jsx("text", null, status === "won" ? "Everyone made it across. Nice work." : "Uh oh - someone got eaten. Try again when you are ready."), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", null, status === "won" ? "Follow-up riddles for your life:" : "Follow-up riddles for a reset:"), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, followups.map((query) => /* @__PURE__ */ __dil.jsx("button", {
			key: query,
			size: "sm",
			color: "secondary",
			onClick: () => GenUI.dispatchAction({
				type: "client",
				payload: {
					action: "issue_new_turn",
					query
				}
			})
		}, query)))), /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			color: "secondary",
			onClick: reset
		}, "Reset")));
	}

