function RockPaperScissors (){ 

    var options = ["rock", "scissors", "paper"];
    var computerChoice = options[ Math.floor(Math.random() * 3)];
    var playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

    var results = {
        'scissors':{'paper':   "you win!",   'rock':    'you lose...'},
        'rock':    {'paper':   'you lose...','scissors':'you win!' },
        'paper':   {'scissors':'you lose...','rock':    'you win!'}
    }
    if(playerChoice == computerChoice){
        alert("It's a tie!");
    }else{
        alert(results[playerChoice][computerChoice]);
    }  
};

RockPaperScissors();
