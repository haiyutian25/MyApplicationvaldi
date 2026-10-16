
	const scoreClinical = (values) => {
		const score = [
			"age_over_65",
			"vomiting",
			"open_depressed_skull_fracture",
			"basilar_skull_signs",
			"gcs_under_15_2h",
			"retrograde_amnesia",
			"dangerous_mechanism"
		].reduce((total, key) => total + Number(values[key]), 0);
		const highRisk = [
			"age_over_65",
			"vomiting",
			"open_depressed_skull_fracture",
			"basilar_skull_signs",
			"gcs_under_15_2h"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: highRisk > 0 ? "Head CT recommended (high-risk criterion present)" : score > 0 ? "Head CT recommended (medium-risk criterion present)" : "No rule-based CT trigger",
			detail: highRisk > 0 ? "At least one high-risk criterion is present." : score > 0 ? "Only medium-risk criteria are present; CT is still recommended by the rule." : "No Canadian CT Head Rule criterion is present.",
			color: highRisk > 0 ? "danger" : score > 0 ? "warning" : "success"
		};
	};

