# Hangman Word Game

A responsive, interactive Hangman word game with multiple categories and difficulty levels, built with HTML, CSS, and vanilla JavaScript.
 
https://mohan13krishna.github.io/Hangman-Word-Game/

## Features

- **Multiple Word Categories**: Choose from Animals, Countries, Fruits, Sports, and Movies
- **Three Difficulty Levels**: Easy, Medium, and Hard, affecting word complexity and scoring 
- **Responsive Design**: Fully optimized for both desktop and mobile devices
- **Interactive Gameplay**: On-screen keyboard with visual feedback and support for physical keyboard input
- **SVG Hangman Visualization**: Progressive hangman drawing that updates with each incorrect guess
- **Score System**: Points awarded based on difficulty, word length, and remaining attempts
- **Modern UI**: Clean and intuitive interface with smooth animations and transitions

## How to Play

1. Select a word category and difficulty level
2. Click "Start Game" to begin
3. Guess letters by clicking the on-screen keyboard or using your physical keyboard
4. You have 6 attempts to guess the word correctly
5. For each incorrect guess, a part of the hangman figure appears
6. The game ends when you either guess the word correctly or run out of attempts

## Installation

No installation required! Simply clone or download the repository and open `index.html` in any modern web browser.

```bash
git clone https://github.com/mohan13krishna/hangman-game.git
cd hangman-game
```

Then open `index.html` in your browser.

## File Structure

```
hangman-game/
├── index.html       # Game structure and elements
├── styles.css       # Styling and responsive design
├── script.js        # Game logic and interaction
└── README.md        # This documentation
```

## Customization

### Adding New Words

You can easily extend the word dictionaries in `script.js`:

```javascript
const wordDictionaries = {
    category: {
        easy: ['word1', 'word2', ...],
        medium: ['longer1', 'longer2', ...],
        hard: ['challenging1', 'challenging2', ...]
    },
    // Add more categories
};
```

### Modifying Difficulty Levels

Adjust the scoring multipliers in the `endGame()` function to change how difficulty affects scoring:

```javascript
const difficultyMultiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

- Local storage for high scores
- Timer-based gameplay mode
- Multiplayer functionality
- Additional word categories
- Custom word input option
- Sound effects and background music

## Credits

- Developed by Mohan Krishna
- Font: Segoe UI
- Color scheme inspired by modern UI design principles

---

Enjoy the game! If you have any suggestions or find any issues, please open an issue or submit a pull request.
