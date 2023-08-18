document.getElementById("submit").onclick = function () {
  if (document.getElementById("checkB").checked === true) {
    document.getElementById("result").innerHTML = "You are followed !";
  } else if (document.getElementById("checkB").checked === false) {
    document.getElementById("result").innerHTML = "You are not followed !";
  }
};

document.getElementById("submit2").onclick = function () {
  const melat = document.getElementById("melatB");
  const meli = document.getElementById("meliB");
  const tejarat = document.getElementById("tejaratB");
  const sepah = document.getElementById("sepahB");

  if (melat.checked) {
    document.getElementById("result2").innerHTML =
      "You are Pating with melat bank !";
  } else if (meli.checked) {
    document.getElementById("result2").innerHTML =
      "You are Pating with meli bank !";
  } else if (tejarat.checked) {
    document.getElementById("result2").innerHTML =
      "You are Pating with tejarat bank !";
  } else if (sepah.checked) {
    document.getElementById("result2").innerHTML =
      "You are Pating with sepah bank !";
  }
};
