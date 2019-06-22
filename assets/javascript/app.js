var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];
var set3 = ["what is 3 + 5?", "5", "1", "8", "spoon"];
var set4 = ["In what year did coldplay put out their first album?", "pick this one", "wrong", "also wrong", "circa 1440 A.D."];

var correctAnswers = ["Andre the Giant", "Novak Djokovic"];

var timeLeft = 20;
var timer = setInterval(tick, 1000);
var nextQuestion;
var yep = "<div id='image-holder'><img src= 'assets/images/check.png' width='400px'></div>";
var nope = "<div id='image-holder'><img src= 'assets/images/ex.jfif' width='400px'></div>";
var score = 0;

function gameOver() {
    $("#score").text("score: " + score + "/5");
    $("#timeremaining").text("");
    $("#question").text("");
    $(".answer").text("");
    $("#image-holder").html("<div id='image-holder'><img src= 'assets/images/gameover.jpg' width='400px'></div>");
    // setTimeout(repopulate(set1), 5000); why is the timeout not working?

}

function tick() {
    timeLeft--;
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        nextQuestion = setTimeout(repopulate(set3), 3000);
        $("#image-holder").html(nope);
        // alert("Too slow!");
        //next question
        //this could be problematic, how does tick know which question it is on?
    }

}
function repopulate(anySet) {
    //whenever a new question comes in.. i need to start ticking down again
    timeLeft = 20;
    timer = setInterval(tick, 1000);
    //remove wrong or right sign at the start of a new question
    $("#image-holder").html("<div id='image-holder'></div>");

    $("#question").text(anySet[0]);
    $("#answer1").text(anySet[1]);
    $("#answer2").text(anySet[2]);
    $("#answer3").text(anySet[3]);
    $("#answer4").text(anySet[4]);
}

function outOfTime(specificIndex) {
    if (timeLeft === 0) {
        console.log("whoops! all out of time!");
        //here i could hard check to see which question i'm on by using jquery to check
        nextQuestion = setTimeout(repopulate(specificIndex), 3000);
    }//okay i need to be able to see where i am in an array of questions so i can always call out of time
}//no matter where i am, so this means i need to be able to say repopulate next question
//do i need a game object then?

//i shouldn't need multiple repopulate functions now that i'm passing anySet as a parameter i think..
// function rePopulate2() {
//     timeLeft = 20;
//     timer = setInterval(tick, 1000);
//     $("#image-holder").html("<img src=");
//     $("#question").attr(set2[0]);
//     $("#answer1").text(set2[1]);
//     $("#answer2").text(set2[2]);
//     $("#answer3").text(set2[3]);
//     $("#answer4").text(set2[4]);
// }

function isCorrect(someAnswer) {
    if (correctAnswers.includes(someAnswer)) return true;
    else return false;
}

$(".answer").click(function () {
    // console.log(this.value);
    // var title = $(this).text;
    // alert(title);
    clearInterval(timer);
    //sooo event returns a DOM element... so we use dom methods? and kinda works like this
    //inside an event
    //wrong answers
    // console.log("no way!!");
    // console.log("i can also get text like this maybe.. let's find out! button text isss... " + $(".button").text() + "w0wz3rzLol0c0pt3r");
    //no that did not work, is that because jquery ltext() method doesn't work with buttons?
    //or something to do with ID? this is definitely important. 
    //ok.. so i just did not realize how useful jquery was
    var guess = event.target.textContent; //this represents the string of their guess
    console.log(typeof (guess) + " is the type of guess");//string, well that's good.

    //question 1 - the first repopulation of the 99th colony centurian 6
    if (guess === "green" || guess === "neon" || guess === "gold") {//then they guessed wrong
        nextQuestion = setTimeout(repopulate(set1), 3000);
        $("#image-holder").html(nope);//wow, this felt good to do properly lol
        console.log(nextQuestion + " is the next question and will appear in 3 seconds!");
    }
    if (guess === "blue") {//correct guess
        score++;
        nextQuestion = setTimeout(repopulate(set1), 3000);
        $("#image-holder").html(yep);//yep image
    }
    if (timeLeft === 0) {
        nextQuestion = setTimeout(repopulate(set1), 3000);
        $("#image-holder").html(nope);//why isn't image showing up?
        console.log("pssssst");//because order matters------------------------------------------
    }

    //question 2
    if (guess === "Mike Wazowski" || guess === "Jennifer Lopez" || guess === "Michael Cera") {
        nextQuestion = setTimeout(repopulate(set2), 3000);
        $("#image-holder").html(nope);
    }
    //else if correct, show right ninja, repopulate, etc, etc 
    if (guess === "Andre the Giant") {//correct guess
        score++;
        nextQuestion = setTimeout(repopulate(set2), 3000);
        $("#image-holder").html(yep);//yep image
    }
    if (timeLeft === 0) {
        nextQuestion = setTimeout(repopulate(set2), 3000);
        $("#image-holder").html(nope);//why isn't image showing up?
        console.log("pssssst");//because order matters------------------------------------------
    }
    //3
    if (guess === "Roger Federer" || guess === "Stan Wawrinka" || guess === "Dominic Thiem") {
        nextQuestion = setTimeout(repopulate(set3), 3000);
        $("#image-holder").html(nope);
    }
    if (guess === "Novak Djokovic") {//correct guess
        score++;
        nextQuestion = setTimeout(repopulate(set3), 3000);
        $("#image-holder").html(yep);//yep image
    }
    if (timeLeft === 0) {
        nextQuestion = setTimeout(repopulate(set3), 3000);
        $("#image-holder").html(nope);
        console.log("pssssst");
    }
    //4
    if (guess === set3[1] || guess === set3[2] || guess === set3[4]) {//better practice, also i should not talk about good practice right now
        nextQuestion = setTimeout(repopulate(set4), 3000);//superflous
        $("#image-holder").html(nope);
    }
    if (guess === "8") {//correct guess
        score++;
        nextQuestion = setTimeout(repopulate(set4), 3000);
        $("#image-holder").html(yep);//yep image
    }
    //5
    if (guess === set4[2] || guess === set4[3] || guess === set4[4]) {//puke
        gameOver();
        // nextQuestion = setTimeout(repopulate(set5), 3000);
        // $("#image-holder").html(nope);
    }
    if (guess === "pick this one") {//correct guess
        score++;
        gameOver();
        // nextQuestion = setTimeout(repopulate(set5), 3000);
        // $("#image-holder").html(yep);//yep image
    }

});
