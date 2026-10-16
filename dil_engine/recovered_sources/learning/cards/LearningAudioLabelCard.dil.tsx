
	function LearningAudioLabelCard$1(props) {
		return /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			renderExercise: (data, selection, navigation) => /* @__PURE__ */ __dil.jsx(AudioLabelExercise, {
				...data,
				selection,
				navigation
			})
		});
	}
	function AudioLabelExercise({ title, selection, navigation, text, language, pronunciationHint, playbackSpeed, options, correctOptionId, correctLabel, incorrectLabel, audioLabels, directions }) {
		const selectedId = selection.selectedIds[0] ?? null;
		const selected = options.find((option) => option.id === selectedId);
		const correct = selectedId === correctOptionId;
		const result = selected ? {
			status: correct ? "correct" : "incorrect",
			label: correct ? correctLabel : incorrectLabel,
			answer: selected.label,
			explanation: selected.feedback
		} : null;
		return /* @__PURE__ */ __dil.jsx(SpeechSynthesizer, {
			text,
			language: language ?? void 0,
			pronunciationHint: pronunciationHint ?? void 0,
			playbackSpeed: playbackSpeed ?? void 0,
			source: "learning_audio_label_card",
			controls: (speech) => /* @__PURE__ */ __dil.jsx(LearningCard, {
				icon: "headphones",
				title,
				navigation,
				directions,
				prompt: /* @__PURE__ */ __dil.jsx(LearningAudio, {
					speech,
					labels: audioLabels
				})
			}, /* @__PURE__ */ __dil.jsx(LearningTextChoices, {
				options,
				selectedId,
				disabled: !speech.available || Boolean(speech.error) || selectedId !== null,
				onSelect: (id) => selection.setSelectedIds((current) => current.length ? current : [id])
			}), /* @__PURE__ */ __dil.jsx(LearningFeedback, { result }))
		});
	}

