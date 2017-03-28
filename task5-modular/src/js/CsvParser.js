class CsvParser {
	constructor(csv) {
		this.csv = csv;
	}

	_getCsv() {
		this._csvRequest(this.csv).then( (response) => {
			const csvData =response.split(";");
			const header = csvData.shift().split(',');

			let resultData = csvData.map( (item) => {
				dataObject = {};
				let dataRow = item.split(",");

				for (let j = 0; j < dataRow.length; j++) {
					dataObject[header[j]] = dataRow[j];
				}
				return dataObject;
		    });

			const capitalizeWord = item => item.charAt(0).toUpperCase() + item.slice(1);

			resultData = resultData.map( (item) => {
				item['Transaction_date'] = new Date(item['Transaction_date']);
				item['Product'] = item['Product'];
				item['Price'] = parseFloat(item['Price']);
				item['Payment_Type'] = item['Payment_Type'];
				item['Name'] = capitalizeWord(item['Name']);
				item['City'] = capitalizeWord(item['City']);
				item['Country'] = item['Country'];
				item['Account_Created'] = new Date(item['Account_Created']);
				item['Last_Login'] = item['Last_Login'];
				item['Latitude'] = parseFloat(item['Latitude']).toFixed(4);
				item['Longitude'] = parseFloat(item['Longitude']).toFixed(4);

				return resultData;

			});

			console.log(resultData);

		}, function(error) {
		  console.error("Failed!", error);
		});
	}

	_csvRequest(url) {
		// Return a new promise.
		return new Promise(function(resolve, reject) {
		// Do the usual XHR stuff
			var req = new XMLHttpRequest();
			req.open('GET', url);

			req.onload = function() {
				// This is called even on 404 etc
				// so check the status
				if (req.status == 200) {
					// Resolve the promise with the response text
					resolve(req.response);
				}
				else {
					// Otherwise reject with the status text
					// which will hopefully be a meaningful error
					reject(Error(req.statusText));
				}
			};

			// Handle network errors
			req.onerror = function() {
				reject(Error("Network Error"));
			};

			// Make the request
			req.send();
		});
	};



}

export default CsvParser;
