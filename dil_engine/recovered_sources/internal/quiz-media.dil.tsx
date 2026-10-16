
/** Shared browser-download recovery. Image search remains owned by the server. */
	function QuizMedia({ image, loading, height, alt, identity = "", retry = true, radius = "lg", background = "surface-secondary", retries, onRetryChange, onLoad, onError }) {
		const sourceKey = JSON.stringify([
			identity,
			image?.content_url ?? "",
			image?.thumbnail_url ?? ""
		]);
		const initialDownload = {
			key: sourceKey,
			status: "pending",
			attempt: 0
		};
		const [download, setLocalDownload] = DIL.useState(initialDownload);
		const persistedRetries = retries !== void 0 && onRetryChange !== void 0;
		const active = persistedRetries ? retries[sourceKey] ?? initialDownload : download.key === sourceKey ? download : initialDownload;
		function setDownload(next) {
			if (persistedRetries) onRetryChange(sourceKey, next);
			else setLocalDownload(next);
		}
		const attemptKey = `${sourceKey}:${active.attempt}`;
		const latestAttempt = DIL.useRef(attemptKey);
		latestAttempt.current = attemptKey;
		const now = DIL.useNow(retry && hasImageSource(image) && (active.status === "pending" || active.status === "failed"));
		const nextTick = DIL.useRef({
			key: sourceKey,
			at: now
		});
		if (nextTick.current.key !== sourceKey) nextTick.current = {
			key: sourceKey,
			at: now
		};
		DIL.useEffect(() => {
			if (!retry || !hasImageSource(image) || active.status === "loaded" || active.status === "stopped" || now < nextTick.current.at) return;
			nextTick.current = {
				key: sourceKey,
				at: now + 15e3
			};
			if (active.deadline === void 0) setDownload({
				...active,
				deadline: now + 18e4
			});
			else if (now >= active.deadline) setDownload({
				...active,
				status: "stopped"
			});
			else if (active.status === "failed") setDownload({
				...active,
				status: "pending",
				attempt: active.attempt + 1
			});
		}, [
			active.key,
			active.status,
			active.attempt,
			active.deadline,
			now,
			retry,
			persistedRetries
		]);
		const fallback = /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "images",
			color: "secondary"
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			radius,
			clip: true,
			background
		}, hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("search-image", {
			key: attemptKey,
			searchImage: image,
			upgradeToFullRes: true,
			alt,
			width: "100%",
			height,
			fit: "cover",
			radius: "none",
			fallback,
			onLoad: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: "loaded"
				});
				onLoad?.();
			},
			onError: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: retry && active.status !== "stopped" ? "failed" : "stopped"
				});
				onError?.();
			}
		}) : loading ? /* @__PURE__ */ __dil.jsx("loading-block", {
			height,
			width: "100%",
			label: alt
		}) : fallback);
	}



/* ---- merged ---- */

/** Shared browser-download recovery. Image search remains owned by the server. */
	function QuizMedia({ image, loading, height, alt, identity = "", retry = true, radius = "lg", background = "surface-secondary", retries, onRetryChange, onLoad, onError }) {
		const sourceKey = JSON.stringify([
			identity,
			image?.content_url ?? "",
			image?.thumbnail_url ?? ""
		]);
		const initialDownload = {
			key: sourceKey,
			status: "pending",
			attempt: 0
		};
		const [download, setLocalDownload] = DIL.useState(initialDownload);
		const persistedRetries = retries !== void 0 && onRetryChange !== void 0;
		const active = persistedRetries ? retries[sourceKey] ?? initialDownload : download.key === sourceKey ? download : initialDownload;
		function setDownload(next) {
			if (persistedRetries) onRetryChange(sourceKey, next);
			else setLocalDownload(next);
		}
		const attemptKey = `${sourceKey}:${active.attempt}`;
		const latestAttempt = DIL.useRef(attemptKey);
		latestAttempt.current = attemptKey;
		const now = DIL.useNow(retry && hasImageSource(image) && (active.status === "pending" || active.status === "failed"));
		const nextTick = DIL.useRef({
			key: sourceKey,
			at: now
		});
		if (nextTick.current.key !== sourceKey) nextTick.current = {
			key: sourceKey,
			at: now
		};
		DIL.useEffect(() => {
			if (!retry || !hasImageSource(image) || active.status === "loaded" || active.status === "stopped" || now < nextTick.current.at) return;
			nextTick.current = {
				key: sourceKey,
				at: now + 15e3
			};
			if (active.deadline === void 0) setDownload({
				...active,
				deadline: now + 18e4
			});
			else if (now >= active.deadline) setDownload({
				...active,
				status: "stopped"
			});
			else if (active.status === "failed") setDownload({
				...active,
				status: "pending",
				attempt: active.attempt + 1
			});
		}, [
			active.key,
			active.status,
			active.attempt,
			active.deadline,
			now,
			retry,
			persistedRetries
		]);
		const fallback = /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "images",
			color: "secondary"
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			radius,
			clip: true,
			background
		}, hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("search-image", {
			key: attemptKey,
			searchImage: image,
			upgradeToFullRes: true,
			alt,
			width: "100%",
			height,
			fit: "cover",
			radius: "none",
			fallback,
			onLoad: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: "loaded"
				});
				onLoad?.();
			},
			onError: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: retry && active.status !== "stopped" ? "failed" : "stopped"
				});
				onError?.();
			}
		}) : loading ? /* @__PURE__ */ __dil.jsx("loading-block", {
			height,
			width: "100%",
			label: alt
		}) : fallback);
	}

