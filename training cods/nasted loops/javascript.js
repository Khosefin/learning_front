let symbol = window.prompt('enter the symbol :')
let columns = window.prompt('enter the culoms :')
let rows = window.prompt('enter the rows :')


for (let i = 1; i <= rows; i+=1) {
  for (let j = 1; j <= columns; j+=1) {
    document.getElementById("column").innerHTML += symbol
  }
  document.getElementById("column").innerHTML += "<br>"
}