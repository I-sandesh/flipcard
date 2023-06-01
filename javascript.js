let level = 4;
let score = 0;
let time = 60;
let move = 0;
let gameStarted = false;
let selectedCell = null;
let matched = 0;

const IMAGES = [
    "https://picsum.photos/id/102/4320/3240","https://picsum.photos/id/103/2592/1936","https://picsum.photos/id/104/3840/2160","https://picsum.photos/id/106/2592/1728","https://picsum.photos/id/107/5000/3333",
    "https://picsum.photos/id/108/2000/1333","https://picsum.photos/id/109/4287/2392","https://picsum.photos/id/110/5000/3333","https://picsum.photos/id/111/4400/2656","https://picsum.photos/id/112/4200/2800","https://picsum.photos/id/113/4168/2464","https://picsum.photos/id/114/3264/2448","https://picsum.photos/id/115/1500/1000","https://picsum.photos/id/116/3504/2336","https://picsum.photos/id/117/1544/1024","https://picsum.photos/id/118/1500/1000","https://picsum.photos/id/119/3264/2176","https://picsum.photos/id/120/4928/3264","https://picsum.photos/id/121/1600/1067","https://picsum.photos/id/122/4147/2756",
    "https://picsum.photos/id/123/4928/3264","https://picsum.photos/id/124/3504/2336","https://picsum.photos/id/125/1500/1000","https://picsum.photos/id/126/4272/2511","https://picsum.photos/id/127/4032/2272","https://picsum.photos/id/128/3823/2549","https://picsum.photos/id/129/4910/3252","https://picsum.photos/id/130/3807/2538","https://picsum.photos/id/131/4698/3166","https://picsum.photos/id/132/1600/1066","https://picsum.photos/id/133/2742/1828","https://picsum.photos/id/134/4928/3264","https://picsum.photos/id/135/2560/1920","https://picsum.photos/id/136/4032/2272","https://picsum.photos/id/137/4752/3168","https://picsum.photos/id/139/3465/3008","https://picsum.photos/id/140/2448/2448","https://picsum.photos/id/141/2048/1365","https://picsum.photos/id/142/4272/2848","https://picsum.photos/id/143/3600/2385",
    "https://picsum.photos/id/144/4912/2760","https://picsum.photos/id/145/4288/2848",
    "https://picsum.photos/id/146/5000/3333","https://picsum.photos/id/147/2448/2448","https://picsum.photos/id/149/3454/2288","https://picsum.photos/id/151/4288/3216","https://picsum.photos/id/152/3888/2592","https://picsum.photos/id/153/4763/3155","https://picsum.photos/id/154/3264/2176","https://picsum.photos/id/155/3264/2176","https://picsum.photos/id/156/2177/3264","https://picsum.photos/id/157/5000/3914","https://picsum.photos/id/158/4836/3224","https://picsum.photos/id/159/5000/2460","https://picsum.photos/id/160/3200/2119","https://picsum.photos/id/161/4240/2832","https://picsum.photos/id/162/1500/998","https://picsum.photos/id/163/2000/1333","https://picsum.photos/id/164/1200/800","https://picsum.photos/id/165/2000/1333","https://picsum.photos/id/166/1280/720","https://picsum.photos/id/167/2896/1944","https://picsum.photos/id/168/1920/1280","https://picsum.photos/id/169/2500/1662",
    "https://picsum.photos/id/170/2500/1667","https://picsum.photos/id/171/2048/1536","https://picsum.photos/id/172/2000/1325","https://picsum.photos/id/173/1200/737","https://picsum.photos/id/174/1600/589","https://picsum.photos/id/175/2896/1944","https://picsum.photos/id/176/2500/1662","https://picsum.photos/id/177/2515/1830","https://picsum.photos/id/178/2592/1936","https://picsum.photos/id/179/2048/1365","https://picsum.photos/id/180/2400/1600","https://picsum.photos/id/181/1920/1189","https://picsum.photos/id/182/2896/1944","https://picsum.photos/id/183/2316/1544","https://picsum.photos/id/184/4288/2848","https://picsum.photos/id/185/3995/2662","https://picsum.photos/id/186/2048/1275","https://picsum.photos/id/187/4000/2667","https://picsum.photos/id/188/2896/1936","https://picsum.photos/id/189/2048/1536","https://picsum.photos/id/190/2048/1365","https://picsum.photos/id/191/2560/1707",
    "https://picsum.photos/id/192/2352/2352","https://picsum.photos/id/193/3578/2451","https://picsum.photos/id/194/2000/1325","https://picsum.photos/id/195/768/1024","https://picsum.photos/id/196/2048/1536","https://picsum.photos/id/197/4272/2848","https://picsum.photos/id/198/3456/2304","https://picsum.photos/id/199/2592/1728","https://picsum.photos/id/200/1920/1280","https://picsum.photos/id/201/5000/3333","https://picsum.photos/id/202/2392/1260",
    "https://picsum.photos/id/203/4032/3024","https://picsum.photos/id/204/5000/3333","https://picsum.photos/id/206/2880/1800"
];


