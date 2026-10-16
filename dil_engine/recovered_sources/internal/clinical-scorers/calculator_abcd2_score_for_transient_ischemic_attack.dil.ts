
	const scoreClinical = (values) => {
		const score = [
			"age_over_60",
			"bp_over_140_90",
			"clinical_features",
			"duration_points",
			"diabetes"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 3 ? "Lower early stroke risk" : score <= 5 ? "Intermediate early stroke risk" : "Higher early stroke risk",
			detail: score <= 3 ? "0-3 points: lower 2-day stroke risk, roughly about 1%." : score <= 5 ? "4-5 points: intermediate 2-day stroke risk, roughly about 4%." : "6-7 points: high 2-day stroke risk, roughly about 8% or more.",
			color: score <= 3 ? "success" : score <= 5 ? "warning" : "danger"
		};
	};

