
	const scoreClinical = (values) => {
		if ([
			"bilirubin",
			"albumin",
			"inr",
			"ascites",
			"encephalopathy"
		].some((key) => values[key] === "")) return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select all five domains to finish the score.",
			color: "secondary"
		};
		const score = [
			"bilirubin",
			"albumin",
			"inr",
			"ascites",
			"encephalopathy"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 6 ? "Class A" : score <= 9 ? "Class B" : "Class C",
			detail: score <= 6 ? "Class A: lowest Child-Pugh severity, with roughly 100% 1-year and 85% 2-year survival in classic cohorts." : score <= 9 ? "Class B: intermediate severity, with roughly 80% 1-year and 60% 2-year survival in classic cohorts." : "Class C: most advanced class, with roughly 45% 1-year and 35% 2-year survival in classic cohorts.",
			color: score <= 6 ? "success" : score <= 9 ? "warning" : "danger"
		};
	};

