
	function Rating(props) {
		const { state: data } = useResolvedComponentResult("Rating", props);
		const theme = DIL.useTheme();
		if (!data) return null;
		const attribution = data.attribution;
		const logo = theme.isDark ? attribution?.provider_logo_dark_url ?? attribution?.provider_logo_url : attribution?.provider_logo_url;
		const providerLabel = /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			color: "secondary",
			size: "md"
		}, attribution?.provider_label);
		const content = /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			maxWidth: "100%",
			width: "fit-content",
			wrap: "nowrap",
			ariaLabel: attribution ? void 0 : data.aria_label
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "primary",
			name: "star-filled",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			tabularNums: true
		}, data.rating_label), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			color: "secondary",
			size: "md"
		}, data.review_count_label), attribution && (logo ? /* @__PURE__ */ __dil.jsx("image", {
			alt: attribution.provider_label,
			fallback: providerLabel,
			fit: "contain",
			height: logo.toLowerCase().includes("tripadvisor_ollie") ? 12 : 14,
			src: logo
		}) : providerLabel));
		return attribution ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: data.aria_label,
			onClick: () => GenUI.openUrl(attribution.provider_url),
			width: "fit-content"
		}, content) : content;
	}

