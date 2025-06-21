var Size = 10;
var blackMode = false;
function populateGrid(){
    let grid = document.querySelector('.grid-container');
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${Size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${Size} , 1fr)`;
    
    for(let i = 0; i < Size * Size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    enableDrawing();
}

function enableDrawing() {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.addEventListener('mouseover' , () => {
            isDrawing = true;
            cell.style.background = blackMode ? '#000' : getRandomColor();
        });     
    });

    document.querySelector('.grid-container').addEventListener('mouseleave', () => {
        isDrawing = false;
    });
}

function getRandomColor() {

    var letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('.reset-btn').addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.style.background = '#fff';
  });
});


populateGrid();

function sizeGrid(){
    let input = prompt("Enter a number between 1 and 100:");
    if (input === null) return;

    while (isNaN(input) || input === "" || input > 100) {
        input = prompt("Enter a number between 1 and 100:");
        if (input === null) return;
    }

    const number = Number(input);
    Size = number;
    populateGrid();
}

const size_btn = document.querySelector('.size-btn');
size_btn.addEventListener('click', sizeGrid);

const color_change_button = document.querySelector('.color');
color_change_button.addEventListener('click', () => {
    if(blackMode == false){
        blackMode = true;
    }
    else{
        blackMode = false;
    }
})

