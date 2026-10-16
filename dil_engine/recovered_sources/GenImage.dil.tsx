
/** Mirror v1: only pixel max-widths supply a non-shrinking preferred width. */
	function hasPreferredPixelWidth(value) {
		if (typeof value === "number") return Number.isFinite(value) && value >= 0;
		return typeof value === "string" && /^\d+(?:\.\d+)?(?:px)?$/.test(value.trim());
	}
	/** Mirror the v1 intrinsic frame while image resolution is still pending. */
	function unresolvedAspectWidth(maxHeight, aspectRatio) {
		return `calc(${typeof maxHeight === "number" ? `${maxHeight}px` : /^\d+(?:\.\d+)?$/.test(maxHeight.trim()) ? `${maxHeight.trim()}px` : maxHeight.trim()} * ${normalizedAspectRatio(aspectRatio)})`;
	}
	function GenImage(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("GenImage", props);
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const image = state?.images?.[0];
		const hasImage = hasImageSource(image);
		if (!isLoading && !hasImage && (!props.fallback || state == null)) return /* @__PURE__ */ __dil.jsx("box", { height: 0 });
		const frameMaxWidth = state?.frame_max_width ?? props.maxWidth;
		const frameAspectRatio = state?.frame_aspect_ratio ?? props.aspectRatio;
		const presentation = state?.presentation;
		const hasAuthoredDimensions = props.width != null || props.height != null;
		const unresolvedSize = isLoading && state == null && props.aspectRatio == null && !hasAuthoredDimensions ? props.maxHeight ?? 220 : void 0;
		const unresolvedWidth = isLoading && state == null && props.aspectRatio != null ? unresolvedAspectWidth(props.maxHeight ?? 220, props.aspectRatio) : unresolvedSize;
		const imageElement = /* @__PURE__ */ __dil.jsx("search-image", {
			alt: image?.title ?? "",
			aspectRatio: frameAspectRatio,
			fallback: props.fallback,
			fit: state?.image_fit ?? "cover",
			height: "100%",
			hideOnFailure: true,
			radius: "none",
			searchImage: image,
			width: "100%"
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: isLoading ? "Loading image" : void 0,
			aspectRatio: frameAspectRatio,
			background: "surface-tertiary",
			border: (presentation?.frame ?? props.frame ?? true) && !isLoading && hasImage ? {
				color: "subtle",
				size: 1
			} : void 0,
			clip: true,
			flex: hasPreferredPixelWidth(frameMaxWidth) ? "0 0 auto" : void 0,
			height: state?.frame_height ?? props.height ?? (props.width != null || frameAspectRatio != null ? void 0 : unresolvedSize ?? "100%"),
			maxHeight: state?.max_height !== void 0 ? state.max_height ?? void 0 : props.maxHeight ?? (hasAuthoredDimensions ? void 0 : unresolvedSize),
			maxWidth: frameMaxWidth,
			minHeight: presentation?.min_height ?? props.minHeight,
			minWidth: presentation?.min_width ?? props.minWidth ?? 0,
			radius: presentation?.radius ?? props.radius ?? "xl",
			role: isLoading ? "status" : void 0,
			width: state?.frame_width ?? props.width ?? unresolvedWidth ?? "100%"
		}, !isLoading && !hasImage ? props.fallback : props.onClickAction === null ? imageElement : /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: image?.title ? `Open ${image.title}` : "Open image",
			background: "transparent",
			disabled: isLoading,
			height: "100%",
			onClick: () => {
				const action = props.onClickAction || state?.default_on_click_action;
				const payload = action?.payload;
				if (action?.type === "issue_new_turn" && (action.handler === void 0 || action.handler === "client") && action.fallbackAction === void 0 && action.loadingBehavior === void 0 && (payload?.action ?? action.type) === "issue_new_turn" && payload?.event_source === void 0 && (payload?.prompt == null || payload.prompt === payload.query) && typeof payload?.query === "string") GenUI.issueNewTurn(payload.query, {
					append_to_current_leaf: payload.append_to_current_leaf === true,
					event_name: payload.event_name,
					statsig_event_name: payload.statsig_event_name,
					event_data: payload.event_data
				});
				else if (action) GenUI.dispatchAction(action);
				else GenUI.openImageLightbox(state?.images ?? [], 0);
			},
			radius: "none",
			width: "100%"
		}, imageElement));
	}

