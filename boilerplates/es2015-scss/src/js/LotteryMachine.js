class LotteryMachine {

	constructor(settings) {
		Object.assign(this, settings);
	}

	drawNumbers(){
		let numbers = [];

		for (var i = 0; i < this.total ; i++) {
			const randomNumber =  Math.floor(Math.random() * (this.max - this.min) + this.min);
			let newNumber = null;
			console.log("randomNumber Generated" + randomNumber);
			do {
				console.log("While loop "+ randomNumber);

				newNumber = randomNumber;
				numbers.push(randomNumber);
			} while (!numbers.includes(newNumber));

		}

		return numbers
	}

}

export default LotteryMachine;
