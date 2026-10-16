
	function isFieldVisible(fieldKey, values) {
		if ([
			"age_non_gallstone",
			"wbc_non_gallstone",
			"glucose_non_gallstone",
			"ldh_non_gallstone",
			"bun_rise_non_gallstone",
			"pao2_low",
			"base_deficit_non_gallstone",
			"fluid_non_gallstone"
		].includes(fieldKey)) return values.etiology === "nongallstone";
		if ([
			"age_gallstone",
			"wbc_gallstone",
			"glucose_gallstone",
			"ldh_gallstone",
			"bun_rise_gallstone",
			"base_deficit_gallstone",
			"fluid_gallstone"
		].includes(fieldKey)) return values.etiology === "gallstone";
		return true;
	}
	const scoreClinical = (values) => {
		const gallstone = values.etiology === "gallstone";
		const score = Math.trunc(Number(gallstone ? values.age_gallstone : values.age_non_gallstone) + Number(gallstone ? values.wbc_gallstone : values.wbc_non_gallstone) + Number(gallstone ? values.glucose_gallstone : values.glucose_non_gallstone) + Number(gallstone ? values.ldh_gallstone : values.ldh_non_gallstone) + Number(values.ast_over_250) + Number(values.hct_drop) + Number(gallstone ? values.bun_rise_gallstone : values.bun_rise_non_gallstone) + Number(values.calcium_low) + (gallstone ? 0 : Number(values.pao2_low)) + Number(gallstone ? values.base_deficit_gallstone : values.base_deficit_non_gallstone) + Number(gallstone ? values.fluid_gallstone : values.fluid_non_gallstone));
		return {
			displayScore: String(score),
			band: score <= 2 ? "Mild severity range" : score <= 4 ? "Moderate severity range" : score <= 6 ? "Severe severity range" : "Very severe range",
			detail: score <= 2 ? "0-2 criteria: roughly 0-3% mortality." : score <= 4 ? "3-4 criteria: roughly 15% mortality." : score <= 6 ? "5-6 criteria: roughly 40% mortality." : "7 or more criteria: extremely high mortality risk.",
			color: score <= 2 ? "success" : score <= 4 ? "warning" : "danger"
		};
	};

