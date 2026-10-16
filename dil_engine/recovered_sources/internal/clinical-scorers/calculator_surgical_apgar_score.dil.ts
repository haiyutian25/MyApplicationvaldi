
	const scoreClinical = (values) => {
		if (values.ebl === "" || values.lowest_hr === "" || values.lowest_map === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter estimated blood loss, lowest heart rate, and lowest MAP.",
			color: "secondary"
		};
		const ebl = Number(values.ebl);
		const hr = Number(values.lowest_hr);
		const map = Number(values.lowest_map);
		const score = (ebl > 1e3 ? 0 : ebl >= 601 ? 1 : ebl >= 101 ? 2 : 3) + (hr > 85 ? 0 : hr >= 76 ? 1 : hr >= 66 ? 2 : hr >= 56 ? 3 : 4) + (map < 40 ? 0 : map <= 54 ? 1 : map <= 69 ? 2 : 3);
		return {
			displayScore: String(score),
			band: score >= 9 ? "Lower postoperative complication risk" : score >= 7 ? "Intermediate postoperative risk" : "Higher postoperative risk",
			detail: score >= 9 ? "Scores 9-10 are associated with lower postoperative complication risk." : score >= 7 ? "Scores 7-8 indicate intermediate postoperative risk." : "Scores 0-6 indicate higher postoperative complication risk.",
			color: score >= 9 ? "success" : score >= 7 ? "warning" : "danger"
		};
	};

