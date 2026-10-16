
	const scoreClinical = (values) => {
		if (values.bun === "" || values.hemoglobin === "" || values.sbp === "" || values.pulse === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter sex, BUN, hemoglobin, systolic blood pressure, and pulse to finish the GBS.",
			color: "secondary"
		};
		const bun = Number(values.bun);
		const hgb = Number(values.hemoglobin);
		const sbp = Number(values.sbp);
		const score = Math.trunc((bun >= 70 ? 6 : bun >= 28 ? 4 : bun >= 22.4 ? 3 : bun >= 18.2 ? 2 : 0) + (values.sex === "male" ? hgb < 10 ? 6 : hgb < 12 ? 3 : hgb < 13 ? 1 : 0 : hgb < 10 ? 6 : hgb < 12 ? 1 : 0) + (sbp < 90 ? 3 : sbp < 100 ? 2 : sbp < 110 ? 1 : 0) + (Number(values.pulse) >= 100 ? 1 : 0) + Number(values.melena) + 2 * Number(values.syncope) + 2 * Number(values.hepatic_disease) + 2 * Number(values.cardiac_failure));
		return {
			displayScore: String(score),
			band: score === 0 ? "Very low-risk bleed" : score <= 5 ? "Higher-risk bleed" : "High-risk bleed",
			detail: score === 0 ? "A Glasgow-Blatchford score of 0 identifies very low-risk patients who may be candidates for outpatient management." : score <= 5 ? "Nonzero GBS suggests the need for hospital-based evaluation and likely endoscopy." : "Higher GBS values suggest substantial need for intervention and closer monitoring.",
			color: score === 0 ? "success" : score <= 5 ? "warning" : "danger"
		};
	};

