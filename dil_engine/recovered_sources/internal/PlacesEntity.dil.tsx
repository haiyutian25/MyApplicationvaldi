
	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityTile({ state, explorer = false }) {
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: state.click_action,
			label: "Open details for " + state.title
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: explorer ? "3/4" : "4/3",
			background: "surface-secondary",
			radius: {
				topLeft: "xl",
				topRight: "xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, state.image ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: state.image,
			upgradeToFullRes: true,
			alt: state.title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: 3,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 2,
			truncate: true
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 3,
			truncate: true
		}, state.subtitle)))));
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityTile({ state, explorer = false }) {
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: state.click_action,
			label: "Open details for " + state.title
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: explorer ? "3/4" : "4/3",
			background: "surface-secondary",
			radius: {
				topLeft: "xl",
				topRight: "xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, state.image ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: state.image,
			upgradeToFullRes: true,
			alt: state.title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: 3,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 2,
			truncate: true
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 3,
			truncate: true
		}, state.subtitle)))));
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityMosaic({ images, title, height = 200, carousel = false }) {
		if (images.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height,
			background: "surface-secondary",
			radius: carousel ? "none" : {
				topLeft: "3xl",
				topRight: "3xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, images.length === 1 ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : images.length === 2 || carousel ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, images.slice(0, 2).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			flex: 1,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})))) : /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 3,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 2,
			height: "100%",
			gap: "1px",
			minWidth: 0,
			minHeight: 0
		}, images.slice(1, 3).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: "100%",
			flex: 1,
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}))))));
	}
	function EntityOverviewBody({ state, carousel = false }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: carousel ? 0 : 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx(EntityMosaic, {
			images: state.images,
			title: state.title,
			height: carousel ? 180 : 200,
			carousel
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: 5,
				y: 4
			},
			minWidth: 0,
			flex: carousel ? 1 : void 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold",
			maxLines: 2,
			truncate: carousel
		}, state.title), state.metadata.length > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			direction: carousel ? void 0 : "row",
			scrollable: !carousel
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "stretch",
			gap: 6,
			wrap: "nowrap",
			width: carousel ? "100%" : void 0
		}, state.metadata.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: index,
			width: carousel ? void 0 : 132,
			minWidth: carousel ? 0 : 132,
			flex: carousel ? 1 : void 0,
			align: "stretch",
			gap: 6,
			wrap: "nowrap"
		}, index > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			minWidth: 1,
			height: 48,
			background: "border-subtle"
		}) : null, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			maxLines: 1,
			truncate: true
		}, item.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: carousel ? 2 : 1,
			truncate: true
		}, item.value)))))) : null, state.description ? /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: carousel ? 5 : 4,
			truncate: carousel
		}, state.description)) : null));
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityMosaic({ images, title, height = 200, carousel = false }) {
		if (images.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height,
			background: "surface-secondary",
			radius: carousel ? "none" : {
				topLeft: "3xl",
				topRight: "3xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, images.length === 1 ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : images.length === 2 || carousel ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, images.slice(0, 2).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			flex: 1,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})))) : /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 3,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 2,
			height: "100%",
			gap: "1px",
			minWidth: 0,
			minHeight: 0
		}, images.slice(1, 3).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: "100%",
			flex: 1,
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}))))));
	}
	function EntityOverviewBody({ state, carousel = false }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: carousel ? 0 : 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx(EntityMosaic, {
			images: state.images,
			title: state.title,
			height: carousel ? 180 : 200,
			carousel
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: 5,
				y: 4
			},
			minWidth: 0,
			flex: carousel ? 1 : void 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold",
			maxLines: 2,
			truncate: carousel
		}, state.title), state.metadata.length > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			direction: carousel ? void 0 : "row",
			scrollable: !carousel
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "stretch",
			gap: 6,
			wrap: "nowrap",
			width: carousel ? "100%" : void 0
		}, state.metadata.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: index,
			width: carousel ? void 0 : 132,
			minWidth: carousel ? 0 : 132,
			flex: carousel ? 1 : void 0,
			align: "stretch",
			gap: 6,
			wrap: "nowrap"
		}, index > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			minWidth: 1,
			height: 48,
			background: "border-subtle"
		}) : null, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			maxLines: 1,
			truncate: true
		}, item.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: carousel ? 2 : 1,
			truncate: true
		}, item.value)))))) : null, state.description ? /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			maxLines: carousel ? 5 : 4,
			truncate: carousel
		}, state.description)) : null));
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}



/* ---- merged ---- */

	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityMosaic({ images, title, height = 200, carousel = false }) {
		if (images.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height,
			background: "surface-secondary",
			radius: carousel ? "none" : {
				topLeft: "3xl",
				topRight: "3xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, images.length === 1 ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : images.length === 2 || carousel ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, images.slice(0, 2).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			flex: 1,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})))) : /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			width: "100%",
			height: "100%",
			gap: "1px",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 3,
			height: "100%",
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: images[0],
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 2,
			height: "100%",
			gap: "1px",
			minWidth: 0,
			minHeight: 0
		}, images.slice(1, 3).map((image, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			width: "100%",
			flex: 1,
			minWidth: 0,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}))))));
	}

