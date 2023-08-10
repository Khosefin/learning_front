answer = Math.floor(Math.random() * 10 + 1)
guesses = 0;

document.getElementById('submit').onclick = function () {

  guess = document.getElementById('input').value
  guesses +=1

  if (guess == answer) {
    answer = Math.floor(Math.random() * 10 + 1)
    document.getElementById('answer').innerHTML = "good job!!! make a guess again"
  } else if (guess > answer) {
    document.getElementById('answer').innerHTML = "to big !!!"
  } else if (guess < answer) {
    document.getElementById('answer').innerHTML = "to small !!!"
  }
  document.getElementById('input').value = ''
  return answer;
}