
	function LearningVoiceModeLauncherCard$1(props) {
		const available = DIL.useAppData((data) => data.opGenui?.supportsWidgetVoiceSessions === true);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx(LearningCard, {
			icon: "voice-4-bars",
			title: props.title,
			prompt: /* @__PURE__ */ __dil.jsx("text", { size: "md" }, props.description),
			divider: false
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("pressable", {
			height: 48,
			width: "100%",
			radius: "full",
			background: "info-solid",
			ariaLabel: props.startLabel,
			disabled: !available,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "start_voice_mode",
				payload: { widget_voice_session_id: props.voiceSession.id }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			height: "100%",
			align: "center",
			justify: "center",
			gap: 1.5
		}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "voice-4-bars",
			color: "white"
		})), /* @__PURE__ */ __dil.jsx("text", {
			color: "white",
			weight: "medium"
		}, props.startLabel))), !available ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, props.unavailableLabel) : null)));
	}

