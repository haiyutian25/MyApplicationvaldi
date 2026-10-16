
	const SvgPath = "path";
	function ReviewStar({ half = false, color = "primary", size = 13 }) {
		return /* @__PURE__ */ __dil.jsx("svg", {
			viewBox: "0 0 24 24",
			size,
			color
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: half ? "M12 17.27 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" : "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z",
			fill: "currentColor"
		}));
	}
	function ReviewCardBody({ card }) {
		const { isDark } = DIL.useTheme();
		const logo = typeof card.provider_logo_src === "string" ? card.provider_logo_src : isDark ? card.provider_logo_src?.dark : card.provider_logo_src?.light;
		return card.kind === "summary" ? /* @__PURE__ */ __dil.jsx("col", {
			height: "100%",
			justify: "between",
			gap: 2,
			padding: 3
		}, logo ? /* @__PURE__ */ __dil.jsx("image", {
			src: logo,
			alt: card.provider ? card.provider + " logo" : "",
			width: card.provider_logo_width,
			height: 18,
			fit: "contain",
			hideOnFailure: true
		}) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold",
			maxLines: 1
		}, card.rating_label), /* @__PURE__ */ __dil.jsx("row", {
			gap: .5,
			align: "center",
			wrap: "nowrap"
		}, card.stars.map((star, index) => /* @__PURE__ */ __dil.jsx(ReviewStar, {
			key: index,
			half: star.half
		}))))) : /* @__PURE__ */ __dil.jsx("col", {
			height: "100%",
			justify: "between",
			gap: 2,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "primary",
			maxLines: 4
		}, card.text), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			wrap: "nowrap"
		}, card.stars.length > 0 ? /* @__PURE__ */ __dil.jsx("row", {
			gap: .25,
			align: "center",
			wrap: "nowrap"
		}, card.stars.map((star, index) => /* @__PURE__ */ __dil.jsx(ReviewStar, {
			key: index,
			color: star.filled ? "secondary" : "tertiary"
		}))) : null, card.time_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: 1
		}, card.time_label) : null));
	}
	function EntityReviewsPresentation({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const isMobile = DIL.useIsMobile();
		if (state.cards.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "entity_reviews_widget_shown",
						statsig_event_name: "entity_reviews_widget_shown",
						event_data: { widget_name: "entity_reviews" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			showArrows: !isMobile
		}, state.cards.map((card) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: card.id,
			variant: "outline",
			width: card.kind === "summary" ? 128 : 220,
			minWidth: card.kind === "summary" ? 128 : 220,
			height: 128,
			radius: "2xl",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: card.url ? {
				handler: "client",
				type: "open_url",
				payload: { url: card.url }
			} : null,
			label: card.kind === "summary" ? (card.provider ?? "") + " " + (card.rating_label ?? "") : card.text ?? ""
		}, /* @__PURE__ */ __dil.jsx(ReviewCardBody, { card }))))));
	}



/* ---- merged ---- */

	const SvgPath = "path";
	function ReviewStar({ half = false, color = "primary", size = 13 }) {
		return /* @__PURE__ */ __dil.jsx("svg", {
			viewBox: "0 0 24 24",
			size,
			color
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: half ? "M12 17.27 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" : "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z",
			fill: "currentColor"
		}));
	}
	function ReviewCardBody({ card }) {
		const { isDark } = DIL.useTheme();
		const logo = typeof card.provider_logo_src === "string" ? card.provider_logo_src : isDark ? card.provider_logo_src?.dark : card.provider_logo_src?.light;
		return card.kind === "summary" ? /* @__PURE__ */ __dil.jsx("col", {
			height: "100%",
			justify: "between",
			gap: 2,
			padding: 3
		}, logo ? /* @__PURE__ */ __dil.jsx("image", {
			src: logo,
			alt: card.provider ? card.provider + " logo" : "",
			width: card.provider_logo_width,
			height: 18,
			fit: "contain",
			hideOnFailure: true
		}) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold",
			maxLines: 1
		}, card.rating_label), /* @__PURE__ */ __dil.jsx("row", {
			gap: .5,
			align: "center",
			wrap: "nowrap"
		}, card.stars.map((star, index) => /* @__PURE__ */ __dil.jsx(ReviewStar, {
			key: index,
			half: star.half
		}))))) : /* @__PURE__ */ __dil.jsx("col", {
			height: "100%",
			justify: "between",
			gap: 2,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "primary",
			maxLines: 4
		}, card.text), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			wrap: "nowrap"
		}, card.stars.length > 0 ? /* @__PURE__ */ __dil.jsx("row", {
			gap: .25,
			align: "center",
			wrap: "nowrap"
		}, card.stars.map((star, index) => /* @__PURE__ */ __dil.jsx(ReviewStar, {
			key: index,
			color: star.filled ? "secondary" : "tertiary"
		}))) : null, card.time_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: 1
		}, card.time_label) : null));
	}
	function EntityReviewsPresentation({ state }) {
		const hasLoggedImpression = DIL.useRef(false);
		const isMobile = DIL.useIsMobile();
		if (state.cards.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: !hasLoggedImpression.current,
				onVisible: () => {
					hasLoggedImpression.current = true;
					GenUI.logEvent?.({
						event_name: "entity_reviews_widget_shown",
						statsig_event_name: "entity_reviews_widget_shown",
						event_data: { widget_name: "entity_reviews" }
					});
				}
			} : {}
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			showArrows: !isMobile
		}, state.cards.map((card) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: card.id,
			variant: "outline",
			width: card.kind === "summary" ? 128 : 220,
			minWidth: card.kind === "summary" ? 128 : 220,
			height: 128,
			radius: "2xl",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: card.url ? {
				handler: "client",
				type: "open_url",
				payload: { url: card.url }
			} : null,
			label: card.kind === "summary" ? (card.provider ?? "") + " " + (card.rating_label ?? "") : card.text ?? ""
		}, /* @__PURE__ */ __dil.jsx(ReviewCardBody, { card }))))));
	}



/* ---- merged ---- */

	const SvgPath = "path";
	function ReviewStar({ half = false, color = "primary", size = 13 }) {
		return /* @__PURE__ */ __dil.jsx("svg", {
			viewBox: "0 0 24 24",
			size,
			color
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: half ? "M12 17.27 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" : "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z",
			fill: "currentColor"
		}));
	}

