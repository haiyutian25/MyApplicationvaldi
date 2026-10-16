
	const scoreClinical = (values) => {
		const score = [
			"dilation",
			"effacement",
			"station",
			"consistency",
			"position"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 5 ? "Unfavorable cervix" : score <= 8 ? "Intermediate favorability" : "Favorable cervix",
			detail: score <= 5 ? "Lower Bishop scores suggest an unfavorable cervix and a higher chance that cervical ripening will be needed." : score <= 8 ? "Intermediate cervical favorability." : "Scores above 8 suggest a favorable cervix with induction success closer to spontaneous labor.",
			color: score <= 5 ? "warning" : score <= 8 ? "warning" : "success"
		};
	};

