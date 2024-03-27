//List that stores names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput')
    const name = nameInput.value.trim()
    namesArray.push(name)
    displayNames()
    nameInput.value = ''
}

function displayNames() {
    const nameList = document.getElementById('nameList')
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
    const element = document.getElementById('randomName');
    element.classList.remove('d-none');
}
if (pickRandomName === 0) {
    const element = document.getElementById('randomName');
    element.classList.add('d-none');
}

document.getElementById('addNameBtn').addEventListener('click', addName)

document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)