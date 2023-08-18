let cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "q", "k"];

function shuffle(arrey) {
  let currentIndex = arrey.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * arrey.length);
    currentIndex -= 1;
    let temp = arrey[currentIndex];
    arrey[currentIndex] = arrey[randomIndex];
    arrey[randomIndex] = temp;
  }
}

shuffle(cards);

console.log(cards);
