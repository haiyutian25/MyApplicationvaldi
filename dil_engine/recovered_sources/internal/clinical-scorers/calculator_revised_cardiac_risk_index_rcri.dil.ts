
	const scoreClinical = (values) => {
		const score = [
			"high_risk_surgery",
			"ischemic_heart_disease",
			"heart_failure",
			"cerebrovascular_disease",
			"insulin_treated_diabetes",
			"creatinine_over_2"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score === 0 ? "Class I" : score === 1 ? "Class II" : score === 2 ? "Class III" : "Class IV",
			detail: score === 0 ? "0 predictors: lowest predicted perioperative major cardiac complication risk." : score === 1 ? "1 predictor: mildly increased perioperative cardiac risk." : score === 2 ? "2 predictors: moderate perioperative cardiac risk." : "3 or more predictors: highest RCRI risk class; optimize and plan perioperative monitoring carefully.",
			color: score === 0 ? "success" : score === 1 ? "warning" : score === 2 ? "warning" : "danger"
		};
	};

