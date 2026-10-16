
	function isFieldVisible(fieldKey, values) {
		return fieldKey !== "stool_reassuring" || values.diarrhea_present === "1";
	}
	const scoreClinical = (values) => {
		const score = Math.trunc(Number(values.age_60_days_or_less) + Number(values.term_previously_healthy) + Number(values.well_appearing) + Number(values.cbc_and_bands_reassuring) + Number(values.urinalysis_reassuring) + (Number(values.diarrhea_present) === 1 ? Number(values.stool_reassuring) : 1));
		return {
			displayScore: String(score),
			band: score === 6 ? "Rochester low risk" : "Not Rochester low risk",
			detail: score === 6 ? "All Rochester low-risk criteria are satisfied." : "At least one Rochester low-risk criterion is not satisfied.",
			color: score === 6 ? "success" : "warning"
		};
	};

