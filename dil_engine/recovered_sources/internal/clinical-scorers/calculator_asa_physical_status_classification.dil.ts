
	const scoreClinical = (values) => {
		const asa = values.asa_class;
		if (asa === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select the patient's ASA class to finish classification.",
			color: "secondary"
		};
		return {
			displayScore: `ASA ${asa}${values.emergency_modifier === "1" ? "E" : ""}`,
			band: `ASA ${asa}`,
			detail: asa === "1" ? "ASA I: healthy patient." : asa === "2" ? "ASA II: mild systemic disease." : asa === "3" ? "ASA III: severe systemic disease." : asa === "4" ? "ASA IV: severe systemic disease that is a constant threat to life." : asa === "5" ? "ASA V: moribund patient not expected to survive without the operation." : "ASA VI: brain-dead organ donor.",
			color: asa === "1" || asa === "2" ? "success" : asa === "3" ? "warning" : "danger"
		};
	};

