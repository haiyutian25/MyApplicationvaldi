
	const scoreClinical = (values) => {
		if (["age_points"].some((key) => values[key] === "")) return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select an age band to calculate the score.",
			color: "secondary"
		};
		const score = [
			"heart_failure",
			"hypertension",
			"age_points",
			"diabetes",
			"stroke_tia",
			"vascular_disease",
			"female_sex"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score === 0 ? "Low stroke risk" : score === 1 ? "Borderline stroke risk" : "Elevated stroke risk",
			detail: score === 0 ? "0 points: very low annual stroke risk." : score === 1 ? "1 point: about 1.3% annual stroke risk." : score === 2 ? "2 points: about 2.2% annual stroke risk." : score === 3 ? "3 points: about 3.2% annual stroke risk." : score === 4 ? "4 points: about 4.0% annual stroke risk." : score === 5 ? "5 points: about 6.7% annual stroke risk." : score === 6 ? "6 points: about 9.8% annual stroke risk." : score === 7 ? "7 points: about 9.6% annual stroke risk." : score === 8 ? "8 points: about 6.7% annual stroke risk." : "9 points: about 15.2% annual stroke risk.",
			color: score === 0 ? "success" : score === 1 ? "warning" : "danger"
		};
	};

