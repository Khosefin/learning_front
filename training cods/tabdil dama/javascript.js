let temp;
document.getElementById('submit').onclick = function () {
  if (document.getElementById('farenhait').checked) {
    temp = document.getElementById('input').value
    temp = Number(temp)
    temp = temp - 32 * (5/9)
    document.getElementById('result').innerHTML = `dama is ${temp} farenhait`
  } else if (document.getElementById('celcius').checked) {
    temp = document.getElementById('input').value
    temp = Number(temp)
    temp = temp * (9/5) + 32
    document.getElementById('result').innerHTML = `dama is ${temp} celcius`
  }
  document.getElementById('input').value = ''
  return temp;
}

