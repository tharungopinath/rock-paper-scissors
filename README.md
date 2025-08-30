# Rock Paper Scissors 🎮

This is a simple **Rock-Paper-Scissors** game built with **JavaScript**.  
It runs directly in the browser console and plays out a best-of-5 match between you and the computer.

---

## 🚀 How to Play
1. Visit the live page here: [Rock Paper Scissors](https://tharungopinath.github.io/rock-paper-scissors/)  
2. Open your browser’s **Developer Console**:
   - Windows/Linux: `Ctrl + Shift + J` (Chrome) or `F12`
   - Mac: `Cmd + Option + J`  
3. Type:
   ```js
   playGame();
   ```
   and press **Enter**.  
4. The game will run for **5 rounds**. Each round:
   - You’ll be prompted to enter **Rock**, **Paper**, or **Scissors**.
   - The computer will randomly select its move.
   - The winner of the round will be logged in the console.  

At the end of 5 rounds, the final winner (or a draw) will be announced.

---

## 🛠️ How It Works
- **Computer choice** is generated randomly (`Math.random()`).
- **Player choice** is entered via a `prompt()` popup.
- A `for` loop runs 5 rounds, keeping track of scores.
- After all rounds, the game displays the result and resets the score.

---

## 📂 Project Structure
```
rock-paper-scissors/
├── index.html     # Basic HTML boilerplate
├── script.js      # Contains the Rock Paper Scissors game logic
└── README.md      # Project documentation
```

---

## 📖 Example Console Output
```
What do you choose (Rock, Paper, or Scissors?): rock
You chose Rock, and the Computer chose Scissors. You win this round!
...
After those 5 rounds, you scored 3 point(s), while the Computer scored 2 point(s), so you win this game!
```

---

## ✨ Features
- Best-of-5 rounds with score tracking
- Input validation (invalid choices count as a loss)
- Resets scores automatically after each game

---

## 🔮 Future Improvements
- Add a user interface (buttons instead of prompt/console).
- Display scores and results directly on the webpage.
- Make the game replayable without reopening the console.
