const frasesArray = [
    "Você ainda vai namorar com a Swelyn Linda da Mota"
]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const textScreen = document.querySelector('.texto-bilhete')
const btnTry = document.querySelector('#imgStart')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 1)

btnTry.addEventListener('click', handleTryClick)

function handleTryClick(event) {
    event.preventDefault()
    toggleScreen()
    document.querySelector(".texto-bilhete p").innerText = frasesArray[Math.round(Math.random() * 10)]
    toggleText()
}


function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function toggleText() {
    textScreen.classList.toggle('active')
    textScreen.classList.toggle('active')
}
