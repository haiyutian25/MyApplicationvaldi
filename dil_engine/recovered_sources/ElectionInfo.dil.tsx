
	function ElectionInfo(props) {
		const { state } = useResolvedComponentResult("ElectionInfo", props);
		return state ? /* @__PURE__ */ __dil.jsx(LinkCards, { state }) : null;
	}

