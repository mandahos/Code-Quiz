var timerEl = document.querySelector(".time");
var mainEl = document.querySelector(".welcome");
var answerEl = document.querySelector(".info");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector(".highscore")
var resultEl = document.querySelector(".result")
var restartBtn = document.querySelector(".reset")
var endEl = document.querySelector(".end");

var number = 0;
var correct = 0;
var wrong = 0;
var timeLeft = 45;
var timeInterval;


var questions = [
    {
    question: 'What brackets do you use to start an array in JavaScript?',
         
    guess: ['>', '[', '{'],
                
    correct: '[' 
    },
    
    {
    question: 'Which of the following is NOT an example of a JavaScript data type?',
    
    guess: ['strings','numbers','booms'], 
    
    correct: 'booms'
    },

    { 
    question: 'Which of the following is a JavaScript arithmetic operator?',
      
    guess: ['+','#','!'],
        
    correct: '+'
    },
    
]

function startQuiz () {
    countdown();
    startBtn.remove();
    runQuiz();
}

function countdown () {
     timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds";
            timeLeft--;
        } else {
            timerEl.textContent = "Time Expired";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function runQuiz () {
    if(number === questions.length) {
        endQuiz();
    } else {
        var question = questions[number].question;
        var guess = questions[number].guess;
        answer = questions[number].correct;

        mainEl.textContent = question;
        answerEl.textContent = "";

        for (var i = 0; i < options.length; i++) {
            var buttonEl = document.createElement("button");
            buttonEl.className = "btn guess";
            buttonEl.setAttribute("button-id", [i+1]);
            buttonEl.textContent = `${[i+1]}. ${guess[i]}`;
            answerEl.appendChild(buttonEl);
       }
        number++;
    }
};

answerGuesses = function(event) {
    var targetEl = event.target;
    if(targetEl.matches(".guess")) {
        var guessEl = targetEl.getAttribute("button-id");
        guessesCorrect(guessEl);
    }
};

guessesCorrect = function(guessEl) {
    if(guessEl === answer) {
        timeLeft += 3;
        correct++;
        resultEl.innerText = "Correct!";
        runQuiz();
    } else {
        timeLeft -= 8;
        wrong++;
        resultEl.innerText = "Wrong!";
        runQuiz();
    }
};

endQuiz = function() {
    resultEl.remove();
    clearInterval(timeInterval);
    mainEl.textContent = "Lets review your guess";
    answerEl.textContent = " You anwered " + correct + " correct and " + wrong + "incorrectly";
    if (correct < score) {
        endEl.textContent = "Try again, you could get the high score next!";
    }
    else {
        var input = document.createElement('input');
        input.setAttribute('name', 'initals')
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Enter your initals');
        input.className  = 'input';
        var submit = document.createElement('button');
        submit.className = 'submit';
        submit.setAttribute('type', 'submit');
        submit.textContent = 'Submit';
        endEl.appendChild(input);
        endEl.appendChild(submit);
    }
}

saveScore = function(event) {
    event.preventDefault();
    var target = event.target;
    if(target.matches('.submit')) {
        var form = document.querySelector('.input');
        var playInitals = form.nodeValue;
        if(!playInitals) {
            alert ('Please show off your skills');
            return;
        }
        else {
            localStorage.setItem('initals', playInitals);
            localStorage.setItem('score', correct)
        }
    }
}

var score = localStorage.getItem('score');
var initals = localStorage.getItem('initals');
function highScores() {
    if (!score || !initals) {
        alert('Play to add a high score');
        return;
    }
    else {
        alert('Highscore goes to' + initals + 'with a score of' + score + '!');
    }
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener('click', startQuiz);
scoreBtn.addEventListener('click', highScores);
answerEl.addEventListener('click', answer)
endEl.addEventListener("click", saveScore);

