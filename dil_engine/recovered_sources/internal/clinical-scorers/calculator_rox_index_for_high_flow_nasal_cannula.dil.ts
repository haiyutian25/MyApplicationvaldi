
	const scoreClinical = (values) => {
		if (values.spo2 === "" || values.fio2 === "" || values.resp_rate === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter SpO2, FiO2, and respiratory rate to calculate the ROX index.",
			color: "secondary"
		};
		const score = Number(values.spo2) / (Number(values.fio2) / 100) / Number(values.resp_rate);
		if (!Number.isFinite(score)) return {
			displayScore: "",
			band: "",
			detail: "",
			color: "secondary"
		};
		const lowThreshold = values.hours === "2" ? 2.85 : values.hours === "6" ? 3.47 : values.hours === "12" ? 3.85 : 4.88;
		return {
			displayScore: String(Math.round(score * 10) / 10),
			band: score >= 4.88 ? "Favorable ROX threshold" : score < lowThreshold ? "High failure-risk threshold" : "Indeterminate zone",
			detail: score >= 4.88 ? "A ROX index >=4.88 is generally favorable for HFNC continuation." : score < lowThreshold ? "This is below the commonly used lower time-specific ROX threshold and suggests higher risk of HFNC failure." : "This falls between the lower and upper common ROX thresholds; reassess clinically and trend over time.",
			color: score >= 4.88 ? "success" : score < lowThreshold ? "danger" : "warning"
		};
	};

