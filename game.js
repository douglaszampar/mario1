const board = document.getElementById("board")
const frame = document.getElementById("questionFrame")

let currentCell = null

let questions = [
"questions/q1.html",
"questions/q2.html",
"questions/q3.html",
"questions/q4.html",
"questions/q5.html"
]

let usedQuestions = []

function randomQuestion(){

if(usedQuestions.length === questions.length){
usedQuestions=[]
}

let available = questions.filter(q=>!usedQuestions.includes(q))
let r = Math.floor(Math.random()*available.length)

let q = available[r]

usedQuestions.push(q)

return q

}

for(let i=0;i<9;i++){

const cell=document.createElement("div")
cell.className="cell"

cell.onclick=()=>{

if(cell.innerText!=="") return

currentCell=cell

frame.src=randomQuestion()

}

board.appendChild(cell)

}

function studentCorrect(){

currentCell.innerText="X"
checkWin()
}

function studentWrong(){

currentCell.innerText="O"
checkWin()
}

function checkWin(){

const cells=document.querySelectorAll(".cell")

const combos=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

combos.forEach(c=>{

let a=cells[c[0]].innerText
let b=cells[c[1]].innerText
let d=cells[c[2]].innerText

if(a!=="" && a===b && b===d){

setTimeout(()=>{
alert(a==="X" ? "Student Wins!" : "Teacher Wins!")
},100)

}

})

}

function resetGame(){

document.querySelectorAll(".cell").forEach(c=>{
c.innerText=""
})

frame.src=""

usedQuestions=[]

}
