
	function ReservationTimePillsRefCarouselWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ReservationTimePillsRefCarouselWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 420
		});
		return /* @__PURE__ */ __dil.jsx(ReservationCarousel, { state });
	}
	function ReservationCarousel({ state }) {
		const wide = DIL.useBreakpoint("sm");
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 4,
			snap: "mandatory",
			flush: true,
			showArrows: true,
			ariaLabel: state.carousel_label
		}, state.items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.refid,
			width: wide ? 362 : "84%",
			padding: 0,
			background: "transparent",
			variant: "none"
		}, /* @__PURE__ */ __dil.jsx(ReservationVoiceCard, { state: item })))));
	}

