const LEVELS = [
    {
        level: 1,
        difficulty: "Fácil",
        size: { rows: 5, cols: 5 },
        words: [
            { word: "GATO", clue: "Animal doméstico que maúlla", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "CASA", clue: "Lugar donde vives", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "SOL", clue: "Estrella que ilumina la Tierra", row: 4, col: 2, direction: "horizontal", number: 5 },
            { word: "GATO", clue: "Felino doméstico (vertical)", row: 0, col: 0, direction: "vertical", number: 1 },
            { word: "MESA", clue: "Mueble para comer", row: 0, col: 3, direction: "vertical", number: 2 }
        ],
        hints: 3
    },
    {
        level: 2,
        difficulty: "Medio",
        size: { rows: 7, cols: 7 },
        words: [
            { word: "LIBRO", clue: "Conjunto de páginas para leer", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "PERRO", clue: "Mejor amigo del hombre", row: 2, col: 1, direction: "horizontal", number: 4 },
            { word: "AGUA", clue: "Líquido vital para la vida", row: 4, col: 0, direction: "horizontal", number: 6 },
            { word: "FLOR", clue: "Parte colorida de las plantas", row: 6, col: 3, direction: "horizontal", number: 8 },
            { word: "LUNA", clue: "Satélite natural de la Tierra", row: 0, col: 0, direction: "vertical", number: 1 },
            { word: "ISLA", clue: "Tierra rodeada de agua", row: 0, col: 2, direction: "vertical", number: 2 },
            { word: "ROJO", clue: "Color del fuego", row: 2, col: 4, direction: "vertical", number: 5 }
        ],
        hints: 3
    },
    {
        level: 3,
        difficulty: "Intermedio",
        size: { rows: 8, cols: 8 },
        words: [
            { word: "COMPUTADORA", clue: "Máquina para procesar información", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "TELEFONO", clue: "Dispositivo para comunicarse", row: 2, col: 0, direction: "horizontal", number: 4 },
            { word: "VENTANA", clue: "Abertura en la pared para luz", row: 4, col: 1, direction: "horizontal", number: 7 },
            { word: "PUERTA", clue: "Entrada a una habitación", row: 6, col: 2, direction: "horizontal", number: 9 },
            { word: "CIELO", clue: "Espacio sobre nuestras cabezas", row: 0, col: 0, direction: "vertical", number: 1 },
            { word: "MONTE", clue: "Elevación natural del terreno", row: 0, col: 3, direction: "vertical", number: 2 },
            { word: "TREN", clue: "Transporte sobre rieles", row: 2, col: 5, direction: "vertical", number: 5 },
            { word: "ARENA", clue: "Partículas finas en la playa", row: 4, col: 7, direction: "vertical", number: 8 }
        ],
        hints: 4
    },
    {
        level: 4,
        difficulty: "Difícil",
        size: { rows: 9, cols: 9 },
        words: [
            { word: "MARIPOSA", clue: "Insecto con alas coloridas", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "ELEFANTE", clue: "Mamífero con trompa", row: 2, col: 1, direction: "horizontal", number: 5 },
            { word: "GUITARRA", clue: "Instrumento de cuerdas", row: 4, col: 0, direction: "horizontal", number: 8 },
            { word: "MONTAÑA", clue: "Gran elevación de tierra", row: 6, col: 2, direction: "horizontal", number: 11 },
            { word: "MEDICINA", clue: "Sustancia para curar", row: 0, col: 0, direction: "vertical", number: 1 },
            { word: "ALEGRIA", clue: "Sentimiento de felicidad", row: 0, col: 2, direction: "vertical", number: 2 },
            { word: "PINTURA", clue: "Arte de colorear superficies", row: 2, col: 4, direction: "vertical", number: 6 },
            { word: "ESTRELLA", clue: "Cuerpo celeste luminoso", row: 0, col: 6, direction: "vertical", number: 3 },
            { word: "TIGRE", clue: "Felino rayado", row: 4, col: 8, direction: "vertical", number: 9 }
        ],
        hints: 4
    },
    {
        level: 5,
        difficulty: "Experto",
        size: { rows: 10, cols: 10 },
        words: [
            { word: "ARQUITECTURA", clue: "Arte de diseñar edificios", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "DINOSAURIO", clue: "Reptil prehistórico extinto", row: 2, col: 0, direction: "horizontal", number: 6 },
            { word: "TELESCOPIO", clue: "Instrumento para ver estrellas", row: 4, col: 0, direction: "horizontal", number: 10 },
            { word: "MARIPOSA", clue: "Insecto que fue oruga", row: 6, col: 2, direction: "horizontal", number: 13 },
            { word: "VOLCAN", clue: "Montaña que expulsa lava", row: 8, col: 4, direction: "horizontal", number: 15 },
            { word: "AVENTURA", clue: "Experiencia emocionante", row: 0, col: 0, direction: "vertical", number: 1 },
            { word: "RELAMPAGO", clue: "Descarga eléctrica en tormenta", row: 0, col: 2, direction: "vertical", number: 2 },
            { word: "UNIVERSO", clue: "Todo lo que existe", row: 2, col: 4, direction: "vertical", number: 7 },
            { word: "TORNADO", clue: "Viento giratorio destructivo", row: 0, col: 6, direction: "vertical", number: 3 },
            { word: "OCEANO", clue: "Gran masa de agua salada", row: 4, col: 8, direction: "vertical", number: 11 }
        ],
        hints: 5
    }
];

