// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quiz = {

    //object quizQuestions as an array of objects
    //each object in the array has a question and option
    //options contains an object with an answer and score boolean
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

    // quizQuestions[0].question access the question
    //quizQuestions[0].options[0].answer access the first option
    // example of loop

    //function to create the questions
    randomQuizQuestionGenerator(maxQuestionLength) {
        var questionCheck = [];
        var randomQuestionArray = [];
        //create random questions
        //randomizes the order 
        for (var questionCount = 0; questionCount < this.quizQuestions.length && questionCount < maxQuestionLength; questionCount++) {
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

//variables

var maxQuestions = 10; //set a global variable for max quiz questions
var questionsIndex = 0;
var randomQuizOutput;
var score;
var userName = "Example";
//use this for the time
var timer;
var timer2 = 3;
var quizTime;
var correctShow;
//quiz buttons
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
var quizTitle = document.getElementById("questionTitle");
var deleteScores = document.getElementById("deleteHighScores");
//sections
var questionSection = document.querySelector("#questionsAndAnswers");
var quizButton = document.querySelector("#quizButton");
var quizDisplayInfo = document.querySelector("#displayInfo");
var quizUserForm = document.querySelector("#userForm");
var quizHighScore = document.querySelector("#highScore");
var correctOutput = document.querySelector("#correctSection");
//score, timer, name
var scoreSection = document.getElementById("score");
var timerSection = document.getElementById("timer");
var userFormName = document.querySelector("#userForm");

//event listeners
quizButton.addEventListener("click", function () {
    questionsIndex = 0;
    quizStart(maxQuestions);
    //hide the generate quiz button
})

//simplify the code below

//WIP

// var buttons = document.body.querySelector("displayArea");

// for (var buttonCount = 0; buttonCount < randomQuizOutput.length; buttonCount++)
// {
//     if (buttons.target.tagName == 
// }


// var choiceNumber = event.target.dataset.choiceNumber;
// console.log('choiceNumber should be 1:', choiceNumber)
// console.log('was paul here?', event.target.dataset.paulWasHere)
// console.log('using the id', event.target.id.split('')[event.target.id.split('').length - 1])

//end of WIP

answerButton1.addEventListener("click", function (event) {

    showAnswer();
    if (randomQuizOutput[questionsIndex].options[0].score == true) {
        score++;
        correctOutput.innerText = "Correct!";
    }
    else {
        correctOutput.innerText = "Wrong";
        timer = timer - 5;
    }
    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //ends quiz
    }
    else {
        questionDisplay();
    }
})

answerButton2.addEventListener("click", function () {
    showAnswer();
    if (randomQuizOutput[questionsIndex].options[1].score == true) {
        score++;
        correctOutput.innerText = "Correct!";
    }
    else {
        correctOutput.innerText = "Wrong";
        timer = timer - 5;
    }
    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //ends quiz
    }
    else {
        questionDisplay();
    }
})

answerButton3.addEventListener("click", function () {
    showAnswer();
    if (randomQuizOutput[questionsIndex].options[2].score == true) {
        score++;
        correctOutput.innerText = "Correct!";
    }
    else {
        correctOutput.innerText = "Wrong";
        timer = timer - 5;
    }

    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //ends quiz
    }
    else {
        questionDisplay();
    }
})

answerButton4.addEventListener("click", function () {
    showAnswer();
    if (randomQuizOutput[questionsIndex].options[3].score == true) {
        score++;
        correctOutput.innerText = "Correct!";
    }
    else {
        correctOutput.innerText = "Wrong";
        timer = timer - 5;
    }

    questionsIndex++;

    if (questionsIndex == randomQuizOutput.length) {
        endQuiz(); //ends quiz
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
    quizTitle.innerText = randomQuizOutput[questionsIndex].question;

    //replace with something simpler later on
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

function highScoreInfo(userScore, globalTimerAtEnd, usernameInput) {

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

    quizHighScore.innerText = "Name: " + userHighScore.name + "\nCurrent Score: " + userHighScore.score + "\nTime Left: " + userHighScore.timeLeft;

    return userHighScore;
}
//starting quiz

function quizStart(maxLength) {
    score = 0;
    timer = 60;
    //start timer
    quizTimer();
    showUserDisplayInfo();
    hideQuizGen();
    showQuestions();
    hideUserForm();
    hideDeleteButton();
    hideHighScore();
    hideCorrect();
    //generate random quiz questions
    randomQuizOutput = quiz.randomQuizQuestionGenerator(maxLength);
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
    clearInterval(quizTime);
    scoreSection.innerText = "Score: " + score;
    timerSection.innerText = "Time Left: " + timer;
    //record the results

    //hide the questions and answers
    hideQuestions();
    showUserForm();
}

//hide parts in HTML

function hideQuestions() {
    questionSection.classList.add("hide");
}

function hideQuizGen() {
    quizButton.classList.add("hide");
}

function hideUserDisplayInfo() {
    quizDisplayInfo.classList.add("hide");
}

function hideUserForm() {
    quizUserForm.classList.add("hide");
}

function hideHighScore() {
    quizHighScore.classList.add("hide");
}

function hideDeleteButton() {
    deleteScores.classList.add("hide");
}

function hideCorrect() {
    correctOutput.classList.add("hide");
}

//show parts in HTML
function showQuestions() {
    questionSection.classList.remove("hide");
}

function showQuizGen() {
    quizButton.classList.remove("hide");
}

function showUserDisplayInfo() {
    quizDisplayInfo.classList.remove("hide");
}

function showUserForm() {
    quizUserForm.classList.remove("hide");
}

function showHighScore() {
    quizHighScore.classList.remove("hide");
}

function showQuestionTitle() {
    quizTitle.classList.remove("hide");
}

function showDeleteButton() {
    deleteScores.classList.remove("hide");
}

function showCorrect() {
    correctOutput.classList.remove("hide");
}



//ending sequence event listener

userFormName.addEventListener("submit", function (eventObject) {
    eventObject.preventDefault();

    userName = document.getElementById("name-input").value;
    console.log(eventObject.target);


    finalInfo = highScoreInfo(score, timer, userName);

    //local storage

    addItemToLocalStorage("highscores", finalInfo);
    showHighScore();
    hideUserDisplayInfo();
    hideUserForm();
    showQuizGen();
    showDeleteButton();
})


//delete high scores event listener

deleteScores.addEventListener("click", function () {

    deleteLocalStorage("highscores");
    pageInitialize();
})

//local storage
function getFromLocalStorage(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey)) || [];
}

function setLocalStorage(itemKey, data) {
    localStorage.setItem(itemKey, JSON.stringify(data))
}

function addItemToLocalStorage(itemKey, item) {
    var currData = getFromLocalStorage(itemKey); // this is an array datatype
    currData.push(item);
    setLocalStorage(itemKey, currData);
}

function deleteLocalStorage(itemKey) {
    localStorage.clear();
}

//function for making timer


function showAnswer() {

    correctShow = setInterval(function () {
        //display timer in page
        showCorrect();
        if (timer2 <= 0) //state where timer is at 0 or less than it
        {
            hideCorrect();
            timer2 = 3;
            clearInterval(correctShow);
        }
        else {
            timer2--;
        }
    }, 1000);

}


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

        }
        else {
            scoreSection.innerText = "Score: " + score;
            timerSection.innerText = "Time Left: " + timer;
            timer--;
        }
    }, 1000);
}


//initialize the page
function pageInitialize() {
    hideQuestions();
    hideUserForm();
    hideUserDisplayInfo();
    hideHighScore();
    showQuestionTitle();
    console.log("Loaded Page");
}

pageInitialize();