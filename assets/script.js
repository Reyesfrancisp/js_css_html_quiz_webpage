
// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quizQuestions = [
    {
        question: "This is a test question",
        options: [{
            answer: "Answer 1",
            score: true
        }]
    }]


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
function printQuestions() {
    for (var questionsIndex = 0; questionsIndex > quizQuestions.length; questionsIndex++) {
        //print the question
        console.log(quizQuestions[questionsIndex].question);

        for (var optionsIndex = 0; optionsIndex > quizQuestions[questionsIndex].options.length; optionsIndex++) {
            //print each answer in the question on the page
            //style this in boxes underneath
            console.log(quizQuestions[questionsIndex].options[optionsIndex].answer);
        }

    }

    return 0;
}
// high score section

// how would I overwrite things in a text file? How would I organize it to make it appear top to bottom? food for thought
var highScore = {

    name: "Insert Name Here", //name of user
    score: 0, // increment the score
    time: 0 // log the time of the user
}

//how would I log the time that is running real time? Lookup how to save that to the highscore