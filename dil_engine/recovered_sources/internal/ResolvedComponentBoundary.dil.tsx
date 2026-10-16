
	function ResolvedComponentBoundary({ Component, componentName, componentProps }) {
		const opGenui = DIL.useAppData((appData) => appData.opGenui);
		if (componentProps.__state !== void 0) return /* @__PURE__ */ __dil.jsx(Component, componentProps);
		const result = (typeof componentProps.__resolutionId === "string" ? opGenui?.componentResults?.[componentProps.__resolutionId] : void 0) ?? opGenui?.componentResults?.[componentDataKey(componentName, componentProps)];
		const delegatesFailedResultToComponent = !opGenui?.showFailedComponents && (componentName === "AsyncImage" || componentName === "AsyncImageGroup");
		if (isComponentResultEnvelope(result) && result.status === "failed" && !delegatesFailedResultToComponent && !((componentName === "Link" || componentName === "LinkCard") && typeof componentProps.url === "string" && componentProps.url.length > 0 && (typeof componentProps.title === "string" && componentProps.title.length > 0 || componentName === "Link" && hasLinkChildren(componentProps.children)))) {
			if (componentProps.fallback != null) return componentProps.fallback;
			return opGenui?.showFailedComponents ? /* @__PURE__ */ __dil.jsx("text", {
				color: "danger",
				size: "sm"
			}, `${componentName}: ${result.code}`) : null;
		}
		return /* @__PURE__ */ __dil.jsx(Component, componentProps);
	}

