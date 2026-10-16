
	function BusinessGalleryWidget(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("BusinessGalleryWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx(BusinessGalleryPresentation, { state });
	}

