/*
----- To Do -----
1. Make a funciton that checks a score
1. For tic tac toe we will create a grid from an array.
 In the array we will give them an id

Box: { position: index, letter}
*/

window.addEventListener("DOMContentLoaded", () => {
let currentTurn = 0;

function currentScore(scoreFunction) {
  return function(currentScore) {
      scoreFunction.apply(null,currentScore);
 };
}
let boardParentDiv = document.getElementById('board');
const scoreArray = currentScore(function(scoreBoard){

 const score = arguments;
 if(score[0] === 'x' && score[1] === 'x' && score[2] === 'x'|| score[0] === 'o' && score[1] === 'o' && score[2] === 'o') {
     alert(`${score[0]} has won`)
 }
  else if(score[3]=== 'x' && score[4] === 'x' && score[5] === 'x' || score[3] === 'o' && score[4] === 'o' && score[5] === 'o') {
     alert(`${score[3]} has won`)
 }
  else if(score[6] === 'x'&& score[7] === 'x'&& score[8] === 'x' || score[6] === 'o' && score[7] === 'o' && score[8] === 'o') {
     alert(`${score[6]} has won`)
 }
  else if(score[0] === 'x'&& score[4] === 'x'&& score[8] === 'x' || score[0] === 'o' && score[4] === 'o' && score[8] === 'o') {
     alert(`${score[0]} has won`)
 }
   else if(score[6] === 'x'&& score[4] === 'x'&& score[2] === 'x' || score[6] === 'o' && score[4] === 'o' && score[2] === 'o') {
     alert(`${score[6]} has won`)
 }
  else if(score[0] === 'x'&& score[3] === 'x'&& score[6] === 'x' || score[0] === 'o' && score[3] === 'o' && score[6] === 'o') {
     alert(`${score[0]} has won`)
 }
  else if(score[1] === 'x'&& score[4] === 'x' && score[7] === 'x' || score[1] === 'o' && score[4] === 'o' && score[7] === 'o') {
     alert(`${score[0]} has won`)
 }
  else if(score[2] === 'x'&& score[5] === 'x'&& score[8] === 'x' || score[2] === 'o' && score[5] === 'o' && score[8] === 'o') {
      alert(`${score[0]} has won`)
 }
 else {
     console.log('nothing yet')
 }
})
const scoreKeeper = newBoard(9);

function newBoard(length) {
 return new Array(length)
}
function boardMaker(board) {
 return function(boardMaker) {
     board.call(null, boardMaker);
 }
}
const gameInit = boardMaker(function(gameBoard = [9, {currentTurn: 'x', nextTurn:'o'}, {winner: false, which: 'x'}]) {  
 return makeBoard(newBoard(gameBoard[0]));
})
gameInit()

function makeBoard(array) {
 let board = []
 for (let index = 0; index < array.length; index++) {
     const tileData = { position: index, letter: null };
     board.push(tileData)
    let tile = document.createElement('div');
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrap')
    tile.setAttribute('id', index)
    tile.classList.add(`board__tile`, `board__tile--${index}`);
    for(let cubeEffectIndex = 0; cubeEffectIndex < 6; cubeEffectIndex++) {
    let front = document.createElement('div');
    let back = document.createElement('div');
    let right = document.createElement('div');
    let left = document.createElement('div');
    let bottom = document.createElement('div');
    let top = document.createElement('div');
    front.classList.add('board__tile--cube', 'board__tile--cube--back')
    front.style['background-color'] = 'red'
    back.classList.add('board__tile--cube','board__tile--cube--right')
    back.style['background-color'] = 'blue'
    right.classList.add('board__tile--cube','board__tile--cube--left');
    right.style['background-color'] = 'yellow';  
    left.classList.add('board__tile--cube','board__tile--cube--front');
    front.style.opacity = 0.2
    bottom.classList.add('board__tile--cube','board__tile--cube--bottom');
    bottom.style['background-color'] = 'green';
    top.classList.add('board__tile--cube','board__tile--cube--top')
    top.style['background-color'] = 'orange';
    tile.appendChild(front)
    tile.appendChild(back)
    tile.appendChild(right)
    tile.appendChild(left)
    tile.appendChild(bottom)
    tile.appendChild(top)
 
    }
    tile.addEventListener("click", function(){
    doIt(tileData);
})
     boardParentDiv.appendChild(wrapper)
     wrapper.appendChild(tile)
 }
}
function doIt(data) {
 if(data.letter) {
  return alert(`Tile already used`)
 }
 let ticOrToeValue = currentTurn % 2 === 0 ? 'x':'o';
 scoreKeeper.splice(data.position, 1, ticOrToeValue);
 let tile = document.getElementById(data.position);
 let textContainer = document.createElement('div');
 textContainer.classList.add('text')
 let tileValue = document.createTextNode(ticOrToeValue);
 textContainer.appendChild(tileValue)
 tile.appendChild(textContainer);
 scoreArray(scoreKeeper);
 currentTurn += 1;
 data.letter = ticOrToeValue;

}
})