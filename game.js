const buttons = document.querySelectorAll("button");

const results = ["✊", "✋", "✌️"];

const eq = {
    "rock": "✊",
    "paper": "✋",
    "scissors":  "✌"
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let pcWins = 0, playerWins = 0;

function play(e) {
    
    const res = document.querySelector("#results");
    
    const playerPick = e.target.classList.value;
    const pcPick = results[getRandomInt(3)];

    if((playerPick === "rock" && pcPick ==="✊") || (playerPick ==="scissors" && pcPick==="✌️") || (playerPick === "paper" && pcPick === "✋") ){
        res.innerText = eq[playerPick] + " vs " + pcPick +" = DRAW";  
    }
    else if((playerPick === "rock" && pcPick === "✌️") || (playerPick ==="scissors" && pcPick==="✋") || (playerPick === "paper" && pcPick === "✊")){
        playerWins++;
        res.innerText = eq[playerPick] + " vs " + pcPick +" = PLAYER WINS!";  
    }
    else {
        pcWins++;
        res.innerText = eq[playerPick] + " vs " + pcPick +" = PC WINS!";  
    }

    const wins = document.querySelector("#wins");
    wins.innerText = "👨‍💻 Player wins: " + playerWins + " 👨‍💻 🤖 PC wins: " + pcWins + "🤖"; 
}

buttons.forEach(button => button.addEventListener('click', play));


function endOfTransition(e){
    e.target.classList.remove("transform");
}

buttons.forEach(button => button.addEventListener("transitionend", endOfTransition));

