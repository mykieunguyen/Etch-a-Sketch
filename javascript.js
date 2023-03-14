// Selecting container storing 16x16 grid
const container = document.querySelector('.container');
// Selecting for grid size button
const gridSize = document.querySelector('.gridSize');

// Function to handle square color change
function paintBrush(event) {
    const square = event.target;
    square.style.backgroundColor = 'black';
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
    while(gridNumber > 100 || gridNumber < 0 || isNaN(gridNumber));

    gridSizeGenerator(gridNumber);
})

