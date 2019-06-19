
var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];


//-----------------------------one question loop-------------------------------

var timeLeft = 20;

setInterval(function () {
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    timeLeft--;
}, 1000);

console.log("hey there");

$("#answer1").on("click", console.log("click detected"));//not working?

$(".answer").click(function () {//not working???
    //console.log(this.value);
    console.log("hello there");
    if (this.value === set1.correct) {//correct
        console.log("correct!");
    }
});




//-----------------------------one question loop-------------------------------

//make a function that loads in a new set - of a question and 4 possible answers

function rePopulate(someArray) {
    $("#question").text(someArray[0]);
    $("#answer1").text(someArray[1]);
    $("#answer2").text(someArray[2]);
    $("#answer3").text(someArray[3]);
    $("#answer4").text(someArray[4]);
}
