
	const scoreClinical = (values) => {
		const grade = values.mrs;
		if (grade === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select the modified Rankin Scale grade.",
			color: "secondary"
		};
		return {
			displayScore: grade,
			band: grade === "0" ? "No symptoms" : grade === "6" ? "Death" : "Disability present",
			detail: grade === "0" ? "No symptoms." : grade === "1" ? "No significant disability despite symptoms." : grade === "2" ? "Slight disability." : grade === "3" ? "Moderate disability." : grade === "4" ? "Moderately severe disability." : grade === "5" ? "Severe disability requiring constant care." : "Death.",
			color: grade === "0" || grade === "1" ? "success" : grade === "2" ? "warning" : "danger"
		};
	};

