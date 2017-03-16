var request = new XMLHttpRequest();

request.open('POST', 'https://fishshop.attest.tech/compatibility');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};
let headers =["header1", "header1", "header3"]


'london, ryan, today',
'london, ryan, today'
'london, ryan, today'
'london, ryan, today'
'london, ryan, today'


function checkPalindrom(string) {
	const reverse = string.split('').reverse().join('');
	return reverse === string;
}

let ages = [12, 24, 5, 7, 35];

let oldEnough = ages.findIndex(age => age > 18);



let header = data.shift();


let header = data[0];
data.shift();

let drawnNumber = Array(5).map(() => {

	// generate
	// check

	return theRandom;
});



array.unshift(...myArray);

var body = {
  'fish': [
    'american_crayfish',
    'coelocanth'
  ]
};

request.send(JSON.stringify(body));