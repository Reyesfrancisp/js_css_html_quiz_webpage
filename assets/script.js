
// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quiz = {

quizQuestions:  [
    {
        question: "This is a test question",
        options: [{
            answer: "Answer 1",
            score: true
        }]
    }]

,
//how would I read this info from a file?
//get the total amount of questions at the top
//read line by line as a string, if there's a linebreak start the input for the style of a question
//the start is a question, followed by the answers, the answers are grouped in pairs
//the first line of the options pair is the answer then the second line is if its true or not



// quizQuestions[0].question access the question

//quizQuestions[0].options[0].answer access the first option

// example of loop

// think about how this would run in the page, you want to call a function after each selection of an answer then moves it on the next question
// display if they got the questions correct or not
// how would I randomize the questions? The answers in the questions? Make the quiz different each time.



//printQuestions based on the question number
printQuestions(questionNumber) {
    for (var questionsIndex = 0; questionsIndex > this.quizQuestions.length; questionsIndex++) {
        //print the question

        if(questionNumber == questionsIndex)
        {
        console.log(quizQuestions[questionsIndex].question);

        for (var optionsIndex = 0; optionsIndex > this.quizQuestions[questionsIndex].options.length; optionsIndex++) {
            //print each answer in the question on the page
            //style this in boxes underneath
            console.log(this.quizQuestions[questionsIndex].options[optionsIndex].answer);
        }
        break;
    }

    }

    return 0;
}

}

// high score section

// how would I overwrite things in a text file? How would I organize it to make it appear top to bottom? food for thought
var highScore = {

    name: "Insert Name Here", //name of user
    score: 0, // increment the score
    time: 0 // log the time of the user
}

//how would I log the time that is running real time? Lookup how to save that to the highscore




//function to create the questions

questionCheck = [];

for (var questionCount = 0; questionCount < )


//function to create the highscores

//get the username from the console
//starting with a prompt, replace with in page function to get it
var usernameInput = "Example";
var scoreToSave = 0;
var userTime = 0;

usernameInput = prompt("Please enter your name: ");

//filler for variables just writing out what works
scoreToSave = userScore;
userTime = globalTimerAtEnd;


//function to delete the highscores page

//write an empty file; just enter an empty string
