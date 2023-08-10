let score;
document.getElementById("submit").onclick = function () {
  score = document.getElementById("input").value;

  switch (true) {
    case score >= 90:
      document.getElementById("Type").innerHTML = "You did Great !!!";
      break;
    case score >= 80:
      document.getElementById("Type").innerHTML = "You did good !!!";
      break;
    case score >= 60:
      document.getElementById("Type").innerHTML = "Not bad !!!";
      break;
    case score >= 50:
      document.getElementById("Type").innerHTML = "You passed ... barely !!!";
      break;
    case score >= 0:
      document.getElementById("Type").innerHTML = "OOPS! You failed !!!";
      break;
    default:
      document.getElementById("Type").innerHTML = "incorrect input :(";
  }
};
