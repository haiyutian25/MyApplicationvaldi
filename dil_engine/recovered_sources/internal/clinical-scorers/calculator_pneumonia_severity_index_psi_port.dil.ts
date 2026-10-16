
	const scoreClinical = (values) => {
		if (values.age === "") return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter at least the patient age to begin PSI/PORT classification.",
			color: "secondary"
		};
		const age = Number(values.age);
		const resp = Number(values.resp_rate);
		const sbp = Number(values.sbp);
		const temp = Number(values.temperature);
		const pulse = Number(values.pulse);
		const score = Math.trunc(age + (values.sex === "female" ? -10 : 0) + Number(values.nursing_home) + Number(values.neoplastic_disease) + Number(values.liver_disease) + Number(values.heart_failure) + Number(values.cerebrovascular_disease) + Number(values.renal_disease) + Number(values.altered_mental_status) + (values.resp_rate !== "" && resp >= 30 ? 20 : 0) + (values.sbp !== "" && sbp < 90 ? 20 : 0) + (values.temperature !== "" && (temp < 35 || temp >= 40) ? 15 : 0) + (values.pulse !== "" && pulse >= 125 ? 10 : 0) + (values.ph !== "" && Number(values.ph) < 7.35 ? 30 : 0) + (values.bun !== "" && Number(values.bun) >= 30 ? 20 : 0) + (values.sodium !== "" && Number(values.sodium) < 130 ? 20 : 0) + (values.glucose !== "" && Number(values.glucose) >= 250 ? 10 : 0) + (values.hematocrit !== "" && Number(values.hematocrit) < 30 ? 10 : 0) + (values.pao2 !== "" && Number(values.pao2) < 60 || values.o2_sat !== "" && Number(values.o2_sat) < 90 ? 10 : 0) + Number(values.pleural_effusion));
		const lowRisk = age <= 50 && Number(values.nursing_home) === 0 && Number(values.neoplastic_disease) === 0 && Number(values.liver_disease) === 0 && Number(values.heart_failure) === 0 && Number(values.cerebrovascular_disease) === 0 && Number(values.renal_disease) === 0 && Number(values.altered_mental_status) === 0 && (values.resp_rate === "" || resp < 30) && (values.sbp === "" || sbp >= 90) && (values.temperature === "" || temp >= 35 && temp < 40) && (values.pulse === "" || pulse < 125);
		return {
			displayScore: lowRisk ? "Class I" : score <= 70 ? "Class II" : score <= 90 ? "Class III" : score <= 130 ? "Class IV" : "Class V",
			band: "Risk class assigned",
			detail: lowRisk ? "Class I: very low mortality risk." : score <= 70 ? "Class II: low mortality risk." : score <= 90 ? "Class III: intermediate risk; brief observation or short stay may be appropriate." : score <= 130 ? "Class IV: high risk, usually requiring inpatient treatment." : "Class V: very high risk, requiring inpatient management.",
			color: lowRisk || score <= 70 ? "success" : score <= 90 ? "warning" : "danger"
		};
	};

