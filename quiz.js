var quizForm = document.querySelector(".quiz-form");
var submitAnswerBtn = document.querySelector("#submit-answer-btn");
var outputElement = document.querySelector("#output");

var correctAnswer = ["90°", "right-angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score= score+1;
        }
        index = index+1;
    }
    outputElement.innerText = "your score is " + score;
}

submitAnswerBtn.addEventListener("click" , calculateScore)