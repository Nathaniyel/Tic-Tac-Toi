let boxes = document.querySelectorAll(".box");
let newgameBtn = document.querySelector("#new-btn");
let msgContiner = document.querySelector(".msg-continer");
let msg = document.querySelector("#msg");
turn0 = true;
let winnoattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetGame = () => {
    turn0 = true;
    enabelBoxes();
    msgContiner.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "X";
            turn0 = false;

        } else {
            box.innerText = "O";
            turn0 = true;

        }
        box.disabled = true;
        checkwinner();
    })
});
const enabelBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}
const showWinner = (winner) => {
    msg.innerText = `Congractulations, winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disabledBoxes();
}
const checkwinner = () => {
    for (let pattern of winnoattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                showWinner(pos1val);
            }
        }
    }
}
newgameBtn.addEventListener("click", resetGame);
newgameBtn.addEventListener("click", resetGame);