
	const scoreClinical = (values) => {
		const score = [
			"hypertension",
			"renal_disease",
			"liver_disease",
			"stroke",
			"bleeding_history",
			"labile_inr",
			"elderly",
			"bleeding_drugs",
			"alcohol"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Lower bleeding risk" : score <= 4 ? "Higher bleeding risk" : "Very high bleeding risk",
			detail: score <= 2 ? "Lower predicted bleeding risk, although risk is never zero." : score <= 4 ? "Scores >=3 suggest higher bleeding risk and a need to address modifiable risk factors." : "Very high predicted bleeding risk; aggressively review reversible bleeding drivers and follow-up strategy.",
			color: score <= 2 ? "success" : score <= 4 ? "warning" : "danger"
		};
	};

