//put into array?
var question1 = "Who played Fezzik in 1987 The Princess Bride?";
var question2 = "Which of the following players has a two handed backhand?";
var question3 = "";

var answer1 = "Andre the Giant";
var answer2 = "Novak Djokovic";
var answer3 = "";



//-----------------------------one question loop-------------------------------
// $("#question").text(have some smart adder in here that goes through the questions? array?)

var timeLeft = 20;

setInterval(function () {
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    timeLeft--;
}, 1000);


$(".class").click(function () {
    if (this.value === 1) {//correct
        console.log("correct!");
    }
});

// if($(".question").on("click"))
//if wrong answer or time up
    //wrongAnswers++
    //display wahVideo
    //new question screen



//-----------------------------one question loop-------------------------------




//if selects correct answer
    //correctAnswers++
    //display yayVideo
    //new question screen
//else
    //wrongAnswers++
    //display wahVideo
    //new question screen