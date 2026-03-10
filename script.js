const LEVELS = [
    {
        level: 0,
        difficulty: "Tutorial",
        theme: "Misión de Entrenamiento",
        phrase: "Hola agente, bienvenido a tu nueva misión. En esta misión debes descubrir las palabras de cada fila, esta atento a las pistas",
        size: { rows: 3, cols: 11 },
        words: [
            { word: "COMPUTADORA", clue: "Máquina que procesa información", hint: "11 letras, PC", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "TECLADO", clue: "Dispositivo con letras y números", hint: "7 letras, sirve para escribir", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "RATON", clue: "Dispositivo que mueves con la mano", hint: "5 letras, tiene botón", row: 2, col: 0, direction: "horizontal", number: 3 }
        ],
        prefilledLetters: [
            // COMPUTADORA - dejar solo 1 letra sin completar (la O en posición 6)
            { row: 0, col: 0, letter: "C" },
            { row: 0, col: 1, letter: "O" },
            { row: 0, col: 2, letter: "M" },
            { row: 0, col: 3, letter: "P" },
            { row: 0, col: 4, letter: "U" },
            { row: 0, col: 5, letter: "T" },
            { row: 0, col: 7, letter: "D" },
            { row: 0, col: 8, letter: "O" },
            { row: 0, col: 9, letter: "R" },
            { row: 0, col: 10, letter: "A" },
            // TECLADO - dejar solo 1 letra sin completar (la A en posición 5)
            { row: 1, col: 0, letter: "T" },
            { row: 1, col: 1, letter: "E" },
            { row: 1, col: 2, letter: "C" },
            { row: 1, col: 3, letter: "L" },
            { row: 1, col: 4, letter: "A" },
            { row: 1, col: 6, letter: "O" },
            // RATON - dejar solo 1 letra sin completar (la T en posición 2)
            { row: 2, col: 0, letter: "R" },
            { row: 2, col: 1, letter: "A" },
            { row: 2, col: 3, letter: "O" },
            { row: 2, col: 4, letter: "N" }
        ],
        hints: 5,
        isTutorial: true
    },
    {
        level: 1,
        difficulty: "Fácil",
        theme: "Fundamentos de Informática",
        phrase: "La tecnología conecta al mundo y transforma el futuro.",
        size: { rows: 5, cols: 10 },
        words: [
            { word: "INTERNET", clue: "Red mundial de computadoras", hint: "8 letras, red global", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "TECLADO", clue: "Periférico para escribir", hint: "7 letras, tiene teclas", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "DATOS", clue: "Información digital", hint: "5 letras, información", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "MOUSE", clue: "Dispositivo apuntador", hint: "5 letras, ratón", row: 3, col: 0, direction: "horizontal", number: 4 },
            { word: "CHIP", clue: "Circuito integrado", hint: "4 letras, microprocesador", row: 4, col: 0, direction: "horizontal", number: 5 }
        ],
        prefilledLetters: [
            // INTERNET - dejar 2 letras sin completar
            { row: 0, col: 0, letter: "I" },
            { row: 0, col: 1, letter: "N" },
            { row: 0, col: 2, letter: "T" },
            { row: 0, col: 4, letter: "R" },
            { row: 0, col: 5, letter: "N" },
            { row: 0, col: 7, letter: "T" },
            // TECLADO - dejar 2 letras sin completar
            { row: 1, col: 0, letter: "T" },
            { row: 1, col: 1, letter: "E" },
            { row: 1, col: 3, letter: "L" },
            { row: 1, col: 4, letter: "A" },
            { row: 1, col: 6, letter: "O" },
            // DATOS - dejar 2 letras sin completar
            { row: 2, col: 0, letter: "D" },
            { row: 2, col: 2, letter: "T" },
            { row: 2, col: 4, letter: "S" },
            // MOUSE - dejar 2 letras sin completar
            { row: 3, col: 0, letter: "M" },
            { row: 3, col: 2, letter: "U" },
            { row: 3, col: 4, letter: "E" },
            // CHIP - dejar 2 letras sin completar
            { row: 4, col: 0, letter: "C" },
            { row: 4, col: 3, letter: "P" }
        ],
        hints: 3
    },
    {
        level: 2,
        difficulty: "Medio",
        theme: "Internet y Redes",
        phrase: "Internet conecta mentes y abre puertas al conocimiento global.",
        size: { rows: 6, cols: 10 },
        words: [
            { word: "SERVIDOR", clue: "Computadora que provee servicios", hint: "8 letras, host de red", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "ETHERNET", clue: "Estándar de red por cable", hint: "8 letras, conexión LAN", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "ROUTER", clue: "Dispositivo de red", hint: "6 letras, enrutador", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "MODEM", clue: "Modulador-demodulador", hint: "5 letras, conecta a internet", row: 3, col: 0, direction: "horizontal", number: 4 },
            { word: "WIFI", clue: "Conexión inalámbrica", hint: "4 letras, red sin cables", row: 4, col: 0, direction: "horizontal", number: 5 },
            { word: "FIREWALL", clue: "Barrera de seguridad", hint: "8 letras, cortafuegos", row: 5, col: 0, direction: "horizontal", number: 6 }
        ],
        prefilledLetters: [
            // SERVIDOR - dejar 3 letras sin completar
            { row: 0, col: 0, letter: "S" },
            { row: 0, col: 2, letter: "R" },
            { row: 0, col: 3, letter: "V" },
            { row: 0, col: 5, letter: "D" },
            { row: 0, col: 7, letter: "R" },
            // ETHERNET - dejar 3 letras sin completar
            { row: 1, col: 0, letter: "E" },
            { row: 1, col: 2, letter: "H" },
            { row: 1, col: 4, letter: "R" },
            { row: 1, col: 5, letter: "N" },
            { row: 1, col: 7, letter: "T" },
            // ROUTER - dejar 3 letras sin completar
            { row: 2, col: 0, letter: "R" },
            { row: 2, col: 3, letter: "T" },
            { row: 2, col: 5, letter: "R" },
            // MODEM - dejar 3 letras sin completar
            { row: 3, col: 0, letter: "M" },
            { row: 3, col: 3, letter: "E" },
            // WIFI - dejar 3 letras sin completar
            { row: 4, col: 0, letter: "W" },
            // FIREWALL - dejar 3 letras sin completar
            { row: 5, col: 0, letter: "F" },
            { row: 5, col: 2, letter: "R" },
            { row: 5, col: 4, letter: "W" },
            { row: 5, col: 6, letter: "L" },
            { row: 5, col: 7, letter: "L" }
        ],
        hints: 3
    },
    {
        level: 3,
        difficulty: "Intermedio",
        theme: "Programación y Software",
        phrase: "Programar es crear soluciones lógicas para problemas reales.",
        size: { rows: 7, cols: 12 },
        words: [
            { word: "PROGRAMA", clue: "Conjunto de instrucciones", hint: "8 letras, software", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "VARIABLE", clue: "Almacena valores en código", hint: "8 letras, contenedor de datos", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "FUNCION", clue: "Bloque de código reutilizable", hint: "7 letras, subrutina", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "CLASE", clue: "Plantilla de objetos", hint: "5 letras, POO", row: 3, col: 0, direction: "horizontal", number: 4 },
            { word: "PYTHON", clue: "Lenguaje de programación", hint: "6 letras, serpiente", row: 4, col: 0, direction: "horizontal", number: 5 },
            { word: "ALGORITMO", clue: "Secuencia de pasos", hint: "9 letras, procedimiento", row: 5, col: 0, direction: "horizontal", number: 6 },
            { word: "DEBUG", clue: "Eliminar errores", hint: "5 letras, depurar", row: 6, col: 0, direction: "horizontal", number: 7 }
        ],
        prefilledLetters: [
            // PROGRAMA - dejar 4 letras sin completar
            { row: 0, col: 0, letter: "P" },
            { row: 0, col: 3, letter: "G" },
            { row: 0, col: 5, letter: "A" },
            { row: 0, col: 7, letter: "A" },
            // VARIABLE - dejar 4 letras sin completar
            { row: 1, col: 0, letter: "V" },
            { row: 1, col: 3, letter: "I" },
            { row: 1, col: 5, letter: "B" },
            { row: 1, col: 7, letter: "E" },
            // FUNCION - dejar 4 letras sin completar
            { row: 2, col: 0, letter: "F" },
            { row: 2, col: 3, letter: "C" },
            { row: 2, col: 5, letter: "O" },
            // CLASE - dejar 4 letras sin completar
            { row: 3, col: 0, letter: "C" },
            // PYTHON - dejar 4 letras sin completar
            { row: 4, col: 0, letter: "P" },
            { row: 4, col: 4, letter: "O" },
            // ALGORITMO - dejar 4 letras sin completar
            { row: 5, col: 0, letter: "A" },
            { row: 5, col: 2, letter: "G" },
            { row: 5, col: 4, letter: "R" },
            { row: 5, col: 6, letter: "T" },
            { row: 5, col: 8, letter: "O" },
            // DEBUG - dejar 4 letras sin completar
            { row: 6, col: 0, letter: "D" }
        ],
        hints: 4
    },
    {
        level: 4,
        difficulty: "Difícil",
        theme: "Hardware y Componentes",
        phrase: "El hardware es el cuerpo, el software es el alma de la computadora.",
        size: { rows: 8, cols: 12 },
        words: [
            { word: "PROCESADOR", clue: "Cerebro de la computadora", hint: "10 letras, CPU", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "MOTHERBOARD", clue: "Placa base del sistema", hint: "11 letras, placa madre", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "MEMORIA", clue: "Componente RAM", hint: "7 letras, almacena datos", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "DISCO", clue: "Dispositivo de almacenamiento", hint: "5 letras, HDD/SSD", row: 3, col: 0, direction: "horizontal", number: 4 },
            { word: "MONITOR", clue: "Pantalla de visualización", hint: "7 letras, display", row: 4, col: 0, direction: "horizontal", number: 5 },
            { word: "GRAFICA", clue: "Tarjeta de video", hint: "7 letras, GPU", row: 5, col: 0, direction: "horizontal", number: 6 },
            { word: "VENTILADOR", clue: "Sistema de enfriamiento", hint: "10 letras, cooler", row: 6, col: 0, direction: "horizontal", number: 7 },
            { word: "CACHE", clue: "Memoria rápida", hint: "5 letras, buffer", row: 7, col: 0, direction: "horizontal", number: 8 }
        ],
        prefilledLetters: [
            // PROCESADOR - dejar 5 letras sin completar
            { row: 0, col: 0, letter: "P" },
            { row: 0, col: 3, letter: "C" },
            { row: 0, col: 5, letter: "S" },
            { row: 0, col: 7, letter: "D" },
            { row: 0, col: 9, letter: "R" },
            // MOTHERBOARD - dejar 5 letras sin completar
            { row: 1, col: 0, letter: "M" },
            { row: 1, col: 3, letter: "H" },
            { row: 1, col: 5, letter: "R" },
            { row: 1, col: 6, letter: "B" },
            { row: 1, col: 9, letter: "R" },
            { row: 1, col: 10, letter: "D" },
            // MEMORIA - dejar 5 letras sin completar
            { row: 2, col: 0, letter: "M" },
            { row: 2, col: 3, letter: "O" },
            // DISCO - dejar 5 letras sin completar (solo tiene 5, dejar 3)
            { row: 3, col: 0, letter: "D" },
            { row: 3, col: 3, letter: "C" },
            // MONITOR - dejar 5 letras sin completar
            { row: 4, col: 0, letter: "M" },
            { row: 4, col: 3, letter: "I" },
            // GRAFICA - dejar 5 letras sin completar
            { row: 5, col: 0, letter: "G" },
            { row: 5, col: 3, letter: "F" },
            // VENTILADOR - dejar 5 letras sin completar
            { row: 6, col: 0, letter: "V" },
            { row: 6, col: 3, letter: "T" },
            { row: 6, col: 5, letter: "L" },
            { row: 6, col: 7, letter: "D" },
            { row: 6, col: 9, letter: "R" },
            // CACHE - dejar 5 letras sin completar (solo tiene 5, dejar 3)
            { row: 7, col: 0, letter: "C" },
            { row: 7, col: 3, letter: "H" }
        ],
        hints: 4
    },
    {
        level: 5,
        difficulty: "Experto",
        theme: "Ciberseguridad y Redes",
        phrase: "La seguridad digital protege nuestra información en el mundo conectado.",
        size: { rows: 9, cols: 13 },
        words: [
            { word: "CRIPTOGRAFIA", clue: "Ciencia de cifrar información", hint: "12 letras, encriptación", row: 0, col: 0, direction: "horizontal", number: 1 },
            { word: "CONTRASEÑA", clue: "Clave de acceso", hint: "10 letras, password", row: 1, col: 0, direction: "horizontal", number: 2 },
            { word: "ANTIVIRUS", clue: "Software de protección", hint: "9 letras, defensa", row: 2, col: 0, direction: "horizontal", number: 3 },
            { word: "ENCRIPTACION", clue: "Proceso de cifrado", hint: "12 letras, codificar", row: 3, col: 0, direction: "horizontal", number: 4 },
            { word: "PHISHING", clue: "Fraude por internet", hint: "8 letras, estafa digital", row: 4, col: 0, direction: "horizontal", number: 5 },
            { word: "MALWARE", clue: "Software malicioso", hint: "7 letras, código dañino", row: 5, col: 0, direction: "horizontal", number: 6 },
            { word: "BACKUP", clue: "Copia de seguridad", hint: "6 letras, respaldo", row: 6, col: 0, direction: "horizontal", number: 7 },
            { word: "HACKER", clue: "Experto en seguridad", hint: "6 letras, intruso digital", row: 7, col: 0, direction: "horizontal", number: 8 },
            { word: "VIRUS", clue: "Programa malicioso", hint: "5 letras, infección digital", row: 8, col: 0, direction: "horizontal", number: 9 }
        ],
        prefilledLetters: [
            // CRIPTOGRAFIA - dejar 6 letras sin completar
            { row: 0, col: 0, letter: "C" },
            { row: 0, col: 3, letter: "P" },
            { row: 0, col: 5, letter: "O" },
            { row: 0, col: 7, letter: "R" },
            { row: 0, col: 9, letter: "F" },
            { row: 0, col: 11, letter: "A" },
            // CONTRASEÑA - dejar 6 letras sin completar
            { row: 1, col: 0, letter: "C" },
            { row: 1, col: 3, letter: "T" },
            { row: 1, col: 5, letter: "A" },
            { row: 1, col: 7, letter: "E" },
            // ANTIVIRUS - dejar 6 letras sin completar
            { row: 2, col: 0, letter: "A" },
            { row: 2, col: 3, letter: "I" },
            { row: 2, col: 5, letter: "I" },
            // ENCRIPTACION - dejar 6 letras sin completar
            { row: 3, col: 0, letter: "E" },
            { row: 3, col: 3, letter: "R" },
            { row: 3, col: 5, letter: "P" },
            { row: 3, col: 7, letter: "A" },
            { row: 3, col: 9, letter: "I" },
            { row: 3, col: 10, letter: "O" },
            // PHISHING - dejar 6 letras sin completar
            { row: 4, col: 0, letter: "P" },
            { row: 4, col: 3, letter: "S" },
            // MALWARE - dejar 6 letras sin completar
            { row: 5, col: 0, letter: "M" },
            // BACKUP - dejar 6 letras sin completar (solo tiene 6, dejar 4)
            { row: 6, col: 0, letter: "B" },
            { row: 6, col: 4, letter: "U" },
            // HACKER - dejar 6 letras sin completar (solo tiene 6, dejar 4)
            { row: 7, col: 0, letter: "H" },
            { row: 7, col: 4, letter: "E" },
            // VIRUS - dejar 6 letras sin completar (solo tiene 5, dejar 3)
            { row: 8, col: 0, letter: "V" },
            { row: 8, col: 3, letter: "U" }
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
        this.focusedInput = null;

        this.initializeElements();
        this.loadProgress();
        this.loadLevel(this.currentLevel);
        this.attachEventListeners();
    }

    initializeElements() {
        this.gridElement = document.getElementById('crossword-grid');
        this.levelBadge = document.getElementById('level-badge');
        this.themeName = document.getElementById('theme-name');
        this.phraseText = document.getElementById('level-phrase');
        this.attemptsElement = document.getElementById('attempts');
        this.scoreElement = document.getElementById('score');
        this.hintsElement = document.getElementById('hints-left');
        this.messageElement = document.getElementById('message');
        this.hintBtn = document.getElementById('hint-btn');
        this.checkBtn = document.getElementById('check-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.backBtn = document.getElementById('back-btn');
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalStats = document.getElementById('modal-stats');
        this.modalBtn = document.getElementById('modal-btn');
        this.horizontalClues = document.getElementById('horizontal-clues');
        this.verticalClues = document.getElementById('vertical-clues');
        this.keyboardElement = document.getElementById('keyboard');
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
        this.currentWord = null;
        this.focusedInput = null;

        this.updateUI();
        this.levelBadge.textContent = `NIVEL ${level.level}`;
        this.themeName.textContent = level.theme;
        this.phraseText.textContent = `"${level.phrase}"`;

        this.createGrid(level);
        this.displayClues(level);
        this.buildKeyboard(level);
        
        // Mostrar mensaje de bienvenida para el tutorial
        if (level.isTutorial) {
            this.showTutorialWelcome();
        } else {
            this.showMessage(`Nivel ${level.level}: ${level.difficulty}`, 'info');
        }
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
                    input.setAttribute('readonly', 'readonly');
                    input.dataset.row = row;
                    input.dataset.col = col;
                    input.dataset.answer = cellData.letter;

                    // Check if this cell should be pre-filled
                    const isPrefilled = level.prefilledLetters && level.prefilledLetters.some(
                        pf => pf.row === row && pf.col === col
                    );

                    if (isPrefilled) {
                        const prefilledData = level.prefilledLetters.find(
                            pf => pf.row === row && pf.col === col
                        );
                        input.value = prefilledData.letter;
                        input.dataset.prefilled = 'true';
                        cell.classList.add('prefilled');
                    }

                    input.addEventListener('focus', (e) => this.handleFocus(e));
                    input.addEventListener('keydown', (e) => this.handleKeydown(e));

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

    buildKeyboard(level) {
        this.keyboardElement.innerHTML = '';

        const letters = new Set();
        level.words.forEach(w => {
            for (const ch of w.word) letters.add(ch.toUpperCase());
        });

        const sorted = Array.from(letters).sort();

        sorted.forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'key-btn';
            btn.textContent = letter;
            btn.addEventListener('click', () => this.onKeyPress(letter));
            this.keyboardElement.appendChild(btn);
        });

        const backBtn = document.createElement('button');
        backBtn.className = 'key-btn key-backspace';
        backBtn.textContent = '⌫';
        backBtn.addEventListener('click', () => this.onKeyPress('BACKSPACE'));
        this.keyboardElement.appendChild(backBtn);
    }

    onKeyPress(key) {
        if (!this.focusedInput) return;
        if (this.focusedInput.disabled) return;
        
        // Bloquear edición de celdas pre-llenadas
        if (this.focusedInput.dataset.prefilled === 'true') {
            // Si intenta editar una celda pre-llenada, mover a la siguiente
            if (key !== 'BACKSPACE') {
                this.moveToNextCell(this.focusedInput);
            }
            return;
        }

        if (key === 'BACKSPACE') {
            if (this.focusedInput.value) {
                this.focusedInput.value = '';
            } else {
                this.moveToPreviousCell(this.focusedInput);
                if (this.focusedInput && this.focusedInput.dataset.prefilled !== 'true') {
                    this.focusedInput.value = '';
                }
            }
        } else {
            this.focusedInput.value = key;
            this.moveToNextCell(this.focusedInput);
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
        document.querySelectorAll('.cell.active, .cell.selected').forEach(cell => {
            cell.classList.remove('active', 'selected');
        });
        document.querySelectorAll('.clues-section li.active').forEach(li => li.classList.remove('active'));

        for (let i = 0; i < wordData.word.length; i++) {
            const row = wordData.direction === 'horizontal' ? wordData.row : wordData.row + i;
            const col = wordData.direction === 'horizontal' ? wordData.col + i : wordData.col;
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            if (cell && !cell.classList.contains('empty')) {
                cell.classList.add('active');
            }
        }

        const clue = document.querySelector(
            `.clues-section li[data-word="${wordData.word}"][data-direction="${wordData.direction}"]`
        );
        if (clue) {
            clue.classList.add('active');
            clue.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        this.currentWord = wordData;

        const firstInput = document.querySelector(
            `input[data-row="${wordData.row}"][data-col="${wordData.col}"]`
        );
        if (firstInput) {
            this.setFocus(firstInput);
        }
    }

    setFocus(input) {
        // Si la celda está pre-llenada, buscar la siguiente celda editable
        if (input.dataset.prefilled === 'true') {
            const row = parseInt(input.dataset.row);
            const col = parseInt(input.dataset.col);
            // Intentar mover a la siguiente celda
            this.moveCell(row, col, 0, 1);
            return;
        }
        
        document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
        this.focusedInput = input;
        input.parentElement.classList.add('selected');
        input.focus();
    }

    handleFocus(e) {
        const input = e.target;
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);
        const cellData = this.grid[row][col];

        this.focusedInput = input;
        document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
        input.parentElement.classList.add('selected');

        if (cellData.words.length > 0) {
            if (!this.currentWord || !cellData.words.some(w =>
                w.word === this.currentWord.word && w.direction === this.currentWord.direction
            )) {
                const wordInfo = cellData.words[0];
                const level = LEVELS[this.currentLevel];
                const fullWord = level.words.find(w =>
                    w.word === wordInfo.word && w.direction === wordInfo.direction
                );
                if (fullWord) this.highlightWord(fullWord);
            }
        }
    }

    handleKeydown(e) {
        const input = e.target;
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);

        if (e.key === 'Backspace') {
            e.preventDefault();
            this.onKeyPress('BACKSPACE');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            this.moveCell(row, col, 0, 1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            this.moveCell(row, col, 0, -1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.moveCell(row, col, 1, 0);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.moveCell(row, col, -1, 0);
        } else if (/^[a-zA-ZáéíóúñÁÉÍÓÚÑ]$/.test(e.key)) {
            e.preventDefault();
            this.onKeyPress(e.key.toUpperCase());
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
                // Si la siguiente celda está pre-llenada, saltar a la siguiente
                if (nextInput.dataset.prefilled === 'true') {
                    this.moveCell(newRow, newCol, rowDelta, colDelta);
                } else {
                    this.setFocus(nextInput);
                }
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
            const isPrefilled = input.dataset.prefilled === 'true';
            input.parentElement.classList.remove('correct', 'incorrect');

            // Skip prefilled cells from validation
            if (isPrefilled) {
                input.parentElement.classList.add('correct');
                return;
            }

            if (userAnswer) {
                filledCount++;
                if (userAnswer === correctAnswer) {
                    input.parentElement.classList.add('correct');
                } else {
                    input.parentElement.classList.add('incorrect');
                    allCorrect = false;
                }
            } else {
                // Mark empty cells as incorrect (red)
                input.parentElement.classList.add('incorrect');
                allCorrect = false;
            }
        });

        if (filledCount === 0) {
            this.showMessage('Completa al menos una letra', 'error');
            return;
        }

        if (allCorrect) {
            this.levelComplete();
        } else {
            this.showMessage('Hay respuestas incorrectas. ¡Sigue intentando!', 'error');
            setTimeout(() => {
                document.querySelectorAll('.cell.incorrect').forEach(cell => cell.classList.remove('incorrect'));
            }, 1500);
        }
    }

    useHint() {
        if (this.hintsLeft <= 0) {
            this.showMessage('No te quedan pistas', 'error');
            return;
        }

        if (!this.currentWord) {
            this.showMessage('Selecciona una palabra primero', 'info');
            return;
        }

        const level = LEVELS[this.currentLevel];
        const wordData = this.currentWord;
        
        if (!wordData.hint) {
            this.showMessage('Esta palabra no tiene pista adicional', 'info');
            return;
        }

        this.hintsLeft--;
        this.updateUI();
        this.showMessage(`💡 Pista: ${wordData.hint}`, 'info');
    }

    resetLevel() {
        const level = LEVELS[this.currentLevel];
        const inputs = document.querySelectorAll('.cell input');
        
        inputs.forEach(input => {
            // No borrar las letras pre-llenadas
            if (input.dataset.prefilled !== 'true') {
                input.value = '';
            }
            input.disabled = false;
            input.parentElement.classList.remove('correct', 'incorrect', 'active', 'selected', 'hint-cell');
        });

        document.querySelectorAll('.clues-section li.active').forEach(li => li.classList.remove('active'));
        this.currentWord = null;
        this.focusedInput = null;
        this.hintsLeft = level.hints;
        this.updateUI();
        this.showMessage('Nivel reiniciado - pistas restauradas', 'info');
    }

    goToPreviousLevel() {
        if (this.currentLevel > 0) {
            this.currentLevel--;
            this.saveProgress();
            this.loadLevel(this.currentLevel);
            this.showMessage('Nivel anterior cargado', 'info');
        } else {
            this.showMessage('Ya estás en el primer nivel', 'info');
        }
    }

    levelComplete() {
        const level = LEVELS[this.currentLevel];
        const baseScore = 1000;
        const attemptPenalty = Math.max(0, (this.attempts - 1) * 50);
        const hintPenalty = (level.hints - this.hintsLeft) * 100;
        const levelScore = Math.max(100, baseScore - attemptPenalty - hintPenalty);

        this.score += levelScore;
        this.saveProgress();

        this.modalTitle.textContent = '¡Nivel Completado!';
        this.modalMessage.textContent = `Has completado el nivel ${level.level}.`;
        this.modalStats.innerHTML = `
            <p><strong>Intentos:</strong> ${this.attempts}</p>
            <p><strong>Pistas usadas:</strong> ${level.hints - this.hintsLeft}</p>
            <p><strong>Puntos ganados:</strong> +${levelScore}</p>
            <p><strong>Total:</strong> ${this.score}</p>
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
            this.modalBtn.textContent = 'Ver Resultados';
            this.modalBtn.onclick = () => {
                this.hideModal();
                this.showGameComplete();
            };
        }

        this.showModal();
    }

    showGameComplete() {
        this.modalTitle.textContent = '¡Juego Completado!';
        this.modalMessage.textContent = 'Has completado todos los niveles del crucigrama.';
        this.modalStats.innerHTML = `
            <p><strong>Puntuación Final:</strong> ${this.score}</p>
            <p><strong>Niveles:</strong> ${LEVELS.length}/${LEVELS.length}</p>
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

    showTutorialWelcome() {
        const level = LEVELS[this.currentLevel];
        this.modalTitle.textContent = 'Bienvenido Agente';
        this.modalMessage.textContent = level.phrase;
        this.modalStats.innerHTML = `
            <p style="margin-top: 16px; color: white; font-size: 0.9rem;">
                <strong>Instrucciones:</strong><br>
                • Lee las pistas de cada palabra<br>
                • Escribe las letras en las casillas<br>
                • Usa el teclado virtual o tu teclado físico<br>
                • Presiona "Verificar" cuando termines<br>
                • Puedes usar pistas si necesitas ayuda
            </p>
        `;
        this.modalBtn.textContent = 'Comenzar Misión';
        this.modalBtn.onclick = () => {
            this.hideModal();
            this.showMessage('¡Buena suerte agente! Completa las palabras', 'info');
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
        this.attemptsElement.textContent = this.attempts;
        this.scoreElement.textContent = this.score;
        this.hintsElement.textContent = this.hintsLeft;
        this.hintBtn.disabled = this.hintsLeft <= 0;
        this.backBtn.disabled = this.currentLevel === 0;
    }

    attachEventListeners() {
        this.checkBtn.addEventListener('click', () => this.checkAnswers());
        this.hintBtn.addEventListener('click', () => this.useHint());
        this.resetBtn.addEventListener('click', () => this.resetLevel());
        this.backBtn.addEventListener('click', () => this.goToPreviousLevel());

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new CrosswordGame();
});
