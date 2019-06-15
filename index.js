let questionNumber = 0;
let score = 0;

// geneate question html
function generateQuestion () {
}

//increment question number
function changeQuestionNumber () {
    //if (questionNumber < STORE.length) {
      questionNumber ++;
    //}
    $('.questionNumber').text(questionNumber+1);
  }

//increment score
function changeScore () {
    score ++;
  }

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
    $('.quizStart-container').on('click', '.startButton', function (event) {
      $('.quizStart-container').remove();
      $('.questionAnswerForm').css('display', 'block');
      $('.questionNumber').text(1);
  });
  }

// render question in DOM
function renderQuestion () {
    $('.questionAnswerForm').html(generateQuestion());
  }

// render question in DOM
function userSelectAnswer () {
}

function ifAnswerIsCorrect () {
}

function ifAnswerIsWrong () {
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {}

//update score text
function updateScore () {
}

//when quiz is over this is the html for the page
function renderResults () {
}

//what happens when the user clicks next
function renderNextQuestion () {
    $('main').on('click', '.nextButton', function (event) {
      changeQuestionNumber();
      renderQuestion();
      userSelectAnswer();
    });
  }

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
    
  }

//run quiz functions
function createQuiz () {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
  }
  
  $(createQuiz);


  function render() {
    if (store.view === 'start') {
      $('.intro').show();
      $('.quiz').hide();
      $('.status').hide();
    } else if (store.view === 'quiz') {
      $('.intro').hide();
      $('.quiz').show();
      $('.status').show();
    }
  }