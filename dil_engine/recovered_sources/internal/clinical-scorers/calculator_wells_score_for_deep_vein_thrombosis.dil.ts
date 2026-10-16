
	const scoreClinical = (values) => {
		const score = [
			"active_cancer",
			"paralysis_or_cast",
			"bedridden_or_surgery",
			"localized_tenderness",
			"entire_leg_swelling",
			"calf_swelling",
			"pitting_edema",
			"collateral_veins",
			"previous_dvt",
			"alternative_diagnosis"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 0 ? "Low DVT probability" : score <= 2 ? "Moderate DVT probability" : "High DVT probability",
			detail: score <= 0 ? "Low 3-tier DVT probability and DVT unlikely by the common 2-tier approach." : score <= 2 ? "Moderate 3-tier DVT probability." : "High DVT probability.",
			color: score <= 0 ? "success" : score <= 2 ? "warning" : "danger"
		};
	};