const gameGrid = document.querySelector('.game-grid');
function initGame(){

    IMAGES.sort(()=>0.5 - Math.random());
    gameGrid.style = `--l: ${level}`
    var CELLS = [];
    gameGrid.innerHTML = "";
    for(var i=0;i<level*level/2;i++){
        const cell = document.createElement('div');
        const cell2 = document.createElement('div');
        cell.classList.add('cell');
        cell2.classList.add('cell');
        cell.setAttribute('data-id',i);
        cell2.setAttribute('data-id',i);
        const img = document.createElement("img");
        img.src = IMAGES[i];
        const img2 = document.createElement("img");
        img2.src = img.src;
        const d = document.createElement('div');
        const d2 = document.createElement('div');
        cell.appendChild(img);
        cell2.appendChild(img2);
        cell.appendChild(d);
        cell2.appendChild(d2);
        cell.addEventListener("click",handleCellClick);
        cell2.addEventListener("click",handleCellClick);
        CELLS.push(cell);
        CELLS.push(cell2);
    }
    CELLS.sort(()=>0.5-Math.random());
    CELLS.forEach(cell => gameGrid.appendChild(cell));
    const sandesh = setInterval(() => {
        if(gameStarted) time--;
        if(time<=0){
            clearInterval(sandesh);
            gameStarted = false;
            gameOver();
        }
        document.querySelector(".time").innerHTML = time;
    },1000);
}

function gameOver(){
    document.querySelector(".game-page").classList.add("hide");
    document.querySelector(".over-page").classList.remove("hide");
    score = level*level*(time+1)/move;
    score = score*100/(level*level*60/1);
    document.querySelector(".final-score").innerHTML = `${level*level} * ${time+1} / ${move} = ${score.toFixed(2)}`;
    document.querySelector(".final-move").innerHTML = move;
    document.querySelector(".final-time-left").innerHTML = time;
}

function handleCellClick(){
    gameStarted = true;
    if(!this.classList.contains('open')){
        if(selectedCell == null){
            selectedCell = this;
            this.classList.add('open');
        }else{
            if(selectedCell.getAttribute('data-id') == this.getAttribute('data-id')){
                this.classList.add('open');
                selectedCell = null;
                matched += 2;
            }else{
                this.classList.add('open');
                setTimeout(()=>{
                    this.classList.remove('open');
                    selectedCell.classList.remove('open');
                    selectedCell = null;
                },500);
            }
        }
        move++;
        document.querySelector(".move").innerHTML = move;
        if(matched==level*level){
            gameStarted = false;
            score = time*level*level/move;
            gameOver();
            
        }
    }
}

addEventListener("load",initGame);


document.querySelector(".start-btn").addEventListener("click",()=>{
    document.querySelector(".home-page").classList.add("hide");
    document.querySelector(".game-page").classList.remove("hide");
    level = document.querySelector("input[name='level']:checked").value || 4;
    score = 0;
    time = 60;
    move = 0;
    gameStarted = false;
    selectedCell = null;
    matched = 0;

    initGame();
})

document.querySelector(".restart-btn").addEventListener("click",()=>{
    document.querySelector(".over-page").classList.add("hide");
    document.querySelector(".game-page").classList.remove("hide");
    level = document.querySelector("input[name='level']:checked").value || 4;
    score = 0;
    time = 60;
    move = 0;
    gameStarted = false;
    selectedCell = null;
    matched = 0;
    initGame();
})

