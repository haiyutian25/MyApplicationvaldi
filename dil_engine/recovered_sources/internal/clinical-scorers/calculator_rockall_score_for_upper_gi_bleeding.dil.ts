
	const scoreClinical = (values) => {
		const score = [
			"age",
			"shock",
			"comorbidity",
			"diagnosis",
			"stigmata"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Low rebleeding / mortality risk" : score <= 4 ? "Intermediate risk" : "High risk",
			detail: score <= 2 ? "Low post-endoscopy Rockall risk." : score <= 4 ? "Intermediate Rockall risk." : "Higher Rockall scores predict greater rebleeding and mortality risk.",
			color: score <= 2 ? "success" : score <= 4 ? "warning" : "danger"
		};
	};

