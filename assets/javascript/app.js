var timer = 60;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Questions array
var questions = [{

    question: "Spock is famous for his Vulcan logic. His father is a Vulcan Embassador. What species is Spocks mother?",
    answerList: ["Klingon", "Romulan", "Human", "Vulcan"],
    answer: 2
}, {
    question: "In Star Trek: Deep Space Nine, Worf marries one of his crew mates. Who does he marry?",
    answerList: ["Jadzia Dax", "Lwaxana Troi", "Kira Nerys", "Deanna Troi"],
    answer: 0
}, {
    question: "In Star Trek: The Next Generation, Captain Picard gets assimilated by the Borg. What is his Borg designation?",
    answerList: ["Seven of Nine", "Locutos of Borg", "Hugh of Borg", "Picard of Borg"],
    answer: 1
}, {
    question: "In Star Trek IV: The Voyage Home, the crew of the Enterprise travel back in time to retrieve an animal to help them communicate with an alien probe. Which animal did they retrieve?",
    answerList: ["Woolly Mammoth", "Blue Nose Dolphin", "Tiger Shark", "Humped Back Whale"],
    answer: 3
}, {
    question: "Neelix helps guide Voyager through the Delta Quadrant. Neelix wears many hats aboard Voyager, including a Chef's hat. What other role does Neelix assume?",
    answerList: ["Security Officer", "Chief Medical Officer", "Morale Officer", "None"],
    answer: 2

}, {
    question: "Nichelle Nichols plays Lt. Nyota Uhara in The Original Series and the films that follow. Nichols nearly left the show in the 1960's but was convinced to stay because of the social impacts Uhara had as a female, African American bridge officer. Who convinced Nichols to stay?",
    answerList: ["Gene Roddenberry", "Martin Luther King, Jr", "Malcolm X", "Leonard Nemoy"],
    answer: 1
}, {
    question: "Which famous scientist appeared as himself in Star Trek: The Next Generation?",
    answerList: ["Stephen Hawking", "Noam Chomsky", "Steven Weinberg", "Wernher von Braun"],
    answer: 0

}, {
    question: "Data is a unique android with a strong desire to better understand human nature. Data decides to have a child he names Lal. He does the unthinkable and allows Lal to choose its own gender and appearance. What does Lal choose?",
    answerList: ["Human Female", "Klingon Male", "Klingon Female", "Betazoid Female"],
    answer: 0

}, {
    question: "Starfleet Academy trains new cadets with a simulation of a no-win scenario called: (HINT: Stacy gave us the answer in class)",
    answerList: ["Darmok and Jalad at Tanagra", "Q's Paradise", "Tomagachi Maru", "Kobiyashi Maru"],
    answer: 3
}, {

    question: "Majel Barrett, married to Star Trek creator Gene Roddenberry, is appropriately known as the Mother of Star Trek. She has played a variety of characters throughout the Star Trek universe, including Nurse Chapel and Lwaxana Troi. What was her first Trek appearance? (HINT: Currently played by Rebecca Romijn on Star Trek: Discovery)",
    answerList: ["Nurse Chapel", "Computer", "Number One", "Doctor Pulaski"],
    answer: 2
}];

$("#start").on("click", function () {


    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#timer").html("<h3>Time Remaining: 60 Seconds</h3>" + "<br>");

    // Start timer countdown
    run();


    // Question 1
    $("#question1").html("<p>" + questions[0].question + "</p>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#question2").html("<p>" + questions[1].question + "</p>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<p>" + questions[2].question + "</p>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    $("#question4").html("<p>" + questions[3].question + "</p>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5
    $("#question5").html("<p>" + questions[4].question + "</p>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6
    $("#question6").html("<p>" + questions[5].question + "</p>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7
    $("#question7").html("<p>" + questions[6].question + "</p>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    // Question 8
    $("#question8").html("<p>" + questions[7].question + "</p>");
    $("#answer8").html("<input type='radio' name='answer8' value='0'>" + "<label>" + questions[7].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer8' value='1'>" + "<label>" + questions[7].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer8' value='2'>" + "<label>" + questions[7].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer8' value='3'>" + "<label>" + questions[7].answerList[3] + "</label><br><br>"
    );
    // Question 9
    $("#question9").html("<p>" + questions[8].question + "</p>");
    $("#answer9").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[8].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer9' value='1'>" + "<label>" + questions[8].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer9' value='3'>" + "<label>" + questions[8].answerList[3] + "</label><br><br>"
    );
    // Question 10
    $("#question10").html("<p>" + questions[9].question + "</p>");
    $("#answer10").html("<input type='radio' name='answer10' value='0'>" + "<label>" + questions[9].answerList[0] + "</label><br>"
        + "<input type='radio' name='answer10' value='1'>" + "<label>" + questions[9].answerList[1] + "</label><br>"
        + "<input type='radio' name='answer10' value='2'>" + "<label>" + questions[9].answerList[2] + "</label><br>"
        + "<input type='radio' name='answer10' value='3'>" + "<label>" + questions[9].answerList[3] + "</label><br><br>"
    );


    // Submit button
    $("#submit").html("<button id='submit' class='button'>Submit</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#submit").on("click", function () {

        // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();

    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease time by one.
    timer--;

    //  Show the number in the #time tag
    $("#timer").html("<h3>Time Remaining: " + timer + " Seconds</h3>" + "<br>");

    if (timer === 0) {

        // Run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered 
function displayResults() {

    $("#timer").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#question8").hide();
    $("#answer8").hide();
    $("#question9").hide();
    $("#answer9").hide();
    $("#question10").hide();
    $("#answer10").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>Time has elapsed. Let's see how you did: </h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, incorrect, and unanswered 
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();
    var userAnswer8 = $("input[name='answer8']:checked").val();
    var userAnswer9 = $("input[name='answer9']:checked").val();
    var userAnswer10 = $("input[name='answer10']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 8
    if (userAnswer8 === undefined) {

        unanswered++;
    }
    else if (userAnswer8 == questions[7].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 9
    if (userAnswer9 === undefined) {

        unanswered++;
    }
    else if (userAnswer9 == questions[8].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 10
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer10 == questions[9].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }
}