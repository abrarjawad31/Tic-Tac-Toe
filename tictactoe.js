let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");

let count = 0;

 let turnX = true;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        box.innerText = turnX ? "X" : "O";
        turnX = !turnX;
        box.disabled = true;
        checkWin();
    })
})

const resetGame = () => {
    turnX = true;
    count = 0;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const checkWin = () => {
    for(let combo of winCombos) {
        const [a, b, c] = combo;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;
        if(val1 !=="" && val1 === val2 && val2 === val3) {
            alert(`${val1} wins!`);
            boxes.forEach((box) => {
                box.disabled = true;
            });
            return;
        }
    }
    if(count === 9) {
        alert("It's a draw!");
        return;
    }
}
newBtn.addEventListener("click", resetGame);

