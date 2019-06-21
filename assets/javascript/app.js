var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];

var correctAnswers = ["Andre the Giant", "Novak Djokovic"];

//-------------------------------one question loop-----------------------------------
var timeLeft = 20;
var timer = setInterval(tick, 1000);
var nextQuestion;



$(".answer").click(function () {
    // console.log(this.value);
    // var title = $(this).text;
    // alert(title);
    clearInterval(timer);





    //sooo event returns a DOM element... so we use dom methods? and kinda works like this
    //inside an event
    console.log(event.target.textContent);

    if (event.target.textContent === "green" || event.target.textContent === "black" || event.target.textContent === "white") {
        console.log("no way!!");
        console.log("i can also get text like this maybe.. let's find out! button text isss... " + $(".button").text() + "w0wz3rzLol0c0pt3r");
        //no that did not work, is that because jquery ltext() method doesn't work with buttons?
        //or something to do with ID? this is definitely important. 
        $("#image-holder").html("<img src=" + "assets/images/ninjaWrong.png" + " width='400px'>");
        nextQuestion = setTimeout(rePopulate, 2000);
    }
    //else if correct, show right ninja, repopulate, etc, etc 


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
function rePopulate() {
    //remove wrong ninja here at the start of a new question
    $("#question").attr(set1[0]);
    $("#answer1").text(set1[1]);
    $("#answer2").text(set1[2]);
    $("#answer3").text(set1[3]);
    $("#answer4").text(set1[4]);
}

function isCorrect(someAnswer) {
    if (correctAnswers.includes(someAnswer)) return true;
    else return false;
}
