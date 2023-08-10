let Count = 0;

document.getElementById("decrease").onclick = function () {
  Count -= 1;
  document.getElementById("Num").innerHTML = Count;
};
document.getElementById("reset").onclick = function () {
  Count = 0;
  document.getElementById("Num").innerHTML = Count;
};
document.getElementById("increase").onclick = function () {
  Count += 1;
  document.getElementById("Num").innerHTML = Count;
};
