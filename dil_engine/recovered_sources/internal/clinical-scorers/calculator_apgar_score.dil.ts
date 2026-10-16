
	const scoreClinical = (values) => {
		const score = Number(values.appearance) + Number(values.pulse) + Number(values.grimace) + Number(values.activity) + Number(values.respiration);
		const band = score >= 7 ? "Reassuring" : score >= 4 ? "Moderately abnormal" : "Low Apgar score";
		const detail = score >= 7 ? "7-10 points: generally reassuring neonatal adaptation." : score >= 4 ? "4-6 points: moderately abnormal; reassess and support as needed." : "0-3 points: low Apgar score requiring urgent neonatal evaluation and support.";
		const color = score >= 7 ? "success" : score >= 4 ? "warning" : "danger";
		return {
			displayScore: String(score),
			band,
			detail,
			color
		};
	};

