
	const scoreClinical = (values) => {
		const score = [
			"behavior",
			"cardiovascular",
			"respiratory",
			"oxygen"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Low bedside concern" : score <= 4 ? "Moderate bedside concern" : "High bedside concern",
			detail: score <= 2 ? "Lower PEWS values suggest lower immediate bedside concern." : score <= 4 ? "Intermediate PEWS values should prompt closer reassessment." : "Higher PEWS values suggest significant concern for deterioration.",
			color: score <= 2 ? "success" : score <= 4 ? "warning" : "danger"
		};
	};

