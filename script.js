let board = Array(3).fill(null).map(() => Array(3).fill(null));
let currentPlayer = "X";
let isGameOver = false;

const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
const winnerMessage = document.getElementById("winner-message");

cells.forEach((cell, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;

    cell.addEventListener("click", () => {
        if (isGameOver || board[row][col] !== null) {
            return;
        }

        board[row][col] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            isGameOver = true;
            winnerMessage.textContent = `Player ${currentPlayer} wins!`;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

resetButton.addEventListener("click", resetGame);

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }

    if (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }

    return false;
}

function resetGame() {
    board = Array(3).fill(null).map(() => Array(3).fill(null));
    currentPlayer = "X";
    isGameOver = false;
    winnerMessage.textContent = "";
    cells.forEach(cell => cell.textContent = "");
}