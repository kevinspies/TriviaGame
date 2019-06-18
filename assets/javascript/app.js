var question1 = "Who played Fezzik in 1987 The Princess Bride?";
var question2 = "Which of the following players has a two handed backhand?";
var question3 = "Who led Ash and Pikachu to a healer in 2019 movie detective Pikachu?";

var answer1 = "Andre the Giant";
var answer2 = "Novak Djokovic";
var answer3 = "Bulbasaur";



//-----------------------------one question loop-------------------------------

var timeLeft = 20;

while (timeLeft > -1) {
    setInterval(function () {
        $("#timeremaining").text("Time Remaining: " + timeLeft);
        timeLeft--;
    }, 1000);
}

//-----------------------------one question loop-------------------------------




//if selects correct answer
    //correctAnswers++
    //display yayVideo
    //new question screen
//else
    //wrongAnswers++
    //display wahVideo
    //new question screen