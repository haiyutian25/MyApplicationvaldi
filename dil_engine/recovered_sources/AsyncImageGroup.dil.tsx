
/** Display the complete gallery count on the final visible desktop tile. */
	function ImageCount({ count }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			ariaHidden: true,
			height: "100%",
			justify: "end",
			padding: {
				bottom: 2.5,
				right: 2.5
			},
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			background: "rgba(0, 0, 0, 0.4)",
			gap: .5,
			padding: {
				bottom: 1,
				left: 1.5,
				right: 2,
				top: 1
			},
			radius: "full",
			width: "fit-content"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "white",
			name: "images",
			size: "xs"
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "white",
			inline: true,
			size: "xs",
			weight: "semibold"
		}, count)));
	}
	const PLACEHOLDER_INDEXES = [
		0,
		1,
		2
	];
	function ImageFailure() {
		return /* @__PURE__ */ __dil.jsx("box", {
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
	}
	function ImageFallbackFrame({ aspectRatio, children, itemHeight, itemWidth }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			imageObservation: "unavailable",
			aspectRatio: aspectRatio ?? "5:4",
			clip: true,
			height: itemHeight,
			minWidth: itemWidth,
			radius: "xl",
			width: itemWidth
		}, children);
	}
	/** Keep one loading surface mounted while its resolved image source arrives. */
	function GroupImageTile({ componentKey, aspectRatio, failed = false, fallback, flex, height, image, images, index, isLoading, minWidth, radius, showCount = false, width }) {
		const canShopImage = DIL.useAppData(imageShoppingAvailable);
		const isProduct = image?.refs?.some((ref) => ref.ref_type === "product");
		const product = productAnalyticsFromAction(image?.default_on_click_action, index);
		return /* @__PURE__ */ __dil.jsx("box", {
			...product ? productShownProps(product, !isLoading && !failed && hasImageSource(image)) : {},
			imageObservation: failed ? "unavailable" : "active",
			aspectRatio,
			background: "surface-tertiary",
			clip: true,
			flex,
			height,
			minWidth,
			radius,
			width
		}, failed ? /* @__PURE__ */ __dil.jsx(ImageFailure, null) : /* @__PURE__ */ __dil.jsx("search-image", {
			alt: image?.title ?? "",
			aspectRatio,
			background: isProduct ? "#f3f3f3" : void 0,
			bitmapBlendMode: isProduct ? "darken" : void 0,
			containOutsideAspectRatio: isProduct ? {
				min: .6,
				max: 1.8
			} : void 0,
			fallback,
			fit: "cover",
			frame: true,
			height: "100%",
			hideOnFailure: true,
			hoverZoom: true,
			minHeight: isProduct ? 0 : void 0,
			position: isProduct ? "center" : void 0,
			radius,
			saveTarget: image,
			searchImage: image,
			secondaryAction: imageShoppingAction(image, "AsyncImageGroup", componentKey, canShopImage),
			width: "100%"
		}, image ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: image.title ? `Open ${image.title}` : "Open image",
			background: "transparent",
			height: "100%",
			onClick: () => image.default_on_click_action?.type === "open_entity_detail" ? GenUI.dispatchAction(product ? productActionWithIndex(image.default_on_click_action, index) : image.default_on_click_action) : GenUI.openImageLightbox(images, index),
			radius: "none",
			width: "100%"
		}, showCount ? /* @__PURE__ */ __dil.jsx(ImageCount, { count: images.length }) : null) : null));
	}
	/** Render the responsive image strip, preserving loading and fallback states. */
	function AsyncImageGroup(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("AsyncImageGroup", props);
		const isSm = DIL.useBreakpoint("sm");
		const layout = state?.layout ?? props.layout ?? "carousel";
		const images = (state?.images ?? []).filter(hasImageSource);
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const failed = !isLoading && images.length === 0;
		const aspectRatio = state?.aspect_ratio ?? props.aspectRatio ?? "5:4";
		const defaultCarouselHeight = props.size === "lg" ? 220 : 140;
		const itemHeight = state?.item_height ?? (layout === "carousel" ? `${defaultCarouselHeight}px` : void 0);
		const [aspectWidth, aspectHeight = 1] = aspectRatio.split(/[/:]/).map(Number);
		const itemWidth = state?.item_width ?? (layout === "carousel" ? `${defaultCarouselHeight * aspectWidth / aspectHeight}px` : void 0);
		if (failed && props.fallback && layout !== "carousel") return /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
			aspectRatio,
			itemHeight,
			itemWidth
		}, props.fallback);
		const fallbackElement = props.fallback ?? /* @__PURE__ */ __dil.jsx(ImageFailure, null);
		if (layout === "bento" && (isLoading || failed || images.length >= 3)) return /* @__PURE__ */ __dil.jsx("row", {
			ariaLabel: isLoading ? "Loading images" : void 0,
			aspectRatio: "363 / 200",
			flexInRow: true,
			gap: .5,
			maxWidth: 768,
			minHeight: 0,
			minWidth: 0,
			role: isLoading ? "status" : void 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(GroupImageTile, {
			componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
			failed,
			fallback: fallbackElement,
			flex: 1,
			height: "100%",
			image: images[0],
			images,
			index: 0,
			isLoading,
			radius: {
				bottomLeft: "2xl",
				topLeft: "2xl"
			},
			width: "100%"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			width: "40%"
		}, [1, 2].map((index) => /* @__PURE__ */ __dil.jsx(GroupImageTile, {
			componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
			failed,
			fallback: fallbackElement,
			flex: 1,
			height: "100%",
			image: images[index],
			images,
			index,
			isLoading,
			key: `async-image-group-tile:${index}`,
			radius: index === 1 ? { topRight: "2xl" } : { bottomRight: "2xl" },
			showCount: index === 2 && images.length > 3,
			width: "100%"
		}))));
		if (isSm && (layout === "carousel" || layout === "bento")) {
			const indexes = isLoading || failed ? PLACEHOLDER_INDEXES : images.slice(0, 3).map((_, index) => index);
			return /* @__PURE__ */ __dil.jsx("row", {
				flexInRow: true,
				maxWidth: 768,
				minWidth: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("box", {
				ariaLabel: isLoading ? "Loading images" : void 0,
				maxWidth: "100%",
				minWidth: 0,
				role: isLoading ? "status" : void 0,
				width: 768
			}, /* @__PURE__ */ __dil.jsx("grid", {
				columns: 3,
				gap: 2
			}, failed && props.fallback ? /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
				aspectRatio,
				itemWidth: "100%"
			}, props.fallback) : indexes.map((index) => /* @__PURE__ */ __dil.jsx(GroupImageTile, {
				componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
				aspectRatio,
				failed,
				fallback: fallbackElement,
				image: images[index],
				images,
				index,
				isLoading,
				key: `async-image-group-tile:${index}`,
				minWidth: 0,
				radius: "xl",
				showCount: index === 2 && images.length > 3,
				width: "100%"
			})))));
		}
		const scrollImages = failed && props.fallback ? [void 0] : isLoading || failed ? PLACEHOLDER_INDEXES.map(() => void 0) : images;
		return /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: isLoading ? "Loading images" : void 0,
			flexInRow: true,
			role: isLoading ? "status" : void 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			flush: true,
			gap: 2,
			showArrows: false,
			snap: "none"
		}, scrollImages.map((image, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			height: itemHeight,
			key: `async-image-group-tile:${index}`,
			minWidth: itemWidth,
			width: itemWidth ?? (isLoading || failed ? 140 : void 0)
		}, failed && props.fallback ? /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
			aspectRatio,
			itemHeight,
			itemWidth
		}, props.fallback) : /* @__PURE__ */ __dil.jsx(GroupImageTile, {
			componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
			aspectRatio,
			failed,
			fallback: fallbackElement,
			height: itemHeight,
			image,
			images,
			index,
			isLoading,
			radius: "xl",
			width: "100%"
		})))));
	}

