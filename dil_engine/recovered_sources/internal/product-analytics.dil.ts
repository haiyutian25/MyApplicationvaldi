
	function record(value) {
		return value !== null && typeof value === "object" && !Array.isArray(value) ? value : void 0;
	}
	function analyticsString(value) {
		return typeof value === "string" ? value : void 0;
	}
	/** Pick only the canonical product fields consumed by product interaction events. */
	function productAnalytics(value, productIndex) {
		const product = record(value);
		const productId = analyticsString(product?.id);
		if (!product || !productId?.trim()) return void 0;
		const metadataSources = product.metadata_sources;
		return {
			productId,
			productIndex,
			productEventUuid: analyticsString(product.product_event_uuid),
			productUrl: analyticsString(product.url),
			productTitle: analyticsString(product.title),
			productPrice: analyticsString(product.price),
			productMerchants: analyticsString(product.merchants),
			productProvider: Array.isArray(metadataSources) ? analyticsString(metadataSources[0]) : void 0
		};
	}
	function productAnalyticsFromPayload(value, productIndex) {
		const payload = record(value);
		if (payload?.category !== "product") return void 0;
		return productAnalytics(record(payload.extraParams)?.product, productIndex);
	}
	function productAnalyticsFromAction(value, productIndex) {
		const action = record(value);
		if (action?.type !== "open_entity_detail") return void 0;
		return productAnalyticsFromPayload(action.payload, productIndex);
	}
	function logProductShown(product) {
		if (!product) return;
		try {
			Promise.resolve(GenUI.logEvent?.({
				event_name: GENUI_PRODUCT_INTERACTION_EVENT_NAME,
				event_data: {
					...product,
					type: "shown"
				}
			})).catch(() => {});
		} catch {}
	}
	function productShownProps(product, ready) {
		return product && GenUI.logEvent ? {
			onVisible: () => logProductShown(product),
			onVisibleKey: product.productId,
			onVisibleWhen: ready
		} : {};
	}



/* ---- merged ---- */

	function record(value) {
		return value !== null && typeof value === "object" && !Array.isArray(value) ? value : void 0;
	}
	function analyticsString(value) {
		return typeof value === "string" ? value : void 0;
	}
	/** Pick only the canonical product fields consumed by product interaction events. */
	function productAnalytics(value, productIndex) {
		const product = record(value);
		const productId = analyticsString(product?.id);
		if (!product || !productId?.trim()) return void 0;
		const metadataSources = product.metadata_sources;
		return {
			productId,
			productIndex,
			productEventUuid: analyticsString(product.product_event_uuid),
			productUrl: analyticsString(product.url),
			productTitle: analyticsString(product.title),
			productPrice: analyticsString(product.price),
			productMerchants: analyticsString(product.merchants),
			productProvider: Array.isArray(metadataSources) ? analyticsString(metadataSources[0]) : void 0
		};
	}
	function productAnalyticsFromPayload(value, productIndex) {
		const payload = record(value);
		if (payload?.category !== "product") return void 0;
		return productAnalytics(record(payload.extraParams)?.product, productIndex);
	}
	function productAnalyticsFromAction(value, productIndex) {
		const action = record(value);
		if (action?.type !== "open_entity_detail") return void 0;
		return productAnalyticsFromPayload(action.payload, productIndex);
	}
	function productActionWithIndex(action, productIndex) {
		const payload = record(action.payload);
		return {
			...action,
			payload: {
				...payload,
				extraParams: {
					...record(payload?.extraParams),
					productIndex
				}
			}
		};
	}
	function logProductShown(product) {
		if (!product) return;
		try {
			Promise.resolve(GenUI.logEvent?.({
				event_name: GENUI_PRODUCT_INTERACTION_EVENT_NAME,
				event_data: {
					...product,
					type: "shown"
				}
			})).catch(() => {});
		} catch {}
	}
	function productShownProps(product, ready) {
		return product && GenUI.logEvent ? {
			onVisible: () => logProductShown(product),
			onVisibleKey: product.productId,
			onVisibleWhen: ready
		} : {};
	}

