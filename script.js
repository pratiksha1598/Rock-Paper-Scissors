let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");

let userScores=document.querySelector(".user-score-board");
let compScores=document.querySelector(".comp-score-board");

const genCompChoice= () =>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    msg.innerText="Its a Draw!";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScores.innerText=userScore;
        msg.innerText="You Win!!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScores.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
}

const playgame= (userChoice) =>{
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice==="paper"?false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false : true;
        }else{
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) =>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})
