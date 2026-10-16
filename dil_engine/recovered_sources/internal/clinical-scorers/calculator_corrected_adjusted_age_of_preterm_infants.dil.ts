
	const scoreClinical = (values) => {
		if (values.gestational_age_weeks === "" || values.chronological_age_weeks === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter gestational age at birth and current chronological age in weeks.",
			color: "secondary"
		};
		const score = Math.max(0, Number(values.chronological_age_weeks) - (40 - Number(values.gestational_age_weeks)));
		return {
			displayScore: score % 1 === 0 ? String(score) : String(Math.round(score * 10) / 10) + " weeks",
			band: "Corrected age calculated",
			detail: "Corrected age equals chronological age minus the number of weeks born before 40 weeks' gestation.",
			color: "info"
		};
	};

