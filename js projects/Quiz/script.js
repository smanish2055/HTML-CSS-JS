const questions = [
    {
        question:"Which is the largest animal in the world",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers:[
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },
    {
        question:"Which is the largest desert  in the world",
        answers:[
            {text:"kalahari", correct:false},
            {text:"Gobi", correct:true},
            {text:"Sahara", correct:false},
            {text:"Antarctica", correct:true},
        ]
    },
    {
        question:"Which is the smallest country in the world",
        answers:[
            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Shri Lanka", correct:false},
        ]
    },


];


const questionElement = document.getElementById("question");
const  answerButton= document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    let currentQuestionIndex = 0;
let score = 0;
nextbutton.innerHTML = "Next";
showQuestion();
}

function showQuestion(){
    // resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo  + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        answerButton.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}


function resetState(){
    nextbutton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuize();