
	const scoreClinical = (values) => {
		const score = [
			"malleolar_tenderness",
			"navicular_tenderness",
			"fifth_metatarsal_tenderness",
			"cannot_bear_weight"
		].reduce((total, key) => total + Number(values[key]), 0);
		const ankle = (values.zone === "malleolar" || values.zone === "both") && (values.malleolar_tenderness === "1" || values.cannot_bear_weight === "1");
		const foot = (values.zone === "midfoot" || values.zone === "both") && (values.navicular_tenderness === "1" || values.fifth_metatarsal_tenderness === "1" || values.cannot_bear_weight === "1");
		return {
			displayScore: String(score),
			band: ankle ? "Ankle x-ray indicated" : foot ? "Foot x-ray indicated" : "No Ottawa Ankle radiograph trigger",
			detail: ankle && foot ? "Both ankle and foot radiographs are indicated." : ankle ? "Ankle radiography is indicated." : foot ? "Foot radiography is indicated." : "No Ottawa Ankle Rule trigger is present.",
			color: ankle || foot ? "warning" : "success"
		};
	};

