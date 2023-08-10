let A;
let B;
let c;
document.getElementById("submitButton").onclick = function () {
   A = document.getElementById("aTextBox").value;
   A = Number(A);

   B = document.getElementById("bTextBox").value;
   B = Number(B);

   c = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));

   document.getElementById("cTextBox").innerHTML = "Side C :"+ c;
}