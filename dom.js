let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#result");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");
const genCompChoice=() =>{
  const options=["rock","paper","scissors"];
  const randNum=Math.floor(Math.random()*3);
  return options[randNum];
}
const drawGame=()=>{
  console.log("draw");
};
showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;

   result.innerText="User Wins";
   result.style.backgroundColor="green";
  }
  else{
    computerScore++;
    computerScorePara.innerText=computerScore;
   result.innerText="Computer Wins";
    result.style.backgroundColor="red";
  }
};  
const playGame=(userChoice)=>{
  console.log("user Choice=",userChoice);
  const computerChoice=genCompChoice();
  console.log("computer Choice=",computerChoice);
  switch(userChoice+computerChoice){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userScore++;
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      computerScore++;
      break;

  }
  if(userChoice===computerChoice){
    drawGame();
  }

  else{
    let userWin=true;
    if( userChoice==="rock")
    {
      userWin=computerChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
      userWin=computerChoice==="scissors"?false:true;
    }
    else if(userChoice==="scissors"){
      userWin=computerChoice==="rock"?false:true;
    }
    showWinner(userWin);
  }
}
choices.forEach((choice) =>{
  choice.addEventListener("click", () =>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});

