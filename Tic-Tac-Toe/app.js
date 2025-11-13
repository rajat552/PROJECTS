let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX ,playerO
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enabledBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = "Game was a Draw....";
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);