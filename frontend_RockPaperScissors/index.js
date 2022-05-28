let interactedContainer = document.getElementById("interactedContainer")
let interactionContainer = document.getElementById("interactionContainer")
let userhandsimage = document.getElementById("userhandsImage")
let computerhandsimage = document.getElementById("computerHandsImage")
let gamestate = document.getElementById("gameState")
let score = 12
function randomNumber(){
    let random = Math.floor(Math.random() * 3) + 1
    if(random ===1){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/rock.png"   
    }
    else if(random === 2){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/paper.png"  
    }
    else if(random === 3){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/scissors.png"  
    }

}
function playAgain(){
    interactionContainer.style.display = "flex"
    interactedContainer.style.display = "none"
}
function paper(){
    let scoreboard = document.getElementById("scoreBoard")
interactedContainer.style.display = "flex"
interactionContainer.style.display = "none"
let userhandsimage = document.getElementById("userhandsImage").src = "assets/paper.png"
randomNumber()
if(computerhandsimage === "assets/paper.png"){
    score += 0
gamestate.textContent = "IT'S A TIE"
scoreboard.textContent = score
}
else if(computerhandsimage === "assets/rock.png"){
    score += 1
    gamestate.textContent = "YOU WIN!"
    scoreboard.textContent = score
}
else if(computerhandsimage === "assets/scissors.png"){
    score -= 1 
    gamestate.textContent = "YOU LOSE"
    scoreboard.textContent = score
}
}

function scissors(){
    let scoreboard = document.getElementById("scoreBoard")
    interactedContainer.style.display = "flex"
    interactionContainer.style.display = "none" 
    let userhandsimage = document.getElementById("userhandsImage").src = "assets/scissors.png" 
    randomNumber()
    if(computerhandsimage === "assets/paper.png"){
        score += 1
    gamestate.textContent = "YOU WIN!"
    scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/rock.png"){
        score -= 1
        gamestate.textContent = "YOU LOSE!"
        scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/scissors.png"){
        score += 0 
        gamestate.textContent = "IT'S A TIE"
        scoreboard.textContent = score
    }
}
function rock(){
    let scoreboard = document.getElementById("scoreBoard")
    interactedContainer.style.display = "flex"
    interactionContainer.style.display = "none"
    let userhandsimage = document.getElementById("userhandsImage").src = "assets/rock.png"
    randomNumber()
    if(computerhandsimage === "assets/paper.png"){
        score -= 1
    gamestate.textContent = "YOU LOSE"
    scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/rock.png"){
        score += 0
        gamestate.textContent = "IT'S A TIE"
        scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/scissors.png"){
        score += 1 
        gamestate.textContent = "YOU WIN!"
        scoreboard.textContent = score
    }
}