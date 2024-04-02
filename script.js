//List that stores names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput')
    const name = nameInput.value.trim()
    if (name !== '') {
        namesArray.push(name);
        displayNames();
        nameInput.value = '';
    } else {
        alert('Please enter a valid name.'); // tell the user to put in a name
    }
}

function displayNames() { 
    const nameList = document.getElementById('nameList') //shows the inputted names
    nameList.innerHTML = ''

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }
}

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //generate and select a random name from the list
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]

    randomNameDiv.textContent = randomName
    namesArray.splice(randomNumber, 1)

    displayNames();
    
}
   
document.getElementById('addNameBtn').addEventListener('click', addName) //runs the functions

document.getElementById('pickRandomBtn').addEventListener('click', function() {
    pickRandomName()
    updateRandomNameVisibility()
})

function updateRandomNameVisibility() {
    const element = document.getElementById('randomName')
    if (namesArray.length > 0) {
        element.classList.remove('d-none')
    } else {
        element.classList.add('d-none')
    }
}

function handleKeyPress(event) { //makes it so enter works to call the function
    if (event.keyCode === 13) {
        addName();
    }
}

var input = document.getElementById("nameInput");

input.addEventListener("keypress", handleKeyPress);
