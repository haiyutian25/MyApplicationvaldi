
	const scoreClinical = (values) => {
		const score = [
			"gcs_points",
			"age_over_80",
			"volume_over_30",
			"ivh",
			"infratentorial"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 1 ? "Lower mortality range" : score <= 2 ? "Intermediate mortality range" : "High mortality range",
			detail: score === 0 ? "ICH score 0 is associated with very low short-term mortality." : score === 1 ? "ICH score 1 is associated with low but nonzero mortality." : score === 2 ? "ICH score 2 carries substantial mortality risk." : score === 3 ? "ICH score 3 is associated with high mortality." : "Scores 4 or higher carry very high short-term mortality.",
			color: score <= 1 ? "success" : score <= 2 ? "warning" : "danger"
		};
	};

