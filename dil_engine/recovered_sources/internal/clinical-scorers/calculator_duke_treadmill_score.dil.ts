
	const scoreClinical = (values) => {
		if (values.exercise_time === "" || values.st_depression === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter treadmill exercise time and ST deviation to finish the calculation.",
			color: "secondary"
		};
		const score = Number(values.exercise_time) - 5 * Number(values.st_depression) - 4 * Number(values.angina_index);
		return {
			displayScore: String(Math.round(score * 10) / 10),
			band: score >= 5 ? "Low risk" : score >= -10 ? "Intermediate risk" : "High risk",
			detail: score >= 5 ? "Score >=5: low ischemic risk on treadmill testing." : score >= -10 ? "Score -10 to 4: intermediate risk." : "Score <=-11: high risk, often associated with substantially worse prognosis.",
			color: score >= 5 ? "success" : score >= -10 ? "warning" : "danger"
		};
	};

