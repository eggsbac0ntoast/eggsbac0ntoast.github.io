let rows = [];
let gameBoard = [];
let temp = 1;

function drawGrid() {
    let cursX = 0;
    let cursY = 0;
    noFill();

    for (i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            rect(cursX, cursY, 100, 100);
            cursX += 100;
        }
        cursY += 100;
        cursX = 0;
    }
}

for (let i = 0; i < 5; i++) {
    rows.push('a');
}
for (let i = 0; i < 6; i++) {
    gameBoard.push(rows);
}
