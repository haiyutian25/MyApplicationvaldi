
	function isPixelDimension(value) {
		if (typeof value === "number") return Number.isFinite(value) && value >= 0;
		return typeof value === "string" && /^\d+(?:\.\d+)?(?:px)?$/.test(value.trim());
	}
	function normalizedDimension(value) {
		return typeof value === "string" && /^\d+(?:\.\d+)?$/.test(value.trim()) ? Number(value) : value;
	}
	function unresolvedAspectWidth(maxHeight, aspectRatio) {
		const [width, height = 1] = aspectRatio.split(/[/:]/).map(Number);
		return Number.parseFloat(String(maxHeight)) * width / height;
	}
	function containsSource(value, src) {
		if (value === src) return true;
		if (value === null || typeof value !== "object") return false;
		return Object.values(value).some((child) => containsSource(child, src));
	}
	function directImages(props, sourceAllowed) {
		if (!sourceAllowed || !props.src || props.query != null || props.ref != null) return [];
		return [{
			url: props.src,
			content_url: props.src,
			thumbnail_url: props.src,
			title: props.alt ?? ""
		}];
	}
	function ImageContent(props) {
		return /* @__PURE__ */ __dil.jsx("search-image", props);
	}
	function AsyncImage(props) {
		const interactive = props.interactive !== false;
		const canShopImage = DIL.useAppData(imageShoppingAvailable);
		const sourceAllowed = DIL.useAppData((appData) => Boolean(props.src) && containsSource(appData.opGenui?.modelDataBindings, props.src));
		const resolved = useResolvedComponentResult("AsyncImage", props);
		const isDirect = "src" in props;
		const state = isDirect ? void 0 : resolved.state;
		const resolutionComplete = isDirect || resolved.resolutionComplete;
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const images = isDirect ? directImages(props, sourceAllowed) : state?.images ?? [];
		const image = images[0];
		const alt = props.alt ?? image?.title ?? "";
		const actionDescription = props.alt || image?.title;
		const hasImage = hasImageSource(image);
		const isProduct = image?.refs?.some((ref) => ref.ref_type === "product");
		const product = productAnalyticsFromAction(state?.default_on_click_action);
		const needsLocalSizing = state == null;
		const frameMaxWidth = state?.frame_max_width ?? normalizedDimension(props.maxWidth) ?? (needsLocalSizing ? "100%" : void 0);
		const frameAspectRatio = state?.frame_aspect_ratio ?? props.aspectRatio;
		const presentation = state?.presentation;
		const hasAuthoredDimensions = props.width != null || props.height != null;
		const authoredMaxHeight = isPixelDimension(props.maxHeight) ? normalizedDimension(props.maxHeight) : void 0;
		const localMaxHeight = needsLocalSizing && !hasAuthoredDimensions ? authoredMaxHeight : void 0;
		const unresolvedSize = frameAspectRatio == null ? localMaxHeight : void 0;
		const unresolvedWidth = localMaxHeight != null && frameAspectRatio != null ? unresolvedAspectWidth(localMaxHeight, frameAspectRatio) : unresolvedSize;
		const fallbackElement = props.fallback ?? /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			ariaLabel: "Image unavailable",
			background: "surface-tertiary",
			height: "100%",
			justify: "center",
			role: "img",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "tertiary",
			name: "image-square",
			size: "lg"
		}));
		const imageElement = /* @__PURE__ */ __dil.jsx(ImageContent, {
			key: isDirect ? props.src : void 0,
			alt,
			aspectRatio: frameAspectRatio,
			attributionOverlay: isDirect ? false : interactive ? true : "always",
			background: isProduct ? "#f3f3f3" : void 0,
			bitmapBlendMode: isProduct ? "darken" : void 0,
			contentCropFit: props.fit,
			containOutsideAspectRatio: isProduct && props.fit == null ? {
				min: .6,
				max: 1.8
			} : void 0,
			fallback: fallbackElement,
			fit: props.fit ?? (isProduct ? "cover" : state?.image_fit ?? (isDirect && frameAspectRatio == null ? "contain" : "cover")),
			height: "100%",
			hideOnFailure: true,
			hoverZoom: true,
			minHeight: isProduct ? 0 : void 0,
			position: isProduct ? "center" : void 0,
			radius: "none",
			saveTarget: isDirect ? void 0 : image,
			searchImage: image,
			secondaryAction: isDirect ? void 0 : imageShoppingAction(image, "AsyncImage", props.__resolutionId ?? componentDataKey("AsyncImage", props), canShopImage),
			width: "100%"
		}, interactive ? /* @__PURE__ */ __dil.jsx(LinkImpression, {
			action: state?.default_on_click_action,
			disabled: isLoading,
			width: "100%",
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: actionDescription ? `Open ${actionDescription}` : "Open image",
			background: "transparent",
			disabled: isLoading,
			height: "100%",
			onClick: () => state?.default_on_click_action ? GenUI.dispatchAction(state.default_on_click_action) : GenUI.openImageLightbox(images, 0),
			radius: "none",
			width: "100%"
		})) : null);
		return /* @__PURE__ */ __dil.jsx("box", {
			...product ? productShownProps(product, !isLoading && hasImage) : {},
			imageObservation: !isLoading && !hasImage ? "unavailable" : "active",
			ariaLabel: isLoading ? "Loading image" : void 0,
			aspectRatio: frameAspectRatio,
			background: "surface-tertiary",
			border: (presentation?.frame ?? props.frame ?? true) && !isLoading && hasImage ? {
				color: "subtle",
				size: 1
			} : void 0,
			clip: true,
			flex: isPixelDimension(frameMaxWidth) ? "0 0 auto" : void 0,
			height: state?.frame_height ?? normalizedDimension(props.height) ?? (props.width != null || frameAspectRatio != null ? void 0 : unresolvedSize),
			maxHeight: (state?.max_height !== void 0 ? state.max_height ?? void 0 : authoredMaxHeight) ?? (isProduct ? "100%" : void 0),
			maxWidth: frameMaxWidth,
			minHeight: presentation?.min_height ?? props.minHeight,
			minWidth: presentation?.min_width ?? props.minWidth ?? 0,
			radius: presentation?.radius ?? props.radius ?? "xl",
			role: isLoading ? "status" : void 0,
			width: state?.frame_width ?? normalizedDimension(props.width) ?? unresolvedWidth ?? "100%"
		}, !isLoading && !hasImage ? fallbackElement : imageElement);
	}

