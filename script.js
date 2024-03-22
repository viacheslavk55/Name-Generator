//List that stores names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput')
    const name = nameInput.value.trim()
    namesArray.push(name)
    displayNames()
    nameInput.value = ''
}
