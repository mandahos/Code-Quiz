const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestions

startBtn.addEventListener('click', startCodeQuiz)

function startCodeQuiz() {
startBtn.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionBoxElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
   questionElement.innerText = question.question
   question.answers.forEach(answers => {
       const button = document.createElement('button')
       button.innerText = answers.text
       button.classList.add('btn')
       if (answers.correct) {
           button.dataset.correct = answers.correct
       }
       button.addEventListener('click', selectAnswer)
       answerButtonsElement.appendChild(button)
   })
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}


// function setTimeout(() => {
    
// }, timeout);


function selectAnswer(x){
    const selectedButton = x.target
    const correct = selectedButton.dataset.correct
    setSatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
       setStatusclass(button, button.dataset.correct) 
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
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
     
answers: [
     {text:'>', correct: true}, 
     {text:'[', correct: false},
     {text:'{', correct: false},
],
        
//  correctAnswer: "b" 
},

{
question: "Which of the following is NOT an example of a JavaScript data type?",

answers: [
 
    {text:'strings', correct: false},
    {text:'numbers', correct: false},
    {text:'booms' , correct: true}, 
],  
    // correctAnswer: "c"

},    

{ 
question: "Which of the following is a JavaScript arithmetic operator?",
  answers: [
    {text:'+', correct: true}, 
    {text:'#', correct: false},
    {text:'!', correct: false},
  ],
//   correctAnswer: "a"
},
]

