
	function Link(props) {
		const isMobile = DIL.useIsMobile();
		const linkLabels = DIL.useAppData((appData) => appData.opGenui?.linkLabels);
		const hostLinkUrls = DIL.useAppData((appData) => appData.opGenui?.hostLinkUrls);
		const hasChildren = hasLinkChildren(props.children);
		const needsResolution = !(typeof props.url === "string" && props.url.length > 0 && (typeof props.title === "string" && props.title.length > 0 || hasChildren));
		const { resolutionComplete, state } = useResolvedComponentResult("Link", props);
		if (!state && needsResolution) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading link" });
		const url = state?.url ?? props.url ?? "";
		const candidateTitle = state?.title ?? props.title;
		const fallbackTitle = typeof candidateTitle === "string" && candidateTitle.trim() ? candidateTitle : url || "Link";
		if (hostLinkUrls?.includes(url)) return /* @__PURE__ */ __dil.jsx("link", { href: url }, hasChildren ? props.children : fallbackTitle);
		const title = hasChildren ? "" : fallbackTitle;
		if (!isMobile && /^https?:\/\//i.test(url)) return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 150,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { role: "presentation" }, /* @__PURE__ */ __dil.jsx("link", {
			href: url,
			onClick: () => GenUI.openUrl(url)
		}, hasChildren ? props.children : title)), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "center",
			side: "top",
			sideOffset: 8
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			maxWidth: "100%",
			minHeight: 40,
			padding: {
				x: 3,
				y: 1.5
			},
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 16,
			url
		}), /* @__PURE__ */ __dil.jsx("box", { minWidth: 0 }, /* @__PURE__ */ __dil.jsx("link", {
			href: url,
			onClick: () => GenUI.openUrl(url),
			title: url
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "primary",
			inline: true,
			size: "xs"
		}, url.length > 40 ? `${url.slice(0, 40)}...` : url))), /* @__PURE__ */ __dil.jsx("tooltip", { content: linkLabels?.copy ?? "Copy" }, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			label: linkLabels?.copyUrl ?? "Copy URL",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "copy",
				payload: { value: url }
			}),
			pill: false,
			size: "xs",
			uniform: true,
			variant: "ghost"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "copy",
			size: "sm"
		}))))));
		if (/^https?:\/\//i.test(url)) return /* @__PURE__ */ __dil.jsx("link", {
			href: url,
			onClick: () => GenUI.openUrl(url)
		}, hasChildren ? props.children : title);
		const finalWordStart = /\S+\s*$/u.exec(title)?.index ?? 0;
		const leadingTitle = title.slice(0, finalWordStart);
		const trailingTitle = title.slice(finalWordStart);
		const label = hasChildren ? /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, props.children), /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-up-right-link"
		})) : /* @__PURE__ */ __dil.jsx("text", { inline: true }, leadingTitle ? /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, leadingTitle) : null, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, trailingTitle), /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-up-right-link"
		})));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: hasChildren ? void 0 : `Open ${title}`,
			inline: true,
			onClick: () => GenUI.openUrl(url),
			role: "link"
		}, label);
	}

