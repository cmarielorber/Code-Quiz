const quizInfo = [
    {
        question: "Which language runs in a web browser?",
        a: "coffee",
        b: "C",
        c: "Python",
        d: "Javascript",
        answer: "d",
    },
    {
        question: "What is a block of JavaScript code, that can be executed when called for?",
        a: "an event",
        b: "a function",
        c: "an element",
        d: "web API",
        answer: "b",
    },
    {
        question: "What are variables?",
        a: "Containers for storing data",
        b: "Can only have one or two values",
        c: "HTML",
        d: "margins and padding",
        answer: "a",
    },
    {
        question: "What is 'Hello'?",
        a: "boolean;variable",
        b: "string; object",
        c: "number; object",
        d: "none of the above",
        answer: "b",
    },
];

const start_bttn = document.querySelector(".start-bttn");
const quiz = document.getElementById('quiz')
const quiz_box = document.querySelector(".quiz-box");
const start_quiz = document.querySelector(".start-quiz");
const quizTimer = document.querySelector(".timer-sec");
const quizQuestion = document.querySelector("#question");
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const quizAnswer = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit')

let timer;
let timeLeft = 60;
let currentQuiz = 0;
let score = 0;



function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer); //want to call end quiz function here
        }
    }, 1000)
}

start_bttn.onclick = () => {
    console.log(start_quiz, quiz_box)
    // start_quiz.classList.add("hide"); // hide start elements - add hide
    // quiz_box.classList.remove("hide"); // show quiz box - remove hide
    start_quiz.style.display = "none"
    quiz_box.style.display = "block"
    startTimer(); // time starts and dsplays - setinterval
    loadQuiz(); {
      
};


function loadQuiz() { //new question pops up
    deselectAnswers()
    const currentquizInfo = quizInfo[currentQuiz];
    quizQuestion.innerText = currentquizInfo.question; 
    a_text.innerText = currentquizInfo.a;
    b_text.innerText = currentquizInfo.b;
    c_text.innerText = currentquizInfo.c;
    d_text.innerText = currentquizInfo.d;
}



function deselectAnswers() {
    quizAnswer.forEach(quizAnswer => quizAnswer.checked = false)
}
function getSelected() {
    let answer
    quizAnswer.forEach(quizAnswer => {
        if (quizAnswer.checked) {
            answer = quizAnswer.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizInfo[currentQuiz].correct) {
            score++  //add timer decreases?
        }
        currentQuiz++
        
        if (currentQuiz < quizInfo.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>,
           `
        }
    }
    // if (answer) {
    //     if (answer === quizInfo[currentQuiz].correct) {
    //         currentQuiz.quizInfo.add('wrong')
    //         currentQuiz.addEventListener('click', () => {
    //             clearInterval(timer)
    //             timeLeft.innerHTML = -10
    //             timer = setInterval(myClock, 1000);
    })};
    

// const quiz= document.getElementById('quiz')

// const questionEl = document.getElementById('question'//)
