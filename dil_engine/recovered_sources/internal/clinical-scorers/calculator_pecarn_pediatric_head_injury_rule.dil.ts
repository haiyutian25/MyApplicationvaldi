
	function isFieldVisible(fieldKey, values) {
		if (fieldKey === "high_risk_lt2" || fieldKey === "intermediate_risk_lt2") return values.age_group === "lt2";
		if (fieldKey === "high_risk_ge2" || fieldKey === "intermediate_risk_ge2") return values.age_group === "ge2";
		return true;
	}
	const scoreClinical = (values) => {
		if (values.age_group === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Select the age group first.",
			color: "secondary"
		};
		const young = values.age_group === "lt2";
		const high = young ? Number(values.high_risk_lt2) === 1 : Number(values.high_risk_ge2) === 1;
		const intermediate = young ? Number(values.intermediate_risk_lt2) === 1 : Number(values.intermediate_risk_ge2) === 1;
		return {
			displayScore: young ? "Under 2 algorithm" : "Age >=2 algorithm",
			band: high ? "High risk: CT recommended" : intermediate ? "Intermediate risk: CT vs observation" : "Very low risk: CT not recommended",
			detail: young ? high ? "Under age 2 high-risk branch: CT is recommended." : intermediate ? "Under age 2 intermediate-risk branch: observation versus CT is appropriate." : "Under age 2 very-low-risk branch: CT is not recommended." : high ? "Age 2 or older high-risk branch: CT is recommended." : intermediate ? "Age 2 or older intermediate-risk branch: observation versus CT is appropriate." : "Age 2 or older very-low-risk branch: CT is not recommended.",
			color: high ? "danger" : intermediate ? "warning" : "success"
		};
	};

