
let color = 'black'
let click = true

function createGrid(gridSize) {    
    const container = document.querySelector('.gridContainer')
    const squares = document.querySelectorAll('.squareDiv')
    squares.forEach(square => square.remove())
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
   

    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'transparent';
        square.classList.add('squareDiv')
        container.insertAdjacentElement('beforeend', square);
    }
}

createGrid(16);

function changeSize (input){
    if (input >= 2 || input <= 100) {
        createGrid(input)
    }
    else {
        alert('error')
    }
}

function colorSquare () {
if (click === true)    {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
}
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    const squares = document.querySelectorAll('.squareDiv')
    squares.forEach(square => square.style.backgroundColor = 'transparent')
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring'
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring'
        } 
    }
})

