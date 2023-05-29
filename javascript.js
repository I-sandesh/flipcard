let level = 4;
let score = 0;
let time = 60;
let moveLeft = 0;


const gameGrid = document.querySelector('.game-grid');

for(var i = 0;i<level;i++){
    for(var j = 0;j<level;j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id',`box${i}${j}`);
        gameGrid.appendChild(cell);
    }
}
