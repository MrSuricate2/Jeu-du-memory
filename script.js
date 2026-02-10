// ===== CONFIGURATION DU JEU =====
const emojis = [
    '🎮', '🎯', '🎪', '🎨', '🎭', '🎬', 
    '🚀', '⚡', '🌈', '🌟', '💫', '✨',
    '🦄', '🐉', '🦋', '🐙', '🦊', '🐼',
    '🍕', '🍔', '🍰', '🍦', '🍭', '🎂',
    '⚽', '🏀', '🎾', '🏐', '🎱', '🎳'
];

const difficultyConfig = {
    easy: { pairs: 4, gridClass: 'easy' },
    medium: { pairs: 8, gridClass: 'medium' },
    hard: { pairs: 12, gridClass: 'hard' }
};

// ===== VARIABLES GLOBALES =====
let gameState = {
    currentDifficulty: null,
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    timer: 0,
    timerInterval: null,
    isProcessing: false
};

// ===== ÉLÉMENTS DU DOM =====
const screens = {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    win: document.getElementById('winScreen')
};

const elements = {
    gameBoard: document.getElementById('gameBoard'),
    timer: document.getElementById('timer'),
    moves: document.getElementById('moves'),
    pairs: document.getElementById('pairs'),
    finalTime: document.getElementById('finalTime'),
    finalMoves: document.getElementById('finalMoves'),
    finalScore: document.getElementById('finalScore'),
    newRecord: document.getElementById('newRecord'),
    bestScoreEasy: document.getElementById('bestScoreEasy'),
    bestScoreMedium: document.getElementById('bestScoreMedium'),
    bestScoreHard: document.getElementById('bestScoreHard')
};

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadBestScores();
    setupEventListeners();
    initDarkMode();
});

// ===== DARK MODE =====
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const toggleIcon = document.querySelector('.toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';
    } else {
        toggleIcon.textContent = '🌙';
    }
}

function setupEventListeners() {
    // Boutons de difficulté
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            startGame(level);
        });
    });

    // Bouton Dark Mode
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    // Boutons de navigation
    document.getElementById('quitBtn').addEventListener('click', () => {
        if (confirm('Veux-tu vraiment quitter la partie ?')) {
            showScreen('start');
            resetGame();
        }
    });

    document.getElementById('playAgainBtn').addEventListener('click', () => {
        startGame(gameState.currentDifficulty);
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        showScreen('start');
        resetGame();
    });
}

// ===== GESTION DES ÉCRANS =====
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ===== DÉMARRAGE DU JEU =====
function startGame(difficulty) {
    gameState.currentDifficulty = difficulty;
    resetGame();
    
    const config = difficultyConfig[difficulty];
    const selectedEmojis = getRandomEmojis(config.pairs);
    const cardEmojis = [...selectedEmojis, ...selectedEmojis];
    shuffleArray(cardEmojis);
    
    gameState.cards = cardEmojis;
    elements.pairs.textContent = `0/${config.pairs}`;
    
    createBoard(cardEmojis, config.gridClass);
    showScreen('game');
    startTimer();
}

function resetGame() {
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.moves = 0;
    gameState.timer = 0;
    gameState.isProcessing = false;
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    elements.moves.textContent = '0';
    elements.timer.textContent = '0:00';
    elements.gameBoard.innerHTML = '';
}

// ===== CRÉATION DU PLATEAU =====
function createBoard(cardEmojis, gridClass) {
    elements.gameBoard.className = `game-board ${gridClass}`;
    
    cardEmojis.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-front">❓</div>
            <div class="card-back">${emoji}</div>
        `;
        
        card.addEventListener('click', () => handleCardClick(card));
        elements.gameBoard.appendChild(card);
    });
}

// ===== GESTION DES CARTES =====
function handleCardClick(card) {
    // Empêcher les clics pendant le traitement ou sur cartes déjà retournées
    if (gameState.isProcessing || 
        card.classList.contains('flipped') || 
        card.classList.contains('matched')) {
        return;
    }
    
    // Retourner la carte
    card.classList.add('flipped');
    gameState.flippedCards.push(card);
    
    // Vérifier si deux cartes sont retournées
    if (gameState.flippedCards.length === 2) {
        gameState.isProcessing = true;
        gameState.moves++;
        elements.moves.textContent = gameState.moves;
        
        setTimeout(() => checkMatch(), 600);
    }
}

function checkMatch() {
    const [card1, card2] = gameState.flippedCards;
    const emoji1 = card1.dataset.emoji;
    const emoji2 = card2.dataset.emoji;
    
    if (emoji1 === emoji2) {
        // Paire trouvée !
        card1.classList.add('matched');
        card2.classList.add('matched');
        gameState.matchedPairs++;
        
        const totalPairs = difficultyConfig[gameState.currentDifficulty].pairs;
        elements.pairs.textContent = `${gameState.matchedPairs}/${totalPairs}`;
        
        // Vérifier si le jeu est terminé
        if (gameState.matchedPairs === totalPairs) {
            setTimeout(() => endGame(), 500);
        }
    } else {
        // Pas de correspondance, retourner les cartes
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 400);
    }
    
    gameState.flippedCards = [];
    gameState.isProcessing = false;
}

// ===== CHRONOMÈTRE =====
function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timer++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timer / 60);
    const seconds = gameState.timer % 60;
    elements.timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// ===== FIN DE PARTIE =====
function endGame() {
    clearInterval(gameState.timerInterval);
    
    // Calculer le score (plus bas = meilleur)
    const score = gameState.moves * 10 + gameState.timer;
    
    // Afficher les statistiques
    elements.finalTime.textContent = elements.timer.textContent;
    elements.finalMoves.textContent = gameState.moves;
    elements.finalScore.textContent = score;
    
    // Vérifier et sauvegarder le meilleur score
    const isNewRecord = checkAndSaveBestScore(score);
    
    if (isNewRecord) {
        elements.newRecord.classList.remove('hidden');
    } else {
        elements.newRecord.classList.add('hidden');
    }
    
    showScreen('win');
}

// ===== GESTION DES SCORES =====
function checkAndSaveBestScore(currentScore) {
    const difficulty = gameState.currentDifficulty;
    const storageKey = `bestScore_${difficulty}`;
    const bestScore = localStorage.getItem(storageKey);
    
    if (!bestScore || currentScore < parseInt(bestScore)) {
        localStorage.setItem(storageKey, currentScore);
        loadBestScores();
        return true;
    }
    
    return false;
}

function loadBestScores() {
    ['easy', 'medium', 'hard'].forEach(difficulty => {
        const score = localStorage.getItem(`bestScore_${difficulty}`);
        const elementId = `bestScore${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
        const element = document.getElementById(elementId);
        
        if (score) {
            element.textContent = score;
        } else {
            element.textContent = '--';
        }
    });
}

// ===== FONCTIONS UTILITAIRES =====
function getRandomEmojis(count) {
    const shuffled = [...emojis].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}