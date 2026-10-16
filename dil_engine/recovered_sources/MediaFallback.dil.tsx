
	function MediaFallback({ children, height = "100%", width = "100%" }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			background: "surface-tertiary",
			height,
			justify: "center",
			width
		}, children);
	}

