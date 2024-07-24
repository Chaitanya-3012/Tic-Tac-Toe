let resetButton = document.querySelector("#reset");
let newButton = document.querySelector(`#new`);
let boxes = document.querySelectorAll(".box");
let teamO = true;
let bannerMsg = document.querySelector(`.winnerMsg`);
let banner = document.querySelector(`.winner`);
banner.style.display = "none";

const reloader = () => {
  location.reload();
};

resetButton.addEventListener("click", reloader);
newButton.addEventListener("click", reloader);

const winningPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const disabler = () => {
  for (let boxes of box) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0] - 1].innerText;
    let pos2 = boxes[pattern[1] - 1].innerText;
    let pos3 = boxes[pattern[2] - 1].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        boxes[pattern[0] - 1].style.textDecoration = "underline";
        boxes[pattern[1] - 1].style.textDecoration = "underline";
        boxes[pattern[2] - 1].style.textDecoration = "underline";
        bannerMsg.innerText = `Our Winner is ${pos1}`;
        banner.style.display = "flex";
        disabler();
        break;
      }
    }
  }
};

const isDraw = () => {
  let disabled;
  for (const box of boxes) {
    disabled = true;
    if (!box.disabled) {
      disabled = false;
      break;
    }
  }
  if (disabled) {
    return true;
  } else {
    return false;
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (teamO) {
      box.style.color = "red";
      box.innerText = "O";

      teamO = false;
    } else {
      box.style.color = "blue";
      box.innerText = "X";
      teamO = true;
    }
    box.disabled = true;
    checkWinner();
    if (isDraw()) {
      bannerMsg.innerText = `Game is Draw `;
      banner.style.display = "flex";
    }
  });
});
