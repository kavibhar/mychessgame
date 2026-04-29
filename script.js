const board = document.getElementById("board");

// Store selected square
let selectedSquare = null;

// Basic chess board setup (simplified)
const pieces = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];

// Create board
function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        // Add color pattern
        if ((Math.floor(i / 8) + i) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }

        // Add piece
        square.textContent = pieces[i];

        // Click event
        square.addEventListener("click", () => handleClick(square));

        board.appendChild(square);
    }
}

// Handle clicking squares
function handleClick(square) {

    // If nothing selected → select
    if (!selectedSquare) {
        if (square.textContent !== "") {
            selectedSquare = square;
            square.classList.add("selected");
        }
    } 
    // If already selected → move
    else {
        square.textContent = selectedSquare.textContent;
        selectedSquare.textContent = "";

        selectedSquare.classList.remove("selected");
        selectedSquare = null;
    }
}

// Initialize board
createBoard();