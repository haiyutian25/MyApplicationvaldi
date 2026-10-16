
	const scoreClinical = (values) => {
		const score = [
			"bun_over_25",
			"impaired_mental_status",
			"sirs_present",
			"age_over_60",
			"pleural_effusion"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score <= 2 ? "Lower severe-pancreatitis risk" : "Higher severe-pancreatitis risk",
			detail: score === 0 ? "0 points: low mortality risk, typically well under 1%." : score === 1 ? "1 point: low mortality risk, roughly around 1%." : score === 2 ? "2 points: still relatively low mortality risk, roughly around 2%." : score === 3 ? "3 points: rising mortality risk, often around 5%." : score === 4 ? "4 points: high mortality risk, often in the low teens." : "5 points: very high mortality risk.",
			color: score <= 2 ? "success" : "danger"
		};
	};

