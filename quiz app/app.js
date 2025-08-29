document.addEventListener('DOMContentLoaded', () => {
    const Startbtn = document.getElementById("start-btn");
    const nextbtn = document.getElementById("next-btn");
    const restartbtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questiontext = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer=document.getElementById("result-container");
    const scoreDisplay=document.getElementById("score");


    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            choices: ["4", "7", "5", "6"],
            answer: "4"
        },
        {
            question: "What is the color of the sky?",
            choices: ["Purple", "white", "pink", "blue"],
            answer: "Blue"
        }
    ];

let currentQuestionIndex=0;
let score=1;

Startbtn.addEventListener("click",startQuiz)
nextbtn.addEventListener('click',()=>{
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showresult();
    }
});
restartbtn.addEventListener('click',()=>{
    currentQuestionIndex=0;
    score=0;
    resultContainer.classList.add('hidden');
    startQuiz();
})
 
    function startQuiz(){
       Startbtn.classList.add("hidden");
       resultContainer.classList.add("hidden");
       questionContainer.classList.remove("hidden");
       showQuestion();
    }
    function showQuestion(){
        nextbtn.classList.add("hidden");
        questiontext.textContent=questions[currentQuestionIndex].question;
        choicesList.innerHTML=""//clear the previouschiices
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li =document.createElement('li')
            li.textContent=choice
            li.addEventListener('click',()=>selectanswer(choice))
            choicesList.appendChild(li);
        })
    }
    function selectanswer(choice){
      const correctAnswer=questions[currentQuestionIndex].answer
      if(choice===correctAnswer){
        score++
      } 
      nextbtn.classList.remove('hidden'); 
    }
    function showresult(){
        questionContainer.classList.add("hidden")
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent=`${score} out of ${questions.length}`
    }



})