import React from "react";

export const useDrag = () => {
	const [clicked, setClicked] = React.useState(false);
	const [dragging, setDragging] = React.useState(false);
	const position = React.useRef(0);

	const dragStart = React.useCallback((ev: React.MouseEvent) => {
		position.current = ev.clientX;
		setClicked(true);
	}, []);

	const dragStop = React.useCallback(
		() =>
			window.requestAnimationFrame(() => {
				setDragging(false);
				setClicked(false);
			}),
		[]
	);

	const dragMove = (ev: React.MouseEvent, cb: (posDif: number) => void) => {
		const newDiff = position.current - ev.clientX;

		const movedEnough = Math.abs(newDiff) > 5;

		if (clicked && movedEnough) {
			setDragging(true);
		}

		if (dragging && movedEnough) {
			position.current = ev.clientX;
			cb(newDiff);
		}
	};

	return {
		dragStart,
		dragStop,
		dragMove,
		dragging,
		position,
		setDragging
	};
}
