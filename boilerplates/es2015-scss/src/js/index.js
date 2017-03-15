import LotteryMachine from "./LotteryMachine.js";

function init() {
	const currentDraw = new LotteryMachine({
		min: 1,
		max: 50,
		total: 6
	});

	currentDraw.drawNumbers();

}

window.onload = init;
