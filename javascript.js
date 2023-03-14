// Selecting container storing 16x16 grid
const container = document.querySelector('.container');
// Selecting for grid size button
const gridSize = document.querySelector('.gridSize');
// Selecting for grid lines button
const gridLineButton = document.getElementById('line');
// Selecting for Eraser button
const eraserButton = document.querySelector('.eraserButton');
// Selecting for Black Pain Brush Button
const blackBrushButton = document.querySelector('.blackBrushButton');
// Selecting for rainbow paint brush button 
const rainbowBrushButton = document.querySelector('.rainbowBrushButton');
// Selecting for clear board button 
const clearSketchButton = document.querySelector('.clearSketchButton');

// Function to handle square color change
function paintBrush(event) {
    let square = event.target;
    if (square.className === 'innerDiv') {
        square.style.backgroundColor = 'black';
    }
}

// Function to clear Container 
function clearGrid() {
    container.innerHTML = '';
}

// function to generate desired grid size + add event listener
function gridSizeGenerator(gridNumber) {
    clearGrid();
    // for loop to generate grid of desired number. 
    for (let column = 0; column < gridNumber; column++) {
        // create outer div to each store 16 squares
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('outerDiv')
    
        // for loop to create rows 
        for (let row = 0; row < gridNumber; row++ ) {
            let innerDiv = document.createElement('div');
            // Add class to newly created div 
            innerDiv.classList.add('innerDiv');
            // Add div to container
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }

    // Change event listener to change square color to black on mouse over. 
    container.removeEventListener('mouseover', paintBrush);
    container.addEventListener('mouseover', paintBrush);
}

// Default view set to a 16x16 grid
gridSizeGenerator(16);

// Ask user for their desired grid size + regenerate grid 
gridSize.addEventListener('click', ()=> {
    let gridNumber;
    // check if gridNumber is a valid value
    do {
        gridNumber = prompt("What is your desired sketchpad size? Enter a value from 0 - 100");
        Number(gridNumber);
    }
    while(gridNumber > 100 || gridNumber <= 0 || isNaN(gridNumber));

    gridSizeGenerator(gridNumber);
})


// Toggling Grid Line ON and OFF 
// Function to toggle grid line OFF 
function gridLineOff() {
    let squares = document.querySelectorAll('.innerDiv');

   squares.forEach((square) => {
    square.style.border = 'none';
   });  
}

// Function to toggle grid line ON
function gridLineON() {
    let squares = document.querySelectorAll('.innerDiv');

   squares.forEach((square) => {
    square.style.border = '1px solid rgb(233, 217, 212, .5)';
   });  
}

// Function that executes when gridLineButton is pushed
function gridLine() {
    if(gridLineButton.value === 'OFF') {
        gridLineOff();
        gridLineButton.value = 'ON';
    }
    else if (gridLineButton.value ==="ON") {
        gridLineON();
        gridLineButton.value = 'OFF'
    }
}

// Function to Erase 
function eraserBrush() {
    container.addEventListener('mouseover', (event) => {
        let square = event.target;
        if (square.className === 'innerDiv') {
        square.style.backgroundColor = '#FEFCFF';
        }
    });  
}

eraserButton.addEventListener('click', eraserBrush);


// Function to change back to black paint brush
function blackBrush() {
    container.addEventListener('mouseover', (event) => {
        let square = event.target;
        if (square.className === 'innerDiv') {
        square.style.backgroundColor = 'black';
        }
    });  
}

blackBrushButton.addEventListener('click', blackBrush);

// Function to change to rainbow colored pant brush 
// Function to randomize rainbow color selector 
function rainbowColorSelector() {
    let numberGenerator = Math.floor(Math.random()*8);

    let color;
    if (numberGenerator === 0) {
        color = 'red';
    }
    else if (numberGenerator === 1) {
        color = 'orange';
    }
    else if (numberGenerator === 2) {
        color = 'yellow';
    }
    else if (numberGenerator === 3) {
        color = 'green';
    }
    else if (numberGenerator === 4) {
        color = 'blue';
    }
    else if (numberGenerator === 5) {
        color = 'indigo';
    }
    else {
        color = 'violet';
    }
    return color;
}

function rainbowBrush() {
    container.addEventListener('mouseover', (event) => {
        let square = event.target;
        if (square.className === 'innerDiv') {
            let randomColor = rainbowColorSelector();
        square.style.backgroundColor = randomColor;
        }
    });  
}

rainbowBrushButton.addEventListener('click', rainbowBrush);


// Clear board 
clearSketchButton.addEventListener('click', () => {
    let squares = document.querySelectorAll('.innerDiv');

    squares.forEach((square) => {
     square.style.backgroundColor = '#FEFCFF';
    }); 
})