class CrosswordGame {
    constructor() {
        this.currentLevel = 0;
        this.attempts = 0;
        this.score = 0;
        this.hintsLeft = 0;
        this.grid = [];
        this.currentWord = null;
        this.completedWords = new Set();
        
        this.initializeElements();
        this.loadProgress();
        this.loadLevel(this.currentLevel);
        this.attachEventListeners();
    }

    initializeElements() {
        this.gridElement = document.getElementById('crossword-grid');
        this.levelElement = document.getElementById('current-level');
        this.attemptsElement = document.getElementById('attempts');
        this.scoreElement = document.getElementById('score');
        this.hintsElement = document.getElementById('hints-left');
        this.messageElement = document.getElementById('message');
        this.hintBtn = document.getElementById('hint-btn');
        this.checkBtn = document.getElementById('check-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalStats = document.getElementById('modal-stats');
        this.modalBtn = document.getElementById('modal-btn');
        this.horizontalClues = document.getElementById('horizontal-clues');
        this.verticalClues = document.getElementById('vertical-clues');
    }

    loadProgress() {
        const saved = localStorage.getItem('crosswordProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentLevel = progress.currentLevel || 0;
            this.score = progress.score || 0;
        }
    }

    saveProgress() {
        localStorage.setItem('crosswordProgress', JSON.stringify({
            currentLevel: this.currentLevel,
            score: this.score
        }));
    }

    loadLevel(levelIndex) {
        if (levelIndex >= LEVELS.length) {
            this.showGameComplete();
            return;
        }

        const level = LEVELS[levelIndex];
        this.attempts = 0;
        this.hintsLeft = level.hints;
        this.completedWords.clear();
        this.currentWord = null;
        
        this.updateUI();
        this.createGrid(level);
        this.displayClues(level);
        this.showMessage(`Nivel ${level.level}: ${level.difficulty}`, 'info');
    }

    createGrid(level) {
        this.grid = Array(level.size.rows).fill(null).map(() => 
            Array(level.size.cols).fill(null).map(() => ({ letter: '', isBlack: true, number: null, words: [] }))
        );

        level.words.forEach(wordData => {
            for (let i = 0; i < wordData.word.length; i++) {
                const row = wordData.direction === 'horizontal' ? wordData.row : wordData.row + i;
                const col = wordData.direction === 'horizontal' ? wordData.col + i : wordData.col;
                
                if (row < level.size.rows && col < level.size.cols) {
                    this.grid[row][col].isBlack = false;
                    this.grid[row][col].letter = wordData.word[i];
                    this.grid[row][col].words.push({
                        word: wordData.word,
                        direction: wordData.direction,
                        number: wordData.number
                    });
                    
                    if (i === 0) {
                        this.grid[row][col].number = wordData.number;
                    }
                }
            }
        });

        this.renderGrid(level);
    }

    renderGrid(level) {
        this.gridElement.innerHTML = '';
        this.gridElement.style.gridTemplateColumns = `repeat(${level.size.cols}, var(--cell-size))`;
        this.gridElement.style.gridTemplateRows = `repeat(${level.size.rows}, var(--cell-size))`;

        for (let row = 0; row < level.size.rows; row++) {
            for (let col = 0; col < level.size.cols; col++) {
                const cellData = this.grid[row][col];
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;

                if (cellData.isBlack) {
                    cell.classList.add('empty');
                } else {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.maxLength = 1;
                    input.dataset.row = row;
                    input.dataset.col = col;
                    input.dataset.answer = cellData.letter;
                    
                    input.addEventListener('input', (e) => this.handleInput(e));
                    input.addEventListener('keydown', (e) => this.handleKeydown(e));
                    input.addEventListener('focus', (e) => this.handleFocus(e));
                    
                    cell.appendChild(input);

                    if (cellData.number) {
                        const number = document.createElement('span');
                        number.className = 'number';
                        number.textContent = cellData.number;
                        cell.appendChild(number);
                    }
                }

                this.gridElement.appendChild(cell);
            }
        }
    }

    displayClues(level) {
        this.horizontalClues.innerHTML = '';
        this.verticalClues.innerHTML = '';

        const horizontal = level.words.filter(w => w.direction === 'horizontal');
        const vertical = level.words.filter(w => w.direction === 'vertical');

        horizontal.forEach(word => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="clue-number">${word.number}.</span>${word.clue}`;
            li.dataset.word = word.word;
            li.dataset.direction = word.direction;
            li.dataset.row = word.row;
            li.dataset.col = word.col;
            li.addEventListener('click', () => this.highlightWord(word));
            this.horizontalClues.appendChild(li);
        });

        vertical.forEach(word => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="clue-number">${word.number}.</span>${word.clue}`;
            li.dataset.word = word.word;
            li.dataset.direction = word.direction;
            li.dataset.row = word.row;
            li.dataset.col = word.col;
            li.addEventListener('click', () => this.highlightWord(word));
            this.verticalClues.appendChild(li);
        });
    }

