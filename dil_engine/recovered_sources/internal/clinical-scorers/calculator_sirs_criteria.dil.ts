
	const scoreClinical = (values) => {
		if (values.temperature === "" || values.heart_rate === "" || values.resp_rate === "" && values.paco2 === "" || values.wbc === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter temperature, heart rate, WBC, and either respiratory rate or PaCO2.",
			color: "secondary"
		};
		const temperature = Number(values.temperature);
		const wbc = Number(values.wbc);
		const score = (temperature > 38 || temperature < 36 ? 1 : 0) + (Number(values.heart_rate) > 90 ? 1 : 0) + (values.resp_rate !== "" && Number(values.resp_rate) > 20 || values.paco2 !== "" && Number(values.paco2) < 32 ? 1 : 0) + (wbc > 12 || wbc < 4 || values.bands !== "" && Number(values.bands) > 10 ? 1 : 0);
		return {
			displayScore: String(score),
			band: score >= 2 ? "Meets SIRS definition" : "Does not meet SIRS definition",
			detail: score >= 2 ? "Two or more criteria meet the traditional SIRS definition." : "Fewer than two criteria are met.",
			color: score >= 2 ? "warning" : "success"
		};
	};

