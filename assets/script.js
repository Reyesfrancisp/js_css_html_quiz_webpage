
// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quiz = {

    //object quizQuestions as an array of objects
    //each object in the array has a question and option
    //
    quizQuestions:
        [
            { //quiz question information in blue brackets
                //first question
                question: "This is the first question",

                options: [
                    {
                        answer: "This is the first answer to the first question",
                        score: true
                    },

                    {
                        answer: "This is the second answer to the first question",
                        score: false
                    },

                    {
                        answer: "This is the third answer to the first question",
                        score: false
                    },

                    {
                        answer: "This is the fourth answer to the first question",
                        score: false
                    }
                ]
            },

            { //second question
                question: "This is the second question",

                options: [
                    {
                        answer: "This is the first answer to the second question",
                        score: false
                    },

                    {
                        answer: "This is the second answer to the second question",
                        score: true
                    },

                    {
                        answer: "This is the third answer to the second question",
                        score: false
                    },

                    {
                        answer: "This is the fourth answer to the second question",
                        score: false
                    }
                ]
            },

            { //third question
                question: "This is the third question",

                options: [{
                    answer: "This is the first answer to the third question",
                    score: false
                },

                {
                    answer: "This is the second answer to the third question",
                    score: false
                },

                {
                    answer: "This is the third answer to the third question",
                    score: true
                },

                {
                    answer: "This is the fourth answer to the third question",
                    score: false
                }
                ]
            }

            ,

            { //quiz question information in blue
                question: "This is the fourth question",

                options: [
                    {
                        answer: "This is the first answer to the fourth question",
                        score: false
                    },

                    {
                        answer: "This is the second answer to the fourth question",
                        score: false
                    },

                    {
                        answer: "This is the third answer to the fourth question",
                        score: false
                    },

                    {
                        answer: "This is the fourth answer to the fourth question",
                        score: true
                    }
                ]

            }
        ],

    //how would I read this info from a file?
    //get the total amount of questions at the top?
    //read line by line as a string, if there's a linebreak start the input for the style of a question
    //the start is a question, followed by the answers, the answers are grouped in pairs
    //the first line of the options pair is the answer then the second line is if its true or not

    // quizQuestions[0].question access the question

    //quizQuestions[0].options[0].answer access the first option

    // example of loop

    // think about how this would run in the page, you want to call a function after each selection of an answer then moves it on the next question

    // display if they got the questions correct or not

    // how would I randomize the questions? The answers in the questions? Make the quiz different each time.

    //printQuestions based on the question number to the file

    //work in progress

    //function to create the questions
    randomQuizQuestionGenerator() {
        var questionCheck = [];
        var randomQuestionArray = [];
        //create random questions
        //randomizes the order 
        for (var questionCount = 0; questionCount < this.quizQuestions.length; questionCount++) {
            var randomIndex = Math.floor(Math.random() * this.quizQuestions.length);

            if (questionCheck.includes(randomIndex) == false) {
                //add the random question if it hasn't already been added to the random array
                console.log(this.quizQuestions[randomIndex]);
                randomQuestionArray.push(this.quizQuestions[randomIndex]);
                questionCheck.push(randomIndex);
            }
            else {
                //subtract 1 from the question count if it is already included.
                questionCount--;
            }
        }
        return randomQuestionArray;
    }

}
//end of quiz object

var maxQuestions = 10; //set a global variable for max quiz questions
var questionsIndex = 0;
var randomQuizOutput;
var score;
//use this for the time
var timer; 
var quizTime;
//quiz buttons
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
var h2TitleQuestion = document.getElementById("questionTitle");

var generateQuizButton = document.getElementById("quizButton");

var generateHighScore = document.getElementById("highscore");

//score and timer
var scoreSection = document.getElementById("score");
var timerSection = document.getElementById("timer");

//event listeners

generateQuizButton.addEventListener("click", function () {
    questionsIndex = 0;
    quizStart(maxQuestions);
    //hide the generate quiz button
})

answerButton1.addEventListener("click", function () {

    if (randomQuizOutput[questionsIndex].options[0].score == true) {
        score++;
    }
    else {
        timer = timer - 5;
    }
    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //end the quiz
    }
    else {
        questionDisplay();
    }
})

