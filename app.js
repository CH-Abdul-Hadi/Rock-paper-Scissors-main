let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const uScore= document.querySelector("#user-score");
const cScore= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper", "scissors"]
    const randId= Math.floor(Math.random()*3);
    return options [randId];
};

const drawGame=()=>{

    console.log("Game was draw");
    msg.innerText=("Game was Draw");
    msg.style.backgroundColor="black";
};
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        uScore.innerText= userScore;
        console.log("you Win");
        msg.innerText=(`You Win!`);
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cScore.innerText= compScore;
        console.log("you lose")
        msg.innerText =(`you lose!`);
        msg.style.backgroundColor="Red";
    }
};

const playGame=(userChoice)=>{
    console.log("uesr choice = ", userChoice);
    //generate computer choice
    const compChoice= genCompChoice();
    console.log("computer Choice =", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }else/*(userChoice==="scissors")*/{
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});