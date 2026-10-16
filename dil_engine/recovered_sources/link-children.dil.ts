
	function hasLinkChildren(children) {
		if (Array.isArray(children)) return children.some(hasLinkChildren);
		return typeof children === "string" ? children.trim().length > 0 : children != null && typeof children !== "boolean";
	}



/* ---- merged ---- */

	function hasLinkChildren(children) {
		if (Array.isArray(children)) return children.some(hasLinkChildren);
		return typeof children === "string" ? children.trim().length > 0 : children != null && typeof children !== "boolean";
	}

