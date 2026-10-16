
	const scoreClinical = (values) => {
		const score = [
			"snoring",
			"tiredness",
			"observed_apnea",
			"high_pressure",
			"bmi_over_35",
			"age_over_50",
			"neck_over_40",
			"male_sex"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Low OSA risk" : score <= 4 ? "Intermediate OSA risk" : "High OSA risk",
			detail: score <= 2 ? "0-2 points: low risk for obstructive sleep apnea." : score <= 4 ? "3-4 points: intermediate OSA risk; formal sleep testing may be appropriate depending on context." : "5-8 points: high OSA risk; formal evaluation is typically warranted.",
			color: score <= 2 ? "success" : score <= 4 ? "warning" : "danger"
		};
	};

