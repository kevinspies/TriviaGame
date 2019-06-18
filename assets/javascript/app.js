
var set1 = { question: "Who played Fezzik in 1987 The Princess Bride?", correct: "Andre the Giant", wrong1: "Mike Wazowski", wrong2: "Jennifer Lopez", wrong3: "Michael Cera" };
var set2 = { question: "Which of the following players has a two handed backhand?", wrong1: "Roger Federer", correct: "Novak Djokovic", wrong2: "Stan Wawrinka", wrong3: "Dominic Thiem" };


//-----------------------------one question loop-------------------------------
// $("#question").text(have some smart adder in here that goes through the questions? array?)

var timeLeft = 20;

setInterval(function () {
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    timeLeft--;
}, 1000);


$(".question").click(function () {
    console.log(this.value);
    if (this.value === set1.correct) {//correct
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

function loadSet1() {
    $("#question").text(set1.question);
    $("#answer1").text(set1.correct);
    $("#answer2").text(set1.wrong1);
    $("#answer3").text(set1.wrong2);
    $("#answer4").text(set1.wrong3);
}
function loadSet2() {
    $("#question").text(set2.question);
    $("#question").text(set2.wrong1);
    $("#question").text(set1.correct);
    $("#question").text(set1.wrong2);
    $("#question").text(set1.wrong3);
}

loadSet1();
//if selects correct answer
    //correctAnswers++
    //display yayVideo
    //new question screen
//else
    //wrongAnswers++
    //display wahVideo
    //new question screen