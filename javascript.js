
// Selecting container storing 16x16 grid
const container = document.querySelector('.container');

// for loop to create columns 
for (let column = 1; column <= 16; column++) {
    // create outer div to each store 16 squares
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv')
    
    // for loop to create rows 
    for (let row = 1; row <= 16; row++ ) {
        let createDiv = document.createElement('div');
        // Styling
        createDiv.classList.add('squares');
        createDiv.style.backgroundColor = "red";
        // Add div to container
        outerDiv.appendChild(createDiv);
    }
    container.appendChild(outerDiv);
}

