
	function isFieldVisible(fieldKey, values) {
		if (fieldKey === "pao2") return values.oxygenation_mode === "pao2";
		if (fieldKey === "aado2") return values.oxygenation_mode === "aado2";
		if (fieldKey === "arterial_ph") return values.acid_base_mode === "ph";
		if (fieldKey === "bicarbonate") return values.acid_base_mode === "bicarb";
		return true;
	}
	const scoreClinical = (values) => {
		if ([
			"temperature",
			"map",
			"heart_rate",
			"resp_rate",
			"sodium",
			"potassium",
			"creatinine",
			"hematocrit",
			"wbc",
			"gcs",
			"age",
			values.oxygenation_mode === "aado2" ? "aado2" : "pao2",
			values.acid_base_mode === "ph" ? "arterial_ph" : "bicarbonate"
		].some((key) => values[key] === "")) return {
			displayScore: "-",
			band: "Incomplete",
			detail: "Enter all physiologic variables, age, and GCS to finish the APACHE II calculation.",
			color: "secondary"
		};
		const temperature = Number(values.temperature);
		const map = Number(values.map);
		const heartRate = Number(values.heart_rate);
		const respRate = Number(values.resp_rate);
		const aado2 = Number(values.aado2);
		const pao2 = Number(values.pao2);
		const ph = Number(values.arterial_ph);
		const bicarbonate = Number(values.bicarbonate);
		const sodium = Number(values.sodium);
		const potassium = Number(values.potassium);
		const creatinine = Number(values.creatinine);
		const hematocrit = Number(values.hematocrit);
		const wbc = Number(values.wbc);
		const age = Number(values.age);
		const temperaturePoints = temperature >= 41 ? 4 : temperature >= 39 ? 3 : temperature >= 38.5 ? 1 : temperature >= 36 ? 0 : temperature >= 34 ? 1 : temperature >= 32 ? 2 : temperature >= 30 ? 3 : 4;
		const mapPoints = map >= 160 ? 4 : map >= 130 ? 3 : map >= 110 ? 2 : map >= 70 ? 0 : map >= 50 ? 2 : 4;
		const heartRatePoints = heartRate >= 180 ? 4 : heartRate >= 140 ? 3 : heartRate >= 110 ? 2 : heartRate >= 70 ? 0 : heartRate >= 55 ? 2 : heartRate >= 40 ? 3 : 4;
		const respRatePoints = respRate >= 50 ? 4 : respRate >= 35 ? 3 : respRate >= 25 ? 1 : respRate >= 12 ? 0 : respRate >= 10 ? 1 : respRate >= 6 ? 2 : 4;
		const oxygenationPoints = values.oxygenation_mode === "aado2" ? aado2 >= 500 ? 4 : aado2 >= 350 ? 3 : aado2 >= 200 ? 2 : 0 : pao2 < 55 ? 4 : pao2 <= 60 ? 3 : pao2 <= 70 ? 1 : 0;
		const acidBasePoints = values.acid_base_mode === "ph" ? ph >= 7.7 ? 4 : ph >= 7.6 ? 3 : ph >= 7.5 ? 1 : ph >= 7.33 ? 0 : ph >= 7.25 ? 2 : ph >= 7.15 ? 3 : 4 : bicarbonate >= 52 ? 4 : bicarbonate >= 41 ? 3 : bicarbonate >= 32 ? 1 : bicarbonate >= 22 ? 0 : bicarbonate >= 18 ? 2 : bicarbonate >= 15 ? 3 : 4;
		const sodiumPoints = sodium >= 180 ? 4 : sodium >= 160 ? 3 : sodium >= 155 ? 2 : sodium >= 150 ? 1 : sodium >= 130 ? 0 : sodium >= 120 ? 2 : sodium >= 111 ? 3 : 4;
		const potassiumPoints = potassium >= 7 ? 4 : potassium >= 6 ? 3 : potassium >= 5.5 ? 1 : potassium >= 3.5 ? 0 : potassium >= 3 ? 1 : potassium >= 2.5 ? 2 : 4;
		const creatininePoints = (creatinine >= 3.5 ? 4 : creatinine >= 2 ? 3 : creatinine >= 1.5 ? 2 : creatinine >= .6 ? 0 : 2) * (values.acute_renal_failure === "1" ? 2 : 1);
		const hematocritPoints = hematocrit >= 60 ? 4 : hematocrit >= 50 ? 2 : hematocrit >= 46 ? 1 : hematocrit >= 30 ? 0 : hematocrit >= 20 ? 2 : 4;
		const wbcPoints = wbc >= 40 ? 4 : wbc >= 20 ? 2 : wbc >= 15 ? 1 : wbc >= 3 ? 0 : wbc >= 1 ? 2 : 4;
		const agePoints = age >= 75 ? 6 : age >= 65 ? 5 : age >= 55 ? 3 : age >= 45 ? 2 : 0;
		const score = Math.trunc(temperaturePoints + mapPoints + heartRatePoints + respRatePoints + oxygenationPoints + acidBasePoints + sodiumPoints + potassiumPoints + creatininePoints + hematocritPoints + wbcPoints + (15 - Number(values.gcs)) + agePoints + Number(values.chronic_health_points));
		return {
			displayScore: String(score),
			band: score <= 9 ? "Lower mortality band" : score <= 19 ? "Intermediate mortality band" : score <= 29 ? "High mortality band" : "Very high mortality band",
			detail: score <= 4 ? "Approximate in-hospital mortality about 4%." : score <= 9 ? "Approximate in-hospital mortality about 8%." : score <= 14 ? "Approximate in-hospital mortality about 15%." : score <= 19 ? "Approximate in-hospital mortality about 25%." : score <= 24 ? "Approximate in-hospital mortality about 40%." : score <= 29 ? "Approximate in-hospital mortality about 55%." : score <= 34 ? "Approximate in-hospital mortality about 75%." : "Approximate in-hospital mortality about 85% or higher.",
			color: score <= 9 ? "success" : score <= 19 ? "warning" : "danger"
		};
	};

