
	function FollowUp({ query, value }) {
		return /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			onClick: () => GenUI.issueNewTurn(query ?? value)
		}, /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-curved"
		}), " ", /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, value)));
	}

