
	const scoreClinical = (values) => {
		const score = [
			"eye",
			"verbal",
			"motor"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score >= 13 ? "Mild brain injury range" : score >= 9 ? "Moderate brain injury range" : "Severe brain injury range",
			detail: score >= 13 ? "GCS 13-15: mild impairment range." : score >= 9 ? "GCS 9-12: moderate impairment range." : "GCS 3-8: severe impairment range, often prompting airway and critical-care considerations.",
			color: score >= 13 ? "success" : score >= 9 ? "warning" : "danger"
		};
	};

