var set1 = ["Who played Fezzik in 1987 The Princess Bride?", "Andre the Giant", "Mike Wazowski", "Jennifer Lopez", "Michael Cera"];
var set2 = ["Which of the following players has a two handed backhand?", "Roger Federer", "Novak Djokovic", "Stan Wawrinka", "Dominic Thiem"];

var correctAnswers = ["Andre the Giant", "Novak Djokovic"];

var timeLeft = 20;
var timer = setInterval(tick, 1000);
var nextQuestion;


function tick() {
    timeLeft--;
    $("#timeremaining").text("Time Remaining: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(timer);
        // alert("Too slow!");
        //next question
        //this could be problematic, how does tick know which question it is on?
    }
}
function repopulate(anySet) {
    //whenever a new question comes in.. i need to start ticking down again
    timeLeft = 20;
    timer = setInterval(tick, 1000);
    //remove wrong ninja here at the start of a new question
    $("#image-holder").html("<img src=");

    $("#question").attr(anySet[0]);
    $("#answer1").text(anySet[1]);
    $("#answer2").text(anySet[2]);
    $("#answer3").text(anySet[3]);
    $("#answer4").text(anySet[4]);
}

function outOfTime(specificIndex) {
    if (timeLeft === 0) {
        console.log("whoops! all out of time!");
        //here i could hard check to see which question i'm on by using jquery to check
        nextQuestion = setTimeout(repopulate(specificIndex), 2000);
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
    console.log(typeof (words));//string, well that's good.

    //question 1
    if (guess === "green" || guess === "black" || guess === "white") {//then they guessed wrong
        console.log(guess + " is incorrect!");
        $("#image-holder").html("<img src=" + "assets/images/nope.png" + " width='400px'>");
        nextQuestion = setTimeout(repopulate(set1), 2000);
    }
    else if (guess === "yellow") {//correct guess
        console.log(guess + " is correct!");
        $("#image-holder").html("<img src=" + "assets/images/yep.png" + " width='400px'>");//yep image
        nextQuestion = setTimeout(repopulate(set1), 2000);
    }
    else if (timeLeft === 0) {
        console.log("whoops! all out of time! and in a proper question 1 logic?!");
        nextQuestion = setTimeout(repopulate(set1), 2000);
    }

    //question 2
    if (guess === "Mike Wazowski" || guess === "Jennifer Lopez" || guess === "Michael Cera") {
        $("#image-holder").html("<img src=" + "assets/images/zapdos.jpg" + " width='400px'>");
        nextQuestion = setTimeout(repopulate2, 2000);
    }
    //else if correct, show right ninja, repopulate, etc, etc 


});
