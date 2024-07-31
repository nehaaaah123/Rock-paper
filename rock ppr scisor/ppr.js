let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock", "paper" , "scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText="Game Draw! play again!";
    msg.style.backgroundColor = "black";
};

const showinner=(userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText="you Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText="you lose!";
        msg.style.backgroundColor = "red";
    }
};
const PlayGame = (userChoice) => {
    const compChoice = gencompchoice();   
    if(userChoice === compChoice){
        drawGame();
    }
    
    else{
        let userWin = true;
        if(userChoice==="rock"){
            compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false :true;
        }
        else{
            userWin=compChoice === "rock" ? false : true;
        }
        showinner(userWin);
    }
};

choices.forEach((choice) => {
   choice.addEventListener( "click" , () => {
        const userChoice = choice.getAttribute("id");
    PlayGame(userChoice);
    });
});