// Word dictionaries with hints
const wordDictionaries = {
    animals: {
        easy: {
            'dog': 'A loyal pet that barks.',
            'cat': 'A small feline that purrs.',
            'cow': 'A farm animal that gives milk.',
            'pig': 'A farm animal that loves mud.',
            'fox': 'A cunning animal with a bushy tail.',
            'ant': 'A tiny insect that works in colonies.',
            'bee': 'An insect that makes honey.',
            'bat': 'A nocturnal creature that flies.',
            'rat': 'A small rodent often found in cities.',
            'hen': 'A bird raised for eggs.'
        },
        medium: {
            'tiger': 'A striped big cat from Asia.',
            'zebra': 'A horse-like animal with black and white stripes.',
            'horse': 'A large animal used for riding.',
            'sheep': 'A woolly animal raised for fleece.',
            'goose': 'A waterfowl known for honking.',
            'snake': 'A legless reptile that slithers.',
            'eagle': 'A bird of prey with sharp eyesight.',
            'shark': 'A large fish with sharp teeth.',
            'whale': 'The largest mammal in the ocean.',
            'camel': 'A desert animal with humps.'
        },
        hard: {
            'elephant': 'A massive animal with a trunk.',
            'giraffe': 'The tallest land animal with a long neck.',
            'crocodile': 'A large reptile found in rivers.',
            'penguin': 'A flightless bird that loves cold climates.',
            'kangaroo': 'An Australian animal that hops.',
            'chimpanzee': 'A primate closely related to humans.',
            'porcupine': 'A rodent with sharp quills.',
            'octopus': 'A sea creature with eight arms.',
            'rhinoceros': 'A large animal with a horn on its nose.',
            'butterfly': 'An insect with colorful wings.'
        }
    },
    countries: {
        easy: {
            'usa': 'Home to the Statue of Liberty.',
            'peru': 'Famous for Machu Picchu.',
            'cuba': 'An island nation in the Caribbean.',
            'japan': 'Known for sushi and samurai.',
            'spain': 'Famous for flamenco dancing.',
            'italy': 'Home to the Colosseum.',
            'india': 'Known for the Taj Mahal.',
            'china': 'The Great Wall is here.',
            'kenya': 'Famous for safaris.',
            'egypt': 'Land of the pyramids.'
        },
        medium: {
            'brazil': 'Home to the Amazon rainforest.',
            'canada': 'Known for maple syrup.',
            'mexico': 'Famous for tacos and tequila.',
            'france': 'Home to the Eiffel Tower.',
            'russia': 'The largest country by land area.',
            'sweden': 'Known for its Viking history.',
            'poland': 'Famous for pierogi.',
            'turkey': 'Straddles Europe and Asia.',
            'greece': 'Birthplace of democracy.',
            'norway': 'Land of the fjords.'
        },
        hard: {
            'australia': 'Home to kangaroos and koalas.',
            'argentina': 'Famous for tango.',
            'singapore': 'A city-state in Southeast Asia.',
            'switzerland': 'Known for chocolate and mountains.',
            'thailand': 'Famous for its temples.',
            'zimbabwe': 'Home to Victoria Falls.',
            'indonesia': 'An archipelago with thousands of islands.',
            'philippines': 'Known for its beaches.',
            'bangladesh': 'Famous for its rivers.',
            'kazakhstan': 'A large country in Central Asia.'
        }
    },
    fruits: {
        easy: {
            'apple': 'A fruit that keeps the doctor away.',
            'pear': 'A sweet fruit shaped like a teardrop.',
            'grape': 'Small fruit used to make wine.',
            'kiwi': 'A fuzzy fruit with green flesh.',
            'peach': 'A juicy fruit with a pit.',
            'lime': 'A sour green citrus fruit.',
            'plum': 'A small, sweet fruit with a stone.',
            'melon': 'A large, juicy fruit often eaten in summer.',
            'fig': 'A soft fruit with many seeds.',
            'date': 'A sweet fruit from a palm tree.'
        },
        medium: {
            'orange': 'A citrus fruit full of vitamin C.',
            'banana': 'A long, curved yellow fruit.',
            'mango': 'A tropical fruit with a large seed.',
            'lemon': 'A sour yellow citrus fruit.',
            'cherry': 'A small red fruit with a pit.',
            'apricot': 'A small, orange fruit similar to a peach.',
            'papaya': 'A tropical fruit with black seeds.',
            'guava': 'A tropical fruit with pink or white flesh.',
            'coconut': 'A fruit with hard shell and water inside.',
            'lychee': 'A small fruit with a rough red skin.'
        },
        hard: {
            'pineapple': 'A spiky tropical fruit.',
            'blueberry': 'A small blue fruit full of antioxidants.',
            'strawberry': 'A red fruit with tiny seeds outside.',
            'watermelon': 'A large fruit with green rind and red flesh.',
            'pomegranate': 'A fruit with juicy red seeds.',
            'dragonfruit': 'A fruit with bright pink skin.',
            'jackfruit': 'A large, spiky fruit from Asia.',
            'blackberry': 'A dark fruit similar to a raspberry.',
            'passionfruit': 'A small fruit with juicy seeds.',
            'persimmon': 'An orange fruit that ripens in fall.'
        }
    },
    sports: {
        easy: {
            'golf': 'A game played with clubs and a small ball.',
            'pool': 'A game played on a table with cues.',
            'swim': 'An activity done in water.',
            'run': 'A sport of moving fast on foot.',
            'ski': 'A winter sport on snow.',
            'box': 'A sport of fighting with gloves.',
            'surf': 'A sport on ocean waves.',
            'judo': 'A martial art from Japan.',
            'rugby': 'A rough sport with an oval ball.',
            'bowl': 'A game of rolling balls on a lane.'
        },
        medium: {
            'tennis': 'A sport with rackets and a net.',
            'soccer': 'A game played with a round ball and feet.',
            'hockey': 'A sport played on ice or field with sticks.',
            'boxing': 'A combat sport in a ring.',
            'karate': 'A martial art with kicks and punches.',
            'rowing': 'A sport with boats and oars.',
            'cycling': 'A sport on two wheels.',
            'archery': 'A sport of shooting arrows.',
            'cricket': 'A game with bats and a small ball.',
            'skating': 'A sport on ice or wheels.'
        },
        hard: {
            'basketball': 'A sport with a hoop and ball.',
            'volleyball': 'A sport with a net and teamwork.',
            'badminton': 'A sport with a shuttlecock.',
            'gymnastics': 'A sport of flips and balance.',
            'wrestling': 'A combat sport of grappling.',
            'triathlon': 'A sport with swim, bike, and run.',
            'snowboarding': 'A winter sport on a single board.',
            'equestrian': 'A sport involving horses.',
            'waterpolo': 'A sport played in a pool with a ball.',
            'racquetball': 'A sport in a walled court.'
        }
    },
    movies: {
        easy: {
            'star': 'A sci-fi saga in a galaxy far away.',
            'hero': 'A tale of a masked crime-fighter.',
            'king': 'A story of a lion ruling the savanna.',
            'spy': 'A secret agent with gadgets.',
            'game': 'A deadly competition for survival.',
            'love': 'A romantic tale of fate.',
            'home': 'A family lost in space.',
            'ghost': 'A comedy about spirits.',
            'ring': 'A fantasy about a powerful jewel.',
            'jaws': 'A thriller about a giant shark.'
        },
        medium: {
            'matrix': 'A sci-fi about virtual reality.',
            'avatar': 'A tale of blue aliens on Pandora.',
            'titanic': 'A tragic love story on a ship.',
            'frozen': 'A princess with ice powers.',
            'godfather': 'A mafia family saga.',
            'gladiator': 'A Roman warrior’s revenge.',
            'psycho': 'A horror with a shower scene.',
            'skyfall': 'A spy facing his past.',
            'gravity': 'A survival story in space.',
            'inception': 'A dream within a dream.'
        },
        hard: {
            'interstellar': 'A space journey to save humanity.',
            'shawshank': 'A prison escape story.',
            'gladiator': 'A Roman general’s fight.',
            'goodfellas': 'A mobster’s rise and fall.',
            'inception': 'A thief enters dreams.',
            'casablanca': 'A wartime romance classic.',
            'terminator': 'A robot from the future.',
            'braveheart': 'A Scottish warrior’s rebellion.',
            'godfather': 'A crime family epic.',
            'forrest gump': 'A man runs through history.'
        }
    }
};

// Game state
let currentWord = '';
let guessedLetters = [];
let remainingAttempts = 6;
let gameActive = false;
let category = 'animals';
let difficulty = 'easy';
let score = 0;

// DOM elements
const startGameBtn = document.getElementById('startGame');
const newWordBtn = document.getElementById('newWord');
const hintBtn = document.getElementById('hintBtn');
const backToSettingsBtn = document.getElementById('backToSettings');
const settingsPanel = document.getElementById('settingsPanel');
const gameContainer = document.getElementById('gameContainer');
const wordContainer = document.getElementById('wordContainer');
const hintDisplay = document.getElementById('hintDisplay');
const keyboard = document.getElementById('keyboard');
const attemptsLeftElement = document.getElementById('attemptsLeft');
const difficultyBadge = document.getElementById('difficultyBadge');
const categoryBadge = document.getElementById('categoryBadge');
const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const correctWordElement = document.getElementById('correctWord');
const scoreElement = document.getElementById('score');
const finalAttemptsElement = document.getElementById('finalAttempts');
const playAgainBtn = document.getElementById('playAgain');

// Hangman parts in order of appearance
const hangmanParts = [
    'hangman-head',
    'hangman-body',
    'hangman-left-arm',
    'hangman-right-arm',
    'hangman-left-leg',
    'hangman-right-leg'
];

