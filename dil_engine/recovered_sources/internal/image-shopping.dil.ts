
	function imageShoppingAvailable(data) {
		return data.opGenui?.supportedClientActions?.includes("open_shop_image_sidebar") ?? false;
	}
	/** Only trusted native image components supply this separate image control. */
	function imageShoppingAction(image, componentName, componentKey, available) {
		if (!available || image?.shop_eligible !== true || !imageKey(image)) return void 0;
		return {
			label: "Shop",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_shop_image_sidebar",
				payload: {
					component_name: componentName,
					component_key: componentKey,
					image_key: imageKey(image)
				}
			})
		};
	}



/* ---- merged ---- */

	function imageShoppingAvailable(data) {
		return data.opGenui?.supportedClientActions?.includes("open_shop_image_sidebar") ?? false;
	}
	/** Only trusted native image components supply this separate image control. */
	function imageShoppingAction(image, componentName, componentKey, available) {
		if (!available || image?.shop_eligible !== true || !imageKey(image)) return void 0;
		return {
			label: "Shop",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_shop_image_sidebar",
				payload: {
					component_name: componentName,
					component_key: componentKey,
					image_key: imageKey(image)
				}
			})
		};
	}

