
	function analytics(state, target, value) {
		return {
			event_name: state.analytics_context ? "chatgpt_widget_action" : null,
			event_data: state.analytics_context ? {
				widget_affordance: "OPTION",
				widget_action_target: target,
				widget_action_value: value,
				surface_location: "RESPONSE",
				content_reference_type: "dil"
			} : null
		};
	}
	function FeatureArtwork({ feature, isMobile, isDark }) {
		const width = feature.feature_id === "personalization" ? isMobile ? 135 : 90 : feature.feature_id === "images" ? isMobile ? 152 : 97 : feature.feature_id === "voice" ? 114 : isMobile ? 265 : 174;
		const height = feature.feature_id === "personalization" ? isMobile ? 121 : 84 : feature.feature_id === "images" ? isMobile ? 164 : 105 : feature.feature_id === "voice" ? 114 : isMobile ? 56 : 37;
		return /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: feature.artwork_label != null ? 3 : 0
		}, feature.artwork_label != null && /* @__PURE__ */ __dil.jsx("box", { width }, /* @__PURE__ */ __dil.jsx("text", {
			size: isMobile ? "md" : "xs",
			weight: "semibold",
			color: "primary",
			textAlign: "center",
			maxLines: 1
		}, feature.artwork_label)), /* @__PURE__ */ __dil.jsx("image", {
			src: isDark && feature.dark_image_url != null ? feature.dark_image_url : feature.image_url,
			alt: "",
			width,
			height,
			fit: feature.feature_id === "images" ? "scale-down" : "contain",
			position: "center",
			radius: "none",
			hideOnFailure: true
		}));
	}
	function BenefitContent({ item, clickable }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 40,
			height: 40,
			minWidth: 40,
			align: "center",
			justify: "center",
			radius: "xl",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: item.icon,
			size: "xl",
			color: "primary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			align: "start",
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "primary"
		}, item.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 2
		}, item.description)), clickable && /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right-md",
			size: "sm",
			color: "secondary"
		}));
	}
	function ResolvedFeatures({ state }) {
		const isMobile = DIL.useIsMobile();
		const isXs = DIL.useBreakpoint("xs");
		const isMd = DIL.useBreakpoint("md");
		const { isDark } = DIL.useTheme();
		const isDesktop = isXs && !isMobile;
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "col",
			width: "40rem",
			maxWidth: "100%",
			gap: 6,
			...GenUI.logEvent ? {
				onVisibleWhen: state.analytics_context != null,
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_conversational_onboarding_stage_shown",
					event_data: {
						flow_id: state.analytics_context?.flow_id,
						stage_id: state.analytics_context?.stage_id
					}
				})
			} : {}
		}, state.welcome_heading != null && state.welcome_body != null && /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, state.welcome_body), /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 4,
			showArrows: isDesktop && (!isMd || state.features.length > 3)
		}, state.features.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: `featured_${item.feature_id}`,
			width: isDesktop ? 245 : 330,
			minWidth: isDesktop ? 245 : 330,
			height: isDesktop ? 220 : 289,
			padding: 0,
			radius: "4xl",
			background: item.feature_id === "images" ? {
				light: "pink-75",
				dark: "pink-900"
			} : item.feature_id === "intelligence" ? {
				light: "blue-50",
				dark: "blue-900"
			} : {
				light: "purple-50",
				dark: "purple-900"
			}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: item.title,
			width: "100%",
			height: "100%",
			align: "stretch",
			gap: 0,
			padding: 0,
			radius: "4xl",
			clip: true,
			onClick: () => {
				const action = item.feature_id === "intelligence" ? "set_thinking_effort" : item.feature_id === "images" ? "activate_image_generation" : "navigate_to_feature";
				const actionAnalytics = analytics(state, "plus_onboarding_feature", item.feature_id);
				GenUI.dispatchAction({
					handler: "client",
					type: action,
					payload: action === "navigate_to_feature" ? {
						feature_id: item.feature_id,
						event_source: item.feature_id === "voice" ? "plus_onboarding" : null,
						...actionAnalytics
					} : {
						effort: "extended",
						fallback_effort: "standard",
						tooltip: item.tooltip_text != null ? {
							location: "composer-intelligence-button",
							text: item.tooltip_text
						} : null,
						...actionAnalytics
					}
				});
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: isDesktop ? 128 : 188,
			align: "center",
			justify: "center",
			gap: 0,
			clip: true
		}, /* @__PURE__ */ __dil.jsx(FeatureArtwork, {
			feature: item,
			isMobile,
			isDark
		})), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: isDesktop ? 92 : 101,
			gap: 1,
			padding: isDesktop ? {
				x: 4,
				top: 2,
				bottom: 2
			} : {
				x: 5,
				top: 4,
				bottom: 4
			},
			align: "start",
			background: {
				light: "#FFFFFF80",
				dark: "#21212180"
			},
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: isMobile ? "md" : "sm",
			weight: "medium",
			color: "primary",
			maxLines: isDesktop ? 1 : 2
		}, item.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			maxLines: isDesktop ? 3 : 2
		}, item.description))))))), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			color: "primary"
		}, state.title), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, state.benefit_rows.map((item) => item.feature_id != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			key: item.benefit_id,
			ariaLabel: item.title,
			width: "100%",
			align: "stretch",
			padding: {
				x: 2,
				y: 2
			},
			radius: "xl",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "navigate_to_feature",
				payload: {
					feature_id: item.feature_id,
					effort: item.feature_id === "work" ? "extended" : null,
					event_source: item.feature_id === "voice" ? "plus_onboarding" : null,
					...analytics(state, "plus_onboarding_benefit", item.feature_id)
				}
			})
		}, /* @__PURE__ */ __dil.jsx(BenefitContent, {
			item,
			clickable: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			key: item.benefit_id,
			width: "100%",
			padding: {
				x: 2,
				y: 2
			}
		}, /* @__PURE__ */ __dil.jsx(BenefitContent, {
			item,
			clickable: false
		})))));
	}
	function OnboardingFeatureCard(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("OnboardingFeatureCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 360
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedFeatures, { state });
	}

