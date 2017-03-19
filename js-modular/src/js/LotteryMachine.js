class LotteryMachine {

	constructor(settings) {
		Object.assign(this, settings);
	}

	drawNumbers() {
		let numbers = [];

		numbers.map( (index.arr) => {
			let newNumber = 0;
			do {
			const randomNumber =  Math.floor(Math.random() * (this.max) + this.min);
			} while (numbers.includes(randomNumber));
			numbers.push(randomNumber);
			arr[i] = newNumber
		});

		// for (var i = 0; i < this.total ; i++) {
			
		// }

		return numbers
	}

}

export default LotteryMachine;
