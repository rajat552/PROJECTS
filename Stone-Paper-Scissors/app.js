let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const geCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("Gamee was Draw.......");
    msg.innerText = "Game was draw..Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++;
        userscorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `Youn Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compscorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `Youn Lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }


}

const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
    // Generate computer choice -> modular
    const compchoice = geCompChoice();
    console.log("computer choice = ",compchoice);

    if(userchoice === compchoice){
        // Draw
        drawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            //scissors , paper
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            // rock , scissors
            userwin = compchoice === "scissors" ? false : true;
        }else {
            // rock , paper
            userwin = compchoice === "rock" ? false : true; 
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {  
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});