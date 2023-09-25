const frasesArray = [
    'Acredite nos seus sonhos e transforme-os em realidade',
    'Pequenos passos levam a grandes conquistas',
    'A jornada de mil quilômetros começa com um único passo',
    "A persistência é o caminho do sucesso.",
    "A maior jornada começa com um único passo.",
    "A luz que você procura está dentro de você.",
    "Pequenas ações podem ter grandes impactos.",
    "Cada dia é uma nova chance de ser melhor.",
    "O fracasso é apenas uma oportunidade para recomeçar de forma mais inteligente.",
    "A felicidade está nas coisas simples e nos momentos especiais.",
    "Quando você acredita em si mesmo, tudo se torna possível."
]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const textScreen = document.querySelector('.texto-bilhete')
const btnTry = document.querySelector('#imgStart')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)

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
