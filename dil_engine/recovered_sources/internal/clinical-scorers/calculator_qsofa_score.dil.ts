
	const scoreClinical = (values) => {
		if (values.resp_rate === "" || values.sbp === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter respiratory rate and systolic blood pressure to finish qSOFA.",
			color: "secondary"
		};
		const score = (Number(values.resp_rate) >= 22 ? 1 : 0) + Number(values.altered_mentation) + (Number(values.sbp) <= 100 ? 1 : 0);
		return {
			displayScore: String(Math.trunc(score)),
			band: score >= 2 ? "qSOFA positive" : "qSOFA negative",
			detail: score >= 2 ? "A qSOFA score of 2 or more suggests higher risk of poor outcome from suspected infection." : "A qSOFA score below 2 is negative, though sepsis can still be present.",
			color: score >= 2 ? "danger" : "success"
		};
	};

