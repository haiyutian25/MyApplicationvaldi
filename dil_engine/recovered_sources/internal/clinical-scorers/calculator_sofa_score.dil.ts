
	const scoreClinical = (values) => {
		if ([
			"respiration",
			"coagulation",
			"liver",
			"cardiovascular",
			"neurologic",
			"renal"
		].some((key) => values[key] === "")) return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select all six organ-system components to finish the score.",
			color: "secondary"
		};
		const score = [
			"respiration",
			"coagulation",
			"liver",
			"cardiovascular",
			"neurologic",
			"renal"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 6 ? "Mild organ dysfunction" : score <= 9 ? "Moderate organ dysfunction" : score <= 11 ? "Severe organ dysfunction" : "Critical organ dysfunction",
			detail: score <= 6 ? "Lower total SOFA scores suggest less organ dysfunction, but the trend over time matters more than a single value." : score <= 9 ? "Moderate organ dysfunction burden; follow the trajectory closely." : score <= 11 ? "Severe organ dysfunction burden with substantial mortality signal." : "Very high organ dysfunction burden; immediate critical-care context is essential.",
			color: score <= 6 ? "success" : score <= 9 ? "warning" : "danger"
		};
	};

