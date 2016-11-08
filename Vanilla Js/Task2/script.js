// 2. Create a function that finds email addresses in a piece a string passed to it and returns an array with the results. (15 mins)


var text = 'binu_tomy@hotmail.com, rennnz@gmail.com, binu.tomy@miceanddice.com, hello this is not email';

function extractEmails ( text ){
	return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
    
var emails = extractEmails(text);

$.each(emails, function(index, email){
     console.log(email);
  });