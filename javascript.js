newDiv = document.createElement('div');
newDiv.setAttribute('class', 'initialdiv');
lesserDiv = document.createElement('div');
lesserDiv.setAttribute('class', 'lesserdiv');

container = document.querySelector('.container');

function firstThis () {
    for (i = 0; i < 16; i++) {
        lesserDiv.appendChild(newDiv.cloneNode(true));
    }
}

function startingDivs () {
    for (let i = 0; i < 16; i++) {
            container.appendChild(lesserDiv.cloneNode(true));
        }
    }
firstThis();
startingDivs();