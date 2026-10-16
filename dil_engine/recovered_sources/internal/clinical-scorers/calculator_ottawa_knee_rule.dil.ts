
	const scoreClinical = (values) => {
		const score = [
			"age_over_55",
			"isolated_patella_tenderness",
			"fibular_head_tenderness",
			"cannot_flex_90",
			"cannot_bear_weight"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score > 0 ? "Knee x-ray indicated" : "No Ottawa Knee radiograph trigger",
			detail: score > 0 ? "Any positive Ottawa Knee Rule criterion supports knee radiography." : "No Ottawa Knee Rule criterion is present.",
			color: score > 0 ? "warning" : "success"
		};
	};

