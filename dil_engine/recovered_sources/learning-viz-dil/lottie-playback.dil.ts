
	function positionAt(playback, now, duration) {
		const elapsed = playback.startedAt === null ? 0 : (now - playback.startedAt) / 1e3;
		return Math.min(duration, playback.position + Math.max(0, elapsed));
	}
	function useLottiePlayback(source, animated) {
		const duration = (Number(source.op) - Number(source.ip)) / Number(source.fr);
		const [playback, setPlayback] = DIL.useState(() => ({
			position: 0,
			startedAt: animated ? Date.now() : null
		}));
		const now = DIL.useNow(playback.startedAt !== null);
		const playing = playback.startedAt !== null && positionAt(playback, now, duration) < duration;
		DIL.useEffect(() => {
			if (playback.startedAt !== null && !playing) setPlayback({
				position: duration,
				startedAt: null
			});
		}, [
			playing,
			playback.startedAt,
			duration
		]);
		const currentTime = DIL.useMemo(() => positionAt(playback, Date.now(), duration), [source, playback]);
		const toggle = () => {
			const timestamp = Date.now();
			setPlayback((previous) => {
				const position = positionAt(previous, timestamp, duration);
				return previous.startedAt !== null && position < duration ? {
					position,
					startedAt: null
				} : {
					position: position === duration ? 0 : position,
					startedAt: timestamp
				};
			});
		};
		return {
			playing,
			currentTime,
			toggle
		};
	}

