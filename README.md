
# Tic-Tac-Toe Game

This is a simple implementation of a Tic-Tac-Toe game using JavaScript. The game allows two players to take turns marking boxes on a 3x3 grid. The first player to align three marks in a row, column, or diagonal wins the game. If all boxes are marked without a winner, the game ends in a draw.

## Table of Contents
- [Setup](#setup)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [Variables and Element Selection](#variables-and-element-selection)
  - [Functions](#functions)
    - [reloader](#reloader)
    - [disabler](#disabler)
    - [checkWinner](#checkwinner)
    - [isDraw](#isdraw)
  - [Event Listeners](#event-listeners)

## Setup
No setup is required. Simply open the HTML file containing this JavaScript code in a web browser.

## Usage
Click on any box to start playing. The first player marks "O" and the second player marks "X". Click the "Reset" or "New" button to reload the game.

## Code Explanation

### Variables and Element Selection
```javascript
let resetButton = document.querySelector("#reset");
let newButton = document.querySelector(`#new`);
let boxes = document.querySelectorAll(".box");
let teamO = true;
let bannerMsg = document.querySelector(`.winnerMsg`);
let banner = document.querySelector(`.winner`);
banner.style.display = "none";
```
- `resetButton`: Selects the reset button element.
- `newButton`: Selects the new game button element.
- `boxes`: Selects all box elements in the game grid.
- `teamO`: Boolean to track which player's turn it is (true for "O", false for "X").
- `bannerMsg`: Selects the element displaying the winner message.
- `banner`: Selects the element displaying the winner banner and hides it initially.

### Functions

#### reloader
```javascript
const reloader = () => {
  location.reload();
};
```
Reloads the current page, resetting the game.

#### disabler
```javascript
const disabler = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
```
Disables all box elements, preventing further clicks.

#### checkWinner
```javascript
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
```
Checks for a winning pattern and displays the winner. Underlines the winning combination and disables all boxes if a winner is found.

#### isDraw
```javascript
const isDraw = () => {
  let disabled;
  for (const box of boxes) {
    disabled = true;
    if (!box.disabled) {
      disabled = false;
      break;
    }
  }
  return disabled;
};
```
Checks if all boxes are disabled, indicating a draw.

### Event Listeners
```javascript
resetButton.addEventListener("click", reloader);
newButton.addEventListener("click", reloader);

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
```
- `resetButton` and `newButton`: Reload the page when clicked.
- `boxes`: Add click event listeners to each box. Alternate turns between "O" and "X", check for a winner, and display a draw message if applicable.

Feel free to reach out if you have any questions or need further assistance.
