
	const scoreClinical = (values) => {
		if (values.d_dimer === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter the D-dimer value to apply YEARS.",
			color: "secondary"
		};
		const score = Math.trunc(Number(values.clinical_dvt) + Number(values.hemoptysis) + Number(values.pe_most_likely));
		const excluded = score === 0 && Number(values.d_dimer) < 1e3 || score > 0 && Number(values.d_dimer) < 500;
		return {
			displayScore: String(score),
			band: excluded ? "PE excluded by YEARS" : "PE not excluded by YEARS",
			detail: excluded ? "PE is excluded when D-dimer is <1000 ng/mL FEU with 0 YEARS items, or <500 ng/mL FEU with 1 or more YEARS items." : "YEARS does not exclude PE at this D-dimer threshold.",
			color: excluded ? "success" : "warning"
		};
	};

