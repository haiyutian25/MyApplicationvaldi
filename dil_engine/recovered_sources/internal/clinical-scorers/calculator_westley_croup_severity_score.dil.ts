
	const scoreClinical = (values) => {
		const score = [
			"consciousness",
			"cyanosis",
			"stridor",
			"air_entry",
			"retractions"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Mild croup" : score <= 7 ? "Moderate croup" : score <= 11 ? "Severe croup" : "Impending respiratory failure",
			detail: score <= 2 ? "Westley score 0-2: mild croup." : score <= 7 ? "Westley score 3-7: moderate croup." : score <= 11 ? "Westley score 8-11: severe croup." : "Westley score >=12: impending respiratory failure.",
			color: score <= 2 ? "success" : score <= 7 ? "warning" : "danger"
		};
	};

