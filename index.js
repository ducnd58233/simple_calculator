const buttons = document.getElementsByClassName("btn")
const result = document.getElementById("result")

for (let button of buttons) {
    button.addEventListener('click',function() {
        console.log(button)
        result.innerHTML += this.value
    })
}

function equal() {
    let res = result.innerHTML
    let output = eval(res)
    result.innerHTML = output
}

function clean() {
    result.innerHTML = " "
}

function undo() {
    let res = result.innerHTML
    result.innerHTML = res.substring(0, res.length - 1)
}