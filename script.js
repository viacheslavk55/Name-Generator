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


document.getElementById('addNameBtn').addEventListener('click', addName)
