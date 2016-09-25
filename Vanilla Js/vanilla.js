// // One
// var str = "Hi My Name is Binu Tomy. I am an Awesome Front end Developer!";
// 	console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
// str.split('').reverse().join('');

// //str.split(' ',3); //splits the first three words >> hi my name
// //str.join(' hello '); //adds hello after each word  

// // Two
// var text = 'binu_tomy@hotmail.com, rennnz@gmail.com, binu.tomy@miceanddice.com, hello this is not email';

// function extractEmails ( text ){
// 	return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }
    
// var emails = extractEmails(text);

// $.each(emails, function(index, email){
//      console.log(email);
//   });

// // Three


function randomNumber(){
	return Math.floor((Math.random() * 51));
};

$(document).ready(
	$( ".draw" ).click(function() {
		var numbers  = $('.wrapper div');
		$(numbers).addClass('animation');

		for (var i = 0; i <= 4; i++) {
		    var drawnumber = numbers[i];
		    var test = randomNumber();
		    $(drawnumber).text(test);

		}
	}
));