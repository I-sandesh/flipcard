let level = 4;
let score = 0;
let time = 60;
let moveLeft = 0;

const IMAGES = [
    "https://i0.wp.com/allpicts.in/wp-content/uploads/2018/03/Natural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg?resize=700%2C400"
];

const gameGrid = document.querySelector('.game-grid');
function initGame(){
    gameGrid.style = `--l: ${level}`
    for(var i = 0;i<level;i++){
        for(var j = 0;j<level;j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id',`box${i}${j}`);
            gameGrid.appendChild(cell);
            
            const img = document.createElement("img");
            img.src = IMAGES[0];

            const d = document.createElement('div');

            cell.appendChild(img);
            cell.appendChild(d);

            cell.addEventListener("click",()=>{
                cell.classList.toggle("open");
            })
        }
    }
}
initGame();