answerButton2.addEventListener("click", function () {

    if (randomQuizOutput[questionsIndex].options[1].score == true) {
        score++;
    }
    else {
        timer = timer - 5;
    }
    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //end the quiz
    }
    else {
        questionDisplay();
    }
})

answerButton3.addEventListener("click", function () {

    if (randomQuizOutput[questionsIndex].options[2].score == true) {
        score++;
    }
    else {
        timer = timer - 5;
    }

    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //end the quiz
    }
    else {
        questionDisplay();
    }
})

answerButton4.addEventListener("click", function () {

    if (randomQuizOutput[questionsIndex].options[3].score == true) {
        score++;
    }
    else {
        timer = timer - 5;
    }

    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //end the quiz
    }
    else {
        questionDisplay();
    }
})


//function to wait for a click on the 4 answer elements
//get the element contained in that answer
//if the answer has a bool of true, increment the score

function questionDisplay() {
    console.log("Question display section: question is: ", randomQuizOutput[questionsIndex].question);
    h2TitleQuestion.innerText = randomQuizOutput[questionsIndex].question;

    answerButton1.innerText = randomQuizOutput[questionsIndex].options[0].answer;
    answerButton2.innerText = randomQuizOutput[questionsIndex].options[1].answer;
    answerButton3.innerText = randomQuizOutput[questionsIndex].options[2].answer;
    answerButton4.innerText = randomQuizOutput[questionsIndex].options[3].answer;
}

// high score section

// how would I overwrite things in a text file? How would I organize it to make it appear top to bottom? food for thought

//function to create the highscores

//get the username from the console
//starting with a prompt, replace with in page function to get it

function highScoreInfo(userScore, globalTimerAtEnd) {

    var usernameInput = "Example";


    //get user name from form in screen
    usernameInput = prompt("Please enter your name: ");

    //filler for variables just writing out what works
 
    var userHighScore =
    {
        name: "Example Name",
        score: 0,
        timeLeft: 0
    }

    userHighScore.name = usernameInput;
    userHighScore.score = userScore;
    userHighScore.timeLeft = globalTimerAtEnd;


    generateHighScore.innerText = "Name: " + userHighScore.name + " Score: " + userHighScore.score + " Time Left: " + userHighScore.timeLeft;

    return userHighScore;
}

//function to delete the highscores page
//write an empty file; just enter an empty string
//starting quiz

function quizStart(maxLength) {

    score = 0;
    timer = 60;
    //start timer
    quizTimer();

    //generate random quiz questions
    randomQuizOutput = quiz.randomQuizQuestionGenerator();
    console.log("This is the random quiz output :", randomQuizOutput);

    for (var testloop = 0; (testloop < randomQuizOutput.length) && testloop < maxLength; testloop++) {
        console.log(randomQuizOutput[testloop].question);

        for (var innertestloop = 0; innertestloop < 4; innertestloop++) {
            console.log(randomQuizOutput[testloop].options[innertestloop].answer);
            console.log(randomQuizOutput[testloop].options[innertestloop].score);
        }
    }

    //display the quiz based off of the array passed by the generator
    questionDisplay();
}

function endQuiz() {
    var finalInfo;
    clearInterval(quizTime); //stops the timer
    scoreSection.innerText = "Score: " + score;
    timerSection.innerText = "Time Left: " + timer;
    //record the results
    finalInfo = highScoreInfo(score, timer);
        finalInfo.name;
    finalInfo.score;
    finalInfo.timeLeft;
    //hide the questions and answers
}
//function for making timer

function quizTimer() {
    //starts timer
    quizTime = setInterval(function () {


        //display timer in page
        if (timer <= 0) //state where timer is at 0 or less than it
        {
            timer = 0;
            scoreSection.innerText = "Score: " + score;
            timerSection.innerText = "Time Left: " + timer;
            console.log("Ran out of time.");
            endQuiz(); //ends the quiz
            clearInterval(quizTime);
        }
        else
        {
            scoreSection.innerText = "Score: " + score;
            timerSection.innerText = "Time Left: " + timer;
        timer--;
        }
    }, 1000);
}