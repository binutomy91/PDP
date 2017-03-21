class CsvParser {
	constructor(csv) {
		this.csv = csv;
	}

	_getCsv() {
		this._csvRequest(this.csv).then(function(response) {
			const csvData =response.split(";");
			const header = csvData.shift().split(',');

			const resultData = csvData.map(function(item, i) {
	      var dataObject = {};
	    	var dataRow = item.split(",");
	      for (var j = 0; j < dataRow.length; j++) {
	        dataObject[header[j]] = dataRow[j];
	      }
	      return dataObject;
	    });

			let finalData = resultData.forEach( function functionName(item,index) {
				item['Transaction_date'] = new Date(item['Transaction_date']);
				item['Product'] = item['Product'];
				item['Price'] = parseInt(item['Price']);
				item['Payment_Type'] = item['Payment_Type'];
				item['Name'] = item['Name'];
				item['City'] = item['City'];
				item['Country'] = item['Country'];
				item['Account_Created'] = new Date(item['Account_Created']);
				item['Last_Login'] = item['Last_Login'];
				item['Latitude'] = item['Latitude'];
				item['Longitude'] = item['Longitude'];

			});
			console.log(finalData);

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