    highlightWord(wordData) {
        document.querySelectorAll('.cell.active').forEach(cell => cell.classList.remove('active'));
        document.querySelectorAll('.clues-column li.active').forEach(li => li.classList.remove('active'));

        for (let i = 0; i < wordData.word.length; i++) {
            const row = wordData.direction === 'horizontal' ? wordData.row : wordData.row + i;
            const col = wordData.direction === 'horizontal' ? wordData.col + i : wordData.col;
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            if (cell && !cell.classList.contains('empty')) {
                cell.classList.add('active');
            }
        }

        const clue = document.querySelector(
            `.clues-column li[data-word="${wordData.word}"][data-direction="${wordData.direction}"]`
        );
        if (clue) {
            clue.classList.add('active');
            clue.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        this.currentWord = wordData;

        const firstRow = wordData.row;
        const firstCol = wordData.col;
        const firstInput = document.querySelector(`input[data-row="${firstRow}"][data-col="${firstCol}"]`);
        if (firstInput) {
            firstInput.focus();
        }
    }

    handleInput(e) {
        const input = e.target;
        const value = input.value.toUpperCase().replace(/[^A-ZÁÉÍÓÚÑ]/g, '');
        input.value = value;

        if (value && this.currentWord) {
            this.moveToNextCell(input);
        }
    }

    handleKeydown(e) {
        const input = e.target;
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);

        if (e.key === 'Backspace' && !input.value) {
            this.moveToPreviousCell(input);
        } else if (e.key === 'ArrowRight') {
            this.moveCell(row, col, 0, 1);
        } else if (e.key === 'ArrowLeft') {
            this.moveCell(row, col, 0, -1);
        } else if (e.key === 'ArrowDown') {
            this.moveCell(row, col, 1, 0);
        } else if (e.key === 'ArrowUp') {
            this.moveCell(row, col, -1, 0);
        }
    }

