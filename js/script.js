// making an object of quiz questions that is an array of questions and options. the options is an array of answers and scores that will show. quizQuestions holds a question and an array of answers and scores. the answers print the text of the answer, score will hold if that answer is true or not.
// by making an array of objects you can add more quiz questions to that array quizQuestions[0] then you can get to each part to display it

var quiz = {

  //object quizQuestions as an array of objects
  //each object in the array has a question and option
  //options contains an object with an answer and score boolean
  quizQuestions: [
    {
      question: "Which CSS property is used to control the spacing between letters?",
      options: [
        { answer: "letter-spacing", score: true },
        { answer: "word-spacing", score: false },
        { answer: "line-height", score: false },
        { answer: "text-indent", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'innerHTML' property in JavaScript?",
      options: [
        { answer: "To get the value of an input field", score: false },
        { answer: "To modify the content of an HTML element", score: true },
        { answer: "To retrieve the text content of an HTML element", score: false },
        { answer: "To append an element to the DOM", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'querySelector()' method in JavaScript?",
      options: [
        { answer: "To select an HTML element by its ID", score: false },
        { answer: "To select an HTML element by its class name", score: false },
        { answer: "To select an HTML element by its tag name", score: false },
        { answer: "To select the first HTML element that matches a specified CSS selector", score: true }
      ]
    },
    {
      question: "Which HTML tag is used to define a heading?",
      options: [
        { answer: "<h1>", score: true },
        { answer: "<p>", score: false },
        { answer: "<span>", score: false },
        { answer: "<div>", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'float' property in CSS?",
      options: [
        { answer: "To control the alignment of text within an element", score: false },
        { answer: "To specify the position of an element relative to its parent", score: false },
        { answer: "To create a new line box for an element", score: false },
        { answer: "To control the positioning of an element to the left or right of its container", score: true }
      ]
    },
    {
      question: "What is the purpose of the 'concat()' method in JavaScript?",
      options: [
        { answer: "To convert a string to lowercase", score: false },
        { answer: "To split a string into an array of substrings", score: false },
        { answer: "To combine two or more arrays", score: false },
        { answer: "To concatenate two or more strings", score: true }
      ]
    },
    {
      question: "What is the purpose of the 'preventDefault()' method in JavaScript?",
      options: [
        { answer: "To stop the propagation of an event", score: false },
        { answer: "To cancel the default action of an event", score: true },
        { answer: "To check if an element has a specified class", score: false },
        { answer: "To prevent memory leaks in JavaScript", score: false }
      ]
    },
    {
      question: "Which HTML tag is used to define a line break?",
      options: [
        { answer: "<br>", score: true },
        { answer: "<p>", score: false },
        { answer: "<hr>", score: false },
        { answer: "<div>", score: false }
      ]
    },
    {
      question: "Which CSS property is used to add a background image to an element?",
      options: [
        { answer: "background-color", score: false },
        { answer: "background-image", score: true },
        { answer: "background-position", score: false },
        { answer: "background-size", score: false }
      ]
    },
    {
      question: "Which JavaScript function is used to convert a string to uppercase?",
      options: [
        { answer: "toUpperCase()", score: true },
        { answer: "toLowerCase()", score: false },
        { answer: "trim()", score: false },
        { answer: "substring()", score: false }
      ]
    },
    {
      question: "Which JavaScript method is used to remove the last element from an array?",
      options: [
        { answer: "pop()", score: true },
        { answer: "push()", score: false },
        { answer: "shift()", score: false },
        { answer: "unshift()", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'visibility' property in CSS?",
      options: [
        { answer: "To control the display of an element", score: false },
        { answer: "To specify the font weight of text", score: false },
        { answer: "To control the transparency of an element", score: false },
        { answer: "To hide or show an element", score: true }
      ]
    },
    {
      question: "Which CSS property is used to control the size of an element relative to its parent?",
      options: [
        { answer: "position", score: false },
        { answer: "display", score: false },
        { answer: "width", score: false },
        { answer: "flex", score: true }
      ]
    },
    {
      question: "What is the purpose of the 'setAttribute()' method in JavaScript?",
      options: [
        { answer: "To add a new attribute to an HTML element", score: true },
        { answer: "To remove an attribute from an HTML element", score: false },
        { answer: "To get the value of an attribute from an HTML element", score: false },
        { answer: "To check if an element has a specific attribute", score: false }
      ]
    },
    {
      question: "What does HTML stand for?",
      options: [
        { answer: "Hyper Text Markup Language", score: true },
        { answer: "Home Tool Markup Language", score: false },
        { answer: "Hyperlinks and Text Markup Language", score: false },
        { answer: "Hyper Transfer Markup Language", score: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      options: [
        { answer: "Cascading Style Sheets", score: true },
        { answer: "Creative Style Sheets", score: false },
        { answer: "Colorful Style Sheets", score: false },
        { answer: "Computer Style Sheets", score: false }
      ]
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        { answer: "Boolean", score: false },
        { answer: "Number", score: false },
        { answer: "String", score: false },
        { answer: "Float", score: true }
      ]
    },
    {
      question: "What is the correct syntax to comment out a single line in CSS?",
      options: [
        { answer: "// This is a comment", score: false },
        { answer: "/* This is a comment /", score: false },
        { answer: "// This is a comment //", score: false },
        { answer: "/* This is a comment */", score: true }
      ]
    },
    {
      question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
      options: [
        { answer: "To select an HTML element by its class name", score: false },
        { answer: "To select an HTML element by its tag name", score: false },
        { answer: "To select an HTML element by its ID", score: true },
        { answer: "To select an HTML element by its value", score: false }
      ]
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: [
        { answer: "<ol>", score: false },
        { answer: "<ul>", score: true },
        { answer: "<li>", score: false },
        { answer: "<dl>", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'text-align' property in CSS?",
      options: [
        { answer: "To set the font size of an element", score: false },
        { answer: "To control the spacing between lines of text", score: false },
        { answer: "To specify the alignment of text within an element", score: true },
        { answer: "To set the color of the text", score: false }
      ]
    },
    {
      question: "What is the output of the following JavaScript code?\n\nconsole.log(2 + '2');",
      options: [
        { answer: "22", score: true },
        { answer: "4", score: false },
        { answer: "NaN", score: false },
        { answer: "TypeError", score: false }
      ]
    },
    {
      question: "Which CSS property is used to add shadows to elements?",
      options: [
        { answer: "text-shadow", score: false },
        { answer: "box-shadow", score: true },
        { answer: "shadow", score: false },
        { answer: "element-shadow", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'setAttribute()' method in JavaScript?",
      options: [
        { answer: "To add a new attribute to an HTML element", score: true },
        { answer: "To remove an attribute from an HTML element", score: false },
        { answer: "To retrieve the value of an attribute from an HTML element", score: false },
        { answer: "To modify the style of an HTML element", score: false }
      ]
    },
    {
      question: "Which HTML tag is used to define a table row?",
      options: [
        { answer: "<td>", score: false },
        { answer: "<th>", score: false },
        { answer: "<tr>", score: true },
        { answer: "<table>", score: false }
      ]
    },
    {
      question: "Which of the following is NOT a valid CSS length unit?",
      options: [
        { answer: "px", score: false },
        { answer: "em", score: false },
        { answer: "vh", score: false },
        { answer: "pt", score: true }
      ]
    },
    {
      question: "What is the purpose of the 'parseInt()' function in JavaScript?",
      options: [
        { answer: "To convert a string to an integer", score: true },
        { answer: "To round a number to the nearest integer", score: false },
        { answer: "To check if a value is NaN", score: false },
        { answer: "To convert a number to a string", score: false }
      ]
    },
    {
      question: "What is the default value of the 'position' property in CSS?",
      options: [
        { answer: "absolute", score: false },
        { answer: "relative", score: false },
        { answer: "fixed", score: false },
        { answer: "static", score: true }
      ]
    },
    {
      question: "Which JavaScript function is used to add a new item to an array?",
      options: [
        { answer: "push()", score: true },
        { answer: "add()", score: false },
        { answer: "insert()", score: false },
        { answer: "append()", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'display' property in CSS?",
      options: [
        { answer: "To set the height and width of an element", score: false },
        { answer: "To control the positioning of an element", score: false },
        { answer: "To hide or show an element", score: true },
        { answer: "To add a background image to an element", score: false }
      ]
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: [
        { answer: "<a>", score: true },
        { answer: "<p>", score: false },
        { answer: "<span>", score: false },
        { answer: "<div>", score: false }
      ]
    },
    {
      question: "What is the output of the following JavaScript code?\n\nconsole.log(typeof NaN);",
      options: [
        { answer: "number", score: true },
        { answer: "string", score: false },
        { answer: "undefined", score: false },
        { answer: "NaN", score: false }
      ]
    },
    {
      question: "Which CSS property is used to control the size of a font?",
      options: [
        { answer: "text-size", score: false },
        { answer: "font-size", score: true },
        { answer: "size", score: false },
        { answer: "font-style", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'appendChild()' method in JavaScript?",
      options: [
        { answer: "To remove an HTML element from the DOM", score: false },
        { answer: "To add a new attribute to an HTML element", score: false },
        { answer: "To insert a new HTML element into another element", score: true },
        { answer: "To modify the text content of an HTML element", score: false }
      ]
    },
    {
      question: "Which HTML tag is used to define a form?",
      options: [
        { answer: "<form>", score: true },
        { answer: "<input>", score: false },
        { answer: "<label>", score: false },
        { answer: "<button>", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'background-color' property in CSS?",
      options: [
        { answer: "To set the font color of an element", score: false },
        { answer: "To control the spacing between lines of text", score: false },
        { answer: "To specify the background color of an element", score: true },
        { answer: "To set the width and height of an element", score: false }
      ]
    },
    {
      question: "What is the output of the following JavaScript code?\n\nconsole.log(5 > 3 && 2 < 4);",
      options: [
        { answer: "true", score: true },
        { answer: "false", score: false },
        { answer: "undefined", score: false },
        { answer: "TypeError", score: false }
      ]
    },
    {
      question: "Which CSS property is used to add rounded corners to elements?",
      options: [
        { answer: "border-radius", score: true },
        { answer: "corner-radius", score: false },
        { answer: "round-corners", score: false },
        { answer: "border-style", score: false }
      ]
    },
    {
      question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
      options: [
        { answer: "To remove an event handler from an element", score: false },
        { answer: "To execute a function when an event occurs on an element", score: true },
        { answer: "To create a new event and attach it to an element", score: false },
        { answer: "To retrieve information about an event", score: false }
      ]
    }
    // Add more questions here...

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
var timer2 = 2;
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
  clearInterval(correctShow);
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
  clearInterval(correctShow);
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
  clearInterval(correctShow);
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
  clearInterval(correctShow);
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
  timer = 90;
  timer2 = 2;
  //start timer
  clearInterval(correctShow);
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
  clearInterval(correctShow);
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

    if (timer2 == 0) //state where timer is at 0 or less than it
    {
      hideCorrect();
      timer2 = 2;
      clearInterval(correctShow);
    }
    else {
      showCorrect();
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