// Initialize game
function initGame() {
    startGameBtn.addEventListener('click', startGame);
    newWordBtn.addEventListener('click', newWord);
    hintBtn.addEventListener('click', showHint);
    backToSettingsBtn.addEventListener('click', backToSettings);
    playAgainBtn.addEventListener('click', closeModal);
    createKeyboard();
    document.addEventListener('keydown', handleKeyPress);
}

// Create keyboard UI
function createKeyboard() {
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');
    keyboard.innerHTML = '';
    keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key', 'btn', 'btn-outline-primary');
        keyElement.textContent = key;
        keyElement.setAttribute('data-key', key);
        keyElement.addEventListener('click', () => handleGuess(key));
        keyboard.appendChild(keyElement);
    });
}

// Start the game
function startGame() {
    category = document.getElementById('category').value;
    difficulty = document.getElementById('difficulty').value;
    difficultyBadge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    categoryBadge.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    settingsPanel.style.display = 'none';
    gameContainer.style.display = 'block';
    newWord();
}

// Select a new word and reset game state
function newWord() {
    resetHangman();
    guessedLetters = [];
    remainingAttempts = 6;
    attemptsLeftElement.textContent = remainingAttempts;
    gameActive = true;
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('btn-success', 'btn-danger', 'disabled');
    });
    hintDisplay.textContent = ''; // Reset hint display
    const words = Object.keys(wordDictionaries[category][difficulty]);
    currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    renderWord();
}

// Show hint
function showHint() {
    const hint = wordDictionaries[category][difficulty][currentWord.toLowerCase()];
    hintDisplay.textContent = hint || 'No hint available.';
}

// Reset hangman visual
function resetHangman() {
    hangmanParts.forEach(part => {
        document.getElementById(part).style.display = 'none';
    });
}

// Update hangman visual
function updateHangman() {
    const partToShow = hangmanParts[6 - remainingAttempts - 1];
    if (partToShow) {
        document.getElementById(partToShow).style.display = 'block';
    }
}

// Render the word
function renderWord() {
    wordContainer.innerHTML = '';
    let allLettersGuessed = true;
    for (const letter of currentWord) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        if (letter === ' ') {
            letterBox.textContent = ' ';
            letterBox.style.borderBottom = 'none';
        } else if (guessedLetters.includes(letter)) {
            letterBox.textContent = letter;
            letterBox.classList.add('correct-letter');
        } else {
            allLettersGuessed = false;
        }
        wordContainer.appendChild(letterBox);
    }
    if (allLettersGuessed && gameActive) {
        endGame(true);
    }
}

// Handle user guess
function handleGuess(letter) {
    letter = letter.toUpperCase();
    if (!gameActive || guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);
    const keyElement = document.querySelector(`[data-key="${letter.toLowerCase()}"]`);
    if (keyElement) keyElement.classList.add('disabled');
    if (currentWord.includes(letter)) {
        if (keyElement) keyElement.classList.add('btn-success');
        renderWord();
    } else {
        if (keyElement) keyElement.classList.add('btn-danger');
        remainingAttempts--;
        attemptsLeftElement.textContent = remainingAttempts;
        updateHangman();
        if (remainingAttempts <= 0) endGame(false);
    }
}

// Handle keyboard input
function handleKeyPress(event) {
    if (!gameActive) return;
    const key = event.key.toLowerCase();
    if (/^[a-z]$/.test(key)) handleGuess(key);
}

// End game
function endGame(isWin) {
    gameActive = false;
    wordContainer.innerHTML = '';
    for (const letter of currentWord) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        letterBox.textContent = letter;
        if (isWin) letterBox.classList.add('correct-letter');
        wordContainer.appendChild(letterBox);
    }
    const difficultyMultiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
    const attemptsBonus = remainingAttempts * 5;
    const wordLengthBonus = currentWord.length * 2;
    if (isWin) score += (50 + attemptsBonus + wordLengthBonus) * difficultyMultiplier;
    showResultModal(isWin);
}

// Show result modal
function showResultModal(isWin) {
    resultTitle.textContent = isWin ? 'You Won!' : 'Game Over';
    correctWordElement.textContent = currentWord;
    scoreElement.textContent = score;
    finalAttemptsElement.textContent = remainingAttempts;
    resultTitle.style.color = isWin ? '#10b981' : '#ef4444';
    resultModal.show();
}

// Close result modal
function closeModal() {
    resultModal.hide();
    newWord();
}

// Back to settings
function backToSettings() {
    gameContainer.style.display = 'none';
    settingsPanel.style.display = 'block';
    score = 0;
}

// Initialize game
window.addEventListener('DOMContentLoaded', initGame);
