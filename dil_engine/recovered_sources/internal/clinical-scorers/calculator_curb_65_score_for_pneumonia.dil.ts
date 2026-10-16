
	const scoreClinical = (values) => {
		const score = [
			"confusion",
			"urea_over_7",
			"respiratory_rate_30",
			"low_blood_pressure",
			"age_over_65"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 1 ? "Low severity" : score === 2 ? "Moderate severity" : "High severity",
			detail: score <= 1 ? "0-1 points: lower mortality risk; outpatient treatment is often appropriate if the broader clinical picture is reassuring." : score === 2 ? "2 points: moderate severity; consider inpatient treatment or very close observation." : "3-5 points: high severity pneumonia; inpatient management and possible ICU evaluation are usually warranted.",
			color: score <= 1 ? "success" : score === 2 ? "warning" : "danger"
		};
	};

