const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answersElement = document.getElementById('answers')
const answerButtonsElement = document.getElementById('answer-buttons')


startBtn.addEventListener('click', startCodeQuiz)

function startCodeQuiz() {
startBtn.classList.add('hide')
currentQuestionIndex = 0
questionBoxElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    showQuestion(questions[currentQuestionIndex])
    showAnswers(answers[currentAnswersIndex])
}

function showQuestion (question) {
   questionElement.innerText = question.question
   answersElement.innerText = answers.answers
       if (answer.correctAnswer) {
           button.dataset.correct = answer.correctAnswer
       }
       button.addEventListener('click', selectAnswer)
   }

       



// function setTimeout(() => {
    
// }, timeout);


function selectAnswer(x){
    const selectedButton = x.target
    const correct = selectedButton.dataset.correctAnswer
    setSatusClass(document.body, correctAnswer)
    Array.from(answerButtonsElement.children).forEach(button => {
       setStatusclass(button, button.dataset.correctAnswer) 
    })
    if (questions.length > currentQuestionIndex + 1){
    nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusclass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
{
    question: "What brackets do you use to start an array in JavaScript?",
     
answers: {
     a:'>',
     b:'[',
     c:'{', 

        
 correctAnswer: "b" 
},
},

{
question: "Which of the following is NOT an example of a JavaScript data type?",

answers: {
 
    a:'strings',
    b:'numbers', 
    c:'booms' , 

    correctAnswer: "c"
},
},    

{ 
question: "Which of the following is a JavaScript arithmetic operator?",
  answers: {
    a:'+',  
    b:'#', 
    c:'!', 
  
  correctAnswer: "a"
},
},
]