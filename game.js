const board = document.getElementById("board")
const frame = document.getElementById("questionFrame")

let currentCell = null

const questions = [
"questions/q1.html",
"questions/q2.html",
"questions/q3.html",
"questions/q4.html",
"questions/q5.html"
]

function randomQuestion(){

const r = Math.floor(Math.random()*questions.length)
return questions[r]

}

for(let i=0;i<9;i++){

const cell = document.createElement("div")
cell.className="cell"

cell.onclick = ()=>{

if(cell.innerText !== "") return

currentCell = cell

frame.src = randomQuestion()

}

board.appendChild(cell)

}

function studentCorrect(){

currentCell.innerText="X"

}

function studentWrong(){

currentCell.innerText="O"

}
