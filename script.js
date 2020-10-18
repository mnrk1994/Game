import {update as updateSnake, draw as drawSnake, SnakeSpeed,getSnakeHead,snakeInterSection } from './snake.js'

import{update as UpdateFood , draw as drawFood } from './food.js'
let lastRenderedTime = 0
let gameOver= false
const gameBoard = document.getElementById('game-board');
import {outsideGrid} from './grid.js'



function main(currentTime) {
    if (gameOver) {
        return alert(`YOU LOOSE!`);
        
    }


    window.requestAnimationFrame(main);
    const secondsSinceLastRendered = (currentTime - lastRenderedTime) / 1000;
    if (secondsSinceLastRendered < 1 / SnakeSpeed) return;

    
    console.log("Rendered");
    lastRenderedTime = currentTime;

    update()
    draw()
    
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    UpdateFood();
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver= outsideGrid(getSnakeHead())|| snakeInterSection()
}