
# Tic Tac Toe Game

This project is a simple implementation of the classic Tic Tac Toe game using JavaScript for the game logic and interaction, along with HTML for the structure and CSS for styling.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Variables and Element Selection](#variables-and-element-selection)
  - [Event Listeners](#event-listeners)
  - [Game Logic](#game-logic)
    - [Reload Function](#reload-function)
    - [Winning Patterns](#winning-patterns)
    - [Disabling Function](#disabling-function)
    - [Winner Check](#winner-check)
    - [Draw Check](#draw-check)
    - [Box Click Events](#box-click-events)
- [Contributing](#contributing)
- [License](#license)

## Features

- Play a game of Tic Tac Toe with two players.
- Reset the game board to start a new game.
- Highlight the winning combination when a player wins.
- Display a message when the game is a draw.

## Installation

No installation required. Simply download the project files and open `index.html` in your web browser.

## Usage

1. Open `index.html` in your web browser.
2. Click on the boxes to place your mark (O or X).
3. The game will alternate between the two players.
4. A message will be displayed when a player wins or the game is a draw.
5. Use the "Reset" or "New Game" buttons to restart the game.

## Code Overview

### Variables and Element Selection

This block of code sets up variables and selects elements from the HTML document:

\`\`\`javascript
let resetButton = document.querySelector("#reset");
let newButton = document.querySelector(`#new`);
let boxes = document.querySelectorAll(".box");
let teamO = true;
let bannerMsg = document.querySelector(`.winnerMsg`);
let banner = document.querySelector(`.winner`);
banner.style.display = "none";
\`\`\`

### Event Listeners

Event listeners are added to the reset and new game buttons to reload the page:

\`\`\`javascript
resetButton.addEventListener("click", reloader);
newButton.addEventListener("click", reloader);
\`\`\`

### Game Logic

#### Reload Function

The \`reloader\` function reloads the current page:

\`\`\`javascript
const reloader = () => {
  location.reload();
};
\`\`\`

#### Winning Patterns

This array defines all the possible winning patterns in a tic-tac-toe game:

\`\`\`javascript
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
\`\`\`

#### Disabling Function

The \`disabler\` function disables all elements in the \`boxes\` array:

\`\`\`javascript
const disabler = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
\`\`\`

#### Winner Check

The \`checkWinner\` function iterates through winning patterns to check for a winning combination:

\`\`\`javascript
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
        bannerMsg.innerText = \`Our Winner is \${pos1}\`;
        banner.style.display = "flex";
        disabler();
        break;
      }
    }
  }
};
\`\`\`

#### Draw Check

The \`isDraw\` function checks if all boxes are disabled to determine if the game is a draw:

\`\`\`javascript
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
\`\`\`

#### Box Click Events

Event listeners are set up for each box element to handle the player's move:

\`\`\`javascript
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
      bannerMsg.innerText = \`Game is Draw \`;
      banner.style.display = "flex";
    }
  });
});
\`\`\`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
