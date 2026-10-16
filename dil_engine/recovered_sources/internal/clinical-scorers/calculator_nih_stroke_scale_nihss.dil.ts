
	const scoreClinical = (values) => {
		const score = [
			"loc",
			"loc_questions",
			"loc_commands",
			"best_gaze",
			"visual",
			"facial_palsy",
			"motor_left_arm",
			"motor_right_arm",
			"motor_left_leg",
			"motor_right_leg",
			"limb_ataxia",
			"sensory",
			"language",
			"dysarthria",
			"extinction"
		].reduce((total, key) => total + Number(values[key]), 0);
		return {
			displayScore: String(score),
			band: score === 0 ? "No stroke symptoms" : score <= 4 ? "Minor stroke" : score <= 15 ? "Moderate stroke" : score <= 20 ? "Moderate-to-severe stroke" : "Severe stroke",
			detail: score === 0 ? "No stroke symptoms on NIHSS." : score <= 4 ? "1-4 points: minor stroke." : score <= 15 ? "5-15 points: moderate stroke severity." : score <= 20 ? "16-20 points: moderate-to-severe stroke severity." : "21-42 points: severe stroke.",
			color: score === 0 ? "success" : score <= 4 ? "success" : score <= 15 ? "warning" : "danger"
		};
	};

