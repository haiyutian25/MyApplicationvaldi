
	const scoreClinical = (values) => {
		const score = [
			"clinical_dvt",
			"pe_most_likely",
			"tachycardia",
			"immobilization_or_surgery",
			"prior_vte",
			"hemoptysis",
			"malignancy"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 4 ? "PE unlikely" : "PE likely",
			detail: score < 2 ? "Low 3-tier pretest probability and PE unlikely by the 2-tier threshold." : score <= 4 ? "Moderate 3-tier pretest probability but still PE unlikely by the 2-tier threshold." : score <= 6 ? "Moderate-to-high pretest probability and PE likely by the 2-tier threshold." : "High 3-tier pretest probability and PE likely.",
			color: score < 2 ? "success" : score <= 6 ? "warning" : "danger"
		};
	};

