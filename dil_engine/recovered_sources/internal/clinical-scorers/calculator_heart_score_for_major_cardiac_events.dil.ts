
	const scoreClinical = (values) => {
		const score = [
			"history",
			"ecg",
			"age",
			"risk_factors",
			"troponin"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 3 ? "Low MACE risk" : score <= 6 ? "Intermediate MACE risk" : "High MACE risk",
			detail: score <= 3 ? "0-3 points: low short-term major adverse cardiac event risk." : score <= 6 ? "4-6 points: intermediate short-term MACE risk." : "7-10 points: high short-term MACE risk.",
			color: score <= 3 ? "success" : score <= 6 ? "warning" : "danger"
		};
	};

