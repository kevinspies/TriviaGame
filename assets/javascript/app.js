var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];

var correctAnswers = ["Andre the Giant", "Novak Djokovic"];

//-------------------------------one question loop-----------------------------------
var timeLeft = 5;
var timer = setInterval(tick, 1000);



$(".answer").click(function () {
    $("#image-holder").html("<img src=" + "assets/images/ninjaWrong.png" + " width='400px'>");
    setTimeout(rePopulate(set1), 2000);
});

//-----------------------------end of one question loop--------------------------------

//------------------------------------functions----------------------------------------
function tick() {
    timeLeft--;
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        alert("Too slow!");
    }
}
function rePopulate(someArray) {
    $("#question").attr(someArray[0]);
    $("#answer1").text(someArray[1]);
    $("#answer2").text(someArray[2]);
    $("#answer3").text(someArray[3]);
    $("#answer4").text(someArray[4]);
}

function isCorrect(someAnswer) {
    if (correctAnswers.includes(someAnswer)) return true;
    else return false;
}
