
	const scoreClinical = (values) => {
		if (values.age_hours === "" || values.bilirubin === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter postnatal age in hours and bilirubin level.",
			color: "secondary"
		};
		const age = Number(values.age_hours);
		const anchors = values.gestation_band === "36_high" ? [
			9.5,
			12.5,
			15.5,
			17
		] : values.gestation_band === "38_high" ? [
			10.5,
			14,
			16.5,
			18
		] : [
			13.3,
			17,
			19.8,
			21.8
		];
		const score = age <= 24 ? anchors[0] : age <= 48 ? anchors[0] + (anchors[1] - anchors[0]) * ((age - 24) / 24) : age <= 72 ? anchors[1] + (anchors[2] - anchors[1]) * ((age - 48) / 24) : age <= 96 ? anchors[2] + (anchors[3] - anchors[2]) * ((age - 72) / 24) : anchors[3];
		const above = Number(values.bilirubin) >= score;
		return {
			displayScore: score % 1 === 0 ? String(score) : String(Math.round(score * 10) / 10) + " mg/dL",
			band: above ? "At or above phototherapy threshold" : "Below phototherapy threshold",
			detail: above ? "Estimated bilirubin is at or above the approximate phototherapy threshold for the selected band." : "Estimated bilirubin is below the approximate phototherapy threshold for the selected band.",
			color: above ? "warning" : "success"
		};
	};

