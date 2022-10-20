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
        question: "What is an array?",
        a: "a standalone entity, with properties and type",
        b: "a Pitbull",
        c: "a single variable that is used to store different elements",
        d: "none of the above",
        answer: "c",
    },
    {question: "What are elements?",
    a: "buttons",
    b: "check boxes",
    c: "text",
    d: "all of the above",
    answer: "d",
},
{
    question: "What is a method?",
    a: "an algorithm",
    b: "a command that tells how an object is to be acted upon",
    c: "a browser window",
    d: "all of the above",
    answer: "b",
}
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
    }, 1000),
}
    if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);

function loseGame() {
    wordBlank.textContent = "Try Again.";
    <button onclick="location.reload()">Redo</button>;

  }

start_bttn.onclick = () => {
    console.log(start_quiz, quiz_box)
    // start_quiz.classList.add("hide"); // hide start elements - add hide
    // quiz_box.classList.remove("hide"); // show quiz box - remove hide
    start_quiz.style.display = "none"
    quiz_box.style.display = "block"
    startTimer(); // time starts and displays - setinterval
    loadQuiz();

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
    console.log("answer",answer);
    if (answer) {
        if (answer === quizInfo[currentQuiz].answer) {
            score++
        } 
        else {  //add timer decreases
                timeLeft = timeLeft-10;            
        }
        currentQuiz++ 
       

        if (currentQuiz < quizInfo.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
           <h3> Enter your initials<h3>,
           <section class="score">
           <form action="initials"></form>
           <div class = "scores">
            <div class = "initialsBox"> <label class = "initials" for="name">Initials:</label>
               <input type="text" id="name" name="name"></input>
               </div>
           <button id="submit">Submit</button></div>
           <button onclick="location.reload()">Redo</button>`
        }
    }})

