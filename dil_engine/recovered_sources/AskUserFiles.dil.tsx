
	function AskUserFiles(props) {
		const supportedClientActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const { state, resolutionComplete } = useResolvedComponentResult("AskUserFiles", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 180,
			height: 40
		});
		if (!state.show_upload_cta) return null;
		const isFile = state.kind === "file";
		const uploadAction = isFile ? "request_file_upload" : "request_media_upload";
		const uploadAvailable = supportedClientActions?.includes(uploadAction);
		const uploadEnabled = uploadAvailable ?? true;
		const label = isFile ? state.file_label : state.kind === "video" ? state.video_label : state.kind === "media" ? state.media_label : state.photo_label;
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "start",
			...GenUI.logEvent ? {
				onVisibleWhen: uploadAvailable === true,
				onVisible: () => GenUI.logEvent?.({ event_data: {
					requested_kind: state.kind,
					elicitation_metadata: {
						elicitation_type: "file_upload",
						stage: "shown"
					}
				} })
			} : {}
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "outline",
			color: "primary",
			disabled: !uploadEnabled,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: uploadAction,
				payload: {
					event_name: "ChatgptWebPhotoUploadActionClicked",
					statsig_event_name: "chatgpt_web_photo_upload_action_clicked",
					event_data: {
						requested_kind: state.kind,
						impression_event: "chatgpt_web_photo_upload_action_enabled_impression",
						elicitation_metadata: {
							elicitation_type: "file_upload",
							stage: "interacted",
							action: "accept"
						}
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("icon", { name: isFile ? "paperclip" : state.kind === "video" ? "video" : "image" }), label));
	}

