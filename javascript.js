
// Selecting container storing 16x16 grid
const container = document.querySelector('.container');

// for loop to create columns 
for (let column = 1; column <= 16; column++) {
    // create outer div to each store 16 squares
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv')

    // for loop to create rows 
    for (let row = 1; row <= 16; row++ ) {
        let innerDiv = document.createElement('div');
        // Add class to newly created div 
        innerDiv.classList.add('innerDiv');
        // Add div to container
        outerDiv.appendChild(innerDiv);
    }
    container.appendChild(outerDiv);
}

// Add event Listenern to change div color when mouse hovers over it. 
container.addEventListener('mouseover', (event) => {
    const square = event.target;
    square.style.backgroundColor = 'black';
})