class CsvParser {
	constructor(csv) {
		this.csv = csv;
	}

	var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

	  if (/* everything turned out fine */) {
	    resolve("Stuff worked!");
	  }
	  else {
	    reject(Error("It broke"));
	  }
	});


}

export default CsvParser;
