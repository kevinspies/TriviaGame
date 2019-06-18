
var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];
var set3 = ["", "", "", ""];


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

//make a function that loads in a new set - of a question and 4 possible answers
//so i'll probably wanna save each set in an array, likely


//if selects correct answer
    //correctAnswers++
    //display yayVideo
    //new question screen
//else
    //wrongAnswers++
    //display wahVideo
    //new question screen