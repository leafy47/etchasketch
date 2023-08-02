newDiv = document.createElement('div');
newDiv.setAttribute('class', 'initialdiv');
lesserDiv = document.createElement('div');
lesserDiv.setAttribute('class', 'lesserdiv');
let userInput = document.getElementById('resetform');
let reset = document.getElementById('resetone');
container = document.querySelector('.container');

function createGrid (i) {
    for (; i > 0; i--) {
        container.appendChild(lesserDiv.cloneNode(true));
    }
}
function createSquares () {
    lesser = document.querySelectorAll('.lesserdiv');
    for (i = 0; i < lesser.length ; i++) {
        for(z = 0; z < lesser.length; z++) {
            lesser[i].appendChild(newDiv.cloneNode(true));
        }
    }
}


createGrid(16);
createSquares();
turn();

function turn () {
    turnBlue = document.querySelectorAll('.initialdiv');
    turnBlue.forEach((div) => {
        div.addEventListener('mouseover', () => div.style.backgroundColor = getRandomColor())
    });
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    removeDiv();
    createGrid(reset.value);
    createSquares();
    turn();
});



function removeDiv () {
    let countone = document.getElementsByClassName('initialdiv');
    let counttwo = document.getElementsByClassName('lesserdiv');
    for (i = 0; i < counttwo.length; i++){
        while (counttwo[i].firstChild) {
            counttwo[i].removeChild(counttwo[i].lastChild);
    }}
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

