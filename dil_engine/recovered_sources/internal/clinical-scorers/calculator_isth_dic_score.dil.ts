
	const scoreClinical = (values) => {
		const score = [
			"platelets",
			"fibrin_markers",
			"pt_prolongation",
			"fibrinogen"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score >= 5 ? "Compatible with overt DIC" : "Not overt DIC by ISTH score",
			detail: score >= 5 ? "A score of 5 or more is compatible with overt DIC if the clinical context fits." : "Scores below 5 are not overt DIC by ISTH criteria, but serial reassessment may still be needed.",
			color: score >= 5 ? "danger" : "success"
		};
	};

