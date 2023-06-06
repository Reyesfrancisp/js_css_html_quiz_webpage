
// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quiz = {

    //object quizQuestions as an array of objects
    //each object in the array has a question and option
    //
    quizQuestions: [
        { //quiz question information in blue brackets
            //first question
            question: "This is the first question",

            options: [{
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
                answer: "This is the fourth answer to the first question 4",
                score: false
            }
            ]
        }
        ,
        [
            { //second question
                question: "This is the second question",

                options: [{
                    answer: "Answer 1",
                    score: false
                },

                {
                    answer: "Answer 2",
                    score: true
                },

                {
                    answer: "Answer 3",
                    score: false
                },

                {
                    answer: "Answer 4",
                    score: false
                }
                ]
            }
        ]
        ,
        [
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
        ]
        ,
        [
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
        ]



    ]


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

    ,

    //printQuestions based on the question number to the file

    //work in progress

    printQuestions(questionNumber) {
        for (var questionsIndex = 0; questionsIndex > this.quizQuestions.length; questionsIndex++) {
            //print the question

            if (questionNumber == questionsIndex) {
                console.log(this.quizQuestions[questionsIndex].question);

                var questionSection = document.createElelement("section");
                var h2TitleQuestion = document.createElement("h2");

                h2TitleQuestion.innerText = this.quizQuestions[questionsIndex].question;

                questionSection.append(h2TitleQuestion);


                for (var optionsIndex = 0; optionsIndex > this.quizQuestions[questionsIndex].options.length; optionsIndex++) {
                    //print each answer in the question on the page
                    //style this in boxes underneath
                    console.log(quiz.quizQuestions[questionsIndex].options[optionsIndex].answer);


                }



                break;
            }

        }

        return this.quizQuestions[questionNumber];
    }

    ,
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
                randomQuestionArray.push(quiz.printQuestions(randomIndex));
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



//function to wait for a click on the 4 answer elements
//get the element contained in that answer
//if the answer has a bool of true, increment the score
function userInputQuiz() {
    var answerButton1 = document.getElementById(answer1);

    var answerButton2 = document.getElementById(answer2);

    var answerButton3 = document.getElementById(answer3);

    var answerButton4 = document.getElementById(answer4);

    //quiz button

    var generateQuizButton = document.getElementById(quizButton);


    generateQuizButton.addEventListener("click", quizStart());




}

// high score section

// how would I overwrite things in a text file? How would I organize it to make it appear top to bottom? food for thought
var highScore = {

    name: "Insert Name Here", //name of user
    score: 0, // increment the score
    time: 0 // log the time of the user
}

//how would I log the time that is running real time? Lookup how to save that to the highscore
//timer for quiz function 
function quizTimer() {
    //timer here
}

//function to create the highscores

//get the username from the console
//starting with a prompt, replace with in page function to get it

function highScoreInfo(userScore, globalTimerAtEnd) {

    var usernameInput = "Example";
    var scoreToSave = 0;
    var userTime = 0;

    usernameInput = prompt("Please enter your name: ");

    //filler for variables just writing out what works
    scoreToSave = userScore;
    userTime = globalTimerAtEnd;


}

//function to delete the highscores page

//write an empty file; just enter an empty string

//starting quiz

function quizStart() {

    //start timer
    quizTimer();


    //generate random quiz questions
    quiz.randomQuizQuestionGenerator();


    //record the results

    
}