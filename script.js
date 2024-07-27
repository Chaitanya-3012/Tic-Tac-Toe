/* This block of code is setting up variables and selecting elements from the HTML document using
JavaScript. Here's a breakdown of each line: */
let resetButton = document.querySelector("#reset");
let newButton = document.querySelector(`#new`);
let boxes = document.querySelectorAll(".box");
let teamO = true;
let bannerMsg = document.querySelector(`.winnerMsg`);
let banner = document.querySelector(`.winner`);
banner.style.display = "none";

/**
 * The `reloader` function in JavaScript reloads the current page.
 */
const reloader = () => {
  location.reload();
};


/* The lines `resetButton.addEventListener("click", reloader);` and
`newButton.addEventListener("click", reloader);` are adding event listeners to the resetButton and
newButton elements respectively. */
resetButton.addEventListener("click", reloader);
newButton.addEventListener("click", reloader);

/* The `const winningPatterns` array in the JavaScript code defines all the possible winning patterns
in a tic-tac-toe game. Each sub-array within `winningPatterns` represents a combination of positions
on the game board that would result in a win for a player. */
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

/**
 * The function `disabler` disables all elements in the `box` array.
 */
const disabler = () => {
  for (let boxes of box) {
    box.disabled = true;
  }
};

/**
 * The function `checkWinner` iterates through winning patterns in a tic-tac-toe game to check for a
 * winning combination and display the winner.
 */
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

/**
 * The function `isDraw` checks if all boxes are disabled and returns true if they are.
 * @returns The function `isDraw` is checking if all the boxes in the `boxes` array are disabled. If
 * all boxes are disabled, the function will return `true`, indicating that it is a draw. If at least
 * one box is not disabled, the function will return `false`, indicating that it is not a draw.
 */
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

/* The code snippet `boxes.forEach((box) => { ... });` is setting up event listeners for each box
element in the `boxes` array. */
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
