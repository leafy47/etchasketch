newDiv = document.createElement('div');
newDiv.setAttribute('class', 'initialdiv')

container = document.querySelector('.container');
container.appendChild(newDiv);

function startingDivs () {
    for (i = 0; i < 257; i++) {
        container.appendChild(newDiv);
    }
}
//startingDivs();