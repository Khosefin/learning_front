let word = window.prompt('enter your word')

let charactersArrey = word.split('')
let reversCharacters = charactersArrey.reverse()
let reversWord = reversCharacters.join('')

if (word === reversWord) {
  alert ("کلمه ی وارد شده از دو طرف به یک صورت خوانده میشود !")
} else {
  alert('کلمه ی نوشته شده از دو طرف بب یک صورت خوانده نمیشود !')
}