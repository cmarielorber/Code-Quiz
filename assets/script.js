const start_quiz = document.querySelector (".start-quiz button");







start_quiz.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
};
// if start Quiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(60); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}


