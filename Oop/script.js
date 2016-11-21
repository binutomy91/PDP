// function RockPaperScissors (){ 

//     var options = ["rock", "scissors", "paper"];
//     var computerChoice = options[ Math.floor(Math.random() * 3)];
//     alert('Computer Chooses ' + computerChoice);
//     var playerChoice = document.getElementById("playerChoice").value;

//     var output = document.getElementById('output');

//     var results = {
//         'scissors':{'paper':   "you win!",   'rock':    'you lose...'},
//         'rock':    {'paper':   'you lose...','scissors':'you win!' },
//         'paper':   {'scissors':'you lose...','rock':    'you win!'}
//     }
//     if(playerChoice == computerChoice){
//         alert("It's a tie!");
//     }else{
//         output.innerHTML = results[playerChoice][computerChoice];
//     }

        //return false;  

// };


function Choice(choice){
  this.choice = choice;

  this.getChoice = function(){
    return this.choice;
  }

  this.canBeat = function(obj){
    var beat = [];
    this.beat.push(obj);
  }

}


var userChoice = new Choice('Rock');
userChoice.getChoice();


var computerChoice = new Choice('paper');
computerChoice.getChoice();


//http://stackoverflow.com/questions/21796143/how-to-decide-a-winner-in-rock-paper-scissors


// function RockPaperScissors (){ 

//     var choices = ["rock","paper","scissors"];
//     var computerChoice = choices[ Math.floor(Math.random() * 3)];
//     alert('Computer Chooses ' + computerChoice);
//     var playerChoice = document.getElementById("playerChoice").value;

//     var map = {};

//     choices.forEach(function(choice, i) {
//         map[choice] = {};
//         for (var j = 0, half = (choices.length-1)/2; j < choices.length; j++) {
//             var opposition = (i+j)%choices.length
//             if (!j)
//                 map[choice][choice] = "Was a tie"
//             else if (j <= half)
//                 map[choice][choices[opposition]] = choices[opposition] + " wins"
//             else
//                 map[choice][choices[opposition]] = choice + " wins"
//         }
//     })

//     function compare(choice1, choice2) {
//         return (map[choice1] || {})[choice2] || "Invalid choice";
//         alert((map[choice1] || {})[choice2] || "Invalid choice");
//     }

// document.body.appendChild(document.createTextNode(compare(playerChoice,computerChoice)));

// };