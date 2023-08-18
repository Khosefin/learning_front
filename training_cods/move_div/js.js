const moraba = document.getElementById("moraba");
window.addEventListener("keydown", move);
let y = 0;
let x = 0;

function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      moraba.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 5;
      moraba.style.top = y + "px";
      break;
    case "ArrowLeft":
      x -= 5;
      moraba.style.left = x + "px";
      break;
    case "ArrowRight":
      x += 5;
      moraba.style.left = x + "px";
      break;
  }
}
