
	const scoreClinical = (values) => {
		const score = [
			"midline_tenderness",
			"focal_neurologic_deficit",
			"altered_alertness",
			"intoxication",
			"distracting_injury"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score === 0 ? "Low-risk by NEXUS" : "C-spine imaging indicated",
			detail: score === 0 ? "No NEXUS criteria are present; the cervical spine can be clinically cleared in the appropriate blunt-trauma context." : "Any positive NEXUS criterion means the rule does not clear the cervical spine.",
			color: score === 0 ? "success" : "danger"
		};
	};

