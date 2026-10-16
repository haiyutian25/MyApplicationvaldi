
	const scoreClinical = (values) => {
		const score = [
			"age_over_65",
			"previous_vte",
			"recent_surgery_or_fracture",
			"active_malignancy",
			"unilateral_leg_pain",
			"hemoptysis",
			"heart_rate_points",
			"palpation_edema"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 3 ? "Low PE probability" : score <= 10 ? "Intermediate PE probability" : "High PE probability",
			detail: score <= 3 ? "0-3 points: low pretest probability." : score <= 10 ? "4-10 points: intermediate pretest probability." : "11 or more points: high pretest probability.",
			color: score <= 3 ? "success" : score <= 10 ? "warning" : "danger"
		};
	};

