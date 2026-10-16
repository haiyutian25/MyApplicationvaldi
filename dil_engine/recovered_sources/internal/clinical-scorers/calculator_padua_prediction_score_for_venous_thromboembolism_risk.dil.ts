
	const scoreClinical = (values) => {
		const score = [
			"active_cancer",
			"previous_vte",
			"reduced_mobility",
			"thrombophilia",
			"recent_trauma_surgery",
			"age_over_70",
			"heart_or_respiratory_failure",
			"acute_mi_or_stroke",
			"acute_infection_or_rheumatologic_disorder",
			"obesity",
			"hormonal_treatment"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score >= 4 ? "High VTE risk" : "Low VTE risk",
			detail: score >= 4 ? "A Padua score of 4 or more indicates high VTE risk in hospitalized medical patients." : "A Padua score below 4 indicates lower VTE risk.",
			color: score >= 4 ? "warning" : "success"
		};
	};

