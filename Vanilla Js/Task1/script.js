// 1. Using array methods only, reverse the order of words in a sentence from string variable with 1 line of code. 

var str = "Hi My Name is Binu Tomy. I am an Awesome Front end Developer!";


console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
str.split('').reverse().join('');

str.split(' ',3); //splits the first three words >> hi my name
str.join(' hello '); //adds hello after each word  