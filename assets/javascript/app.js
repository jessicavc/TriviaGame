var number = 30;

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
    answerList: ["Jadzia Dax", "Benjamin Sisko", "Kira Nerys", "Deanna Troi"],
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
}];

$("#start").on("click", function () {

    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

    // Start timer countdown
    run();

    // Display questions 
    // Question 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );


    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function () {

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

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

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

