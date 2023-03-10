let historyList = document.querySelector("#historyList");
let playerScore = document.querySelector("#playerScore");
let botScore = document.querySelector("#botScore");
let newPlayerScore = 0;
let newBotScore = 0;

let rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click",rockFunc)
function rockFunc() {
    var userInput = 'Rock'; 
    var computerArr = ["Rock","Paper","Scissors"];
    var randomNum = Math.floor(Math.random() * 3) 
    var computerPick = computerArr[randomNum]; 
    let historyItem = document.createElement("li");

    if(userInput == "Rock" && computerPick =="Paper") {
        alert("The bot picked paper. You lose.")
        historyItem.textContent = "Rock vs. Paper";
        historyItem.style.color = "red";
        historyList.appendChild(historyItem);

        newBotScore++;
        botScore.textContent = newBotScore;


    } else if (userInput == "Rock" && computerPick == "Scissors") {
        alert("The bot picked scissors. You win!")
        historyItem.textContent = "Rock vs. Scissors";
        historyItem.style.color = "green";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

    } else if (userInput == "Rock" && computerPick == "Rock") {
        alert("The bot also picked rock. It's a tie.")
        historyItem.textContent = "Rock vs. Rock";
        historyList.appendChild(historyItem);
    }
}

let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click",paperFunc)
function paperFunc() {
    var userInput = 'Paper'; 
    var computerArr = ["Rock","Paper","Scissors"];
    var randomNum = Math.floor(Math.random() * 3) 
    var computerPick = computerArr[randomNum]; 
    let historyItem = document.createElement("li");

    if(userInput == "Paper" && computerPick =="Scissors") {
        alert("The bot picked scissors. You lose.")
        historyItem.textContent = "Paper vs. Scissors";
        historyItem.style.color = "red";
        historyList.appendChild(historyItem);

        newBotScore++;
        botScore.textContent = newBotScore;


    } else if (userInput == "Paper" && computerPick == "Rock") {
        alert("The bot picked rock. You win!")
        historyItem.textContent = "Paper vs. Rock";
        historyItem.style.color = "green";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

    } else if (userInput == "Paper" && computerPick == "Paper") {
        alert("The bot also picked paper. It's a tie.")
        historyItem.textContent = "Paper vs. Paper";
        historyList.appendChild(historyItem);
    }
}


let scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click",scissorsFunc)
function scissorsFunc() {
    var userInput = 'Scissors'; 
    var computerArr = ["Rock","Paper","Scissors"];
    var randomNum = Math.floor(Math.random() * 3) 
    var computerPick = computerArr[randomNum]; 
    let historyItem = document.createElement("li");

    if(userInput == "Scissors" && computerPick =="Rock") {
        alert("The bot picked rock. You lose.")
        historyItem.textContent = "Scissors vs. Rock";
        historyItem.style.color = "red";
        historyList.appendChild(historyItem);

        newBotScore++;
        botScore.textContent = newBotScore;


    } else if (userInput == "Scissors" && computerPick == "Paper") {
        alert("The bot picked paper. You win!")
        historyItem.textContent = "Scissors vs. Paper";
        historyItem.style.color = "green";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

    } else if (userInput == "Scissors" && computerPick == "Scissors") {
        alert("The bot also picked scissors. It's a tie.")
        historyItem.textContent = "Scissors vs. Scissors";
        historyList.appendChild(historyItem);
    }
}
