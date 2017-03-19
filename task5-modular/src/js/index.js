var request = new XMLHttpRequest();
request.open('GET', '../sales.csv', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var csvData =request.responseText.split(";");
    var header = null;
   	var resultData = [];
   	// var finalD = {};

   // 	var headerProps = [city, name, ...]

    var dataArray = csvData.forEach(function(item, i) {
    	var dataObject = {};
    	var dataRow = item.split(",");
    	for (var data of dataRow) {
    		//resultData.push({test[data]});
    		resultData.push(data)
    		// header = (i === 0) ? : null;

    		//dataObject[headerProps[i]] = data;

    	}

    	// dataObject -> push to resultData

    });



  } else {
    console.error("Error");
  }
};

// [{"city ": "london", "date" : date, name : name },{"city ": "london"}]

// request.onerror = function() {
//   // There was a connection error of some sort
// };

request.send();
