export function explorerToFolder(node, { duration, x, y, easing }) {
	return {
		duration,
		css: (t) => {
			const eased = easing(t)
			const i = 1 - eased

			return `
					transform: translate(${x * i}px, ${y * i}px);
					opacity: ${eased};
					`
		},
	}
}
