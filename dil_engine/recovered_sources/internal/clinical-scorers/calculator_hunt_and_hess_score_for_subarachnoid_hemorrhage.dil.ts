
	const scoreClinical = (values) => {
		const grade = values.grade;
		if (grade === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select the Hunt-Hess grade.",
			color: "secondary"
		};
		return {
			displayScore: `Grade ${grade}`,
			band: `Grade ${grade}`,
			detail: grade === "1" ? "Grade I: lowest severity group." : grade === "2" ? "Grade II: mild-to-moderate severity." : grade === "3" ? "Grade III: moderate severity with drowsiness or focal deficit." : grade === "4" ? "Grade IV: severe presentation." : "Grade V: highest severity with coma or moribund presentation.",
			color: grade === "1" ? "success" : grade === "2" ? "warning" : "danger"
		};
	};

