//3. Create a lottery draw app. Add a big “DRAW” button which draws 5 random numbers from 1 - 50. Do an animation of 5 lottery balls rolling in screen after the draw.(2 hours)


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