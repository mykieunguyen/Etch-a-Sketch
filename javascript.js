
// Selecting container storing 16x16 grid
const container = document.querySelector('.container');

// for loop to create columns 
for (let column = 1; column <= 16; column++) {

    // for loop to create rows 
    for (let row = 1; row <= 16; row++ ) {
        let createDiv = document.createElement('div');
        createDiv.textContent = 'hello';
        createDiv.style.backgroundColor = "red";
        container.appendChild(createDiv);
    }
}

