class LotteryMachine {

	constructor(settings) {
		Object.assign(this, settings);
	}

	drawNumbers() {
		let numbers = [];

		for (var i = 0; i < this.total ; i++) {
			const randomNumber =  Math.floor(Math.random() * (this.max) + this.min);
			do {
				numbers.push(randomNumber);
			} while (!numbers.includes(randomNumber));

		}

		return numbers
	}

}

export default LotteryMachine;
