var request = new XMLHttpRequest();
request.open('GET', 'sales.csv', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var csvData =request.responseText.split(";");
    var header = csvData.shift().split(',');
   	var resultData = [];
  	

    var dummyData = csvData.map(function(item, i) {
      header;
      var dataObject = {};
    	var dataRow = item.split(",");

      for (var j = 0; j < dataRow.length; j++) {

        dataObject[header[0]] = new Date(dataRow[0]);
        dataObject[header[1]] = dataRow[1];
        dataObject[header[2]] = dataRow[2];
        dataObject[header[3]] = dataRow[3];
        dataObject[header[4]] = dataRow[4];
        dataObject[header[5]] = dataRow[5];
        dataObject[header[6]] = dataRow[6];
        dataObject[header[7]] = dataRow[7];
        dataObject[header[8]] = dataRow[8];
        dataObject[header[9]] = dataRow[9];
        dataObject[header[10]] = dataRow[10];
        dataObject[header[11]] = dataRow[11];

      }
      console.log(dataObject);

      return dataObject;

    	// dataObject -> push to resultData

    });

    console.log(resultData);

  } else {
    console.error("Error");
  }
};

// [{"city ": "london", "date" : date, name : name },{"city ": "london"}]

// request.onerror = function() {
//   // There was a connection error of some sort
// };

request.send();
