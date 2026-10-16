
	const scoreClinical = (values) => {
		if ([
			"age_points",
			"heart_rate_points",
			"sbp_points",
			"creatinine_points",
			"killip_points"
		].some((key) => values[key] === "")) return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select age, heart rate, systolic blood pressure, creatinine, and Killip class to finish the score.",
			color: "secondary"
		};
		const score = [
			"age_points",
			"heart_rate_points",
			"sbp_points",
			"creatinine_points",
			"killip_points",
			"cardiac_arrest",
			"st_deviation",
			"elevated_enzymes"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 108 ? "Lower admission risk" : score <= 140 ? "Intermediate admission risk" : "Higher admission risk",
			detail: score <= 108 ? "Lower admission-risk band using the non-ST-elevation ACS in-hospital GRACE cutoffs." : score <= 140 ? "Intermediate admission-risk band using the non-ST-elevation ACS in-hospital GRACE cutoffs." : "Higher admission-risk band using the non-ST-elevation ACS in-hospital GRACE cutoffs.",
			color: score <= 108 ? "success" : score <= 140 ? "warning" : "danger"
		};
	};

