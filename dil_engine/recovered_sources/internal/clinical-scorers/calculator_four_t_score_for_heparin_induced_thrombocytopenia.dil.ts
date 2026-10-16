
	const scoreClinical = (values) => {
		const score = [
			"thrombocytopenia",
			"timing",
			"thrombosis",
			"other_causes"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 3 ? "Low HIT probability" : score <= 5 ? "Intermediate HIT probability" : "High HIT probability",
			detail: score <= 3 ? "0-3 points: low pretest probability, with HIT typically very unlikely." : score <= 5 ? "4-5 points: intermediate pretest probability; confirm with HIT testing and clinical review." : "6-8 points: high pretest probability; stop heparin and evaluate urgently.",
			color: score <= 3 ? "success" : score <= 5 ? "warning" : "danger"
		};
	};