    handleFocus(e) {
        const input = e.target;
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);
        const cellData = this.grid[row][col];

        if (cellData.words.length > 0 && !this.currentWord) {
            const wordInfo = cellData.words[0];
            const level = LEVELS[this.currentLevel];
            const fullWord = level.words.find(w => 
                w.word === wordInfo.word && w.direction === wordInfo.direction
            );
            if (fullWord) {
                this.highlightWord(fullWord);
            }
        }
    }

    moveToNextCell(currentInput) {
        if (!this.currentWord) return;

        const row = parseInt(currentInput.dataset.row);
        const col = parseInt(currentInput.dataset.col);

        if (this.currentWord.direction === 'horizontal') {
            this.moveCell(row, col, 0, 1);
        } else {
            this.moveCell(row, col, 1, 0);
        }
    }

    moveToPreviousCell(currentInput) {
        if (!this.currentWord) return;

        const row = parseInt(currentInput.dataset.row);
        const col = parseInt(currentInput.dataset.col);

        if (this.currentWord.direction === 'horizontal') {
            this.moveCell(row, col, 0, -1);
        } else {
            this.moveCell(row, col, -1, 0);
        }
    }

    moveCell(row, col, rowDelta, colDelta) {
        const newRow = row + rowDelta;
        const newCol = col + colDelta;
        const level = LEVELS[this.currentLevel];

        if (newRow >= 0 && newRow < level.size.rows && newCol >= 0 && newCol < level.size.cols) {
            const nextInput = document.querySelector(`input[data-row="${newRow}"][data-col="${newCol}"]`);
            if (nextInput) {
                nextInput.focus();
                nextInput.select();
            }
        }
    }

    checkAnswers() {
        this.attempts++;
        this.updateUI();

        const inputs = document.querySelectorAll('.cell input');
        let allCorrect = true;
        let filledCount = 0;

        inputs.forEach(input => {
            const userAnswer = input.value.toUpperCase();
            const correctAnswer = input.dataset.answer;

            input.parentElement.classList.remove('correct', 'incorrect');

            if (userAnswer) {
                filledCount++;
                if (userAnswer === correctAnswer) {
                    input.parentElement.classList.add('correct');
                } else {
                    input.parentElement.classList.add('incorrect');
                    allCorrect = false;
                }
            } else {
                allCorrect = false;
            }
        });

        if (filledCount === 0) {
            this.showMessage('Por favor, completa al menos una letra', 'error');
            return;
        }

        if (allCorrect) {
            this.levelComplete();
        } else {
            this.showMessage('Algunas respuestas son incorrectas. ¡Sigue intentando!', 'error');
            setTimeout(() => {
                document.querySelectorAll('.cell.incorrect').forEach(cell => {
                    cell.classList.remove('incorrect');
                });
            }, 1500);
        }
    }

    useHint() {
        if (this.hintsLeft <= 0) {
            this.showMessage('No te quedan pistas disponibles', 'error');
            return;
        }

        const level = LEVELS[this.currentLevel];
        const emptyInputs = Array.from(document.querySelectorAll('.cell input'))
            .filter(input => !input.value && !input.parentElement.classList.contains('hint'));

        if (emptyInputs.length === 0) {
            this.showMessage('Ya has usado todas las pistas posibles', 'info');
            return;
        }

        const randomInput = emptyInputs[Math.floor(Math.random() * emptyInputs.length)];
        randomInput.value = randomInput.dataset.answer;
        randomInput.parentElement.classList.add('hint');
        randomInput.disabled = true;

        this.hintsLeft--;
        this.updateUI();
        this.showMessage('¡Pista revelada!', 'info');
    }

    resetLevel() {
        const inputs = document.querySelectorAll('.cell input');
        inputs.forEach(input => {
            if (!input.disabled) {
                input.value = '';
                input.parentElement.classList.remove('correct', 'incorrect', 'active');
            }
        });
        
        document.querySelectorAll('.clues-column li.active').forEach(li => li.classList.remove('active'));
        this.currentWord = null;
        this.showMessage('Nivel reiniciado', 'info');
    }

    levelComplete() {
        const level = LEVELS[this.currentLevel];
        const baseScore = 1000;
        const attemptPenalty = Math.max(0, (this.attempts - 1) * 50);
        const hintPenalty = (level.hints - this.hintsLeft) * 100;
        const levelScore = Math.max(100, baseScore - attemptPenalty - hintPenalty);
        
        this.score += levelScore;
        this.saveProgress();

        this.modalTitle.textContent = '🎉 ¡Nivel Completado!';
        this.modalMessage.textContent = `¡Excelente trabajo! Has completado el nivel ${level.level}.`;
        this.modalStats.innerHTML = `
            <p><strong>Intentos:</strong> ${this.attempts}</p>
            <p><strong>Pistas usadas:</strong> ${level.hints - this.hintsLeft}</p>
            <p><strong>Puntos ganados:</strong> ${levelScore}</p>
            <p><strong>Puntuación total:</strong> ${this.score}</p>
        `;

        if (this.currentLevel < LEVELS.length - 1) {
            this.modalBtn.textContent = 'Siguiente Nivel';
            this.modalBtn.onclick = () => {
                this.currentLevel++;
                this.saveProgress();
                this.loadLevel(this.currentLevel);
                this.hideModal();
            };
        } else {
            this.modalBtn.textContent = 'Ver Resultados Finales';
            this.modalBtn.onclick = () => {
                this.hideModal();
                this.showGameComplete();
            };
        }

        this.showModal();
    }

    showGameComplete() {
        this.modalTitle.textContent = '🏆 ¡Juego Completado!';
        this.modalMessage.textContent = '¡Felicidades! Has completado todos los niveles del crucigrama.';
        this.modalStats.innerHTML = `
            <p><strong>Puntuación Final:</strong> ${this.score}</p>
            <p><strong>Niveles Completados:</strong> ${LEVELS.length}</p>
            <p style="margin-top: 20px; font-size: 1.2rem;">¡Eres un maestro del crucigrama! 🎯</p>
        `;
        this.modalBtn.textContent = 'Jugar de Nuevo';
        this.modalBtn.onclick = () => {
            this.currentLevel = 0;
            this.score = 0;
            this.saveProgress();
            this.loadLevel(0);
            this.hideModal();
        };
        this.showModal();
    }

    showModal() {
        this.modal.classList.add('show');
    }

    hideModal() {
        this.modal.classList.remove('show');
    }

    showMessage(text, type) {
        this.messageElement.textContent = text;
        this.messageElement.className = `message ${type}`;
        
        setTimeout(() => {
            this.messageElement.className = 'message';
            this.messageElement.textContent = '';
        }, 3000);
    }

    updateUI() {
        this.levelElement.textContent = this.currentLevel + 1;
        this.attemptsElement.textContent = this.attempts;
        this.scoreElement.textContent = this.score;
        this.hintsElement.textContent = this.hintsLeft;
        this.hintBtn.disabled = this.hintsLeft <= 0;
    }

    attachEventListeners() {
        this.checkBtn.addEventListener('click', () => this.checkAnswers());
        this.hintBtn.addEventListener('click', () => this.useHint());
        this.resetBtn.addEventListener('click', () => this.resetLevel());
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CrosswordGame();
});
