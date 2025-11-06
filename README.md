# Rock, Paper, Scissors - UI Edition 🪨📃✂️

This is the fully interactive, browser-based version of the classic **Rock, Paper, Scissors** game. It features a clean user interface (UI) and moves the entire game loop from the console to responsive buttons and an on-screen score tracker.

---

## ✨ Features & Improvements

This version represents a major upgrade from the previous console-only game:

* **Interactive UI:** Play by clicking large, accessible emoji buttons (`🪨`, `📃`, `✂️`) instead of using the console `prompt()`.
* **Best-of-Five Match:** The game runs continuously, tracking scores and declaring a definitive winner when either the Human or Computer reaches **5 points**.
* **Instant Reset:** Upon reaching a final score, the game logic automatically resets the scores (`humanScore` and `compScore` are set back to 0) so the next click begins a brand new match, immediately clearing the final winner message.
* **Clear Feedback:** Results and scores are displayed directly on the webpage for immediate feedback, managed via the `result`, `score`, and `winner` elements.
* **Modern Styling:** Styled with CSS to provide a clean, centralized, and easy-to-read layout using the Roboto font and simple button styling.

---

## 🚀 Installation and Usage

To run this project locally, or view it live:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tharungopinath/rock-paper-scissors.git](https://github.com/tharungopinath/rock-paper-scissors.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd rock-paper-scissors
    ```
3.  **Launch the Game:**
    Open the `index.html` file in your web browser.

**How to Play:** Click on one of the three choice buttons. The current round result and cumulative scores will update instantly.

---

## 🛠️ Implementation Details

The core game logic is entirely handled by event listeners attached to the choice buttons, eliminating the need for a blocking `while` or `for` loop.

### JavaScript (`script.js`)

* **Event Delegation:** A single `click` listener is attached to the parent `div` (`.choices`) and uses `event.target.id` (e.g., "rock", "paper") within a `switch` statement to determine the human's choice.
* **Game Flow:** Every click executes two functions sequentially:
    1.  `playRound()`: Determines the winner of the single round, updates the `result` text, and increments the appropriate global score variable (`humanScore` or `compScore`).
    2.  `gameOver()`: Checks if either score is 5. If true, it declares the final winner in the `winner` element and immediately resets both global scores to `0`.
* **Score Reset Logic:** The code uses the reset of `winner.textContent = ""` at the start of the click handler to clear the final game message as soon as the user tries to play the next round.

### HTML and CSS

* **HTML Structure:** The game uses three distinct `div` elements for output: `#result` (round outcome), `#score` (current match scores), and `#winner` (final match outcome).
* **CSS Styling:** Utilizes Flexbox (`display: flex;`) in the `.choices` container to space the buttons evenly and in the `.answers` container to center the text blocks vertically.

---

## 📂 Project Structure

```plaintext
rock-paper-scissors/
│
├── index.html       # Game structure and links to scripts/styles
├── styles.css       # Controls visual presentation and layout
├── script.js        # All game logic (getComputerChoice, playRound, gameOver)
└── README.md        # Project documentation
```

---

## ⚖️ License

This project is licensed under the **MIT License**.

**Copyright (c) 2025 tharun**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
