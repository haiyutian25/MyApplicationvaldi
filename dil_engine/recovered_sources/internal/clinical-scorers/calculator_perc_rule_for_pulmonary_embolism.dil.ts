
	const scoreClinical = (values) => {
		const score = [
			"age_under_50",
			"hr_under_100",
			"spo2_over_94",
			"no_unilateral_leg_swelling",
			"no_hemoptysis",
			"no_recent_surgery_trauma",
			"no_prior_vte",
			"no_estrogen"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score === 8 ? "PERC negative" : "PERC positive / not rule-out",
			detail: score === 8 ? "All eight PERC criteria are satisfied, so PE can be ruled out in a low-pretest-probability patient." : "At least one PERC criterion is not satisfied; PERC does not rule out PE.",
			color: score === 8 ? "success" : "warning"
		};
	};

